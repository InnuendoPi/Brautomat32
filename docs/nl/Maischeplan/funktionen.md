# Kenmerken

In de volgende beschrijving wordt een _verzonnen voorbeeldrecept_ gebruikt. Deze beschrijving bevat niet het recept, maar de procedure voor het pureren met de Brautomat.

Het maischplan heeft de vorm van een tabel. Deze tabel wordt op een brouwdag van boven tot onder verwerkt door het zetsysteem. In het voorbeeldrecept is de regel _Maischen 50°C_ de eerste maischstap en _WHP Hallertau Traditie_ de laatste maischstap. Een zeer belangrijke functie in het mash-plan is de eigenschap in de kolom _autoext_.

## Basisfuncties

![mashplan](/docs/img/brautomat.jpg)

Ter oriëntatie wordt eerst de structuur van de tabelrijen beschreven. Een rij in het maischplan vertegenwoordigt een stap in het maischplan. Elke tabelrij heeft deze kolommen:

* De kolom "Rest" toont een naam voor deze maischstap.
* De kolom "Temperatuur" bevat de rusttemperatuur (in deze handleiding ook wel de doel- of doeltemperatuur genoemd).
* De kolom "Duur" bevat de rusttijd (timer), hoe lang de Brautomat de rusttemperatuur moet behouden.
* De kolom "autoext" geeft aan of de volgende stap automatisch wordt voortgezet nadat de rusttijd (timer) is verstreken.

Na deze vier details over de maischstap zijn er op elke regel bewerkingsknoppen met de volgende functies: (van links naar rechts)

![Mashplan bewerken](/docs/img/brautomat-111.jpg)

* verplaats deze lijn één positie naar boven
* verplaats deze lijn één positie naar beneden
* bewerk deze regel
* verwijder deze regel

De tabelkop bevat de volgende knoppen (van links naar rechts)

![Mashplan bewerken](/docs/img/brautomat-1.jpg)

* nieuwe regel: voeg een nieuwe maischstap toe aan het einde van de tabel
* Verwijderen: verwijder de hele tabel (leeg maischplan)
* Herladen: herlees het recept uit het bestand. Wijzigingen worden niet opgeslagen. De knop wordt blauw weergegeven
* Database: selectie van mash-plannen, import, export en planner van mash-plannen
* Samenvouwen: vouw de maischplantabel samen en vouw deze uit

![Mashplan bewerken](/docs/img/brautomat-11.jpg)

Wanneer een tabelrij wordt bewerkt, veranderen de knoppen.

* Afsluiten: verlaat de regeleditor zonder op te slaan. De knop wordt grijs weergegeven
* Opslag: sla wijzigingen op in de tabelrij in het mash-plan

Alle knoppen voor het bewerken van het maischplan zijn verborgen zodra het brouwproces wordt gestart. De samenvouwknop voor het in- en uitklappen van de tabel wordt verborgen zodra het mashplan wordt bewerkt.

Samen met de bedieningselementen Aan/uit, Afspelen, Pauze, Vorige en Volgende is de koffiezetbediening intuïtief in gebruik. Het hier getoonde maischschema is een import van de kleineBrauhelfer2. De import voegt automatisch de rusttemperaturen en rusttijden in. Bij het toevoegen van hop wordt automatisch het alfazuur en de hoeveelheid in gram toegevoegd aan de hopnaam. Bovendien worden deze afkortingen voorafgegaan:

* VWH: voorworthoppen
* Koken (zonder hop toe te voegen)
* WPH: Whirlpoolhoppen

Additieven zoals weergegeven in de afbeelding _Gistvoedsel koken 1gr_ worden vanuit de kleine Brauherlfer2 met het tijdstip van toediening en de hoeveelheid in het pureeplan geïmporteerd.

## Bewerk de maischplantabel

Een mash-plan kan worden gewijzigd in Brautomat of volledig opnieuw worden gemaakt. Het potloodsymbool zet een lijn in de maischplantabel in de editormodus.

