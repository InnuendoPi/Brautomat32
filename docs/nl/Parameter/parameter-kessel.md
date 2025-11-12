# Kookplaatparameters

## Temperatuurregeling

### Maximaal vermogen

Deze parameter beschrijft het maximale uitgangsvermogen van de kookplaat. De standaardwaarde is 100%. Deze parameter wordt gebruikt als er een kleine waterkoker met een inhoud van bijvoorbeeld 20 liter op de kookplaat wordt gebruikt. Door het vermogen te verminderen kan een te snelle opwarming en overkoken worden vermeden. Bij gebruik van kleine brouwketels moeten de parameters "Max. vermogen" en "Vermogen uit overgang" samen worden verlaagd.

Aan het einde van dit hoofdstuk vindt u [twee voorbeelden voor het berekenen van het vereiste vermogen](https://innuendopi.gitbook.io/brautomat32/info-5/parameter-ggm-ids#berechnung-der-erforderlichen-leistung).

### Temperatuurdelta naar doel

Deze parameter beschrijft het verschil met de rusttemperatuur (setpoint) waarbij de timer voor een rust moet starten. De standaardwaarde is 0,3°C. Tijdens het maischproces maakt de PID-controller een zeer nauwkeurige temperatuurregeling mogelijk. Een rusttemperatuur wordt met een nauwkeurigheid van +-0,2°C bereikt doordat de PID-controller de energietoevoer gecontroleerd reduceert voordat de rusttemperatuur wordt bereikt. Het verminderen van de energietoevoer heeft als neveneffect dat de laatste stap om de rusttemperatuur te bereiken langer duurt. Dit is precies waar de parameter 'Delta to target' een rol speelt: als er bijvoorbeeld een rusttemperatuur van 63°C moet worden bereikt en de huidige temperatuur 62,7°C is, dan zou de rusttimer starten bij een temperatuurverschil ten opzichte van de doelstelling van 0,3°C. Met betrekking tot het individuele zetsysteem kan delta worden gebruikt om een ​​ongewenste verlenging van de rusttijd te voorkomen.

### Overgang naar koken [°C]

Deze parameter beschrijft de temperatuur waarbij de PID-controller moet detecteren dat het wort kookt. De standaardwaarde is 95°C. Deze parameter beschrijft niet de temperatuur waarbij het wort begint te koken. Deze parameter beschrijft de temperatuur waarbij de Brautomat de PID controller deactiveert en de kookplaat bestuurt met een gespecificeerd vermogen "power from transition". In tegenstelling tot de rusttemperaturen is het doel van koken niet het precies bereiken en behouden van de temperatuur, maar juist het soepel koken. Dus in plaats van het vermogen te verminderen, gebruikt de inductiekookplaat tijdens het koken een constant vermogen.

### Vermogen uit transitie [%]

Deze parameter beschrijft het uitgangsvermogen van de kookplaat vanaf de temperatuurovergang tot het koken. De standaardwaarde is 100%. Met de parameter "Overgang naar koken" is een temperatuur ingesteld waarbij de PID-regelaar is gedeactiveerd. De parameter “Vermogen uit transitie” specificeert nu het vaste uitgangsvermogen voor de kookplaat. Indien een brouwketel met een inhoud van 35l of meer wordt gebruikt, is de standaardwaarde van 100% een geschikte keuze. In brouwerijkeukens met kleine ketels kan een 100% energietoevoer overkoken veroorzaken. In dit geval kan met deze parameter de maximale energietoevoer worden teruggebracht tot bijvoorbeeld 75%.

### Schakel PID uit voor koken [aan/uit]

Deze parameter bepaalt het gedrag van de PID-controller tijdens het koken wanneer de werkelijke temperatuur boven de doeltemperatuur ligt. Voorbeeld: in het maischplan is de kooktemperatuur ingesteld op 98°C. De parameter "Vermogen uit overgang" schakelt de berekening PID uit van de temperatuur "Overgang naar kookpunt". Als de parameter "[TERM_8]] deactiveren voor koken" is geactiveerd (standaard), dan blijft de PID-controller ook boven de doeltemperatuur van 98°C uit het maischplan uitgeschakeld en wordt het vermogen van de parameter "Vermogen uit transitie" gebruikt. Deze parameter is standaard geactiveerd en maakt rollend koken mogelijk.

Als de parameter "[TERM_8]] deactiveren voor koken" niet is geactiveerd, wordt het benodigde vermogen door de PID-controller berekend zodra de doeltemperatuur (hier 98°C) is bereikt. De berekende prestatie boven het doel-Temperatuur bedraagt ​​0%. De kookplaat schakelt uit en voorkomt indien nodig overkoken.

### Sensorfoutprestaties [0-100%]

Als er een sensorfout optreedt, bijvoorbeeld als een sensor niet is aangesloten of als deze defect is, kan het vermogen van de kookplaat worden aangepast om deze fout op te lossen. Een waarde van 100% negeert de sensorfout.

Als het vermogen bij een sensorfout op 0% wordt ingesteld, pauzeert de Brautomat het maischproces. De kookplaat is uitgeschakeld. Zodra de rusttimer is gestart, wordt de timer gestopt.

De Brautomat start de foutafhandeling na 3 opeenvolgende onjuiste sensorwaarden. De sensoren worden ongeveer elke 2000 ms opgevraagd. Dit betekent dat ca. Er verstrijken 6 seconden tussen de sensorfout van het toastbericht en het begin van de foutafhandeling.

Als een defecte sensor weer correcte sensorwaarden meldt, zet de Brautomat het maischproces automatisch voort.

_Let op: de Max. De vermogensparameter wordt niet overschreden door de parameter Inschakelsensorfout. Als Max. Power IDS is geconfigureerd op 75% en Power in geval van een sensorfout op 100%. Het effectieve maximale uitgangsvermogen is dan 75%, zelfs in het geval van een sensorfout._

## PID Beheerder

### Interval (SampleTime)

Deze parameter geeft het tijdsinterval aan waarmee het benodigde vermogen wordt berekend. De standaardwaarde is 3000 ms. Het interval wordt gebruikt voor de PID-berekening en in de AutoTune. In brouwerijkeukens met kleine volumes kan een kleiner interval voordelig zijn. Hoe kleiner het interval, hoe vaker het benodigde vermogen wordt berekend. Dit leidt tot een hogere benutting van de automatische vleeskuikens. Waardebereik 1000 - 7000 ms.

### PID Algoritme

Er zijn drie opties om uit te kiezen

* handmatige PID-modus: deze selectie maakt het gebruik van uw eigen Kp-, Ki- en Kd-waarden mogelijk
* IDS PID-modus: deze selectie berekent de waarden voor Kp, Ki en Kd voor GGM IDS-inductiekookplaten op basis van de Ku- en Pu-waarden uit het AutoTune-proces
* Relais PID-modus: deze selectie berekent de waarden voor Kp, Ki en Kd voor op relais gebaseerde kookplaten met behulp van de Ku- en Pu-waarden uit het AutoTune-proces

## AutoTune

### AutoTune ruisband

Deze parameter wordt gebruikt voor het detecteren van extreme waarden (Max, Min). AutoTune noiseband geeft de minimale verandering ten opzichte van de vorige gemeten waarde aan die aanwezig moet zijn om een ​​nieuwe extreme waarde te herkennen. De standaardwaarde voor de GGM IDS is 0,2. Voor een herschikt fornuis via een relais of SSR is de standaardwaarde 0,5. Waardebereik: 0,1 - 1,0

### AutoTune Gegevensreeks (overzicht)

Deze parameter specificeert met hoeveel meetwaarden rekening moet worden gehouden bij het bepalen van extreme waarden. De standaardwaarde is 50 metingen. Houd er rekening mee dat er maximaal 100 meetwaarden kunnen worden geconfigureerd. Voor zeer goed thermisch geïsoleerde brouwketels kan het vergroten van de datareeks tot 100 meetwaarden de detectie van extreme waarden in de afkoelfase van het AutoTune-proces verbeteren.

### AutoTune foutopsporing

Deze schakelaar activeert het AutoTune-protocol. Het logboek biedt informatie als het AutoTune-proces niet succesvol kan worden voltooid. Als AutoTune debug is geactiveerd, is het protocol ook beschikbaar tijdens het brouwen.

_Deze 10 parameters moeten voor elk zetsysteem afzonderlijk worden ingesteld. Tijdens het maischen kunnen de parameters gewijzigd worden. Met een proefdraaien met een typische hoeveelheid water kunnen de parameters eenvoudig vóór een brouwdag worden bepaald._

## Profielen

De Brautomat kan hardwareprofielen beheren. Profielen kunnen worden gebruikt als er verschillende ketels zijn. Gebruikers met ketels van verschillende afmetingen kunnen profielen gebruiken om de ketel voor de brouwdag te selecteren in plaats van dat ze alle parameters handmatig opnieuw moeten invoeren. Een hardwareprofiel bevat alle instellingen van een ketel.

Profielen worden opgeslagen in de map /Profiles. Profielen zorgen voor snel en eenvoudigSchakelen tussen verschillende ketels. De functie Opslaan creëert een profielbestand met de bovenstaande parameters, terwijl de functie Verwijderen het profielbestand uit het flashgeheugen verwijdert.

Het standaardprofiel bij het opstarten van de broodmachine is altijd het laatst geselecteerde profiel.

## Berekening van het benodigde vermogen

_De volgende paragraaf beschrijft een optioneel onderwerp._

Bij het maischen is een verhoging van de maischtemperatuur van 1°C per minuut gewenst. Het benodigde vermogen P van de GGM IDS kan als volgt worden berekend:

benodigd vermogen P = m[kg] * 75\
bestaande prestaties van de GGM IDS P = 3500\
Factor in procent = vereiste prestatie: bestaande prestatie

### Voorbeeld 1

In het eerste voorbeeld is er een vulling van 9kg en een hoofdgiet van 35l. Dit resulteert in een totale massa van

```Json
meter = 9 + 35 = 44
```

We vervangen de massa m = 44 in de vereenvoudigde formule:

```Json
P = 44 * 75 = 3300
```

Er is ongeveer 3300 W/min nodig om een volume van 44 kg met 1°C per minuut te verwarmen. Als de GGM IDS op 100% vermogen, dus 3500W, wordt gebruikt, wordt het temperatuurverschil van 1°C in het maisch in minder dan 60 seconden bereikt. Om het doel van een temperatuurstijging van 1°C in het maisch per minuut te bereiken, moeten de maximale prestaties van de GGM IDS worden verlaagd:

```Json
3300: 3500 = 0,94 wat overeenkomt met 94%
```

De GGM IDS zou met ca. 94-95% vermogen (speciale functie IDS:94).

### Voorbeeld 2

In het tweede voorbeeld is er een vulling van 5,9 kg en een hoofdstorting van 26,5 l. De totale massa bedraagt ​​32,4 kg.

```Json
m = 5,9 + 26,5 = 32,4
```

We vervangen de massa m = 32,4 in de vereenvoudigde formule:

```Json
P = 32,4 * 75 = 2430
2430 : 3500 = 0,69
```

Er is ongeveer 2430 W/min nodig om een volume van 32,4 kg met 1°C per minuut te verwarmen. De GGM IDS zou met ca. 69-70% vermogen (speciale functie IDS:70).

### Vereenvoudiging Massa * 75?

```Json
P = m[kg] * c * T / (t * w)
```

m komt overeen met de massa van het hoofdgietstuk + vulling\
c komt overeen met de soortelijke warmtecapaciteit van het beslag. De waarde 3600 wordt gebruikt (eenheid Joule/(kg * °C))\
T komt overeen met het temperatuurverschil. We hanteren een verschil van 1°C\
t komt overeen met de tijd. We zetten 60 seconden in de vergelijking als de tijd\
w het inductierendement (80-90%). De waarde 0,8 wordt in de vergelijking ingevoegd

```Json
c * T / (t * w) = 3600 * 1 / (60 * 0,8) = 75
```

Met deze vereenvoudiging krijgen we de waarde 75.

### specifieke warmtecapaciteit

De hier gebruikte specifieke Warmtecapaciteit 3600 heeft een fouttolerantie van circa 2% (afhankelijk van temperatuur en extractie). Moutmeel heeft een warmtecapaciteit van 1570 J/(kg*°C), water heeft een warmtecapaciteit van 4190 J/(kg*°C) in het temperatuurbereik van 50-80°C. Ervan uitgaande dat het watergehalte in het moutmeel 6% bedraagt: (Cijfers uit voorbeeld 1)

```Json
9 * 94% * 1570 + (35 + 9 * 6%) * 4190 = 8,97 * 1,57 + 35,54 * 4,19 = 14,08 + 148,91 = 13282,2 + 148912,6 = 162194,8 / 44 = 3686,25 J per kg per graad Celsius
```

Zie ook [Braumagazin](https://braumagazin.de/article/berechnungen-in-der-brauerei/)
