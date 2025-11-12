# Felsökning

Tips & tricks ... fortsättning följer ...

## WiFi

WLAN-räckvidden för ESP-mikrokontroller är begränsad. Den aktuella WLAN-signalstyrkan visas under System -> Återställ. Ju närmare värdet är noll, desto starkare signal. Värden från -50dBm till -75dBm är mycket bra. Ett värde mindre än -80dBm är dåligt och kommer att orsaka problem. I bryggerikök med svag WiFi-signalstyrka kan PID-intervallet ökas till 7000ms, till exempel för att minska mängden data. Om signalstyrkan är svag ska endast en aktiv webbläsare användas (se Server Send Events nedan). En lämplig plats för Brautomat i WLAN (eller en extra repeater) är viktig. En bra signalstyrka behöver inte nödvändigtvis, men i de flesta fall, resultera i en högre och mer stabil dataöverföringshastighet.

Webbgränssnittet från Brautomat är baserat på bootstrap-ramverket 4.6 med Javascript. De nödvändiga filerna (css, js och teckensnitt) finns i flashminnet för Brautomat. Detta har en fördel och en nackdel. Fördelen är att ingen internetuppkoppling krävs för att ladda de nödvändiga filerna vid bryggning. Nackdelen är att i det lokala WLAN:et måste Brautomat tillhandahålla ramfilerna komprimerade till varje ansluten webbläsare en gång när anslutningen upprättas. Om en fil inte överförs korrekt och endast mycket långsamt på grund av till exempel svag WiFi-signalstyrka, kommer webbgränssnittet inte att fungera korrekt. I det här fallet bygger webbgränssnittet inte korrekt (det ser då ut som en textsida) eller är ofullständigt (tabellerna förblir tomma). I de flesta fall räcker det att ladda om webbplatsen (Ctrl-Shift-R).

Efter en firmwareuppdatering ska Brautomat alltid stängas av och webbläsarens cache raderas.

## Webbläsare

Brautomat testas på Win11 med MS Edge och Firefox i den aktuella versionen, samt på iOS-enheter med MS Edge och Safari. MS Edge är att föredra under utveckling. Oavsett webbläsare måste automatisk ljuduppspelning för Toasts-meddelanden (ljud) aktiveras för adressen till Brautomat. Adressen till Brautomat bör också inkluderas i undantagen för att blockera webbläsarplugin. Föråldrade webbläsare (t.ex. IE8) stöds inte.

Webbläsarens cache kan leda till felaktiga webbannonser. Webbgränssnittet för Brautomat anger no-cache och no-store när de anropas, men olika webbläsare ignorerar dessa instruktioner. Rensa webbläsarens cache manuellt startas ofta med tangentkombinationen Ctrl - Shift - Del.

## Server skickade händelser och kraftplaner och automatiskt låsta klienter

Brautomat skickar data till anslutna och aktiva webbläsare via serversända händelser. Upp till 8 enheter kan ansluta till Brautomat samtidigt. Energischeman eller automatisk låsning kan avbryta en anslutning. Bryggningsprocessen kommer inte att stoppas eller avbrytas om anslutningen bryts! Brautomat fortsätter att fungera normalt. Frånkopplade webbläsare får helt enkelt ingen ny information. Informationen inkluderar temperaturer, aktuellt mash-steg, aktuell prestanda, diagram, etc. En Server Sent Events-anslutning till Brautomat är "datakanalen" genom vilken informationen skickas till webbläsaren. Om anslutningen till Brautomat avbryts, avslutas datakanalen. En aktiv webbläsare känner av när dess datakanal har avslutats och loggar automatiskt in igen på Brautomat efter en kort tid.\
Registreringar på Brautomat har ingen ordning eller prioritet. Det har ingen effekt om webbläsaren från PC:n eller surfplattan ansluts först eller sist. Bryggprocessen kan startas på enhet A, pausas på enhet B, observeras på enhet C och avslutas på enhet D. Om alla fyra enheterna är aktiva och anslutna visar alla webbläsare i (nästan) samtidigtidentisk information eftersom var och en av dessa fyra enheter har sin egen datakanal.

