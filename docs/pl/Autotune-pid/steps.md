# AutoTune Krok po kroku

Praktyczna procedura AutoTune wygląda następująco:

![AutoTune](/docs/img/IDS-AutoTune.jpg)

1. Napełnij czajnik do parzenia zacieru typową ilością wody

    a. Typowa ilość odpowiada napełnieniu kotła składającemu się z głównego odlewu i wypełnienia

    Przykład: 20 l głównego odlewu i 5 kg wypełnienia daje typową ilość 25 l wody w procesie AutoTune

    b. Włącz mikser
2. Ustaw temperaturę docelową AutoTune.

    a. temperatura docelowa powinna wynosić 50°C lub więcej.

    B. Temperatura docelowa powinna być co najmniej o 10°C wyższa od aktualnej temperatury rzeczywistej.

3. Aktywuj „PID AutoTune”
4. Włącz „debugowanie AutoTune”
5. Zapisz to ustawienie
6. Kliknięcie przycisku zasilania rozpoczyna proces AutoTune.

![AutoTune2](/docs/img/IDS-AutoTune-start.jpg)

Proces AutoTune składa się z dwóch faz. Faza 1 to nagrzewanie do temperatury docelowej. Po osiągnięciu temperatury docelowej płyta grzewcza zostaje wyłączona. Temperatura docelowa jest czasami znacznie przekraczana o 2-3°C. Dla procesu AutoTune konieczne jest znaczne przekroczenie temperatury docelowej. Następnie następuje faza chłodzenia poniżej temperatury docelowej. Te dwie fazy powtarza się 5 razy. W zależności od środowiska proces AutoTune zajmuje stosunkowo dużo czasu (90 minut lub więcej). Większość czasu jest potrzebna w fazach chłodzenia. Im lepsza izolacja warzelni, tym dłużej trwa proces AutoTune lub faza chłodzenia. Proces AutoTune należy prowadzić przy typowej temperaturze zacieru ok. 60°C. Aktualny status wyświetlany jest w kolumnie „AutoTune Proces 0/5”. Pierwsza liczba to bieżący krok, a druga liczba to oczekiwana liczba AutoTune kroków, które będą wymagane. Mierzone wartości wyznaczane są w procesie AutoTune. Zmierzone wartości są stale sprawdzane. Jeżeli zmierzona wartość wykazuje odchylenie, pomiar jest powtarzany. Jeśli się powtórzy, wyświetli się „AutoTune Proces 6/5”. Wykonuje się maksymalnie 20 powtórzeń. Wynik AutoTune wyświetlany jest w ustawieniach GGM IDS w zakładce Menedżer PID:

![AutoTune3](/docs/img/IDS-AutoTune-erg.jpg)

Proces AutoTune zostaje zakończony, a ustalone parametry systemu zostają automatycznie zapisane.\
Wynikiem AutoTune jest współczynnik wzmocnienia Ku (wzmocnienie maksymalne) i czas trwania okresu (okres maksymalny). P, I i D są obliczane na podstawie tych dwóch parametrów. Dostępne są różne algorytmy do obliczania wartości PID. Brautomat wykorzystuje algorytm PID, który jest zoptymalizowany do warzenia (a właściwie do podgrzewania płynów) i jest również używany na przykład w dodatku CraftBeerPi PIDBoil.

_Wskazówka: Po procesie AutoTune należy zapisać konfigurację za pomocą kopii zapasowej._

Po zakończeniu procesu AutoTune i włączeniu „AutoTune debugowania” dziennik „AutoTune\_log.txt” można wyświetlić w Eksploratorze. Wszystkie informacje są zapisywane w tym pliku dziennika.\
Wynik AutoTune zapisywany jest w formacie JSON w plikach „idsAutoTune.txt”, „sudAutoTune.txt” lub „hltAutoTune.txt”. Pliki mają charakter wyłącznie informacyjny i nie są wymagane do działania. W tych plikach wartości PID są wymienione według różnych metod obliczeniowych.

W dzienniku wymienione są następujące metody obliczeń:

CAŁKA PID\
NIEKTÓRE PRZEKROCZENIE PID\
BEZ PRZEKROŻENIA PID\
ZIEGLER NICHOLS PID\
ZIEGLER NICHOLS PI\
TYREUS LUYBEN PID\
TYREUS LUYBEN PI\
CIANCONE MARLIN PID\
CIANCONE MARLIN PI

Obliczone wartości różnych algorytmów można wprowadzić w ustawieniach, wybierając INDIVIDUAL_PID w liniach P, I i D. Jednak powinno to prowadzić do lepszych wyników tylko w rzadkich przypadkach.
