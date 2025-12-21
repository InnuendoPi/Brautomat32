# KleinerBrauhelfer2

Från version 2.5.0 har programmet [ kleineBrauhelfer2](https://kleiner-brauhelfer.de/) ett exportfilter för Brautomat. Receptutveckling och design är möjlig i alla tänkbara detaljer med det lilla brygghjälpen2. Med fuskbladet erbjuder kbh2 ett mycket bra och hjälpsamt flödesschema för praktisk implementering i bryggeriköket. Med exportfiltret för Brautomat kan alla steg användas.

## Kbh2-flikens mäskningsplan

På fliken Mash Plan erbjuder kbh2 fyra olika sätt att tillsätta malt till mäsken: mäskning, uppvärmning, bryggning och avkok. Alla fyra typerna stöds i Brautomat. Mashing-typen infogas automatiskt med autonext inaktiverad. Uppvärmning och bryggning med autonext aktiverad. Avkoket utförs med avaktiverad autonext.

![Matlagning](/docs/img/kbh2-maischplan.jpg)

 Brautomat kräver ett mäskningssteg för att känna igen slutet av mäskningen och övergången till lautering. I kbh2 mäskplanen bör ett mäskningssteg av typen "uppvärmning" med 76°C eller högre och en varaktighet på 1 minut läggas till i slutet. I denna kombination identifieras mäskningen av Brautomat och infogas med avaktiverad autonext.

![Matlagning](/docs/img/kbh2-maischplan2.jpg)

### Exempel 1: kbh2 Earl Scheidt matlagningsmäskningsprocess

[Earl Scheid](http://hb-tauschboerse.bplaced.net/Neues_Maischverfahren.htm)

Earl Scheids matlagningsmäskningsprocess kan planeras mycket väl med meineBrauhelfer2 och kan utföras mycket enkelt och automatiskt med Brautomat. Observera att ett mäsksteg av bryggning (huvudhäll och malt del 2) krävs mellan de två delmäskarna. Beroende på volymen malt 2 är det rekommenderade förfarandet att arbeta med avaktiverad autonext för bryggsteget för att hinna med att mosa i malt 2 innan den andra maltosvilan börjar. Alternativt kan ca. 60°C med direkt (autonext) uppvärmning till 63°C kan väljas som måltemperatur i blandningskorsningen mellan huvudgjutning/malt 1 och huvudgjutning/malt 2.

### Exempel 2: kbh2 avkok

Brautomat stöder avkoksprocesser med halvautomatisk. Till exempel, om en partiell mash har dragits, kräver Brautomat information (klicka på Spela) när detta delsteg är klart. Att skapa recept i kbh2 och importera dem till Brautomat gör bryggdagar med avkok enklare. En beskrivning av alternativen finns i instruktionerna från kleineBrauhelfer2.

## Fliken kbh2 matlagning

De 5 humletillsatstyperna främre vört, start av kokning, kokning, slut på kokning och vispning är hämtade från den lilla brygghjälpen2 och inkluderas i önskad ordning i mäskplanen för Brautomat.

En tidsangivelse i kbh2 på fliken Matlagning betyder "hur länge humletillsatsen tillagas". Tillagningstiden avgör bland annat: Beska och arom. Se även formelsamlingen i kbh2.
kbh2 tidsspecifikationen "hur länge är humletillsatsen tillagad" omvandlas till en tidsspecifikation "vid vilken tid humletillsatsen äger rum" när den importeras till Brautomat.

![Matlagning](/docs/img/hopfen.jpg)

### Gör lite fram och tillbaka matematik

Humletillsatsen visas i bild kbh2. Den första humletillsatsen är "Hallertauer Perle 7% 2020" med en koktid på 65 minuter. En andra parameter är viktig i detta sammanhang: på vänster sida är den totala tillagningstiden grönmarkerad som 80 minuter. Så vörten kokas utan humle i 15 minuter. Den andra tillsatsen av humle är "Hallertauer Tradition 5,7% 2020" humle med en koktid på 15 minuter. Under de sista 15 minuterna av tillagningen av vörten har Hallertau Perle fortfarande 15 minuters tillagningstid kvar av de ursprungliga 65 minuterna och den andra tillsatsen av Hallertau Tradition-humle tillagas i 15 minuter av de återstående 15 minuterna av tillagningstiden. Den sista tillsatsen av humle tillsätts för knackning, d.v.s. efter avslutad kokning.

Uppgiften för Brautomat är att ange tidpunkten för tillsättning av humle under bryggning och helst med en aktustien liten signal för att påminna dig om tillsatsen av humle.

I det här exemplet anges en total tillagningstid på 80 minuter och en första tillsats av "Hallertauer Perle"-humle med en tillagningstid på 65 minuter. Detta resulterar i en skillnad på 15 minuters tillagningstid utan att tillsätta humle. Det första steget, kokning av vörten, varar i 15 minuter. Nu ska den första tillsatsen av humle göras. Den andra humletillsatsen "Hallertauer Tradition 5,7% 2020" har en tillagningstid på 15 minuter. Av de 65 minuterna är 15 minuter Hallertau Pearl och Hallertau Tradition tillsammans i vörten. 65 minuter minus 15 minuter ger ett intervall mellan humletillsatserna på 50 minuter. Hallertauer Perle humletillsatsen måste ges 50 minuter före Hallertauer Tradition humletillsatsen.

Den sista satsen humle "Hallertauer Tradition 5,7% 2020" ges för att knacka. När du slår ut den är tillagningen klar. Så tillsatsen av humle räknas inte in i den totala tillagningstiden.

![Matlagning](/docs/img/hopfengaben.jpg)

Tillsatsen av humle beter sig på samma sätt. Det finns en efter-isomeriseringstid på 10 minuter. Att lägga till "Hallertauer Tradition 5,7% 2020" humle för vispning med en koktid på -5 minuter är en del av efter-isomeriseringen.

_Tips: Om två humletillsatser läggs till samtidigt, ställs den första humletillsatstiden in på 0 minuter och den andra humletillsatsen ställs in på den faktiska tillsatstiden. Logiken är enkel enligt beräkningen ovan: intervallet mellan två hopptillägg till samma nollpunkt är 0 minuter._

Tilläggen från kbh2 från flikarna Mashing och Boiling beter sig på samma sätt som humletillsatserna. Tillsatser från kbh2-flikarna vattenbehandling och jäsning stöds inte.
