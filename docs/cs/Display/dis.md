# Displej

Brautomat lze volitelně ovládat pomocí dotykového displeje. Podporován je 3,5palcový dotykový displej od Nextion

| Nextion Display | Firmware |
| ---------------- | --------- |
| NX4832T035 (základní řada) | [NX4832T035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/brautomat-NX4832T035.tft) |
| NX4832K035 (Rozšířená řada) | [NX4832K035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/brautomat-NX4832K035.tft) |
| NX4832F035 (Discovery Series) | [NX4832F035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/brautomat-NX4832F035.tft) |

Displej vyžaduje firmware, aby fungoval s Brautomat. Firmware, který odpovídá typu displeje, je uveden v tabulce. Viz také blikání zobrazovaného souboru.

## Připojte displej

Displej je k desce připojen 4 kabely

| Kabel | Nextion Display | Připojovací svorkovnice |
| -------------- | ---------------- | ------------------------- |
|     červená | Aktuální + | Vcc |
|   černá | Elektřina - | GND |
|    modrá | TX | SDL (D1) |
|    žlutá | RX | SDA (D2) |

![Připojení](/docs/img/disp1.jpg)

## Soubor zobrazení Flash

Displej musí být připraven před prvním uvedením do provozu. K tomu se z tabulky stáhne příslušný firmware displeje a uloží se na microSD kartu. Karta microSD se vloží do slotu pro kartu SD na displeji a zapne se Brautomat. Proces blikání se spustí automaticky. Stav blesku se zobrazuje na displeji. Po dokončení se Brautomat vypne a karta microSD bude vyjmuta. Pro běžný provoz není potřeba microSD karta.

## Zobrazit kaši

![MashSud](/docs/img/brewpage-sm.jpg)

Strana MashSud je preferovanou stranou při vaření. Informace se na displeji zobrazují každou sekundu

* Skutečná teplota
* Cílová teplota (klidová teplota)
* zbývající čas odpočinku

zobrazeno. Ve spodním řádku se zobrazí i další odpočinek. Čas vlevo je čas, kdy začne další odpočinek. Zelený symbol hry napravo označuje, že další odpočinek začíná automaticky (autonext).

## Zobrazit přehled kotle

![Přehled kotle](/docs/img/kettlepage-sm.jpg)

Přehled bojleru zobrazuje bojler na vaření rmutu a případně bojler na vaření a přelévání s informacemi o skutečné a cílové teplotě.

_Poznámka: Přehled kotle zobrazuje v dolním řádku adresu Brautomat: buď název mDNS nebo IP adresu._

## Zobrazení ručního ovládání

![Ruční ovládání](/docs/img/induction-mode-sm.jpg)

Stránka ručního ovládání nabízí možnost manuálního ovládání GGM IDS. Úrovně výkonu lze upravit nahoru nebo dolů pomocí tlačítek + a -.
