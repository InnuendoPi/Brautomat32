# Fermenteringsläge

I jäsningsläge bearbetar Brautomat32 jäsplanen uppifrån och ned på samma sätt som mäskplanen. controller Deck har samma funktioner.

![Jäsare Dashboard](/docs/img/fermenter_dash.jpg)

Bearbetningen av stegen har en viktig skillnad:

Det första steget i jäsningsplanen startas när måltemperaturen uppnås. Detta är vanligtvis den tidpunkt då jästen tillsätts vörten. Alla efterföljande steg i jäsplanen startar omedelbart, oavsett den faktiska temperaturen.

För att ställa in den kan en GPIO ställas in för kylning och en GPIO för uppvärmning. Antingen kyla eller uppvärmning är valfritt.

![Fermenteringsinställningar](/docs/img/fermenter_set.jpg)

Fermentorn har tre olika tillstånd: kylning, uppvärmning och tomgång. När statusen för kylning eller uppvärmning ändras, startar en paus. Under pausen ändras inte fermentorns status.

* Gammal statuskylning och ny statuskylning: ingen paus. Kylningen förblir påslagen
* Gammal statusvärme och ny statusvärme: ingen paus. Värmen förblir på
* Gammal status kyla och ny status värme: paus 120s
* Gammal status värme och ny status kyla: paus 120s

## Ramp

Ett fermenteringssteg specificeras med en start- och en sluttemperatur. I den första figuren i detta avsnitt är temperaturen i det första fermenteringssteget 18°C. Detta innebär naturligtvis att jäsningstemperaturen förblir oförändrad under en period av 1 dygn.

I det andra fermenteringssteget är starttemperaturen 18°C ​​och sluttemperaturen 20°C. Varaktigheten för detta fermenteringssteg anges som 2 dagar. Det finns nu två sätt att komma från start till sluttemperatur:

När rampen är aktiverad styr Brautomat jäsningstemperaturen linjärt över den specificerade varaktigheten för detta steg. I det här fallet höjs temperaturen från 18°C ​​till 20°C i steg av +0,1°C under 2 dagar.

Med rampen avaktiverad, fastställs den slutliga temperaturen i början av fermenteringssteget, antingen genom kylning eller uppvärmning. När den slutliga temperaturen väl har fastställts bibehålls den.

## Reläkopplingscykel

Reläomkopplingscykeln bestämmer hur länge ett av kyl-, värme- eller vilolägen hålls. Det tillåtna värdeområdet är mellan 1000 och 240000ms. Standard är 120 000, dvs 120 sekunder. En för liten kopplingscykel kan ha en negativ inverkan på kylanordningar.

## Display

I fermenteringsläge måste MashSud-vyn (sidan 2) väljas. Pannöversikten och vyn för manuell styrning kan inte användas för jäsläge.
