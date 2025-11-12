# Funkcje

W poniższym opisie zastosowano _przykładową recepturę wymyśloną_. Opis ten nie zawiera przepisu, ale procedurę zacierania za pomocą Brautomat.

Plan zacieru ma formę tabeli. Tabela ta jest przetwarzana od góry do dołu przez system parzenia w dniu warzenia. W przykładowym przepisie linia _Zacieranie 50°C_ to pierwszy etap zacierania, a _WHP Hallertau Tradition_ to ostatni etap zacierania. Bardzo ważną funkcją w planie zacierania jest właściwość w kolumnie _autoext_.

## Podstawowe funkcje

![Plan zacieru](/docs/img/Brautomat.jpg)

Dla celów orientacyjnych najpierw opisano strukturę wierszy tabeli. Wiersz w planie zacierania reprezentuje krok w planie zacierania. Każdy wiersz tabeli zawiera następujące kolumny:

* Kolumna „Reszta” pokazuje nazwę tego etapu zacierania.
* Kolumna „Temperatura” zawiera temperaturę spoczynkową (w tej instrukcji nazywaną także temperaturą docelową lub docelową).
* Kolumna „Czas trwania” zawiera czas odpoczynku (timer), jak długo Brautomat powinien utrzymywać temperaturę spoczynku.
* Kolumna „autoext” wskazuje, czy następny krok będzie automatycznie kontynuowany po upływie czasu odpoczynku (timera).

Po tych czterech szczegółach dotyczących etapu zacierania w każdej linii znajdują się przyciski edycji z następującymi funkcjami: (od lewej do prawej)

![Edytuj plan zacierania](/docs/img/Brautomat-111.jpg)

* przesuń tę linię o jedną pozycję w górę
* przesuń tę linię o jedną pozycję w dół
* edytuj tę linię
* usuń tę linię

Nagłówek tabeli zawiera następujące przyciski (od lewej do prawej)

![Edytuj plan zacieru](/docs/img/Brautomat-1.jpg)

* nowa linia: dodaj nowy krok zacierania na końcu tabeli
* Usuń: usuń całą tabelę (pusty plan zacierania)
* Załaduj ponownie: ponownie przeczytaj przepis z pliku. Zmiany nie są zapisywane. Przycisk jest wyświetlany na niebiesko
* Baza danych: wybór planu mash, import, eksport i harmonogram planu mash
* Zwiń: Zwiń i rozwiń tabelę planu zacierania

![Edytuj plan zacierania](/docs/img/Brautomat-11.jpg)

Po edycji wiersza tabeli przyciski ulegają zmianie.

* Wyjdź: wyjście z edytora linii bez zapisywania. Przycisk jest wyświetlany w kolorze szarym
* Przechowywanie: Zapisz zmiany w wierszu tabeli w planie zacierania

Po rozpoczęciu procesu parzenia wszystkie przyciski umożliwiające edycję planu zacieru są ukryte. Przycisk zwijania służący do zwijania i rozwijania tabeli jest ukryty zaraz po edycji planu zacieru.

Wraz z przyciskami zasilania, odtwarzania, pauzy, poprzedniego i następnego sterowanie parzeniem jest intuicyjne w obsłudze. Przedstawiony tutaj plan zacierania jest importem z kleineBrauhelfer2. Import automatycznie wstawia temperatury i czasy odpoczynku. Podczas dodawania chmielu do nazwy chmielu automatycznie dodawana jest kwas alfa i jego ilość w gramach. Ponadto skróty te są poprzedzone:

* VWH: chmielenie brzeczki czołowej
* Gotowanie (bez dodatku chmielu)
* WPH: Skakanie po jacuzzi

Dodatki pokazane na rysunku _Gotowanie pokarmu dla drożdży 1 gr_ są importowane do planu zacieru z małego Brauherlfera2 wraz z czasem podania i ilością.

## Edytuj tabelę planu zacierania

Plan zacierania można zmienić w Brautomat lub całkowicie odtworzyć. Symbol ołówka powoduje przejście linii w tabeli planu zacieru do trybu edytora.

![Edytuj plan zacieru](/docs/img/Brautomat-3.jpg)

