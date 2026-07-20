# Installation

Um den Brautomat zu nutzen, musst du die Firmware flashen und den ESP32 mit
deinem lokalen WLAN verbinden.

## Empfohlener Weg: Brautomat32 ServiceTool

Das [Brautomat32 ServiceTool](https://github.com/InnuendoPi/ServiceTool) ist
die empfohlene Anwendung für Installation, Betrieb und Wartung des Brautomats.
Es bündelt Firmware- und Webdatei-Update, WLAN-Einrichtung, Backups,
Planverwaltung und das serielle Protokoll.

### ServiceTool herunterladen und starten

1. Lade die passende aktuelle **Release-Version** von den
   [ServiceTool-Releases](https://github.com/InnuendoPi/ServiceTool/releases)
   herunter und entpacke sie in einen eigenen Ordner.
2. Starte unter Windows `Brautomat32ServiceTool.exe`.
   Unter Linux mache die AppImage-Datei ausführbar und starte sie; unter macOS
   öffne `Brautomat32ServiceTool.app`.
3. Warte nach dem Start einige Sekunden, bis das ServiceTool die Verbindung
   über USB und im Netzwerk geprüft hat.

### Ersteinrichtung mit dem ServiceTool

1. Verbinde den ESP32 per USB mit dem Computer und wähle im ServiceTool den
   passenden COM-Port.
2. Öffne den Bereich **Firmware**, wähle **Latest Release** und starte den
   Flash-Vorgang. **Web files** bleiben aktiviert, damit Firmware und
   Weboberfläche zusammenpassen.
3. Lass **Flash erase** deaktiviert. Aktiviere es nur für einen ausdrücklich
   gewünschten sauberen Neuaufbau, denn dabei gehen Daten auf dem Gerät
   verloren.
4. Trage nach dem Flashen im ServiceTool die WLAN-Zugangsdaten ein und
   übertrage sie an den Brautomat. Warte, bis der Status **Online** zeigt.
5. Lege im Bereich **Backup & Restore** ein benanntes Backup an, bevor du
   später Firmware, Webdateien oder die Konfiguration änderst.
6. Verwalte danach Maischepläne, Gärpläne und Profile im Bereich
   **Management**. Das serielle Protokoll findest du im **Serial Monitor**.

Die Statusanzeige hilft bei der Einordnung:

- **No device**: USB-Kabel, COM-Port oder Netzwerkverbindung prüfen.
- **Serial**: Das Gerät ist per USB erreichbar; Firmware kann geflasht
  werden, Netzwerkfunktionen sind noch nicht verfügbar.
- **Online**: Der Brautomat ist über die Netzwerk-API erreichbar; alle
  ServiceTool-Funktionen stehen zur Verfügung.

Nach dem ersten Flashen und der WLAN-Einrichtung folgt der
[Sicherheits-Check vor erstem Heiztest](sicherheitscheck-erster-heiztest.md).
Danach geht es mit der [Grundeinrichtung](../Grundeinrichtung/info.md) weiter.

> **Hinweis:** Der manuelle Weg über das ZIP-Archiv und `Flashen.cmd` bleibt
> als technischer Fallback verfügbar, falls das ServiceTool nicht genutzt
> werden kann.

## Manueller Fallback: Firmware flashen mit Windows

Brautomat32 läuft auf ESP32 und basiert auf ESP-IDF5.

[![Stable](https://img.shields.io/static/v1?label=Download%20Release&message=Brautomat32%20ESP32&logo=arduino&logoColor=white&color=darkgreen)](https://github.com/InnuendoPi/Brautomat32/releases/latest) [![Dev](https://img.shields.io/static/v1?label=Download%20Develop&message=Brautomat32%20ESP32&logo=arduino&logoColor=white&color=blue)](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/development/build/ESP32-IDF5dev/Brautomat32dev.zip)

Wenn du das ServiceTool nicht verwendest:

1. ZIP-Archiv entpacken.
2. ESP32 per USB mit PC/Notebook verbinden.
3. `Flashen.cmd` per Doppelklick starten.

Windows legt beim Verbinden in der Regel automatisch einen seriellen COM-Port
an.

![Windows Gerätemanager](/docs/img/com.jpg)

Falls kein COM-Port erscheint, installiere passende USB-Treiber:

[![ESP32 Treiber](https://img.shields.io/static/v1?label=Treiber&message=ESP32&logo=arduino&logoColor=white&color=blue)](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)

`Flashen.cmd` nutzt `esptool.exe`:
<https://github.com/espressif/esptool>

### Manuelles Flashen (MS Windows, macOS, Linux)

Wenn das Skript nicht nutzbar ist, kannst du manuell flashen.

Schritt 1 - Flash löschen:

```bash
esptool.exe --chip esp32 erase-flash
```

Schritt 2 - Firmware und Dateisystem schreiben:

```bash
esptool.exe --chip esp32 --baud 921600 --before default-reset --after hard-reset write-flash 0x1000 bootloader.bin 0x8000 partitions.bin 0xe000 boot_app0.bin 0x10000 firmware.bin 0x350000 LittleFS.bin
```

### Firmware flashen mit macOS

Download: [pyflasher](https://github.com/marcelstoer/nodemcu-pyflasher/releases)

Unter macOS ist das Flashen in zwei Schritte aufgeteilt:

1. Firmware mit pyflasher installieren (`firmware.bin`).
   Hinweis: Je nach Tool/Archiv kann die Datei auch als
   `brautomat.ino.bin` bezeichnet sein.
2. Nach WLAN-Verbindung das Dateisystem installieren (`LittleFS.bin`).

![macOS](/docs/img/flashen_macos.png)

Update-Seite im Browser:
<http://brautomat.local/update>

## WLAN-Konfiguration

Nach dem Flashen startet Brautomat im Access-Point-Modus.
Das offene WLAN `Brautomat32` wird sichtbar.

1. Mit `Brautomat32` verbinden.
2. Falls das Portal nicht automatisch öffnet, `http://192.168.4.1` aufrufen.
3. SSID und Passwort eintragen.
4. Mit `Save` speichern.

![WLAN Konfiguration](/docs/img/wlan1.jpg)

Danach startet Brautomat neu und ist im lokalen WLAN erreichbar unter:
<http://brautomat.local>

Damit ist die Grundinstallation abgeschlossen.

Vor dem ersten Heiztest:
[Sicherheits-Check vor erstem Heiztest](sicherheitscheck-erster-heiztest.md)

Anschließend mit der [Grundeinrichtung](../Grundeinrichtung/info.md)
weitermachen.

> **Hinweis:**
> Brautomat32 versucht bis zu 20 Sekunden, sich mit der gespeicherten WLAN-
> Konfiguration zu verbinden.
> Bei falschem Passwort oder zu schwachem Signal startet wieder der
> Access-Point-Modus.

## Updates

Updates können im Menü `Update` eingespielt werden:

- `WebUpdate`: aktuelle Version direkt aus GitHub laden
- `DateiUpdate`: Firmwaredatei vom lokalen Rechner hochladen

USB-Kabel oder `Flashen.cmd` sind dafür nicht erforderlich.

Der ESP32-Speicher ist in Firmware und Dateisystem getrennt.
Bei einem Update wird die Firmware neu installiert.
Im Dateisystem werden je nach Update einzelne Dateien ersetzt.

### Wichtig bei Update von 1.59 (oder älter) auf 1.60

Beim Umstieg gelten folgende Punkte:

- `config.txt` wird als `config.old.txt` gesichert.
- PID-Parameter werden auf `0.0` zurückgesetzt.
- AutoTune muss einmal neu durchgeführt werden.

So wird eine saubere Regelung mit dem 1.60-Stand sichergestellt.

### WebUpdate

![WebUpdate](/docs/img/webupdate.jpg)

WebUpdate startet Brautomat mehrfach neu.
Zuerst wird die Firmware aktualisiert, danach weitere Komponenten.
Der Ablauf wird in `webUpdateLog.txt` protokolliert.

Mit aktivierter Option `WebUpdate mit Testversion` wird die aktuelle
Entwicklerversion installiert.
Für den produktiven Betrieb sind Testversionen nicht empfohlen.

### DateiUpdate

Ablauf für Firmware-Update per Datei:

1. Aktuelle ZIP-Version herunterladen.
2. ZIP entpacken.
3. Im Webinterface `Update -> DateiUpdate` öffnen.
4. `firmware.bin` auswählen.
5. `Update Firmware` starten.

![DateiUpdate](/docs/img/dateiupdate2.jpg)

Auch das Dateisystem kann aktualisiert werden.

> **Hinweis:**
> `Update FileSystem` erstellt das Dateisystem neu und überschreibt
> Einstellungen, Profile und Rezepte.
> In den meisten Fällen: zuerst Firmware per Datei aktualisieren, danach
> WebUpdate ausführen.
