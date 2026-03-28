# Firmware-Testsuite

Die Anzeigen in [README.de.md](../../../readme.de.md) und
[README.md](../../../readme.md) zeigen den aktuellen Stand der öffentlichen
Firmware-Testsuite.

Die aktuelle veröffentlichte `complete-suite` umfasst:

- `57` Suite-Tests
- `1023` zugrunde liegende Einzelprüfungen

Die Anzeige fasst vier Werte zusammen:

- `Tests`: Anzahl der enthaltenen Suite-Tests
- `erfolgreich`: Anzahl erfolgreich abgeschlossener Suite-Tests
- `fehlerhaft`: Anzahl Suite-Tests mit echtem Fehler
- `skip`: Anzahl bewusst ausgelassener Suite-Tests

Eine grüne Anzeige bedeutet: Die aktuelle öffentliche Firmware-Testsuite ist
ohne echte Fehler durchgelaufen. Gelbe Hinweise stehen für grenzwertige, aber
nicht defekte Ergebnisse.

## Was wird geprüft?

Die öffentliche Firmware-Testsuite deckt die wichtigsten Kernfunktionen der
Firmware ab:

- Release-Readiness vor einer Veröffentlichung
- Web-Dateien für LittleFS
- Firmware-Build und LittleFS-Build
- Paketierung der freizugebenden Artefakte
- Flash von Firmware und LittleFS
- Backup und Restore nach dem LittleFS-Flash
- Firmware- und Weboberflächen-Selbstupdate
- Wiederherstellung eines sauberen Ausgangszustands
- Browser-UI-Core für Reload, SSE-Reconnect, Dashboard und wichtige Dialoge
- Import von Rezepten aus mehreren Quellen
- Maischeplanfluss vom Start bis zum regulären Ende
- manueller Heizmodus
- Aktoren, Sonderbefehle und Profilwechsel
- Sensorfehler und Sicherheitsreaktionen
- Stop, Neustart und Wiederaufnahme
- Fermenter-Planfluss vom Einstieg bis zu Neustart- und Resume-Fällen

Die Testsuite ist in den letzten Versionen spürbar erweitert worden. Früher
wurden viele Prüfungen manuell durchgeführt. Das war möglich, aber aufwendig,
und kleine störende Randfehler konnten dabei leichter übersehen werden. Der
ausgebaute interne Testpfad reduziert genau dieses Risiko.

Die Anzeigen sind damit kein allgemeines Qualitätsversprechen für jede
denkbare Hardware- oder Randkombination. Sie zeigen den Status der wichtigsten
öffentlichen Kernprüfungen.

## Zwei Arten von Tests

Der Firmware-Teststatus und endusernahe Prüfungen erfüllen unterschiedliche
Zwecke:

- Die Anzeige in `README` beschreibt die allgemeine öffentliche
  Firmware-Testsuite vor `develop`- und `release`-Veröffentlichungen.
- Daneben gibt es zusätzliche endusernahe Prüfungen mit realen
  Konfigurationen, Backups und Rezepten.

Diese zweite Testgruppe prüft nicht nur die allgemeine Firmware-Funktion,
sondern auch reale Anwendungsfälle wie:

- vorhandene `config.txt`
- vorhandene Backups
- einzelne Rezepte
- Kombinationen aus Konfiguration und Rezept

Damit wird geprüft, ob nicht nur die Firmware im Allgemeinen funktioniert,
sondern auch, ob konkrete Inhalte wie Rezepte und Konfigurationen plausibel
verarbeitet werden.

Wichtig:

- Die Anzeige in `README` beschreibt den allgemeinen Stand der öffentlichen
  Firmware-Testsuite.
- Endusernahe Konfigurations- und Rezepttests sind davon zu unterscheiden.
- Sie sind besonders hilfreich, wenn eine vorhandene Anlage, ein vorhandenes
  Backup oder ein bestimmtes Rezept bewertet werden soll.

## Kurzer Testlauf und längere Zusatzläufe

Die öffentliche Firmware-Testsuite ist ein kompakter Komplettlauf mit breiter
Funktionsabdeckung.

Daneben gibt es längere Zusatzläufe, die vor allem für diese Bereiche sinnvoll
sind:

