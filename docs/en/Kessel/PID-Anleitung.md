# Easy guide to PID setup

> **Safety note:** Before the first heating run, complete the
> [safety check before the first heat test](../Installation/safety-check-first-heat-test.md).

Note: This guide applies to PID setup from version 1.60.

PID control keeps kettle temperature close to target without excessive overshoot or sluggish response.
PID refers to this automatic temperature control; you do not need to know its
control theory for the following steps.
This guide shows a practical workflow to find working settings without deep control-theory knowledge.

## 1. Define your working mash volume

Use your typical brew-day mash mass (`water + grain bill`).
Do not use full maximum kettle volume if you normally brew smaller batches.

## 2. Run AutoTune first

AutoTune is a configuration step during setup. It measures dead time `L` and
heating rate `R`, from which initial controller settings and timing parameters
are derived. The saved values are then available for normal operation. The
duration depends on the heating response.

Keep this rule:

`PowerSampleTime` should be a multiple of `SampleTime` (factor 10 is a good default).

### Practical note

Smaller kettle volumes often result in PI-like behavior.
Larger volumes often benefit from full PID behavior.
This is expected and not an error.

## 3. First validation test (heat-up to rest)

Use the built-in mash plan example and validate heat-up behavior with two early steps, for example:

- Mash-in: 50°C
- Maltose rest: 64°C

Run the test with water volume that matches your typical mash volume.
Observe approach to setpoint and stability at rest.

## 4. First optimization step: tuning factor

You have two tuning paths:

1. tuning factor
2. direct PID parameter changes (`Kp`, `Ki`, `Kd`)

Start with tuning factor. It is the easiest way to make control more gentle or more aggressive.

## 5. Second optimization step: PID values

Before editing PID values directly, set tuning factor to `1.2`.
Then adjust in small steps:

- start with 10-20%
- once behavior improves, continue with 5% steps

| Behavior | Correction |
| ---------- | ------------ |
| Temperature rises too slowly | Increase `Kp`, increase `Ki` slightly |
| Temperature overshoots target | Decrease `Kp`, increase `Kd` |
| Temperature oscillates around target | Decrease `Ki`, increase `Kd` slightly |
| Temperature stays slightly below target | Increase `Ki` |

If your setup behaves as PI control, keep `Kd = 0`.

Repeat tests after each relevant change. If no agitator is present, stir occasionally during tests.

## Brew-day decision aid

The optional enzyme limiter uses the rise rate R saved during Autotune setup, including after a reboot. It acts only when enabled and within the configured temperature window; it remains disabled during Autotune.

After Autotune completes or is aborted, the configured window remains available. The next PID start applies the configured limiter option again; reloading the plan is not required.

For concrete brew-day decisions, use the [Brew-day quick guide](../Autotune-pid/brew-day-quick-guide.md).
