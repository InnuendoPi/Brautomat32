# Der Brautomat

Portierung auf ESP32 D1

## Erste Installation

* Download [https://github.com/InnuendoPi/Brautomat32/blob/main/tools/Firmware.zip](Firmeware.zip)
* Firmware.zip entpacken
* Flashen.cmd editieren:
* "COM3" in Zeile 6  und Zeile 8"esptool.exe -p COM3" anpassen
* Eingabeaufforderung (cmd.exe) öffnen und in das Verzeichnis von firmware.zip wechseln
* Firmware auf ESP32 ladeen mit "flashen.cmd"

Das Script flashen.cmd verwendet [https://github.com/espressif/esptool](esptool) (im ZIP Archiv enthalten).

## Firmware Update

* WebUpdate
* DateiUpdate

## 📚 Dokumentation

Beschreibung & Anleitung: [https://innuendopi.gitbook.io/brautomat\_de/](https://innuendopi.gitbook.io/brautomat\_de/)

## Pin-Belegung

Der ESP32 D1 bietet ein Pinout passend zum ESP8266 (GPIO D0 bis D8). Zur Orientierung Pin-Belegung ist dieser Blogbeitrag lesenswert: [https://www.fambach.net/d1-mini-esp8266-modul-2-2/]\
Es stehen 20 GPIO (D0 bis D19) zur Verfügung. Der ESP32 GPIO ist als Nummer in den Klammern angegeben.
