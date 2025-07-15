# Installation

To be able to use the Brautomat, the firmware must be flashed. The ESP microcontroller must also be connected to the local WLAN.

## Firmware flash with MS Windows scriptbased

The Brautomat32 version is for the ESP32, based on framework IDF5.

* [ESP32 IDF5](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/main/Brautomat32.zip): Brautomat32.zip

The firmware is installed using the included “Flashen.cmd” script. To do this, unzip the archive in any folder. The ESP microcontroller is connected to the PC/notebook via USB cable. Double-click on the Flashen.cmd script to start flashing the firmware.

The MS Windows operating system automatically creates a serial COM port when connecting the ESP microcontroller to a USB port on the PC or notebook.

![Windows Gerätemanager](/docs/img/com.jpg)

An ESP device was found on COM7. In rare cases, no serial COM port is automatically provided under MS Windows. USB drivers for ESP microcontrollers are available on the following websites: (MS Win and macOS).

[![ESP32 driver](https://img.shields.io/static/v1?label=driver&message=ESP32&logo=arduino&logoColor=white&color=blue)](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)

Script Flashen.cmd uses esptool.exe <https://github.com/espressif/esptool>. ESPTool is freely available for various operating systems (macOS, Linux). The Windows version 64bit is included in the ZIP archive. This code is licensed under GPL v2.

## Manual flash with MS Windows and Linux

If the script cannot be used, the firmware can be transferred manually to the ESP microcontroller.

ESP32 Step 1 erase flash:

```json
esptool.exe --chip esp32 erase-flash
```

ESP32 Step 2 flash firmware

```json
esptool.exe --chip esp32 --baud 921600 --before default-reset --after hard-reset write-flash 0x1000 bootloader.bin 0x8000 partitions.bin 0xe000 boot_app0.bin 0x10000 firmware.bin 0x350000 LittleFS.bin
```

## Firmware flash with macOS

Download: [pyflasher](https://github.com/marcelstoer/nodemcu-pyflasher/releases)

With macOS, flashing the firmware is divided into two steps. In the first step, the firmware firmware.bin is installed on the Wemos using the pyflasher tool.

![macOS](/docs/img/flashen_macos.png)

The brautomat must then be connected to the WLAN. As soon as the brautomat is connected to the WLAN, the file system must be installed.\
Open in browser: <http://brautomat.local/update>

After clicking on the "Filesystem" button, the file brautomat.mklittlefs.bin is selected and installed by clicking on Update Filesystem.

## WLAN configuration

After flashing the firmware, the Brautomat starts in AccessPoint mode. An open WLAN with the name _Brautomat32_ becomes visible. A connection must be established with this WLAN. This works from a PC or notebook as well as with a smartphone. As soon as the connection is established, the web browser opens the Wi-Fi configuration portal. If the portal does not open automatically, the address <http://192.168.4.1> must be entered manually.

![IDS](/docs/img/wlan1.jpg)

The WLAN configuration is displayed using the “Configure WiFi” button

![IDS](/docs/img/wlan2.jpg)

The WLAN (SSID) and the password must be configured here. After saving WLAN credentials, the brautomat restarts and connects to the WiFi. The Brautomat web interface can be accessed via <http://brautomat.local>.

This completes the basic installation. The firmware flashing and WLAN configuration process only needs to be carried out once. The Brautomat must now be configured. The configuration is described in the section _Basic setup_. The following section _Update_ can be skipped for the time being.

## Updates

Updates can be installed via the ‘Update’ menu. New firmware can be installed via ‘WebUpdate’ or ‘File Update’. When updating the firmware via WebUpdate, the firmware loads the current version from the Internet from the github repository. When updating via File Update, the firmware is uploaded from the local PC. A USB cable or the script from the installation are not required.

The memory area of an ESP microcontroller is divided into firmware and file system. During operation, configurations, recipes and other files can only be saved or changed in the file system. The firmware area can only be accessed read-only. During an update, the firmware area is completely reinstalled and individual files are replaced in the file system.

### WebUpdate

The WebUpdate restarts the Brautomat several times. Firstly, the firmware is updated. After a further restart, the framework is updated. The WebUpdate process is logged in the webUpdateLog.txt file.

If the option _WebUpdate with test version_ is activated, the WebUpdate is carried out with the current developer version. These are test versions. New functions in the firmware are (usually) initially stored as a test version in the github repository. Test versions are not recommended for productive use.

### FileUpdate

Updating the firmware via the FileUpdate selection takes just a few steps:

Firstly, the current firmware must be downloaded. The ZIP archive is then unpacked.\
In the Brautomat web interface, select the Update menu item and then FileUpdate. A simple update web page is displayed (Fig. 1):

![FileUpdate](/docs/img/dateiupdate2.jpg)

Under Firmware with the ‘Select file’ button, the file _firmware.bin_ must now be selected from the ZIP archive (in Fig. 2). Click on Update Firmware to start the update.

The file system of the Brautomat can also be updated.

> **note:**\
The Update FileSystem function recreates the file system. Update FileSystem overwrites all settings and configurations. In addition to the configuration, this also includes MashSud boiler profiles and recipes. In almost all cases, a FileUpdate Firmware followed by a WebUpdate is the right choice because the WebUpdate updates individual files in the file system after the Update Firmware.
