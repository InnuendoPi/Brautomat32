# AutoTune step by step

The practical AutoTune procedure is as follows:

![AutoTune](/docs/img/IDS-AutoTune.jpg)

1. fill your mash tun with a typical amount of water

    a. A typical quantity corresponds to the main pour + pouring

    Example: 20 litres of main pour and 5kg of bulk results in a typical quantity of 25l

    b. Switch on the agitator

2. set an AutoTune target temperature

    a. the target temperature should be 50°C or more.

    b. the target temperature should be at least 10°C above the current actual temperature.

3. activate ‘PID AutoTune’
4. activate ‘AutoTune debug’
5. save this setting
6. click on the power button to start ‘AutoTune IDS’.

![AutoTune2](/docs/img/IDS-AutoTune-start.jpg)

The AutoTune process consists of two phases. Phase 1 is heating up to the target temperature. When the target temperature is reached, the induction hob is switched off. The target temperature is sometimes significantly exceeded by 2-3°C. Significantly exceeding the target temperature is necessary for the AutoTune process. This is followed by a cooling phase below the target temperature. These two phases are repeated 5 times. Depending on the environment, the AutoTune process takes a relatively long time (90 minutes or more). Most of the time is required during the cooling phases. The better a brew kettle is insulated, the longer the AutoTune process and the cooling phase will take. The AutoTune process should be carried out at a typical mash temperature of approx. 60°C. The current status is displayed in the ‘AutoTune process 0/5’ column. The first number is the current step and the second number is the number of AutoTune steps expected to be required. Measured values are determined during the AutoTune process. The measured values are constantly checked. If a measured value shows a deviation, the measurement is repeated. ‘AutoTune process 6/5’ is displayed during a repetition. A maximum of 20 repetitions are carried out. The result of AutoTune is displayed in the PID Manager tab of the GGM IDS settings:

![AutoTune3](/docs/img/IDS-AutoTune-erg.jpg)

The AutoTune process is complete and the determined system parameters are saved automatically.\
The result of AutoTune is the gain factor Ku (ultimate gain) and the period duration (ultimate period). P, I and D are calculated from these two parameters. Various algorithms are available for calculating the PID values. The Brauomat uses a PID algorithm that is optimised for brewing (actually for heating liquids) and is also used, for example, in the PIDBoil add-on from CraftBeerPi.

_Tip: After the AutoTune process, the configuration should be backed up._

When the AutoTune process has finished and ‘AutoTune debug’ has been activated, the ‘autotune\_log.txt’ log can be viewed via the Explorer. All information is logged in this log file.\
In the file ‘idsAutoTune.txt’ or ‘hltAutoTune.txt’, the result of AutoTune is saved in JSON format. Both files are purely informative and are not required for operation. The PID values are listed in these files according to various calculation methods.

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

The calculated values of the various algorithms can be entered in the settings with the INDIVIDUAL_PID selection in lines P, I and D. However, this should only rarely lead to better results. However, this should only lead to better results in rare cases.
