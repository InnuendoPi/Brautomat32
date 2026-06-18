# Firmware Test Results

Current status for the latest complete suite reference run:

- Suite: `complete-suite`
- Firmware version: `1.64.1 Develop`
- Suite tests: `58`
- Underlying checks: `1112 case checks`
- Test date: `2026-06-17`
- Test time: `17:20:59 UTC`
- Test duration: `52m 44s`
- Pass: `58`
- Fail: `0`
- Skip: `0`
- Warn: `0`

## Coverage in this published run

- Suite-start full backup of the current testdevice
- Firmware and web interface self-update
- Baseline restore of the known testdevice state
- Browser UI core
- Runtime and debug contract
- Mash recipe import
- Mash plan flow
- Manual mode
- Actors and special commands
- Digital and analog actor PWM
- Sensor safety
- Recovery and resume
- Fermenter plan flow

## Scope

This file summarizes the latest completed 58-test
complete-suite reference run.
It also shows the total number of checks executed inside it.

Not included in this count:

- Extended process and long-run tests
- Host stability and repeated regression runs
- Enduser-specific config, backup, and recipe checks
- Real hardware and kettle verification runs
- Separate MAX31865 support suite runs

## Results

| # | Test | Result |
| - | ---- | ------ |
| 1 | Current testdevice full backup | PASS |
| 2 | Firmware and web interface self-update | PASS |
| 3 | Baseline Testgeraet 2026-03-10 | PASS |
| 4 | Web interface reload core | PASS |
| 5 | Web interface dashboard core | PASS |
| 6 | Web interface mash/fermenter view switch | PASS |
| 7 | Web interface system save and reload | PASS |
| 8 | Web interface SSE reconnect stability | PASS |
| 9 | Web interface modal repeat stability | PASS |
| 10 | Web interface reload request and event budget | PASS |
| 11 | Web interface induction modal | PASS |
| 12 | Web interface HLT modal | PASS |
| 13 | Web interface sud kettle modal | PASS |
| 14 | Web interface sud modal | PASS |
| 15 | Web interface system modal | PASS |
| 16 | Web interface sensor modal | PASS |
| 17 | Web interface actor modal | PASS |
| 18 | Testflow-Vertrag Schema 4 | PASS |
| 19 | Controller API blockiert bei Power-Off | PASS |
| 20 | Brautomat MueHell2025 | PASS |
| 21 | KBH2 MueHell2025 | PASS |
| 22 | MMUM Heicardo Hell I | PASS |
| 23 | Brewfather Centennial Blonde | PASS |
| 24 | Kurzer Mash-Replay-Fall auf runner_plain | PASS |
| 25 | Kurzer runner_plain-Fall bis in den ersten Hopfenstep | PASS |
| 26 | Pause und Resume im laufenden Schritt | PASS |
| 27 | WAIT_USER über Next und zurück über Play | PASS |
| 28 | WAIT_USER über Prev und zurück über Play | PASS |
| 29 | WAIT_USER ueber Timeout eines kurzen Steps | PASS |
| 30 | Next blockiert am letzten Schritt | PASS |
| 31 | Längerer Replay-Fall bis in den Kochschritt | PASS |
| 32 | Kurzes Endgame-Replay bis Planende | PASS |
| 33 | Kurzes Endgame mit manuellem letztem Schritt | PASS |
| 34 | Manueller Modus mit Heizfreigabe | PASS |
| 35 | Actor Steps über WAIT_USER und Play | PASS |
| 36 | Digital actor PWM switches at 10 percent | PASS |
| 37 | Analog actor PWM contract | PASS |
| 38 | Ungültiger Actor-Step führt nach WAIT_USER | PASS |
| 39 | HLT-Kommandos über WAIT_USER und Play | PASS |
| 40 | Maische-Kommandos über WAIT_USER und Play | PASS |
| 41 | Sud-Kommandos über WAIT_USER und Play | PASS |
| 42 | Maische-THRESOUT mit Restore-Guard | PASS |
| 43 | Maische-PROFIL mit Restore-Guard | PASS |
| 44 | Sud-PROFIL mit Restore-Guard | PASS |
| 45 | HLT-PROFIL mit Restore-Guard | PASS |
| 46 | Sensorfehler Hook Sensor 1 | PASS |
| 47 | WAIT_TEMP Lang-Sensorfehler eskaliert nach WAIT_USER | PASS |
| 48 | RUNNING_STEP mit längerem Sensorfehler am Maischesensor | PASS |
| 49 | Geordneter Stop im finalen Koch-Zeitstep | PASS |
| 50 | Harter Reboot im finalen Koch-Zeitstep | PASS |
| 51 | Harter Reboot im nicht-finalen Koch-Zeitstep | PASS |
| 52 | Fermenter-Regelung Cooling beobachten | PASS |
| 53 | Fermenter-Regelung Heating beobachten | PASS |
| 54 | Fermenter kurzer Autonext-Stepwechsel | PASS |
| 55 | Fermenter kurzer Rampen-Autonext-Stepwechsel | PASS |
| 56 | Fermenter kurzer Drei-Step-Autonext | PASS |
| 57 | Fermenter Reboot-Resume im Rampenschritt | PASS |
| 58 | Fermenter Reboot-Resume im finalen Step | PASS |
