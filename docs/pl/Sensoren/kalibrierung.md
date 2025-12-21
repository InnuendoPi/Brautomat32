# Kalibracja

Czujniki Dallas DS18B20 czasami wykazują odchylenia od rzeczywistej temperatury. Specyfikacje techniczne producentów często podają dokładność +-0,5°C w zakresie od -10°C do 85°C. Dodatkowo czujniki nazywane są kalibrowanymi.

Odchylenia można skorygować za pomocą kalibracji 2-punktowej. Kalibracja za pomocą Brautomat jest korekcją liniową. Do kalibracji czujników wymagany jest skalibrowany termometr. Kocioł do zaparzania napełnia się typową ilością wody i podgrzewa do temperatury 40°C. Różnicę między wartością czujnika a skalibrowanym termometrem wprowadza się do parametru „Offset 1 \[40°C]”. Proces ten powtarza się w temperaturze 78°C, a różnicę wprowadza się w parametrze „Offset 2 \[78°C]”. W przyszłości wszystkie pomiary czujnika będą wyprowadzane z tą korektą.

W celu kalibracji czujnik temperatury jest ustawiony na tryb wysokiej rozdzielczości (rozdzielczość 12 bitów lub 0,0625°C). Kalibracja poprzez interfejs sieciowy składa się z 60 zmierzonych wartości. Czas potrzebny na kalibrację wynosi prawie dokładnie 60 sekund. Wynikiem pomiaru temperatury jest średnia z 60 zmierzonych wartości. Przesunięcie to różnica między rzeczywistą temperaturą a średnią.

W wielu przypadkach wystarczająca jest 1-punktowa kalibracja w łaźni lodowej, ponieważ przesunięcie czujników DS18B20 jest zwykle stałe.

## Procedura kalibracji bez termometru referencyjnego

Jeśli termometr referencyjny nie jest dostępny, kalibrację można przeprowadzić przy użyciu łaźni lodowej i wygotowania.
Dla dolnego zakresu pomiarowego wymagany jest pojemnik zawierający 50% kostek lodu i 50% zimnej wody. Łaźnia lodowa ma temperaturę (prawie dokładnie) 0,0°C. Wodę z lodem należy mieszać w sposób ciągły, najlepiej za pomocą mieszadła magnetycznego. Kalibrację rozpoczyna się w łaźni lodowej o temperaturze 0°C.

Drugi punkt kalibracji można określić na podstawie wysokości nad poziomem morza i powiązanej z nią temperatury wrzenia. Na wysokości 0 m nad poziomem morza lub pod ciśnieniem atmosferycznym 1013 barów temperatura wrzenia wynosi 100,0°C. Wraz ze wzrostem wysokości spada ciśnienie powietrza, a tym samym temperatura wrzenia. Najpierw należy określić lokalny NHN, na przykład za pomocą Google Earth. Na każdy metr nad poziomem morza temperatura wrzenia spada o 0,003354°C. Na stronie internetowej [rechneronline](https://rechneronline.de/barometer/siedepunkt.php) temperatura wrzenia jest obliczana na podstawie wysokości nad poziomem morza. Wiele smartfonów oferuje również informacje o wysokości w kompasie lub aplikacji nawigacyjnej. Wysokość nad poziomem morza należy określić z dokładnością do ok. +-20m. Odpowiada to zmianie temperatury wrzenia o 0,06708°C, a zatem znacznie wykracza poza dokładność kontroli Brautomat. Kalibrację drugiego punktu przeprowadza się przy użyciu kotła do zaparzania zacieru, mieszadła i wcześniej określonej lokalnej temperatury wrzenia. Temperatura docelowa jest zatem temperaturą wrzenia. Ważne jest, aby przed rozpoczęciem kalibracji górnego zakresu upewnić się, że temperatura wrzenia została osiągnięta i utrzymana przez co najmniej jedną minutę. Bardzo ważne jest również, aby płyta kuchenna pozostawała włączona ze stałą mocą.

Przesunięcie nr 1 (dolny zakres wartości) to różnica 0,0°C (łaźnia lodowa) do średniej wartości z pierwszego przebiegu kalibracji. Przesunięcie nr 2 (górny zakres) to różnica między temperaturą wrzenia a średnią z drugiej kalibracji.

## Kalibracja procedury za pomocą termometru klinicznego

Termometr kliniczny jest dobrze dopasowanym termometrem referencyjnym. Górny zakres pomiarowy termometru klinicznego jest ograniczony do ok. 40°C. Przeprowadzenie kalibracji odpowiada procedurze dla łaźni lodowej i temperatury wrzenia. Jedyna różnica: jeśli na przykład jako drugi punkt kalibracji wybierzesz 40°C, płyta kuchenna musi zostać wyłączona natychmiast po osiągnięciu temperatury docelowej i pozostaje stała przez ok. 60 sekund (bez wahań). Dopiero wtedy można dMożna rozpocząć kalibrację, czyli rejestrację 60 próbek pomiarowych.

## Plik dziennika kalibracji czujnika

Dla każdej kalibracji zapisywany jest plik dziennika. Przykład:

```tekst
13:22:37 Rozpoczęto kalibrację czujnika
*** Nazwa czujnika: Czujnik IDS2
*** Model: DS18B20
*** Adres: 2827c59d0d0000b1
*** Rozdzielczość: 12 bitów
*** Limit czasu: 750 ms
------------------------------------------------------
Rzeczywiste przesunięcie różnicy docelowej ID
#01 24,6000 24,0000 -0,6000 0,6000

 - Wartości czujnika odpowiednio od 2 do 59

#60 24,6000 25,1875 0,5875 -0,6083
------------------------------------------------------
Temperatura przesunięcia nr 1: 24,6000
Średnia po 60 pomiarach: 25,2083
Przesunięcie nr 1: -0,6083
=========================================
```
