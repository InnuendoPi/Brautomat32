# Mostrar

El Brautomat opcionalmente se puede operar con una pantalla táctil. Se admite la pantalla táctil de 3,5 pulgadas de Nextion

| Pantalla Nextion | firmware |
| --------------- | --------- |
| NX4832T035 (Serie Básica) | [NX4832T035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/Brautomat-NX4832T035.tft) |
| NX4832K035 (Serie mejorada) | [NX4832K035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/Brautomat-NX4832K035.tft) |
| NX4832F035 (Serie Descubrimiento) | [NX4832F035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/Brautomat-NX4832F035.tft) |

La pantalla requiere firmware para funcionar con Brautomat. El firmware que coincide con el tipo de pantalla está vinculado en la tabla. Consulte también flashear el archivo de visualización.

## Conectar pantalla

La pantalla está conectada a la placa con 4 cables.

| Cableado | Pantalla Nextion | Tablero de terminales de conexión |
| ------------- | --------------- | ------------------------ |
|     rojo | Actual + | vcc |
|   negro | Electricidad - | Tierra |
|    azul | Texas | SDL (D1) |
|    amarillo | RX | ASD (D2) |

![Conexión](/docs/img/disp1.jpg)

## Archivo de visualización flash

La pantalla debe prepararse antes de la operación inicial. Para hacer esto, se descarga el firmware de pantalla apropiado de la tabla y se guarda en una tarjeta microSD. La tarjeta microSD se inserta en la ranura para tarjetas SD en la pantalla y Brautomat se enciende. El proceso de flasheo comienza automáticamente. El estado del flash se muestra en la pantalla. Una vez completado, Brautomat se apagará y se retirará la tarjeta microSD. La tarjeta microSD no es necesaria para el funcionamiento normal.

## Ver puré de cerveza

![MaischeSud](/docs/img/brewpage-sm.jpg)

El lado MashSud es el lado preferido al preparar cerveza. La información se muestra en la pantalla cada segundo.

* Temperatura real
* Temperatura objetivo (temperatura de reposo)
* tiempo de descanso restante

mostrado. El resto siguiente también se muestra en la línea inferior. La hora de la izquierda es la hora a la que comenzará el siguiente descanso. El símbolo de reproducción verde a la derecha indica que el siguiente descanso comienza automáticamente (autonext).

## Ver descripción general de la caldera

![Descripción general del hervidor](/docs/img/kettlepage-sm.jpg)

La descripción general de la caldera muestra la caldera de preparación de puré y, si está disponible, la caldera de preparación y vertido con información sobre la temperatura real y objetivo.

_Nota: la vista general de la caldera muestra la dirección de Brautomat en la línea inferior: ya sea el nombre mDNS o la dirección IP._

## Vista de control manual

![Control manual](/docs/img/induction-mode-sm.jpg)

La página de control manual ofrece la opción de operar el GGM IDS manualmente. Los niveles de potencia se pueden ajustar hacia arriba o hacia abajo usando los botones + y -.
