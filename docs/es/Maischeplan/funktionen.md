# Características

En la siguiente descripción se utiliza una _receta de ejemplo inventada_. Esta descripción no contiene la receta, pero sí el procedimiento para macerar con el Brautomat.

El plan de macerado tiene forma de mesa. Esta mesa es procesada de arriba a abajo por el sistema de elaboración de cerveza en un día de elaboración de cerveza. En la receta de ejemplo, la línea _Mashing 50°C_ es el primer paso de maceración y _WHP Hallertau Tradition_ es el último paso de maceración. Una función muy importante en el plan combinado es la propiedad en la columna _autoext_.

## Funciones básicas

![Plan combinado](/docs/img/Brautomat.jpg)

A modo de orientación, se describe en primer lugar la estructura de las filas de la tabla. Una fila en el plan de mezcla representa un paso en el plan de mezcla. Cada fila de la tabla tiene estas columnas:

* La columna "Rest" muestra un nombre para este paso de puré.
* La columna "Temperatura" contiene la temperatura en reposo (también llamada temperatura objetivo o objetivo en este manual).
* La columna "Duración" contiene el tiempo de descanso (temporizador), cuánto tiempo el Brautomat debe mantener la temperatura de descanso.
* La columna "autoext" indica si el siguiente paso continuará automáticamente después de que haya expirado el tiempo de descanso (temporizador).

Después de estos cuatro detalles sobre el paso de maceración, hay botones de edición en cada línea con las siguientes funciones: (de izquierda a derecha)

![Editar plan combinado](/docs/img/Brautomat-111.jpg)

* mover esta línea hacia arriba una posición
* mover esta línea hacia abajo una posición
* editar esta línea
* eliminar esta línea

El encabezado de la tabla contiene los siguientes botones (de izquierda a derecha)

![Editar plan combinado](/docs/img/Brautomat-1.jpg)

* nueva línea: agrega un nuevo paso de mezcla al final de la tabla
* Eliminar: eliminar toda la tabla (plan de mezcla vacío)
* Recargar: vuelve a leer la receta del archivo. Los cambios no se guardan. El botón se muestra en azul.
* Base de datos: selección de planes de mezcla, importación, exportación y programador de planes de mezcla
* Contraer: Contraer y expandir la tabla del plan de mezcla

![Editar plan de mezcla](/docs/img/Brautomat-11.jpg)

Cuando se edita una fila de la tabla, los botones cambian.

* Salir: sale del editor de líneas sin guardar. El botón se muestra en gris.
* Almacenamiento: guarde los cambios en la fila de la tabla en el plan combinado

Todos los botones para editar el plan de macerado se ocultan en cuanto se inicia el proceso de elaboración. El botón de colapso para contraer y expandir la tabla se oculta tan pronto como se edita el plan de combinación.

Junto con los controles de encendido, reproducción, pausa, anterior y siguiente, el control de preparación es intuitivo de usar. El plan de maceración que se muestra aquí es una importación de kleineBrauhelfer2. La importación inserta automáticamente las temperaturas de descanso y los tiempos de descanso. Al agregar lúpulo, el ácido alfa y la cantidad en gramos se agregan automáticamente al nombre del lúpulo. Además, estas abreviaturas tienen el prefijo:

* VWH: salto frontal del mosto
* Cocción (sin añadir lúpulo)
* WPH: Salto de hidromasaje

Los aditivos como se muestra en la imagen _Levadura de cocina alimentaria 1gr_ se importan del pequeño Brauherlfer2 al plan de maceración según el tiempo de administración y la cantidad.

## Editar tabla del plan de maceración

Un plan de mezcla se puede cambiar en Brautomat o recrearse por completo. El símbolo del lápiz coloca una línea en la tabla del plan de mezcla en modo editor.

![Editar plan combinado](/docs/img/Brautomat-3.jpg)

Ahora se puede cambiar cualquier número de filas de la tabla, una tras otra. Tan pronto como se hace clic en un símbolo para editar el plan de maceración, el botón _Guardar_ cambia de verde a rojo. Una vez que se hayan realizado todos los cambios, el plan de maceración debe guardarse usando el botón _Guardar_. Alternativamente, todos los cambios se pueden descartar usando el botón _Salir_ para salir sin guardar.

