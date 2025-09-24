# Der Brautomat32

[![en](https://img.shields.io/badge/language-en-red.svg)](https://github.com/InnuendoPi/Brautomat32/blob/main/README.md)

Der Brautomat ist eine Brausteuerung für den ESP32 D1 Mini NodeMCU. Der Brautomat bietet eine intuitiv einfach zu bedienende Steuerung.

***

## 💿 Download

Latest Stable Release

<!-- [![Brautomat32](https://img.shields.io/static/v1?label=Download%20Stable%20Release&message=Brautomat32%20ESP32&logo=arduino&logoColor=white&color=darkgreen)](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/main/Brautomat32.zip) -->
[![Brautomat32](https://img.shields.io/static/v1?label=Download%20Stable%20Release&message=Brautomat32%20ESP32&logo=arduino&logoColor=white&color=darkgreen)](https://github.com/InnuendoPi/Brautomat32/releases/latest)

Latest Development Release

[![Brautomat32](https://img.shields.io/static/v1?label=Download%20Development%20Release&message=Brautomat32%20ESP32&logo=arduino&logoColor=white&color=blue)](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/development/Brautomat32.zip)

## ▶️ Installation

<!-- * [Download Brautomat ESP32](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/main/Brautomat32.zip) -->
* Download Brautomat ESP32
* ZIP Datei entpacken
* Doppelklick auf die Datei "Flashen.cmd"

Das ZIP Archiv enthält [esptool](https://github.com/espressif/esptool).

Hardware driver CP210x USB to UART Bridge Virtual COM Port (VCP): [Silicon Labs](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)

## 📓 Hauptfunktionen

* Steuerung der Induktionskochfeld
* Steuerung per Relais
* Steuerung über Webhook
* integrierter PID-Controller
* PID-AutoTune
* Temperatursensoren
  * Dallas DS18B20
  * PT100 und PT1000 (MAX31865)
* Maischeplan
  * Automatisches Anfahren und halten der Rasttemperaturen
  * Würzekochen
  * Alarmierung für Hopfengaben
  * Bis zu 30 Teilschritte
* Verwaltung von Maischeplänen
* Steuerung von bis zu 3 Kochfeldern
  * MaischeSud
  * Sudpfanne (MLT)
  * Nachguss (HLT)
* Steuerung von Aktoren, wie bspw. Rührwerk, Pumpen, etc.
* Fermenter Modus
* PWM für Aktoren
* Audio Alarme
  * MP3 Alarme
  * Akkustische Signale (Piezo Buzzer)
* Toasts Nachrichten
* Temperaturverlauf im Maischeprozess als Grafik (line chart)
* Rezept Import
  * kleinen Brauhelfer2
  * Maische Malz und Mehr
  * BrewFather
* Rezept Export
* Brewfather API support
* Backup und Restore
* Unterstützung für 3,5" HMI Touchdisplay Nextion

## 📚 Dokumentation

Eine ausführliche Anleitung auf gitbook: [Anleitung & Beschreibung](https://innuendopi.gitbook.io/brautomat32/)\
Das Hobbybrauer Forum: [Diskussion & Neuigkeiten](https://hobbybrauer.de/forum/viewtopic.php?p=486504#p486504)\
Die letzten Änderungen: [Changelog](https://github.com/InnuendoPi/Brautomat32/blob/main/changelog.md)

## 📰 WebInterface

Der Brautomat wird über einen WebBrowser gesteuert.

![Startseite](docs/img/brautomat.jpg)

![Startseite](docs/img/IDS-AutoTune-Ziel.jpg)

![Startseite](docs/img/brautomat-2.jpg)

## 💻 Nextion HMI Touchdisplay

* Kesselübersicht
* MaischeSud
* Manuelle Steuerung Kochen

![Kesselübersicht](docs/img/kettlepage-sm.jpg) ![MaischeSud](docs/img/brewpage-sm.jpg) ![Manuelle Steueung](docs/img/induction-mode-sm.jpg)

## 🗺️ Multilingual

Der Brautomat32 unterstützt (nahezu) beliebig viele Sprachen. Jede Sprache hat eine eigene Sprachdatei. Die Sprachdateien im JSON Format sind im Ordner data/language hinterlegt.

_Unterstützte das Projekt und übersetze den Brautomat32 in eine neue Sprache oder korrigiere vorhandene Sprachdateien!_

## 📙 Platine 2.1

![Platine](docs/img/Platine21.jpg)

Eine Platine für den Arduino ESP Controller ist verfügbar. Die Platine bietet neben den Schraubklemmblöcken für die GPIOs auch einen separaten Anschluss für das Induktionskochfeld sowie drei Anschlüsse für Temperatursensoren. Die Gerber Datei ist im Ordner Gehaeuse gespeichert.

## 📗 Gehäuse

![Gehäuse](docs/img/brautomat_01.jpg)
![Platine](docs/img/brautomat_02.jpg)

## 📘 Pin-Belegung

Die dargestellte Pinbelegung basiert auf dem Modul ESP32 D1 Mini NodeMCU von [AZ-Delivery](https://www.az-delivery.de/products/esp32-d1-mini)

GPIO Zuordnung:

![ESP32 D1 Pinout-1](docs/img/ESP32-D1.pinout-1.jpg) ![ESP32 D1 Pinout-2](docs/img/ESP32-D1.pinout-2.jpg)

| Bezeichner | GPIO    | Input  | Output | Beschreibung                                  |
| ---------- | ------- | ------ | ------ | --------------------------------------------- |
| D0         | GPIO026 | ok     | ok     |                                               |
| D1         | GPIO022 | ok     | ok     |                                               |
| D2         | GPIO021 | ok     | ok     |                                               |
| D3         | GPIO017 | ok     | ok     | DS18B20                                       |
| D4         | GPIO016 | ok     | ok     |                                               |
| D5         | GPIO018 | ok     | ok     | GGM IDS Interrupt blue/green                  |
| D6         | GPIO019 | ok     | ok     | GGM IDS Command yellow                        |
| D7         | GPIO023 | ok     | ok     | GGM IDS Relay white                           |
| D8         | GPIO005 | ok     | ok     | Buzzer                                        |
| D9         | GPIO027 | ok     | ok     | SCLK PT100x                                   |
| D10        | GPIO025 | ok     | ok     | MISO PT100x                                   |
| D11        | GPIO032 | ok     | ok     | MOSI PT100x                                   |
| D12        | GPIO012 | (ok)   | ok     | TDI, boot fails if pulled high                |
| D13        | GPIO004 | ok     | ok     | CS0 PT100x                                    |
| D14        | GPIO000 | pullUp | (ok)   | must be low to enter flash mode               |
| D15        | GPIO002 | ok     | ok     | onboard LED, must be low to enter flash mode  |
| D16        | GPIO033 | ok     | ok     | CS1 PT100x                                    |
| D17        | GPIO014 | ok     | ok     | CS2 PT100x                                    |
| D18        | GPIO015 | ok     | ok     |                                               |
| D19        | GPIO013 | ok     | ok     |                                               |
| D20        | GPIO010 | (ok)   | (ok)   | SD3 SPI flash                                 |
||||||

Pins connected to the integrated SPI flash and not recommended for other use: CLK (IO6), SD0/SDD (IO7), SD1 (IO8), SD2 (IO9), SD3 (IO10), CMD (IO11)\
GPIOs 34 to 39 are input only pins.

## 🔉MP3 Dateien

_Legal note: "Boxing Bell" (info), "Short School Bell" (error), "Ding sound effect" (warning) und "Success sound effect" (success) mp3 von Free Sounds Library_ [http://www.freesoundslibrary.com](http://www.freesoundslibrary.com) _Licence: Attribution 4.0 International (CC BY 4.0). You are allowed to use sound effects free of charge and royalty free in your multimedia projects for commercial or non-commercial purposes._
