# KleinerBrauhelfer2

From version 2.5.0 the program [ kleineBrauhelfer2](https://kleiner-brauhelfer.de/) has an export filter for the Brautomat. Recipe development and design is possible in every conceivable detail with the small brewing aid2. With the cheat sheet, kbh2 offers a very good and helpful flow chart for practical implementation in the brewery kitchen. With the export filter for Brautomat all steps can be adopted.

## The kbh2 tab mashing plan

In the Mash Plan tab, the kbh2 offers four different ways to add malts to the mash: mashing, heating, brewing and decoction. All four types are supported in Brautomat. The Mashing type is automatically inserted with autonext disabled. Heating up and brewing with autonext activated. The decoction is carried out with deactivated autonext.

![Cooking](/docs/img/kbh2-maischplan.jpg)

 The Brautomat requires a mashing step to recognize the end of mashing and the transition to lautering. In the kbh2 mash plan, a “heat-up” type mashing step with 76°C or higher and a duration of 1 minute should be added at the end. In this combination, mashing is recognized by Brautomat and inserted with deactivated autonext.

![Cooking](/docs/img/kbh2-maischplan2.jpg)

### Example 1: kbh2 Earl Scheidt cooking mashing process

[Earl Scheid](http://hb-tauschboerse.bplaced.net/Neues_Maischverfahren.htm)

Earl Scheid's cooking mashing process can be planned very well with the meineBrauhelfer2 and can be carried out very easily and automatically using the Brautomat. Please note that a mash step of brewing (main pour and malt part 2) is required between the two partial mashes. Depending on the volume of malt 2, the recommended procedure is to work with deactivated autonext for the brewing step in order to have enough time for mashing in malt 2 before the second maltose rest begins. Alternatively, approx. 60°C with direct (autonext) heating to 63°C can be selected as the target temperature in the mixing cross between main casting/malt 1 and main casting/malt 2.

### Example 2: kbh2 decoction

The Brautomat supports decoction processes with semi-automatic. For example, if a partial mash has been drawn, the Brautomat requires information (click on Play) when this partial step is completed. Creating recipes in kbh2 and importing them into Brautomat make brewing days with decoction easier. A description of the options can be found in the instructions from kleineBrauhelfer2.

## The kbh2 tab cooking

The 5 hop addition types front wort, start of boiling, boiling, end of boiling and beating are taken from the small brewing aid2 and included in the required order in the mash plan of Brautomat.

A time specification in kbh2 in the Cooking tab means “how long the hop addition is cooked”. The cooking time determines, among other things: Bitterness and aroma. See also the collection of formulas in kbh2.
The kbh2 time specification "how long is the hop addition cooked" is converted into a time specification "at what time the hop addition takes place" when imported into the Brautomat.

![Cooking](/docs/img/hopfen.jpg)

### Do a little bit of back-and-forth math

The hop addition is shown in picture kbh2. The first hop addition is “Hallertauer Perle 7% 2020” with a boiling time of 65 minutes. A second parameter is important in this context: on the left side, the total cooking time is marked green as 80 minutes. So the wort is boiled without hops for 15 minutes. The second addition of hops is the "Hallertauer Tradition 5.7% 2020" hops with a boiling time of 15 minutes. In the last 15 minutes of cooking the wort, the Hallertau Perle still has 15 minutes of cooking time left of the original 65 minutes and the second addition of Hallertau Tradition hops cooks for 15 minutes of the remaining 15 minutes of cooking time. The last addition of hops is added for knocking, i.e. after the end of boiling.

The task of Brautomat is to indicate the time of adding hops during brewing and ideally with an aktustia small signal to remind you of the addition of hops.

In this example, a total cooking time of 80 minutes and a first addition of “Hallertauer Perle” hops with a cooking time of 65 minutes are specified. This results in a difference of 15 minutes cooking time without adding hops. The first step, boiling the wort, lasts 15 minutes. Now the first addition of hops must be made. The second hop addition “Hallertauer Tradition 5.7% 2020” has a cooking time of 15 minutes. Of the 65 minutes, 15 minutes are Hallertau Pearl and Hallertau Tradition together in the wort. 65 minutes minus 15 minutes results in an interval between hop additions of 50 minutes. The Hallertauer Perle hop addition must be given 50 minutes before the Hallertauer Tradition hop addition.

The last batch of hops “Hallertauer Tradition 5.7% 2020” is given for knocking. When you knock it out, cooking is finished. So the addition of hops does not count towards the total cooking time.

![Cooking](/docs/img/hopfengaben.jpg)

The addition of hops behaves in the same way. There is a post-isomerization time of 10 minutes. Adding the “Hallertauer Tradition 5.7% 2020” hops for beating with a boiling time of -5 minutes is part of the post-isomerization.

_Tip: If two hop additions are added at the same time, the first hop addition time is set to 0 minutes and the second hop addition is set to the actual addition time. The logic is simple according to the calculation above: the interval between two hop additions to the same zeo point is 0 minutes._

The additions from the kbh2 from the Mashing and Boiling tabs behave in the same way as the hop additions. Additives from the kbh2 tabs water treatment and fermentation are not supported.
