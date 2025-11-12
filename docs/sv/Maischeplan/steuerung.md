# Kontrollerna

Direkt under mäskplanen finns kontrolldäcket. Mäskprocessen styrs med de 5 knapparna Power, Play, Paus, Previous och Next.

![Kontroll](/docs/img/Buttons.jpg)

## Strömknapp

Strömknappen används för att slå på och av mäskningen. Om AutoTune-funktionen är aktiverad i inställningarna för en häll, startas eller stoppas AutoTune-processen via strömknappen.

## Spela upp knapp

Play-knappen har två funktioner i mäskningen:

1. Den första funktionen är _Starta vilotimern för den aktuella vilan_. Spela upp-knappen startar vilotimern oavsett den AKTUELLA temperaturen.\
Exempel: Om vörten redan kokar i kokningssteget, men den FAKTA temperaturen på 98,5°C är under vilotemperaturen på 100°C, startar inte vilotimern.

2. Play-knappens andra funktion är kopplad till egenskapen _autonext_: att fortsätta mäskningen med nästa vila. Uppspelningsknappen visas i rött i denna funktion. Funktionen _Fortsätt mäskningen med nästa vila_ kommer att förklaras senare i beskrivningen _autonext_ i mäskplanen.

## Pausknapp

Pausknappens funktion kan särskiljas under uppvärmningsfasen till en vilotemperatur och under en vila.

- Pausa under uppvärmningsfasen

Om bryggprocessen startas med strömknappen, är knapparna för redigering av mäskplanen dolda. Om du klickar på pausknappen kommer redigeringssymbolerna att visas igen. Under en aktiverad paus förblir hällen påslagen för att nå måltemperaturen. Pausknappen kommer då att visas i rött. Med hjälp av en paus kan mäskningsschemat justeras under bryggningsprocessen. Om vilotemperaturen uppnås under en paus startas paustimern och rasten avslutas.

- Paus under vila

Under en vila stoppas även vilotimern i mäskningen med pausknappen. Pausknappen kommer då att visas i rött. Under en paus hålls den faktiska temperaturen i förhållande till vilobörvärdestemperaturen, dvs PID-regulatorn och därmed hällen förblir aktiv. Med hjälp av en paus under vila kan mäskplanen justeras. Pausens längd förlänger den tidigare vilotiden.

## Föregående knapp

Föregående-knappen hoppar till föregående steg i mäskplanen. Om mäskningen har stoppats, återställs vilotimern för den aktuella vilan och startas om.

##Nästa-knapp

Knappen Nästa hoppar till nästa steg i mäskplanen eller, om det var det sista steget i planen, avslutar mäskningen.

## Kollaps-knapp

Knappen Komprimera komprimerar eller komprimerar mäskplanstabellen.

![Maischeplan](/docs/img/Maischeplan-anzeigen.jpg)

Kollapsknappen förblir synlig även efter att bryggningen startar. Alla knappar för att redigera mäskplanen är dolda efter att bryggningen startar.
