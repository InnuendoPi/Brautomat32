# Funktioner

Ett _uppfunnet exempelrecept_ används i följande beskrivning. Den här beskrivningen innehåller inte receptet, utan proceduren för mäskning med Brautomat.

Mäskplanen är i form av ett bord. Detta bord bearbetas från topp till botten av bryggsystemet på en bryggdag. I exempelreceptet är linjen _Mösning 50°C_ det första mäskningssteget och _WHP Hallertau Tradition_ är det sista mäskningssteget. En mycket viktig funktion i mash-planen är egenskapen i kolumnen _autoext_.

## Grundläggande funktioner

![mashplan](/docs/img/brautomat.jpg)

För orienteringsändamål beskrivs först strukturen för tabellraderna. En rad i mäskplanen representerar ett steg i mäskplanen. Varje tabellrad har dessa kolumner:

* Kolumnen "Vila" visar ett namn för detta mäsksteg.
* Kolumnen "Temperatur" innehåller vilotemperaturen (kallas även mål- eller måltemperatur i denna manual).
* Kolumnen "Duration" innehåller vilotiden (timer), hur länge Brautomat ska hålla vilotemperaturen.
* Kolumnen "autoext" anger om nästa steg kommer att fortsätta automatiskt efter att vilotiden (timern) har löpt ut.

Efter dessa fyra detaljer om mäskningssteget finns det redigeringsknappar på varje rad med följande funktioner: (från vänster till höger)

![Redigera mash-plan](/docs/img/brautomat-111.jpg)

* flytta denna rad upp en position
* flytta denna linje ned en position
* redigera den här raden
* ta bort denna rad

Tabellhuvudet innehåller följande knappar (från vänster till höger)

![Redigera mash-plan](/docs/img/brautomat-1.jpg)

* ny rad: lägg till ett nytt mash-steg i slutet av tabellen
* Ta bort: ta bort hela tabellen (tom mash-plan)
* Ladda om: läs om receptet från filen. Ändringar sparas inte. Knappen visas blå
* Databas: Mash plan val, import, export och mash plan schemaläggare
* Komprimera: Dölj och expandera mäskplanstabellen

![Redigera mash-plan](/docs/img/brautomat-11.jpg)

När en tabellrad redigeras ändras knapparna.

* Avsluta: avsluta radredigeraren utan att spara. Knappen visas i grått
* Lagring: Spara ändringar i tabellraden i mäskplanen

Alla knappar för att redigera mäskplanen är dolda så snart bryggprocessen startas. Kollapsknappen för att komprimera och expandera tabellen döljs så snart mashplanen redigeras.

Tillsammans med kontrollerna Power, Play, Pause, Prev och Next är bryggkontrollen intuitiv att använda. Mäskplanen som visas här är en import från kleineBrauhelfer2. Importen infogar automatiskt vilotemperaturer och vilotider. Vid tillsats av humle läggs alfasyran och mängden i gram automatiskt till humlenamnet. Dessutom har dessa förkortningar prefixet:

* VWH: främre vörthoppning
* Matlagning (utan att tillsätta humle)
* WPH: Whirlpool Hopping

Tillsatser som visas på bilden _Koka jäst mat 1gr_ importeras till mäskplanen från den lilla Brauherlfer2 med tidpunkt för administrering och mängd.

## Redigera mäskplanstabell

En mash-plan kan ändras i Brautomat eller helt återskapas. Pennsymbolen sätter en linje i mäskplanstabellen i redigeringsläge.

![Redigera mash-plan](/docs/img/brautomat-3.jpg)

Valfritt antal tabellrader kan nu ändras efter varandra. Så snart en symbol för att redigera mäskplanen har klickats, ändras knappen _Spara_ från grön till röd. När alla ändringar har gjorts måste mashplanen sparas med knappen _Spara_. Alternativt kan alla ändringar ignoreras med _Avsluta_-knappen för att avsluta utan att spara.

Så snart en mäskningsprocess har startat med strömknappen ändras vyn:

![Redigera mash-plan](/docs/img/brautomat-4.jpg)

