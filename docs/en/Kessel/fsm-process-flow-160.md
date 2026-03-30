# FSM process flow 1.60 (Power User)

> **Note for onboarding:**  
> This chapter is for advanced users.  
> You can skip it during initial Brautomat setup and return later if needed.  
> Start first with [The Control](../Maischeplan/steuerung.md) and [PID instructions](PID-Anleitung.md).

## Why FSM

Since 1.60, control algorithm (PID/AutoTune) and process orchestration (start, stop, pause, step transitions, mode transitions) are intentionally separated.
FSM guarantees that each action is processed in a clear state context.

Practical benefits:

- fewer repeated triggers,
- fewer stuck intermediate states,
- cleaner separation between UI actions and heating behavior.

## Global modes

Exactly one mode is active at any time:

- `MODE_NONE`
- `MODE_MASH`
- `MODE_MANUAL`
- `MODE_AUTOTUNE`
- `MODE_FERM`

On mode changes, the old mode is cleanly stopped before the new mode starts.

## Process states

- `MASH_IDLE`
- `MASH_WAIT_TEMP`
- `MASH_RUNNING_STEP`
- `MASH_PAUSED`
- `MASH_WAIT_USER`
- `MASH_FINISHED`
- `MASH_AUTOTUNE_RUNNING`

Each UI action and internal event therefore has defined state input and transition output.

## Events and queue

Typical events:

- `MASH_EVT_START`, `MASH_EVT_STOP`
- `MASH_EVT_PLAY`
- `MASH_EVT_PAUSE_START`, `MASH_EVT_PAUSE_STOP`
- `MASH_EVT_NEXT_STEP`, `MASH_EVT_PREV_STEP`
- `MASH_EVT_TEMP_TICK`
- `MASH_EVT_TIMEOUT`
- `MASH_EVT_AUTOTUNE_START`, `MASH_EVT_AUTOTUNE_STOP`

Robustness relies on event prioritization:

- stop-related events are prioritized,
- frequent idempotent events (`TEMP_TICK`) are coalesced.

## Virtual step timer

Step timing is explicit state:

- `running`
- `periodMs`
- `remainingMs`
- `deadline`

Pause/resume, timeout handling, step changes, and UI timing all use the same time source.

## Typical flow

1. `START` activates mode/state.
2. system enters `WAIT_TEMP`.
3. `TEMP_TICK` checks temperature gate.
4. on gate release, timer starts and state becomes `RUNNING_STEP`.
5. `TIMEOUT` ends the step.
6. flow continues via AutoNext or `WAIT_USER`.
7. `PLAY` resumes flow.
8. `STOP` returns to clean end state.

## FSM and PID role split

- FSM decides **when** control/heating is allowed.
- PID engine decides **how** control is applied inside that window.

## See also

- [PID engine reference 1.60 (Power User)](pid-engine-160-reference.md)
- [What's New 1.60.x](../WhatsNew/whats-new-160.md)
