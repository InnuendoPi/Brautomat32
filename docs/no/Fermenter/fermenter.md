# Fermenteringsmodus

I fermenteringsmodus behandler Brautomat32 gjæringsplanen ovenfra og ned på samme måte som meskeplanen. controller Deck har de samme funksjonene.

![Fermenter Dashboard](/docs/img/fermenter_dash.jpg)

Behandlingen av trinnene har en viktig forskjell:

Det første trinnet i gjæringsplanen startes når måltemperaturen er nådd. Dette er vanligvis tidspunktet da gjæren tilsettes vørteren. Alle påfølgende trinn i gjæringsplanen starter umiddelbart, uavhengig av faktisk temperatur.

For å sette den opp, kan en GPIO settes opp for kjøling og en GPIO for oppvarming. Enten kjøling eller oppvarming er valgfritt.

![Gjæringsinnstilling](/docs/img/fermenter_set.jpg)

Fermenteringsbeholderen har tre forskjellige tilstander: kjøling, oppvarming og tomgang. Når statusen til kjøling eller oppvarming endres, starter en pause. Under pausen endres ikke statusen til fermenteringsbeholderen.

* Gammel statuskjøling og ny statuskjøling: ingen pause. Kjølingen forblir slått på
* Gammel statusvarme og ny statusvarme: ingen pause. Oppvarmingen forblir på
* Gammel status kjøling og ny status oppvarming: pause 120s
* Gammel status oppvarming og ny status kjøling: pause 120s

## Rampe

Et fermenteringstrinn er spesifisert med en start- og en slutttemperatur. I den første figuren i denne delen er temperaturen i det første fermenteringstrinnet 18°C. Dette betyr selvfølgelig at gjæringstemperaturen forblir uendret i en periode på 1 dag.

I det andre fermenteringstrinnet er starttemperaturen 18°C ​​og slutttemperaturen 20°C. Varigheten for dette fermenteringstrinnet angis som 2 dager. Det er nå to måter å komme fra start- til slutttemperatur på:

Når rampen er aktivert, kontrollerer Brautomat gjæringstemperaturen lineært over den angitte varigheten for dette trinnet. I dette tilfellet heves temperaturen fra 18°C ​​til 20°C i trinn på +0,1°C over 2 dager.

Med rampen deaktivert etableres den endelige temperaturen ved starten av fermenteringstrinnet, enten ved avkjøling eller oppvarming. Når den endelige temperaturen er etablert, opprettholdes den.

## Relébyttesyklus

Relésvitsjesyklusen bestemmer hvor lenge en av kjøle-, oppvarmings- eller hviletilstandene holdes. Det tillatte verdiområdet er mellom 1000 og 240000ms. Standard er 120 000, dvs. 120 sekunder. En koblingssyklus som er for liten kan ha en negativ innvirkning på kjøleenheter.

## Skjerm

I fermenteringsmodus må MashSud-visningen (side 2) velges. Kjeloversikten og den manuelle kontrollvisningen kan ikke brukes for gjæringsmodus.
