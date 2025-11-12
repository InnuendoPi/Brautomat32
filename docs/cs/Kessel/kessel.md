# Konfigurace a použití kotle

Brautomat32 nabízí možnost nastavení až tří kotlů. První kotel má interní označení MASH a alternativně IDS. Tato konvice je nezbytná pro rmutovací proces. Dva další kotle jsou volitelné. Druhý kotel má interní označení SUD, alternativně MLT a třetí kotel má označení HLT nebo Nachguss.

Tyto tři kotle mohou být buď indukční varná deska GGM, nebo relé. Kotel reléového typu obsahuje připojení webhooku.

![Konfigurace Kessel](/docs/img/kessel_1.jpg)

Parametry jsou popsány v kapitole Základní nastavení a parametry v přehledu - Parametry kotle a jsou shodné pro všechny tři kotle.

Použití tří kotlíků je však jiné, zejména použití rmutovacího plánu. Rmutovací plán je vždy propojen s prvním kotlem rmutového záparu, pokud není v rmutovacím plánu pomocí ovládacího příkazu specifikován žádný jiný kotel. Řídicí příkazy jsou také vysvětleny v sekci speciální funkce plánu mash a řídicí příkazy.

## Příkazy ovládání kotle

Tato část se zabývá pouze příkazy ovládání kotle. Ovládací povely pro akční členy jsou strukturovány identicky, ale jsou vysvětleny v sekci speciální funkce a ovládací povely mash plánu. Řídicí příkaz vždy obsahuje dvojtečku v názvu zbytku. Brautomat pouze z dvojtečky rozpozná, že tento zbytek by měl být považován za řídicí příkaz. Formát je zařízení: maximální výkon. To znamená, že dvojtečka odděluje název zařízení od maximálního výkonu.

Následující názvy jsou interně definovány jako názvy zařízení pro tři kotle:

* MASH nebo IDS pro první konvici
* MLT nebo SUD pro druhý kotel
* HLT nebo REGUSS pro třetí kotel

Každý kotel má v nastavení přiřazen název. Tento název lze také použít jako název zařízení pro řídicí příkaz.

Čísla mezi 0 a 100 jsou povolena jako maximální výkon. Hodnota odpovídá parametru maximálního výkonu v nastavení kotle a je uvedena v procentech. Specifikace ON odpovídá 100 % a OFF odpovídá 0 %.

### Možnost 1: ruční zapnutí kotle

Druhý a třetí kotel lze zapnout a vypnout ručně přes webové rozhraní pomocí příslušného tlačítka napájení. Pokud je například kotel nastaven na reinfuzi, lze v nastavení kotle nastavit cílovou teplotu na 78 °C a v případě potřeby kotel zapnout v den vaření.

### Možnost 2: automatické spínání kotle

Druhou a třetí konvici lze také přepínat pomocí rmutovacího plánu:

![Konfigurace Kessel](/docs/img/kessel_2.jpg)

V tomto zjednodušeném rmutovacím plánu se třetí kotel HLT zapíná automaticky v řádku 2. Krok HLT:100 s cílovou teplotou 78°C a dobou trvání 0 minut zapíná doplňování se 100% výkonem a nastavuje cílovou teplotu na 78°C. Protože doba trvání je zadána jako 0 minut, je doplňování zapnuto trvale. Brautomat přejde přímo k dalšímu kroku kaše a nechá zapnutou poinfuzi. Regulátor PID trvale reguluje výkon potřebný k dosažení a udržení cílové teploty. Nachguss:100 by byl identický s řídicím příkazem HLT:100. Pokud má náplň v nastavení název „Vařič“, lze také použít ovládací příkaz VAŘIČ:100.

![Konfigurace Kessel](/docs/img/kessel_3.jpg)

V tomto rmutovacím plánu se ve třetím kroku zapne druhá varná konvice. Na rozdíl od předchozího příkladu HLT se kotel SUD zapíná na dobu 15 minut s cílovou teplotou 100°C. Brautomat zůstává v tomto kroku, dokud není dosaženo cílové teploty a není dokončena 10minutová přestávka. Poté se kotlík SUD vypne a Brautomat přeskočí na další krok v plánu kaše.

Text „Te"cooking ilmaische" je přeloženo Brautomat na 100 %. Pokud za dvojtečkou není žádné číslo mezi 0 a 100 nebo informace ON nebo OFF, pak Brautomat nahradí text se 100% výkonem.

## Příklad jiného výkonu

Ovládací příkazy lze použít k nastavení maximálního výkonu během procesu vaření. Pokud má například indukční varná deska maximální výkon 3,5 kW a použitá varná konvice má objem 20 litrů, lze ovládacím povelem MASH:75 snížit maximální výstupní výkon indukční desky na 75 % výkonu. Zbytek pomocí ovládacího příkazu MASH:75 je vytvořen s cílovou teplotou 0°C a trváním 0 minut s aktivovaným autonext.

## Příklad odvaru

Jak je popsáno výše, zbytek z plánu rmutu je vždy přiřazen prvnímu kotli (MASH), pokud žádný řídicí příkaz (dvojtečka v názvu zbytku) nepřiřadí zbytek jinému kotli. Řídicí příkaz může buď zapnout/vypnout druhý kotel s cílovou teplotou a přejít přímo na další klid, nebo jej integrovat do rmutovacího procesu s dobou klidu.

