# Kalibratie

Dallas DS18B20-sensoren vertonen soms afwijkingen van de werkelijke temperatuur. De technische specificaties van fabrikanten vermelden vaak een nauwkeurigheid van +-0,5°C in het bereik van -10°C tot 85°C. Bovendien worden de sensoren gekalibreerd genoemd.

Afwijkingen kunnen worden gecorrigeerd met behulp van een 2-puntskalibratie. De kalibratie door de Brautomat is een lineaire correctie. Voor het kalibreren van de sensoren is een gekalibreerde thermometer vereist. De brouwketel wordt gevuld met een typische hoeveelheid water en verwarmd tot 40°C. Het verschil tussen de sensorwaarde en de gekalibreerde thermometer wordt in de parameter "Offset 1 \[40°C]" ingevoerd. Dit proces wordt herhaald bij 78°C en het verschil wordt ingevoerd in de parameter “Offset 2 \[78°C]”. In de toekomst zullen alle sensormetingen met deze correctie worden uitgevoerd.

Voor kalibratie wordt de temperatuursensor ingesteld op hoge resolutiemodus (12bit resolutie of 0,0625°C). Een kalibratie via de webinterface bestaat uit 60 meetwaarden. De tijd die nodig is voor een kalibratie bedraagt ​​bijna precies 60 seconden. Het resultaat van de temperatuurmeting is het gemiddelde van de 60 gemeten waarden. Een offset is het verschil tussen de werkelijke temperatuur en het gemiddelde.

In veel gevallen is een 1-puntskalibratie in een ijsbad voldoende omdat de offset van de DS18B20-sensoren doorgaans constant is.

## Procedure voor kalibratie zonder referentiethermometer

Als er geen referentiethermometer beschikbaar is, kan de kalibratie worden uitgevoerd met behulp van een ijsbad en koken.
Voor het onderste meetbereik is een bak met 50% ijsblokjes en 50% koud water nodig. Een ijsbad heeft een temperatuur van (bijna precies) 0,0 °C. Het ijswater moet continu worden geroerd, bij voorkeur met een magneetroerder. De kalibratie wordt gestart in een ijsbad bij 0 °C.

Via de hoogte boven zeeniveau en het bijbehorende kookpunt kan het tweede kalibratiepunt worden bepaald. Op 0 m boven zeeniveau of bij een atmosferische druk van 1.013 bar is de kooktemperatuur 100,0°C. Naarmate de hoogte toeneemt, neemt de luchtdruk en dus de kooktemperatuur af. Eerst moet de lokale NHN worden bepaald, bijvoorbeeld via Google Earth. Voor elke meter boven zeeniveau daalt de kooktemperatuur met 0,003354°C. Op de website van [rechneronline](https://rechneronline.de/barometer/siedepunkt.php) wordt het kookpunt berekend op basis van de hoogte boven zeeniveau. Veel smartphones bieden ook hoogte-informatie in de kompas- of navigatie-app. De hoogte boven zeeniveau moet worden bepaald met een nauwkeurigheid van ca. +-20m. Dit komt overeen met een verandering in de kookpunttemperatuur van 0,06708°C en ligt daarom ver buiten de nauwkeurigheid van de Brautomat-regeling. De tweede puntkalibratie wordt uitgevoerd met behulp van een maischbrouwketel, een roerder en het vooraf bepaalde lokale kookpunt. De doeltemperatuur is daarom de kookpunttemperatuur. Het is belangrijk om ervoor te zorgen dat de kookpunttemperatuur minstens één minuut wordt bereikt en gehandhaafd voordat u met de kalibratie van het bovenste bereik begint. Het is ook erg belangrijk dat de kookplaat op constant vermogen blijft branden.

Offset #1 (onderste waardebereik) is het verschil van 0,0°C (ijsbad) met de gemiddelde waarde van de eerste kalibratierun. Offset #2 (bovenste bereik) is het verschil tussen het kookpunt en het gemiddelde van de tweede kalibratierun.

## Procedurekalibratie met koortsthermometer

Een koortsthermometer is een zeer geschikte referentiethermometer. Het bovenste meetbereik van een koortsthermometer is beperkt tot ca. 40°C. Het uitvoeren van de kalibratie komt overeen met de procedure voor ijsbad en kooktemperatuur. Het enige verschil: als u bijvoorbeeld 40°C als tweede kalibratiepunt kiest, moet de kookplaat worden uitgeschakeld zodra de doeltemperatuur is bereikt en blijft deze gedurende ca. 2 minuten constant. 60 seconden (geen schommelingen). Alleen dan kan dDe kalibratie, d.w.z. de registratie van 60 meetmonsters, kan worden gestart.

## Sensorkalibratielogbestand

Voor elke kalibratie wordt een logbestand geschreven. Voorbeeld:

```tekst
13:22:37 Sensorkalibratie gestart
*** Sensornaam: Sensor IDS2
*** Model: DS18B20
*** Adres: 2827c59d0d0000b1
*** Resolutie: 12 bit
*** Time-out: 750 ms
-------------------------------------------------
ID Doel Werkelijke verschilcompensatie
#01 24,6000 24,0000 -0,6000 0,6000

 - Sensorwaarden 2 tot 59 dienovereenkomstig

#60 24,6000 25,1875 0,5875 -0,6083
-------------------------------------------------
Temperatuur van offset #1: 24,6000
Gemiddelde na 60 metingen: 25,2083
Offset nr. 1: -0,6083
========================================
```