Knapparna för redigering är dolda. För att göra dessa synliga igen,Mäskningen måste stoppas med hjälp av pausknappen på kontrollen:

![Redigera mash-plan](/docs/img/brautomat-5.jpg)

När mäskningen är pausad visas Paus-knappen i kontrollen i rött och redigeringsfunktionerna visas. Induktionshällen stängs inte av. Vilotemperaturen fortsätter att hållas. Om vilotimern är aktiv pausas den. Om mäskplanen ändras (redigeringsläge), avaktiveras Paus-knappen för att fortsätta mäskningen och Power-knappen och visas i grått tills ändringarna i mäskplanen antingen har sparats eller förkastats (Avsluta).

Applikationsexempel:\
I slutet av en mäskningsprocess används ett jodprov för att fastställa att mäsken ännu inte är jodnormal och att stärkelse fortfarande finns kvar. Försockringsvilan vid 72°C bör förlängas:

* Pausa mäskningen
* Klicka på pennsymbolen i raden Sackarifiering 72°C
* Förläng vilotiden för den andra försockringen med 5 minuter
* Spara
* Klicka på pausknappen så fortsätter mäskningen med den justerade vilotiden.

## Funktion och tillämpning av autonext

![Mash-plan autonext](/docs/img/Maischeplan-autonext.jpg)

Det första steget i mäskplanen som kallas _Mashing 50°C_ har en vilotid på 10 minuter och en inaktiverad _autonext_. Bilden visar situationen när vilotimern har nått 10 minuter: Timern har räknat ner till 00:00 återstående tid. Uppspelningsknappen ändras automatiskt till röd. Toastmeddelandet "Klicka på uppspelningsknappen" visas längst ner till höger. Hällen stängs av. Bryggprocessen väntar på ett klick på play-knappen. Webbgränssnittet visar nästa steg, som startas genom att klicka på Spela.

* Vid slutet av en paus med _autonext_ avaktiverad, stoppas bryggprocessen och hällen stängs av.

Det andra mäskningssteget, som kallas _Maltoserast 63°C_, har en vilotemperatur på 63°C och en vilotid på 25 minuter. I det här steget styr Brautomat från början hällen till 63°C. Så snart denna 63°C har nåtts startar Brautomat timern. En vilotimer är ett stoppur som räknar ner till 00:00 (0 minuter: 0 sekunder). När denna timer når vilotiden på 25 minuter, kontrollerar Brautomat egenskapen _autonext_. Om _autonext_ är aktiverat, hoppar Brautomat automatiskt till nästa steg i mash-planen. I detta exempelrecept är detta steget _Sackarifiering 72°C_. Försockringssteget har en vilotemperatur på 72°C. Brautomat ökar automatiskt hällens effekt för att nå den nya vilotemperaturen.

* Vid slutet av en vila med _autoext_ aktiverad, fortsätter mäskningen automatiskt och hällen förblir påslagen.

![Mash-plan autonext](/docs/img/Maischeplan-autonext2.jpg)

Egenskapen _autonext_ i det sjunde steget _Mashing 78°C_ är inte aktiverad. Om Brautomat stöter på en avaktiverad autonext, avslutar Brautomat den aktuella vilan efter att vilotiden har gått ut och stänger av hällen (0 % effekt). I detta läge visas knappen Spela i rött. För att fortsätta bryggprocessen måste du klicka på Play-knappen.

Medan man i det första exemplet av _autonext_ vanligtvis klickar på Play-knappen direkt för att fortsätta i mäskningssteget, kan det i det andra exemplet av mäskning gå längre tid för lautering och lautervila. Brautomat är kvar i läget "Click Play Button". Hällen på den första pannan förblir avstängd. I detta tillstånd kan alla ställdon och även de två andra pannorna användas.

## Skillnad autonext och brytning

Om autonext avaktiveras i slutet av låset stängs hällen av. Pausknappen stoppar vilotimern, men hällen förblir påslagen och Brautomat beräknar den effekt som krävs för hällen.

