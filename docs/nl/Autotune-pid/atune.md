# AutoTune proces

Het AutoTune-proces bepaalt geschikte parameters voor het zetsysteem, zodat de temperatuurregeling in het maischproces zo nauwkeurig mogelijk kan worden uitgevoerd. De nadruk ligt op de WERKELIJKE temperaturen en de bijbehorende DOELtemperaturen. In de praktijk betekent dit dat overshoot en undershoot tot een minimum moeten worden beperkt.

Opmerking: Een overschrijding (overschrijding van de ingestelde temperatuur) van 0,5°C is normaal. Afhankelijk van de isolatie van de ketel en de geleverde inductie-energie zal de temperatuur ook na het uitschakelen van de kookplaat nog iets blijven stijgen.

![AutoTune4](/docs/img/IDS-AutoTune-Ziel.jpg)

De volgende beschrijving van de PID-waarden is alleen bedoeld als hulpmiddel bij het gebruik van de firmware en kan worden overgeslagen. Het AutoTune-proces wordt beschreven vanaf "Het AutoTune-proces: stap voor stap."\
De PID-controller regelt de prestaties van de kookplaten. Het is belangrijk om de juiste P-, I- en D-waarden te bepalen. De PID-waarden zijn individueel voor elk zetsysteem en elke omgeving. AutoTune is een procedure die helpt bij het bepalen van geschikte waarden. Het benodigde vermogen van de kookplaten om van de werkelijke temperatuur naar de doeltemperatuur te komen, wordt berekend op basis van de som van de drie waarden: Vereist vermogen = P + I + D\
Zodra geschikte PID-waarden zijn bepaald, wordt de parameter Interval (SampleTime) gebruikt om de tijdsintervallen te bepalen waarmee de vereiste prestaties moeten worden berekend.

## De P-waarde

Deze parameter beïnvloedt het verschil tussen de werkelijke en de doeltemperatuur. Hoe groter het verschil tussen de werkelijke en de gewenste temperatuur is, des te sterker verwarmt de kookplaat met de P-component. Als de doeltemperatuur wordt bereikt of overschreden, is de P-component gelijk aan 0. Een zeer hoge P-waarde veroorzaakt een sterke over- of onderschrijding.

## De ik-waarde

De I-waarde stijgt continu vanaf nul naarmate de kookplaat warmer wordt. Hoe langer het duurt voordat de ochfeld van de werkelijke temperatuur naar de doeltemperatuur gaat, hoe groter de I-waarde wordt. Samen met de P-waarde ontstaat de volgende optelling: Naarmate de doeltemperatuur nadert, wordt de P-waarde kleiner en neemt de I-waarde toe. De doeltemperatuur wordt alleen via de I-waarde bereikt. Boven de doeltemperatuur wordt de I-waarde weer kleiner. De I-waarde zorgt voor een overshoot.

## De D-waarde

De D-waarde is een demper die de oscillaties van de eerste twee delen P en I dempt. Te veel D vertraagt de verwarming en koeling. Deze waarde kan ook nul zijn.

## Interval (SampleTime)

De PID-berekening vindt continu plaats. Het interval beschrijft de cyclus. In elk interval wordt continu het verschil tussen de werkelijke en de doeltemperatuur en de verandering in de werkelijke temperatuur bepaald. Een te klein interval (bijvoorbeeld 1000 ms) leidt tot een "fladderen" van de werkelijke temperatuur in de zin van afrondingsfouten +- 0,0625 °C bij een resolutie van 12 bits. Een te groot interval (bijvoorbeeld 7000 ms) leidt tot traag gedrag. Een interval van 2000 ms of 3000 ms zou in de meeste omgevingen goed moeten werken. Als intervalgrootte kan slechts een veelvoud van 1000 ms worden gebruikt (1000, 2000, ... 7000).
