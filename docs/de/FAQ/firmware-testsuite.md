# Firmware-Testsuite

Die Anzeigen in [README.de.md](../../../readme.de.md) und
[README.md](../../../readme.md) zeigen den aktuellen Stand der öffentlichen
Firmware-Testsuite.

Die aktuelle veröffentlichte `complete-suite` umfasst:

- `44` Suite-Tests
- `849` zugrunde liegende Einzelprüfungen

Die Anzeige fasst vier Werte zusammen:

- `Tests`: Anzahl der enthaltenen Suite-Tests
- `erfolgreich`: Anzahl erfolgreich abgeschlossener Suite-Tests
- `fehlerhaft`: Anzahl Suite-Tests mit echtem Fehler
- `skip`: Anzahl bewusst ausgelassener Suite-Tests

Eine grüne Anzeige bedeutet: Die aktuelle öffentliche Firmware-Testsuite ist
ohne Fehler durchgelaufen.

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
- Import von Rezepten aus mehreren Quellen
- Maischeplanfluss vom Start bis zum regulären Ende
- manueller Heizmodus
- Aktoren, Sonderbefehle und Profilwechsel
- Sensorfehler und Sicherheitsreaktionen
- Stop, Neustart und Wiederaufnahme
- Fermenter-Planfluss vom Einstieg bis zu Neustart- und Resume-Fällen

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

### Rezeptimport

- Brautomat-eigene Rezepte werden gelesen.
- Rezepte aus kleinerBrauhelfer2 werden importiert.
- Rezepte aus Maische Malz und Mehr werden importiert.
- Rezepte aus Brewfather werden importiert.
- Reale Enduser-Rezepte können zusätzlich gezielt auf Lesbarkeit und
  Plausibilität geprüft werden.

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

In der Firmware-Testsuite werden dabei diese Sonderbefehl-Familien geprüft:

- `HLT` beziehungsweise `NACHGUSS`
- `MAISCHE` beziehungsweise `IDS`
- `SUD` beziehungsweise `MLT`
- `MAISCHETHRESOUT` beziehungsweise `IDSTHRESOUT`
- `MAISCHEPROFIL` beziehungsweise `IDSPROFIL`
- `SUDPROFIL` beziehungsweise `MLTPROFIL`
- `HLTPROFIL` beziehungsweise `NACHGUSSPROFIL`

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

Die Testsuite deckt damit sowohl den Maischepfad als auch den
Fermenter-Planfluss ab.

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
| 10 | Rezeptimport | Brautomat-Rezept importieren |
| 11 | Rezeptimport | kleinerBrauhelfer2-Rezept importieren |
| 12 | Rezeptimport | MMUM-Rezept importieren |
| 13 | Rezeptimport | Brewfather-Rezept importieren |
| 14 | Maischeplanfluss | Maischeplan vom Start bis in den laufenden Schritt |
| 15 | Maischeplanfluss | Maischeplan bis Koch- und Hopfenpfad |
| 16 | Maischeplanfluss | Pause und Fortsetzen im laufenden Schritt |
| 17 | Maischeplanfluss | Benutzerschritt, vorheriger Schritt und Play |
| 18 | Maischeplanfluss | Letzter Schritt blockiert `Next` korrekt |
| 19 | Maischeplanfluss | Direkter Einstieg in den Kochschritt |
| 20 | Maischeplanfluss | Direkter Einstieg in den Hopfenschritt |
| 21 | Maischeplanfluss | Ablauf endet korrekt am Planende |
| 22 | Maischeplanfluss | Ablauf mit manuellem letzten Schritt |
| 23 | Manueller Modus | Manueller Heizmodus |
| 24 | Aktoren | Aktor-Schrittfolge wird korrekt ausgeführt |
| 25 | Aktoren | Ungültiger Aktor-Schritt führt in sicheren Benutzermodus |
| 26 | Sonderbefehl | HLT- beziehungsweise Nachguss-Befehl |
| 27 | Sonderbefehl | Maische- beziehungsweise IDS-Befehl |
| 28 | Sonderbefehl | Sud- beziehungsweise MLT-Befehl |
| 29 | Sonderbefehl | Leistungsbegrenzung für Maische beziehungsweise IDS |
| 30 | Sonderbefehl | Profilwechsel für Maische beziehungsweise IDS |
| 31 | Sonderbefehl | Profilwechsel für Sud beziehungsweise MLT |
| 32 | Sonderbefehl | Profilwechsel für HLT beziehungsweise Nachguss |
| 33 | Sensorfehler | Sensorfehler-Hook |
| 34 | Sensorfehler | Eskalation eines Sensorfehlers in der Anheizphase |
| 35 | Sensorfehler | Kontrolliertes Hold bei Sensorfehler im laufenden Schritt |
| 36 | Recovery | Geordneter Stop im finalen Koch-Zeitstep |
| 37 | Recovery | Neustart und Wiederaufnahme im finalen Koch-Zeitstep |
| 38 | Fermenter-Planfluss | Kühlregelung im Fermenter |
| 39 | Fermenter-Planfluss | Heizregelung im Fermenter |
| 40 | Fermenter-Planfluss | Automatischer Schrittwechsel |
| 41 | Fermenter-Planfluss | Rampenschritt-Übergang |
| 42 | Fermenter-Planfluss | Dreistufiger Fermenterplan |
| 43 | Fermenter-Planfluss | Neustart und Wiederaufnahme im Rampenschritt |
| 44 | Fermenter-Planfluss | Neustart und Wiederaufnahme im finalen Schritt |
