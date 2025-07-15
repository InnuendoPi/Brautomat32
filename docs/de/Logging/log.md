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
* Fermenter - Meldungen zum Fermenter Modus
* System - in diesem Kanal werden Systemmeldungen angezeigt
* Maischprozess - in diesem Kanal wird der Maischprozess protokolliert
* Nextion Display - Protokollierung für das Display

Jeder Kanal hat die Optionen Aus, Fehler, Info und verbose.

* Aus - keine Protokollierung.

Der Kanal gibt kein Log auf die serielle Konsole aus.

* Error - Nur Fehler werden protokolliert.

Debug Ausgabe Typ Error protokollieren nur Fehler. In VSCode wird der Typ ERROR rot dargestellt.

```json
[E][SENSOREN.cpp:1600] setSenErr(): Test sensor error: #0 Sensor_Sud error state: 1
[E][SENSOREN.cpp:76] Update(): Sen: Sensor_Sud error #1 could not read temperature data
```

* Info - Prozess protokollieren

Debug-Ausgaben Typ Info protokollieren Prozesse. Der Typ Info enthält die Ausgaben vom Typ Error. In VSCode wird der Typ INFO grün dargestellt.

```json
[I][KETTLES.cpp:2044] debKonsole(): set new powerlast: 1071746ms
[I][KETTLES.cpp:1922] webhook(): webhook response: 
[I][KETTLES.cpp:2044] debKonsole(): webhook on: 5000ms (mDutyCycle 5000 * Power 100 / 100)
```

* Verbose - alle verfügbaren Informationen werden ausgegeben.

Debug Ausgaben vom Typ Verbose enthalten alle vorhergehenden Typen. Zusätzlich werden alle SSE Broadcasts im Typ Verbose protokolliert. In VSCode wird der Typ Verbose blau dargestellt.

```json
[V][SYSTEM.cpp:847] SSEBroadcastJson(): kettle hlt: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:919] SSEBroadcastJson(): kettle sud: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:839] SSEBroadcastJson(): kettle mash: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Zusätzlich wird in der Einstellung System - verbose eine curl ähnliche Protokollierung aller WebServer GET und POST requests ausgegeben.

Eine Ausgabe auf der seriellen Konsole hat eine feste Formatierung. Beispiel:

```json
[V][SYSTEM.cpp:839] SSEBroadcastJson(): kettle mash: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Die Einzelteile:

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
05:42:16.904 > [I][SYSINFO] starting Brautomat32 V 1.56 Release
05:42:22.467 > [I][SYSINFO] mount filesystem LittleFS: ok, free heap mem: 192924
05:42:28.384 > [I][SYSINFO] mDNS http://Brautomat.local IP address 192.168.100.112 time: 05:42:27 RSSI: -83
```

Neben der Version vom Brautomat wird der MDNS Name und die aktuelle IP Adresse ausgegeben. Die Zeile _mount filesystem LittleFS: ok, free heap mem:_ zeigt an, dass das Dateisystem eingebunden wurde.

## Test Sensorfehler

Ein Sensorfehler kann über eine Web-URL ausgelöst werden. Die Sensoren im Brautomat haben eine ID beginnend mit 0. Ein Sensorfehler kann per Web Aufruf erzeugt werden:

```json
http://brautomat.local/setSenErr?id=0
```

Um den Sensorfehler zu beheben, wird die exakt gleiche URL erneut aufgerufen. Der erste Sensor hat die ID 0, der zweite die ID 1 und der dritte die ID 2. In der URL muss nur die letzte 0 durch die gewünschte Sensor-ID ersetzt werden.

Mit diesem Sensorfehler-Test kann der Parameter "Verhalten bei Sensorfehler" sehr einfach überprüft werden.

## Logging mit Microsoft VSCode

Mit wenigen Schritten kann Microsoft VSCode für das Logging eingerichtet werden. Eine Installation von Microsoft VSCode ist nicht erforderlich, die portable Version ist ausreichend.

Download Microsoft VSCode als ZIP Datei: [Microsoft VSCode](https://code.visualstudio.com/docs/?dv=winzip)

Die ZIP Datei in ein beliebiges Verzeichnis entpacken. Im Dateiexplorer in das Verzeichnis wechseln und einen Ordner mit dem Namen data erstellen. Der Ordner data versetzt MS VScode in den portablen Modus und kann ohne Installation verwendet werden.

![Microsoft Visual Studio Code](/docs/img/vscode_4.jpg)

Microsoft VSCode starten mit Doppelklick auf Code.exe.

![Microsoft Visual Studio Code](/docs/img/vscode_1.jpg)

Für das Logging wird in VScode die Extension Serial Monitor benötigt. Auf der linken Seite den Button Extensions anklicken und im Suchfeld "serial monitor" eingeben.

![Microsoft Visual Studio Code](/docs/img/vscode_2.jpg)

Die Extension Serial Monitor von Microsoft installieren. Der serielle Monitor ist in der Anzeige Output enthalten. Im Menü view den Punkt output anklicken oder mit der Tastenkombination Ctrl Shift U die Ausgabe öffnen. Die Anzeige Extensions kann durch einen Klick auf den Button Extension aus- und eingeblendet werden. Im Fenster Output nun den Tab Serial Monitor anklicken. Jetzt muss nur noch der COM Port ausgewählt werden und die Baud rate auf 115200 eingestellt werden. Das Logging wird mit dem Button Start Monitoring gestartet.

![Microsoft Visual Studio Code](/docs/img/vscode_3.jpg)
