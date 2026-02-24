# Functions

The following description uses an _example recipe_.
The focus is not the recipe itself, but the workflow when brewing with the Brautomat.

The mash plan is a table that is processed from top to bottom.
In the example, _Mash-in 50°C_ is the first step and _WHP Hallertauer Tradition_ is the last step.
A key property is the `autonext` column.

## Basic Functions

![mashplan](/docs/img/brautomat.jpg)

Each row in the mash plan contains:

- **Step name**
- **Temperature** (target/setpoint)
- **Duration** (rest timer)
- **autonext** (continue automatically to next step or not)

Row buttons (left to right):

![Edit mash plan](/docs/img/brautomat-111.jpg)

- move up
- move down
- edit
- delete

Header buttons (left to right):

![Edit mash plan](/docs/img/brautomat-1.jpg)

- **new row**: append a new step
- **Delete**: clear the whole table
- **Reload**: reload recipe from file (unsaved changes are discarded)
- **Database**: settings, select, import, export, delete mash plans
- **Collapse**: hide/show table

![Edit mash plan](/docs/img/brautomat-11.jpg)

In row edit mode:

- **Exit**: leave editor without saving row changes
- **Save**: save row changes in table

When a brew process starts, table edit controls are hidden.

## Editing the Mash Plan During Brewing

![Edit mash plan](/docs/img/brautomat-3.jpg)

You can edit multiple rows.
While edits are pending, the main save button changes from green to red.

When brew process is running:

![Edit mash plan](/docs/img/brautomat-4.jpg)

Edit controls are hidden.
Pause the process to show edit controls again:

![Edit mash plan](/docs/img/brautomat-5.jpg)

While paused:

- kettle remains temperature-controlled
- rest timer is paused
- power button and resume are locked while editor is active

### Practical Example

If iodine test shows remaining starch, extend saccharification rest:

1. Pause process
2. Edit row `Saccharification 72°C`
3. Increase duration (for example +5 min)
4. Save
5. Resume

## How `autonext` Works

![Mash plan autonext](/docs/img/Maischeplan-autonext.jpg)

If `autonext` is **disabled**:

- at timer end, process stops at this step
- hob turns off
- Play button turns red
- user must press Play to continue

If `autonext` is **enabled**:

- at timer end, Brautomat automatically switches to next step
- hob remains controlled

![Mash plan autonext](/docs/img/Maischeplan-autonext2.jpg)

This is especially useful after mash-out and during lautering pauses.

## Autonext vs Pause

- **autonext disabled at step end**: hob turns off
- **Pause button**: timer pauses, hob stays active and keeps temperature

## Special Function: 0°C with Autonext

Set:

- target temperature = `0°C`
- `autonext` = enabled

Effect:

- step starts immediately
- no temperature wait
- rest timer starts immediately
- hob stays off

Typical use: post-isomerization directly after boil.

![Special function 0°C](/docs/img/Maischeplan-Sonderfunktion.jpg)

## Brewing Method

The default concept is ascending infusion.
Other methods (for example decoction variants) are possible with semi-automatic operator actions.
Buttons **Play** and **Pause** are used as manual triggers when needed.

## Multi-Kettle Basics

Brautomat supports up to 3 kettles:

- kettle 1: `IDS` / `MAISCHE` (main process kettle)
- kettle 2: `SUD` / `MLT`
- kettle 3: `HLT` / `NACHGUSS`

Only one active rest timer exists at a time (linked to kettle 1).

## Control Commands

Command syntax in step name:

`DeviceOrActuator:Power`

`Power` can be:

- `ON`
- `OFF`
- `0..100`

Examples:

- `RUEHRWERK:ON`
- `RUEHRWERK:OFF`
- `RHE:40`
- `IDS:75`
- `HLT:100`
- `SUD:60`
- `SUD:Cook partial mash` (interpreted as 100%)

![Actuator control command](/docs/img/Maischeplan-Aktoren.jpg)

For actuator command steps, set temperature and duration to `0`.

## Special Command: Boil Transition Power (1.60+)

In addition to `IDS:75`, you can set boil transition power directly:

- `IDSTHRESOUT:80`
- `MAISCHETHRESOUT:80`

This defines fixed boil power (0..100%) after the configured boil transition temperature.

## Example: IDS Power Strategy

![IDS control command](/docs/img/aktoren_schalten4.jpg)

Typical strategy:

- heat with full power during ramp-up
- reduce power at high temperature region to avoid boil-over

The sequence below shows changing max IDS power during process steps:

![IDS control command](/docs/img/aktoren_schalten2.jpg)
![IDS control command](/docs/img/aktoren_schalten3.jpg)

## Example: Decoction with Two Hobs

![IDS and SUD control command](/docs/img/sonderfunktion_sud4.jpg)

Practical pattern:

- partial mash to boil in kettle 1 (`MAISCHE`)
- remaining mash temperature hold in kettle 2 (`SUD`)

## Example: Calculating Power by Batch Mass

If mash mass is 35kg (for example 7kg grain + 28l water), a practical estimate for ~1°C/min ramp:

```json
Required power P = m * c * T / (t * w)
For induction with ~80% efficiency this simplifies to:
P ≈ m * 75
P = 35 * 75 = 2625 W
2625 / 3500 W ≈ 75%
```

So `IDS:75` is a typical starting point for this setup.

![Control command MAISCHE power](/docs/img/IDS-Sonderfunktion.jpg)

## Special Function: Profile Switch

Profile commands:

- `IDSPROFIL:<name>`
- `SUDPROFIL:<name>`
- `HLTPROFIL:<name>`

Examples:

- `IDSPROFIL:Profil68l`
- `IDSPROFIL:Profil36l`

These commands load complete kettle parameter profiles.

Note: profile switch is aborted if device type does not match (IDS1/IDS2/relay).

## Example Brew Day

Two-kettle setup:

- mash kettle (70l, GGM IDS2, 3.6kW)
- NACHGUSS kettle (35l, 2kW)

Two actuators:

- agitator (relay)
- ring heater in mash kettle (3.5kW)

Mash plan example:

![example mash plan brewing day](/docs/img/example_control_commands1.jpg)

The example demonstrates:

- actuator switching by commands
- manual/automatic transitions via `autonext`
- combined kettle control (mash kettle + NACHGUSS)
- hop timing logic from total boil time

Additional hop-timing example:

![example mash plan brewing day](/docs/img/example_control_commands3.jpg)

Resulting process graph:

![example mash plan brewing day](/docs/img/example_control_commands2.jpg)
