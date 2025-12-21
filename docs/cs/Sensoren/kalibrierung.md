# Kalibrace

Senzory Dallas DS18B20 někdy vykazují odchylky od skutečné teploty. Technické specifikace výrobců často uvádějí přesnost +-0,5°C v rozsahu od -10°C do 85°C. Kromě toho jsou senzory označovány jako kalibrované.

Odchylky lze korigovat pomocí 2-bodové kalibrace. Kalibrace pomocí Brautomat je lineární korekce. Ke kalibraci senzorů je nutný kalibrovaný teploměr. Varná konvice se naplní typickým množstvím vody a zahřeje se na 40°C. Rozdíl mezi hodnotou čidla a kalibrovaným teploměrem se zadává do parametru "Offset 1 \[40°C]". Tento proces se opakuje při 78°C a rozdíl se zadává do parametru “Offset 2 \[78°C]”. V budoucnu budou všechna měření senzoru vystupovat s touto korekcí.

Pro kalibraci je teplotní senzor nastaven do režimu vysokého rozlišení (12bitové rozlišení nebo 0,0625°C). Kalibrace přes webové rozhraní se skládá z 60 naměřených hodnot. Čas potřebný pro kalibraci je téměř přesně 60 sekund. Výsledkem měření teploty je průměr ze 60 naměřených hodnot. Offset je rozdíl mezi skutečnou teplotou a průměrem.

V mnoha případech stačí 1-bodová kalibrace v ledové lázni, protože offset snímačů DS18B20 je obvykle konstantní.

## Postup pro kalibraci bez referenčního teploměru

Pokud není k dispozici referenční teploměr, lze kalibraci provést pomocí ledové lázně a varu.
Pro spodní rozsah měření je nutná nádoba s 50 % kostek ledu a 50 % studené vody. Ledová lázeň má teplotu (téměř přesně) 0,0 °C. Ledovou vodu je nutné neustále míchat, nejlépe magnetickým míchadlem. Kalibrace se zahájí v ledové lázni při 0 °C.

Druhý bod pro kalibraci lze určit pomocí nadmořské výšky a souvisejícího bodu varu. V 0 m nad mořem nebo při atmosférickém tlaku 1 013 bar je teplota varu 100,0 °C. S rostoucí nadmořskou výškou klesá tlak vzduchu a tím i teplota varu. Nejprve je třeba určit místní NHN, například přes Google Earth. Na každý metr nad mořem klesá teplota varu o 0,003354°C. Na webových stránkách [rechneronline](https://rechneronline.de/barometer/siedepunkt.php) je bod varu vypočítán na základě výšky nad hladinou moře. Mnoho chytrých telefonů také nabízí informace o nadmořské výšce v kompasu nebo navigační aplikaci. Výška nad hladinou moře by měla být určena s přesností cca. +-20m. To odpovídá změně teploty bodu varu o 0,06708 °C a je tedy daleko mimo přesnost kontroly Brautomat. Kalibrace druhého bodu se provádí pomocí varného kotle, míchadla a předem stanoveného místního bodu varu. Cílová teplota je tedy teplota bodu varu. Před zahájením kalibrace horního rozsahu je důležité zajistit, aby teplota varu byla dosažena a udržována po dobu alespoň jedné minuty. Je také velmi důležité, aby varná deska zůstala zapnutá na konstantní výkon.

Offset #1 (spodní rozsah hodnot) je rozdíl 0,0 °C (ledová lázeň) k průměrné hodnotě prvního kalibračního běhu. Offset #2 (horní rozsah) je rozdíl mezi bodem varu a průměrem z druhého kalibračního běhu.

## Kalibrace postupu s klinickým teploměrem

Klinický teploměr je vhodný referenční teploměr. Horní měřicí rozsah klinického teploměru je omezen na cca. 40 °C. Provedení kalibrace odpovídá postupu pro ledovou lázeň a teplotu varu. Jediný rozdíl: Pokud zvolíte jako druhý kalibrační bod např. 40°C, varná deska se musí vypnout, jakmile je dosaženo cílové teploty a zůstane konstantní po dobu cca. 60 sekund (bez kolísání). Teprve potom může dJe možné spustit kalibraci, tedy záznam 60 vzorků měření.

## Soubor protokolu kalibrace senzoru

Pro každou kalibraci je zapsán soubor protokolu. Příklad:

```text
13:22:37 Byla zahájena kalibrace senzoru
*** Název senzoru: Senzor IDS2
*** Model: DS18B20
*** Adresa: 2827c59d0d0000b1
*** Rozlišení: 12bit
*** Časový limit: 750 ms
------------------------------------------------------
ID Cíl Skutečný rozdíl rozdílu
#01 24,6000 24,0000 -0,6000 0,6000

 - Hodnoty senzoru 2 až 59 odpovídajícím způsobem

#60 24,6000 25,1875 0,5875 -0,6083
------------------------------------------------------
Teplota ofsetu #1: 24,6000
Průměr po 60 měřeních: 25,2083
Offset #1: -0,6083
===========================================
```
