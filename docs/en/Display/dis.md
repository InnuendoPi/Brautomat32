# Display

The Brautomat can optionally be used with a touch display.
Supported: Nextion 3.5-inch displays.

| Nextion Display | Firmware |
| --------------- | -------- |
| NX4832T035 (Basic Series) | [NX4832T035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/brautomat-NX4832T035.tft) |
| NX4832K035 (Enhanced Series) | [NX4832K035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/brautomat-NX4832K035.tft) |
| NX4832F035 (Discovery Series) | [NX4832F035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/brautomat-NX4832F035.tft) |

Use the firmware that matches your exact display type.

## Connect Display

Connect the display to the board with four wires:

| Cable | Nextion Display | Board Terminal |
| ----- | --------------- | -------------- |
| red | Power + | Vcc |
| black | Power - | GND |
| blue | TX | SDL (D1) |
| yellow | RX | SDA (D2) |

![Connection](/docs/img/disp1.jpg)

## Flash Display Firmware

Before first use, flash the display firmware:

1. Download the correct display firmware from the table.
2. Copy it to a microSD card.
3. Insert the card into the display.
4. Power on the Brautomat.

Flashing starts automatically and the status appears on screen.
When flashing is complete, power off the Brautomat and remove the microSD card.
The card is not needed for normal operation.

## Mash View

![Mash view](/docs/img/brewpage-sm.jpg)

This is the main brewing view.
The display updates every second and shows:

- actual temperature
- target temperature (rest temperature)
- remaining rest time

The next rest is shown in the bottom line.
A green play icon means the next rest starts automatically (`autonext`).

## Kettle overview

![Kettle overview](/docs/img/kettlepage-sm.jpg)

This view shows the mash kettle and, if configured, boil and NACHGUSS kettles with actual and target temperatures.

Note: The bottom line shows the Brautomat address (mDNS name or IP).

## Manual Control View

![Manual control](/docs/img/induction-mode-sm.jpg)

In manual mode, GGM IDS power can be adjusted with `+` and `-`.
