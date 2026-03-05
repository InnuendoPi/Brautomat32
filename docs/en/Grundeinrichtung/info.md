# Basic setup

Brautomat requires at least one temperature sensor and either a GGM IDS
induction cooker or a relay-controlled heater.

This chapter only covers required baseline setup steps.
Optional and technical details are covered in later chapters.

## Beginner path (recommended)

1. [Set up temperature sensor](sen.md)
2. [Set up mash kettle](ids.md)
3. [AutoTune step by step](../Autotune-pid/steps.md)
4. [PID instructions](../Kessel/PID-Anleitung.md)

## Advanced topics

- [IDS RMT send logic 1.60 (Power User)](ids-rmt-160.md)
- [PID engine reference 1.60 (Power User)](../Kessel/pid-engine-160-reference.md)

## Scope

This baseline setup is shown with a GGM IDS2 example.
For relay-based setups, the workflow is equivalent.

The flow assumes one mash kettle.
Additional kettles (for example boil kettle or HLT/NACHGUSS) are configured the
same way.
