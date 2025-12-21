# KleinerBrauhelfer2

Od verze 2.5.0 má program [ kleineBrauhelfer2](https://kleiner-brauhelfer.de/) exportní filtr pro Brautomat. Vývoj a design receptury je možný v každém myslitelném detailu s malou pomůckou pro vaření piva2. S cheat sheet nabízí kbh2 velmi dobrý a užitečný vývojový diagram pro praktickou implementaci v pivovarské kuchyni. S exportním filtrem pro Brautomat lze převzít všechny kroky.

## Plán rmutování karet kbh2

V záložce Plán rmutu nabízí kbh2 čtyři různé způsoby přidávání sladů do rmutu: rmutování, ohřev, vaření a odvar. Všechny čtyři typy jsou podporovány v Brautomat. Typ rmutování je automaticky vložen s vypnutým autonext. Zahřívání a vaření s aktivovaným autonext. Odvar se provádí s deaktivovaným autonext.

![Vaření](/docs/img/kbh2-maischplan.jpg)

 Brautomat vyžaduje krok rmutování k rozpoznání konce rmutování a přechodu do lauteringu. V plánu rmutování kbh2 by měl být na konci přidán krok rmutování typu „zahřívání“ s teplotou 76 °C nebo vyšší a dobou trvání 1 minuty. V této kombinaci je rmut rozpoznán Brautomat a vložen s deaktivovaným autonext.

![Vaření](/docs/img/kbh2-maischplan2.jpg)

### Příklad 1: kbh2 vaření rmutovací proces Earl Scheidt

[Earl Scheid](http://hb-tauschboerse.bplaced.net/Neues_Maischverfahren.htm)

Proces vaření rmutování Earla Scheida lze velmi dobře naplánovat pomocí meineBrauhelfer2 a lze jej provádět velmi snadno a automaticky pomocí Brautomat. Vezměte prosím na vědomí, že mezi dvěma částečnými rmuty je nutný krok vaření rmutu (hlavní nalévání a sladová část 2). V závislosti na objemu sladu 2 je doporučený postup pracovat s deaktivovaným autonext pro krok vaření, abyste měli dostatek času na rmutování sladu 2 před začátkem druhého odpočinku maltózy. Případně cca. 60 °C s přímým ([TERM_10]]) ohřevem na 63 °C lze zvolit jako cílovou teplotu v mísícím kříži mezi hlavním odlitkem/sladem 1 a hlavním odlitkem/sladem 2.

### Příklad 2: odvar kbh2

Brautomat podporuje poloautomatické dekokční procesy. Pokud byla například nakreslena částečná kaše, Brautomat vyžaduje po dokončení tohoto dílčího kroku informace (klikněte na Přehrát). Vytváření receptů v kbh2 a jejich import do Brautomat usnadňují dny vaření s odvarem. Popis možností naleznete v pokynech od kleineBrauhelfer2.

## Vaření na kartě kbh2

5 druhů přídavku chmele přední mladina, začátek varu, var, konec varu a šlehání se odeberou z malé varné pomůcky2 a zahrnou se v požadovaném pořadí do rmutovacího plánu Brautomat.

Časová specifikace v kbh2 na záložce Vaření znamená „jak dlouho se vaří chmel“. Doba vaření mimo jiné určuje: Hořkost a aroma. Viz také sbírka vzorců v kbh2.
Časová specifikace kbh2 "jak dlouho se vaří přídavek chmelu" se při importu do Brautomat převede na časovou specifikaci "v jaké době se přídavek chmele uskuteční".

![Vaření](/docs/img/hopfen.jpg)

### Udělejte si trochu matematiky tam a zpět

Přídavek skoku je znázorněn na obrázku kbh2. První chmelový přídavek je „Hallertauer Perle 7% 2020“ s dobou varu 65 minut. V této souvislosti je důležitý druhý parametr: na levé straně je celková doba vaření označena zeleně jako 80 minut. Takže sladina se vaří bez chmele po dobu 15 minut. Druhým přídavkem chmele je chmel "Hallertauer Tradition 5,7% 2020" s dobou varu 15 minut. V posledních 15 minutách vaření mladiny zbývá Hallertau Perle ještě 15 minut vaření z původních 65 minut a druhý přídavek chmele Hallertau Tradition se vaří 15 minut ze zbývajících 15 minut doby vaření. Poslední přídavek chmele se přidává na naklepání, tedy po ukončení varu.

Úkolem Brautomat je udávat čas přidávání chmele během vaření a ideálně s aktustimalý signál, který vám připomene přidání chmele.

V tomto příkladu je uvedena celková doba vaření 80 minut a první přidání chmele „Hallertauer Perle“ s dobou vaření 65 minut. To má za následek rozdíl 15 minut doby vaření bez přidání chmele. První krok, vaření mladiny, trvá 15 minut. Nyní musí být provedeno první přidání chmele. Druhý chmelový přídavek „Hallertauer Tradition 5,7 % 2020“ má dobu vaření 15 minut. Z 65 minut je 15 minut Hallertau Pearl a Hallertau Tradition dohromady v mladině. 65 minut mínus 15 minut má za následek interval mezi přidáváním chmelu 50 minut. Přídavek chmele Hallertauer Perle musí být přidán 50 minut před přidáním chmele Hallertauer Tradition.

Poslední várka chmele „Hallertauer Tradition 5,7 % 2020“ je dána k naklepání. Když ho vyklepnete, vaření je hotové. Přidání chmele se tedy nepočítá do celkové doby vaření.

![Vaření](/docs/img/hopfengaben.jpg)

Stejně se chová i přídavek chmele. Doba po izomeraci je 10 minut. Přidání chmele „Hallertauer Tradition 5,7 % 2020“ pro šlehání s dobou varu -5 minut je součástí post-izomerizace.

_Tip: Pokud jsou přidány dva přídavky chmelení současně, první čas přidání chmelu je nastaven na 0 minut a druhý přídavek chmelení je nastaven na skutečný čas přidání. Logika je jednoduchá podle výše uvedeného výpočtu: interval mezi dvěma přídavky skoku do stejného zeo bodu je 0 minut._

Přídavky z kbh2 ze záložek Rmutování a Vaření se chovají stejně jako přídavky chmelu. Aditiva z úpravy vody a fermentace kbh2 tabs nejsou podporována.
