# Adaptive boiler logic – precise temperature control with automatic interval control

The Brautomat uses an adaptive heating control to control the mash temperature stably and gently. The control does not work with simple on/off switches, but reacts intelligently to temperature behavior and dynamically adjusts the heating output.

This allows:

- fast response times  
- stable temperature control  
- less fluctuations  
- optimal enzyme work  
- relaxed brewing without readjustments  

---

## How adaptive logic works

During mashing, the system continuously monitors:

- the current temperature  
- the temperature change over the last few minutes  
- the distance to the target temperature  
- the residual heat in the boiler  
- the heating type (induction field, relay, fermenter)  

From these values, the control system continuously decides how much heating power is actually required.

### 1. Fast heating

If the target temperature is far away, it heats up at full power in order to reach the next rest quickly.

### 2. Gentle approach

The closer the target temperature comes, the further the system automatically reduces the heating output. This reliably prevents overshooting.

### 3. Stable rest temperature  

Once the target temperature has been reached, the adaptive logic keeps the temperature constant with minimal, finely dosed heating power.

---

## Ramping in the range 50–78 °C (approx. 1 °C per minute)

All important enzyme rests are between 50 °C and 78 °C.  
In this temperature range, the software uses a gentle heating strategy:

**The heating rate is automatically limited to approximately 1°C per minute.**

This prevents severe overheating and ensures:

- clean temperature transitions  
- optimal enzyme activity  
- more stable notches  
- reproducible results  

---

## Automatic interval adjustment

In addition to the heating output and ramping, the adaptive logic also automatically adjusts the measuring and control intervals.

## If the temperature is dynamic  

(e.g. when heating up, stirring, pouring)

→ The intervals are **shortened**  
→ The temperature is updated more frequently  
→ The system reacts faster

## When the temperature is stable  

(e.g. during a rest)

→ The intervals are **extended**  
→ The control becomes quieter  
→ Energy consumption decreases  
→ The temperature remains stable without fluttering

## When ramping (1 °C per minute)

The interval length is adjusted dynamically:

| Situation | Behavior of the control intervals |
|----------|--------------------------------|
| Temperature rises too quickly | Intervals shorter → earlier correction |
| Temperature rises too slowly | Intervals shorter → performance is increased |
| Temperature is exactly at target | Intervals longer → quiet operation |

This enables a particularly uniform heating curve.

---
