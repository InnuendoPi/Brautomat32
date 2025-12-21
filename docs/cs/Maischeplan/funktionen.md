# Funkce

V následujícím popisu je použit _vymyšlený příklad receptu_. Tento popis neobsahuje recept, ale postup pro rmutování pomocí Brautomat.

Rmutovací plán je ve formě tabulky. Tato tabulka je zpracována shora dolů varným systémem v den vaření. V příkladu receptury je linka _Rmutování 50°C_ prvním krokem rmutování a _WHP Hallertau Tradition_ je posledním krokem rmutování. Velmi důležitou funkcí v mash plánu je vlastnost ve sloupci _autoext_.

## Základní funkce

![mashplan](/docs/img/brautomat.jpg)

Pro orientaci je nejprve popsána struktura řádků tabulky. Řádek v plánu kaše představuje krok v plánu kaše. Každý řádek tabulky má tyto sloupce:

* Sloupec "Odpočinek" zobrazuje název tohoto kroku kaše.
* Sloupec "Teplota" obsahuje klidovou teplotu (v této příručce také nazývanou cílová nebo cílová teplota).
* Sloupec "Trvání" obsahuje dobu klidu (časovač), jak dlouho má Brautomat udržovat klidovou teplotu.
* Sloupec "autoext" udává, zda bude další krok automaticky pokračovat po uplynutí doby odpočinku (časovače).

Po těchto čtyřech podrobnostech o kroku rmutování jsou v každém řádku tlačítka pro úpravy s následujícími funkcemi: (zleva doprava)

![Upravit plán směsi](/docs/img/brautomat-111.jpg)

* posuňte tento řádek o jednu pozici nahoru
* posuňte tento řádek o jednu pozici dolů
* upravit tento řádek
* smazat tento řádek

Záhlaví tabulky obsahuje následující tlačítka (zleva doprava)

![Upravit plán směsi](/docs/img/brautomat-1.jpg)

* nový řádek: přidání nového kroku kaše na konec tabulky
* Smazat: smazat celou tabulku (prázdný plán kaše)
* Znovu načíst: znovu si přečtěte recept ze souboru. Změny se neuloží. Tlačítko se zobrazí modře
* Databáze: Plánovač výběru, importu, exportu a plánu kaše
* Sbalit: Sbalte a rozbalte tabulku s roztahovacím plánem

![Upravit plán směsi](/docs/img/brautomat-11.jpg)

Při úpravě řádku tabulky se tlačítka změní.

* Konec: ukončení editoru řádků bez uložení. Tlačítko je zobrazeno šedě
* Úložiště: Uložte změny v řádku tabulky v plánu kaše

Všechna tlačítka pro úpravu rmutovacího plánu jsou skryta, jakmile se spustí proces vaření. Tlačítko sbalení pro sbalení a rozbalení tabulky se skryje, jakmile se upraví plán kaše.

Spolu s ovládacími prvky Power, Play, Pause, Prev a Next je ovládání vaření intuitivní. Zde zobrazený rmutovací plán je importem z kleineBrauhelfer2. Import automaticky vloží klidové teploty a doby odpočinku. Při přidávání chmele se k názvu chmele automaticky připojí alfa kyselina a množství v gramech. Kromě toho mají tyto zkratky předponu:

* VWH: přeskakování přední mladiny
* Vaření (bez přidání chmele)
* WPH: Whirlpool Hopping

Přísady, jak je znázorněno na obrázku _Vaření kvasnicového jídla 1gr_ se do rmutovacího plánu dovážejí z malého Brauherlfer2 s časem podání a množstvím.

## Upravit tabulku rmutovaného plánu

Mash plán lze změnit v Brautomat nebo zcela znovu vytvořit. Symbol tužky přepne čáru v tabulce plánu rmutu do režimu editoru.

![Upravit plán směsi](/docs/img/brautomat-3.jpg)

Nyní lze jeden po druhém měnit libovolný počet řádků tabulky. Jakmile kliknete na symbol pro úpravu plánu rmutu, tlačítko _Uložit_ se změní ze zelené na červenou. Jakmile jsou provedeny všechny změny, musí být plán kaše uložen pomocí tlačítka _Uložit_. Případně lze všechny změny zrušit pomocí tlačítka _Exit_ pro ukončení bez uložení.

