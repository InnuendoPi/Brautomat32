# Rozwiązywanie problemów

Wskazówki i porady… ciąg dalszy…

## Wi-Fi

Zasięg WLAN mikrokontrolerów ESP jest ograniczony. Aktualna siła sygnału WLAN jest wyświetlana w obszarze System -> Resetuj. Im wartość jest bliższa zeru, tym silniejszy jest sygnał. Wartości od -50dBm do -75dBm są bardzo dobre. Wartość mniejsza niż -80 dBm jest zła i powoduje problemy. W kuchniach browarniczych o słabej sile sygnału WiFi interwał PID można zwiększyć np. do 7000ms, aby zmniejszyć ilość danych. Jeśli siła sygnału jest słaba, należy używać wyłącznie aktywnej przeglądarki (patrz Zdarzenia wysłane do serwera poniżej). Ważna jest odpowiednia lokalizacja dla Brautomat w sieci WLAN (lub dodatkowy wzmacniacz). Dobra siła sygnału niekoniecznie, ale w większości przypadków skutkuje wyższą i stabilniejszą szybkością przesyłania danych.

Interfejs sieciowy Brautomat oparty jest na frameworku bootstrap 4.6 z JavaScriptem. Wymagane pliki (css, js i czcionki) znajdują się w pamięci flash Brautomat. Ma to zaletę i wadę. Zaletą jest to, że nie jest wymagane połączenie z Internetem, aby załadować niezbędne pliki podczas parzenia. Wadą jest to, że w lokalnej sieci WLAN Brautomat musi raz nawiązać połączenie dostarczyć skompresowane pliki frameworku do każdej podłączonej przeglądarki. Jeśli plik nie jest przesyłany poprawnie i tylko bardzo wolno, na przykład ze względu na słabą siłę sygnału Wi-Fi, interfejs sieciowy nie będzie działał poprawnie. W tym przypadku interfejs sieciowy nie jest zbudowany poprawnie (wygląda wówczas jak strona tekstowa) lub jest niekompletny (tabele pozostają puste). W większości przypadków wystarczy przeładowanie strony internetowej (Ctrl-Shift-R).

Po aktualizacji oprogramowania należy zawsze wyłączyć Brautomat i wyczyścić pamięć podręczną przeglądarki.

## Przeglądarki

Brautomat jest testowany na Win11 z MS Edge i Firefox w aktualnej wersji, a także na urządzeniach iOS z MS Edge i Safari. Na etapie programowania preferowany jest MS Edge. Niezależnie od przeglądarki, dla adresu Brautomat należy włączyć automatyczne odtwarzanie dźwięku dla wiadomości Toast (audio). Adres Brautomat powinien być także uwzględniony w wyjątkach w blokowaniu wtyczek do przeglądarek. Przestarzałe przeglądarki (np. IE8) nie są obsługiwane.

Pamięć podręczna przeglądarki może prowadzić do nieprawidłowych reklam internetowych. Interfejs sieciowy Brautomat po wywołaniu określa opcję no-cache i no-store, ale różne przeglądarki ignorują te instrukcje. Ręczne czyszczenie pamięci podręcznej przeglądarki często rozpoczyna się od kombinacji klawiszy Ctrl - Shift - Del.

## Serwer wysłał zdarzenia i plany zasilania oraz automatyczne blokowanie klientów

Brautomat wysyła dane do podłączonych i aktywnych przeglądarek za pośrednictwem zdarzeń wysłanych przez serwer. Do Brautomat może jednocześnie podłączyć się maksymalnie 8 urządzeń. Plany zasilania lub automatyczne blokowanie mogą przerwać połączenie. Proces parzenia nie zostanie zatrzymany ani przerwany w przypadku utraty połączenia! Brautomat nadal działa normalnie. Odłączone przeglądarki po prostu nie otrzymują żadnych nowych informacji. Informacje obejmują temperatury, bieżący krok zacierania, bieżącą wydajność, wykresy itp. Połączenie Server Sent Events z Brautomat to „kanał danych”, przez który informacje są wysyłane do przeglądarki. Jeśli połączenie z Brautomat zostanie przerwane, kanał danych zostanie zakończony. Aktywna przeglądarka rozpoznaje, kiedy skończył się jej kanał danych i po krótkim czasie automatycznie loguje się ponownie w dniu Brautomat.\
Rejestracje w dniu Brautomat nie mają kolejności ani priorytetów. Nie ma znaczenia, czy przeglądarka internetowa z komputera PC lub tabletu zostanie podłączona jako pierwsza czy ostatnia. Proces parzenia można rozpocząć na urządzeniu A, wstrzymać na urządzeniu B, obserwować na urządzeniu C i zakończyć na urządzeniu D. Jeśli wszystkie cztery urządzenia są aktywne i połączone, wszystkie przeglądarki pokazują (prawie) jednocześnie iidentyczne informacje, ponieważ każde z tych czterech urządzeń ma swój własny kanał danych.

