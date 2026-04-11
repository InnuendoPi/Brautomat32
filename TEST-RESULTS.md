# Firmware Test Results

Current status for the public firmware complete suite:

- Suite: `complete-suite`
- Firmware version: `1.61.2`
- Suite tests: `62`
- Underlying checks: `1130`
- Test date: `2026-04-09`
- Test time: `16:17:06 UTC`
- Test duration: `53m 56s`
- Pass: `62`
- Warn: `0`
- Fail: `0`
- Skip: `0`

## Coverage in this published run

- Release readiness
- System update
- Configuration and backup
- Browser UI core
- Runtime and controller API contract
- Mash recipe import
- Mash plan flow
- Manual mode
- Actors and special commands
- Sensor safety
- Recovery and resume
- Fermenter plan flow

## Scope

This file summarizes the latest completed public 62-test
complete-suite run.
It also shows the total number of checks executed inside it.

Not included in this count:

- Extended process and long-run tests
- Host stability and repeated regression runs
- Enduser-specific config, backup, and recipe checks
- Real hardware and kettle verification runs

The latest official complete-suite run finished fully green for the
published release assessment.

## Results

| # | Test | Result |
| - | ---- | ------ |
| 1 | Web assets prepared for LittleFS | PASS |
| 2 | Firmware build | PASS |
| 3 | Filesystem build | PASS |
| 4 | Release package assembled | PASS |
| 5 | Firmware flash | PASS |
| 6 | LittleFS flash | PASS |
| 7 | Backup restore after filesystem flash | PASS |
| 8 | Firmware and web interface self-update | PASS |
| 9 | Baseline Testgeraet 2026-03-10 | PASS |
| 10 | Web interface reload core | PASS |
| 11 | Web interface dashboard core | PASS |
| 12 | Web interface mash/fermenter view switch | PASS |
| 13 | Web interface system save and reload | PASS |
| 14 | Web interface SSE reconnect stability | PASS |
| 15 | Web interface modal repeat stability | PASS |
| 16 | Web interface reload request and event budget | PASS |
| 17 | Web interface induction modal | PASS |
| 18 | Web interface HLT modal | PASS |
| 19 | Web interface sud kettle modal | PASS |
| 20 | Web interface sud modal | PASS |
| 21 | Web interface system modal | PASS |
| 22 | Web interface sensor modal | PASS |
| 23 | Web interface actor modal | PASS |
| 24 | Testflow-Vertrag Schema 4 | PASS |
| 25 | Controller API blockiert bei Power-Off | PASS |
| 26 | Brautomat MueHell2025 | PASS |
| 27 | KBH2 MueHell2025 | PASS |
| 28 | MMUM Heicardo Hell I | PASS |
| 29 | Brewfather Centennial Blonde | PASS |
| 30 | Kurzer Mash-Replay-Fall auf runner_plain | PASS |
| 31 | Kurzer runner_plain-Fall bis in den ersten Hopfenstep | PASS |
| 32 | Pause und Resume im laufenden Schritt | PASS |
| 33 | WAIT_USER über Next und zurück über Play | PASS |
| 34 | WAIT_USER über Prev und zurück über Play | PASS |
| 35 | WAIT_USER ueber Timeout eines kurzen Steps | PASS |
| 36 | Next blockiert am letzten Schritt | PASS |
| 37 | Längerer Replay-Fall bis in den Kochschritt | PASS |
| 38 | Kurzes Endgame-Replay bis Planende | PASS |
| 39 | Kurzes Endgame mit manuellem letztem Schritt | PASS |
| 40 | Manueller Modus mit Heizfreigabe | PASS |
| 41 | Actor Steps über WAIT_USER und Play | PASS |
| 42 | Ungültiger Actor-Step führt nach WAIT_USER | PASS |
| 43 | HLT-Kommandos über WAIT_USER und Play | PASS |
| 44 | Maische-Kommandos über WAIT_USER und Play | PASS |
| 45 | Sud-Kommandos über WAIT_USER und Play | PASS |
| 46 | Maische-THRESOUT mit Restore-Guard | PASS |
| 47 | Maische-PROFIL mit Restore-Guard | PASS |
| 48 | Sud-PROFIL mit Restore-Guard | PASS |
| 49 | HLT-PROFIL mit Restore-Guard | PASS |
| 50 | Sensorfehler Hook Sensor 1 | PASS |
| 51 | WAIT_TEMP Lang-Sensorfehler eskaliert nach WAIT_USER | PASS |
| 52 | RUNNING_STEP mit längerem Sensorfehler am Maischesensor | PASS |
| 53 | Geordneter Stop im finalen Koch-Zeitstep | PASS |
| 54 | Harter Reboot im finalen Koch-Zeitstep | PASS |
| 55 | Harter Reboot im nicht-finalen Koch-Zeitstep | PASS |
| 56 | Fermenter-Regelung Cooling beobachten | PASS |
| 57 | Fermenter-Regelung Heating beobachten | PASS |
| 58 | Fermenter kurzer Autonext-Stepwechsel | PASS |
| 59 | Fermenter kurzer Rampen-Autonext-Stepwechsel | PASS |
| 60 | Fermenter kurzer Drei-Step-Autonext | PASS |
| 61 | Fermenter Reboot-Resume im Rampenschritt | PASS |
| 62 | Fermenter Reboot-Resume im finalen Step | PASS |
