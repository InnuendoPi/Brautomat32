# Sensori

Il Brautomat supporta fino a tre sensori Dallas DS1B20 e sensori PT100x tramite un amplificatore MAX31865. Si consigliano sensori Dallas DS18B20 poiché questo tipo di sensore è più semplice da collegare.

## Risoluzione sensori DS18B20

Questo parametro può essere utilizzato per impostare la risoluzione dei sensori digitali DS18B20. La selezione viene applicata a tutti i sensori DS18B20. Il valore predefinito è ALTO con 12 bit. Minore è la risoluzione, più velocemente viene calcolata la temperatura misurata:

- ALTO 12bit: 750ms (0,0625°C)
- NORMALE 11bit: 375ms (0,125°C)
- BASSO 10bit: 188ms (0,25°C)
- MIN 9bit: 94ms (0,5°C)
