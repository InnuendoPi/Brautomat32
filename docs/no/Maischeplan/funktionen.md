# Funksjoner

En _oppfunnet eksempeloppskrift_ brukes i den følgende beskrivelsen. Denne beskrivelsen inneholder ikke oppskriften, men prosedyren for mesking med Brautomat.

Meskplanen er i form av en tabell. Denne tabellen behandles fra topp til bunn av bryggesystemet på en bryggedag. I eksempeloppskriften er linjen _Meske 50°C_ det første mesketrinnet og _WHP Hallertau Tradition_ er det siste mesketrinnet. En svært viktig funksjon i mash-planen er egenskapen i kolonnen _autoext_.

## Grunnleggende funksjoner

![mashplan](/docs/img/brautomat.jpg)

For orienteringsformål beskrives først strukturen til tabellradene. En rad i meskeplanen representerer et trinn i meskeplanen. Hver tabellrad har disse kolonnene:

* "Rest"-kolonnen viser et navn for dette mash-trinnet.
* "Temperatur"-kolonnen inneholder hviletemperaturen (også kalt mål- eller måltemperatur i denne håndboken).
* "Varighet"-kolonnen inneholder hviletiden (timer), hvor lenge Brautomat skal opprettholde hviletemperaturen.
* "autoext"-kolonnen angir om neste trinn vil fortsette automatisk etter at hviletiden (timeren) er utløpt.

Etter disse fire detaljene om mesketrinnet, er det redigeringsknapper i hver linje med følgende funksjoner: (fra venstre til høyre)

![Rediger mash-plan](/docs/img/brautomat-111.jpg)

* Flytt denne linjen opp én posisjon
* Flytt denne linjen én posisjon ned
* rediger denne linjen
*slett denne linjen

Tabelloverskriften inneholder følgende knapper (fra venstre til høyre)

![Rediger mash-plan](/docs/img/brautomat-1.jpg)

* ny linje: legg til et nytt mash-trinn på slutten av tabellen
* Slett: slett hele tabellen (tom mash-plan)
* Last på nytt: les oppskriften fra filen på nytt. Endringer lagres ikke. Knappen vises blått
* Database: Mash plan valg, import, eksport og mash plan planlegger
* Skjul: Skjul sammen og utvid mash-plantabellen

![Rediger mash-plan](/docs/img/brautomat-11.jpg)

Når en tabellrad redigeres, endres knappene.

* Avslutt: gå ut av linjeredigering uten å lagre. Knappen vises i grått
* Lagring: Lagre endringer i tabellraden i mash-planen

Alle knapper for å redigere mash-planen er skjult så snart bryggeprosessen er startet. Skjul-knappen for å skjule og utvide tabellen er skjult så snart mash-planen er redigert.

Sammen med Power, Play, Pause, Prev og Next-kontrollene er bryggekontrollen intuitiv å bruke. Meskeplanen som vises her er en import fra kleineBrauhelfer2. Importen legger automatisk inn hviletemperaturer og hviletider. Ved tilsetning av humle legges alfasyren og mengden i gram automatisk til humlenavnet. I tillegg har disse forkortelsene prefikset:

* VWH: vørterhopping foran
* Matlaging (uten å tilsette humle)
* WPH: Whirlpool Hopping

Tilsetningsstoffer som vist på bildet _Koke gjærmat 1gr_ importeres inn i meskeplanen fra den lille Brauherlfer2 med administrasjonstidspunkt og mengde.

## Rediger mash-plantabell

En mash-plan kan endres i Brautomat eller fullstendig gjenskapes. Blyantsymbolet setter en linje i mash-plantabellen i redigeringsmodus.

![Rediger mash-plan](/docs/img/brautomat-3.jpg)

Et hvilket som helst antall tabellrader kan nå endres etter hverandre. Så snart et symbol for redigering av mash-planen er klikket, endres _Lagre_-knappen fra grønn til rød. Når alle endringer er gjort, må mash-planen lagres ved å bruke _Lagre_-knappen. Alternativt kan alle endringer forkastes ved å bruke _Avslutt_-knappen for å avslutte uten å lagre.

Så snart en meskeprosess er startet med strømknappen, endres visningen:

![Rediger mash-plan](/docs/img/brautomat-4.jpg)

