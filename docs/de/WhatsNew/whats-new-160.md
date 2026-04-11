# Was ist neu 1.60+

Dieses Kapitel ist die Übersicht der strukturellen Änderungen seit Version 1.60.
Die fachlichen Details liegen in den verlinkten Kapitel-Seiten der Anleitung.

## Aktueller Geltungsbereich

Diese Übersicht wird auf Basis von **1.60+** gepflegt und beschreibt die aktuelle Architekturlinie über den ursprünglichen 1.60-Stand hinaus.
Sie ist nicht auf den ersten 1.60.x-Implementierungsstand begrenzt.

Kernpunkte der aktuellen Generation:

- adaptive PID-Regelung mit `L/R`-basierter AutoTune
- FSM-basierte Ablaufsteuerung für Maischen, AutoTune, manuelle Modi und Fermenter
- Runtime-Snapshot und Controller-Deck für WebIf, SSE, Display und Testflow
- Dashboard- und Chart-Verbesserungen, einschließlich zusätzlicher loser Sensorkurven
- robustere Backup-/Restore-, Upload-, Import- und Dateipfade
- entkoppelter IDS-RMT-Sendepfad und breitere Hardwareunterstützung jenseits reiner IDS-Setups

## Wo die Inhalte jetzt liegen

- PID-Engine-Details: [PID-Engine Referenz 1.60+ (Fortgeschrittene)](../Kessel/pid-engine-160-referenz.md)
- Brautag-Entscheidungshilfe: [Praxisleitfaden Brautag](../Autotune-pid/praxisleitfaden-brautag.md)
- FSM-Ablaufsteuerung: [FSM Regelablauf 1.60+ (Fortgeschrittene)](../Kessel/fsm-regelablauf-160.md)
- IDS-RMT-Sendelogik: [IDS RMT Sendelogik 1.60+ (Fortgeschrittene)](../Grundeinrichtung/ids-rmt-160.md)

## Vergleich zu Firmwareständen vor 1.60

Die Umstellung ist strukturell, nicht nur parametisch:

1. von `Ku/Pu`-Schwingungslogik zu `L/R`-Modell
2. von tickergeprägter Ausführung zu FSM-/Task-Orchestrierung
3. von klassischer PID-Fokussierung zu phasenorientierter Führungsstrategie
4. von verteilten Runtime-Zuständen zu einem zentralen Runtime-Snapshot-Modell
5. von fragileren Datei-/Updatepfaden zu robusterem Restore, Upload und Import
6. von einer stark IDS-geprägten Wahrnehmung zu einer breiteren Steuerplattform für Induktion, Relais und Webhook-Aktorik

## Praktischer Nutzen

Für Brauer bedeutet die 1.60+-Linie vor allem:

- reproduzierbareres Temperaturverhalten
- klarere Stellschrauben beim Tuning
- robustere Prozessabläufe
- größere Hardware-Flexibilität
- stabileres WebIf- und Gerätezustands-Handling
