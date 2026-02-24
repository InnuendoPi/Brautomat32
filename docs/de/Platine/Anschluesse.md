# Anschlüsse

![Platine 2](/docs/img/Anschluesse.jpg)

## Die GGM IDS anschließen

Die Voreinstellung für das Induktionskochfeld lautet:

| Typ         | Farbe | Anschluss  |
| ------------- | --------------- | ------------------------ |
| Interrupt     | blau/grün | - (unbelegt) |
| Command       | gelb | D6 |
| Relay         | weiß | D7 |
| Spannung +    | rot  | 5V/Vcc |
| Spannung -    | schwarz  | GND |
| |  | |

Auf dem Schaltplan sind die 5 Anschlüsse für das Induktionskochfeld mit "GGM" gekennzeichnet. Das GGM-Anschlusskabel vom Bedienfeld hat ein blaues Kabel, während das Ersatzkabel ein grünes Kabel hat.

Hinweis: Der Interrupt-Anschluss ist optional und für den normalen Braubetrieb nicht erforderlich. Er wird nur für spezielle Fehlersuche genutzt.

Der Brautomat inklusive Display kann mit der Spannungsversorgung der GGM IDS betrieben werden. Dazu müssen nur das rote und das schwarze Kabel in die gekennzeichneten Schraubklemmen gesteckt werden. Eine weitere zusätzliche Spannungsversorgung darf in diesem Fall nicht an den ESP-Mikrocontroller angeschlossen werden.

Alternativ kann der Brautomat mit einem 5V DC Netzteil betrieben werden. In diesem Fall wird das rote Kabel nicht mit dem GGM IDS verbunden.

## Temperatursensoren Dallas DS18B20 anschließen

Der Brautomat unterstützt bis zu drei Temperatursensoren DS18B20. Der Anschluss ist auf der Platinenabbildung mit DS18B20-1 bis DS18B20-3 markiert. Die Farben der Sensorkabel sind unterschiedlich. Bei sehr günstigen Sensoren ohne Beschriftung oder Beschreibung ist die Farbgebung meist schwarz - rot - gelb.

| Typ         | Farbe | Anschluss  |
| ------------- | --------------- | ------------------------ |
| Spannung +   | grün oder rot | Vcc |
| Datenleitung | weiß oder gelb | Data |
| Spannung -   | braun oder schwarz  | GND |
| |  | |

Es gibt keine Reihenfolge bei den Anschlüssen für die digitalen Sensoren Dallas DS18B20.

## Temperatursensoren PT100x und MAX31865 anschließen

| Typ         | Anschluss  |
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

Die Reihenfolge CS0 bis CS2 für den Anschluss von analogen Sensoren PT100x muss beachtet werden.

## Display anschließen

| Kabel         | Nextion Display | Anschluss |
| ------------- | --------------- | ------------------------ |
|     rot       | Strom + | Vcc |
|   schwarz     | Strom - | GND |
|    blau       | TX      | D1 |
|    gelb       | RX      | D2 |
|               |         |    |
