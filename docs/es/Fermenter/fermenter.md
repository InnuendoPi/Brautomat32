# Modo fermentador

En el modo fermentador, el Brautomat32 procesa el plan de fermentación de arriba hacia abajo del mismo modo que el plan de maceración. El controller Deck tiene las mismas funciones.

![Fermentador Dashboard](/docs/img/fermenter_dash.jpg)

El procesamiento de los pasos tiene una diferencia importante:

El primer paso del plan de fermentación comienza cuando se alcanza la temperatura objetivo. Este suele ser el momento en que se añade la levadura al mosto. Todos los pasos posteriores del plan de fermentación comienzan inmediatamente, independientemente de la temperatura real.

Para configurarlo, se puede configurar un GPIO para refrigeración y un GPIO para calefacción. Tanto la refrigeración como la calefacción son opcionales.

![Configuración del fermentador](/docs/img/fermenter_set.jpg)

El fermentador tiene tres estados diferentes: enfriamiento, calentamiento e inactivo. Cuando cambia el estado de refrigeración o calefacción, comienza una pausa. Durante la pausa, el estado del fermentador no cambia.

* Enfriamiento de estado antiguo y enfriamiento de estado nuevo: sin pausa. La refrigeración permanece encendida
* Calefacción en estado antiguo y calefacción en estado nuevo: sin pausa. La calefacción permanece encendida
* Estado antiguo de refrigeración y nuevo estado de calefacción: pausa 120 s
* Estado antiguo de calefacción y nuevo estado de refrigeración: pausa 120 s

## Rampa

Un paso de fermentador se especifica con una temperatura inicial y final. En la primera figura de esta sección, la temperatura en el primer paso del fermentador es de 18°C. Por supuesto, esto significa que la temperatura de fermentación permanece sin cambios durante un período de 1 día.

En el segundo paso del fermentador, la temperatura inicial es de 18°C ​​y la temperatura final es de 20°C. La duración de este paso del fermentador se ingresa en 2 días. Ahora hay dos formas de llegar desde la temperatura inicial a la final:

Cuando se activa la rampa, Brautomat controla la temperatura de fermentación linealmente durante la duración especificada para este paso. En este caso, la temperatura aumenta de 18°C ​​a 20°C en pasos de +0,1°C durante 2 días.

Con la rampa desactivada, la temperatura final se establece al inicio del paso del fermentador, ya sea mediante enfriamiento o calentamiento. Una vez establecida la temperatura final, se mantiene.

## Ciclo de conmutación del relé

El ciclo de conmutación del relé determina cuánto tiempo se mantiene uno de los estados de refrigeración, calefacción o inactivo. El rango de valores permitido está entre 1000 y 240000 ms. El valor predeterminado es 120000, es decir, 120 segundos. Un ciclo de conmutación demasiado pequeño puede tener un impacto negativo en los dispositivos de refrigeración.

## Mostrar

En modo fermentador, se debe seleccionar la vista MashSud (página 2). La vista general de la caldera y la vista de control manual no se pueden utilizar para el modo fermentador.
