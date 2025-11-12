# Połączenia

![Tablica 2](/docs/img/Anschluesse.jpg)

## Podłącz identyfikator GGM

Domyślne ustawienie dla płyty indukcyjnej to:

| Wpisz | Kolor | Połączenie |
| --------- | --------------- | ------------------------ |
| Przerwij | niebieski/zielony | - (wolny) lub D5 |
| Polecenie | żółty | D6 |
| Przekaźnik | biały | D7 |
| Napięcie + | czerwony | 5V/Vcc |
| Napięcie - | czarny | GND |
| |  | |

Na schemacie połączeń 5 połączeń płyty indukcyjnej jest oznaczonych jako „GGM”. Kabel połączeniowy GGM z centrali ma kabel niebieski, natomiast kabel zamienny ma kabel zielony.

Brautomat wraz z wyświetlaczem może być zasilany z zasilacza GGM IDS. Wystarczy podłączyć czerwony i czarny kabel do oznaczonych zacisków śrubowych. W takim przypadku do mikrokontrolera ESP nie wolno podłączać kolejnego dodatkowego zasilania.

Alternatywnie, Brautomat może być zasilany napięciem stałym 5V. W tym przypadku czerwony kabel nie jest podłączony do GGM IDS.

## Podłącz czujniki temperatury Dallas DS18B20

Brautomat obsługuje do trzech czujników temperatury DS18B20. Złącze jest oznaczone na ilustracji płytki jako DS18B20-1 do DS18B20-3. Kolory kabli czujników są różne. W przypadku bardzo tanich czujników bez oznakowania i opisu, kolorystyka jest zwykle czarno-czerwono-żółta.

| Wpisz | Kolor | Połączenie |
| --------- | --------------- | ------------------------ |
| Napięcie + | zielony lub czerwony | Vcc |
| Linia danych | biały lub żółty | Dane |
| Napięcie - | brązowy lub czarny | GND |
| |  | |

Nie ma kolejności podłączania czujników cyfrowych Dallas DS18B20.

## Podłącz czujniki temperatury PT100x i MAX31865.

| Wpisz | Połączenie |
| --------- | ------------------------ |
| Zegar SPI w | SCLK D9 |
| SDO MasterIn SlaveOut | MISO D10 |
| SDI MasterOut SlaveIn | MOSI D11 |
| Chip wybierz pin 0 | CS0 D13 |
| Chip wybierz pin 1 | CS1 D16 |
| Chip wybierz pin 2 | CS2 D17 |
| Wina | 3V3 |
| GND | GND |
| | |

Należy zachować kolejność CS0 do CS2 przy podłączaniu czujników PT100x.

## Podłącz wyświetlacz

| Kabel | Następny wyświetlacz | Połączenie |
| --------- | --------------- | ------------------------ |
|     czerwony | Aktualny + | Vcc |
|   czarny | Elektryczność - | GND |
|    niebieski | Teksas | D1 |
|    żółty | Odbiór | D2 |
|               |         |    |