Knappene for redigering er skjult. For å gjøre disse synlige igjen,Meskeprosessen må stoppes ved å bruke pauseknappen på kontrollen:

![Rediger mash-plan](/docs/img/brautomat-5.jpg)

Når meskeprosessen er satt på pause, vises Pause-knappen i kontrollen i rødt og redigeringsfunksjonene vises. Induksjonstoppen slår seg ikke av. Hviletemperaturen opprettholdes fortsatt. Hvis hviletimeren er aktiv, blir den satt på pause. Hvis meskeplanen endres (redigeringsmodus), blir Pause-knappen for å fortsette meskeprosessen og strømknappen deaktivert og vises i grått til endringene i meskeplanen enten er lagret eller forkastet (Avslutt).

Applikasjonseksempel:\
På slutten av en meskeprosess brukes en jodprøve for å fastslå at mesken ennå ikke er jodnormal og at stivelse fortsatt er tilstede. Sakkarifiseringshvilen ved 72 °C bør forlenges:

* Sett meskeprosessen på pause
* Klikk på blyantsymbolet i linjen Saccharification 72°C
* Forleng hviletiden for den andre sakkarifiseringen med 5 minutter
* Lagre
* Klikk på pauseknappen og meskeprosessen fortsetter med den justerte hvilevarigheten.

## Funksjon og bruk av autonext

![Mash-plan autonext](/docs/img/Maischeplan-autonext.jpg)

Det første trinnet i meskeplanen kalt _Mashing 50°C_ har en hviletid på 10 minutter og en deaktivert _autonext_. Bildet viser situasjonen når hviletimeren har nådd 10 minutter: Timeren har telt ned til 00:00 gjenværende tid. Spilleknappen endres automatisk til rød. Toast-meldingen "Click play button" vises nederst til høyre. Koketoppen slår seg av. Bryggeprosessen venter på et klikk på avspillingsknappen. Nettgrensesnittet viser neste trinn, som startes ved å klikke på Spill av.

* Ved slutten av en pause med _autonext_ deaktivert, stoppes bryggeprosessen og koketoppen slås av.

Det andre mesketrinnet, kalt _Maltoserast 63°C_, har en hviletemperatur på 63°C og en hviletid på 25 minutter. I dette trinnet styrer Brautomat først koketoppen til 63°C. Så snart denne 63°C er nådd, starter Brautomat timeren. En hviletidtaker er en stoppeklokke som teller ned til 00:00 (0 minutter: 0 sekunder). Når denne tidtakeren når hviletiden på 25 minutter, sjekker Brautomat egenskapen _autonext_. Hvis _autonext_ er aktivert, hopper Brautomat automatisk til neste trinn i mash-planen. I denne eksempeloppskriften er dette trinnet _Saccharification 72°C_. Sakkarifiseringstrinnet har en hviletemperatur på 72°C. Brautomat øker automatisk kraften til koketoppen for å nå den nye hviletemperaturen.

* Ved slutten av en pause med _autoext_ aktivert, fortsetter meskeprosessen automatisk og koketoppen forblir slått på.

![Mash-plan autonext](/docs/img/Maischeplan-autonext2.jpg)

Egenskapen _autonext_ i det syvende trinnet _Mesing 78°C_ er ikke aktivert. Hvis Brautomat støter på en deaktivert autonext, avslutter Brautomat den gjeldende hviletiden etter at hviletiden er utløpt og slår av koketoppen (0 % effekt). I denne tilstanden vises Play-knappen i rødt. For å fortsette bryggeprosessen må du klikke på Play-knappen.

Mens i det første eksemplet av _autonext_ vanligvis klikkes Play-knappen direkte for å fortsette i mesketrinnet, kan det i det andre eksemplet med mesking gå lengre tid for lautering og lauterhvile. Brautomat er igjen i «Click Play Button»-tilstanden. Koketoppen til den første kjelen forblir slått av. I denne tilstanden kan alle aktuatorer og også de to andre kjelene brukes.

## Forskjellen autonext og brudd

Hvis autonext er deaktivert på slutten av låsen, er koketoppen slått av. Pauseknappen stopper hviletimeren, men koketoppen forblir slått på og Brautomat beregner nødvendig effekt for koketoppen.

