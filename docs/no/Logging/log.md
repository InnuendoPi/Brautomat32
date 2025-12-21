# Logging

![media](/docs/img/logging.jpg)

Logging er kun tilgjengelig i utviklingsversjonen. Den integrerte loggingen hjelper til med feilsøking, både for feil i Brautomat32-fastvaren og for brukerfeil. En seriell monitor er nødvendig for utgang. Følgende viser Microsoft Visual Studio Code med Microsoft Serial Monitor-utvidelsen. Microsoft Visual Code er gratis og tilgjengelig som en frittstående versjon (ingen installasjon nødvendig).

Den serielle monitoren må settes til en overføringshastighet på 115200 og CRLF i tillegg til COM-porten.

![Microsoft Visual Studio-kode](/docs/img/vscode.jpg)

## Logginnstillinger

Ulike kanaler for seriell utgang kan aktiveres via systeminnstillingene.

* Konfigurasjon - denne kanalen viser meldinger når konfigurasjonen er lest eller lagret.
* Sensorer - meldinger om sensorene sendes ut i denne kanalen
* Skuespillere - en kanal for rapportering om skuespillere
* Mash boiler - meldinger om den første kjelen vises i denne kanalen
* Bryggekjele - alle meldinger om bryggekjelen
* Gjenstøpingskjele - Meldinger om omstøpingskjelen
* Fermenter - Meldinger om fermenteringsmodus
* System - systemmeldinger vises i denne kanalen
* Meskeprosess - meskeprosessen logges i denne kanalen
* Nextion Display - Logging for skjermen

Hver kanal har alternativene av, feil, info og detaljert.

* Av - ingen logging.

Kanalen sender ikke ut en logg til den serielle konsollen.

* Feil - Kun feil logges.

Debug output type Error logger bare feil. I VSCode vises ERROR-typen i rødt.

``` json
[E][SENSOREN.cpp:1600] setSenErr(): Test sensorfeil: #0 Sensor_Sud feiltilstand: 1
[E][SENSOREN.cpp:76] Oppdatering(): Sen: Sensor_Sud feil #1 kunne ikke lese temperaturdata
```

* Info - Loggprosess

Feilsøk utgangstype informasjonsloggprosesser. Infotypen inneholder feiltypeutdata. I VSCode vises INFO-typen i grønt.

``` json
[I][KETTLES.cpp:2044] debConsole(): sett ny kraftlast: 1071746ms
[I][KETTLES.cpp:1922] webhook(): webhook-svar: 
[I][KETTLES.cpp:2044] debConsole(): webhook på: 5000ms (mDutyCycle 5000 * Strøm 100 / 100)
```

* Utførlig - all tilgjengelig informasjon sendes ut.

Utførlig type feilsøkingsutdata inkluderer alle tidligere typer. I tillegg logges alle SSE-sendinger i Verbose type. I VSCode vises Verbose-typen i blått.

``` json
[V][SYSTEM.cpp:847] SSEBroadcastJson(): kettle hlt: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:919] SSEBroadcastJson(): kettle sud: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:839] SSEBroadcastJson(): kettle mash: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

I tillegg gir System - verbose-innstillingen krølllignende logging av alle WebServer GET- og POST-forespørsler.

Utgang på seriekonsollen har fast formatering. Eksempel:

``` json
[V][SYSTEM.cpp:839] SSEBroadcastJson(): kettle mash: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

De enkelte delene:

``` json
[V] Utgangstypen (her Verbose)
```

``` json
[SYSTEM.cpp:839] Den avrundede kildekodens plassering
```

``` json
SSEBroadcastJson(): Anropsfunksjonen
```

Selve feilsøkingsmeldingen følger etter kolon:

``` json
vannkoker: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Når Brautomat er koblet til en seriell konsoll, vises følgende utgang ved oppstart

``` json
05:42:16.904 > [I][SYSINFO] starter Brautomat32 V 1.56 Release
05:42:22.467 > [I][SYSINFO] mount filsystem LittleFS: ok, gratis haugminne: 192924
05:42:28.384 > [I][SYSINFO] mDNS http://Brautomat.lokal IP-adresse 192.168.100.112 tid: 05:42:27 RSSI: -83
```

I tillegg til der versjon av Brautomat MDNS-navnet og gjeldende IP-adresse sendes ut. Linjen _mount filsystem LittleFS: ok, gratis heap mem:_ indikerer at filsystemet har blitt montert.

## Test sensorfeil

En sensorfeil kan utløses via en web-URL. Sensorene i Brautomat har en ID som begynner med 0. En sensorfeil kan genereres via et nettoppkall:

``` json
http://Brautomat.local/setSenErr?id=0
```

For å fikse sensorfeilen, åpnes nøyaktig samme URL igjen. Den første sensoren har ID 0, den andre har ID 1 og den tredje har ID 2. I URL-en trenger du kun å erstatte den siste 0-en med ønsket sensor-ID.

Med denne sensorfeiltesten kan parameteren "Atferd ved sensorfeil" kontrolleres veldig enkelt.

## Logging med Microsoft VSCode

Microsoft VSCode kan settes opp for logging med bare noen få trinn. Det er ikke nødvendig å installere Microsoft VSCode; den bærbare versjonen er tilstrekkelig.

Last ned Microsoft VSCode som en ZIP-fil: [Microsoft VSCode](https://code.visualstudio.com/docs/?dv=winzip)

Pakk ut ZIP-filen til en hvilken som helst katalog. Gå til katalogen i filutforsker og lag en mappe kalt data. Datamappen setter MS VScode i bærbar modus og kan brukes uten installasjon.

![Microsoft Visual Studio Code](/docs/img/vscode_4.jpg)

Start Microsoft VSCode ved å dobbeltklikke på Code.exe.

![Microsoft Visual Studio Code](/docs/img/vscode_1.jpg)

Serial Monitor-utvidelsen kreves i VScode for logging. Klikk på Extensions-knappen til venstre og skriv inn "seriell monitor" i søkefeltet.

![Microsoft Visual Studio Code](/docs/img/vscode_2.jpg)

Installer Serial Monitor-utvidelsen fra Microsoft. Den serielle monitoren er inkludert i Output-displayet. Klikk på utdataelementet i visningsmenyen eller åpne utdataene med Ctrl Shift U-tastekombinasjonen. Utvidelsesskjermen kan skjules eller vises ved å klikke på utvidelsesknappen. Klikk nå på Seriell Monitor-fanen i Output-vinduet. Nå er det bare å velge COM-porten og sette overføringshastigheten til 115200. Logging startes med Start Monitoring-knappen.

![Microsoft Visual Studio Code](/docs/img/vscode_3.jpg)
