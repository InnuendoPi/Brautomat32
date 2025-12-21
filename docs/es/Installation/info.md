# Instalación

Para utilizar Brautomat, se debe actualizar el firmware. Además, el microcontrolador ESP debe estar conectado al WiFi local.

## Firmware flash con MS Windows

La versión Brautomat32 es para ESP32 y está basada en el marco IDF5.

* [ESP32 IDF5](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/main/Brautomat32.zip): Brautomat32.zip

El firmware se instala mediante el script "Flashen.cmd" contenido en el archivo ZIP. El archivo ZIP se descomprime en cualquier carpeta. El microcontrolador ESP se conecta al PC/portátil mediante un cable USB. Al hacer doble clic en el script Flashen.cmd, se inicia la actualización del firmware.

El sistema operativo MS Windows crea automáticamente un puerto COM serie al conectar el microcontrolador ESP a un puerto USB de la PC o computadora portátil.

![Administrador de dispositivos de Windows](/docs/img/com.jpg)

Se encontró un dispositivo ESP en COM7 en la imagen. En casos excepcionales, MS Windows no proporciona automáticamente un puerto COM serie. Los controladores USB para microcontroladores ESP están disponibles en los siguientes sitios web: (MS Win y macOS)

[![ESP32 Controladores](https://img.shields.io/static/v1?label=Treiber&message=ESP32&logo=arduino&logoColor=white&color=blue)](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)

El script Flashen.cmd utiliza la herramienta esptool.exe <https://github.com/espressif/esptool>. ESPTool está disponible gratuitamente para varios sistemas operativos (macOS, Linux). La versión de Windows de 64 bits está incluida en el archivo ZIP. ESPTool tiene licencia GPL v2. Consulte el [archivo de LICENCIA](https://github.com/espressif/esptool/blob/master/LICENSE) adjunto para obtener una copia.

### Actualización manual de MS Windows, macOS y Linux

Si no se puede utilizar el script, el firmware se puede transferir manualmente al microcontrolador ESP.

ESP32 Paso 1 Eliminar Flash:

```json
esptool.exe --chip ESP32 borrar-flash
```

ESP32 Paso 2 Actualización del firmware:

```json
esptool.exe --chip ESP32 --baud 921600 --antes del reinicio predeterminado --después del reinicio completo write-flash 0x1000 bootloader.bin 0x8000 particiones.bin 0xe000 boot_app0.bin 0x10000 firmware.bin 0x350000 LittleFS.bin
```

### Actualización del firmware con macOS

Descargar: [pyflasher](https://github.com/marcelstoer/nodemcu-pyflasher/releases)

En macOS, la actualización del firmware se divide en dos pasos. En el primer paso, el firmware Brautomat.ino.bin se instala en el ESP usando la herramienta pyflasher.

![macOS](/docs/img/flashen_macos.png)

Luego, el Brautomat debe estar conectado a la WLAN. Una vez que Brautomat esté conectado al WiFi, se debe instalar el sistema de archivos.\
Abrir en el navegador: <http://Brautomat.local/update>

Después de hacer clic en el botón “Sistema de archivos”, el archivo LittleFS.bin se selecciona e instala haciendo clic en Actualizar sistema de archivos.

## configuración de red inalámbrica

Después de actualizar el firmware, Brautomat se inicia en el modo AccessPoint. Se hace visible una WLAN abierta con el nombre _Brautomat_. Se debe establecer una conexión con esta WLAN. Una vez establecida la conexión, el navegador web abre el portal de configuración WLAN. Si el portal no se abre automáticamente, se deberá introducir manualmente la dirección <http://192.168.4.1> en el navegador web.

![Configuración WLAN](/docs/img/wlan1.jpg)

La configuración WLAN se muestra mediante el botón “Configurar WiFi”

![Configuración WLAN](/docs/img/wlan2.jpg)

Aquí se debe introducir la WLAN (SSID y contraseña). Con _Save_ el Brautomat se reinicia y se conecta a la WLAN. Se puede acceder a la interfaz web de Brautomat en la WLAN local a través de la dirección <http://Brautomat.local>.

Esto completa la instalación básica. El proceso de actualización del firmware y configuración de WLAN sólo es necesario realizar una vez. El Brautomat ahora debe estar configurado. La configuración se describe en la sección _Configuración básica_. La siguiente sección _Actualización_ se puede omitir inicialmente.

> **Nota:**\
El Brautomat32 intenta establecer una conexión con la configuración WLAN (SSID y contraseña) durante un máximo de 20 segundos. Si no se puede establecer una conexión, por ejemplo si la contraseña se ingresa incorrectamentese utilizó, entonces el Brautomat32 se inicia nuevamente en modo AccessPoint.\
En casos excepcionales y normalmente sólo cuando la señal WLAN es débil, el Brautomat32 no encuentra una WLAN adecuada y después de aprox. 20 segundos. En este caso, sólo será útil reiniciar el Brautomat32.

##Actualizaciones

Las actualizaciones se pueden instalar en Brautomat a través del menú "Actualizar". Se puede importar un nuevo firmware mediante “WebUpdate” o “File Update”. Al actualizar el firmware a través de WebUpdate, el firmware descarga la versión actual de Internet desde el repositorio de github. Cuando se actualiza mediante actualización de archivos, el firmware se carga desde la PC local. No se requiere un cable USB ni el script de la instalación.

El área de memoria de un microcontrolador ESP se divide en firmware y sistema de archivos. Durante el funcionamiento en curso, las configuraciones, recetas y otros archivos solo se pueden guardar o cambiar en el sistema de archivos. Solo se puede acceder al área de Firmware con fines de lectura. Durante una actualización, el área del firmware se reinstala por completo y los archivos individuales se reemplazan en el sistema de archivos.

### Actualización web

![Actualización web](/docs/img/webupdate.jpg)

WebUpdate reinicia Brautomat varias veces. Primero, se actualiza el firmware. Después de otro reinicio, el marco se actualizará. El proceso WebUpdate se registra en el archivo webUpdateLog.txt.

Si está activada la opción _WebUpdate con versión de prueba_, el WebUpdate se realizará con la versión de desarrollador actual. Estas son versiones de prueba. Las nuevas funciones del firmware (normalmente) se almacenan inicialmente como una versión de prueba en el repositorio de github. No se recomiendan las versiones de prueba para uso productivo.

### Actualización de archivo

La actualización del firmware mediante la selección FileUpdate se realiza en unos pocos pasos:

Primero, se debe descargar el firmware actual. A continuación se descomprimirá el archivo ZIP.\
En la interfaz web Brautomat, seleccione el elemento del menú Actualizar y luego FileUpdate. Se muestra un sitio web de actualización simple (imagen 1):

![Actualización de archivo](/docs/img/dateiupdate2.jpg)

En Firmware con el botón "Seleccionar archivo", ahora se debe seleccionar el archivo _firmware.bin_ del archivo ZIP (en la Figura 2). Al hacer clic en Actualizar firmware se inicia la actualización.

El sistema de archivos de Brautomat también se puede actualizar.

> **Nota:**\
La función Actualizar sistema de archivos reconstruye el sistema de archivos. Actualizar FileSystem sobrescribe todos los ajustes y configuraciones. Además de la configuración, esto también incluye recetas y perfiles de caldera de preparación de puré. En casi todos los casos, una actualización de firmware de archivos seguida de una WebUpdate es la opción correcta porque WebUpdate actualiza archivos individuales en el sistema de archivos después de la actualización del firmware.
