# IDS RMT Sendelogik 1.60 (Fortgeschrittene)

> **Hinweis für den Einstieg:**  
> Dieses Kapitel ist für fortgeschrittene Nutzer.  
> Für den Start mit dem Brautomat kannst du es zunächst überspringen und später bei Bedarf lesen.  
> Einstieg zuerst: [Kochfeld einrichten](ids.md) und [AutoTune Schritt für Schritt](../Autotune-pid/steps.md).

## Ziel

Die IDS-Ansteuerung ab 1.60 setzt PID-Leistungsvorgaben in reale IDS-Telegramme um, ohne die restliche Ablaufsteuerung zu blockieren.
Dazu ist Senden von der Kesselregelung getrennt.

## Architektur

- PID/`Update()` liefern nur Zielkommando (`cmd`) und TX-Aktiv-Status.
- Dedizierter IDS-TX-Task übernimmt den Versand.
- TX arbeitet RMT-basiert statt bitweise blockierend im Regelkontext.

## Neue RMT-Lösung

1. Frame-Erzeugung pro Kommando (Startsequenz + 33 Bit-Paare, IDS-Matrix `P0..P10`).
2. Fairer Versand über mehrere aktive IDS-Kessel.
3. Snapshot-basierte, atomare Übergabe (`enabled`, `cmd`, Burst-Sequenz).

## Schutzmechanismen

- Fair Scheduling (maximal ein Frame pro Kessel und Runde),
- Burst-Frames bei Start, Stufensprung und echtem Off-Edge,
- Keepalive bei gehaltenen Leistungsstufen,
- Relay-Settle-Zeit nach Relais-EIN vor Nicht-Null-Kommandos,
- sauberes Reinit bei Pinwechsel.

## Nutzen für AutoTune

AutoTune startet Messung erst nach bestätigtem Heiz-Commit.
Bei IDS ist das auf den Zeitpunkt eines tatsächlich gesendeten Power-Frames bezogen.
Dadurch wird die `L`-Messung robuster.

## Alt vs Neu (Kurz)

| Thema | Alt (blockierend) | Neu (RMT + TX-Task) |
| --- | --- | --- |
| Signalerzeugung | `digitalWrite` + `ets_delay_us` im Bitloop | RMT-Hardware |
| Ausführung | blockierend im aufrufenden Kontext | entkoppelt im TX-Task |
| Mehrkesselbetrieb | keine faire Interleaving-Strategie | Fair Scheduling |
| Kantenrobustheit | einfache Umschaltung | Burst/Keepalive/Settle integriert |

## Siehe auch

- [Kochfeld einrichten](ids.md)
- [Fehlerbehebung](../FAQ/troubleshooting.md)
- [Was ist neu 1.60.x](../WhatsNew/whats-new-160.md)
