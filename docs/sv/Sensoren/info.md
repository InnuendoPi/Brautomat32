# Sensorer

Brautomat stöder upp till tre Dallas DS1B20-sensorer och PT100x-sensorer via en MAX31865-förstärkare. Dallas DS18B20-sensorer rekommenderas då denna typ av sensor är lättare att ansluta.

## Upplösning DS18B20-sensorer

Denna parameter kan användas för att ställa in upplösningen för de digitala sensorerna DS18B20. Valet tillämpas på alla DS18B20-sensorer. Standardvärdet är HÖG med 12 bitar. Ju lägre upplösning, desto snabbare beräknas den uppmätta temperaturen:

- HÖG 12bit: 750ms (0,0625°C)
- NORMAL 11bit: 375ms (0,125°C)
- LÅG 10bit: 188ms (0,25°C)
- MIN 9bit: 94ms (0,5°C)