![Mashplan bewerken](/docs/img/brautomat-3.jpg)

Een willekeurig aantal tabelrijen kan nu na elkaar worden gewijzigd. Zodra er op een symbool voor het bewerken van het maischplan is geklikt, verandert de knop _Opslaan_ van groen in rood. Nadat alle wijzigingen zijn aangebracht, moet het mashplan worden opgeslagen met behulp van de knop _Opslaan_. Als alternatief kunnen alle wijzigingen worden genegeerd met de knop _Exit_ om af te sluiten zonder op te slaan.

Zodra via de aan/uit-knop een maischproces wordt gestart, verandert de weergave:

![Mashplan bewerken](/docs/img/brautomat-4.jpg)

De knoppen voor bewerken zijn verborgen. Om deze weer zichtbaar te maken,Het maischproces moet worden gestopt met de pauzeknop op de besturing:

![Mashplan bewerken](/docs/img/brautomat-5.jpg)

Wanneer het maischproces wordt gepauzeerd, wordt de pauzeknop in de besturing rood weergegeven en worden de bewerkingsfuncties weergegeven. De inductiekookplaat gaat niet uit. De rusttemperatuur blijft behouden. Als de rusttimer actief is, wordt deze gepauzeerd. Als het maischplan wordt gewijzigd (editormodus), worden de pauzeknop om het maischproces voort te zetten en de aan/uit-knop gedeactiveerd en grijs weergegeven totdat de wijzigingen in het maischplan zijn opgeslagen of verwijderd (afsluiten).

Toepassingsvoorbeeld:\
Aan het eind van een maischproces wordt met een jodiummonster vastgesteld dat het maisch nog niet jodiumnormaal is en dat er nog zetmeel aanwezig is. De versuikeringsrust bij 72°C moet worden verlengd:

* Pauzeer het maischproces
* Klik op het potloodsymbool in de regel Versuikering 72°C
* Verleng de rusttijd voor de tweede versuikering met 5 minuten
* Opslaan
* Klik op de pauzeknop en het maischproces gaat verder met de aangepaste rustduur.

## Functie en toepassing van autonext

![Mash-plan autonext](/docs/img/Maischeplan-autonext.jpg)

De eerste stap van het maischplan genaamd _Mashing 50°C_ heeft een rusttijd van 10 minuten en een gedeactiveerde _autonext_. De afbeelding toont de situatie wanneer de rusttimer 10 minuten heeft bereikt: De timer heeft afgeteld tot 00:00 resterende tijd. De afspeelknop wordt automatisch rood. Rechtsonder verschijnt het toastbericht “Klik op de afspeelknop”. De kookplaat wordt uitgeschakeld. Het brouwproces wacht op een klik op de afspeelknop. De webinterface toont de volgende stap, die wordt gestart door op Afspelen te klikken.

* Aan het einde van een pauze waarbij _autonext_ gedeactiveerd is, wordt het koffiezetproces gestopt en de kookplaat uitgeschakeld.

De tweede maischstap, Maltoserast 63°C genaamd, heeft een rusttemperatuur van 63°C en een rusttijd van 25 minuten. In deze stap regelt de Brautomat de kookplaat in eerste instantie op 63°C. Zodra deze 63°C is bereikt, start de Brautomat de timer. Een rusttimer is een stopwatch die aftelt tot 00:00 (0 minuten: 0 seconden). Wanneer deze timer de rusttijd van 25 minuten bereikt, controleert de Brautomat de eigenschap _autonext_. Als _autonext_ is geactiveerd, springt de Brautomat automatisch naar de volgende stap in het mash-plan. In dit voorbeeldrecept is dit de stap _Versuikering 72°C_. De versuikeringsstap heeft een rusttemperatuur van 72°C. De Brautomat verhoogt automatisch het vermogen van de kookplaat om de nieuwe rusttemperatuur te bereiken.

