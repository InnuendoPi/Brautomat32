# AutoTune process

> **Note for onboarding:**  
> This chapter is for advanced users.  
> You can skip it during initial Brautomat setup and return later if needed.  
> Start first with [AutoTune step by step](steps.md) and [Brew-day quick guide](brew-day-quick-guide.md).

AutoTune determines suitable control parameters for your specific brewing setup. The goal is stable temperature control with minimal overshoot and undershoot during mashing.

Note: A small overshoot of about 0.5°C is normal. Depending on insulation and stored heat in the kettle, temperature may still rise slightly after heating is switched off.

![AutoTune4](/docs/img/IDS-AutoTune-Ziel.jpg)

The next sections explain P, I, D, and interval behavior. If you only want practical setup, you can skip directly to the step-by-step chapter.

The controller calculates required power from:

`Required power = P + I + D`

After valid PID values are found, `SampleTime` defines how often power is recalculated.

## P value

The P component reacts to the current difference between actual temperature and target temperature.

* Large difference -> higher power contribution
* Close to target -> lower power contribution
* At/above target -> P contribution approaches 0

A very high P value can cause strong overshoot and oscillation.

## I value

The I component accumulates over time while heating.

* If heating takes longer, I grows more
* Near target, P gets smaller while I often carries the final approach
* Above target, I decreases again

Too much I can cause overshoot.

## D value

The D component damps rapid changes and reduces oscillation.
Too much D makes control sluggish.

## Interval (SampleTime)

PID math runs continuously, but output updates happen at intervals.

* Too short (for example 1000 ms): more noise and twitchy control
* Too long (for example 7000 ms): slow reaction

Typical useful values are 2000 ms to 3000 ms. Allowed values are 1000 to 7000 ms in 1000 ms steps.

## Deep dive (Power User)

Further details about 1.60 PID behavior, `Compute()` sequencing, and L/R-based derivation:
[PID engine reference 1.60 (Power User)](../Kessel/pid-engine-160-reference.md)