Jakmile byl proces rmutování zahájen pomocí tlačítka napájení, zobrazení se změní:

![Upravit plán směsi](/docs/img/brautomat-4.jpg)

Tlačítka pro úpravy jsou skrytá. Aby byly znovu viditelné,Proces rmutování je nutné zastavit pomocí tlačítka Pauza na ovládacím prvku:

![Upravit plán směsi](/docs/img/brautomat-5.jpg)

Když je proces rmutování pozastaven, tlačítko Pozastavit v ovládacím prvku se zobrazí červeně a zobrazí se funkce úprav. Indukční varná deska se nevypne. Zbytková teplota se nadále udržuje. Pokud je časovač odpočinku aktivní, bude pozastaven. Pokud se změní plán rmutování (režim editoru), tlačítko Pozastavit pro pokračování v procesu rmutování a tlačítko Napájení jsou deaktivovány a zobrazeny šedě, dokud nebudou změny v plánu rmutování buď uloženy, nebo zahozeny (Konec).

Příklad aplikace:\
Na konci rmutovacího procesu se použije vzorek jódu k určení, že rmut ještě není normální pro jód a že je stále přítomen škrob. Sacharifikační klid při 72 °C by měl být prodloužen:

* Pozastavit proces rmutování
* Klikněte na symbol tužky v řádku Sacharifikace 72°C
* Prodlužte dobu odpočinku pro druhé zcukernění o 5 minut
* Uložit
* Klikněte na tlačítko pauzy a proces rmutování bude pokračovat s upravenou dobou odpočinku.

## Funkce a aplikace autonext

![Mash plán autonext](/docs/img/Maischeplan-autonext.jpg)

První krok rmutovacího plánu s názvem _Mashing 50°C_ má dobu odpočinku 10 minut a deaktivovaný _autonext_. Obrázek ukazuje situaci, kdy časovač odpočinku dosáhl 10 minut: Časovač odpočítával zbývající čas 00:00. Tlačítko přehrávání se automaticky změní na červenou. Vpravo dole se zobrazí zpráva toastu „Click play button“. Varná deska se vypne. Proces vaření čeká na kliknutí na tlačítko přehrávání. Webové rozhraní zobrazuje další krok, který se spustí kliknutím na Přehrát.

* Na konci pauzy s deaktivovaným _autonext_ se proces vaření zastaví a varná deska se vypne.

Druhý krok rmutování, nazvaný _Maltoserast 63°C_, má klidovou teplotu 63°C a dobu klidu 25 minut. V tomto kroku Brautomat zpočátku ovládá varnou desku na 63°C. Jakmile je dosaženo těchto 63°C, Brautomat spustí časovač. Odpočinkový časovač jsou stopky, které odpočítávají do 00:00 (0 minut : 0 sekund). Když tento časovač dosáhne doby odpočinku 25 minut, Brautomat zkontroluje vlastnost _autonext_. Pokud je aktivován _autonext_, Brautomat automaticky přeskočí na další krok v plánu mash. V tomto příkladu receptu se jedná o krok _Sacharifikace 72°C_. Krok sacharifikace má klidovou teplotu 72 °C. Brautomat automaticky zvýší výkon varné desky, aby dosáhl nové klidové teploty.

* Na konci odpočinku s aktivovaným _autoext_ proces rmutování automaticky pokračuje a varná deska zůstane zapnutá.

![Mash plán autonext](/docs/img/Maischeplan-autonext2.jpg)

Vlastnost _autonext_ v sedmém kroku _Mashing 78°C_ není aktivována. Pokud Brautomat narazí na deaktivovaný autonext, Brautomat ukončí aktuální odpočinek po uplynutí doby odpočinku a vypne varnou desku (0% výkon). V tomto stavu je tlačítko Přehrát zobrazeno červeně. Chcete-li pokračovat v procesu vaření, musíte kliknout na tlačítko Přehrát.

Zatímco v prvním příkladu _autonext_ se obvykle klikne přímo na tlačítko Play, aby se pokračovalo v kroku rmutování, ve druhém příkladu rmutování může uplynout delší čas pro lautering a lauter rest. Brautomat zůstane ve stavu „tlačítko přehrát kliknutím“. Varná deska prvního kotle zůstane vypnutá. V tomto stavu lze používat všechny servopohony a také dva další kotle.

