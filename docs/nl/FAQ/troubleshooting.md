# Problemen oplossen

Tips & Tricks...wordt vervolgd...

## WiFi

Het WLAN-bereik van de ESP-microcontrollers is beperkt. De huidige WLAN-signaalsterkte wordt weergegeven onder Systeem -> Reset. Hoe dichter de waarde bij nul ligt, hoe sterker het signaal. Waarden van -50dBm tot -75dBm zijn erg goed. Een waarde lager dan -80dBm is slecht en zal problemen veroorzaken. In brouwerijkeukens met een zwakke WiFi-signaalsterkte kan het PID-interval worden verhoogd tot bijvoorbeeld 7000 ms om de hoeveelheid gegevens te verminderen. Als de signaalsterkte zwak is, mag alleen een actieve browser worden gebruikt (zie Server verzonden gebeurtenissen hieronder). Een geschikte locatie voor de Brautomat in het WLAN (of een extra repeater) is belangrijk. Een goede signaalsterkte resulteert niet noodzakelijkerwijs, maar in de meeste gevallen, in een hogere en stabielere gegevensoverdrachtsnelheid.

De webinterface van Brautomat is gebaseerd op het bootstrapframework 4.6 met Javascript. De benodigde bestanden (css, js en fonts) bevinden zich in het flashgeheugen van Brautomat. Dit heeft een voordeel en een nadeel. Het voordeel is dat er geen internetverbinding nodig is om de benodigde bestanden te laden tijdens het brouwen. Het nadeel is dat in het lokale WLAN de Brautomat de raamwerkbestanden één keer moet leveren aan elke verbonden browser wanneer de verbinding tot stand is gebracht. Als een bestand bijvoorbeeld vanwege een zwakke WiFi-signaalsterkte niet correct en slechts zeer langzaam wordt verzonden, werkt de webinterface niet correct. In dit geval is de webinterface niet correct opgebouwd (deze ziet er dan uit als een tekstpagina) of is deze onvolledig (de tabellen blijven leeg). In de meeste gevallen is het herladen van de website (Ctrl-Shift-R) voldoende.

Na een firmware-update moet de Brautomat altijd worden uitgeschakeld en de browsercache worden verwijderd.

## Browsers

De Brautomat is getest op Win11 met MS Edge en Firefox in de huidige versie, evenals op iOS-apparaten met MS Edge en Safari. MS Edge heeft tijdens de ontwikkeling de voorkeur. Ongeacht de browser moet de automatische audioweergave voor de Toasts-berichten (audio) worden geactiveerd voor het adres van Brautomat. Het adres van Brautomat moet ook worden opgenomen in de uitzonderingen bij het blokkeren van browserplug-ins. Verouderde browsers (bijvoorbeeld IE8) worden niet ondersteund.

De browsercache kan leiden tot onjuiste webfront-advertenties. De webfrontend van Brautomat specificeert no-cache en no-store wanneer deze wordt aangeroepen, maar verschillende browsers negeren deze instructies. Het handmatig wissen van de browsercache wordt vaak gestart met de toetsencombinatie Ctrl - Shift - Del.

## Serververzonden gebeurtenissen en energieplannen en clients automatisch vergrendelen

De Brautomat verzendt gegevens naar verbonden en actieve browsers via door de server verzonden gebeurtenissen. Er kunnen maximaal 8 apparaten tegelijkertijd verbinding maken met de Brautomat. Energieschema's of automatische vergrendeling kunnen een verbinding onderbreken. Het zetproces wordt niet gestopt of afgebroken als de verbinding wegvalt! De Brautomat blijft normaal werken. Niet-verbonden browsers ontvangen gewoon geen nieuwe informatie. Informatie omvat temperaturen, huidige mash-stap, huidige prestaties, grafieken, enz. Een Server Sent Events-verbinding met Brautomat is het "gegevenskanaal" waarmee de informatie naar de browser wordt verzonden. Als de verbinding met Brautomat wordt onderbroken, wordt het datakanaal beëindigd. Een actieve browser herkent wanneer zijn datakanaal is beëindigd en logt na korte tijd automatisch opnieuw in op Brautomat.\
Registraties op Brautomat hebben geen volgorde of prioriteit. Het maakt niet uit of de webbrowser van de pc of de tablet als eerste of als laatste wordt aangesloten. Het zetproces kan worden gestart op apparaat A, gepauzeerd op apparaat B, geobserveerd op apparaat C en beëindigd op apparaat D. Als alle vier de apparaten actief en verbonden zijn, tonen alle browsers i (bijna) tegelijkertijdidentieke informatie omdat elk van deze vier apparaten zijn eigen datakanaal heeft.

