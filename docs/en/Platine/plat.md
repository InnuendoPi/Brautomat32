# The board for the project

The Brautomat board simplifies setup and wiring of the whole system. Sensors,
actuators, display, and heating devices are connected via the screw terminals
or the dedicated connectors on the board. GGM IDS systems use specific
connection paths, while relay-driven heaters are wired more directly.

The board is a breakout board for the microcontrollers ESP8266 and ESP32. Sensors, switches, etc. can be connected to the screw terminal blocks. Both boards can be used universally and are not limited to the Braautomat or MQTTDevice projects. Two connections are fixed:

* GPIO D3 with a 4k7 resistor is intended for Dallas DS18B20 sensors.
* GPIO D8 is connected to the connection for a piezo buzzer on the board

![Board 2](/docs/img/Platine21.jpg)
