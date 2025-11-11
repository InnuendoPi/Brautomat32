# Brautomat32

<!-- ![Sprache: Deutsch](https://img.shields.io/badge/Sprache-de-red.svg) -->
[![de](https://img.shields.io/badge/Deutsch-de-red.svg)](https://github.com/InnuendoPi/Brautomat32/blob/main/README.de.md)
![PlatformIO](https://img.shields.io/badge/platform-ESP32-blue)
![Framework](https://img.shields.io/badge/framework-Arduino-green)
![Version](https://img.shields.io/github/v/release/InnuendoPi/Brautomat32)

The **Brautomat32** is a brewing and fermenting controller for ESP32.  
It provides an intuitive, easy-to-use control deck directly in your preferred web browser.

![WebInterface](docs/img/dashboard160.jpg)

---

## 💿 Download

| Release Type | Download |
|---------------|-----------|
| **Release** | [![Stable](https://img.shields.io/static/v1?label=Stable%20Release&message=Brautomat32%20ESP32&logo=arduino&logoColor=white&color=darkgreen)](https://github.com/InnuendoPi/Brautomat32/releases/latest) |
| **Development** | [![Dev](https://img.shields.io/static/v1?label=Development%20Release&message=Brautomat32%20ESP32&logo=arduino&logoColor=white&color=blue)](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/development/Brautomat32.zip) |

---

## ▶️ Installation

* Download **Brautomat ESP32**
* Unzip the downloaded file
* Double-click **Flashen.cmd**

The ZIP file includes [esptool](https://github.com/espressif/esptool).  

In most cases not required:  
**CP210x USB to UART Bridge Virtual COM Port (VCP)** driver – [Silicon Labs Download](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)

---

## 📓 Features

Brautomat is a standalone brewing device and offers:

* Induction hob controller  
* Relay controller  
* Webhook controller  
* Integrated PID-Controller  
* Digital sensors DS18B20  
* Analog sensors PT100x with MAX31865 amplifier  
* PID-AutoTune  
* Mash plan management  
  * Automatic temperature reach and hold  
  * Automated rest duration timer  
  * Actor management within mash plan  
  * Up to 30 mash steps  
* Control up to 3 kettles  
  * Mash  
  * MLT  
  * HLT  
* Kettle hardware profiles  
* Fermenter mode  
* Control actors like agitator, pumps, etc.  
* PWM for heating elements  
* Temperature progression chart  
* MP3 alerts  
* Toast messages  
* Recipe import  
  * kleinerBrauhelfer2  
  * Maische Malz und Mehr  
  * BrewFather  
* Recipe export  
* BrewFather recipes and batches API support  
* Backup and Restore  
* Nextion 3.5" HMI Touchdisplay (optional)  
* WebUpdate for firmware updates  
* Multilingual support  
* **[NEW] Dashboard**  
* And much more...

---

## 📚 Documentation

* 📘 [Instructions & Description](https://innuendopi.gitbook.io/brautomat32/)  
* 💬 [Forum Hobbybrauer (German)](https://hobbybrauer.de/forum/viewtopic.php?p=486504#p486504)  
* 🕓 [Changelog](https://github.com/InnuendoPi/Brautomat32/blob/main/changelog.md)

---

## 📰 Web Interface

The Brautomat is operated via any modern web browser. You can use your tablet, smartphone, or PC.

<!-- markdownlint-disable-next-line MD033 -->
<details>
<!-- markdownlint-disable-next-line MD033 -->
<summary>Show Web Interface screenshots</summary>

![WebInterface](docs/img/brautomat160.jpg)  
![WebInterface](docs/img/brautomat160-2.jpg)

</details>

---

## 💻 Nextion HMI Touchdisplay (optional)

Brautomat offers three different display views:

* **Overview** – all kettles are displayed  
* **Mash tun** – displays the Maische/Sud kettle (first kettle)  
* **Manual Control (GGM IDS2)** – for direct hob control  

<!-- markdownlint-disable-next-line MD033 -->
<details>
<!-- markdownlint-disable-next-line MD033 -->
<summary>Show display screenshots</summary>

![Overview](docs/img/kettlepage-sm.jpg)  
![Mash tun](docs/img/brewpage-sm.jpg)  
![Manual control](docs/img/induction-mode-sm.jpg)

_Note: The display is an optional extension. Only Nextion ITEAD HMI 3.5" touch displays are supported._

</details>

---

## 🗺️ Multilingual

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
![dk](https://img.shields.io/badge/Dansk-da-blueviolet.svg)
![cs](https://img.shields.io/badge/Čeština-cs-orange.svg)

Brautomat32 supports (almost) any number of languages.  
Each language has its own JSON-based translation file in `/data/language`.

💡 _Support this project — translate Brautomat into a new language or help improve existing translations!_

---

## 📙 Circuit Board 2.1

![Platine](docs/img/Platine21.jpg)

A **circuit board** for the ESP32 D1 Mini NodeMCU is available.  
It offers screw terminals for GPIOs, a dedicated GGM IDS interface, and three DS18B20 sensor ports.  
Gerber files are stored in the `Gehaeuse` folder.  

[![Gerber files](https://img.shields.io/static/v1?label=Gerber%20Files&message=Download&logo=arduino&logoColor=white&color=blue)](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/main/Gehaeuse/Brautomat-2.1-Gerber_2024-04-03.zip)

---

## 📗 Case

![Case Front](docs/img/brautomat_01.jpg)  
![Case Inside](docs/img/brautomat_02.jpg)

---

## 📈 Pinout

The following pin assignment applies to the **ESP32 D1 Mini NodeMCU** (e.g. from [AZ-Delivery](https://www.az-delivery.de/products/esp32-d1-mini)):

### GPIO Mapping

![ESP32 D1 Pinout-1](docs/img/ESP32-D1.pinout-1.jpg) ![ESP32 D1 Pinout-2](docs/img/ESP32-D1.pinout-2.jpg)

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

⚠️ Pins connected to onboard flash (CMD, CLK, SD0–SD3) are not recommended for GPIO use.

---

## 🔉 MP3 Files

_Legal note:_  
“Boxing Bell” (info), “Short School Bell” (error), “Ding sound effect” (warning), and “Success sound effect” (success) are from **Free Sounds Library**  
🔗 [freesoundslibrary.com](http://www.freesoundslibrary.com)  
📜 License: **Attribution 4.0 International (CC BY 4.0)** — free for commercial and non-commercial use.

---

## 💬 Community & Support

* [GitHub Discussions](https://github.com/InnuendoPi/Brautomat32/discussions)  
* [Report an Issue](https://github.com/InnuendoPi/Brautomat32/issues)  
* ⭐ _If you like this project, please consider giving it a star!_

---
