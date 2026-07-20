# Grundeinrichtung

Der Brautomat benötigt mindestens einen Temperatursensor sowie entweder ein
Induktionskochfeld GGM IDS oder ein relaisgesteuertes Kochfeld.

IDS bezeichnet ein GGM-Induktionskochfeld. Ein SSR ist ein elektronisches
Relais (Solid State Relay) zum Schalten einer Heizung.

In dieser Grundeinrichtung werden zunächst nur die Pflichtschritte behandelt.
Optionale und technische Details folgen in späteren Kapiteln.

## Welches Heizsystem verwendest du?

- **GGM IDS / Induktion:** [MaischeSud einrichten](ids.md)
- **Relais oder SSR:** [Relais-Kessel einrichten](relais-kessel.md)

## Einsteigerpfad (empfohlen)

1. [Temperatursensor einrichten](sen.md)
2. Den passenden Kesselpfad oben durchführen
3. [AutoTune Schritt für Schritt](../Autotune-pid/steps.md)
4. [PID-Anleitung](../Kessel/PID-Anleitung.md)

## Fortgeschrittene Themen

- [IDS RMT Sendelogik 1.60 (Fortgeschrittene)](ids-rmt-160.md)
- [PID-Engine Referenz 1.60 (Fortgeschrittene)](../Kessel/pid-engine-160-referenz.md)

## Geltungsbereich

Die Grundkonfiguration wird mit GGM IDS2 und einem relaisgesteuerten Kessel
als getrennte Einsteigerpfade gezeigt.

Die Beschreibung geht von einem MaischeSud-Kessel aus.
Weitere Kessel (z. B. Sud oder HLT) werden nach demselben Prinzip eingerichtet.
