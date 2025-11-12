# AutoTune Paso a paso

El procedimiento práctico AutoTune se ve así:

![AutoTune](/docs/img/IDS-AutoTune.jpg)

1. Llene su hervidor de puré con una cantidad típica de agua.

    un. Una cantidad típica corresponde al llenado de una caldera compuesta por colada principal y relleno.

    Ejemplo: 20 litros de fundición principal y 5 kg de relleno dan como resultado una cantidad típica de 25 litros de agua para el proceso AutoTune.

    B. Enciende la batidora
2. Establezca una temperatura objetivo AutoTune

    un. la temperatura objetivo debe ser de 50°C o más.

    b. La temperatura objetivo debe estar al menos 10°C por encima de la temperatura real actual.

3. Activa “PID AutoTune”
4. Habilite "AutoTune depuración"
5. Guarde esta configuración
6. Al hacer clic en el botón de encendido se inicia el proceso AutoTune.

![AutoTune2](/docs/img/IDS-AutoTune-start.jpg)

El proceso AutoTune consta de dos fases. La fase 1 se está calentando hasta la temperatura objetivo. Cuando se alcanza la temperatura objetivo, la placa se apaga. La temperatura objetivo a veces se supera considerablemente en 2-3°C. Es necesario exceder significativamente la temperatura objetivo para el proceso AutoTune. A esto le sigue una fase de enfriamiento por debajo de la temperatura objetivo. Estas dos fases se repiten 5 veces. Dependiendo del entorno, el proceso AutoTune lleva un tiempo relativamente largo (90 minutos o más). La mayor parte del tiempo se necesita durante las fases de enfriamiento. Cuanto mejor esté aislado un hervidor de cerveza, más durará el proceso AutoTune o la fase de enfriamiento. El proceso AutoTune debe llevarse a cabo a una temperatura típica de macerado de aprox. 60°C. El estado actual se muestra en la columna “AutoTune Proceso 0/5”. El primer número es el paso actual y el segundo número es el número de AutoTune pasos que se espera que sean necesarios. Los valores medidos se determinan durante el proceso AutoTune. Los valores medidos se controlan constantemente. Si un valor medido muestra una desviación, se repite la medición. Si se repite, se muestra "AutoTune Proceso 6/5". Se realizan un máximo de 20 repeticiones. El resultado de AutoTune se muestra en la configuración de GGM IDS en la pestaña PID Administrador:

![AutoTune3](/docs/img/IDS-AutoTune-erg.jpg)

El proceso AutoTune se completa y los parámetros del sistema determinados se guardan automáticamente.\
El resultado de AutoTune es el factor de amplificación Ku (ganancia máxima) y la duración del período (período final). P, I y D se calculan a partir de estos dos parámetros. Hay varios algoritmos disponibles para calcular los valores PID. El Brautomat utiliza un algoritmo PID que está optimizado para la elaboración de cerveza (en realidad, para calentar líquidos) y también se utiliza, por ejemplo, en el complemento PIDBoil de CraftBeerPi.

_Consejo: Después del proceso AutoTune, la configuración debe guardarse mediante una copia de seguridad._

Cuando el proceso AutoTune finaliza y se activa la "depuración AutoTune", el registro "AutoTune\_log.txt" se puede ver a través del Explorador. Toda la información se registra en este archivo de registro.\
El resultado de AutoTune se guarda en formato JSON en los archivos "idsAutoTune.txt", "sudAutoTune.txt" o "hltAutoTune.txt". Los archivos son puramente informativos y no son necesarios para su funcionamiento. En estos archivos se listan los valores de PID según diferentes métodos de cálculo.

Los siguientes métodos de cálculo se enumeran en el registro:

INTEGRAL PID\
ALGÚN SOBREPASO PID\
SIN EXCESO PID\
NICHOLS ZIEGLER PID\
ZIEGLER NICHOLS PI\
TIREO LUYBEN PID\
TYREUS LUYBEN PI\
MARLIN CIANCONO PID\
CIANCONE MARLIN PI

Los valores calculados de los diferentes algoritmos se pueden introducir en la configuración con la selección INDIVIDUAL_PID en las líneas P, I y D. Sin embargo, esto sólo debería conducir a mejores resultados en casos excepcionales.
