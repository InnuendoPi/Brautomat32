# Connections

![Platine](/docs/img/Anschluesse.jpg)

## Induction hob GGM IDS

The default setting for the induction hob is:

| type         | color | connection  |
| ------------- | --------------- | ------------------------ |
| Interrupt     | blue/green | - (unset) or D5 |
| Command       | yellow | D6 |
| Relay         | white | D7 |
| Power +    | red  | 5V/Vcc |
| Power -    | black  | GND |
| |  | |

On the wiring diagram, the 5 connections for the induction hob are labeled “GGM”. The GGM connection cable from the control panel has a blue cable, while the replacement cable has a green cable.

The Brauomat including display can be operated with the power supply of the GGM IDS. To do this, only the red and black cables need to be plugged into the marked screw terminals. In this case, an additional power supply must not be connected to the ESP microcontroller.

Alternatively, the Brautomat can be operated with a 5V DC power supply unit. In this case, the red cable is not connected to the GGM IDS.

## Connecting Dallas DS18B20 temperature sensors

The Brautomat supports up to three DS18B20 temperature sensors. The connection is marked DS18B20-1 to DS18B20-3 on the circuit board illustration. The colors of the sensor cables are different. For very inexpensive sensors without labeling or description, the color scheme is usually black - red - yellow.

| type         | color | connection  |
| ------------- | --------------- | ------------------------ |
| Power +   | green or red | Vcc |
| Data | white or yellow | Data |
| Power -   | brown or black  | GND |
| |  | |

## Connecting PT100x sensors and MAX31865 amplifier

| type         | connection  |
| ------------- | ------------------------ |
| SPI clock in | SCLK D9 |
| SDO MasterIn SlaveOut | MISO D10 |
| SDI MasterOut SlaveIn | MOSI D11 |
| Chip select pin 0 | CS0 D13 |
| Chip select pin 1 | CS1 D16 |
| Chip select pin 2 | CS2 D17 |
| Vin | 3V3 |
| GND | GND |
| | |
