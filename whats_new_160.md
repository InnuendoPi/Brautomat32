# Adaptive PID Engine in Brautomat32

## Goal and Reading Order

This document explains the **current** PID engine so that a technically interested homebrewer can understand the control behavior at kettle level: what the engine measures, how it decides, why it behaves the way it does in practice, and which tuning levers are useful.

The order is intentional:

1. First, the current engine with all terms and parameters.
2. Then, a comparison with the old logic (1.59.10) and its oscillation-based tuning approach.

This prevents terms from appearing "out of nowhere."

## 0) Sync check against current codebase (v1.60.3)

This document revision was checked against the current firmware state (`version.json` = 1.60.3). Key confirmations:

- `INNU_APID::Compute()` still follows the described sequence: mode check, boil bypass, enzyme limiter, ramping/coasting, PID core, anti-windup/limits.
- The implementation uses internal variable name `thresOutput`; UI/document wording often uses `thresOut`. Both refer to the same fixed boil output concept.
- AutoTune still uses commit-protected start via `WAIT_HEAT_COMMIT` and derives recommendations via `RecalculatePIDFromLR(...)` from `L/R`.
- FSM states/events are present in current `InnuTasks`; queue prioritization (stop to front) and `TEMP_TICK` coalescing are actively implemented.

So the technical description remains aligned with code; practical extension proposals for brewers are added below.

## 1) Current PID Engine (current state)

### 1.1 Core idea of the current engine

The current controller is not a single "bare" PID block. It is a **multi-stage heating strategy**. The PID core is still central, but it is surrounded by upstream control logic:

- Boil region with fixed output (`thresTemp`/`thresOut`)
- Heat-up phase for fast ramping
- Enzyme limiter for gentler ramp rates in the enzyme window
- Ramping and coasting for controlled setpoint approach
- Phase-dependent PID behavior plus anti-windup

The goal is to combine speed and stability: fast when far away from target, controlled when close to target.

### 1.2 Terms used later

#### Setpoint, measured value, output

The **setpoint** is the target temperature of the current mash step. The **measured value** is the sensor temperature. From this, the engine calculates an **output power in percent** (0 to 100), which is then mapped to IDS commands, relay PWM, or webhook switching depending on actuator path.

#### `P`, `I`, `D`

The control core still consists of three components:

- **P term** reacts directly to current control error.
- **I term** corrects residual offset over time.
- **D term** dampens response by considering change dynamics.

In the current engine, these terms are not applied rigidly. They are scaled by phase and operating situation.

#### `L` and `R` (model-based plant description)

Current AutoTune uses two plant parameters:

- **`L`**: time until stable heating effect is visible at the sensor (dead-time/delay behavior).
- **`R`**: temperature rise rate in the heating region, in °C/s.

These values describe kettle thermal behavior and form the basis for recommended controller parameters.

#### Enzyme window and **enzyme limiter**

The enzyme window is a configured temperature range (typically around 50 to 75 °C). In this range, mash should not pass through at maximum heating slope.

The **enzyme limiter** is an additional output cap: PID may still compute internally, but effective output is limited in the enzyme window. The cap is dynamic and depends on `R`, current slope, and tuning factor.

#### **Ramping**

Ramping means the engine uses an internal **active setpoint** that approaches the external target step by step. Instead of a hard jump to final target, the target trajectory is shaped in controlled increments.

#### **Coasting**

Coasting is the final glide phase near target. The controller deliberately reduces aggressiveness early so thermal inertia carries the last part of approach, reducing overshoot.

#### `sa` and `psa`

- **`sa`** (`sampleTime`): PID compute interval.
- **`psa`** (`powerSampleTime`): window used to convert percent output into concrete on/off timing.

In the current AutoTune flow, both are adapted to actuator type and plant behavior.

#### `thresTemp` and `thresOut`

Above `thresTemp`, the engine can move into boil-mode behavior and use a fixed output `thresOut` instead of PID. This improves boil-phase repeatability.

### 1.3 What practically happens in `Compute()`

The compute flow follows a clear sequence:

