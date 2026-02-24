# Connections

![Board 2](/docs/img/Anschluesse.jpg)

## Connect GGM IDS

Default pin mapping for the induction cooker:

| Type | Cable color | Connection |
|------|-------------|------------|
| Interrupt | blue/green | - (optional) |
| Command | yellow | D6 |
| Relay | white | D7 |
| Supply + | red | 5V / Vcc |
| Supply - | black | GND |

On the wiring diagram, these five connections are marked as `GGM`.
On original cables from the control panel, the interrupt wire is usually blue. On replacement cables it is often green.

Interrupt is optional for normal brewing and mainly used for diagnostics.

Brautomat (including display) can be powered directly from GGM IDS via red/black wires.
If you do that, do not connect an additional external supply to ESP32.

Alternatively, use an external 5V DC supply. In that case, do not connect the red GGM wire.

## Connect DS18B20 temperature sensors

Brautomat supports up to three DS18B20 sensors.
Board labels: `DS18B20-1` to `DS18B20-3`.

Typical cable colors (cheap probes may vary): black/red/yellow.

| Type | Cable color | Connection |
|------|-------------|------------|
| Supply + | green or red | Vcc |
| Data | white or yellow | Data |
| Supply - | brown or black | GND |

The three DS18B20 ports are equivalent; sensor order is assigned in software.

## Connect PT100x via MAX31865

| Type | Connection |
|------|------------|
| SPI clock in | SCLK D9 |
| SDO (MISO) | MISO D10 |
| SDI (MOSI) | MOSI D11 |
| Chip select pin 0 | CS0 D13 |
| Chip select pin 1 | CS1 D16 |
| Chip select pin 2 | CS2 D17 |
| Vin | 3V3 |
| GND | GND |

For PT100x setups, keep CS assignment order (`CS0` to `CS2`).

## Connect display

| Cable | Nextion display | Connection |
|------|------------------|------------|
| red | Power + | Vcc |
| black | Power - | GND |
| blue | TX | D1 |
| yellow | RX | D2 |
