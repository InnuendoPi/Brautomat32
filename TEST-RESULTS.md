# Firmware Test Results

Current status for the public firmware complete suite:

- Suite: `complete-suite`
- Firmware version: `1.65.0`
- Suite tests: `60`
- Underlying checks: `1159`
- Test date: `2026-07-01`
- Test time: `10:32:40 UTC`
- Test duration: `51m 58s`
- Pass: `60`
- Fail: `0`
- Skip: `0`
- Warn: `0`

## Coverage in this published run

- Configuration and backup
- System update
- Browser UI core
- Runtime and debug contract
- Mash recipe import
- Mash plan flow
- Manual mode
- Actors and special commands
- Sensor safety
- Recovery and resume
- Fermenter plan flow

## Scope

This file summarizes the latest completed public 60-test
complete-suite run.
It also shows the total number of checks executed inside it.

Not included in this count:

- Extended process and long-run tests
- Host stability and repeated regression runs
- Enduser-specific config, backup, and recipe checks
- Real hardware and kettle verification runs

## Notes

The suite completed without failures or warnings.

The browser reload request-budget case reported aborted `/reqKettle` requests during page reload. These are expected browser-side aborts during navigation and are counted as successful for this published result.

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
| 21 | Brautomat import | PASS |
| 22 | kleinerBrauhelfer2 import | PASS |
| 23 | kleinerBrauhelfer2 units | PASS |
| 24 | MMUM import | PASS |
| 25 | Brewfather import | PASS |
| 26 | Mash start to running step | PASS |
| 27 | Mash boil and hop path | PASS |
| 28 | Pause and continue in running step | PASS |
| 29 | Wait-user: continue on next step | PASS |
| 30 | Wait-user: back and continue | PASS |
| 31 | Wait-user after timeout | PASS |
| 32 | Last step blocks next | PASS |
| 33 | Resume into boil step | PASS |
| 34 | Normal finish | PASS |
| 35 | Finish with manual last step | PASS |
| 36 | Manual heating mode | PASS |
| 37 | Actor command sequence | PASS |
| 38 | Digital actor PWM switching | PASS |
| 39 | Analog actor PWM contract | PASS |
| 40 | Invalid actor command to wait-user | PASS |
| 41 | Special command: HLT / Nachguss | PASS |
| 42 | Special command: Mash / IDS | PASS |
| 43 | Special command: Sud / MLT | PASS |
| 44 | Special command: Mash threshold output | PASS |
| 45 | Special command: Mash profile | PASS |
| 46 | Special command: Sud profile | PASS |
| 47 | Special command: HLT profile | PASS |
| 48 | Sensor error hook | PASS |
| 49 | Wait-temp: sensor fault escalates | PASS |
| 50 | Running step: sensor fault pauses timer | PASS |
| 51 | Controlled stop in final boil timer step | PASS |
| 52 | Reboot/resume in final boil timer step | PASS |
| 53 | Reboot/resume in non-final boil timer step | PASS |
| 54 | Fermenter cooling control | PASS |
| 55 | Fermenter heating control | PASS |
| 56 | Fermenter automatic step transition | PASS |
| 57 | Fermenter ramp step transition | PASS |
| 58 | Fermenter three-step sequence | PASS |
| 59 | Fermenter reboot/resume in ramp step | PASS |
| 60 | Fermenter reboot/resume in final step | PASS |
