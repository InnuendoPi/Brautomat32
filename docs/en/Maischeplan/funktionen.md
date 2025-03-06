# Functions

The following description uses an _invented_ example recipe. This description is not about the recipe, but about the procedure for mashing with the Brautomat.

The mashing plan is in the form of a table. This table is processed from top to bottom by the brewing system on a brewing day. In the example recipe, the line _Mash in at 50°C_ is the first mashing step and _WHP Hallertauer Tradition_ is the last mashing step. A very important function in the mash plan is the property in the _autoext_ column.

## Basic functions

![Maischeplan](/docs/img/brautomat.jpg)

For orientation, the structure of the table rows is described first. A row in the mash plan represents a step in the mash plan. Each table row has these columns:

* The ‘Rest’ column shows a name for this mashing step.
* The ‘Temperature’ column shows the resting temperature (also called target or set temperature in this manual).
* The ‘Duration’ column shows the resting time (timer), i.e. how long the Brautomat should hold the resting temperature.
* The ‘autoext’ column indicates whether the next step is to be carried out automatically after the resting time (timer) has elapsed.

After these four entries for the mashing step, there are editing buttons in each line with the following functions: (from left to right)

![Maischeplan editieren](/docs/img/brautomat-111.jpg)

* move this line one position up
* move this line one position down
* edit this line
* delete this line

The table header contains the following buttons (from left to right)

![Maischeplan editieren](/docs/img/brautomat-1.jpg)

* New line: add a new mashing step to the end of the table
* Delete: delete the entire table (empty mash plan)
* Reload: reload the recipe from the file. Changes are not saved. The button is displayed in blue
* Database: mash plan selection, import, export and mash plan scheduler
* Collapse: Collapse and expand mash plan table

![Maischeplan editieren](/docs/img/brautomat-11.jpg)

When a table row is edited, the buttons change.

* Exit: exit the line editor without saving. The button is displayed in grey
* Save: Save changes in the table row in the mash plan

All buttons for editing the mash plan are hidden as soon as the brewing process is started. The collapse button for collapsing and expanding the table is hidden as soon as the mash plan is edited.

Together with the Power, Play, Pause, Prev and Next controls, this results in an intuitive brewing control system. The mash plan shown here is an import from the smallBrauhelfer2. The import automatically inserts the rest temperatures and rest times. The alpha acid and the quantity in grams are automatically appended to the hop names. These abbreviations are also prefixed:

* VWH: first wort hopping (FWH)
* Boiling (without hops)
* WPH: Whirlpool hopping

Additives as shown in the picture _Kochen Hefenahrung 1gr_ are imported into the mash plan from the smallBrauherlfer2 with the time of addition and quantity.

## Edit mash plan table

A mash plan can be changed in the brewing automat or created from scratch. The pencil symbol is used to switch a row in the Mash plan table to editor mode.

![Edit mash plan](/docs/img/brautomat-3.jpg)

Any number of table rows can now be changed one after the other. As soon as an icon for editing the mash plan has been clicked, the _Save_ button changes from green to red. Once all changes have been made, the mash plan must be saved with the _Save_ button. Alternatively, all changes can be cancelled by clicking the _Exit_ button to exit without saving.

As soon as a mashing process is started using the Power button, the view changes:

![Edit mash plan](/docs/img/brautomat-4.jpg)

The buttons for editing are hidden. To make them visible again, the mashing process must be paused with the Pause button from the control unit:

![Edit mash plan](/docs/img/brautomat-5.jpg)

If the mashing process is paused, the Pause button in the control unit is displayed in red and the editing functions are activated. The induction hob is not switched off. The resting temperature is still maintained. If the resting timer is active, it is paused. If the mash schedule is changed (editor mode), the Pause button for continuing the mashing process and the Power button are deactivated and displayed in grey until the changes in the mash schedule have either been saved or discarded (Exit).

Example:\
at the end of a mashing process, an iodine sample is used to determine that the mash is not yet iodine-normal and that starch is still present. The rest saccharification at 72°C should be extended:

* Pause the mashing process
* Click on the pencil symbol in the line Saccharification 72°C
* Extend the resting time of the 2nd saccharification by 5 minutes
* Save
* Click the Pause button and the mashing process continues with the adjusted resting duration.

## Function and application of autonext

![Mash plan autonext](/docs/img/Mash-plan-autonext.jpg)

The first step of the mash plan with the name _Mash-in 50°C_ has a resting time of 10 minutes and a deactivated _autonext_. The picture shows the situation when the rest timer has reached 10 minutes: The timer has counted down to 00:00 remaining time. The play button automatically changes to red. The toast message ‘Click play button’ appears at the bottom right. The induction hob switches off. The brewing process waits for a click on the play button.

* At the end of a pause with _autonext_ deactivated, the brewing process is stopped and the GGM IDS is switched off.

