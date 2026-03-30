# Fehlerbehebung (Troubleshooting)

Praktische Maßnahmen bei typischen Problemen.

## Schnellcheck (Symptom -> erste Maßnahme)

| Symptom | Erste Maßnahme |
| --- | --- |
| Weboberfläche wirkt unformatiert oder Tabellen bleiben leer | Seite hart neu laden (`Strg+Shift+R`) |
| Verbindungsabbrüche im Browser | WLAN-Signal prüfen, aktiven Client reduzieren |
| Import/Umbenennen/Kopieren von Rezepten nicht möglich | Prüfen, ob der Brautomat im Idle-Zustand ist |
| Temperaturverhalten weicht stark vom AutoTune-Lauf ab | [Praxisleitfaden Brautag](../Autotune-pid/praxisleitfaden-brautag.md) nutzen |
| Wiederkehrender Sensorfehler | Sensorport und Verkabelung prüfen |

## WLAN

Die WLAN-Reichweite der ESP-Mikrocontroller ist begrenzt.
Unter `System -> Reset` wird die aktuelle Signalstärke angezeigt:

- `-50 dBm` bis `-75 dBm`: sehr gut
- kleiner als `-80 dBm`: kritisch und oft instabil

Bei schwachem WLAN:

- PID-Intervall erhöhen (z. B. auf `7000 ms`), um Datenrate zu reduzieren
- Anzahl aktiver Browser-Clients reduzieren
- Brautomat näher am Access Point platzieren
- Repeater einsetzen

Das Brautomat-Webinterface basiert auf Bootstrap 5 und JavaScript.
CSS/JS/Fonts werden aus dem Gerät geliefert. Bei schwachem WLAN kann das
unvollständig laden. Typische Folge: Textseite oder leere Tabellen.
In den meisten Fällen hilft `Strg+Shift+R`.

Nach einem Firmware-Update den Brautomat einmal neu starten und den
Browser-Cache leeren.

## Browser

Getestet wird auf Windows 11 mit aktueller Version von Edge/Firefox sowie auf
iOS mit Edge/Safari.

Wichtig:

- automatische Audiowiedergabe für Brautomat aktivieren (Toast-Sounds)
- blockierende Browser-Plugins für Brautomat ausnehmen
- sehr alte Browser (z. B. IE8) werden nicht unterstützt

## Server-Sent Events (SSE), Energiesparen und Client-Sperren

Brautomat sendet Live-Daten über SSE an aktive Browser.
Bis zu 8 Geräte können gleichzeitig verbunden sein.

Wichtig:

- Bei Verbindungsabbruch läuft der Brauprozess weiter.
- Nur der betroffene Client erhält vorübergehend keine Updates.
- Aktive Clients verbinden sich nach kurzer Unterbrechung automatisch neu.

Es gibt keine Client-Priorität:
Start/Pause/Monitoring können auf unterschiedlichen Geräten erfolgen.

## Rezeptimport

Aufgrund des begrenzten Speichers können Rezepte mit PDFs, Bildanhängen oder
sehr langen Textblöcken nicht verarbeitet werden.

Ab Version 1.60 sind Rezept-Operationen nur im Idle-Zustand erlaubt:

- Import
- Wechsel
- Umbenennen
- Kopieren
- Löschen

Während eines aktiven Brauvorgangs sind diese Aktionen blockiert.

## AutoTune

Konkreter Brautag-Leitfaden:
[Praxisleitfaden Brautag](../Autotune-pid/praxisleitfaden-brautag.md)

Nicht auf 0,1 °C Perfektion optimieren.
Sensorabweichungen sind in der Praxis meist größer.

`AutoTune noiseband = 0.3` ist ein robuster Standardwert.

Richtwerte für `AutoTune Datenreihe`:

- gut isolierter Maischekessel: ca. 75
- nicht isolierter Kessel: ca. 50

## Sensoren und Kalibrierung

Die Qualität von DS18B20-Sensoren variiert je nach Quelle.
Kalibrierung ist empfehlenswert, besonders für den IDS-Sensor.

Wenn wiederholt `Sensor Error` erscheint:

1. anderen Sensorport testen
2. Lötstellen an 3-poligen Klemmen prüfen
3. 4,7-kOhm-Widerstand unter dem ESP prüfen

## GGM IDS Pin Interrupt

Ab Version 1.60 ist der Interrupt-Pin standardmäßig deaktiviert und im
Normalbetrieb nicht erforderlich.

Er dient als Rückkanal vom Kochfeld zum Brautomat und kann den Ablauf alle
ca. 300 ms unterbrechen. Deshalb nur zur Fehlersuche nutzen.

Typische IDS2-Fehlercodes laut Handbuch:

- `E0`: kein/leerer Kessel
- `E1`: Stromkreisfehler
- `E3`: Überhitzung
- `E4`: Temperatursensor
- `E7`: Niederspannungsschutz
- `E8`: Überspannungsschutz
- `EC`: Bedienfeldfehler

Einige binäre Sequenzen wurden aus Tests abgeleitet und sind nicht vollständig
verifiziert.
