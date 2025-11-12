# Vytvořte nový jazykový soubor

Vytvořte kopii jazykového souboru data/language/de.json a přejmenujte soubor se dvěma znaky na nový jazykový soubor:

španělština: es.json\
francouzsky: fr.json\
dánština: dk.json\
holandština: nl.json\
atd.

Přeložte všechna slova začínající dvojtečkou v každém řádku:

``` bash
 {
   "SAVE": "archivo",
   "CLOSE": "cerca",
   ...
 }
```

Otevřete Průzkumníka ve webovém rozhraní Brautomat. Zkopírujte soubor nového jazyka do složky /language na vašem Brautomat. Nakonec musí být nový jazykový soubor oznámen Brautomat: upravte soubor /lang.js

``` bash
const supportedLocales = ["de", "en"];  // jazykové soubory 
```

Pokud jste například přidali soubor es.json ve španělštině, upravte soubor /lang.js následovně:

``` bash
const supportedLocales = ["de", "en", "es"];  // jazykové soubory 
```

Uložte soubor klávesovou zkratkou Ctrl-S a restartujte Brautomat. Nyní si můžete vybrat nový jazyk ve webovém rozhraní.

_Sdílejte nový jazykový soubor s ostatními uživateli! Pošlete mi svůj jazykový soubor nebo opravu._