## Recept importeren

Vanwege het beperkte geheugen kan de receptenimport geen recepten met PDF's, afbeeldingsbijlagen of zeer lange teksten of uitleg importeren. Voor MashMalzandMore-recepten is importeren in kbh2 en vervolgens exporteren in het formaat Brautomat een eenvoudige en goede oplossing. Recepten van Brewfather kunnen ook worden geïmporteerd.

## AutoTune

Het AutoTune-proces mag niet gericht zijn op perfectie, d.w.z. S.v. 0,1°C. De afwijking van de sensoren is doorgaans groter. De parameter AutoTune noiseband (verstrooid rond de doelwaarde) ligt voldoende dicht bij de doeltemperatuur met een waarde van 0,3 om de doeltemperatuur zeer goed te bereiken en gedurende de rustperiode te behouden.\
Zeer goed geïsoleerde brouwketels vereisen een grotere AutoTune gegevensreeks. In de datareeks worden meetwaarden in chronologische volgorde vastgelegd. Aan het begin staat de huidige meetwaarde en helemaal aan het einde van de rij staat de oudste meetwaarde. De gegevensreeks van waarde AutoTune zegt: "hoeveel waarden vóór de huidige meting kijkt de Brautomat terug (naar het verleden) om een ​​temperatuurverandering van minimaal AutoTune ruisband (0,3) te detecteren". Voor een goed geïsoleerde ketel dient de datareeks gevuld te worden met 75 meetpunten. Voor een niet-geïsoleerde ketel is een datareeks van 50 meetpunten voldoende. Deze twee parameters moeten worden aangepast afhankelijk van de omgeving. De standaardspecificaties zouden in de overgrote meerderheid van de gevallen zeer goede waarden moeten opleveren.

## Sensoren en kalibratie

Dallas DS18B20-sensoren worden op veel platforms tegen zeer verschillende prijzen aangeboden. Sensorkalibratie helpt afwijkingen te minimaliseren. In ieder geval dient de IDS sensor gekalibreerd te worden omdat afwijkingen van enkele graden Celsius (afhankelijk van de herkomst) mogelijk zijn.\
Als een sensor regelmatig Sensor Error (toasts) meldt in de webinterface, moet u eerst een andere verbinding voor de sensor proberen. De drie aansluitingen op het bord voor de sensoren zijn gelijkwaardig en hebben geen vooraf bepaalde volgorde. Als er sensorproblemen zijn, moeten de soldeerpunten van de 3 schroefklemmen en de weerstand van 4,7 kOhm (op de printplaat onder de ESP) worden gecontroleerd.

## GGM IDS pin-onderbreking

De pin-interrupt zorgt voor een retourkanaal van de inductiekookplaat naar de Brautomat. Dit retourkanaal is verbonden met de Brautomat met een interrupt-GPIO van de ESP. Een interrupt onderbreekt de programmastroom en controleert de interruptconditie.\
De GGM IDS inductiekookplaat zendt continu ongeveer elke 300 milliseconden een interrupt: ofwel het signaal “alles is in orde” (0000) ofwel een foutcode (bijvoorbeeld 0010 voor geen ketel of lege ketel).

Sectie van seriële uitvoer bij pin-interrupt:

```tekst
10:00:00:174 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:543 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:864 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:209 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:554 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
```

Uit de seriële uitgang bij de pin-interrupt blijkt duidelijk dat de inductiekookplaat voortdurend “alles ok” zendt. De Brautomat onderbreekt echter zijn werk tijdens het brouwen bij elke interrupt (ongeveer elke 300 ms) en controleert de interruptconditie. De pin-interrupt mag daarom alleen worden gebruikt voor het oplossen van problemen.

De volgende interrupts worden beschreven in de GGM IDS2-handleiding:

E0 geen/lege ketel (0010 2)\
E1 circuitfout (0011 3)\
E3 Oververhitting (0101 5)\
E4 temperatuursensor (0110 6)\
E7-laagspanningsbeveiliging (1001 9)\
E8 Overspanningsbeveiliging (1010 10)\
EC-bedieningspaneel (1110 14)\

Helaas zijn de binaire strings niet bekend. Alleen E1 geen/lege ketel is bekend. De tijdDe volgende beugels zijn door middel van testen bepaald, maar zijn niet zeker.

De pin-interrupt mag alleen bij problemen worden toegewezen. Pin D5 is vooraf toegewezen voor de eerste inductiekookplaat. Bij normaal koffiezetten is er geen pin-interrupt nodig.
