# Calibration

Dallas DS18B20 sensors can show small deviations from true temperature.
Typical datasheet accuracy is about +/-0.5°C (from -10°C to 85°C).

Brautomat supports linear 2-point calibration.

## 2-point calibration with reference thermometer

Use a calibrated reference thermometer.

1. Heat a typical kettle volume to 40°C.
2. Enter the difference in `Offset 1 [40°C]`.
3. Heat to 78°C.
4. Enter the difference in `Offset 2 [78°C]`.

Brautomat then applies this correction to future measurements.

Each calibration run collects 20 distinct valid measurements before offset correction. This takes roughly 20 seconds at the usual measurement interval and longer at slower intervals. Measurement resolution and filtering remain unchanged. The web UI stays responsive and reports progress and the running average. Disabled or faulty sensors are rejected. A sensor fault or a change to the sensor configuration cancels the run without applying new offsets. Only one calibration can run at a time.

In many setups, a 1-point calibration in an ice bath is already sufficient because DS18B20 offsets are often close to linear.

## Calibration without reference thermometer

If no reference thermometer is available, use:

* an ice bath (0°C)
* boiling point at your local altitude

For the low point, prepare an ice bath with about 50% ice and 50% cold water and stir continuously.

For the high point, estimate local boiling point via altitude.
At sea level (`0 m`, about `1.013 bar`), boiling point is `100.0°C`.
Boiling point decreases by about `0.003354°C` per meter altitude.

You can use tools such as:
[rechneronline boiling point calculator](https://rechneronline.de/barometer/siedepunkt.php)

For reliable results, keep boiling stable for at least one minute before starting the high-point calibration run.

Offset definitions:

* `Offset #1`: difference between 0.0°C and first-run average
* `Offset #2`: difference between local boiling point and second-run average

## Calibration with clinical thermometer

A clinical thermometer can be used only in the lower range (up to about 40°C).

If using 40°C as upper calibration point:

1. Heat to 40°C.
2. Switch heating off.
3. Wait until temperature is stable for about 20 seconds.
4. Start calibration sample run.

## Sensor calibration log file

A log file is written for each calibration. It contains the individual readings
and a final record with completion status, sample count, average, spread and
drift. A successful run uses 20 distinct valid readings. An aborted run does not
apply new offsets. The offset is the reference temperature minus the average.
