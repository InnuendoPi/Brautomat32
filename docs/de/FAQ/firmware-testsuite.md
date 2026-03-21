# Firmware-Testsuite

Die Test-Badges in [README.de.md](../../../readme.de.md) und [README.md](../../../readme.md) zeigen den aktuellen Stand der Firmware-Testsuite.

Der Badge fasst vier Werte zusammen:

- `Tests`: Anzahl der enthaltenen Prüfungen
- `erfolgreich`: Anzahl erfolgreich abgeschlossener Prüfungen
- `fehlerhaft`: Anzahl Prüfungen mit echtem Fehler
- `skip`: Anzahl bewusst ausgelassener Prüfungen

Ein grüner Badge bedeutet: Die aktuelle Firmware-Testsuite ist im gezeigten Stand ohne Fehler durchgelaufen.

## Was wird geprüft?

Die aktuelle Firmware-Testsuite deckt die wichtigsten Kernfunktionen der Firmware ab:

- grundlegende Backup- und Restore-Pfade
- Wiederherstellung eines sauberen Ausgangszustands
- Import von Rezepten aus mehreren Quellen
- normaler Maischeablauf vom Start bis in laufende Schritte
- Koch- und Hopfenpfade
- Fermenterfunktionen vom Einstieg bis zu längeren Gärverläufen
- Bedienfunktionen wie `Play`, `Pause`, `Next` und `Prev`
- Sonderbefehle in Maischeschritten
- Aktor-Schaltfolgen
- Sensorfehler und Sicherheitsreaktionen
- geordneter Stop und Wiederanlauf nach Neustart

Die Badges sind damit kein allgemeines Qualitätsversprechen für jede denkbare Hardware- oder Randkombination. Sie zeigen den Status der wichtigsten öffentlichen Kernprüfungen.

## Zwei Arten von Tests

Firmware-Tests und endusernahe Prüfungen erfüllen unterschiedliche Zwecke:

- Der README-Badge zeigt den Status der allgemeinen Firmware-Tests von `develop`- und `release`-Versionen.
- Daneben gibt es Tests mit Enduser-Konfigurationen, Backups und Rezepten.

Diese zweite Testgruppe prüft nicht nur die allgemeine Firmware-Funktion, sondern auch reale Anwendungsfälle wie:

- vorhandene `config.txt`
- vorhandene Backups
- einzelne Rezepte
- Kombinationen aus Konfiguration und Rezept

Damit wird geprüft, ob nicht nur die Firmware im Allgemeinen funktioniert, sondern auch ob konkrete Inhalte wie Rezepte und Konfigurationen plausibel verarbeitet werden.

Wichtig:

- Der Badge im README beschreibt den allgemeinen Stand der Firmware-Testsuite.
- Endusernahe Konfigurations- und Rezepttests sind davon zu unterscheiden.
- Sie sind besonders hilfreich, wenn eine vorhandene Anlage, ein vorhandenes Backup oder ein bestimmtes Rezept bewertet werden soll.

## Kurzer Testlauf und längere Zusatzläufe

Der Firmware Teststatus bezieht sich auf einen kompakten Firmware-Testlauf mit breiter Funktionsabdeckung.

Daneben gibt es längere Zusatzläufe, die vor allem für diese Bereiche sinnvoll sind:

- längere reale Prozessverläufe
- zusätzliche Wiederholungen zur Stabilitätsbewertung
- spezielle Konfigurations- und Rezeptfälle
- produktnahe Einzelprüfungen mit realer Hardware

Der Firmware Teststatus zeigt:

- den kompakten allgemeinen Kernnachweis.
- Längere Zusatzläufe ergänzen diesen Nachweis bei Bedarf.
- Beide Arten zusammen ergeben ein vollständigeres Bild des tatsächlichen Verhaltens.

## Testbereiche

### Backup, Restore und Grundzustand

- Grundlegende Backup- und Restore-Pfade werden geprüft.
- Brautomat startet aus einem sauberen Ausgangszustand.
- Wichtige Grundeinstellungen lassen sich wiederherstellen.

### Rezeptimport

- Brautomat-eigene Rezepte werden gelesen.
- Rezepte aus kleinerBrauhelfer2 werden importiert.
- Rezepte aus Maische Malz und Mehr werden importiert.
- Rezepte aus Brewfather werden importiert.
- Zusätzlich können reale Enduser-Rezepte gezielt auf Lesbarkeit und Plausibilität geprüft werden.