Tan pronto como se inicia un proceso de maceración usando el botón de encendido, la vista cambia:

![Editar plan de mezcla](/docs/img/Brautomat-4.jpg)

Los botones de edición están ocultos. Para que esto vuelva a ser visible, se debe detener el proceso de maceración mediante el botón Pausa del control:

![Editar plan de mezcla](/docs/img/Brautomat-5.jpg)

Cuando el proceso de maceración está en pausa, el botón Pausa en el control se muestra en rojo y se muestran las funciones de edición. La placa de inducción no se apaga. Se sigue manteniendo la temperatura de reposo. Si el temporizador de descanso está activo, se pausará. Si se cambia el plan de maceración (modo Editor), el botón Pausa para continuar el proceso de maceración y el botón de Encendido se desactivan y se muestran en gris hasta que los cambios en el plan de maceración se hayan guardado o descartado (Salir).

Ejemplo de aplicación:\
Al final del proceso de maceración, se utiliza una muestra de yodo para determinar que el macerado aún no tiene yodo normal y que todavía hay almidón presente. Se debe prolongar el reposo de sacarificación a 72°C:

* Pausar el proceso de maceración.
* Haga clic en el símbolo del lápiz en la línea Sacarificación 72°C
* Ampliar el tiempo de reposo para la segunda sacarificación en 5 minutos.
* Guardar
* Haga clic en el botón de pausa y el proceso de maceración continuará con la duración de descanso ajustada.

## Función y aplicación de autonext

![Maischeplan autonext](/docs/img/Maischeplan-autonext.jpg)

El primer paso del plan de macerado denominado _Mashing 50°C_ tiene un tiempo de reposo de 10 minutos y un _autonext_ desactivado. La imagen muestra la situación cuando el temporizador de descanso ha llegado a los 10 minutos: El temporizador ha contado hasta las 00:00 del tiempo restante. El botón de reproducción cambia automáticamente a rojo. El mensaje del brindis "Haga clic en el botón de reproducción" aparece en la parte inferior derecha. La placa se apaga. El proceso de elaboración espera a que se haga clic en el botón de reproducción. La interfaz web muestra el siguiente paso, que se inicia haciendo clic en Reproducir.

* Al final de una pausa con _autonext_ desactivado, el proceso de elaboración se detiene y la placa se apaga.

El segundo paso de maceración, denominado _Maltoserast 63°C_, tiene una temperatura de reposo de 63°C y un tiempo de reposo de 25 minutos. En este paso, Brautomat inicialmente controla la placa a 63°C. Tan pronto como se alcanzan estos 63°C, el Brautomat inicia el temporizador. Un cronómetro de descanso es un cronómetro que cuenta atrás hasta las 00:00 (0 minutos: 0 segundos). Cuando este temporizador alcanza el tiempo de descanso de 25 minutos, el Brautomat verifica la propiedad _autonext_. Si _autonext_ está activado, Brautomat salta automáticamente al siguiente paso en el plan de mezcla. En esta receta de ejemplo, este es el paso _Sacarificación 72°C_. La etapa de sacarificación tiene una temperatura de reposo de 72°C. El Brautomat aumenta automáticamente la potencia de la placa para alcanzar la nueva temperatura de reposo.

* Al finalizar un reposo con _autoext_ activado, el proceso de maceración continúa automáticamente y la placa permanece encendida.

![Maischeplan autonext](/docs/img/Maischeplan-autonext2.jpg)

La propiedad _autonext_ en el séptimo paso _Mashing 78°C_ no está activada. Si el Brautomat encuentra un autonext desactivado, el Brautomat finaliza el descanso actual una vez transcurrido el tiempo de descanso y apaga la placa (0% de potencia). En este estado, el botón Reproducir se muestra en rojo. Para continuar con el proceso de preparación, se debe hacer clic en el botón Reproducir.

Mientras que en el primer ejemplo de _autonext_ generalmente se hace clic directamente en el botón Reproducir para continuar con el paso de maceración, en el segundo ejemplo de maceración puede pasar un tiempo más largo para el clarificado y el reposo del clarificador. El Brautomat se deja en el estado "Haga clic en el botón Reproducir". La placa de la primera caldera permanece apagada. En este estado se pueden utilizar todos los actuadores y también las otras dos calderas.

