# Firmware Test Suite

The indicators in [README.md](../../../readme.md) and
[README.de.md](../../../readme.de.md) show the current state of the public
firmware test suite.

The currently published `complete-suite` includes:

- `44` suite tests
- `849` underlying checks

The indicator summarizes four values:

- `tests`: number of included suite tests
- `pass`: number of successfully completed suite tests
- `fail`: number of suite tests with a real failure
- `skip`: number of intentionally skipped suite tests

A green indicator means that the current public firmware test suite completed
without failures.

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
- recipe import from multiple sources
- mash plan flow from start to normal finish
- manual heating mode
- actuators, special commands, and profile changes
- sensor faults and safety reactions
- stop, reboot, and resume
- fermenter plan flow from entry up to reboot and resume cases

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

### Recipe import

- Native Brautomat recipes can be loaded.
- Recipes from kleinerBrauhelfer2 can be imported.
- Recipes from Maische Malz und Mehr can be imported.
- Recipes from Brewfather can be imported.
- Real end-user recipes can also be checked specifically for readability and
  plausibility.

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

Within the firmware test suite, the following special command families are
covered:

- `HLT` and `NACHGUSS`
- `MAISCHE` and `IDS`
- `SUD` and `MLT`
- `MAISCHETHRESOUT` and `IDSTHRESOUT`
- `MAISCHEPROFIL` and `IDSPROFIL`
- `SUDPROFIL` and `MLTPROFIL`
- `HLTPROFIL` and `NACHGUSSPROFIL`

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

The suite therefore covers both the mash path and the fermenter plan flow.

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
| 10 | Recipe import | Import a Brautomat recipe |
| 11 | Recipe import | Import a kleinerBrauhelfer2 recipe |
| 12 | Recipe import | Import an MMUM recipe |
| 13 | Recipe import | Import a Brewfather recipe |
| 14 | Mash plan flow | Mash plan from start to running step |
| 15 | Mash plan flow | Mash plan through boil and hop path |
| 16 | Mash plan flow | Pause and resume in a running step |
| 17 | Mash plan flow | Wait-user step, previous step, and continue with Play |
| 18 | Mash plan flow | Last step blocks `Next` correctly |
| 19 | Mash plan flow | Direct entry into the boil step |
| 20 | Mash plan flow | Direct entry into the hop step |
| 21 | Mash plan flow | Process finishes correctly at plan end |
| 22 | Mash plan flow | Process with a manual final step |
| 23 | Manual mode | Manual heating mode |
| 24 | Actuators | Actuator step sequence executes correctly |
| 25 | Actuators | Invalid actuator step enters safe user mode |
| 26 | Special command | HLT or sparge-water command |
| 27 | Special command | Mash or IDS command |
| 28 | Special command | Sud or MLT command |
| 29 | Special command | Output limit for mash or IDS |
| 30 | Special command | Profile change for mash or IDS |
| 31 | Special command | Profile change for sud or MLT |
| 32 | Special command | Profile change for HLT or sparge water |
| 33 | Sensor fault | Sensor error hook |
| 34 | Sensor fault | Sensor fault escalation during heat-up |
| 35 | Sensor fault | Controlled hold on sensor fault in a running step |
| 36 | Recovery | Controlled stop in the final boil timer step |
| 37 | Recovery | Reboot and resume in the final boil timer step |
| 38 | Fermenter plan flow | Cooling control in fermenter mode |
| 39 | Fermenter plan flow | Heating control in fermenter mode |
| 40 | Fermenter plan flow | Automatic step transition |
| 41 | Fermenter plan flow | Ramp-step transition |
| 42 | Fermenter plan flow | Three-step fermenter sequence |
| 43 | Fermenter plan flow | Reboot and resume in a ramp step |
| 44 | Fermenter plan flow | Reboot and resume in the final step |
