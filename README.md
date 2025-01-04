# Der Brautomat für ESP32

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/InnuendoPi/Brautomat32/blob/main/README.en.md)

Der Brautomat ist eine Brausteuerung für die Induktionskochfelder GGM IDS1 und IDS2 mit einem ESP32 D1 mini. Der Brautomat bietet eine intuitiv einfach zu bedienende Steuerung.

***

## Hauptfunktionen

* Steuerung der Induktionskochfelder GGM
  * GGM IDS1
  * GGM IDS2
* integrierter PID-Controller
* PID-AutoTune
* Temperatursensoren
  * Dallas DS18B20
  * PT100 und PT1000 (MAX31865)
* Maischeplan
  * Automatisches Anfahren und halten der Rasttemperaturen
  * Würzekochen
  * Alarmierung für Hopfengaben
  * Bis zu 20 Teilschritte
* Verwaltung von Maischeplänen
* Steuerung Induktionskochfeld als Maischepfanne
* Steuerung Induktionskochfeld als Sudpfanne (Würzepfanne)
* Steuerung Nachguss (HLT)
* Steuerung von Aktoren, wie bspw. Rührwerk, Pumpen, etc.
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
* Unterstützung für 3,5" HMI Touchdisplay Nextion

## 📚 Dokumentation

