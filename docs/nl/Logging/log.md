# Loggen

![media](/docs/img/logging.jpg)

Logboekregistratie is alleen beschikbaar in de ontwikkelingsversie. De geïntegreerde logging helpt bij het oplossen van problemen, zowel voor fouten in de Brautomat32-firmware als voor gebruikersfouten. Voor uitvoer is een seriële monitor vereist. Hieronder ziet u Microsoft Visual Studio Code met de Microsoft Serial Monitor-extensie. Microsoft Visual Code is gratis en beschikbaar als zelfstandige versie (geen installatie vereist).

De seriële monitor moet naast de COM-poort worden ingesteld op een baudrate van 115200 en CRLF.

![Microsoft Visual Studio-code](/docs/img/vscode.jpg)

## Logboekinstellingen

Via de systeeminstellingen kunnen verschillende kanalen voor seriële uitvoer worden geactiveerd.

* Configuratie - dit kanaal geeft berichten weer wanneer de configuratie wordt gelezen of opgeslagen.
* Sensoren - berichten over de sensoren worden via dit kanaal verzonden
* Acteurs - een kanaal voor berichtgeving over acteurs
* Maischketel - berichten over de eerste ketel worden in dit kanaal weergegeven
* Brouwketel - alle berichten over de brouwketel
* Hergieten ketel - Berichten over de hergieten ketel
* Vergister - Berichten over de vergistermodus
* Systeem - systeemberichten worden op dit kanaal weergegeven
* Maischproces - het maischproces wordt in dit kanaal vastgelegd
* Nextion Display - Loggen voor het display

Elk kanaal heeft de opties Uit, Fout, Info en Uitgebreid.

* Uit - geen logboekregistratie.

Het kanaal voert geen log uit naar de seriële console.

* Fout - Alleen fouten worden geregistreerd.

Debug-uitvoertype Fout registreert alleen fouten. In VSCode wordt het ERROR-type rood weergegeven.

```Json
[E][SENSOREN.cpp:1600] setSenErr(): Testsensorfout: #0 Sensor_Sud-foutstatus: 1
[E][SENSOREN.cpp:76] Update(): Sen: Sensor_Sud-fout #1 kon temperatuurgegevens niet lezen
```

* Info - Logproces

Foutopsporing in informatielogboekprocessen van het uitvoertype. Het Info-type bevat de uitvoer van het Fout-type. In VSCode wordt het INFO-type groen weergegeven.

```Json
[I][KETTLES.cpp:2044] debConsole(): stel nieuwe powerlast in: 1071746ms
[I][KETTLES.cpp:1922] webhook(): webhook-antwoord: 
[I][KETTLES.cpp:2044] debConsole(): webhook ingeschakeld: 5000 ms (mDutyCycle 5000 * Vermogen 100 / 100)
```

* Uitgebreid - alle beschikbare informatie wordt uitgevoerd.

Uitgebreide debug-uitvoer van het type omvat alle voorgaande typen. Bovendien worden alle SSE-uitzendingen geregistreerd in het uitgebreide type. In VSCode wordt het uitgebreide type blauw weergegeven.

```Json
[V][SYSTEM.cpp:847] SSEBroadcastJson(): ketel hlt: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":32.4"}
[V][SYSTEM.cpp:919] SSEBroadcastJson(): ketel sud: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":32.4"}
[V][SYSTEM.cpp:839] SSEBroadcastJson(): ketel puree: {"power":0,"stepnr":0,"tempvalue":50.4","target":0,"step":6,"timer":3}
```

Bovendien zorgt de instelling Systeem - uitgebreid voor een curl-achtige registratie van alle WebServer GET- en POST-verzoeken.

Uitvoer op de seriële console heeft een vaste opmaak. Voorbeeld:

```Json
[V][SYSTEM.cpp:839] SSEBroadcastJson(): ketel puree: {"power":0,"stepnr":0,"tempvalue":50.4","target":0,"step":6,"timer":3}
```

De afzonderlijke onderdelen:

```Json
[V] Het uitvoertype (hier uitgebreid)
```

```Json
[SYSTEM.cpp:839] De afrondingslocatie van de broncode
```

```Json
SSEBroadcastJson(): De aanroepende functie
```

Het eigenlijke foutopsporingsbericht volgt na de dubbele punt:

```Json
ketel puree: {"power":0,"stepnr":0,"tempvalue":50.4","target":0,"step":6,"timer":3}
```

Wanneer de Brautomat is aangesloten op een seriële console, verschijnt de volgende uitvoer tijdens het opstarten

```Json
05:42:16.904 > [I][SYSINFO] start Brautomat32 V 1.56 Release
05:42:22.467 > [I][SYSINFO] mount bestandssysteem LittleFS: ok, vrij heap-geheugen: 192924
05:42:28.384 > [I][SYSINFO] mDNS http://Brautomat.lokaal IP-adres 192.168.100.112 tijd: 05:42:27 RSSI: -83
```

Naast der versie van Brautomat De MDNS-naam en het huidige IP-adres worden uitgevoerd. De regel _mount bestandssysteem LittleFS: ok, free heap mem:_ geeft aan dat het bestandssysteem is aangekoppeld.

## Testsensorfout

Een sensorfout kan via een web-URL worden geactiveerd. De sensoren in Brautomat hebben een ID die begint met 0. Via een weboproep kan een sensorfout worden gegenereerd:

```Json
http://Brautomat.local/setSenErr?id=0
```

Om de sensorfout te verhelpen, wordt exact dezelfde URL opnieuw benaderd. De eerste sensor heeft ID 0, de tweede heeft ID 1 en de derde heeft ID 2. In de URL hoef je alleen de laatste 0 te vervangen door de gewenste sensor ID.

Met deze sensorfouttest kan de parameter “Gedrag bij een sensorfout” heel eenvoudig worden gecontroleerd.

## Loggen met Microsoft VSCode

Microsoft VSCode kan in slechts enkele stappen worden ingesteld voor inloggen. Het is niet nodig om Microsoft VSCode te installeren; de draagbare versie is voldoende.

Download Microsoft VSCode als ZIP-bestand: [Microsoft VSCode](https://code.visualstudio.com/docs/?dv=winzip)

Pak het ZIP-bestand uit in een willekeurige map. Ga naar de map in de bestandsverkenner en maak een map met de naam data. De datamap zet MS VScode in draagbare modus en kan zonder installatie worden gebruikt.

![Microsoft Visual Studio-code](/docs/img/vscode_4.jpg)

Start Microsoft VSCode door te dubbelklikken op Code.exe.

![Microsoft Visual Studio-code](/docs/img/vscode_1.jpg)

De Serial Monitor-extensie is vereist in VScode voor logboekregistratie. Klik op de knop Extensies aan de linkerkant en typ 'seriële monitor' in het zoekveld.

![Microsoft Visual Studio-code](/docs/img/vscode_2.jpg)

Installeer de Serial Monitor-extensie van Microsoft. De seriële monitor is opgenomen in het Output-display. Klik op het uitvoeritem in het weergavemenu of open de uitvoer met de toetsencombinatie Ctrl Shift U. Het scherm Extensies kan worden verborgen of weergegeven door op de knop Extensie te klikken. Klik nu op het tabblad Seriële monitor in het venster Uitvoer. Nu hoeft u alleen nog maar de COM-poort te selecteren en de baudrate in te stellen op 115200. Het loggen wordt gestart met de knop Start Monitoring.

![Microsoft Visual Studio-code](/docs/img/vscode_3.jpg)
