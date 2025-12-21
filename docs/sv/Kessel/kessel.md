# Pannkonfiguration och användning

Brautomat32 erbjuder möjligheten att ställa in upp till tre pannor. Den första pannan har den interna beteckningen MASH och alternativt IDS. Denna vattenkokare krävs för mäskningen. De två andra pannorna är tillval. Den andra pannan har den interna beteckningen SUD, alternativt MLT och den tredje pannan har beteckningen HLT eller Nachguss.

De tre pannorna kan vara antingen GGM induktionshäll eller relätyp. En panna av relätyp inkluderar en webhook-anslutning.

![Pannakonfiguration](/docs/img/kessel_1.jpg)

Parametrarna beskrivs i kapitlet Grundinställning och parametrar i korthet - Pannparametrar och är identiska för alla tre pannorna.

Användningen av de tre vattenkokarna är dock olika, speciellt användningen av mäskplanen. Mäskplanen är alltid kopplad till den första pannan av mäskbryggning så länge ingen annan panna anges i mäskplanen via ett styrkommando. Styrkommandon förklaras också i sektionen för specialfunktioner för mäskplan och styrkommandon.

## Pannkontrollkommandon

Det här avsnittet tar endast hänsyn till pannstyrningskommandon. Styrkommandon för ställdon är identiskt uppbyggda, men förklaras i avsnittet om specialfunktioner och styrkommandon i mäskplanen. Ett kontrollkommando innehåller alltid ett kolon i restnamnet. Brautomat känner bara igen från kolon att denna vila ska behandlas som ett kontrollkommando. Formatet är device:maximal power. Detta betyder att kolon skiljer enhetsnamnet från den maximala prestandan.

Följande namn definieras internt som enhetsnamn för de tre pannorna:

* MASH eller IDS för den första vattenkokaren
* MLT eller SUD för den andra pannan
* HLT eller REGUSS för den tredje pannan

Varje panna tilldelas ett namn i inställningarna. Detta namn kan också användas som ett enhetsnamn för ett kontrollkommando.

Siffror mellan 0 och 100 är tillåtna som maximal prestanda. Värdet motsvarar maxeffektparametern i panninställningarna och anges i procent. Specifikationen ON motsvarar 100 % och OFF motsvarar 0 %.

### Alternativ 1: byta pannan manuellt

Den andra och tredje pannan kan slås på och av manuellt via webbgränssnittet med respektive strömknapp. Till exempel, om en panna är inställd för återinfusion, kan måltemperaturen ställas in på 78°C i panninställningarna och pannan kan slås på på bryggdagen vid behov.

### Alternativ 2: automatisk omkoppling av pannan

Den andra och tredje vattenkokaren kan också bytas via mäskplanen:

![Pannakonfiguration](/docs/img/kessel_2.jpg)

I denna förenklade mäskplan slås den tredje pannan HLT på automatiskt i rad 2. Steget HLT:100 med en måltemperatur på 78°C och en varaktighet på 0 minuter slår på påfyllningen med 100% effekt och ställer in måltemperaturen till 78°C. Eftersom varaktigheten är angiven till 0 minuter, slås påfyllningen på permanent. Brautomat går direkt till nästa mäsksteg och lämnar efterinfusionen påslagen. Regulatorn PID reglerar permanent den effekt som krävs för att nå och bibehålla måltemperaturen. Nachguss:100 skulle vara identisk med kontrollkommandot HLT:100. Om påfyllningen har fått namnet "Cooker" i inställningarna, kan även kontrollkommandot COOKER:100 användas.

![Pannakonfiguration](/docs/img/kessel_3.jpg)

I denna mäskplan slås den andra vattenkokaren på i det tredje steget. Till skillnad från föregående HLT-exempel slås SUD-pannan på under en period av 15 minuter med måltemperaturen 100°C. Brautomat förblir på detta steg tills måltemperaturen uppnås och viloperioden på 10 minuter är klar. Vattenkokaren SUD stängs sedan av och Brautomat hoppar till nästa steg i mäskplanen.

Texten "Cook partial mash" är från Brautomat översätter 100 %. Om det inte finns något nummer mellan 0 och 100 eller informationen PÅ eller AV efter kolon, så ersätter Brautomat texten med 100 % kraft.

## Exempel på olika prestanda

Kontrollkommandona kan användas för att justera den maximala effekten under bryggningsprocessen. Till exempel, om induktionshällen har en maximal effekt på 3,5kW och den använda bryggkokaren har en volym på 20 liter, så kan kontrollkommandot MASH:75 användas för att minska den maximala uteffekten från induktionshällen till 75 % effekt. Resten med kontrollkommandot MASH:75 skapas med en måltemperatur på 0°C och en varaktighet på 0 minuter med autonext aktiverad.

## Exempel avkok

Som beskrivits ovan tilldelas en vila från mäskplanen alltid den första pannan (MASH) om inget styrkommando (kolon i vilonamnet) tilldelar resten till en annan panna. Ett styrkommando kan antingen slå på/stänga av den andra pannan med en måltemperatur och hoppa direkt till nästa vila eller integrera den i mäskningen med en viloperiod.

I avkoksbryggningsprocessen tillagas partiell mäsk medan resterande mäsk hålls vid önskad temperatur. Avkok med Brautomat skulle se ut så här:

* Dra resten av mäsken i den andra grytan. Att dra en rest av återstående mäsk med autonext avaktiverad uppfyller denna uppgift.
* slå sedan på den andra pannan permanent till önskad temperatur med en viloperiod på noll minuter. autonext är aktiverad.
* Koka delvis mos i den första vattenkokaren för önskad vilotid. autonext är aktiverad.
* Tillsätt återstående mäsk från den andra grytan till den del av mäsken i den första grytan. autonext är inaktiverad.

Resten i en mäskplan i en miljö med 2 eller 3 vattenkokare har följande princip:

* Delvis mäsk som ska tillagas tilldelas den första pannan
* Restmäsk med temperaturhållning tilldelas den andra eller tredje pannan
* Påfyllningen tilldelas alltid den andra eller tredje grytan

## webhook

PIN-vitreläparametern måste ställas in på "-" så att webhook-elementen visas i webbgränssnittet. Dessutom krävs webhook-URL och ljudkommandot:

![webhook](/docs/img/kessel_webhook1.jpg)

Exempel Shelly 13:00:

Slå på Shelly 13:00: <http://192.168.1.5/relay/0?turn=on>\
Stäng av Shelly 13:00: <http://192.168.1.5/relay/0?turn=off>

Webhook-URL:n för Shelly 1PM är: <http://192.168.1.5/relay/0?turn=> (utan på och av). Webhook switch-parametern måste ställas in på "on/off".

URL Tasmota: <http://192.168.x.x/cm?cmnd=Power1%201>
