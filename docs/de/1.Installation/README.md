# Installation

Die Installation unterteilt sich in Firmware flashen und WLAN Konfiguration.

## Firmware flashen mit MS Windows

Download: <https://github.com/InnuendoPi/Brautomat/releases/download/Release/Firmware.zip>

Die Installation der Firmware wird über das mitgeliferte Script "Flashen.cmd" durchgeführt. Hierzu wird das Archiv Firmware.zip in einem beliebigen Ordner entpackt. Der Wemos D1 mini wird mit per USB Kabel mit dem PC/Notebook verbunden. Ein Doppelklick auf das Script Flashen.cmd startet das Flashen der Firmware.

Das Betriebssystem MS Windows erstellt beim Anschluss vom Wemos D1 mini automatisch einen seriellen COM Port. Abhängig vom System kann das COM3, COM4 oder höher sein. Das Script Flashen.cmd ist voreingestellt auf den seriellen Anschluss COM3. Sollte der Wemos D1 Mini nicht mit COM3 verbunden sein, muss im Script Flashen.cmd in den Zeilen 6 und 8 "COM3" durch den korrekten COM Port ersetzt werden.

```bash
1: @ECHO OFF
2: CLS
3: SET SCRIPT_LOCATION=%~dp0
4: cd %SCRIPT_LOCATION%
5: echo erase flash
6: esptool.exe -cp COM3 -cd nodemcu -ce
7: echo Flash firmware and LittleFS
8: esptool.exe -cp COM3 -cd nodemcu -ca 0x000000 -cf Brautomat.ino.bin -ca 0x200000 -cf Brautomat.mklittlefs.bin
9: echo ESC to quit
10: pause
11: exit
```

Der COM Port kann auf Windows Systemen über den Geräte-Manager herausgefunden werden:

![COM Port](/docs/img/com.jpg)

In diesem Beispiel wurde ein ESP Device auf COM7 gefunden. In den Zeilen 6 und 8 muss also COM3 durch COM7 ersetzt werden.

Das Script Flashen.cmd nutzt das Tool esptool.exe <https://github.com/igrr/esptool-ck/releases>. ESPTool ist frei verfügbar für verschiedene Betriebssysteme.\
ESPtool-ck Copyright (C) 2014 Christian Klippel <ck@atelier-klippel.de>. This code is licensed under GPL v2.

## Manuelles Flashen MS Windows und Linux

Falls das Script nicht genutzt werden kann, muss die Firmware manuell auf den Wemos D1 mini übertragen werden.

Step 1 Flash löschen:

- `esptool.exe -cp COM3 -cd nodemcu -ce\`

Step 2 Firmware flashen:

- `esptool.exe -cp COM3 -cd nodemcu -ca 0x000000 -cf Brautomat.ino.bin -ca 0x200000 -cf Brautomat.mklittlefs.bin\`

COM3 ist durch den tatsächlichen seriellen Anschluss zu ersetzen. Die Befehlszeilen Step 1 und 2 setzen voraus, dass die Dateien esptool, brautomat.ino.bin und Brautomat.mklittlefs.bin im gleichen Verzeichnis liegen.

In seltenen Fällen wird unter MS Windows kein USB Port automatisch bereitgestellt. EIn USB Treiber ist hier verfügbar: <http://www.wch.cn/download/CH341SER_ZIP.html>

## Firmware flashen mit macOS

Download: [pyflasher](https://github.com/marcelstoer/nodemcu-pyflasher/releases)

Mit macOS unterteilt sich das Flashen der Firmware in zwei Schritte. Im ersten Schritt wird mit dem Tool pyflasher die Firmware brautomat.ino.bin auf den Wemos aufgespielt.

![macOS](/docs/img/flashen_macos.png)

Anschließend muss der Brautomat mit dem WLAN verbunden werden. Sobald der Brautomat mit dem WLAN verbunden ist, muss das Dateisystem aufgespielt werden.\
Im Browser öffnen: <http://brautomat/update>

Nach einem Klick auf den Button "Filesystem" wird die Datei brautomat.mklittlefs.bin ausgewählt und mit Klick auf Update Filesystem aufgespielt.

## WLAN Konfiguration

Nach dem Flashen der Firmware startet der Brautomat im AccessPoint Mode. Ein offenes WLAN mit dem Namen Brautomat wird sichtbar. Mit diesem WLAN muss eine Verbindung hergestellt werden. Sobald die Verbindung hergestellt ist, öffnet der Webbrowser das WLAN Konfigurationsportal. Sollte sich das Portal nicht automatisch öffnen, muss als Adresse <http://192.168.4.1> manuell eingegeben werden.

![IDS](/docs/img/wlan1.jpg)

Über den Button "Configure WiFi" wird die Konfiguration WLAN angezeigt

![IDS](/docs/img/wlan2.jpg)

Hier muss das WLAN (SSID) und das Password konfiguriert werden. Mit Speichern startet der Brautomat neu und verbindet sich mit dem WLAN. Das Web Interface vom Brautomat ist über <http://brautomat> erreichbar.

## Updates

Updates können im Brautomat über das Menü "Update" eingespielt werden. Eine neue Firmware kann über "WebUpdate" oder "Datei Update" eingespielt werden. Bei einer Aktualisierung der Firmware per WebUpdate lädt die Firmware die aktuelle Version aus dem Internet aus dem github Repository. Bei der Aktualisierung per Datei Update wird die Firmware per Upload vom lokalen PC geladen. Ein USB-Kabel oder das Script aus der Installation sind nicht erforderlich.

Das WebUpdate startet den Brautomat mehrfach neu. Als erstes wird die Firmware aktualisiert. Nach einem weiteren Neustart wird das Framework aktualisiert. Dass WebUpdate wird in der Datei webUpdateLog.txt protokolliert.

Wenn die Option _WebUpdate mit Testversion_ aktiviert ist, wird das WebUpdate mit der aktuellen Entwicklerversion durchgeführt. Hierbei handelt es sich um Testversionen. Neue Funktionen in der Firmware werden (meistens) zunächst als Testversion im Repository abgelegt. Für den produktiven Einsatz sind Testversionen nicht empfohlen.

## DateiUpdate

Ein Update der Firmware über die Auswahl DateiUpdate erfolgt über wenige Schritte:

Zunächst muss die aktuelle Firmware [hier](https://github.com/InnuendoPi/Brautomat/blob/main/tools/Firmware.zip) heruntergeladen werden. Das ZIP Archiv wird anschließend entpacken.\
Im WebInterface Brautomat den Menüpunkt Update und anschließend DateiUpdate auswählen. Es wird eine einfache Update Webseite (im Bild 1) angezeigt:

![DateiUpdate](/docs/img/dateiupdate2.jpg)

Unter Firmware mit dem Button "Datei auswählen" muss nun aus dem Archiv Firmware.ZIP die Datei _Brautomat.ino.bin_ ausgewählt werden (im Bild 2). Ein Klick auf Update Firmware startet das Update.

Auch das Dateisystem vom Brautomat kann aktualisiert werden.

_Bitte unbedingt beachten:_

Update FileSystem löscht alle Einstellungen und Konfigurationen. Das beinhaltet neben der Konfiguration auch MaischeSud Kessel Profile und Rezepte. Die Funktion Update FileSystem ist eher für den Notfall gedacht. In nahezu allen Fällen ist ein DateiUpdate Firmware gefolgt von einem WebUpdate die richtige Auswahl, weil das WebUpdate nach dem Update Firmware einzelene Dateien im Dateisystem aktualisiert. Die Funktion Update FileSystem erstellt das Dateisystem neu.
