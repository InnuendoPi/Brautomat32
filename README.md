# Der Brautomat

Für ESP32 D1 mini

## Erste Installation

* Download [https://github.com/InnuendoPi/Brautomat32/blob/main/tools/Firmware.zip](Firmeware.zip)
* Entpacke Firmware.zip
* Editiere Flashen.cmd
* Ändere "COM3" in Zeile 6 "esptool.exe -p COM3"
* und ändere "COM3" in Zeile 8 "esptool.exe -p COM3" auf den richtigen seriellen Anschluss
* abspeichern
* Öffne Eingabeaufforderung (cmd.exe) und wechsel in das Verzeichnis von firmware.zip
* Flashe den ESP32 mit "flashen.cmd"

Das Script flashen.cmd verwendet [https://github.com/espressif/esptool](esptool) (im ZIP Archiv enthalten).

## Firmware Update

* WebUpdate
* DateiUpdate

## 📚 Dokumentation

Beschreibung & Anleitung: [https://innuendopi.gitbook.io/brautomat\_de/](https://innuendopi.gitbook.io/brautomat\_de/)
