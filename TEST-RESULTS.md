# Firmware Test Results

Current status for the public firmware complete suite:

- Suite: `complete-suite`
- Firmware version: `1.61-RC2`
- Suite tests: `57`
- Underlying checks: `1023`
- Test date: `2026-03-23`
- Test time: `10:50:45 UTC`
- Test duration: `50m 37s`
- Pass: `57`
- Fail: `0`
- Skip: `0`
- Warn: `0`

## Coverage in this published run

- Release readiness
- System update
- Configuration and backup
- Browser UI core
- Mash recipe import
- Mash plan flow
- Manual mode
- Actors and special commands
- Sensor safety
- Recovery and resume
- Fermenter plan flow

## Scope

This file summarizes the latest completed public 57-test
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
| 10 | Web interface reload core | WARN |
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
| 24 | Brautomat import | PASS |
| 25 | kleinerBrauhelfer2 import | PASS |
| 26 | MMUM import | PASS |
| 27 | Brewfather import | PASS |
| 28 | Mash start to running step | PASS |
| 29 | Mash boil and hop path | PASS |
| 30 | Pause and continue in running step | PASS |
| 31 | Wait-user: back and continue | PASS |
| 32 | Last step blocks next | PASS |
| 33 | Resume into boil step | PASS |
| 34 | Normal finish | PASS |
| 35 | Finish with manual last step | PASS |
| 36 | Manual heating mode | PASS |
| 37 | Actor command sequence | PASS |
| 38 | Invalid actor command to wait-user | PASS |
| 39 | Special command: HLT / Nachguss | PASS |
| 40 | Special command: Mash / IDS | PASS |
| 41 | Special command: Sud / MLT | PASS |
| 42 | Special command: Mash threshold output | PASS |
| 43 | Special command: Mash profile | PASS |
| 44 | Special command: Sud profile | PASS |
| 45 | Special command: HLT profile | PASS |
| 46 | Sensor error hook | PASS |
| 47 | Wait-temp: sensor fault escalates | PASS |
| 48 | Running step: sensor fault pauses timer | PASS |
| 49 | Controlled stop in final boil timer step | PASS |
| 50 | Reboot/resume in final boil timer step | PASS |
| 51 | Fermenter cooling control | PASS |
| 52 | Fermenter heating control | PASS |
| 53 | Fermenter automatic step transition | PASS |
| 54 | Fermenter ramp step transition | PASS |
| 55 | Fermenter three-step sequence | PASS |
| 56 | Fermenter reboot/resume in ramp step | PASS |
| 57 | Fermenter reboot/resume in final step | PASS |
