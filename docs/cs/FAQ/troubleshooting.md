# Odstraňování problémů

Tipy & Triky ... na pokračování ...

## WiFi

Rozsah WLAN mikrokontrolérů ESP je omezený. Aktuální síla signálu WLAN se zobrazí v části Systém -> Obnovit. Čím blíže je hodnota k nule, tím je signál silnější. Hodnoty od -50dBm do -75dBm jsou velmi dobré. Hodnota nižší než -80dBm je špatná a způsobí problémy. V pivovarských kuchyních se slabým signálem WiFi lze interval PID zvýšit například na 7000 ms, aby se snížilo množství dat. Pokud je síla signálu slabá, měl by být použit pouze aktivní prohlížeč (viz Události odeslané serverem níže). Důležité je vhodné umístění pro Brautomat ve WLAN (nebo další opakovač). Dobrá síla signálu nemusí nutně, ale ve většině případů vést k vyšší a stabilnější rychlosti přenosu dat.

Webové rozhraní od Brautomat je založeno na bootstrap frameworku 4.6 s Javascriptem. Požadované soubory (css, js a fonty) jsou ve flash paměti Brautomat. To má výhodu i nevýhodu. Výhodou je, že pro načtení potřebných souborů při vaření není potřeba připojení k internetu. Nevýhodou je, že v místní WLAN musí Brautomat poskytnout soubory frameworku komprimované do každého připojeného prohlížeče, jakmile je navázáno spojení. Pokud se soubor nepřenáší správně a jen velmi pomalu, například kvůli slabé síle signálu WiFi, webové rozhraní nebude fungovat správně. V tomto případě se webové rozhraní nestaví správně (pak vypadá jako textová stránka) nebo je neúplné (tabulky zůstávají prázdné). Ve většině případů stačí opětovné načtení webu (Ctrl-Shift-R).

Po aktualizaci firmwaru by měl být Brautomat vždy vypnut a vymazána mezipaměť prohlížeče.

## Prohlížeče

Brautomat je testován na Win11 s MS Edge a Firefox v aktuální verzi a také na iOS zařízeních s MS Edge a Safari. Při vývoji je preferován MS Edge. Bez ohledu na prohlížeč musí být pro adresu Brautomat aktivováno automatické přehrávání zvuku pro zprávy Toasts (audio). Adresa Brautomat by také měla být zahrnuta do výjimek v blokování pluginů prohlížeče. Zastaralé prohlížeče (např. IE8) nejsou podporovány.

Mezipaměť prohlížeče může vést k nesprávným reklamám na webu. Webové rozhraní Brautomat při volání specifikuje no-cache a no-store, ale různé prohlížeče tyto pokyny ignorují. Ruční vymazání mezipaměti prohlížeče se často spouští kombinací kláves Ctrl - Shift - Del.

## Události odeslané serverem a plány napájení a automatické zamykání klientů

Brautomat odesílá data do připojených a aktivních prohlížečů prostřednictvím událostí odeslaných serverem. K Brautomat se může současně připojit až 8 zařízení. Plány napájení nebo automatické zamykání mohou přerušit připojení. Proces vaření nebude zastaven ani přerušen, pokud dojde ke ztrátě spojení! Brautomat nadále normálně funguje. Odpojené prohlížeče prostě nedostávají žádné nové informace. Informace zahrnují teploty, aktuální krok kaše, aktuální výkon, grafy atd. Připojení událostí odeslaných serverem k Brautomat je „datový kanál“, přes který jsou informace odesílány do prohlížeče. Pokud je spojení s Brautomat přerušeno, datový kanál je ukončen. Aktivní prohlížeč rozpozná, že jeho datový kanál skončil, a po krátké době se automaticky znovu přihlásí na Brautomat.\
Registrace na Brautomat nemají žádné pořadí ani priority. Nezáleží na tom, zda je webový prohlížeč z počítače nebo tabletu připojen jako první nebo jako poslední. Proces vaření lze spustit na zařízení A, pozastavit na zařízení B, pozorovat na zařízení C a ukončit na zařízení D. Pokud jsou všechna čtyři zařízení aktivní a připojená, všechny prohlížeče zobrazují i ​​(téměř) současněidentické informace, protože každé z těchto čtyř zařízení má svůj vlastní datový kanál.