1. **Mode check**: control runs only in `AUTOMATIC`.
2. **Boil logic**: if boil conditions are met, `thresOut` is applied directly.
3. **Heat-up outside enzyme window**: large error may allow full power.
4. **Enzyme limiter**: effective `outMax` is reduced inside enzyme range.
5. **Ramping/coasting**: active setpoint is adjusted.
6. **PID computation**: P/I/D with phase-dependent scaling.
7. **Anti-windup and limits**: integrator and output are constrained safely.

Important: enzyme limiter, ramping, and coasting are not cosmetic. They are real guidance mechanisms around the PID core.

### 1.4 AutoTune in the current engine (L/R-based)

AutoTune is state-driven and robust, not a blind one-shot measurement:

1. **Start and commit protection (`WAIT_HEAT_COMMIT`)**  
   Measurement starts only after heating is actually committed. For IDS, this means real power frames; for relay/webhook, real switching state.
2. **`L` measurement via trend criterion**  
   `L` is not detected by a single threshold crossing but by stable positive temperature trend (with minimum-ΔT fallback).
3. **`R` measurement via linear fit**  
   `R` is estimated over a time window using linear regression, with early nonlinearity skipped and convergence/plausibility checks applied.
4. **Recommended values derived from `L`/`R`**  
   `Kp`, `Ki`, `Kd`, `sa`, `psa`, `thresOut`, and heat-up window are derived from measured plant behavior.

### 1.5 How the engine derives `P/I/D` from `L` and `R`

In `RecalculatePIDFromLR(...)`, concrete controller values are derived from plant model parameters. Inputs include:

- system class (fast/normal/slow) from `R`
- actuator path (IDS vs relay/webhook) for suitable timing windows
- volume-dependent adaptation
- tuning factor as behavior style parameter

Discrete controller values are derived from continuous values and then adapted to selected sampling time (`sa`). This aligns the controller with real runtime timing instead of static table values.

### 1.6 Tuning factor in detail

The tuning factor does **not** change measured plant physics (`L` and `R`). It changes control style:

- lower value: more conservative, earlier braking, lower effective aggressiveness
- higher value: later braking, stronger drive, narrower stability margin

Technically it acts on multiple layers simultaneously:

- transition zones between heat-up, approach, and coasting
- effective P/I/D strength
- enzyme limiter bounds
- ramping dynamics

That is why the same kettle can feel very different at different tuning factors even with identical `L/R` model values.

Internally, current engine behavior includes multi-level scaling:

- PID synthesis uses `alpha` (`alpha = 3.0 - 0.75 * tuneFactor`, clamped to 1.0...3.0).  
  Lower tuning factor means larger `alpha` and more conservative behavior; higher tuning factor means smaller `alpha` and more direct behavior.
- I-term gets additional scaling via `betaIScale` (`betaIScale = 1.0 + tuneFactor/8.0`, capped).  
  This changes not only speed but also how strongly residual error is corrected.
- D-style also includes tuning factor (`dFactorStyle = 0.7 + 0.3 * tuneFactor`).  
  This shifts damping style from calmer to more dynamic without destabilizing the loop.
- Guidance logic is affected in parallel (ramping, coasting, enzyme limiter).  
  In practice, not only PID math changes - the full temperature trajectory style changes.

For users, tuning factor is usually the most effective fine-tuning lever before touching raw `P`, `I`, or `D` directly.

### 1.7 Practical guideline for brew day

For repeatable results, this sequence is recommended:

1. Run AutoTune with realistic volume and real circulation conditions.
2. Check plausibility of `L`, `R`, `sa`, `psa`, and `thresOut`.
3. Adjust tuning factor first.
4. Change `P/I/D` manually only in small isolated steps.

Most problems are not "wrong math" but wrong boundary conditions: unrealistically low tuning volume, different pump state than in real brew operation, or too many parameter changes at once.

### 1.8 Practical brew-day guide (directly usable)

This section is meant as an operating guide, not theory.

#### How to use this section

1. Pick the matching symptom from the matrix below.
2. Apply only the **first action** and observe for at least one rest or heat-up segment.
3. Only if the symptom remains, apply the **second action**.
4. Change only **one** control lever at a time (otherwise root cause stays unclear).