The second mashing step, labelled _Maltose rest 63°C_, has a rest temperature of 63°C and a rest time of 25 minutes. In this step, the Brauomat first controls the induction hob to 63°C. As soon as this 63°C is reached, the Brauomat starts the timer. A rest timer is a stopwatch that counts down to 00:00 (0 minutes : 0 seconds). When this timer has reached the resting time of 25 minutes, the automatic brewer checks the _autonext_ property. If _autonext_ is activated, the Brauomat automatically jumps to the next step in the mash schedule. In this example recipe, this is the ‘Saccharification 72°C’ step. The saccharification step has a rest temperature of 72°C. The Brauomat automatically increases the power of the induction hob to reach the new resting temperature.

* At the end of a rest with _Autoext_ activated, the mashing process continues automatically and the GGM IDS remains switched on.

![Mash plan autonext](/docs/img/Mash-plan-autonext2.jpg)

The _autonext_ property in the seventh step _Mash 78°C_ is not activated. If the Brauomat encounters a deactivated autonext, the Brauomat ends the current rest after the rest time has elapsed and sets the power of the induction hob to 0% (off). In this state, the ‘Play button’ is displayed in red. To continue the brewing process, the Play button must be clicked.

In this image, the active idle state is ‘Boiling’, the current power of the GGM IDS is displayed as 0% and the play button is red. This state is reached exactly when the rest _boiling 78°C_ is finished and the Brautomat is waiting for a user action to continue.

While in the first example of _autonext_ the play button is usually clicked directly in the mash-in step to continue, in the second example of mash-out a longer time can pass for lautering and the lautering rest. The Brauomat is left in the ‘Click play button’ state. All actuators can be used in this state.

_Difference between Autonext and Pause: If Autonext is deactivated at the end of the rest, the RCD IDS is switched off. The pause button stops the latching timer, but the GGM IDS remains switched on and the automatic brewer regulates the required power of the GGM IDS._

The optional special functions are described in the following sections. Brautomat beginners can skip the description of the special functions.

## Special function 0°C rest when autonext is activated

A special function is the rest temperature 0°C when autonext is activated: If the rest temperature is set to 0°C and autonext is activated, the mashing step is started automatically without temperature control. In the mashing schedule example, this special function is shown after wort boiling in the _post-isomerisation_ step. The wort has a temperature of approx. 100°C at this point. The induction hob should be switched off and the timer for post-isomerisation started directly:

![Sonderfunktion 0°C](/docs/img/Maischeplan-Sonderfunktion.jpg)

The special function _0°C rest temperature with activated autonext_ fulfils exactly this requirement: The actual and set temperature are ignored and the rest timer is started. If the rest temperature of the post-isomerisation step was not set to 0°C but to 95°C, for example, the rest timer for the post-isomerisation step would only start when the temperature in the mash tun has cooled down from 100°C to 95°C. During post-isomerisation, the temperature in the wort drops. If necessary, the wort is actively cooled. The special function _0°C rest temperature with autonext_ activated causes the induction hob to remain switched off.

Background: If the autonext function is activated, the Brauomat constantly compares the current actual temperature with the rest temperature. The ‘Temperature delta to set temperature’ property specifies how many degrees of deviation are permissible so that the next mashing step is started automatically. With a rest temperature of 63°C and a ‘Temperature delta to target’ of 0.3°C, the mashing step would be started from an actual temperature of 62.7°C when the temperature is rising and from 63.3°C when the temperature is falling.

## Brewing process

The basic principle of the Brautomat is the ascending infusion. This includes variants such as Earl's boiling mash process. Other brewing processes can also be realised using the ‘autonext’ feature. However, it should be noted that the Brauomat can only provide ‘semi-automatic’ support for other brewing processes. A trigger for an action, such as the drawing of partial mashes, must be carried out manually by the operator. In the brewing system, manual means clicking the play button. A pause of zero minutes with deactivated Autonext can be used as a trigger for a manual action.

Note: The following topics on the control commands are optional and not relevant for getting started with the Brauomat.

## Control commands

A second special function is control commands for the induction hobs mash and brew, post-cast and actuators. The syntax for the mash step is

* Actor name:Power

The power can be either ON or OFF or a number between 0 and 100%. The OFF state corresponds to the value 0% and ON to the value 100%. The control command for the first induction hob is IDS or MIX. The control command for the second induction hob is SUD. The control command for post-cooking is HLT. The post-casting control command can also be used for post-casting. The control command for an actor is the actor name.

![Aktor Steuerbefehl](/docs/img/Maischeplan-Aktoren.jpg)

The mash plan in the picture switches actuators at three points. The agitator is switched on right at the beginning: Agitator:ON

Shortly before the end of the mash plan, the agitator is switched off: Agitator:OFF and the post-pour is switched on: Post-pour:ON. Actuator names must not contain any special characters (except - and _), umlauts or spaces and must be unique. The web interface checks the entries automatically.

The control command for an actuator can be specified with a power, e.g. PUMP:60. The pump actuator is then switched on at 60%. This assumes that this actuator has been activated for PWM. If the control command is executed for an actuator without PWM, the power 60% is replaced by ON or 100%. The dwell temperature and the dwell time must be set to 0 for control commands for actuators.

The IDS:50 control command sets the maximum output power of the induction hob to 50%. Post-cooking can also be set to 75% power with HLT:75.

