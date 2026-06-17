# Brautomat32

[![en](https://img.shields.io/badge/English-en-red.svg)](https://github.com/InnuendoPi/Brautomat32/blob/main/README.md)
![PlatformIO](https://img.shields.io/badge/platform-ESP32-blue)
![Framework](https://img.shields.io/badge/framework-Arduino-green)
![Version](https://img.shields.io/github/v/release/InnuendoPi/Brautomat32)

Brautomat32 ist eine leistungsfähige Brau- und Gärsteuerung auf Basis des ESP32.
Im Mittelpunkt steht nicht einfach nur das Schalten von Heizquellen, sondern die präzise, reproduzierbare Führung kompletter Brau- und Fermentationsprozesse.

Der Brautomat32 hat mit **InnuAPID** einen eigenen PID-Controller, speziell entwickelt für Heimbrausysteme. Statt grober Ein/Aus-Steuerung arbeitet hier eine adaptive Temperaturregelung, die Maischen, Kochen und Fermentieren außergewöhnlich präzise, ruhig und reproduzierbar macht.

Brautomat32 ist eine vielseitige Steuerplattform für unterschiedliche Heiz- und Aktorkonzepte. Unterstützt werden **GGM-IDS-Induktionskochfelder**, **relaisgesteuerte Heizsysteme** und **Webhook-basierte Aktoren**.

Die Bedienung erfolgt direkt im Browser und ist für PC, Tablet und Smartphone ausgelegt. Optional kann zusätzlich ein Nextion-Touchdisplay eingebunden werden.

## Firmware-Teststatus

[![complete suite](https://img.shields.io/static/v1?label=complete%20suite&message=V%201.64.0%20%7C%2058%20Tests%20%7C%2058%20erfolgreich%20%7C%200%20warn%20%7C%200%20fehlerhaft%20%7C%200%20skip&color=brightgreen)](TEST-RESULTS.md)

Vor jedem Release wird die Firmware automatisiert und mit hoher Detailtiefe gegen ein reales Equipment geprüft. Build, Flash, Webinterface, Prozessabläufe, Restore und Browser-Regressionen sind feste Bestandteile der Release-Test-Workflows.

![WebInterface](docs/img/dashboard160.jpg)

## Systemprofil und Prozessführung

- Adaptive PID-Regelung mit AutoTune
- Maischeplan-Verwaltung mit automatischem Temperatur- und Zeitablauf
- Fermenter-Modus
- Aktorsteuerung und PWM-Ausgänge
- Temperaturverlauf als Diagramm
- Backup und Restore
- Firmware- und WebUpdate
- Mehrsprachige Benutzeroberfläche

Brautomat32 ist nicht als einfacher Temperatur-Schalter gedacht.
Das Ziel ist eine Steuerung, die Prozesse technisch sauber führt, reproduzierbare Ergebnisse ermöglicht und gleichzeitig offen für unterschiedliche Hardwarekonzepte bleibt.

## Hardware, Betriebsarten und Funktionen

Brautomat32 unterstützt unter anderem:

- bis zu drei Kesselkanäle
  - Maische
  - Sud/MLT
  - HLT/Nachguss
- DS18B20-Sensoren
- PT100x-Sensoren über MAX31865
- Rührwerke, Pumpen und weitere Aktoren
- Fermenterbetrieb mit Heiz-/Kühlpfaden

## Dokumentation

- [Anleitung & Beschreibung](https://innuendopi.gitbook.io/brautomat32/)
- [Forum Hobbybrauer.de (Deutsch)](https://hobbybrauer.de/forum/viewtopic.php?p=486504#p486504)
- [Changelog](https://github.com/InnuendoPi/Brautomat32/blob/main/changelog.md)

## Download

| Release-Typ | Download |
| ----------- | -------- |
| **Release** | [![Stable](https://img.shields.io/static/v1?label=Stable%20Release&message=Brautomat32%20ESP32&logo=arduino&logoColor=white&color=darkgreen)](https://github.com/InnuendoPi/Brautomat32/releases/latest) |
| **Development** | [![Dev](https://img.shields.io/static/v1?label=Development%20Release&message=Brautomat32%20ESP32&logo=arduino&logoColor=white&color=blue)](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/development/build/ESP32-IDF5dev/Brautomat32dev.zip) |

## Installation

1. **Brautomat ESP32** herunterladen
2. ZIP-Datei entpacken
3. **Flashen.cmd** ausführen

Das ZIP-Archiv enthält bereits [esptool](https://github.com/espressif/esptool).

Unter Windows nur bei Bedarf:
**CP210x USB to UART Bridge Virtual COM Port (VCP)** - [Silicon Labs Download](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)

## Webinterface

Brautomat läuft in aktuellen Browsern auf PC, Tablet und Smartphone.

![WebInterface](docs/img/brautomat160.jpg)
![WebInterface](docs/img/brautomat160-2.jpg)

## Mehrsprachigkeit

![de](https://img.shields.io/badge/Deutsch-de-red.svg)
![en](https://img.shields.io/badge/English-en-blue.svg)
![es](https://img.shields.io/badge/Español-es-yellow.svg)
![fr](https://img.shields.io/badge/Français-fr-lightgrey.svg)
![nl](https://img.shields.io/badge/Nederlands-nl-orange.svg)
![no](https://img.shields.io/badge/Norsk-no-green.svg)
![it](https://img.shields.io/badge/Italiano-it-lightblue.svg)
![sv](https://img.shields.io/badge/Svenska-sv-yellowgreen.svg)
![pl](https://img.shields.io/badge/Polski-pl-darkred.svg)
![pt](https://img.shields.io/badge/Português-pt-lightgrey.svg)
![dk](https://img.shields.io/badge/Dansk-dk-blueviolet.svg)
![cs](https://img.shields.io/badge/Čeština-cs-orange.svg)

Brautomat32 unterstützt (fast) beliebig viele Sprachen.

## Nextion HMI-Touchdisplay (optional)

Brautomat bietet drei Display-Ansichten:

- **Übersicht** - zeigt alle konfigurierten Kessel
- **Maischeansicht** - zeigt Prozessdaten von Kessel 1
- **Manuelle Steuerung (GGM IDS2)** - direkte Leistungssteuerung

![Übersicht](docs/img/kettlepage-sm.jpg)
![Maischeansicht](docs/img/brewpage-sm.jpg)
![Manuell](docs/img/induction-mode-sm.jpg)

_Hinweis: Display-Unterstützung ist optional. Unterstützt werden Nextion ITEAD HMI 3,5" (Basic/Enhanced/Discovery-Serie)._

## Hinweis zu Version 1.60+

Nach einem Update von Version 1.59 oder älter muss **AutoTune** einmal neu durchgeführt werden.
