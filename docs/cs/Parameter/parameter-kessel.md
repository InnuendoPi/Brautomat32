# Parametry varné desky

## Ovládání teploty

### Maximální výkon

Tento parametr popisuje maximální výstupní výkon varné desky. Výchozí hodnota je 100 %. Tento parametr se používá, pokud je na varné desce použita malá konvice o objemu např. 20l. Snížením výkonu lze předejít příliš rychlému zahřátí a převaření. Parametry „Max. výkon“ a „Výkon z přechodu“ by měly být při použití malých varných konvic sníženy společně.

Na konci této kapitoly najdete [dva příklady pro výpočet požadovaného výkonu](https://innuendopi.gitbook.io/brautomat32/info-5/parameter-ggm-ids#berechnung-der-erforderlichen-leistung).

### Rozdíl teploty k cíli

Tento parametr popisuje rozdíl od klidové teploty (nastavené hodnoty), při které by se měl časovač spustit pro odpočinek. Výchozí hodnota je 0,3 °C. V procesu rmutování umožňuje regulátor PID velmi přesné řízení teploty. Klidové teploty je dosaženo s přesností +-0,2°C tím, že regulátor PID řízeným způsobem snižuje dodávku energie před dosažením klidové teploty. Snížení dodávky energie má vedlejší účinek, že poslední krok k dosažení klidové teploty trvá déle. Přesně zde vstupuje do hry parametr „Delta k cíli“: Pokud má být například dosaženo klidové teploty 63 °C a aktuální teplota je 62,7 °C, pak by se časovač odpočinku spustil při teplotní deltě k cílové hodnotě 0,3 °C. Ve vztahu k individuálnímu spařovacímu systému lze použít delta, aby se zabránilo nechtěnému prodloužení doby odpočinku.

### Přechod na vaření [°C]

Tento parametr popisuje teplotu, při které by měl regulátor PID detekovat, že se mladina vaří. Výchozí hodnota je 95°C. Tento parametr nepopisuje teplotu, při které se mladina začíná vařit. Tento parametr popisuje teplotu, při které Brautomat deaktivuje ovladač PID a ovládá varnou desku se zadaným výkonem "výkon z přechodu". Na rozdíl od klidových teplot není cílem vaření přesné dosažení a udržení teploty, ale spíše plynulé vaření. Takže místo snižování výkonu je indukční varná deska při vaření provozována na konstantní výkon.

### Výkon z přechodu [%]

Tento parametr popisuje výstupní výkon varné desky od přechodu teploty do vaření. Výchozí hodnota je 100 %. Parametr "Přechod na vaření" byl použit k nastavení teploty, při které se deaktivuje ovladač PID. Parametr „Výkon z přechodu“ nyní určuje pevný výstupní výkon varné desky. V případě použití varné konvice o objemu 35l a více je vhodnou volbou výchozí hodnota 100%. V pivovarských kuchyních s malými varnými konvicemi může 100% dodávka energie způsobit převaření. V tomto případě lze maximální dodávku energie pomocí tohoto parametru snížit například na 75 %.

### Zakázat PID pro vaření [zapnuto/vypnuto]

Tento parametr určuje chování ovladače PID při vaření, když je skutečná teplota vyšší než cílová teplota. Příklad: teplota vaření byla v plánu rmutování nastavena na 98°C. Parametr "Výkon z přechodu" vypne výpočet PID z teploty "Přechod do varu". Pokud je aktivován parametr "Deaktivovat PID pro var" (výchozí), pak zůstává regulátor PID vypnutý i nad cílovou teplotou 98°C z rmutovacího plánu a je využíván výkon z parametru "Výkon z přechodu". Tento parametr je ve výchozím nastavení aktivován a umožňuje válcování.

Pokud parametr "Deaktivovat PID pro vaření" není aktivován, vypočítá požadovaný výkon regulátor PID po dosažení cílové teploty (zde 98°C). Vypočítaný výkon nad cílem-Teplota je 0%. Varná deska se v případě potřeby vypne a zabrání vyvaření.

### Výkon chyby snímače [0–100 %]

Pokud dojde k chybě snímače, například snímač není připojen nebo dojde k závadě, lze výkon varné desky upravit tak, aby se s touto chybou vyrovnal. Hodnota 100 % ignoruje chybu snímače.

Pokud je výkon nastaven na 0 % v případě chyby snímače, Brautomat pozastaví proces rmutování. Varná deska je vypnutá. Jakmile se spustí časovač odpočinku, časovač se zastaví.

Brautomat spustí zpracování chyb po 3 po sobě jdoucích nesprávných hodnotách senzoru. Senzory jsou dotazovány přibližně každých 2000 ms. To znamená, že cca. Mezi chybou snímače zprávy toastu a začátkem zpracování chyby uplyne 6 sekund.

Pokud vadný senzor znovu hlásí správné hodnoty senzoru, Brautomat automaticky pokračuje v procesu rmutování.

_Poznámka: Max. parametr power není překročen parametrem Power on sensor error. Pokud například Max. Výkon IDS byl nakonfigurován na 75 % a Výkon v případě chyby snímače na 100 %, pak efektivní maximální výstupní výkon je 75 % i v případě chyby snímače._

## PID Manažer

### Interval (SampleTime)

Tento parametr udává časový interval, ve kterém se vypočítá požadovaný výkon. Výchozí hodnota je 3000 ms. Interval se používá pro výpočet PID a v AutoTune. V pivovarských kuchyních s malými objemy může být výhodný menší interval. Čím menší je interval, tím častěji se počítá požadovaný výkon. To vede k vyššímu využití automatického brojleru. Rozsah hodnot 1000 - 7000 ms.

### PID Algoritmus

Na výběr jsou tři možnosti

* manuální režim PID: tento výběr umožňuje použití vlastních hodnot Kp, Ki a Kd
* Režim IDS PID: tento výběr vypočítá hodnoty Kp, Ki a Kd pro indukční varné desky GGM IDS na základě hodnot Ku a Pu z procesu AutoTune
* Režim relé PID: tento výběr vypočítá hodnoty Kp, Ki a Kd pro reléové varné desky pomocí hodnot Ku a Pu z procesu AutoTune

## AutoTune

### AutoTune pásmo šumu

Tento parametr se používá pro detekci extrémních hodnot (Max, Min). AutoTune šumové pásmo označuje minimální změnu od předchozí naměřené hodnoty, která musí být přítomna, aby bylo možné rozpoznat novou extrémní hodnotu. Výchozí hodnota pro GGM IDS je 0,2. Pro přetavený sporák přes relé nebo SSR je výchozí hodnota 0,5. Rozsah hodnot: 0,1 - 1,0

### AutoTune Datová řada (hloubka pohledu)

Tento parametr udává, kolik naměřených hodnot by mělo být uvažováno pro určení extremálních hodnot. Výchozí hodnota je 50 čtení. Upozorňujeme, že lze nakonfigurovat maximálně 100 naměřených hodnot. U velmi dobře tepelně izolovaných varných konvic může zvýšení datové řady na 100 naměřených hodnot zlepšit detekci extrémních hodnot ve fázi chlazení procesu AutoTune.

### AutoTune ladění

Tento přepínač aktivuje protokol AutoTune. Protokol poskytuje informace, pokud proces AutoTune nelze úspěšně dokončit. Pokud je aktivováno ladění AutoTune, protokol je k dispozici také při vaření.

_Těchto 10 parametrů musí být nastaveno individuálně pro každý spařovací systém. Parametry lze měnit během procesu rmutování. Při zkušebním provozu s typickým množstvím vody lze parametry snadno určit před dnem vaření._

## Profily

Brautomat může spravovat hardwarové profily. Profily lze použít, pokud existují různé kotle. Uživatelé s konvicemi různých velikostí mohou pomocí profilů vybrat konvici pro den vaření, aniž by museli ručně znovu zadávat všechny parametry. Hardwarový profil obsahuje všechna nastavení kotle.

Profily se ukládají do složky /Profiles. Profily umožňují rychlé a snadnéPřepínání mezi různými kotli. Funkce Uložit vytvoří soubor profilu s výše uvedenými parametry, zatímco funkce Odstranit odstraní soubor profilu z paměti flash.

Výchozí profil při spuštění pekárny je vždy naposledy vybraný profil.

## Výpočet potřebného výkonu

_Následující odstavec popisuje volitelné téma._

Při rmutování je žádoucí zvýšení teploty rmutu o 1 °C za minutu. Požadovaný výkon P GGM IDS lze vypočítat následovně:

požadovaný výkon P = m[kg] * 75\
stávající výkon GGM IDS P = 3500\
Faktor v procentech = požadovaný výkon: stávající výkon

### Příklad 1

V prvním příkladu je náplň 9 kg a hlavní náplň 35 l. To má za následek celkovou hmotnost

```json
m = 9 + 35 = 44
```

Hmotnost m = 44 dosadíme do zjednodušeného vzorce:

```json
P = 44 * 75 = 3300
```

K zahřátí objemu 44 kg o 1 °C za minutu je potřeba přibližně 3300 W/min. Pokud je GGM IDS provozován se 100% výkonem, tedy 3500W, je teplotního rozdílu 1°C v rmutu dosaženo za méně než 60 sekund. Aby bylo dosaženo cíle zvýšení teploty rmutu o 1 °C za minutu, musí být maximální výkon GGM IDS snížen:

```json
3300: 3500 = 0,94, což odpovídá 94 %
```

GGM IDS by musel být provozován s cca. 94-95% výkon (speciální funkce IDS:94).

### Příklad 2

V druhém příkladu je náplň 5,9 kg a hlavní náplň 26,5 l. Celková hmotnost je 32,4 kg.

```json
m = 5,9 + 26,5 = 32,4
```

Hmotnost m = 32,4 dosadíme do zjednodušeného vzorce:

```json
P = 32,4 * 75 = 2430
2430 : 3500 = 0,69
```

Zahřátí objemu 32,4 kg o 1 °C za minutu trvá přibližně 2430 W/min. GGM IDS by musel být provozován s cca. 69-70% výkonu (speciální funkce IDS:70).

### Hmotnost zjednodušení * 75?

```json
P = m[kg] * c * T / (t * w)
```

m odpovídá hmotnosti hlavního odlitku + výplně\
c odpovídá měrné tepelné kapacitě rmutu. Použije se hodnota 3600 (jednotka Joule/(kg * °C))\
T odpovídá rozdílu teplot. Používáme rozdíl 1°C\
t odpovídá času. Do rovnice vložíme 60 sekund jako čas\
w účinnost indukce (80-90%). Do rovnice se vloží hodnota 0,8

```json
c * T / (t * w) = 3600 * 1 / (60 * 0,8) = 75
```

Tímto zjednodušením dostaneme hodnotu 75.

### měrná tepelná kapacita

Zde použitý specifikum Tepelná kapacita 3600 má toleranci chyby přibližně 2 % (v závislosti na teplotě a extraktu). Sladový šrot má tepelnou kapacitu 1570 J/(kg*°C), voda má tepelnou kapacitu 4190 J/(kg*°C) v rozmezí teplot 50-80°C. Za předpokladu, že obsah vody ve sladové moučce je 6 %: (obrázky z příkladu 1)

```json
9 * 94 % * 1570 + (35 + 9 * 6 %) * 4190 = 8,97 * 1,57 + 35,54 * 4,19 = 14,08 + 148,91 = 13282,2 + 148912,6 = 1853648 = 1853648 na stupeň na 6,6 Celsia
```

Viz také [Braumagazin](https://braumagazin.de/article/berechnungen-in-der-brauerei/)