Při procesu vaření odvaru se částečná kaše vaří, zatímco zbývající kaše se udržuje na požadované teplotě. Odvar s Brautomat by vypadal takto:

* Vytáhněte zbývající kaši do druhé konvice. Vytažením zbytku zbývající kaše s deaktivovaným autonext tento úkol splní.
* poté trvale zapnout druhý kotel na požadovanou teplotu s dobou klidu nula minut. autonext je aktivován.
* Vařte částečnou kaši v prvním kotli po požadovanou dobu odpočinku. autonext je aktivován.
* Přidejte zbývající rmut z druhého kotle do částečné kaše v prvním kotli. autonext je zakázáno.

Zbytky v rmutovacím plánu v prostředí 2 nebo 3 kotlíků mají následující princip:

* Částečná rmut k vaření je přiřazena k prvnímu kotli
* Zbytkový rmut s udržováním teploty je přiřazen druhému nebo třetímu kotli
* Náplň je vždy přiřazena ke druhé nebo třetí konvici

## webhook

Parametr PIN white relay musí být nastaven na "-", aby se prvky webhooku zobrazovaly ve webovém rozhraní. Kromě toho je vyžadována adresa URL webhooku a příkaz sound:

![webhook](/docs/img/kessel_webhook1.jpg)

Příklad Shelly 13:00:

Zapněte Shelly 1PM: <http://192.168.1.5/relay/0?turn=on>\
Vypnout Shelly 13:00: <http://192.168.1.5/relay/0?turn=off>

Adresa URL webhooku pro Shelly 1PM je: <http://192.168.1.5/relay/0?turn=> (bez zapnutí a vypnutí). Parametr přepínače webhooku musí být nastaven na "on/off".

URL Tasmota: <http://192.168.x.x/cm?cmnd=Power1%201>

## 🔧 Ovládání kotle – přímé vs. hybridní

V závislosti na konstrukci může být Brautomat provozován s **1 až 3 kotli**. Každý kotel ovládá svou vlastní varnou desku přes GPIO.  
Brautomat je navržen tak, aby automaticky fungoval stabilně ve všech prostředích.

### ⚙️ Dva možné typy ovládání

| Varianta | Popis | Výhody | Poznámky |
|-----------|---------------|-----------|-----------|
| **Přímé ovládání** | Příkaz k varné desce se provádí přímo. Všechny signály jsou odesílány přímo na výstup z hlavního programu (např. `loop()` nebo ticker). | • Nejjednodušší struktura<br>• Není potřeba žádná další paměť<br>• Maximální rychlost | • Krátce zablokuje CPU (cca 5 ms na příkaz)<br>• Nevhodné pro několik kotlů současně |
| **Hybridní ovládání** | Příkazy jsou předávány samostatné úloze prostřednictvím interní **fronty**. Úloha zpracovává všechny příkazy jeden po druhém. | • Stabilní s více kotli<br>• Žádné kolize signálu<br>• Zpracování na pozadí bez blokování CPU | • Minimální požadavky na další paměť (~4 kB)<br> |

### 💡 Realizace

Brautomat používá **Hybridní ovládání**. To lze použít univerzálně a funguje vvšechna prostředí, zejména v prostředích se 2 nebo 3 indukčními varnými deskami:

| Životní prostředí | Doporučená varianta | Odůvodnění |
|-----------|---------------------|-------------|
| **1 kotel** | Hybridní | stejná funkce jako přímý režim, bez nevýhod |
| **2 kotle** | Hybridní | bezpečné ukládání příkazů do vyrovnávací paměti |
| **3 kotle** | Hybridní | zabraňuje překrytí signálu |

> 🔸 Přímé ovládání je vhodné pouze pro speciální, velmi jednoduchá nastavení (např. jednotlivé kotle s minimálním kódem).  
>
> 🔹 Hybridní řešení je **standardní a doporučená varianta** pro všechny moderní ESP32 sestavy.

### 📊 Technické srovnání

| Funkce | **Přímo** | **Hybridní** |
|----------|------------|-------------|
| Využití paměti | ~0 kB | ~4 kB |
| Blokování CPU | ano (cca 5 ms) | ne |
| Stabilita (více kotlů) | omezený | vysoká |
| Zabezpečení načasování | vysoká (1 konvice) | velmi vysoká (1–3 kotle) ​​|
| Rozšiřitelnost | nízká | velmi dobrý |
| Doporučené použití | jednoduché jednotlivé systémy | univerzální vícekotlové systémy |

---

### 🔍 Shrnutí

Hybridní ovládání je **doporučený a výchozí aktivovaný režim**.  
Zajišťuje, že všechny signály jsou přenášeny koordinovaně, bezpečně a včas, a to i u více kotlů -  
bez blokování hlavního procesu.

> ✅ **Ve zkratce:**  
>
> * Pro **1 kotel**: žádná nevýhoda, stejný výkon  
> * Pro **2-3 kotle**: plná stabilita  
> * Jeden software pro všechny varianty