Można teraz zmieniać dowolną liczbę wierszy tabeli jeden po drugim. Po kliknięciu symbolu edycji planu zacieru przycisk _Zapisz_ zmienia kolor z zielonego na czerwony. Po dokonaniu wszystkich zmian należy zapisać plan zacieru za pomocą przycisku _Zapisz_. Alternatywnie wszystkie zmiany można odrzucić za pomocą przycisku _Wyjdź_, aby wyjść bez zapisywania.

Po rozpoczęciu procesu zacierania za pomocą przycisku zasilania widok zmienia się:

![Edytuj plan zacierania](/docs/img/Brautomat-4.jpg)

Przyciski edycji są ukryte. Aby było to ponownie widoczne, należy zatrzymać proces zacierania za pomocą przycisku Pauza na panelu sterowania:

![Edytuj plan zacieru](/docs/img/Brautomat-5.jpg)

Gdy proces zacierania zostanie wstrzymany, przycisk Wstrzymaj w sterowaniu zostanie wyświetlony na czerwono i wyświetlone zostaną funkcje edycji. Płyta indukcyjna nie wyłącza się. Temperatura spoczynkowa jest nadal utrzymywana. Jeżeli licznik czasu odpoczynku jest aktywny, zostanie on wstrzymany. Jeśli plan zacierania zostanie zmieniony (tryb edytora), przycisk Pauza umożliwiający kontynuację procesu zacierania oraz przycisk Zasilanie zostaną dezaktywowane i będą wyświetlane w kolorze szarym do czasu zapisania lub odrzucenia zmian w planie zacierania (Wyjście).

Przykład zastosowania:\
Na koniec procesu zacierania wykorzystuje się próbkę jodu w celu sprawdzenia, czy zacier nie zawiera jeszcze normalnej zawartości jodu i czy skrobia jest nadal obecna. Przerwę scukrzającą w temperaturze 72°C należy przedłużyć:

* Wstrzymaj proces zacierania
* Kliknij symbol ołówka w wierszu scukrzanie 72°C
* Wydłużyć czas odpoczynku przy drugim scukrzaniu o 5 minut
* Zapisz
* Kliknij przycisk pauzy, a proces zacierania będzie kontynuowany z ustawionym czasem odpoczynku.

## Funkcja i zastosowanie autonext

![Maischeplan autonext](/docs/img/Maischeplan-autonext.jpg)

Pierwszy etap planu zacierania, zwany _Zacieranie 50°C_, obejmuje czas odpoczynku wynoszący 10 minut i dezaktywowaną opcję _autonext_. Zdjęcie przedstawia sytuację, gdy licznik czasu odpoczynku osiągnął 10 minut: Timer odliczył pozostały czas do 00:00. Przycisk odtwarzania automatycznie zmieni kolor na czerwony. W prawym dolnym rogu pojawi się wyskakujący komunikat „Kliknij przycisk odtwarzania”. Płyta wyłącza się. Proces parzenia oczekuje na kliknięcie przycisku odtwarzania. Interfejs sieciowy pokazuje kolejny krok, który rozpoczyna się kliknięciem przycisku Odtwórz.

* Po zakończeniu przerwy przy wyłączonej funkcji _autonext_ proces parzenia zostaje zatrzymany i płyta kuchenna zostaje wyłączona.

Drugi etap zacierania, zwany Maltoserastem 63°C, ma temperaturę spoczynku 63°C i czas spoczynku 25 minut. Na tym etapie Brautomat początkowo reguluje temperaturę płyty grzejnej na 63°C. Gdy tylko ta temperatura zostanie osiągnięta, Brautomat uruchamia timer. Minutnik odpoczynku to stoper odliczający do 00:00 (0 minut: 0 sekund). Kiedy licznik osiągnie czas odpoczynku wynoszący 25 minut, Brautomat sprawdza właściwość _autonext_. Jeśli _autonext_ jest aktywowany, Brautomat automatycznie przechodzi do następnego kroku w planie zacierania. W tym przykładowym przepisie jest to etap _Scukrzania 72°C_. Etap scukrzania ma temperaturę spoczynkową 72°C. Brautomat automatycznie zwiększa moc płyty kuchennej, aby osiągnąć nową temperaturę spoczynkową.