Beschreibung & Anleitung: [https://innuendopi.gitbook.io/brautomat32/](https://innuendopi.gitbook.io/brautomat32/)\
Diskussion: [https://hobbybrauer.de/forum/viewtopic.php?p=486504#p486504](https://hobbybrauer.de/forum/viewtopic.php?p=486504#p486504)\
Changelog: [https://github.com/InnuendoPi/Brautomat/blob/main/CHANGELOG.md](./)

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

_Unterstützte das Projekt und übersetze den Brautomat32 in eine neue Sprache bzw. korrigiere vorhandene Sprachdateien!_

## 📙 Platine 2.1

![Platine](docs/img/Platine21.jpg)

Eine Platine für den Arduino ESP Controller ist verfügbar. Die Platine bietet neben den Schraubklemmblöcken für die GPIOs auch einen separaten Anschluss für das Induktionskochfeld sowie drei Anschlüsse für Temperatursensoren. Die Gerber Datei ist im Ordner Tools gespeichert. Die Platine 2.0 kann sowohl mit dem ESP8266, als auch mit dem ESP32 betrieben werden.

## 📗 Gehäuse

![Gehäuse](docs/img/brautomat_01.jpg)
![Platine](docs/img/brautomat_02.jpg)

## 📘 Pin-Belegung

Der ESP32 D1 bietet ein Pinout passend zum ESP8266 (GPIO D0 bis D8). Die dargestellte Pinbelegung basiert auf dem Modul ESP32 D1 Mini NodeMCU von [AZ-Delivery](https://www.az-delivery.de/products/esp32-d1-mini)

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
| D8         | GPIO005 | ok     | ok     | Buzzer, outputs PWM signal at boot            |
| D9         | GPIO027 | ok     | ok     | SCLK                                          |
| D10        | GPIO025 | ok     | ok     | MISO                                          |
| D11        | GPIO032 | ok     | ok     | MOSI                                          |
| D12        | GPIO012 | (ok)   | ok     | TDI, boot fails if pulled high                |
| D13        | GPIO004 | ok     | ok     | CS0                                           |
| D14        | GPIO000 | pullUp | (ok)   | must be low to enter flash mode               |
| D15        | GPIO002 | ok     | ok     | onboard LED, must be low to enter flash mode  |
| D16        | GPIO033 | ok     | ok     | CS1                                           |
| D17        | GPIO014 | ok     | ok     | CS2, outputs PWM signal at boot               |
| D18        | GPIO015 | ok     | ok     | outputs PWM signal at boot                    |
| D19        | GPIO013 | ok     | ok     |                                               |
| D20        | GPIO010 | (ok)   | (ok)   | SD3 SPI flash                                 |
||||||

Pins connected to the integrated SPI flash and not recommended for other use: CLK (IO6), SD0/SDD (IO7), SD1 (IO8), SD2 (IO9), SD3 (IO10), CMD (IO11)\
GPIOs 34 to 39 are input only pins.

## 🔉MP3 Dateien

_Legal note: "Boxing Bell" (info), "Short School Bell" (error), "Ding sound effect" (warning) und "Success sound effect" (success) mp3 von Free Sounds Library_ [http://www.freesoundslibrary.com](http://www.freesoundslibrary.com) _Licence: Attribution 4.0 International (CC BY 4.0). You are allowed to use sound effects free of charge and royalty free in your multimedia projects for commercial or non-commercial purposes._

## Changelog

Version 1.47

* Update:       Nextion Display Dateien aktualisiert
* Neu:          Toast Message, wenn der Rast Timer nach einer Unterbrechung angeapsst wurde
* Neu:          es wird ein Zeitstempel mitgespeichert, um die Dauer einer Unterbrechung bemessen zu können
* Neu:          Webhook für Nachguss
* Neu:          Webhook für Aktoren
* Neu:          Eigenschaft Name hinzugefügt
* Neu:          zweites Induktionskochfeld "SUD" kann mit dem Brautomat gesteuert werden
* Neu:          neuer Sonderbefehl SUD für die zweite GGM IDS
* Neu:          Display Firmware Anzeige Kesselübersicht um zweites Induktionskochfeld erweitert
* Geändert:     Sonderbefehle können auch Dauer und Temperatur verarbeiten
* Geändert:     im Display wird auf der Seite Kesselübersicht der Name angezeigt
* Fix:          Suche nach DS18B20 Adressen korrigiert

Version 1.46

* Neu:          Alle Datenübertragungen an das Web Interface und vom WebIf an den ESP auf JSON umgestellt
* Neu:          Überprüfung aller Eingabe im Web interface (client side validation). Keine Überprüfung beim Editieren der Tabelle Maischeplan
* Hinweis:      die Eingabe von Umlauten und Sonderzeichen (außer #) in Sensor- und Aktornamen im WebIf ist nicht mehr möglich
* Hinweis:      Sensor- und Aktornamen dürfen maximal 20 Zeichen lang sein
* Hinweis:      Maischplan Namen sind auf maximal 25 Zeichen beschränkt. Namen werden gekürzt (Begrenzung LittleFS Dateiname)
* Fix:          Import Maischeplan Typ Brautomat Formatfehler Rezepte mit Version älter als 1.39. Überprüfung eingefügt
* Fix:          Doppeltes Warnsignal bei Toastnachrichten Typ Error entfernt
* Fix:          Einstelllung für das Logging Display wurde nicht korrekt gespeichert
* Fix:          Display Anzeige Modus manuelle Steuerung fehlerhafte Status Überprüfung (typo)
* Fix:          Abfrage AdruinoJSON containskey (deprecated) ersetzt
* Fix:          die Vorgaben Temperatur WPH und VWH wurde nicht korrekt übertragen. Das konnte zu einem Abbruch beim Speichern der Konfiguration führen.
* Fix:          InnuNextion Display Lib: type mismatch für das Logging
* Fix:          InnuNextion Display Lib: wenn die Startseite auf MaischeSud oder Manuell eingestellt war, war der erste Seitenwechsel am Display fehlerhaft
* Fix:          Toast Nachricht WebUpdate abgeschlossen wurde nach Umstellung JSON nicht mehr angezeigt
* Fix:          Timing Problem behoben, wenn die PID Regel von manueller PID Modus auf AutoTune PID Modus umgestellt wurde (Kp, Kd und Ki blieben auf 0)
* Fix:          fehlerhafte GPIO Zuweisung Pin D16 korrigiert
* Fix:          Überprüfung GPIO D16 in Benutzung korrigiert
* Fix:          Fehler korrigiert, wenn ein zweiter PT100x Sensor (an GPIO D16) hinzugefügt wurde
* Fix:          Voreinstellung Logging System von INFO auf NONE korrigiert
* Fix:          Überprüfung der Eingabe Aktorname korrigiert
* Update:       ArduinoJSON 7.2.0
* Update:       ESPTool 4.8.0
* optimiert:    diverse Quellcode Optimierungen
* optimiert:    avoid Strings (not yet ready)
* optimiert:    mehr freier Speicher LittleFS durch gzip JS/CSS/TTF (erforderlich für ESP_IDF5)
* optimiert:    Ladevorgang JS/CSS/TTF durch gzip beschleunigt

Weitere Entwicklung: (nicht in Version 1.46 enthalten - Brautomat32 platformIO)

* Migration:    platformIO Portierung ESP32 Wemos D1 IDF4 (4.4.7) abgeschlossen
* Migration:    platformIO Portierung ESP32 Wemos D1 IDF5 (5.1.4) abgeschlossen
* Migration:    platformio Portierung ESP8266 Wemos D1 Mini (2.0.17) abgeschlossen
* Hinweis:      ein WebUpdate ESP32 von IDF4 (4.x) auf IDF5 (5.x) ist nicht möglich (geänderte Paritionen)
* Sync:         Quellcode synchronisiert ESP8266, ESP32 IDF4 und ESP32 IDF5 (pending ... )
* Sync:         Compiler Direktiven ESP8266, ESP32, ESP_IDF4 und ESP_IDF5
* Fix:          ESP-IDF5 WebUpdate Funktion httpUpdate flush durch clear ersetzt (libs, siehe github repository esp32)
* Fehler:       ESP32 Task Watchdog funktioniert (noch) nicht in der Version ESP_IDF5. In ESP_IDF5 deaktiviert
* EPS_IDF5dev:  Build EPS-IDF 5.3.1 hinzugefügt (pioarduino)