## Rozdíl autonext a přerušení

Pokud je autonext na konci zámku deaktivováno, varná deska se vypne. Tlačítko pauza zastaví časovač odpočinku, ale varná deska zůstane zapnutá a Brautomat vypočítá požadovaný výkon pro varnou desku.

Následující části popisují volitelný Synfunkce jsou popsány. Brautomat začátečníci mohou přeskočit popis speciálních funkcí.

## Speciální funkce 0°C klid při aktivaci autonext

Speciální funkcí je klidová teplota 0°C při aktivaci autonext: Pokud je klidová teplota nastavena na 0°C a je aktivována autonext, rmutovací krok se spustí automaticky bez regulace teploty. V příkladu rmutovacího plánu je tato speciální funkce ukázána po uvaření mladiny v kroku _post-izomerizace_. V tomto okamžiku má mladina teplotu cca. 100 °C. Varná deska by měla být vypnuta a časovač pro post-izomerizaci by měl být spuštěn okamžitě:

![Speciální funkce 0°C](/docs/img/Maischeplan-Sonderfunktion.jpg)

Speciální funkce _0°C klidová teplota s aktivovaným autonext_ přesně splňuje tento požadavek: skutečná a cílová teplota jsou ignorovány a je spuštěn časovač klidu. Pokud by klidová teplota kroku po izomeraci nebyla nastavena na 0 °C, ale spíše na 95 °C, například, časovač klidu pro krok po izomeraci by se spustil pouze tehdy, když se teplota v kotli na vaření kaše ochladí ze 100 °C na 95 °C. Během post-izomerizace teplota v mladině klesá. V případě potřeby se mladina aktivně ochladí. Speciální funkce _0°C klidová teplota při aktivaci autonext_ způsobí, že varná deska zůstane vypnutá.

## Proces vaření

Základním principem varného stroje je vzestupný nálev. To zahrnuje varianty, jako je Earlův proces vaření rmutování. Další procesy vaření piva lze také implementovat pomocí vlastnosti „autonext“. Je však třeba poznamenat, že Brautomat může podporovat pouze jiné procesy vaření s „poloautomatickým“. Spuštění akce, jako je vytažení částečného rmutu, musí obsluha provést ručně. Pro Brautomat manuální znamená použití tlačítek Přehrát a Pozastavit. Pauza nula minut s deaktivovaným autonext může být použita jako spouštěč pro ruční akci.

Poznámka: Následující témata o ovládacích příkazech jsou volitelná a nejsou relevantní pro začátek s Brautomat.

## Varná konvice

Brautomat podporuje až tři varné konvice. První kotlík je nutný pro rmutovací proces. Druhá konvice je volitelná a lze ji použít například při vaření piva, jako je odvar. Třetí konvice se často používá jako náplň a je také volitelná. Použití 2. a 3. kotlíku je libovolně volitelné, pouze první kotlík je vázán na proces rmutování a konkrétně na časovač odpočinku.

Výchozí názvy pro ovládací příkazy:

* První konvice: IDS nebo MASH
* Druhý kotel: MLT nebo SUD
* Třetí kotel: HLT nebo REGUSS

## Ovládací příkazy

Druhou speciální funkcí jsou ovládací povely pro varné desky a akční členy. Syntaxe pro krok mash je.

* Jméno herce: Výkon

Napájení může být buď ZAPNUTO nebo VYPNUTO nebo číslo mezi 0 a 100 %. Stav OFF odpovídá hodnotě 0 % a ON hodnotě 100 %. Ovládací povel pro první indukční varnou desku je IDS nebo MASH. Ovládací povel pro druhou indukční varnou desku je SUD. Řídicí příkaz pro přetypování je HLT. Řídící příkaz pro akční člen je název aktuátoru.

![Příkaz ovládání ovladače](/docs/img/Maischeplan-Aktoren.jpg)

Rmutovací plán na obrázku spíná akční členy na třech místech. Míchadlo se zapne hned na začátku: Míchadlo:ZAP
Krátce před koncem rmutovacího plánu je míchadlo vypnuto: Míchadlo:VYP a doplňování je zapnuto: Doplňování:ON.

