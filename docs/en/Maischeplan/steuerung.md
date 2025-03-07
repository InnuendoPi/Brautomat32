# The control unit

The controls are located directly below the mash plan. The mashing process is controlled using the 5 buttons Power, Play, Pause, Previous and Next.

![Controller](/docs/img/Buttons.jpg)

## The power button

The mashing process is switched on and off using the power button. If the AutoTune function is activated in the GGM IDS settings or in the post-mash, the AutoTune process is started or stopped via the power button.

## The play button

The Play button has two functions in the mashing process:

1. the first function is _start the rest timer for the current rest_. The Play button starts the rest timer regardless of the ACTUAL temperature.\
Example: if the wort is already boiling in the boiling step, but the actual temperature of 98.5°C is below the rest temperature of 100°C and therefore the rest timer does not start.

2. the second function of the Play button is related to the _autonext_ property: continue the mashing process with the next rest. The Play button is displayed in red in this function. The functions _continue the mashing process with the next rest_ are explained later in the description _autonext_ in the mash plan.

## The pause button

The function of the Pause button must be differentiated between during the heating phase to a resting temperature and during a rest.

- Pause during the heating phase

During the heating phase, the buttons for editing the mash plan are shown or hidden. The induction hob remains switched on during an activated pause in order to reach the target temperature. The pause button is then displayed in red. The mash schedule can be adjusted during the brewing process using a pause. If the rest target temperature is reached during a pause, the rest timer is started and the pause is ended.

- Pause during a rest

During a rest, the rest timer in the mashing process is also stopped with the Pause button. The pause button is then displayed in red. During a pause, the actual temperature is maintained in relation to the resting target temperature, i.e. the PID controller and therefore the induction hob remain active. The mash schedule can be adjusted using a pause during a rest. The duration of the pause extends the previous resting time.

## The Previous Button

The Prev button is used to jump to the previous step in the mashing plan. If the mashing process was paused, the rest timer for the current rest is reset and restarted.

## The Next button

The Next button is used to jump to the next step in the mashing plan or, if it was the last step in the plan, to end the mashing process.

## The Collapse button

The Collapse button collapses or collapses the mash plan table.

![Mash plan](/docs/img/Maischeplan-anzeigen.jpg)

The collapse button remains visible after brewing has started. All buttons for editing the mash plan are hidden when brewing starts.
