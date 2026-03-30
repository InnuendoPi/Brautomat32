# FSM Regelablauf 1.60 (Fortgeschrittene)

> **Hinweis für den Einstieg:**  
> Dieses Kapitel ist für fortgeschrittene Nutzer.  
> Für den Start mit dem Brautomat kannst du es zunächst überspringen und später bei Bedarf lesen.  
> Einstieg zuerst: [Die Steuerung](../Maischeplan/steuerung.md) und [PID-Anleitung](PID-Anleitung.md).

## Warum FSM

Die Engine ab 1.60 trennt Regelalgorithmus (PID/AutoTune) von Ablaufsteuerung (Start, Stop, Pause, Stepwechsel, Moduswechsel).
Die FSM stellt sicher, dass jede Aktion in einem klaren Zustand verarbeitet wird.

Praktischer Nutzen:

- weniger Mehrfachauslösungen,
- weniger hängende Zwischenzustände,
- robustere Trennung zwischen UI-Aktion und Heizlogik.

## Globale Modi

Exklusiv, immer genau ein Modus aktiv:

- `MODE_NONE`
- `MODE_MASH`
- `MODE_MANUAL`
- `MODE_AUTOTUNE`
- `MODE_FERM`

Beim Moduswechsel wird alter Modus sauber beendet, bevor neuer Modus aktiv wird.

## Prozesszustände

- `MASH_IDLE`
- `MASH_WAIT_TEMP`
- `MASH_RUNNING_STEP`
- `MASH_PAUSED`
- `MASH_WAIT_USER`
- `MASH_FINISHED`
- `MASH_AUTOTUNE_RUNNING`

Jede UI-Aktion und jedes interne Event hat damit einen definierten Eingangszustand und einen definierten Folgezustand.

## Eventsteuerung und Queue

Typische Events:

- `MASH_EVT_START`, `MASH_EVT_STOP`
- `MASH_EVT_PLAY`
- `MASH_EVT_PAUSE_START`, `MASH_EVT_PAUSE_STOP`
- `MASH_EVT_NEXT_STEP`, `MASH_EVT_PREV_STEP`
- `MASH_EVT_TEMP_TICK`
- `MASH_EVT_TIMEOUT`
- `MASH_EVT_AUTOTUNE_START`, `MASH_EVT_AUTOTUNE_STOP`

Robustheit kommt aus Priorisierung:

- Stop-relevante Events werden bevorzugt,
- häufige idempotente Events (`TEMP_TICK`) werden zusammengefasst (Coalescing).

## Virtueller Step-Timer

Die Laufzeitsteuerung arbeitet mit explizitem Timerzustand:

- `running`
- `periodMs`
- `remainingMs`
- `deadline`

Pause/Fortsetzen, Timeout, Stepwechsel und UI-Zeitbezug greifen auf dieselbe Zeitquelle zu.

## Typischer Ablauf

1. `START` aktiviert Modus/State.
2. System geht nach `WAIT_TEMP`.
3. `TEMP_TICK` prüft Temperatur-Gate.
4. Bei Freigabe startet Step-Timer, Zustand `RUNNING_STEP`.
5. `TIMEOUT` beendet Step.
6. AutoNext oder `WAIT_USER`.
7. `PLAY` setzt fort.
8. `STOP` Führt in sauberen Endzustand.

## Zusammenspiel mit PID

- FSM entscheidet, **wann** geregelt/geheizt werden darf.
- PID-Engine entscheidet, **wie** innerhalb des freigegebenen Fensters geregelt wird.

## Siehe auch

- [PID-Engine Referenz 1.60 (Fortgeschrittene)](pid-engine-160-referenz.md)
- [Was ist neu 1.60.x](../WhatsNew/whats-new-160.md)
