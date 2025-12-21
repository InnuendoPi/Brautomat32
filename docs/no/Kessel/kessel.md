# Kjelkonfigurasjon og bruk

Brautomat32 tilbyr muligheten til å sette opp til tre kjeler. Den første kjelen har innvendig betegnelse MASH og alternativt IDS. Denne kjelen er nødvendig for meskeprosessen. De to andre kjelene er valgfrie. Den andre kjelen har den interne betegnelsen SUD, alternativt MLT og den tredje kjelen har betegnelsen HLT eller Nachguss.

De tre kjelene kan være enten GGM induksjonstopp eller relétype. En kjele av relétype inkluderer en webhook-tilkobling.

![Kessel-konfigurasjon](/docs/img/kessel_1.jpg)

Parametrene er beskrevet i kapittelet Grunnleggende oppsett og parametre på et øyeblikk - Kjelparametere og er identiske for alle tre kjeler.

Imidlertid er bruken av de tre kjelene forskjellig, spesielt bruken av meskeplanen. Meskeplanen er alltid knyttet til den første kjelen av meskebrygg så lenge ingen annen kjele er spesifisert i meskeplanen via en styrekommando. Kontrollkommandoer er også forklart i mash plan spesialfunksjon og kontrollkommandoer delen.

## Kjelekontrollkommandoer

Denne delen tar kun for seg kjelekontrollkommandoer. Styrekommandoer for aktuatorer er strukturert identisk, men er forklart i mash-planens spesialfunksjon og styringskommandoer. En kontrollkommando inneholder alltid et kolon i restnavnet. Brautomat gjenkjenner bare fra kolon at denne hvilen skal behandles som en kontrollkommando. Formatet er enhet:maksimal effekt. Dette betyr at kolon skiller enhetsnavnet fra maksimal ytelse.

Følgende navn er internt definert som enhetsnavn for de tre kjelene:

* MASH eller IDS for den første vannkokeren
* MLT eller SUD for den andre kjelen
* HLT eller REGUSS for den tredje kjelen

Hver kjele er tildelt et navn i innstillingene. Dette navnet kan også brukes som enhetsnavn for en kontrollkommando.

Tall mellom 0 og 100 er tillatt som maksimal ytelse. Verdien tilsvarer parameteren for maksimal effekt i kjeleinnstillingene og er gitt i prosent. Spesifikasjonen PÅ tilsvarer 100 % og AV tilsvarer 0 %.

### Alternativ 1: bytte av kjelen manuelt

Den andre og tredje kjelen kan slås på og av manuelt via webgrensesnittet med den respektive strømknappen. For eksempel, hvis en kjele er satt opp for re-infusjon, kan måltemperaturen settes til 78°C i kjeleinnstillingene og kjelen kan slås på på bryggedagen om nødvendig.

### Alternativ 2: automatisk kobling av kjelen

Den andre og tredje vannkokeren kan også byttes via meskeplanen:

![Kessel-konfigurasjon](/docs/img/kessel_2.jpg)

I denne forenklede meskeplanen slås den tredje kjelen HLT på automatisk i linje 2. Trinn HLT:100 med en måltemperatur på 78°C og en varighet på 0 minutter slår på etterfyllingen med 100 % effekt og setter måltemperaturen til 78°C. Fordi varigheten er spesifisert til 0 minutter, slås påfyllingen på permanent. Brautomat går direkte til neste mesketrinn og lar etterinfusjonen være slått på. Kontrolleren PID regulerer permanent kraften som kreves for å nå og opprettholde måltemperaturen. Nachguss:100 ville være identisk med kontrollkommandoen HLT:100. Hvis påfyllingen har fått navnet «Cooker» i innstillingene, kan også kontrollkommandoen COOKER:100 brukes.

![Kessel-konfigurasjon](/docs/img/kessel_3.jpg)

I denne meskeplanen slås det andre kjelebrygget på i tredje trinn. I motsetning til forrige eksempel HLT, er SUD-kjelen slått på i en periode på 15 minutter med måltemperatur på 100°C. Brautomat forblir på dette trinnet til måltemperaturen er nådd og hvileperioden på 10 minutter er fullført. Vannkokeren SUD slås deretter av og Brautomat hopper til neste trinn i meskeplanen.

Teksten "Te"cooking ilmaische" er oversatt av Brautomat til 100 %. Hvis det ikke er noe tall mellom 0 og 100 eller informasjonen PÅ eller AV etter kolon, erstatter Brautomat teksten med 100 % ytelse.

## Eksempel på annen ytelse

Kontrollkommandoene kan brukes til å justere maksimal effekt under bryggeprosessen. For eksempel, hvis induksjonstoppen har en maksimal effekt på 3,5kW og bryggekjelen som brukes har et volum på 20 liter, så kan kontrollkommandoen MASH:75 brukes til å redusere den maksimale utgangseffekten fra induksjonstoppen til 75 % effekt. Resten med kontrollkommandoen MASH:75 opprettes med en måltemperatur på 0°C og en varighet på 0 minutter med autonext aktivert.

## Eksempel avkok

Som beskrevet ovenfor, tildeles alltid en hvile fra meskeplanen til den første kjelen (MASH) hvis ingen kontrollkommando (kolon i hvilenavnet) tildeler resten til en annen kjele. En kontrollkommando kan enten slå den andre kjelen på/av med en måltemperatur og hoppe direkte til neste hvile eller integrere den i meskeprosessen med en hvileperiode.

I avkoksbryggeprosessen tilberedes delvis mos mens den resterende mosen holdes på ønsket temperatur. Avkok med Brautomat vil se slik ut:

* Trekk den gjenværende mosen inn i den andre kjelen. Å trekke resten av gjenværende mos med autonext deaktivert oppfyller denne oppgaven.
* slå deretter den andre kjelen på permanent til ønsket temperatur med en hvileperiode på null minutter. autonext er aktivert.
* Kok delvis mos i den første kjelen til ønsket hviletid. autonext er aktivert.
* Tilsett gjenværende mesk fra den andre kjelen til den delvise mesken i den første kjelen. autonext er deaktivert.

Restene i en mash-plan i et miljø med 2 eller 3 kjeler har følgende prinsipp:

* Delvis mos som skal tilberedes er tilordnet den første kjelen
* Restmesk med temperaturvedlikehold tilordnes den andre eller tredje kjelen
* Påfyllingen er alltid tilordnet den andre eller tredje kjelen

## webhook

PIN-hvit reléparameteren må settes til "-" slik at webhook-elementene vises i webgrensesnittet. I tillegg kreves webhook-URLen og lydkommandoen:

![webhook](/docs/img/kessel_webhook1.jpg)

Eksempel Shelly 13:00:

Slå på Shelly 13:00: <http://192.168.1.5/relay/0?turn=on>\
Slå av Shelly 1PM: <http://192.168.1.5/relay/0?turn=off>

Webhook-URLen for Shelly 1PM er: <http://192.168.1.5/relay/0?turn=> (uten av og på). Parameteren webhook switch må settes til "på/av".

URL Tasmota: <http://192.168.x.x/cm?cmnd=Power1%201>
