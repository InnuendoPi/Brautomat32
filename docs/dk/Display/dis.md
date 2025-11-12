# Display

The Brautomat can optionally be operated with a touch display. 3.5 inch touch display from Nextion is supported

| Nextion Display | Firmware |
| --------------- | --------- |
| NX4832T035 (Basic Series) | [NX4832T035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/Brautomat-NX4832T035.tft) |
| NX4832K035 (Enhanced Series) | [NX4832K035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/Brautomat-NX4832K035.tft) |
| NX4832F035 (Discovery Series) | [NX4832F035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/Brautomat-NX4832F035.tft) |

The display requires firmware to operate with Brautomat. The firmware that matches the display type is linked in the table. See also flashing the display file.

## Connect display

The display is connected to the board with 4 cables

| Cable | Nextion Display | Connection terminal board |
| ------------- | --------------- | ------------------------ |
|     red | Current + | Vcc |
|   black | Electricity - | GND |
|    blue | TX | SDL (D1) |
|    yellow | RX | SDA (D2) |

![Connection](/docs/img/disp1.jpg)

## Flash display file

The display must be prepared before initial operation. To do this, the appropriate display firmware is downloaded from the table and saved on a microSD card. The microSD card is inserted into the SD card slot on the display and the Brautomat is switched on. The flashing process starts automatically. The flash status is shown on the display. Once completed, the Brautomat will be turned off and the microSD card will be removed. The microSD card is not required for normal operation.

## View mash brew

![MaischeSud](/docs/img/brewpage-sm.jpg)

The MashSud side is the preferred side when brewing. The information is shown on the display every second

* Actual temperature
* Target temperature (resting temperature)
* remaining rest time

displayed. The next rest is also displayed in the bottom line. The time on the left is the time at which the next rest will start. The green play symbol on the right indicates that the next rest starts automatically (autonext).

## View boiler overview

![Kettle overview](/docs/img/kettlepage-sm.jpg)

The boiler overview shows the mash brew boiler and, if available, the brew and pour over boiler with the information about the actual and target temperature.

_Note: the boiler overview view shows the address of Brautomat in the bottom line: either the mDNS name or the IP address._

## Manual control view

![Manual control](/docs/img/induction-mode-sm.jpg)

The manual control page offers the option of operating the GGM IDS manually. The power levels can be adjusted up or down using the + and - buttons.
