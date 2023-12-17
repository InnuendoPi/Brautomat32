# Brautomat

[![de](https://img.shields.io/badge/lang-de-green.svg)](https://raw.githubusercontent.com/InnuendoPi/Brautomat32/main/README.md)

Brautomat is a brewing controller for GGM IDS induction hobs with an ESP32 Wemos D1 mini. Brautomat is used in the brewery by hobby brewers and offers intuitive, easy-to-use controls. During mashing, rest temperatures are reached automatically and the rest times are adhered too. Brautomat also supports the the boiling process of the wort and adding hops. In an ascending infusion mash process, the brautomat can fully automate the mashing process.

 _Note: induction hobs from other manufacturers than GGM IDS are not supported._

---

## Features

Brautomat is a stand alone brewing device and offers :

* induction hob controller GGM IDS
* integrated PID-Controller
* digital sensors DS18B20
* analog sensors PT100x with MAX31865 Amplifier
* PID-AutoTune
* Mash plan management
* Mash plans with up to 20 steps
* Hot liquid tank controller (HLT)
* Controlling actors like agitator, pumps etc.
* PWM for heating elements
* Temperature progression in the mashing process (line chart)
* MP3 alerts
* Toasts messages
* Recipe import kleinen Brauhelfer2
* Recipe import Maische Malz und Mehr
* Recipe import BrewFather
* Recipe export
* Nextion 3,5" HMI Touchdisplay (optional)

## 📚 Documentation

Manual: [https://innuendopi.gitbook.io/brautomat\_de/](https://innuendopi.gitbook.io/brautomat\_de/)

Discussion: [https://hobbybrauer.de/forum/viewtopic.php?p=486504#p486504](https://hobbybrauer.de/forum/viewtopic.php?p=486504#p486504)

Changelog: [https://github.com/InnuendoPi/Brautomat/blob/main/CHANGELOG.md](CHANGELOG.md)

## 📰 WebInterface

The Brautomat is controlled via a web browser. A browser with support for CSS3, HTML5, Javascript and Server Sent Events (SSE) is required.\

Compatible browser list [Browser](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#browser_compatibility)

![Startseite](/docs/img/brautomat.jpg)

![Startseite](/docs/img/IDS-AutoTune-Ziel.jpg)

![Startseite](/docs/img/brautomat-2.jpg)

## 💻 Nextion HMI Touchdisplay

Note: the display is an optional extension. Only Nextion ITEAD HMI 3.5" Touchdisplays are supported.

* Overview
* Mash tun
* Manual control cooking

![Overview](/docs/img/kettlepage-sm.jpg) ![Mash tun](/docs/img/brewpage-sm.jpg) ![Manual control](/docs/img/induction-mode-sm.jpg)

## ▶️ Installation

Hardware driver CP210x USB to UART Bridge Virtual COM Port (VCP): [Silicon Labs](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)

* Download [Firmeware.zip](https://github.com/InnuendoPi/Brautomat32/blob/main/tools/Firmware.zip)
* unzip Firmware.zip
* edit Flashen.cmd:
* change "COM3" in line 6 und line 8 "esptool.exe -p COM3" as you need
* open command line (cmd.exe) and change into firmware.zip directory
* start script "flashen.cmd"

Script flashen.cmd use [esptool](https://github.com/espressif/esptool).

## 🗺️ Multilingual

Brautomat32 supports (almost) any number of languages. Each language has its own language file. The language files in JSON format are stored in the folder data/language.

_Supported the project and translated the Brautomat into a new language or corrected existing language files!_

### Create a new language file

Make a copy of the language file data/language/de.json and rename the file with two characters to a new language file:

spanish:    es.json\
french:     fr.json\
danish:     dk.json\
dutch:      nl.json\
etc.

Translate all words starting from the colon on each line:

```bash
 {
   "SPEICHERN": " archivo",
   "SCHLIESSEN": " cerca",
   ...
 }
```

Open Explorer in the Brautomat's web interface. Copy the new language file to the /language folder on your Brautomat. Finally, the new language file must be made known to the Brautomat: edit the file /lang.js

```bash
const supportedLocales = ["de", "en"];  // language files 
```

For example, if you added a Spanish language file es.json, then edit the /lang.js file as follows:

```bash
const supportedLocales = ["de", "en", "es"];  // language files 
```

Use Ctrl-S to save the file and restart the Brautomat. Now you can select the new language in the web interface.

_Share a new language file with other users! Send me your language file or your correction._

## Pin-Belegung

The ESP32 D1 offers a pinout suitable for the ESP8266 (GPIO D0 to D8). The pin assignment shown is based on the ESP32 D1 Mini NodeMCU module from [AZ-Delivery](https://www.az-delivery.de/products/esp32-d1-mini)

GPIO mapping:

![ESP32 D1 Pinout-1](/docs/img/ESP32-D1.pinout-1.jpg)
![ESP32 D1 Pinout-2](/docs/img/ESP32-D1.pinout-2.jpg)

|    Name    |   GPIO   |  Input  |  Output  | notes        |
| ---------- | -------- | ------- | -------- | ------------ |
|     D0     |  GPIO026 |   ok    |   ok     |              |
|     D1     |  GPIO022 |   ok    |   ok     |              |
|     D2     |  GPIO021 |   ok    |   ok     |              |
|     D3     |  GPIO017 |   ok    |   ok     |              |
|     D4     |  GPIO016 |   ok    |   ok     |              |
|     D5     |  GPIO018 |   ok    |   ok     |              |
|     D6     |  GPIO019 |   ok    |   ok     |              |
|     D7     |  GPIO023 |   ok    |   ok     |              |
|     D8     |  GPIO005 |   ok    |   ok     |              |
|     D9     |  GPIO027 |   ok    |   ok     | SCLK         |
|     D10    |  GPIO025 |   ok    |   ok     | MISO         |
|     D11    |  GPIO032 |   ok    |   ok     | MOSI         |
|     D12    |  GPIO012 |  (ok)   |   ok     | TDI, boot fails if pulled high, strapping pin |
|     D13    |  GPIO004 |   ok    |   ok     | CS0         |
|     D14    |  GPIO000 | pullUp  |  (ok)    | must be low to enter flash mode |
|     D15    |  GPIO002 |   ok    |   ok     | onboard LED, must be low to enter flash mode |
|     D16    |  GPIO033 |   ok    |   ok     | CS1          |
|     D17    |  GPIO014 |   ok    |   ok     | CS2          |
|     D18    |  GPIO015 |   ok    |   ok     |              |
|     D19    |  GPIO013 |   ok    |   ok     |              |

Pins connected to onboard flash and not recommended for GPIO use:
CMD (IO11), CLK (IO6), SD0/SDD (IO7), SD1 (IO8), SD2 (IO9) and SD3 (IO10)

_"Boxing Bell" (info), "Short School Bell" (error), "Ding sound effect" (warning) and "Success sound effect" (success) mp3 from Free Sounds Library [http://www.freesoundslibrary.com](http://www.freesoundslibrary.com) Licence: Attribution 4.0 International (CC BY 4.0). You are allowed to use sound effects free of charge and royalty free in your multimedia projects for commercial or non-commercial purposes._
