# KleinerBrauhelfer2

From version 2.5.0, [KleinerBrauhelfer2](https://kleiner-brauhelfer.de/) includes an export filter for the Brautomat.
You can build recipes in detail in KBH2 and transfer them directly into the Brautomat mash plan.

## KBH2 Mash Plan Tab

In the Mash Plan tab, KBH2 supports four mash step types: mash-in, heat, boil and decoction.
All four types are supported by the Brautomat.

- `Mash-in` steps are imported with `autonext` disabled.
- `Heat` and `boil` steps are imported with `autonext` enabled.
- `Decoction` steps are imported with `autonext` disabled.

![Cooking](/docs/img/kbh2-maischplan.jpg)

The Brautomat needs a mash-out step to detect the end of mashing and the transition to lautering.
In KBH2, add a final heat-up step with 76°C or higher and a duration of 1 minute.
This step is imported with `autonext` disabled.

![Cooking](/docs/img/kbh2-maischplan2.jpg)

### Example 1: Earl Scheidt Boil Mash Process

[Earl Scheid](http://hb-tauschboerse.bplaced.net/Neues_Maischverfahren.htm)

Earl Scheidt's boil mash process can be planned well in KBH2 and executed with the Brautomat.
A dedicated step for adding the second malt portion is required between the two partial mashes.
Depending on malt volume, it is often useful to keep `autonext` disabled for this step so you have enough time for mash-in before the second maltose rest begins.

### Example 2: Decoction

The Brautomat supports decoction in semi-automatic mode.
If a partial mash is drawn, the Brautomat waits for user confirmation (Play) before continuing.
Recipe creation in KBH2 plus import into the Brautomat simplifies decoction brew days.

## KBH2 Boiling Tab

The five hop addition types (first wort, boil start, boil, boil end, knockout) are imported from KBH2 in the required order.

In KBH2, the boil time means: "how long is this hop addition boiled".
In the Brautomat mash plan, this is converted into step timing during the brew process.

![Cooking](/docs/img/hopfen.jpg)

### Timing Logic (Simple Example)

In the shown example:

- Total boil time is 80 minutes.
- First hop addition (Hallertauer Perle 7% 2020) has 65 minutes boil time.
- Therefore, the first 15 minutes are boil without hops.
- Second hop addition (Hallertauer Tradition 5.7% 2020) has 15 minutes boil time.

That means:

- First boil step without hops: 15 minutes
- Then first hop addition
- Second addition happens 50 minutes later (65 - 15)

Knockout additions are applied after boil end and do not increase total boil time.

![Cooking](/docs/img/hopfengaben.jpg)

Post-isomerization timing follows the same principle.

Tip: If two additions happen at the same time, set one step duration to `0` minutes and place both additions at the same time point.

Additions from the KBH2 Mash Plan and Boiling tabs are supported.
Additions from Water Treatment and Fermentation tabs are not supported.
