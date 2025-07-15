# Kettle configuration and usage

The Brautomat32 offers the option of setting up to three kettles. The first kettle has the internal name MAISCHE and alternatively IDS. This kettle is required for the mashing process. The other two kettles are optional. The second kettle has the internal name SUD, alternatively MLT, and the third kettle has the name HLT or NACHGUSS.

The three kettles can either be of the GGM induction hob or relay type. One kettle of the relay type includes a webhook connection.

![Kessel Konfiguration](/docs/img/kessel_1.jpg)

The parameters are described in the chapter basic setup and parameters at a glance - kettle parameters and are identical for all three kettles.

However, the use of the three kettles is different, especially the use via the mash schedule. The mash schedule is always linked to the first kettle, MaischeSud, as long as no other kettle is specified in the mash schedule via a control command. Control commands are also explained in the section Mash schedule special function and control commands.

## Kettle control commands

Only control commands for kettles are considered in this section. Although control commands for actors are structured identically, they are explained in the section Mash Schedule special function and control commands. A control command always contains a colon in the rest name. The colon is the only way for the Brautomat to recognise that this detent is to be treated as a control command. The format is device:maximum power. This means that the colon separates the device name from the maximum power.

The following designations are defined internally as device names for the three kettles:

* MAISCHE or IDS for the first kettle
* MLT or SUD for the second kettle
* HLT or NACHGUSS for the third kettle

Each kettle is assigned a name in the settings. This name can also be used as a device name for a control command.

Numbers between 0 and 100 are permitted as the maximum output. The value corresponds to the maximum output parameter in the kettle settings and is specified as a percentage. The specification ON corresponds to 100% and OFF to 0%.

### Option 1: manual switching of kettles

The second and third kettle can be switched on and off manually via the web interface using the respective power button. If, for example, a kettle is set up for purge water, the target temperature can be set to 78°C in the kettle settings and the kettle can be switched on as required on the brewing day.

### Option 2: automatic switching of kettles

The second and third kettle can also be switched via the mash schedule:

![Kessel Konfiguration](/docs/img/kessel_2.jpg)

In this simplified mash plan, the third HLT kettle is switched on automatically in line 2. The HLT:100 step with a target temperature of 78°C and a duration of 0 minutes switches on the secondary kettle with 100% output and sets the target temperature to 78°C. Because the duration is set to 0 minutes, the kettle is switched on permanently. The Brauomat goes directly to the next mashing step and leaves the kettle HLT switched on. The PID controller permanently regulates the power required to reach and maintain the target temperature. NACHGUSS:100 would be identical to the HLT:100 control command. If the kettle HLT has been given the name ‘Kocher’ in the settings, the KOCHER:100 control command can also be used.

![Kessel Konfiguration](/docs/img/kessel_3.jpg)

In this mash plan, the second brew kettle is switched on in the third step. In contrast to the previous HLT example, the SUD kettle is switched on for 15 minutes with a target temperature of 100°C. The Brautomat remains on this step until the target temperature is reached and the rest period of 10 minutes is completed. The SUD kettle is then switched off and the Brauomat jumps to the next step in the mash plan.

The text ‘Teilmaische kochen’ is translated by the Brauomat to 100%. If there is no number between 0 and 100 or ON or OFF after the colon, Brauomat replaces the text with 100% output.

## Example use diffent power

The control commands can be used to adjust the maximum output during the brewing process. If, for example, the induction hob has a maximum output of 3.5 kW and the brewing kettle used has a volume of 20 litres, the MAISCHE:75 control command can be used to reduce the maximum output power of the induction hob to 75%. The rest with the MAISCHE:75 control command is created with a target temperature of 0°C and a duration of 0 minutes with autonext activated.

## Example decoction

As described above, a rest from the mash plan is always assigned to the first kettle (MAISCHE) if no control command (colon in the rest name) assigns the rest to another kettle. A control command can either switch the second kettle on/off with a target temperature and jump directly to the next rest or integrate it into the mashing process with a rest duration.

In the decoction brewing process, partial mashes are boiled while the remaining mash is kept at a desired temperature. Decoction with the Brauomat would look like this:

* take a partial mash into the second kettle. One rest of the partial mash pull with deactivated autonext fulfils this task.
* then switch the second kettle on permanently to a desired temperature with a rest duration of zero minutes. autonext is activated.
* Boil partial mash in the first kettle with the desired resting time. autonext is activated.
* Add the remaining mash from the second kettle to the partial mash in the first kettel. autonext is deactivated.

Rests in a mash plan in a 2 or 3 vessel environment has the following principle:

* partial mashes to be boiled are always assigned to the first kettle
* partial mashes with temperature hold are assigned to the second or third kettle
* sparge water is always assigned to second oir third kettle
