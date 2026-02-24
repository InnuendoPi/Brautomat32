# Set up the cooker

## Create the mash kettle

In the _Mash Plan_ section, create the mash kettle via the gear icon at the top right.

![Create mash kettle](/docs/img/IDS-einrichten.jpg)

## Configure the cooker

First, configure the cooker itself. This example uses a GGM IDS induction cooker.

The first setting is the IDS type (`IDS1` or `IDS2`). Then configure these control pins:

* PIN white [relay] - Default: D7
* PIN yellow [Command] - Default: D6
* PIN blue [Interrupt] - Default: - (unused)

GPIO D6 and D7 are preconfigured for the GGM IDS cable (JST-HX) and also match the screw terminal layout. The interrupt pin is usually left unused and is mainly needed for troubleshooting.

Next, assign a temperature sensor to the mash kettle. Choose it from the sensor list that already exists. In this basic setup, only _Sensor IDS2_ is available.

_Note_: _Each kettle needs a fixed temperature sensor. The actual temperature from this sensor is continuously compared with the target rest temperature during mashing._

![Configure mash kettle](/docs/img/IDS-konfigurieren.jpg)

The parameters in the "Temperature control" tab are explained in detail in the parameter section. For this first setup, keep the default values.

![Configure mash kettle](/docs/img/IDS-temperaturen.jpg)

## Set up PID control

After the basic setup, open the PID Manager tab. PID calculates the required heating power to reach each rest temperature and keep it stable.

The AutoTune PID chapter explains step by step how to determine suitable PID parameters.
