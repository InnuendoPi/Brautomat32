# Kalibrering

Dallas DS18B20-sensorer uppvisar ibland avvikelser från den faktiska temperaturen. Tillverkarnas tekniska specifikationer anger ofta en noggrannhet på +-0,5°C i intervallet från -10°C till 85°C. Dessutom kallas sensorerna för kalibrerade.

Avvikelser kan korrigeras med en 2-punktskalibrering. Kalibreringen av Brautomat är en linjär korrigering. En kalibrerad termometer krävs för att kalibrera sensorerna. Bryggkokaren fylls med en typisk mängd vatten och värms upp till 40°C. Skillnaden mellan sensorvärdet och den kalibrerade termometern matas in i parametern "Offset 1 \[40°C]". Denna process upprepas vid 78°C och skillnaden matas in i parametern "Offset 2 \[78°C]". I framtiden kommer alla sensormätningar att matas ut med denna korrigering.

För kalibrering är temperatursensorn inställd på högupplöst läge (12bitars upplösning eller 0,0625°C). En kalibrering via webbgränssnittet består av 60 mätvärden. Den tid som krävs för en kalibrering är nästan exakt 60 sekunder. Resultatet av temperaturmätningen är medelvärdet av de 60 uppmätta värdena. En offset är skillnaden mellan den faktiska temperaturen och medelvärdet.

I många fall räcker det med en 1-punktskalibrering i ett isbad eftersom offset för DS18B20-sensorerna vanligtvis är konstant.

## Procedur för kalibrering utan referenstermometer

Om en referenstermometer inte är tillgänglig kan kalibrering utföras med hjälp av ett isbad och en kokning.
För det lägre mätområdet krävs en behållare med 50 % isbitar och 50 % kallt vatten. Ett isbad har en temperatur på (nästan exakt) 0,0 °C. Isvattnet ska röras om kontinuerligt, gärna med magnetomrörare. Kalibreringen påbörjas i ett isbad vid 0 °C.

Den andra punkten för kalibrering kan bestämmas via höjden över havet och den tillhörande kokpunkten. Vid 0 m över havet eller ett atmosfärstryck på 1 013 bar är koktemperaturen 100,0°C. När höjden ökar minskar lufttrycket och därmed koktemperaturen. Först måste det lokala NHN bestämmas, till exempel via Google Earth. För varje meter över havet sjunker koktemperaturen med 0,003354°C. På webbplatsen för [rechneronline](https://rechneronline.de/barometer/siedepunkt.php) beräknas kokpunkten baserat på höjden över havet. Många smartphones erbjuder även höjdinformation i kompassen eller navigationsappen. Höjden över havet bör bestämmas med en noggrannhet på ca. +-20m. Detta motsvarar en förändring i kokpunktstemperaturen på 0,06708°C och är därför långt utanför kontrollen för Brautomat. Den andra punktkalibreringen utförs med hjälp av en mäskbryggare, en omrörare och den tidigare bestämda lokala kokpunkten. Måltemperaturen är därför kokpunktstemperaturen. Det är viktigt att säkerställa att kokpunktstemperaturen uppnås och bibehålls i minst en minut innan kalibreringen av det övre intervallet påbörjas. Det är också mycket viktigt att hällen är påslagen med konstant effekt.

Offset #1 (lägre värdeområde) är skillnaden mellan 0,0°C (isbad) och medelvärdet för den första kalibreringskörningen. Offset #2 (övre intervallet) är skillnaden mellan kokpunkten och medelvärdet från den andra kalibreringskörningen.

## Procedur kalibrering med klinisk termometer

En klinisk termometer är en väl lämpad referenstermometer. Det övre mätområdet för en klinisk termometer är begränsat till ca. 40°C. Att utföra kalibreringen motsvarar proceduren för isbad och koktemperatur. Enda skillnaden: Om du väljer 40°C som andra kalibreringspunkt, till exempel, måste hällen stängas av så fort måltemperaturen uppnåtts och förbli konstant i ca. 60 sekunder(inga fluktuationer). Först då kan kalibreringen, det vill säga registreringen av 60 mätprover, startas.

## Sensorkalibreringsloggfil

En loggfil skrivs för varje kalibrering. Exempel:

```text
13:22:37 Sensorkalibrering startade
*** Sensornamn: Sensor IDS2
*** Modell: DS18B20
*** Adress: 2827c59d0d0000b1
*** Upplösning: 12bit
*** Timeout: 750ms
------------------------------------------------------------
ID-mål Faktisk skillnadsförskjutning
#01 24,6000 24,0000 -0,6000 0,6000

 - Givarvärden 2 till 59 motsvarande

#60 24,6000 25,1875 0,5875 -0,6083
------------------------------------------------------------
Temperatur för offset #1: 24.6000
Medel efter 60 mätningar: 25.2083
Offset #1: -0,6083
==========================================
```