#### 2-minute pre-start check

- Volume matches AutoTune conditions (target: within about +/-10%).
- Pump/stirrer state is the same as during AutoTune.
- Sensor values are plausible (no jumps, no obvious outliers).
- No plan to change multiple parameters in parallel for this brew.

#### Starter profiles by setup (first run)

| Setup | Starting point | First safe correction |
| --- | --- | --- |
| 20-30 L, strong circulation, IDS | Keep AutoTune values + medium tuning factor | If overshoot occurs, lower tuning factor slightly first |
| 40-60 L, relay/PWM, medium inertia | Keep AutoTune values + medium to slightly defensive tuning factor | If heat-up is too slow, raise tuning factor in small steps |
| HLT / slow thermal system | AutoTune values + more defensive tuning factor | If hold oscillates, lower tuning factor slightly before touching `P/I/D` |

#### Symptom -> action matrix (brew operation)

| Symptom | Likely cause | First action | Second action |
| --- | --- | --- | --- |
| Overshoot > 0.5 K in enzyme range | Loop too aggressive or real inertia higher than tuning run | Lower tuning factor slightly | Review enzyme window/coasting, then fine-adjust `P/I/D` only if needed |
| Heat-up clearly too slow | Over-defensive style or changed circulation/volume | Verify circulation and volume realism | Increase tuning factor moderately |
| Rest hold is unstable (constant corrections) | Sensor placement/flow issue, implausible `sa`/`psa` | Check sensor location and mixing, validate `sa`/`psa` | Only then do small `I` correction |
| Calm start, then oscillation near setpoint | Thermal delay underestimated | Check coasting behavior | Lower tuning factor slightly, optionally increase `D` carefully |
| AutoTune looked good, brew day behaves differently | Tuning and production boundary conditions differ | Repeat AutoTune under real brew conditions | Apply manual PID correction only after retune |

#### Limits of automation (important)

If mixing is weak, sensors are mounted with high thermal lag, or heater power does not match volume, process physics dominates. In these cases, PID fine-tuning has limited effect. Fix process/setup first, then tune again.

## 2) FSM in the current engine

### 2.1 Why FSM was introduced

The current engine intentionally separates **control algorithm** (PID/AutoTune) from **process orchestration** (start, stop, pause, step transitions, mode transitions).  
This is exactly what FSM does: it ensures the system is always in a clear process state with a defined next action.

In practice, this prevents three common classes of issues:

- repeated triggering of the same action (for example start/stop bursts),
- steps getting stuck in intermediate states,
- UI/process and heating logic drifting apart in edge cases.

FSM is therefore not an optional add-on. It is core process infrastructure.

### 2.2 Global operation modes

At top level, operation is exclusive:

- `MODE_NONE`: no active brew/fermenter/autotune process
- `MODE_MASH`: automatic mash process
- `MODE_MANUAL`: manual kettle control
- `MODE_AUTOTUNE`: active autotune mode
- `MODE_FERM`: fermenter process

Exclusivity is key: one active mode at a time. On mode changes, old mode is cleanly stopped before new mode becomes active.

### 2.3 FSM process states

Within process orchestration, the state machine uses explicit states:

- `MASH_IDLE`: no active plan
- `MASH_WAIT_TEMP`: heat-up phase until temperature gate opens
- `MASH_RUNNING_STEP`: step is running with active timer
- `MASH_PAUSED`: timer paused
- `MASH_WAIT_USER`: waiting for user action
- `MASH_FINISHED`: plan completed
- `MASH_AUTOTUNE_RUNNING`: autotune running

Main benefit: each UI action and internal event has a defined input state and a defined output transition.

### 2.4 Events: how FSM is driven

FSM is event-driven. Typical events include:

- `MASH_EVT_START`, `MASH_EVT_STOP`
- `MASH_EVT_PLAY`
- `MASH_EVT_PAUSE_START`, `MASH_EVT_PAUSE_STOP`
- `MASH_EVT_NEXT_STEP`, `MASH_EVT_PREV_STEP`
- `MASH_EVT_TEMP_TICK`
- `MASH_EVT_TIMEOUT`
- `MASH_EVT_AUTOTUNE_START`, `MASH_EVT_AUTOTUNE_STOP`

