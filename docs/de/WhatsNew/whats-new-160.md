# Was ist neu 1.60.x

Dieses Kapitel ist die Übersicht der strukturellen Änderungen in 1.60.x.
Die fachlichen Details liegen in den verlinkten Kapitel-Seiten der Anleitung.

## Sync-Hinweis zur Codebasis

Der Inhalt wurde gegen den Stand 1.60.3 abgeglichen.
Kernpunkte:

- `INNU_APID::Compute()` folgt der beschriebenen Reihenfolge (Mode, Boil, Enzym-Limiter, Ramping/Coasting, PID, Anti-Windup).
- `thresOutput` (Implementierung) und `thresOut` (Doku/UI) bezeichnen dieselbe Kochleistungslogik.
- AutoTune nutzt Commit-Sicherung (`WAIT_HEAT_COMMIT`) und leitet Empfehlungen aus `L/R` ab.
- FSM-Eventqueue mit Priorisierung und `TEMP_TICK`-Coalescing ist aktiv umgesetzt.

## Wo die Inhalte jetzt liegen

- PID-Engine-Details: [PID-Engine Referenz 1.60 (Fortgeschrittene)](../Kessel/pid-engine-160-referenz.md)
- Brautag-Entscheidungshilfe: [Praxisleitfaden Brautag](../Autotune-pid/praxisleitfaden-brautag.md)
- FSM-Ablaufsteuerung: [FSM Regelablauf 1.60 (Fortgeschrittene)](../Kessel/fsm-regelablauf-160.md)
- IDS-RMT-Sendelogik: [IDS RMT Sendelogik 1.60 (Fortgeschrittene)](../Grundeinrichtung/ids-rmt-160.md)

## Vergleich zu 1.59.10 (Kurzfassung)

Die Umstellung ist strukturell, nicht nur parametisch:

1. von `Ku/Pu`-Schwingungslogik zu `L/R`-Modell
2. von tickergeprägter Ausführung zu FSM-/Task-Orchestrierung
3. von klassischer PID-Fokussierung zu phasenorientierter Führungsstrategie
4. von blockierendem IDS-Bitbang zu entkoppelter RMT-TX-Logik

## Loop+Ticker vs FSM+Tasks (Kurz)

- Alt: Prioritäten implizit über Loop-Reihenfolge, mehr Kopplung in Callbacks.
- Neu: explizite Zustände, Eventqueue, priorisierte Stop-Pfade, stabileres Verhalten unter Last.

## Fazit

1.60.x bringt klarere Verantwortlichkeiten in der Regelung.
Für Brauer bedeutet das typischerweise reproduzierbarere Temperaturführung und
besser erklärbare Stellschrauben.
