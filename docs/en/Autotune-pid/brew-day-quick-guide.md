# Brew-day quick guide (symptom -> action)

This page is an operator guide for brew day.
Use it directly when temperature behavior differs from expectation.

## How to use this guide

1. Pick the matching symptom from the matrix below.
2. Apply only the first action.
3. Observe at least one full rest or one complete heat-up segment.
4. Only if the symptom remains, apply the second action.

Rule: Change only one control lever at a time.

## 2-minute pre-start check

- Volume matches AutoTune conditions (about +/-10%).
- Pump and stirrer state matches AutoTune conditions.
- Sensor values are plausible (no jumps, no obvious outliers).
- No plan to change multiple control parameters in parallel.

## Starter profiles by setup (first run)

| Setup | Starting point | First safe correction |
| --- | --- | --- |
| 20-30 L, strong circulation, IDS | AutoTune values + medium tuning factor | If overshoot appears, lower tuning factor slightly first |
| 40-60 L, relay/PWM, medium inertia | AutoTune values + medium to defensive tuning factor | If heat-up is too slow, raise tuning factor in small steps |
| HLT or slow thermal system | AutoTune values + defensive tuning factor | If hold oscillates, lower tuning factor slightly before touching `P/I/D` |

## Symptom -> cause -> action

| Symptom | Likely cause | First action | Second action |
| --- | --- | --- | --- |
| Overshoot > 0.5 K in enzyme range | Loop too aggressive or real inertia higher than tuning run | Lower tuning factor slightly | Review enzyme window/coasting, then fine-adjust `P/I/D` |
| Heat-up clearly too slow | Control style too defensive or changed circulation/volume | Verify circulation and volume realism | Increase tuning factor moderately |
| Rest hold unstable (constant corrections) | Sensor position/flow issue, implausible `sa` or `psa` | Check sensor location and mixing, validate `sa/psa` | Only then adjust `I` in small steps |
| Calm start, later oscillation near setpoint | Thermal delay underestimated | Check coasting behavior | Lower tuning factor slightly, optionally increase `D` carefully |
| AutoTune looked good, brew day differs | Boundary conditions differ between tune and production | Repeat AutoTune under real brew conditions | Apply manual PID correction only after retune |

## Limits of automation

If mixing is weak, sensors are mounted with high thermal lag, or heater power does not match volume, process physics dominates.
In this case, improve setup and process first, then tune again.

## See also

- [AutoTune step by step](steps.md)
- [PID instructions](../Kessel/PID-Anleitung.md)
- [Troubleshooting](../FAQ/troubleshooting.md)
