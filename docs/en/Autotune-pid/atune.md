# AutoTune process

The AutoTune process determines suitable parameters for the brewing system so that the temperature control in the mashing process can be carried out as accurately as possible. The focus is on the ACTUAL temperatures and the corresponding TARGET temperatures. In practice this means that overshoot and undershoot should be minimized.

Note: An overshoot (exceeding the setpoint temperature) of 0.5°C is normal. Depending on the insulation of the boiler and the induction energy supplied, the temperature will continue to rise slightly even after the hob is switched off.

![AutoTune4](/docs/img/IDS-AutoTune-Ziel.jpg)

The following description of the PID values is intended only as an aid to using the firmware and can be skipped. The AutoTune process is described starting from "The AutoTune process: step by step."\
The PID controller controls the performance of the hobs. It is important to determine appropriate P, I and D values. The PID values ​​are individual for each brewing system and environment. AutoTune is a procedure that helps determine suitable values. The required power of the hobs to get from the actual temperature to the target temperature is calculated from the sum of the three values: Required power = P + I + D\
Once suitable PID values have been determined, the Interval (SampleTime) parameter is used to determine the time intervals at which the required performance should be calculated.

## The P-value

This parameter affects the difference between the actual and target temperature. The greater the difference between the actual and target temperature, the more the hob heats with the P component. If the target temperature is reached or exceeded, the P component is equal to 0. A very high P value causes a strong overshoot or undershoot.

## The I value

The I value increases continuously starting from zero as the hob heats up. The longer the ochfeld takes to get from the actual to the target temperature, the larger the I value becomes. Together with the P value, the following addition results: As the target temperature approaches, the P value becomes smaller and the I value increases. The target temperature is only achieved via the I value. Above the target temperature, the I value becomes smaller again. The I value creates an overshoot.

## The D value

The D value is a damper that dampens the oscillations of the first two parts P and I. Too much D slows down heating and cooling. This value can also be zero.

## Interval (SampleTime)

The PID calculation occurs continuously. The interval describes the cycle. In each interval, the difference between the actual and target temperature as well as the change in the actual temperature is continuously determined. An interval that is too small (e.g. 1000ms) leads to a "fluttering" of the actual temperature in the sense of rounding errors +- 0.0625°C at 12bit resolution. An interval that is too large (e.g. 7000ms) leads to sluggish behavior. An interval of 2000ms or 3000ms should work well in most environments. Only a multiple of 1000ms can be used as an interval size (1000, 2000, ... 7000).
