# Parámetros de la encimera

## Control de temperatura

### Potencia máxima

Este parámetro describe la potencia máxima de salida de la placa. El valor predeterminado es 100%. Este parámetro se utiliza si en la placa se utiliza un hervidor pequeño con, por ejemplo, un volumen de 20 litros. Al reducir la potencia, se puede evitar que se caliente demasiado rápido y se desborde. Los parámetros "Potencia máxima" y "Potencia de transición" se deben reducir juntos cuando se utilizan marmitas de elaboración pequeñas.

Al final de este capítulo encontrará [dos ejemplos para calcular la potencia requerida](https://innuendopi.gitbook.io/brautomat32/info-5/parameter-ggm-ids#berechnung-der-erforderlichen-leistung).

### Delta de temperatura al objetivo

Este parámetro describe la diferencia con la temperatura de reposo (punto de ajuste) a la que debe iniciarse el temporizador para descansar. El valor predeterminado es 0,3°C. En el proceso de maceración, el controlador PID permite un control de temperatura muy preciso. El controlador PID logra una temperatura de reposo con una precisión de +-0,2 °C reduciendo el suministro de energía de manera controlada antes de alcanzar la temperatura de reposo. Reducir el suministro de energía tiene el efecto secundario de que el paso final para alcanzar la temperatura de reposo lleva más tiempo. Aquí es exactamente donde entra en juego el parámetro "Delta al objetivo": por ejemplo, si se debe alcanzar una temperatura de reposo de 63 °C y la temperatura actual es de 62,7 °C, entonces el temporizador de descanso comenzaría con un delta de temperatura del objetivo de 0,3 °C. En relación con el sistema de preparación individual, se puede utilizar delta para evitar una extensión no deseada del tiempo de descanso.

### Transición a la cocción [°C]

Este parámetro describe la temperatura a la que el controlador PID debe detectar que el mosto está hirviendo. El valor predeterminado es 95°C. Este parámetro no describe la temperatura a la que el mosto comienza a hervir. Este parámetro describe la temperatura a la que Brautomat desactiva el controlador PID y controla la placa con una potencia especificada "potencia de transición". A diferencia de las temperaturas de reposo, el objetivo de la cocción no es alcanzar y mantener exactamente la temperatura, sino cocinar suavemente. Así, en lugar de reducir la potencia, la placa de inducción funciona a una potencia constante durante la cocción.

### Potencia de transición [%]

Este parámetro describe la potencia de salida de la placa desde la transición de temperatura hasta la cocción. El valor predeterminado es 100%. El parámetro "Transición a cocción" se ha utilizado para establecer una temperatura a la que se desactiva el controlador PID. El parámetro "Potencia de transición" ahora especifica la potencia de salida fija para la placa. Si se utiliza una tetera con un volumen de 35 litros o más, el valor predeterminado del 100% es una opción adecuada. En las cocinas de cervecerías con marmitas pequeñas, un suministro de energía del 100 % puede provocar un desbordamiento. En este caso, con este parámetro se puede reducir el suministro máximo de energía, por ejemplo, al 75%.

### Desactivar PID para cocinar [activar/desactivar]

Este parámetro determina el comportamiento del controlador PID al cocinar cuando la temperatura real está por encima de la temperatura objetivo. Ejemplo: la temperatura de cocción se fijó en 98°C en el plan de puré. El parámetro "Potencia de transición" desactiva el cálculo PID de la temperatura de "Transición a ebullición". Si el parámetro "Desactivar PID para hervir" está activado (predeterminado), entonces el controlador PID permanece apagado incluso por encima de la temperatura objetivo de 98 °C del plan de macerado y se utiliza la energía del parámetro "Energía de transición". Este parámetro está activado por defecto y permite la cocción rodante.

Si el parámetro "Desactivar PID para cocinar" no está activado, el controlador PID calcula la potencia requerida una vez que se alcanza la temperatura objetivo (aquí 98°C). La potencia calculada por encima de la temperatura objetivo es del 0%. La placa se apaga y evita que se desborde la cocción si es necesario.

### Rendimientoen caso de error del sensor [0-100%]

Si se produce un error en el sensor, por ejemplo un sensor no conectado o un defecto, se puede ajustar la potencia de la placa para solucionar este error. Un valor del 100% ignora el error del sensor.

Si la potencia se establece en 0% en caso de un error del sensor, Brautomat detiene el proceso de maceración. La placa está apagada. Una vez que el cronómetro de descanso ha comenzado, el cronómetro se detiene.

Brautomat inicia el manejo de errores después de 3 valores de sensor incorrectos consecutivos. Los sensores se consultan aproximadamente cada 2000 ms. Esto significa que aprox. Pasan 6 segundos entre el error del sensor del mensaje del sistema y el inicio del manejo del error.

Si un sensor defectuoso informa nuevamente los valores correctos del sensor, Brautomat continúa automáticamente el proceso de maceración.

_Nota: el máx. El parámetro de error del sensor de encendido no excede el parámetro de potencia. Por ejemplo, si máx. La potencia IDS se configuró al 75 % y la potencia en caso de error del sensor al 100 %, entonces la potencia de salida máxima efectiva es del 75 % incluso en caso de un error del sensor._

## PID Gerente

### Intervalo (Tiempo de muestra)

Este parámetro indica el intervalo de tiempo en el que se calcula la potencia requerida. El valor predeterminado es 3000 ms. El intervalo se utiliza para el cálculo del PID y en el AutoTune. En cocinas de cervecería con volúmenes pequeños puede resultar ventajoso un intervalo más corto. Cuanto menor sea el intervalo, con mayor frecuencia se calculará la potencia requerida. Esto conduce a una mayor utilización del asador automático. Rango de valores 1000 - 7000 ms.

### PID Algoritmo

Hay tres opciones para elegir.

* modo manual PID: esta selección permite el uso de sus propios valores Kp, Ki y Kd
* Modo IDS PID: esta selección calcula los valores de Kp, Ki y Kd para placas de inducción GGM IDS en base a los valores de Ku y Pu del proceso AutoTune
* Modo Relé PID: esta selección calcula los valores de Kp, Ki y Kd para placas de cocción con relé utilizando los valores Ku y Pu del proceso AutoTune.

## AutoTune

### AutoTune banda de ruido

Este parámetro se utiliza para detectar valores extremos (Max, Min). AutoTune banda de ruido indica el cambio mínimo con respecto al valor medido anterior que debe estar presente para reconocer un nuevo valor extremo. El valor predeterminado para el IDS de GGM es 0,2. Para una cocina refundida a través de un relé o SSR, el valor predeterminado es 0,5. Rango de valores: 0,1 - 1,0

### AutoTune Serie de datos (retrospectiva)

Este parámetro especifica cuántos valores medidos deben considerarse para determinar los valores extremos. El valor predeterminado es 50 lecturas. Tenga en cuenta que se pueden configurar un máximo de 100 valores medidos. Para calderas de elaboración de cerveza muy bien aisladas térmicamente, aumentar la serie de datos a 100 valores medidos puede mejorar la detección de valores extremos en la fase de enfriamiento del proceso AutoTune.

### AutoTune depurar

Este interruptor activa el protocolo AutoTune. El registro proporciona información si el proceso AutoTune no se puede completar exitosamente. Si se activa la depuración AutoTune, el protocolo también está disponible durante la preparación.

_Estos 10 parámetros deben configurarse individualmente para cada sistema de elaboración de café. Los parámetros se pueden cambiar durante un proceso de maceración. Con una prueba con una cantidad típica de agua, los parámetros se pueden determinar fácilmente antes del día de preparación._

## Perfiles

El Brautomat puede administrar perfiles de hardware. Se pueden utilizar perfiles si hay diferentes calderas. Los usuarios con hervidores de diferentes tamaños pueden usar perfiles para seleccionar el hervidor para el día de preparación en lugar de tener que volver a ingresar manualmente todos los parámetros. Un perfil de hardware contiene todos los ajustes de una caldera.

Los perfiles se guardan en la carpeta /Profiles. Los perfiles permiten un cambio rápido y sencillo entre diferentes calderas. La función Guardar crea un archivo de perfil con den los parámetros anteriores, mientras que la función Eliminar elimina el archivo de perfil de la memoria flash.

El perfil predeterminado al iniciar la máquina de hacer pan es siempre el último perfil seleccionado.

## Cálculo de la potencia requerida.

_El siguiente párrafo describe un tema opcional._

Al macerar, se desea un aumento de la temperatura del macerado de 1°C por minuto. La potencia P requerida del GGM IDS se puede calcular de la siguiente manera:

potencia requerida P = m[kg] * 75\
Rendimiento actual del GGM IDS P = 3500\
Factorizar en porcentaje = rendimiento requerido: rendimiento existente

### Ejemplo 1

En el primer ejemplo hay un llenado de 9 kg y un vertido principal de 35 l. Esto da como resultado una masa total de

```json
metro = 9 + 35 = 44
```

Sustituimos la masa m = 44 en la fórmula simplificada:

```json
PAG = 44 * 75 = 3300
```

Se requieren aproximadamente 3300 W/min para calentar un volumen de 44 kg a 1 °C por minuto. Si el GGM IDS funciona con el 100% de potencia, es decir, 3500W, la diferencia de temperatura de 1°C en el mosto se logra en menos de 60 segundos. Para alcanzar el objetivo de aumentar la temperatura del macerado en 1°C por minuto, se debe reducir el rendimiento máximo del GGM IDS:

```json
3300: 3500 = 0,94 que corresponde al 94%
```

El GGM IDS debería funcionar con aprox. 94-95% de potencia (función especial IDS:94).

### Ejemplo 2

En el segundo ejemplo hay un llenado de 5,9 kg y un vertido principal de 26,5 l. La masa total es 32,4 kg.

```json
metro = 5,9 + 26,5 = 32,4
```

Sustituimos la masa m = 32,4 en la fórmula simplificada:

```json
P = 32,4 * 75 = 2430
2430: 3500 = 0,69
```

Se necesitan aproximadamente 2430 W/min para calentar un volumen de 32,4 kg a 1 °C por minuto. El GGM IDS debería funcionar con aprox. 69-70% de potencia (función especial IDS:70).

### Masa de simplificación * 75?

```json
P = m[kg] * c * T / (t * w)
```

m corresponde a la masa de la pieza principal + relleno\
c corresponde a la capacidad calorífica específica del puré. Se utiliza el valor 3600 (unidad Joule/(kg * °C))\
T corresponde a la diferencia de temperatura. Usamos una diferencia de 1°C\
t corresponde al tiempo. Ponemos 60 segundos en la ecuación como tiempo\
w la eficiencia de inducción (80-90%). El valor 0,8 se inserta en la ecuación.

```json
c * T / (t * w) = 3600 * 1 / (60 * 0,8) = 75
```

Con esta simplificación obtenemos el valor 75.

### capacidad calorífica específica

La capacidad calorífica específica utilizada aquí 3600 tiene una tolerancia de error de aproximadamente el 2% (dependiendo de la temperatura y el extracto). La harina de malta tiene una capacidad calorífica de 1570 J/(kg*°C), el agua tiene una capacidad calorífica de 4190 J/(kg*°C) en el rango de temperatura de 50-80°C. Suponiendo que el contenido de agua en la harina de malta es del 6%: (Cifras del ejemplo 1)

```json
9 * 94% * 1570 + (35 + 9 * 6%) * 4190 = 8,97 * 1,57 + 35,54 * 4,19 = 14,08 + 148,91 = 13282,2 + 148912,6 = 162194,8 / 44 = 3686,25 J por kg por grado Celsius
```

Véase también [Revista cervecera](https://braumagazin.de/article/berechnungen-in-der-brauerei/)