* Aan het einde van een rustperiode met _autoext_ geactiveerd, wordt het maischproces automatisch voortgezet en blijft de kookplaat ingeschakeld.

![Mash-plan autonext](/docs/img/Maischeplan-autonext2.jpg)

De eigenschap _autonext_ in de zevende stap _Mashing 78°C_ is niet geactiveerd. Als de Brautomat een gedeactiveerde autonext tegenkomt, beëindigt de Brautomat de huidige rust nadat de rusttijd is verstreken en schakelt de kookplaat uit (0% vermogen). In deze status wordt de knop Afspelen rood weergegeven. Om het brouwproces voort te zetten, moet op de knop Afspelen worden geklikt.

Terwijl in het eerste voorbeeld van _autonext_ gewoonlijk direct op de knop Afspelen wordt geklikt om door te gaan met de maischstap, kan er in het tweede voorbeeld van maischen een langere tijd verstrijken voor het klauteren en klauteren. De Brautomat blijft in de status 'Klik op afspeelknop' staan. De kookplaat van de eerste ketel blijft uitgeschakeld. In deze toestand kunnen alle servomotoren en ook de twee andere ketels worden gebruikt.

## Verschil autonext en breuk

Als autonext aan het einde van de vergrendeling wordt gedeactiveerd, wordt de kookplaat uitgeschakeld. De pauzeknop stopt de rusttimer, maar de kookplaat blijft ingeschakeld en de Brautomat berekent het benodigde vermogen voor de kookplaat.

In de volgende secties wordt de optionele Son beschrevende functies worden beschreven. Brautomat beginners kunnen de beschrijving van de speciale functies overslaan.

## Speciale functie 0°C rust wanneer autonext is geactiveerd

Een speciale functie is de rusttemperatuur 0°C wanneer autonext is geactiveerd: Als de rusttemperatuur is ingesteld op 0°C en autonext is geactiveerd, wordt de maischstap automatisch gestart zonder temperatuurregeling. In het voorbeeld van het maischplan wordt deze speciale functie getoond na het koken van het wort in de _post-isomerisatie_ stap. Op dit punt heeft het wort een temperatuur van ca. 100°C. De kookplaat moet worden uitgeschakeld en de timer voor post-isomerisatie moet onmiddellijk worden gestart:

![Speciale functie 0°C](/docs/img/Maischeplan-Sonderfunktion.jpg)

De speciale functie _0°C rusttemperatuur met geactiveerde autonext_ voldoet precies aan deze eis: de werkelijke en gewenste temperatuur worden genegeerd en de rusttimer wordt gestart. Als de rusttemperatuur van de post-isomerisatiestap niet op 0°C maar bijvoorbeeld op 95°C zou worden ingesteld, zou de rusttimer voor de post-isomerisatiestap pas starten wanneer de temperatuur in de maischbrouwketel is afgekoeld van 100°C naar 95°C. Tijdens de post-isomerisatie daalt de temperatuur in het wort. Indien nodig wordt het wort actief gekoeld. De speciale functie _0°C rusttemperatuur bij geactiveerde autonext_ zorgt ervoor dat de kookplaat uitgeschakeld blijft.

## Brouwproces

Het basisprincipe van de brouwmachine is oplopende infusie. Dit omvat varianten zoals het kookproces van Earl. Andere brouwprocessen kunnen ook worden geïmplementeerd met behulp van de eigenschap “autonext”. Er moet echter worden opgemerkt dat de Brautomat andere brouwprocessen alleen kan ondersteunen met "semi-automatisch". Een trigger voor een actie, zoals het trekken van gedeeltelijke puree, moet handmatig door de operator worden gedaan. Voor Brautomat betekent handmatig het gebruik van de knoppen Afspelen en Pauze. Een pauze van nul minuten terwijl autonext is uitgeschakeld, kan worden gebruikt als trigger voor een handmatige actie.

Opmerking: de volgende onderwerpen over besturingsopdrachten zijn optioneel en niet relevant om aan de slag te gaan met Brautomat.

