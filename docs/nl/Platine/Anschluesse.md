# Verbindingen

![Bord 2](/docs/img/Anschluesse.jpg)

## Sluit de GGM IDS aan

De standaardinstelling voor de inductiekookplaat is:

| Typ | Kleur | Verbinding |
| ------------- | --------------- | ----------------------- |
| Onderbreken | blauw/groen | - (onbezet) of D5 |
| Commando | geel | D6 |
| relais | wit | D7 |
| Spanning + | rood | 5V/Vcc |
| Spanning - | zwart | GND |
| |  | |

Op het bedradingsschema zijn de 5 aansluitingen voor de inductiekookplaat gemarkeerd met "GGM". De GGM-aansluitkabel van het bedieningspaneel heeft een blauwe kabel, terwijl de vervangende kabel een groene kabel heeft.

De Brautomat inclusief het display kan worden bediend met de voeding van de GGM IDS. Het enige wat u hoeft te doen is de rode en zwarte kabels in de gemarkeerde schroefklemmen te steken. In dit geval mag er geen extra voeding op de ESP-microcontroller worden aangesloten.

Als alternatief kan de Brautomat worden gebruikt met een 5V DC-voeding. In dit geval is de rode kabel niet aangesloten op de GGM IDS.

## Sluit de Dallas DS18B20-temperatuursensoren aan

De Brautomat ondersteunt maximaal drie DS18B20-temperatuursensoren. De connector is op de kaartafbeelding gemarkeerd met DS18B20-1 tot DS18B20-3. De kleuren van de sensorkabels zijn verschillend. Voor zeer goedkope sensoren zonder label of beschrijving is het kleurenschema meestal zwart – rood – geel.

| Typ | Kleur | Verbinding |
| ------------- | --------------- | ----------------------- |
| Spanning + | groen of rood | Vcc |
| Datalijn | wit of geel | Gegevens |
| Spanning - | bruin of zwart | GND |
| |  | |

Er is geen volgorde van aansluitingen voor de Dallas DS18B20 digitale sensoren.

## Sluit temperatuursensoren PT100x en MAX31865 aan.

| Typ | Verbinding |
| ------------- | ----------------------- |
| SPI-klok in | SCLK D9 |
| SDO MasterIn SlaveOut | MISO D10 |
| SDI MasterOut SlaveIn | MOSI D11 |
| Chipselectiepin 0 | CS0 D13 |
| Chipselectiepin 1 | CS1 D16 |
| Chipselectiepin 2 | CS2 D17 |
| Vin | 3V3 |
| GND | GND |
| | |

Bij het aansluiten van PT100x-sensoren moet de volgorde CS0 tot CS2 in acht worden genomen.

## Scherm aansluiten

| Kabel | Nextion-display | Verbinding |
| ------------- | --------------- | ----------------------- |
|     rood | Huidig ​​+ | Vcc |
|   zwart | Elektriciteit - | GND |
|    blauw | TX | D1 |
|    geel | RX | D2 |
|               |         |    |
