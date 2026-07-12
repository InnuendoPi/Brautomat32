# Firmware Test Results

Current status for the public firmware complete suite:

- Suite: `complete-suite`
- Firmware version: `1.65.0`
- Suite tests: `74`
- Underlying checks: `1549`
- Test date: `2026-07-12`
- Test time: `07:03:28 UTC`
- Test duration: `53m 59s`
- Pass: `74`
- Fail: `0`
- Skip: `0`

## Coverage in this published run

- Configuration and backup
- System update
- Browser UI core
- Runtime and debug contract
- PID calculation contract
- Mash recipe import
- Mash plan flow
- Manual mode
- Actors and special commands
- Sensor safety
- Recovery and resume
- Fermenter plan flow

## Scope

This file summarizes the latest completed public 74-test
complete-suite run.
It also shows the total number of checks executed inside it.

Not included in this count:

- Extended process and long-run tests
- Host stability and repeated regression runs
- Enduser-specific config, backup, and recipe checks
- Real hardware and kettle verification runs

## Results

| # | Test | Result |
| - | ---- | ------ |
| 1 | Current testdevice full backup | PASS |
| 2 | Firmware and web interface self-update | PASS |
| 3 | Restore known baseline test state | PASS |
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
| 18 | Debug snapshot contract schema 4 | PASS |
| 19 | Telemetry and debug API contract | PASS |
| 20 | Controller API blocks actions while power is off | PASS |
| 21 | PID tune-factor boundaries | PASS |
| 22 | PID heat-up-window boundaries | PASS |
| 23 | PID threshold-output boundaries | PASS |
| 24 | PID IDS sample-time boundaries | PASS |
| 25 | PID relay sample-time boundaries | PASS |
| 26 | PID webhook sample-time boundaries | PASS |
| 27 | PID lambda derivation boundaries | PASS |
| 28 | Brautomat import | PASS |
| 29 | kleinerBrauhelfer2 import | PASS |
| 30 | kleinerBrauhelfer2 units | PASS |
| 31 | MMUM import | PASS |
| 32 | Brewfather import | PASS |
| 33 | Mash start to running step | PASS |
| 34 | Mash boil and hop path | PASS |
| 35 | Pause and continue in running step | PASS |
| 36 | Next advances a running step | PASS |
| 37 | Previous is blocked at first step | PASS |
| 38 | Previous restarts a running step | PASS |
| 39 | Play after timeout and previous | PASS |
| 40 | Wait-user: continue on next step | PASS |
| 41 | Wait-user: back and continue | PASS |
| 42 | Wait-user after timeout | PASS |
| 43 | Last step blocks next | PASS |
| 44 | Resume into boil step | PASS |
| 45 | Normal finish | PASS |
| 46 | Finish with manual last step | PASS |
| 47 | Manual heating mode | PASS |
| 48 | Actor command sequence | PASS |
| 49 | Digital actor PWM switching | PASS |
| 50 | Analog actor PWM contract | PASS |
| 51 | Invalid actor command to wait-user | PASS |
| 52 | Special command: HLT / Nachguss | PASS |
| 53 | Special command: Mash / IDS | PASS |
| 54 | Special command: Sud / MLT | PASS |
| 55 | Special command: Mash threshold output | PASS |
| 56 | Special command: Mash profile | PASS |
| 57 | Special command: Sud profile | PASS |
| 58 | Special command: HLT profile | PASS |
| 59 | Sensor error hook | PASS |
| 60 | Wait-temperature sensor override transition | PASS |
| 61 | Power-off deactivates every kettle output path | PASS |
| 62 | Wait-temp: sensor fault escalates | PASS |
| 63 | Running step: sensor fault pauses timer | PASS |
| 64 | Controlled stop in final boil timer step | PASS |
| 65 | Controlled stop in a non-final timer step | PASS |
| 66 | Reboot/resume in final boil timer step | PASS |
| 67 | Reboot/resume in non-final boil timer step | PASS |
| 68 | Fermenter cooling control | PASS |
| 69 | Fermenter heating control | PASS |
| 70 | Fermenter automatic step transition | PASS |
| 71 | Fermenter ramp step transition | PASS |
| 72 | Fermenter three-step sequence | PASS |
| 73 | Fermenter reboot/resume in ramp step | PASS |
| 74 | Fermenter reboot/resume in final step | PASS |