Events are processed via queue. Robustness depends heavily on prioritization:

- critical stop-related events are pushed to front,
- frequent idempotent events such as `TEMP_TICK` are coalesced.

This keeps system responsiveness stable under load.

### 2.5 Virtual timer instead of loose tick behavior

Step timing is managed by an explicit virtual timer with:

- `running`
- `periodMs`
- `remainingMs`
- `deadline`

This matters because remaining time is explicit state, not implicit side effect. Pause/resume, timeout, step transitions, and UI timing all reference one consistent source.

### 2.6 Typical flow in the new engine

Typical mash flow in FSM terms:

1. `START` activates mode/state.
2. System enters `WAIT_TEMP` and prepares heating for the step.
3. `TEMP_TICK` checks temperature gate.
4. Once gate opens, timer starts and state becomes `RUNNING_STEP`.
5. On timer expiration, `TIMEOUT` occurs.
6. Depending on step config, flow continues via AutoNext or `WAIT_USER`.
7. `PLAY` resumes and advances to next valid step.
8. `STOP` always returns to clean terminal state.

The same event-path concept is used for edge cases (zero-temp/zero-duration steps, actor steps, autotune transitions).

### 2.7 FSM and PID engine interplay

Roles are cleanly separated:

- FSM decides **when** control/heating is allowed.
- PID engine decides **how** to control inside that allowed window.

This separation keeps process logic and thermal control logic maintainable and predictable.

## 3) Comparison with old PID version 1.59.10

### 3.1 Architecture then: ticker-driven instead of FSM/task orchestration

In 1.59.10, control execution was based on cyclic `InnuTicker` callbacks. `TickerPID` called `tickerPIDCallback()`, which then ran either `runAtune(...)` or normal `Compute(...)` control depending on state.

This worked, but behavior was much more tightly coupled to fixed ticker cycles.

### 3.2 Control behavior then in `InnuAPID.cpp`

Old `Compute()` was classic PID with limit logic:

- P/I/D computation
- windup protection via limits
- boil threshold handling via `thresTemp`/`thresOut`

What was not present in the same form: explicit phase guidance with ramping/coasting and a system-adaptive enzyme limiter based on plant model.

### 3.3 AutoTune then: oscillation method with `Ku/Pu`

Core terms in old system:

- **`Ku` (ultimate gain)**: critical gain where sustained oscillation begins.
- **`Pu` (ultimate period)**: oscillation period at this critical point.

Old AutoTune intentionally induced relay oscillation around setpoint (`RELAY_STEP_UP`/`RELAY_STEP_DOWN`), detected peaks via lookback windows, then derived `Ku`/`Pu`. In `autoPID.cpp`, these values were converted into `P/I/D` via selected tuning rule divisors.

This is a valid and established method, but sensitive to peak detection quality, noise, and cycle timing.

### 3.4 Practical difference in operation

Main practical difference:

- old: oscillation metrics (`Ku/Pu`) plus fixed tuning-rule mapping
- new: model metrics (`L/R`) plus phase-aware guidance logic

This generally improves reproducibility, especially across changing kettle sizes, sensor placement, and actuator path.

## 4) Final comparison: FSM vs loop with InnuTicker (without tasks)

### 4.1 Loop + InnuTicker (without tasks)

Old approach executed many functions cyclically in `loop()` through multiple ticker updates. It is straightforward but has limits:

- loop order implicitly defines priority,
- time-critical and non-critical actions share same cycle path,
- state transitions are spread across callbacks,
- edge-case guards tend to scatter across many locations.

For simple flows this is fine. For larger process complexity, coupling grows quickly.

### 4.2 FSM + task architecture

Current approach uses event-driven state handling with explicit queueing. Sensor, kettle, system, and process flow are separated into task contexts.

Practical benefits:

- explicit transitions instead of implicit side effects,
- prioritized stop/safety behavior,
- reduced queue flooding through coalescing,
- better behavior under concurrent actions (UI, sensor updates, timeout, mode switching).