## Import receptu

Kvůli omezené paměti nemůže import receptů importovat recepty s PDF, obrázkovými přílohami nebo velmi dlouhými texty nebo vysvětleními. Pro recepty MashMalzandMore je import do kbh2 a poté export ve formátu Brautomat jednoduchým a dobrým řešením. Recepty od Brewfathera lze také dovážet.

## AutoTune

Proces AutoTune by se neměl zaměřovat na dokonalost, tj. S.v. 0,1 °C. Výchylka snímačů bývá větší. Parametr AutoTune šumové pásmo (rozptyl kolem cílové hodnoty) je dostatečně blízko cílové teplotě s hodnotou 0,3, aby velmi dobře dosáhl cílové teploty a udržoval ji po dobu klidu.\
Velmi dobře izolované varné konvice vyžadují větší datovou řadu AutoTune. V datové řadě jsou naměřené hodnoty zaznamenávány v chronologickém pořadí. Na začátku je aktuální naměřená hodnota a na samém konci řádku je nejstarší naměřená hodnota. Datová řada hodnot AutoTune říká, „kolik hodnot před aktuálním měřením se Brautomat ohlédne zpět (do minulosti), aby detekoval změnu teploty alespoň AutoTune šumového pásma (0,3)“. Pro dobře izolovaný kotel by měla být datová řada naplněna 75 měřicími body. U neizolovaného kotle stačí datová řada 50 měřicích bodů. Tyto dva parametry je potřeba upravit v závislosti na prostředí. Standardní specifikace by měly v naprosté většině případů produkovat velmi dobré hodnoty.

## Senzory a kalibrace

Senzory Dallas DS18B20 jsou nabízeny na mnoha platformách za velmi odlišné ceny. Kalibrace senzoru pomáhá minimalizovat odchylky. V každém případě by měl být senzor IDS zkalibrován, protože jsou možné odchylky několika stupňů Celsia (v závislosti na původu).\
Pokud senzor pravidelně hlásí chybu senzoru (toasty) ve webovém rozhraní, měli byste nejprve vyzkoušet jiné připojení senzoru. Tři připojení na desce pro senzory jsou ekvivalentní a nemají žádné předem určené pořadí. Pokud se vyskytnou problémy se snímačem, je třeba zkontrolovat pájecí body 3 šroubových svorkovnic a odpor 4,7 kOhm (na desce plošných spojů pod ESP).

## Přerušení pinu GGM IDS

Přerušení kolíků poskytuje zpětný kanál z indukční varné desky do Brautomat. Tento zpětný kanál je připojen k Brautomat s přerušením GPIO z ESP. Přerušení přeruší tok programu a zkontroluje podmínku přerušení.\
Indukční varná deska GGM IDS nepřetržitě vysílá přibližně každých 300 milisekund přerušení: buď signál „vše je v pořádku“ (0000) nebo chybový kód (např. 0010 pro žádný kotel nebo prázdný kotel).

Část sériového výstupu na přerušení pinu:

```text
10:00:00:174 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:543 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:864 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:209 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:554 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
```

Sériový výstup na pin přerušení jasně ukazuje, že indukční varná deska neustále posílá „vše v pořádku“. Brautomat však při každém přerušení (přibližně každých 300 ms) přeruší svou práci a zkontroluje stav přerušení. Přerušení pinů by se proto mělo používat pouze pro odstraňování problémů.

Následující přerušení jsou popsána v příručce GGM IDS2:

E0 ne/prázdný kotel (0010 2)\
Chyba obvodu E1 (0011 3)\
E3 Přehřátí (0101 5)\
E4 teplotní senzor (0110 6)\
E7 nízkonapěťová ochrana (1001 9)\
Přepěťová ochrana E8 (1010 10)\
Ovládací panel EC (1110 14)\

Bohužel binární řetězce nejsou známy. Je znám pouze E1 ne/prázdný kotel. ČasNásledující závorky byly určeny testováním, ale nejsou jisté.

Přerušení pinů by mělo být přiřazeno pouze v případě problémů. Pin D5 je předem přiřazen pro první indukční varnou desku. Při normálním spařování není vyžadováno žádné přerušení kolíku.
