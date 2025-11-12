# Features

An _invented example recipe_ is used in the following description. This description does not contain the recipe, but the procedure for mashing with the Brautomat.

The mash plan is in the form of a table. This table is processed from top to bottom by the brewing system on a brewing day. In the example recipe, the line _Mashing 50°C_ is the first mashing step and _WHP Hallertau Tradition_ is the last mashing step. A very important function in the mash plan is the property in the _autoext_ column.

## Basic functions

![Mash plan](/docs/img/Brautomat.jpg)

For orientation purposes, the structure of the table rows is first described. A row in the mash plan represents a step in the mash plan. Each table row has these columns:

* The "Rest" column shows a name for this mash step.
* The "Temperature" column contains the resting temperature (also called the target or target temperature in this manual).
* The "Duration" column contains the rest time (timer), how long the Brautomat should maintain the rest temperature.
* The "autoext" column indicates whether the next step will be automatically continued after the rest time (timer) has expired.

After these four details about the mashing step, there are editing buttons in each line with the following functions: (from left to right)

![Edit mash plan](/docs/img/Brautomat-111.jpg)

* move this line up one position
* move this line down one position
* edit this line
* delete this line

The table header contains the following buttons (from left to right)

![Edit mash plan](/docs/img/Brautomat-1.jpg)

* new line: add a new mash step to the end of the table
* Delete: delete the entire table (empty mash plan)
* Reload: reread the recipe from the file. Changes are not saved. The button is displayed blue
* Database: Mash plan selection, import, export and mash plan scheduler
* Collapse: Collapse and expand the mash plan table

![Edit mash plan](/docs/img/Brautomat-11.jpg)

When a table row is edited, the buttons change.

* Exit: exit the line editor without saving. The button is displayed in gray
* Storage: Save changes in the table row in the mash plan

All buttons for editing the mash plan are hidden as soon as the brewing process is started. The collapse button for collapsing and expanding the table is hidden as soon as the mash plan is edited.

Together with the Power, Play, Pause, Prev and Next controls, the brewing control is intuitive to use. The mashing plan shown here is an import from the kleineBrauhelfer2. The import automatically inserts the rest temperatures and rest times. When adding hops, the alpha acid and the amount in grams are automatically appended to the hop name. In addition, these abbreviations are prefixed:

* VWH: front wort hopping
* Cooking (without adding hops)
* WPH: Whirlpool Hopping

Additives as shown in the picture _Cooking yeast food 1gr_ are imported into the mash plan from the small Brauherlfer2 with the time of administration and quantity.

## Edit mash plan table

A mash plan can be changed in Brautomat or completely recreated. The pencil symbol puts a line in the mash plan table into editor mode.

![Edit mash plan](/docs/img/Brautomat-3.jpg)

Any number of table rows can now be changed one after the other. As soon as a symbol for editing the mash plan has been clicked, the _Save_ button changes from green to red. Once all changes have been made, the mash plan must be saved using the _Save_ button. Alternatively, all changes can be discarded using the _Exit_ button to exit without saving.

As soon as a mashing process has been started using the power button, the view changes:

![Edit mash plan](/docs/img/Brautomat-4.jpg)

The buttons for editing are hidden. In order to make this visible again, the mashing process must be stopped using the Pause button on the control:

![Edit mash plan](/docs/img/Brautomat-5.jpg)

When the mashing process is paused, the Pause button in the control is displayed in red and the editing functions are displayed. The induction hob does not turn off. The rest temperature continues to be maintained. If the rest timer is active, it will be paused. If the mash plan is changed (Editor mode), the Pause button to continue the mashing process and the Power button are deactivated and displayed in gray until the changes in the mash plan have either been saved or discarded (Exit).

Application example:\
At the end of a mashing process, an iodine sample is used to determine that the mash is not yet iodine-normal and that starch is still present. The saccharification rest at 72°C should be extended:

* Pause the mashing process
* Click on the pencil symbol in the line Saccharification 72°C
* Extend the resting time for the second saccharification by 5 minutes
* Save
* Click the pause button and the mashing process will continue with the adjusted rest duration.

## Function and application of autonext

![Maischeplan autonext](/docs/img/Maischeplan-autonext.jpg)

The first step of the mash plan called _Mashing 50°C_ has a rest time of 10 minutes and a deactivated _autonext_. The picture shows the situation when the rest timer has reached 10 minutes: The timer has counted down to 00:00 remaining time. The play button automatically changes to red. The toast message “Click play button” appears at the bottom right. The hob switches off. The brewing process waits for a click on the play button. The web interface shows the next step, which is started by clicking on Play.

* At the end of a pause with _autonext_ deactivated, the brewing process is stopped and the hob is switched off.