## Brouwketel

De Brautomat ondersteunt maximaal drie brouwketels. Voor het maischproces is de eerste ketel nodig. Een tweede ketel is optioneel en kan bijvoorbeeld worden gebruikt bij brouwprocessen zoals afkooksel. De derde ketel wordt vaak gebruikt als navulling en is eveneens optioneel. Het gebruik van de 2e en 3e ketel is vrij te kiezen, alleen de eerste ketel is gekoppeld aan het maischproces en specifiek aan de rusttimer.

Standaardnamen voor besturingsopdrachten:

* Eerste waterkoker: IDS of MASH
* Tweede ketel: MLT of SUD
* Derde ketel: HLT of REGUSS

## Besturingsopdrachten

Een tweede bijzondere functie zijn de besturingscommando's voor de kookplaten en actuatoren. De syntaxis voor de mash-stap is.

* Naam acteur: Prestaties

Het vermogen kan AAN of UIT zijn, of een getal tussen 0 en 100%. De UIT-status komt overeen met de waarde 0% en AAN met de waarde 100%. Het bedieningscommando voor de eerste inductiekookplaat is IDS of MASH. Het bedieningscommando voor de tweede inductiekookplaat is SUD. Het besturingscommando voor de herschikking is HLT. Het besturingscommando voor een actor is de actornaam.

![Actuatorbesturingsopdracht](/docs/img/Maischeplan-Aktoren.jpg)

Het maischplan op de afbeelding schakelt actuatoren op drie plaatsen. Het roerwerk wordt direct bij het begin ingeschakeld: Roerwerk:AAN
Kort voor het einde van het maischschema wordt het roerwerk uitgeschakeld: Roerwerk:UIT en het bijvullen wordt ingeschakeld: Bijvullen:AAN.

Het besturingscommando voor een actor kan worden gespecificeerd met een vermogen, b.v. POMP: 60. Vervolgens wordt de stelpomp met 60% vermogen ingeschakeld. Hierbij wordt ervan uitgegaan dat deze actuator is geactiveerd voor PWM. Voor stuurcommando's moeten de rusttemperatuur en de rustduur op 0 worden gezet.

Met het bedieningscommando IDS:50 wordt het maximale uitgangsvermogen van de kookplaat ingesteld op 50%. Het hergieten kan ook worden ingeschakeld op 75% vermogen met HLT:75.![IDS-besturingsopdracht](/docs/img/sonderfunktion_sud1.jpg)

Het bedieningscommando SUD: Dikke puree koken met een rusttijd van 10 minuten en een rusttemperatuur van 100 graden voert een maischstap uit op een tweede kookplaat. De rusttimer wordt gestart zodra de rusttemperatuur is bereikt.

![Besturingsopdracht SUD](/docs/img/sonderfunktion_sud2.jpg)

Het bedieningscommando SUD: Dikke puree koken met een rusttemperatuur van 100 graden maar zonder rusttijd schakelt de tweede kookplaat in, start de PID-controller voor de kookplaat en springt direct naar de volgende stap in het maischplan.

![Besturingsopdracht SUD](/docs/img/sonderfunktion_sud3.jpg)

De maischstap, versuikering bij 72°C, wordt uitgevoerd op de eerste kookplaat _Maische_. De PID-controller regelt het benodigde vermogen voor de maischkuip. Tegelijkertijd regelt de PID-controller het benodigde vermogen voor de ketel _Sud_.

Voorbeelden:

* Roerwerk: AAN
* Roerwerk: UIT
* RHE: 40
*IDS:75
*IDS:UIT
* HLT:100
* HLT:UIT
* SUD: Kook dikke puree
* ZUID:60

_Opmerking: Met de bedieningscommando's kunnen de maisch-, brouw- en HLT-ketels tegelijkertijd worden bediend. Er kan echter slechts één rusttimer actief zijn. De rusttimer is altijd gekoppeld aan de eerste pureekookplaat._

### Voorbeeld van besturingscommando-IDS

