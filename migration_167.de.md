# Migration auf 1.67 Beta

Diese Kurzanleitung beschreibt die **einmalige Umstellung vom bisherigen
Partitionslayout auf das neue Layout mit ServiceApp**. Danach sind normale
WebUpdates wieder möglich. Bereits umgestellte Geräte benötigen keine erneute
Layoutmigration.

> Benötigt werden das **ServiceTool in der Version 1.7.6 oder neuer**
> und das vollständige zugehörige Beta-Paket. Ein älteres ServiceTool, das nur
> 1.70.x als Migrationsziel akzeptiert, ist dafür nicht geeignet. Die Umstellung
> ist kein normales WebUpdate; eine einzelne `firmware.bin` reicht nicht aus.

## 1. Gerät verbinden

Braubetrieb beenden und den Brautomat mit einem USB-Datenkabel am Computer
anschließen. ServiceTool öffnen, den richtigen Port und die Geräteadresse
auswählen. Der bisherige Brautomat muss auch über WLAN erreichbar sein.
Warten, bis das ServiceTool das richtige Gerät als **Online** erkennt.

![ServiceTool starten](docs/img/migration-167-start.png)
*Bild 1: ServiceTool mit markiertem Port, Geräteadresse und Online-Status.*

## 2. Daten sichern

Unter **Backup & Restore** eine Sicherung erstellen und auf dem Computer
aufbewahren. Prüfen, dass Einstellungen, eigene Rezepte und Profile gesichert
sind; zusätzlich benötigte eigene Dateien separat sichern. Die Sicherung bis
zum erfolgreichen Abschluss behalten.

![ServiceTool starten](docs/img/migration-167-backup.png)
*Bild 2: Backup & Restore – Sicherung erstellen und erfolgreiches Ergebnis.*

## 3. Migration starten

Zum Bereich **Migration** wechseln. Gerät und Zielversion prüfen und
**Migration starten** wählen. Den vollständigen Ablauf einschließlich Sicherung,
Flashen, Neustart und Wiederherstellung abwarten.

**Währenddessen weder Stromversorgung noch USB-Verbindung trennen und das
ServiceTool nicht schließen.** Erst fortfahren, wenn der Ablauf erfolgreich
abgeschlossen ist und der Brautomat wieder erreichbar ist.

![ServiceTool starten](docs/img/migration-167-migration.png)
*Bild 4: Migration – Startschaltfläche und anschließend erfolgreiche Abschlussmeldung.*

## 5. Ergebnis prüfen

- Webinterface des Brautomaten neu laden und **Version 1.67** prüfen.
- WLAN, Sensorwerte, Kesselzuordnungen, Aktoren, Profile und eigene Rezepte prüfen.
- Fehlende Daten über den vorgesehenen Restore-Ablauf aus der Sicherung übernehmen.
- Vor dem nächsten Brautag die Funktionen der eigenen Anlage kontrollieren.

Die ServiceApp ist der Wartungsbereich auf dem Brautomat. Nach der Umstellung
soll wieder die normale Hauptfirmware mit ihrem Webinterface laufen.
MultiDevice anschließend bei Bedarf einrichten; jedes weitere Gerät einzeln
migrieren und prüfen. Ein einzelner Brautomat bleibt weiterhin nutzbar.

## Wenn etwas nicht klappt

Fehlermeldung und ServiceTool-Protokoll sichern. Nicht auf Verdacht den Flash
löschen oder ein anderes Paket verwenden. Bei fehlender WLAN-Verbindung Port
und Zugangsdaten im ServiceTool prüfen. Für Rückfragen helfen die Tool-Version,
das verwendete Paket und das gespeicherte Protokoll.
