# Konfiguracja i użytkowanie kotła

Brautomat32 oferuje możliwość ustawienia maksymalnie trzech kotłów. Pierwszy kocioł ma wewnętrzne oznaczenie MASH i alternatywnie IDS. Czajnik ten jest niezbędny do procesu zacierania. Dwa pozostałe kotły są opcjonalne. Drugi kocioł ma wewnętrzne oznaczenie SUD, alternatywnie MLT, a trzeci kocioł ma oznaczenie HLT lub Nachguss.

Trzy kotły mogą być płytą indukcyjną GGM lub typu przekaźnikowego. Kocioł typu przekaźnikowego zawiera połączenie webhook.

![Konfiguracja kotła](/docs/img/kessel_1.jpg)

Parametry opisane są w rozdziale Konfiguracja podstawowa i parametry w skrócie – Parametry kotła i są identyczne dla wszystkich trzech kotłów.

Jednak użycie trzech kotłów jest inne, zwłaszcza użycie planu zacieru. Plan zacieru jest zawsze powiązany z pierwszym bojlerem zacieru, o ile żaden inny kocioł nie jest określony w planie zacieru za pomocą polecenia sterującego. Polecenia sterujące wyjaśniono także w sekcji dotyczącej funkcji specjalnych planu zacierania i poleceń sterujących.

## Polecenia sterujące kotłem

W tej części omówiono wyłącznie polecenia sterujące kotłem. Polecenia sterujące dla siłowników mają identyczną strukturę, ale zostały wyjaśnione w sekcji dotyczącej funkcji specjalnych planu mieszania i poleceń sterujących. Polecenie sterujące zawsze zawiera dwukropek w pozostałej nazwie. Brautomat rozpoznaje jedynie na podstawie dwukropka, że ​​tę resztę należy traktować jako polecenie sterujące. Format to urządzenie: maksymalna moc. Oznacza to, że dwukropek oddziela nazwę urządzenia od maksymalnej wydajności.

Następujące nazwy są definiowane wewnętrznie jako nazwy urządzeń dla trzech kotłów:

* MASH lub IDS dla pierwszego kotła
* MLT lub SUD dla drugiego kotła
* HLT lub REGUSS dla trzeciego kotła

Każdy kocioł ma przypisaną nazwę w ustawieniach. Nazwy tej można również używać jako nazwy urządzenia dla polecenia sterującego.

Jako maksymalną wydajność dozwolone są liczby od 0 do 100. Wartość odpowiada parametrowi mocy maksymalnej w ustawieniach kotła i jest podana w procentach. Specyfikacja ON odpowiada 100%, a OFF odpowiada 0%.

### Opcja 1: ręczne załączenie kotła

Drugi i trzeci kocioł można włączać i wyłączać ręcznie za pośrednictwem interfejsu sieciowego za pomocą odpowiedniego przycisku zasilania. Przykładowo, jeśli bojler jest ustawiony na reinfuzję, w ustawieniach bojlera można ustawić temperaturę docelową na 78°C i w razie potrzeby kocioł można włączyć w dniu parzenia.

### Opcja 2: automatyczne załączenie kotła

Drugi i trzeci czajnik można również przełączać poprzez plan zacierania:

![Konfiguracja kotła](/docs/img/kessel_2.jpg)

W tym uproszczonym planie zacierania trzeci kocioł HLT jest włączany automatycznie w linii 2. Stopień HLT:100 z temperaturą docelową 78°C i czasem trwania 0 minut włącza uzupełnienie ze 100% mocą i ustawia temperaturę docelową na 78°C. Ponieważ czas trwania jest określony jako 0 minut, uzupełnienie jest włączone na stałe. Brautomat przechodzi bezpośrednio do następnego etapu zacierania i pozostawia włączony zapar. Sterownik PID reguluje w sposób ciągły moc potrzebną do osiągnięcia i utrzymania temperatury docelowej. Nachguss:100 będzie identyczny z poleceniem sterującym HLT:100. Jeżeli wkładowi w ustawieniach nadano nazwę „Cooker”, wówczas można również użyć polecenia sterującego COOKER:100.

