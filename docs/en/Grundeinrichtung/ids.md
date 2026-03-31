# Set up the cooker

## Create the mash kettle

In the _Mash Plan_ section, create the mash kettle via the gear icon at the top right.

![Create mash kettle](/docs/img/IDS-einrichten.jpg)

## Configure the cooker

First, configure the heating source for the mash kettle. This chapter shows the
setup of a supported GGM IDS system.

The first setting is the IDS type. IDS1 and IDS5 use the same control method,
while IDS2 is handled separately. Then configure these control pins:

* PIN white [relay] - Default: D7
* PIN yellow [Command] - Default: D6
* PIN blue [Interrupt] - Default: - (unused)

For a GGM IDS system, the active control connections are `relay` and
`Command`. For normal first-time setup, the default values are sufficient.

The `Interrupt` connection is currently not used.

Next, assign a temperature sensor to the mash kettle. Choose it from the sensor list that already exists. In this basic setup, only _Sensor IDS2_ is available.

_Note_: _Each kettle needs a fixed temperature sensor. The actual temperature from this sensor is continuously compared with the target rest temperature during mashing._

![Configure mash kettle](/docs/img/IDS-konfigurieren.jpg)

The parameters in the "Temperature control" tab are explained in detail in the parameter section. For this first setup, keep the default values.

![Configure mash kettle](/docs/img/IDS-temperaturen.jpg)

## Set up PID control

After the basic setup, PID control must be configured. If you are new to
Brautomat, start with the default values and run AutoTune afterward. Manual
fine-tuning is not needed for the first test.

Step-by-step AutoTune instructions are available here:
[AutoTune step by step](../Autotune-pid/steps.md)

## Deep dive (Power User)

Technical details about decoupled IDS send behavior from 1.60 onward:
[IDS RMT send logic 1.60 (Power User)](ids-rmt-160.md)
