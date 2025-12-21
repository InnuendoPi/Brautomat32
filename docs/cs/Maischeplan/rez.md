# Nastavení mash plánu

Brautomat nabízí snadnou správu mash plánů. Kromě importu a exportu můžete přepínat mezi uloženými plány směsi. Časová kontrola je také možná. Tato kapitola doplňuje popis základních funkcí.

## Mash plán

Název rmutovacího plánu lze zadat v nastavení. Název souboru je odvozen od názvu mash plánu. Parametry *Celková doba vaření* a *Doba po izomerizaci* jsou zobrazeny pouze pro informaci a nelze je upravovat. Tyto parametry se načtou během importu receptury. Pokud je plán rmutování vytvořen ručně, doba vaření a hodnoty po izomerizaci jsou irelevantní, protože Brautomat nepočítá hořké jednotky.

## Řízení času

S pomocí časového řízení lze svatební den naplánovat a spustit automaticky.

![Řízení času](/docs/img/Zeitsteuerung.jpg)

Pomocí prvku DateTimerPicker můžete snadno vybrat datum a čas. Název receptury je dočasně nahrazen zadaným časem spuštění.

![Řízení času](/docs/img/Zeitsteuerung2.jpg)

Aktivované časové řízení je uloženo v konfiguraci. Po opětovném spuštění spařovacího stroje se načte nastavené datum a čas. Pokud je tento začátek vaření v budoucnosti, aktivuje se časové řízení. Pokud je začátek vaření v minulosti, časové ovládání je deaktivováno.

## Spravujte mash plány

### Vytvořte mash plán

Do vstupního pole je nutné zadat název rmutovacího plánu. Pomocí *OK* se vytvoří nový prázdný plán mash.

### Přejmenujte plán kaše

Do vstupního pole je třeba zadat nový název pro plán kaše. Pomocí *OK* se plán rmutu uloží pod novým názvem.

### Změňte plán kaše

Brautomat spravuje mash plány ve flash paměti. Výběrem možnosti *Změnit plán kaše* můžete přepínat mezi existujícími plány kaše.

### Importujte plán kaše

Brautomat může importovat recepty na vaření piva z následujících zdrojů:

* KleinBrauhelfer2 (od verze 2.5 typ exportu Brautomat)
* Mash slad a další
*Sládek
* Brautomat

Importovaný recept na vaření piva se stane Brautomat rmutovacím plánem. Doporučuje se správa a vytváření receptů pomocí kbh2. Exportní filtr "Brautomat" obsahuje v optimalizované podobě všechna data potřebná pro vaření s Brautomat.

Recepty z MashMalzandMore by měly být také nejprve importovány do malé pomůcky pro vaření piva2 a přizpůsobeny jednotlivým systémovým hodnotám, surovinám atd. Protože MMum nepřiřazuje zbytková jména, doporučuje se upravit je v plánu rmutování KBH2.

Recepty a várky lze importovat z BrewFather pomocí importu souboru nebo pomocí volání API. V BrewFather mohou zbývající názvy obsahovat hlavní text (téměř libovolné délky). Text je zkrácen na maximálně 50 znaků. Brewfather umožňuje čísla a text s plovoucí desetinnou čárkou jako dobu odpočinku. Parametry jsou převedeny na celá čísla nebo nastaveny na 0.

*Poznámka: Mikrokontroléry ESP mají malé množství paměti RAM. Recepty s velmi dlouhým textem, obrázky nebo jinými přílohami nemusí být možné importovat. Brautomat filtruje receptury před importem. Před importem však může být nutné odstranit obrázky a velmi dlouhé popisy.

Importované recepty se ukládají do složky /Recipes. Název receptury se používá jako název souboru. Maximální délka názvu souboru v souborovém systému Arduino je 31 znaků. Mezery a přehlásky jsou při ukládání nahrazeny.

### Exportujte plán kaše

Mash plán lze exportovat ve formátu JSON. Chcete-li jej znovu přečíst, je nutné import použít ve formátu Brautomat.

### Odstraňte mash plán

Vybraný plán mash je odstraněn z paměti flash.

## Výchozí import

![Výchozí nastavení importu](/docs/img/voreinstellung_import.jpg)

Brautomat vyžaduje krok rmutování (volitelné) a krok rmutování. VKonkrétně krok rmutování slouží jako oddělovací krok mezi rmutováním a vařením, když je autonext deaktivováno. Při importu může Brautomat vložit chybějící rmutovací a rmutovací kroky. Chybějící teploty lze navíc doplnit specifikacemi.

### Výchozí teplota pro chybějící parametry

V receptech z různých zdrojů mohou mimo jiné chybět informace o teplotě. To platí zejména pro teploty pro rmutování, rmutování, přední mladinu a vířivé skákání. Vnitřní programová logika sládka vždy vyžaduje teplotu pro zpracování, i když některé teploty nejsou z pohledu sládka nutné. Chybějící teploty jsou přednastaveny s výchozími hodnotami.

### Teplota rmutování [°C]

Tento parametr je pro import receptury a popisuje výchozí teplotu pro rmutování. Tento parametr se používá pouze tehdy, pokud není při importu receptury zadána žádná teplota rmutování.

### Teplota rmutování [°C]

Tento parametr je pro import receptury a popisuje výchozí teplotu pro rmutování. Tento parametr se používá pouze tehdy, pokud není při importu receptury zadána žádná teplota rmutování.

### Teplota VWH [°C]

Tento parametr je pro import receptury a popisuje standardní teplotu pro přeskakování přední mladiny. Recepty často neuvádějí teplotu pro VWH. Pro Brautomat je vyžadována specifikace teploty. Pokud je v receptu uvedena teplota, použije se při importu.

### Teplota WPH [°C]

Tento parametr slouží k importu receptu a popisuje výchozí teplotu pro skákání ve vířivce. Recepty často neurčují teplotu pro WPH. Pro Brautomat je vyžadována specifikace teploty. Pokud je v receptu uvedena teplota, použije se při importu.

### Teplota vaření [°C]

Tento parametr popisuje teplotu, při které se mladina vaří až k varu. Standardní hodnota je 98°C a odpovídá přibližně umístění ve výšce 500 m nad mořem. Pro import receptu se tento parametr používá jako teplota vaření.
