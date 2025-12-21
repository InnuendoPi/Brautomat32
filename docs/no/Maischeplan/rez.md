# Mash-planinnstillinger

Brautomat tilbyr enkel administrasjon av mash-planer. I tillegg til å importere og eksportere, kan du bytte mellom lagrede mash-planer. Tidskontroll er også mulig. Dette kapittelet kompletterer beskrivelsen av de grunnleggende funksjonene.

## Mash-plan

Navnet på mash-planen kan spesifiseres i innstillingene. Filnavnet er avledet fra mash-planens navn. Parameterne *Total koketid* og *Post-isomeriseringstid* vises kun for informasjon og kan ikke redigeres. Disse parameterne leses inn under oppskriftimporten. Hvis en meskeplan opprettes manuelt, er koketiden og verdiene etter isomerisering irrelevante fordi Brautomat ikke beregner bitre enheter.

## Tidskontroll

Ved hjelp av tidskontroll kan en brudedag planlegges og startes automatisk.

![Tidskontroll](/docs/img/Zeitsteuerung.jpg)

Med DateTimerPicker-elementet kan du enkelt velge dato og klokkeslett. Oppskriftsnavnet erstattes midlertidig av den angitte starttiden.

![Tidskontroll](/docs/img/Zeitsteuerung2.jpg)

En aktivert tidskontroll lagres i konfigurasjonen. Når bryggemaskinen startes på nytt, leses innstilt dato og klokkeslett. Dersom denne bryggestarten er i fremtiden, aktiveres tidsstyringen. Hvis bryggestarten er i fortiden, er tidskontrollen deaktivert.

## Administrer mash-planer

### Lag mash-plan

Navnet på meskeplanen skal legges inn i inntastingsfeltet. Med *OK* opprettes en ny tom mash-plan.

### Gi nytt navn til mash-planen

Det nye navnet på meskeplanen må legges inn i inntastingsfeltet. Med *OK* lagres mash-planen under det nye navnet.

### Endre mash-plan

Brautomat administrerer mash-planer i flash-minnet. Ved å velge *Endre mash-plan* kan du bytte mellom de eksisterende mash-planene.

### Importer mash-plan

Brautomat kan importere bryggeoppskrifter fra følgende kilder:

* KleinBrauhelfer2 (fra versjon 2.5 eksporttype Brautomat)
* Mos malt og mer
* Brewfather
* Brautomat

En importert bryggeoppskrift blir en Brautomat mash-plan. Oppskriftshåndtering og oppretting med kbh2 anbefales. Eksportfilteret "Brautomat" inneholder i en optimalisert form alle dataene som kreves for å brygge med Brautomat.

Oppskrifter fra MashMalzandMore bør også først importeres inn i det lille bryggehjelpemidlet2 og tilpasses de enkelte systemverdier, råvarer osv. Siden MMum ikke tildeler hvilenavn, anbefales det å redigere det i KBH2-meskeplanen.

Oppskrifter og brygg kan importeres fra BrewFather via filimport eller via API-kall. I BrewFather kan hvilenavn inneholde en brødtekst (av nesten hvilken som helst lengde). Teksten er forkortet til maksimalt 50 tegn. Brewfather tillater flyttall og tekst som hviletid. Parametrene konverteres til heltall eller settes til 0.

*Merk: ESP-mikrokontrollerne har en liten mengde RAM. Oppskrifter med veldig lang tekst, bilder eller andre vedlegg kan kanskje ikke importeres. Brautomat filtrerer oppskrifter før import. Det kan imidlertid være nødvendig å fjerne bilder og svært lange beskrivelser før import.

Importerte oppskrifter lagres i mappen /Recipes. Oppskriftsnavnet brukes som filnavn. Maksimal lengde på filnavnet i Arduino-filsystemet er 31 tegn. Mellomrom og omlyd byttes ut ved lagring.

### Eksporter mash-plan

En mash-plan kan eksporteres i JSON-format. For å lese den igjen, må importen brukes i Brautomat-format.

### Fjern mash-planen

Den valgte mash-planen fjernes fra flash-minnet.

## Import standard

![Import standard](/docs/img/voreinstellung_import.jpg)

Brautomat krever et mesketrinn (valgfritt) og et mesketrinn. ISpesielt fungerer mesketrinnet som et skilletrinn mellom mesking og matlaging når autonext er deaktivert. Ved import kan Brautomat legge inn manglende meske- og mesketrinn. I tillegg kan manglende temperaturer leveres med spesifikasjoner.

### Temperaturstandarder for manglende parametere

Oppskrifter fra ulike kilder kan blant annet mangle temperaturinformasjon. Dette gjelder spesielt temperaturene for mesking, mesking, frontvørter og boblebadhopping. Bryggerens interne programlogikk krever alltid en temperatur for prosessering, selv om enkelte temperaturer ikke er nødvendige fra bryggerens perspektiv. Manglende temperaturer er forhåndstildelt med standardverdier.

### Mesketemperatur [°C]

Denne parameteren er for reseptimport og beskriver standardtemperaturen for mesking. Denne parameteren brukes kun hvis ingen mesketemperatur er angitt under oppskriftimporten.

### Mesketemperatur [°C]

Denne parameteren er for reseptimport og beskriver standardtemperaturen for mesking. Denne parameteren brukes kun hvis ingen mesketemperatur er angitt under oppskriftimporten.

### Temperatur VWH [°C]

Denne parameteren er for oppskriftsimport og beskriver standardtemperaturen for en frontvørterhopping. Oppskrifter spesifiserer ofte ikke en temperatur for VWH. En temperaturspesifikasjon kreves for Brautomat. Hvis en temperatur er angitt i oppskriften, vil denne bli brukt under import.

### Temperatur WPH [°C]

Denne parameteren er for oppskriftsimport og beskriver standardtemperaturen for boblebadhopping. Oppskrifter spesifiserer ofte ikke en temperatur for WPH. En temperaturspesifikasjon kreves for Brautomat. Hvis en temperatur er angitt i oppskriften, vil denne bli brukt under import.

### Steketemperatur [°C]

Denne parameteren beskriver temperaturen der vørteren koker til en rullende byll. Standardverdien er 98°C og tilsvarer omtrent en plassering på 500m over havet. For oppskriftimporten brukes denne parameteren som tilberedningstemperatur.
