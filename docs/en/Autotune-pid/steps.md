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
4. Save settings.
5. Start AutoTune with the power button.

![AutoTune2](/docs/img/IDS-AutoTune-start.jpg)

AutoTune takes about 5 minutes and stops automatically. The detected system parameters are saved automatically.

The key AutoTune result is dead time `L` and slope `R`. PID values are then derived from these values.

## Optional: diagnostics if something looks wrong

Only if AutoTune does not behave plausibly or needs targeted checking:

- enable `AutoTune debug`
- review `autotune_log.txt`
- inspect `idsAutoTune.txt`, `sudAutoTune.txt`, or `hltAutoTune.txt` only when needed for diagnostics

These files are informational only and are not required for normal operation.
