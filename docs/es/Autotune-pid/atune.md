# AutoTune proceso

El proceso AutoTune determina los parámetros adecuados para el sistema de elaboración de cerveza, de modo que el control de temperatura en el proceso de maceración se pueda realizar con la mayor precisión posible. La atención se centra en las temperaturas REALES y las temperaturas OBJETIVOS correspondientes. En la práctica, esto significa que se deben minimizar los excesos y los déficits.

Nota: Un exceso (superación de la temperatura de referencia) de 0,5 °C es normal. Dependiendo del aislamiento de la caldera y de la energía de inducción suministrada, la temperatura seguirá aumentando ligeramente incluso después de apagar la placa.

![AutoTune4](/docs/img/IDS-AutoTune-target.jpg)

La siguiente descripción de los valores PID está destinada únicamente a ser una ayuda para el uso del firmware y se puede omitir. El proceso AutoTune se describe a partir de "El proceso AutoTune: paso a paso."\
El controlador PID controla el rendimiento de las placas. Es importante determinar los valores P, I y D apropiados. Los valores de PID son ​​individuales para cada sistema y entorno de elaboración de cerveza. AutoTune es un procedimiento que ayuda a determinar los valores adecuados. La potencia requerida de las placas de cocción para pasar de la temperatura real a la temperatura objetivo se calcula a partir de la suma de los tres valores: Potencia requerida = P + I + D\
Una vez que se han determinado los valores PID adecuados, el parámetro Intervalo (SampleTime) se utiliza para determinar los intervalos de tiempo en los que se debe calcular el rendimiento requerido.

## El valor P

Este parámetro afecta la diferencia entre la temperatura real y la objetivo. Cuanto mayor sea la diferencia entre la temperatura real y la teórica, más se calentará la placa con componente P. Si se alcanza o supera la temperatura objetivo, el componente P es igual a 0. Un valor P muy alto provoca un fuerte sobrepaso o falta de alcance.

## El yo valoro

El valor I aumenta continuamente a partir de cero a medida que la placa se calienta. Cuanto más tiempo tarda el ochfeld en pasar de la temperatura real a la temperatura objetivo, mayor será el valor I. Junto con el valor P se obtiene la siguiente suma: a medida que se acerca la temperatura objetivo, el valor P disminuye y el valor I aumenta. La temperatura objetivo sólo se alcanza mediante el valor I. Por encima de la temperatura objetivo, el valor I vuelve a ser menor. El valor I crea un exceso.

## El valor D

El valor D es un amortiguador que amortigua las oscilaciones de las dos primeras partes P e I. Demasiado D ralentiza el calentamiento y el enfriamiento. Este valor también puede ser cero.

## Intervalo (Tiempo de muestra)

El cálculo de PID se produce continuamente. El intervalo describe el ciclo. En cada intervalo se determina continuamente la diferencia entre la temperatura real y la temperatura nominal, así como la variación de la temperatura real. Un intervalo demasiado pequeño (p. ej. 1000 ms) provoca una "oscilación" de la temperatura real en el sentido de errores de redondeo +- 0,0625 °C con una resolución de 12 bits. Un intervalo demasiado grande (por ejemplo, 7000 ms) provoca un comportamiento lento. Un intervalo de 2000 ms o 3000 ms debería funcionar bien en la mayoría de los entornos. Sólo se puede utilizar un múltiplo de 1000 ms como tamaño de intervalo (1000, 2000, ... 7000).
