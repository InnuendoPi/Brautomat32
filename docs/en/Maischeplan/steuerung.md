# The Control

The control panel is located directly below the mash plan. The mashing process is operated with five buttons: `Power`, `Play`, `Pause`, `Previous`, `Next`.

![Control](../.gitbook/assets/Buttons.jpg)

## Power button

Starts or stops the mash process. If PID AutoTune is enabled for a kettle, the same button starts/stops AutoTune.

## Play button

Play has two functions:

1. Start rest timer for current step, independent of actual temperature.
2. Continue with the next step when `autonext` (automatic switch to the next
   step) is disabled. The button is shown in red.

Example: In a boil step, actual temperature may stay below target (for example 98.5°C vs 100°C). `Play` lets you start timing manually when boiling is already sufficient.

## Pause button

Pause behavior depends on process phase.

### During heating to next rest

* editing controls become visible again
* heating continues toward target
* pause indicator turns red

This is useful if you need to adjust mash steps while heating.

### During active rest

* rest timer pauses
* temperature control stays active
* heating remains controlled around the setpoint

Pause time is added to total rest duration.

After a reboot, a saved pause can be released again. Its remaining time is preserved during the interruption. Pausing and resuming a restored running rest also adds no remaining time unless the planned rest duration is changed.

A rest timer held by a sensor fault remains stopped independently of the user pause. Releasing the pause does not acknowledge this sensor hold or restart the timer.

When editing during pause, retain the active step with its unique, unchanged name. Reordering preserves that step as the active rest and keeps its remaining time. Switching to the fermenter view requires stopping the process first. If saving is rejected, the updated plan editor retains your input.

## Previous button

Jumps to previous mash step. If process was stopped, the current rest timer is reset and starts again.

## Next button

Jumps to the next mash step. Next is disabled on the last step.

A pure actor command selected with Next is executed by Play. With Autonext disabled, another Play click confirms the executed command. Already executed SUD/HLT commands with a target temperature and zero duration are also confirmed with Play.

Once the boiling temperature gate is reached, it remains valid for subsequent boiling steps in the same kettle. When switching to another kettle, that kettle must reach its own target temperature.

## Collapse button

Shows/hides the mash plan table.

![mashplan](../.gitbook/assets/Maischeplan-anzeigen.jpg)

The collapse button remains available during brewing. Edit buttons are hidden once brewing starts.

## Scheduled brewing start

A future start time survives a reboot. The schedule issues one start request using the same checks as Power. A mash view and plan must be selected; another active operating mode or a selected AutoTune configuration prevents the scheduled start. A schedule missed by at least one minute is discarded. A rejected schedule is not retried automatically later.
