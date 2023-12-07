# Der Brautomat32

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://raw.githubusercontent.com/InnuendoPi/Brautomat32/main/README.en.md)

Der Brautomat ist eine Brausteuerung für die Induktionskochfelder GGM IDS1 und IDS2 mit einem ESP8266 Wemos D1 mini. Der Brautomat bietet eine intuitiv einfach zu bedienende Steuerung.

Hauptfunktionen:

* Steuerung der Induktionskochfelder GGM IDS1 und IDS2
* PID-Controller integriert
* PID-AutoTune
* Verwaltung von Maischeplänen
* Maischepläne mit bis zu 20 Teilschritten
* Steuerung für einen Nachguss Kessel (HLT)
* Steuerung von Aktoren, wie bspw. Rührwerk, Pumpen, etc.
* PWM für Aktoren
* Temperaturverlauf im Maischeprozess als Grafik (line chart)
* Rezept Import aus dem kleinen Brauhelfer2
* Rezept Import aus Maische Malz und Mehr
* Rezept Import aus BrewFather
* Rezept Export
* Optionale Unterstützung für 3,5" HMI Touchdisplay Nextion

_Hinweis: ein WebUpdate von Version 1.30 oder älter auf Version 1.31 und neuer ist nicht möglich!_

## 📚 Dokumentation

Beschreibung & Anleitung: [https://innuendopi.gitbook.io/brautomat\_de/](https://innuendopi.gitbook.io/brautomat\_de/)

Diskussion: [https://hobbybrauer.de/forum/viewtopic.php?p=486504#p486504](https://hobbybrauer.de/forum/viewtopic.php?p=486504#p486504)

Changelog: [https://github.com/InnuendoPi/Brautomat/blob/main/CHANGELOG.md](CHANGELOG.md)

## 📰 WebInterface

Der Brautomat wird über einen WebBrowser gesteuert.

![Startseite](/docs/img/brautomat.jpg)

![Startseite](/docs/img/IDS-AutoTune-Ziel.jpg)

![Startseite](/docs/img/brautomat-2.jpg)

## 💻 Nextion HMI Touchdisplay

* Kesselübersicht
* MaischeSud
* Manuelle Steuerung Kochen

![Kesselübersicht](/docs/img/kettlepage-sm.jpg) ![MaischeSud](/docs/img/brewpage-sm.jpg) ![Manuelle Steueung](/docs/img/induction-mode-sm.jpg)

_"Boxing Bell" (info), "Short School Bell" (error), "Ding sound effect" (warning) und "Success sound effect" (success) mp3 von Free Sounds Library_ [http://www.freesoundslibrary.com](http://www.freesoundslibrary.com) _Licence: Attribution 4.0 International (CC BY 4.0). You are allowed to use sound effects free of charge and royalty free in your multimedia projects for commercial or non-commercial purposes._

## ▶️ Installation

Hardware Treiber CP210x USB to UART Bridge Virtual COM Port (VCP) für div. Betriebssysteme: [Silicon Labs](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)

* Download [Firmeware.zip](https://github.com/InnuendoPi/Brautomat32/blob/main/tools/Firmware.zip)
* Firmware.zip entpacken
* Flashen.cmd editieren:
* "COM3" in Zeile 6  und Zeile 8 "esptool.exe -p COM3" anpassen
* Eingabeaufforderung (cmd.exe) öffnen und in das Verzeichnis von firmware.zip wechseln
* Firmware auf ESP32 ladeen mit "flashen.cmd"

Das Script flashen.cmd verwendet [esptool](https://github.com/espressif/esptool) (im ZIP Archiv enthalten).

## 🗺️ Multilingual

Der Brautomat32 unterstützt (nahezu) beliebig viele Sprachen. Jede Sprache hat eine eigene Sprachdatei. Die Sprachdateien im JSON Format sind im Ordner data/language hinterlegt.

_Unterstützte das Projekt und übersetze den Brautomat32 in eine neue Sprache bzw. korrigiere vorhandene Sprachdateien!_

### Erstelle eine neue Sprachdatei

Erstelle eine Kopie der Sprachdatei data/language/de.json und benenne die Datei mit zwei Zeichen in eine neue Sprachdatei:

Spanisch:       es.json\
Französisch:    fr.json\
Dänisch:        dk.json\
Niederländisch: nl.json\
etc.

Übersetze in jeder Zeile alle Wörter ab dem Doppelpunkt:

```bash
 {
   "SPEICHERN": " archivo",
   "SCHLIESSEN": " cerca",
   ...
 }
```

Öffne im Web Interface vom Brautomat den Explorer. Kopiere die neue Sprachdatei auf Deinen Brautomat in den Ordner /language. Abschließend muss die neue Sprachdatei dem Brautomat bekannt gemacht werden: editiere die Datei /lang.js

```bash
const supportedLocales = ["de", "en"];  // language files 
```

Wenn Du bspw. eine spanische Sprachdatei es.json hinzugefügt hast, dann editiere die Datei /lang.js wie folgt:

```bash
const supportedLocales = ["de", "en", "es"];  // language files 
```

Speichere die Datei mit der Tastenkombination Strg-S und starte den Brautomat neu. Nun kannst Du die neue Sprache im WebInterface auswählen.

_Teile eine neue Sprachdatei mit anderen Usern! Sende mir Deine Sprachdatei oder Deine Korrektur._

## Pin-Belegung

Der ESP32 D1 bietet ein Pinout passend zum ESP8266 (GPIO D0 bis D8). Die dargestellte Pinbelegung basiert auf dem Modul ESP32 D1 Mini NodeMCU von [AZ-Delivery](https://www.az-delivery.de/products/esp32-d1-mini)

GPIO Zuordnung:

![ESP32 D1 Pinout-1](/docs/img/ESP32-D1.pinout-1.jpg)
![ESP32 D1 Pinout-2](/docs/img/ESP32-D1.pinout-2.jpg)

| Bezeichner |   GPIO   |  Input  |  Output  | Beschreibung |
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