![Konfiguracja kotła](/docs/img/kessel_3.jpg)

W tym planie zacierania w trzecim kroku włącza się drugi napar w kotle. W odróżnieniu od poprzedniego przykładu HLT, kocioł SUD zostaje włączony na okres 15 minut z temperaturą docelową 100°C. Brautomat pozostaje w tym kroku aż do osiągnięcia temperatury docelowej i zakończenia 10-minutowego okresu odpoczynku. Następnie czajnik SUD zostaje wyłączony, a Brautomat przechodzi do następnego kroku planu zacierania.

Tekst „Ugotuj częściowy zacier” pochodzi z Brautomat tłumaczy w 100%. Jeśli po dwukropku nie ma liczby od 0 do 100 lub informacji ON lub OFF, wówczas Brautomat zastępuje tekst mocą 100%.

## Przykład innej wydajności

Za pomocą poleceń sterujących można regulować maksymalną moc podczas procesu parzenia. Na przykład, jeśli płyta indukcyjna ma maksymalną moc wyjściową 3,5 kW, a używany kocioł ma pojemność 20 litrów, wówczas za pomocą polecenia sterującego MASH:75 można zmniejszyć maksymalną moc wyjściową płyty indukcyjnej do 75%. Reszta za pomocą polecenia sterującego MASH:75 jest tworzona przy temperaturze docelowej 0°C i czasie trwania 0 minut z aktywowanym autonext.

## Przykładowy wywar

Jak opisano powyżej, reszta planu zacierania jest zawsze przypisywana do pierwszego kotła (MASH), jeśli żadne polecenie sterujące (dwukropek w nazwie reszty) nie przypisuje reszty do innego kotła. Polecenie sterujące może albo włączyć/wyłączyć drugi kocioł z temperaturą docelową i przejść bezpośrednio do następnego odpoczynku, albo zintegrować go z procesem zacierania z okresem odpoczynku.

W procesie warzenia dekokcyjnego część zacieru gotuje się, a pozostałą część zacieru utrzymuje się w żądanej temperaturze. Odwar z Brautomat wyglądałby tak:

* Wciągnij pozostały zacier do drugiego czajnika. Wyciągnięcie reszty pozostałego zacieru przy wyłączonym autonext spełnia to zadanie.
* następnie włączyć drugi kocioł na stałe do żądanej temperatury z przerwą zero minut. autonext jest aktywowany.
* Gotuj częściowy zacier w pierwszym kotle przez żądany czas odpoczynku. autonext jest aktywowany.
* Dodaj pozostałą część zacieru z drugiego kotła do częściowego zacieru w pierwszym kotle. autonext jest wyłączone.

Resztki w planie zacieru w środowisku 2 lub 3 kotłowym mają następującą zasadę:

* Częściowy zacier przeznaczony do ugotowania przypisany jest do pierwszego kotła
* Pozostały zacier z utrzymaniem temperatury przydzielany jest do drugiego lub trzeciego kotła
* Uzupełnienie jest zawsze przypisane do drugiego lub trzeciego czajnika

## webhook

Parametr przekaźnika PIN white musi być ustawiony na „-”, aby elementy webhooka były wyświetlane w interfejsie internetowym. Ponadto wymagany jest adres URL webhooka i polecenie dźwiękowe:

![webhook](/docs/img/kessel_webhook1.jpg)

Przykład Shelly o 13:00:

Włącz Shelly o 13:00: <http://192.168.1.5/relay/0?turn=on>\
Wyłącz Shelly o 13:00: <http://192.168.1.5/relay/0?turn=off>

Adres URL webhooka dla Shelly 1PM to: <http://192.168.1.5/relay/0?turn=> (bez włączania i wyłączania). Parametr przełącznika webhooka musi być ustawiony na „on/off”.

Adres URL Tasmota: <http://192.168.x.x/cm?cmnd=Power1%201>
