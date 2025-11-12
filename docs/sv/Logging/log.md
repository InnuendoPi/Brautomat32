# Loggning

![media](/docs/img/logging.jpg)

Loggning är endast tillgänglig i utvecklingsversionen. Den integrerade loggningen hjälper till med felsökning, både för fel i Brautomat32 firmware och för användarfel. En seriell monitor krävs för utmatning. Följande visar Microsoft Visual Studio Code med tillägget Microsoft Serial Monitor. Microsoft Visual Code är gratis och tillgänglig som en fristående version (ingen installation krävs).

Den seriella monitorn måste ställas in på en baudhastighet på 115200 och CRLF utöver COM-porten.

![Microsoft Visual Studio Code](/docs/img/vscode.jpg)

## Loggningsinställningar

Olika kanaler för seriell utgång kan aktiveras via systeminställningarna.

* Konfiguration - den här kanalen visar meddelanden när konfigurationen läses eller sparas.
* Sensorer - meddelanden om sensorerna matas ut i denna kanal
* Skådespelare - en kanal för att rapportera om skådespelare
* Mash panna - meddelanden om den första pannan visas i denna kanal
* Bryggkokare - alla meddelanden om bryggkokare
* Omgjutningspanna - Meddelanden om omgjutningspannan
* Fermenter - Meddelanden om jäsningsläge
* System - systemmeddelanden visas i denna kanal
* Mäskprocess - mäskprocessen loggas i den här kanalen
* Nextion Display - Loggning för displayen

Varje kanal har alternativen off, error, info och verbose.

* Av - ingen loggning.

Kanalen matar inte ut en logg till den seriella konsolen.

* Fel - Endast fel loggas.

Debug output type Error loggar bara fel. I VSCode visas ERROR-typen i rött.

``` json
[E][SENSOREN.cpp:1600] setSenErr(): Testsensorfel: #0 Sensor_Sud feltillstånd: 1
[E][SENSOREN.cpp:76] Uppdatering(): Sen: Sensor_Sud fel #1 kunde inte läsa temperaturdata
```

* Info - Logga process

Felsök processer för informationslogg av utdatatyp. Infotypen innehåller feltypens utdata. I VSCode visas INFO-typen i grönt.

``` json
[I][KETTLES.cpp:2044] debConsole(): set new powerlast: 1071746ms
[I][KETTLES.cpp:1922] webhook(): webhook-svar: 
[I][KETTLES.cpp:2044] debConsole(): webhook på: 5000ms (mDutyCycle 5000 * Effekt 100/100)
```

* Utförlig - all tillgänglig information matas ut.

Utförlig typ av felsökning inkluderar alla tidigare typer. Dessutom loggas alla SSE-sändningar i Verbose-typ. I VSCode visas Verbose-typen i blått.

``` json
[V][SYSTEM.cpp:847] SSEBroadcastJson(): kettle hlt: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:919] SSEBroadcastJson(): kettle sud: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:839] SSEBroadcastJson(): vattenkokare: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Dessutom utmatar inställningen System - verbose curl-liknande loggning av alla WebServer GET- och POST-förfrågningar.

Utdata på seriekonsolen har fast formatering. Exempel:

``` json
[V][SYSTEM.cpp:839] SSEBroadcastJson(): vattenkokare: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

De enskilda delarna:

``` json
[V] Utdatatypen (här utförlig)
```

``` json
[SYSTEM.cpp:839] Den avrundade källkodens plats
```

``` json
SSEBroadcastJson(): Den anropande funktionen
```

Det faktiska felsökningsmeddelandet följer efter kolon:

``` json
vattenkokare: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

När Brautomat är ansluten till en seriell konsol, visas följande utgång vid uppstart

``` json
05:42:16.904 > [I][SYSINFO] startar Brautomat32 V 1.56 Release
05:42:22.467 > [I][SYSINFO] mount filsystem LittleFS: ok, gratis heap mem: 192924
05:42:28.384 > [I][SYSINFO] mDNS http://Brautomat.lokal IP-adress 192.168.100.112 tid: 05:42:27 RSSI: -83
```

Förutom versionen av Brautomat matas MDNS-namnet och den aktuella IP-adressen ut. Raden _mount filsystem LittleFS: ok, gratis heap mem:_ indikerar att filsystemet har monterats.

## Testsensorfel

Ett sensorfel kan utlösas via en webbadress. Sensorerna i Brautomat har ett ID som börjar med 0. Ett sensorfel kan genereras via ett webbanrop:

``` json
http://Brautomat.local/setSenErr?id=0
```

För att åtgärda sensorfelet öppnas exakt samma URL igen. Den första sensorn har ID 0, den andra har ID 1 och den tredje har ID 2. I URL:en behöver du bara ersätta den sista 0:an med önskat sensor-ID.

Med detta sensorfeltest kan parametern "Beteende vid sensorfel" kontrolleras mycket enkelt.

## Loggning med Microsoft VSCode

Microsoft VSCode kan ställas in för inloggning med bara några få steg. Det finns inget behov av att installera Microsoft VSCode; den bärbara versionen är tillräcklig.

Ladda ner Microsoft VSCode som en ZIP-fil: [Microsoft VSCode](https://code.visualstudio.com/docs/?dv=winzip)

Extrahera ZIP-filen till valfri katalog. Gå till katalogen i filutforskaren och skapa en mapp som heter data. Datamappen sätter MS VScode i portabelt läge och kan användas utan installation.

![Microsoft Visual Studio Code](/docs/img/vscode_4.jpg)

Starta Microsoft VSCode genom att dubbelklicka på Code.exe.

![Microsoft Visual Studio Code](/docs/img/vscode_1.jpg)

Tillägget Serial Monitor krävs i VScode för loggning. Klicka på knappen Extensions till vänster och ange "seriell monitor" i sökfältet.

![Microsoft Visual Studio Code](/docs/img/vscode_2.jpg)

Installera tillägget Serial Monitor från Microsoft. Den seriella monitorn ingår i utgångsdisplayen. Klicka på utgångsobjektet i vymenyn eller öppna utgången med tangentkombinationen Ctrl Shift U. Extensionsskärmen kan döljas eller visas genom att klicka på Extension-knappen. Klicka nu på fliken Serial Monitor i Output-fönstret. Nu behöver du bara välja COM-porten och ställa in överföringshastigheten till 115200. Loggningen startas med knappen Starta övervakning.

![Microsoft Visual Studio Code](/docs/img/vscode_3.jpg)
