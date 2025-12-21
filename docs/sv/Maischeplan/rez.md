# Mash-planinställningar

Brautomat erbjuder enkel hantering av mash-planer. Förutom att importera och exportera kan du växla mellan sparade mash-planer. Tidsstyrning är också möjlig. Detta kapitel kompletterar beskrivningen av de grundläggande funktionerna.

## Mash-plan

Namnet på mäskplanen kan anges i inställningarna. Filnamnet kommer från mash-planens namn. Parametrarna *Total tillagningstid* och *Tid efter isomerisering* visas endast för information och kan inte redigeras. Dessa parametrar läses in under receptimporten. Om en mäskplan skapas manuellt är koktiden och värdena efter isomerisering irrelevanta eftersom Brautomat inte beräknar bitterenheter.

## Tidskontroll

Med hjälp av tidskontroll kan en bröllopsdag planeras och startas automatiskt.

![Tidskontroll](/docs/img/Zeitsteuerung.jpg)

Med DateTimerPicker-elementet kan du enkelt välja datum och tid. Receptnamnet ersätts tillfälligt av den angivna starttiden.

![Tidskontroll](/docs/img/Zeitsteuerung2.jpg)

En aktiverad tidskontroll sparas i konfigurationen. När bryggmaskinen startas om läses inställt datum och tid in. Om denna bryggstart är i framtiden aktiveras tidskontrollen. Om bryggstarten är i det förflutna är tidskontrollen avaktiverad.

## Hantera mash-planer

### Skapa mash-plan

Namnet på mäskplanen måste anges i inmatningsfältet. Med *OK* skapas en ny tom mash-plan.

### Byt namn på mash-plan

Det nya namnet för mäskplanen måste anges i inmatningsfältet. Med *OK* sparas mäskplanen under det nya namnet.

### Ändra mäskplan

Brautomat hanterar mash-planer i flashminnet. Genom att välja *Ändra mash-plan* kan du växla mellan de befintliga mash-planerna.

### Importera mäskplan

Brautomat kan importera bryggrecept från följande källor:

* KleinBrauhelfer2 (från version 2.5 exporttyp Brautomat)
* Mosa malt med mera
* Brewfather
* Brautomat

Ett importerat bryggrecept blir en Brautomat mashplan. Recepthantering och skapande med kbh2 rekommenderas. Exportfiltret "Brautomat" innehåller i optimerad form all data som krävs för att brygga med Brautomat.

Recept från MashMalzandMore bör också först importeras till det lilla brygghjälpen2 och anpassas efter de individuella systemvärdena, råvaror etc. Eftersom MMum inte tilldelar vilonamn rekommenderas det att redigera det i KBH2 mäskplan.

Recept och bryggningar kan importeras från BrewFather via filimport eller via API-anrop. I BrewFather kan vilonamn innehålla en brödtext (av nästan vilken längd som helst). Texten är förkortad till max 50 tecken. Brewfather tillåter flyttal och text som vilotid. Parametrarna konverteras till heltal eller sätts till 0.

*Obs: ESP-mikrokontrollerna har en liten mängd RAM. Recept med mycket lång text, bilder eller andra bilagor kanske inte går att importera. Brautomat filtrerar recept före import. Det kan dock vara nödvändigt att ta bort bilder och mycket långa beskrivningar innan import.

Importerade recept sparas i mappen /Recipes. Receptnamnet används som filnamn. Den maximala längden på filnamnet i Arduino-filsystemet är 31 tecken. Mellanslag och omljud byts ut när du sparar.

### Exportera mash-plan

En mash-plan kan exporteras i JSON-format. För att läsa den igen måste importen användas i formatet Brautomat.

### Ta bort mash-planen

Den valda mash-planen tas bort från flashminnet.

## Import standard

![Import standard](/docs/img/voreinstellung_import.jpg)

Brautomat kräver ett mäskningssteg (valfritt) och ett mäskningssteg. II synnerhet fungerar mäskningssteget som ett separeringssteg mellan mäskning och tillagning när autonext är avaktiverat. Vid import kan Brautomat infoga saknade mäsknings- och mäskningssteg. Dessutom kan saknade temperaturer förses med specifikationer.

### Temperaturinställningar för saknade parametrar

Recept från olika källor kan bland annat sakna temperaturinformation. Det gäller i synnerhet temperaturerna för inmätning, avmäskning, framvört och bubbelpoolhoppning. Bryggarens interna programlogik kräver alltid en temperatur för bearbetning, även om vissa temperaturer inte är nödvändiga ur bryggarens perspektiv. Saknade temperaturer är förinställda med standardvärden.

### Mäskningstemperatur [°C]

Denna parameter är för receptimport och beskriver standardtemperaturen för mäskning. Denna parameter används endast om ingen mäsktemperatur anges under receptimporten.

### Mäskningstemperatur [°C]

Denna parameter är för receptimport och beskriver standardtemperaturen för mäskning. Denna parameter används endast om ingen mäsktemperatur anges under receptimporten.

### Temperatur VWH [°C]

Denna parameter är för receptimport och beskriver standardtemperaturen för en frontvörthoppning. Recept anger ofta ingen temperatur för VWH. En temperaturspecifikation krävs för Brautomat. Om en temperatur anges i receptet kommer denna att användas vid import.

### Temperatur WPH [°C]

Denna parameter är för receptimport och beskriver standardtemperaturen för bubbelpoolhoppning. Recept anger ofta ingen temperatur för WPH. En temperaturspecifikation krävs för Brautomat. Om en temperatur anges i receptet kommer denna att användas vid import.

### Tillagningstemperatur [°C]

Denna parameter beskriver temperaturen vid vilken vörten kokar till en rullande koka. Standardvärdet är 98°C och motsvarar ungefär en plats på 500m över havet. För receptimporten används denna parameter som tillagningstemperatur.
