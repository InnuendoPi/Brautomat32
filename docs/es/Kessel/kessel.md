# Configuración y uso de la caldera

El Brautomat32 ofrece la posibilidad de instalar hasta tres calderas. La primera caldera tiene la denominación interna MASH y alternativamente IDS. Esta tetera es necesaria para el proceso de maceración. Las otras dos calderas son opcionales. La segunda caldera tiene la denominación interna SUD, alternativamente MLT y la tercera caldera tiene la denominación HLT o Nachguss.

Las tres calderas pueden ser de placa de inducción GGM o de tipo relé. Una caldera tipo relé incluye una conexión webhook.

![Configuración de Kessel](/docs/img/kessel_1.jpg)

Los parámetros se describen en el capítulo Configuración básica y parámetros de un vistazo - Parámetros de la caldera y son idénticos para las tres calderas.

Sin embargo, el uso de las tres marmitas es diferente, especialmente el uso del plan de puré. El plan de macerado siempre está vinculado a la primera caldera de macerado, siempre que no se especifique ninguna otra caldera en el plan de macerado mediante un comando de control. Los comandos de control también se explican en la sección de funciones especiales y comandos de control del plan de maceración.

## Comandos de control de caldera

Esta sección sólo considera los comandos de control de la caldera. Los comandos de control para actuadores están estructurados de manera idéntica, pero se explican en la sección Funciones especiales y comandos de control del plan de maceración. Un comando de control siempre contiene dos puntos en el nombre del resto. El Brautomat solo reconoce por los dos puntos que este resto debe tratarse como un comando de control. El formato es dispositivo:potencia máxima. Esto significa que los dos puntos separan el nombre del dispositivo del rendimiento máximo.

Los siguientes nombres están definidos internamente como nombres de dispositivos para las tres calderas:

* MASH o IDS para la primera tetera
* MLT o SUD para la segunda caldera
* HLT o REGUSS para la tercera caldera

A cada caldera se le asigna un nombre en la configuración. Este nombre también se puede utilizar como nombre de dispositivo para un comando de control.

Se permiten números entre 0 y 100 como rendimiento máximo. El valor corresponde al parámetro de potencia máxima en la configuración de la caldera y se expresa en porcentaje. La especificación ON corresponde al 100% y OFF corresponde al 0%.

### Opción 1: cambiar la caldera manualmente

La segunda y tercera caldera se pueden encender y apagar manualmente a través de la interfaz web utilizando el botón de encendido respectivo. Por ejemplo, si una caldera está configurada para la reinfusión, la temperatura objetivo se puede establecer en 78 °C en la configuración de la caldera y la caldera se puede encender el día de preparación si es necesario.

### Opción 2: encendido automático de la caldera

El segundo y tercer hervidor también se pueden cambiar mediante el plan de macerado:

![Configuración de Kessel](/docs/img/kessel_2.jpg)

En este plan de macerado simplificado, la tercera caldera HLT se enciende automáticamente en la línea 2. El paso HLT:100 con una temperatura objetivo de 78°C y una duración de 0 minutos enciende la recarga con el 100% de potencia y establece la temperatura objetivo en 78°C. Debido a que la duración se especifica en 0 minutos, la recarga se activa permanentemente. El Brautomat pasa directamente al siguiente paso de macerado y deja activada la postinfusión. El controlador PID regula permanentemente la potencia necesaria para alcanzar y mantener la temperatura objetivo. Nachguss:100 sería idéntico al comando de control HLT:100. Si en los ajustes se ha asignado a la recarga el nombre "Cocina", también se puede utilizar el comando de control COCINA:100.

![Configuración de Kessel](/docs/img/kessel_3.jpg)

En este plan de maceración, en el tercer paso se activa la segunda preparación en caldera. A diferencia del ejemplo anterior HLT, la caldera SUD se enciende durante 15 minutos con la temperatura nominal de 100°C. El Brautomat permanece en este paso hasta que se alcanza la temperatura objetivo y se completa el período de descanso de 10 minutos. Luego se apaga el hervidor SUD y el Brautomat salta al siguiente paso en el plan de maceración.

El texto "Te"cocinar ilmaische" se traduce por Brautomat al 100%. Si no hay ningún número entre 0 y 100 o la información ON u OFF después de los dos puntos, entonces Brautomat reemplaza el texto con un rendimiento del 100%.

## Ejemplo de rendimiento diferente

Los comandos de control se pueden utilizar para ajustar la potencia máxima durante el proceso de preparación. Por ejemplo, si la placa de inducción tiene una potencia máxima de 3,5 kW y la tetera utilizada tiene un volumen de 20 litros, entonces se puede utilizar el comando de control MASH:75 para reducir la potencia de salida máxima de la placa de inducción al 75% de la potencia. El resto con el comando de control MASH:75 se crea con una temperatura objetivo de 0°C y una duración de 0 minutos con autonext activado.

## Ejemplo de decocción