Řídicí příkaz pro akční člen může být specifikován s výkonem, např. ČERPADLO: 60. Pohonné čerpadlo se pak zapne na 60% výkon. To předpokládá, že tento akční člen byl aktivován pro PWM. Klidová teplota a doba klidu musí být nastaveny na 0 pro řídicí příkazy.

Ovládací příkaz IDS:50 nastaví maximální výstupní výkon varné desky na 50 %. Re-casting lze také zapnout na 75% výkon pomocí HLT:75.![Řídící příkaz IDS](/docs/img/sonderfunktion_sud1.jpg)

Ovládací povel SUD: Vařit hustou kaši s dobou odpočinku 10 minut a klidovou teplotou 100 stupňů provede krok kaše na druhé varné desce. Časovač klidu se spustí, jakmile je dosaženo klidové teploty.

![Řídící příkaz SUD](/docs/img/sonderfunktion_sud2.jpg)

Ovládací příkaz SUD: Vařte hustou kaši s klidovou teplotou 100 stupňů, ale bez doby odpočinku zapne druhou varnou desku, spustí ovladač PID varné desky a přeskočí přímo na další krok v plánu rmutování.

![Řídící příkaz SUD](/docs/img/sonderfunktion_sud3.jpg)

Rmutovací krok sacharifikace při 72 °C se provádí na první varné desce _Maische_. Ovladač PID reguluje požadovaný výkon pro kaši. Regulátor PID zároveň reguluje výkon potřebný pro kotel _Sud_.

Příklady:

* Míchadlo: ZAPNUTO
* Míchadlo: VYPNUTO
* RHE: 40
*IDS:75
*IDS: VYPNUTO
* HLT: 100
* HLT:OFF
* SUD: Uvařte hustou kaši
* SUD: 60

_Poznámka: Ovládací příkazy lze použít k současnému ovládání rmutovacích, varných a HLT kotlů. Aktivní však může být pouze jeden časovač odpočinku. Časovač odpočinku je vždy spojen s první varnou deskou „mash“._

### Příklad řídicího příkazu IDS

Jako příklad je uvedena následující konfigurace pro GGM IDS nebo kotel MashSud:

![Řídící příkaz IDS](/docs/img/aktoren_schalten4.jpg)

Maximální výstupní výkon je přednastaven na 100 %. Teplota „Přechod do vaření“ je 95 °C. Od této teploty je maximální výstupní výkon GGM IDS pouze 80 %.

Plán rmutování na obrázku začíná krokem „Zahřívání hlavního nálevu“. Indukční varná deska GGM IDS by ohřívala vodu s výkonem "Max. Výkon IDS" (parametr v registru regulace teploty), tedy se 100 %.

![Řídící příkaz IDS](/docs/img/aktoren_schalten2.jpg)

Časovač odpočinku začíná na 59°C. Doba odpočinku je nula minut. Brautomat přeskočí na další řádek ke kroku 2.
Řídící příkaz IDS:65 nastaví maximální výkon IDS na 65 %. Brautomat přeskočí na další řádek ke kroku 3.
Nyní se teplota ohřeje z 59°C na cílovou teplotu v kroku „rmutování“. Maximální výkon IDS je 65 %.

V následujících krocích rmutování je zachován maximální výstupní výkon 65 %. Dokud Brautomat nesplní řídicí příkaz IDS:100 po kroku rmutování.

![Řídící příkaz IDS](/docs/img/aktoren_schalten3.jpg)

Řídicí příkaz změní maximální výstupní výkon IDS na 100 %. Mladina se nyní zahřívá na 100% výkon na teplotu „přechodu k varu“ 95 °C (viz výše). Od 95°C se GGM IDS přepne na 80% výkon. 80 % odpovídá parametru „Výkon z přechodu“.

Ovládacími povely pro IDS lze zabránit připálení rmutu nebo převaření mladiny, zejména u menších objemů kotlíků.

### Příklad: Odvar se dvěma plotnami

![Řídící příkaz IDS a SUD](/docs/img/sonderfunktion_sud4.jpg)

Vzhledem k omezení _první rmutovací kotlík musí být vždy provozován s dobou klidu_, existuje pro procesy odvaru jednoduchý postup: částečná rmut, která se má uvařit, musí jít do kotlíku _Mash_ a částečná rmut, která má být udržována na teplotě, musí jít do kotlíku _Sud_.

