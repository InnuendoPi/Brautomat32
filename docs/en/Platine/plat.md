# The circuit board for the project

The circuit board for the Brautomat project makes it very easy to set up and operate. The GGM IDS, the sensors, the actors and the display are connected to the screw terminal blocks of the Brautomat.

The board is a breakout board for the ESP8266 and ESP32 microcontrollers. Sensors, switches etc. can be connected to the screw terminal blocks. Both boards can be used universally and are not limited to the Braautomat or MQTTDevice projects. Two connections are predefined:

* GPIO D3 with a 4k7 resistor is intended for Dallas DS18B20 type sensors.
* GPIO D8 is connected to the connection for a piezo buzzer on the board

![PCB 2](/docs/img/Platine21.jpg)

## Which ESP is the right one?

The ESP32 is recommended.

* The ESP32 compared to the ESP8266
    > offers more CPU power (dual core)\
    > offers more connections (GPIOs)\
    > offers more options for future expansions (pumps, recasting, heating elements, etc.)