## Diferencia autonext y ruptura

Si autonext se desactiva al final del bloqueo, la placa se apaga. Con el botón de pausa se detiene el cronómetro de descanso,Sin embargo, la placa permanece encendida y Brautomat calcula la potencia requerida por la placa.

Las siguientes secciones describen las funciones especiales opcionales. Brautomat los principiantes pueden omitir la descripción de las funciones especiales.

## Función especial 0°C reposo cuando se activa autonext

Una función especial es la temperatura de reposo 0°C cuando se activa autonext: Si la temperatura de reposo se establece en 0°C y se activa autonext, el paso de maceración se inicia automáticamente sin control de temperatura. En el ejemplo del plan de maceración, esta función especial se muestra después de hervir el mosto en el paso _post-isomerización_. En este punto el mosto tiene una temperatura de aprox. 100°C. Se debe apagar la encimera y poner en marcha inmediatamente el cronómetro de post-isomerización:

![Función especial 0°C](/docs/img/Maischeplan-Sonderfunktion.jpg)

La función especial _0°C temperatura de reposo con autonext_ activado cumple exactamente este requisito: se ignoran las temperaturas real y nominal y se inicia el temporizador de reposo. Si la temperatura de reposo del paso posterior a la isomerización no se estableció en 0 °C, sino en 95 °C, por ejemplo, el temporizador de descanso para el paso posterior a la isomerización solo comenzaría cuando la temperatura en la caldera de preparación de puré se haya enfriado de 100 °C a 95 °C. Durante la post-isomerización, la temperatura en el mosto desciende. Si es necesario, el mosto se enfría activamente. La función especial _Temperatura de reposo 0°C cuando está activado autonext_ hace que la placa permanezca apagada.

## Proceso de elaboración de cerveza

El principio básico de la máquina cervecera es la infusión ascendente. Esto incluye variantes como el proceso de maceración de cocción de Earl. También se pueden implementar otros procesos de elaboración de cerveza utilizando la propiedad “autonext”. Sin embargo, cabe señalar que el Brautomat sólo puede admitir otros procesos de elaboración de cerveza con "semiautomático". El operador debe realizar manualmente el desencadenante de una acción, como extraer una masa parcial. Para Brautomat, manual significa usar los botones Reproducir y Pausa. Una pausa de cero minutos con autonext deshabilitado se puede utilizar como desencadenante de una acción manual.

Nota: Los siguientes temas sobre comandos de control son opcionales y no relevantes para comenzar con Brautomat.

## Hervidor de cerveza

El Brautomat admite hasta tres hervidores de cerveza. La primera caldera es necesaria para el proceso de maceración. Un segundo hervidor es opcional y se puede utilizar, por ejemplo, en procesos de elaboración de cerveza como la decocción. El tercer hervidor se utiliza a menudo como recambio y también es opcional. El uso del segundo y tercer recipiente se puede seleccionar libremente, solo el primer recipiente está vinculado al proceso de maceración y específicamente al temporizador de reposo.

Nombres predeterminados para comandos de control:

*Primer hervidor: IDS o MASH
* Segunda caldera: MLT o SUD
* Tercera caldera: HLT o REGUSS

## Comandos de control

Una segunda función especial son los comandos de control para las placas de cocción y los actuadores. La sintaxis para el paso mash es.

* Nombre del actor: Actuación

La alimentación puede estar encendida o apagada o un número entre 0 y 100%. El estado OFF corresponde al valor 0% y ON al valor 100%. El comando de control de la primera placa de inducción es IDS o MASH. El comando de control de la segunda placa de inducción es SUD. El comando de control para la refundición es HLT. El comando de control de un actuador es el nombre del actuador.

![Comando de control del actor](/docs/img/Maischeplan-Aktoren.jpg)

El plano de mezcla de la imagen conmuta los actuadores en tres lugares. El agitador se enciende desde el principio: Agitador:ON
Poco antes del final del programa de maceración, el agitador se apaga: Agitador:OFF y el recambio se enciende: Refill:ON.

El comando de control de un actuador se puede especificar con una potencia, p. BOMBA:60. A continuación se conecta la bomba actuadora con un 60 % de potencia. Esto supone que este actuador se ha activado para PWM. La temperatura de reposo y la RaLa duración de st debe establecerse en 0 para los comandos de control.

