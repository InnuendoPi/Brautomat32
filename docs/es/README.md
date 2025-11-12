# El Brautomat

![ESP32](https://img.shields.io/static/v1?label=Arduino&message=ESP32&logo=arduino&logoColor=white&color=blue)

El Brautomat es un control de preparación para el ESP32 D1 mini. El Brautomat se utiliza en la sala de cocción y ofrece un control intuitivo y fácil de usar. Durante la maceración se alcanzan automáticamente las temperaturas de reposo y se respetan los tiempos de reposo. El Brautomat también admite hervir mosto y agregar lúpulo e ingredientes. En el proceso de infusión ascendente, Brautomat puede automatizar completamente el proceso de maceración.

> **Nota:**
Esta página se tradujo automáticamente desde la documentación original en alemán.
\
Estas instrucciones se amplían, corrigen o mejoran constantemente. Originalmente, en el proyecto Brautomat sólo se podía controlar la placa de inducción GGM IDS2. A partir de la versión 1.48 también se pueden conectar otras placas en modo relé. Las instrucciones describen en muchos lugares las funciones con un GGM IDS. Sólo el modo manual es adecuado exclusivamente para el GGM IDS2. Todas las demás funciones y opciones también están disponibles para otras placas.

 ---

## Diseño de esta guía

Estas instrucciones no están en ningún orden y no es necesario leerlas de arriba a abajo. Se recomienda el área temática _Software_, especialmente el capítulo _El plan de mezcla_, para ingresar en el Brautomat. El capítulo _El plan de macerado_ incluye un ejemplo de día de elaboración al final de las explicaciones de las funciones.

Esta guía se divide en tres áreas temáticas:

* Software: el uso del firmware Brautomat
  * Instalación
  * Configuración básica
  * El plan de puré
  * AutoTune PID
  * Sensores, hervidores de cerveza, recambios y actuadores.
  * Modo fermentador
* Hardware: la placa de circuito y las extensiones apropiadas.
  * La estructura y las conexiones de la placa de circuito.
  * La pantalla
  * Vivienda 3D
  * hardware adicional
* Información y preguntas frecuentes
  * pequeño ayudante de elaboración de cerveza2
  * el dispositivo MQTT

El área temática _Software_ finaliza con un resumen _Parámetros de un vistazo_. Se proporcionan detalles e información para muchos parámetros para simplificar la configuración y el uso.

## Brautomat Versión de lanzamiento

La versión de lanzamiento de Brautomat está compilada con el marco estable actual espressif. Esta versión es para uso productivo. La versión de lanzamiento se proporciona sin el módulo de registro. La versión es un poco más rápida. Se debe utilizar preferentemente la versión de lanzamiento.

## Brautomat Versión de desarrollo

La versión de desarrollo de Brautomat está compilada con el marco esspressif actual. Esta versión se proporciona con el módulo de registro. Las nuevas funciones y correcciones de errores se publican por primera vez en la versión de desarrollo. Esta versión se puede utilizar de forma productiva, pero no se recomienda.
