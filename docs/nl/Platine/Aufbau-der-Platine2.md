# Structuur van de bestuursversie 2

Deze korte handleiding beschrijft de structuur van het bestuur. De bestuursstructuur is niet veeleisend. Deze korte beschrijving is bedoeld als hulpmiddel voor de onervaren hobbyist en is niet gericht op elektrotechnici. Informatie over solderen, geschikte soldeerbouten en soldeer vind je op YouTube of soortgelijke kanalen.

De onderdelenlijst van het bord:

![Onderdelenlijst](/docs/img/Aufbau1.jpg)

Nummer 1: Weerstand 4,7 kOhm\
Nummer 2: JST-HX-bus (wit) en 5-polig schroefklemmenblok\
Nummer 3: passieve piëzozoemer\
Nummer 4: Schroefklemmenblokken met een steek van 2,54 mm

## Onderdelenlijst voor versie 2-bord

De JST-HX-aansluiting is een alternatief voor het 5-polige schroefklemmenblok. De kabel van het bedieningspaneel van de GGM IDS2 heeft de juiste stekker voor een JST-HX-aansluiting. Als er een vervangende kabel wordt gebruikt in plaats van de originele kabel, is de aansluiting eenvoudiger met een klemmenblok met 5 schroeven.

| Nummer | Artikelnaam | Link naar artikel |
| ------------------------------------------------ | ---------------------------- | ------------------------------- |
| 3 | Schroefklemmenblok 3-polig RM 2.54 | [amazon](https://www.amazon.de/dp/B07PH5HWQL/?coliid=I1JP3GL9UZVHAK&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 optioneel | Schroefklemmenblok 3-polig RM 2.54 | |
| 1 | Schroefklemmenblok 5-polig RM 2.54 | [amazon](https://www.amazon.de/dp/B07PJ71VW8/?coliid=I3AGEWLU82MSU5&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 alternatief voor het schroefklemmenblok 5-polig | JST-HX-fitting 90° RM 2,54 | (voelkner D17526) |
| 2 | Schroefklemmenblok 8-polig RM 2.54 | [amazon](https://www.amazon.de/dp/B07PJ7YK3G/?coliid=I2SR2XJ0B6HEW9&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 2 | Schroefklemmenblok 12-polig RM 2.54| [amazon](https://www.amazon.de/dp/B07NZ459BY/?coliid=I2HTZO5ENXO2Q6&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 | Pinheader RM 2,54 | [amazon](https://www.amazon.de/dp/B01MQ5HJYQ?ref_=pe_27091401_487187591_302_E_DDE_dt_1) |
| 1 | Weerstand 4,7 kOhm | [amazon](https://www.amazon.de/dp/B0CL6N7334/?coliid=IVHTTAGFDF3TX&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1ZKFZ0X0XNS2PX9FJN3H) |
| 1 optioneel | Passieve zoemer 12mm 3V | [amazon](https://www.amazon.de/dp/B0179I6LIK/ref=pe_27091401_487027711_TE_SCE_dp_i1) |
| 1 ESP32 | ESP32 D1 mini | [amazon](https://www.amazon.de/dp/B08BTRQNB3/?coliid=I3GILWFH2TDYH9&colid=I7GQB171JGLX&ref_=list_c_wl_lv_ov_lig_dp_it&th=1) |
| 1 optioneel | Nextion-scherm van 3,5 inch
|                                                       |                                |                                   |

_Let op: de vermelde links of artikelnummers zijn louter informatief en niet gekoppeld aan affiliate-/marketingprogramma's._

Het Nextion 3,5 inch display is verkrijgbaar als Basic, Discovery of Enhanced. Het momenteel goedkoopste model kan worden geselecteerd voor de Brautomat. Beeldschermen van 2,8 inch of kleiner en 4 inch en groter hebben een andere pixelresolutie en worden niet ondersteund door Brautomat!

## Overwegingen vóór de bouw

De printplaat kan variëren afhankelijk van de aansluiting op de inductiekookplaathfeld GGM IDS kan op verschillende manieren worden uitgerust:

1.1 Er wordt gebruik gemaakt van de originele kabel van het GGM IDS-bedieningspaneel

In dit geval is de witte JST-HX-aansluiting vereist (nummer 2 op de afbeelding). Het 5-schroefklemmenblok op de afbeelding direct naast de JST-HX-aansluiting wordt dan niet gebruikt.

1.2 Er wordt een vervangende kabel gebruikt

In dit geval wordt niet de witte JST-HX-aansluiting gebruikt, maar het klemmenblok met 5 schroeven.

Dus ofwel de JST-HX-aansluiting of het klemmenblok met 5 schroeven wordt in de printplaat gestoken.

## Plaats de schroefklemmenblokken

Twee opmerkingen over het plaatsen van de schroefklemmenblokken:

1. De opening van de schroefklemmenblokken is altijd naar buiten gericht (weg van de printplaat).
2. De schroefklemmenblokken worden met een soldeerpunt vastgezet. Vervolgens wordt de juiste pasvorm gecontroleerd. Vervolgens worden alle soldeerpunten gesoldeerd.

Hieronder worden de schroefklemmen stap voor stap geplaatst en gesoldeerd.\
In stap nummer 1 worden de twee 12-polige schroefklemmenblokken geplaatst. De GPIO's D9 tot D19 van ESP32 zijn aangesloten op de 12 schroefklemmenblokken.

![Schroefklemmenblok](/docs/img/Aufbau2.jpg)

Draai nu de printplaat om en bevestig elk schroefklemmenblok met een soldeerpunt. Controleer nu of de schroefklemmenblokken correct zijn geplaatst. Alle pinnen moeten correct door de soldeerpunten worden gestoken. Vervolgens worden alle pinnen gesoldeerd.

In stap nummer 2 worden de twee 8-polige schroefklemmenblokken geplaatst. De GPIO's D0 tot en met D8 van ESP32 zijn aangesloten op de 8 schroefklemmenblokken.

![Schroefklemmenblokken](/docs/img/Aufbau3.jpg)

Het bord ziet er nu als volgt uit in deze status:

![Schroefklemmenblokken](/docs/img/Aufbau4.jpg)

In stap nummer 3 worden de drie drie schroefklemmenblokken geplaatst en gesoldeerd.

![Schroefklemmenblok voor sensoren](/docs/img/Aufbau5.jpg)

Op de drie aansluitingen worden DS18B20 temperatuursensoren aangesloten. Er bestaat geen volgorde of hiërarchie voor deze drie verbindingen. Als alleen analoge PT100x-sensoren worden gebruikt, kunnen de drie schroefklemmenblokken worden weggelaten.

Met versie 2.1 van de kaart kan een optioneel klemmenblok met 3 schroeven worden gebruikt op de GND-positie naast de 3 schroefklemmenblokken voor sensoren. De extra GND-aansluitingen zijn handig wanneer actuatoren (pompen, roerwerken, enz.) worden gebruikt. Als er geen aandrijvingen worden gebruikt, kan het schroefklemmenblok worden weggelaten.

In stap nummer 4 wordt ofwel de JST-HX-aansluiting voor de originele kabel of een klemmenblok met 5 schroeven voor de vervangende kabel geplaatst en gesoldeerd: (zie overwegingen vóór montage).

![JST-HX of schroefklemmenblok](/docs/img/Aufbau6.jpg)

## De piëzo-zoemer

De piëzozoemer is optioneel. Deze stap kan worden overgeslagen als akoestische signalen niet gewenst zijn.\
De piëzozoemer heeft een plus- en een minpool

![Zoemer plus min](/docs/img/Aufbau8.jpg)

De positieve pool wordt in de D8-markering gestoken en de negatieve pool in de GND-markering.

![Zoemer](/docs/img/Aufbau7.jpg)

## De weerstand van 4,7 kOhm

De weerstand van 4,7 kOhm is verplicht voor de Dallas DS18B20-temperatuursensoren. Als alleen analoge PT100x-sensoren worden gebruikt, kan de weerstand worden weggelaten.

![Weerstand](/docs/img/Aufbau9.jpg)

De poten van de weerstand zijn 90° gebogen (bijvoorbeeld rond een sleufschroevendraaier). De weerstand wordt vervolgens in de positie met het label "4k7" geplaatst. Er hoeft geen rekening te worden gehouden met de richting. De basiskleur van weerstanden is vaak blauw of zandkleurig. De gekleurde ringen geven de elektrische weerstand weer:

4,7kOhm weerstand met 4 ringen: geel - violet - rood - [tolerantie]

4,7kOhm weerstand met 5 ringen: geel - violet - zwart - bruin - [tolerantie]

![Weerstand](/docs/img/Aufbau10.jpg)

De poten van de weerstand zijn aan de achterkant iets naar buiten gebogen en gesoldeerd. Gebruik een zijsnijder om de pootjes boven het soldeeroog af te snijden.

## Monteer de ESP-microcontroller op de basisn

Door de basis te monteren kan de ESP-microcontroller op elk moment van het bord worden verwijderd. Socketing is ook handig bij het oplossen van problemen.

![Socket](/docs/img/Aufbau14.jpg)

Bij de levering van de ESP-microcontrollers is adapter nummer 1 inbegrepen. Bovendien is een pin-header nummer 2 met een pitch van 2,54 mm vereist.

![Onderdelenlijst](/docs/img/Aufbau11.jpg)

Voor het aansluiten zijn adapters en pin-headers vereist. Eerst wordt de pinheader in de adapter gestoken, zoals weergegeven in nummer 3. Vervolgens worden adapters met pinstrips in de printplaat gestoken, twee links en twee rechts

_Tip: de pinheader wordt geleverd als 40-pins header. De volledige lengte van de pinheader wordt in de adapter gestoken. De overhang over de adapter is aan het uiteinde gebogen._

![Socket](/docs/img/Aufbau12.jpg)

Nu wordt de ESP erop gezet en vastgezet met een soldeerpunt aan elke kant. Nu wordt de pasvorm van de basis gecontroleerd. Vervolgens worden alle soldeerpunten gesoldeerd.

![ESP32](/docs/img/Aufbau15.jpg)

Ten slotte moeten alle soldeerpunten worden gecontroleerd. Als alle soldeerpunten gesloten zijn, is de Brautomat gereed.