* Po zakończeniu odpoczynku przy włączonej funkcji _autoext_ proces zacierania jest kontynuowany automatycznie, a płyta kuchenna pozostaje włączona.

![Maischeplan autonext](/docs/img/Maischeplan-autonext2.jpg)

Właściwość _autonext_ w siódmym kroku _Zacieranie 78°C_ nie jest aktywowana. Jeśli Brautomat napotka dezaktywowany autonext, Brautomat zakończy bieżący odpoczynek po upływie czasu odpoczynku i wyłączy płytę (0% mocy). W tym stanie przycisk Odtwórz jest wyświetlany na czerwono. Aby kontynuować proces parzenia należy kliknąć przycisk Odtwórz.

Podczas gdy w pierwszym przykładzie _autonext_ przycisk Odtwórz jest zwykle klikany bezpośrednio, aby kontynuować etap zacierania, w drugim przykładzie zacierania może upłynąć dłuższy czas na lauterowanie i przerwę w lauterze. Brautomat pozostaje w stanie „Kliknij przycisk odtwarzania”. Płyta pierwszego kotła pozostaje wyłączona. W tym stanie można używać wszystkich siłowników, a także dwóch pozostałych kotłów.

## Różnica autonext i przerwa

Jeśli autonext zostanie dezaktywowany na końcu blokady, płyta zostanie wyłączona. Za pomocą przycisku pauzy zatrzymuje się licznik czasu odpoczynku,Jednakże płyta pozostaje włączona i Brautomat oblicza moc wymaganą dla płyty.

W poniższych rozdziałach opisano opcjonalne funkcje specjalne. Brautomat początkujący mogą pominąć opis funkcji specjalnych.

## Funkcja specjalna 0°C reszta, gdy autonext jest aktywowany

Specjalną funkcją jest temperatura spoczynku wynosząca 0°C, gdy aktywowana jest autonext: Jeżeli temperatura spoczynkowa jest ustawiona na 0°C i aktywowana jest autonext, etap zacierania rozpoczyna się automatycznie bez kontroli temperatury. W przykładzie planu zacieru ta specjalna funkcja jest pokazana po ugotowaniu brzeczki na etapie _poizomeryzacji_. W tym momencie brzeczka ma temperaturę ok. 100°C. Należy wyłączyć płytę grzejną i natychmiast uruchomić timer postizomeryzacji:

![Funkcja specjalna 0°C](/docs/img/Maischeplan-Sonderfunktion.jpg)

Funkcja specjalna _0°C temperatura spoczynkowa z aktywowaną funkcją autonext_ spełnia dokładnie ten wymóg: temperatura rzeczywista i docelowa są ignorowane i uruchamiany jest licznik czasu odpoczynku. Jeżeli temperatura spoczynku na etapie po izomeryzacji nie została ustawiona na przykład na 0°C, ale raczej na 95°C, licznik czasu odpoczynku na etapie po izomeryzacji uruchomiłby się dopiero wtedy, gdy temperatura w kotle do zaparzania zacieru spadła ze 100°C do 95°C. Podczas postizomeryzacji temperatura brzeczki spada. W razie potrzeby brzeczka jest aktywnie chłodzona. Funkcja specjalna _0°C temperatura spoczynkowa po włączeniu funkcji autonext_ powoduje, że płyta kuchenna pozostaje wyłączona.

## Proces warzenia

Podstawową zasadą działania zaparzacza jest napar rosnący. Obejmuje to warianty, takie jak proces zacierania kulinarnego Earla. Za pomocą właściwości „[TERM_10]]” można realizować także inne procesy warzenia. Należy jednak zauważyć, że Brautomat może obsługiwać inne procesy warzenia tylko w trybie „półautomatycznym”. Wyzwolenie akcji, takiej jak wyciągnięcie częściowego zacieru, musi zostać wykonane ręcznie przez operatora. W przypadku Brautomat ręczne oznacza użycie przycisków Odtwórz i Pauza. Pauza wynosząca zero minut przy wyłączonym autonext może zostać wykorzystana jako wyzwalacz ręcznego działania.

