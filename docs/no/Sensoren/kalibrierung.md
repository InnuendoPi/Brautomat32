# Kalibrering

Dallas DS18B20-sensorer viser noen ganger avvik fra den faktiske temperaturen. Produsentenes tekniske spesifikasjoner angir ofte en nøyaktighet på +-0,5°C i området fra -10°C til 85°C. I tillegg omtales sensorene som kalibrerte.

Avvik kan korrigeres ved hjelp av en 2-punkts kalibrering. Kalibreringen av Brautomat er en lineær korreksjon. Et kalibrert termometer er nødvendig for å kalibrere sensorene. Bryggekjelen fylles med en typisk mengde vann og varmes opp til 40°C. Forskjellen mellom sensorverdien og det kalibrerte termometeret legges inn i parameteren "Offset 1 \[40°C]". Denne prosessen gjentas ved 78°C og forskjellen legges inn i parameteren "Offset 2 \[78°C]". I fremtiden vil alle sensormålinger sendes ut med denne korreksjonen.

For kalibrering er temperatursensoren satt til høyoppløsningsmodus (12bit oppløsning eller 0,0625°C). En kalibrering via webgrensesnittet består av 60 målte verdier. Tiden som kreves for en kalibrering er nesten nøyaktig 60 sekunder. Resultatet av temperaturmålingen er gjennomsnittet av de 60 målte verdiene. En offset er forskjellen mellom den faktiske temperaturen og gjennomsnittet.

I mange tilfeller er en 1-punkts kalibrering i et isbad tilstrekkelig fordi forskyvningen til DS18B20-sensorene vanligvis er konstant.

## Fremgangsmåte for kalibrering uten referansetermometer

Hvis et referansetermometer ikke er tilgjengelig, kan kalibrering utføres ved hjelp av et isbad og en byll.
For det nedre måleområdet kreves en beholder med 50 % isbiter og 50 % kaldt vann. Et isbad har en temperatur på (nesten nøyaktig) 0,0 °C. Isvannet må røres kontinuerlig, gjerne med magnetrører. Kalibreringen startes i et isbad ved 0 °C.

Det andre punktet for kalibrering kan bestemmes via høyden over havet og tilhørende kokepunkt. Ved 0 m over havet eller et atmosfærisk trykk på 1013 bar er koketemperaturen 100,0°C. Når høyden øker, synker lufttrykket og dermed koketemperaturen. Først må det lokale NHN bestemmes, for eksempel via Google Earth. For hver meter over havet synker koketemperaturen med 0,003354°C. På nettsiden til [rechneronline](https://rechneronline.de/barometer/siedepunkt.php) beregnes kokepunktet basert på høyden over havet. Mange smarttelefoner tilbyr også høydeinformasjon i kompasset eller navigasjonsappen. Høyden over havet bør bestemmes med en nøyaktighet på ca. +-20m. Dette tilsvarer en endring i kokepunkttemperaturen på 0,06708°C og er derfor langt utenfor nøyaktigheten til Brautomat-kontrollen. Den andre punktkalibreringen utføres ved hjelp av en bryggekjele, en røreverk og det tidligere bestemte lokale kokepunktet. Måltemperaturen er derfor kokepunktstemperaturen. Det er viktig å sikre at kokepunktstemperaturen nås og opprettholdes i minst ett minutt før kalibreringen av det øvre området startes. Det er også svært viktig at koketoppen forblir på med konstant strøm.

Offset #1 (lavere verdiområde) er forskjellen på 0,0°C (isbad) til gjennomsnittsverdien for den første kalibreringskjøringen. Offset #2 (øvre område) er forskjellen mellom kokepunktet og gjennomsnittet fra den andre kalibreringskjøringen.

## Prosedyre kalibrering med klinisk termometer

Et klinisk termometer er et godt egnet referansetermometer. Det øvre måleområdet til et klinisk termometer er begrenset til ca. 40°C. Utførelse av kalibreringen tilsvarer prosedyren for isbad og koketemperatur. Den eneste forskjellen: Velger du for eksempel 40°C som andre kalibreringspunkt, må koketoppen slås av så snart måltemperaturen er nådd og holdes konstant i ca. 60 sekunder(ingen svingninger). Først da kan kalibreringen, dvs. registrering av 60 måleprøver, startes.

## Sensorkalibreringsloggfil

En loggfil skrives for hver kalibrering. Eksempel:

```tekst
13:22:37 Sensorkalibrering startet
*** Sensornavn: Sensor IDS2
*** Modell: DS18B20
*** Adresse: 2827c59d0d0000b1
*** Oppløsning: 12bit
*** Tidsavbrudd: 750ms
------------------------------------------------------------
ID-mål Faktisk diff-forskyvning
#01 24,6000 24,0000 -0,6000 0,6000

 - Sensorverdier 2 til 59 tilsvarende

#60 24,6000 25,1875 0,5875 -0,6083
------------------------------------------------------------
Temperatur for offset #1: 24.6000
Gjennomsnitt etter 60 målinger: 25.2083
Offset #1: -0,6083
==========================================
```
