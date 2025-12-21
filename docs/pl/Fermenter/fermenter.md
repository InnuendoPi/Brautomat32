# Tryb fermentatora

W trybie fermentatora Brautomat32 przetwarza plan fermentacji z góry na dół w taki sam sposób, jak plan zacieru. controller Deck ma te same funkcje.

![Fermentor Dashboard](/docs/img/fermenter_dash.jpg)

Przetwarzanie kroków ma ważną różnicę:

Pierwszy etap planu fermentacji rozpoczyna się po osiągnięciu docelowej temperatury. Zwykle jest to czas, w którym do brzeczki dodaje się drożdże. Wszystkie kolejne etapy planu fermentacji rozpoczynają się natychmiast, niezależnie od aktualnej temperatury.

Aby to skonfigurować, można skonfigurować jedno GPIO do chłodzenia i jedno GPIO do ogrzewania. Opcjonalnie dostępne jest chłodzenie lub ogrzewanie.

![Ustawienia fermentora](/docs/img/fermenter_set.jpg)

Fermentor ma trzy różne stany: chłodzenie, ogrzewanie i bezczynność. Gdy zmieni się stan chłodzenia lub grzania, rozpoczyna się przerwa. Podczas przerwy stan fermentora nie zmienia się.

* Stary stan chłodzenia i nowy stan chłodzenia: bez przerwy. Chłodzenie pozostaje włączone
* Stary stan ogrzewania i nowy stan ogrzewania: bez przerwy. Ogrzewanie pozostaje włączone
* Stary stan chłodzenia i nowy stan ogrzewania: przerwa 120 s
* Stary stan ogrzewania i nowy stan chłodzenia: przerwa 120 s

## Rampa

Etap fermentacji jest określony temperaturą początkową i końcową. Na pierwszym rysunku w tej sekcji temperatura w pierwszym etapie fermentacji wynosi 18°C. Oznacza to oczywiście, że temperatura fermentacji pozostaje niezmieniona przez okres 1 dnia.

W drugim etapie fermentacji temperatura początkowa wynosi 18°C, a temperatura końcowa wynosi 20°C. Czas trwania tego etapu fermentacji wynosi 2 dni. Istnieją teraz dwa sposoby uzyskania temperatury początkowej i końcowej:

Gdy rampa jest aktywowana, Brautomat kontroluje temperaturę fermentacji liniowo w czasie określonym dla tego etapu. W tym przypadku temperaturę podnosi się z 18°C ​​do 20°C w krokach +0,1°C w ciągu 2 dni.

Przy wyłączonej rampie temperatura końcowa jest ustalana na początku etapu fermentacji poprzez chłodzenie lub ogrzewanie. Po ustaleniu temperatury końcowej należy ją utrzymać.

## Cykl przełączania przekaźnika

Cykl przełączania przekaźnika określa, jak długo utrzymywany jest jeden ze stanów chłodzenia, grzania lub bezczynności. Dopuszczalny zakres wartości wynosi od 1000 do 240 000 ms. Wartość domyślna to 120000, czyli 120 sekund. Zbyt mały cykl przełączania może mieć negatywny wpływ na urządzenia chłodzące.

## Wyświetlacz

W trybie fermentatora należy wybrać widok MashSud (strona 2). Przeglądu kotła i widoku sterowania ręcznego nie można używać w trybie fermentatora.
