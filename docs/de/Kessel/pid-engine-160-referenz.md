# PID-Engine Referenz 1.60 (Fortgeschrittene)

> **Hinweis für den Einstieg:**  
> Dieses Kapitel ist für fortgeschrittene Nutzer.  
> Für den Start mit dem Brautomat kannst du es zunächst überspringen und später bei Bedarf lesen.  
> Einstieg zuerst: [AutoTune Schritt für Schritt](../Autotune-pid/steps.md) und [Praxisleitfaden Brautag](../Autotune-pid/praxisleitfaden-brautag.md).

## Zweck

Diese Referenz beschreibt die neue PID-Engine ab 1.60 aus Sicht des Laufzeitverhaltens.
Fokus sind die Abschnitte aus `whats_new_160.de.md` zu `Compute()`, L/R-AutoTune und Tuning Factor.

## Grundidee der Engine

Die Regelung ab 1.60 ist keine einzelne "nackte" PID-Schleife, sondern eine mehrstufige Heizstrategie:

- Kochbereich mit definierter Leistung (`thresTemp`/`thresOut`),
- Heat-up-Phase für zügiges Aufheizen,
- Enzym-Limiter im Enzymfenster,
- Ramping und Coasting für kontrollierte Annäherung,
- phasenabhängige PID-Führung mit Anti-Windup.

Ziel: schnell auf Distanz, kontrolliert in Sollnähe.

## Begriffe (Kurzreferenz)

- **Sollwert/Istwert/Ausgang:** Zieltemperatur, Messwert und daraus berechnete Ausgangsleistung (0..100%).
- **`P/I/D`:** P reagiert direkt, I korrigiert bleibende Abweichung, D dämpft Dynamik.
- **`L` und `R`:** Anlagenparameter für Verzögerung und Steigrate, Grundlage der L/R-AutoTune.
- **Enzym-Limiter:** dynamischer Leistungsdeckel im Enzymfenster.
- **Ramping/Coasting:** stufenweise SollFührung und Ausrollphase zur überschwingreduktion.
- **`sa`/`psa`:** PID-Abtastzeit und Leistungszeitfenster.
- **`thresTemp`/`thresOut`:** Umschaltpunkt und feste Kochleistung.

## Compute-Ablauf in der Praxis

Die Regelung in `Compute()` laeuft in fester Reihenfolge:

1. ModusPrüfung (`AUTOMATIC`).
2. Kochlogik (`thresTemp`/`thresOut`) mit Direktleistung.
3. Heat-up außerhalb Enzymfenster (bei grossem Fehler ggf. hohe Leistung).
4. Enzym-Limiter (reduziertes effektives `outMax` im Enzymbereich).
5. Ramping und Coasting als Führungslogik.
6. PID-Berechnung (P/I/D mit phasenabhängiger Skalierung).
7. Anti-Windup und Ausgangsbegrenzung.

Wichtig: Enzym-Limiter, Ramping und Coasting sind keine kosmetischen Extras, sondern aktive Führungsmechanismen.

## AutoTune 1.60: L/R-basiert und robust

Die AutoTune-Messung ist zustandsgeFührt:

1. Start mit Commit-Sicherung (`WAIT_HEAT_COMMIT`), Messung erst nach wirksamem Heiz-Commit.
2. `L`-Ermittlung über Trendkriterium statt Einzel-Sprung.
3. `R`-Ermittlung über linearen Fit mit PlausibilitätsPrüfung.
4. Ableitung von `Kp/Ki/Kd`, `sa`, `psa`, `thresOut` und Heat-up-Fenstern aus `L/R`.

## Ableitung von P/I/D aus L/R

In `RecalculatePIDFromLR(...)` werden Reglerwerte aus dem Anlagenmodell berechnet.
einfließende Größen:

- Anlagenklasse aus `R` (schnell/normal/langsam),
- Aktorpfad (IDS vs. Relais/Webhook),
- Volumenbezug,
- Tuning Factor als Stilparameter.

Kontinuierliche Größen werden auf die diskrete Abtastzeit (`sa`) abgebildet.
Damit passt die Regelung zur realen Taktung im System.

## Tuning Factor: Wirkung auf den Regelstil

Der Tuning Factor aendert nicht die gemessene Physik (`L/R`), sondern den Fahrstil:

- niedriger: defensiver, früheres Bremsen,
- höher: direkter, späteres Bremsen.

Er wirkt parallel auf:

- P/I/D-Skalierung,
- übergangslogik zwischen Heat-up, Approach, Coasting,
- Enzym-Limiter-Grenzen,
- Ramping-Dynamik.

Dadurch ist er in der Praxis häufig die wirksamste erste Stellgroesse vor manuellen PID-Eingriffen.

## Praxisreihenfolge am Brautag

1. AutoTune mit realistischem Volumen und echter Umwälzung ausFühren.
2. Plausibilität von `L`, `R`, `sa`, `psa`, `thresOut` prüfen.
3. Zuerst Tuning Factor anpassen.
4. `P/I/D` nur in kleinen, isolierten Schritten anpassen.

## Siehe auch

- [AutoTune Prozess (Fortgeschrittene)](../Autotune-pid/atune.md)
- [Praxisleitfaden Brautag](../Autotune-pid/praxisleitfaden-brautag.md)
- [FSM Regelablauf 1.60 (Fortgeschrittene)](fsm-regelablauf-160.md)
- [Was ist neu 1.60.x](../WhatsNew/whats-new-160.md)
