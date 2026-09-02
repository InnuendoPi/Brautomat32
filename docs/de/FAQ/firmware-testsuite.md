# Firmware-Testsuite

Die Anzeigen in [README.de.md](../../../readme.de.md) und
[README.md](../../../readme.md) zeigen den aktuellen Stand der öffentlichen
Firmware-Testsuite.

Der zuletzt veröffentlichte Lauf der `complete-suite` vom 12. Juli 2026
(Firmware `1.65.0`) umfasst:

- `74` Suite-Tests
- `1549` zugrunde liegende Einzelprüfungen

Alle `74` Tests waren erfolgreich; es gab weder Fehler noch übersprungene
Tests. Die vollständigen Ergebnisse des veröffentlichten Laufs stehen in
[TEST-RESULTS.md](../../../TEST-RESULTS.md).

Die Anzeige fasst vier Werte zusammen:

- `Tests`: Anzahl der enthaltenen Suite-Tests
- `erfolgreich`: Anzahl erfolgreich abgeschlossener Suite-Tests
- `fehlerhaft`: Anzahl Suite-Tests mit echtem Fehler
- `skip`: Anzahl bewusst ausgelassener Suite-Tests

Ein reiner Transport-, Browser- oder Runner-Timeout wird als `skip` erfasst
und nicht als Firmwarefehler gewertet. Fachliche Fristverletzungen der FSM,
Sensorik oder Aktorik bleiben dagegen echte Fehler.

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
- Laufzeit- und Debug-Schnittstellen sowie PID-Grenzwerte
- Import von Rezepten aus mehreren Quellen
- Maischeplanfluss vom Start bis zum regulären Ende
- manueller Heizmodus
- Aktoren, Sonderbefehle und Profilwechsel
- digitales und analoges PWM-Verhalten von Aktoren
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

### Laufzeit, Debug und PID-Berechnung

- Das Format des Debug-Snapshots sowie die Telemetrie- und Debug-API werden
  geprüft.
- Die Steuerungs-API darf bei ausgeschalteter Anlage keine Aktion ausführen.
- Grenzwerte für PID-Tuningfaktor, Aufheizfenster, Schwellwertleistung,
  Abtastzeiten und Lambda-Ableitung werden geprüft.

### Rezeptimport

- Brautomat-eigene Rezepte werden gelesen.
- Rezepte aus kleinerBrauhelfer2 werden importiert.
- Dabei werden auch Mengeneinheiten eines kleinerBrauhelfer2-Rezepts geprüft.
- Rezepte aus Maische Malz und Mehr werden importiert.
- Rezepte aus Brewfather werden importiert.

### Maischeplanfluss

- Ein Referenz-Maischeplan startet korrekt.
- Der Ablauf wechselt korrekt in laufende Schritte.
- Koch- und Hopfenschritte werden korrekt erreicht.
- Der letzte Schritt verhält sich korrekt.
- Sprünge in späte Schritte funktionieren.
- Vor- und Zurückspringen, Fortsetzen nach Timeout sowie Benutzerschritte
  werden geprüft.

### Manueller Modus

- Der manuelle Heizmodus wird als eigener Bedienpfad geprüft.
- Manuelles Einschalten und Ausschalten der Heizleistung wird verifiziert.

### Aktoren, Sonderbefehle und Profile

- Aktor-Schrittfolgen werden korrekt ausgeführt.
- Digitales PWM-Schalten und der analoge PWM-Vertrag werden geprüft.
- Ungültige Aktor-Schritte wechseln in einen sicheren Benutzermodus.
- Öffentliche Kessel-Sonderbefehle für Maische, Sud und HLT werden verarbeitet.
- Leistungsbegrenzung und Profilwechsel in Schritten werden korrekt übernommen.

### Sensorfehler und Sicherheitsverhalten

- Sensorfehler werden erkannt.
- Ein Sensorwechsel im Warte-auf-Temperatur-Zustand wird geprüft.
- Beim Ausschalten werden alle Kesselausgänge deaktiviert.
- Fehler in der Anheizphase eskalieren korrekt.
- Fehler im laufenden Schritt halten den Prozess kontrolliert an.

### Stop, Neustart und Wiederaufnahme

