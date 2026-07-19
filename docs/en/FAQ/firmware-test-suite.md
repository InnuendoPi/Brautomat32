# Firmware Test Suite

The indicators in [README.md](../../../readme.md) and
[README.de.md](../../../readme.de.md) show the current state of the public
firmware test suite.

The latest published `complete-suite` run, on 12 July 2026 with firmware
`1.65.0`, includes:

- `74` suite tests
- `1549` underlying checks

All `74` tests passed; none failed or was skipped. The complete published run
is listed in [TEST-RESULTS.md](../../../TEST-RESULTS.md).

The indicator summarizes four values:

- `tests`: number of included suite tests
- `pass`: number of successfully completed suite tests
- `fail`: number of suite tests with a real failure
- `skip`: number of intentionally skipped suite tests

A plain transport, browser, or runner timeout is recorded as `skip` and is not
treated as a firmware failure. Functional FSM, sensor, or actuator deadline
violations remain real failures.

A green indicator means that the current public firmware test suite completed
without real failures. Yellow notes indicate borderline but not broken
results.

## What is tested?

The public firmware test suite covers the main core functions of the firmware:

- release readiness before a publication
- web assets prepared for LittleFS
- firmware build and LittleFS build
- packaging of the release artifacts
- firmware flash and LittleFS flash
- backup and restore after LittleFS flash
- firmware and web interface self-update
- restoring a clean baseline state
- browser UI core for reload, SSE reconnect, dashboard, and key dialogs
- runtime and debug interfaces as well as PID boundaries
- recipe import from multiple sources
- mash plan flow from start to normal finish
- manual heating mode
- actuators, special commands, and profile changes
- digital and analog actuator PWM behavior
- sensor faults and safety reactions
- stop, reboot, and resume
- fermenter plan flow from entry up to reboot and resume cases

In recent versions, this suite has been expanded noticeably. Earlier, many of
these checks were done manually. That was possible, but time-consuming, and
small but annoying edge-case issues could slip through more easily. The
extended internal test path is intended to reduce exactly that risk.

These indicators are not a blanket quality promise for every possible hardware
combination or edge case. They show the status of the main public core checks.

## Two kinds of tests

Firmware test status and end-user-oriented checks serve different purposes:

- The indicator in `README` describes the public firmware test suite used
  before `develop` and `release` publications.
- In addition, there are end-user-oriented checks with real configurations,
  backups, and recipes.

This second group does not only validate the firmware in general, but also
real-world scenarios such as:

- an existing `config.txt`
- an existing backup
- a single recipe
- a combination of configuration and recipe

This helps verify not only that the firmware works in principle, but also that
concrete recipes and configurations are handled plausibly.

Important:

- The indicator in `README` describes the general state of the public firmware
  test suite.
- End-user-oriented configuration and recipe checks are separate from that.
- They are especially useful when an existing setup, backup, or specific
  recipe should be evaluated.

## Short test run and longer extended runs

The public firmware test suite is a compact complete run with broad functional
coverage.

In addition, there are longer extended runs that are especially useful for:

- longer real process flows
- repeated runs for stability evaluation
- special configuration and recipe cases
- product-like checks with real hardware

The public firmware test suite shows:

- the compact general core verification
- longer extended runs complement that verification when needed
- together, both types provide a more complete picture of real behavior

## Test areas

### Release readiness

- Web files are minified, compressed, and prepared for LittleFS.
- Firmware and LittleFS can be built cleanly.
- The release package is created completely.
- Firmware and LittleFS can be flashed to the test device.
- A full backup is restored after LittleFS flash.

### System update

- The firmware can perform its own firmware and web interface update.
- The update path for firmware and LittleFS is checked as a real firmware
  process.

### Backup, restore, and baseline

- Basic backup and restore paths are covered.
- Brautomat starts from a clean baseline state.
- Important baseline settings can be restored.

### Browser UI core

- Reload shows firmware, language, plan name, and tables correctly.
- SSE reconnect is checked.
- Dashboard content is checked.
- key dialogs for induction, HLT, sud, system, sensors, and actuators are
  checked.
- mash and fermenter view switching is checked.

### Runtime, debug, and PID calculation

- The debug snapshot format and the telemetry and debug API are checked.
- The controller API must not execute an action while the system is powered
  off.
- Boundaries for PID tune factor, heat-up window, threshold output, sample
  times, and lambda derivation are checked.

### Recipe import

- Native Brautomat recipes can be loaded.
- Recipes from kleinerBrauhelfer2 can be imported.
- Quantity units in a kleinerBrauhelfer2 recipe are checked as well.
- Recipes from Maische Malz und Mehr can be imported.
- Recipes from Brewfather can be imported.

### Mash plan flow

- A reference mash plan starts correctly.
- The process moves into active running steps correctly.
- Boil and hop steps are reached correctly.
- The final step behaves correctly.
- Replay into later steps works.
- Previous and next actions, continuing after a timeout, and user steps are
  checked.

### Manual mode

- Manual heating mode is verified as its own operator path.
- Manual power on and off is validated.

### Actuators, special commands, and profiles

- Actuator step sequences are executed correctly.
- Digital PWM switching and the analog PWM contract are checked.
- Invalid actuator steps switch into a safe user-controlled state.
- Public kettle special commands for mash, sud, and HLT are processed.
- Output limits and profile changes inside steps are applied correctly.

### Sensor faults and safety behavior

