# AutoTune Step by step

The practical procedure AutoTune looks like this:

![AutoTune](/docs/img/IDS-AutoTune.jpg)

1. Fill your mash brew kettle with a typical amount of water

    a. A typical amount corresponds to a boiler filling consisting of main casting and fill

    Example: 20l main casting and 5kg fill results in a typical amount of 25l water for the AutoTune process

    b. Turn on the mixer
2. Set a AutoTune target temperature

    a. the target temperature should be 50°C or more.

    b. The target temperature should be at least 10°C above the current actual temperature.

3. Activate “PID AutoTune”
4. Enable “AutoTune debug”
5. Save this setting
6. Clicking on the power button starts the AutoTune process.

![AutoTune2](/docs/img/IDS-AutoTune-start.jpg)

The AutoTune process takes approximately 6 minutes. The process ends automatically. The AutoTune process is completed and the determined system parameters are saved automatically.\
The result of AutoTune is the dead time L and the climb rate R. P, I and D are calculated from these two parameters.

When the AutoTune process has ended and "AutoTune debug" has been activated, the log "AutoTune\_log.txt" can be viewed via Explorer. All information is recorded in this log file.\
The result of AutoTune is saved in JSON format in the files "idsAutoTune.txt", "sudAutoTune.txt" or "hltAutoTune.txt". The files are purely informational and are not required for operation. In these files the PID values ​​are listed according to different calculation methods.
