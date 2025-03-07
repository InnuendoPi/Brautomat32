# Logging

![media](/docs/img/logging.jpg)

The integrated logging helps with troubleshooting, both for errors in the Brautomat32 firmware and for user errors. A serial monitor is required for the output. Microsoft Visual Studio Code with the Microsoft Serial Monitor extension is shown below. Microsoft Visual Code is free of charge and available as a stand-alone version (no installation required).

The serial monitor must be set to a baud rate of 115200 and CRLF in addition to the COM port.

![Microsoft Visual Studio Code](/docs/img/vscode.jpg)

> **Notes:**\
Logging should be completely deactivated on a wedding day.\
The Logging option is not available on the ESP8266.

## Logging settings

Various channels for serial output can be activated via the system settings.

* Configuration - messages are displayed in this channel when the configuration is read or saved.
* Sensors - messages about the sensors are output in this channel
* Actors - a channel for messages about actors
* Mash kettle - messages for the first kettle are displayed in this channel
* Brew kettle - all messages for the brew kettle
* HLT - messages for the HLT kettle
* System - system messages are displayed in this channel
* Mashing process - the mashing process is logged in this channel
* Nextion Display - logging for the display

Each channel has the options Off, Error, Info and Debug.

* Off - no logging.

The channel does not output a log to the serial console.

* Error - Only errors are logged.

Debug Output Error Log errors. The ERROR type is displayed in red in VSCode.

```json
[1127953][E][SENSOREN.cpp:1600] setSenErr(): Test sensor error: #0 Sensor_Sud error state: 1
[1127972][E][SENSOREN.cpp:76] Update(): Sen: Sensor_Sud error #1 could not read temperature data
```

* Info - Log process

Debug outputs of type Info log processes. The Info type contains the outputs of the Error type. In VSCode, the INFO type is displayed in green.

```json
[1071747][I][KETTLES.cpp:2044] debKonsole(): set new powerlast: 1071746ms
[1071821][I][KETTLES.cpp:1922] webhook(): webhook response: 
[1071822][I][KETTLES.cpp:2044] debKonsole(): webhook on: 5000ms (mDutyCycle 5000 * Power 100 / 100)
```

* Debug - all available information is output.

Debug outputs of type Verbose contain all previous types. In addition, all SSE broadcasts of type Verbose are logged. The Verbose type is displayed in blue in VSCode.

```json
[1026335][V][SYSTEM.cpp:847] SSEBroadcastJson(): kettle hlt: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[1026349][V][SYSTEM.cpp:919] SSEBroadcastJson(): kettle sud: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[1026371][V][SYSTEM.cpp:839] SSEBroadcastJson(): kettle mash: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

## Test sensor error

A sensor error can be triggered via a web URL. The sensors in the Brautomat have an ID starting with 0. A sensor error can be generated via a web call:

```json
http://brautomat.local/setSenErr?id=0

```

To rectify the sensor error, the exact same URL is called up again. The first sensor has the ID 0, the second the ID 1 and the third the ID 2. In the URL, only the last 0 must be replaced by the desired sensor ID.

This sensor error test makes it very easy to check the ‘Behaviour on sensor error’ parameter.
