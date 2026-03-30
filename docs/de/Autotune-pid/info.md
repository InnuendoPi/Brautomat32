# AutoTune PID

AutoTune ermittelt für dein konkretes Setup automatisch passende Startwerte für
`P`, `I` und `D`.

## Wann nutzen

- bei Erstinbetriebnahme eines Kessels
- nach größeren Hardwareänderungen (Volumen, Heizleistung, Sensorposition)
- wenn sich das Temperaturverhalten dauerhaft verändert

## Voraussetzungen

- realistisches Brautage-Volumen im Kessel
- gleiche Pumpen-/Rührwerkskonfiguration wie im Betrieb
- plausibel kalibrierte Sensoren

## Empfohlener Ablauf

1. [AutoTune Schritt für Schritt](steps.md)
2. [PID-Anleitung](../Kessel/PID-Anleitung.md)
3. [Praxisleitfaden Brautag](praxisleitfaden-brautag.md)

## Vertiefung (Fortgeschrittene)

Technische Details zur L/R-basierten PID-Engine:
[AutoTune Prozess (Fortgeschrittene)](atune.md) und
[PID-Engine Referenz 1.60 (Fortgeschrittene)](../Kessel/pid-engine-160-referenz.md)
