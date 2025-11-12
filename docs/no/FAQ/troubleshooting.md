# Feilsøking

Tips og triks ... fortsetter ...

## WiFi

WLAN-rekkevidden til ESP-mikrokontrollerne er begrenset. Gjeldende WLAN-signalstyrke vises under System -> Tilbakestill. Jo nærmere verdien er null, jo sterkere er signalet. Verdier fra -50dBm til -75dBm er veldig gode. En verdi mindre enn -80dBm er dårlig og vil forårsake problemer. I bryggerikjøkken med svak WiFi-signalstyrke kan PID-intervallet økes til 7000ms, for eksempel for å redusere datamengden. Hvis signalstyrken er svak, bør kun en aktiv nettleser brukes (se Server Sendte hendelser nedenfor). En passende plassering for Brautomat i WLAN (eller en ekstra repeater) er viktig. En god signalstyrke gir ikke nødvendigvis, men i de fleste tilfeller en høyere og mer stabil dataoverføringshastighet.

Nettgrensesnittet fra Brautomat er basert på bootstrap-rammeverket 4.6 med Javascript. De nødvendige filene (css, js og fonter) er i flashminnet til Brautomat. Dette har en fordel og en ulempe. Fordelen er at det ikke kreves internettforbindelse for å laste de nødvendige filene ved brygging. Ulempen er at i det lokale WLAN må Brautomat gi rammefilene komprimert til hver tilkoblede nettleser én gang når tilkoblingen er etablert. Hvis en fil ikke overføres riktig og bare veldig sakte på grunn av for eksempel svak WiFi-signalstyrke, vil ikke nettgrensesnittet fungere som det skal. I dette tilfellet bygger ikke nettgrensesnittet riktig (det ser da ut som en tekstside) eller er ufullstendig (tabellene forblir tomme). I de fleste tilfeller er det tilstrekkelig å laste inn nettstedet på nytt (Ctrl-Shift-R).

Etter en fastvareoppdatering skal Brautomat alltid slås av og nettleserbufferen slettes.

## Nettlesere

Brautomat er testet på Win11 med MS Edge og Firefox i gjeldende versjon, samt på iOS-enheter med MS Edge og Safari. MS Edge foretrekkes under utvikling. Uavhengig av nettleser, må automatisk lydavspilling for Toasts-meldingene (lyd) aktiveres for adressen til Brautomat. Adressen til Brautomat bør også inkluderes i unntakene for blokkering av nettlesertillegg. Utdaterte nettlesere (f.eks. IE8) støttes ikke.

Nettleserbufferen kan føre til feil annonser på nettet. Nettgrensesnittet til Brautomat spesifiserer no-cache og no-store når de kalles, men forskjellige nettlesere ignorerer disse instruksjonene. Tømme nettleserbufferen manuelt startes ofte med tastekombinasjonen Ctrl - Shift - Del.

## Server sendte hendelser og strømplaner og automatisk låseklienter

Brautomat sender data til tilkoblede og aktive nettlesere via serversendte hendelser. Opptil 8 enheter kan koble til Brautomat samtidig. Strømplaner eller automatisk låsing kan avbryte en tilkobling. Bryggeprosessen vil ikke bli stoppet eller avbrutt hvis forbindelsen blir brutt! Brautomat fortsetter å fungere normalt. Frakoblede nettlesere mottar bare ingen ny informasjon. Informasjon inkluderer temperaturer, nåværende mash-trinn, nåværende ytelse, diagrammer, etc. En Server Sendt Events-tilkobling til Brautomat er "datakanalen" som informasjonen sendes til nettleseren gjennom. Hvis forbindelsen til Brautomat blir avbrutt, avsluttes datakanalen. En aktiv nettleser gjenkjenner når datakanalen er avsluttet og logger automatisk på igjen på Brautomat etter kort tid.\
Registreringer på Brautomat har ingen rekkefølge eller prioriteter. Det har ingen betydning om nettleseren fra PC eller nettbrett kobles til først eller sist. Bryggeprosessen kan startes på enhet A, settes på pause på enhet B, observeres på enhet C og avsluttes på enhet D. Hvis alle fire enhetene er aktive og tilkoblet, viser alle nettlesere i (nesten) samtidigidentisk informasjon fordi hver av disse fire enhetene har sin egen datakanal.

