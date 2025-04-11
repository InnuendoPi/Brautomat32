# Troubleshooting

Tipps & Tricks ... to be continued ...

## WLAN

The WLAN range of the ESP microcontrollers is limited. The current WLAN signal strength is displayed under System -> Reset. The closer the value is to zero, the stronger the signal. Values from -50dBm to -75dBm are very good. A value lower than -80dBm is bad and leads to problems. In brewery kitchens with weak WLAN signal strength, the PID interval can be increased to 7000ms, for example, to reduce the amount of data. Only an active browser should be used when the signal strength is weak (see Server Sent Events below). A suitable location for the Brautomat in the WLAN (or an additional repeater) is important. A good signal strength does not necessarily result in a higher and more stable data transfer rate, but in most cases it does.

The Brautomat web interface is based on the bootstrap framework 4.6 with Javascript. The required files (css, js and fonts) are stored in the flash memory of the Brautomat. This has an advantage and a disadvantage. The advantage is that no internet connection is required to load the necessary files when brewing. The disadvantage is that in the local WLAN, the Brautomat must provide each connected browser with the framework files in compressed form once when the connection is established. If, for example, a file is not transmitted correctly and only very slowly due to weak WLAN signal strength, the web interface will not function correctly. In this case, the web interface does not build up correctly (it then looks like a text page) or incompletely (the tables remain empty). In most cases, it is sufficient to reload the web page (Ctrl-Shift-R).

After a firmware update, the Brautomat should always be switched off and the browser cache deleted.

## Browser

The Brautomat is tested on Win11 with MS Edge and Firefox in the latest version, as well as on iOS devices with MS Edge and Safari. MS Edge is the preferred browser during development. Regardless of the browser, the automatic audio playback for the toasts messages (audio) must be activated for the address of the Brautomat. The address of Brautomat should also be included in the exceptions in blocking browser plugins. Outdated browsers (e.g. IE8) are not supported.

## Server Sent Events & energy saving plans and automatic blocking of clients

The Brautomat sends data to connected and active browsers via Server Sent Events. Up to 8 devices can connect to the Brautomat at the same time. Energy saving plans or automatic locking can interrupt a connection. The brewing process is not stopped or aborted if the connection is lost! The Brauomat continues to work as normal. Unconnected browsers simply do not receive any new information. Information includes temperatures, current mashing step, current performance, charts, etc. A Server Sent Events connection to the Brautomat is the “data channel” through which the information is sent to the browser. If the connection to the Brautomat is interrupted, the data channel is terminated. An active browser recognizes when its data channel is terminated and automatically logs on to Brautomat again after a short time.\

Logins to the Brautomat have no order or priority. It has no effect whether the web browser from the PC or the tablet is connected first or last. The brewing process can be started on device A, paused on device B, monitored on device C and ended on device D. If all four devices are active and connected, all browsers display (almost) identical information at the same time because each of these four devices has its own data channel.

## Recipe import

The recipe import cannot import recipes with PDF, image attachments or very long texts or explanations due to the limited memory. For MaischeMalzundMehr recipes, importing in kbh2 and then exporting in the Brautomat format is a simple and good solution. Recipes from Brewfather can also be imported.

## AutoTune

With the AutoTune process, the focus should not be on perfection in the sense of 0.1°C. The deviation of the sensors is usually greater. With a value of 0.3, the AutoTune noiseband parameter (scattering around the target value) is sufficiently close to the target temperature to hit the target temperature very well and maintain it over the rest period.\

Very well insulated mash tuns require a larger AutoTune data series. The data series records measured values in chronological order. At the beginning is the current measured value and at the very end of the series is the oldest measured value. The AutoTune data series value states “how many values before the current measurement does the automatic boiler look back to (in the past) in order to detect a temperature change of at least AutoTune noiseband (0.3)”. For a well-insulated boiler, the data series should be filled with 75 measuring points. For a non-insulated boiler, a data series of 50 measuring points is sufficient. These two parameters must be adjusted depending on the environment. The default settings should produce very good values in the vast majority of cases.

## Sensors and calibration

Dallas DS18B20 sensors are available on many platforms at very different prices. Sensor calibration helps to minimize deviations. In any case, the sensor of the IDS should be calibrated because deviations of several degrees Celsius (depending on origin) are possible.\

If a sensor is regularly reported in the web interface with a sensor error (toasts), another connection for the sensor should be tried first. The three connections on the circuit board for the sensors are equivalent and do not have a predefined sequence. In the event of sensor problems, check the soldering points of the 3-screw terminal blocks and the 4.7kOhm resistor (on the circuit board under the ESP).

## GGM IDS Pin Interrupt

The interrupt pin provides a return channel from the induction hob to the Brautomat. This return channel is connected with an interrupt GPIO from the ESP to the Brautomat. An interrupt interrupts the program sequence and checks the interrupt condition.\
The induction hob GGM IDS sends an interrupt continuously every 300 milliseconds: either the signal “all ok” (0000) or an error code (e.g. 0010 for no boiler or empty boiler).

Section of serial output at the interrupt pin:

```text
10:00:00:174 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:543 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:864 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:209 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:554 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
```

The serial output at the interrupt pin clearly shows that the induction hob is permanently transmitting “all ok”. However, the Brautomat interrupts its work during brewing with every interrupt (approximately every 300ms) and checks the interrupt condition. The interrupt pin should therefore only be used for troubleshooting.

The following interrupts are described in the GGM IDS2 manual:

E0 no/empty boiler (0010 2)\
E1 Circuit fault (0011 3)\
E3 Overheating (0101 5)\
E4 Temperature sensor (0110 6)\
E7 Low voltage protection (1001 9)\
E8 Overvoltage protection (1010 10)\
EC Control panel (1110 14)\

Unfortunately, the binary strings are not known. Only E1 no/empty boiler is known. The character strings in the brackets were determined by tests, but are not certain.

The interrupt pin should only be assigned in the event of problems. Pin D5 is pre-assigned for the first induction hob. No pin interrupt is required in normal brewing operation.
