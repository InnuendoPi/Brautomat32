# Los controles

Directamente debajo del plano de mezcla se encuentra la plataforma del controlador. El proceso de maceración se controla con los 5 botones Encendido, Reproducir, Pausa, Anterior y Siguiente.

![Control](/docs/img/Buttons.jpg)

## Botón de encendido

El botón de encendido se utiliza para encender y apagar el proceso de maceración. Si la función AutoTune está activada en la configuración de una placa, el proceso AutoTune se inicia o se detiene mediante el botón de encendido.

## Botón de reproducción

El botón Play tiene dos funciones en el proceso de maceración:

1. La primera función es _Iniciar el cronómetro de descanso para el descanso actual_. El botón Reproducir inicia el temporizador de descanso independientemente de la temperatura REAL.\
Ejemplo: si el mosto ya está hirviendo en el paso de ebullición, pero la temperatura REAL de 98,5 °C está por debajo de la temperatura de reposo de 100 °C, el temporizador de reposo no comienza.

2. La segunda función del botón Reproducir está vinculada a la propiedad _autonext_: continuar el proceso de maceración con el siguiente descanso. El botón de reproducción se muestra en rojo en esta función. La función _Continuar el proceso de maceración con el siguiente descanso_ se explicará más adelante en la descripción _autonext_ en el plan de maceración.

## Botón de pausa

La función del botón de pausa se puede distinguir durante la fase de calentamiento a una temperatura de reposo y durante un reposo.

- Pausa durante la fase de calentamiento.

Si el proceso de preparación se inicia con el botón de encendido, los botones para editar el plan de macerado están ocultos. Si se hace clic en el botón de pausa, los símbolos de edición se mostrarán nuevamente. Durante una pausa activada, la placa permanece encendida hasta alcanzar la temperatura objetivo. El botón Pausa se mostrará en rojo. Con la ayuda de un descanso, se puede ajustar el programa de maceración durante el proceso de elaboración de cerveza. Si se alcanza la temperatura de reposo durante un descanso, se inicia el cronómetro de descanso y finaliza el descanso.

- Descanso durante un descanso

Durante un descanso, el cronómetro de descanso en el proceso de maceración también se detiene usando el botón de pausa. El botón Pausa se mostrará en rojo. Durante un descanso, la temperatura real se mantiene en relación con la temperatura de referencia de reposo, es decir, el controlador PID y, por tanto, la placa de cocción permanecen activos. Con la ayuda de un descanso durante el descanso, se puede ajustar el plan de maceración. La duración de la pausa prolonga el tiempo de descanso anterior.

## Botón anterior

El botón Anterior salta al paso anterior del plan de maceración. Si el proceso de maceración se ha detenido, el temporizador de descanso actual se reinicia y se reinicia.

##Botón siguiente

El botón Siguiente salta al siguiente paso del plan de maceración o, si fue el último paso del plan, finaliza el proceso de maceración.

## Botón contraer

El botón Contraer contrae o colapsa la tabla del plan de maceración.

![Maischeplan](/docs/img/Maischeplan-anzeigen.jpg)

El botón de colapso permanece visible incluso después de que comienza la preparación. Todos los botones para editar el plan de macerado quedan ocultos una vez que comienza la preparación.
