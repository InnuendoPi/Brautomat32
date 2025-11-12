# Temperature sensor setup

## Add new sensor

In the _Sensors_ section, a new sensor can be added by clicking on the plus symbol.

![Create sensors](/docs/img/Sensor-setup.jpg)

## Set sensor address and name

Dallas DS18B20 temperature sensors have a unique address that is used by the firmware for identification. The sensor address is read out automatically. If more than one sensor is connected, the sensor address can be selected from the selection list.

If no sensor is displayed:

* The detection of the sensors can be restarted using the reload button.
* If no sensor is still detected, the cable connection must be checked.

Each sensor needs a name. In this basic setup the sensor is called “Sensor IDS2”.  called.

_Note: Sensor names can contain a maximum of 20 characters. Allowed special characters are # and spaces. The input is automatically checked by the web interface._

![Configure sensors](/docs/img/Sensor-settings.jpg)

## Sensor calibration (offset values)

The Offset 1 and Offset 2 properties are used for sensor calibration. A detailed explanation can be found in the _Sensors – Calibration_ section.

For this basic configuration, both values ​​remain unchanged at 0.00.

## Save and check sensor

By clicking on _save_ the sensor is created and then displayed in the dashboard under _Sensors_.

![Sensors Dashboard](/docs/img/Sensor-dashboard.jpg)

> **Note:**

Configuring analog PT100x sensors is done in the same way but is not covered in this basic setup.