Como se describió anteriormente, un resto del plan de macerado siempre se asigna a la primera caldera (MASH) si ningún comando de control (dos puntos en el nombre del resto) asigna el resto a otra caldera. Un comando de control puede encender/apagar la segunda caldera con una temperatura objetivo y pasar directamente al siguiente descanso o integrarla en el proceso de maceración con un período de descanso.

En el proceso de elaboración de decocción, se cocina una parte del puré mientras que el resto del puré se mantiene a la temperatura deseada. La decocción con Brautomat quedaría así:

* Coloque el puré restante en la segunda tetera. Sacar un resto del puré restante con autonext desactivado cumple con esta tarea.
* luego encender la segunda caldera de forma permanente a la temperatura deseada con un período de descanso de cero minutos. autonext está activado.
* Cocine el puré parcial en la primera olla durante el tiempo de reposo deseado. autonext está activado.
* Agregue el puré restante del segundo recipiente al puré parcial del primer recipiente. autonext está deshabilitado.

Los reposos en un plan de macerado en un ambiente de 2 o 3 marmitas tienen el siguiente principio:

* La parte del puré a cocinar se asigna a la primera caldera.
* El puré residual con mantenimiento de temperatura se asigna a la segunda o tercera caldera.
* La recarga siempre se asigna a la segunda o tercera tetera.

## webhook

El parámetro de relé blanco del PIN debe configurarse en "-" para que los elementos del webhook se muestren en la interfaz web. Además, se requieren la URL del webhook y el comando de sonido:

![webhook](/docs/img/kessel_webhook1.jpg)

Ejemplo Shelly 13:00:

Enciende Shelly 13:00: <http://192.168.1.5/relay/0?turn=on>\
Apague a Shelly a la 1:00 p. m.: <http://192.168.1.5/relay/0?turn=off>

La URL del webhook para Shelly 1PM es: <http://192.168.1.5/relay/0?turn=> (sin encendido ni apagado). El parámetro del interruptor del webhook debe estar configurado en "activado/desactivado".

URL Tasmota: <http://192.168.x.x/cm?cmnd=Power1%201>

## 🔧 Control de caldera: directo versus híbrido

Dependiendo de la estructura, el Brautomat puede funcionar con **1 a 3 calderas**. Cada caldera controla su propia placa mediante un GPIO.  
El Brautomat está diseñado para funcionar automáticamente de manera estable en todos los entornos.

### ⚙️ Dos posibles tipos de control

| Variante | Descripción | Ventajas | Notas |
|-----------|---------------|-----------|-----------|
| **Control directo** | El mando a la encimera se realiza directamente. Todas las señales se envían directamente a la salida del programa principal (por ejemplo, `loop()` o ticker). | • Estructura más simple<br>• No se requiere memoria adicional<br>• Velocidad máxima | • Bloquea la CPU brevemente (aprox. 5 ms por comando)<br>• No apto para varias calderas al mismo tiempo |
| **Control híbrido** | Los comandos se pasan a una tarea separada a través de una **cola** interna. La tarea procesa todos los comandos uno tras otro. | • Estable con múltiples calderas<br>• Sin colisiones de señales<br>• Procesamiento en segundo plano sin bloqueo de CPU | • Requisito mínimo de memoria adicional (~4 kB)<br> |

### 💡 Implementación

El Brautomat usa **control híbrido**. Esto se puede utilizar universalmente y funciona entodos los ambientes, especialmente en ambientes con 2 o 3 placas de inducción:

| Medio ambiente | Variante recomendada | Justificación |
|-----------|---------------------|-------------|
| **1 caldera** | Híbrido | misma función que el modo directo, sin desventajas |
| **2 calderas** | Híbrido | almacenamiento en búfer seguro de comandos |
| **3 calderas** | Híbrido | evita la superposición de señales |

> 🔸 El control directo sólo es adecuado para configuraciones especiales y muy sencillas (por ejemplo, calderas individuales con código mínimo).  
>
> 🔹 La solución híbrida es la **variante estándar y recomendada** para todos los ensamblajes ESP32 modernos.

### 📊 Comparación técnica

| Característica | **Directo** | **Híbrido** |
|----------|------------|-------------|
| Uso de memoria | ~0kB | ~4kB |
| Bloqueo de CPU | sí (aprox. 5 ms) | no |
| Estabilidad (múltiples calderas) | restringido | alto |
| Seguridad de sincronización | alto (1 tetera) | muy alta (1–3 calderas) |
| Ampliabilidad | bajo | muy bueno |
| Uso recomendado | sistemas individuales sencillos | sistemas universales de calderas múltiples |

---

### 🔍 Resumen

El control híbrido es el **modo activado predeterminado y recomendado**.  
Garantiza que todas las señales se transmitan de forma coordinada, segura y oportuna, incluso con varias calderas.  
sin bloquear el proceso principal.

> ✅ **En resumen:**  
>
> * Para **1 caldera**: sin desventajas, mismo rendimiento  
> * Para **2-3 calderas**: estabilidad total  
> * Un software para todas las variantes
