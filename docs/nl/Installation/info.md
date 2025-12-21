# Installatie

Om de Brautomat te kunnen gebruiken, moet de firmware worden geflasht. Bovendien moet de ESP-microcontroller verbonden zijn met de lokale WiFi.

## Flash-firmware met MS Windows

De Brautomat32-versie is voor ESP32 en is gebaseerd op het IDF5-framework.

* [ESP32 IDF5](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/main/Brautomat32.zip): Brautomat32.zip

De firmware wordt geïnstalleerd met behulp van het script “Flashen.cmd” in het ZIP-archief. Het ZIP-archief wordt in elke map uitgepakt. De ESP-microcontroller wordt via een USB-kabel met de pc/notebook verbonden. Als u dubbelklikt op het Flashen.cmd-script, wordt de firmware geflasht.

Het MS Windows-besturingssysteem creëert automatisch een seriële COM-poort wanneer de ESP-microcontroller op een USB-poort van de pc of notebook wordt aangesloten.

![Windows-apparaatbeheer](/docs/img/com.jpg)

Op de afbeelding is een ESP-apparaat gevonden op COM7. In zeldzame gevallen wordt onder MS Windows niet automatisch voorzien in een seriële COM-poort. USB-stuurprogramma's voor ESP-microcontrollers zijn beschikbaar op de volgende websites: (MS Win en macOS)

