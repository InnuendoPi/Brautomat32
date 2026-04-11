# What's New 1.60+

This page is the high-level overview of the structural changes introduced since 1.60.
Detailed explanations are maintained in the linked domain chapters.

## Current scope

This overview is kept on a **1.60+** basis and reflects the current architecture line beyond the original 1.60 release.
It is not limited to the first 1.60.x implementation state.

Core themes of the current generation:

- adaptive PID control with `L/R`-based AutoTune
- FSM-driven process orchestration for mash, autotune, manual, and fermenter flows
- runtime snapshot and controller-deck model for WebIf, SSE, display, and testflow
- dashboard and chart improvements, including clearer controller visibility and additional sensor curves
- safer backup/restore, upload, import, and file-handling paths
- decoupled IDS RMT send path and broader hardware support beyond IDS-only setups

## Where the content lives now

- PID engine details: [PID engine reference 1.60+ (Power User)](../Kessel/pid-engine-160-reference.md)
- Brew-day decisions: [Brew-day quick guide](../Autotune-pid/brew-day-quick-guide.md)
- FSM orchestration: [FSM process flow 1.60+ (Power User)](../Kessel/fsm-process-flow-160.md)
- IDS RMT sending: [IDS RMT send logic 1.60+ (Power User)](../Grundeinrichtung/ids-rmt-160.md)

## What changed conceptually since pre-1.60 firmware

The change is structural, not only parameter-level:

1. from `Ku/Pu` oscillation tuning to `L/R` model tuning
2. from ticker-driven execution to FSM/task orchestration
3. from mostly classic PID focus to phase-oriented process guidance
4. from scattered runtime state handling to a central runtime snapshot model
5. from more fragile file/update paths to safer restore, upload, and import handling
6. from IDS-focused perception to a broader control platform for induction, relay, and webhook actuator paths

## Practical result

For brewers, the 1.60+ line mainly means:

- more reproducible temperature behavior
- clearer tuning levers
- more robust process execution
- broader hardware flexibility
- more stable WebIf and device-state handling
