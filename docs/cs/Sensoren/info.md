# Senzory

Brautomat podporuje až tři senzory Dallas DS1B20 a senzory PT100x prostřednictvím zesilovače MAX31865. Doporučují se snímače Dallas DS18B20, protože tento typ snímače se snáze připojuje.

## Rozlišení snímačů DS18B20

Tento parametr lze použít k nastavení rozlišení digitálních snímačů DS18B20. Výběr se aplikuje na všechny snímače DS18B20. Výchozí hodnota je HIGH s 12bit. Čím nižší je rozlišení, tím rychleji se vypočítá naměřená teplota:

- VYSOKÉ 12bit: 750 ms (0,0625 °C)
- NORMÁLNÍ 11bit: 375 ms (0,125 °C)
- LOW 10bit: 188 ms (0,25 °C)
- MIN 9bit: 94 ms (0,5 °C)