Als voorbeeld wordt voor de GGM IDS of de MashSud ketel de volgende configuratie gegeven:

![IDS-besturingsopdracht](/docs/img/aktoren_schalten4.jpg)

Het maximale uitgangsvermogen is vooraf ingesteld op 100%. De “Overgang naar Koken” temperatuur is 95°C. Vanaf deze temperatuur bedraagt ​​het maximale uitgangsvermogen van de GGM IDS slechts 80%.

Het maischschema in de afbeelding begint met de stap “Verwarmen van de hoofdschenking”. De GGM IDS inductiekookplaat zou het water verwarmen met het vermogen "Max. Power IDS" (parameter in het temperatuurcontroleregister), d.w.z. met 100%.

![IDS-besturingsopdracht](/docs/img/aktoren_schalten2.jpg)

De rusttimer begint bij 59°C. De rusttijd bedraagt ​​nul minuten. De Brautomat springt naar de volgende regel van stap 2.
Het stuurcommando IDS:65 stelt het maximale vermogen van de IDS in op 65%. De Brautomat springt naar de volgende regel van stap 3.
Nu wordt de temperatuur in de stap “maischen” van 59°C naar de doeltemperatuur verwarmd. De maximale prestatie van de IDS is 65%.

Bij de volgende maischstappen blijft het maximale uitgangsvermogen van 65% behouden. Totdat de Brautomat na de maischstap voldoet aan het besturingscommando IDS:100.

![IDS-besturingsopdracht](/docs/img/aktoren_schalten3.jpg)

Het besturingscommando verandert het maximale uitgangsvermogen van de IDS naar 100%. Het wort wordt nu op 100% vermogen verwarmd tot de “overgang naar kooktemperatuur” van 95°C (zie hierboven). Vanaf 95°C schakelt de GGM IDS over naar 80% vermogen. 80% komt overeen met de parameter "Vermogen uit transitie".

De bedieningscommando's voor de IDS kunnen worden gebruikt om te voorkomen dat het beslag verbrandt of dat het wort overkookt, vooral bij kleinere ketelvolumes.

### Voorbeeld: afkooksel met twee kookplaten

![IDS- en SUD-besturingsopdracht](/docs/img/sonderfunktion_sud4.jpg)

Vanwege de beperking _de eerste maischketel moet altijd met een rusttijd werken_, is er een eenvoudige procedure voor de afkookprocessen: het te koken deelbrij moet in de _Mash_ketel gaan en het deelbrij dat op temperatuur moet worden gehouden moet in de _Sud_ ketel gaan.

### Voorbeeld van het gebruik van stroom voor een kookplaat

Er wordt een vulling van 7kg en een hoofdschenking van 28l gegeven. In totaal is de massa 35kg\

Met behulp van de speciale functie IDS: <Vermogen in %> kan het vermogen van een kookplaat zo worden aangepast dat de opwarmsnelheid tijdens het maischen 1°C per minuut bedraagt.

![Besturingscommando MASH power](/docs/img/IDS-Sonderfunktion.jpg)

_Voor uitleg over de rekenwijze, zie: Parameters van de GGM IDS - Temperatuurregeling - Maximale prestaties van de IDS._

```Json

    Benodigd vermogen P = m * c * T / (t * w)
    De uitdrukking c * T / (t * w) wordt vervangen door de waarde 75 bij een rendement van 80% voor de inductiekookplaat
    De massa m bedraagt 35 kg
    P = 35 x 75 = 2625
    2625W is 75% van het maximum. vermogen 3500W (2625/3500 * 100 = 75%)

```

In het hierboven getoonde maischplan is de maximale output van de IDS ingesteld op 75% na het maischen in regel 2 met het besturingscommando "IDS:75". Met dit stuurcommando worden de volgende stappen (maltoserust, versuikering en maischen) uitgevoerd met een maximaal rendement van 75%. Na het mashen moet de gebruiker op de afspeelknop klikken (autonext uitgeschakeld). Hier begint het klauteren, gevolgd door een klaringsrust enz. Het brouwproces gaat verder met het besturingscommando “IDS:100”. Het maximale vermogen van de IDS is ingesteld op 100% vermogen voor het koken van wort.

