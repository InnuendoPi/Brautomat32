# Troubleshooting

Tips & Tricks ... to be continued ...

## WiFi

The WLAN range of the ESP microcontrollers is limited. The current WLAN signal strength is displayed under System -> Reset. The closer the value is to zero, the stronger the signal. Values ​​from -50dBm to -75dBm are very good. A value less than -80dBm is bad and will cause problems. In brewery kitchens with weak WiFi signal strength, the PID interval can be increased to 7000ms, for example, to reduce the amount of data. If the signal strength is weak, only an active browser should be used (see Server Sent Events below). A suitable location for the Brautomat in the WLAN (or an additional repeater) is important. A good signal strength does not necessarily, but in most cases, result in a higher and more stable data transfer rate.

The web interface from Brautomat is based on the bootstrap framework 4.6 with Javascript. The required files (css, js and fonts) are in the flash memory of Brautomat. This has an advantage and a disadvantage. The advantage is that no internet connection is required to load the necessary files when brewing. The disadvantage is that in the local WLAN the Brautomat has to provide the framework files compressed to each connected browser once when the connection is established. If a file is not transmitted correctly and only very slowly because of weak WiFi signal strength, for example, the web interface will not work correctly. In this case, the web interface does not build correctly (it then looks like a text page) or is incomplete (the tables remain empty). In most cases, reloading the website (Ctrl-Shift-R) is sufficient.

After a firmware update, the Brautomat should always be switched off and the browser cache deleted.

## Browsers

The Brautomat is tested on Win11 with MS Edge and Firefox in the current version, as well as on iOS devices with MS Edge and Safari. MS Edge is preferred during development. Regardless of the browser, automatic audio playback for the Toasts messages (audio) must be activated for the address of Brautomat. The address of Brautomat should also be included in the exceptions in blocking browser plugins. Outdated browsers (e.g. IE8) are not supported.

The browser cache can lead to incorrect webfront ads. The web frontend of Brautomat specifies no-cache and no-store when called, but different browsers ignore these instructions. Clearing the browser cache manually is often started with the key combination Ctrl - Shift - Del.

## Server Sent Events & Power Plans and auto-lock clients

The Brautomat sends data to connected and active browsers via server sent events. Up to 8 devices can connect to the Brautomat at the same time. Power plans or automatic locking can interrupt a connection. The brewing process will not be stopped or aborted if the connection is lost! The Brautomat continues to work normally. Disconnected browsers just don't receive any new information. Information includes temperatures, current mash step, current performance, charts, etc. A Server Sent Events connection to Brautomat is the "data channel" through which the information is sent to the browser. If the connection to Brautomat is interrupted, the data channel is terminated. An active browser recognizes when its data channel has ended and automatically logs in again on Brautomat after a short time.\
Registrations on Brautomat have no order or priorities. It has no effect whether the web browser from the PC or the tablet is connected first or last. The brewing process can be started on device A, paused on device B, observed on device C and finished on device D. If all four devices are active and connected, all browsers show i (almost) at the same timeidentical information because each of these four devices has its own data channel.

## Recipe import

Due to limited memory, the recipe import cannot import recipes with PDFs, image attachments or very long texts or explanations. For MashMalzandMore recipes, importing into kbh2 and then exporting in the format Brautomat is a simple and good solution. Recipes from Brewfather can also be imported.

## AutoTune

The AutoTune process should not focus on perfection i.e. S.v. 0.1°C. The deviation of the sensors is usually larger. The parameter AutoTune noiseband (scattering around the target value) is sufficiently close to the target temperature with a value of 0.3 to hit the target temperature very well and maintain it over the rest period.\
Very well insulated mash brew kettles require a larger AutoTune data series. In the data series, measured values ​​are recorded in chronological order. At the beginning there is the current measurement value and at the very end of the row there is the oldest measurement value. The value AutoTune data series says "how many values ​​before the current measurement does the Brautomat look back (into the past) in order to detect a temperature change of at least AutoTune noiseband (0.3)". For a well-insulated boiler, the data series should be filled with 75 measuring points. For a non-insulated boiler, a data series of 50 measuring points is sufficient. These two parameters need to be adjusted depending on the environment. The standard specifications should produce very good values ​​in the vast majority of cases.

## Sensors and calibration

Dallas DS18B20 sensors are offered on many platforms at very different prices. Sensor calibration helps to minimize deviations. In any case, the IDS sensor should be calibrated because deviations of several degrees Celsius (depending on the origin) are possible.\
If a sensor regularly reports Sensor Error (toasts) in the web interface, you should first try a different connection for the sensor. The three connections on the board for the sensors are equivalent and have no predetermined order. If there are sensor problems, the soldering points of the 3 screw terminal blocks and the 4.7kOhm resistance (on the circuit board under the ESP) should be checked.

## GGM IDS pin interrupt

The pin interrupt provides a return channel from the induction hob to the Brautomat. This return channel is connected to the Brautomat with an interrupt GPIO from the ESP. An interrupt interrupts the program flow and checks the interrupt condition.\
The GGM IDS induction hob continuously sends an interrupt approximately every 300 milliseconds: either the signal “everything is ok” (0000) or an error code (e.g. 0010 for no boiler or empty boiler).

Section of serial output on pin interrupt:

```text
10:00:00:174 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:543 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:864 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:209 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:554 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
```

The serial output at the pin interrupt clearly shows that the induction hob is constantly sending “everything ok”. However, the Brautomat interrupts its work while brewing with every interrupt (approximately every 300ms) and checks the interrupt condition. The pin interrupt should therefore only be used for troubleshooting.

The following interrupts are described in the GGM IDS2 manual:

E0 no/empty boiler (0010 2)\
E1 circuit error (0011 3)\
E3 Overheating (0101 5)\
E4 temperature sensor (0110 6)\
E7 low voltage protection (1001 9)\
E8 Surge Protector (1010 10)\
EC control panel (1110 14)\

Unfortunately the binary strings are not known. Only E1 no/empty boiler is known. The timeThe following brackets have been determined through testing, but are not certain.

The pin interrupt should only be assigned in the event of problems. Pin D5 is preassigned for the first induction hob. No pin interrupt is required in normal brewing operation.
