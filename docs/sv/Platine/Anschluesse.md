# Anslutningar

![Tavla 2](/docs/img/Anschluesse.jpg)

## Anslut GGM IDS

Standardinställningen för induktionshällen är:

| Skriv | Färg | Anslutning |
| ------------- | --------------- | ------------------------ |
| Avbryta | blå/grön | - (tomt) eller D5 |
| Kommando | gul | D6 |
| Relä | vit | D7 |
| Spänning + | röd | 5V/Vcc |
| Spänning - | svart | GND |
| |  | |

På kopplingsschemat är de 5 anslutningarna för induktionshällen märkta "GGM". GGM-anslutningskabeln från kontrollpanelen har en blå kabel, medan ersättningskabeln har en grön kabel.

Brautomat inklusive displayen kan drivas med strömförsörjningen från GGM IDS. Allt du behöver göra är att ansluta de röda och svarta kablarna till de markerade skruvterminalerna. I detta fall får inte en annan extra strömförsörjning anslutas till ESP-mikrokontrollern.

Alternativt kan Brautomat drivas med en 5V DC-strömförsörjning. I detta fall är den röda kabeln inte ansluten till GGM IDS.

## Anslut Dallas DS18B20 temperatursensorer

Brautomat stöder upp till tre DS18B20 temperatursensorer. Kontakten är märkt DS18B20-1 till DS18B20-3 på kortets illustration. Färgerna på sensorkablarna är olika. För mycket billiga sensorer utan märkning eller beskrivning är färgschemat vanligtvis svart - rött - gult.

| Skriv | Färg | Anslutning |
| ------------- | --------------- | ------------------------ |
| Spänning + | grön eller röd | Vcc |
| Datalinje | vit eller gul | Data |
| Spänning - | brun eller svart | GND |
| |  | |

Det finns ingen ordning på anslutningar för Dallas DS18B20 digitala sensorer.

## Anslut temperatursensorerna PT100x och MAX31865.

| Skriv | Anslutning |
| ------------- | ------------------------ |
| SPI klocka i | SCLK D9 |
| SDO MasterIn SlaveOut | MISO D10 |
| SDI MasterOut SlaveIn | MOSI D11 |
| Chip select pin 0 | CS0 D13 |
| Chip select pin 1 | CS1 D16 |
| Chip select pin 2 | CS2 D17 |
| Vin | 3V3 |
| GND | GND |
| | |

Sekvensen CS0 till CS2 för anslutning av PT100x-givare måste följas.

## Anslut display

| Kabel | Nextion Display | Anslutning |
| ------------- | --------------- | ------------------------ |
|     röd | Aktuell + | Vcc |
|   svart | Elektricitet - | GND |
|    blå | TX | D1 |
|    gul | RX | D2 |
|               |         |    |