Uwaga: poniższe tematy dotyczące poleceń sterujących są opcjonalne i nieistotne dla rozpoczęcia pracy z Brautomat.

## Czajnik do parzenia

Brautomat obsługuje do trzech czajników. Do procesu zacierania potrzebny jest pierwszy kocioł. Drugi czajnik jest opcjonalny i można go wykorzystać np. w procesach warzenia takich jak wywar. Trzeci czajnik jest często używany jako uzupełnienie i również jest opcjonalny. Użycie drugiego i trzeciego kotła jest dowolne, tylko pierwszy kocioł jest powiązany z procesem zacierania, a konkretnie z timerem odpoczynku.

Domyślne nazwy poleceń sterujących:

* Pierwszy czajnik: IDS lub MASH
* Drugi kocioł: MLT lub SUD
* Trzeci kocioł: HLT lub REGUSS

## Polecenia sterujące

Drugą funkcją specjalną są polecenia sterujące dla płyt grzewczych i siłowników. Składnia kroku zacierania jest następująca.

* Imię aktora: Performance

Zasilanie może być włączone, wyłączone lub może mieć wartość z zakresu od 0 do 100%. Stan OFF odpowiada wartości 0%, a ON wartości 100%. Polecenie sterujące dla pierwszej płyty indukcyjnej to IDS lub MASH. Polecenie sterujące dla drugiej płyty indukcyjnej to SUD. Poleceniem sterującym przekształcenia jest HLT. Poleceniem sterującym dla siłownika jest nazwa siłownika.

![Polecenie sterowania aktorem](/docs/img/Maischeplan-Aktoren.jpg)

Plan zacieru na zdjęciu przełącza siłowniki w trzech miejscach. Mieszadło jest włączone od razu na początku: Mieszadło:WŁ
Na krótko przed zakończeniem harmonogramu zacierania wyłącza się mieszadło: Mieszadło:WYŁ. i włącza się uzupełnianie: Uzupełnianie:WŁ.

Polecenie sterujące dla siłownika można określić za pomocą mocy, np. POMPA:60. Pompa siłownika zostaje wówczas załączona z mocą 60%. Zakłada się, że ten element wykonawczy został aktywowany dla PWM. Temperatura spoczynkowa i Rast Czas trwania musi być ustawiony na 0 dla poleceń sterujących.

Polecenie sterujące IDS:50 ustawia maksymalną moc wyjściową płyty na 50%. Recasting można również włączyć do 75% mocy za pomocą HLT:75.

![Polecenie sterujące IDS](/docs/img/sonderfunktion_sud1.jpg)

Polecenie sterujące SUD: Gotuj gęsty zacier z czasem odpoczynku wynoszącym 10 minut i temperaturą spoczynku wynoszącą 100 stopni powoduje wykonanie etapu zacierania na drugiej płycie grzewczej. Licznik czasu odpoczynku zostaje uruchomiony po osiągnięciu temperatury spoczynkowej.

![Polecenie sterujące SUD](/docs/img/sonderfunktion_sud2.jpg)

Polecenie sterujące SUD: Gotuj gęsty zacier z temperaturą spoczynku 100 stopni, ale bez czasu odpoczynku, włącza drugą płytę, uruchamia sterownik PID płyty i przechodzi bezpośrednio do następnego kroku planu zacierania.

![Polecenie sterujące SUD](/docs/img/sonderfunktion_sud3.jpg)

Etap zacierania, scukrzanie w temperaturze 72°C, przeprowadza się na pierwszej płycie grzejnej „Maische”. Sterownik PID reguluje wymaganą moc kotła zaciernego. Jednocześnie sterownik PID reguluje moc wymaganą dla kotła _Sud_.

Przykłady:

* Mieszadło: WŁ
* Mieszadło: WYŁ
*RHE:40
*IDS:75
*IDS:WYŁ
*HLT:100
*HLT:WYŁ
* SUD: Ugotuj gęsty zacier
* SUD:60

_Uwaga: Polecenia sterujące mogą być używane do jednoczesnej obsługi kotłów zacieru, parzenia i HLT. Aktywny może być jednak tylko jeden licznik czasu odpoczynku. Timer odpoczynku jest zawsze powiązany z pierwszą płytą „zacierającą”._

