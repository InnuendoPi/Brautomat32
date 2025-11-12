# Configurar la placa

## Creando la caldera de preparación de puré

En la primera sección _Maischeplan_, la caldera MashSud se crea usando el engranaje en la parte superior derecha.

![Crear hervidor de puré](/docs/img/IDS-einrichten.jpg)

## Configurar una placa

En primer lugar hay que configurar una placa de cocina. En esta configuración básica se instala una placa de inducción GGM IDS.

La primera configuración se refiere al tipo de IDS, donde se puede seleccionar IDS1 o IDS2. A esto le siguen tres parámetros de control:

* PIN blanco [relé] - Predeterminado: D7
* PIN amarillo [Comando] - Predeterminado: D6
* PIN azul [Interrupción] - Predeterminado: - (sin usar) o D5

Estos GPIO (D5, D6 y D7) están preconfigurados para el cable de conexión GGM IDS con conector JST-HX o el bloque de terminales de tornillo.

A continuación, se debe asignar un sensor de temperatura al hervidor MashBud. La selección se realiza a partir de una lista de sensores que ya han sido configurados. En esta configuración básica sólo está presente el sensor _Sensor IDS2_, que se selecciona correspondientemente.

_Nota_: _A una placa de cocción se le debe asignar permanentemente un sensor de temperatura. El valor del sensor se denomina temperatura real o temperatura actual y se compara continuamente con la temperatura de reposo (temperatura objetivo) durante el proceso de maceración._

![Configurar caldera de maceración](/docs/img/IDS-configure.jpg)

Los parámetros de la pestaña "Control de temperatura" se explican detalladamente en la sección "Todos los parámetros". Para la configuración básica, inicialmente se adoptan los valores predeterminados.

![Configurar caldera de macerado](/docs/img/IDS-temperaturen.jpg)

## Configurando el controlador PID

Después de la configuración básica, el controlador PID debe configurarse en la pestaña Administrador PID. El controlador PID calcula automáticamente la potencia necesaria para que la placa lleve la temperatura del macerado (temperatura real) a la temperatura de reposo. Una configuración PID precisa garantiza que la temperatura de descanso permanezca constante durante todo el período de descanso.

El controlador PID se configura con dos parámetros:

* Ku (ganancia máxima) – factor de ganancia
* Pu (período final) – duración del período

Los parámetros PID P, I y D se calculan a partir de estos dos valores. Estos parámetros son individuales para cada sistema de elaboración de cerveza y se determinan mediante el proceso AutoTune. El proceso de AutoTune se describe detalladamente en la sección "AutoTune paso a paso".

Para esta configuración básica se ingresan los siguientes valores para Ku y Pu. A continuación se selecciona la regla de ajuste PID _IDS PID Modo_:

![IDS](/docs/img/IDS-AutoTune-erg.jpg)

Tan pronto como se ingresan los valores de Ku y Pu, el algoritmo PID seleccionado determina automáticamente los tres valores P, I y D. Más adelante se proporcionará una explicación detallada de todos los parámetros.

## Valores iniciales para diferentes tamaños de caldera

Para una caldera de 36 litros con un volumen de puré de aproximadamente 20 litros:

```texto
Factor de amplificación Ku (ganancia máxima): 182
Duración del período Pu (período final): 2245
```

Para una caldera de 70 litros con un volumen de puré de más de 50 litros:

```texto
Factor de amplificación Ku (ganancia máxima): 225
Duración del período Pu (período final): 1500
```

## Finalización de la configuración básica

Después de guardar la configuración, la configuración básica estará completa. Ahora puede preparar cerveza con un sensor de temperatura y una tetera para hacer puré.

_Nota: También se requiere un plan de macerado para el proceso de elaboración de cerveza real._
