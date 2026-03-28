# Firmware Test Suite

The indicators in [README.md](../../../readme.md) and
[README.de.md](../../../readme.de.md) show the current state of the public
firmware test suite.

The currently published `complete-suite` includes:

- `57` suite tests
- `1023` underlying checks

The indicator summarizes four values:

- `tests`: number of included suite tests
- `pass`: number of successfully completed suite tests
- `fail`: number of suite tests with a real failure
- `skip`: number of intentionally skipped suite tests

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
- recipe import from multiple sources
- mash plan flow from start to normal finish
- manual heating mode
- actuators, special commands, and profile changes
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

### Recipe import

- Native Brautomat recipes can be loaded.
- Recipes from kleinerBrauhelfer2 can be imported.
- Recipes from Maische Malz und Mehr can be imported.
- Recipes from Brewfather can be imported.

### Mash plan flow

- A reference mash plan starts correctly.
- The process moves into active running steps correctly.
- Boil and hop steps are reached correctly.
- The final step behaves correctly.
- Replay into later steps works.

### Manual mode

- Manual heating mode is verified as its own operator path.
- Manual power on and off is validated.

### Actuators, special commands, and profiles

- Actuator step sequences are executed correctly.
- Invalid actuator steps switch into a safe user-controlled state.
- Public kettle special commands for mash, sud, and HLT are processed.
- Output limits and profile changes inside steps are applied correctly.

### Sensor faults and safety behavior

- Sensor faults are detected.
- Faults during heat-up escalate correctly.
- Faults during a running step hold the process in a controlled way.

### Stop, reboot, and resume

- A controlled stop during an active boil step is handled correctly.
- After reboot, an active boil step resumes correctly.

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
| 1 | Release readiness | Web assets prepared for LittleFS |
| 2 | Release readiness | Firmware build successful |
| 3 | Release readiness | LittleFS build successful |
| 4 | Release readiness | Release package assembled |
| 5 | Release readiness | Firmware flash successful |
| 6 | Release readiness | LittleFS flash successful |
| 7 | Release readiness | Backup restore after LittleFS flash |
| 8 | System update | Firmware and web interface self-update |
| 9 | Backup & Restore | Defined baseline restored cleanly |
| 10 | Browser UI core | Web interface reload core |
| 11 | Browser UI core | Web interface dashboard core |
| 12 | Browser UI core | Mash/fermenter view switch |
| 13 | Browser UI core | System save and reload |
| 14 | Browser UI core | SSE reconnect stability |
| 15 | Browser UI core | Repeated modal opening |
| 16 | Browser UI core | Reload request and event budget |
| 17 | Browser UI core | Induction dialog |
| 18 | Browser UI core | HLT dialog |
| 19 | Browser UI core | Sud kettle dialog |
| 20 | Browser UI core | Sud dialog |
| 21 | Browser UI core | System dialog |
| 22 | Browser UI core | Sensor dialog |
| 23 | Browser UI core | Actor dialog |
| 24 | Recipe import | Import a Brautomat recipe |
| 25 | Recipe import | Import a kleinerBrauhelfer2 recipe |
| 26 | Recipe import | Import an MMUM recipe |
| 27 | Recipe import | Import a Brewfather recipe |
| 28 | Mash plan flow | Mash plan from start to running step |
| 29 | Mash plan flow | Mash plan through boil and hop path |
| 30 | Mash plan flow | Pause and resume in a running step |
| 31 | Mash plan flow | Wait-user step, previous step, and continue with Play |
| 32 | Mash plan flow | Last step blocks `Next` correctly |
| 33 | Mash plan flow | Direct entry into the boil step |
| 34 | Mash plan flow | Process finishes correctly at plan end |
| 35 | Mash plan flow | Process with a manual final step |
| 36 | Manual mode | Manual heating mode |
| 37 | Actuators | Actuator step sequence executes correctly |
| 38 | Actuators | Invalid actuator step enters safe user mode |
| 39 | Special command | HLT or sparge-water command |
| 40 | Special command | Mash or IDS command |
| 41 | Special command | Sud or MLT command |
| 42 | Special command | Output limit for mash or IDS |
| 43 | Special command | Profile change for mash or IDS |
| 44 | Special command | Profile change for sud or MLT |
| 45 | Special command | Profile change for HLT or sparge water |
| 46 | Sensor fault | Sensor error hook |
| 47 | Sensor fault | Sensor fault escalation during heat-up |
| 48 | Sensor fault | Controlled hold on sensor fault in a running step |
| 49 | Recovery | Controlled stop in the final boil timer step |
| 50 | Recovery | Reboot and resume in the final boil timer step |
| 51 | Fermenter plan flow | Cooling control in fermenter mode |
| 52 | Fermenter plan flow | Heating control in fermenter mode |
| 53 | Fermenter plan flow | Automatic step transition |
| 54 | Fermenter plan flow | Ramp-step transition |
| 55 | Fermenter plan flow | Three-step fermenter sequence |
| 56 | Fermenter plan flow | Reboot and resume in a ramp step |
| 57 | Fermenter plan flow | Reboot and resume in the final step |

