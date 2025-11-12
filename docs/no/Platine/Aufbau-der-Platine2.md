# Styrets struktur versjon 2

Denne korte veiledningen beskriver styrets struktur. Styrestrukturen er ikke krevende. Denne korte beskrivelsen er ment som et hjelpemiddel for den uerfarne hobbyisten og er ikke rettet mot elektroingeniører. Informasjon om lodding, passende loddebolter og loddemetall finner du på YouTube eller lignende kanaler.

Delelisten til styret:

![Deleliste](/docs/img/Aufbau1.jpg)

Nummer 1: Motstand 4,7 kOhm\
Nummer 2: JST-HX-sokkel (hvit) og 5-pinners skrueklemme\
Nummer 3: passiv piezo-summer\
Nummer 4: Skru rekkeklemmer med en stigning på 2,54 mm

## Deleliste for versjon 2-kort

JST-HX-sokkelposisjonen er et alternativ til den 5-pinners skrueklemmen. Kabelen fra kontrollpanelet til GGM IDS2 har passende plugg for en JST-HX-kontakt. Hvis det brukes en erstatningskabel i stedet for den originale kabelen, er tilkoblingen enklere med en 5-skruer rekkeklemme.

| Nummer | Varenavn | Link til artikkel |
| ------------------------------------------------------------ | ------------------------------------ | ---------------------------------- |
| 3 | Skrueklemme 3-pin RM 2,54 | [amazon](https://www.amazon.de/dp/B07PH5HWQL/?coliid=I1JP3GL9UZVHAK&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8J7CBBE7AD) |
| 1 valgfri | Skrueklemme 3-pin RM 2,54 | |
| 1 | Skrueklemme 5-pin RM 2,54 | [amazon](https://www.amazon.de/dp/B07PJ71VW8/?coliid=I3AGEWLU82MSU5&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J) |
| 1 alternativ til skruklemmen 5-pins | JST-HX-sokkel 90° RM 2,54 | (voelkner D17526) |
| 2 | Skrueklemme 8-pin RM 2,54 | [amazon](https://www.amazon.de/dp/B07PJ7YK3G/?coliid=I2SR2XJ0B6HEW9&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN48J7TBE7) |
| 2 | Skrueklemme 12-pin RM 2,54| [amazon](https://www.amazon.de/dp/B07NZ459BY/?coliid=I2HTZO5ENXO2Q6&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J) |
| 1 | Pinnehode RM 2,54 | [amazon](https://www.amazon.de/dp/B01MQ5HJYQ?ref_=pe_27091401_487187591_302_E_DDE_dt_1) |
| 1 | Motstand 4,7kOhm | [amazon](https://www.amazon.de/dp/B0CL6N7334/?coliid=IVHTTAGFDF3TX&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1ZKFZ0X0XNS2PHX9FJN3) |
| 1 valgfri | Passiv summer 12mm 3V | [amazon](https://www.amazon.de/dp/B0179I6LIK/ref=pe_27091401_487027711_TE_SCE_dp_i1) |
| 1 ESP32 | ESP32 D1 mini | [amazon](https://www.amazon.de/dp/B08BTRQNB3/?coliid=I3GILWFH2TDYH9&colid=I7GQB171JGLX&ref_=list_c_wl_lv_ov_lig_dp_it&th=1) |
| 1 valgfri | Nextion 3,5" skjerm
|                                                       |                                |                                   |

_Merk: lenkene eller varenumrene som er oppført er rent informative og ikke knyttet til tilknyttede/markedsføringsprogrammer._

Nextion 3,5 tommers skjerm er tilgjengelig som Basic, Discovery eller Enhanced. Den for øyeblikket billigste modellen kan velges for Brautomat. Skjermer med 2,8 tommer eller mindre og 4 tommer og større har en annen pikseloppløsning og støttes ikke av Brautomat!

## Hensyn før bygging

Kretskortet kan variere avhengig av tilkoblingen til induksjonskomfyrenhfeld GGM IDS kan utstyres annerledes:

1.1 Den originale kabelen fra GGM IDS kontrollpanel brukes

I dette tilfellet kreves den hvite JST-HX-kontakten (nummer 2 på bildet). Rekkeklemmen med 5 skruer på bildet rett ved siden av JST-HX-kontakten brukes da ikke.

1.2 Det brukes en erstatningskabel

I dette tilfellet brukes ikke den hvite JST-HX-kontakten, men den 5-skruede rekkeklemmen.

Så enten JST-HX-kontakten eller den 5-skruede rekkeklemmen settes inn i kortet.

## Sett inn skrueklemmene

To merknader om å sette inn skrueklemmene:

1. Åpningen til skrueklemmene vender alltid utover (bort fra kretskortet).
2. Skruklemmene festes med et loddepunkt. Riktig passform kontrolleres deretter. Alle loddepunkter loddes deretter.

I det følgende settes skrueklemmene inn og loddes trinn for trinn.\
I trinn nummer 1 settes de to 12-pins skruklemmene inn. GPIOene D9 til D19 fra ESP32 er koblet til de 12 skruklemmene.

![Skruklemme](/docs/img/Aufbau2.jpg)

Snu nå brettet og fest hver skruklemme med et loddepunkt. Kontroller nå at skrueklemmene sitter riktig. Alle pinner må settes inn riktig gjennom loddepunktene. Alle pinner blir deretter loddet.

I trinn nummer 2 settes de to 8-pinners skrueklemmene inn. GPIOene D0 til D8 fra ESP32 er koblet til de 8 skrueklemmene.

![Skruklemmer](/docs/img/Aufbau3.jpg)

Styret ser nå slik ut i denne statusen:

![Skruklemmer](/docs/img/Aufbau4.jpg)

I trinn nummer 3 settes de tre 3 skrueklemmene inn og loddes.

![Skruklemme for sensorer](/docs/img/Aufbau5.jpg)

DS18B20 temperatursensorer er koblet til de tre koplingene. Det er ingen rekkefølge eller hierarki for disse tre forbindelsene. Hvis kun analoge PT100x-sensorer brukes, kan de tre skruklemmene utelates.

Med versjon 2.1 av kortet kan en valgfri rekkeklemme med 3 skruer brukes i GND-posisjonen ved siden av de 3 skruklemmene for sensorer. De ekstra GND-tilkoblingene er nyttige når aktuatorer (pumper, røreverk, etc.) brukes. Hvis ingen aktuatorer brukes, kan skruklemmen utelates.

I trinn nummer 4 settes enten JST-HX-kontakten for den originale kabelen eller en 5-skrues rekkeklemme for erstatningskabelen inn og loddes: (se hensyn før montering).

![JST-HX eller skruklemme](/docs/img/Aufbau6.jpg)

## Piezo-summeren

Piezo-summeren er valgfri. Dette trinnet kan hoppes over hvis akustiske signaler ikke er ønsket.\
Piezo-summeren har pluss og minuspol

![Buzzer Plus Minus](/docs/img/Aufbau8.jpg)

Den positive polen settes inn i D8-merkingen og følgelig den negative polen i GND-merkingen.

![Buzzer](/docs/img/Aufbau7.jpg)

## Motstanden på 4,7 kOhm

4,7 kOhm-motstanden er obligatorisk for Dallas DS18B20 temperatursensorer. Hvis kun analoge PT100x-sensorer brukes, kan motstanden utelates.

![Motstand](/docs/img/Aufbau9.jpg)

Bena på motstanden er bøyd 90° (f.eks. rundt en skrutrekker med spor). Motstanden settes deretter inn i posisjonen merket "4k7". Retningen trenger ikke tas i betraktning. Grunnfargen på motstander er ofte blå eller sandfarget. De fargede ringene viser den elektriske motstanden:

4,7 kOhm motstand med 4 ringer: gul - fiolett - rød - [toleranse]

4,7 kOhm motstand med 5 ringer: gul - fiolett - svart - brun - [toleranse]

![Motstand](/docs/img/Aufbau10.jpg)

Motstandens ben er bøyd litt utover på baksiden og loddet. Bruk sidekuttere for å kutte av bena over loddeøyet.

## Monter ESP-mikrokontrolleren på basenn

Ved å montere basen kan ESP-mikrokontrolleren fjernes fra brettet når som helst. Socket er også nyttig ved feilsøking.

![Socket](/docs/img/Aufbau14.jpg)

Leveringsomfanget til ESP-mikrokontrollerne inkluderer adapter nummer 1. I tillegg kreves en pinnehode nummer 2 med en pitch på 2,54 mm.

![Deleliste](/docs/img/Aufbau11.jpg)

Adaptere og pinnehoder kreves for stikkontakter. Pinnehodet plugges først inn i adapteren, som vist i nummer 3. Adaptere med pinnelister settes deretter inn i kretskortet, to til venstre og to til høyre

_Tips: pinnehodet leveres som en 40 pins header. Hele lengden av pinnehodet settes inn i adapteren. Overhenget over adapteren er bøyd i enden._

![Socket](/docs/img/Aufbau12.jpg)

Nå settes ESP på og fikses med et loddepunkt på hver side. Nå er passformen til basene kontrollert. Alle loddepunkter loddes deretter.

![ESP32](/docs/img/Aufbau15.jpg)

Til slutt bør alle loddepunkter kontrolleres. Når alle loddepunkter er lukket, er Brautomat klar.
