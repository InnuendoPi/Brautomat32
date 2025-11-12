# Tilkoblinger

![Tavle 2](/docs/img/Anschluesse.jpg)

## Koble til GGM IDS

Standardinnstillingen for induksjonstoppen er:

| Skriv inn | Farge | Tilkobling |
| ------------- | --------------- | -------------------------- |
| Avbryte | blå/grønn | - (tom) eller D5 |
| Kommando | gul | D6 |
| Stafett | hvit | D7 |
| Spenning + | rød | 5V/Vcc |
| Spenning - | svart | GND |
| |  | |

På koblingsskjemaet er de 5 koblingene for induksjonstoppen merket "GGM". GGM-tilkoblingskabelen fra sentralen har blå kabel, mens erstatningskabelen har grønn kabel.

Brautomat inkludert skjermen kan betjenes med strømforsyningen til GGM IDS. Alt du trenger å gjøre er å plugge de røde og svarte kablene inn i de merkede skruklemmene. I dette tilfellet må en annen ekstra strømforsyning ikke kobles til ESP-mikrokontrolleren.

Alternativt kan Brautomat drives med en 5V DC strømforsyning. I dette tilfellet er ikke den røde kabelen koblet til GGM IDS.

## Koble til Dallas DS18B20 temperatursensorer

Brautomat støtter opptil tre DS18B20 temperatursensorer. Kontakten er merket DS18B20-1 til DS18B20-3 på kortets illustrasjon. Fargene på sensorkablene er forskjellige. For veldig billige sensorer uten merking eller beskrivelse er fargevalget vanligvis svart – rød – gul.

| Skriv inn | Farge | Tilkobling |
| ------------- | --------------- | -------------------------- |
| Spenning + | grønn eller rød | Vcc |
| Datalinje | hvit eller gul | Data |
| Spenning - | brun eller svart | GND |
| |  | |

Det er ingen rekkefølge på tilkoblinger for Dallas DS18B20 digitale sensorer.

## Koble til temperatursensorene PT100x og MAX31865.

| Skriv inn | Tilkobling |
| ------------- | -------------------------- |
| SPI-klokke i | SCLK D9 |
| SDO MasterIn SlaveOut | MISO D10 |
| SDI MasterOut SlaveIn | MOSI D11 |
| Chip select pin 0 | CS0 D13 |
| Chip select pin 1 | CS1 D16 |
| Chip select pin 2 | CS2 D17 |
| Vin | 3V3 |
| GND | GND |
| | |

Sekvensen CS0 til CS2 for tilkobling av PT100x-sensorer må overholdes.

## Koble til skjermen

| Kabel | Nextion Display | Tilkobling |
| ------------- | --------------- | -------------------------- |
|     rød | Nåværende + | Vcc |
|   svart | Elektrisitet - | GND |
|    blå | TX | D1 |
|    gul | RX | D2 |
|               |         |    |
