# Controller deck

The controller deck is located directly below the mash plan. The mashing process is controlled using the 5 buttons Power, Play, Pause, Previous and Next.

![Controller](/docs/img/Buttons.jpg)

## Power button

The mashing process is switched on and off using the power button. If the AutoTune function is activated, the AutoTune process is started or stopped via the power button.

## Play button

The Play button has two functions in the mashing process:

1. the first function is _start the rest timer for the current rest_. The Play button starts the rest timer regardless of the actual temperature.\
Example: if the wort is already boiling in the boiling step, but the actual temperature of 98.5°C is below the rest temperature of 100°C and therefore the rest timer does not start.

2. the second function of the Play button is related to the _autonext_ property: continue the mashing process with the next rest. The Play button is displayed in red in this function. The functions _continue the mashing process with the next rest_ are explained later in the description _autonext_ in the mash plan.

## Pause button

The function of the Pause button must be differentiated between during the heating phase to a resting temperature and during a rest.

- Pause during the heating phase

When starting a mash proccess, the buttons for editing the mash plan are hidden. With Pause will show all editor symbols. The hob remains switched on during an activated pause in order to reach the target temperature. The pause button is then displayed in red. The mash schedule can be adjusted during the brewing process using a pause. If the rest target temperature is reached during a pause, the rest timer is started and the pause is ended.

- Pause during a rest

During a rest, the rest timer in the mashing process is also stopped with the Pause button. The pause button is then displayed in red. During a pause, the actual temperature is maintained in relation to the resting target temperature, i.e. the PID controller and therefore the hob remains active. The mash schedule can be adjusted using a pause during a rest. The duration of the pause extends the previous resting time.

## Previous Button

The Prev button is used to jump to the previous step in the mashing plan. If the mashing process was paused, the rest timer for the current rest is reset and restarted.

## Next button

The Next button is used to jump to the next step in the mashing plan or, if it was the last step in the plan, to end the mashing process.

## Collapse button

The Collapse button collapses or collapses the mash plan table.

![Mash plan](/docs/img/Maischeplan-anzeigen.jpg)

The collapse button remains visible after brewing has started. All buttons for editing the mash plan are hidden when brewing starts.