### Przykładowe polecenie sterujące IDS

Jako przykład podana jest następująca konfiguracja dla kotła GGM IDS lub kotła MashSud:

![Polecenie sterujące IDS](/docs/img/aktoren_schaltung4.jpg)

Maksymalna moc wyjściowa jest wstępnie ustawiona na 100%. Temperatura „przejścia do gotowania” wynosi 95°C. Od tej temperatury maksymalna moc wyjściowa GGM IDS wynosi tylko 80%.

Harmonogram zacierania pokazany na ilustracji rozpoczyna się od kroku „Podgrzewanie głównego nalewu”. Płyta indukcyjna GGM IDS podgrzewałaby wodę z mocą „Max. Power IDS” (parametr w rejestrze kontroli temperatury), czyli 100%.

![Polecenie sterujące IDS](/docs/img/aktoren_schaltung2.jpg)

Licznik czasu odpoczynku rozpoczyna pracę przy temperaturze 59°C. Czas odpoczynku wynosi zero minut. Brautomat przeskakuje do następnej linii do kroku 2.
Polecenie sterujące IDS:65 ustawia maksymalną moc IDS na 65%. Brautomat przeskakuje do następnej linii do kroku 3.
Teraz temperatura jest podgrzewana z 59°C do temperatury docelowej w etapie „zacierania”. Maksymalna wydajność IDS wynosi 65%.

Maksymalna moc wyjściowa wynosząca 65% jest utrzymywana w kolejnych etapach zacierania. Dopóki Brautomat nie spełni polecenia sterującego IDS:100 po etapie zacierania.

![Polecenie sterujące IDS](/docs/img/aktoren_schaltung3.jpg)

Polecenie sterujące zmienia maksymalną moc wyjściową IDS na 100%. Brzeczkę podgrzewa się teraz przy 100% mocy do temperatury „przejścia do wrzenia” wynoszącej 95°C (patrz wyżej). Od 95°C GGM IDS przełącza się na moc 80%. 80% odpowiada parametrowi „Moc z przejścia”.

Polecenia sterujące IDS można wykorzystać, aby zapobiec spaleniu zacieru lub wykipieniu brzeczki, zwłaszcza przy mniejszych objętościach kotła.

### Przykład: Odwar na dwóch płytach grzewczych

![Polecenie sterujące IDS i SUD](/docs/img/sonderfunktion_sud4.jpg)

Ze względu na ograniczenie _pierwszy kocioł zacierny musi być zawsze uruchamiany z czasem odpoczynku_, istnieje prosta procedura procesów dekokcji: częściowy zacier przeznaczony do ugotowania musi trafić do kotła _zacieru_, a częściowy zacier, który ma być utrzymany w temperaturze, musi trafić do kotła _Sud_.

### Przykład użycia zasilania płyty kuchennej

Podano napełnienie 7 kg i napełnienie główne 28 l. Całkowita masa wynosi 35kg\

Za pomocą specjalnej funkcji IDS: <Moc w %> moc płyty kuchennej można regulować w taki sposób, aby szybkość nagrzewania podczas zacierania wynosiła 1°C na minutę.

![Polecenie sterujące MASH power](/docs/img/IDS-Sonderfunktion.jpg)

_WyjaśniaInformacje na temat sposobu obliczeń można znaleźć w artykule: Parametry GGM IDS – Kontrola temperatury – Maksymalna wydajność IDS._

```json

    Wymagana moc P = m * c * T / (t * w)
    Wyrażenie c*T/(t*w) zastępuje się wartością 75 przy sprawności 80% dla płyty indukcyjnej
    Masa m wynosi 35kg
    P = 35 x 75 = 2625
    2625W to 75% max. moc 3500W (2625/3500*100=75%)

```

