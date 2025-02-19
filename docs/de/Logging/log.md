# Logging

![media](/docs/img/logging.jpg)

Das integrierte Logging hilft bei der Fehlersuche. Für die Ausgabe wird ein serieller Monitor benötigt. Im Folgenden wird Microsoft Visual Studio Code mit der Extension Microsoft Serial Monitor gezeigt. Alternativ bietet u. a. die Arduino IDE einen integrierten seriellen Monitor.

Der serielle Monitor muss neben dem COM Port auf eine Baudrate 115200 und CRLF eingestellt werden.

> **Hinweis:** An einem Brautag sollte das Logging vollständig deaktiviert sein.

Mithilfe der Systemeinstellung können verschiedene Kanäle für die serielle Ausgabe aktiviert werden.

* Konfiguration - in diesem Kanal werden Meldung angezeigt, wenn die config gelesen oder gespeichert wird
* Sensoren - in diesem Kanal werden Meldungen zu den Sensoren angezeigt
* Aktoren - ein Kanal für Meldungen über Aktoren
* Maische Kessel - in diesem Kanal werden Meldungen zum ersten Kessel angezeigt
* Sud Kessel - alle Meldungen zum Kessel Sud
* Hlt Kessel - Meldungen zum Nachguss Kessel
* System - Systemnachrichten werden in diesem Kanal angezeigt
* Maischeprozess - in diesem Kanal wird der Maischeprozess protokolliert
* Nextion Display - Protokollierung für das Display

Jeder Kanal hat die Option Aus, Error, Info und Debug.

* Aus - keine Protokollierung
* Error - es werden nur Fehler protokolliert
* Info - Prozessprotokollieren
* Debug - alle verfügbaren Informationen werden ausgegeben

Wenn der Brautomat mit einer seriellen Konsiole verbunden ist, erscheint beim Boot die folgende Ausgabe

```json
--- Terminal on COM3 | 115200 8-N-1
--- Quit: Ctrl+C | Menu: Ctrl+T | Help: Ctrl+T followed by Ctrl+H
*** SYSINFO: starting Brautomat32 V 1.50.2 pIO ESP32
*** SYSINFO: start filesystem LittleFS - free heap mem: 210548
*** SYSINFO: mDNS http://Brautomat.local verbunden auf IP Adresse 192.168.xxx.xxx Uhrzeit: 20:28:46 RSSI: -55
```