De følgende avsnittene beskriver den valgfrie Sonfunksjonene er beskrevet. Brautomat nybegynnere kan hoppe over beskrivelsen av spesialfunksjonene.

## Spesialfunksjon 0°C hvile når autonext er aktivert

En spesiell funksjon er hviletemperaturen 0°C når autonext er aktivert: Hvis hviletemperaturen er satt til 0°C og autonext aktiveres, startes mesketrinnet automatisk uten temperaturkontroll. I meskeplaneksemplet vises denne spesielle funksjonen etter koking av vørteren i _post-isomerization_-trinnet. På dette tidspunktet har vørteren en temperatur på ca. 100°C. Koketoppen bør slås av og timeren for etter-isomerisering bør startes umiddelbart:

![Spesialfunksjon 0°C](/docs/img/Maischeplan-Sonderfunktion.jpg)

Spesialfunksjonen _0°C hviletemperatur med aktivert autonext_ oppfyller nøyaktig dette kravet: den faktiske og måltemperaturen ignoreres og hviletimeren startes. Hvis hviletemperaturen for etter-isomeriseringstrinnet ikke ble satt til 0°C, men heller til 95°C, for eksempel, vil hviletidsuret for etter-isomeriseringstrinnet først starte når temperaturen i meskekokeren er avkjølt fra 100°C til 95°C. Under post-isomeriseringen synker temperaturen i vørteren. Om nødvendig blir vørteren aktivt avkjølt. Spesialfunksjonen _0°C hviletemperatur når autonext_ er aktivert gjør at koketoppen forblir slått av.

## Bryggeprosess

Det grunnleggende prinsippet for bryggemaskinen er stigende infusjon. Dette inkluderer varianter som Earls matlagingsmeskeprosess. Andre bryggeprosesser kan også implementeres ved å bruke "autonext"-egenskapen. Det skal imidlertid bemerkes at Brautomat kun kan støtte andre bryggeprosesser med "halvautomatisk". En utløser for en handling, som å trekke delvis mos, må gjøres manuelt av operatøren. For Brautomat betyr manuell bruk av Play- og Pause-knappene. En pause på null minutter med autonext deaktivert kan brukes som en utløser for en manuell handling.

Merk: Følgende emner om kontrollkommandoer er valgfrie og ikke relevante for å komme i gang med Brautomat.

## Bryggekjele

Brautomat støtter opptil tre bryggekjeler. Den første kjelen er nødvendig for meskeprosessen. En ekstra kjele er valgfri og kan brukes for eksempel i bryggeprosesser som avkok. Den tredje kjelen brukes ofte som påfyll og er også valgfri. Bruken av 2. og 3. kjelen kan velges fritt, kun den første kjelen er knyttet til meskeprosessen og spesifikt til hviletimeren.

Standardnavn for kontrollkommandoer:

* Første vannkoker: IDS eller MASH
* Andre kjele: MLT eller SUD
* Tredje kjele: HLT eller REGUSS

## Kontrollkommandoer

En annen spesialfunksjon er kontrollkommandoer for koketoppene og aktuatorene. Syntaksen for mash-trinnet er.

* Skuespillernavn: Forestilling

Strømmen kan være enten PÅ eller AV eller et tall mellom 0 og 100 %. AV-tilstanden tilsvarer verdien 0 % og PÅ til verdien 100 %. Styringskommandoen for den første induksjonstoppen er IDS eller MASH. Kontrollkommandoen for den andre induksjonstoppen er SUD. Kontrollkommandoen for omstøpningen er HLT. Kontrollkommandoen for en aktuator er aktuatornavnet.

![Aktuatorkontrollkommando](/docs/img/Maischeplan-Aktoren.jpg)

Meskplanen på bildet bytter aktuatorer på tre steder. Omrøreren slås på rett i begynnelsen: Omrører:PÅ
Rett før slutten av meskeplanen slås røreverket av: Agitator:AV og påfyllingen slås på: Refill:ON.

Styringskommandoen for en aktuator kan spesifiseres med en effekt, f.eks. PUMPE: 60. Aktuatorpumpen slås deretter på med 60 % effekt. Dette forutsetter at denne aktuatoren er aktivert for PWM. Hviletemperaturen og hviletiden må settes til 0 for kontrollkommandoer.

