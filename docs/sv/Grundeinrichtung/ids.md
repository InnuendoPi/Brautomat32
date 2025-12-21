# Ställ upp hällen

## Skapar mäskbryggaren

I det första avsnittet _Maischeplan_ skapas MashSud-pannan med hjälp av kugghjulet uppe till höger.

![Skapa vattenkokare för mäsk](/docs/img/IDS-einrichten.jpg)

## Konfigurera en häll

Först måste en häll konfigureras. En GGM IDS induktionshäll ställs in i den här grundinställningen.

Den första inställningen gäller IDS-typen, där IDS1 eller IDS2 kan väljas. Detta följs av tre kontrollparametrar:

* PIN vit [relä] - Standard: D7
* PIN gul [Kommando] - Standard: D6
* PIN blå [Avbrott] - Standard: - (oanvänd) eller D5

Dessa GPIO:er (D5, D6 och D7) är förkonfigurerade för GGM IDS-anslutningskabel med JST-HX-uttag eller skruvplint.

Därefter måste en temperatursensor tilldelas MashBud-kokaren. Valet görs från en lista över sensorer som redan har ställts in. I denna grundinställning är endast sensorn _Sensor IDS2_ närvarande, som väljs därefter.

_Obs_: _En temperaturgivare måste vara permanent tilldelad en spishäll. Givarvärdet kallas den faktiska temperaturen eller aktuell temperatur och jämförs kontinuerligt med vilotemperaturen (måltemperaturen) under mäskningen._

![Konfigurera mäskbryggare](/docs/img/IDS-konfigurieren.jpg)

Parametrarna på fliken "Temperaturkontroll" förklaras i detalj i avsnittet "Alla parametrar". För grundinställningen antas standardvärdena initialt.

![Konfigurera mäskbryggare](/docs/img/IDS-temperaturen.jpg)

## Konfigurera PID-kontrollen

Efter den grundläggande konfigurationen måste styrenheten PID ställas in på fliken PID Manager. Styrenheten PID beräknar automatiskt den effekt som krävs för att hällen ska få mäsktemperaturen (faktisk temperatur) till vilotemperaturen. En exakt PID-konfiguration säkerställer att vilotemperaturen förblir konstant under hela viloperioden.

Regulatorn PID är inställd med två parametrar:

* Ku (ultimate gain) – förstärkningsfaktor
* Pu (ultimate period) – periodens längd

PID-parametrarna P, I och D beräknas från dessa två värden. Dessa parametrar är individuella för varje bryggsystem och bestäms med AutoTune-processen. AutoTune-processen beskrivs i detalj i avsnittet "AutoTune steg för steg.

Följande värden för Ku och Pu anges för denna grundläggande inställning. PID inställningsregeln _IDS PID Mode_ väljs sedan:

![IDS](/docs/img/IDS-AutoTune-erg.jpg)

Så snart värdena för Ku och Pu matas in, bestämmer den valda PID-algoritmen automatiskt de tre värdena P, I och D. En detaljerad förklaring av alla parametrar kommer senare.

## Startvärden för olika pannstorlekar

För en 36L vattenkokare med cirka 20L mäskvolym:

```text
Amplifieringsfaktor Ku (ultimativ förstärkning): 182
Periodens varaktighet Pu (sista perioden): 2245
```

För en 70L vattenkokare med över 50L mäskvolym:

```text
Amplifieringsfaktor Ku (ultimativ förstärkning): 225
Periodens längd Pu (sista perioden): 1500
```

## Slutförande av grundläggande konfiguration

När du har sparat inställningarna är den grundläggande konfigurationen klar. Du kan nu brygga med en temperatursensor och en mäskkokare.

_Obs: En mäskplan krävs också för själva bryggprocessen._
