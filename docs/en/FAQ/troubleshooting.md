# Troubleshooting

Tips and practical fixes for common issues.

## WiFi

ESP microcontrollers have limited WiFi range.
Under `System -> Reset`, you can see the current signal strength.

- `-50 dBm` to `-75 dBm`: very good
- below `-80 dBm`: weak and often unstable

With weak WiFi, consider:

- increasing the PID interval (for example to 7000ms) to reduce traffic
- using fewer active browser clients
- moving the Brautomat closer to your access point
- adding a repeater

The web interface is based on Bootstrap 5 and JavaScript.
All CSS/JS/font files are served from the Brautomat itself.
With weak WiFi, these files may load incompletely, and the page can appear unstyled or tables may stay empty.
In most cases, a hard reload (`Ctrl+Shift+R`) helps.

After a firmware update, switch off the Brautomat once and clear browser cache.

## Browsers

Brautomat is tested on Windows 11 with current MS Edge and Firefox, and on iOS with Edge and Safari.

Enable automatic audio playback for Brautomat in browser site permissions, otherwise toast sounds may be blocked.
Also add Brautomat to allow-lists in ad blockers or security extensions.
Older browsers (for example IE8) are not supported.

## Server-Sent Events (SSE), power saving and client lock

Brautomat sends live data to connected clients using SSE.
Up to 8 devices can be connected at the same time.

Important:

- If a browser disconnects, the brew process continues.
- Only the disconnected client stops receiving updates.
- Active clients reconnect automatically after short interruptions.

There is no client priority.
You can start on one device, pause on another, and monitor on others.

## Recipe Import

Due to memory limits, recipe import cannot handle recipes with PDFs, image attachments, or very long text blocks.

For MaischeMalzundMehr recipes, a good workflow is:

1. Import into `kbh2`
2. Adjust recipe to your setup
3. Export in Brautomat format

Recipes from BrewFather can also be imported.

From version 1.60 onward, recipe operations are only allowed in idle state:

- import
- switch
- rename
- copy
- delete

These actions are blocked during an active brew process.

## AutoTune

Do not optimize for 0.1°C perfection.
Real sensor tolerance is usually larger.

`AutoTune noiseband = 0.3` is typically a good practical value.

Insulation affects lookback:

- very well insulated mash kettle: around 75 points
- non-insulated kettle: around 50 points

Tune both values to your setup if needed.

## Sensors and Calibration

Dallas DS18B20 sensor quality varies by vendor.
Calibration is recommended, especially for the IDS sensor.

If Sensor Error toasts appear repeatedly:

1. try another sensor port
2. check solder joints at 3-pin terminal blocks
3. check the 4.7 kOhm resistor under the ESP

## GGM IDS Pin Interrupt

Since version 1.60, interrupt pin is disabled by default and not needed for normal brewing.

The interrupt is a return channel from the induction hob to the Brautomat.
It can interrupt normal program flow roughly every 300ms.
Use it only for diagnostics.

### Typical interrupt codes (from IDS2 manual)

- `E0` no/empty kettle
- `E1` circuit fault
- `E3` overheating
- `E4` temperature sensor
- `E7` undervoltage protection
- `E8` overvoltage protection
- `EC` control panel fault

Some binary sequences are derived from testing and may not be fully confirmed.
