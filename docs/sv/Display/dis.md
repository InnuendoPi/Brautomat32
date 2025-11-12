# Display

Brautomat kan valfritt styras med en pekskärm. 3,5-tums pekskärm från Nextion stöds

| Nextion Display | Firmware |
| --------------- | ---------- |
| NX4832T035 (Basic-serien) | [NX4832T035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/Brautomat-NX4832T035.tft) |
| NX4832K035 (Enhanced Series) | [NX4832K035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/Brautomat-NX4832K035.tft) |
| NX4832F035 (Discovery Series) | [NX4832F035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/Brautomat-NX4832F035.tft) |

Skärmen kräver firmware för att fungera med Brautomat. Den fasta programvaran som matchar skärmtypen är länkad i tabellen. Se även blinkande visningsfil.

## Anslut display

Displayen är ansluten till kortet med 4 kablar

| Kabel | Nextion Display | Anslutningsplintkort |
| ------------- | --------------- | ------------------------ |
|     röd | Aktuell + | Vcc |
|   svart | Elektricitet - | GND |
|    blå | TX | SDL (Dl) |
|    gul | RX | SDA (D2) |

![Anslutning](/docs/img/disp1.jpg)

## Flash-visningsfil

Displayen måste förberedas innan den tas i drift. För att göra detta laddas lämplig bildskärmsfirmware ner från tabellen och sparas på ett microSD-kort. MicroSD-kortet sätts in i SD-kortplatsen på skärmen och Brautomat slås på. Blinkningsprocessen startar automatiskt. Blixtens status visas på displayen. När det är klart kommer Brautomat att stängas av och microSD-kortet tas bort. MicroSD-kortet behövs inte för normal drift.

## Visa mäskbryggning

![MaischeSud](/docs/img/brewpage-sm.jpg)

MashSud-sidan är den föredragna sidan vid bryggning. Informationen visas på displayen varje sekund

* Faktisk temperatur
* Måltemperatur (vilotemperatur)
* återstående vilotid

visas. Nästa vila visas också på den nedersta raden. Tiden till vänster är den tidpunkt då nästa vila börjar. Den gröna spelsymbolen till höger indikerar att nästa vila startar automatiskt (autonext).

## Visa pannöversikt

![Kettle översikt](/docs/img/kettlepage-sm.jpg)

Pannöversikten visar mäskbryggan och, om tillgänglig, bryggningen och häll över pannan med information om den faktiska temperaturen och måltemperaturen.

_Obs: pannöversiktsvyn visar adressen till Brautomat på den nedersta raden: antingen mDNS-namnet eller IP-adressen._

## Manuell kontrollvy

![Manuell kontroll](/docs/img/induction-mode-sm.jpg)

Sidan för manuell kontroll erbjuder möjligheten att styra GGM IDS manuellt. Effektnivåerna kan justeras upp eller ner med knapparna + och -.