Följande avsnitt beskriver den valfria Sonenfunktionerna beskrivs. Brautomat nybörjare kan hoppa över beskrivningen av specialfunktionerna.

## Specialfunktion 0°C vila när autonext är aktiverad

En specialfunktion är vilotemperaturen 0°C när autonext är aktiverad: Om vilotemperaturen är inställd på 0°C och autonext aktiveras startas mäskningssteget automatiskt utan temperaturkontroll. I mäskplansexemplet visas denna speciella funktion efter kokning av vörten i _post-isomerization_-steget. Vid denna tidpunkt har vörten en temperatur på ca. 100°C. Hällen bör stängas av och timern för efter-isomerisering ska startas omedelbart:

![Specialfunktion 0°C](/docs/img/Maischeplan-Sonderfunktion.jpg)

Specialfunktionen _0°C vilotemperatur med aktiverad autonext_ uppfyller exakt detta krav: den faktiska temperaturen och måltemperaturen ignoreras och vilotimern startas. Om vilotemperaturen för efter-isomeriseringssteget inte var inställd på 0°C, utan snarare till 95°C, till exempel, skulle vilotimern för efter-isomeriseringssteget bara starta när temperaturen i mäskbryggaren har svalnat från 100°C till 95°C. Under efter-isomeriseringen sjunker temperaturen i vörten. Vid behov kyls vörten aktivt. Specialfunktionen _0°C vilotemperatur när autonext_ är aktiverad gör att hällen förblir avstängd.

## Bryggprocess

Den grundläggande principen för bryggmaskinen är stigande infusion. Detta inkluderar varianter som Earls matlagningsmäskningsprocess. Andra bryggprocesser kan också implementeras med "autonext"-egenskapen. Det bör dock noteras att Brautomat endast kan stödja andra bryggprocesser med "halvautomatisk". En utlösning för en åtgärd, såsom att dra partiell mäsk, måste göras manuellt av operatören. För Brautomat betyder manuell användning av knapparna Spela upp och Paus. En paus på noll minuter med autonext inaktiverad kan användas som en utlösare för en manuell åtgärd.

Obs: Följande ämnen om kontrollkommandon är valfria och inte relevanta för att komma igång med Brautomat.

## Bryggvattenkokare

Brautomat stöder upp till tre bryggkokare. Den första vattenkokaren krävs för mäskningen. En andra vattenkokare är valfri och kan användas till exempel i bryggprocesser som avkok. Den tredje vattenkokaren används ofta som påfyllning och är även tillval. Användningen av den 2:a och 3:e grytan är fritt valbar, endast den första grytan är knuten till mäskningen och specifikt till vilotimern.

Standardnamn för kontrollkommandon:

* Första vattenkokaren: IDS eller MASH
* Andra pannan: MLT eller SUD
* Tredje pannan: HLT eller REGUSS

## Kontrollkommandon

En andra specialfunktion är styrkommandon för hällar och ställdon. Syntaxen för mäsksteget är.

* Skådespelarens namn: Föreställning

Strömmen kan vara antingen PÅ eller AV eller ett tal mellan 0 och 100 %. AV-tillståndet motsvarar värdet 0 % och PÅ värdet 100 %. Styrkommandot för den första induktionshällen är IDS eller MASH. Styrkommandot för den andra induktionshällen är SUD. Styrkommandot för omarbetningen är HLT. Styrkommandot för ett ställdon är ställdonets namn.

![Manöverkommando för ställdon](/docs/img/Maischeplan-Aktoren.jpg)

Mäskplanen på bilden växlar ställdon på tre ställen. Omröraren slås på direkt i början: Omrörare:PÅ
Strax före slutet av mäskschemat stängs omröraren av: Agitator:OFF och påfyllningen slås på: Refill:ON.

Styrkommandot för ett ställdon kan specificeras med en effekt, t.ex. PUMP: 60. Manöverpumpen kopplas sedan på med 60 % effekt. Detta förutsätter att detta ställdon har aktiverats för PWM. Vilotemperaturen och vilotiden måste ställas in på 0 för kontrollkommandon.

