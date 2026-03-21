# Firmware Test Suite

The test badges in [README.md](../../../readme.md) and [README.de.md](../../../readme.de.md) show the current state of the firmware test suite.

The badge summarizes four values:

- `tests`: number of included checks
- `pass`: number of successfully completed checks
- `fail`: number of checks with a real failure
- `skip`: number of intentionally skipped checks

A green badge means that the current firmware test suite completed without failures in the shown state.

## What is tested?

The current firmware test suite covers the main core functions of the firmware:

- basic backup and restore paths
- restoring a clean baseline state
- importing recipes from multiple sources
- normal mash flow from start into active process steps
- boil and hop paths
- fermenter functions from entry into longer fermentation flows
- controls such as `Play`, `Pause`, `Next`, and `Prev`
- special commands inside mash steps
- actuator step sequences
- sensor errors and safety reactions
- controlled stop and resume after reboot

The badges are therefore not a blanket promise for every possible hardware combination or edge case. They show the status of the main public core checks.

## Two kinds of tests

Firmware status checks and end-user-focused checks serve different purposes:

- The README badge shows the status of the general firmware checks used before `develop` and `release` versions.
- In addition, there are end-user-focused checks with real configurations, backups, and recipes.

This second group does not only validate the firmware in general, but also real-world content such as:

- an existing `config.txt`
- an existing backup
- a single recipe
- a combination of configuration and recipe

This helps verify not only that the firmware works in principle, but also that concrete recipes and configurations are handled plausibly.

Important:

- The README badge describes the general firmware test status.
- End-user-oriented configuration and recipe checks are separate from that.
- They are especially useful when an existing setup, backup, or specific recipe should be evaluated.

## Short test run and longer extended runs

The README badge refers to a compact firmware test run with broad functional coverage.

In addition, there are longer extended runs that are especially useful for:

- longer real process flows
- repeated runs for stability evaluation
- special configuration and recipe cases
- product-like checks with real hardware

This means:

- The badge stands for the compact general core verification.
- Longer extended runs complement that verification when needed.
- Together, both types provide a more complete picture of real behavior.

## Test areas

### Backup, restore, and baseline

- Basic backup and restore paths are covered.
- Brautomat starts from a clean baseline state.
- Important baseline settings can be restored.

### Recipe import

- Native Brautomat recipes can be loaded.
- Recipes from kleinerBrauhelfer2 can be imported.
- Recipes from Maische Malz und Mehr can be imported.
- Recipes from Brewfather can be imported.
- In addition, real end-user recipes can be checked specifically for readability and plausibility.

### Mashing, boiling, and step flow

- A reference mash plan starts correctly.
- The process moves into active running steps correctly.
- Boil and hop steps are reached correctly.
- The final step behaves correctly.
- Replay into later steps works.

### Fermenter

- Fermenter mode is tested as its own process path.
- Cooling and heating decisions are covered.
- Resume behavior and longer fermentation runs were also verified.

The badge tests therefore represent not only the mash path, but the core status of both brewing and fermentation.

### Controls and operator actions

- Pause and resume work during an active step.
- A user-confirmed step can continue correctly.
- `Next` is correctly blocked at the last step.

### Actuators and special commands

- Actuator step sequences are executed correctly.
- Invalid actuator steps switch into a safe user-controlled state.
- Public kettle special commands for mash, sud, and HLT are processed correctly.
- Output limits and profile switches inside steps are applied correctly.

Within the firmware test suite, the following core special command families are covered:

- `HLT` and `NACHGUSS`
- `MAISCHE` and `IDS`
- `SUD` and `MLT`
- `MAISCHETHRESOUT` and `IDSTHRESOUT`
- `MAISCHEPROFIL` and `IDSPROFIL`
- `SUDPROFIL` and `MLTPROFIL`
- `HLTPROFIL` and `NACHGUSSPROFIL`

### Sensor errors and safety behavior

- Sensor errors are detected.
- Errors during heat-up escalate correctly.
- Errors during an active running step hold the process safely.

### Stop, reboot, and resume

- A controlled stop during an active boil step is handled correctly.
- After reboot, an active boil step resumes correctly.

## Complete list of tests

| # | Area | Description |
| - | ---- | ----------- |
| 1 | Backup & Restore | Restore a defined clean baseline state |
| 2 | Recipe import | Import a Brautomat recipe |
| 3 | Recipe import | Import a kleinerBrauhelfer2 recipe |
| 4 | Recipe import | Import an MMUM recipe |
| 5 | Recipe import | Import a Brewfather recipe |
| 6 | Reference flow | Reference mash plan from start into running step |
| 7 | Reference flow | Reference mash plan through boil and hop path |
| 8 | Controls | Pause and resume during an active running step |
| 9 | Controls | User step, previous step, and continue with Play |
| 10 | Controls | Operator step confirmation and continue behavior |
| 11 | Replay | Replay directly into the boil step |
| 12 | Replay | Replay directly into the hop step |
| 13 | Endgame | Process finishes correctly at the end of the plan |
| 14 | Endgame | Process with a manual final step |
| 15 | Actuators | Actuator step sequence executes correctly |
| 16 | Actuators | Invalid actuator step enters a safe user-controlled state |
| 17 | Special command | HLT or sparge-water command handled inside a process step |
| 18 | Special command | Mash or IDS command handled inside a process step |
| 19 | Special command | Sud or MLT command handled inside a process step |
| 20 | Special command | Output threshold for mash or IDS (`THRESOUT`) |
| 21 | Special command | Profile switch for mash or IDS (`PROFIL`) |
| 22 | Special command | Profile switch for sud or MLT (`PROFIL`) |
| 23 | Special command | Profile switch for HLT or sparge-water (`PROFIL`) |
| 24 | Sensor error | Sensor error hook |
| 25 | Sensor error | Sensor error escalation during heat-up |
| 26 | Sensor error | Controlled hold on sensor error during a running step |
| 27 | Recovery | Controlled stop during an active boil step |
| 28 | Recovery | Reboot and resume during an active boil step |
