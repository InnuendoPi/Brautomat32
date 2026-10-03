# Firmware Test Results

Current status for the public firmware complete suite:

- Suite: `complete-suite`
- Firmware version: `1.66.2`
- Suite tests: `79`
- Underlying checks: `1492`
- Test date: `2026-10-02`
- Test time: `17:45:55 UTC`
- Test duration: `1h 2m 58s`
- Pass: `74`
- Fail: `0`
- Skip: `5`

## Coverage in this published run

- Configuration and backup
- Kettle FSM regression
- MultiDevice simulated Workers
- MultiDevice real integration
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

## Notes

### Skip

The following tests were skipped:

- `Master FSM with three simulated Workers`
  Info: Not selected: --multideviceTests mock3; no coverage claimed
- `SUD: real Master and Worker1`
  Info: Not selected: --multideviceTests real1; no coverage claimed
- `HLT: real Master and Worker1`
  Info: Not selected: --multideviceTests real1; no coverage claimed
- `Firmware and web interface self-update`
  Info: transport-timeout: The operation was aborted due to timeout
- `Restore known baseline test state`
  Info: transport-timeout: The operation was aborted due to timeout

## Results

| # | Test | Result |
| - | ---- | ------ |
| 1 | Current testdevice full backup | PASS |
| 2 | SUD: numeric limits, timed OFF and pause/resume | PASS |
| 3 | HLT: numeric limits, timed OFF and pause/resume | PASS |
| 4 | Master FSM with three simulated Workers | SKIP |
| 5 | SUD: real Master and Worker1 | SKIP |
| 6 | HLT: real Master and Worker1 | SKIP |
| 7 | Firmware and web interface self-update | SKIP |
| 8 | Restore known baseline test state | SKIP |
| 9 | Web interface reload core | PASS |
| 10 | Web interface dashboard core | PASS |
| 11 | Web interface mash/fermenter view switch | PASS |
| 12 | Web interface system save and reload | PASS |
| 13 | Web interface SSE reconnect stability | PASS |
| 14 | Web interface modal repeat stability | PASS |
| 15 | Web interface reload request and event budget | PASS |
| 16 | Web interface induction modal | PASS |
| 17 | Web interface HLT modal | PASS |
| 18 | Web interface sud kettle modal | PASS |
| 19 | Web interface sud modal | PASS |
| 20 | Web interface system modal | PASS |
| 21 | Web interface sensor modal | PASS |
| 22 | Web interface actor modal | PASS |
| 23 | Debug snapshot contract schema 4 | PASS |
| 24 | Telemetry and debug API contract | PASS |
| 25 | Controller API blocks actions while power is off | PASS |
| 26 | PID tune-factor boundaries | PASS |
| 27 | PID heat-up-window boundaries | PASS |
| 28 | PID threshold-output boundaries | PASS |
| 29 | PID IDS sample-time boundaries | PASS |
| 30 | PID relay sample-time boundaries | PASS |
| 31 | PID webhook sample-time boundaries | PASS |
| 32 | PID lambda derivation boundaries | PASS |
| 33 | Brautomat import | PASS |
| 34 | kleinerBrauhelfer2 import | PASS |
| 35 | kleinerBrauhelfer2 units | PASS |
| 36 | MMUM import | PASS |
| 37 | Brewfather import | PASS |
| 38 | Mash start to running step | PASS |
| 39 | Mash boil and hop path | PASS |
| 40 | Pause and continue in running step | PASS |
| 41 | Next advances a running step | PASS |
| 42 | Previous is blocked at first step | PASS |
| 43 | Previous restarts a running step | PASS |
| 44 | Play after timeout and previous | PASS |
| 45 | Wait-user: continue on next step | PASS |
| 46 | Wait-user: back and continue | PASS |
| 47 | Wait-user after timeout | PASS |
| 48 | Last step blocks next | PASS |
| 49 | Resume into boil step | PASS |
| 50 | Normal finish | PASS |
| 51 | Finish with manual last step | PASS |
| 52 | Manual heating mode | PASS |
| 53 | Actor command sequence | PASS |
| 54 | Digital actor PWM switching | PASS |
| 55 | Analog actor PWM contract | PASS |
| 56 | Invalid actor command to wait-user | PASS |
| 57 | Special command: HLT / Nachguss | PASS |
| 58 | Special command: Mash / IDS | PASS |
| 59 | Special command: Sud / MLT | PASS |
| 60 | Special command: Mash threshold output | PASS |
| 61 | Special command: Mash profile | PASS |
| 62 | Special command: Sud profile | PASS |
| 63 | Special command: HLT profile | PASS |
| 64 | Sensor error hook | PASS |
| 65 | Wait-temperature sensor override transition | PASS |
| 66 | Power-off deactivates every kettle output path | PASS |
| 67 | Wait-temp: sensor fault escalates | PASS |
| 68 | Running step: sensor fault pauses timer | PASS |
| 69 | Controlled stop in final boil timer step | PASS |
| 70 | Controlled stop in a non-final timer step | PASS |
| 71 | Reboot/resume in final boil timer step | PASS |
| 72 | Reboot/resume in non-final boil timer step | PASS |
| 73 | Fermenter cooling control | PASS |
| 74 | Fermenter heating control | PASS |
| 75 | Fermenter automatic step transition | PASS |
| 76 | Fermenter ramp step transition | PASS |
| 77 | Fermenter three-step sequence | PASS |
| 78 | Fermenter reboot/resume in ramp step | PASS |
| 79 | Fermenter reboot/resume in final step | PASS |
