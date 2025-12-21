# Boiler configuration and use

The Brautomat32 offers the option of setting up up to three boilers. The first boiler has the internal designation MASH and alternatively IDS. This kettle is required for the mashing process. The two other boilers are optional. The second boiler has the internal designation SUD, alternatively MLT and the third boiler has the designation HLT or Nachguss.

The three boilers can be either GGM induction hob or relay type. A relay type boiler includes a webhook connection.

![Boiler configuration](/docs/img/kessel_1.jpg)

The parameters are described in the chapter Basic setup and parameters at a glance - Boiler parameters and are identical for all three boilers.

However, the use of the three kettles is different, especially the use of the mash plan. The mash plan is always linked to the first boiler of mash brew as long as no other boiler is specified in the mash plan via a control command. Control commands are also explained in the mash plan special function and control commands section.

## Boiler control commands

This section only considers boiler control commands. Control commands for actuators are structured identically, but are explained in the mash plan special function and control commands section. A control command always contains a colon in the rest name. The Brautomat only recognizes from the colon that this rest should be treated as a control command. The format is device:maximum power. This means that the colon separates the device name from the maximum performance.

The following names are defined internally as device names for the three boilers:

* MASH or IDS for the first kettle
* MLT or SUD for the second boiler
* HLT or REGUSS for the third boiler

Each boiler is assigned a name in the settings. This name can also be used as a device name for a control command.

Numbers between 0 and 100 are permitted as maximum performance. The value corresponds to the maximum power parameter in the boiler settings and is given in percent. The specification ON corresponds to 100% and OFF corresponds to 0%.

### Option 1: switching the boiler manually

The second and third boilers can be switched on and off manually via the web interface using the respective power button. For example, if a boiler is set up for re-infusion, the target temperature can be set to 78°C in the boiler settings and the boiler can be switched on on the brewing day if necessary.

### Option 2: automatic switching of the boiler

The second and third kettles can also be switched via the mash plan:

![Boiler configuration](/docs/img/kessel_2.jpg)

In this simplified mash plan, the third boiler HLT is switched on automatically in line 2. The step HLT:100 with a target temperature of 78°C and a duration of 0 minutes switches on the refill with 100% power and sets the target temperature to 78°C. Because the duration is specified as 0 minutes, the refill is switched on permanently. The Brautomat goes directly to the next mash step and leaves the after-infusion switched on. The PID controller permanently regulates the power required to reach and maintain the target temperature. Nachguss:100 would be identical to the control command HLT:100. If the refill has been given the name “Cooker” in the settings, then the control command COOKER:100 can also be used.

![Boiler configuration](/docs/img/kessel_3.jpg)

In this mash plan, the second kettle brew is switched on in the third step. In contrast to the previous example HLT, the SUD boiler is switched on for a period of 15 minutes with the target temperature of 100°C. The Brautomat remains on this step until the target temperature is reached and the rest period of 10 minutes is completed. The kettle SUD is then switched off and the Brautomat jumps to the next step in the mash plan.

The text "Cook partial mash" is from Brautomat translates 100%. If there is no number between 0 and 100 or the information ON or OFF after the colon, then the Brautomat replaces the text with 100% power.

## Example different performance

The control commands can be used to adjust the maximum power during the brewing process. For example, if the induction hob has a maximum output of 3.5kW and the brewing kettle used has a volume of 20 liters, then the control command MASH:75 can be used to reduce the maximum output power from the induction hob to 75% power. The rest with the control command MASH:75 is created with a target temperature of 0°C and a duration of 0 minutes with autonext activated.

## Example decoction

As described above, a rest from the mash plan is always assigned to the first boiler (MASH) if no control command (colon in the rest name) assigns the rest to another boiler. A control command can either switch the second boiler on/off with a target temperature and jump directly to the next rest or integrate it into the mashing process with a rest period.

In the decoction brewing process, partial mash is cooked while the remaining mash is kept at a desired temperature. Decoction with the Brautomat would look like this:

* Pull the remaining mash into the second kettle. Pulling a rest of remaining mash with autonext deactivated fulfills this task.
* then switch the second boiler on permanently to a desired temperature with a rest period of zero minutes. autonext is activated.
* Cook partial mash in the first kettle for the desired resting time. autonext is activated.
* Add remaining mash from the second kettle to the partial mash in the first kettle. autonext is disabled.

The rests in a mash plan in a 2 or 3 kettle environment have the following principle:

* Partial mash to be cooked is assigned to the first boiler
* Residual mash with temperature maintenance is assigned to the second or third boiler
* The refill is always assigned to the second or third kettle

## webhook

The PIN white relay parameter must be set to "-" so that the webhook elements are displayed in the web interface. In addition, the webhook URL and the sound command are required:

![webhook](/docs/img/kessel_webhook1.jpg)

Example Shelly 1PM:

Turn on Shelly 1PM: <http://192.168.1.5/relay/0?turn=on>\
Turn off Shelly 1PM: <http://192.168.1.5/relay/0?turn=off>

The webhook URL for Shelly 1PM is: <http://192.168.1.5/relay/0?turn=> (without on and off). The webhook switch parameter must be set to "on/off".

URL Tasmota: <http://192.168.x.x/cm?cmnd=Power1%201>
