# Solución de problemas

Consejos y trucos... continuará...

## Wi-Fi

El alcance WLAN de los microcontroladores ESP es limitado. La intensidad de la señal WLAN actual se muestra en Sistema -> Restablecer. Cuanto más cerca esté el valor de cero, más fuerte será la señal. Los valores desde -50dBm hasta -75dBm son muy buenos. Un valor inferior a -80 dBm es malo y causará problemas. En cocinas de cervecerías con una intensidad de señal WiFi débil, el intervalo PID se puede aumentar a 7000 ms, por ejemplo, para reducir la cantidad de datos. Si la intensidad de la señal es débil, solo se debe utilizar un navegador activo (consulte Eventos enviados por el servidor a continuación). Es importante una ubicación adecuada para Brautomat en la WLAN (o un repetidor adicional). Una buena intensidad de señal no necesariamente, pero en la mayoría de los casos, da como resultado una velocidad de transferencia de datos más alta y estable.

La interfaz web de Brautomat está basada en el framework bootstrap 4.6 con Javascript. Los archivos requeridos (css, js y fonts) se encuentran en la memoria flash de Brautomat. Esto tiene una ventaja y una desventaja. La ventaja es que no se requiere conexión a Internet para cargar los archivos necesarios durante la preparación. La desventaja es que en la WLAN local el Brautomat tiene que proporcionar los archivos de marco comprimidos a cada navegador conectado una vez que se establece la conexión. Si un archivo no se transmite correctamente y muy lentamente debido, por ejemplo, a una señal WiFi débil, la interfaz web no funcionará correctamente. En este caso, la interfaz web no se construye correctamente (luego parece una página de texto) o está incompleta (las tablas permanecen vacías). En la mayoría de los casos, basta con recargar el sitio web (Ctrl-Shift-R).

Después de una actualización de firmware, Brautomat siempre debe apagarse y eliminarse la caché del navegador.

## Navegadores

Brautomat se prueba en Win11 con MS Edge y Firefox en la versión actual, así como en dispositivos iOS con MS Edge y Safari. Se prefiere MS Edge durante el desarrollo. Independientemente del navegador, se debe activar la reproducción automática de audio de los mensajes Toasts (audio) para la dirección de Brautomat. La dirección de Brautomat también debe incluirse en las excepciones al bloquear complementos del navegador. No se admiten navegadores obsoletos (por ejemplo, IE8).

La memoria caché del navegador puede generar anuncios frontales web incorrectos. La interfaz web de Brautomat especifica sin caché ni almacenamiento cuando se llama, pero diferentes navegadores ignoran estas instrucciones. El borrado manual del caché del navegador a menudo se inicia con la combinación de teclas Ctrl - Shift - Supr.

## Eventos enviados por el servidor y planes de energía y clientes de bloqueo automático

El Brautomat envía datos a navegadores conectados y activos a través de eventos enviados por el servidor. Se pueden conectar hasta 8 dispositivos al Brautomat al mismo tiempo. Los planes de energía o el bloqueo automático pueden interrumpir una conexión. ¡El proceso de preparación no se detendrá ni cancelará si se pierde la conexión! El Brautomat continúa funcionando normalmente. Los navegadores desconectados simplemente no reciben ninguna información nueva. La información incluye temperaturas, paso de mezcla actual, rendimiento actual, gráficos, etc. Una conexión de Eventos enviados por el servidor a Brautomat es el "canal de datos" a través del cual se envía la información al navegador. Si se interrumpe la conexión a Brautomat, el canal de datos finaliza. Un navegador activo reconoce cuando su canal de datos ha finalizado y vuelve a iniciar sesión automáticamente en Brautomat después de un breve período de tiempo.\
Los registros en Brautomat no tienen orden ni prioridades. No tiene ningún efecto si el navegador web del PC o de la tableta se conecta primero o último. El proceso de preparación se puede iniciar en el dispositivo A, pausar en el dispositivo B, observar en el dispositivo C y finalizar en el dispositivo D. Si los cuatro dispositivos están activos y conectados, todos los navegadores muestran i (casi) al mismo tiempo.información idéntica porque cada uno de estos cuatro dispositivos tiene su propio canal de datos.

