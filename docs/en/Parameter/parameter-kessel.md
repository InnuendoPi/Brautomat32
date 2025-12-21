# Hob parameters

## Temperature control

### Max power

This parameter describes the maximum output power of the hob. The default value is 100%. This parameter is used if a small kettle with, for example, 20l volume is used on the hob. By reducing the power, heating up too quickly and boiling over can be avoided. The parameters "Max. power" and "Power from transition" should be reduced together when using small brewing kettles.

At the end of this chapter you will find [two examples for calculating the required power](https://innuendopi.gitbook.io/brautomat32/info-5/parameter-ggm-ids#berechnung-der-erforderlichen-leistung).

### Temperature delta to target

This parameter describes the difference from the rest temperature (setpoint) at which the timer should start for a rest. The default value is 0.3°C. In the mashing process, the PID controller enables very precise temperature control. A rest temperature is achieved to an accuracy of +-0.2°C by the PID controller reducing the energy supply in a controlled manner before the rest temperature is reached. Reducing the energy supply has the side effect that the final step to reach the rest temperature takes longer. This is exactly where the "Delta to target" parameter comes into play: For example, if a rest temperature of 63°C is to be achieved and the current temperature is 62.7°C, then the rest timer would start at a temperature delta to the target of 0.3°C. In relation to the individual brewing system, delta can be used to avoid an unwanted extension of the rest time.

### Transition to cooking [°C]

This parameter describes the temperature at which the PID controller should detect that the wort is boiling. The default value is 95°C. This parameter does not describe the temperature at which the wort begins to boil. This parameter describes the temperature at which the Brautomat deactivates the PID controller and controls the hob with a specified power "power from transition". In contrast to the rest temperatures, the aim of cooking is not to precisely reach and maintain the temperature, but rather to cook smoothly. So instead of reducing the power, the induction hob is operated at a constant power when cooking.

### Power from transition [%]

This parameter describes the output power for the hob from the temperature transition to cooking. The default value is 100%. The "Transition to cooking" parameter has been used to set a temperature at which the PID controller is deactivated. The “Power from transition” parameter now specifies the fixed output power for the hob. If a brewing kettle with a volume of 35l or more is used, the default value of 100% is a suitable choice. In brewery kitchens with small kettles, 100% energy supply can cause boiling over. In this case, the maximum energy supply can be reduced to, for example, 75% with this parameter.

### Disable PID for cooking [on/off]

This parameter determines the behavior of the PID controller when cooking when the actual temperature is above the target temperature. Example: the cooking temperature was set to 98°C in the mash plan. The "Power from transition" parameter switches off the PID calculation from the "Transition to boiling" temperature. If the "Deactivate PID for boiling" parameter is activated (default), then the PID controller remains switched off even above the target temperature of 98°C from the mash plan and the power from the "Power from transition" parameter is used. This parameter is activated by default and enables rolling cooking.

If the parameter "Deactivate PID for cooking" is not activated, the required power is calculated by the PID controller once the target temperature (here 98°C) is reached. The calculated power above the target temperature is 0%. The hob switches off and prevents boiling over if necessary.

### Perfomancein case of sensor error [0-100%]

If a sensor error occurs, for example a sensor is not connected or a defect, the power of the hob can be adjusted to deal with this error. A value of 100% ignores the sensor error.

If the power is set to 0% in the event of a sensor error, the Brautomat pauses the mashing process. The hob is switched off. Once the rest timer has started, the timer is stopped.

The Brautomat starts error handling after 3 consecutive incorrect sensor values. The sensors are queried approximately every 2000ms. This means that approx. 6 seconds pass between the toast message sensor error and the start of error handling.

If a faulty sensor reports correct sensor values ​​again, the Brautomat automatically continues the mashing process.

_Note: the Max. power parameter is not exceeded by the Power on sensor error parameter. For example, if Max. Power IDS was configured to 75% and Power in case of sensor error to 100%, then the effective maximum output power is 75% even in the event of a sensor error._

## PID Manager

### Interval (SampleTime)

This parameter indicates the time interval at which the required power is calculated. The default value is 3000ms. The interval is used for the PID calculation and in the AutoTune. In brewery kitchens with small volumes, a smaller interval may be advantageous. The smaller the interval, the more frequently the required power is calculated. This leads to a higher utilization of the automatic broiler. Value range 1000 - 7000ms.

### PID Algorithm

There are three options to choose from

* manual PID mode: this selection allows the use of your own Kp, Ki and Kd values
* IDS PID mode: this selection calculates the values for Kp, Ki and Kd for GGM IDS induction hobs based on the Ku and Pu values from the AutoTune process
* Relay PID mode: this selection calculates the values for Kp, Ki and Kd for relay-based hobs using the Ku and Pu values from the AutoTune process

## AutoTune

### AutoTune noise band

This parameter is used for detecting extreme values (Max, Min). AutoTune noiseband indicates the minimum change from the previous measured value that must be present in order to recognize a new extreme value. The default value for the GGM IDS is 0.2. For a recast cooker via a relay or SSR, the default value is 0.5. Value range: 0.1 - 1.0

### AutoTune Data series (lookback)

This parameter specifies how many measured values should be considered for determining extremal values. The default value is 50 readings. Please note that a maximum of 100 measured values ​​can be configured. For very well thermally insulated brewing kettles, increasing the data series to 100 measured values ​​can improve the detection of extreme values ​​in the cooling phase of the AutoTune process.

### AutoTune debug

This switch activates the AutoTune protocol. The log provides information if the AutoTune process cannot be completed successfully. If AutoTune debug is activated, the protocol is also available when brewing.

_These 10 parameters must be set individually for each brewing system. The parameters can be changed during a mashing process. With a test run with a typical amount of water, the parameters can be easily determined before a brewing day._

## Profiles

The Brautomat can manage hardware profiles. Profiles can be used if there are different boilers. Users with kettles of different sizes can use profiles to select the kettle for the brewing day instead of having to manually re-enter all the parameters. A hardware profile contains all the settings of a boiler.

Profiles are saved in the /Profiles folder. Profiles enable quick and easy switching between different boilers. The Save function creates a profile file with den above parameters, while the Delete function removes the profile file from the flash memory.

The default profile when starting the bread machine is always the last profile selected.

## Calculation of the required power

_The following paragraph describes an optional topic._

When mashing, an increase in the mash temperature of 1°C per minute is desired. The required power P of the GGM IDS can be calculated as follows:

required power P = m[kg] * 75\
existing performance of the GGM IDS P = 3500\
Factor in percent = required performance: existing performance

### Example 1

In the first example there is a fill of 9kg and a main pour of 35l. This results in a total mass of

```json
m = 9 + 35 = 44
```

We substitute the mass m = 44 into the simplified formula:

```json
P = 44 * 75 = 3300
```

Approximately 3300 W/min is required to heat a volume of 44kg by 1°C per minute. If the GGM IDS is operated with 100% power, i.e. 3500W, the temperature difference of 1°C in the mash is achieved in less than 60 seconds. In order to achieve the goal of 1°C temperature increase in the mash per minute, the maximum performance of the GGM IDS must be reduced:

```json
3300: 3500 = 0.94 which corresponds to 94%
```

The GGM IDS would have to be operated with approx. 94-95% power (special function IDS:94).

### Example 2

In the second example there is a fill of 5.9kg and a main pour of 26.5l. The total mass is 32.4kg.

```json
m = 5.9 + 26.5 = 32.4
```

We substitute the mass m = 32.4 into the simplified formula:

```json
P = 32.4 * 75 = 2430
2430 : 3500 = 0.69
```

It takes approximately 2430 W/min to heat a volume of 32.4kg by 1°C per minute. The GGM IDS would have to be operated with approx. 69-70% power (special function IDS:70).

### Simplification Mass * 75?

```json
P = m[kg] * c * T / (t * w)
```

m corresponds to mass of main casting + fill\
c corresponds to the specific heat capacity of the mash. The value 3600 is used (unit Joule/(kg * °C))\
T corresponds to the temperature difference. We use 1°C difference\
t corresponds to time. We put 60 seconds into the equation as the time\
w the induction efficiency (80-90%). The value 0.8 is inserted into the equation

```json
c * T / (t * w) = 3600 * 1 / (60 * 0.8) = 75
```

With this simplification we get the value 75.

### specific heat capacity

The specific used here Heat capacity 3600 has an error tolerance of approximately 2% (depending on temperature and extract). Malt meal has a heat capacity of 1570 J/(kg*°C), water has a heat capacity of 4190 J/(kg*°C) in the temperature range 50-80°C. Assuming the water content in the malt meal is 6%: (Figures from Example 1)

```json
9 * 94% * 1570 + (35 + 9 * 6%) * 4190 = 8.97 * 1.57 + 35.54 * 4.19 = 14.08 + 148.91 = 13282.2 + 148912.6 = 162194.8 / 44 = 3686.25 J per kg per degree Celsius
```

See also [Brewing Magazine](https://braumagazin.de/article/berechnungen-in-der-brauerei/)
