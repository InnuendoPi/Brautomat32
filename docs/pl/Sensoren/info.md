# Czujniki

Brautomat obsługuje do trzech czujników Dallas DS1B20 i czujników PT100x poprzez wzmacniacz MAX31865. Zalecane są czujniki Dallas DS18B20, ponieważ tego typu czujniki są łatwiejsze do podłączenia.

## Rozdzielczość czujników DS18B20

Za pomocą tego parametru można ustawić rozdzielczość czujników cyfrowych DS18B20. Wybór dotyczy wszystkich czujników DS18B20. Wartość domyślna to WYSOKA i 12 bitów. Im niższa rozdzielczość, tym szybciej obliczana jest zmierzona temperatura:

- WYSOKI 12 bitów: 750 ms (0,0625°C)
- NORMALNY 11 bitów: 375 ms (0,125°C)
- NISKI 10 bitów: 188 ms (0,25°C)
-MIN. 9 bitów: 94 ms (0,5°C)
