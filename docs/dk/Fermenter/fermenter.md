# Fermenter mode

In fermenter mode, the Brautomat32 processes the fermentation plan top down in the same way as the mash plan. The controller Deck has the same functions.

![Fermenter Dashboard](/docs/img/fermenter_dash.jpg)

The processing of the steps has an important difference:

The first step in the fermentation plan is started when the target temperature is reached. This is usually the time when the yeast is added to the wort. All subsequent steps in the fermentation plan start immediately, regardless of the actual temperature.

To set it up, one GPIO can be set up for cooling and one GPIO for heating. Either cooling or heating is optional.

![Fermenter settings](/docs/img/fermenter_set.jpg)

The fermenter has three different states: cooling, heating and idle. When the status of cooling or heating changes, a pause starts. During the pause, the status of the fermenter does not change.

* Old status cooling and new status cooling: no pause. The cooling remains switched on
* Old status heating and new status heating: no break. The heating remains on
* Old status cooling and new status heating: pause 120s
* Old status heating and new status cooling: pause 120s

## Ramp

A fermenter step is specified with a start and an end temperature. In the first figure in this section, the temperature in the first fermenter step is 18°C. Of course, this means that the fermentation temperature remains unchanged for a period of 1 day.

In the second fermenter step, the start temperature is 18°C ​​and the end temperature is 20°C. The duration for this fermenter step is entered as 2 days. There are now two ways to get from the start to the end temperature:

When ramp is activated, the Brautomat controls the fermentation temperature linearly over the specified duration for this step. In this case, the temperature is raised from 18°C ​​to 20°C in +0.1°C steps over 2 days.

With ramp deactivated, the final temperature is established at the start of the fermenter step, either by cooling or heating. Once the final temperature is established, it is maintained.

## Relay switching cycle

The relay switching cycle determines how long one of the cooling, heating or idle states is held. The permitted value range is between 1000 and 240000ms. The default is 120000, i.e. 120 seconds. A switching cycle that is too small can have a negative impact on cooling devices.

## Display

In fermenter mode, the MashSud view (page 2) must be selected. The boiler overview and the manual control view cannot be used for fermenter mode.