El mando de control IDS:50 establece la potencia máxima de salida de la placa al 50%. La refundición también se puede encender al 75% de potencia con HLT:75.

![Comando de control IDS](/docs/img/sonderfunktion_sud1.jpg)

El mando de control SUD: Cocer puré espeso con un tiempo de reposo de 10 minutos y una temperatura de reposo de 100 grados realiza un paso de puré en una segunda encimera. El temporizador de reposo se inicia tan pronto como se alcanza la temperatura de reposo.

![Comando de control SUD](/docs/img/sonderfunktion_sud2.jpg)

El comando de control SUD: cocinar puré espeso con una temperatura de reposo de 100 grados pero sin tiempo de reposo enciende la segunda placa, inicia el controlador PID de la placa y salta directamente al siguiente paso en el plan de puré.

![Comando de control SUD](/docs/img/sonderfunktion_sud3.jpg)

La etapa de maceración y sacarificación a 72°C se realiza en la primera placa _Maische_. El controlador PID regula la potencia requerida para el hervidor de puré. Al mismo tiempo, el controlador PID regula la potencia requerida por la caldera _Sud_.

Ejemplos:

* Agitador: ENCENDIDO
* Agitador: APAGADO
* RH:40
*ID:75
*ID:DESACTIVADO
* Alto: 100
* HLT: APAGADO
* SUD: Cocine puré espeso
* SUD:60

_Nota: Los comandos de control se pueden utilizar para operar las calderas de puré, preparación y HLT al mismo tiempo. Sin embargo, sólo puede estar activo un temporizador de descanso. El temporizador de descanso siempre está vinculado a la primera placa de “puré”._

### Ejemplo de IDS de comando de control

A modo de ejemplo se da la siguiente configuración para el GGM IDS o la caldera MashSud:

![Comando de control IDS](/docs/img/aktoren_schaltung4.jpg)

La potencia máxima de salida está preestablecida en 100%. La temperatura de “Transición a Cocción” es de 95°C. A partir de esta temperatura, la potencia máxima de salida del GGM IDS es sólo del 80%.

El programa de macerado en la ilustración comienza con el paso "Calentar el vertido principal". La placa de inducción GGM IDS calentaría el agua con la potencia "Max. Power IDS" (parámetro en el registro de control de temperatura), es decir, con el 100%.

![Comando de control IDS](/docs/img/aktoren_schaltung2.jpg)

El cronómetro de descanso comienza a 59°C. El tiempo de descanso es de cero minutos. El Brautomat salta a la siguiente línea del paso 2.
El comando de control IDS:65 fija la potencia máxima del IDS al 65%. El Brautomat salta a la siguiente línea del paso 3.
Ahora la temperatura se calienta desde 59°C hasta la temperatura objetivo en el paso de “macerado”. El rendimiento máximo del IDS es del 65%.

La potencia de salida máxima del 65 % se mantiene en los siguientes pasos de maceración. Hasta que Brautomat cumpla con el comando de control IDS:100 después del paso de maceración.

![Comando de control IDS](/docs/img/aktoren_schaltung3.jpg)

El comando de control cambia la potencia de salida máxima del IDS al 100%. Ahora el mosto se calienta al 100% de potencia hasta la temperatura de “transición a ebullición” de 95°C (ver arriba). A partir de 95°C el GGM IDS pasa al 80% de potencia. El 80% corresponde al parámetro "Potencia desde transición".

Los comandos de control del IDS se pueden utilizar para evitar que el puré se queme o que el mosto se desborde, especialmente con volúmenes de caldera más pequeños.

### Ejemplo: Decocción con dos fuegos

![Comando de control IDS y SUD](/docs/img/sonderfunktion_sud4.jpg)

Debido a la restricción _la primera olla de maceración siempre debe operarse con un tiempo de reposo_, existe un procedimiento simple para los procesos de decocción: la parte de puré a cocinar debe ir a la olla _Mash_ y la parte de puré a mantener a temperatura debe ir a la olla _Sud_.

### Ejemplo de uso de energía para una placa

Se proporciona un llenado de 7 kg y un vertido principal de 28 l. En total la masa es 35kg\

