# Configuración del sensor de temperatura

## Agregar nuevo sensor

En la sección _Sensores_, se puede agregar un nuevo sensor haciendo clic en el símbolo más.

![Crear sensores](/docs/img/Sensor-setup.jpg)

## Establecer dirección y nombre del sensor

Los sensores de temperatura Dallas DS18B20 tienen una dirección única que el firmware utiliza para su identificación. La dirección del sensor se lee automáticamente. Si hay más de un sensor conectado, la dirección del sensor se puede seleccionar de la lista de selección.

Si no se muestra ningún sensor:

* La detección de los sensores se puede reiniciar mediante el botón de recarga.
* Si aún no se detecta ningún sensor, se debe verificar la conexión del cable.

Cada sensor necesita un nombre. En esta configuración básica, el sensor se llama "Sensor IDS2".  llamado.

_Nota: Los nombres de los sensores pueden contener un máximo de 20 caracteres. Los caracteres especiales permitidos son # y espacios. La entrada es verificada automáticamente por la interfaz web._

![Configurar sensores](/docs/img/Sensor-settings.jpg)

## Calibración del sensor (valores de compensación)

Las propiedades Offset 1 y Offset 2 se utilizan para la calibración del sensor. Puede encontrar una explicación detallada en la sección _Sensores – Calibración_.

Para esta configuración básica, ambos valores se mantienen sin cambios en 0,00.

## Guardar y verificar el sensor

Al hacer clic en _guardar_, se crea el sensor y luego se muestra en el panel en _Sensores_.

![Panel de sensores](/docs/img/Sensor-dashboard.jpg)

> **Nota:**

La configuración de los sensores analógicos PT100x se realiza de la misma manera, pero no se trata en esta configuración básica.