![IDS control command](/docs/img/special_function_sud1.jpg)

The control command SOUTH:Boil thick mash with a resting time of 10 minutes and a resting temperature of 100 degrees carries out a mashing step on a second induction hob. The rest timer is started as soon as the rest temperature is reached.

![Control command SUD](/docs/img/special_function_sud2.jpg)

The control command SUD:Boil thick mash with a rest temperature of 100 degrees but without rest time switches on the second induction hob, starts the PID controller and jumps directly to the next step in the mash schedule.

![Control command SUD](/docs/img/special_function_sud3.jpg)

The mashing step saccharification 72°C is carried out on the first induction hob ‘Mash’. The PID controller regulates the power required for the mash boiler. At the same time, the PID controller regulates the power required for the ‘brew’ boiler.

Examples:

* Agitator:ON
* Agitator:OFF
* RHE:40
* IDS:75
* IDS:OFF
* HLT:100
* HLT:OFF
* SUD:Boil thick mash
* SUD:60

_Note: The mash, brew and HLT boilers can be operated simultaneously with the control commands. However, only one rest timer can be active. The first induction hob ‘Mash’ must always have a rest timer entered._

Example: Decoction with two induction hobs:

![IDS and SUD control command](/docs/img/special_function_sud4.jpg)

Due to the restriction ‘the first boiler “mash” must always be operated with a resting time’, there is a simple procedure for the decoction processes: the partial mash to be boiled must be placed in the ‘mash’ boiler and the partial mash to be kept at temperature must be placed in the ‘brew’ boiler.

Example of using the power for the induction hob:

Given a pour of 7kg and a main pour of 28 litres. The total mass is 35kg\

Using the special function IDS:<power in %>, the power of the RCD IDS can be set so that the heating rate during mashing is 1°C per minute.

![IDS power control command](/docs/img/IDS-special-function.jpg)

For explanations of the calculation method, see: Parameters of the RCD IDS - Temperature control - Maximum power of the IDS._

```json

    Required power P = m * c * T / (t * w)
    The expression c * T / (t * w) is replaced by the value 75 for an efficiency of 80% for the induction hob.
    The mass m is 35kg
    P = 35 x 75 = 2625
    2625W is 75% of the max. power 3500W (2625 / 3500 * 100 = 75%)

```

In the mash schedule shown above, the maximum output of the IDS is set to 75% after mashing in in line 2 with the control command ‘IDS:75’. With this control command, the following steps (maltose rest, saccharification and mashing down) are carried out with a maximum output of 75%. After mashing down, the user must click on the Play button (Autonext deactivated). The lautering starts here, followed by the lautering rest, etc. The brewing process is continued with the ‘IDS:100’ control command. The maximum output of the IDS is set to 100% for wort boiling.

_Note: The efficiency of 80% used here for an induction hob is an average value. An insulated and covered mash tun (lid or agitator) can have a higher efficiency._

## Special function profile change

Another special function is the profile change. The commands are IDSPROFIL, SUDPROFIL and HLTPROFIL. The colon is followed by the profile name.

Examples

IDSPROFIL:Profile68l\
IDSPROFIL:Profile36l

This special command is used to exchange all parameters of a boiler. In this way, different hardware profiles can be stored. In the decoction brewing process, the special command offers an easy way to use customised parameters with the same boiler and smaller volume.

The special commands IDS: and IDSPROFIL: have different effects: The special command IDS: changes the maximum output power. All other parameters remain the same.

Note: the special command IDSPROFIL in the mash schedule is cancelled if the device type (IDS1, IDS2 or relay) is not identical.

### Example of IDS control command

The following configuration for the RCD IDS or the mash brew boiler is given as an example:

![IDS control command](/docs/img/aktoren_schalten4.jpg)

The maximum power output is preset to 100%. The ‘transition to boiling’ temperature is 95°C. From this temperature, the maximum output power of the GGM IDS is only 80%.

The mash schedule in the illustration begins with the ‘Heating up the main pour’ step. The GGM IDS induction hob would heat the water with the ‘Max. output IDS’ (parameter in the temperature control tab), i.e. at 100%.

![IDS control command](/docs/img/aktoren_schalten2.jpg)

The rest timer starts at 59°C. The resting time is zero minutes. The Brautomat jumps to step 2 in the next line.

The IDS:65 control command sets the maximum output of the IDS to 65%. The automatic brewer jumps to the next line in step 3.

It is now heated from 59°C to the target temperature in the ‘Mashing’ step. The maximum output of the IDS is 65%.

The maximum output power of 65% is maintained in the following mashing steps. Until the brew machine encounters the IDS:100 control command after the mashing step.

![IDS control command](/docs/img/aktoren_schalten3.jpg)

The control command changes the maximum output power of the IDS to 100%. The wort is now heated at 100% power up to the ‘transition to boiling’ temperature of 95°C (see above). From 95°C, the RCD IDS switches to 80% output. 80% corresponds to the ‘Power from transition’ parameter.

The control commands for the IDS can be used to prevent the mash from burning or the wort from boiling over, especially with smaller boiler volumes.
