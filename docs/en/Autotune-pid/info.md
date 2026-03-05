# AutoTune PID

AutoTune determines suitable starting values for `P`, `I`, and `D` based on
your real hardware and process behavior.

## When to use it

- first setup of a kettle
- after major hardware changes (volume, heating power, sensor position)
- when temperature behavior changes persistently

## Preconditions

- realistic brew-day volume
- same pump/stirrer setup as in real operation
- plausible calibrated sensors

## Recommended flow

1. [AutoTune step by step](steps.md)
2. [PID instructions](../Kessel/PID-Anleitung.md)
3. [Brew-day quick guide](brew-day-quick-guide.md)

## Deep dive (Power User)

Technical details about L/R-based control behavior:
[AutoTune process (Power User)](atune.md) and
[PID engine reference 1.60 (Power User)](../Kessel/pid-engine-160-reference.md)