## Import przepisu

Ze względu na ograniczoną pamięć import przepisów nie umożliwia importowania przepisów z plikami PDF, załącznikami graficznymi lub bardzo długimi tekstami lub objaśnieniami. W przypadku receptur MashMalzandMore import do kbh2, a następnie eksport w formacie Brautomat jest prostym i dobrym rozwiązaniem. Można również importować przepisy z Brewfather.

## AutoTune

Proces AutoTune nie powinien skupiać się na doskonałości, tj. S.v. 0,1°C. Odchylenie czujników jest zwykle większe. Parametr AutoTune pasmo szumów (rozproszenie wokół wartości docelowej) jest wystarczająco blisko temperatury docelowej o wartości 0,3, aby bardzo dobrze osiągnąć temperaturę docelową i utrzymać ją przez okres spoczynku.
Bardzo dobrze izolowane kotły do warzenia zacieru wymagają większej serii danych AutoTune. W serii danych zmierzone wartości są zapisywane w porządku chronologicznym. Na początku znajduje się aktualna wartość pomiaru, a na samym końcu wiersza najstarsza wartość pomiaru. Seria danych wartości AutoTune mówi „ile wartości przed bieżącym pomiarem Brautomat spogląda wstecz (w przeszłość), aby wykryć zmianę temperatury o co najmniej AutoTune pasma szumu (0,3)”. W przypadku kotła dobrze zaizolowanego serię danych należy wypełnić 75 punktami pomiarowymi. W przypadku kotła nieizolowanego wystarczająca jest seria danych z 50 punktów pomiarowych. Te dwa parametry należy dostosować w zależności od środowiska. Standardowe specyfikacje powinny w zdecydowanej większości przypadków dawać bardzo dobre wartości.

## Czujniki i kalibracja

Czujniki Dallas DS18B20 oferowane są na wielu platformach w bardzo różnych cenach. Kalibracja czujnika pomaga zminimalizować odchylenia. W każdym razie czujnik IDS należy skalibrować, ponieważ możliwe są odchylenia rzędu kilku stopni Celsjusza (w zależności od pochodzenia).\
Jeśli czujnik regularnie zgłasza błąd czujnika (wyskakuje toast) w interfejsie internetowym, należy najpierw spróbować innego połączenia czujnika. Trzy połączenia czujników na płytce są równoważne i nie mają określonej kolejności. W przypadku problemów z czujnikiem należy sprawdzić punkty lutowania 3 listew zaciskowych śrubowych i rezystancję 4,7 kOhm (na płytce drukowanej pod ESP).

## Przerwanie pinów GGM IDS

Przerwanie pinowe zapewnia kanał zwrotny z płyty indukcyjnej do Brautomat. Ten kanał zwrotny jest podłączony do Brautomat z przerwaniem GPIO z ESP. Przerwanie przerywa wykonywanie programu i sprawdza stan przerwania.\
Płyta indukcyjna GGM IDS w sposób ciągły wysyła przerwanie co około 300 milisekund: albo sygnał „wszystko jest w porządku” (0000), albo kod błędu (np. 0010 w przypadku braku bojlera lub pustego bojlera).

Sekcja wyjścia szeregowego na przerwaniu pinowym:

```tekst
10:00:00:174 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:543 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:864 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:209 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:554 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
```

Wyjście szeregowe na przerwaniu pinowym wyraźnie pokazuje, że płyta indukcyjna cały czas wysyła „wszystko ok”. Jednakże Brautomat przerywa swoją pracę podczas parzenia przy każdym przerwaniu (mniej więcej co 300ms) i sprawdza stan przerwania. Dlatego przerwanie pinowe powinno być używane wyłącznie do rozwiązywania problemów.

W instrukcji GGM IDS2 opisano następujące przerwania:

E0 brak/pusty kocioł (0010 2)\
Błąd obwodu E1 (0011 3)\
E3 Przegrzanie (0101 5)\
Czujnik temperatury E4 (0110 6)\
Zabezpieczenie przed niskim napięciem E7 (1001 9)\
Ochronnik przeciwprzepięciowy E8 (1010 10)\
Panel sterowania EC (1110 14)\

Niestety ciągi binarne nie są znane. Znany jest tylko E1 brak/pusty kocioł. CzasPoniższe nawiasy zostały określone w drodze testów, ale nie są pewne.

Przerwanie pinowe powinno być przydzielane tylko w przypadku problemów. Pin D5 jest wstępnie przypisany do pierwszej płyty indukcyjnej. W normalnym trybie parzenia nie jest wymagane żadne przerwanie pinu.
