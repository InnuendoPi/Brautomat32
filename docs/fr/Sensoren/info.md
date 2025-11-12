# Capteurs

Le Brautomat prend en charge jusqu'à trois capteurs Dallas DS1B20 et capteurs PT100x via un amplificateur MAX31865. Les capteurs Dallas DS18B20 sont recommandés car ce type de capteur est plus facile à connecter.

## Résolution des capteurs DS18B20

Ce paramètre peut être utilisé pour définir la résolution des capteurs numériques DS18B20. La sélection est appliquée à tous les capteurs DS18B20. La valeur par défaut est HIGH avec 12 bits. Plus la résolution est faible, plus la température mesurée est calculée rapidement :

- ÉLEVÉ 12 bits : 750 ms (0,0625°C)
- NORMAL 11 bits : 375 ms (0,125°C)
- BAS 10 bits : 188 ms (0,25°C)
-MIN 9 bits : 94 ms (0,5 °C)
