# Parametry płyty

## Kontrola temperatury

### Maksymalna moc

Ten parametr opisuje maksymalną moc wyjściową płyty. Wartość domyślna to 100%. Parametr ten stosowany jest w przypadku, gdy na płycie kuchennej używany jest mały czajnik o pojemności np. 20l. Zmniejszając moc, można uniknąć zbyt szybkiego nagrzewania i wykipienia. W przypadku stosowania małych kotłów warzelniczych parametry „Maksymalna moc” i „Moc z przejścia” należy razem zmniejszyć.

Na końcu tego rozdziału znajdziesz [dwa przykłady obliczania wymaganej mocy](https://innuendopi.gitbook.io/brautomat32/info-5/parameter-ggm-ids#berechnung-der-erforderlichen-leistung).

### Delta temperatury do wartości docelowej

Parametr ten opisuje różnicę w stosunku do temperatury spoczynkowej (nastawy), przy której timer powinien rozpocząć przerwę. Wartość domyślna to 0,3°C. W procesie zacierania sterownik PID umożliwia bardzo precyzyjną kontrolę temperatury. Temperaturę spoczynkową osiąga z dokładnością +-0,2°C sterownik PID, ograniczając w sposób kontrolowany dopływ energii przed osiągnięciem temperatury spoczynkowej. Zmniejszenie dostaw energii ma ten skutek uboczny, że ostatni etap osiągnięcia temperatury spoczynkowej trwa dłużej. Właśnie w tym miejscu wchodzi w grę parametr „Delta to target”: na przykład, jeśli ma zostać osiągnięta temperatura spoczynkowa wynosząca 63°C, a aktualna temperatura wynosi 62,7°C, licznik czasu odpoczynku uruchomi się przy delcie temperatury do docelowej wynoszącej 0,3°C. W odniesieniu do indywidualnego systemu parzenia, deltę można zastosować, aby uniknąć niepożądanego wydłużenia czasu odpoczynku.

### Przejście do gotowania [°C]

Parametr ten opisuje temperaturę, w której sterownik PID powinien wykryć wrzenie brzeczki. Wartość domyślna to 95°C. Parametr ten nie opisuje temperatury, w której brzeczka zaczyna wrzeć. Parametr ten opisuje temperaturę przy której Brautomat wyłącza sterownik PID i steruje płytą z określoną mocą „moc z przejścia”. W przeciwieństwie do pozostałych temperatur, celem gotowania nie jest dokładne osiągnięcie i utrzymanie temperatury, ale raczej płynne gotowanie. Zamiast więc zmniejszać moc, płyta indukcyjna podczas gotowania pracuje ze stałą mocą.

### Moc z przejścia [%]

Ten parametr opisuje moc wyjściową płyty od momentu przejścia temperatury do gotowania. Wartość domyślna to 100%. W parametrze „Przejście do gotowania” zastosowano ustawienie temperatury, przy której sterownik PID zostanie wyłączony. Parametr „Moc z przejścia” określa teraz stałą moc wyjściową płyty kuchennej. Jeśli używany jest czajnik do zaparzania o pojemności 35 l lub większej, odpowiednim wyborem będzie domyślna wartość 100%. W kuchniach browarniczych z małymi czajnikami 100% zasilania może powodować wykipienie. W takim przypadku przy pomocy tego parametru można zmniejszyć maksymalny pobór energii np. do 75%.

### Wyłącz PID gotowanie [on/off]

Parametr ten określa zachowanie sterownika PID podczas gotowania, gdy rzeczywista temperatura jest wyższa od temperatury docelowej. Przykład: w programie zacieru temperatura gotowania została ustawiona na 98°C. Parametr „Moc z przejścia” wyłącza obliczanie PID z temperatury „Przejścia do wrzenia”. Jeżeli parametr „Wyłącz PID do gotowania” jest włączony (domyślnie), wówczas sterownik PID pozostaje wyłączony nawet powyżej temperatury docelowej 98°C z planu zacieru i wykorzystywana jest moc z parametru „Moc z przejścia”. Parametr ten jest domyślnie włączony i umożliwia gotowanie rolowane.

Jeżeli parametr „Wyłącz PID do gotowania” nie jest aktywny, wymagana moc jest obliczana przez sterownik PID po osiągnięciu temperatury docelowej (tutaj 98°C). Obliczona moc powyżej temperatury docelowej wynosi 0%. Płyta wyłączy się i w razie potrzeby zapobiegnie wykipieniu.

### Wydajnośćw przypadku błędu czujnika [0-100%]

Jeśli wystąpi błąd czujnika, na przykład czujnik nie jest podłączony lub jest uszkodzony, moc płyty kuchennej można dostosować tak, aby zaradzić temu błędowi. Wartość 100% ignoruje błąd czujnika.

Jeśli moc zostanie ustawiona na 0% w przypadku błędu czujnika, Brautomat wstrzymuje proces zacierania. Płyta jest wyłączona. Po uruchomieniu licznika czasu odpoczynku, licznik czasu zostaje zatrzymany.

Brautomat rozpoczyna obsługę błędów po 3 kolejnych błędnych wartościach czujnika. Odpytywanie czujników odbywa się mniej więcej co 2000 ms. Oznacza to, że ok. Pomiędzy wyświetleniem błędu czujnika komunikatu tostowego a rozpoczęciem obsługi błędu upływa 6 sekund.

Jeśli uszkodzony czujnik ponownie zgłosi prawidłowe wartości czujnika, Brautomat automatycznie kontynuuje proces zacierania.

_Uwaga: maks. parametr mocy nie jest przekroczony przez parametr Błąd czujnika zasilania. Na przykład, jeśli Maks. Moc IDS została skonfigurowana na 75%, a moc w przypadku błędu czujnika na 100%, wówczas efektywna maksymalna moc wyjściowa wynosi 75% nawet w przypadku błędu czujnika._

## PID Menedżer

### Interwał (Czas Próbki)

Parametr ten wskazuje przedział czasu, w jakim obliczana jest wymagana moc. Wartość domyślna to 3000 ms. Przedział ten jest używany do obliczeń PID i w AutoTune. W kuchniach browarniczych o małych objętościach korzystny może być mniejszy odstęp. Im mniejszy odstęp, tym częściej obliczana jest wymagana moc. Prowadzi to do większego wykorzystania automatycznego brojlera. Zakres wartości 1000 - 7000ms.

### PID Algorytm

Do wyboru są trzy opcje

* tryb ręczny PID: ten wybór pozwala na użycie własnych wartości Kp, Ki i Kd
* Tryb IDS PID: ten wybór oblicza wartości Kp, Ki i Kd dla płyt indukcyjnych GGM IDS na podstawie wartości Ku i Pu z procesu AutoTune
* Tryb przekaźnika PID: ten wybór oblicza wartości Kp, Ki i Kd dla płyt grzewczych z przekaźnikiem, korzystając z wartości Ku i Pu z procesu AutoTune

## AutoTune

### AutoTune pasmo szumów

Parametr ten służy do wykrywania wartości ekstremalnych (Max, Min). AutoTune pasmo szumów wskazuje minimalną zmianę w stosunku do poprzednio zmierzonej wartości, która musi wystąpić, aby rozpoznać nową wartość ekstremalną. Wartość domyślna dla IDS GGM to 0,2. W przypadku kuchenki przetworzonej za pośrednictwem przekaźnika lub SSR wartość domyślna to 0,5. Zakres wartości: 0,1 - 1,0

### AutoTune Seria danych (spojrzenie wstecz)

Ten parametr określa, ile zmierzonych wartości należy uwzględnić przy wyznaczaniu wartości ekstremalnych. Wartość domyślna to 50 odczytów. Należy pamiętać, że można skonfigurować maksymalnie 100 zmierzonych wartości. W przypadku bardzo dobrze izolowanych termicznie kotłów warzelniczych zwiększenie serii danych do 100 zmierzonych wartości może poprawić wykrywanie wartości ekstremalnych w fazie chłodzenia procesu AutoTune.

### AutoTune debugowanie

Ten przełącznik aktywuje protokół AutoTune. Dziennik dostarcza informacji, jeśli proces AutoTune nie może zostać pomyślnie ukończony. Jeśli włączone jest debugowanie AutoTune, protokół jest dostępny także podczas parzenia.

_Te 10 parametrów należy ustawić indywidualnie dla każdego systemu zaparzania. Parametry można zmieniać w trakcie procesu zacierania. Dzięki próbnemu uruchomieniu z typową ilością wody parametry można łatwo określić przed dniem warzenia._

## Profile

Brautomat może zarządzać profilami sprzętowymi. Profile można stosować, jeśli istnieją różne kotły. Użytkownicy posiadający czajniki o różnej wielkości mogą za pomocą profili wybrać czajnik na dany dzień warzenia, zamiast konieczności ręcznego ponownego wprowadzania wszystkich parametrów. Profil sprzętowy zawiera wszystkie ustawienia kotła.

Profile są zapisywane w folderze /Profiles. Profile umożliwiają szybkie i łatwe przełączanie pomiędzy różnymi kotłami. Funkcja Zapisz tworzy plik profilu z den powyższych parametrów, natomiast funkcja Usuń usuwa plik profilu z pamięci flash.

Domyślnym profilem przy uruchomieniu automatu do pieczenia chleba jest zawsze ostatni wybrany profil.

## Obliczanie wymaganej mocy

_Następujący akapit opisuje temat opcjonalny._

Podczas zacierania pożądane jest zwiększanie temperatury zacieru o 1°C na minutę. Wymaganą moc P GGM IDS można obliczyć w następujący sposób:

wymagana moc P = m[kg] * 75\
istniejąca wydajność GGM IDS P = 3500\
Współczynnik procentowy = wymagana wydajność: istniejąca wydajność

### Przykład 1

W pierwszym przykładzie napełnienie wynosi 9 kg, a napełnienie główne 35 l. Daje to całkowitą masę

```json
m = 9 + 35 = 44
```

Podstawiamy masę m = 44 do uproszczonego wzoru:

```json
P = 44 * 75 = 3300
```

Do ogrzania objętości 44 kg o 1°C na minutę potrzeba około 3300 W/min. Jeżeli GGM IDS będzie pracował na 100% mocy, czyli 3500W, różnica temperatur w zacierze rzędu 1°C zostanie osiągnięta w czasie krótszym niż 60 sekund. Aby osiągnąć cel wzrostu temperatury zacieru o 1°C na minutę, należy zmniejszyć maksymalną wydajność GGM IDS:

```json
3300: 3500 = 0,94 co odpowiada 94%
```

System GGM IDS musiałby być obsługiwany przez ok. Moc 94-95% (funkcja specjalna IDS:94).

### Przykład 2

W drugim przykładzie napełnienie wynosi 5,9 kg, a nalanie główne 26,5 l. Całkowita masa wynosi 32,4 kg.

```json
m = 5,9 + 26,5 = 32,4
```

Podstawiamy masę m = 32,4 do uproszczonego wzoru:

```json
P = 32,4 * 75 = 2430
2430:3500 = 0,69
```

Ogrzanie objętości 32,4 kg o 1°C na minutę wymaga około 2430 W/min. System GGM IDS musiałby być obsługiwany przez ok. Moc 69-70% (funkcja specjalna IDS:70).

### Masa uproszczona * 75?

```json
P = m[kg] * c * T / (t * w)
```

m odpowiada masie głównego odlewu + wypełnienia\
c odpowiada pojemności cieplnej właściwej zacieru. Stosowana jest wartość 3600 (jednostka Dżul/(kg * °C))\
T odpowiada różnicy temperatur. Używamy różnicy 1°C\
t odpowiada czasowi. Do równania wstawiamy 60 sekund jako czas\
w sprawność indukcji (80-90%). Do równania wstawia się wartość 0,8

```json
do * T / (t * w) = 3600 * 1 / (60 * 0,8) = 75
```

Dzięki temu uproszczeniu otrzymujemy wartość 75.

### Ciepło właściwe

Zastosowana tutaj specyfikacja Pojemność cieplna 3600 ma tolerancję błędu około 2% (w zależności od temperatury i ekstraktu). Mączka słodowa ma pojemność cieplną 1570 J/(kg*°C), woda ma pojemność cieplną 4190 J/(kg*°C) w zakresie temperatur 50-80°C. Zakładając, że zawartość wody w mączce słodowej wynosi 6%: (Dane z Przykładu 1)

```json
9 * 94% * 1570 + (35 + 9 * 6%) * 4190 = 8,97 * 1,57 + 35,54 * 4,19 = 14,08 + 148,91 = 13282,2 + 148912,6 = 162194,8 / 44 = 3686,25 J na kg na stopień Celsjusza
```

Zobacz też [Magazyn Piwowarski](https://braumagazin.de/article/berechnungen-in-der-brauerei/)
