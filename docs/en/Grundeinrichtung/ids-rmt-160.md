# IDS RMT send logic 1.60 (Power User)

> **Note for onboarding:**  
> This chapter is for advanced users.  
> You can skip it during initial Brautomat setup and return later if needed.  
> Start first with [Set up the cooker](ids.md) and [AutoTune step by step](../Autotune-pid/steps.md).

## Goal

From 1.60 onward, IDS actuation converts PID output targets into real IDS telegrams without blocking the main process flow.
Send logic is decoupled from kettle control.

## Architecture

- PID/`Update()` publish target command (`cmd`) and TX enable state.
- Dedicated IDS TX task performs transmission.
- Transmission uses RMT hardware instead of blocking bit-bang timing in control context.

## New RMT approach

1. command-specific frame generation (start sequence + 33 bit pairs, IDS matrix `P0..P10`)
2. fair service across multiple active IDS kettles
3. atomic snapshot handover (`enabled`, `cmd`, burst sequence)

## Safeguards

- fair scheduling (max one frame per kettle per round),
- burst frames at start, level changes, and real off-edge,
- keepalive while holding power levels,
- relay-settle delay after relay ON before non-zero command,
- clean RMT reinit on pin changes.

## AutoTune relevance

AutoTune measurement starts only after confirmed heat commit.
For IDS this is tied to timestamp of an actually transmitted power frame.
This improves `L` measurement quality.

## Old vs new (short)

| Topic | Old (blocking) | New (RMT + TX task) |
| --- | --- | --- |
| Signal generation | `digitalWrite` + `ets_delay_us` bit loop | RMT hardware |
| Execution | blocking in caller context | decoupled TX task |
| Multi-kettle behavior | no fair interleaving strategy | fair scheduling |
| Edge robustness | basic switching | burst/keepalive/settle integrated |

## See also

- [Set up the cooker](ids.md)
- [Troubleshooting](../FAQ/troubleshooting.md)
- [What's New 1.60.x](../WhatsNew/whats-new-160.md)