- Sensor faults are detected.
- A sensor override while waiting for temperature is checked.
- Powering off deactivates every kettle output.
- Faults during heat-up escalate correctly.
- Faults during a running step hold the process in a controlled way.

### Stop, reboot, and resume

- A controlled stop during an active boil step is handled correctly.
- Stop and resume are checked both in the final and in a non-final boil timer
  step.

### Fermenter plan flow

- Fermenter mode is tested as its own process path.
- Cooling and heating decisions are checked.
- Automatic step transitions are checked.
- Ramp steps are checked.
- Multi-step fermenter plans are checked.
- Resume behavior after reboot is checked.

## Complete list of tests

| # | Area | Description |
| - | ---- | ----------- |
| 1 | Configuration and backup | Current testdevice full backup |
| 2 | System update | Firmware and web interface self-update |
| 3 | Configuration and backup | Restore known baseline test state |
| 4 | Browser UI core | Web interface reload core |
| 5 | Browser UI core | Web interface dashboard core |
| 6 | Browser UI core | Web interface mash/fermenter view switch |
| 7 | Browser UI core | Web interface system save and reload |
| 8 | Browser UI core | Web interface SSE reconnect stability |
| 9 | Browser UI core | Web interface modal repeat stability |
| 10 | Browser UI core | Web interface reload request and event budget |
| 11 | Browser UI core | Web interface induction modal |
| 12 | Browser UI core | Web interface HLT modal |
| 13 | Browser UI core | Web interface sud kettle modal |
| 14 | Browser UI core | Web interface sud modal |
| 15 | Browser UI core | Web interface system modal |
| 16 | Browser UI core | Web interface sensor modal |
| 17 | Browser UI core | Web interface actor modal |
| 18 | Runtime and debug contract | Debug snapshot contract schema 4 |
| 19 | Runtime and debug contract | Telemetry and debug API contract |
| 20 | Runtime and debug contract | Controller API blocks actions while power is off |
| 21 | PID calculation contract | PID tune-factor boundaries |
| 22 | PID calculation contract | PID heat-up-window boundaries |
| 23 | PID calculation contract | PID threshold-output boundaries |
| 24 | PID calculation contract | PID IDS sample-time boundaries |
| 25 | PID calculation contract | PID relay sample-time boundaries |
| 26 | PID calculation contract | PID webhook sample-time boundaries |
| 27 | PID calculation contract | PID lambda derivation boundaries |
| 28 | Mash recipe import | Brautomat import |
| 29 | Mash recipe import | kleinerBrauhelfer2 import |
| 30 | Mash recipe import | kleinerBrauhelfer2 units |
| 31 | Mash recipe import | MMUM import |
| 32 | Mash recipe import | Brewfather import |
| 33 | Mash plan flow | Mash start to running step |
| 34 | Mash plan flow | Mash boil and hop path |
| 35 | Mash plan flow | Pause and continue in running step |
| 36 | Mash plan flow | Next advances a running step |
| 37 | Mash plan flow | Previous is blocked at first step |
| 38 | Mash plan flow | Previous restarts a running step |
| 39 | Mash plan flow | Play after timeout and previous |
| 40 | Mash plan flow | Wait-user: continue on next step |
| 41 | Mash plan flow | Wait-user: back and continue |
| 42 | Mash plan flow | Wait-user after timeout |
| 43 | Mash plan flow | Last step blocks next |
| 44 | Mash plan flow | Resume into boil step |
| 45 | Mash plan flow | Normal finish |
| 46 | Mash plan flow | Finish with manual last step |
| 47 | Manual mode | Manual heating mode |
| 48 | Actors and special commands | Actor command sequence |
| 49 | Actors and special commands | Digital actor PWM switching |
| 50 | Actors and special commands | Analog actor PWM contract |
| 51 | Actors and special commands | Invalid actor command to wait-user |
| 52 | Actors and special commands | Special command: HLT / Nachguss |
| 53 | Actors and special commands | Special command: Mash / IDS |
| 54 | Actors and special commands | Special command: Sud / MLT |
| 55 | Actors and special commands | Special command: Mash threshold output |
| 56 | Actors and special commands | Special command: Mash profile |
| 57 | Actors and special commands | Special command: Sud profile |
| 58 | Actors and special commands | Special command: HLT profile |
| 59 | Sensor safety | Sensor error hook |
| 60 | Sensor safety | Wait-temperature sensor override transition |
| 61 | Sensor safety | Power-off deactivates every kettle output path |
| 62 | Sensor safety | Wait-temp: sensor fault escalates |
| 63 | Sensor safety | Running step: sensor fault pauses timer |
| 64 | Recovery and resume | Controlled stop in final boil timer step |
| 65 | Recovery and resume | Controlled stop in a non-final timer step |
| 66 | Recovery and resume | Reboot/resume in final boil timer step |
| 67 | Recovery and resume | Reboot/resume in non-final boil timer step |
| 68 | Fermenter plan flow | Fermenter cooling control |
| 69 | Fermenter plan flow | Fermenter heating control |
| 70 | Fermenter plan flow | Fermenter automatic step transition |
| 71 | Fermenter plan flow | Fermenter ramp step transition |
| 72 | Fermenter plan flow | Fermenter three-step sequence |
| 73 | Fermenter plan flow | Fermenter reboot/resume in ramp step |
| 74 | Fermenter plan flow | Fermenter reboot/resume in final step |
