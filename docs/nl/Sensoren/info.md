# Sensoren

De Brautomat ondersteunt maximaal drie Dallas DS1B20-sensoren en PT100x-sensoren via een MAX31865-versterker. Dallas DS18B20-sensoren worden aanbevolen omdat dit type sensor eenvoudiger aan te sluiten is.

## Resolutie DS18B20-sensoren

Met deze parameter kan de resolutie van de digitale sensoren DS18B20 worden ingesteld. De selectie wordt toegepast op alle DS18B20-sensoren. De standaardwaarde is HOOG met 12 bit. Hoe lager de resolutie, hoe sneller de gemeten temperatuur wordt berekend:

- HOOG 12 bit: 750 ms (0,0625°C)
- NORMAAL 11bit: 375 ms (0,125°C)
- LAAG 10 bit: 188 ms (0,25 °C)
- MIN 9 bit: 94 ms (0,5 °C)
