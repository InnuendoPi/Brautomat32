# Kettle parameters

## Temperature control

### Max power

Defines the maximum heating output for this kettle (default: `100%`).

Use lower values for small kettle volumes (for example 20 l) to avoid aggressive heating and boil-over. In practice, reduce `Max power` and `Power from transition` together.

At the end of this chapter you will find [two examples for calculating required power](https://innuendopi.gitbook.io/brautomat32/info-5/parameter-ggm-ids#berechnung-der-erforderlichen-leistung).

### Temperature delta to target

Defines how close actual temperature must be to target before the rest timer starts (default: `0.3°C`).

Example: target is 63.0°C, current temperature is 62.7°C. With delta `0.3°C`, the timer starts already at 62.7°C.

This helps avoid unnecessary extension of rest time in slow final approach phases.

### Transition to cooking [°C]

Defines the temperature where Brautomat recognizes the transition into boil mode (default: `95°C`).

This is not the physical boiling point. It is the threshold where PID can hand over to fixed-power boil control.

### Power from transition [%]

Defines fixed output power after the transition threshold (default: `100%`).

For large volumes (about 35 l and above), `100%` is often fine. For smaller kettles, reduce this value (for example to 75%) to reduce boil-over risk.

From version 1.60, this can also be set directly in mash plan command steps:

* `IDSTHRESOUT:80`
* `MAISCHETHRESOUT:80`

### Disable PID for cooking [on/off]

Defines PID behavior above boil target temperature.

Typical example: boil target in mash plan is `98°C`.

If enabled (default), PID stays disabled above target and boil runs with `Power from transition`. This supports a stable rolling boil.

If disabled, PID is active again above target and can reduce output strongly (even to 0%), which may stop boil if overshoot occurs.

### Sensor error power [0-100%]

Defines fallback power if sensor errors occur.

* `100%`: continue operation ignoring sensor error
* `0%`: pause mash process and switch heating off

Brautomat starts sensor-error handling after 3 consecutive invalid sensor readings (about 6 seconds at 2 s scan interval).

If the sensor recovers, Brautomat continues automatically.

_Note: `Max power` still limits effective output. Example: Max power 75% and sensor error power 100% still results in max 75%._

## PID Manager

### Interval (SampleTime)

Defines how often required power is recalculated (default: `3000 ms`, range: `1000` to `7000 ms`).

Smaller intervals react faster but increase controller activity.

### PID algorithm

Available modes:

* Manual PID mode: use custom `Kp`, `Ki`, `Kd`
* IDS PID mode: calculate PID from AutoTune `Ku`/`Pu` for GGM IDS systems
* Relay PID mode: calculate PID from AutoTune `Ku`/`Pu` for relay-driven systems

## AutoTune

### AutoTune noise band

Used for extreme-value detection (min/max). It defines the minimum change required to detect a new extremum.

Typical defaults:

* GGM IDS: `0.2`
* relay/SSR NACHGUSS kettle: `0.5`

Value range: `0.1` to `1.0`.

### AutoTune data series (lookback)

Defines how many measured values are used for extreme detection (default: `50`, max: `100`).

Highly insulated kettles may benefit from a larger lookback during cooling phases.

### AutoTune debug

Enables detailed AutoTune logs for diagnostics.

If enabled, logs are also available during brewing.

_These parameters are setup-specific. You can tune them with a water-only test run before brew day._

## Profiles

Brautomat can store hardware profiles for different kettle setups (for example small and large batch kettles).

A profile includes all kettle-related parameters. Profiles are saved in the `/Profiles` folder.

* `Save` creates/updates a profile file
* `Delete` removes the profile file from flash

At startup, Brautomat loads the last selected profile.

## Calculation of required power

_This section is optional background information._

For mash ramping, a target of about 1°C per minute is common.

Simplified estimate:

`required power P = m[kg] * 75`

Where `m` is mash mass (`grain bill + strike water`).

Assumed IDS max power:

`Pmax = 3500 W`

Power percentage:

`required / available`

### Example 1

Grain bill `9 kg`, strike water `35 l`:

```json
m = 9 + 35 = 44
```

```json
P = 44 * 75 = 3300
```

Needed: approx. 3300 W for about 1°C/min.
With 3500 W available:

```json
3300 / 3500 = 0.94 = 94%
```

So IDS target power is about 94-95% (`IDS:94`).

### Example 2

Grain bill `5.9 kg`, strike water `26.5 l`:

```json
m = 5.9 + 26.5 = 32.4
```

```json
P = 32.4 * 75 = 2430
2430 / 3500 = 0.69
```

So IDS target power is about 69-70% (`IDS:70`).

### Why mass * 75?

Base formula:

```json
P = m[kg] * c * T / (t * w)
```

Variables:

* `m`: mash mass (`strike water + grain bill`)
* `c`: specific heat capacity of mash (approx. `3600 J/(kg*°C)`)
* `T`: temperature increase (`1°C`)
* `t`: time (`60 s`)
* `w`: heater efficiency (`0.8` assumed)

```json
c * T / (t * w) = 3600 * 1 / (60 * 0.8) = 75
```

Hence the simplified factor `75`.

### Specific heat capacity note

The simplified `3600` value has a small tolerance (about 2%, depending on extract and temperature).

Reference values:

* malt grist: about `1570 J/(kg*°C)`
* water (50-80°C): about `4190 J/(kg*°C)`

See also [Brewing Magazine](https://braumagazin.de/article/berechnungen-in-der-brauerei/).