Styrkommandot IDS:50 ställer in hällens maximala uteffekt till 50 %. Omgjutningen kan även slås på till 75 % effekt med HLT:75.![IDS-kontrollkommando](/docs/img/sonderfunktion_sud1.jpg)

Styrkommandot SUD: Koka tjock mäsk med en vilotid på 10 minuter och en vilotemperatur på 100 grader genomför ett mäsksteg på en andra häll. Vilotimern startas så snart vilotemperaturen uppnås.

![Kontrollkommando SUD](/docs/img/sonderfunktion_sud2.jpg)

Styrkommandot SUD: Koka tjock mäsk med en vilotemperatur på 100 grader men utan vilotid kopplar på den andra hällen, startar PID-kontrollen för hällen och hoppar direkt till nästa steg i mäskplanen.

![Kontrollkommando SUD](/docs/img/sonderfunktion_sud3.jpg)

Försockring i mäskningssteget vid 72°C utförs på den första hällen _Maische_. Styrenheten PID reglerar den effekt som krävs för mäsktunnan. Samtidigt reglerar regulatorn PID den effekt som krävs för pannan _Sud_.

Exempel:

* Agitator: PÅ
* Omrörare: AV
* RHE:40
*IDS:75
*IDS:AV
* HLT:100
* HLT:AV
* SUD: Koka tjock mos
* SUD:60

_Obs: Styrkommandona kan användas för att driva mäsk-, brygg- och HLT-pannorna samtidigt. Dock kan bara en vilotimer vara aktiv. Vilotimern är alltid kopplad till den första "mäsk"-hällen._

### Exempel på styrkommando IDS

Som ett exempel ges följande konfiguration för GGM IDS eller MashSud-pannan:

![IDS-kontrollkommando](/docs/img/aktoren_schalten4.jpg)

Den maximala uteffekten är förinställd till 100 %. Temperaturen "Övergång till matlagning" är 95°C. Från denna temperatur och framåt är den maximala uteffekten från GGM IDS endast 80 %.

Mäskschemat i illustrationen börjar med steget "Uppvärmning av huvudhällen". Induktionshällen GGM IDS skulle värma vattnet med effekten "Max. Power IDS" (parameter i temperaturregleringsregistret), dvs med 100%.

![IDS-kontrollkommando](/docs/img/aktoren_schalten2.jpg)

Vilotimern startar vid 59°C. Vilotiden är noll minuter. Brautomat hoppar till nästa rad till steg 2.
Styrkommandot IDS:65 ställer in den maximala effekten för IDS:n till 65 %. Brautomat hoppar till nästa rad till steg 3.
Nu värms temperaturen upp från 59°C till måltemperaturen i "mäskning"-steget. Den maximala prestandan för IDS är 65 %.

Den maximala uteffekten på 65 % bibehålls i följande mäskningssteg. Tills Brautomat möter kontrollkommandot IDS:100 efter mäskningssteget.

![IDS-kontrollkommando](/docs/img/aktoren_schalten3.jpg)

Styrkommandot ändrar den maximala uteffekten för IDS till 100 %. Vörten värms nu upp med 100% effekt till "övergång till kokande" temperatur vid 95°C (se ovan). Från 95°C växlar GGM IDS till 80 % effekt. 80 % motsvarar parametern "Power from transition".

Kontrollkommandona för IDS kan användas för att förhindra att mäsken brinner eller att vörten kokar över, speciellt vid mindre vattenkokare.

### Exempel: Avkok med två kokplattor

![IDS och SUD kontrollkommando](/docs/img/sonderfunktion_sud4.jpg)

På grund av begränsningen _måste den första mäskkärlet alltid köras med vilotid_, finns det en enkel procedur för avkokningsprocesserna: delmäsken som ska tillagas måste gå in i _Mash_-grytan och delmäsken som ska hållas vid temperatur måste gå in i _Sud_-grytan.

### Exempel på användning av ström för en häll

En fyllning på 7 kg och en huvudhäll på 28l ges. Totalt är vikten 35 kg\

