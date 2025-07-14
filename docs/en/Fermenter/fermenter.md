# Fermenting

In fermenter mode, the Brautomat works through the fermentation plan in the same way as with the mash plan top down. The controller deck has the same functions.

![Fermenter dashboard](/docs/img/fermenter_dash.jpg)

The processing of fermenting steps has one important difference:

The first step in the fermentation plan is started when the target temperature is reached. This is usually the time when the yeast is added to the wort. All subsequent steps in the fermentation plan are started immediately, regardless of the actual temperature.

A GPIO for cooling and a GPIO for heating can be set up. Either the cooling or the heating is optional.

![Fermenter settings](/docs/img/fermenter_set.jpg)

The fermenter mode has three states: Cooling, Heating or Idle. When the state change from cooling or heating, a pause starts. The pause is 120 seconds:

* old cooling mode and new cooling mode: no pause. Cooling remains ON
* old heating mode and new heating mode: no pause. Heating remains ON
* old mode cooling and new mode heating or idle: pause 120s
* old mode heating and new mode cooling or idle: pause 120s

## Ramp

A fermenter step is specified with a start and an end temperature. In the first figure in this section, the temperature in the first fermenter step is 18°C in each case. This means, that the fermentation temperature remains unchanged for a period of 1 day.

In the second fermenter step, the start temperature is 18°C and the end temperature is 20°C. The duration for this fermenter step is entered as 2 days. There are now two ways to get from the start temperature to the end temperature:

With ramp activated, the Brauomat controls the fermentation temperature linearly over the specified duration for this step. In this case, the temperature is increased from 18°C to 20°C in +0.1°C steps over 2 days.

If the ramp is deactivated, the final temperature is established at the start of the fermenter step, either by cooling or heating. As soon as the final temperature is reached, it is maintained.

## Relay dutycycle

The relay switching cycle determines how long one of the cooling, heating or idle states is held. The permissible value range is between 1000 and 240000ms. The default setting is 120000, i.e. 120 seconds. A switching cycle that is too short can have a negative effect on cooling devices.

## Display

In fermenter mode select view MaischeSud (BrewPage 2). Kettle overview (page 1) and manual control (page 3) are not usable in fermenter mode.
