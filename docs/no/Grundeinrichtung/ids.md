# Sett opp koketoppen

## Lage bryggekjelen for mos

I den første delen _Maischeplan_ lages MashSud-kjelen ved hjelp av giret øverst til høyre.

![Opprett vannkoker for mos](/docs/img/IDS-einrichten.jpg)

## Konfigurere en koketopp

Først må en koketopp konfigureres. En GGM IDS induksjonstopp er satt opp i dette grunnleggende oppsettet.

Den første innstillingen gjelder IDS-typen, hvor IDS1 eller IDS2 kan velges. Dette etterfølges av tre kontrollparametere:

* PIN hvit [relé] - Standard: D7
* PIN gul [Kommando] - Standard: D6
* PIN blå [Avbryt] - Standard: - (ubrukt) eller D5

Disse GPIO-ene (D5, D6 og D7) er forhåndskonfigurert for GGM IDS-tilkoblingskabelen med JST-HX-kontakt eller skruklemme.

Deretter må en temperatursensor tilordnes til MashBud-kjelen. Valget gjøres fra en liste over sensorer som allerede er satt opp. I dette grunnleggende oppsettet er kun sensoren _Sensor IDS2_ til stede, som velges deretter.

_Merk_: _En temperatursensor må være permanent tilordnet en koketopp. Sensorverdien refereres til som den faktiske temperaturen eller gjeldende temperatur og sammenlignes kontinuerlig med hviletemperaturen (måltemperaturen) under meskeprosessen._

![Konfigurer mash brew boiler](/docs/img/IDS-configure.jpg)

Parametrene i fanen "Temperaturkontroll" er forklart i detalj i avsnittet "Alle parametere". For det grunnleggende oppsettet blir standardverdiene i utgangspunktet tatt i bruk.

![Konfigurer mash brew boiler](/docs/img/IDS-temperaturen.jpg)

## Sette opp PID kontrolleren

Etter den grunnleggende konfigurasjonen må PID-kontrolleren settes opp i kategorien PID Manager. Kontrolleren PID beregner automatisk kraften som kreves for at koketoppen skal bringe mesketemperaturen (faktisk temperatur) til hviletemperaturen. En presis PID konfigurasjon sikrer at hviletemperaturen forblir konstant over hele hvileperioden.

PID-kontrolleren er satt med to parametere:

* Ku (ultimate gain) – gevinstfaktor
* Pu (ultimate periode) – periodelengde

PID-parametrene P, I og D beregnes fra disse to verdiene. Disse parameterne er individuelle for hvert bryggesystem og bestemmes ved hjelp av AutoTune-prosessen. AutoTune-prosessen er beskrevet i detalj i delen "AutoTune trinn for trinn.

Følgende verdier for Ku og Pu angis for dette grunnleggende oppsettet. PID-innstillingsregelen _IDS PID-modus_ velges deretter:

![IDS](/docs/img/IDS-AutoTune-erg.jpg)

Så snart verdiene for Ku og Pu er lagt inn, bestemmer den valgte PID-algoritmen automatisk de tre verdiene P, I og D. En detaljert forklaring av alle parametere vil følge senere.

## Startverdier for forskjellige kjelestørrelser

For en 36L vannkoker med rundt 20L meskevolum:

```tekst
Amplifikasjonsfaktor Ku (ultimat forsterkning): 182
Periodevarighet Pu (endelig periode): 2245
```

For en 70L vannkoker med over 50L meskevolum:

```tekst
Amplifikasjonsfaktor Ku (ultimat forsterkning): 225
Periodelengde Pu (endelig periode): 1500
```

## Fullføring av grunnleggende konfigurasjon

Etter å ha lagret innstillingene, er den grunnleggende konfigurasjonen fullført. Du kan nå brygge med en temperatursensor og en vannkoker.

_Merk: En meskeplan kreves også for selve bryggeprosessen._
