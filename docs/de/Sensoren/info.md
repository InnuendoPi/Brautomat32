# Sensoren

Der Brautomat unterstützt bis zu drei Dallas DS1B20 Sensoren und PT100x Sensoren über einen MAX31865 Verstärker. Empfohlen werden Dallas DS18B20 Sensoren, da dieser Sensortyp einfacher anzuschließen ist.

## Auflösung DS18B20 Sensoren

Mit diesem Parameter kann die Auflösung der digitalen Sensoren DS18B20 eingestellt werden. Die Auswahl wird für alle DS18B20 Sensoren übernommen. Der Standardwert ist HIGH mit 12bit. Je geringer die Auflösung ist, desto schneller wird die gemessene Temperatur berechnet:

- HIGH 12bit: 750ms (0.0625°C)
- NORMAL 11bit: 375ms (0.125°C)
- LOW 10bit: 188ms (0.25°C)
- MIN 9bit: 94ms (0.5°C)
