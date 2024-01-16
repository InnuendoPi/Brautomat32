# Installation

Die Installation unterteilt sich in Firmware flashen und WLAN Konfigura

## Firmware flash with MS Windows scriptbased

Download: <https://github.com/InnuendoPi/Brautomat/releases/download/Release/Firmware.zip>

The firmware is installed using the included “Flashen.cmd” script. To do this, the archive Firmware.zip is unpacked in any folder. The Wemos D1 mini is connected to the PC via USB cable

The MS Windows operating system automatically creates a serial COM port when you connect the Wemos D1 mini. Depending on the system, this can be COM3, COM4 or higher. The Flashen.cmd script is preset to the serial port COM3. If the Wemos D1 Mini is not connected to COM3, “COM3” must be replaced by the correct COM port in lines 6 and 8 of the Flashen.cmd script.

```bash
1: @ECHO OFF
2: CLS
3: SET SCRIPT_LOCATION=%~dp0
4: cd %SCRIPT_LOCATION%
5: echo erase flash
6: esptool.exe -cp COM3 -cd nodemcu -ce
7: echo Flash firmware and LittleFS
8: esptool.exe -cp COM3 -cd nodemcu -ca 0x000000 -cf Brautomat.ino.bin -ca 0x200000 -cf Brautomat.mklittlefs.bin
9: echo ESC to quit
10: pause
11: exit
```

The COM port can be found on Windows systems via the Device Manager:

![COM Port](/docs/img/com.jpg)

In this example an ESP device was found on COM7. So in lines 6 and 8, COM3 must be replaced by COM7.

Script Flashen.cmd uses esptool.exe <https://github.com/igrr/esptool-ck/releases>.\
ESPtool-ck Copyright (C) 2014 Christian Klippel <ck@atelier-klippel.de>. This code is licensed under GPL v2.

## manual flash with MS Windows and Linux

If the script cannot be used, the firmware must be transferred manually to the Wemos D1 mini.

Step 1 Flash erase:

- `esptool.exe -cp COM3 -cd nodemcu -ce\`

Step 2 Firmware flash:

- `esptool.exe -cp COM3 -cd nodemcu -ca 0x000000 -cf Brautomat.ino.bin -ca 0x200000 -cf Brautomat.mklittlefs.bin\`

COM3 should be replaced with the actual serial port. The command lines Step 1 and 2 assume that the files esptool, brautomat.ino.bin and Brautomat.mklittlefs.bin are in the same directory.

In rare cases, no USB port is automatically provided under MS Windows. A USB driver is available here: <http://www.wch.cn/download/CH341SER_ZIP.html>

## Firmware flash with macOS

Download: [pyflasher](https://github.com/marcelstoer/nodemcu-pyflasher/releases)

With macOS, flashing the firmware is divided into two steps. In the first step, the firmware brautomat.ino.bin is installed on the Wemos using the pyflasher tool.

![macOS](/docs/img/flashen_macos.png)

The vending machine must then be connected to the WLAN. As soon as the bread machine is connected to the WLAN, the file system must be installed.\
Open in browser: <http://brautomat.local/update>

After clicking on the "Filesystem" button, the file brautomat.mklittlefs.bin is selected and installed by clicking on Update Filesystem.

## WLAN configuration

After flashing the firmware, the automatic machine starts in AccessPoint mode. An open WLAN called Brautomat becomes visible. A connection must be established with this WLAN. Once the connection is established, the web browser opens the WLAN configuration portal. If the portal does not open automatically, <http://192.168.4.1> must be entered manually as the address.

![IDS](/docs/img/wlan1.jpg)

The WLAN configuration is displayed using the “Configure WiFi” button

![IDS](/docs/img/wlan2.jpg)

The WLAN (SSID) and the password must be configured here. When you save, the bread machine restarts and connects to the WiFi. The Brautomat web interface can be accessed via <http://brautomat.local>.

## Updates

Updates can be installed in the brewing machine via the “Update” menu. A new firmware can be imported via “WebUpdate” or “File Update”. When updating the firmware via WebUpdate, the firmware downloads the current version from the Internet from the github repository. When updating via file update, the firmware is uploaded from the local PC. A USB cable or the script from the installation are not required.

The WebUpdate restarts the bread machine several times. First, the firmware is updated. After another restart, the framework will be updated. The WebUpdate is logged in the webUpdateLog.txt file.

If the _WebUpdate with trial version_ option is activated, the WebUpdate will be carried out with the current developer version. These are test versions. New functions in the firmware are (usually) initially stored in the repository as a test version. Trial versions are not recommended for productive use.

## FileUpdate

An update of the firmware via the FileUpdate selection takes place in just a few steps:

Download latest [firmware](https://github.com/InnuendoPi/Brautomat/blob/main/tools/Firmware.zip). The ZIP archive will then be unpacked.\
In the Brautomat web interface, select the Update menu item and then FileUpdate. A simple update website (picture 1) is displayed:

![FileUpdate](/docs/img/dateiupdate2.jpg)

Under Firmware with the "Select file" button, the file _Brautomat.ino.bin_ must now be selected from the Firmware.ZIP archive (in Figure 2). Clicking on Update Firmware starts the update.

The Brautomat file system can also be updated.

_Please note:_

Update FileSystem deletes all settings and configurations. In addition to the configuration, this also includes mash brew boiler profiles and recipes. The Update FileSystem function is intended more for emergencies. In almost all cases, a file update firmware followed by a WebUpdate is the right choice because the WebUpdate updates individual files in the file system after the firmware update. The Update FileSystem function rebuilds the file system.