For autotune, pause/resume, and special-step handling, this is significantly more robust than a pure cyclic loop approach.

## 5) IDS RMT remote-control logic (current implementation)

### 5.1 Goal of IDS send logic

Current IDS actuation converts PID output targets into real IDS telegrams without blocking the rest of control flow.  
To achieve this, send logic is separated from kettle control logic.

In practice:

- `Update()` and PID only publish target command (`cmd`) and TX enable state,
- a dedicated IDS TX task performs actual RMT transmission,
- heating/process logic remains responsive even with heavy telegram activity.

### 5.2 How the new RMT solution works

The solution combines three layers:

1. **RMT frame generation per command**  
   IDS frame = start sequence plus 33 bit pairs. Pulse timing comes from known IDS command matrix (`P0` to `P10`).
2. **Dedicated TX task for multiple kettles**  
   TX runs continuously and serves active IDS kettles fairly instead of monopolizing one kettle.
3. **Snapshot/atomic control interface**  
   Kettle updates write atomic snapshots (`enabled`, `cmd`, burst sequence); TX task reads and sends.

Responsibility is therefore cleanly split: control layer decides what to send, TX layer decides when/how to send safely.

### 5.3 Key safeguards in the new implementation

Current IDS TX logic includes several protective mechanisms:

- **fair scheduling**: max one frame per kettle per round
- **burst logic**: repeated frames on start, level change, and real off-edge
- **keepalive**: refresh frames while holding steady power levels
- **relay settle delay**: short stabilization delay after relay ON before non-zero commands
- **pin-change handling**: old RMT context is deinitialized cleanly on yellow-pin changes

These are critical in real operation because they protect behavior under relay dynamics, multi-kettle load, and edge transitions.

### 5.4 Relevance for AutoTune

New AutoTune starts actual measurement only after heating commit is confirmed.  
For IDS, this is tied to the timestamp of a truly sent power frame, not just requested command state.

This improves `L` measurement quality by aligning measurement start with real heat effect timing.

### 5.5 Comparison with old blocking implementation

Old IDS send logic was frame-blocking bit toggling:

- `digitalWrite(HIGH/LOW)` in bit loop
- `ets_delay_us(...)` for bit timing
- additional guard delay after frame

This means frame transmission actively blocked its execution context during send.

New RMT approach differs fundamentally:

1. **Old**: software-loop busy-wait bit timing.  
   **New**: hardware pulse generation via RMT and dedicated TX task.
2. **Old**: blocking per command frame.  
   **New**: non-blocking process-side behavior and fair multi-kettle transmission.
3. **Old**: limited decoupling between control and send logic.  
   **New**: explicit separation via snapshot API and TX worker.
4. **Old**: less robust edge handling at start/level changes.  
   **New**: integrated burst, keepalive, and settle mechanisms.

Practical impact for brewers: more stable switching under concurrent runtime load and cleaner AutoTune measurement starts.

### 5.6 Quick old vs new matrix

| Topic | Old (blocking) | New (RMT + TX task) |
| --- | --- | --- |
| Signal generation | `digitalWrite` + `ets_delay_us` bit loop | RMT hardware pulse generation |
| Execution model | frame-blocking in caller context | decoupled via dedicated IDS TX task |
| Multi-kettle behavior | no true fair interleaving | fair scheduling, max 1 frame/kettle/round |
| Edge robustness | basic switching, no structured burst strategy | burst on start/level/off-edge |
| Hold behavior | no explicit keepalive mechanism | defined keepalive behavior |
| AutoTune start reference | command request and real send less tightly aligned | commit bound to actual sent power frame |

## Conclusion

The current PID engine is not a small parameter tweak. It is a structural shift:

1. from `Ku/Pu` oscillation tuning to `L/R` model tuning
2. from strongly ticker-driven execution to FSM/task-oriented orchestration
3. from mostly classic PID operation to phase-oriented process-aware control strategy
4. from blocking IDS bit-bang sending to RMT-based decoupled TX logic

For brewers, this means clearer tuning levers and typically a calmer, more understandable temperature process.