Kontrollkommandoen IDS:50 setter den maksimale utgangseffekten til koketoppen til 50 %. Gjenstøpingen kan også slås på til 75 % effekt med HLT:75.![IDS-kontrollkommando](/docs/img/sonderfunktion_sud1.jpg)

Kontrollkommandoen SUD: Kok tykk mos med en hviletid på 10 minutter og en hviletemperatur på 100 grader utfører et mesketrinn på en andre koketopp. Hviletimeren startes så snart hviletemperaturen er nådd.

![Kontrollkommando SUD](/docs/img/sonderfunktion_sud2.jpg)

Kontrollkommandoen SUD: Kok tykk mos med hviletemperatur på 100 grader men uten hviletid slår på den andre koketoppen, starter PID-kontrolleren for koketoppen og hopper direkte til neste trinn i meskeplanen.

![Kontrollkommando SUD](/docs/img/sonderfunktion_sud3.jpg)

Mesketrinnet forsukring ved 72°C utføres på den første koketoppen _Maische_. Kontrolleren PID regulerer den nødvendige kraften til mash-tunet. Samtidig regulerer regulatoren PID effekten som kreves for kjelen _Sud_.

Eksempler:

* Agitator: PÅ
* Agitator: AV
* RHE:40
*IDS:75
*IDS:AV
* HLT:100
* HLT:AV
* SUD: Kok tykk mos
* SUD:60

_Merk: Kontrollkommandoene kan brukes til å betjene mesk-, brygg- og HLT-kjelene samtidig. Imidlertid kan bare én hviletidtaker være aktiv. Hviletimeren er alltid koblet til den første "meske" koketoppen._

### Eksempel på kontrollkommando IDS

Som et eksempel er følgende konfigurasjon gitt for GGM IDS eller MashSud-kjelen:

![IDS-kontrollkommando](/docs/img/aktoren_schalten4.jpg)

Maksimal effekt er forhåndsinnstilt til 100 %. "Overgang til matlaging"-temperaturen er 95°C. Fra denne temperaturen og utover er den maksimale utgangseffekten til GGM IDS bare 80 %.

Meskplanen i illustrasjonen begynner med trinnet "Oppvarming av hovedhellingen". GGM IDS induksjonstoppen ville varme opp vannet med effekten "Max. Power IDS" (parameter i temperaturkontrollregisteret), dvs. med 100%.

![IDS-kontrollkommando](/docs/img/aktoren_schalten2.jpg)

Hviletimeren starter ved 59°C. Hviletiden er null minutter. Brautomat hopper til neste linje til trinn 2.
Kontrollkommandoen IDS:65 setter maksimal effekt til IDS til 65 %. Brautomat hopper til neste linje til trinn 3.
Nå varmes temperaturen opp fra 59°C til måltemperaturen i "meske"-trinnet. Maksimal ytelse for IDS er 65 %.

Maksimal utgangseffekt på 65 % opprettholdes i de følgende mesketrinnene. Inntil Brautomat møter kontrollkommandoen IDS:100 etter mesketrinnet.

![IDS-kontrollkommando](/docs/img/aktoren_schalten3.jpg)

Kontrollkommandoen endrer den maksimale utgangseffekten til IDS til 100 %. Vørteren varmes nå opp med 100 % effekt til "overgang til koketemperatur" ved 95°C (se ovenfor). Fra 95°C bytter GGM IDS til 80 % effekt. 80 % tilsvarer parameteren "Power from transition".

Kontrollkommandoene til IDS kan brukes til å hindre at mosen brenner seg eller at vørteren koker over, spesielt ved mindre kjelevolum.

### Eksempel: Avkok med to kokeplater

![IDS og SUD kontrollkommando](/docs/img/sonderfunktion_sud4.jpg)

På grunn av begrensningen _må den første meskekjelen alltid drives med hviletid_, er det en enkel fremgangsmåte for avkoksprosessene: delmosen som skal tilberedes må gå inn i _Mash_-kjelen og delmesken som skal holdes på temperatur må inn i _Sud_-kjelen.

### Eksempel på bruk av strøm til en koketopp

Det gis en fylling på 7 kg og en hovedhelling på 28l. Totalt er massen 35 kg\

