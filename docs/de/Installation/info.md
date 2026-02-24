# Installation

Um den Brautomat nutzen zu können, muss die Firmware geflasht werden. Außerdem muss der ESP-Mikrocontroller mit dem lokalen WLAN verbunden werden.

## Firmware flashen mit MS Windows

Die Version Brautomat32 ist für den ESP32 und basiert auf dem Framework IDF5.

* [ESP32 IDF5](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/main/Brautomat32.zip): Brautomat32.zip

Die Installation der Firmware wird über das im ZIP Archiv enthaltene Script "Flashen.cmd" durchgeführt. Das ZIP Archiv wird in einem beliebigen Ordner entpackt. Der ESP Microcontroller wird per USB-Kabel mit dem PC/Notebook verbunden. Ein Doppelklick auf das Script Flashen.cmd startet das Flashen der Firmware.

Das Betriebssystem MS Windows erstellt beim Verbinden vom ESP Microcontroller mit einem USB Anschluss am PC oder Notebook automatisch einen seriellen COM Port.

![Windows Gerätemanager](/docs/img/com.jpg)

Im Bild wurde ein ESP Device auf COM7 gefunden. In seltenen Fällen wird unter MS Windows kein serieller COM Port automatisch bereitgestellt. USB Treiber für ESP Microcontroller sind auf folgenden Webseiten verfügbar: (MS Win und macOS)

