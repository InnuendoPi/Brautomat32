# Nastavte varnou desku

## Vytvoření varné konvice

V první sekci _Maischeplan_ je kotel MashSud vytvořen pomocí ozubeného kola vpravo nahoře.

![Vytvořit kotlík na vaření kaše](/docs/img/IDS-einrichten.jpg)

## Konfigurace varné desky

Nejprve je třeba nakonfigurovat varnou desku. V tomto základním nastavení je nastavena indukční varná deska GGM IDS.

První nastavení se týká typu IDS, kde lze zvolit IDS1 nebo IDS2. Poté následují tři ovládací parametry:

* PIN bílý [relé] - Výchozí: D7
* PIN žlutý [Příkaz] – Výchozí: D6
* PIN modrý [Přerušení] - Výchozí: - (nepoužito) nebo D5

Tyto GPIO (D5, D6 a D7) jsou předkonfigurovány pro propojovací kabel GGM IDS s paticí JST-HX nebo šroubovací svorkovnicí.

Dále je třeba ke kotli MashBud přiřadit teplotní senzor. Výběr se provádí ze seznamu senzorů, které již byly nastaveny. V tomto základním nastavení je přítomno pouze čidlo _Sensor IDS2_, které je příslušně vybráno.

_Poznámka_: _Čidlo teploty musí být trvale přiřazeno varné desce. Hodnota čidla se označuje jako skutečná teplota nebo aktuální teplota a během procesu rmutování se průběžně porovnává se klidovou teplotou (cílovou teplotou)._

![Konfigurovat kotel na vaření kaše](/docs/img/IDS-configure.jpg)

Parametry v záložce "Řízení teploty" jsou podrobně vysvětleny v části "Všechny parametry". Pro základní nastavení se zpočátku převezmou výchozí hodnoty.

![Konfigurovat kotel na vaření kaše](/docs/img/IDS-temperaturen.jpg)

## Nastavení ovladače PID

Po základní konfiguraci musí být regulátor PID nastaven na kartě Správce PID. Ovladač PID automaticky vypočítá výkon potřebný pro varnou desku, aby se teplota rmutu (skutečná teplota) dostala na klidovou teplotu. Přesná konfigurace PID zajišťuje, že klidová teplota zůstane konstantní po celou dobu klidu.

Ovladač PID má dva parametry:

* Ku (ultimátní zisk) – faktor zisku
* Pu (ultimátní období) – délka období

Parametry PID P, I a D jsou vypočteny z těchto dvou hodnot. Tyto parametry jsou individuální pro každý spařovací systém a jsou určeny pomocí procesu AutoTune. Proces AutoTune je podrobně popsán v části „AutoTune krok za krokem“.

Pro toto základní nastavení jsou zadány následující hodnoty pro Ku a Pu. Poté je vybráno PID pravidlo ladění _IDS PID režim_:

![IDS](/docs/img/IDS-AutoTune-erg.jpg)

Jakmile jsou zadány hodnoty Ku a Pu, zvolený algoritmus PID automaticky určí tři hodnoty P, I a D. Podrobné vysvětlení všech parametrů bude následovat později.

## Počáteční hodnoty pro různé velikosti kotlů

Pro konvici o objemu 36 l s objemem kaše přibližně 20 l:

```text
Zesilovací faktor Ku (konečný zisk): 182
Trvání období Pu (konečné období): 2245
```

Pro konvici o objemu 70 l s objemem kaše nad 50 l:

```text
Zesilovací faktor Ku (konečný zisk): 225
Délka období Pu (konečné období): 1500
```

## Dokončení základní konfigurace

Po uložení nastavení je základní konfigurace hotová. Nyní můžete vařit pomocí teplotního senzoru a varné konvice.

_Poznámka: Plán rmutu je také nutný pro vlastní proces vaření._
