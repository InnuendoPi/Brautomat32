# Connections

![Board 2](/docs/img/Anschluesse.jpg)

## Connect the GGM IDS

The default setting for the induction hob is:

| Type | Color | Connection |
| ------------- | --------------- | ------------------------ |
| Interrupt | blue/green | - (unoccupied) or D5 |
| Command | yellow | D6 |
| Relay | white | D7 |
| Voltage + | red | 5V/Vcc |
| Tension - | black | GND |
| |  | |

On the wiring diagram, the 5 connections for the induction hob are marked "GGM". The GGM connection cable from the control panel has a blue cable, while the replacement cable has a green cable.

The Brautomat including the display can be operated with the power supply of the GGM IDS. All you have to do is plug the red and black cables into the marked screw terminals. In this case, another additional power supply must not be connected to the ESP microcontroller.

Alternatively, the Brautomat can be operated with a 5V DC power supply. In this case the red cable is not connected to the GGM IDS.

## Connect Dallas DS18B20 temperature sensors

The Brautomat supports up to three DS18B20 temperature sensors. The connector is marked DS18B20-1 to DS18B20-3 on the board illustration. The colors of the sensor cables are different. For very cheap sensors without labeling or description, the color scheme is usually black - red - yellow.

| Type | Color | Connection |
| ------------- | --------------- | ------------------------ |
| Voltage + | green or red | Vcc |
| Data line | white or yellow | Data |
| Tension - | brown or black | GND |
| |  | |

There is no order of connections for the Dallas DS18B20 digital sensors.

## Connect temperature sensors PT100x and MAX31865.

| Type | Connection |
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

The sequence CS0 to CS2 for connecting PT100x sensors must be observed.

## Connect display

| Cable | Nextion Display | Connection |
| ------------- | --------------- | ------------------------ |
|     red | Current + | Vcc |
|   black | Electricity - | GND |
|    blue | TX | D1 |
|    yellow | RX | D2 |
|               |         |    |
