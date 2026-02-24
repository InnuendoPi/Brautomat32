# The RSteckCase

RSteckCase was designed by hobby brewer Ralf Steck.
3D print files are in `Gehaeuse/RSteckCase/RSteckCase.zip`.

The housing is split into two assemblies: base and cover.

## RSteck "Porcupine" housing

![Ralf Steck housing](/docs/img/rsteckcase2.jpg)
![Ralf Steck housing](/docs/img/rsteckcase1.jpg)
![Ralf Steck housing](/docs/img/rsteckcase3.jpg)

## Overview

- Brautomat controller with integrated display
- Mash kettle heating via IDS5 panel (switchable between front panel and external control)
- 2x SSR relays for boil and NACHGUSS kettles
- PWM speed control (MOSFET) for agitator
- 2 relay outputs (one currently not routed outside)
- 3x DS18B20 sensor inputs for all three kettles

> The nickname "Porcupine" comes from the many connected cables sticking out in all directions.

## Housing

- Source: eBay, approx. 13 EUR
- Product type: construction power distribution box (16A, 400V, 2x 230V Schuko)
- Alternative search term: combination wall socket
- Manufacturer: TP-Electric, model [120x170 Combination Box](https://tpelectric.com.tr/en/products/48/120x170)

## Circuit and components

- Innuendo board with ESP32
- 12V to 5V converter: [Amazon](https://www.amazon.de/dp/B07XFMMY1F)
- 2-channel relay board (AZ-Delivery): [Amazon](https://www.amazon.de/dp/B07TYXBFJ3?th=1)
- MOSFET speed controller: [Amazon](https://www.amazon.de/dp/B0DG8B58PM)
- 2x SSR-40DA: [Amazon](https://www.amazon.de/dp/B0DQKWNVJ6)
- 2x SSR heat sinks: [Amazon](https://www.amazon.de/dp/B08C76VHZ5)
- 2x IEC socket for 230V wiring: [Amazon](https://www.amazon.de/dp/B0D4MB1321)
- SP13 aviation connectors (2/3/5 pin): [Amazon](https://www.amazon.de/dp/B0CTY7F75W)

## IDS conversion and 3D print parts

- 4-pin on/on switch for IDS5 conversion: [Amazon](https://www.amazon.de/dp/B07H65423M)
- Matching plug from forum member Jojo5
- Printed parts: raised carrier, converter holder, relay holder, front panel cover, handle

## Wiring and power

- 12V input at rear bottom center (agitator supply)
- 12V feeds relay board and MOSFET output
- After conversion: 5V for SSR inputs, Innuendo board, relay board
- Wiring clamps example: [Lever Clamps](https://amzn.eu/d/aeKAEhg)

## High-voltage area and cooling

- 230V section is located in the cover and shielded
- Power path: IEC sockets -> SSR -> Schuko sockets
- Heat sinks can reach around 60°C during brewing

## IDS plate conversion summary

- Install 4-pole on/on switch at front right (bottom side)
- Wiring:
  - middle row -> cable to heating element
  - front row -> 5-pin cable to Brautomat
  - rear row -> cable to front control panel PCB
  - all three GND lines soldered together
- Switch forward: front control panel active
- Switch backward: Brautomat control active
