# Sensores

El Brautomat admite hasta tres sensores Dallas DS1B20 y sensores PT100x a través de un amplificador MAX31865. Se recomiendan los sensores Dallas DS18B20 ya que este tipo de sensor es más fácil de conectar.

## Resolución de sensores DS18B20

Este parámetro se puede utilizar para configurar la resolución de los sensores digitales DS18B20. La selección se aplica a todos los sensores DS18B20. El valor predeterminado es ALTO con 12 bits. Cuanto menor sea la resolución, más rápido se calculará la temperatura medida:

- ALTO 12 bits: 750 ms (0,0625 °C)
- NORMAL 11 bits: 375 ms (0,125°C)
- BAJO 10 bits: 188 ms (0,25 °C)
- MÍNIMO 9 bits: 94 ms (0,5 °C)
