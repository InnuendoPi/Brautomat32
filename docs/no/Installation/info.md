# Installasjon

For å bruke Brautomat, må fastvaren blinke. I tillegg må ESP-mikrokontrolleren kobles til den lokale WiFi-en.

## Flash-fastvare med MS Windows

Brautomat32-versjonen er for ESP32 og er basert på IDF5-rammeverket.

* [ESP32 IDF5](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/main/Brautomat32.zip): Brautomat32.zip

Fastvaren installeres ved å bruke "Flashen.cmd"-skriptet i ZIP-arkivet. ZIP-arkivet pakkes ut i en hvilken som helst mappe. ESP-mikrokontrolleren kobles til PC/notebook via en USB-kabel. Dobbeltklikk på Flashen.cmd-skriptet begynner å blinke fastvaren.

MS Windows-operativsystemet oppretter automatisk en seriell COM-port når ESP-mikrokontrolleren kobles til en USB-port på PC-en eller den bærbare datamaskinen.

![Windows Enhetsbehandling](/docs/img/com.jpg)

En ESP-enhet ble funnet på COM7 på bildet. I sjeldne tilfeller leveres ikke en seriell COM-port automatisk under MS Windows. USB-drivere for ESP-mikrokontrollere er tilgjengelige på følgende nettsteder: (MS Win og macOS)

[!"

Flashen.cmd-skriptet bruker verktøyet esptool.exe <https://github.com/espressif/esptool>. ESPTool er fritt tilgjengelig for ulike operativsystemer (macOS, Linux). Windows-versjonen 64bit er inkludert i ZIP-arkivet. ESPTool er lisensiert under GPL v2. Se den medfølgende [LISENS-filen](https://github.com/espressif/esptool/blob/master/LICENSE) for en kopi.

### Manuell blinkende MS Windows, macOS og Linux

Hvis skriptet ikke kan brukes, kan fastvaren overføres manuelt til ESP-mikrokontrolleren.

ESP32 Trinn 1 Slett Flash:

``` json
esptool.exe --chip ESP32 slette-flash
```

ESP32 Trinn 2 Flash-fastvare:

``` json
esptool.exe --chip ESP32 --baud 921600 --before default-reset --etter hard-reset write-flash 0x1000 bootloader.bin 0x8000 partitions.bin 0xe000 boot_app0.bin 0x10000 firmware[35.0M_0bin 0x]
```

### Blinkende fastvare med macOS

Last ned: [pyflasher](https://github.com/marcelstoer/nodemcu-pyflasher/releases)

På macOS er flashing av fastvaren delt inn i to trinn. I det første trinnet installeres fastvaren Brautomat.ino.bin på ESP ved hjelp av pyflasher-verktøyet.

![macOS](/docs/img/flashen_macos.png)

Brautomat må da kobles til WLAN. Når Brautomat er koblet til WiFi, må filsystemet installeres.\
Åpne i nettleseren: <http://Brautomat.local/update>

Etter å ha klikket på "Filsystem"-knappen, velges filen LittleFS.bin og installeres ved å klikke på Oppdater filsystem.

## WLAN-konfigurasjon

Etter å ha blinket fastvaren, starter Brautomat i AccessPoint-modus. Et åpent WLAN med navnet _Brautomat_ blir synlig. En tilkobling må opprettes med dette WLAN. Når tilkoblingen er opprettet, åpner nettleseren WLAN-konfigurasjonsportalen. Hvis portalen ikke åpnes automatisk, må adressen <http://192.168.4.1> legges inn manuelt i nettleseren.

![WLAN-konfigurasjon](/docs/img/wlan1.jpg)

WLAN-konfigurasjonen vises ved å bruke knappen "Konfigurer WiFi".

![WLAN-konfigurasjon](/docs/img/wlan2.jpg)

WLAN (SSID og passord) må angis her. Med _Lagre_ starter Brautomat på nytt og kobles til WLAN. Nettgrensesnittet til Brautomat kan nås i det lokale WLAN via adressen <http://Brautomat.local>.

Dette fullfører den grunnleggende installasjonen. Fastvareblinkingen og WLAN-konfigurasjonsprosessen trenger bare å utføres én gang. Brautomat må nå konfigureres. Konfigurasjonen er beskrevet i delen _Grunnleggende oppsettung_ beskrevet. Følgende seksjon _Oppdater_ kan hoppes over til å begynne med.

> **Merk:**\
Brautomat32 prøver å opprette en forbindelse med WLAN-konfigurasjonen (SSID og passord) i opptil 20 sekunder. Hvis ingen tilkobling kan opprettes, for eksempel hvis passordet ble skrevet inn feil, vil Brautomat32 starte på nytt i AccessPoint-modus.\
I sjeldne tilfeller og vanligvis bare når WLAN-signalet er svakt, finner ikke Brautomat32 et passende WLAN og starter også i AccessPoint Mode etter ca. 20 sekunder. I dette tilfellet vil det bare hjelpe å starte Brautomat32 på nytt.

##Oppdateringer

Oppdateringer kan installeres i Brautomat via «Oppdater»-menyen. En ny fastvare kan importeres via "WebUpdate" eller "File Update". Når du oppdaterer fastvaren via WebUpdate, laster fastvaren ned gjeldende versjon fra Internett fra github-lageret. Ved oppdatering via filoppdatering lastes fastvaren opp fra den lokale PC-en. En USB-kabel eller skriptet fra installasjonen er ikke nødvendig.

Minneområdet til en ESP-mikrokontroller er delt inn i fastvare og filsystem. Under pågående drift kan konfigurasjoner, oppskrifter og andre filer kun lagres eller endres i filsystemet. Firmware-området er kun tilgjengelig for leseformål. Under en oppdatering installeres fastvareområdet fullstendig på nytt og individuelle filer erstattes i filsystemet.

### WebUpdate

![WebUpdate](/docs/img/webupdate.jpg)

WebUpdate starter Brautomat på nytt flere ganger. Først oppdateres fastvaren. Etter en ny omstart vil rammeverket bli oppdatert. WebUpdate-prosessen logges i webUpdateLog.txt-filen.

Hvis alternativet _WebUpdate med prøveversjon_ er aktivert, vil WebUpdate bli utført med gjeldende utviklerversjon. Dette er testversjoner. Nye funksjoner i fastvaren er (vanligvis) i utgangspunktet lagret som en testversjon i github-depotet. Prøveversjoner anbefales ikke for produktiv bruk.

### Filoppdatering

En oppdatering av fastvaren via FileUpdate-valget skjer i noen få trinn:

Først må gjeldende fastvare lastes ned. ZIP-arkivet vil da bli pakket ut.\
I nettgrensesnittet Brautomat, velg menyelementet Oppdater og deretter FileUpdate. Et enkelt oppdateringsnettsted (bilde 1) vises:

![FileUpdate](/docs/img/fileupdate2.jpg)

Under Firmware med "Velg fil"-knappen må filen _firmware.bin_ nå velges fra ZIP-arkivet (i figur 2). Ved å klikke på Oppdater fastvare starter oppdateringen.

Filsystemet til Brautomat kan også oppdateres.

> **Merk:**\
Oppdater filsystem-funksjonen gjenoppbygger filsystemet. Update FileSystem overskriver alle innstillinger og konfigurasjoner. I tillegg til konfigurasjonen inkluderer dette også mash brew-kjeleprofiler og oppskrifter. I nesten alle tilfeller er en filoppdateringsfastvare etterfulgt av en WebUpdate det riktige valget fordi WebUpdate oppdaterer individuelle filer i filsystemet etter fastvareoppdateringen.
