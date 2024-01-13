# Anschlüsse

![Platine](/docs/img/Anschluesse.jpg)

## Die GGM IDS anschließen

Die Voreinstellung für das Induktionskochfeld lautet:

| Typ         | Farbe | Anschluss  |
| ------------- | --------------- | ------------------------ |
| Interrupt     | blau/grün | D5 |
| Command       | gelb | D6 |
| Relay         | weiß | D7 |
| Spannung +    | rot  | 5V/Vcc |
| Spannung -    | schwarz  | GND |
| |  | |

Auf der Platinenabbildung sind die 5 Anschlüsse für das Induktionskochfeld mit "GGM" markiert. Das GGM Anschlusskabel vom Bedienfeld hat ein blaues Kabel, während das Ersatzkabel ein grünes Kabel hat.

Der Brautomat kann inklusive Display mit der Spannungsversorgung von der GGM IDS betrieben werden. Hierzu müssen lediglich das rote und das schwarze Kabel in die markierten Schraubklemmen eingesetzt werden. Eine weitere zus. Spannungsversorgung darf in dem Fall nicht an den ESP Mikrocontroller angeschlossen werden.

Alternativ kann der Brautomat mit einem 5V DC Netzteil betrieben werden. In diesem Fall wird das rote Kabel von der GGM IDS nicht angeschlossen.

## Temperatursensoren Dallas DS18B20 anschließen

Der Brautomat unterstützt bis zu drei Temperatursensoren DS18B20. Der Anschluss ist auf der Platinenabbildung mit DS18B20-1 bis DS18B20-3 markiert. Die Farben der Sensorkabel sind unterschiedlich. Bei sehr günstigen Sensoren ohne Beschriftung oder Beschreibung ist die Farbgebung meist schwarz - rot - gelb.

| Typ         | Farbe | Anschluss  |
| ------------- | --------------- | ------------------------ |
| Spannung +   | grün oder rot | Vcc |
| Datenleitung | weiß oder gelb | Data |
| Spannung -   | braun oder schwarz  | GND |
| |  | |

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
