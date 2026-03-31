# Grundeinrichtung

Der Brautomat benötigt mindestens einen Temperatursensor sowie mindestens eine
geeignete Heizquelle. Unterstützt werden je nach Setup aktuell die
GGM-Modelle IDS1, IDS2 und IDS5 sowie relaisgesteuerte Heizquellen.

In dieser Grundeinrichtung werden zunächst nur die Pflichtschritte behandelt.
Optionale und technische Details folgen in späteren Kapiteln.

## Einsteigerpfad (empfohlen)

1. [Temperatursensor einrichten](sen.md)
2. [MaischeSud einrichten](ids.md)
3. [AutoTune Schritt für Schritt](../Autotune-pid/steps.md)
4. [PID-Anleitung](../Kessel/PID-Anleitung.md)

## Fortgeschrittene Themen

- [IDS RMT Sendelogik 1.60 (Fortgeschrittene)](ids-rmt-160.md)
- [PID-Engine Referenz 1.60 (Fortgeschrittene)](../Kessel/pid-engine-160-referenz.md)

## Geltungsbereich

Die Grundkonfiguration wird mit GGM IDS2 gezeigt.
Für ein relaisgesteuertes Kochfeld ist der Ablauf analog.

Die Beschreibung geht von einem MaischeSud-Kessel aus.
Weitere Kessel (z. B. Sud oder HLT) werden nach demselben Prinzip eingerichtet.