[![ESP32 Stuurprogramma's](https://img.shields.io/static/v1?label=Treiber&message=ESP32&logo=arduino&logoColor=white&color=blue)](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)

Het Flashen.cmd-script gebruikt de tool esptool.exe <https://github.com/espressif/esptool>. ESPTool is gratis beschikbaar voor verschillende besturingssystemen (macOS, Linux). De Windows-versie 64bit is opgenomen in het ZIP-archief. ESPTool is gelicentieerd onder GPL v2. Zie het begeleidende [LICENSE-bestand](https://github.com/espressif/esptool/blob/master/LICENSE) voor een kopie.

### Handmatig flashen MS Windows, macOS en Linux

Als het script niet kan worden gebruikt, kan de firmware handmatig naar de ESP-microcontroller worden overgebracht.

ESP32 Stap 1 Flash verwijderen:

```Json
esptool.exe --chip ESP32 wis-flash
```

ESP32 Stap 2 Flash-firmware:

```Json
esptool.exe --chip ESP32 --baud 921600 --voor standaardreset --na harde reset write-flash 0x1000 bootloader.bin 0x8000 partities.bin 0xe000 boot_app0.bin 0x10000 firmware.bin 0x350000 LittleFS.bin
```

### Firmware flashen met macOS

Downloaden: [pyflasher](https://github.com/marcelstoer/nodemcu-pyflasher/releases)

Op macOS is het flashen van de firmware verdeeld in twee stappen. In de eerste stap wordt de firmware Brautomat.ino.bin op de ESP geïnstalleerd met behulp van de pyflasher-tool.

![macOS](/docs/img/flashen_macos.png)

De Brautomat moet dan verbonden zijn met het WLAN. Zodra de Brautomat is verbonden met WiFi, moet het bestandssysteem worden geïnstalleerd.\
Openen in browser: <http://Brautomat.local/update>

Nadat u op de knop “Bestandssysteem” hebt geklikt, wordt het bestand LittleFS.bin geselecteerd en geïnstalleerd door op Update bestandssysteem te klikken.

## WLAN-configuratie

Na het flashen van de firmware start de Brautomat in AccessPoint-modus. Er wordt een open WLAN met de naam _Brautomat_ zichtbaar. Met dit WLAN moet een verbinding tot stand worden gebracht. Zodra de verbinding tot stand is gebracht, opent de webbrowser het WLAN-configuratieportaal. Als de portal niet automatisch wordt geopend, moet het adres <http://192.168.4.1> handmatig in de webbrowser worden ingevoerd.

![WLAN-configuratie](/docs/img/wlan1.jpg)

Met de knop “WiFi configureren” wordt de WLAN-configuratie weergegeven

![WLAN-configuratie](/docs/img/wlan2.jpg)

Hier moet het WLAN (SSID en wachtwoord) worden ingevoerd. Met _Save_ start de Brautomat opnieuw op en maakt verbinding met het WLAN. De webinterface van Brautomat is in het lokale WLAN te bereiken via het adres <http://Brautomat.local>.

Hiermee is de basisinstallatie voltooid. Het flashen van de firmware en het WLAN-configuratieproces hoeven slechts één keer te worden uitgevoerd. De Brautomat moet nu worden geconfigureerd. De configuratie wordt beschreven in de sectie _Basisinstellingen_. De volgende sectie _Update_ kan in eerste instantie worden overgeslagen.

> **Opmerking:**\
De Brautomat32 probeert gedurende maximaal 20 seconden verbinding te maken met de WLAN-configuratie (SSID en wachtwoord). Als er geen verbinding tot stand kan worden gebracht, bijvoorbeeld als het wachtwoord verkeerd is ingevoerdwerd gebruikt, dan start de Brautomat32 opnieuw in AccessPoint-modus.\
In zeldzame gevallen en meestal alleen als het WLAN-signaal zwak is, vindt de Brautomat32 geen geschikt WLAN en start hij ook na ca. 20 minuten in de AccessPoint-modus. 20 seconden. In dit geval zal alleen het herstarten van de Brautomat32 helpen.

##Updates

Updates kunnen worden geïnstalleerd in Brautomat via het menu 'Update'. Een nieuwe firmware kan worden geïmporteerd via “WebUpdate” of “File Update”. Bij het updaten van de firmware via WebUpdate downloadt de firmware de huidige versie van internet vanuit de github-repository. Bij het updaten via bestandsupdate wordt de firmware geüpload vanaf de lokale pc. Een USB-kabel of het script van de installatie zijn niet vereist.

Het geheugengebied van een ESP-microcontroller is onderverdeeld in firmware en bestandssysteem. Tijdens het lopende bedrijf kunnen configuraties, recepten en andere bestanden alleen in het bestandssysteem worden opgeslagen of gewijzigd. Het Firmware-gedeelte is alleen toegankelijk voor leesdoeleinden. Tijdens een update wordt het firmwaregedeelte volledig opnieuw geïnstalleerd en worden afzonderlijke bestanden in het bestandssysteem vervangen.

### WebUpdate

![WebUpdate](/docs/img/webupdate.jpg)

De WebUpdate start de Brautomat verschillende keren opnieuw op. Eerst wordt de firmware bijgewerkt. Na een nieuwe herstart wordt het raamwerk bijgewerkt. Het WebUpdate-proces wordt vastgelegd in het bestand webUpdateLog.txt.

Als de optie _WebUpdate met proefversie_ is geactiveerd, wordt de WebUpdate uitgevoerd met de huidige ontwikkelaarsversie. Dit zijn testversies. Nieuwe functies in de firmware worden (meestal) in eerste instantie als testversie opgeslagen in de github repository. Proefversies worden niet aanbevolen voor productief gebruik.

### BestandUpdate

Een update van de firmware via de FileUpdate-selectie vindt in slechts enkele stappen plaats:

Eerst moet de huidige firmware worden gedownload. Het ZIP-archief wordt vervolgens uitgepakt.\
Selecteer in de webinterface Brautomat het menu-item Update en vervolgens FileUpdate. Er wordt een eenvoudige updatewebsite (afbeelding 1) weergegeven:

![Bestandupdate](/docs/img/dateiupdate2.jpg)

Onder Firmware met de knop "Bestand selecteren" moet nu het bestand _firmware.bin_ uit het ZIP-archief worden geselecteerd (in Figuur 2). Als u op Update Firmware klikt, wordt de update gestart.

Het bestandssysteem van Brautomat kan ook worden bijgewerkt.

> **Opmerking:**\
Met de functie Update FileSystem wordt het bestandssysteem opnieuw opgebouwd. Update FileSystem overschrijft alle instellingen en configuraties. Naast de configuratie bevat dit ook de maischbrouwketelprofielen en recepten. In bijna alle gevallen is een bestandsupdate van de firmware gevolgd door een WebUpdate de juiste keuze, omdat de WebUpdate na de firmware-update individuele bestanden in het bestandssysteem bijwerkt.
