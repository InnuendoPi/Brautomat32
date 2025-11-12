# Sensores

O Brautomat suporta até três sensores Dallas DS1B20 e sensores PT100x por meio de um amplificador MAX31865. Os sensores Dallas DS18B20 são recomendados porque este tipo de sensor é mais fácil de conectar.

## Sensores de resolução DS18B20

Este parâmetro pode ser utilizado para definir a resolução dos sensores digitais DS18B20. A seleção é aplicada a todos os sensores DS18B20. O valor padrão é ALTO com 12 bits. Quanto menor a resolução, mais rápido a temperatura medida é calculada:

- ALTO 12 bits: 750ms (0,0625°C)
- NORMAL 11 bits: 375ms (0,125°C)
- BAIXO 10 bits: 188ms (0,25°C)
MÍNIMO 9 bits: 94ms (0,5°C)