Con la ayuda de la función especial IDS: <Potencia en %> se puede ajustar la potencia de una placa de forma que la velocidad de calentamiento durante la maceración sea de 1°C por minuto.

![Comando de control MASH power](/docs/img/IDS-Sonderfunktion.jpg)

_ExplicaPara obtener información sobre el método de cálculo, consulte: Parámetros del GGM IDS - Control de temperatura - Máximo rendimiento del IDS._

```json

    Potencia requerida P = m * c * T / (t * w)
    La expresión c*T/(t*w) se sustituye por el valor 75 con una eficiencia del 80% para la placa de inducción.
    la masa m es 35kg
    P = 35 x 75 = 2625
    2625W es el 75% del máximo. potencia 3500W (2625 / 3500 * 100 = 75%)

```

En el plan de maceración mostrado arriba, la salida máxima del IDS se establece en 75% después de macerar en la línea 2 con el comando de control "IDS:75". Con este mando de control se realizan los siguientes pasos (reposo de maltosa, sacarificación y maceración) con un rendimiento máximo del 75%. Después de la maceración, el usuario debe hacer clic en el botón de reproducción (autonext deshabilitado). Aquí comienza el clarificado, seguido del reposo del clarificador, etc. El proceso de elaboración continúa con el comando de control “IDS:100”. La potencia máxima del IDS se establece en 100% de potencia para hervir mosto.

_Nota: La eficiencia del 80% utilizada aquí para una placa de inducción es un valor medio. Un tanque de macerado aislado y cubierto (tapa o agitador) puede tener una mayor eficiencia.

## Cambio de perfil de función especial

Otra función especial es el cambio de perfil. Los comandos son IDSPROFIL, SUDPROFIL y HLTPROFIL. El nombre del perfil sigue a los dos puntos.

Ejemplos:

IDSPROFILE:Profil68l\
PERFIL DE IDS:Profil36l

Con este comando especial se intercambian todos los parámetros de una caldera. De esta manera se pueden almacenar diferentes perfiles de hardware. En el proceso de elaboración de decocción, el comando especial ofrece una manera fácil de utilizar parámetros ajustados con la misma caldera y menor volumen.

Los comandos especiales IDS: e IDSPROFIL: tienen diferentes efectos: El comando especial IDS: cambia la potencia máxima de salida. Todos los demás parámetros siguen siendo los mismos.

_Nota: el comando especial IDSPROFILE en el plan de mezcla se cancela si el tipo de dispositivo (IDS1, IDS2 o relé) no es idéntico._

## Ejemplo de día de preparación

Finalmente, se resumen los pedidos especiales, las adiciones de lúpulo y el procedimiento general utilizando un día de elaboración. Este ejemplo se basa en la siguiente configuración:

Entorno de dos calderas:

* una caldera para preparar puré (volumen 70 l, GGM IDS2 con 3,6 kW)
* una tetera refundida (tetera de 35 l, 2 kW)

Dos actores:

* un agitador (controlado por relé)
* un elemento calefactor anular (en la caldera de preparación de puré, 3,5 kW)

El plan de puré:

![ejemplo del día de preparación del plan de maceración](/docs/img/example_control_commands1.jpg)

El ejemplo muestra lo fácil que es encender y apagar los actuadores mediante comandos especiales o cómo se integran comandos especiales en el plan de maceración. En el primer paso de maceración se conecta el agitador. El Brautomat ejecuta el comando especial e inmediatamente salta al siguiente paso en el plan de mezcla. El paso de maceración se configuró con una duración de 1 minuto y autonext se deshabilitó. En este paso se añade la malta al agua de elaboración. El paso dura más de un minuto, pero dependiendo del relleno, no se sabe de antemano cuánto tiempo durará el macerado. Después de macerar durante un minuto, el Brautomat apaga la placa y muestra el botón de reproducción en rojo (desactivado autonext). El Brautomat ahora "espera" hasta que se complete el paso y se haga clic en el botón de reproducción. Cuando se apaga la placa y se agrega la malta, la temperatura de mezcla para el puré será inferior a 55°C. Este procedimiento es adecuado, por ejemplo, para una adición lenta y relajada de las maltas o para un breve descanso de proteínas.

