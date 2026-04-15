# Firmware Test Results

Current status for the public firmware complete suite:

- Suite: `complete-suite`
- Firmware version: `1.62.0`
- Suite tests: `62`
- Underlying checks: `1130`
- Test date: `2026-04-15`
- Test time: `06:03:52 UTC`
- Test duration: `57m 3s`
- Pass: `62`
- Fail: `0`
- Skip: `0`

## Coverage in this published run

- Release readiness
- System update
- Configuration and backup
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

This file summarizes the latest completed public 62-test
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
| 1 | Web assets prepared for LittleFS | PASS |
| 2 | Firmware build | PASS |
| 3 | Filesystem build | PASS |
| 4 | Release package assembled | PASS |
| 5 | Firmware flash | PASS |
| 6 | LittleFS flash | PASS |
| 7 | Backup restore after filesystem flash | PASS |
| 8 | Firmware and web interface self-update | PASS |
| 9 | Backup and restore baseline | PASS |
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
| 24 | Debug snapshot contract schema 4 | PASS |
| 25 | Controller API blocks actions while power is off | PASS |
| 26 | Brautomat import | PASS |
| 27 | kleinerBrauhelfer2 import | PASS |
| 28 | MMUM import | PASS |
| 29 | Brewfather import | PASS |
| 30 | Mash start to running step | PASS |
| 31 | Mash boil and hop path | PASS |
| 32 | Pause and continue in running step | PASS |
| 33 | Wait-user: continue on next step | PASS |
| 34 | Wait-user: back and continue | PASS |
| 35 | Wait-user after timeout | PASS |
| 36 | Last step blocks next | PASS |
| 37 | Resume into boil step | PASS |
| 38 | Normal finish | PASS |
| 39 | Finish with manual last step | PASS |
| 40 | Manual heating mode | PASS |
| 41 | Actor command sequence | PASS |
| 42 | Invalid actor command to wait-user | PASS |
| 43 | Special command: HLT / Nachguss | PASS |
| 44 | Special command: Mash / IDS | PASS |
| 45 | Special command: Sud / MLT | PASS |
| 46 | Special command: Mash threshold output | PASS |
| 47 | Special command: Mash profile | PASS |
| 48 | Special command: Sud profile | PASS |
| 49 | Special command: HLT profile | PASS |
| 50 | Sensor error hook | PASS |
| 51 | Wait-temp: sensor fault escalates | PASS |
| 52 | Running step: sensor fault pauses timer | PASS |
| 53 | Controlled stop in final boil timer step | PASS |
| 54 | Reboot/resume in final boil timer step | PASS |
| 55 | Reboot/resume in non-final boil timer step | PASS |
| 56 | Fermenter cooling control | PASS |
| 57 | Fermenter heating control | PASS |
| 58 | Fermenter automatic step transition | PASS |
| 59 | Fermenter ramp step transition | PASS |
| 60 | Fermenter three-step sequence | PASS |
| 61 | Fermenter reboot/resume in ramp step | PASS |
| 62 | Fermenter reboot/resume in final step | PASS |