Ved hjelp av spesialfunksjonen IDS: <Power in %> kan effekten på en koketopp justeres slik at oppvarmingshastigheten under mesking er 1°C per minutt.

![Kontrollkommando MASH power](/docs/img/IDS-Sonderfunktion.jpg)

_For forklaringer av beregningsmetoden, se: Parametre for GGM IDS - Temperaturkontroll - Maksimal ytelse for IDS._

``` json

    Nødvendig effekt P = m * c * T / (t * w)
    Uttrykket c * T / (t * w) erstattes med verdien 75 ved en virkningsgrad på 80 % for induksjonstoppen
    Massen m er 35 kg
    P = 35 x 75 = 2625
    2625W er 75 % av maks. effekt 3500W (2625 / 3500 * 100 = 75 %)

```

I meskeplanen som er vist ovenfor, settes maksimal utgang til IDS til 75 % etter mesking i linje 2 med kontrollkommandoen "IDS:75". Med denne kontrollkommandoen utføres følgende trinn (maltose hvile, forsukring og mesking) med en maksimal effekt på 75 %. Etter mesking må brukeren klikke på avspillingsknappen (autonext deaktivert). Lautering begynner her, etterfulgt av lauter hvile osv. Bryggeprosessen fortsetter med kontrollkommandoen "IDS:100". Maksimal effekt til IDS er satt til 100 % effekt for vørterkoking.

_Merk: Virkningsgraden på 80 % brukt her for en induksjonstopp er en gjennomsnittsverdi. En isolert og dekket mesketank (lokk eller agitator) kan ha høyere effektivitet._

## Endring av spesialfunksjonsprofil

En annen spesiell funksjon er profilendringen. Kommandoene er IDSPROFIL, SUDPROFIL og HLTPROFIL. Profilnavnet følger kolon.

Eksempler:

IDSPROFIL:Profil68l\
IDSPROFIL:Profil36l

Med denne spesialkommandoen byttes alle parametere til en kjele. På denne måten kan forskjellige maskinvareprofiler lagres. I avkoksbryggeprosessen tilbyr spesialkommandoen en enkel måte å bruke justerte parametere med samme kjele og mindre volum.

Spesialkommandoene IDS: og IDSPROFIL: har forskjellige effekter: Spesialkommandoen IDS: endrer maksimal utgangseffekt. Alle andre parametere forblir de samme.

_Merk: spesialkommandoen IDSPROFILE i mash-planen kanselleres hvis enhetstypen (IDS1, IDS2 eller relé) ikke er identisk._

## Eksempel på bryggedag

Til slutt oppsummeres spesialbestillingene, humletilsetningene og den generelle prosedyren ved bruk av en bryggedag. Dette eksemplet er basert på følgende oppsett:

To kjeler miljø:

* en vannkoker (volum 70l, GGM IDS2 med 3,6 kW)
* en omstøpt vannkoker (kjele 35l, 2kW)

To skuespillere:

* en agitator (reléstyrt)
* et ringvarmeelement (i meskekokeren, 3,5 kW)

Mash-planen:

![eksempel bryggedag for mash-plan](/docs/img/example_control_commands1.jpg)

Eksemplet viser hvor enkelt det er å slå aktuatorer av og på ved hjelp av spesialkommandoer eller hvordan spesialkommandoer er integrert i mash-planen. I det første mesketrinnet slås røreverket på. Brautomat utfører spesialkommandoen og hopper umiddelbart til neste trinn i mash-planen. Mesken i trinn ble konfigurert med en varighet på 1 minutt og autonext deaktivert. I dette trinnet tilsettes malten til bryggevannet. Steget tar lengre tid enn ett minutt, men avhengig av fyllet vet man ikke på forhånd hvor lang tid meskingen tar. Etter å ha mesket i et minutt, slår Brautomat av koketoppen og viser avspillingsknappen i rødt (deaktivert autonext). Brautomat "venter" nå til trinnet er fullført og avspillingsknappen klikkes. Når koketoppen er slått av og malt tilsettes, vil blandetemperaturen for mesken være under 55°C. Denne prosedyren egner seg for eksempel for en avslappet, langsom tilsetning av maltene eller for en kort proteinhvile.

