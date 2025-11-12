# Sensorer

Brautomat støtter opptil tre Dallas DS1B20-sensorer og PT100x-sensorer via en MAX31865-forsterker. Dallas DS18B20-sensorer anbefales da denne typen sensorer er lettere å koble til.

## Oppløsning DS18B20-sensorer

Denne parameteren kan brukes til å stille inn oppløsningen til de digitale sensorene DS18B20. Valget gjelder alle DS18B20-sensorer. Standardverdien er HIGH med 12bit. Jo lavere oppløsning, jo raskere beregnes den målte temperaturen:

- HØY 12bit: 750ms (0,0625 °C)
- NORMAL 11bit: 375ms (0,125°C)
- LAV 10bit: 188ms (0,25°C)
- MIN 9bit: 94ms (0,5°C)
