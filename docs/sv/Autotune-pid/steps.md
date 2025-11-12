# AutoTune Steg för steg

Den praktiska proceduren AutoTune ser ut så här:

![AutoTune](/docs/img/IDS-AutoTune.jpg)

1. Fyll din mäskbryggare med en typisk mängd vatten

    a. En typisk mängd motsvarar en pannfyllning bestående av huvudgjutning och fyllning

    Exempel: 20 l huvudgjutning och 5 kg fyllning resulterar i en typisk mängd på 25 l vatten för AutoTune-processen

    b. Slå på mixern
2. Ställ in en AutoTune måltemperatur

    a. måltemperaturen bör vara 50°C eller mer.

    b. Måltemperaturen bör vara minst 10°C över den aktuella verkliga temperaturen.

3. Aktivera "PID AutoTune"
4. Aktivera "AutoTune felsökning"
5. Spara den här inställningen
6. Genom att klicka på strömknappen startar AutoTune-processen.

![AutoTune2](/docs/img/IDS-AutoTune-start.jpg)

AutoTune-processen består av två faser. Fas 1 är uppvärmning till måltemperaturen. När måltemperaturen uppnås stängs hällen av. Måltemperaturen överskrids ibland betydligt med 2-3°C. Att markant överskrida måltemperaturen är nödvändigt för AutoTune-processen. Detta följs av en nedkylningsfas under måltemperaturen. Dessa två faser upprepas 5 gånger. Beroende på miljön tar AutoTune-processen relativt lång tid (90 minuter eller mer). Det mesta av tiden behövs under avkylningsfaserna. Ju bättre en bryggkokare är isolerad, desto längre varar AutoTune-processen eller kylfasen. Processen AutoTune bör utföras vid en typisk mäsktemperatur på ca. 60°C. Den aktuella statusen visas i kolumnen "AutoTune Process 0/5". Det första numret är det aktuella steget och det andra numret är antalet AutoTune steg som förväntas krävas. Uppmätta värden bestäms under AutoTune-processen. De uppmätta värdena kontrolleras ständigt. Om ett uppmätt värde visar en avvikelse upprepas mätningen. Om det upprepas, visas "AutoTune Process 6/5". Maximalt 20 repetitioner genomförs. Resultatet av AutoTune visas i GGM IDS-inställningarna på fliken PID Manager:

![AutoTune3](/docs/img/IDS-AutoTune-erg.jpg)

AutoTune-processen är klar och de fastställda systemparametrarna sparas automatiskt.\
Resultatet av AutoTune är förstärkningsfaktorn Ku (slutlig förstärkning) och periodens varaktighet (slutperiod). P, I och D beräknas från dessa två parametrar. Olika algoritmer finns tillgängliga för att beräkna PID-värdena. Brautomat använder en PID-algoritm som är optimerad för bryggning (faktiskt för att värma vätskor) och används även till exempel i CraftBeerPi-tillägget PIDBoil.

_Tips: Efter AutoTune-processen bör konfigurationen sparas med hjälp av en säkerhetskopia._

När AutoTune-processen har avslutats och "AutoTune debug" har aktiverats, kan loggen "AutoTune\_log.txt" ses via Explorer. All information registreras i denna loggfil.\
Resultatet av AutoTune sparas i JSON-format i filerna "idsAutoTune.txt", "sudAutoTune.txt" eller "hltAutoTune.txt". Filerna är enbart informativa och krävs inte för drift. I dessa filer är PID värdena listade enligt olika beräkningsmetoder.

Följande beräkningsmetoder listas i loggen:

INTEGRAL PID\
NÅGRA ÖVERSKJÄDER PID\
INGEN ÖVERSKOTT PID\
ZIEGLER NICHOLS PID\
ZIEGLER NICHOLS PI\
TYREUS LUYBEN PID\
TYREUS LUYBEN PI\
CIANCONE MARLIN PID\
CIANCONE MARLIN PI

De beräknade värdena för de olika algoritmerna kan matas in i inställningarna med valet INDIVIDUAL_PID på raderna P, I och D. Detta bör dock bara leda till bättre resultat i sällsynta fall.