_Alternativt:_ aktiver egenskapen autonext og sett hvileperioden til 5 minutter. I dette tilfellet vil Brautomat opprettholde mesketemperaturen i 5 minutter (meske) og deretter automatisk varme opp til neste hvile.

Neste trinn er maltose resten. Kontrolleren PID regulerer kraften som kreves for å nå måltemperaturen i mesken og opprettholde den i en periode på 40 minutter. På linje 4 slås påfyllingen på ved hjelp av en spesiell kommando. Måltemperaturen for påfyllingen er 75°C og varigheten er 0 minutter. Brautomat starter PID-regulatoren for omstøping av kjelen og regulerer nødvendig effekt i bakgrunnen. TilPå dette tidspunktet i meskeplanen er to PID-kontrollere aktive: en PID-kontroller for meskekjelen og en PID-kontroller for etterhellingen. Brautomat hopper direkte til neste trinn etter at den er slått på.

I maskeplanen er ringvarmeelementaktuatoren slått på eller slått en gang med spesialkommandoen _RHE:ON_ og en gang med _RHE:50_. PÅ oversetter Brautomat med 100 % ytelse, mens 50 behandles tilsvarende med 50 % ytelse. MashSud-kjelen har et maksimalt volum på 70 liter. Ringvarmeelementet støtter platetoppen under matlaging med 50 % effekt for kraftig matlaging: 100 % effekttopp (3,5 kW) pluss 1,75 kW ringvarmeelement (50 %). Ved slutten av tilberedningen slås ringvarmeelementet av med spesialkommandoen _RHE:OFF_.

Tidspunktet for humletilsetninger beregnes basert på koketiden. Meskeplanen har en total koketid på 90 minutter. 30 minutter av dette koker uten å tilsette humle. Den totale koketiden for de enkelte humletilsetningene summerer seg. dvs. den første tilsetningen av humle _Hall. Tradisjon 6,0% 37,2g_ er tilberedt i totalt 60 minutter:

* Varighet av mash step hop tillegg Hall. Tradisjon 37,2g: 30 minutter
* Varighet av mash step hop tillegg Hall. Tradisjon 31g: 15 minutter
  * På slutten av dette mesketrinnet er den første tilsetningen av humle (37,2 g) i vørteren i 45 minutter
* Varighet av mash step hop tillegg Hall. Tradisjon 30g: 10 minutter
  * På slutten av dette mesketrinnet er den første tilsetningen av humle (37,2 g) 55 minutter og den andre er 25 minutter i vørteren
* Varighet av mash step hop tillegg Hall. Tradisjon 7g: 5 minutter
  * På slutten av dette mesketrinnet er den første humletilsetningen (37,2 g) 60 minutter, den andre 24 minutter og den tredje 15 minutter i vørteren

Mens verktøy som kleineBrauhelfer, BrewFather eller MMum alltid angir den totale koketiden for hver enkelt humletilsetning, må Brautomat gi en alarm eller en indikasjon på når en tilsetning av humle må tilsettes vørteren under bryggingen.

_Utvidelse:_ Forklaringen av humledoser utvides til å inkludere to eller flere doser samtidig:

![eksempel bryggedag for mash-plan](/docs/img/example_control_commands3.jpg)

Humlen bør tilsettes 10 minutter før slutt på kokingen. Tradisjon 6,0 % 30g_ og gjærmat _Næringsgjær_ tilsettes samtidig vørteren. Illustrasjonen viser hvor enkel prosedyren er: det gis samtidige doser med en varighet på 0 minutter før en dose med en varighet.

Det nest siste trinnet etter isomerisering bruker spesialfunksjonen måltemperatur 0°C. Koketoppen slås av med dette mesketrinnet. Spesialfunksjonen hviletemperatur 0°C får Brautomat til å starte hviletimeren 10 minutter umiddelbart. På dette tidspunktet har vørteren en temperatur på ca. 100°C og kjøles sakte ned. Fordi det følgende trinnet involverer tilsetning av aromahumle ved 78°C, avkjøles vørteren aktivt under den 10-minutters hvileperioden etter isomerisering.

Grafen for meskeplanen:

![eksempel bryggedag for mash-plan](/docs/img/example_control_commands2.jpg)