The second mashing step, called _Maltoserast 63°C_, has a resting temperature of 63°C and a resting time of 25 minutes. In this step, the Brautomat initially controls the hob to 63°C. As soon as this 63°C is reached, the Brautomat starts the timer. A rest timer is a stopwatch that counts down to 00:00 (0 minutes : 0 seconds). When this timer reaches the rest time of 25 minutes, the Brautomat checks the _autonext_ property. If _autonext_ is activated, the Brautomat automatically jumps to the next step in the mash plan. In this example recipe this is the _Saccharification 72°C_ step. The saccharification step has a rest temperature of 72°C. The Brautomat automatically increases the power of the hob to reach the new rest temperature.

* At the end of a rest with _autoext_ activated, the mashing process continues automatically and the hob remains switched on.

![Maischeplan autonext](/docs/img/Maischeplan-autonext2.jpg)

The property _autonext_ in the seventh step _Mashing 78°C_ is not activated. If the Brautomat encounters a deactivated autonext, the Brautomat ends the current rest after the rest time has expired and switches the hob off (0% power). In this state the Play button is displayed in red. To continue the brewing process, the Play button must be clicked.

While in the first example of _autonext_ the Play button is usually clicked directly to continue in the mashing step, in the second example of mashing a longer time can pass for lautering and lauter rest. The Brautomat is left in the “Click Play Button” state. The hob of the first boiler remains switched off. In this state, all actuators and also the two other boilers can be used.

## Difference autonext and break

If autonext is deactivated at the end of the lock, the hob is switched off. With the pause button the rest timer is stopped,However, the hob remains switched on and the Brautomat calculates the power required for the hob.

The following sections describe the optional special functions. Brautomat beginners can skip the description of the special functions.

## Special function 0°C rest when autonext is activated

A special function is the rest temperature 0°C when autonext is activated: If the rest temperature is set to 0°C and autonext is activated, the mashing step is started automatically without temperature control. In the mash plan example, this special function is shown after boiling the wort in the _post-isomerization_ step. At this point the wort has a temperature of approx. 100°C. The hob should be switched off and the timer for post-isomerization should be started immediately:

![Special function 0°C](/docs/img/Maischeplan-Sonderfunktion.jpg)

The special function _0°C rest temperature with activated autonext_ meets exactly this requirement: the actual and target temperatures are ignored and the rest timer is started. If the rest temperature of the post-isomerization step was not set to 0°C, but rather to 95°C, for example, the rest timer for the post-isomerization step would only start when the temperature in the mash brew kettle has cooled from 100°C to 95°C. During post-isomerization the temperature in the wort drops. If necessary, the wort is actively cooled. The special function _0°C rest temperature when autonext_ is activated causes the hob to remain switched off.

## Brewing process

The basic principle of the brewing machine is ascending infusion. This includes variants such as Earl's cooking mashing process. Other brewing processes can also be implemented using the “autonext” property. However, it should be noted that the Brautomat can only support other brewing processes with "semi-automatic". A trigger for an action, such as pulling partial mash, must be done manually by the operator. For Brautomat, manual means using the Play and Pause buttons. A pause of zero minutes with autonext disabled can be used as a trigger for a manual action.

Note: The following topics on control commands are optional and not relevant for getting started with Brautomat.

## Brew kettle

The Brautomat supports up to three brew kettles. The first kettle is required for the mashing process. A second kettle is optional and can be used, for example, in brewing processes such as decoction. The third kettle is often used as a refill and is also optional. The use of the 2nd and 3rd kettles is freely selectable, only the first kettle is tied to the mashing process and specifically to the rest timer.

Default names for control commands:

* First kettle: IDS or MASH
* Second boiler: MLT or SUD
* Third boiler: HLT or REGUSS

## Control commands

A second special function is control commands for the hobs and actuators. The syntax for the mash step is.

* Actor name:Performance

The power can be either ON or OFF or a number between 0 and 100%. The OFF state corresponds to the value 0% and ON to the value 100%. The control command for the first induction hob is IDS or MASH. The control command for the second induction hob is SUD. The control command for the recast is HLT. The control command for an actuator is the actuator name.

![Actor control command](/docs/img/Maischeplan-Aktoren.jpg)

The mash plan in the picture switches actuators in three places. The agitator is switched on right at the beginning: Agitator:ON
Shortly before the end of the mash schedule, the agitator is switched off: Agitator:OFF and the refill is switched on: Refill:ON.

The control command for an actuator can be specified with a power, e.g. PUMP:60. The actuator pump is then switched on with 60% power. This assumes that this actuator has been activated for PWM. The rest temperature and the Rast Duration must be set to 0 for control commands.

The control command IDS:50 sets the maximum output power of the hob to 50%. The re-casting can also be switched on to 75% power with HLT:75.

