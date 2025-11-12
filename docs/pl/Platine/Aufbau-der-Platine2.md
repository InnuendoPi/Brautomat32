# Struktura wersji płytki 2

W tym krótkim przewodniku opisano budowę planszy. Konstrukcja deski nie jest wymagająca. Ten krótki opis ma służyć jako pomoc dla niedoświadczonych hobbystów i nie jest przeznaczony dla inżynierów elektryków. Informacje na temat lutowania, odpowiednich lutownic i lutowania można znaleźć na YouTube lub podobnych kanałach.

Lista części płytki:

![Lista części](/docs/img/Aufbau1.jpg)

Numer 1: Rezystor 4,7 kOhm\
Numer 2: gniazdo JST-HX (białe) i 5-pinowa listwa zaciskowa śrubowa\
Numer 3: pasywny brzęczyk piezoelektryczny
Numer 4: Zaciski śrubowe o rastrze 2,54 mm

## Lista części dla płyty w wersji 2

Pozycja gniazda JST-HX jest alternatywą dla 5-pinowej listwy zaciskowej śrubowej. Kabel wychodzący z centrali GGM IDS2 posiada odpowiednią wtyczkę do gniazda JST-HX. Jeśli zamiast oryginalnego kabla zostanie użyty kabel zamienny, połączenie będzie łatwiejsze dzięki 5-śrubowym blokom zacisków.

