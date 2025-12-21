# Weergave

De Brautomat kan optioneel worden bediend met een touchdisplay. 3,5 inch touchscreen van Nextion wordt ondersteund

| Nextion-display | Firmware |
| --------------- | --------- |
| NX4832T035 (basisserie) | [NX4832T035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/brautomat-NX4832T035.tft) |
| NX4832K035 (verbeterde serie) | [NX4832K035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/brautomat-NX4832K035.tft) |
| NX4832F035 (Discovery-serie) | [NX4832F035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/brautomat-NX4832F035.tft) |

Het display heeft firmware nodig om te kunnen werken met Brautomat. De firmware die overeenkomt met het displaytype is in de tabel gekoppeld. Zie ook het displaybestand flashen.

## Scherm aansluiten

Het display is met 4 kabels op het bord aangesloten

| Kabel | Nextion-display | Aansluitklemmenbord |
| ------------- | --------------- | ----------------------- |
|     rood | Huidig ​​+ | Vcc |
|   zwart | Elektriciteit - | GND |
|    blauw | TX | SDL (D1) |
|    geel | RX | SDA (D2) |

![Verbinding](/docs/img/disp1.jpg)

## Flash-weergavebestand

Het display moet vóór de eerste inbedrijfstelling worden voorbereid. Om dit te doen, wordt de juiste displayfirmware uit de tabel gedownload en op een microSD-kaart opgeslagen. De microSD-kaart wordt in de SD-kaartsleuf op het display geplaatst en de Brautomat wordt ingeschakeld. Het knipperproces start automatisch. De flitserstatus wordt op het display weergegeven. Eenmaal voltooid, wordt de Brautomat uitgeschakeld en wordt de microSD-kaart verwijderd. Voor normaal gebruik is de microSD-kaart niet nodig.

## Bekijk pureebrouwsel

![MashSud](/docs/img/brewpage-sm.jpg)

De MashSud-kant heeft de voorkeur bij het zetten. De informatie wordt elke seconde op het display weergegeven

* Werkelijke temperatuur
* Doeltemperatuur (rusttemperatuur)
* resterende rusttijd

weergegeven. De volgende rust wordt ook weergegeven op de onderste regel. Het tijdstip aan de linkerkant is het tijdstip waarop de volgende rust begint. Het groene speelsymbool aan de rechterkant geeft aan dat de volgende rust automatisch begint (autonext).

## Bekijk keteloverzicht

![Keteloverzicht](/docs/img/kettlepage-sm.jpg)

Het keteloverzicht toont de maischbrouwketel en, indien aanwezig, de brouw- en overgietketel met informatie over de werkelijke en streeftemperatuur.

_Opmerking: in het keteloverzicht wordt op de onderste regel het adres van Brautomat weergegeven: de mDNS-naam of het IP-adres._

## Handmatige bedieningsweergave

![Handmatige bediening](/docs/img/induction-mode-sm.jpg)

De handmatige bedieningspagina biedt de mogelijkheid om de GGM IDS handmatig te bedienen. Met de knoppen + en - kunnen de vermogensniveaus naar boven of beneden worden aangepast.