_Let op: Het hier gebruikte rendement van 80% voor een inductiekookplaat is een gemiddelde waarde. Een geïsoleerde en afgedekte maischtank (deksel of roerwerk) kan een hoger rendement hebben._

## Speciale functieprofielwijziging

Een andere bijzondere functie is de profielwijziging. De commando's zijn IDSPROFIL, SUDPROFIL en HLTPROFIL. De profielnaam volgt op de dubbele punt.

Voorbeelden:

IDSPROFIEL:Profil68l\
IDSPROFIEL:Profil36l

Met dit speciale commando worden alle parameters van een ketel uitgewisseld. Op deze manier kunnen verschillende hardwareprofielen worden opgeslagen. Tijdens het brouwproces met afkooksel biedt het speciale commando een eenvoudige manier om aangepaste parameters te gebruiken met dezelfde ketel en een kleiner volume.

De speciale commando's IDS: en IDSPROFIL: hebben verschillende effecten: Het speciale commando IDS: verandert het maximale uitgangsvermogen. Alle andere parameters blijven hetzelfde.

_Let op: het speciale commando IDSPROFILE in het mashplan wordt geannuleerd als het apparaattype (IDS1, IDS2 of relais) niet identiek is._

## Voorbeeld brouwdag

Tenslotte worden de speciale bestellingen, de hoptoevoegingen en de algemene procedure samengevat aan de hand van een brouwdag. Dit voorbeeld is gebaseerd op de volgende opstelling:

Omgeving met twee ketels:

* een maischbrouwketel (volume 70l, GGM IDS2 met 3,6kW)
* een herschikte ketel (waterkoker 35l, 2kW)

Twee acteurs:

* een roerwerk (relaisgestuurd)
* een ringverwarmingselement (in de maischbrouwketel, 3,5kW)

Het maischplan:

![voorbeeld maischplan brouwdag](/docs/img/example_control_commands1.jpg)

Het voorbeeld laat zien hoe eenvoudig het is om actoren in en uit te schakelen met speciale commando's of hoe speciale commando's in het mash-plan worden geïntegreerd. Bij de eerste maischstap wordt het roerwerk ingeschakeld. De Brautomat voert het speciale commando uit en springt onmiddellijk naar de volgende stap in het mash-plan. De mash-in-stap was geconfigureerd met een duur van 1 minuut en autonext uitgeschakeld. In deze stap wordt de mout aan het brouwwater toegevoegd. De stap duurt langer dan een minuut, maar afhankelijk van de vulling is vooraf niet bekend hoe lang het pureren zal duren. Na een minuut pureren schakelt de Brautomat de kookplaat uit en geeft de afspeelknop rood weer (gedeactiveerd autonext). De Brautomat “wacht” nu totdat de stap is voltooid en op de afspeelknop wordt geklikt. Wanneer de kookplaat wordt uitgeschakeld en er mout wordt toegevoegd, zal de mengtemperatuur voor het maisch onder de 55°C liggen. Deze procedure is bijvoorbeeld geschikt voor een ontspannen, langzame toevoeging van de mouten of voor een korte eiwitrust.

_Alternatief:_ activeer de eigenschap autonext en stel de rustperiode in op 5 minuten. In dit geval handhaaft de Brautomat de maischtemperatuur gedurende 5 minuten (maischen) en warmt vervolgens automatisch op tot de volgende rest.

