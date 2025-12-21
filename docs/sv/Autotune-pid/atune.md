# AutoTune process

Processen AutoTune bestämmer lämpliga parametrar för bryggsystemet så att temperaturkontrollen i mäskningen kan utföras så exakt som möjligt. Fokus ligger på de AKTUELLA temperaturerna och motsvarande MÅL-temperaturer. I praktiken innebär detta att över- och underskott bör minimeras.

Obs: Ett överskridande (över börvärdestemperaturen) på 0,5°C är normalt. Beroende på pannans isolering och den tillförda induktionsenergin kommer temperaturen att fortsätta att stiga något även efter att hällen stängts av.

![AutoTune4](/docs/img/IDS-AutoTune-Ziel.jpg)

Följande beskrivning av PID-värdena är endast avsedd som en hjälp för att använda den fasta programvaran och kan hoppas över. AutoTune-processen beskrivs med början från "AutoTune-processen: steg för steg."\
Kontrollenheten PID styr hällarnas prestanda. Det är viktigt att bestämma lämpliga P-, I- och D-värden. PID-värdena är individuella för varje bryggsystem och miljö. AutoTune är en procedur som hjälper till att fastställa lämpliga värden. Den effekt som krävs för hällarna för att komma från den faktiska temperaturen till måltemperaturen beräknas från summan av de tre värdena: Erforderlig effekt = P + I + D\
När lämpliga PID-värden har bestämts, används parametern Interval (SampleTime) för att bestämma de tidsintervall vid vilka den erforderliga prestandan ska beräknas.

## P-värdet

Denna parameter påverkar skillnaden mellan aktuell temperatur och måltemperatur. Ju större skillnaden är mellan verklig temperatur och måltemperatur, desto mer värms hällen med P-komponenten. Om måltemperaturen uppnås eller överskrids är P-komponenten lika med 0. Ett mycket högt P-värde orsakar ett kraftigt över- eller underslag.

## Jag-värdet

I-värdet ökar kontinuerligt från noll när hällen värms upp. Ju längre tid det tar att komma från den faktiska temperaturen till måltemperaturen, desto större blir I-värdet. Tillsammans med P-värdet resulterar följande tillägg: När måltemperaturen närmar sig blir P-värdet mindre och I-värdet ökar. Måltemperaturen uppnås endast via I-värdet. Över måltemperaturen blir I-värdet mindre igen. Jag-värdet skapar ett överskott.

## D-värdet

D-värdet är en dämpare som dämpar svängningarna i de två första delarna P och I. För mycket D bromsar uppvärmning och nedkylning. Detta värde kan också vara noll.

## Intervall (SampleTime)

PID-beräkningen sker kontinuerligt. Intervallet beskriver cykeln. I varje intervall bestäms skillnaden mellan den faktiska och måltemperaturen samt förändringen i den faktiska temperaturen kontinuerligt. Ett för litet intervall (t.ex. 1000ms) leder till en "fladder" av den faktiska temperaturen i betydelsen avrundningsfel +- 0,0625°C vid 12bitars upplösning. Ett för stort intervall (t.ex. 7000ms) leder till trögt beteende. Ett intervall på 2000ms eller 3000ms bör fungera bra i de flesta miljöer. Endast en multipel av 1000ms kan användas som intervallstorlek (1000, 2000, ... 7000).
