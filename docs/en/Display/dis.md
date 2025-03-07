# Display

The Brautomat can optionally be operated with a touch display. Supported are 3.5 inch touch displays from Nextion

| Nextion Display | Firmware  |
| --------------- | --------- |
| NX4832T035 (Basic Serie) | [NX4832T035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/brautomat-NX4832T035.tft) |
| NX4832K035 (Enhanced Serie) | [NX4832K035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/brautomat-NX4832K035.tft) |
| NX4832F035 (Discovery Serie) | [NX4832F035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/brautomat-NX4832F035.tft)  |

The display requires firmware for operation with the Brautomat. The table links to the firmware suitable for the display type. See also Flashing the display file.

## Connecting Nextion Display

The display is connected to the circuit board with 4 cables

| cable         | Nextion Display | screw terminal  |
| ------------- | --------------- | ------------------------ |
|     red       | power + | Vcc |
|   black     | power - | GND |
|    blue       | TX      | SDL (D1) |
|    yellow       | RX      | SDA (D2) |

![Connection](/docs/img/disp1.jpg)

## Flashing the display file

The display must be prepared before it is used for the first time. To do this, download the appropriate display firmware from the table and save it on a microSD card. The microSD card is inserted into the SD card slot of the display and the Brautomat is switched on. The flashing process starts automatically. The flash status is shown on the display. After completion, the Brauomat is switched off and the microSD card is removed. The microSD card is not required for normal operation.

## View MaischeSud

![MaischeSud](/docs/img/brewpage-sm.jpg)

The MashBrew page is the preferred page for brewing. The display shows the following information every second

* Actual temperature
* Target temperature (resting temperature)
* Remaining rest time

is displayed every second. The next rest period is also displayed in the bottom line. The time on the left is the time at which the next rest will start. The green play symbol on the right indicates that the next rest will start automatically (autonext).

## View kettle overview

![Kettle overview](/docs/img/kettlepage-sm.jpg)

The kettle overview shows the mash brew kettle and, if available, the MLT and HLT kettle with the actual and target temperature information.

_Note: the kettle overview view shows the address of the Brautomat in the bottom line: either the mDNS name or the IP address._

## Manual control view

![Manual control](/docs/img/induction-mode-sm.jpg)

The manual control page offers the option of operating the GGM IDS manually. The + and - buttons can be used to increase or decrease the power levels.