De volgende stap is de maltoserust. De PID-controller regelt het vermogen dat nodig is om de doeltemperatuur in het maisch te bereiken en houdt deze gedurende een periode van 40 minuten vast. In regel 4 wordt het bijvullen ingeschakeld met een speciaal commando. De doeltemperatuur voor het bijvullen is 75°C en de duur is 0 minuten. De Brautomat start de PID-controller voor het hergieten van de ketel en regelt het benodigde vermogen op de achtergrond. NaarOp dit punt in het maischplan zijn twee PID-controllers actief: een PID-controller voor de maischbrouwketel en een PID-controller voor het nagieten. De Brautomat springt na het inschakelen direct naar de volgende stap.

In het maischplan wordt de ringverwarmingselementactuator één keer ingeschakeld of geschakeld met het speciale commando _RHE:ON_ en één keer met _RHE:50_. De ON vertaalt de Brautomat met 100% prestatie, terwijl 50 dienovereenkomstig wordt verwerkt met 50% prestatie. De MashSud waterkoker heeft een maximale inhoud van 70 liter. Het ringverwarmingselement ondersteunt de kookplaat tijdens het koken met 50% vermogen voor krachtig koken: 100% vermogen kookplaat (3,5 kW) plus 1,75 kW ringverwarmingselement (50%). Aan het einde van de bereiding wordt het ringverwarmingselement uitgeschakeld met het speciale commando _RHE:OFF_.

De timing van hoptoevoegingen wordt berekend op basis van hun kooktijd. Het maischschema heeft een totale kooktijd van 90 minuten. Hiervan kookt u 30 minuten zonder hop toe te voegen. De totale kooktijd van de afzonderlijke hoptoevoegingen telt op. D.w.z. de eerste toevoeging van hop _Hall. Traditie 6,0% 37,2 g_ wordt in totaal 60 minuten gekookt:

* Duur van de toevoeging van mash-step-hop Hall. Traditie 37,2g: 30 minuten
* Duur van de toevoeging van mash-step-hop Hall. Traditie 31g: 15 minuten
  * Aan het einde van deze maischstap zit de eerste toevoeging van hop (37,2 g) gedurende 45 minuten in het wort
* Duur van de toevoeging van mash-step-hop Hall. Traditie 30 g: 10 minuten
  * Aan het einde van deze maischstap duurt de eerste toevoeging van hop (37,2 g) 55 minuten en de tweede 25 minuten in het wort
* Duur van de toevoeging van mash-step-hop Hall. Traditie 7g: 5 minuten
  * Aan het einde van deze maischstap duurt de eerste toevoeging van hop (37,2 g) 60 minuten, de tweede 24 minuten en de derde 15 minuten in het wort

Terwijl tools als kleineBrauhelfer, BrewFather of MMum altijd de totale kooktijd voor elke individuele hoptoevoeging aangeven, moet de Brautomat een alarm of een indicatie geven wanneer er tijdens het brouwen hop aan het wort moet worden toegevoegd.

_Uitbreiding:_ De uitleg over hopdoses is uitgebreid met twee of meer doseringen tegelijk:

![voorbeeld maischplan brouwdag](/docs/img/example_control_commands3.jpg)

De hop moet 10 minuten voor het einde van het koken worden toegevoegd. Tradition 6,0% 30g_ en gistvoeding _Voedingsgist_ worden tegelijkertijd aan het wort toegevoegd. De illustratie laat zien hoe eenvoudig de procedure is: gelijktijdige doses met een duur van 0 minuten worden gegeven vóór een dosis met een duur.

De voorlaatste stap na de isomerisatie maakt gebruik van de speciale functie doeltemperatuur 0°C. Bij deze maischstap wordt de kookplaat uitgeschakeld. De speciale functie rusttemperatuur 0°C zorgt ervoor dat de Brautomat de rusttimer onmiddellijk na 10 minuten start. Op dit punt heeft het wort een temperatuur van ca. 100°C en koelt langzaam af. Omdat de volgende stap de toevoeging van aromahop bij 78°C omvat, wordt het wort actief gekoeld tijdens de rustperiode van 10 minuten na de isomerisatie.

De grafiek voor het maischplan:

![voorbeeld maischplan brouwdag](/docs/img/example_control_commands2.jpg)
