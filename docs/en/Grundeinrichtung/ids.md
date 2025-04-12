# Kettle setup

## Creating a mash kettle

In the "Mashing Plan" section, the mash kettle is created using the gear icon in the top right corner.

![MaischeSud Kessel anlegen](/docs/img/IDS-einrichten.jpg)

## Configure a mash kettle

Firstly, a kettle must be configured. A GGM IDS induction hob is set up in this basic configuration.

The first setting is the IDS type, where you can choose between GGM IDS1 and IDS2, Relay and webhook. Then, three control parameters need to be set:

* White PIN [Relay] – Default: D7
* Yellow PIN [Command] – Default: D6
* Blue PIN [Interrupt] – Default: - (unset) or D5

These GPIOs (D5, D6, and D7) are preconfigured for the original GGM IDS connection cable with a JST-HX connector btw. screw terminal connection.

Next, a temperature sensor must be assigned to the mash-boil kettle. The selection list displays all previously configured sensors. In this basic setup, only one sensor, "Sensor IDS2," is available and should be selected.

_Tip: A temperature sensor must be permanently assigned to the induction cooktop. The sensor reading is referred to as the actual temperature and is continuously compared to the set temperature (target temperature) during the mashing process._

![MaischeSud Kessel konfigurieren](/docs/img/IDS-konfigurieren.jpg)

The parameters in the "Temperature Control" tab are explained in detail in the "All Parameters" section. For now, the default values should be used.

![MaischeSud Kessel konfigurieren](/docs/img/IDS-temperaturen.jpg)

## Configuring the PID Controller

After completing the basic setup, the PID controller must be configured in the PID Manager tab. This controller automatically adjusts the power output of the GGM IDS to maintain the mash temperature (actual temperature) at the target temperature. A well-configured PID controller ensures that the target temperature is held precisely during the rest period.

The PID controller is configured using two parameters:

* Ku (ultimate gain) – Amplification factor
* Pu (ultimate period) – Period duration

These values are used to calculate the P, I, and D parameters. For a system-specific configuration, the AutoTune process is explained in detail in the "AutoTune Step by Step" section.

For this initial setup, enter the following Ku and Pu values, then select the PID tuning rule "AutoTune mode":

![IDS](/docs/img/IDS-AutoTune-erg.jpg)

Once the Ku and Pu values are entered, the selected PID algorithm will automatically determine the three values P, I, and D. A full explanation of all parameters will be provided later.

## Initial parameters for different kettle sizes

For a 36L kettle with approximately 20L of mash:

```text
ultimate gain Ku:           182
ultimate period Pu:         2245
```

For a 70L kettle with over 50L of mash:

```text
ultimate gain Ku:           225
ultimate period Pu:         1500
```

## Completing the basic configuration

After saving the settings, the basic configuration is complete. Brewing can now begin with a temperature sensor and a mash-boil kettle.

_Note: A mashing plan is also required for the brewing process._
