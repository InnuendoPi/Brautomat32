# Firmware Test Results

Current status for the public firmware complete suite:

- Suite: `complete-suite`
- Firmware version: `1.61-RC1`
- Suite tests: `44`
- Underlying checks: `849`
- Test date: `2026-03-21`
- Test time: `11:33:35 UTC`
- Test duration: `45m 55s`
- Pass: `44`
- Fail: `0`
- Skip: `0`

## Coverage in this published run

- Release readiness
- System update
- Configuration and backup
- Mash recipe import
- Mash plan flow
- Manual mode
- Actors and special commands
- Sensor safety
- Recovery and resume
- Fermenter plan flow

## Scope

This file summarizes the latest completed public 44-test
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
| 10 | Brautomat import | PASS |
| 11 | kleinerBrauhelfer2 import | PASS |
| 12 | MMUM import | PASS |
| 13 | Brewfather import | PASS |
| 14 | Mash start to running step | PASS |
| 15 | Mash boil and hop path | PASS |
| 16 | Pause and continue in running step | PASS |
| 17 | Wait-user: back and continue | PASS |
| 18 | Last step blocks next | PASS |
| 19 | Resume into boil step | PASS |
| 20 | Resume into hop step | PASS |
| 21 | Normal finish | PASS |
| 22 | Finish with manual last step | PASS |
| 23 | Manual heating mode | PASS |
| 24 | Actor command sequence | PASS |
| 25 | Invalid actor command to wait-user | PASS |
| 26 | Special command: HLT / Nachguss | PASS |
| 27 | Special command: Mash / IDS | PASS |
| 28 | Special command: Sud / MLT | PASS |
| 29 | Special command: Mash threshold output | PASS |
| 30 | Special command: Mash profile | PASS |
| 31 | Special command: Sud profile | PASS |
| 32 | Special command: HLT profile | PASS |
| 33 | Sensor error hook | PASS |
| 34 | Wait-temp: sensor fault escalates | PASS |
| 35 | Running step: sensor fault pauses timer | PASS |
| 36 | Controlled stop in final boil timer step | PASS |
| 37 | Reboot/resume in final boil timer step | PASS |
| 38 | Fermenter cooling control | PASS |
| 39 | Fermenter heating control | PASS |
| 40 | Fermenter automatic step transition | PASS |
| 41 | Fermenter ramp step transition | PASS |
| 42 | Fermenter three-step sequence | PASS |
| 43 | Fermenter reboot/resume in ramp step | PASS |
| 44 | Fermenter reboot/resume in final step | PASS |
