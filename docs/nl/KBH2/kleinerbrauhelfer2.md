# KleinerBrauhelfer2

Vanaf versie 2.5.0 heeft het programma [ kleineBrauhelfer2](https://klein-brauhelfer.de/) een exportfilter voor de Brautomat. Met de kleine zethulp2 is receptontwikkeling en -ontwerp tot in elk denkbaar detail mogelijk. Met het spiekbriefje biedt kbh2 een zeer goed en nuttig stroomschema voor praktische implementatie in de brouwerijkeuken. Met het exportfilter voor Brautomat kunnen alle stappen worden uitgevoerd.

## Het kbh2-tabblad-maischplan

Op het tabblad Mash Plan biedt de kbh2 vier verschillende manieren om mouten aan de puree toe te voegen: pureren, verwarmen, brouwen en afkoken. Alle vier typen worden ondersteund in Brautomat. Het Mashing-type wordt automatisch ingevoegd terwijl autonext is uitgeschakeld. Opwarmen en zetten met autonext geactiveerd. Het afkooksel wordt uitgevoerd met gedeactiveerde autonext.

![Koken](/docs/img/kbh2-maischplan.jpg)

 De Brautomat vereist een maischstap om het einde van het maischen en de overgang naar lauteren te herkennen. In het kbh2-maischplan moet aan het einde een maischstap van het type “opwarmen” met 76°C of hoger en een duur van 1 minuut worden toegevoegd. In deze combinatie wordt maischen herkend door Brautomat en ingevoegd met gedeactiveerd autonext.

![Koken](/docs/img/kbh2-maischplan2.jpg)

### Voorbeeld 1: kbh2 Earl Scheidt kookproces

[Earl Scheid](http://hb-tauschboerse.bplaced.net/Neues_Maischverfahren.htm)

Het kookproces van Earl Scheid kan heel goed worden gepland met de meineBrauhelfer2 en kan heel eenvoudig en automatisch worden uitgevoerd met behulp van de Brautomat. Houd er rekening mee dat er een maischstap van het brouwen (hoofdschenking en moutdeel 2) nodig is tussen de twee deelmaischingen. Afhankelijk van het volume van mout 2 is de aanbevolen procedure om te werken met gedeactiveerde autonext voor de brouwstap, zodat er voldoende tijd is voor het maischen van mout 2 voordat de tweede maltoserust begint. Als alternatief kan ca. 60°C met directe (autonext) verwarming tot 63°C kan worden geselecteerd als de doeltemperatuur in de mengkruising tussen hoofdgietstuk/mout 1 en hoofdgietstuk/mout 2.

### Voorbeeld 2: kbh2-afkooksel

De Brautomat ondersteunt halfautomatische afkookprocessen. Als er bijvoorbeeld een gedeeltelijke mash is getekend, heeft de Brautomat informatie nodig (klik op Afspelen) wanneer deze gedeeltelijke stap is voltooid. Door recepten te maken in kbh2 en deze te importeren in Brautomat worden brouwdagen met afkooksel eenvoudiger. Een beschrijving van de mogelijkheden vindt u in de handleiding van kleineBrauhelfer2.

## Het kbh2-tabblad koken

De 5 typen hoptoevoeging frontwort, begin koken, koken, einde koken en kloppen worden uit het kleine brouwhulpmiddel2 gehaald en in de gewenste volgorde opgenomen in het maischplan van Brautomat.

Een tijdsaanduiding in kbh2 op het tabblad Koken betekent “hoe lang de hoptoevoeging gaar is”. De kooktijd is onder meer bepalend voor: Bitterheid en aroma. Zie ook de verzameling formules in kbh2.
De kbh2-tijdspecificatie "hoe lang wordt de hoptoevoeging gekookt" wordt bij het importeren in de Brautomat omgezet in een tijdspecificatie "op welk tijdstip de hoptoevoeging plaatsvindt".

![Koken](/docs/img/hopfen.jpg)

### Doe een beetje heen-en-weer wiskunde

De hoptoevoeging wordt getoond in afbeelding kbh2. De eerste hoptoevoeging is “Hallertauer Perle 7% 2020” met een kooktijd van 65 minuten. Een tweede parameter is in deze context belangrijk: aan de linkerkant is de totale kooktijd groen gemarkeerd als 80 minuten. Dus het wort wordt 15 minuten zonder hop gekookt. De tweede toevoeging van hop is de hop "Hallertauer Tradition 5,7% 2020" met een kooktijd van 15 minuten. In de laatste 15 minuten van het koken van het wort heeft de Hallertau Perle nog 15 minuten kooktijd over van de oorspronkelijke 65 minuten en de tweede toevoeging van Hallertau Tradition-hop kookt 15 minuten van de resterende 15 minuten kooktijd. De laatste toevoeging van hop wordt toegevoegd voor het kloppen, d.w.z. na het kokennl.

De taak van Brautomat is om tijdens het brouwen het tijdstip aan te geven waarop hop wordt toegevoegd en idealiter mensen met een akoestisch signaal aan de toevoeging van hop te herinneren.

In dit voorbeeld wordt een totale kooktijd van 80 minuten en een eerste toevoeging van “Hallertauer Perle”-hop met een kooktijd van 65 minuten gespecificeerd. Dit resulteert in een kooktijdverschil van 15 minuten zonder toevoeging van hop. De eerste stap, het koken van het wort, duurt 15 minuten. Nu moet de eerste toevoeging van hop plaatsvinden. De tweede hoptoevoeging “Hallertauer Traditie 5,7% 2020” heeft een kooktijd van 15 minuten. Van de 65 minuten zitten 15 minuten Hallertau Parel en Hallertau Traditie samen in het wort. 65 minuten minus 15 minuten resulteert in een interval tussen hoptoevoegingen van 50 minuten. De Hallertauer Perle-hoptoevoeging moet 50 minuten vóór de Hallertauer Tradition-hoptoevoeging worden gegeven.

De laatste batch hop “Hallertauer Tradition 5,7% 2020” wordt ter kloppen gegeven. Als je hem eruit haalt, is het koken klaar. De toevoeging van hop telt dus niet mee voor de totale kooktijd.

![Koken](/docs/img/hopfenbaren.jpg)

De toevoeging van hop gedraagt zich op dezelfde manier. Er is een post-isomerisatietijd van 10 minuten. Het toevoegen van de “Hallertauer Tradition 5,7% 2020” hop voor het kloppen met een kooktijd van -5 minuten maakt deel uit van de post-isomerisatie.

_Tip: Als er tegelijkertijd twee hoptoevoegingen worden toegevoegd, wordt de eerste hoptoevoegtijd ingesteld op 0 minuten en de tweede hoptoevoeging wordt ingesteld op de daadwerkelijke toevoegingstijd. De logica is eenvoudig volgens de bovenstaande berekening: het interval tussen twee hoptoevoegingen naar hetzelfde nulpunt is 0 minuten.

De toevoegingen uit de kbh2 uit de tabbladen Maischen en Koken gedragen zich op dezelfde manier als de hoptoevoegingen. Additieven uit de kbh2-tabs waterbehandeling en fermentatie worden niet ondersteund.
