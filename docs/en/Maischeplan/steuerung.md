# The controls

Directly below the mash plan is the controller Deck. The mashing process is controlled with the 5 buttons Power, Play, Pause, Previous and Next.

![Control](/docs/img/Buttons.jpg)

## Power button

The power button is used to switch the mashing process on and off. If the AutoTune function is activated in the settings of a hob, the AutoTune process is started or stopped via the power button.

## Play button

The Play Button has two functions in the mashing process:

1. The first function is _Start the rest timer for the current rest_. The Play button starts the rest timer regardless of the ACTUAL temperature.\
Example: If the wort is already boiling in the boiling step, but the ACTUAL temperature of 98.5°C is below the rest temperature of 100°C, the rest timer does not start.

2. The second function of the Play button is linked to the _autonext_ property: continuing the mashing process with the next rest. The play button is displayed in red in this function. The function _Continue the mashing process with the next rest_ will be explained later in the description _autonext_ in the mash plan.

## Pause button

The function of the pause button can be distinguished during the heating phase to a rest temperature and during a rest.

- Pause during the heating phase

If the brewing process is started with the power button, the buttons for editing the mash plan are hidden. If the pause button is clicked, the editing symbols will be displayed again. During an activated pause, the hob remains switched on to reach the target temperature. The Pause button will then be displayed in red. With the help of a break, the mashing schedule can be adjusted during the brewing process. If the rest temperature is reached during a break, the break timer is started and the break ends.

- Break during a rest

During a rest, the rest timer in the mashing process is also stopped using the pause button. The Pause button will then be displayed in red. During a break, the actual temperature is maintained relative to the rest setpoint temperature, i.e. the PID controller and thus the hob remain active. With the help of a break during a rest, the mash plan can be adjusted. The duration of the break extends the previous rest time.

## Previous button

The Prev button jumps to the previous step in the mash plan. If the mashing process has been stopped, the rest timer of the current rest is reset and restarted.

##Next button

The Next button jumps to the next step in the mashing plan or, if it was the last step in the plan, ends the mashing process.

## Collapse button

The Collapse button collapses or collapses the mash plan table.

![mashplan](/docs/img/Maischeplan-anzeigen.jpg)

The collapse button remains visible even after the brewing starts. All buttons for editing the mash plan are hidden after brewing starts.
