# KleinerBrauhelfer2

As of version 2.5.0, the program [kleinerBrauhelfer2](https://kleiner-brauhelfer.de/) has an export filter for the brewing machine. Recipe development and design is possible with the kleinerBrauhelfer2 in every conceivable detail. With the cheat sheet, the kbh2 offers a very good and helpful flow chart for practical implementation in the brewing kitchen. All steps can be transferred using the export filter for the brewing machine.

## The kbh2 mashing plan tab

The kbh2 offers four different ways of adding malt to the mash in the Mashing plan tab: Mashing in, Heating up, Brewing in and Decoction. All four types are supported in the brewing machine. The mashing-in type is added automatically with autonext deactivated. Heating and brewing with autonext activated. The decoction is taken over with deactivated autonext.

![boiling](/docs/img/kbh2-maischplan.jpg)

 The Brautomat requires a “Mash off” mashing step to recognize the end of mashing and the transition to lautering. In kbh2 Maischplan, a mash-off step of the type “Heating up” with 76°C or higher and a duration of 1 minute should be added at the end. In this combination, mashing down is recognized by the brewing machine and inserted with autonext deactivated.

![boiling](/docs/img/kbh2-maischplan2.jpg)

### Example 1: kbh2 Earl Scheidt boil mashing proccess

[Earl Scheid](http://hb-tauschboerse.bplaced.net/Neues_Maischverfahren.htm)

Earl Scheid's boil mashing process is very easy to plan with the keineBrauhelfer2 and very easy to automate with the Brauomat. It should be noted that a mashing step is required between the two partial mashes (main mash and malt part 2). Depending on the volume of malts 2, the recommended procedure is to work with deactivated autonext for the mash-in step in order to have sufficient time to mash in malts 2 before the second maltose rest begins. Alternatively, approx. 60°C with direct (autonext) heating to 63°C can be selected as the target temperature in the main mash/malts 1 to main mash/malts 2 mixing cross.

![Beispiel](https://kleiner-brauhelfer.de/docs/programmreiter/rezept/rezept-maischplan.html#variation-das-earlsche-kochmaischverfahren)

### Example 2: kbh2 Decoction

Decoction processes are supported by the semi-automatic Brautomat. If, for example, a partial mash has been drawn, the brewing machine requires information (click on Play) when this partial step has been completed. The recipe creation in kbh2 and the import into the brewing machine facilitate the brewing day with decoction. A description of the possibilities can be found in the instructions of the small brewing assistant 2.

![Beispiel](https://kleiner-brauhelfer.de/docs/programmreiter/rezept/rezept-maischplan.html#die-dekoktion)

## The kbh2 Boil tab

The 5 hop addition types - front wort, start of boil, boil, end of boil and pitching - are taken from the small brewing assistant2 and included in the required order in the mash plan of the brewing machine.

A time specification in kbh2 in the Boiling tab means “how long is the hop addition boiled”. The boiling time determines the bitterness and aroma, among other things. See also the collection of formulas in kbh2.

The kbh2 time specification “how long is the hop addition boiled” is converted into a time specification “at what time is the hop addition” when imported into the brewing machine.

![boiling](/docs/img/hopfen.jpg)

### Some calculations

Figure kbh2 shows the hop addition. The first hop addition is “Hallertauer Perle 7% 2020” with a boiling time of 65 minutes. A second parameter is important in this context: the total boiling time of 80 minutes is marked in green on the left-hand side. This means that the wort is boiled for 15 minutes without hops. The second hop addition is the “Hallertau Tradition 5.7% 2020” hop with a boiling time of 15 minutes. In the last 15 minutes of boiling the wort, the Hallertauer Perle still has 15 minutes of boiling time left from the original 65 minutes and the second addition of Hallertauer Tradition hops boils for 15 minutes of the remaining 15 minutes of boiling time. The last addition of hops is added at the end of the boil.

The task of the brewing machine is to indicate the time of the hop addition during brewing and, ideally, to remind the brewer of the hop addition with an acoustic signal.

In this example, a total boiling time of 80 minutes and a first hop addition of “Hallertauer Perle” with a boiling time of 65 minutes are specified. This results in a difference of 15 minutes boiling time without the addition of hops. The first partial wort boiling step has a duration of 15 minutes. The first addition of hops must now take place. The second hop addition “Hallertau Tradition 5.7% 2020” has a boiling time of 15 minutes. Of the 65 minutes, Hallertauer Perle and Hallertauer Tradition are in the wort together for 15 minutes. 65 minutes minus 15 minutes results in a time interval of 50 minutes between the hop additions. The Hallertauer Perle hop addition must be added 50 minutes before the Hallertauer Tradition hop addition.

The last addition of “Hallertauer Tradition 5.7% 2020” hops is added at the time of stripping. Boiling is complete when the hops are pitched. This means that the hop addition for whipping does not count towards the total boiling time.

![boiling](/docs/img/hopfengaben.jpg)

The hop addition behaves in the same way. There is a post-isomerisation time of 10 minutes. The ‘Hallertau Tradition 5.7% 2020’ hops addition for the knock-out with a boiling time of -5 minutes is part of the post-isomerisation.

Tip: If two hop additions are added at the same time, the first hop addition time is set to 0 minutes and the second hop addition is set to the actual addition time. The logic is simple according to the calculation above: the interval between two hop additions at the same time is 0 minutes.

The additions from the kbh2 from the mashing and boiling tabs behave in the same way as the hop additions. Additions from the kbh2 tabs water treatment and fermentation are not supported.
