# AutoTune prosess

AutoTune-prosessen bestemmer passende parametere for bryggesystemet slik at temperaturkontrollen i meskeprosessen kan utføres så nøyaktig som mulig. Fokuset er på de FAKTISKE temperaturene og de tilsvarende TARGET-temperaturene. I praksis betyr dette at over- og undersving bør minimeres.

Merk: En oversving (over settpunkttemperaturen) på 0,5°C er normalt. Avhengig av isolasjonen til kjelen og den tilførte induksjonsenergien, vil temperaturen fortsette å stige litt selv etter at koketoppen er slått av.

![AutoTune4](/docs/img/IDS-AutoTune-target.jpg)

Følgende beskrivelse av PID-verdiene er kun ment som en hjelp til bruk av fastvaren og kan hoppes over. AutoTune-prosessen er beskrevet fra "AutoTune-prosessen: trinn for trinn."\
Kontrolleren PID kontrollerer ytelsen til koketoppene. Det er viktig å bestemme passende P-, I- og D-verdier. PID-verdiene er individuelle for hvert bryggesystem og miljø. AutoTune er en prosedyre som hjelper til med å bestemme passende verdier. Den nødvendige effekten til kokeplatene for å komme fra den faktiske temperaturen til måltemperaturen beregnes ut fra summen av de tre verdiene: Nødvendig effekt = P + I + D\
Når passende PID-verdier er bestemt, brukes Interval (SampleTime)-parameteren til å bestemme tidsintervallene som den nødvendige ytelsen skal beregnes med.

## P-verdien

Denne parameteren påvirker forskjellen mellom faktisk temperatur og måltemperatur. Jo større forskjellen er mellom den faktiske temperaturen og måltemperaturen, desto mer varmer koketoppen med P-komponenten. Hvis måltemperaturen nås eller overskrides, er P-komponenten lik 0. En svært høy P-verdi forårsaker et kraftig over- eller underslag.

## I-verdien

I-verdien øker kontinuerlig fra null når koketoppen varmes opp. Jo lengre tid det tar å komme fra den faktiske temperaturen til måltemperaturen, desto større blir I-verdien. Sammen med P-verdien resulterer følgende tillegg: Når måltemperaturen nærmer seg, blir P-verdien mindre og I-verdien øker. Måltemperaturen oppnås kun via I-verdien. Over måltemperaturen blir I-verdien mindre igjen. I-verdien skaper et overskridelse.

## D-verdien

D-verdien er en demper som demper svingningene til de to første delene P og I. For mye D bremser oppvarming og nedkjøling. Denne verdien kan også være null.

## Intervall (SampleTime)

PID-beregningen skjer kontinuerlig. Intervallet beskriver syklusen. I hvert intervall bestemmes forskjellen mellom den faktiske og måltemperaturen samt endringen i den faktiske temperaturen kontinuerlig. Et intervall som er for lite (f.eks. 1000ms) fører til en "fladdering" av den faktiske temperaturen i betydningen avrundingsfeil +- 0,0625°C ved 12bits oppløsning. Et intervall som er for stort (f.eks. 7000ms) fører til treg oppførsel. Et intervall på 2000ms eller 3000ms bør fungere bra i de fleste miljøer. Bare et multiplum på 1000ms kan brukes som intervallstørrelse (1000, 2000, ... 7000).
