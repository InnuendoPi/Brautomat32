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