Med hjälp av specialfunktionen IDS: <Power in %> kan effekten på en häll justeras så att uppvärmningshastigheten vid mäskningen är 1°C per minut.

![Kontrollkommando MASH power](/docs/img/IDS-Sonderfunktion.jpg)

_För förklaringar av beräkningsmetoden, se: Parametrar för GGM IDS - Temperaturkontroll - Maximal prestanda för IDS._

``` json

    Erforderlig effekt P = m * c * T / (t * w)
    Uttrycket c * T / (t * w) ersätts med värdet 75 vid en verkningsgrad på 80 % för induktionshällen
    Massan m är 35 kg
    P = 35 x 75 = 2625
    2625W är 75% av max. effekt 3500W (2625 / 3500 * 100 = 75 %)

```

I mäskplanen som visas ovan är den maximala uteffekten av IDS satt till 75 % efter mäskning i rad 2 med kontrollkommandot "IDS:75". Med detta kontrollkommando utförs följande steg (maltosvila, försockring och mäskning) med en maximal effekt på 75 %. Efter mäskningen måste användaren klicka på uppspelningsknappen (autonext avaktiverad). Lautering börjar här, följt av lauter vila, etc. Bryggprocessen fortsätter med kontrollkommandot "IDS:100". Den maximala effekten för IDS är inställd på 100 % effekt för vörtkokning.

_Obs: Verkningsgraden på 80 % som används här för en induktionshäll är ett medelvärde. En isolerad och täckt mäsktank (lock eller omrörare) kan ha högre effektivitet._

## Ändring av specialfunktionsprofil

En annan speciell funktion är profilbytet. Kommandona är IDSPROFIL, SUDPROFIL och HLTPROFIL. Profilnamnet följer kolon.

Exempel:

IDSPROFIL:Profil68l\
IDSPROFIL:Profil36l

Med detta specialkommando byts alla parametrar för en panna. På så sätt kan olika hårdvaruprofiler lagras. I avkoksbryggningsprocessen erbjuder specialkommandot ett enkelt sätt att använda justerade parametrar med samma panna och mindre volym.

Specialkommandona IDS: och IDSPROFIL: har olika effekter: Specialkommandot IDS: ändrar den maximala uteffekten. Alla andra parametrar förblir desamma.

_Obs: specialkommandot IDSPROFILE i mash-planen avbryts om enhetstypen (IDS1, IDS2 eller relä) inte är identisk._

## Exempel på bryggdag

Slutligen sammanfattas specialbeställningarna, humletillsatserna och det allmänna förfarandet med hjälp av en bryggdag. Det här exemplet är baserat på följande inställningar:

Miljö med två pannor:

* en vattenkokare för mäsk (volym 70l, GGM IDS2 med 3,6 kW)
* en omgjuten vattenkokare (vattenkokare 35l, 2kW)

Två skådespelare:

* en omrörare (relästyrd)
* ett ringvärmeelement (i mäskpannan, 3,5 kW)

Mash-planen:

![exempel bryggdag för mäskplan](/docs/img/example_control_commands1.jpg)

Exemplet visar hur enkelt det är att koppla på och stänga av ställdon med hjälp av specialkommandon eller hur specialkommandon är integrerade i mäskplanen. I det första mäskningssteget slås omröraren på. Brautomat utför specialkommandot och hoppar omedelbart till nästa steg i mäskplanen. Mäsken i steg konfigurerades med en varaktighet på 1 minut och autonext inaktiverad. I detta steg tillsätts malten till bryggvattnet. Steget tar längre tid än en minut, men beroende på fyllningen vet man inte i förväg hur lång tid mäskningen tar. Efter att ha mosat i en minut stänger Brautomat av hällen och visar uppspelningsknappen i rött (avaktiverad autonext). Brautomat "väntar" nu tills steget är klart och spelknappen klickas. När hällen stängs av och malt tillsätts blir blandningstemperaturen för mäsken under 55°C. Denna procedur lämpar sig till exempel för en avslappnad, långsam tillsats av malten eller för en kort proteinvila.

