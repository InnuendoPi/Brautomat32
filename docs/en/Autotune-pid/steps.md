# AutoTune step by step

The practical AutoTune workflow:

![AutoTune](/docs/img/IDS-AutoTune.jpg)

1. Fill the mash kettle with a typical brew-day amount of water.
   a. Use your usual mash mass as reference (`strike water + grain bill`).
   Example: 16 l strike water and 4 kg grain bill -> use about 20 l water for AutoTune.
   b. Start temperature should be around 50°C (40°C to 55°C).
   c. Turn on the agitator.
2. Enter this value in `Kettle volume in liters`.
3. Enable `PID AutoTune`.
4. Enable `AutoTune debug`.
5. Save settings.
6. Start AutoTune with the power button.

![AutoTune2](/docs/img/IDS-AutoTune-start.jpg)

AutoTune takes about 5 minutes and stops automatically. The detected system parameters are saved automatically.

The key AutoTune result is dead time `L` and slope `R`. PID values are then derived from these values.

If `AutoTune debug` is enabled, you can review `AutoTune_log.txt` in the file browser.

Result files are also written as JSON:

* `idsAutoTune.txt`
* `sudAutoTune.txt`
* `hltAutoTune.txt`

These files are for diagnostics and documentation; they are not required for normal operation.