### Maischen, Kochen und Schrittfolge

- Ein Referenz-Maischeplan startet korrekt.
- Der Ablauf wechselt korrekt in laufende Schritte.
- Koch- und Hopfenschritte werden korrekt erreicht.
- Der letzte Schritt verhält sich korrekt.
- Sprünge in späte Schritte funktionieren.

### Fermenter

- Der Fermenter-Modus wird als eigener Prozesspfad getestet.
- Kühl- und Heizentscheidungen werden geprüft.
- Resume- und Langzeitfälle im Fermenter wurden ebenfalls verifiziert.

Die Badge-Tests zeigen damit nicht nur den Maischepfad, sondern den Kernstatus von Maischen und Fermentieren.

### Bedienung und Eingriffe

- Pausieren und Fortsetzen funktionieren im laufenden Schritt.
- Ein Benutzerschritt kann bestätigt und fortgesetzt werden.

### Aktoren und Sonderbefehle

- Aktor-Schrittfolgen werden korrekt ausgeführt.
- Ungültige Aktor-Schritte wechseln in einen sicheren Benutzermodus.
- Öffentliche Kessel-Sonderbefehle für Maische, Sud und HLT werden verarbeitet.
- Leistungsbegrenzung und Profilwechsel in Schritten werden korrekt übernommen.

Im Firmware-Teststatus werden dabei die zentralen Sonderbefehl-Familien geprüft:

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

## Vollständige Liste der Tests

| # | Testbereich | Beschreibung |
| - | ----------- | ------------ |
| 1 | Backup & Restore | Definierter Ausgangszustand wird sauber wiederhergestellt |
| 2 | Rezeptimport | Brautomat-Rezept importieren |
| 3 | Rezeptimport | kleinerBrauhelfer2-Rezept importieren |
| 4 | Rezeptimport | MMUM-Rezept importieren |
| 5 | Rezeptimport | Brewfather-Rezept importieren |
| 6 | Referenzablauf | Referenz-Maischeplan vom Start bis in den laufenden Schritt |
| 7 | Referenzablauf | Referenz-Maischeplan bis Koch- und Hopfenpfad |
| 8 | Bedienung | Pause und Fortsetzen im laufenden Schritt |
| 9 | Bedienung | Benutzerschritt, vorheriger Schritt und Fortsetzen mit Play |
| 10 | Bedienung | Bedienbestätigung und Fortsetzen im Prozess |
| 11 | Schrittwiederaufnahme | Direkter Einstieg in den Kochschritt |
| 12 | Schrittwiederaufnahme | Direkter Einstieg in den Hopfenschritt |
| 13 | Prozessende | Ablauf endet korrekt am Planende |
| 14 | Prozessende | Ablauf mit manuellem letzten Schritt |
| 15 | Aktoren | Aktor-Schrittfolge wird korrekt ausgeführt |
| 16 | Aktoren | Ungültiger Aktor-Schritt führt in sicheren Benutzermodus |
| 17 | Sonderbefehl | HLT- beziehungsweise Nachguss-Befehl mit Schrittverarbeitung |
| 18 | Sonderbefehl | Maische- beziehungsweise IDS-Befehl mit Schrittverarbeitung |
| 19 | Sonderbefehl | Sud- beziehungsweise MLT-Befehl mit Schrittverarbeitung |
| 20 | Sonderbefehl | Leistungsbegrenzung für Maische beziehungsweise IDS (`THRESOUT`) |
| 21 | Sonderbefehl | Profilwechsel für Maische beziehungsweise IDS (`PROFIL`) |
| 22 | Sonderbefehl | Profilwechsel für Sud beziehungsweise MLT (`PROFIL`) |
| 23 | Sonderbefehl | Profilwechsel für HLT beziehungsweise Nachguss (`PROFIL`) |
| 24 | Sensorfehler | Sensorfehler-Hook |
| 25 | Sensorfehler | Eskalation eines Sensorfehlers in der Anheizphase |
| 26 | Sensorfehler | Kontrolliertes Hold bei Sensorfehler im laufenden Schritt |
| 27 | Recovery | Geordneter Stop im laufenden Kochschritt |
| 28 | Recovery | Neustart und Wiederaufnahme im laufenden Kochschritt |
