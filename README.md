# Der Brautomat

Portierung auf ESP32 D1

## Erste Installation

* Download [Firmeware.zip](https://github.com/InnuendoPi/Brautomat32/blob/main/tools/Firmware.zip)
* Firmware.zip entpacken
* Flashen.cmd editieren:
* "COM3" in Zeile 6  und Zeile 8"esptool.exe -p COM3" anpassen
* Eingabeaufforderung (cmd.exe) öffnen und in das Verzeichnis von firmware.zip wechseln
* Firmware auf ESP32 ladeen mit "flashen.cmd"

Das Script flashen.cmd verwendet [esptool](https://github.com/espressif/esptool) (im ZIP Archiv enthalten).

## Firmware Update

* WebUpdate
* DateiUpdate

## 📚 Dokumentation

Beschreibung & Anleitung: [gitbook](https://innuendopi.gitbook.io/brautomat\_de/)

## Pin-Belegung

Der ESP32 D1 bietet ein Pinout passend zum ESP8266 (GPIO D0 bis D8). Die folgende Pinbelegung basiert auf dem Modul ESP32 D1 Mini NodeMCU von [AZ-Delivery](https://www.az-delivery.de/products/esp32-d1-mini)

GPIO Zuordnung:

![ESP32 D1 Pinout-1](/docs/img/ESP32-D1.pinout-1.jpg)
![ESP32 D1 Pinout-2](/docs/img/ESP32-D1.pinout-2.jpg)

(Grafiken &copy; [AZ-Delivery](https://cdn.shopify.com/s/files/1/1509/1638/files/D1_Mini_ESP32_Datenblatt_AZ-Delivery_Vertriebs_GmbH.pdf?v=1604068666) - Anpassungen für Pinbelegung mit D-Bezeichnern)

Bezeichner |   GPIO   | Beschreibung
---------- | -------- | -------- |
    D0     |  GPIO026 |
    D1     |  GPIO022 |
    D2     |  GPIO021 |
    D3     |  GPIO017 |
    D4     |  GPIO016 |
    D5     |  GPIO018 |
    D6     |  GPIO019 |
    D7     |  GPIO023 |
    D8     |  GPIO005 |
    D9     |  GPIO027 |
    D10    |  GPIO025 |
    D11    |  GPIO032 |
    D12    |  GPIO012 | TDI
    D13    |  GPIO004 |
    D14    |  GPIO000 |
    D15    |  GPIO002 |
    D16    |  GPIO033 |
    D17    |  GPIO014 | TMS
    D18    |  GPIO015 |
    D19    |  GPIO013 |
    D20    |  GPIO010 |
