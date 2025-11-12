# AutoTune proces

Proces AutoTune určuje vhodné parametry pro varný systém tak, aby regulace teploty v procesu rmutování mohla být prováděna co nejpřesněji. Důraz je kladen na SKUTEČNÉ teploty a odpovídající CÍLOVÉ teploty. V praxi to znamená, že překmit a podkmit by měl být minimalizován.

Poznámka: Překmit (překročení nastavené teploty) o 0,5 °C je normální. V závislosti na izolaci kotle a dodané indukční energii bude teplota nadále mírně stoupat i po vypnutí varné desky.

![AutoTune4](/docs/img/IDS-AutoTune-target.jpg)

Následující popis hodnot PID slouží pouze jako pomůcka při používání firmwaru a lze jej přeskočit. Proces AutoTune je popsán od "Proces AutoTune: krok za krokem."\
Ovladač PID ovládá výkon varných desek. Je důležité určit vhodné hodnoty P, I a D. Hodnoty PID jsou individuální pro každý varný systém a prostředí. AutoTune je postup, který pomáhá určit vhodné hodnoty. Potřebný výkon varných desek, aby se dostaly ze skutečné teploty na cílovou teplotu, se vypočítá ze součtu tří hodnot: Požadovaný výkon = P + I + D\
Po určení vhodných hodnot PID se parametr Interval (SampleTime) použije k určení časových intervalů, ve kterých by se měl vypočítat požadovaný výkon.

## P-hodnota

Tento parametr ovlivňuje rozdíl mezi skutečnou a cílovou teplotou. Čím větší je rozdíl mezi skutečnou a cílovou teplotou, tím více varná deska topí P složkou. Pokud je cílová teplota dosažena nebo překročena, složka P je rovna 0. Velmi vysoká hodnota P způsobuje silný překmit nebo podkmit.

## Vážím si toho

Hodnota I se plynule zvyšuje od nuly, jak se varná deska zahřívá. Čím déle ochfeldu trvá, než se dostane ze skutečné do cílové teploty, tím větší bude hodnota I. Spolu s hodnotou P vznikne následující sčítání: Jak se přibližuje cílová teplota, hodnota P se zmenšuje a hodnota I se zvyšuje. Cílové teploty je dosaženo pouze pomocí hodnoty I. Nad cílovou teplotou se hodnota I opět sníží. Hodnota I vytváří překročení.

## Hodnota D

Hodnota D je tlumič, který tlumí oscilace prvních dvou částí P a I. Příliš mnoho D zpomaluje ohřev a chlazení. Tato hodnota může být také nulová.

## Interval (SampleTime)

Výpočet PID probíhá nepřetržitě. Interval popisuje cyklus. V každém intervalu se průběžně zjišťuje rozdíl mezi skutečnou a cílovou teplotou a také změna skutečné teploty. Příliš malý interval (např. 1000 ms) vede k „chvění“ skutečné teploty ve smyslu zaokrouhlovacích chyb +- 0,0625°C při 12bit rozlišení. Příliš velký interval (např. 7000 ms) vede k pomalému chování. Interval 2000 ms nebo 3000 ms by měl dobře fungovat ve většině prostředí. Jako velikost intervalu lze použít pouze násobek 1000 ms (1000, 2000, ... 7000).
