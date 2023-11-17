# Der Brautomat

Portierung auf ESP32 D1

_Hinweis: ein WebUpdate von Version 1.30 oder älter auf Version 1.31 und neuer ist nicht möglich!_

## Erste Installation

Hardware Treiber CP210x USB to UART Bridge Virtual COM Port (VCP) für div. Betriebssysteme: [Silicon Labs](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)

* Download [Firmeware.zip](https://github.com/InnuendoPi/Brautomat32/blob/main/tools/Firmware.zip)
* Firmware.zip entpacken
* Flashen.cmd editieren:
* "COM3" in Zeile 6  und Zeile 8 "esptool.exe -p COM3" anpassen
* Eingabeaufforderung (cmd.exe) öffnen und in das Verzeichnis von firmware.zip wechseln
* Firmware auf ESP32 ladeen mit "flashen.cmd"

Das Script flashen.cmd verwendet [esptool](https://github.com/espressif/esptool) (im ZIP Archiv enthalten).

## Firmware Update

* WebUpdate
* DateiUpdate

## 📚 Dokumentation

Beschreibung & Anleitung: [gitbook](https://innuendopi.gitbook.io/brautomat\_de/)

## Pin-Belegung

Der ESP32 D1 bietet ein Pinout passend zum ESP8266 (GPIO D0 bis D8). Die dargestellte Pinbelegung basiert auf dem Modul ESP32 D1 Mini NodeMCU von [AZ-Delivery](https://www.az-delivery.de/products/esp32-d1-mini)

GPIO Zuordnung:

![ESP32 D1 Pinout-1](/docs/img/ESP32-D1.pinout-1.jpg)
![ESP32 D1 Pinout-2](/docs/img/ESP32-D1.pinout-2.jpg)

| Bezeichner |   GPIO   | Beschreibung |
| ---------- | -------- | ------------ |
|     D0     |  GPIO026 |           |
|     D1     |  GPIO022 |           |
|     D2     |  GPIO021 |           |
|     D3     |  GPIO017 |           |
|     D4     |  GPIO016 |           |
|     D5     |  GPIO018 |           |
|     D6     |  GPIO019 |           |
|     D7     |  GPIO023 |           |
|     D8     |  GPIO005 |           |
|     D9     |  GPIO027 | CS 2      |
|     D10    |  GPIO025 | CS 1      |
|     D11    |  GPIO032 | CS 0      |
|     D12    |  GPIO012 | TDI       |
|     D13    |  GPIO004 | MOSI      |
|     D14    |  GPIO000 | MISO      |
|     D15    |  GPIO002 | CLK       |
|     D16    |  GPIO033 |           |
|     D17    |  GPIO014 | TMS       |
|     D18    |  GPIO015 |           |
|     D19    |  GPIO013 |           |
|     D20    |  GPIO010 |           |
