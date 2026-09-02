# Installation

To use Brautomat, you need to flash the firmware once and connect the ESP to your local Wi-Fi.

## Recommended approach: Brautomat32 ServiceTool

The [Brautomat32 ServiceTool](https://github.com/InnuendoPi/ServiceTool) is
the recommended application for installing, operating, and maintaining your
Brautomat. It combines firmware and web-file updates, Wi-Fi setup, backups,
plan management, and the serial log.

### Download and start the ServiceTool

1. Download the appropriate current **release version** from the
   [ServiceTool releases](https://github.com/InnuendoPi/ServiceTool/releases)
   and extract it into its own folder.
2. On Windows, start `Brautomat32ServiceTool.exe`. On Linux, make the AppImage
   executable and start it; on macOS, open `Brautomat32ServiceTool.app`.
3. After startup, wait a few seconds while the ServiceTool checks USB and
   network connectivity.

### First setup with the ServiceTool

1. Connect the ESP32 to the computer by USB and select the correct COM port
   in the ServiceTool.
2. Open **Firmware**, select **Latest Release**, and start flashing. Keep
   **Web files** enabled so that firmware and web interface match.
3. Keep **Flash erase** disabled. Enable it only for an explicitly intended
   clean rebuild, because it removes data from the device.
4. After flashing, enter the Wi-Fi credentials in the ServiceTool and send
   them to the Brautomat. Wait until the status shows **Online**.
5. In **Backup & Restore**, create a named backup before later changing
   firmware, web files, or configuration.
6. Then manage mash plans, fermentation plans, and profiles in
   **Management**. The serial log is available in **Serial Monitor**.

The status indicator provides orientation:

- **No device**: Check USB cable, COM port, or network connection.
- **Serial**: The device is reachable by USB; firmware can be flashed, but
  network functions are not available yet.
- **Online**: Brautomat is reachable through the network API; all ServiceTool
  functions are available.

After the first flash and Wi-Fi setup, continue with the
[safety check before the first heat test](safety-check-first-heat-test.md).
Then continue with [Basic Setup](../Grundeinrichtung/info.md).

> **Note:** The manual ZIP archive and `Flashen.cmd` method remains available
> as a technical fallback if the ServiceTool cannot be used.

## Manual fallback: flash firmware on Windows

Brautomat32 runs on ESP32 and is based on ESP-IDF5.

- [Download Release](https://github.com/InnuendoPi/Brautomat32/releases/latest)
- [Download Development build](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/development/build/ESP32-IDF5dev/Brautomat32dev.zip)

If you are not using the ServiceTool:

1. Unpack the ZIP archive.
2. Connect ESP32 to your PC via USB.
3. Run `Flashen.cmd`.

Windows normally creates a COM port automatically when the ESP is connected.

![Windows Device Manager](/docs/img/com.jpg)

If no COM port appears, install the appropriate USB drivers:

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
First flash firmware (`firmware.bin`) with pyflasher. Depending on the tool or
archive, the file can also be named `brautomat.ino.bin`.

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

At this point, basic installation is complete.

Before the first heat run: [Safety check before first heat test](safety-check-first-heat-test.md)

Then continue with _Basic Setup_.

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