- längere reale Prozessverläufe
- zusätzliche Wiederholungen zur Stabilitätsbewertung
- spezielle Konfigurations- und Rezeptfälle
- produktnahe Einzelprüfungen mit realer Hardware

Die öffentliche Firmware-Testsuite zeigt:

- den kompakten allgemeinen Kernnachweis
- längere Zusatzläufe ergänzen diesen Nachweis bei Bedarf
- beide Arten zusammen ergeben ein vollständigeres Bild des tatsächlichen
  Verhaltens

## Testbereiche

### Release-Readiness

- Web-Dateien werden minifiziert, komprimiert und für LittleFS vorbereitet.
- Firmware und LittleFS lassen sich sauber bauen.
- Das Release-Paket wird vollständig erzeugt.
- Firmware und LittleFS lassen sich auf das Testgerät flashen.
- Nach dem LittleFS-Flash wird ein vollständiges Backup wiederhergestellt.

### System-Update

- Die Firmware kann ihr eigenes Firmware- und Weboberflächen-Update ausführen.
- Der Updatepfad für Firmware und LittleFS wird als echter Firmwareablauf
  geprüft.

### Backup, Restore und Grundzustand

- Grundlegende Backup- und Restore-Pfade werden geprüft.
- Brautomat startet aus einem sauberen Ausgangszustand.
- Wichtige Grundeinstellungen lassen sich wiederherstellen.

### Browser-UI-Core

- Reload zeigt Firmware, Sprache, Plannamen und Tabellen korrekt an.
- SSE-Reconnect wird geprüft.
- Dashboard-Inhalte werden geprüft.
- wichtige Dialoge für Induktion, HLT, Sud, System, Sensoren und Aktoren
  werden geprüft.
- Mash- und Fermenter-Ansicht werden geprüft.

### Rezeptimport

- Brautomat-eigene Rezepte werden gelesen.
- Rezepte aus kleinerBrauhelfer2 werden importiert.
- Rezepte aus Maische Malz und Mehr werden importiert.
- Rezepte aus Brewfather werden importiert.

### Maischeplanfluss

- Ein Referenz-Maischeplan startet korrekt.
- Der Ablauf wechselt korrekt in laufende Schritte.
- Koch- und Hopfenschritte werden korrekt erreicht.
- Der letzte Schritt verhält sich korrekt.
- Sprünge in späte Schritte funktionieren.

### Manueller Modus

- Der manuelle Heizmodus wird als eigener Bedienpfad geprüft.
- Manuelles Einschalten und Ausschalten der Heizleistung wird verifiziert.

### Aktoren, Sonderbefehle und Profile

- Aktor-Schrittfolgen werden korrekt ausgeführt.
- Ungültige Aktor-Schritte wechseln in einen sicheren Benutzermodus.
- Öffentliche Kessel-Sonderbefehle für Maische, Sud und HLT werden verarbeitet.
- Leistungsbegrenzung und Profilwechsel in Schritten werden korrekt übernommen.

### Sensorfehler und Sicherheitsverhalten

- Sensorfehler werden erkannt.
- Fehler in der Anheizphase eskalieren korrekt.
- Fehler im laufenden Schritt halten den Prozess kontrolliert an.

### Stop, Neustart und Wiederaufnahme

- Ein geordneter Stop im laufenden Kochschritt wird korrekt behandelt.
- Nach einem Neustart wird ein laufender Kochschritt korrekt fortgesetzt.

### Fermenter-Planfluss

- Der Fermenter-Modus wird als eigener Prozesspfad getestet.
- Kühl- und Heizentscheidungen werden geprüft.
- Automatische Schrittwechsel werden geprüft.
- Rampenschritte werden geprüft.
- Mehrstufige Fermenterpläne werden geprüft.
- Resume-Verhalten nach Neustart wird geprüft.

## Vollständige Liste der Tests

