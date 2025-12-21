# Registro

![medios](/docs/img/logging.jpg)

El registro solo está disponible en la versión de desarrollo. El registro integrado ayuda a solucionar problemas, tanto de errores en el firmware de Brautomat32 como de errores del usuario. Se requiere un monitor en serie para la salida. A continuación se muestra Microsoft Visual Studio Code con la extensión Microsoft Serial Monitor. Microsoft Visual Code es gratuito y está disponible como versión independiente (no requiere instalación).

El monitor serie debe configurarse a una velocidad de baudios de 115200 y CRLF además del puerto COM.

![Código de Microsoft Visual Studio](/docs/img/vscode.jpg)

## Configuración de registro

Se pueden activar varios canales para salida en serie a través de la configuración del sistema.

* Configuración: este canal muestra mensajes cuando se lee o guarda la configuración.
* Sensores: los mensajes sobre los sensores se emiten en este canal
* Actores: un canal para informar sobre actores.
* Caldera de puré: en este canal se muestran mensajes sobre la primera caldera
* Hervidor de cerveza: todos los mensajes sobre el hervidor de cerveza
* Caldera de refundición - Mensajes sobre la caldera de refundición
* Fermentador - Mensajes sobre el modo fermentador
* Sistema: los mensajes del sistema se muestran en este canal.
* Proceso de maceración: el proceso de maceración se registra en este canal
* Pantalla Nextion: registro de la pantalla

Cada canal tiene las opciones apagado, error, información y detallado.

* Desactivado: sin registro.

El canal no envía un registro a la consola serie.

* Error: solo se registran los errores.

Tipo de salida de depuración Error solo registra errores. En VSCode, el tipo de ERROR se muestra en rojo.

```json
[E][SENSOREN.cpp:1600] setSenErr(): Error del sensor de prueba: #0 Estado de error Sensor_Sud: 1
[E][SENSOREN.cpp:76] Actualización(): Sen: Error #1 de Sensor_Sud no pudo leer los datos de temperatura
```

* Información - Proceso de registro

Depurar procesos de registro de información de tipo de salida. El tipo de información contiene la salida del tipo de error. En VSCode, el tipo INFO se muestra en verde.

```json
[I][KETTLES.cpp:2044] debConsole(): establecer nueva duración de energía: 1071746ms
[I][KETTLES.cpp:1922] webhook(): respuesta del webhook: 
[I][KETTLES.cpp:2044] debConsole(): webhook activado: 5000 ms (mDutyCycle 5000 * Power 100/100)
```

* Detallado: se genera toda la información disponible.

La salida de depuración de tipo detallado incluye todos los tipos anteriores. Además, todas las transmisiones SSE se registran en formato detallado. En VSCode, el tipo detallado se muestra en azul.

```json
[V][SYSTEM.cpp:847] SSEBroadcastJson(): hervidor hlt: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:919] SSEBroadcastJson(): hervidor de agua: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:839] SSEBroadcastJson(): puré de hervidor: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Además, la configuración Sistema - detallado genera un registro tipo curl de todas las solicitudes GET y POST del servidor web.

La salida en la consola serie tiene un formato fijo. Ejemplo:

```json
[V][SYSTEM.cpp:839] SSEBroadcastJson(): puré de hervidor: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Las partes individuales:

```json
[V] El tipo de salida (aquí Detallado)
```

```json
[SYSTEM.cpp:839] La ubicación del código fuente de redondeo
```

```json
SSEBroadcastJson(): La función de llamada
```

El mensaje de depuración real sigue después de los dos puntos:

```json
puré de hervidor: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Cuando Brautomat está conectado a una consola serie, aparece el siguiente resultado en el momento del arranque

```json
05:42:16.904 > [I][SYSINFO] iniciando la versión Brautomat32 V 1.56
05:42:22.467 > [I][SYSINFO] montar el sistema de archivos LittleFS: ok, memoria del montón libre: 192924
05:42:28.384 > [I][SYSINFO] mDNS http://Brautomat.dirección IP local 192.168.100.112 hora: 05:42:27 RSSI: -83
```

Además der versión de Brautomat se muestran el nombre MDNS y la dirección IP actual. La línea _mount filesystem LittleFS: ok, free heap mem:_ indica que el sistema de archivos ha sido montado.

## Error del sensor de prueba

Se puede generar un error de sensor a través de una URL web. Los sensores en Brautomat tienen un ID que comienza con 0. Se puede generar un error de sensor mediante una llamada web:

```json
http://Brautomat.local/setSenErr?id=0
```

Para corregir el error del sensor, se vuelve a acceder exactamente a la misma URL. El primer sensor tiene ID 0, el segundo tiene ID 1 y el tercero tiene ID 2. En la URL solo necesita reemplazar el último 0 con el ID del sensor deseado.

Con esta prueba de error del sensor se puede comprobar muy fácilmente el parámetro “Comportamiento en caso de error del sensor”.

## Iniciar sesión con Microsoft VSCode

Microsoft VSCode se puede configurar para iniciar sesión en solo unos pocos pasos. No es necesario instalar Microsoft VSCode; la versión portátil es suficiente.

Descargue Microsoft VSCode como un archivo ZIP: [Microsoft VSCode](https://code.visualstudio.com/docs/?dv=winzip)

Extraiga el archivo ZIP a cualquier directorio. Vaya al directorio en el explorador de archivos y cree una carpeta llamada datos. La carpeta de datos pone MS VScode en modo portátil y se puede utilizar sin instalación.

![Código de Microsoft Visual Studio](/docs/img/vscode_4.jpg)

Inicie Microsoft VSCode haciendo doble clic en Code.exe.

![Código de Microsoft Visual Studio](/docs/img/vscode_1.jpg)

La extensión Serial Monitor es necesaria en VScode para iniciar sesión. Haga clic en el botón Extensiones a la izquierda e ingrese "monitor serie" en el campo de búsqueda.

![Código de Microsoft Visual Studio](/docs/img/vscode_2.jpg)

Instale la extensión Serial Monitor de Microsoft. El monitor serie está incluido en la pantalla Salida. Haga clic en el elemento de salida en el menú Ver o abra la salida con la combinación de teclas Ctrl Shift U. La pantalla Extensiones se puede ocultar o mostrar haciendo clic en el botón Extensión. Ahora haga clic en la pestaña Serial Monitor en la ventana Salida. Ahora todo lo que tiene que hacer es seleccionar el puerto COM y establecer la velocidad en baudios en 115200. El registro se inicia con el botón Iniciar monitoreo.

![Código de Microsoft Visual Studio](/docs/img/vscode_3.jpg)
