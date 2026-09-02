# Relais-Kessel einrichten

Diese Anleitung gilt für einen Kessel, dessen Heizung über ein geeignetes
Relais oder SSR geschaltet wird. Sie ist der Einsteigerpfad für Relais-Setups;
Webhook- und Mehrkessel-Konfigurationen folgen erst später.

> **Sicherheit:** Arbeiten an Netzspannung gehören in fachkundige Hände.
> Verwende nur für Last, Schaltart und Einbau geeignete Komponenten. Vor dem
> ersten Heizen immer den [Sicherheits-Check](../Installation/sicherheitscheck-erster-heiztest.md)
> durchführen.

## Voraussetzungen

- Ein Temperaturfühler ist bereits eingerichtet und liefert plausible Werte.
- Der Schaltausgang ist elektrisch sicher mit dem Relais oder SSR verbunden.
- Eine Abschaltmöglichkeit ist jederzeit erreichbar.
- Der erste Test erfolgt mit Wasser und unter Aufsicht.

## 1. Maischekessel anlegen

1. Öffne im Bereich **Maischeplan** das Zahnrad oben rechts.
2. Wähle im Reiter **Konfiguration** bei **Gerätetyp** den Eintrag
   **Relais**.
3. Vergib einen verständlichen Gerätenamen, zum Beispiel `Maische`.
4. Wähle bei **PIN weiß [Relais]** den tatsächlich verdrahteten Ausgang.
5. Weise den zuvor eingerichteten Temperatursensor zu.
6. Speichere die Einstellungen und starte den Brautomat neu, falls die
   Oberfläche dazu auffordert.

![Kessel-Konfiguration](../.gitbook/assets/kessel_1.jpg)

## 2. Sicherer Funktionstest

Führe vor AutoTune und dem ersten Brautag einen kurzen Test mit Wasser durch:

1. Prüfe noch einmal die angezeigte Isttemperatur.
2. Starte einen moderaten Heiztest und beobachte Relais, Heizung und
   Temperaturanstieg.
3. Beende den Test mit dem Power-Button und kontrolliere, dass die Heizung
   abschaltet.

Bei unerwartetem Schalten, einem unplausiblen Temperaturwert oder fehlender
Abschaltung: sofort abbrechen und Verdrahtung beziehungsweise Konfiguration
prüfen.

## 3. Regelung einrichten

Im Reiter **PID Manager** wählst du für ein relaisgesteuertes Kochfeld den
**Relay PID Modus**. Er verwendet die aus AutoTune ermittelten Werte `Ku` und
`Pu`, um die PID-Werte zu berechnen.

Für den anschließenden AutoTune-Lauf:

- verwende die typische Wasserfüllung des späteren Brautags;
- starte mit dem in den Parametern vorgesehenen AutoTune-Noiseband für
  Relais/SSR von `0.5`;
- folge anschließend [AutoTune Schritt für Schritt](../Autotune-pid/steps.md).

Die Bedeutung weiterer Einstellungen wie Maximalleistung, Sensorfehlerleistung
und AutoTune-Parameter ist in [Parameter Kochfeld](../Parameter/parameter-kessel.md)
beschrieben.

## Danach

Nach dem erfolgreichen Wasser- und AutoTune-Test geht es mit der
[PID-Anleitung](../Kessel/PID-Anleitung.md) und dem
[Maischeplan](../Maischeplan/info.md) weiter.

Für zusätzliche Kessel, Webhooks oder spezielle Steuerbefehle siehe
[Kessel Konfiguration und Einsatz](../Kessel/kessel.md).
