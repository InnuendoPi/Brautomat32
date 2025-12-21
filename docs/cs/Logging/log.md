# Logování

![media](/docs/img/logging.jpg)

Protokolování je dostupné pouze ve vývojové verzi. Integrované protokolování pomáhá s řešením problémů, a to jak při chybách ve firmwaru Brautomat32, tak při uživatelských chybách. Pro výstup je vyžadován sériový monitor. Následující obrázek ukazuje kód Microsoft Visual Studio s rozšířením Microsoft Serial Monitor. Microsoft Visual Code je zdarma a je k dispozici jako samostatná verze (není nutná instalace).

Sériový monitor musí být kromě COM portu nastaven na přenosovou rychlost 115200 a CRLF.

![Kód Microsoft Visual Studio](/docs/img/vscode.jpg)

## Nastavení protokolování

Prostřednictvím nastavení systému lze aktivovat různé kanály pro sériový výstup.

* Konfigurace - tento kanál zobrazuje zprávy, když je konfigurace načtena nebo uložena.
* Senzory - na tomto kanálu se vydávají zprávy o senzorech
* Herci – kanál pro podávání zpráv o hercích
* Mash boiler - v tomto kanálu se zobrazují zprávy o prvním kotli
* Varná konvice - všechny zprávy o varné konvici
* Přelévací kotel - Zprávy o přelévacím kotli
* Fermenter - Zprávy o režimu fermentoru
* Systém - v tomto kanálu se zobrazují systémové zprávy
* Proces rmutování - proces rmutování je zaznamenán v tomto kanálu
* Nextion Display - Protokolování pro displej

Každý kanál má možnosti off, error, info a verbose.

* Vypnuto – žádné protokolování.

Kanál nevydává protokol do sériové konzoly.

* Chyba – protokolují se pouze chyby.

Typ výstupu ladění Error zaznamenává pouze chyby. Ve VSCode je typ ERROR zobrazen červeně.

```json
[E][SENSOREN.cpp:1600] setSenErr(): Chyba testovacího senzoru: #0 Chybový stav senzoru Sensor_Sud: 1
[E][SENSOREN.cpp:76] Update(): Sen: Chyba Sensor_Sud č. 1 nemohla přečíst údaje o teplotě
```

* Info - Log proces

Ladění procesů informačního protokolu typu výstupu. Typ Info obsahuje výstup typu Error. Ve VSCode je typ INFO zobrazen zeleně.

```json
[I][KETTLES.cpp:2044] debConsole(): nastavit novou výdrž: 1071746 ms
[I][KETTLES.cpp:1922] webhook(): odpověď webhooku: 
[I][KETTLES.cpp:2044] debConsole(): webhook zapnutý: 5000 ms (mDutyCycle 5000 * Výkon 100/100)
```

* Úplné - všechny dostupné informace jsou výstupem.

Podrobný výstup ladění typu zahrnuje všechny předchozí typy. Kromě toho jsou všechna vysílání SSE protokolována v podrobném typu. Ve VSCode je typ Verbose zobrazen modře.

```json
[V][SYSTEM.cpp:847] SSEBroadcastJson(): konvice hlt: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:919] SSEBroadcastJson(): konvice sud: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:839] SSEBroadcastJson(): kotlíková kaše: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Kromě toho, podrobné nastavení System (Systém) poskytuje protokolování všech požadavků GET a POST WebServeru.

Výstup na sériové konzoli má pevné formátování. Příklad:

```json
[V][SYSTEM.cpp:839] SSEBroadcastJson(): kotlíková kaše: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Jednotlivé díly:

```json
[V] Typ výstupu (zde podrobné)
```

```json
[SYSTEM.cpp:839] Umístění zdrojového kódu zaokrouhlení
```

```json
SSEBroadcastJson(): Volající funkce
```

Skutečná ladicí zpráva následuje za dvojtečkou:

```json
kotlíková kaše: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Když je Brautomat připojen k sériové konzoli, při spouštění se objeví následující výstup

```json
05:42:16.904 > [I][SYSINFO] spouštění Brautomat32 V 1.56 Release
05:42:22.467 > [I][SYSINFO] připojit souborový systém LittleFS: ok, volná paměť haldy: 192924
05:42:28.384 > [I][SYSINFO] mDNS http://Brautomat.local IP adresa 192.168.100.112 čas: 05:42:27 RSSI: -83
```

Kromě der verze Brautomat se zobrazí název MDNS a aktuální IP adresa. Řádek _připojit souborový systém LittleFS: ok, volná halda mem:_ označuje, že souborový systém byl připojen.

## Chyba testu snímače

Chybu senzoru lze spustit prostřednictvím webové adresy URL. Senzory v Brautomat mají ID začínající 0. Chybu senzoru lze vygenerovat prostřednictvím webového volání:

```json
http://Brautomat.local/setSenErr?id=0
```

Chcete-li opravit chybu senzoru, znovu se přistupuje ke stejné adrese URL. První senzor má ID 0, druhý má ID 1 a třetí má ID 2. V URL stačí nahradit poslední 0 požadovaným ID senzoru.

Pomocí tohoto testu chyby snímače lze velmi snadno zkontrolovat parametr „Chování v případě chyby snímače“.

## Protokolování pomocí Microsoft VSCode

Microsoft VSCode lze nastavit pro přihlášení v několika krocích. Není potřeba instalovat Microsoft VSCode; stačí přenosná verze.

Stáhnout Microsoft VSCode jako soubor ZIP: [Microsoft VSCode](https://code.visualstudio.com/docs/?dv=winzip)

Extrahujte soubor ZIP do libovolného adresáře. Přejděte do adresáře v průzkumníku souborů a vytvořte složku s názvem data. Složka data přepne MS VScode do přenosného režimu a lze ji používat bez instalace.

![Kód Microsoft Visual Studio](/docs/img/vscode_4.jpg)

Spusťte Microsoft VSCode poklepáním na Code.exe.

![Kód Microsoft Visual Studio](/docs/img/vscode_1.jpg)

Pro protokolování je ve VScode vyžadováno rozšíření Serial Monitor. Klikněte na tlačítko Rozšíření vlevo a do vyhledávacího pole zadejte „sériový monitor“.

![Kód Microsoft Visual Studio](/docs/img/vscode_2.jpg)

Nainstalujte rozšíření Serial Monitor od společnosti Microsoft. Sériový monitor je součástí výstupního displeje. Klikněte na položku výstupu v nabídce zobrazení nebo otevřete výstup kombinací kláves Ctrl Shift U. Obrazovku Rozšíření lze skrýt nebo zobrazit kliknutím na tlačítko Rozšíření. Nyní klikněte na záložku Serial Monitor v okně Output. Nyní stačí vybrat COM port a nastavit přenosovou rychlost na 115200. Protokolování se spustí tlačítkem Start Monitoring.

![Kód Microsoft Visual Studio](/docs/img/vscode_3.jpg)
