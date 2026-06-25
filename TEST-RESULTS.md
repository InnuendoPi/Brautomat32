# Firmware Test Results

Current status for the latest complete suite reference run:

- Suite: `complete-suite`
- Firmware version: `1.64.4 Develop`
- Suite tests: `59`
- Underlying checks: `1132 case checks`
- Test date: `2026-06-25`
- Test time: `not recorded`
- Test duration: `not recorded`
- Pass: `59`
- Fail: `0`
- Skip: `0`
- Warn: `0`

## Current Assessment

The latest complete-suite run contains no FAIL.
All 59 tests completed with PASS.

Follow-up validation:

- `manual-mode-power-smoke`: `PASS`
- `safety-power-off-regression`: `PASS`
- Webhook mock chain: `PASS` for Manual, Mash and AutoTune `on -> off`

Remaining warning: none

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

This file summarizes the latest completed 59-test complete-suite reference run.
It also records targeted follow-up tests executed after the run.

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
| 22 | KBH2 Milchzucker Einheiten | PASS |
| 23 | MMUM Heicardo Hell I | PASS |
| 24 | Brewfather Centennial Blonde | PASS |
| 25 | Kurzer Mash-Replay-Fall auf runner_plain | PASS |
| 26 | Kurzer runner_plain-Fall bis in den ersten Hopfenstep | PASS |
| 27 | Pause und Resume im laufenden Schritt | PASS |
| 28 | WAIT_USER über Next und zurück über Play | PASS |
| 29 | WAIT_USER über Prev und zurück über Play | PASS |
| 30 | WAIT_USER ueber Timeout eines kurzen Steps | PASS |
| 31 | Next blockiert am letzten Schritt | PASS |
| 32 | Längerer Replay-Fall bis in den Kochschritt | PASS |
| 33 | Kurzes Endgame-Replay bis Planende | PASS |
| 34 | Kurzes Endgame mit manuellem letztem Schritt | PASS |
| 35 | Manueller Modus mit Heizfreigabe | PASS |
| 36 | Actor Steps über WAIT_USER und Play | PASS |
| 37 | Digital actor PWM switches at 10 percent | PASS |
| 38 | Analog actor PWM contract | PASS |
| 39 | Ungültiger Actor-Step führt nach WAIT_USER | PASS |
| 40 | HLT-Kommandos über WAIT_USER und Play | PASS |
| 41 | Maische-Kommandos über WAIT_USER und Play | PASS |
| 42 | Sud-Kommandos über WAIT_USER und Play | PASS |
| 43 | Maische-THRESOUT mit Restore-Guard | PASS |
| 44 | Maische-PROFIL mit Restore-Guard | PASS |
| 45 | Sud-PROFIL mit Restore-Guard | PASS |
| 46 | HLT-PROFIL mit Restore-Guard | PASS |
| 47 | Sensorfehler Hook Sensor 1 | PASS |
| 48 | WAIT_TEMP Lang-Sensorfehler eskaliert nach WAIT_USER | PASS |
| 49 | RUNNING_STEP mit längerem Sensorfehler am Maischesensor | PASS |
| 50 | Geordneter Stop im finalen Koch-Zeitstep | PASS |
| 51 | Harter Reboot im finalen Koch-Zeitstep | PASS |
| 52 | Harter Reboot im nicht-finalen Koch-Zeitstep | PASS |
| 53 | Fermenter-Regelung Cooling beobachten | PASS |
| 54 | Fermenter-Regelung Heating beobachten | PASS |
| 55 | Fermenter kurzer Autonext-Stepwechsel | PASS |
| 56 | Fermenter kurzer Rampen-Autonext-Stepwechsel | PASS |
| 57 | Fermenter kurzer Drei-Step-Autonext | PASS |
| 58 | Fermenter Reboot-Resume im Rampenschritt | PASS |
| 59 | Fermenter Reboot-Resume im finalen Step | PASS |

## Follow-up Results

| # | Test | Result |
| - | ---- | ------ |
| 1 | Manual mode power smoke targeted retest | PASS |
| 2 | Safety power-off regression with relay dry-run and webhook mock | PASS |