_Alternativ:_ aktivera egenskapen autonext och ställ in viloperioden till 5 minuter. I detta fall skulle Brautomat bibehålla mäskningstemperaturen i 5 minuter (mäskning) och sedan automatiskt värma upp till nästa vila.

Nästa steg är maltosresten. Styrenheten PID reglerar den effekt som krävs för att nå måltemperaturen i mäsken och bibehålla den under en period av 40 minuter. På rad 4 slås påfyllningen på med ett speciellt kommando. Måltemperaturen för påfyllningen är 75°C och varaktigheten är 0 minuter. Brautomat startar PID-regulatorn för omgjutning av pannan och reglerar den erforderliga effekten i bakgrunden. TillVid denna tidpunkt i mäskplanen är två PID-kontroller aktiva: en PID-kontroller för mäskbryggaren och en PID-kontroller för efterhällningen. Brautomat hoppar direkt till nästa steg efter påslagning.

I mäskplanen slås ringvärmeelementets ställdon på eller kopplas en gång med specialkommandot _RHE:ON_ och en gång med _RHE:50_. ON översätter Brautomat med 100 % prestanda, medan 50 bearbetas därefter med 50 % prestanda. MashSud-kokaren har en maxvolym på 70 liter. Ringvärmeelementet stödjer hällen under matlagning med 50 % effekt för kraftig matlagning: 100 % effekthäll (3,5 kW) plus 1,75 kW ringvärmeelement (50 %). Vid slutet av tillagningen stängs ringvärmeelementet av med specialkommandot _RHE:OFF_.

Tidpunkten för humletillsatserna beräknas utifrån deras tillagningstid. Mäskschemat har en total tillagningstid på 90 minuter. 30 minuter av detta kokar utan att tillsätta humle. Den totala tillagningstiden för de enskilda humletillsatserna summerar. d.v.s. det första tillägget av humle _Hall. Tradition 6,0% 37,2g_ tillagas i totalt 60 minuter:

* Varaktighet av mäsk step hop addition Hall. Tradition 37,2g: 30 minuter
* Varaktighet av mäsk step hop addition Hall. Tradition 31g: 15 minuter
  * I slutet av detta mossteg, är den första tillsatsen av humle (37,2 g) i vörten i 45 minuter
* Varaktighet av mäsk step hop addition Hall. Tradition 30g: 10 minuter
  * I slutet av detta mäskningssteg är den första tillsatsen av humle (37,2 g) 55 minuter och den andra är 25 minuter i vörten
* Varaktighet av mäsk step hop addition Hall. Tradition 7g: 5 minuter
  * I slutet av detta mäskningssteg är den första humletillsatsen (37,2 g) 60 minuter, den andra 24 minuter och den tredje 15 minuter i vörten

Medan verktyg som kleineBrauhelfer, BrewFather eller MMum alltid anger den totala tillagningstiden för varje enskild humletillsats, måste Brautomat ge ett larm eller en indikation om när en tillsats av humle behöver tillsättas vörten under bryggningen.

_Extension:_ Förklaringen av humledoser utökas till att omfatta två eller flera doser samtidigt:

![exempel bryggdag för mäskplan](/docs/img/example_control_commands3.jpg)

Humlen ska tillsättas 10 minuter före slutet av kokningen. Tradition 6,0% 30g_ och jästfoder _Näringsjäst_ tillsätts samtidigt till vörten. Illustrationen visar hur enkelt proceduren är: samtidiga doser med en varaktighet på 0 minuter ges före en dos med en varaktighet.

Det näst sista steget efter isomerisering använder specialfunktionen måltemperatur 0°C. Hällen stängs av med detta mäsksteg. Specialfunktionen vilotemperatur 0°C gör att Brautomat startar vilotimern 10 minuter omedelbart. Vid denna tidpunkt har vörten en temperatur på ca. 100°C och svalnar långsamt. Eftersom följande steg innefattar tillsats av aromhumle vid 78°C kyls vörten aktivt under den 10 minuter långa viloperioden efter isomeriseringen.

Grafen för mäskplanen:

![exempel på bryggdag för mäskplan](/docs/img/example_control_commands2.jpg)
