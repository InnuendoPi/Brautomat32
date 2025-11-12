# Kokeplateparametere

## Temperaturkontroll

### Maks effekt

Denne parameteren beskriver den maksimale utgangseffekten til koketoppen. Standardverdien er 100 %. Denne parameteren brukes hvis det brukes en liten vannkoker med for eksempel 20l volum på koketoppen. Ved å redusere kraften kan man unngå for hurtig oppvarming og overkoking. Parametrene "Maks. effekt" og "Kraft fra overgang" bør reduseres sammen ved bruk av små bryggekjeler.

På slutten av dette kapittelet finner du [to eksempler for å beregne nødvendig effekt](https://innuendopi.gitbook.io/brautomat32/info-5/parameter-ggm-ids#berechnung-der-erforderlichen-leistung).

### Temperatur delta til mål

Denne parameteren beskriver forskjellen fra hviletemperaturen (settpunktet) som timeren skal starte for en hvile. Standardverdien er 0,3°C. I meskeprosessen muliggjør PID-kontrolleren svært presis temperaturkontroll. En hviletemperatur oppnås med en nøyaktighet på +-0,2°C ved at PID-kontrolleren reduserer energitilførselen på en kontrollert måte før hviletemperaturen nås. Å redusere energitilførselen har den bivirkningen at det siste trinnet for å nå hviletemperaturen tar lengre tid. Det er akkurat her "Delta to target"-parameteren kommer inn i bildet: Hvis for eksempel en hviletemperatur på 63°C skal oppnås og den nåværende temperaturen er 62,7°C, vil hviletimeren starte ved et temperaturdelta til målet på 0,3°C. I forhold til det enkelte bryggesystemet kan delta benyttes for å unngå en uønsket forlengelse av hviletiden.

### Overgang til matlaging [°C]

Denne parameteren beskriver temperaturen ved hvilken PID-regulatoren skal oppdage at vørteren koker. Standardverdien er 95°C. Denne parameteren beskriver ikke temperaturen der vørteren begynner å koke. Denne parameteren beskriver temperaturen der Brautomat deaktiverer PID-kontrolleren og styrer koketoppen med en spesifisert effekt "strøm fra overgang". I motsetning til hviletemperaturene er ikke målet med matlagingen å nå og opprettholde temperaturen nøyaktig, men heller å lage jevn. Så i stedet for å redusere effekten, drives induksjonstoppen med konstant effekt under matlaging.

### Kraft fra overgang [%]

Denne parameteren beskriver utgangseffekten for koketoppen fra temperaturovergang til matlaging. Standardverdien er 100 %. Parameteren "Overgang til matlaging" har blitt brukt til å stille inn en temperatur der PID-kontrolleren er deaktivert. Parameteren "Power from transition" spesifiserer nå den faste utgangseffekten for koketoppen. Hvis det brukes en bryggekjele med et volum på 35l eller mer, er standardverdien på 100 % et passende valg. På bryggerikjøkken med små vannkokere kan 100 % energitilførsel føre til overkoking. I dette tilfellet kan den maksimale energitilførselen reduseres til for eksempel 75 % ved hjelp av denne parameteren.

### Deaktiver PID for matlaging [på/av]

Denne parameteren bestemmer oppførselen til PID-kontrolleren ved matlaging når den faktiske temperaturen er over måltemperaturen. Eksempel: koketemperaturen ble satt til 98°C i meskeplanen. Parameteren "Power from transition" slår av PID-beregningen fra "Transition to boiling"-temperaturen. Hvis parameteren "Deaktiver PID for koking" er aktivert (standard), forblir PID-regulatoren slått av selv over måltemperaturen på 98°C fra mash-planen og kraften fra parameteren "Power from transition" brukes. Denne parameteren er aktivert som standard og muliggjør rullende matlaging.

Hvis parameteren "Deaktiver PID for matlaging ikke er aktivert, beregnes den nødvendige effekten av PID-kontrolleren når måltemperaturen (her 98°C) er nådd. Den beregnede ytelsen over målet- Temperaturen er 0 %. Koketoppen slår seg av og forhindrer overkoking om nødvendig.

### Sensorfeilytelse [0-100 %]

Hvis det oppstår en sensorfeil, for eksempel en sensor som ikke er tilkoblet eller en defekt, kan effekten på koketoppen justeres for å håndtere denne feilen. En verdi på 100 % ignorerer sensorfeilen.

Hvis effekten er satt til 0 % i tilfelle en sensorfeil, stopper Brautomat meskeprosessen. Koketoppen er slått av. Når hviletimeren har startet, stoppes timeren.

Brautomat starter feilhåndtering etter 3 påfølgende feil sensorverdier. Sensorene spørres omtrent hver 2000 ms. Dette betyr at ca. Det går 6 sekunder mellom toastmeldingen sensorfeil og starten av feilhåndteringen.

Hvis en defekt sensor rapporterer riktige sensorverdier igjen, fortsetter Brautomat automatisk meskeprosessen.

_Merk: Maks. effektparameteren overskrides ikke av feilparameteren Power on sensor. For eksempel hvis Maks. Power IDS ble konfigurert til 75 % og Power i tilfelle sensorfeil til 100 %, da er den effektive maksimale utgangseffekten 75 % selv i tilfelle en sensorfeil._

## PID Administrator

### Intervall (SampleTime)

Denne parameteren indikerer tidsintervallet som nødvendig effekt beregnes med. Standardverdien er 3000ms. Intervallet brukes for PID-beregningen og i AutoTune. På bryggerikjøkken med små volum kan et mindre intervall være fordelaktig. Jo mindre intervallet er, desto oftere beregnes den nødvendige effekten. Dette fører til en høyere utnyttelse av den automatiske slaktekyllingen. Verdiområde 1000 - 7000ms.

### PID Algoritme

Det er tre alternativer å velge mellom

* manuell PID-modus: dette valget lar deg bruke dine egne Kp-, Ki- og Kd-verdier
* IDS PID-modus: dette valget beregner verdiene for Kp, Ki og Kd for GGM IDS induksjonstopper basert på Ku- og Pu-verdiene fra AutoTune-prosessen
* Relé PID-modus: dette valget beregner verdiene for Kp, Ki og Kd for relébaserte kokeplater ved å bruke Ku- og Pu-verdiene fra AutoTune-prosessen

## AutoTune

### AutoTune støybånd

Denne parameteren brukes til å oppdage ekstreme verdier (maks, min). AutoTune støybånd indikerer minimumsendringen fra forrige målte verdi som må være tilstede for å gjenkjenne en ny ekstremverdi. Standardverdien for GGM IDS er 0,2. For en omstøpt komfyr via et relé eller SSR er standardverdien 0,5. Verdiområde: 0,1 - 1,0

### AutoTune Dataserie (tilbakeblikk)

Denne parameteren spesifiserer hvor mange målte verdier som skal vurderes for å bestemme ekstreme verdier. Standardverdien er 50 avlesninger. Vær oppmerksom på at maksimalt 100 måleverdier kan konfigureres. For svært godt termisk isolerte bryggekjeler kan økning av dataserien til 100 målte verdier forbedre deteksjonen av ekstreme verdier i kjølefasen av AutoTune-prosessen.

### AutoTune feilsøking

Denne bryteren aktiverer AutoTune-protokollen. Loggen gir informasjon hvis AutoTune-prosessen ikke kan fullføres. Hvis AutoTune feilsøking er aktivert, er protokollen også tilgjengelig under brygging.

_Disse 10 parameterne må stilles inn individuelt for hvert bryggesystem. Parametrene kan endres under en meskeprosess. Med en testkjøring med en typisk vannmengde kan parametrene enkelt bestemmes før en bryggedag._

## Profiler

Brautomat kan administrere maskinvareprofiler. Profiler kan brukes hvis det er forskjellige kjeler. Brukere med vannkoker i forskjellige størrelser kan bruke profiler for å velge kjelen for bryggedagen i stedet for å måtte legge inn alle parametere manuelt på nytt. En maskinvareprofil inneholder alle innstillingene til en kjele.

Profiler lagres i mappen /Profiles. Profiler gjør det raskt og enkeltBytt mellom ulike kjeler. Lagre-funksjonen oppretter en profilfil med parametrene ovenfor, mens Slett-funksjonen fjerner profilfilen fra flash-minnet.

Standardprofilen når du starter brødmaskinen er alltid den sist valgte profilen.

## Beregning av nødvendig effekt

_Det følgende avsnittet beskriver et valgfritt emne._

Ved mesking ønskes en økning i mesketemperaturen på 1°C per minutt. Den nødvendige effekten P til GGM IDS kan beregnes som følger:

nødvendig effekt P = m[kg] * 75\
eksisterende ytelse for GGM IDS P = 3500\
Faktor i prosent = nødvendig ytelse: eksisterende ytelse

### Eksempel 1

I det første eksemplet er det en fylling på 9 kg og en hovedhelling på 35 l. Dette resulterer i en total masse på

``` json
m = 9 + 35 = 44
```

Vi erstatter massen m = 44 i den forenklede formelen:

``` json
P = 44 * 75 = 3300
```

Omtrent 3300 W/min kreves for å varme opp et volum på 44 kg med 1°C per minutt. Hvis GGM IDS drives med 100 % effekt, dvs. 3500W, oppnås temperaturforskjellen på 1°C i mesken på mindre enn 60 sekunder. For å oppnå målet om 1°C temperaturøkning i mesken per minutt, må den maksimale ytelsen til GGM IDS reduseres:

``` json
3300: 3500 = 0,94 som tilsvarer 94 %
```

GGM IDS ville måtte opereres med ca. 94-95 % effekt (spesiell funksjon IDS:94).

### Eksempel 2

I det andre eksemplet er det en fylling på 5,9 kg og en hovedmengde på 26,5 l. Den totale vekten er 32,4 kg.

``` json
m = 5,9 + 26,5 = 32,4
```

Vi erstatter massen m = 32,4 i den forenklede formelen:

``` json
P = 32,4 * 75 = 2430
2430: 3500 = 0,69
```

Det tar omtrent 2430 W/min å varme opp et volum på 32,4 kg med 1°C per minutt. GGM IDS ville måtte opereres med ca. 69-70 % effekt (spesiell funksjon IDS:70).

### Forenklingsmasse * 75?

``` json
P = m[kg] * c * T / (t * w)
```

m tilsvarer massen av hovedstøp + fyll\
c tilsvarer den spesifikke varmekapasiteten til mesken. Verdien 3600 brukes (enhet Joule/(kg * °C))\
T tilsvarer temperaturforskjellen. Vi bruker 1°C forskjell\
t tilsvarer tid. Vi legger 60 sekunder inn i ligningen som tiden\
w induksjonseffektiviteten (80-90%). Verdien 0,8 settes inn i ligningen

``` json
c * T / (t * w) = 3600 * 1 / (60 * 0,8) = 75
```

Med denne forenklingen får vi verdien 75.

### spesifikk varmekapasitet

Den spesifikke som brukes her Varmekapasitet 3600 har en feiltoleranse på ca. 2 % (avhengig av temperatur og ekstrakt). Maltmel har en varmekapasitet på 1570 J/(kg*°C), vann har en varmekapasitet på 4190 J/(kg*°C) i temperaturområdet 50-80°C. Forutsatt at vanninnholdet i maltmelet er 6 %: (figurer fra eksempel 1)

``` json
9 * 94 % * 1570 + (35 + 9 * 6%) * 4190 = 8,97 * 1,57 + 35,54 * 4,19 = 14,08 + 148,91 = 13282,2 + 148912,6 = 8 / 6 per 5 kg pr. Celsius
```

Se også [Braumagazin](https://braumagazin.de/article/berechnungen-in-der-brauerei/)
