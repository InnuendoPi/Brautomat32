# Calibration

Dallas DS18B20 sensors sometimes exhibit deviations from the actual temperature. Manufacturers' technical specifications often state an accuracy of +-0.5°C in the range from -10°C to 85°C. Additionally, the sensors are referred to as calibrated.

Deviations can be corrected using a 2-point calibration. The calibration by the Brautomat is a linear correction. A calibrated thermometer is required to calibrate the sensors. The brewing kettle is filled with a typical amount of water and heated to 40°C. The difference between the sensor value and the calibrated thermometer is entered into the "Offset 1 \[40°C]" parameter. This process is repeated at 78°C and the difference is entered into the “Offset 2 \[78°C]” parameter. In the future, all sensor measurements will be output with this correction.

For calibration, the temperature sensor is set to high resolution mode (12bit resolution or 0.0625°C). A calibration via the web interface consists of 60 measured values. The time required for a calibration is almost exactly 60 seconds. The result of the temperature measurement is the average of the 60 measured values. An offset is the difference between the actual temperature and the average.

In many cases, a 1-point calibration in an ice bath is sufficient because the offset of the DS18B20 sensors is usually constant.

## Procedure for calibration without a reference thermometer

If a reference thermometer is not available, calibration can be performed using an ice bath and a boil.
For the lower measuring range, a container with 50% ice cubes and 50% cold water is required. An ice bath has a temperature of (almost exactly) 0.0 °C. The ice water must be stirred continuously, preferably with a magnetic stirrer. The calibration is started in an ice bath at 0 °C.

The second point for calibration can be determined via the altitude above sea level and the associated boiling point. At 0 m above sea level or an atmospheric pressure of 1,013 bar, the boiling temperature is 100.0°C. As altitude increases, the air pressure and thus the boiling temperature decreases. First, the local NHN must be determined, for example via Google Earth. For each meter above sea level, the boiling temperature drops by 0.003354°C. On the website of [rechneronline](https://rechneronline.de/barometer/siedepunkt.php) the boiling point is calculated based on the height above sea level. Many smartphones also offer altitude information in the compass or navigation app. The height above sea level should be determined with an accuracy of approx. +-20m. This corresponds to a change in boiling point temperature of 0.06708°C and is therefore far outside the accuracy of the Brautomat control. The second point calibration is carried out using a mash brew kettle, an agitator and the previously determined local boiling point. The target temperature is therefore the boiling point temperature. It is important to ensure that the boiling point temperature is reached and maintained for at least one minute before starting the upper range calibration. It is also very important that the hob remains on at constant power.

Offset #1 (lower value range) is the difference of 0.0°C (ice bath) to the average value of the first calibration run. Offset #2 (upper range) is the difference between the boiling point and the average from the second calibration run.

## Procedure calibration with clinical thermometer

A clinical thermometer is a well-suited reference thermometer. The upper measuring range of a clinical thermometer is limited to approx. 40°C. Carrying out the calibration corresponds to the procedure for ice bath and boiling temperature. The only difference: If you choose 40°C as the second calibration point, for example, the hob must be switched off as soon as the target temperature is reached and remains constant for approx. 60 seconds (no fluctuations). Only then can dThe calibration, i.e. the recording of 60 measurement samples, can be started.

## Sensor calibration log file

A log file is written for every calibration. Example:

```text
13:22:37 Sensor calibration started
*** Sensor Name: Sensor IDS2
*** Model: DS18B20
*** Address: 2827c59d0d0000b1
*** Resolution: 12bit
*** Timeout: 750ms
------------------------------------------------------
ID Target Actual Diff Offset
#01 24.6000 24.0000 -0.6000 0.6000

 - Sensor values 2 to 59 accordingly

#60 24.6000 25.1875 0.5875 -0.6083
------------------------------------------------------
Temperature of offset #1: 24.6000
Average after 60 measurements: 25.2083
Offset #1: -0.6083
=========================================
```