- Ein geordneter Stop im laufenden Kochschritt wird korrekt behandelt.
- Stop und Wiederaufnahme werden sowohl im letzten als auch in einem
  vorhergehenden Koch-Zeitschritt geprüft.

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
| 1 | Konfiguration und Backup | Vollständiges Backup des aktuellen Testgeräts |
| 2 | System-Update | Firmware- und Weboberflächen-Selbstupdate |
| 3 | Konfiguration und Backup | Bekannten Test-Grundzustand wiederherstellen |
| 4 | Browser-UI-Core | Webinterface Reload Core |
| 5 | Browser-UI-Core | Webinterface Dashboard Core |
| 6 | Browser-UI-Core | Mash-/Fermenter-View-Switch |
| 7 | Browser-UI-Core | System speichern und Reload |
| 8 | Browser-UI-Core | SSE-Reconnect-Stabilität |
| 9 | Browser-UI-Core | Wiederholtes Öffnen von Modalen |
| 10 | Browser-UI-Core | Reload Request- und Event-Budget |
| 11 | Browser-UI-Core | Induktions-Dialog |
| 12 | Browser-UI-Core | HLT-Dialog |
| 13 | Browser-UI-Core | Sudkessel-Dialog |
| 14 | Browser-UI-Core | Sud-Dialog |
| 15 | Browser-UI-Core | System-Dialog |
| 16 | Browser-UI-Core | Sensor-Dialog |
| 17 | Browser-UI-Core | Aktor-Dialog |
| 18 | Laufzeit- und Debug-Vertrag | Debug-Snapshot-Format 4 |
| 19 | Laufzeit- und Debug-Vertrag | Telemetrie- und Debug-API |
| 20 | Laufzeit- und Debug-Vertrag | Steuerungs-API sperrt Aktionen bei ausgeschalteter Anlage |
| 21 | PID-Berechnungsvertrag | Grenzen des PID-Tuningfaktors |
| 22 | PID-Berechnungsvertrag | Grenzen des PID-Aufheizfensters |
| 23 | PID-Berechnungsvertrag | Grenzen der PID-Schwellwertleistung |
| 24 | PID-Berechnungsvertrag | Grenzen der IDS-Abtastzeit |
| 25 | PID-Berechnungsvertrag | Grenzen der Relais-Abtastzeit |
| 26 | PID-Berechnungsvertrag | Grenzen der Webhook-Abtastzeit |
| 27 | PID-Berechnungsvertrag | Grenzen der PID-Lambda-Ableitung |
| 28 | Maischrezeptimport | Brautomat-Rezept importieren |
| 29 | Maischrezeptimport | kleinerBrauhelfer2-Rezept importieren |
| 30 | Maischrezeptimport | kleinerBrauhelfer2-Mengeneinheiten |
| 31 | Maischrezeptimport | MMUM-Rezept importieren |
| 32 | Maischrezeptimport | Brewfather-Rezept importieren |
| 33 | Maischeplanfluss | Maischeplan vom Start bis in den laufenden Schritt |
| 34 | Maischeplanfluss | Maischeplan bis Koch- und Hopfenpfad |
| 35 | Maischeplanfluss | Pause und Fortsetzen im laufenden Schritt |
| 36 | Maischeplanfluss | `Next` wechselt aus einem laufenden Schritt weiter |
| 37 | Maischeplanfluss | `Previous` ist im ersten Schritt gesperrt |
| 38 | Maischeplanfluss | `Previous` startet einen laufenden Schritt neu |
| 39 | Maischeplanfluss | Play nach Timeout und `Previous` |
| 40 | Maischeplanfluss | Benutzerschritt: mit `Next` fortsetzen |
| 41 | Maischeplanfluss | Benutzerschritt: zurück und fortsetzen |
| 42 | Maischeplanfluss | Benutzerschritt nach Timeout |
| 43 | Maischeplanfluss | Letzter Schritt blockiert `Next` korrekt |
| 44 | Maischeplanfluss | Wiederaufnahme im Kochschritt |
| 45 | Maischeplanfluss | Reguläres Ende |
| 46 | Maischeplanfluss | Ende mit manuellem letzten Schritt |
| 47 | Manueller Modus | Manueller Heizmodus |
| 48 | Aktoren und Sonderbefehle | Aktor-Befehlsfolge |
| 49 | Aktoren und Sonderbefehle | Digitales PWM-Schalten eines Aktors |
| 50 | Aktoren und Sonderbefehle | Analoger PWM-Vertrag eines Aktors |
| 51 | Aktoren und Sonderbefehle | Ungültiger Aktor-Befehl führt zu Benutzerschritt |
| 52 | Aktoren und Sonderbefehle | Sonderbefehl: HLT / Nachguss |
| 53 | Aktoren und Sonderbefehle | Sonderbefehl: Maische / IDS |
| 54 | Aktoren und Sonderbefehle | Sonderbefehl: Sud / MLT |
| 55 | Aktoren und Sonderbefehle | Sonderbefehl: Maische-Schwellwertleistung |
| 56 | Aktoren und Sonderbefehle | Sonderbefehl: Maischeprofil |
| 57 | Aktoren und Sonderbefehle | Sonderbefehl: Sudprofil |
| 58 | Aktoren und Sonderbefehle | Sonderbefehl: HLT-Profil |
| 59 | Sensorsicherheit | Sensorfehler-Hook |
| 60 | Sensorsicherheit | Sensorwechsel in „Warten auf Temperatur“ |
| 61 | Sensorsicherheit | Ausschalten deaktiviert alle Kesselausgänge |
| 62 | Sensorsicherheit | Warten auf Temperatur: Sensorfehler eskaliert |
| 63 | Sensorsicherheit | Laufender Schritt: Sensorfehler pausiert den Timer |
| 64 | Wiederherstellung und Fortsetzen | Geordneter Stop im letzten Koch-Zeitschritt |
| 65 | Wiederherstellung und Fortsetzen | Geordneter Stop in einem vorhergehenden Zeitschritt |
| 66 | Wiederherstellung und Fortsetzen | Neustart und Fortsetzen im letzten Koch-Zeitschritt |
| 67 | Wiederherstellung und Fortsetzen | Neustart und Fortsetzen in einem vorhergehenden Zeitschritt |
| 68 | Fermenter-Planfluss | Kühlregelung im Fermenter |
| 69 | Fermenter-Planfluss | Heizregelung im Fermenter |
| 70 | Fermenter-Planfluss | Automatischer Schrittwechsel |
| 71 | Fermenter-Planfluss | Rampenschritt-Übergang |
| 72 | Fermenter-Planfluss | Dreistufiger Fermenterplan |
| 73 | Fermenter-Planfluss | Neustart und Wiederaufnahme im Rampenschritt |
| 74 | Fermenter-Planfluss | Neustart und Wiederaufnahme im finalen Schritt |
