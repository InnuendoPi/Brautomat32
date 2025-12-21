# Installation

För att kunna använda Brautomat måste den fasta programvaran blinka. Dessutom måste ESP-mikrokontrollern vara ansluten till den lokala WiFi.

## Flash-firmware med MS Windows

Brautomat32-versionen är för ESP32 och är baserad på IDF5-ramverket.

* [ESP32 IDF5](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/main/Brautomat32.zip): Brautomat32.zip

Den fasta programvaran installeras med "Flashen.cmd"-skriptet som finns i ZIP-arkivet. ZIP-arkivet packas upp i valfri mapp. ESP-mikrokontrollern ansluts till PC/notebook via en USB-kabel. Dubbelklicka på Flashen.cmd-skriptet börjar blinka den fasta programvaran.

Operativsystemet MS Windows skapar automatiskt en seriell COM-port när ESP-mikrokontrollern ansluts till en USB-port på datorn eller notebook-datorn.

![Windows Enhetshanteraren](/docs/img/com.jpg)

En ESP-enhet hittades på COM7 i bilden. I sällsynta fall tillhandahålls inte en seriell COM-port automatiskt under MS Windows. USB-drivrutiner för ESP-mikrokontroller finns på följande webbplatser: (MS Win och macOS)

[![ESP32 Drivrutiner](https://img.shields.io/static/v1?label=Treiber&message=ESP32&logo=arduino&logoColor=white&color=blue)](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)

Skriptet Flashen.cmd använder verktyget esptool.exe <https://github.com/espressif/esptool>. ESPTool är fritt tillgängligt för olika operativsystem (macOS, Linux). Windows-versionen 64bit ingår i ZIP-arkivet. ESPTool är licensierad under GPL v2. Se den medföljande [LICENS-filen](https://github.com/espressif/esptool/blob/master/LICENSE) för en kopia.

### Manuellt blinkande MS Windows, macOS och Linux

Om skriptet inte kan användas kan den fasta programvaran överföras manuellt till ESP-mikrokontrollern.

ESP32 Steg 1 Ta bort Flash:

``` json
esptool.exe --chip ESP32 radera-flash
```

ESP32 Steg 2 Flash-firmware:

``` json
esptool.exe --chip ESP32 --baud 921600 --before default-reset --after hard-reset write-flash 0x1000 bootloader.bin 0x8000 partitions.bin 0xe000 boot_app0.bin 0x10000 firmware[35.0_0x]
```

### Blinkande firmware med macOS

Ladda ner: [pyflasher](https://github.com/marcelstoer/nodemcu-pyflasher/releases)

På macOS är flashning av den fasta programvaran uppdelad i två steg. I det första steget installeras den fasta programvaran Brautomat.ino.bin på ESP:n med hjälp av pyflasher-verktyget.

![macOS](/docs/img/flashen_macos.png)

Brautomat måste sedan anslutas till WLAN. När Brautomat är ansluten till WiFi måste filsystemet installeras.\
Öppna i webbläsaren: <http://Brautomat.local/update>

Efter att ha klickat på knappen "Filsystem" väljs filen LittleFS.bin och installeras genom att klicka på Uppdatera filsystem.

## WLAN-konfiguration

Efter att ha flashat den fasta programvaran startar Brautomat i AccessPoint-läge. Ett öppet WLAN med namnet _Brautomat_ blir synligt. En anslutning måste upprättas med detta WLAN. När anslutningen är upprättad, öppnar webbläsaren WLAN-konfigurationsportalen. Om portalen inte öppnas automatiskt måste adressen <http://192.168.4.1> anges manuellt i webbläsaren.

![WLAN-konfiguration](/docs/img/wlan1.jpg)

WLAN-konfigurationen visas med knappen "Konfigurera WiFi".

![WLAN-konfiguration](/docs/img/wlan2.jpg)

WLAN (SSID och lösenord) måste anges här. Med _Save_ startar Brautomat om och ansluter till WLAN. Webbgränssnittet för Brautomat kan nås i det lokala WLAN via adressen <http://Brautomat.local>.

Detta avslutar den grundläggande installationen. Firmware-blinkningen och WLAN-konfigurationsprocessen behöver bara utföras en gång. Brautomat måste nu konfigureras. Konfigurationen beskrivs i avsnittet _Basic Setup_. Följande avsnitt _Uppdatera_ kan hoppas över initialt.

> **Obs:**\
Brautomat32 försöker upprätta en anslutning med WLAN-konfigurationen (SSID och lösenord) i upp till 20 sekunder. Om en anslutning inte kan upprättas, till exempel om lösenordet har angetts felaktigtanvändes, startar Brautomat32 igen i AccessPoint-läge.\
I sällsynta fall och vanligtvis bara när WLAN-signalen är svag, hittar Brautomat32 inte ett lämpligt WLAN och startar även i AccessPoint Mode efter ca. 20 sekunder. I det här fallet hjälper det bara att starta om Brautomat32.

##Uppdateringar

Uppdateringar kan installeras i Brautomat via menyn "Uppdatera". En ny firmware kan importeras via "WebUpdate" eller "File Update". När den fasta programvaran uppdateras via WebUpdate laddar den inbyggda programvaran ner den aktuella versionen från Internet från github-förvaret. Vid uppdatering via filuppdatering laddas firmware upp från den lokala datorn. En USB-kabel eller skriptet från installationen krävs inte.

Minnesområdet för en ESP-mikrokontroller är uppdelat i firmware och filsystem. Under pågående drift kan konfigurationer, recept och andra filer endast sparas eller ändras i filsystemet. Området Firmware kan endast nås för läsning. Under en uppdatering installeras firmwareområdet helt om och enskilda filer ersätts i filsystemet.

### WebUpdate

![WebUpdate](/docs/img/webupdate.jpg)

WebUpdate startar om Brautomat flera gånger. Först uppdateras firmwaren. Efter ytterligare en omstart kommer ramverket att uppdateras. WebUpdate-processen loggas i filen webUpdateLog.txt.

Om alternativet _WebUpdate med testversion_ är aktiverat, kommer WebUpdate att utföras med den aktuella utvecklarversionen. Dessa är testversioner. Nya funktioner i firmware lagras (vanligtvis) initialt som en testversion i github-förvaret. Testversioner rekommenderas inte för produktiv användning.

### FileUpdate

En uppdatering av firmware via FileUpdate-valet sker med bara några få steg:

Först måste den aktuella firmware laddas ner. ZIP-arkivet kommer sedan att packas upp.\
I webbgränssnittet Brautomat, välj menyalternativet Uppdatera och sedan FileUpdate. En enkel uppdateringswebbplats (bild 1) visas:

![FileUpdate](/docs/img/dateiupdate2.jpg)

Under Firmware med knappen "Välj fil" måste nu filen _firmware.bin_ väljas från ZIP-arkivet (i figur 2). Genom att klicka på Uppdatera firmware startar uppdateringen.

Filsystemet för Brautomat kan också uppdateras.

> **Obs:**\
Funktionen Uppdatera filsystem bygger om filsystemet. Update FileSystem skriver över alla inställningar och konfigurationer. Utöver konfigurationen inkluderar detta även mäskbryggarprofiler och recept. I nästan alla fall är en filuppdateringsfirmware följt av en WebUpdate det rätta valet eftersom WebUpdate uppdaterar enskilda filer i filsystemet efter firmwareuppdateringen.