W planie zacierania pokazanym powyżej maksymalna moc wyjściowa IDS jest ustawiona na 75% po zacieraniu w linii 2 poleceniem sterującym „IDS:75”. Za pomocą tego polecenia sterującego przeprowadzane są następujące etapy (odpoczynek maltozy, scukrzanie i zacieranie) z maksymalną wydajnością 75%. Po zmieszaniu użytkownik musi kliknąć przycisk odtwarzania (autonext wyłączony). W tym miejscu rozpoczyna się lautering, po którym następuje przerwa w lauterze itp. Proces parzenia jest kontynuowany po wydaniu polecenia sterującego „IDS:100”. Maksymalna moc IDS jest ustawiona na 100% mocy dla gotowania brzeczki.

_Uwaga: Przyjęta tutaj sprawność 80% dla płyty indukcyjnej jest wartością średnią. Izolowany i zakryty zbiornik na zacier (pokrywa lub mieszadło) może mieć wyższą wydajność._

## Zmiana profilu funkcji specjalnych

Kolejną specjalną funkcją jest zmiana profilu. Polecenia to IDSPROFIL, SUDPROFIL i HLTPROFIL. Nazwa profilu następuje po dwukropku.

Przykłady:

IDSPROFILE:Profil68l\
IDSPROFILE:Profil36l

Za pomocą tego specjalnego polecenia następuje wymiana wszystkich parametrów kotła. W ten sposób można przechowywać różne profile sprzętowe. W procesie warzenia dekokcji specjalne polecenie oferuje łatwy sposób wykorzystania dostosowanych parametrów przy tym samym bojlerze i mniejszej objętości.

Polecenia specjalne IDS: i IDSPROFIL: mają różne skutki: Polecenie specjalne IDS: zmienia maksymalną moc wyjściową. Wszystkie pozostałe parametry pozostają takie same.

_Uwaga: specjalne polecenie IDSPROFILE w planie mashowym zostaje anulowane, jeśli typ urządzenia (IDS1, IDS2 lub przekaźnik) nie jest identyczny._

## Przykładowy dzień parzenia

Na koniec podsumowano zamówienia specjalne, dodatki chmielowe i ogólną procedurę w oparciu o dzień warzenia. Ten przykład opiera się na następującej konfiguracji:

Środowisko dwóch kotłów:

* kocioł do zaparzania zacieru (pojemność 70l, GGM IDS2 o mocy 3,6kW)
* czajnik przerobiony (czajnik 35l, 2kW)

Dwóch aktorów:

* mieszadło (sterowane przekaźnikiem)
* element grzejny pierścieniowy (w kotle zacierowym 3,5kW)

Plan zacieru:

![przykładowy plan warzenia zacieru](/docs/img/example_control_commands1.jpg)

Przykład pokazuje, jak łatwo można włączać i wyłączać siłowniki za pomocą specjalnych poleceń lub jak specjalne polecenia są zintegrowane z planem zacierania. W pierwszym etapie zacierania włączane jest mieszadło. Brautomat wykonuje specjalne polecenie i natychmiast przechodzi do następnego kroku planu zacierania. Krok zacierania został skonfigurowany na czas trwania 1 minuty i wyłączony autonext. Na tym etapie do wody do zaparzania dodaje się słód. Etap ten trwa dłużej niż minutę, ale w zależności od nadzienia nie wiadomo z góry, jak długo będzie trwało zacieranie. Po minucie zacierania Brautomat wyłącza płytę i wyświetla przycisk odtwarzania w kolorze czerwonym (dezaktywowany autonext). Brautomat teraz „czeka” aż do zakończenia kroku i kliknięcia przycisku odtwarzania. Po wyłączeniu płyty i dodaniu słodu temperatura mieszania zacieru będzie niższa niż 55°C. Ta procedura jest odpowiednia na przykład do spokojnego, powolnego dodawania słodów lub do krótkiej przerwy białkowej.

_Alternatywa:_ aktywuj właściwość autonext i ustaw czas odpoczynku na 5 minut. W tym przypadku Brautomat utrzymywałby temperaturę zacierania przez 5 minut (zacieranie), a następnie automatycznie nagrzewał się do następnej przerwy.

