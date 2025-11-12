# Actores

![Configuración de actor](/docs/img/aktoren_settings.jpg)

Los actuadores como agitadores, bombas o elementos calefactores anulares se configuran con un nombre y un GPIO (interruptor). Los actuadores pueden tener la propiedad PWM (modulación de ancho de pulso). PWM en Brautomat es un tiempo de potencia (encendido y apagado o corriente fluye y corriente no fluye). La entrada se realiza en porcentaje. Siempre encendido es 100%. En el caso de una tetera, esto significaría un rendimiento máximo permanente. Un PWM del 50% sería 50:50 de corriente fluyendo y corriente no fluyendo. El intervalo de pulso es de 500 ms. La potencia se puede cambiar durante el funcionamiento usando los dos botones en la mesa del actuador. Los botones de cambio de energía son visibles para cada actuador si se ha habilitado PWM para el actuador. La función PWM en Brautomat es adecuada, por ejemplo, para relés o SSR. La función como control de motor para agitadores no es adecuada.

![Resumen de actores](/docs/img/aktoren.jpg)

## webhook

El parámetro GPIO del actuador debe configurarse en "-" para que los elementos del webhook se muestren en la interfaz web. Además, se requieren la URL del webhook y el comando de sonido:

![webhook](/docs/img/aktoren_webhook1.jpg)

Ejemplo Shelly 13:00:

Enciende Shelly 13:00: <http://192.168.1.5/relay/0?turn=on>\
Apague a Shelly a la 1:00 p. m.: <http://192.168.1.5/relay/0?turn=off>

La URL del webhook para Shelly 1PM es: <http://192.168.1.5/relay/0?turn=> (sin encendido ni apagado). El parámetro del interruptor del webhook debe estar configurado en "activado/desactivado".

URL Tasmota: <http://192.168.1.5/cm?cmnd=Power1%201>
