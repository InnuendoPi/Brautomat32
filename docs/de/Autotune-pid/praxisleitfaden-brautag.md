# Praxisleitfaden Brautag (Symptom -> Maßnahme)

Dieses Kapitel ist als Arbeitsanleitung für den Brautag gedacht.
Nutze es direkt, wenn das Temperaturverhalten von der Erwartung abweicht.

## So verwendest du diesen Leitfaden

1. Wähle in der Matrix unten das passende Symptom.
2. Setze nur die erste Maßnahme um.
3. Beobachte mindestens eine Rast oder einen vollständigen Heizabschnitt.
4. Nur wenn das Symptom bleibt, setze die zweite Maßnahme um.

Regel: Immer nur eine Stellgröße gleichzeitig ändern.

## 2-Minuten-Check vor dem Start

- Volumen liegt im Bereich des AutoTune-Laufs (ca. +/-10%).
- Pumpen- und Rührwerkszustand ist wie beim AutoTune.
- Sensorwerte sind plausibel (keine Sprünge, keine Ausreißer).
- Es sind keine parallelen Änderungen an mehreren Parametern geplant.

## Startprofile nach Setup (erster Lauf)

| Setup | Startpunkt | Erste sichere Korrektur |
| --- | --- | --- |
| 20-30 L, starke Umwälzung, IDS | AutoTune-Werte + mittlerer Tuning Factor | Bei Überschwingen zuerst Tuning Factor leicht senken |
| 40-60 L, Relais/PWM, mittlere Trägheit | AutoTune-Werte + mittlerer bis defensiver Tuning Factor | Bei trägem Aufheizen Tuning Factor in kleinen Schritten erhöhen |
| HLT oder träges System | AutoTune-Werte + defensiver Tuning Factor | Bei Pendeln im Haltebereich Tuning Factor leicht senken, dann erst `P/I/D` |

## Symptom -> Ursache -> Maßnahme

| Symptom | Wahrscheinliche Ursache | Erste Maßnahme | Zweite Maßnahme |
| --- | --- | --- | --- |
| Überschwingen > 0.5 K im Enzymbereich | Regelung zu aggressiv oder reale Trägheit höher als beim Tuning | Tuning Factor leicht senken | Enzymfenster/Coasting prüfen, danach erst `P/I/D` fein anpassen |
| Aufheizen deutlich zu langsam | Fahrstil zu defensiv oder geänderte Umwälzung/Volumen | Umwälzung und Volumen-Realität prüfen | Tuning Factor moderat erhöhen |
| Rast hält nicht stabil (ständiges Nachregeln) | Sensorlage/Strömung ungünstig, `sa` oder `psa` unplausibel | Sensorlage und Durchmischung prüfen, `sa/psa` plausibilisieren | Danach erst `I` in kleinen Schritten korrigieren |
| Ruhiger Start, später Schwingen nahe Soll | Thermische Verzögerung unterschätzt | Coasting-Verhalten prüfen | Tuning Factor leicht senken, optional `D` vorsichtig erhöhen |
| AutoTune gut, Brautag anders | Randbedingungen zwischen Tuning und Produktion abweichend | AutoTune unter echten Braubedingungen wiederholen | Erst danach manuelle PID-Korrektur |

## Grenzen der Automatik

Wenn die Durchmischung schlecht ist, Sensoren träge montiert sind oder Heizleistung nicht zum Volumen passt, dominiert die Prozessphysik.
In diesem Fall zuerst Setup und Prozess verbessern, danach erneut tunen.

## Siehe auch

- [AutoTune Schritt für Schritt](steps.md)
- [PID-Anleitung](../Kessel/PID-Anleitung.md)
- [Fehlerbehebung](../FAQ/troubleshooting.md)