Następnym krokiem jest reszta maltozowa. PID Sterownik reguluje moc potrzebną do osiągnięcia temperatury docelowej w zacierze i jej utrzymania przez okres 40 minut. W linii 4 doładowanie włącza się specjalnym poleceniem. Docelowa temperatura wkładu wynosi 75°C, a czas trwania wynosi 0 minut. Brautomat uruchamia sterownik PID do ponownego odlewania kotła i reguluje wymaganą moc w tle. W tym momencie planu zacieru aktywne są dwa sterowniki PID: sterownik PID dla kotła do zaparzania zacieru i sterownik PID dla dolewu. Po włączeniu Brautomat przechodzi bezpośrednio do następnego kroku.

W planie zacieru siłownik pierścieniowej grzałki jest włączany lub włączany jednorazowo poleceniem specjalnym _RHE:ON_ i raz _RHE:50_. ON tłumaczy Brautomat ze 100% wydajnością, podczas gdy 50 jest odpowiednio przetwarzane z 50% wydajnością. Czajnik MashSud ma maksymalną pojemność 70 litrów. Pierścieniowy element grzejny wspiera płytę grzejną podczas gotowania z mocą 50%, zapewniając energiczne gotowanie: płyta grzejna o mocy 100% (3,5 kW) plus element grzejny pierścieniowy o mocy 1,75 kW (50%). Po zakończeniu gotowania pierścień grzejny wyłącza się specjalnym poleceniem _RHE:OFF_.

Czas dodawania chmielu oblicza się na podstawie czasu jego gotowania. Całkowity czas gotowania w programie zacieru wynosi 90 minut. Gotujemy przez 30 minut bez dodawania chmielu. Łączny czas gotowania poszczególnych dodatków chmielowych sumuje się. Tj. pierwszy dodatek chmielu _Hall. Tradycja 6,0% 37,2 g_ gotuje się łącznie przez 60 minut:

* Czas trwania dodawania chmielu typu mash. Tradycyjna 37,2 g: 30 minut
* Czas trwania dodawania chmielu typu mash. Tradycyjna 31g: 15 minut
  * Pod koniec tego etapu zacierania, pierwszy dodatek chmielu (37,2 g) pozostaje w brzeczce przez 45 minut
* Czas trwania dodawania chmielu typu mash. Tradycyjna 30g: 10 minut
  * Na koniec tego etapu zacierania, pierwsze dodanie chmielu (37,2 g) w brzeczce trwa 55 minut, a drugie 25 minut
* Czas trwania dodawania chmielu typu mash. Tradycja 7g: 5 minut
  * Na koniec tego etapu zacierania, pierwsze dodanie chmielu (37,2 g) w brzeczce trwa 60 minut, drugie 24 minuty, a trzecie 15 minut

Podczas gdy narzędzia takie jak kleineBrauhelfer, BrewFather czy MMum zawsze wskazują całkowity czas gotowania dla każdego indywidualnego dodania chmielu, Brautomat musi zapewnić alarm lub wskazanie, kiedy należy dodać dodatek chmielu do brzeczki podczas warzenia.

_Rozszerzenie:_ Wyjaśnienie dawek chmielu zostało rozszerzone tak, aby obejmowało dwie lub więcej dawek jednocześnie:

![przykładowy plan warzenia zacieru](/docs/img/example_control_commands3.jpg)

Chmiel należy dodać na 10 minut przed końcem gotowania. Tradycyjnie 6,0% 30g_ i pożywka dla drożdży _Drożdże odżywcze_ są dodawane do brzeczki w tym samym czasie. Ilustracja pokazuje, jak prosta jest procedura: jednoczesne dawki trwające 0 minut podawane są przed dawką trwającą.

Przedostatni etap po izomeryzacji wykorzystuje specjalną funkcję temperatury docelowej 0°C. W tym etapie zacierania płyta kuchenna zostaje wyłączona. Funkcja specjalna temperatura spoczynku 0°C powoduje, że Brautomat natychmiast uruchamia licznik czasu odpoczynku na 10 minut. W tym momencie brzeczka ma temperaturę ok. 100°C i powoli ochładza się. Ponieważ kolejny etap polega na dodaniu chmielu aromatycznego w temperaturze 78°C, brzeczka jest aktywnie chłodzona podczas 10-minutowego okresu odpoczynku po izomeryzacji.

Wykres planu zacieru:

![przykładowy plan warzenia zacieru](/docs/img/example_control_commands2.jpg)
