# Setting up the temperature sensor

## Adding a new sensor

In the "Sensors" section, a new sensor can be added by clicking the plus symbol.

![Sensoren anlegen](/docs/img/Sensor-einrichten.jpg)

## Assigning a sensor address and name

Temperature sensors of type Dallas DS18B20 have a unique address, which the firmware uses for identification. This address can be selected from the dropdown list.

If no sensor is detected:

* Click the Reload button to restart sensor detection.
* If the sensor still does not appear, check the cable connection.

Each sensor also requires a name to differentiate it from others. In this basic setup, the sensor is named "Sensor IDS2".

_Note: Sensor names can contain a maximum of 20 characters. The special characters # and spaces are allowed. The web interface automatically validates the input._

![Sensoren konfigurieren](/docs/img/Sensor-einstellungen.jpg)

## Sensor Calibration (Offset Values)

The Offset 1 and Offset 2 properties are used for sensor calibration. A detailed explanation is provided in the "Sensors – Calibration" section. For this basic setup, both values remain unchanged at 0.00.

## Saving and Verifying the Sensor

Click "Save Sensor" to add the sensor. It will then be displayed in the "Sensors" section of the dashboard.

![Sensoren Dashboard](/docs/img/Sensor-dashboard.jpg)

> **Hinweis:**\
The configuration process for analog PT100x sensors follows the same steps but is not covered in this basic setup.
