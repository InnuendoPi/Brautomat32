# AutoTune Krok za krokem

Praktický postup AutoTune vypadá takto:

![AutoTune](/docs/img/IDS-AutoTune.jpg)

1. Naplňte varnou konvici typickým množstvím vody

    a. Typické množství odpovídá náplni kotle sestávající z hlavního odlitku a náplně

    Příklad: 20 l hlavního odlitku a 5 kg náplně vede k typickému množství 25 l vody pro proces AutoTune

    b. Zapněte mixér
2. Nastavte cílovou teplotu AutoTune

    a. cílová teplota by měla být 50 °C nebo více.

    b. Cílová teplota by měla být alespoň o 10 °C vyšší než aktuální skutečná teplota.

3. Aktivujte „PID AutoTune“
4. Povolte „AutoTune ladění“
5. Uložte toto nastavení
6. Kliknutím na tlačítko napájení spustíte proces AutoTune.

![AutoTune2](/docs/img/IDS-AutoTune-start.jpg)

Proces AutoTune se skládá ze dvou fází. Fáze 1 je ohřev na cílovou teplotu. Po dosažení cílové teploty se varná deska vypne. Cílová teplota je někdy výrazně překročena o 2-3°C. Pro proces AutoTune je nutné výrazné překročení cílové teploty. Následuje fáze chlazení pod cílovou teplotu. Tyto dvě fáze se opakují 5x. V závislosti na prostředí trvá proces AutoTune relativně dlouho (90 minut nebo více). Většinu času je potřeba během fází chlazení. Čím lépe je varná konvice izolována, tím déle trvá AutoTune proces nebo fáze chlazení. Proces AutoTune by měl být prováděn při typické teplotě rmutu cca. 60 °C. Aktuální stav je zobrazen ve sloupci „AutoTune Proces 0/5“. První číslo je aktuální krok a druhé číslo je počet AutoTune kroků, které budou pravděpodobně vyžadovány. Naměřené hodnoty se zjišťují během procesu AutoTune. Naměřené hodnoty jsou neustále kontrolovány. Pokud naměřená hodnota vykazuje odchylku, měření se opakuje. Při opakování se zobrazí „AutoTune Proces 6/5“. Provádí se maximálně 20 opakování. Výsledek AutoTune se zobrazí v nastavení GGM IDS na kartě Správce PID:

![AutoTune3](/docs/img/IDS-AutoTune-erg.jpg)

Proces AutoTune je dokončen a určené systémové parametry se automaticky uloží.\
Výsledkem AutoTune je faktor zesílení Ku (ultimátní zisk) a doba trvání periody (ultimátní perioda). P, I a D se vypočítávají z těchto dvou parametrů. Pro výpočet hodnot PID jsou k dispozici různé algoritmy. Brautomat používá algoritmus PID, který je optimalizován pro vaření piva (ve skutečnosti pro ohřev tekutin) a používá se také například v addonu CraftBeerPi PIDBoil.

_Tip: Po procesu AutoTune by měla být konfigurace uložena pomocí zálohy._

Po ukončení procesu AutoTune a aktivaci „AutoTune ladění“ lze protokol „AutoTune\_log.txt“ zobrazit pomocí Průzkumníka. Všechny informace jsou zaznamenány v tomto souboru protokolu.\
Výsledek AutoTune se uloží ve formátu JSON do souborů „idsAutoTune.txt“, „sudAutoTune.txt“ nebo „hltAutoTune.txt“. Soubory jsou čistě informační a nejsou nutné pro provoz. V těchto souborech jsou hodnoty PID uvedeny podle různých metod výpočtu.

V protokolu jsou uvedeny následující metody výpočtu:

INTEGRAL PID\
NĚJAKÉ PŘESTŘELENÍ PID\
ŽÁDNÉ PŘESTŘELENÍ PID\
ZIEGLER NICHOLS PID\
ZIEGLER NICHOLS PI\
TYREUS LUYBEN PID\
TYREUS LUYBEN PI\
CIANCONE MARLIN PID\
CIANCONE MARLIN PI

Vypočtené hodnoty různých algoritmů lze zadat v nastavení pomocí volby INDIVIDUAL_PID v řádcích P, I a D. To by však mělo vést k lepším výsledkům jen ve výjimečných případech.