| Numer | Nazwa przedmiotu | Link do artykułu |
| ----------------------------------------------------- | ------------------------------ | ---------------------------------- |
| 3 | Listwa zaciskowa śrubowa 3-pinowa RM 2,54 | [amazon](https://www.amazon.de/dp/B07PH5HWQL/?coliid=I1JP3GL9UZVHAK&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 opcjonalny | Listwa zaciskowa śrubowa 3-pinowa RM 2,54 | |
| 1 | Listwa zaciskowa śrubowa 5-pinowa RM 2,54 | [amazon](https://www.amazon.de/dp/B07PJ71VW8/?coliid=I3AGEWLU82MSU5&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 alternatywa dla 5-pinowej listwy zaciskowej śrubowej | Nasadka JST-HX 90° RM 2,54 | (voelkner D17526) |
| 2 | Listwa zaciskowa śrubowa 8-pinowa RM 2,54 | [amazon](https://www.amazon.de/dp/B07PJ7YK3G/?coliid=I2SR2XJ0B6HEW9&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 2 | Listwa zaciskowa śrubowa 12-pinowa RM 2,54| [amazon](https://www.amazon.de/dp/B07NZ459BY/?coliid=I2HTZO5ENXO2Q6&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 | Listwa pinowa RM 2,54 | [amazon](https://www.amazon.de/dp/B01MQ5HJYQ?ref_=pe_27091401_487187591_302_E_DDE_dt_1) |
| 1 | Rezystancja 4,7 kOhm | [amazon](https://www.amazon.de/dp/B0CL6N7334/?coliid=IVHTTAGFDF3TX&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1ZKFZ0X0XNS2PX9FJN3H) |
| 1 opcjonalny | Brzęczyk pasywny 12mm 3V | [amazon](https://www.amazon.de/dp/B0179I6LIK/ref=pe_27091401_487027711_TE_SCE_dp_i1) |
| 1 ESP32 | ESP32 D1 mini | [amazon](https://www.amazon.de/dp/B08BTRQNB3/?coliid=I3GILWFH2TDYH9&colid=I7GQB171JGLX&ref_=list_c_wl_lv_ov_lig_dp_it&th=1) |
| 1 opcjonalny | Wyświetlacz Nextion o przekątnej 3,5 cala
|                                                       |                                |                                   |

_Uwaga: podane linki lub numery pozycji mają wyłącznie charakter informacyjny i nie są powiązane z programami partnerskimi/marketingowymi._

Wyświetlacz Nextion o przekątnej 3,5 cala jest dostępny w wersji Basic, Discovery i Enhanced. Aktualnie najtańszy model można wybrać dla Brautomat. Wyświetlacze o przekątnej 2,8 cala lub mniejszej oraz 4 cali i większej mają inną rozdzielczość pikseli i nie są obsługiwane przez Brautomat!

## Rozważania przed budową

Płytka drukowana może się różnić w zależności od podłączenia do kuchenki indukcyjnejhfeld GGM IDS można wyposażyć w różny sposób:

1.1 Używany jest oryginalny kabel z centrali GGM IDS

W tym przypadku wymagane jest białe gniazdo JST-HX (nr 2 na zdjęciu). 5-śrubowa listwa zaciskowa pokazana na zdjęciu bezpośrednio obok gniazda JST-HX nie jest wówczas używana.

1.2 Używany jest kabel zastępczy

W tym przypadku nie stosuje się białego gniazda JST-HX, lecz 5-śrubową listwę zaciskową.

Zatem do płytki wkłada się albo gniazdo JST-HX, albo 5-śrubową listwę zaciskową.

## Włóż bloki zacisków śrubowych

Dwie uwagi dotyczące wkładania listew zaciskowych śrubowych:

1. Otwór zacisków śrubowych jest zawsze skierowany na zewnątrz (od płytki drukowanej).
2. Listwy zaciskowe śrubowe mocuje się za pomocą punktu lutowniczego. Następnie sprawdzane jest prawidłowe dopasowanie. Następnie lutowane są wszystkie punkty lutownicze.

Poniżej przedstawiono krok po kroku wkładanie i lutowanie złączek śrubowych.\
W kroku numer 1 wkładane są dwie 12-pinowe listwy zacisków śrubowych. GPIO D9 do D19 z ESP32 są podłączone do 12 bloków zacisków śrubowych.

![Zaciski śrubowe](/docs/img/Aufbau2.jpg)

Teraz odwróć płytkę i przymocuj każdy blok zacisków śrubowych punktem lutowniczym. Teraz sprawdź, czy bloki zacisków śrubowych są prawidłowo osadzone. Wszystkie piny muszą być prawidłowo włożone przez punkty lutownicze. Następnie wszystkie piny są lutowane.

W kroku 2 wkładane są dwie 8-pinowe listwy zacisków śrubowych. GPIO D0 do D8 z ESP32 są podłączone do 8 bloków zacisków śrubowych.

![Zaciski śrubowe](/docs/img/Aufbau3.jpg)

Płytka wygląda teraz tak w tym statusie:

![Zaciski śrubowe](/docs/img/Aufbau4.jpg)

W kroku 3 trzy 3-śrubowe listwy zaciskowe są wkładane i lutowane.

![Zaciski śrubowe do czujników](/docs/img/Aufbau5.jpg)

Do trzech przyłączy podłącza się czujniki temperatury DS18B20. Dla tych trzech połączeń nie ma porządku ani hierarchii. Jeżeli stosowane są wyłącznie analogowe czujniki PT100x, można pominąć trzy listwy zaciskowe śrubowe.

W wersji 2.1 płytki można zastosować opcjonalną 3-śrubową listwę zaciskową w pozycji GND obok 3-śrubowych listew zaciskowych dla czujników. Dodatkowe połączenia GND są przydatne w przypadku stosowania siłowników (pompy, mieszadła itp.). Jeżeli nie są stosowane żadne siłowniki, można zrezygnować z listwy zaciskowej śrubowej.

W kroku 4 należy włożyć i przylutować gniazdo JST-HX dla oryginalnego kabla lub 5-śrubową listwę zaciskową dla kabla zamiennego: (patrz uwagi przed montażem).

![JST-HX lub listwa zaciskowa śrubowa](/docs/img/Aufbau6.jpg)

## Brzęczyk piezoelektryczny

Brzęczyk piezoelektryczny jest opcjonalny. Ten krok można pominąć, jeśli sygnały akustyczne nie są pożądane.\
Brzęczyk piezoelektryczny ma biegun plus i minus

![Brzęczyk Plus Minus](/docs/img/Aufbau8.jpg)

Biegun dodatni należy włożyć w oznaczenie D8 i odpowiednio biegun ujemny w oznaczenie GND.

![Brzęczyk](/docs/img/Aufbau7.jpg)

## Rezystor 4,7 kOhm

Rezystor 4,7 kOhm jest obowiązkowy w przypadku czujników temperatury Dallas DS18B20. Jeżeli stosowane są wyłącznie analogowe czujniki PT100x, rezystor można pominąć.

![Opór](/docs/img/Aufbau9.jpg)

Nogi oporu wyginamy o 90° (np. wokół śrubokręta płaskiego). Następnie wstawia się rezystor w pozycję oznaczoną „4k7”. Kierunku nie trzeba brać pod uwagę. Podstawowym kolorem rezystorów jest często kolor niebieski lub piaskowy. Kolorowe pierścienie pokazują opór elektryczny:

Rezystor 4,7kOhm z 4 pierścieniami: żółty - fioletowy - czerwony - [tolerancja]

Rezystor 4,7 kOhm z 5 pierścieniami: żółty - fioletowy - czarny - brązowy - [tolerancja]

![Opór](/docs/img/Aufbau10.jpg)

Nogi rezystora są z tyłu lekko wygięte na zewnątrz i przylutowane. Za pomocą obcinaków bocznych odetnij nóżki nad oczkiem lutowniczym.

## Zamontuj mikrokontroler ESP na podstawierz

Dzięki zamontowaniu podstawy, mikrokontroler ESP można w każdej chwili wyjąć z płytki. Socketing jest również przydatny przy rozwiązywaniu problemów.

![Socket](/docs/img/Aufbau14.jpg)

W zakres dostawy mikrokontrolerów ESP wchodzi adapter nr 1. Dodatkowo wymagane jest złącze pinowe nr 2 o rastrze 2,54 mm.

![Lista części](/docs/img/Aufbau11.jpg)

Do podłączenia gniazd wymagane są adaptery i listwy pinowe. Najpierw do adaptera podłącza się złącze pinowe, jak pokazano w punkcie 3. Następnie do płytki drukowanej wkłada się adaptery z listwami pinowymi, dwa po lewej i dwa po prawej stronie

_Wskazówka: listwa pinowa jest dostarczana jako listwa 40-pinowa. Do adaptera włożona jest cała długość listwy pinowej. Zwis nad adapterem jest zagięty na końcu._

![Socket](/docs/img/Aufbau12.jpg)

Teraz ESP jest zakładany i mocowany za pomocą punktu lutowniczego z każdej strony. Teraz sprawdzane jest dopasowanie podstaw. Następnie lutowane są wszystkie punkty lutownicze.

![ESP32](/docs/img/Aufbau15.jpg)

Na koniec należy sprawdzić wszystkie punkty lutownicze. Kiedy wszystkie punkty lutownicze zostaną zamknięte, Brautomat jest gotowy.