### Příklad použití energie pro varnou desku

Udává se náplň 7 kg a hlavní náplň 28 l. Celková hmotnost je 35 kg\

Pomocí speciální funkce IDS: <Výkon v %> lze výkon varné desky nastavit tak, aby rychlost ohřevu při rmutování byla 1°C za minutu.

![Ovládací příkaz MASH power](/docs/img/IDS-Sonderfunktion.jpg)

_Vysvětlení metody výpočtu viz: Parametry GGM IDS - Řízení teploty - Maximální výkon IDS._

```json

    Požadovaný výkon P = m * c * T / (t * w)
    Výraz c * T / (t * w) je u indukční varné desky nahrazen hodnotou 75 při účinnosti 80 %.
    Hmotnost m je 35 kg
    P = 35 x 75 = 2625
    2625W je 75% z max. výkon 3500W (2625/3500 * 100 = 75 %)

```

Ve výše uvedeném rmutovacím plánu je maximální výkon IDS nastaven na 75 % po rmutování v řádku 2 pomocí řídicího příkazu "IDS:75". Pomocí tohoto ovládacího příkazu se provádějí následující kroky (zbytek maltózy, zcukernění a rmutování) s maximálním výkonem 75 %. Po mashování musí uživatel kliknout na tlačítko přehrávání (autonext zakázáno). Zde začíná scezení, následuje scezení atd. Proces spařování pokračuje ovládacím povelem „IDS:100“. Maximální výkon IDS je nastaven na 100% výkon pro var mladiny.

_Poznámka: Zde použitá účinnost 80 % pro indukční varnou desku je průměrná hodnota. Izolovaná a zakrytá nádrž na rmut (víko nebo míchadlo) může mít vyšší účinnost._

## Změna profilu speciální funkce

Další speciální funkcí je změna profilu. Příkazy jsou IDSPROFIL, SUDPROFIL a HLTPROFIL. Název profilu následuje za dvojtečkou.

Příklady:

IDSPROFILE:Profil68l\
IDSPROFIL:Profil 36l

Tímto speciálním příkazem se vymění všechny parametry kotle. Tímto způsobem lze uložit různé hardwarové profily. V procesu vaření odvaru nabízí speciální příkaz snadný způsob použití nastavených parametrů se stejným kotlem a menším objemem.

Speciální příkazy IDS: a IDSPROFIL: mají různé účinky: Speciální příkaz IDS: mění maximální výstupní výkon. Všechny ostatní parametry zůstávají stejné.

_Poznámka: speciální příkaz IDSPROFILE v mash plánu se zruší, pokud typ zařízení (IDS1, IDS2 nebo relé) není identický._

## Příklad dne vaření

Nakonec jsou speciální objednávky, přídavky chmele a obecný postup shrnuty pomocí dne vaření. Tento příklad je založen na následujícím nastavení:

Prostředí dvou kotlů:

* varná konvice (objem 70l, GGM IDS2 s 3,6kW)
* přetavená konvice (rychlovarná konvice 35l, 2kW)

Dva herci:

* míchadlo (řízené relé)
* kruhové topné těleso (v bojleru na vaření rmutu, 3,5 kW)

Mash plán:

![ukázkový den vaření kaše](/docs/img/example_control_commands1.jpg)

Příklad ukazuje, jak snadné je zapínat a vypínat akční členy pomocí speciálních příkazů nebo jak jsou speciální příkazy integrovány do plánu rmutu. V prvním kroku rmutování se zapne míchadlo. Brautomat provede speciální příkaz a okamžitě přejde na další krok v plánu mash. Kaše v kroku byla nakonfigurována na dobu 1 minuty a autonext byla deaktivována. V tomto kroku se slad přidá do varné vody. Krok trvá déle než minutu, ale podle náplně se dopředu neví, jak dlouho bude rmutování trvat. Po minutě rmutování Brautomat vypne varnou desku a zobrazí tlačítko přehrávání červeně (deaktivováno autonext). Brautomat nyní „čeká“, dokud nebude krok dokončen a neklikne se na tlačítko přehrávání. Po vypnutí varné desky a přidání sladu bude teplota míchání rmutu pod 55 °C. Tato procedura je vhodná například pro uvolněné pomalé přidávání sladů nebo pro krátký proteinový odpočinek.

