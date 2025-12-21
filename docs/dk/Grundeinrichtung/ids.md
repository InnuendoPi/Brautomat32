# Set up the hob

## Creating the mash brew kettle

In the first section _Maischeplan_, the MashSud boiler is created using the gear at the top right.

![Create mash brew kettle](/docs/img/IDS-einrichten.jpg)

## Configuring a hob

First, a hob must be configured. A GGM IDS induction hob is set up in this basic setup.

The first setting concerns the IDS type, where IDS1 or IDS2 can be selected. This is followed by three control parameters:

* PIN white [relay] - Default: D7
* PIN yellow [Command] - Default: D6
* PIN blue [Interrupt] - Default: - (unused) or D5

These GPIOs (D5, D6 and D7) are preconfigured for the GGM IDS connection cable with JST-HX socket or the screw terminal block.

Next, a temperature sensor must be assigned to the MashBud kettle. The selection is made from a list of sensors that have already been set up. In this basic setup, only the sensor _Sensor IDS2_ is present, which is selected accordingly.

_Note_: _A temperature sensor must be permanently assigned to a hob. The sensor value is referred to as the actual temperature or current temperature and is continuously compared with the rest temperature (target temperature) during the mashing process._

![Configure mash brew boiler](/docs/img/IDS-konfigurieren.jpg)

The parameters in the "Temperature control" tab are explained in detail in the "All parameters" section. For the basic setup, the default values ​​are initially adopted.

![Configure mash brew boiler](/docs/img/IDS-temperaturen.jpg)

## Setting up the PID controller

After the basic configuration, the PID controller must be set up in the PID Manager tab. The PID controller automatically calculates the power required for the hob to bring the mash temperature (actual temperature) to the rest temperature. A precise PID configuration ensures that the rest temperature remains constant over the entire rest period.

The PID controller is set with two parameters:

* Ku (ultimate gain) – gain factor
* Pu (ultimate period) – period length

The PID parameters P, I and D are calculated from these two values. These parameters are individual for each brewing system and are determined using the AutoTune process. The AutoTune process is described in detail in the "AutoTune step by step" section.

The following values ​​for Ku and Pu are entered for this basic setup. The PID tuning rule _IDS PID Mode_ is then selected:

![IDS](/docs/img/IDS-AutoTune-erg.jpg)

As soon as the values for Ku and Pu are entered, the selected PID algorithm automatically determines the three values P, I and D. A detailed explanation of all parameters will follow later.

## Starting values for different boiler sizes

For a 36L kettle with around 20L mash volume:

```text
Amplification factor Ku (ultimate gain): 182
Period duration Pu (ultimate period): 2245
```

For a 70L kettle with over 50L mash volume:

```text
Amplification factor Ku (ultimate gain): 225
Period length Pu (ultimate period): 1500
```

## Completion of basic configuration

After saving the settings, the basic configuration is complete. You can now brew with a temperature sensor and a mash brew kettle.

_Note: A mash plan is also required for the actual brewing process._
