# Logging

![media](/docs/img/logging.jpg)

Das integrierte Logging hilft bei der Fehlersuche, sowohl bei Erkennung von Fehlern in der Firmware Brautomat32 als auch bei Anwenderfehlern. Für die Ausgabe wird ein serieller Monitor benötigt. Im Folgenden wird Microsoft Visual Studio Code mit der Extension Microsoft Serial Monitor gezeigt. Microsoft Visual Code ist kostenneutral und als standalone Version verfügbar (keine Installation erforderlich).

Der serielle Monitor muss neben dem COM Port auf eine Baudrate 115200 und CRLF eingestellt werden.

![Microsoft Visual Studio Code](/docs/img/vscode.jpg)

> **Hinweise:**\
An einem Brautag sollte das Logging vollständig deaktiviert sein.\
Auf dem ESP8266 steht die Option Logging nicht zur Verfügung.

## Einstellungen Logging

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

Der Kanal gibt keine Protokollierung auf der seriellen onsole aus.

* Error - es werden nur Fehler protokolliert

Debug Ausgaben Error protokollieren Fehler. In VSCode wird der Typ ERROR in rot dargestellt

```json
[1127953][E][SENSOREN.cpp:1600] setSenErr(): Test sensor error: #0 Sensor_Sud error state: 1
[1127972][E][SENSOREN.cpp:76] Update(): Sen: Sensor_Sud error #1 could not read temperature data
```

* Info - Prozessprotokollieren

Debug Ausgaben Typ Info verfolgen die Prozesse. Der Typ Info beinhaltet die Ausgaben Typ Error. In VSCode wird der Typ INFO in grün dargestellt

```json
[1071747][I][KETTLES.cpp:2044] debKonsole(): set new powerlast: 1071746ms
[1071821][I][KETTLES.cpp:1922] webhook(): webhook response: 
[1071822][I][KETTLES.cpp:2044] debKonsole(): webhook on: 5000ms (mDutyCycle 5000 * Power 100 / 100)
```

* Debug - alle verfügbaren Informationen werden ausgegeben

Debug Aus gaben vom Typ Verbose beinhalten alle vorherigen Typen. Zusätzlich werden im Typ Verbose alle SSE Broadcast protokolliert. In VSCode wird der Typ Verbose in blau dargestellt.

```json
[1026335][V][SYSTEM.cpp:847] SSEBroadcastJson(): kettle hlt: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[1026349][V][SYSTEM.cpp:919] SSEBroadcastJson(): kettle sud: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[1026371][V][SYSTEM.cpp:839] SSEBroadcastJson(): kettle mash: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Eine Ausgabe auf der seriellen Konsole hat eine feste Formatierung. Beispiel:

```json
[1026371][V][SYSTEM.cpp:839] SSEBroadcastJson(): kettle mash: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Die Einzelteile:

```json
[1026371] Die Betriebszeit vom ESP in ms
```

```json
[V] Der Ausgabetyp (hier Verbose)
```

```json
[SYSTEM.cpp:839] Die aufrundende Quellcodestelle
```

```json
SSEBroadcastJson(): Die aufrufende Funktion
```

Es folgt nach dem Doppelpunkt die eigentliche Debug Nachricht:

```json
kettle mash: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Wenn der Brautomat mit einer seriellen Konsiole verbunden ist, erscheint beim Boot die folgende Ausgabe

```json
21:27:37:347 -> *** SYSINFO: starting Brautomat32 V 1.50.3 pIO ESP32
21:27:38:269 -> *** SYSINFO: start filesystem LittleFS - free heap mem: 210552
21:27:39:078 -> *** SYSINFO: mDNS http://Brautomat.local verbunden auf IP Adresse xxx.xxx.xxx.xxx Uhrzeit: 21:27:38 RSSI: -68
```

## Test Sensorfehler

Ein Sensorfehler per Web URL provoziert werden. Die Sensoren im Brautomat haben beginnend mit 0 eine ID. Ein Sensorfehler kann per Webaufruf erstellt werden:

```json
http://brautomat.local/setSenErr?id=0
```

Um den Sensorfehler zu beheben, wird die exakt gleiche URL nochmals aufgerufen. Der erste Sensor hat die ID 0, der Zweite die ID 1 und der Dritte die ID 2. Es muss in der URL nur die abschließende 0 durch die gewünscht Sensor ID ersetzt werden.

Mit diesem Test Sensorfehler lässt sich sehr einfach der Parameter "Leistung bei Sensorfehler" überprüfen.
