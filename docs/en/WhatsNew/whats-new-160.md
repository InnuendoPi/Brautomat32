# What's New 1.60.x

This page is the high-level overview of structural changes in 1.60.x.
Detailed explanations are maintained in the linked domain chapters.

## Codebase sync note

The content is aligned with 1.60.3.
Key confirmations:

- `INNU_APID::Compute()` follows documented sequence (mode, boil, enzyme limiter, ramping/coasting, PID, anti-windup).
- `thresOutput` (code) and `thresOut` (UI/docs) describe the same fixed boil-output concept.
- AutoTune uses commit-protected start (`WAIT_HEAT_COMMIT`) and derives values from `L/R`.
- FSM queue prioritization and `TEMP_TICK` coalescing are implemented.

## Where the content lives now

- PID engine details: [PID engine reference 1.60 (Power User)](../Kessel/pid-engine-160-reference.md)
- Brew-day decisions: [Brew-day quick guide](../Autotune-pid/brew-day-quick-guide.md)
- FSM orchestration: [FSM process flow 1.60 (Power User)](../Kessel/fsm-process-flow-160.md)
- IDS RMT sending: [IDS RMT send logic 1.60 (Power User)](../Grundeinrichtung/ids-rmt-160.md)

## Comparison to 1.59.10 (short)

The change is structural, not only parameter-level:

1. from `Ku/Pu` oscillation tuning to `L/R` model tuning
2. from ticker-driven execution to FSM/task orchestration
3. from mostly classic PID focus to phase-oriented process guidance
4. from blocking IDS bit-bang sending to decoupled RMT TX logic

## Loop+Ticker vs FSM+Tasks (short)

- Old: implicit priority via loop order, higher callback coupling.
- New: explicit states, event queue, prioritized stop paths, better load behavior.

## Conclusion

1.60.x introduces clearer role boundaries in control architecture.
For brewers, this usually means more reproducible temperature behavior and clearer tuning levers.