![IDS control command](/docs/img/sonderfunktion_sud1.jpg)

The control command SUD: Cook thick mash with a rest time of 10 minutes and a rest temperature of 100 degrees carries out a mash step on a second hob. The rest timer is started as soon as the rest temperature is reached.

![Control command SUD](/docs/img/sonderfunktion_sud2.jpg)

The control command SUD: Cook thick mash with a rest temperature of 100 degrees but without a rest time switches on the second hob, starts the PID controller for the hob and jumps directly to the next step in the mash plan.

![Control command SUD](/docs/img/sonderfunktion_sud3.jpg)

The mashing step saccharification at 72°C is carried out on the first hob _Maische_. The PID controller regulates the required power for the mash kettle. At the same time, the PID controller regulates the power required for the boiler _Sud_.

Examples:

* Agitator:ON
* Agitator:OFF
* RHE:40
*IDS:75
*IDS:OFF
* HLT:100
* HLT:OFF
* SUD: Cook thick mash
* SUD:60

_Note: The control commands can be used to operate the mash, brew and HLT boilers at the same time. However, only one rest timer can be active. The rest timer is always linked to the first “mash” hob._

### Example control command IDS

As an example, the following configuration is given for the GGM IDS or the MashSud boiler:

![IDS control command](/docs/img/aktoren_schaltung4.jpg)

The maximum power output is preset to 100%. The “Transition to Cooking” temperature is 95°C. From this temperature onwards, the maximum output power of the GGM IDS is only 80%.

The mash schedule in the illustration begins with the “Heating the main pour” step. The GGM IDS induction hob would heat the water with the power "Max. Power IDS" (parameter in the temperature control register), i.e. with 100%.

![IDS control command](/docs/img/aktoren_schaltung2.jpg)

The rest timer starts at 59°C. The rest time is zero minutes. The Brautomat jumps to the next line to step 2.
The control command IDS:65 sets the maximum power of the IDS to 65%. The Brautomat jumps to the next line to step 3.
Now the temperature is heated from 59°C to the target temperature in the “mashing” step. The maximum performance of the IDS is 65%.

The maximum output power of 65% is maintained in the following mashing steps. Until the Brautomat meets the control command IDS:100 after the mashing step.

![IDS control command](/docs/img/aktoren_schaltung3.jpg)

The control command changes the maximum output power of the IDS to 100%. The wort is now heated at 100% power to the “transition to boiling” temperature at 95°C (see above). From 95°C the GGM IDS switches to 80% power. 80% corresponds to the "Power from transition" parameter.

The control commands for the IDS can be used to prevent the mash from burning or the wort from boiling over, especially with smaller kettle volumes.

### Example: Decoction with two hobs

![IDS and SUD control command](/docs/img/sonderfunktion_sud4.jpg)

Due to the restriction _the first mash kettle must always be operated with a rest time_, there is a simple procedure for the decoction processes: the partial mash to be cooked must go into the _Mash_ kettle and the partial mash to be kept at temperature must go into the _Sud_ kettle.

### Example of using power for a hob

A fill of 7kg and a main pour of 28l are given. In total the mass is 35kg\

With the help of the special function IDS: <Power in %>, the power of a hob can be adjusted so that the heating rate during mashing is 1°C per minute.

![Control command MASH power](/docs/img/IDS-Sonderfunktion.jpg)

_ExplainsFor information on the calculation method, see: Parameters of the GGM IDS - Temperature control - Maximum performance of the IDS._

```json

    Required power P = m * c * T / (t * w)
    The expression c * T / (t * w) is replaced by the value 75 at an efficiency of 80% for the induction hob
    The mass m is 35kg
    P = 35 x 75 = 2625
    2625W is 75% of the max. power 3500W (2625 / 3500 * 100 = 75%)

```

In the mashing plan shown above, the maximum output of the IDS is set to 75% after mashing in line 2 with the control command "IDS:75". With this control command, the following steps (maltose rest, saccharification and mashing) are carried out with a maximum output of 75%. After mashing, the user must click on the play button (autonext disabled). Lautering begins here, followed by lauter rest, etc. The brewing process continues with the control command “IDS:100”. The maximum power of the IDS is set to 100% power for wort boiling.

_Note: The efficiency of 80% used here for an induction hob is an average value. An insulated and covered mash tank (lid or agitator) can have higher efficiency._

## Special function profile change

Another special function is the profile change. The commands are IDSPROFIL, SUDPROFIL and HLTPROFIL. The profile name follows the colon.

Examples:

IDSPROFILE:Profil68l\
IDSPROFILE:Profil36l

With this special command all parameters of a boiler are exchanged. In this way, different hardware profiles can be stored. In the decoction brewing process, the special command offers an easy way to use adjusted parameters with the same boiler and smaller volume.

