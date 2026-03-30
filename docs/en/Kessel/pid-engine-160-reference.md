# PID engine reference 1.60 (Power User)

> **Note for onboarding:**  
> This chapter is for advanced users.  
> You can skip it during initial Brautomat setup and return later if needed.  
> Start first with [AutoTune step by step](../Autotune-pid/steps.md) and [Brew-day quick guide](../Autotune-pid/brew-day-quick-guide.md).

## Scope

This reference covers runtime behavior introduced in 1.60:
`Compute()` sequencing, L/R AutoTune behavior, and tuning-factor style control.

## Core engine idea

Control since 1.60 is not a single bare PID loop. It is a multi-stage heating strategy:

- boil region with fixed output (`thresTemp`/`thresOut`),
- heat-up phase for fast approach,
- enzyme limiter in enzyme window,
- ramping/coasting for controlled approach,
- phase-aware PID behavior with anti-windup.

Goal: fast when far from target, controlled when close.

## Terms (quick reference)

- **Setpoint/measured/output:** target temperature, sensor value, and resulting output power (0..100%).
- **`P/I/D`:** P reacts directly, I removes residual error, D damps response dynamics.
- **`L` and `R`:** plant delay and slope parameters used by L/R AutoTune.
- **Enzyme limiter:** dynamic output cap inside enzyme temperature window.
- **Ramping/coasting:** shaped setpoint approach and glide phase to reduce overshoot.
- **`sa`/`psa`:** PID sample time and output power window.
- **`thresTemp`/`thresOut`:** boil transition point and fixed boil output.

## Practical `Compute()` sequence

`Compute()` runs in a fixed order:

1. mode check (`AUTOMATIC`)
2. boil handling (`thresTemp`/`thresOut`)
3. heat-up outside enzyme window
4. enzyme limiter (effective `outMax` reduction)
5. ramping/coasting guidance
6. PID math (phase-dependent scaling)
7. anti-windup and output limits

Enzyme limiter, ramping, and coasting are active guidance mechanisms, not cosmetic layers.

## AutoTune 1.60: robust L/R workflow

AutoTune is state-driven:

1. commit-protected start (`WAIT_HEAT_COMMIT`) after real heat commit
2. `L` via trend criterion (not one-shot threshold)
3. `R` via linear fit with plausibility checks
4. derived values: `Kp/Ki/Kd`, `sa`, `psa`, `thresOut`, heat-up windows

## PID derivation from L/R

`RecalculatePIDFromLR(...)` derives control values from plant model inputs:

- system class from `R`,
- actuator path (IDS vs relay/webhook),
- volume influence,
- tuning factor as style parameter.

Continuous model values are mapped to discrete sampling time (`sa`) so controller behavior matches real runtime timing.

## Tuning factor behavior

Tuning factor does not change measured physics (`L/R`), it changes control style:

- lower: more conservative, earlier braking
- higher: more direct, later braking

It affects multiple layers simultaneously:

- P/I/D effective scaling
- heat-up/approach/coasting transitions
- enzyme limiter bounds
- ramping dynamics

In practice, tuning factor is usually the first and most effective fine-tuning lever.

## Practical brew-day order

1. run AutoTune with realistic volume and circulation
2. verify plausibility of `L`, `R`, `sa`, `psa`, `thresOut`
3. adjust tuning factor first
4. adjust `P/I/D` only in small isolated steps

## See also

- [AutoTune process (Power User)](../Autotune-pid/atune.md)
- [Brew-day quick guide](../Autotune-pid/brew-day-quick-guide.md)
- [FSM process flow 1.60 (Power User)](fsm-process-flow-160.md)
- [What's New 1.60.x](../WhatsNew/whats-new-160.md)
