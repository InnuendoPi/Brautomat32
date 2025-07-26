# Logging

![media](/docs/img/logging.jpg)

Logging is only availible in development version. The integrated logging helps with troubleshooting, both for errors in the Brautomat32 firmware and for user errors. A serial monitor is required for the output. Microsoft Visual Studio Code with the Microsoft Serial Monitor extension is shown below. Microsoft Visual Code is free of charge and available as a stand-alone version (no installation required).

Serial monitor must be set to a baud rate of 115200 and CRLF in addition to the COM port.

![Microsoft Visual Studio Code](/docs/img/vscode.jpg)

## Logging settings

Various channels for serial output can be activated via the system settings.

* Configuration - messages are displayed in this channel when the configuration is read or saved.
* Sensors - messages about the sensors are output in this channel
* Actors - a channel for messages about actors
* Mash kettle - messages for the first kettle are displayed in this channel
* Brew kettle - all messages for the brew kettle
* HLT - messages for the HLT kettle
* Fermenter - log channel for fermenter mode
* System - system messages are displayed in this channel
* Mashing process - the mashing process is logged in this channel
* Nextion Display - logging for the display

Each channel has the options Off, Error, Info and verbose.

* Off - no logging.

The channel does not output a log to the serial console.

* Error - Only errors are logged.

Debug Output type Error logs errors only. The ERROR type is displayed in red in VSCode.

* Info - Log process

Debug outputs of type Info log processes. The Info type contains the outputs of the Error type. In VSCode, the INFO type is displayed in green.

* Debug - all available information is output.

Debug outputs of type Verbose contains all previous types. In addition, all SSE broadcasts of type Verbose are logged. The Verbose type is displayed in blue in VSCode.

![Logging sensors](/docs/img/logging_sen.jpg)

In addition system log type verbose includes a curl like output of all webserver GET and POST requests.

## Test sensor error

A sensor error can be triggered via a web URL. The sensors in the Brautomat have an ID starting with 0. A sensor error can be generated via a web call:

```json
http://brautomat.local/setSenErr?id=0

```

To stop test sensor error, the exact same URL is called up again. The first sensor has the ID 0, the second the ID 1 and the third the ID 2. In the URL, only the last 0 must be replaced by the desired sensor ID.

This sensor error test makes it very easy to check the ‘Behaviour on sensor error’ parameter.

## Logging with Microsoft VSCode

Microsoft VSCode can be set up for logging in just a few steps. It is not necessary to install Microsoft VSCode, the portable version is sufficient.

Download Microsoft VSCode ZIP file: [Microsoft VSCode](https://code.visualstudio.com/docs/?dv=winzip)

Unzip the ZIP file into a directory of your choice. Change to the directory in the file explorer and create a folder with the name data. The data folder sets MS VScode to portable mode and can be used without installation.

![Microsoft Visual Studio Code](/docs/img/vscode_4.jpg)

Start Microsoft VSCode by double-clicking on Code.exe

![Microsoft Visual Studio Code](/docs/img/vscode_1.jpg)

The Serial Monitor extension is required for logging in VScode. Click on the Extensions button on the left-hand side and enter "serial monitor" in the search field.

![Microsoft Visual Studio Code](/docs/img/vscode_2.jpg)

Install the Serial Monitor extension from Microsoft. The serial monitor is included in the Output display. Click on output in the view menu or open the output with the key combination Ctrl Shift U. The Extensions display can be shown or hidden by clicking on the Extension button. Now click on the Serial Monitor tab in the Output window. Now just select the COM port and set the baud rate to 115200. Logging is started with the Start Monitoring button.
