# Instalace

Aby bylo možné použít Brautomat, musí být firmware flashován. Kromě toho musí být mikrokontrolér ESP připojen k místní WiFi.

## Flash firmware s MS Windows

Verze Brautomat32 je pro ESP32 a je založena na frameworku IDF5.

* [ESP32 IDF5](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/main/Brautomat32.zip): Brautomat32.zip

Firmware se instaluje pomocí skriptu „Flashen.cmd“ obsaženého v archivu ZIP. Archiv ZIP se rozbalí do libovolné složky. Mikrokontrolér ESP je připojen k PC/notebooku pomocí USB kabelu. Poklepáním na skript Flashen.cmd začne blikat firmware.

Operační systém MS Windows automaticky vytvoří sériový COM port při připojení mikrokontroléru ESP k USB portu na PC nebo notebooku.

![Správce zařízení Windows](/docs/img/com.jpg)

Na obrázku bylo nalezeno zařízení ESP na COM7. V ojedinělých případech není sériový COM port pod MS Windows automaticky poskytnut. Ovladače USB pro mikrokontroléry ESP jsou k dispozici na následujících webových stránkách: (MS Win a macOS)

[![ESP32 Ovladače](https://img.shields.io/static/v1?label=Treiber&message=ESP32&logo=arduino&logoColor=white&color=blue)](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)

Skript Flashen.cmd používá nástroj esptool.exe <https://github.com/espressif/esptool>. ESPTool je volně dostupný pro různé operační systémy (macOS, Linux). V archivu ZIP je zahrnuta verze Windows 64bit. ESPTool je licencován pod GPL v2. Kopii naleznete v přiloženém [souboru LICENCE](https://github.com/espressif/esptool/blob/master/LICENSE).

### Ruční flashování MS Windows, macOS a Linux

Pokud skript nelze použít, lze firmware přenést ručně do mikrokontroléru ESP.

ESP32 Krok 1 Smazání Flash:

```json
esptool.exe --chip ESP32 erase-flash
```

ESP32 Krok 2 Firmware Flash:

```json
esptool.exe --chip ESP32 --baud 921600 --before default-reset --after-reset write-flash 0x1000 bootloader.bin 0x8000 partitions.bin 0xe000 boot_app0.bin 0x10000 boot_app0.bin 0x10000 firmware.bin 0x3] Firmware.bin 0x3
```

### Flash firmware s macOS

Stáhnout: [pyflasher](https://github.com/marcelstoer/nodemcu-pyflasher/releases)

V systému macOS je flashování firmwaru rozděleno do dvou kroků. V prvním kroku se na ESP pomocí nástroje pyflasher nainstaluje firmware Brautomat.ino.bin.

![macOS](/docs/img/flashen_macos.png)

Poté musí být Brautomat připojen k WLAN. Jakmile je Brautomat připojen k WiFi, musí být nainstalován souborový systém.\
Otevřít v prohlížeči: <http://Brautomat.local/update>

Po kliknutí na tlačítko „Systém souborů“ se kliknutím na Aktualizovat systém souborů vybere a nainstaluje soubor LittleFS.bin.

## Konfigurace WLAN

Po flashování firmwaru se Brautomat spustí v režimu AccessPoint. Otevře se otevřená WLAN s názvem _Brautomat_. S touto sítí WLAN musí být navázáno spojení. Jakmile je spojení navázáno, webový prohlížeč otevře konfigurační portál WLAN. Pokud se portál neotevře automaticky, je nutné adresu <http://192.168.4.1> zadat ručně ve webovém prohlížeči.

![Konfigurace WLAN](/docs/img/wlan1.jpg)

Konfigurace WLAN se zobrazí pomocí tlačítka „Konfigurovat WiFi“.

![Konfigurace WLAN](/docs/img/wlan2.jpg)

Zde je třeba zadat WLAN (SSID a heslo). Pomocí _Save_ se Brautomat restartuje a připojí k WLAN. Webové rozhraní Brautomat je dostupné v místní síti WLAN přes adresu <http://Brautomat.local>.

Tím je základní instalace dokončena. Proces flashování firmwaru a konfigurace WLAN stačí provést pouze jednou. Nyní je třeba nakonfigurovat Brautomat. Konfigurace je popsána v části _Základní nastavení_. Následující část _Update_ lze zpočátku přeskočit.

> **Poznámka:**\
Brautomat32 se snaží navázat spojení s konfigurací WLAN (SSID a heslo) po dobu až 20 sekund. Pokud nelze navázat spojení, například pokud je heslo zadáno nesprávněbyl použit, pak se Brautomat32 znovu spustí v režimu AccessPoint.\
Ve vzácných případech a obvykle pouze při slabém signálu WLAN Brautomat32 nenalezne vhodnou WLAN a také se spustí v režimu AccessPoint po cca. 20 sekund. V tomto případě pomůže pouze restartování Brautomat32.

##Aktualizace

Aktualizace lze nainstalovat do Brautomat prostřednictvím nabídky „Aktualizovat“. Nový firmware lze importovat pomocí „WebUpdate“ nebo „File Update“. Při aktualizaci firmwaru přes WebUpdate si firmware stáhne aktuální verzi z internetu z úložiště github. Při aktualizaci pomocí aktualizace souboru se firmware nahraje z místního PC. USB kabel ani skript z instalace nejsou potřeba.

Paměťová oblast mikrokontroléru ESP je rozdělena na firmware a souborový systém. Během probíhajícího provozu lze konfigurace, receptury a další soubory ukládat nebo měnit pouze v systému souborů. Oblast Firmware je přístupná pouze pro účely čtení. Během aktualizace je oblast firmwaru zcela přeinstalována a jednotlivé soubory jsou nahrazeny v systému souborů.

### Aktualizace webu

![WebUpdate](/docs/img/webupdate.jpg)

WebUpdate několikrát restartuje Brautomat. Nejprve se aktualizuje firmware. Po dalším restartu bude framework aktualizován. Proces WebUpdate je zaznamenán do souboru webUpdateLog.txt.

Pokud je aktivována možnost _WebUpdate se zkušební verzí_, bude WebUpdate provedena s aktuální verzí vývojáře. Jedná se o testovací verze. Nové funkce ve firmwaru jsou (obvykle) zpočátku uloženy jako testovací verze v úložišti github. Zkušební verze se nedoporučují pro produktivní použití.

### Aktualizace souboru

Aktualizace firmwaru pomocí volby FileUpdate probíhá v několika krocích:

Nejprve je nutné stáhnout aktuální firmware. Archiv ZIP se poté rozbalí.\
Ve webovém rozhraní Brautomat vyberte položku nabídky Aktualizovat a poté FileUpdate. Zobrazí se jednoduchá webová stránka s aktualizací (obrázek 1):

![FileUpdate](/docs/img/dateiupdate2.jpg)

V části Firmware pomocí tlačítka „Vybrat soubor“ je nyní nutné vybrat soubor _firmware.bin_ z archivu ZIP (na obrázku 2). Kliknutím na Update Firmware spustíte aktualizaci.

Systém souborů Brautomat lze také aktualizovat.

> **Poznámka:**\
Funkce Update FileSystem znovu sestaví systém souborů. Update FileSystem přepíše všechna nastavení a konfigurace. Kromě konfigurace to zahrnuje také profily a receptury bojleru na kaši. Téměř ve všech případech je správnou volbou aktualizace firmwaru souborů následovaná aktualizací WebUpdate, protože aktualizace WebUpdate aktualizuje jednotlivé soubory v systému souborů po aktualizaci firmwaru.
