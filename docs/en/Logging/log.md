# Logging

![media](/docs/img/logging.jpg)

Logging is available in development builds.
It helps with troubleshooting firmware issues and configuration errors.

A serial monitor is required. The examples below use Microsoft Visual Studio Code with the Microsoft Serial Monitor extension.

Set serial monitor to:

* baud rate `115200`
* line ending `CRLF`

![Microsoft Visual Studio Code](/docs/img/vscode.jpg)

## Logging settings

You can enable serial logging channels in system settings:

* Configuration - read/write config messages
* Sensors - sensor messages
* Actors - actuator messages
* Mash kettle - messages for kettle 1
* Brew kettle - messages for kettle 2
* NACHGUSS kettle - messages for kettle 3
* Fermenter - fermenter mode messages
* System - general system messages
* Mashing process - mash process events
* Nextion Display - display messages

Each channel supports `off`, `error`, `info`, `verbose`.

### Off

No output for this channel.

### Error

Only error messages.

```json
[E][SENSOREN.cpp:1600] setSenErr(): Test sensor error: #0 Sensor_Sud error state: 1
[E][SENSOREN.cpp:76] Update(): Sen: Sensor_Sud error #1 could not read temperature data
```

### Info

Error messages plus process information.

```json
[I][KETTLES.cpp:2044] debConsole(): set new powerlast: 1071746ms
[I][KETTLES.cpp:1922] webhook(): webhook response:
[I][KETTLES.cpp:2044] debConsole(): webhook on: 5000ms (mDutyCycle 5000 * Power 100 / 100)
```

### Verbose

Includes error + info and full diagnostic output, including SSE broadcasts.

```json
[V][SYSTEM.cpp:847] SSEBroadcastJson(): kettle hlt: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:919] SSEBroadcastJson(): kettle sud: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:839] SSEBroadcastJson(): kettle mash: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

System verbose logging also prints curl-like web server request traces.

## Log line format

Example:

```json
[V][SYSTEM.cpp:839] SSEBroadcastJson(): kettle mash: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Parts:

```json
[V] output type (Verbose)
```

```json
[SYSTEM.cpp:839] source file and line
```

```json
SSEBroadcastJson(): calling function
```

Message payload:

```json
kettle mash: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

## Boot log example

```json
05:42:16.904 > [I][SYSINFO] starting Brautomat32 V 1.60.x Release
05:42:22.467 > [I][SYSINFO] mount filesystem LittleFS: ok, free heap mem: 192924
05:42:28.384 > [I][SYSINFO] mDNS http://Brautomat.local IP address 192.168.100.112 time: 05:42:27 RSSI: -83
```

This shows firmware version, mDNS host, IP, and filesystem mount status.

## Test sensor error

You can trigger a test sensor error via URL.
Sensors use IDs starting at `0`.

```json
http://Brautomat.local/setSenErr?id=0
```

Open the same URL again to clear the error.

* sensor 1 -> `id=0`
* sensor 2 -> `id=1`
* sensor 3 -> `id=2`

This is useful for testing `Behavior in case of sensor error`.

## Logging with Microsoft VSCode

You can run VSCode in portable mode.

Download ZIP: [Microsoft VSCode](https://code.visualstudio.com/docs/?dv=winzip)

1. Extract ZIP into any folder.
2. Create a folder named `data` next to `Code.exe`.
3. Start `Code.exe`.

![Microsoft Visual Studio Code](/docs/img/vscode_4.jpg)

Install extension `Serial Monitor` by Microsoft.

![Microsoft Visual Studio Code](/docs/img/vscode_1.jpg)
![Microsoft Visual Studio Code](/docs/img/vscode_2.jpg)

Open output (`Ctrl+Shift+U`), select `Serial Monitor`, then choose COM port and `115200` baud.
Start with `Start Monitoring`.

![Microsoft Visual Studio Code](/docs/img/vscode_3.jpg)