_Alternativa:_ active la propiedad autonext y establezca el período de descanso en 5 minutos. En este caso, el Brautomat mantendría la temperatura de maceración durante 5 minutos (maceración) y luego calentaría automáticamente para el siguiente reposo.

El siguiente paso es el reposo de maltosa. El PID El controlador regula la potencia necesaria para alcanzar la temperatura objetivo en el macerado y mantenerla por un período de 40 minutos. En la línea 4, la recarga se activa mediante un comando especial. La temperatura objetivo para la recarga es de 75°C y la duración es de 0 minutos. El Brautomat inicia el controlador PID para la refundición de la caldera y regula en segundo plano la potencia requerida. En este punto del plan de macerado, hay dos controladores PID activos: un controlador PID para el hervidor de macerado y un controlador PID para el vertido posterior. El Brautomat salta directamente al siguiente paso después del encendido.

En el plan de maceración, el actuador del elemento calefactor anular se enciende o se conecta una vez con el comando especial _RHE:ON_ y una vez con _RHE:50_. ON traduce Brautomat con un rendimiento del 100 %, mientras que 50 se procesa en consecuencia con un rendimiento del 50 %. La tetera MashSud tiene un volumen máximo de 70 litros. La resistencia de anillo sostiene la placa durante la cocción con un 50 % de potencia para una cocción vigorosa: placa de cocción al 100 % de potencia (3,5 kW) más resistencia de anillo de 1,75 kW (50 %). Al final de la cocción, la resistencia circular se apaga con el comando especial _RHE:OFF_.

El momento de la adición de lúpulo se calcula en función de su tiempo de cocción. El programa de puré tiene un tiempo total de cocción de 90 minutos. De este se hierve 30 minutos sin añadir lúpulo. El tiempo total de cocción de las adiciones individuales de lúpulo se suma. Es decir. la primera incorporación de lúpulo _Hall. Tradición 6,0% 37,2g_ se cocina durante un total de 60 minutos:

* Duración de la sala de adición de paso de puré de salto. Tradición 37,2 g: 30 minutos
* Duración de la sala de adición de paso de puré de salto. Tradición 31g: 15 minutos
  * Al final de este paso de macerado, la primera adición de lúpulo (37,2 g) permanece en el mosto durante 45 minutos.
* Duración de la sala de adición de paso de puré de salto. Tradición 30g: 10 minutos
  * Al final de este paso de maceración, la primera adición de lúpulo (37,2 g) es de 55 minutos y la segunda es de 25 minutos en el mosto.
* Duración de la sala de adición de paso de puré de salto. Tradición 7g: 5 minutos
  * Al final de este paso de maceración, la primera adición de lúpulo (37,2 g) es de 60 minutos, la segunda de 24 minutos y la tercera de 15 minutos en el mosto.

Si bien herramientas como kleineBrauhelfer, BrewFather o MMum siempre indican el tiempo total de cocción para cada adición de lúpulo individual, el Brautomat debe proporcionar una alarma o una indicación sobre cuándo se debe agregar una adición de lúpulo al mosto durante la preparación.

_Extensión:_ Se amplía la explicación de las dosis de lúpulo para incluir dos o más dosis al mismo tiempo:

![ejemplo del día de preparación del plan de maceración](/docs/img/example_control_commands3.jpg)

El lúpulo se debe añadir 10 minutos antes de que finalice la ebullición. Al mismo tiempo se añaden al mosto Tradition 6,0% 30g_ y levadura alimenticia _levadura nutritiva_. La ilustración muestra lo sencillo que es el procedimiento: se administran dosis simultáneas con una duración de 0 minutos antes de una dosis con una duración.

El penúltimo paso posterior a la isomerización utiliza la función especial de temperatura objetivo de 0°C. Con este paso de puré se apaga la placa de cocción. La función especial temperatura de descanso 0°C hace que Brautomat inicie el temporizador de descanso 10 minutos inmediatamente. En este punto el mosto tiene una temperatura de aprox. 100°C y se está enfriando lentamente. Debido a que el siguiente paso implica la adición de lúpulos aromáticos a 78°C, el mosto se enfría activamente durante el período de descanso de 10 minutos posterior a la isomerización.

El gráfico del plan de maceración:

![ejemplo del día de elaboración del plan de maceración](/docs/img/example_control_commands2.jpg)
