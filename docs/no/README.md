# Brautomat

![ESP32](https://img.shields.io/static/v1?label=Arduino&message=ESP32&logo=arduino&logoColor=white&color=blue)

Brautomat er en bryggekontroll for ESP32 D1 mini. Brautomat brukes i bryggeriet og tilbyr en intuitiv, brukervennlig kontroll. Under mesking nås hviletemperaturer automatisk og hviletidene overholdes. Brautomat støtter også vørterkoking og tilsetning av humle og ingredienser. I den stigende infusjonsprosessen kan Brautomat automatisere meskeprosessen fullt ut.

> **Merk:**
Denne siden er automatisk oversatt fra den opprinnelige tyske dokumentasjonen.
\
Disse instruksjonene blir stadig utvidet, korrigert eller forbedret. Opprinnelig kunne bare GGM IDS2 induksjonstoppen styres i Brautomat-prosjektet. Fra versjon 1.48 kan også andre kokeplater kobles til i relémodus. Instruksjonene beskriver funksjonene med en GGM IDS mange steder. Bare den manuelle modusen er eksklusivt egnet for GGM IDS2. Alle andre funksjoner og alternativer er også tilgjengelige for andre koketopper.

 ---

## Oppsett av denne veiledningen

Disse instruksjonene er ikke i rekkefølge og trenger ikke å leses fra topp til bunn. Fagområdet _Programvare_, spesielt kapittelet _Mash-planen_, anbefales for å gå inn i Brautomat. Kapittelet _Meskeplanen_ inkluderer et eksempel på bryggedag på slutten av funksjonsforklaringene.

Denne veiledningen er delt inn i tre fagområder:

* Programvare: bruk av fastvare Brautomat
  * Installasjon
  * Grunnleggende oppsett
  * Meskeplanen
  * AutoTune PID
  * Sensorer, bryggekjeler, påfyll og aktuatorer
  * Fermenteringsmodus
* Maskinvare: kretskortet og passende utvidelser
  * Kretskortets struktur og tilkoblinger
  * Displayet
  * 3D-hus
  * ekstra maskinvare
* Info og vanlige spørsmål
  * liten bryggehjelper2
  * MQTT-enheten

Emneområdet _Programvare_ avsluttes med et sammendrag _Parameters at a glance_. Detaljer og informasjon er gitt for mange parametere for å forenkle konfigurasjon og bruk.

## Brautomat Utgivelsesversjon

Utgivelsesversjonen av Brautomat er kompilert med det gjeldende stabile rammeverket espressif. Denne versjonen er for produktiv bruk. Utgivelsesversjonen leveres uten loggingsmodulen. Versjonen er litt raskere. Utgivelsesversjonen bør fortrinnsvis brukes.

## Brautomat Utviklingsversjon

Utviklingsversjonen av Brautomat er kompilert med gjeldende esspressif-rammeverk. Denne versjonen leveres med loggingsmodulen. Nye funksjoner og feilrettinger er først utgitt i utviklingsversjonen. Denne versjonen kan brukes produktivt, men anbefales ikke.
