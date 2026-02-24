# Brautomat32

<!-- ![Sprache: Deutsch](https://img.shields.io/badge/Sprache-de-red.svg) -->
[![de](https://img.shields.io/badge/Deutsch-de-red.svg)](https://github.com/InnuendoPi/Brautomat32/blob/main/README.de.md)
![PlatformIO](https://img.shields.io/badge/platform-ESP32-blue)
![Framework](https://img.shields.io/badge/framework-Arduino-green)
![Version](https://img.shields.io/github/v/release/InnuendoPi/Brautomat32)

**Brautomat32** is a brewing and fermenting controller for ESP32.
It provides a practical, browser-based control interface for brew day and fermentation.

**Important for version 1.60:**
When updating from version 1.59 or older, run **AutoTune** once after the update.

![WebInterface](docs/img/dashboard160.jpg)

---

## Download

| Release type | Download |
|--------------|----------|
| **Release** | [![Stable](https://img.shields.io/static/v1?label=Stable%20Release&message=Brautomat32%20ESP32&logo=arduino&logoColor=white&color=darkgreen)](https://github.com/InnuendoPi/Brautomat32/releases/latest) |
| **Development** | [![Dev](https://img.shields.io/static/v1?label=Development%20Release&message=Brautomat32%20ESP32&logo=arduino&logoColor=white&color=blue)](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/development/Brautomat32.zip) |

---

## Installation (quick start)

1. Download **Brautomat ESP32**.
2. Unzip the file.
3. Run **Flashen.cmd**.

The ZIP archive already includes [esptool](https://github.com/espressif/esptool).

Usually not required, but sometimes needed on Windows:
**CP210x USB to UART Bridge Virtual COM Port (VCP)** driver - [Silicon Labs Download](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)

---

## Features

Brautomat is a standalone brewing controller with support for:

* GGM induction cooker control
* Relay-based heater control
* Webhook-based control
* Integrated PID control
* PID AutoTune
* DS18B20 digital sensors
* PT100x analog sensors via MAX31865
* Mash plan management
  * automatic heat-up and hold
  * automatic rest timer handling
  * actuator actions in mash steps
  * up to 30 mash steps
* Up to 3 kettle channels
  * mash kettle
  * SUD/MLT kettle
  * HLT/NACHGUSS kettle
* Kettle hardware profiles
* Fermenter mode (beta)
* Actuator control (agitators, pumps, etc.)
* PWM output control
* Temperature charting
* MP3 alarms and toast messages
* Recipe import
  * kleinerBrauhelfer2
  * Maische Malz und Mehr
  * BrewFather
* Recipe export
* BrewFather recipe/batch API support
* Backup and restore
* Nextion 3.5" HMI touch display (optional)
* WebUpdate for firmware updates
* Multilingual UI support
* Dashboard mode (1.60+)

---

## Documentation

* [Instructions & description](https://innuendopi.gitbook.io/brautomat32/)
* [Forum Hobbybrauer (German)](https://hobbybrauer.de/forum/viewtopic.php?p=486504#p486504)
* [Changelog](https://github.com/InnuendoPi/Brautomat32/blob/main/changelog.md)

---

## Web interface

Brautomat runs in modern browsers on tablet, smartphone, and PC.

<!-- markdownlint-disable-next-line MD033 -->
<details>
<!-- markdownlint-disable-next-line MD033 -->
<summary>Show Web Interface screenshots</summary>

![WebInterface](docs/img/brautomat160.jpg)
![WebInterface](docs/img/brautomat160-2.jpg)

</details>

---

## Nextion HMI touch display (optional)

Brautomat provides three display views:

* **Overview** - shows all configured kettles
* **Mash view** - shows kettle 1 process data
* **Manual control (GGM IDS2)** - direct power control

<!-- markdownlint-disable-next-line MD033 -->
<details>
<!-- markdownlint-disable-next-line MD033 -->
<summary>Show display screenshots</summary>

![Overview](docs/img/kettlepage-sm.jpg)
![Mash view](docs/img/brewpage-sm.jpg)
![Manual control](docs/img/induction-mode-sm.jpg)

_Note: Display support is optional. Supported models are Nextion ITEAD HMI 3.5" (Basic/Enhanced/Discovery series)._

</details>

---

## Multilingual

[![de](https://img.shields.io/badge/Deutsch-de-red.svg)](data/language/deutsch.json)
[![en](https://img.shields.io/badge/English-en-blue.svg)](language/english.json)
[![es](https://img.shields.io/badge/Español-es-yellow.svg)](language/espanol.json)
[![fr](https://img.shields.io/badge/Français-fr-lightgrey.svg)](language/francais.json)
[![nl](https://img.shields.io/badge/Nederlands-nl-orange.svg)](language/nederlands.json)
[![no](https://img.shields.io/badge/Norsk-no-green.svg)](language/norsk.json)
[![it](https://img.shields.io/badge/Italiano-it-lightblue.svg)](language/italiano.json)
[![sv](https://img.shields.io/badge/Svenska-sv-yellowgreen.svg)](language/svenska.json)
[![pl](https://img.shields.io/badge/Polski-pl-darkred.svg)](language/polski.json)
[![pt](https://img.shields.io/badge/Português-pt-lightgrey.svg)](language/portugues.json)
[![dk](https://img.shields.io/badge/Dansk-dk-blueviolet.svg)](language/dansk.json)
[![cs](https://img.shields.io/badge/Čeština-cs-orange.svg)](language/cestina.json)

Brautomat32 supports (almost) any number of languages.

Support the project by adding a new language or improving existing translations.

---

## Circuit board 2.1

<!-- markdownlint-disable-next-line MD033 -->
<details>
<!-- markdownlint-disable-next-line MD033 -->
<summary>Show screenshot circuit board</summary>

![Platine](docs/img/Platine21.jpg)

</details>

A dedicated **circuit board** for ESP32 D1 Mini NodeMCU is available.
It includes:

* screw terminals for GPIOs
* dedicated GGM IDS interface
* three DS18B20 sensor ports

Gerber files are stored in the `Gehaeuse` folder.

[![Gerber files](https://img.shields.io/static/v1?label=Gerber%20Files&message=Download&logo=arduino&logoColor=white&color=blue)](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/main/Gehaeuse/Brautomat-2.1-Gerber_2024-04-03.zip)

---

## Case

<!-- markdownlint-disable-next-line MD033 -->
<details>
<!-- markdownlint-disable-next-line MD033 -->
<summary>Show case screenshots</summary>

![Case Front](docs/img/brautomat_01.jpg)
![Case Inside](docs/img/brautomat_02.jpg)

</details>

---

## Pinout

The following assignment applies to **ESP32 D1 Mini NodeMCU** boards (for example [AZ-Delivery](https://www.az-delivery.de/products/esp32-d1-mini)).

### GPIO mapping

<!-- markdownlint-disable-next-line MD033 -->
<details>
<!-- markdownlint-disable-next-line MD033 -->
<summary>Show ESP32 pinout screenshots</summary>

![ESP32 D1 Pinout-1](docs/img/ESP32-D1.pinout-1.jpg) ![ESP32 D1 Pinout-2](docs/img/ESP32-D1.pinout-2.jpg)

</details>

| Name | GPIO | Input | Output | Notes |
|:------|:------:|:------:|:------:|:--------------------------------------------|
| D0 | GPIO026 | ok | ok | |
| D1 | GPIO022 | ok | ok | |
| D2 | GPIO021 | ok | ok | |
| D3 | GPIO017 | ok | ok | DS18B20 |
| D4 | GPIO016 | ok | ok | |
| D5 | GPIO018 | ok | ok | GGM IDS interrupt (blue/green) |
| D6 | GPIO019 | ok | ok | GGM IDS command (yellow) |
| D7 | GPIO023 | ok | ok | GGM IDS relay (white) |
| D8 | GPIO005 | ok | ok | Buzzer |
| D9 | GPIO027 | ok | ok | SCLK PT100x |
| D10 | GPIO025 | ok | ok | MISO PT100x |
| D11 | GPIO032 | ok | ok | MOSI PT100x |
| D12 | GPIO012 | (ok) | ok | Boot fails if pulled high (TDI, strapping) |
| D13 | GPIO004 | ok | ok | CS0 PT100x |
| D14 | GPIO000 | pullUp | (ok) | Must be LOW to enter flash mode |
| D15 | GPIO002 | ok | ok | Onboard LED, must be LOW to enter flash mode |
| D16 | GPIO033 | ok | ok | CS1 PT100x |
| D17 | GPIO014 | ok | ok | CS2 PT100x |
| D18 | GPIO015 | ok | ok | |
| D19 | GPIO013 | ok | ok | |
| D20 | GPIO010 | (ok) | (ok) | SD3 SPI flash |

Pins connected to onboard flash (CMD, CLK, SD0-SD3) are not recommended for regular GPIO use.

---

## MP3 files

Legal note:
"Boxing Bell" (info), "Short School Bell" (error), "Ding sound effect" (warning), and "Success sound effect" (success) are from **Free Sounds Library**.

* Source: [freesoundslibrary.com](http://www.freesoundslibrary.com)
* License: **Attribution 4.0 International (CC BY 4.0)** (commercial and non-commercial use)

---

## Community and support

* [GitHub Discussions](https://github.com/InnuendoPi/Brautomat32/discussions)
* [Report an issue](https://github.com/InnuendoPi/Brautomat32/issues)
* If you like this project, consider giving it a star.

---
