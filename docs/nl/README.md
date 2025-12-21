# De Brautomat

![ESP32](https://img.shields.io/static/v1?label=Arduino&message=ESP32&logo=arduino&logoColor=white&color=blue)

De Brautomat is een zetregelaar voor de ESP32 D1 mini. De Brautomat wordt gebruikt in de brouwerij en biedt een intuïtieve, gebruiksvriendelijke bediening. Tijdens het maischen worden de rusttemperaturen automatisch bereikt en worden de rusttijden aangehouden. De Brautomat ondersteunt ook het koken van wort en het toevoegen van hop en ingrediënten. Bij het oplopende infusieproces kan de Brautomat het maischproces volledig automatiseren.

> **Opmerking:**
Deze pagina is automatisch vertaald vanuit de originele Duitse documentatie.
\
Deze instructies worden voortdurend uitgebreid, gecorrigeerd of verbeterd. Oorspronkelijk kon alleen de GGM IDS2 inductiekookplaat worden bediend in het Brautomat-project. Vanaf versie 1.48 kunnen ook andere kookplaten in relaismodus worden aangesloten. De instructies beschrijven op veel plaatsen de functies met een GGM IDS. Alleen de handmatige modus is exclusief geschikt voor de GGM IDS2. Alle overige functies en opties zijn ook voor andere kookplaten beschikbaar.

 ---

## Lay-out van deze handleiding

Deze instructies staan in willekeurige volgorde en hoeven niet van boven naar beneden te worden gelezen. Het onderwerpgebied _Software_, vooral het hoofdstuk _Het mashplan_, wordt aanbevolen voor toegang tot de Brautomat. In het hoofdstuk _Het maischplan_ is aan het einde van de uitleg van de functies een voorbeeld van een brouwdag opgenomen.

Deze gids is onderverdeeld in drie onderwerpen:

* Software: het gebruik van firmware Brautomat
  * Installatie
  * Basisopstelling
  * Het maischplan
  * AutoTune PID
  * Sensoren, brouwketels, navullingen en actuatoren
  * Vergistermodus
* Hardware: de printplaat en bijbehorende uitbreidingen
  * De printplaatstructuur en aansluitingen
  * Het scherm
  * 3D-behuizing
  * extra hardware
* Info en veelgestelde vragen
  * kleine brouwhulp2
  * het MQTT-apparaat

Het onderwerpgebied _Software_ wordt afgesloten met een samenvatting _Parameters in één oogopslag_. Voor veel parameters worden details en informatie verstrekt om de configuratie en het gebruik te vereenvoudigen.

## Brautomat Releaseversie

De releaseversie van Brautomat is gecompileerd met het huidige stabiele raamwerk espressif. Deze versie is voor productief gebruik. De releaseversie wordt geleverd zonder de Logging-module. De versie is iets sneller. Bij voorkeur moet de releaseversie worden gebruikt.

## Brautomat Ontwikkelingsversie

De ontwikkelingsversie van Brautomat is gecompileerd met het huidige esspressif-framework. Deze versie wordt geleverd met de Logging-module. Nieuwe functies en bugfixes worden voor het eerst uitgebracht in de ontwikkelingsversie. Deze versie kan productief worden gebruikt, maar wordt niet aanbevolen.