The special commands IDS: and IDSPROFIL: have different effects: The special command IDS: changes the maximum output power. All other parameters remain the same.

_Note: the special command IDSPROFILE in the mash plan is canceled if the device type (IDS1, IDS2 or relay) is not identical._

## Example brew day

Finally, the special orders, the hop additions and the general procedure are summarized using a brewing day. This example is based on the following setup:

Two boiler environment:

* a mash brew kettle (volume 70l, GGM IDS2 with 3.6kW)
* a recast kettle (kettle 35l, 2kW)

Two actors:

* an agitator (relay-controlled)
* a ring heating element (in the mash brew boiler, 3.5kW)

The mash plan:

![example mash plan brewing day](/docs/img/example_control_commands1.jpg)

The example shows how easy it is to switch actuators on and off using special commands or how special commands are integrated into the mash plan. In the first mashing step, the agitator is switched on. The Brautomat executes the special command and immediately jumps to the next step in the mash plan. The mash in step was configured with a duration of 1 minute and autonext disabled. In this step the malt is added to the brewing water. The step takes longer than a minute, but depending on the filling, it is not known in advance how long the mashing will take. After mashing for a minute, the Brautomat switches off the hob and displays the play button in red (deactivated autonext). The Brautomat now “waits” until the step is completed and the play button is clicked. When the hob is switched off and malt is added, the mixing temperature for the mash will be below 55°C. This procedure is suitable, for example, for a relaxed, slow addition of the malts or for a short protein rest.

_Alternative:_ activate the property autonext and set the rest period to 5 minutes. In this case, the Brautomat would maintain the mashing temperature for 5 minutes (mashing) and then automatically heat up to the next rest.

The next step is the maltose rest. The PID Controller regulates the power required to reach the target temperature in the mash and maintain it for a period of 40 minutes. In line 4, the refill is switched on using a special command. The target temperature for the refill is 75°C and the duration is 0 minutes. The Brautomat starts the PID controller for the boiler re-casting and regulates the required power in the background. At this point in the mash plan, two PID controllers are active: a PID controller for the mash brew kettle and a PID controller for the after-pour. The Brautomat jumps directly to the next step after switching on.

In the mash plan, the ring heating element actuator is switched on or switched once with the special command _RHE:ON_ and once with _RHE:50_. The ON translates the Brautomat with 100% performance, while 50 is processed accordingly with 50% performance. The MashSud kettle has a maximum volume of 70 liters. The ring heating element supports the hob during cooking with 50% power for vigorous cooking: 100% power hob (3.5kW) plus 1.75kW ring heating element (50%). At the end of cooking, the ring heating element is switched off with the special command _RHE:OFF_.

The timing of hop additions is calculated based on their cooking time. The mash schedule has a total cooking time of 90 minutes. 30 minutes of this are boiling without adding hops. The total cooking time of the individual hop additions adds up. I.e. the first addition of hops _Hall. Tradition 6.0% 37.2g_ is cooked for a total of 60 minutes:

* Duration of mash step hop addition Hall. Tradition 37.2g: 30 minutes
* Duration of mash step hop addition Hall. Tradition 31g: 15 minutes
  * At the end of this mash step, the first addition of hops (37.2g) is in the wort for 45 minutes
* Duration of mash step hop addition Hall. Tradition 30g: 10 minutes
  * At the end of this mashing step, the first addition of hops (37.2g) is 55 minutes and the second is 25 minutes in the wort
* Duration of mash step hop addition Hall. Tradition 7g: 5 minutes
  * At the end of this mashing step, the first hop addition (37.2g) is 60 minutes, the second 24 minutes and the third 15 minutes in the wort

While tools like kleineBrauhelfer, BrewFather or MMum always indicate the total cooking time for each individual hop addition, the Brautomat must provide an alarm or an indication as to when an addition of hops needs to be added to the wort during brewing.

_Extension:_ The explanation of hop doses is expanded to include two or more doses at the same time:

![example mash plan brewing day](/docs/img/example_control_commands3.jpg)

The hops should be added 10 minutes before the end of boiling. Tradition 6.0% 30g_ and yeast food _Nutrient yeast_ are added to the wort at the same time. The illustration shows how simple the procedure is: simultaneous doses with a duration of 0 minutes are given before a dose with a duration.

The penultimate step post isomerization uses the special function target temperature 0°C. The hob is switched off with this mash step. The special function rest temperature 0°C causes the Brautomat to start the rest timer 10 minutes immediately. At this point the wort has a temperature of approx. 100°C and is slowly cooling down. Because the following step involves the addition of aroma hops at 78°C, the wort is actively cooled during the 10-minute post-isomerization rest period.

The graph for the mash plan:

![example mash plan brewing day](/docs/img/example_control_commands2.jpg)
