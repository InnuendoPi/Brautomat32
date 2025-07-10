# Logging

![media](/docs/img/logging.jpg)

Das Logging ist nur in der Development Version verfügbar. Das integrierte Logging hilft bei der Fehlersuche, sowohl bei Fehlern in der Firmware Brautomat32 als auch bei Anwenderfehlern. Für die Ausgabe wird ein serieller Monitor benötigt. Im Folgenden wird Microsoft Visual Studio Code mit der Erweiterung Microsoft Serial Monitor gezeigt. Microsoft Visual Code ist kostenfrei und als eigenständige Version verfügbar (keine Installation erforderlich).

Der serielle Monitor muss zusätzlich zum COM-Port auf eine Baudrate von 115200 und CRLF eingestellt werden.

![Microsoft Visual Studio Code](/docs/img/vscode.jpg)

## Einstellungen Logging

Über die Systemeinstellungen können verschiedene Kanäle für die serielle Ausgabe aktiviert werden.

* Konfiguration - in diesem Kanal werden Meldungen angezeigt, wenn die Konfiguration gelesen oder gespeichert wird.
* Sensoren - in diesem Kanal werden Meldungen zu den Sensoren ausgegeben
* Aktoren - ein Kanal für Meldungen über Aktoren
* Maische Kessel - in diesem Kanal werden Meldungen zum ersten Kessel angezeigt
* Sudkessel - alle Meldungen zum Sudkessel
* Nachgusskessel - Meldungen zum Nachgusskessel
* System - in diesem Kanal werden Systemmeldungen angezeigt
* Maischprozess - in diesem Kanal wird der Maischprozess protokolliert
* Nextion Display - Protokollierung für das Display

Jeder Kanal hat die Optionen Aus, Fehler, Info und Debug.

* Aus - keine Protokollierung.

Der Kanal gibt kein Log auf die serielle Konsole aus.

* Error - Nur Fehler werden protokolliert.

Debug Ausgabe Error Fehler protokollieren. In VSCode wird der Typ ERROR rot dargestellt.

```json
[1127953][E][SENSOREN.cpp:1600] setSenErr(): Test sensor error: #0 Sensor_Sud error state: 1
[1127972][E][SENSOREN.cpp:76] Update(): Sen: Sensor_Sud error #1 could not read temperature data
```

* Info - Prozess protokollieren

Debug-Ausgaben Typ Info protokollieren Prozesse. Der Typ Info enthält die Ausgaben vom Typ Error. In VSCode wird der Typ INFO grün dargestellt.

```json
[1071747][I][KETTLES.cpp:2044] debKonsole(): set new powerlast: 1071746ms
[1071821][I][KETTLES.cpp:1922] webhook(): webhook response: 
[1071822][I][KETTLES.cpp:2044] debKonsole(): webhook on: 5000ms (mDutyCycle 5000 * Power 100 / 100)
```

* Debug - alle verfügbaren Informationen werden ausgegeben.

Debug Ausgaben vom Typ Verbose enthalten alle vorhergehenden Typen. Zusätzlich werden alle SSE Broadcasts im Typ Verbose protokolliert. In VSCode wird der Typ Verbose blau dargestellt.

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

Ein Sensorfehler kann über eine Web-URL ausgelöst werden. Die Sensoren im Brautomat haben eine ID beginnend mit 0. Ein Sensorfehler kann per Web Aufruf erzeugt werden:

```json
http://brautomat.local/setSenErr?id=0
```

Um den Sensorfehler zu beheben, wird die exakt gleiche URL erneut aufgerufen. Der erste Sensor hat die ID 0, der zweite die ID 1 und der dritte die ID 2. In der URL muss nur die letzte 0 durch die gewünschte Sensor-ID ersetzt werden.

Mit diesem Sensorfehler-Test kann der Parameter "Verhalten bei Sensorfehler" sehr einfach überprüft werden.
