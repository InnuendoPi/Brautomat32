# Skjerm

Brautomat kan valgfritt betjenes med en berøringsskjerm. 3,5 tommers berøringsskjerm fra Nextion støttes

| Nextion Display | Fastvare |
| --------------- | ---------- |
| NX4832T035 (Basic Series) | [NX4832T035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/brautomat-NX4832T035.tft) |
| NX4832K035 (Enhanced Series) | [NX4832K035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/brautomat-NX4832K035.tft) |
| NX4832F035 (Discovery Series) | [NX4832F035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/brautomat-NX4832F035.tft) |

Skjermen krever fastvare for å fungere med Brautomat. Fastvaren som samsvarer med skjermtypen er koblet i tabellen. Se også blinkende visningsfil.

## Koble til skjermen

Displayet kobles til tavlen med 4 kabler

| Kabel | Nextion Display | Tilkoblingsklemmekort |
| ------------- | --------------- | -------------------------- |
|     rød | Nåværende + | Vcc |
|   svart | Elektrisitet - | GND |
|    blå | TX | SDL (D1) |
|    gul | RX | SDA (D2) |

![Tilkobling](/docs/img/disp1.jpg)

## Flash-visningsfil

Displayet må klargjøres før første gangs bruk. For å gjøre dette lastes den aktuelle skjermfastvaren ned fra tabellen og lagres på et microSD-kort. MicroSD-kortet settes inn i SD-kortsporet på skjermen og Brautomat er slått på. Blinkprosessen starter automatisk. Blitsstatusen vises på displayet. Når det er fullført, vil Brautomat slås av og microSD-kortet fjernes. MicroSD-kortet er ikke nødvendig for normal drift.

## Se mosbrygg

![MashSud](/docs/img/brewpage-sm.jpg)

MashSud-siden er den foretrukne siden ved brygging. Informasjonen vises på displayet hvert sekund

* Faktisk temperatur
* Måltemperatur (hviletemperatur)
* gjenværende hviletid

vises. Den neste hvilen vises også på nederste linje. Tiden til venstre er tidspunktet neste hvile starter. Det grønne spillesymbolet til høyre indikerer at neste pause starter automatisk (autonext).

## Se kjeleoversikt

![Kjeleoversikt](/docs/img/kettlepage-sm.jpg)

Kjeleoversikten viser bryggkokeren og, hvis tilgjengelig, brygget og hell over kjelen med informasjon om faktisk temperatur og måltemperatur.

_Merk: kjeleoversiktsvisningen viser adressen til Brautomat på den nederste linjen: enten mDNS-navnet eller IP-adressen._

## Manuell kontrollvisning

![Manuell kontroll](/docs/img/induction-mode-sm.jpg)

Den manuelle kontrollsiden tilbyr muligheten til å betjene GGM IDS manuelt. Effektnivåene kan justeres opp eller ned ved hjelp av + og - knappene.
