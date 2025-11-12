# Installation

In order to use the Brautomat, the firmware must be flashed. Additionally, the ESP microcontroller needs to be connected to the local WiFi.

## Flash firmware with MS Windows

The Brautomat32 version is for ESP32 and is based on the IDF5 framework.

* [ESP32 IDF5](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/main/Brautomat32.zip): Brautomat32.zip

The firmware is installed using the “Flashen.cmd” script contained in the ZIP archive. The ZIP archive is unpacked in any folder. The ESP microcontroller is connected to the PC/notebook via a USB cable. Double-clicking on the Flashen.cmd script starts flashing the firmware.

The MS Windows operating system automatically creates a serial COM port when connecting the ESP microcontroller to a USB port on the PC or notebook.

![Windows Device Manager](/docs/img/com.jpg)

An ESP device was found on COM7 in the image. In rare cases, a serial COM port is not automatically provided under MS Windows. USB drivers for ESP microcontrollers are available on the following websites: (MS Win and macOS)

[!"

The Flashen.cmd script uses the tool esptool.exe <https://github.com/espressif/esptool>. ESPTool is freely available for various operating systems (macOS, Linux). The Windows version 64bit is included in the ZIP archive. ESPTool is licensed under GPL v2. See the accompanying [LICENSE file](https://github.com/espressif/esptool/blob/master/LICENSE) for a copy.

### Manual flashing MS Windows, macOS and Linux

If the script cannot be used, the firmware can be transferred manually to the ESP microcontroller.

ESP32 Step 1 Delete Flash:

```json
esptool.exe --chip ESP32 erase-flash
```

ESP32 Step 2 Flash firmware:

```json
esptool.exe --chip ESP32 --baud 921600 --before default-reset --after hard-reset write-flash 0x1000 bootloader.bin 0x8000 partitions.bin 0xe000 boot_app0.bin 0x10000 firmware.bin 0x350000 LittleFS.bin
```

### Flashing firmware with macOS

Download: [pyflasher](https://github.com/marcelstoer/nodemcu-pyflasher/releases)

On macOS, flashing the firmware is divided into two steps. In the first step, the firmware Brautomat.ino.bin is installed on the ESP using the pyflasher tool.

![macOS](/docs/img/flashen_macos.png)

The Brautomat must then be connected to the WLAN. Once the Brautomat is connected to the WiFi, the file system must be installed.\
Open in browser: <http://Brautomat.local/update>

After clicking on the “File system” button, the file LittleFS.bin is selected and installed by clicking on Update file system.

## WLAN configuration

After flashing the firmware, the Brautomat starts in AccessPoint Mode. An open WLAN with the name _Brautomat_ becomes visible. A connection must be established with this WLAN. Once the connection is established, the web browser opens the WLAN configuration portal. If the portal does not open automatically, the address <http://192.168.4.1> must be entered manually in the web browser.

![WLAN configuration](/docs/img/wlan1.jpg)

The WLAN configuration is displayed using the “Configure WiFi” button

![WLAN configuration](/docs/img/wlan2.jpg)

The WLAN (SSID and password) must be entered here. With _Save_ the Brautomat restarts and connects to the WLAN. The web interface of Brautomat can be reached in the local WLAN via the address <http://Brautomat.local>.

This completes the basic installation. The firmware flashing and WLAN configuration process only needs to be carried out once. The Brautomat must now be configured. The configuration is described in the _Basic Setup sectionung_ described. The following section _Update_ can be skipped initially.

> **Note:**\
The Brautomat32 tries to establish a connection with the WLAN configuration (SSID and password) for up to 20 seconds. If no connection can be established, for example if the password was entered incorrectly, the Brautomat32 will restart in AccessPoint Mode.\
In rare cases and usually only when the WLAN signal is weak, the Brautomat32 does not find a suitable WLAN and also starts in AccessPoint Mode after approx. 20 seconds. In this case, only restarting the Brautomat32 will help.

##Updates

Updates can be installed in Brautomat via the “Update” menu. A new firmware can be imported via “WebUpdate” or “File Update”. When updating the firmware via WebUpdate, the firmware downloads the current version from the Internet from the github repository. When updating via file update, the firmware is uploaded from the local PC. A USB cable or the script from the installation are not required.

The memory area of ​​an ESP microcontroller is divided into firmware and file system. During ongoing operation, configurations, recipes and other files can only be saved or changed in the file system. The Firmware area can only be accessed for reading purposes. During an update, the firmware area is completely reinstalled and individual files are replaced in the file system.

### WebUpdate

![WebUpdate](/docs/img/webupdate.jpg)

The WebUpdate restarts the Brautomat several times. First, the firmware is updated. After another restart, the framework will be updated. The WebUpdate process is logged in the webUpdateLog.txt file.

If the _WebUpdate with trial version_ option is activated, the WebUpdate will be carried out with the current developer version. These are test versions. New functions in the firmware are (usually) initially stored as a test version in the github repository. Trial versions are not recommended for productive use.

### FileUpdate

An update of the firmware via the FileUpdate selection takes place in just a few steps:

First, the current firmware must be downloaded. The ZIP archive will then be unpacked.\
In the web interface Brautomat, select the Update menu item and then FileUpdate. A simple update website (picture 1) is displayed:

![FileUpdate](/docs/img/fileupdate2.jpg)

Under Firmware with the "Select file" button, the file _firmware.bin_ must now be selected from the ZIP archive (in Figure 2). Clicking on Update Firmware starts the update.

The file system of Brautomat can also be updated.

> **Note:**\
The Update FileSystem function rebuilds the file system. Update FileSystem overwrites all settings and configurations. In addition to the configuration, this also includes mash brew boiler profiles and recipes. In almost all cases, a file update firmware followed by a WebUpdate is the right choice because the WebUpdate updates individual files in the file system after the firmware update.
