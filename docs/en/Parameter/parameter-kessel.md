# Hob parameters

## Temperature control

### Max. Power

This parameter describes the maximum output power of the cooktop. The default value is 100%. This parameter is used if a small kettle with a volume of 20 l, for example, is used on the cooktop. Reducing the power prevents the kettle from heating up too quickly and boiling over. The “Max. power” and “Boiling power” parameters should be reduced together when using small brewing kettles.

At the end of this chapter you will find [two examples for calculating the required output](https://innuendopi.gitbook.io/brautomat32/info-5/parameter-ggm-ids#berechnung-der-erforderlichen-leistung).

### Temperature delta to target

This parameter describes the difference to the rest temperature (setpoint) at which the timer should start for a rest. The default value is 0.3°C. In the mashing process, the PID controller enables very precise temperature control. A rest temperature is achieved with an accuracy of +-0.2°C by the PID controller reducing the energy supply in a controlled manner before the rest temperature is reached. Reducing the energy supply has the side effect that the last step to reach the rest temperature takes longer. This is exactly where the “Delta to target” parameter comes into play: If, for example, a rest temperature of 63°C is to be reached and the current temperature is 62.7°C, then the rest timer would start at a temperature delta to target of 0.3°C. In relation to the individual brewing system, an unwanted extension of the resting time can be avoided with delta zum Ziel.

### Transition to boiling [°C]

This parameter describes the temperature at which the PID controller should recognise that the wort is boiling. The default value is 95°C. This parameter does not describe the temperature at which the wort starts to boil. This parameter describes the temperature at which the PID Controller is deactivated and the hob is controlled with a preset power ‘Power from transition’. In contrast to the resting temperatures, the aim is not to reach and maintain the exact temperature when boiling, but to boil at a steady boil. So instead of reducing the power, the induction hob is operated at a constant power when cooking.

### Power from transition [%]

This parameter describes the output power of the IDS from the cooking temperature. The default value is 100%. The ‘Transition to boiling’ parameter defines a temperature from which the PID controller is deactivated. The ‘Power from transition’ parameter is now used to specify the fixed output power for the hob. If a brewing kettle with a volume of 35 litres or more is used, the default value of 100% is a suitable choice. In brewing kitchens with small kettles, 100% energy supply can cause boiling over. In this case, the maximum energy supply can be reduced to 75%, for example, using this parameter.

### Deactivate PID for boiling [%]

This parameter determines the behavior of the PID controller during boiling if the actual temperature is above the target temperature. Example: the boiling temperature was set to 98°C in the mash plan. The “Power from transition” parameter switches off the PID calculation from the “Transition to boiling” temperature. If the “Deactivate PID for boiling” parameter is activated (default), the PID controller remains switched off even above the target temperature from the mash plan and the power from the “Power from transition” parameter is used. This parameter is activated by default and enables flowing boiling.

If the “Deactivate PID for boiling” parameter is not activated, the required power is calculated by the PID controller once the target temperature (in this case 98°C) is reached. The calculated power above the target temperature is 0%. The hob switches off and prevents boiling over if necessary.

### Power in case of sensor error [0-100%]

If a sensor error occurs, e.g. a sensor is not connected or is defective, the power of the hob can be adjusted for this error. A value of 100% ignores the sensor error.

If the power is set to 0% in the event of a sensor error, the Brauomat pauses the mashing process. The hob is switched off. If the rest timer is started, the timer is stopped.

The Brauomat starts error handling after 3 consecutive faulty sensor values. The sensors are scanned approx. every 2000ms. This means that approx. 6 seconds elapse between the sensor error toast message and the start of error handling.

If a faulty sensor reports correct sensor values again, the Brauomat automatically continues the mashing process.

Note: the Max. Power is not exceeded by the parameter Power in case of sensor error. For example, if Max. If, for example, Max. power IDS has been configured to 75% and Power on sensor error to 100%, then the effective maximum output power is 75% even in the event of a sensor error.

## PID Manager

### Interval (SampleTime)

This parameter specifies the interval at which a calculation of the required power is determined. The default value is 3000ms. The interval is used for the PID calculation and in AutoTune. In brewing kitchens with a small volume, a smaller interval may be advantageous. The smaller the interval, the more frequently sensors are queried and PID values are calculated. This leads to a higher utilisation of the Brautomat. Value range 1000 - 7000ms.

### PID algorithm

## AutoTune

### AutoTune noiseband

This parameter is used to recognise extreme values (max, min). AutoTune noiseband specifies the minimum level that must be present in relation to the previous measured value in order to recognise a new extreme value. The default value for the RCD IDS is 0.2. For a post-cast boiler via a relay or SSR, the default value is 0.5. Value range: 0.1 - 1.0.

### AutoTune lookbacks

This parameter specifies how many measured values are to be considered for the determination of extreme values. The default value is 50 measured values. Please note that a maximum of 100 measured values can be configured. For very well thermally insulated brewing kettles (e.g. with Armaflex), an increase to 100 measured values in the data series can improve the detection of extreme values in the cooling phase of the AutoTune process.

### AutoTune debug

This switch activates the AutoTune protocol. The log provides information if the AutoTune process cannot be completed successfully. If AutoTune debug is activated, the protocol is also available during brewing.

These 10 parameters must be set individually for each brewing system. The parameters can be changed during a mashing process. The parameters can be easily determined with a test run using a typical amount of water before a brewing day.

## Profiles

The Brautomat can manage hardware profiles. Profiles are only used if different boilers are available. Users with boilers of different sizes can use profiles to select the boiler for the brew day instead of having to manually re-enter all parameters. A hardware profile contains all the settings for a boiler.

Profiles are saved in the /Profiles folder. Profiles make it quick and easy to switch between different mash tuns. The Save function creates a profile file with the above parameters, while the Delete function removes the profile file from the flash memory.

The default profile at the start of the Brautomat is always the last selected profile.

## Calculation of the required power

The following paragraph describes an optional topic.

During mashing, an increase in mash temperature of 1°C per minute is desired. The required power P of the GGM IDS can be calculated as follows:

required power P = m[kg] * 75\
available capacity of the GGM IDS P = 3500\
Factor in per cent = required power : available power

### Example 1

In the first example, a fill of 9kg and a main pour of 35 litres are given. This results in a total mass of

```json
m = 9 + 35 = 44
```

We use the mass m = 44 in the simplified formula:

```json
P = 44 * 75 = 3300
```

Approximately 3300 W/min are required to heat a volume of 44kg by 1°C per minute. If the GGM IDS is operated at 100% power, i.e. 3500 W, the temperature difference of 1°C in the mash is achieved in less than 60 seconds. To achieve the target of 1°C temperature rise in the mash per minute, the maximum power of the GGM IDS must be reduced:

```json
3300 : 3500
```

The GGM IDS induction hob should be operated at approx. 94-95% power (special function IDS:94).

### Example 2

In the second example, a pour of 5.9kg and a main pour of 26.5 litres are given. The total mass is 32.4kg.

```json
m = 5,9 + 26,5 = 32,4
```

We insert the mass m = 32.4 into the simplified formula:

```json
P = 32,4 * 75 = 2430
2430 : 3500 = 0,69
```

Approximately 2430 W/min are required to heat a volume of 32.4kg by 1°C per minute. The RCD IDS would have to be operated at approx. 69-70% power (special function IDS:70).

### Simplification mass * 75?

```json
P = m[kg] * c * T / (t * w)
```

m corresponds to the mass of the main pouring + bulk pouring\
c corresponds to the specific heat capacity of the mash. The value 3600 is used (unit joule/(kg * °C))\
T corresponds to the temperature difference. We use 1°C difference\
t corresponds to the time. We enter 60sec as the time in the equation\
w is the induction efficiency (80-90%). The value 0.8 is inserted in the sliding direction

```json
c * T / (t * w) = 3600 * 1 / (60 * 0.8) = 75
```

This simplification gives us the value 75.

### specific heat capacity

The specific heat capacity 3600 used here has an error tolerance of approx. 2% (depending on temperature and extract). Malt grist has a heat capacity of 1570 J/(kg*°C), water has a heat capacity of 4190 J/(kg*°C) in the temperature range 50-80°C. Assuming that the water content in the malt grist is 6%: (figures from example 1)

```json
9 * 94% * 1570 + (35 + 9 * 6%) * 4190 = 8,97 * 1,57 + 35,54 * 4,19 = 14,08 + 148,91 = 13282,2 + 148912,6 = 162194,8 / 44 = 3686,25 J pro kg und Grad Celsius
```

source [Braumagazin](https://braumagazin.de/article/berechnungen-in-der-brauerei/)
