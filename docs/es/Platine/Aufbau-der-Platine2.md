# Estructura del tablero versión 2

Esta breve guía describe la estructura del tablero. La estructura del consejo no es exigente. Esta breve descripción pretende ser una ayuda para aficionados sin experiencia y no está dirigida a ingenieros eléctricos. Puede encontrar información sobre soldadura, soldadores adecuados y soldadura en YouTube o canales similares.

La lista de piezas de la placa:

![Lista de piezas](/docs/img/Aufbau1.jpg)

Número 1: Resistencia 4,7kOhm\
Número 2: conector JST-HX (blanco) y bloque de terminales de tornillo de 5 pines\
Número 3: zumbador piezoeléctrico pasivo\
Número 4: Bloques de terminales de tornillo con un paso de 2,54 mm

## Lista de piezas para la placa versión 2

La posición del zócalo JST-HX es una alternativa al bloque de terminales de tornillo de 5 pines. El cable del panel de control del GGM IDS2 tiene el enchufe adecuado para una toma JST-HX. Si se utiliza un cable de repuesto en lugar del cable original, la conexión es más fácil con un bloque de terminales de 5 tornillos.

| Número | Nombre del artículo | Enlace al artículo |
| ----------------------------------------------- | ------------------------------ | --------------------------------- |
| 3 | Bloque de terminales de tornillo de 3 pines RM 2,54 | [amazon](https://www.amazon.de/dp/B07PH5HWQL/?coliid=I1JP3GL9UZVHAK&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 opcional | Bloque de terminales de tornillo de 3 pines RM 2,54 | |
| 1 | Bloque de terminales de tornillo de 5 pines RM 2,54 | [amazon](https://www.amazon.de/dp/B07PJ71VW8/?coliid=I3AGEWLU82MSU5&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 alternativa al bloque de terminales de tornillo de 5 pines | JST-HX casquillo 90° RM 2,54 | (voelkner D17526) |
| 2 | Bloque de terminales de tornillo de 8 pines RM 2,54 | [amazon](https://www.amazon.de/dp/B07PJ7YK3G/?coliid=I2SR2XJ0B6HEW9&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 2 | Bloque de terminales de tornillo 12 pines RM 2.54| [amazon](https://www.amazon.de/dp/B07NZ459BY/?coliid=I2HTZO5ENXO2Q6&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 | Cabezal de pasador RM 2,54 | [amazon](https://www.amazon.de/dp/B01MQ5HJYQ?ref_=pe_27091401_487187591_302_E_DDE_dt_1) |
| 1 | Resistencia 4,7kOhm | [amazon](https://www.amazon.de/dp/B0CL6N7334/?coliid=IVHTTAGFDF3TX&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1ZKFZ0X0XNS2PX9FJN3H) |
| 1 opcional | Zumbador pasivo 12mm 3V | [amazon](https://www.amazon.de/dp/B0179I6LIK/ref=pe_27091401_487027711_TE_SCE_dp_i1) |
| 1 ESP32 | ESP32 D1 mini | [amazon](https://www.amazon.de/dp/B08BTRQNB3/?coliid=I3GILWFH2TDYH9&colid=I7GQB171JGLX&ref_=list_c_wl_lv_ov_lig_dp_it&th=1) |
| 1 opcional | Pantalla Nextion de 3,5"
|                                                       |                                |                                   |

_Nota: los enlaces o números de artículos enumerados son puramente informativos y no están vinculados a programas de marketing o afiliados._

La pantalla Nextion de 3,5 pulgadas está disponible en versión Básica, Discovery o Mejorada. Se puede seleccionar el modelo más económico actualmente para Brautomat. ¡Las pantallas de 2,8 pulgadas o menos y de 4 pulgadas y más tienen una resolución de píxeles diferente y no son compatibles con Brautomat!

## Consideraciones antes de la construcción

La placa de circuito puede variar dependiendo de la conexión a la cocina de inducción.hfeld GGM IDS se puede equipar de diferentes maneras:

1.1 Se utiliza el cable original de la central GGM IDS

En este caso, se requiere el enchufe JST-HX blanco (número 2 en la imagen). Entonces no se utiliza el bloque de terminales de 5 tornillos en la imagen directamente al lado del zócalo JST-HX.

1.2 Se utiliza un cable de repuesto

En este caso no se utiliza el zócalo JST-HX blanco, sino el bloque de terminales de 5 tornillos.

Entonces, el zócalo JST-HX o el bloque de terminales de 5 tornillos se insertan en la placa.

## Inserte los bloques de terminales de tornillo

Dos notas sobre la inserción de los bloques de terminales de tornillo:

1. La apertura de los bloques de terminales de tornillo siempre mira hacia afuera (lejos de la placa de circuito).
2. Los bloques de terminales de tornillo se fijan con un punto de soldadura. A continuación se comprueba el ajuste correcto. A continuación se sueldan todos los puntos de soldadura.

A continuación, los bloques de terminales de tornillo se insertan y sueldan paso a paso.\
En el paso número 1, se insertan los dos bloques de terminales de tornillo de 12 pines. Los GPIO D9 a D19 de ESP32 están conectados a los 12 bloques de terminales de tornillo.

![Bloque de terminales de tornillo](/docs/img/Aufbau2.jpg)

Ahora dé la vuelta a la placa y fije cada bloque de terminales de tornillo con un punto de soldadura. Ahora verifique que los bloques de terminales de tornillos estén correctamente asentados. Todos los pines deben insertarse correctamente a través de los puntos de soldadura. Luego se sueldan todos los pines.

En el paso número 2, se insertan los dos bloques de terminales de tornillos de 8 pines. Los GPIO D0 a D8 de ESP32 están conectados a los 8 bloques de terminales de tornillo.

![Bloques de terminales de tornillo](/docs/img/Aufbau3.jpg)

El tablero ahora se ve así en este estado:

![Bloques de terminales de tornillo](/docs/img/Aufbau4.jpg)

En el paso número 3, se insertan y sueldan los tres bloques de terminales de 3 tornillos.

![Bloque de terminales de tornillo para sensores](/docs/img/Aufbau5.jpg)

Los sensores de temperatura DS18B20 están conectados a las tres conexiones. No existe orden ni jerarquía para estas tres conexiones. Si solo se utilizan sensores analógicos PT100x, se pueden omitir los tres bloques de terminales de tornillo.

Con la versión 2.1 de la placa, se puede utilizar un bloque de terminales de 3 tornillos opcional en la posición GND junto a los bloques de terminales de 3 tornillos para sensores. Las conexiones GND adicionales son útiles cuando se utilizan actuadores (bombas, agitadores, etc.). Si no se utilizan actuadores, se puede omitir el bloque de terminales de tornillo.

En el paso número 4, se inserta y suelda ya sea el zócalo JST-HX para el cable original o un bloque de terminales de 5 tornillos para el cable de reemplazo: (ver consideraciones antes del montaje).

![JST-HX o bloque de terminales de tornillo](/docs/img/Aufbau6.jpg)

## El zumbador piezoeléctrico

El zumbador piezoeléctrico es opcional. Este paso se puede omitir si no se desean señales acústicas.\
El zumbador piezoeléctrico tiene un polo positivo y negativo.

![Zumbador más menos](/docs/img/Aufbau8.jpg)

El polo positivo se inserta en la marca D8 y, en consecuencia, el polo negativo en la marca GND.

![Zumbador](/docs/img/Aufbau7.jpg)

## La resistencia de 4,7kOhm

La resistencia de 4,7 kOhm es obligatoria para los sensores de temperatura Dallas DS18B20. Si solo se utilizan sensores analógicos PT100x, se puede omitir la resistencia.

![Resistencia](/docs/img/Aufbau9.jpg)

Las patas de la resistencia están dobladas 90° (por ejemplo, alrededor de un destornillador plano). Luego, la resistencia se inserta en la posición denominada "4k7". No es necesario tener en cuenta la dirección. El color básico de las resistencias suele ser el azul o el color arena. Los anillos de colores muestran la resistencia eléctrica:

Resistencia de 4,7kOhm con 4 anillos: amarillo - violeta - rojo - [tolerancia]

Resistencia de 4,7kOhm con 5 anillos: amarillo - violeta - negro - marrón - [tolerancia]

![Resistencia](/docs/img/Aufbau10.jpg)

Las patas de la resistencia se doblan ligeramente hacia afuera por la parte posterior y se sueldan. Utilice cortadores laterales para cortar las patas por encima del ojo de soldadura.

## Monte el microcontrolador ESP en la basenorte

Al montar la base, el microcontrolador ESP se puede retirar de la placa en cualquier momento. El socketing también es útil para solucionar problemas.

![Enchufe](/docs/img/Aufbau14.jpg)

El volumen de suministro de los microcontroladores ESP incluye el adaptador número 1. Además, se requiere un cabezal de clavija número 2 con un paso de 2,54 mm.

![Lista de piezas](/docs/img/Aufbau11.jpg)

Para el enchufe se necesitan adaptadores y cabezales de clavija. Primero se conecta el cabezal de clavija al adaptador, como se muestra en el número 3. Luego se insertan adaptadores con tiras de clavijas en la placa de circuito, dos a la izquierda y dos a la derecha.

_Consejo: el cabezal de clavija se entrega como cabezal de 40 clavijas. La longitud total del cabezal del pasador se inserta en el adaptador. El saliente del adaptador está doblado en el extremo._

![Enchufe](/docs/img/Aufbau12.jpg)

Ahora se coloca el ESP y se fija con un punto de soldadura a cada lado. Ahora se comprueba el ajuste de las bases. A continuación se sueldan todos los puntos de soldadura.

![ESP32](/docs/img/Aufbau15.jpg)

Por último, se deben comprobar todos los puntos de soldadura. Cuando todos los puntos de soldadura estén cerrados, el Brautomat estará listo.
