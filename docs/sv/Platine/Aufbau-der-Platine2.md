# Styrelsens struktur version 2

Den här korta guiden beskriver styrelsens struktur. Styrelsestrukturen är inte krävande. Denna korta beskrivning är avsedd som ett hjälpmedel för den oerfarna hobbyisten och riktar sig inte till elingenjörer. Information om lödning, lämpliga lödkolvar och lod finns på YouTube eller liknande kanaler.

Tavlans dellista:

![Delarlista](/docs/img/Aufbau1.jpg)

Nummer 1: Motstånd 4,7 kOhm\
Nummer 2: JST-HX-sockel (vit) och 5-polig skruvplint\
Nummer 3: passiv piezo summer\
Nummer 4: Skruva plintar med en stigning på 2,54 mm

## Reservdelslista för version 2-kort

JST-HX-uttagets position är ett alternativ till 5-polig skruvplint. Kabeln från kontrollpanelen på GGM IDS2 har lämplig kontakt för ett JST-HX-uttag. Om en ersättningskabel används istället för originalkabeln är anslutningen enklare med en 5-skruvsplint.

| Nummer | Artikelnamn | Länk till artikel |
| ------------------------------------------------------------ | ------------------------------------ | ---------------------------------- |
| 3 | Skruvplint 3-polig RM 2,54 | [amazon](https://www.amazon.de/dp/B07PH5HWQL/?coliid=I1JP3GL9UZVHAK&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8J7CBBE7AD4AD) |
| 1 valfri | Skruvplint 3-polig RM 2,54 | |
| 1 | Skruvplint 5-polig RM 2,54 | [amazon](https://www.amazon.de/dp/B07PJ71VW8/?coliid=I3AGEWLU82MSU5&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE)7AD4J |
| 1 alternativ till skruvplint 5-polig | JST-HX uttag 90° RM 2,54 | (voelkner D17526) |
| 2 | Skruvplint 8-polig RM 2,54 | [amazon](https://www.amazon.de/dp/B07PJ7YK3G/?coliid=I2SR2XJ0B6HEW9&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8J7TBE7AD) |
| 2 | Skruvplint 12-polig RM 2,54| [amazon](https://www.amazon.de/dp/B07NZ459BY/?coliid=I2HTZO5ENXO2Q6&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7T)7AD4J |
| 1 | Stifthuvud RM 2,54 | [amazon](https://www.amazon.de/dp/B01MQ5HJYQ?ref_=pe_27091401_487187591_302_E_DDE_dt_1) |
| 1 | Motstånd 4,7kOhm | [amazon](https://www.amazon.de/dp/B0CL6N7334/?coliid=IVHTTAGFDF3TX&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1ZKFZ0X0XNS2PHX9FJN3) |
| 1 valfri | Passiv summer 12mm 3V | [amazon](https://www.amazon.de/dp/B0179I6LIK/ref=pe_27091401_487027711_TE_SCE_dp_i1) |
| 1 ESP32 | ESP32 D1 mini | [amazon](https://www.amazon.de/dp/B08BTRQNB3/?coliid=I3GILWFH2TDYH9&colid=I7GQB171JGLX&ref_=list_c_wl_lv_ov_lig_dp_it&th=1) |
| 1 valfri | Nextion 3,5" skärm
|                                                       |                                |                                   |

_Obs: länkarna eller artikelnumren som anges är endast informativa och inte kopplade till affiliate-/marknadsföringsprogram._

Nextion 3,5-tumsskärm är tillgänglig som Basic, Discovery eller Enhanced. Den för närvarande billigaste modellen kan väljas för Brautomat. Skärmar med 2,8 tum eller mindre och 4 tum och större har en annan pixelupplösning och stöds inte av Brautomat!

## Överväganden före konstruktion

Kretskortet kan variera beroende på anslutningen till induktionsspisenhfeld GGM IDS kan utrustas på olika sätt:

1.1 Originalkabeln från GGM IDS kontrollpanel används

I detta fall krävs det vita JST-HX-uttaget (nummer 2 på bilden). 5-skruvsplinten på bilden direkt bredvid JST-HX-uttaget används då inte.

1.2 En ersättningskabel används

I det här fallet används inte det vita JST-HX-uttaget, utan den 5-skruvade plint.

Så antingen JST-HX-uttaget eller 5-skruvsplinten sätts in i kortet.

## Sätt i skruvplintarna

Två anmärkningar om att sätta i skruvplintarna:

1. Öppningen på skruvplintarna är alltid vända utåt (bort från kretskortet).
2. Skruvplintarna är fixerade med en lödpunkt. Rätt passform kontrolleras sedan. Alla lödpunkter löds sedan.

I det följande sätts och löds skruvplintarna steg för steg.\
I steg nummer 1 sätts de två 12-poliga skruvplintarna in. GPIO:erna D9 till D19 från ESP32 är anslutna till de 12 skruvplintarna.

![Skruvplint](/docs/img/Aufbau2.jpg)

Vänd nu kortet och fixera varje skruvplint med en lödpunkt. Kontrollera nu att skruvplintarna sitter korrekt. Alla stift måste sättas in korrekt genom lödpunkterna. Alla stift löds sedan.

I steg nummer 2 sätts de två 8-poliga skruvplintarna in. GPIO:erna D0 till D8 från ESP32 är anslutna till de 8 skruvplintarna.

![Skruvanslutningsplintar](/docs/img/Aufbau3.jpg)

Styrelsen ser nu ut så här i denna status:

![Skruvanslutningsplintar](/docs/img/Aufbau4.jpg)

I steg nummer 3 sätts de tre 3 skruvplintarna in och löds fast.

![Skruvplint för sensorer](/docs/img/Aufbau5.jpg)

DS18B20 temperaturgivare är anslutna till de tre anslutningarna. Det finns ingen ordning eller hierarki för dessa tre kopplingar. Om endast analoga PT100x-givare används kan de tre skruvplintarna utelämnas.

Med version 2.1 av kortet kan ett valfritt 3-skruvsplint användas vid GND-positionen bredvid de 3 skruvplintarna för sensorer. De extra GND-anslutningarna är användbara när manöverdon (pumpar, omrörare, etc.) används. Om inga ställdon används kan skruvplintarna utelämnas.

I steg nummer 4 sätts och löds antingen JST-HX-uttaget för originalkabeln eller en 5-skruvsplint för ersättningskabeln: (se överväganden före montering).

![JST-HX eller skruvplint](/docs/img/Aufbau6.jpg)

## Piezo-summern

Piezo-summern är tillval. Detta steg kan hoppas över om akustiska signaler inte önskas.\
Piezosummern har ett plus- och en minuspol

![Buzzer Plus Minus](/docs/img/Aufbau8.jpg)

Den positiva polen sätts in i D8-markeringen och följaktligen den negativa polen i GND-markeringen.

![Summer](/docs/img/Aufbau7.jpg)

## Motståndet på 4,7 kOhm

Motståndet på 4,7 kOhm är obligatoriskt för Dallas DS18B20 temperatursensorer. Om endast analoga PT100x-givare används kan motståndet utelämnas.

![Motstånd](/docs/img/Aufbau9.jpg)

Benen på motståndet är böjda 90° (t.ex. runt en slitsad skruvmejsel). Motståndet sätts sedan in i positionen märkt "4k7". Riktningen behöver inte beaktas. Grundfärgen på motstånd är ofta blå eller sandfärgad. De färgade ringarna visar det elektriska motståndet:

4,7 kOhm motstånd med 4 ringar: gul - violett - röd - [tolerans]

4,7 kOhm motstånd med 5 ringar: gul - violett - svart - brun - [tolerans]

![Motstånd](/docs/img/Aufbau10.jpg)

Motståndets ben är böjda något utåt på baksidan och lödda. Använd sidoskärare för att skära av benen ovanför lödöglan.

## Montera ESP-mikrokontrollern på basenn

Genom att montera basen kan ESP-mikrokontrollern tas bort från kortet när som helst. Socket är också användbart vid felsökning.

![Socket](/docs/img/Aufbau14.jpg)

Leveransen av ESP-mikrokontroller inkluderar adapter nummer 1. Dessutom krävs ett stifthuvud nummer 2 med en stigning på 2,54 mm.

![Dellista](/docs/img/Aufbau11.jpg)

Adaptrar och stifthuvuden krävs för uttag. Stifthuvudet sätts först in i adaptern, som visas i nummer 3. Adaptrar med stiftlister sätts sedan in i kretskortet, två till vänster och två till höger

_Tips: stifthuvudet levereras som ett 40-stiftshuvud. Hela längden av stifthuvudet sätts in i adaptern. Överhänget över adaptern är böjt i änden._

![Socket](/docs/img/Aufbau12.jpg)

Nu sätts ESP på och fixeras med en lödpunkt på varje sida. Nu kontrolleras basens passform. Alla lödpunkter löds sedan.

![ESP32](/docs/img/Aufbau15.jpg)

Slutligen bör alla lödpunkter kontrolleras. När alla lödpunkter är stängda är Brautomat klar.
