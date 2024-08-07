# Installation

Um den Brautomat nutzen zu können, muss die Firmware geflasht werden und der ESP Microcontroller mit dem lokalen WLAN verbunden werden.

## Firmware flashen mit MS Windows

[![Download ESP8266](https://img.shields.io/badge/Firmware-ESP8266-green.svg)](https://github.com/InnuendoPi/Brautomat/releases/download/Release/Firmware.zip) [![Download ESP32](https://img.shields.io/badge/Firmware-ESP32-blue.svg)](https://github.com/InnuendoPi/Brautomat32/releases/download/Release/Firmware.zip)

Die Installation der Firmware wird über das im ZIP Archiv enthaltene Script "Flashen.cmd" durchgeführt. Das Archiv Firmware.zip wird in einem beliebigen Ordner entpackt. Der ESP Microcontroller wird mit per USB Kabel mit dem PC/Notebook verbunden. Ein Doppelklick auf das Script Flashen.cmd startet das Flashen der Firmware.

Das Betriebssystem MS Windows erstellt beim Verbinden vom ESP Microcontroller mit einem USB Anschluss am PC oder Notebook automatisch einen seriellen COM Port.

![COM Port](/docs/img/com.jpg)

Im Bild wurde ein ESP Device auf COM7 gefunden. In seltenen Fällen wird unter MS Windows kein serieller COM Port automatisch bereitgestellt. USB Treiber für ESP Microcontroller sind auf folgenden Webseiten verfügbar: (MS Win und macOS)

[![ESP8266 Treiber](https://img.shields.io/static/v1?label=Treiber&message=ESP8266&logo=arduino&logoColor=white&color=green)](https://www.wch-ic.com/search?t=all&q=ch341) [![ESP32 Treiber](https://img.shields.io/static/v1?label=Treiber&message=ESP32&logo=arduino&logoColor=white&color=blue)](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)

Sollte gar kein ESP Microcontroller gefunden werden, ist zunächst das USB Kabel zu ersetzen. Ein schlechtes USB Kabel ist eine häufige Ursache für ein fehlerhaftes Erkennen oder Flashen.

Das Script Flashen.cmd nutzt das Tool esptool.exe <https://github.com/espressif/esptool>. ESPTool ist frei verfügbar für verschiedene Betriebssysteme (macOS, Linux). Die Windows-Version 64bit ist im ZIP Archiv enthalten. ESPTool is licensed under GPL v2.

## Manuelles Flashen MS Windows, macOS und Linux

Falls das Script nicht genutzt werden kann, kann die Firmware manuell auf den ESP Microcontroller übertragen werden.

ESP8266 Step 1 Flash löschen:

- `esptool.exe --chip esp8266 erase_flash`

ESP8266 Step 2 Firmware flashen:

- `esptool.exe --chip esp8266 --baud 921600 write_flash 0x000000 Brautomat.ino.bin 0x200000 Brautomat.mklittlefs.bin`

ESP32 Step 1 Flash löschen:

- `esptool.exe --chip esp32 erase_flash`

ESP32 Step 2 Firmware flashen:

- `esptool.exe --chip esp32 --baud 921600 --before default_reset --after hard_reset write_flash 0x1000 Brautomat32.ino.bootloader.bin 0x8000 Brautomat32.ino.partitions.bin 0xe000 boot_app0.bin 0x10000 Brautomat32.ino.bin 0x2d0000 Brautomat32.mklittlefs.bin`

## WLAN Konfiguration

Nach dem Flashen der Firmware startet der Brautomat im AccessPoint Mode. Ein offenes WLAN mit dem Namen _Brautomat_ wird sichtbar. Mit diesem WLAN muss eine Verbindung hergestellt werden. Das funktioniert sowohl vom PC oder Notebook, als auch mit dem Smartphone. Sobald die Verbindung hergestellt ist, öffnet der Webbrowser das WLAN Konfigurationsportal. Sollte sich das Portal nicht automatisch öffnen, muss als Adresse <http://192.168.4.1> manuell eingegeben werden.

![IDS](/docs/img/wlan1.jpg)

Über den Button "Configure WiFi" wird die Konfiguration WLAN angezeigt

![IDS](/docs/img/wlan2.jpg)

Hier muss das WLAN (SSID und das Password) eigegeben werden. Mit _Save__ startet der Brautomat neu und verbindet sich mit dem WLAN. Das Web Interface vom Brautomat ist nun im lokalen WLAN über <http://brautomat.local> erreichbar.

Damit ist die Grundinstallation bereits abgeschlossen. Der Vorgang Firmware flashen und WLAN Konfiguration ist nur einmal durchzuführen. Der Brautomat muss nun konfiguriert werden. Die Konfiguration wird im Abschnitt _Grundeinrichtung_ beschrieben. Der folgende Abschnitt _Update_ kann zunächst übersprungen werden.

## Updates

Updates können im Brautomat über das Menü "Update" eingespielt werden. Eine neue Firmware kann über "WebUpdate" oder "Datei Update" eingespielt werden. Bei einer Aktualisierung der Firmware per WebUpdate lädt die Firmware die aktuelle Version aus dem Internet aus dem github Repository. Bei der Aktualisierung per Datei Update wird die Firmware per Upload vom lokalen PC geladen. Ein USB-Kabel oder das Script aus der Installation sind nicht erforderlich.

### WebUpdate

Das WebUpdate startet den Brautomat mehrfach neu. Als erstes wird die Firmware aktualisiert. Nach einem weiteren Neustart wird das Framework aktualisiert. Der Ablauf vom WebUpdate wird in der Datei webUpdateLog.txt protokolliert.

Wenn die Option _WebUpdate mit Testversion_ aktiviert ist, wird das WebUpdate mit der aktuellen Entwicklerversion durchgeführt. Hierbei handelt es sich um Testversionen. Neue Funktionen in der Firmware werden (meistens) zunächst als Testversion im github Repository abgelegt. Für den produktiven Einsatz sind Testversionen nicht empfohlen.

### DateiUpdate

[![Download ESP8266](https://img.shields.io/badge/Download-ESP8266-green.svg)](https://github.com/InnuendoPi/Brautomat/blob/main/tools/Firmware.zip) [![Download ESP32](https://img.shields.io/badge/Download-ESP32-blue.svg)](https://github.com/InnuendoPi/Brautomat32/blob/main/tools/Firmware.zip)

Ein Update der Firmware über die Auswahl DateiUpdate erfolgt über wenige Schritte:

Zunächst muss die aktuelle Firmware heruntergeladen werden. Das ZIP Archiv wird anschließend entpacken.\
Im WebInterface Brautomat den Menüpunkt Update und anschließend DateiUpdate auswählen. Es wird eine einfache Update Webseite (im Bild 1) angezeigt:

![DateiUpdate](/docs/img/dateiupdate2.jpg)

Unter Firmware mit dem Button "Datei auswählen" muss nun aus dem Archiv Firmware.ZIP die Datei _Brautomat.ino.bin_ bzw. _Brautomat32.ino.bin_ ausgewählt werden (im Bild 2). Ein Klick auf Update Firmware startet das Update.

Auch das Dateisystem vom Brautomat kann aktualisiert werden.

_Bitte unbedingt beachten:_

Update FileSystem löscht alle Einstellungen und Konfigurationen. Das beinhaltet neben der Konfiguration auch MaischeSud Kessel Profile und Rezepte. Die Funktion Update FileSystem ist eher für den Notfall gedacht. In nahezu allen Fällen ist ein DateiUpdate Firmware gefolgt von einem WebUpdate die richtige Auswahl, weil das WebUpdate nach dem Update Firmware einzelene Dateien im Dateisystem aktualisiert. Die Funktion Update FileSystem erstellt das Dateisystem neu.
