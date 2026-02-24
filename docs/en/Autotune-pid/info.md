# AutoTune PID

Brautomat uses the dedicated InnuAPID AutoTune library to determine suitable P, I, and D values for your setup.

These values depend on your real hardware and process conditions (kettle size, heating source, insulation, agitation). The next chapter provides the practical step-by-step workflow.

The following section explains the adaptive control concept behind Brautomat.

## Adaptive kettle logic - stable temperature control with dynamic intervals

Brautomat does not use simple on/off heating. It continuously adapts power and control intervals based on temperature behavior.

Benefits:

- fast reaction
- stable rest temperatures
- less overshoot
- repeatable mash profiles
- less manual correction during brew day

## How adaptive logic works

During mashing, the controller continuously evaluates:

- current temperature
- recent temperature trend
- distance to target temperature
- residual heat in the kettle
- heater type (induction, relay, fermenter)

From these inputs, the controller continuously recalculates required power.

### 1. Fast heating phase

If target temperature is still far away, heating runs with high power to reach the next rest quickly.

### 2. Gentle approach to target

As target temperature gets closer, output is reduced automatically. This prevents overshoot.

### 3. Stable rest hold

At target, the controller keeps temperature stable with small, controlled output adjustments.

## Ramping between 50°C and 78°C (approx. 1°C per minute)

Most important enzyme rests are in this range. Brautomat can limit ramp speed to around 1°C per minute for cleaner transitions and better repeatability.

## Automatic interval adjustment

Besides output power, adaptive logic also adjusts control intervals.

### When temperature is dynamic

(for example during heating, stirring, or adding water)

- intervals become shorter
- updates run more frequently
- system reacts faster

### When temperature is stable

(for example during a rest)

- intervals become longer
- control becomes calmer
- energy use decreases

### Interval behavior during controlled ramping

| Situation | Interval behavior |
|----------|-------------------|
| Temperature rises too fast | Intervals shorter -> earlier correction |
| Temperature rises too slow | Intervals shorter -> stronger correction |
| Temperature follows target cleanly | Intervals longer -> quiet operation |

This creates a smooth and reproducible heating curve.
