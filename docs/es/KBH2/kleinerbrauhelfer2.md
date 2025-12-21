# KleinerBräuhelfer2

A partir de la versión 2.5.0, el programa [ kleineBrauhelfer2](https://kleiner-brauhelfer.de/) tiene un filtro de exportación para Brautomat. Con el pequeño auxiliar de preparación2 es posible desarrollar y diseñar recetas hasta el más mínimo detalle. Con la hoja de trucos, kbh2 ofrece un diagrama de flujo muy bueno y útil para la implementación práctica en la cocina de la cervecería. Con el filtro de exportación para Brautomat se pueden adoptar todos los pasos.

## El plan de maceración de pestañas kbh2

En la pestaña Plan de macerado, el kbh2 ofrece cuatro formas diferentes de añadir maltas al macerado: macerado, calentamiento, elaboración de cerveza y decocción. Los cuatro tipos son compatibles con Brautomat. El tipo Mashing se inserta automáticamente con autonext deshabilitado. Calentar y preparar con autonext activado. La decocción se realiza con autonext desactivado.

![Cocinando](/docs/img/kbh2-maischplan.jpg)

 El Brautomat requiere un paso de maceración para reconocer el final del macerado y la transición a la filtración. En el plan de macerado kbh2, se debe agregar al final un paso de macerado tipo “calentamiento” con 76°C o más y una duración de 1 minuto. En esta combinación, la maceración es reconocida por Brautomat y se inserta con autonext desactivado.

![Cocinando](/docs/img/kbh2-maischplan2.jpg)

### Ejemplo 1: proceso de maceración de cocción de kbh2 Earl Scheidt

[Conde Scheid](http://hb-tauschboerse.bplaced.net/Neues_Maischverfahren.htm)

El proceso de maceración de Earl Scheid se puede planificar muy bien con meineBrauhelfer2 y se puede realizar de forma muy sencilla y automática mediante Brautomat. Tenga en cuenta que se requiere un paso de macerado de la preparación (vertido principal y parte 2 de malta) entre los dos macerados parciales. Dependiendo del volumen de malta 2, el procedimiento recomendado es trabajar con autonext desactivado para el paso de preparación para tener suficiente tiempo para macerar la malta 2 antes de que comience el segundo reposo de maltosa. Alternativamente, aprox. Se puede seleccionar 60 °C con calentamiento directo (autonext) a 63 °C como temperatura objetivo en el cruce de mezcla entre la fundición principal/malta 1 y la fundición principal/malta 2.

### Ejemplo 2: decocción de kbh2

El Brautomat admite procesos de decocción con semiautomático. Por ejemplo, si se ha dibujado una mezcla parcial, Brautomat requiere información (haga clic en Reproducir) cuando se completa este paso parcial. Crear recetas en kbh2 e importarlas a Brautomat facilita los días de preparación con decocción. Encontrará una descripción de las opciones en las instrucciones de kleineBrauhelfer2.

## La pestaña kbh2 cocina

Los tipos de adición de 5 lúpulos, mosto inicial, inicio de ebullición, ebullición, final de ebullición y batido se toman del pequeño auxiliar de elaboración de cerveza2 y se incluyen en el orden requerido en el plan de maceración de Brautomat.

Una especificación de tiempo en kbh2 en la pestaña Cocción significa "cuánto tiempo se cocina la adición de lúpulo". El tiempo de cocción determina, entre otras cosas: El amargor y el aroma. Véase también la colección de fórmulas en kbh2.
La especificación de tiempo kbh2 "durante cuánto tiempo se cocina la adición de lúpulo" se convierte en una especificación de tiempo "a qué hora se realiza la adición de lúpulo" cuando se importa a Brautomat.

![Cocinando](/docs/img/hopfen.jpg)

### Haz un poco de matemáticas de ida y vuelta

La adición de lúpulo se muestra en la imagen kbh2. El primer lúpulo añadido es “Hallertauer Perle 7% 2020” con un tiempo de ebullición de 65 minutos. Un segundo parámetro es importante en este contexto: en el lado izquierdo está marcado en verde el tiempo total de cocción: 80 minutos. Entonces el mosto se hierve sin lúpulo durante 15 minutos. La segunda incorporación de lúpulo es el lúpulo "Hallertauer Tradition 5,7% 2020" con un tiempo de ebullición de 15 minutos. En los últimos 15 minutos de cocción del mosto, a Hallertau Perle todavía le quedan 15 minutos de tiempo de cocción de los 65 minutos originales y la segunda adición de lúpulo Hallertau Tradition se cocina durante 15 minutos de los 15 minutos restantes de tiempo de cocción. La última adición de lúpulo se añade al batir, es decir, después del final de la ebullición.

La tarea de Brautomat es indicar el momento de agregar lúpulo durante la elaboración de cerveza e idealmente con un aktusti.una pequeña señal para recordarle la adición de lúpulo.

En este ejemplo se especifica un tiempo de cocción total de 80 minutos y una primera adición de lúpulo “Hallertauer Perle” con un tiempo de cocción de 65 minutos. Esto da como resultado una diferencia de 15 minutos en el tiempo de cocción sin agregar lúpulo. El primer paso, hervir el mosto, dura 15 minutos. Ahora hay que hacer la primera adición de lúpulo. La segunda adición de lúpulo “Hallertauer Tradition 5,7% 2020” tiene un tiempo de cocción de 15 minutos. De los 65 minutos, 15 minutos son Hallertau Pearl y Hallertau Tradition juntos en el mosto. 65 minutos menos 15 minutos dan como resultado un intervalo entre adiciones de lúpulo de 50 minutos. La adición de lúpulo Hallertauer Perle debe realizarse 50 minutos antes de la adición de lúpulo Hallertauer Tradition.

El último lote de lúpulo “Hallertauer Tradition 5,7% 2020” se entrega para degustar. Cuando lo sacas, la cocción habrá terminado. Por lo tanto, la adición de lúpulo no cuenta para el tiempo total de cocción.

![Cocinando](/docs/img/hopfengaben.jpg)

La adición de lúpulo se comporta de la misma manera. Hay un tiempo de post-isomerización de 10 minutos. Añadir el lúpulo “Hallertauer Tradition 5,7% 2020” para batir con un tiempo de ebullición de -5 minutos es parte de la post-isomerización.

_Consejo: Si se agregan dos saltos al mismo tiempo, el tiempo de adición del primer salto se establece en 0 minutos y la adición del segundo salto se establece en el tiempo de adición real. La lógica es simple según el cálculo anterior: el intervalo entre dos adiciones de saltos al mismo punto zeo es 0 minutos._

Las adiciones del kbh2 de las pestañas Maceración y Hervido se comportan de la misma manera que las adiciones de lúpulo. No se admiten aditivos del tratamiento del agua ni de la fermentación de kbh2 tabs.