| # | Testbereich | Beschreibung |
| - | ----------- | ------------ |
| 1 | Release-Readiness | Web-Dateien für LittleFS vorbereitet |
| 2 | Release-Readiness | Firmware-Build erfolgreich |
| 3 | Release-Readiness | LittleFS-Build erfolgreich |
| 4 | Release-Readiness | Release-Paket vollständig erzeugt |
| 5 | Release-Readiness | Firmware-Flash erfolgreich |
| 6 | Release-Readiness | LittleFS-Flash erfolgreich |
| 7 | Release-Readiness | Backup-Restore nach LittleFS-Flash |
| 8 | System-Update | Firmware- und Weboberflächen-Selbstupdate |
| 9 | Backup & Restore | Definierter Ausgangszustand wird wiederhergestellt |
| 10 | Browser-UI-Core | Webinterface Reload Core |
| 11 | Browser-UI-Core | Webinterface Dashboard Core |
| 12 | Browser-UI-Core | Mash-/Fermenter-View-Switch |
| 13 | Browser-UI-Core | System speichern und Reload |
| 14 | Browser-UI-Core | SSE-Reconnect-Stabilität |
| 15 | Browser-UI-Core | Wiederholtes Öffnen von Modalen |
| 16 | Browser-UI-Core | Reload Request- und Event-Budget |
| 17 | Browser-UI-Core | Induktions-Dialog |
| 18 | Browser-UI-Core | HLT-Dialog |
| 19 | Browser-UI-Core | Sudkessel-Dialog |
| 20 | Browser-UI-Core | Sud-Dialog |
| 21 | Browser-UI-Core | System-Dialog |
| 22 | Browser-UI-Core | Sensor-Dialog |
| 23 | Browser-UI-Core | Aktor-Dialog |
| 24 | Rezeptimport | Brautomat-Rezept importieren |
| 25 | Rezeptimport | kleinerBrauhelfer2-Rezept importieren |
| 26 | Rezeptimport | MMUM-Rezept importieren |
| 27 | Rezeptimport | Brewfather-Rezept importieren |
| 28 | Maischeplanfluss | Maischeplan vom Start bis in den laufenden Schritt |
| 29 | Maischeplanfluss | Maischeplan bis Koch- und Hopfenpfad |
| 30 | Maischeplanfluss | Pause und Fortsetzen im laufenden Schritt |
| 31 | Maischeplanfluss | Benutzerschritt, vorheriger Schritt und Play |
| 32 | Maischeplanfluss | Letzter Schritt blockiert `Next` korrekt |
| 33 | Maischeplanfluss | Direkter Einstieg in den Kochschritt |
| 34 | Maischeplanfluss | Ablauf endet korrekt am Planende |
| 35 | Maischeplanfluss | Ablauf mit manuellem letzten Schritt |
| 36 | Manueller Modus | Manueller Heizmodus |
| 37 | Aktoren | Aktor-Schrittfolge wird korrekt ausgeführt |
| 38 | Aktoren | Ungültiger Aktor-Schritt führt in sicheren Benutzermodus |
| 39 | Sonderbefehl | HLT- beziehungsweise Nachguss-Befehl |
| 40 | Sonderbefehl | Maische- beziehungsweise IDS-Befehl |
| 41 | Sonderbefehl | Sud- beziehungsweise MLT-Befehl |
| 42 | Sonderbefehl | Leistungsbegrenzung für Maische beziehungsweise IDS |
| 43 | Sonderbefehl | Profilwechsel für Maische beziehungsweise IDS |
| 44 | Sonderbefehl | Profilwechsel für Sud beziehungsweise MLT |
| 45 | Sonderbefehl | Profilwechsel für HLT beziehungsweise Nachguss |
| 46 | Sensorfehler | Sensorfehler-Hook |
| 47 | Sensorfehler | Eskalation eines Sensorfehlers in der Anheizphase |
| 48 | Sensorfehler | Kontrolliertes Hold bei Sensorfehler im laufenden Step |
| 49 | Recovery | Geordneter Stop im finalen Koch-Zeitstep |
| 50 | Recovery | Neustart und Wiederaufnahme im finalen Koch-Zeitstep |
| 51 | Fermenter-Planfluss | Kühlregelung im Fermenter |
| 52 | Fermenter-Planfluss | Heizregelung im Fermenter |
| 53 | Fermenter-Planfluss | Automatischer Schrittwechsel |
| 54 | Fermenter-Planfluss | Rampenschritt-Übergang |
| 55 | Fermenter-Planfluss | Dreistufiger Fermenterplan |
| 56 | Fermenter-Planfluss | Neustart und Wiederaufnahme im Rampenschritt |
| 57 | Fermenter-Planfluss | Neustart und Wiederaufnahme im finalen Schritt |
