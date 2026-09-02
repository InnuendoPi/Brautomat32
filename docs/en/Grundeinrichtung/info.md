# Basic setup

Brautomat requires at least one temperature sensor and either a GGM IDS
induction cooker or a relay-controlled heater.

IDS refers to a GGM induction cooker. An SSR is a Solid State Relay, an
electronic relay used to switch a heater.

This chapter only covers required baseline setup steps.
Optional and technical details are covered in later chapters.

## Which heating system do you use?

- **GGM IDS / induction:** [Set up mash kettle](ids.md)
- **Relay or SSR:** [Set up relay kettle](relay-kettle.md)

## Beginner path (recommended)

1. [Set up temperature sensor](sen.md)
2. Complete the appropriate kettle path above
3. [AutoTune step by step](../Autotune-pid/steps.md)
4. [PID instructions](../Kessel/PID-Anleitung.md)

## Advanced topics

- [IDS RMT send logic 1.60 (Power User)](ids-rmt-160.md)
- [PID engine reference 1.60 (Power User)](../Kessel/pid-engine-160-reference.md)

## Scope

Basic setup is shown as separate beginner paths for GGM IDS2 and a
relay-driven kettle.

The flow assumes one mash kettle.
Additional kettles (for example boil kettle or HLT/NACHGUSS) are configured the
same way.
