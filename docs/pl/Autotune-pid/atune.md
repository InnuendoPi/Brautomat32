# AutoTune proces

W procesie AutoTune ustalane są odpowiednie parametry układu zaparzania, tak aby kontrola temperatury w procesie zacierania mogła być realizowana możliwie najdokładniej. Nacisk położony jest na temperatury RZECZYWISTE i odpowiadające im temperatury DOCELOWE. W praktyce oznacza to, że należy minimalizować przekroczenia i niedoregulowania.

Uwaga: Przeregulowanie (przekroczenie temperatury zadanej) o 0,5°C jest normalne. W zależności od izolacji kotła i dostarczonej energii indukcyjnej, temperatura będzie nieznacznie rosnąć nawet po wyłączeniu płyty.

![AutoTune4](/docs/img/IDS-AutoTune-Ziel.jpg)

Poniższy opis wartości PID ma jedynie charakter pomocniczy w obsłudze oprogramowania sprzętowego i można go pominąć. Proces AutoTune opisano zaczynając od „Proces AutoTune: krok po kroku.”\
Kontroler PID kontroluje wydajność płyt grzewczych. Ważne jest określenie odpowiednich wartości P, I i D. Wartości PID są indywidualne dla każdego systemu zaparzania i środowiska. AutoTune to procedura pomagająca określić odpowiednie wartości. Moc płyt wymaganą do osiągnięcia temperatury rzeczywistej do temperatury docelowej oblicza się z sumy trzech wartości: Wymagana moc = P + I + D\
Po ustaleniu odpowiednich wartości PID parametr Interval (SampleTime) służy do określenia przedziałów czasowych, w których należy obliczyć wymaganą wydajność.

## Wartość P

Parametr ten wpływa na różnicę pomiędzy temperaturą rzeczywistą i docelową. Im większa różnica między temperaturą rzeczywistą a docelową, tym bardziej płyta grzeje ze składnikiem P. Jeżeli temperatura docelowa zostanie osiągnięta lub przekroczona, składowa P będzie równa 0. Bardzo wysoka wartość P powoduje silne przekroczenie lub niedoregulowanie.

## Wartość „Ja”.

Wartość I wzrasta w sposób ciągły, zaczynając od zera, w miarę nagrzewania się płyty. Im dłużej ochfeld potrzebuje, aby uzyskać temperaturę rzeczywistą do docelowej, tym większa staje się wartość I. Wraz z wartością P wynika następujący dodatek: W miarę zbliżania się temperatury docelowej wartość P maleje, a wartość I rośnie. Temperatura docelowa jest osiągana tylko poprzez wartość I. Powyżej temperatury docelowej wartość I ponownie maleje. Wartość I powoduje przekroczenie.

## Wartość D

Wartość D jest tłumikiem, który tłumi oscylacje dwóch pierwszych części P i I. Zbyt duża wartość D spowalnia ogrzewanie i chłodzenie. Wartość ta może również wynosić zero.

## Interwał (Czas Próbki)

Obliczanie PID odbywa się w sposób ciągły. Przedział opisuje cykl. W każdym przedziale w sposób ciągły wyznaczana jest różnica pomiędzy temperaturą rzeczywistą a docelową oraz zmiana temperatury rzeczywistej. Zbyt mały odstęp (np. 1000 ms) prowadzi do „trzepotania” rzeczywistej temperatury w sensie błędów zaokrągleń +- 0,0625°C przy rozdzielczości 12 bitów. Zbyt duży odstęp czasu (np. 7000 ms) prowadzi do powolnego działania. Odstęp 2000 ms lub 3000 ms powinien działać dobrze w większości środowisk. Jako rozmiar interwału można zastosować wyłącznie wielokrotność 1000 ms (1000, 2000, ... 7000).
