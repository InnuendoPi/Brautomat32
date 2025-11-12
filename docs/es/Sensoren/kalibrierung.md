# Calibración

Los sensores Dallas DS18B20 a veces presentan desviaciones de la temperatura real. Las especificaciones técnicas de los fabricantes suelen indicar una precisión de +-0,5°C en el rango de -10°C a 85°C. Además, los sensores se denominan calibrados.

Las desviaciones se pueden corregir mediante una calibración de 2 puntos. La calibración realizada por Brautomat es una corrección lineal. Se requiere un termómetro calibrado para calibrar los sensores. La tetera se llena con una cantidad típica de agua y se calienta a 40°C. La diferencia entre el valor del sensor y el termómetro calibrado se ingresa en el parámetro "Offset 1 \[40°C]". Este proceso se repite a 78°C y la diferencia se ingresa en el parámetro “Offset 2 \[78°C]”. En el futuro, todas las mediciones del sensor se emitirán con esta corrección.

Para la calibración, el sensor de temperatura se configura en modo de alta resolución (resolución de 12 bits o 0,0625 °C). Una calibración a través de la interfaz web consta de 60 valores medidos. El tiempo necesario para una calibración es casi exactamente 60 segundos. El resultado de la medición de la temperatura es la media de los 60 valores medidos. Una compensación es la diferencia entre la temperatura real y la media.

En muchos casos es suficiente una calibración de 1 punto en un baño de hielo, ya que el offset de los sensores DS18B20 suele ser constante.

## Procedimiento de calibración sin termómetro de referencia

Si no se dispone de un termómetro de referencia, la calibración se puede realizar utilizando un baño de hielo y un hervor.
Para el rango de medición inferior se necesita un recipiente con un 50 % de cubitos de hielo y un 50 % de agua fría. Un baño de hielo tiene una temperatura de (casi exactamente) 0,0 °C. El agua helada debe agitarse continuamente, preferiblemente con un agitador magnético. La calibración se inicia en un baño de hielo a 0 °C.

El segundo punto de calibración se puede determinar mediante la altitud sobre el nivel del mar y el punto de ebullición asociado. A 0 m sobre el nivel del mar o una presión atmosférica de 1013 bar, la temperatura de ebullición es 100,0°C. A medida que aumenta la altitud, disminuye la presión del aire y, por tanto, la temperatura de ebullición. En primer lugar hay que determinar el NHN local, por ejemplo a través de Google Earth. Por cada metro sobre el nivel del mar, la temperatura de ebullición desciende 0,003354°C. En la página web de [rechneronline](https://rechneronline.de/barometer/siedepunkt.php) se calcula el punto de ebullición en función de la altura sobre el nivel del mar. Muchos teléfonos inteligentes también ofrecen información de altitud en la brújula o en la aplicación de navegación. La altura sobre el nivel del mar debe determinarse con una precisión de aprox. +-20m. Esto corresponde a un cambio en la temperatura del punto de ebullición de 0,06708 °C y, por lo tanto, está muy fuera de la precisión del control Brautomat. La segunda calibración del punto se realiza utilizando una caldera de macerado, un agitador y el punto de ebullición local previamente determinado. Por tanto, la temperatura objetivo es la temperatura del punto de ebullición. Es importante asegurarse de alcanzar y mantener la temperatura del punto de ebullición durante al menos un minuto antes de iniciar la calibración del rango superior. También es muy importante que la placa permanezca encendida a potencia constante.

La compensación n.° 1 (rango de valores inferior) es la diferencia de 0,0 °C (baño de hielo) con respecto al valor promedio de la primera ejecución de calibración. La compensación n.º 2 (rango superior) es la diferencia entre el punto de ebullición y el promedio de la segunda ejecución de calibración.

## Procedimiento de calibración con termómetro clínico.

Un termómetro clínico es un termómetro de referencia muy adecuado. El rango de medición superior de un termómetro clínico está limitado a aprox. 40°C. La calibración corresponde al procedimiento para el baño de hielo y la temperatura de ebullición. La única diferencia: si, por ejemplo, elige 40 °C como segundo punto de calibración, la placa debe apagarse en cuanto se alcanza la temperatura objetivo y permanece constante durante aprox. 60 segundos(sin fluctuaciones). Sólo entonces se puede iniciar la calibración, es decir, el registro de 60 muestras de medición.

## Archivo de registro de calibración del sensor

Se escribe un archivo de registro para cada calibración. Ejemplo:

```texto
13:22:37 Se inició la calibración del sensor
*** Nombre del sensor: Sensor IDS2
*** Modelo: DS18B20
*** Dirección: 2827c59d0d0000b1
*** Resolución: 12 bits
*** Tiempo de espera: 750 ms
------------------------------------------------------
Compensación de diferencia real del objetivo de ID
#01 24.6000 24.0000 -0.6000 0.6000

 - Valores del sensor 2 a 59 en consecuencia

#60 24.6000 25.1875 0.5875 -0.6083
------------------------------------------------------
Temperatura de compensación #1: 24.6000
Promedio después de 60 mediciones: 25,2083
Compensación #1: -0.6083
===========================================
```
