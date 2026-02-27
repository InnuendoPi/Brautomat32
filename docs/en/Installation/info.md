# Installation

To use Brautomat, you need to flash the firmware once and connect the ESP to your local Wi-Fi.

## Flash firmware on Windows

Brautomat32 runs on ESP32 and is based on the ESP-IDF5 framework.

* [ESP32 IDF5](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/main/Brautomat32.zip): Brautomat32.zip

Firmware flashing is easiest with `Flashen.cmd` from the ZIP archive:

1. Unpack the ZIP archive.
2. Connect ESP32 to your PC via USB.
3. Run `Flashen.cmd`.

Windows normally creates a COM port automatically when the ESP is connected.

![Windows Device Manager](/docs/img/com.jpg)

In the screenshot, the ESP appears on COM7.
If no COM port appears, install USB drivers (Windows/macOS):

[![ESP32 Drivers](https://img.shields.io/static/v1?label=Treiber&message=ESP32&logo=arduino&logoColor=white&color=blue)](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)

`Flashen.cmd` uses `esptool.exe`:
<https://github.com/espressif/esptool>

The 64-bit Windows binary is included in the ZIP archive.

### Manual flashing (Windows, macOS, Linux)

If the script cannot be used, flash manually.

ESP32 step 1 - erase flash:

```json
esptool.exe --chip ESP32 erase-flash
```

ESP32 step 2 - write firmware and filesystem:

```json
esptool.exe --chip ESP32 --baud 921600 --before default-reset --after hard-reset write-flash 0x1000 bootloader.bin 0x8000 partitions.bin 0xe000 boot_app0.bin 0x10000 firmware.bin 0x350000 LittleFS.bin
```

### Flashing with macOS

Download: [pyflasher](https://github.com/marcelstoer/nodemcu-pyflasher/releases)

On macOS, flashing is split into two steps.
First flash firmware (`Brautomat.ino.bin`) with pyflasher.

![macOS](/docs/img/flashen_macos.png)

Then connect Brautomat to Wi-Fi and open:
<http://Brautomat.local/update>

Use the `File system` button to upload `LittleFS.bin`.

## Wi-Fi configuration

After flashing, Brautomat starts in Access Point mode.
An open Wi-Fi named `Brautomat32` appears.

Connect to it, then open the Wi-Fi portal.
If it does not open automatically, go to:
<http://192.168.4.1>

![WiFi configuration](/docs/img/wlan1.jpg)

Enter SSID and password, then click `Save`.
Brautomat restarts and connects to your Wi-Fi.
The web UI is then available at:
<http://Brautomat.local>

At this point, basic installation is complete. You can continue with _Basic Setup_.

> **Note:**  
> Brautomat32 tries to connect to configured Wi-Fi for about 20 seconds.  
> If connection fails (for example wrong password), it returns to Access Point mode.

## Updates

Use the `Update` menu for firmware updates.

Available paths:

* `WebUpdate`: download and install directly from GitHub
* `FileUpdate`: upload update files from your local machine

A USB cable is not required for these update paths.

The ESP memory is split into firmware and filesystem.
During normal operation, settings/recipes live in the filesystem.
During updates, firmware is replaced and filesystem files can be updated.

### Important when upgrading from 1.59 (or older) to 1.60

* `config.txt` is saved as `config.old.txt`
* PID parameters are reset to `0.0`
* Run AutoTune once after update

This ensures temperature control behaves correctly on 1.60.

### WebUpdate

![WebUpdate](/docs/img/webupdate.jpg)

WebUpdate restarts Brautomat multiple times.
First firmware is updated, then framework/filesystem-related components.
Progress is written to `webUpdateLog.txt`.

If `WebUpdate with trial version` is enabled, the current development build is installed.
Use this only if you explicitly want to test new features.

Note: this guide follows the release state on `main`. Local development branch behavior may differ.

### FileUpdate

Firmware FileUpdate workflow:

1. Download current ZIP release.
2. Unpack the ZIP archive.
3. Open Brautomat `Update` -> `FileUpdate`.
4. Select `firmware.bin`.
5. Click `Update Firmware`.

![FileUpdate](/docs/img/dateiupdate2.jpg)

You can also update the filesystem.

> **Note:**  
> `Update FileSystem` rebuilds the filesystem and overwrites settings, profiles, and recipes.  
> In most cases, update firmware first and then use WebUpdate for file-level updates.