## Receptimport

På grund av begränsat minne kan receptimporten inte importera recept med PDF-filer, bildbilagor eller mycket långa texter eller förklaringar. För MashMalzandMore-recept är att importera till kbh2 och sedan exportera i formatet Brautomat en enkel och bra lösning. Recept från Brewfather kan också importeras.

## AutoTune

AutoTune-processen bör inte fokusera på perfektion, dvs. S.v. 0,1°C. Sensorernas avvikelse är vanligtvis större. Parametern AutoTune brusband (spridning runt målvärdet) ligger tillräckligt nära måltemperaturen med ett värde på 0,3 för att träffa måltemperaturen mycket bra och bibehålla den under viloperioden.\
Mycket välisolerade mäskbryggare kräver en större AutoTune dataserie. I dataserien registreras uppmätta värden i kronologisk ordning. I början finns det aktuella mätvärdet och i slutet av raden finns det äldsta mätvärdet. Värdet AutoTune dataserien säger "hur många värden före den aktuella mätningen ser Brautomat tillbaka (in i det förflutna) för att upptäcka en temperaturförändring på minst AutoTune brusband (0,3)". För en välisolerad panna bör dataserien fyllas med 75 mätpunkter. För en oisolerad panna räcker det med en dataserie på 50 mätpunkter. Dessa två parametrar måste justeras beroende på miljön. Standardspecifikationerna bör ge mycket bra värden i de allra flesta fall.

## Sensorer och kalibrering

Dallas DS18B20-sensorer erbjuds på många plattformar till väldigt olika priser. Sensorkalibrering hjälper till att minimera avvikelser. I alla fall bör IDS-sensorn kalibreras eftersom avvikelser på flera grader Celsius (beroende på ursprung) är möjliga.\
Om en sensor regelbundet rapporterar Sensor Error (toasts) i webbgränssnittet bör du först prova en annan anslutning för sensorn. De tre anslutningarna på kortet för sensorerna är likvärdiga och har ingen förutbestämd ordning. Om det finns sensorproblem bör lödpunkterna för de 3 skruvplintarna och 4,7 kOhm-resistansen (på kretskortet under ESP) kontrolleras.

## GGM IDS-stiftavbrott

Stiftavbrottet ger en returkanal från induktionshällen till Brautomat. Denna returkanal är ansluten till Brautomat med ett avbrott GPIO från ESP. Ett avbrott avbryter programflödet och kontrollerar avbrottstillståndet.\
Induktionshällen GGM IDS skickar kontinuerligt ett avbrott ungefär var 300:e millisekund: antingen signalen "allt är ok" (0000) eller en felkod (t.ex. 0010 för ingen panna eller tom panna).

Sektion av seriell utgång på stiftavbrott:

```text
10:00:00:174 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 
10:00:00:543 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 
10:00:00:864 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 
10:00:01:209 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 
10:00:01:554 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 
```

Serieutgången vid stiftavbrottet visar tydligt att induktionshällen hela tiden skickar "allt ok". Emellertid avbryter Brautomat sitt arbete under bryggning med varje avbrott (ungefär var 300:e ms) och kontrollerar avbrottstillståndet. Stiftavbrottet ska därför endast användas för felsökning.

Följande avbrott beskrivs i GGM IDS2-manualen:

E0 nej/tom panna (0010 2)\
E1-kretsfel (0011 3)\
E3 Överhettning (0101 5)\
E4 temperatursensor (0110 6)\
E7 lågspänningsskydd (1001 9)\
E8 överspänningsskydd (1010 10)\
EC kontrollpanel (1110 14)\

Tyvärr är de binära strängarna inte kända. Endast E1 ingen/tom panna är känd. TidenFöljande parenteser har fastställts genom testning, men är inte säkra.

Stiftavbrottet bör endast tilldelas vid problem. Stift D5 är förinställt för den första induktionshällen. Inget stiftavbrott krävs vid normal bryggning.
