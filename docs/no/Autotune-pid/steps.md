# AutoTune Trinn for trinn

Den praktiske prosedyren AutoTune ser slik ut:

![AutoTune](/docs/img/IDS-AutoTune.jpg)

1. Fyll vannkokeren med en typisk mengde vann

    a. En typisk mengde tilsvarer en kjelefylling bestående av hovedstøping og fyll

    Eksempel: 20 l hovedstøping og 5 kg fylling resulterer i en typisk mengde på 25 l vann for AutoTune-prosessen

    b. Slå på mikseren
2. Still inn en AutoTune måltemperatur

    a. måltemperaturen bør være 50°C eller mer.

    b. Måltemperaturen bør være minst 10°C over gjeldende faktisk temperatur.

3. Aktiver «PID AutoTune»
4. Aktiver «AutoTune debug»
5. Lagre denne innstillingen
6. Ved å klikke på strømknappen starter AutoTune-prosessen.

![AutoTune2](/docs/img/IDS-AutoTune-start.jpg)

AutoTune-prosessen består av to faser. Fase 1 er oppvarming til måltemperaturen. Når måltemperaturen er nådd, slås koketoppen av. Måltemperaturen overskrides noen ganger betydelig med 2-3°C. En betydelig overskridelse av måltemperaturen er nødvendig for AutoTune-prosessen. Dette etterfølges av en avkjølingsfase under måltemperaturen. Disse to fasene gjentas 5 ganger. Avhengig av miljøet tar AutoTune-prosessen relativt lang tid (90 minutter eller mer). Mesteparten av tiden er nødvendig under avkjølingsfasene. Jo bedre en bryggekjele er isolert, jo lenger varer AutoTune-prosessen eller kjølefasen. AutoTune-prosessen bør utføres ved en typisk mesketemperatur på ca. 60°C. Gjeldende status vises i kolonnen «AutoTune Prosess 0/5. Det første tallet er det gjeldende trinnet og det andre tallet er antallet AutoTune trinn som forventes å være nødvendig. Målte verdier bestemmes under AutoTune-prosessen. De målte verdiene kontrolleres kontinuerlig. Hvis en målt verdi viser et avvik, gjentas målingen. Hvis gjentatt, "AutoTune Prosess 6/5" vises. Det gjennomføres maksimalt 20 repetisjoner. Resultatet av AutoTune vises i GGM IDS-innstillingene i kategorien PID Manager:

![AutoTune3](/docs/img/IDS-AutoTune-erg.jpg)

AutoTune-prosessen er fullført og de bestemte systemparametrene lagres automatisk.\
Resultatet av AutoTune er forsterkningsfaktoren Ku (ultimate gain) og periodens varighet (ultimate periode). P, I og D beregnes fra disse to parameterne. Ulike algoritmer er tilgjengelige for å beregne PID-verdiene. Brautomat bruker en PID-algoritme som er optimalisert for brygging (faktisk for oppvarming av væsker) og brukes også for eksempel i CraftBeerPi-tillegget PIDBoil.

_Tips: Etter AutoTune-prosessen bør konfigurasjonen lagres ved hjelp av en sikkerhetskopi._

Når AutoTune-prosessen er avsluttet og "AutoTune feilsøking" er aktivert, kan loggen "AutoTune\_log.txt" sees via Explorer. All informasjon er registrert i denne loggfilen.\
Resultatet av AutoTune lagres i JSON-format i filene "idsAutoTune.txt", "sudAutoTune.txt" eller "hltAutoTune.txt". Filene er rent informasjonsmessige og er ikke nødvendige for drift. I disse filene er PID-verdiene listet opp i henhold til forskjellige beregningsmetoder.

Følgende beregningsmetoder er oppført i loggen:

INTEGRAL PID\
NOEN OVERSTYR PID\
INGEN OVERSHOT PID\
ZIEGLER NICHOLS PID\
ZIEGLER NICHOLS PI\
TYREUS LUYBEN PID\
TYREUS LUYBEN PI\
CIANCONE MARLIN PID\
CIANCONE MARLIN PI

De beregnede verdiene til de forskjellige algoritmene kan legges inn i innstillingene med valget INDIVIDUAL_PID i linjene P, I og D. Dette skal imidlertid bare i sjeldne tilfeller føre til bedre resultater.
