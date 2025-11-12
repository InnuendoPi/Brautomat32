# Struktura desky verze 2

Tento krátký průvodce popisuje strukturu desky. Struktura desky není náročná. Tento krátký popis je určen jako pomůcka pro nezkušené kutily a není určen pro elektrotechniky. Informace o pájení, vhodných páječkách a pájce naleznete na YouTube nebo podobných kanálech.

Seznam dílů desky:

![Seznam dílů](/docs/img/Aufbau1.jpg)

Číslo 1: Rezistor 4,7 kOhm\
Číslo 2: Zásuvka JST-HX (bílá) a 5kolíková šroubovací svorkovnice\
Číslo 3: pasivní piezo bzučák\
Číslo 4: Šroubové svorkovnice s roztečí 2,54 mm

## Seznam dílů pro desku verze 2

Pozice zásuvky JST-HX je alternativou k 5pólové šroubové svorkovnici. Kabel z ovládacího panelu GGM IDS2 má příslušnou zástrčku pro zásuvku JST-HX. Pokud je místo původního kabelu použit náhradní kabel, je připojení jednodušší pomocí 5šroubové svorkovnice.

| Číslo | Název položky | Odkaz na článek |
| ------------------------------------------------------ | ------------------------------- | ---------------------------------- |
| 3 | Šroubová svorkovnice 3pinová RM 2,54 | [amazon](https://www.amazon.de/dp/B07PH5HWQL/?coliid=I1JP3GL9UZVHAK&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WTCBBE7AD4J7
| 1 volitelný | Šroubová svorkovnice 3pinová RM 2,54 | |
| 1 | Šroubová svorkovnice 5pólová RM 2,54 | [amazon](https://www.amazon.de/dp/B07PJ71VW8/?coliid=I3AGEWLU82MSU5&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WTCBBE7AD4J7
| 1 alternativa ke šroubové svorkovnici 5-pin | JST-HX patice 90° RM 2,54 | (voelkner D17526) |
| 2 | Šroubová svorkovnice 8pinová RM 2,54 | [amazon](https://www.amazon.de/dp/B07PJ7YK3G/?coliid=I2SR2XJ0B6HEW9&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTENJ7WCBTBE7AD4AD4) |
| 2 | Šroubová svorkovnice 12pinová RM 2,54| [amazon](https://www.amazon.de/dp/B07NZ459BY/?coliid=I2HTZO5ENXO2Q6&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WTCBBE7AD4J7
| 1 | Hlavička čepu RM 2,54 | [amazon](https://www.amazon.de/dp/B01MQ5HJYQ?ref_=pe_27091401_487187591_302_E_DDE_dt_1) |
| 1 | Odpor 4,7kOhm | [amazon](https://www.amazon.de/dp/B0CL6N7334/?coliid=IVHTTAGFDF3TX&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1ZKFZ0X0XNS3PX9FJN) |
| 1 volitelný | Pasivní bzučák 12mm 3V | [amazon](https://www.amazon.de/dp/B0179I6LIK/ref=pe_27091401_487027711_TE_SCE_dp_i1) |
| 1 ESP32 | ESP32 D1 mini | [amazon](https://www.amazon.de/dp/B08BTRQNB3/?coliid=I3GILWFH2TDYH9&colid=I7GQB171JGLX&ref_=list_c_wl_lv_ov_lig_dp_it&th=1) |
| 1 volitelný | 3,5" displej Nextion
|                                                       |                                |                                   |

_Poznámka: uvedené odkazy nebo čísla položek jsou čistě informativní a nesouvisí s affiliate/marketingovými programy._

3,5palcový displej Nextion je k dispozici jako Basic, Discovery nebo Enhanced. Pro Brautomat lze vybrat aktuálně nejlevnější model. Displeje s úhlopříčkou 2,8 palce nebo menší a 4 palce a větší mají odlišné rozlišení pixelů a nejsou podporovány Brautomat!

## Úvahy před stavbou

Obvodová deska se může lišit v závislosti na připojení k indukčnímu sporákuhfeld GGM IDS může být vybaven různě:

1.1 Je použit originální kabel z ústředny GGM IDS

V tomto případě je nutná bílá patice JST-HX (číslo 2 na obrázku). 5 šroubová svorkovnice na obrázku přímo u patice JST-HX se pak nepoužívá.

1.2 Je použit náhradní kabel

V tomto případě není použita bílá patice JST-HX, ale 5 šroubová svorkovnice.

Do desky se tedy vkládá buď patice JST-HX nebo 5 šroubová svorkovnice.

## Vložte šroubové svorkovnice

Dvě poznámky k vkládání šroubových svorkovnic:

1. Otvor šroubových svorkovnic vždy směřuje ven (směrem od desky plošných spojů).
2. Šroubové svorkovnice jsou upevněny pájecím hrotem. Poté se zkontroluje správné uložení. Všechny pájecí body jsou poté připájeny.

Dále jsou šroubové svorkovnice vkládány a pájeny krok za krokem.\
V kroku číslo 1 se vloží dvě 12kolíkové šroubové svorkovnice. GPIO D9 až D19 od ESP32 jsou připojeny k 12 šroubovým svorkovnicím.

![Šroubová svorkovnice](/docs/img/Aufbau2.jpg)

Nyní desku otočte a každou šroubovou svorkovnici upevněte pájecím hrotem. Nyní zkontrolujte, zda jsou šroubové svorkovnice správně usazeny. Všechny kolíky musí být správně zasunuty skrz pájecí body. Všechny kolíky jsou poté připájeny.

V kroku číslo 2 jsou vloženy dvě 8pinové šroubové svorkovnice. GPIO D0 až D8 od ESP32 jsou připojeny k 8 šroubovým svorkovnicím.

![Šroubové svorkovnice](/docs/img/Aufbau3.jpg)

Deska nyní v tomto stavu vypadá takto:

![Šroubové svorkovnice](/docs/img/Aufbau4.jpg)

V kroku číslo 3 se vloží a připájejí tři 3 šroubové svorkovnice.

![Šroubová svorkovnice pro senzory](/docs/img/Aufbau5.jpg)

Teplotní čidla DS18B20 jsou připojena ke třem přípojkám. Pro tato tři spojení neexistuje žádné pořadí ani hierarchie. Pokud jsou použity pouze analogové snímače PT100x, lze tři šroubové svorkovnice vynechat.

U verze 2.1 desky lze použít volitelnou 3 šroubovou svorkovnici na pozici GND vedle 3 šroubových svorkovnic pro snímače. Přídavná připojení GND jsou užitečná při použití pohonů (čerpadla, míchadla atd.). Pokud nejsou použity žádné pohony, lze šroubovou svorkovnici vynechat.

V kroku číslo 4 je vložena a připájena buď zásuvka JST-HX pro originální kabel nebo 5šroubová svorkovnice pro náhradní kabel: (viz úvahy před montáží).

![JST-HX nebo šroubová svorkovnice](/docs/img/Aufbau6.jpg)

## Piezo bzučák

Piezo bzučák je volitelný. Tento krok lze přeskočit, pokud si nepřejete akustické signály.\
Piezo bzučák má pól plus a mínus

![Buzzer plus mínus](/docs/img/Aufbau8.jpg)

Kladný pól se vkládá do označení D8 a podle toho záporný pól do označení GND.

![Buzzer](/docs/img/Aufbau7.jpg)

## Rezistor 4,7 kOhm

Rezistor 4,7 kOhm je povinný pro teplotní senzory Dallas DS18B20. Pokud jsou použity pouze analogové snímače PT100x, lze rezistor vynechat.

![Odpor](/docs/img/Aufbau9.jpg)

Nohy na odporu jsou ohnuté o 90° (např. kolem štěrbinového šroubováku). Rezistor se pak vloží do pozice označené „4k7“. Směr se nemusí brát v úvahu. Základní barva rezistorů je často modrá nebo písková. Barevné kroužky ukazují elektrický odpor:

4,7kOhm rezistor se 4 kroužky: žlutá - fialová - červená - [tolerance]

4,7kOhm rezistor s 5 kroužky: žlutá - fialová - černá - hnědá - [tolerance]

![Odpor](/docs/img/Aufbau10.jpg)

Nohy odporu jsou na zadní straně mírně ohnuté ven a připájeny. Bočními řezáky odřízněte nožičky nad pájecím okem.

## Namontujte mikrokontrolér ESP na základnun

Osazením základny lze mikrokontrolér ESP z desky kdykoli vyjmout. Zásuvka je také užitečná při odstraňování problémů.

![Socket](/docs/img/Aufbau14.jpg)

Součástí dodávky mikrokontrolérů ESP je adaptér číslo 1. Dále je vyžadována hlavička kolíku číslo 2 s roztečí 2,54 mm.

![Seznam dílů](/docs/img/Aufbau11.jpg)

Pro zásuvku jsou nutné adaptéry a kolíky. Nejprve se do adaptéru zasune hlavička kolíku, jak je znázorněno na čísle 3. Do desky plošných spojů se pak vloží adaptéry s proužky kolíků, dva vlevo a dva vpravo

_Tip: hlavička kolíků se dodává jako hlavička se 40 kolíky. Do adaptéru se vloží hlavička kolíku po celé délce. Přesah přes adaptér je na konci ohnutý._

![Socket](/docs/img/Aufbau12.jpg)

Nyní je ESP nasazeno a upevněno pájecím hrotem na každé straně. Nyní je zkontrolováno lícování základů. Všechny pájecí body jsou poté připájeny.

![ESP32](/docs/img/Aufbau15.jpg)

Nakonec je třeba zkontrolovat všechny pájecí body. Po uzavření všech pájecích bodů je Brautomat připraven.
