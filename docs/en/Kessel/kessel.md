# Kettle Configuration and Usage

Brautomat32 supports up to three kettles.

- Kettle 1 (required): `MAISCHE` / `IDS`
- Kettle 2 (optional): `SUD` / `MLT`
- Kettle 3 (optional): `HLT` / `NACHGUSS`

Each kettle can be configured either as:

- GGM induction hob
- relay-based device (including webhook support)

![Kettle configuration](/docs/img/kessel_1.jpg)

All kettle parameters are described in:

- Basic Setup
- Parameter Overview -> Kettle Parameters

## Kettle Control Commands

A control command is detected by a colon in the step name:

`DEVICE:POWER`

Examples of valid device names:

- `MAISCHE` or `IDS`
- `SUD` or `MLT`
- `HLT` or `NACHGUSS`

A custom kettle name from settings can also be used.

`POWER` can be:

- number `0..100`
- `ON` (=100)
- `OFF` (=0)

From version 1.60, power at boil transition can also be set with special commands:

- `IDSTHRESOUT:80`
- `MAISCHETHRESOUT:80`

## Option 1: Manual Kettle Control

Kettle 2 and kettle 3 can be switched manually via their power buttons in the web interface.
Example: configure NACHGUSS target temperature to 78°C and switch it on when needed.

## Option 2: Automatic Kettle Control via Mash Plan

![Kettle configuration](/docs/img/kessel_2.jpg)

Example in line 2:

- `HLT:100`
- target temperature 78°C
- duration 0 minutes

Result:

- NACHGUSS is switched on at 100%
- target temperature is set to 78°C
- Brautomat moves immediately to the next step
- NACHGUSS stays active and PID controls it in the background

Equivalent commands:

- `HLT:100`
- `NACHGUSS:100`
- custom kettle name, e.g. `COOKER:100`

![Kettle configuration](/docs/img/kessel_3.jpg)

Another example:

- `SUD` kettle is enabled with 100°C target and 15-minute duration
- Brautomat stays on this step until target temperature is reached and the 15-minute rest is complete
- then SUD is switched off and the process continues

If the value after `:` is not numeric and not ON/OFF (for example `SUD:Cook partial mash`), Brautomat interprets it as `100%`.

## Example: Dynamic Power Adjustment

You can adapt power during the process.
If your induction hob has 3.5kW and your kettle is small (for example 20l), use `MAISCHE:75` to reduce maximum output and avoid aggressive heating.

Typical setup for this kind of command step:

- target temperature: `0°C`
- duration: `0 min`
- `autonext`: enabled

## Example: Decoction

Without explicit command, mash steps always run on kettle 1 (`MAISCHE`).
With command steps, you can control additional kettles.

Decoction workflow example:

1. Move remaining mash into kettle 2 (manual step, `autonext` off).
2. Keep kettle 2 at temperature (`duration 0`, `autonext` on).
3. Boil partial mash in kettle 1 (`autonext` on).
4. Merge mash back (`autonext` off).

Practical principle in multi-kettle setups:

- boil partial mash in kettle 1
- hold temperature of remaining mash in kettle 2/3
- run NACHGUSS on kettle 2/3

## Webhook

To use webhook controls:

- set `PIN white relay` to `-`
- configure webhook URL and switch mode

![webhook](/docs/img/kessel_webhook1.jpg)

Example Shelly 1PM:

- ON: <http://192.168.1.5/relay/0?turn=on>
- OFF: <http://192.168.1.5/relay/0?turn=off>

Webhook base URL:

<http://192.168.1.5/relay/0?turn=>

Set webhook switch parameter to `on/off`.

Tasmota example:

<http://192.168.x.x/cm?cmnd=Power1%201>