## Import av oppskrift

På grunn av begrenset minne kan ikke oppskriftsimporten importere oppskrifter med PDF-er, bildevedlegg eller veldig lange tekster eller forklaringer. For MashMalzandMore-oppskrifter er import til kbh2 og deretter eksport i formatet Brautomat en enkel og god løsning. Oppskrifter fra Brewfather kan også importeres.

## AutoTune

AutoTune-prosessen bør ikke fokusere på perfeksjon, dvs. S.v. 0,1°C. Avviket til sensorene er vanligvis større. Parameteren AutoTune støybånd (spredning rundt målverdien) er tilstrekkelig nær måltemperaturen med en verdi på 0,3 til å treffe måltemperaturen veldig godt og opprettholde den over hvileperioden.\
Svært godt isolerte vannkoker krever en større AutoTune dataserie. I dataserien blir målte verdier registrert i kronologisk rekkefølge. I begynnelsen er det gjeldende måleverdi og helt på slutten av raden er det den eldste måleverdien. Verdien AutoTune dataserien sier "hvor mange verdier før gjeldende måling ser Brautomat tilbake (i fortiden) for å oppdage en temperaturendring på minst AutoTune støybånd (0,3)". For en godt isolert kjele bør dataserien fylles med 75 målepunkter. For en uisolert kjele er en dataserie på 50 målepunkter tilstrekkelig. Disse to parameterne må justeres avhengig av miljøet. Standardspesifikasjonene skal gi svært gode verdier i de aller fleste tilfeller.

## Sensorer og kalibrering

Dallas DS18B20-sensorer tilbys på mange plattformer til svært forskjellige priser. Sensorkalibrering bidrar til å minimere avvik. Uansett bør IDS-sensoren kalibreres fordi avvik på flere grader Celsius (avhengig av opprinnelsen) er mulig.\
Hvis en sensor regelmessig rapporterer Sensor Error (toasts) i webgrensesnittet, bør du først prøve en annen tilkobling for sensoren. De tre koblingene på brettet for sensorene er likeverdige og har ingen forhåndsbestemt rekkefølge. Hvis det er sensorproblemer, bør loddepunktene til de 3 skruklemmene og 4,7 kOhm-motstanden (på kretskortet under ESP) kontrolleres.

## GGM IDS pin avbrudd

Pinneavbruddet gir en returkanal fra induksjonstoppen til Brautomat. Denne returkanalen er koblet til Brautomat med en avbrudd GPIO fra ESP. Et avbrudd avbryter programflyten og kontrollerer avbruddstilstanden.\
GGM IDS induksjonstoppen sender kontinuerlig et avbrudd omtrent hvert 300. millisekund: enten signalet "alt er ok" (0000) eller en feilkode (f.eks. 0010 for ingen kjele eller tom kjele).

Del av seriell utgang på pinneavbrudd:

```tekst
10:00:00:174 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 
10:00:00:543 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 
10:00:00:864 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 
10:00:01:209 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 
10:00:01:554 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 
```

Serieutgangen ved pinneavbruddet viser tydelig at induksjonstoppen hele tiden sender "alt ok". Imidlertid avbryter Brautomat arbeidet mens den brygger med hvert avbrudd (omtrent hver 300. ms) og sjekker avbruddstilstanden. Pinneavbruddet skal derfor kun brukes til feilsøking.

Følgende avbrudd er beskrevet i GGM IDS2-manualen:

E0 no/tom kjele (0010 2)\
E1 kretsfeil (0011 3)\
E3 Overoppheting (0101 5)\
E4 temperatursensor (0110 6)\
E7 lavspenningsbeskyttelse (1001 9)\
E8 overspenningsvern (1010 10)\
EC kontrollpanel (1110 14)\

Dessverre er de binære strengene ikke kjent. Kun E1 ingen/tom kjele er kjent. TidenFølgende parenteser har blitt bestemt gjennom testing, men er ikke sikre.

Pinneavbruddet skal kun tildeles ved problemer. Pin D5 er forhåndstildelt for den første induksjonstoppen. Ingen pinneavbrudd er nødvendig ved normal bryggedrift.
