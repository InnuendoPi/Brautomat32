# AutoTune Stap voor stap

De praktische procedure AutoTune ziet er als volgt uit:

![AutoTune](/docs/img/IDS-AutoTune.jpg)

1. Vul uw maischbrouwketel met een gebruikelijke hoeveelheid water

    een. Een typische hoeveelheid komt overeen met een ketelvulling bestaande uit hoofdgieten en vullen

    Voorbeeld: 20 liter hoofdgietwerk en 5 kg vulling resulteren in een typische hoeveelheid van 25 liter water voor het AutoTune-proces

    b. Zet de mixer aan
2. Stel een AutoTune doeltemperatuur in

    een. de doeltemperatuur moet 50°C of hoger zijn.

    B. De doeltemperatuur moet minimaal 10°C boven de huidige werkelijke temperatuur liggen.

3. Activeer “PID AutoTune”
4. Schakel “AutoTune foutopsporing” in
5. Sla deze instelling op
6. Als u op de aan/uit-knop klikt, wordt het AutoTune-proces gestart.

![AutoTune2](/docs/img/IDS-AutoTune-start.jpg)

Het AutoTune-proces bestaat uit twee fasen. Fase 1 is het verwarmen tot de doeltemperatuur. Wanneer de doeltemperatuur is bereikt, wordt de kookplaat uitgeschakeld. De doeltemperatuur wordt soms aanzienlijk overschreden met 2-3°C. Voor het AutoTune-proces is een aanzienlijke overschrijding van de doeltemperatuur noodzakelijk. Daarna volgt een afkoelfase tot onder de doeltemperatuur. Deze twee fasen worden 5 keer herhaald. Afhankelijk van de omgeving duurt het AutoTune-proces relatief lang (90 minuten of meer). Het grootste deel van de tijd is nodig tijdens de afkoelfasen. Hoe beter een brouwketel is geïsoleerd, hoe langer het AutoTune proces of de afkoelfase duurt. Het AutoTune-proces moet worden uitgevoerd bij een typische maischtemperatuur van ca. 60°C. De huidige status wordt weergegeven in de kolom “AutoTune Proces 0/5”. Het eerste getal is de huidige stap en het tweede getal is het aantal AutoTune stappen dat naar verwachting nodig zal zijn. Meetwaarden worden bepaald tijdens het AutoTune-proces. De gemeten waarden worden voortdurend gecontroleerd. Indien een gemeten waarde een afwijking vertoont, wordt de meting herhaald. Bij herhaling wordt "AutoTune Proces 6/5" weergegeven. Er worden maximaal 20 herhalingen uitgevoerd. Het resultaat van AutoTune wordt weergegeven in de GGM IDS-instellingen op het tabblad PID Manager:

![AutoTune3](/docs/img/IDS-AutoTune-erg.jpg)

Het AutoTune-proces is voltooid en de vastgestelde systeemparameters worden automatisch opgeslagen.\
Het resultaat van AutoTune is de versterkingsfactor Ku (uiteindelijke winst) en de periodeduur (ultieme periode). P, I en D worden berekend op basis van deze twee parameters. Er zijn verschillende algoritmen beschikbaar voor het berekenen van de PID-waarden. De Brautomat maakt gebruik van een PID-algoritme dat is geoptimaliseerd voor het brouwen (eigenlijk voor het verwarmen van vloeistoffen) en wordt bijvoorbeeld ook gebruikt in de CraftBeerPi add-on PIDBoil.

_Tip: Na het AutoTune-proces moet de configuratie worden opgeslagen met een back-up._

Wanneer het AutoTune proces is beëindigd en "AutoTune debug" is geactiveerd, kan het logbestand "AutoTune\_log.txt" worden bekeken via Verkenner. Alle informatie wordt vastgelegd in dit logbestand.\
Het resultaat van AutoTune wordt in JSON-formaat opgeslagen in de bestanden "idsAutoTune.txt", "sudAutoTune.txt" of "hltAutoTune.txt". De bestanden zijn louter informatief en zijn niet vereist voor de werking. In deze bestanden worden de PID-waarden vermeld volgens verschillende berekeningsmethoden.

In het logboek worden de volgende rekenmethoden vermeld:

INTEGRAAL PID\
ENKELE OVERSCHOT PID\
GEEN OVERSHOOT PID\
ZIEGLER NICHOLS PID\
ZIEGLER NICHOLS PI\
TYREUS LUYBEN PID\
TYREUS LUYBEN PI\
CIANCONE MARLIJN PID\
CIANCONE MARLIJN PI

De berekende waarden van de verschillende algoritmen kunnen in de instellingen worden ingevoerd met de selectie INDIVIDUAL_PID in de regels P, I en D. Dit zou echter alleen in zeldzame gevallen tot betere resultaten moeten leiden.
