# Logging

![media](/docs/img/logging.jpg)

Logging is only available in the development version. The integrated logging helps with troubleshooting, both for errors in the Brautomat32 firmware and for user errors. A serial monitor is required for output. The following shows Microsoft Visual Studio Code with the Microsoft Serial Monitor extension. Microsoft Visual Code is free and available as a standalone version (no installation required).

The serial monitor must be set to a baud rate of 115200 and CRLF in addition to the COM port.

![Microsoft Visual Studio Code](/docs/img/vscode.jpg)

## Logging settings

Various channels for serial output can be activated via the system settings.

* Configuration - this channel displays messages when the configuration is read or saved.
* Sensors - messages about the sensors are output in this channel
* Actors - a channel for reporting about actors
* Mash boiler - messages about the first boiler are displayed in this channel
* Brew kettle - all messages about the brew kettle
* Re-casting boiler - Messages about the re-casting boiler
* Fermenter - Messages about fermenter mode
* System - system messages are displayed in this channel
* Mashing process - the mashing process is logged in this channel
* Nextion Display - Logging for the display

Each channel has the options off, error, info and verbose.

* Off - no logging.

The channel does not output a log to the serial console.

* Error - Only errors are logged.

Debug output type Error only logs errors. In VSCode, the ERROR type is displayed in red.

```json
[E][SENSOREN.cpp:1600] setSenErr(): Test sensor error: #0 Sensor_Sud error state: 1
[E][SENSOREN.cpp:76] Update(): Sen: Sensor_Sud error #1 could not read temperature data
```

* Info - Log process

Debug output type info log processes. The Info type contains the Error type output. In VSCode, the INFO type is displayed in green.

```json
[I][KETTLES.cpp:2044] debConsole(): set new powerlast: 1071746ms
[I][KETTLES.cpp:1922] webhook(): webhook response: 
[I][KETTLES.cpp:2044] debConsole(): webhook on: 5000ms (mDutyCycle 5000 * Power 100 / 100)
```

* Verbose - all available information is output.

Verbose type debug output includes all previous types. In addition, all SSE broadcasts are logged in Verbose type. In VSCode, the Verbose type is displayed in blue.

```json
[V][SYSTEM.cpp:847] SSEBroadcastJson(): kettle hlt: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:919] SSEBroadcastJson(): kettle sud: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:839] SSEBroadcastJson(): kettle mash: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

In addition, the System - verbose setting outputs curl-like logging of all WebServer GET and POST requests.

Output on the serial console has fixed formatting. Example:

```json
[V][SYSTEM.cpp:839] SSEBroadcastJson(): kettle mash: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

The individual parts:

```json
[V] The output type (here Verbose)
```

```json
[SYSTEM.cpp:839] The rounding source code location
```

```json
SSEBroadcastJson(): The calling function
```

The actual debug message follows after the colon:

```json
kettle mash: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

When the Brautomat is connected to a serial console, the following output appears at boot time

```json
05:42:16.904 > [I][SYSINFO] starting Brautomat32 V 1.56 Release
05:42:22.467 > [I][SYSINFO] mount filesystem LittleFS: ok, free heap mem: 192924
05:42:28.384 > [I][SYSINFO] mDNS http://Brautomat.local IP address 192.168.100.112 time: 05:42:27 RSSI: -83
```

In addition to der version of Brautomat the MDNS name and the current IP address are output. The line _mount filesystem LittleFS: ok, free heap mem:_ indicates that the file system has been mounted.

## Test sensor error

A sensor error can be triggered via a web URL. The sensors in Brautomat have an ID starting with 0. A sensor error can be generated via a web call:

```json
http://Brautomat.local/setSenErr?id=0
```

To fix the sensor error, the exact same URL is accessed again. The first sensor has ID 0, the second has ID 1 and the third has ID 2. In the URL you only need to replace the last 0 with the desired sensor ID.

With this sensor error test, the parameter “Behavior in the event of a sensor error” can be checked very easily.

## Logging with Microsoft VSCode

Microsoft VSCode can be set up for logging in just a few steps. There is no need to install Microsoft VSCode; the portable version is sufficient.

Download Microsoft VSCode as a ZIP file: [Microsoft VSCode](https://code.visualstudio.com/docs/?dv=winzip)

Extract the ZIP file into any directory. Go to the directory in file explorer and create a folder called data. The data folder puts MS VScode in portable mode and can be used without installation.

![Microsoft Visual Studio Code](/docs/img/vscode_4.jpg)

Start Microsoft VSCode by double-clicking Code.exe.

![Microsoft Visual Studio Code](/docs/img/vscode_1.jpg)

The Serial Monitor extension is required in VScode for logging. Click on the Extensions button on the left and enter “serial monitor” in the search field.

![Microsoft Visual Studio Code](/docs/img/vscode_2.jpg)

Install the Serial Monitor extension from Microsoft. The serial monitor is included in the Output display. Click on the output item in the view menu or open the output with the Ctrl Shift U key combination. The Extensions display can be hidden or shown by clicking on the Extension button. Now click on the Serial Monitor tab in the Output window. Now all you have to do is select the COM port and set the baud rate to 115200. Logging is started with the Start Monitoring button.

![Microsoft Visual Studio Code](/docs/img/vscode_3.jpg)