_Alternativa:_ aktivujte vlastnost autonext a nastavte dobu odpočinku na 5 minut. V tomto případě Brautomat udrží rmutovací teplotu po dobu 5 minut (rmutování) a poté se automaticky zahřeje na další klid.

Dalším krokem je maltózový zbytek. Regulátor PID reguluje výkon potřebný k dosažení cílové teploty v rmutu a udržuje ji po dobu 40 minut. Na řádku 4 se pomocí speciálního příkazu zapne doplňování. Cílová teplota pro náplň je 75 °C a doba trvání je 0 minut. Brautomat spouští regulátor PID pro přelití kotle a na pozadí reguluje požadovaný výkon. NaV tomto bodě plánu rmutování jsou aktivní dva regulátory PID: regulátor PID pro varnou konvici a PID regulátor pro dolévání. Brautomat po zapnutí skočí přímo na další krok.

V rmutovacím plánu se servopohon prstencového topného tělesa zapíná nebo spíná jednou speciálním příkazem _RHE:ON_ a jednou _RHE:50_. ON převádí Brautomat se 100% výkonem, zatímco 50 je zpracováno odpovídajícím způsobem s 50% výkonem. Konvice MashSud má maximální objem 70 litrů. Kruhové topné těleso podporuje varnou desku během vaření s 50% výkonem pro intenzivní vaření: 100% výkon varná deska (3,5 kW) plus 1,75 kW kruhové topné těleso (50 %). Na konci vaření se kruhové topné těleso vypne speciálním příkazem _RHE:OFF_.

Načasování přidání chmele se vypočítá na základě doby jejich vaření. Rozvrh kaše má celkovou dobu vaření 90 minut. Z toho se 30 minut vaří bez přidání chmele. Celková doba vaření jednotlivých chmelových přídavků se sčítá. Tj. první přídavek chmele _Hall. Tradice 6,0 % 37,2 g_ se vaří celkem 60 minut:

* Doba trvání kaše krok hop přidání Hall. Tradice 37,2g: 30 minut
* Doba trvání kaše krok hop přidání Hall. Tradice 31g: 15 minut
  * Na konci tohoto rmutovacího kroku je první přídavek chmele (37,2 g) v mladině po dobu 45 minut
* Doba trvání kaše krok hop přidání Hall. Tradice 30g: 10 minut
  * Na konci tohoto kroku rmutování je první přidání chmele (37,2 g) 55 minut a druhé 25 minut v mladině
* Doba trvání kaše krok hop přidání Hall. Tradice 7g: 5 minut
  * Na konci tohoto kroku rmutování je první přídavek chmele (37,2 g) 60 minut, druhý 24 minut a třetí 15 minut v mladině

Zatímco nástroje jako kleineBrauhelfer, BrewFather nebo MMum vždy indikují celkovou dobu vaření pro každý jednotlivý přídavek chmele, Brautomat musí poskytovat alarm nebo indikaci, kdy je třeba přidat do mladiny během vaření chmel.

_Rozšíření:_ Vysvětlení dávek chmele je rozšířeno tak, aby zahrnovalo dvě nebo více dávek současně:

![ukázkový den vaření kaše](/docs/img/example_control_commands3.jpg)

Chmel by měl být přidán 10 minut před koncem varu. Tradice 6,0% 30g_ a kvasnicová potrava _Výživné kvasnice_ se do mladiny přidávají současně. Obrázek ukazuje, jak jednoduchý je postup: před dávkou s trváním se podávají současné dávky s trváním 0 minut.

Předposlední krok po izomerizaci využívá speciální funkci cílové teploty 0°C. Tímto krokem rmutování se varná deska vypne. Speciální funkce klidová teplota 0°C způsobí, že Brautomat okamžitě spustí časovač odpočinku na 10 minut. V tomto okamžiku má mladina teplotu cca. 100°C a pomalu se ochlazuje. Protože následující krok zahrnuje přidání aromatického chmele při 78 °C, je mladina aktivně ochlazována během 10minutové doby odpočinku po izomeraci.

Graf pro rmutovací plán:

![ukázkový den vaření kaše](/docs/img/example_control_commands2.jpg)
