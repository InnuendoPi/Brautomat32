# Conexiones

![Tablero 2](/docs/img/Anschluesse.jpg)

## Conecte el IDS de GGM

La configuración predeterminada para la placa de inducción es:

| Tipo | Color | Conexión |
| ------------- | --------------- | ------------------------ |
| Interrumpir | azul/verde | - (desocupado) o D5 |
| Comando | amarillo | D6 |
| Relevo | blanco | D7 |
| Voltaje + | rojo | 5V/Vcc |
| Tensión - | negro | Tierra |
| |  | |

En el esquema eléctrico, las 5 conexiones de la placa de inducción están marcadas con "GGM". El cable de conexión del GGM desde la central es de color azul, mientras que el cable de repuesto es de color verde.

El Brautomat, incluida la pantalla, se puede operar con la fuente de alimentación del GGM IDS. Todo lo que tienes que hacer es enchufar los cables rojo y negro en los terminales de tornillo marcados. En este caso no se debe conectar otra fuente de alimentación adicional al microcontrolador ESP.

Alternativamente, el Brautomat se puede operar con una fuente de alimentación de 5 V CC. En este caso el cable rojo no está conectado al GGM IDS.

## Conecte los sensores de temperatura Dallas DS18B20

El Brautomat admite hasta tres sensores de temperatura DS18B20. El conector está marcado como DS18B20-1 a DS18B20-3 en la ilustración de la placa. Los colores de los cables de los sensores son diferentes. En el caso de sensores muy económicos sin rotulación ni descripción, la combinación de colores suele ser negro, rojo y amarillo.

| Tipo | Color | Conexión |
| ------------- | --------------- | ------------------------ |
| Voltaje + | verde o rojo | vcc |
| Línea de datos | blanco o amarillo | Datos |
| Tensión - | marrón o negro | Tierra |
| |  | |

No existe ningún orden de conexiones para los sensores digitales Dallas DS18B20.

## Conecte los sensores de temperatura PT100x y MAX31865.

| Tipo | Conexión |
| ------------- | ------------------------ |
| Reloj SPI en | SCLK D9 |
| SDO MasterIn EsclavoOut | MISO D10 |
| SDI MasterOut EsclavoEn | MOSI D11 |
| Pin de selección de chip 0 | CS0 D13 |
| Pin de selección de chip 1 | CS1 D16 |
| Pin de selección de chip 2 | CS2 D17 |
| vino | 3V3 |
| Tierra | Tierra |
| | |

Debe observarse la secuencia CS0 a CS2 para conectar los sensores PT100x.

## Conectar pantalla

| Cableado | Pantalla Nextion | Conexión |
| ------------- | --------------- | ------------------------ |
|     rojo | Actual + | vcc |
|   negro | Electricidad - | Tierra |
|    azul | Texas | D1 |
|    amarillo | RX | D2 |
|               |         |    |
