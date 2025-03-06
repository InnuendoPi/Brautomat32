# AutoTune PID

A separate PID AutoTune library InnuAPID was developed for the Brautomat. The starting point was the Arduino PID library [Brett Beauregard](https://github.com/br3ttb/Arduino-PID-Library), as well as the AutoTune and PIDBoil add-ons for CraftbeerPi.

The PID control has the task of generating and maintaining a constant mash temperature, regardless of the kettle volume or the type of heat energy supply.

![AutoTune4](/docs/img/IDS-AutoTune-Ziel.jpg)

The following description of the PID values only serves as an aid when using the firmware and can be skipped. The AutoTune process is described from ‘The AutoTune process: step by step’ onwards.

The PID controller controls the power of the inductor. It is important to determine suitable P, I and D values. The PID values are individual for each brewing system and environment. AutoTune is a procedure that helps to determine suitable values. The power required by the induction plate to get from the actual temperature to the target temperature is calculated from the sum of the three values: Required power = P + I + D\

Once suitable PID values have been determined, the parameter Interval (SampleTime) is used to specify the time intervals at which the required power is to be calculated.

## The P value

This parameter affects the difference between the actual and setpoint temperature. The greater the difference between the actual and setpoint temperature, the more the induction plate heats with the P component. If the setpoint temperature is reached or exceeded, the P component is 0. A very high P value causes a strong overshoot or undershoot.

## The I-value

The I-value increases continuously from zero as the induction plate heats up. The longer the induction plate takes to reach the set temperature from the actual temperature, the higher the I-value becomes. Together with the P value, this results in the following addition: As the target temperature is approached, the P value decreases and the I value increases. The target temperature is only reached via the I-value. Above the target temperature, the I-value decreases again. The I-value generates an overshoot.

## The D value

The D value is a damper that dampens the oscillations of the first two components P and I. An excessively large D component slows down the heating and cooling of the induction plate. This value can also be zero.

## Interval (SampleTime)

The PID calculation is performed continuously. The interval describes the cycle. The difference between the actual and setpoint temperature and the change in the actual temperature is determined in each interval. An interval that is too small (e.g. 1000ms) leads to a ‘fluttering’ of the actual temperature in the sense of rounding errors +- 0.0625°C at 12bit resolution. An interval that is too long (e.g. 7000ms) leads to sluggish behaviour. An interval of 2000ms or 3000ms should be suitable in most environments. Only a multiple of 1000 can be used as the interval size (1000, 2000, ... 7000).
