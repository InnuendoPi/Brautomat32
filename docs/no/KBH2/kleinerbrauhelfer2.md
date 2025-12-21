# KleinerBrauhelfer2

Fra versjon 2.5.0 har programmet [ kleineBrauhelfer2](https://kleiner-brauhelfer.de/) et eksportfilter for Brautomat. Oppskriftsutvikling og design er mulig i alle tenkelige detaljer med det lille bryggehjelpemidlet2. Med juksearket tilbyr kbh2 et meget godt og nyttig flytskjema for praktisk gjennomføring på bryggerikjøkkenet. Med eksportfilteret for Brautomat kan alle trinn tas i bruk.

## Meskeplanen for kbh2-fanen

I Mash Plan-fanen tilbyr kbh2 fire forskjellige måter å tilsette malt til mosen: mosing, oppvarming, brygging og avkok. Alle fire typene støttes i Brautomat. Mashing-typen settes inn automatisk med autonext deaktivert. Oppvarming og brygging med autonext aktivert. Avkoket utføres med deaktivert autonext.

![Matlaging](/docs/img/kbh2-maischplan.jpg)

 Brautomat krever et mesketrinn for å gjenkjenne slutten av meskingen og overgangen til lautering. I kbh2 meskeplanen bør et mesketrinn av typen «oppvarming» med 76°C eller høyere og en varighet på 1 minutt legges til på slutten. I denne kombinasjonen gjenkjennes meskingen av Brautomat og settes inn med deaktivert autonext.

![Matlaging](/docs/img/kbh2-maischplan2.jpg)

### Eksempel 1: kbh2 Earl Scheidt matlagingsmeskeprosess

[Earl Scheid](http://hb-tauschboerse.bplaced.net/Neues_Maischverfahren.htm)

Earl Scheids kokemeskeprosess kan planlegges veldig godt med meineBrauhelfer2 og kan utføres veldig enkelt og automatisk ved å bruke Brautomat. Vær oppmerksom på at det kreves et mosetrinn med brygging (hovedhelling og maltdel 2) mellom de to delmeskene. Avhengig av volumet av malt 2, er den anbefalte prosedyren å jobbe med deaktivert autonext for bryggetrinnet for å ha nok tid til å meske i malt 2 før den andre maltose-hvilen starter. Alternativt kan ca. 60°C med direkte (autonext) oppvarming til 63°C kan velges som måltemperatur i blandingskrysset mellom hovedstøp/malt 1 og hovedstøp/malt 2.

### Eksempel 2: kbh2 avkok

Brautomat støtter avkoksprosesser med halvautomatisk. For eksempel, hvis en delvis mash har blitt trukket, krever Brautomat informasjon (klikk på Play) når dette delvise trinnet er fullført. Å lage oppskrifter i kbh2 og importere dem til Brautomat gjør bryggedager med avkok enklere. En beskrivelse av alternativene finner du i instruksjonene fra kleineBrauhelfer2.

## Kbh2-fanen matlaging

De 5 humletilsetningstypene forvørter, start på koking, koking, slutt på koking og visp er hentet fra den lille bryggehjelpen2 og inkludert i nødvendig rekkefølge i meskeplanen til Brautomat.

En tidsspesifikasjon i kbh2 i Cooking-fanen betyr "hvor lenge humletilsetningen er tilberedt". Koketiden avgjør blant annet: Bitterhet og aroma. Se også formelsamlingen i kbh2.
kbh2 tidsspesifikasjonen "hvor lenge er humletilsetningen tilberedt" konverteres til en tidsspesifikasjon "på hvilket tidspunkt humletilsetningen finner sted" når den importeres til Brautomat.

![Matlaging](/docs/img/hopfen.jpg)

### Gjør litt frem og tilbake matematikk

Humletilsetningen er vist på bilde kbh2. Den første humletilsetningen er «Hallertauer Perle 7% 2020» med en koketid på 65 minutter. En annen parameter er viktig i denne sammenhengen: på venstre side er den totale koketiden markert grønt som 80 minutter. Så vørteren kokes uten humle i 15 minutter. Den andre tilsetningen av humle er "Hallertauer Tradition 5,7% 2020" humle med en koketid på 15 minutter. I de siste 15 minuttene av tilberedningen av vørteren har Hallertau Perle fortsatt 15 minutter igjen av de opprinnelige 65 minuttene, og den andre tilsetningen av Hallertau Tradition-humle koker i 15 minutter av de resterende 15 minuttene av koketiden. Den siste tilsetningen av humle tilsettes for å banke, dvs. etter slutten av kokingen.

Oppgaven til Brautomat er å angi tidspunktet for tilsetning av humle under brygging og ideelt sett med en aktustiet lite signal for å minne deg på tilsetning av humle.

I dette eksemplet er en total koketid på 80 minutter og en første tilsetning av «Hallertauer Perle»-humle spesifisert med en koketid på 65 minutter. Dette resulterer i en forskjell på 15 minutters koketid uten tilsetning av humle. Det første trinnet, koking av vørteren, varer i 15 minutter. Nå skal den første tilsetningen av humle gjøres. Den andre humletilsetningen «Hallertauer Tradition 5,7% 2020» har en koketid på 15 minutter. Av de 65 minuttene er 15 minutter Hallertau Pearl og Hallertau Tradisjon sammen i vørteren. 65 minutter minus 15 minutter gir et intervall mellom humletilsetninger på 50 minutter. Hallertauer Perle humletilsetningen må gis 50 minutter før Hallertauer Tradition humletilsetningen.

Den siste satsen med humle «Hallertauer Tradition 5,7% 2020» er gitt for banking. Når du slår den ut, er kokingen ferdig. Så tilsetning av humle teller ikke med i den totale koketiden.

![Matlaging](/docs/img/hopfengaben.jpg)

Tilsetning av humle oppfører seg på samme måte. Det er en post-isomeriseringstid på 10 minutter. Å tilsette "Hallertauer Tradition 5,7% 2020" humle for å slå med en koketid på -5 minutter er en del av post-isomeriseringen.

_Tips: Hvis to humletilsetninger legges til samtidig, settes den første humletilsetningstiden til 0 minutter og den andre humletilsetningen settes til den faktiske tilsetningstiden. Logikken er enkel i henhold til beregningen ovenfor: intervallet mellom to hopptilføyelser til samme nullpunkt er 0 minutter._

Tilsetningene fra kbh2 fra fanene Mashing og Boiling oppfører seg på samme måte som humletilsetningene. Tilsetningsstoffer fra kbh2-fanene vannbehandling og gjæring støttes ikke.
