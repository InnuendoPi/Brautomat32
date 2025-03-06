# Calibration

Dallas DS18B20 sensors sometimes deviate from the actual temperature. The manufacturer's technical specifications often specify an accuracy of +-0.5°C in the range from -10°C to 85°C. The sensors are also labelled as calibrated.

Deviations can be corrected with the aid of a 2-point calibration. Calibration by the Brautomat is a linear correction. A calibrated thermometer is required to calibrate the sensors. The brewing kettle is filled with a typical amount of water and heated to 40°C. The difference between the sensor value and the calibrated thermometer is entered in the parameter ‘Offset 1 \[40°C]’. This process is repeated at 78°C and the difference is entered in the parameter ‘Offset 2 \[78°C]’. In future, all measured values from the sensor will be output with this correction.

For calibration, the temperature sensor is set to high-resolution mode (12-bit resolution or 0.0625°C). A calibration via the web interface consists of 60 measured values. The time required for a calibration is almost exactly 60 seconds. The result of the temperature measurement is the average of the 60 measured values. An offset is the difference between the actual temperature and the mean value.

In many cases, a 1-point calibration in an ice bath is sufficient, as the offset of the DS18B20 sensors is usually constant.

## Calibration procedure without reference thermometer

If no reference thermometer is available, calibration can be carried out using an ice bath and a boiling process.

For the lower measuring range, a container with 50% ice cubes and 50% cold water is required. An ice bath has a temperature of (almost exactly) 0.0 °C. The ice water must be stirred continuously, preferably with a magnetic stirrer. Calibration is started at 0 °C in the ice bath.

The second point for calibration can be determined via the altitude above sea level and the associated boiling point. At 0 m above sea level or an atmospheric pressure of 1.013 bar, the boiling temperature is 100.l0°C. The higher the altitude, the lower the atmospheric pressure and thus the boiling temperature. Firstly, the local NHN must be determined, e.g. using google earth. The boiling temperature drops by 0.003354°C per metre above sea level. On the website of [rechneronline](https://rechneronline.de/barometer/siedepunkt.php), the boiling point is calculated using the altitude above sea level. Many smartphones also provide altitude information in the compass or sat nav app. The altitude above sea level should be determined with an accuracy of approx. +-20m. This corresponds to a change in boiling point temperature of 0.06708°C and is therefore well outside the accuracy of the Brautomat control system. The second point calibration is carried out with a mash tun, an agitator and the previously determined local boiling point. The target temperature is therefore the boiling point temperature. It is important to ensure that the boiling point temperature is reached and held for at least one minute before starting the calibration for the upper value range. It is also very important that the induction hob remains switched on with constant power.

Offset #1 (lower value range) is the difference between 0.0°C (ice bath) and the mean value of the first calibration run. Offset #2 (upper value range) is the difference between the boiling point and the mean value from the second calibration run.

## Calibration procedure with clinical thermometer

A clinical thermometer is a well-suited reference thermometer. The upper measuring range of a clinical thermometer is limited to approx. 40°C. The calibration procedure is the same as for an ice bath and boiling temperature. The only difference is that if, for example, 40°C is selected as the second calibration point, the induction hotplate must be switched off as soon as the target temperature is reached and remains constant for approx. 60 seconds (no fluctuations). Only then may the calibration, i.e. the recording of 60 measurement samples, be started.

## Sensor calibration log file

A log file is written for each calibration. Example:

```text
13:22:37 Sensor Kalibrierung gestartet
*** Sensor Name: Sensor IDS2
*** Modell: DS18B20
*** Adresse: 2827c59d0d0000b1
*** Resolution: 12bit
*** Timeout: 750ms
-----------------------------------------
ID Soll Ist Diff Offset
#01 24.6000 24.0000 -0.6000 0.6000

 - Sensorwerte 2 bis 59 sinngemäß

#60 24.6000 25.1875 0.5875 -0.6083
-----------------------------------------
Temperatur von Offset #1: 24.6000
Mittelwert nach 60 Messungen: 25.2083
Offset #1: -0.6083
=========================================
```
