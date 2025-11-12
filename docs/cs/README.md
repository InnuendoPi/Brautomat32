# Brautomat

![ESP32](https://img.shields.io/static/v1?label=Arduino&message=ESP32&logo=arduino&logoColor=white&color=blue)

Brautomat je ovládací prvek vaření pro ESP32 D1 mini. Brautomat se používá ve varně a nabízí intuitivní a snadno použitelné ovládání. Během rmutování jsou automaticky dosaženy klidové teploty a jsou dodržovány doby klidu. Brautomat také podporuje vaření mladiny a přidávání chmele a přísad. V procesu vzestupné infuze může Brautomat plně automatizovat proces rmutování.

> **Poznámka:**
Tato stránka byla automaticky přeložena z původní německé dokumentace.
\
Tyto pokyny jsou neustále rozšiřovány, opravovány nebo vylepšovány. Původně bylo možné v projektu Brautomat ovládat pouze indukční varnou desku GGM IDS2. Od verze 1.48 lze v reléovém režimu připojit i další varné desky. Pokyny popisují funkce s GGM IDS na mnoha místech. Pouze manuální režim je vhodný výhradně pro GGM IDS2. Všechny ostatní funkce a možnosti jsou dostupné i pro ostatní varné desky.

 ---

## Uspořádání této příručky

Tyto pokyny nejsou v žádném pořadí a není nutné je číst shora dolů. Pro vstup do Brautomat je doporučena předmětná oblast _Software_, zejména kapitola _Plán rmutu_. Kapitola _Plán rmutu_ obsahuje na konci vysvětlení funkcí příklad dne vaření.

Tato příručka je rozdělena do tří tematických oblastí:

* Software: použití firmwaru Brautomat
  * Instalace
  * Základní nastavení
  * Plán kaše
  * AutoTune PID
  * Senzory, varné konvice, náplně a pohony
  * Režim fermentace
* Hardware: obvodová deska a příslušná rozšíření
  * Struktura obvodové desky a připojení
  * Displej
  * 3D pouzdro
  * další hardware
* Informace a často kladené dotazy
  * malý pomocník při vaření piva2
  * zařízení MQTT

Tématická oblast _Software_ je zakončena souhrnem _Přehled parametrů_. Podrobnosti a informace jsou uvedeny pro mnoho parametrů pro zjednodušení konfigurace a použití.

## Brautomat Vydaná verze

Vydaná verze Brautomat je zkompilována s aktuálním stabilním rámcem espressif. Tato verze je určena pro produktivní použití. Vydaná verze je poskytována bez modulu protokolování. Verze je o něco rychlejší. Vydaná verze by měla být používána přednostně.

## Brautomat Vývojová verze

Vývojová verze Brautomat je zkompilována s aktuálním rámcem esspressif. Tato verze je dodávána s modulem Protokolování. Nové funkce a opravy chyb jsou nejprve vydány ve vývojové verzi. Tato verze může být produktivně používána, ale nedoporučuje se.