## Importación de recetas

Debido a la memoria limitada, la importación de recetas no puede importar recetas con archivos PDF, imágenes adjuntas o textos o explicaciones muy largos. Para las recetas de MashMalzandMore, importar a kbh2 y luego exportar en el formato Brautomat es una buena y sencilla solución. También se pueden importar recetas de Brewfather.

## AutoTune

El proceso AutoTune no debe centrarse en la perfección, es decir, S.v. 0,1°C. La desviación de los sensores suele ser mayor. La banda de ruido del parámetro AutoTune (que se dispersa alrededor del valor objetivo) está lo suficientemente cerca de la temperatura objetivo con un valor de 0,3 para alcanzar muy bien la temperatura objetivo y mantenerla durante el período de descanso.\
Las calderas de preparación de puré muy bien aisladas requieren una serie de datos AutoTune más grande. En la serie de datos los valores medidos se registran en orden cronológico. Al principio está el valor de medición actual y al final de la fila está el valor de medición más antiguo. La serie de datos del valor AutoTune dice "¿cuántos valores antes de la medición actual mira el Brautomat hacia atrás (hacia el pasado) para detectar un cambio de temperatura de al menos AutoTune banda de ruido (0,3)". Para una caldera bien aislada, la serie de datos debería contener 75 puntos de medición. Para una caldera sin aislamiento es suficiente una serie de datos de 50 puntos de medición. Estos dos parámetros deben ajustarse según el entorno. Las especificaciones estándar deberían arrojar valores muy buenos en la gran mayoría de los casos.

## Sensores y calibración

Los sensores Dallas DS18B20 se ofrecen en muchas plataformas a precios muy diferentes. La calibración del sensor ayuda a minimizar las desviaciones. En cualquier caso, es necesario calibrar el sensor IDS, ya que son posibles desviaciones de varios grados centígrados (según el origen).\
Si un sensor informa periódicamente un error de sensor (tostadas) en la interfaz web, primero debe probar una conexión diferente para el sensor. Las tres conexiones de la placa para los sensores son equivalentes y no tienen un orden predeterminado. Si hay problemas con los sensores, se deben verificar los puntos de soldadura de los 3 bloques de terminales de tornillo y la resistencia de 4,7 kOhm (en la placa de circuito debajo del ESP).

## Interrupción del pin GGM IDS

La interrupción del pin proporciona un canal de retorno desde la placa de inducción al Brautomat. Este canal de retorno está conectado al Brautomat con un GPIO de interrupción del ESP. Una interrupción interrumpe el flujo del programa y verifica la condición de interrupción.\
La placa de inducción GGM IDS envía continuamente una interrupción aproximadamente cada 300 milisegundos: ya sea la señal "todo está bien" (0000) o un código de error (por ejemplo, 0010 para caldera sin caldera o caldera vacía).

Sección de salida en serie sobre interrupción de pin:

```texto
10:00:00:174 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:543 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:864 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:209 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:554 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
```

La salida en serie en la interrupción del pin muestra claramente que la placa de inducción envía constantemente "todo ok". Sin embargo, el Brautomat interrumpe su trabajo mientras elabora cerveza con cada interrupción (aproximadamente cada 300 ms) y verifica la condición de la interrupción. Por lo tanto, la interrupción del pin sólo debe utilizarse para solucionar problemas.

Las siguientes interrupciones se describen en el manual del GGM IDS2:

E0 no hay/caldera vacía (0010 2)\
Error de circuito E1 (0011 3)\
E3 Sobrecalentamiento (0101 5)\
Sensor de temperatura E4 (0110 6)\
Protección de bajo voltaje E7 (1001 9)\
Protector contra sobretensiones E8 (1010 10)\
Panel de control CE (1110 14)\

Lamentablemente, no se conocen las cadenas binarias. Sólo se conoce E1 caldera vacía/no disponible. el tiempoLos siguientes soportes se han determinado mediante pruebas, pero no son seguros.

La interrupción del pin sólo debería asignarse en caso de problemas. El pin D5 está preasignado para la primera placa de inducción. No se requiere interrupción del pasador en la operación de preparación normal.
