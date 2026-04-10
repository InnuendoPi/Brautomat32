# Der Brautomat

![ESP32](https://img.shields.io/static/v1?label=Arduino&message=ESP32&logo=arduino&logoColor=white&color=blue)

Der Brautomat ist eine Brausteuerung für den ESP32 D1 mini.
Er automatisiert Rasttemperaturen und Rastzeiten, unterstützt das Würzekochen
inklusive Hopfengaben und kann den Maischprozess im Infusionsverfahren weitgehend
automatisch fahren.

> **Hinweis:**  
> Diese Anleitung wird laufend erweitert. Viele Beispiele zeigen GGM IDS.
> Seit Version 1.48 sind auch Relais-Setups unterstützt.
> Nur der manuelle Modus ist exklusiv für GGM IDS2.

Stand der Anleitung: Release-Linie `main` (Version 1.60). Lokale
Entwicklungs-Builds können abweichen.

## Empfohlener Einstieg

Für neue Nutzer ist diese Reihenfolge sinnvoll:

1. [Installation](Installation/info.md)
2. [Sicherheits-Check vor erstem Heiztest](Installation/sicherheitscheck-erster-heiztest.md)
3. [Grundeinrichtung](Grundeinrichtung/info.md)
4. [AutoTune Schritt für Schritt](Autotune-pid/steps.md)
5. [PID-Anleitung](Kessel/PID-Anleitung.md)
6. [Der Maischeplan](Maischeplan/info.md)
7. [Praxisleitfaden Brautag](Autotune-pid/praxisleitfaden-brautag.md)
8. [Fehlerbehebung](FAQ/troubleshooting.md) bei Abweichungen

Kapitel für Fortgeschrittene sind im Inhaltsverzeichnis explizit markiert und können beim
Einstieg zunächst übersprungen werden.

## Aufbau der Anleitung

Die Dokumentation ist in drei Themenbereiche gegliedert:

- Software: Installation, Grundeinrichtung, Maischeplan, AutoTune, Kessel/Sensoren/Aktoren
- Hardware: Platine, Anschlüsse, Display, Gehäuse, Erweiterungen
- Betrieb und Service: Parameter, Logging, MQTT, API, Fehlerbehebung

## Brautomat Release Version

Die Release-Version wird mit stabilem Espressif-Framework gebaut und ist für den
produktiven Betrieb vorgesehen.

## Brautomat Entwicklungs-Version

Die Entwicklungs-Version enthält zusätzliche Diagnose-/Logging-Funktionalität.
Neue Features und Fixes erscheinen hier zuerst.
