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

The AutoTune process consists of two phases. Phase 1 is heating to the target temperature. When the target temperature is reached, the hob is switched off. The target temperature is sometimes significantly exceeded by 2-3°C. Significantly exceeding the target temperature is necessary for the AutoTune process. This is followed by a cooling phase below the target temperature. These two phases are repeated 5 times. Depending on the environment, the AutoTune process takes a relatively long time (90 minutes or more). Most of the time is needed during the cooling phases. The better a brew kettle is insulated, the longer the AutoTune process or the cooling phase lasts. The AutoTune process should be carried out at a typical mash temperature of approx. 60°C. The current status is displayed in the “AutoTune Process 0/5” column. The first number is the current step and the second number is the number of AutoTune steps expected to be required. Measured values ​​are determined during the AutoTune process. The measured values ​​are constantly checked. If a measured value shows a deviation, the measurement is repeated. If repeated, "AutoTune Process 6/5" is displayed. A maximum of 20 repetitions are carried out. The result of AutoTune is displayed in the GGM IDS settings in the PID Manager tab:

![AutoTune3](/docs/img/IDS-AutoTune-erg.jpg)

The AutoTune process is completed and the determined system parameters are saved automatically.\
The result of AutoTune is the amplification factor Ku (ultimate gain) and the period duration (ultimate period). P, I and D are calculated from these two parameters. Various algorithms are available for calculating the PID values. The Brautomat uses a PID algorithm that is optimized for brewing (actually for heating liquids) and is also used, for example, in the CraftBeerPi addon PIDBoil.

_Tip: After the AutoTune process, the configuration should be saved using a backup._

When the AutoTune process has ended and "AutoTune debug" has been activated, the log "AutoTune\_log.txt" can be viewed via Explorer. All information is recorded in this log file.\
The result of AutoTune is saved in JSON format in the files "idsAutoTune.txt", "sudAutoTune.txt" or "hltAutoTune.txt". The files are purely informational and are not required for operation. In these files the PID values ​​are listed according to different calculation methods.

The following calculation methods are listed in the log:

INTEGRAL PID\
SOME OVERSHOOT PID\
NO OVERSHOOT PID\
ZIEGLER NICHOLS PID\
ZIEGLER NICHOLS PI\
TYREUS LUYBEN PID\
TYREUS LUYBEN PI\
CIANCONE MARLIN PID\
CIANCONE MARLIN PI

The calculated values of the different algorithms can be entered in the settings with the selection INDIVIDUAL_PID in lines P, I and D. However, this should only lead to better results in rare cases.