[![ESP32 Treiber](https://img.shields.io/static/v1?label=Treiber&message=ESP32&logo=arduino&logoColor=white&color=blue)](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)

Das Script Flashen.cmd nutzt das Tool esptool.exe <https://github.com/espressif/esptool>. ESPTool ist frei verfügbar für verschiedene Betriebssysteme (macOS, Linux). Die Windows-Version 64bit ist im ZIP Archiv enthalten. ESPTool is licensed under GPL v2. See the accompanying [LICENSE file](https://github.com/espressif/esptool/blob/master/LICENSE) for a copy.

### Manuelles Flashen MS Windows, macOS und Linux

Falls das Script nicht genutzt werden kann, kann die Firmware manuell auf den ESP Microcontroller übertragen werden.

ESP32 Step 1 Flash löschen:

```json
esptool.exe --chip esp32 erase-flash
```

ESP32 Step 2 Firmware flashen:

```json
esptool.exe --chip esp32 --baud 921600 --before default-reset --after hard-reset write-flash 0x1000 bootloader.bin 0x8000 partitions.bin 0xe000 boot_app0.bin 0x10000 firmware.bin 0x350000 LittleFS.bin
```

### Firmware flashen mit macOS

Download: [pyflasher](https://github.com/marcelstoer/nodemcu-pyflasher/releases)

Unter macOS ist das Flashen der Firmware in zwei Schritte unterteilt. Im ersten Schritt wird die Firmware brautomat.ino.bin mit dem Tool pyflasher auf dem ESP installiert.

![macOS](/docs/img/flashen_macos.png)

Der Brautomat muss dann mit dem WLAN verbunden werden. Sobald der Brautomat mit dem WLAN verbunden ist, muss das Dateisystem installiert werden.\
Im Browser öffnen: <http://brautomat.local/update>

Nach einem Klick auf die Schaltfläche „Dateisystem“ wird die Datei LittleFS.bin ausgewählt und durch einen Klick auf Dateisystem aktualisieren installiert.

## WLAN Konfiguration

Nach dem Flashen der Firmware startet der Brautomat im AccessPoint-Mode. Ein offenes WLAN mit dem Namen _Brautomat_ wird sichtbar. Mit diesem WLAN muss eine Verbindung hergestellt werden. Sobald die Verbindung hergestellt ist, öffnet der Webbrowser das WLAN-Konfigurationsportal. Sollte sich das Portal nicht automatisch öffnen, muss die Adresse <http://192.168.4.1> manuell im Webbrowser eingegeben werden.

![WLAN Konfiguration](/docs/img/wlan1.jpg)

Über den Button "Configure WiFi" wird die Konfiguration WLAN angezeigt

![WLAN Konfiguration](/docs/img/wlan2.jpg)

Hier müssen WLAN-Name (SSID) und Passwort eingegeben werden. Mit _Save_ startet der Brautomat neu und verbindet sich mit dem WLAN. Das WebInterface vom Brautomat ist im lokalen WLAN über die Adresse <http://brautomat.local> erreichbar.

Damit ist die Grundinstallation abgeschlossen. Der Vorgang Firmware flashen und WLAN-Konfiguration ist nur einmal durchzuführen. Der Brautomat muss nun konfiguriert werden. Die Konfiguration wird im Abschnitt _Grundeinrichtung_ beschrieben. Der folgende Abschnitt _Update_ kann zunächst übersprungen werden.

> **Hinweis:**\
Der Brautomat32 versucht bis zu 20 Sekunden, mit der WLAN-Konfiguration (SSID und Passwort) eine Verbindung herzustellen. Kann keine Verbindung hergestellt werden, bspw. wenn das Passwort falsch eingegeben wurde, startet der Brautomat32 erneut im AccessPoint-Mode.\
In seltenen Fällen und meist nur dann, wenn das WLAN-Signal schwach ist, findet der Brautomat32 kein geeignetes WLAN und startet ebenfalls nach ca. 20 Sekunden im AccessPoint-Mode. In diesem Fall hilft lediglich ein Neustart vom Brautomat32.

## Updates

Updates können im Brautomat über das Menü "Update" eingespielt werden. Eine neue Firmware kann über "WebUpdate" oder "Datei Update" installiert werden. Bei einer Aktualisierung per WebUpdate lädt der Brautomat die aktuelle Version aus dem Internet aus dem GitHub-Repository. Bei der Aktualisierung per Datei-Update wird die Firmware per Upload vom lokalen PC geladen. Ein USB-Kabel oder das Skript aus der Installation sind nicht erforderlich.

Der Speicherbereich eines ESP Microcontrollers unterteilt sich in Firmware und Dateisystem. Im laufenden Betrieb können nur im Dateisystem Konfigurationen, Rezepte und andere Dateien gespeichert bzw. verändert werden. Auf den Bereich Firmware kann nur lesend zugegriffen werden. Bei einem Update wird der Firmware-Bereich vollständig neu installiert und im Dateisystem werden einzelne Dateien ersetzt.

### Wichtig bei Update von 1.59 und älter auf 1.60

Beim Wechsel von Version 1.59 (oder älter) auf 1.60 gelten folgende Punkte:

* Die Konfigurationsdatei `config.txt` wird als `config.old.txt` gesichert.
* Die PID-Parameter werden auf 0.0 zurückgesetzt.
* AutoTune muss nach dem Update einmal neu durchgeführt werden.

So ist sichergestellt, dass die Temperaturregelung mit dem 1.60-Stand sauber und stabil arbeitet.

### WebUpdate

![WebUpdate](/docs/img/webupdate.jpg)

Das WebUpdate startet den Brautomat mehrfach neu. Als Erstes wird die Firmware aktualisiert. Nach einem weiteren Neustart wird das Framework aktualisiert. Der Ablauf des WebUpdates wird in der Datei webUpdateLog.txt protokolliert.

Wenn die Option _WebUpdate mit Testversion_ aktiviert ist, wird das WebUpdate mit der aktuellen Entwicklerversion durchgeführt. Hierbei handelt es sich um Testversionen. Neue Funktionen in der Firmware werden (meistens) zunächst als Testversion im GitHub-Repository abgelegt. Für den produktiven Einsatz sind Testversionen nicht empfohlen.

Hinweis: Diese Anleitung beschreibt den Release-Stand im `main`-Branch. Lokale Development-Builds im Entwicklungszweig können funktional abweichen.

### DateiUpdate

Ein Update der Firmware über die Auswahl DateiUpdate erfolgt über wenige Schritte:

Zunächst muss die aktuelle Firmware heruntergeladen werden. Das ZIP-Archiv wird anschließend entpackt.\
Im WebInterface Brautomat den Menüpunkt Update und anschließend DateiUpdate auswählen. Es wird eine einfache Update Webseite (im Bild 1) angezeigt:

![DateiUpdate](/docs/img/dateiupdate2.jpg)

Unter Firmware mit dem Button "Datei auswählen" muss nun aus dem ZIP Archiv die Datei _firmware.bin_ ausgewählt werden (im Bild 2). Ein Klick auf Update Firmware startet das Update.

Auch das Dateisystem vom Brautomat kann aktualisiert werden.

> **Hinweis:**\
Die Funktion Update FileSystem erstellt das Dateisystem neu. Update FileSystem überschreibt alle Einstellungen und Konfigurationen. Das beinhaltet neben der Konfiguration auch MaischeSud-Kesselprofile und Rezepte. In nahezu allen Fällen ist ein DateiUpdate der Firmware, gefolgt von einem WebUpdate, die richtige Wahl, weil das WebUpdate nach dem Firmware-Update einzelne Dateien im Dateisystem aktualisiert.
