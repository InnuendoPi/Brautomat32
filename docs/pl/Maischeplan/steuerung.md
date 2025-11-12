# Sterowanie

Bezpośrednio pod planem zacierania znajduje się talia kontrolerów. Procesem zacierania steruje się za pomocą 5 przycisków Zasilanie, Odtwórz, Pauza, Poprzedni i Następny.

![Kontrola](/docs/img/Buttons.jpg)

## Przycisk zasilania

Przycisk zasilania służy do włączania i wyłączania procesu zacierania. Jeżeli w ustawieniach płyty kuchennej włączono funkcję AutoTune, proces AutoTune zostanie uruchomiony lub zatrzymany za pomocą przycisku zasilania.

## Przycisk Odtwórz

Przycisk Play pełni w procesie zacierania dwie funkcje:

1. Pierwsza funkcja to _Uruchom licznik czasu odpoczynku dla bieżącego odpoczynku_. Przycisk Odtwórz uruchamia licznik czasu odpoczynku niezależnie od RZECZYWISTEJ temperatury.\
Przykład: Jeśli brzeczka już wrze na etapie wrzenia, ale RZECZYWISTA temperatura 98,5°C jest niższa od temperatury spoczynkowej wynoszącej 100°C, licznik czasu odpoczynku nie uruchamia się.

2. Druga funkcja przycisku Play jest powiązana z właściwością _autonext_: kontynuowanie procesu zacierania z następną pauzą. W przypadku tej funkcji przycisk odtwarzania jest wyświetlany na czerwono. Funkcja _Kontynuuj proces zacierania do następnej przerwy_ zostanie wyjaśniona w dalszej części opisu _autonext_ w planie zacierania.

## Przycisk pauzy

Funkcję przycisku pauzy można rozróżnić w fazie nagrzewania do temperatury spoczynkowej oraz w fazie spoczynku.

- Przerwa w fazie nagrzewania

Jeżeli proces parzenia rozpoczynamy przyciskiem zasilania, przyciski umożliwiające edycję planu zacieru są ukryte. Kliknięcie przycisku pauzy spowoduje ponowne wyświetlenie symboli edycji. Podczas włączonej pauzy płyta pozostaje włączona, aby osiągnąć temperaturę docelową. Przycisk Wstrzymaj zostanie wówczas wyświetlony na czerwono. Za pomocą przerwy można dostosować harmonogram zacierania w trakcie procesu warzenia. Jeżeli podczas przerwy zostanie osiągnięta temperatura spoczynkowa, rozpoczyna się odliczanie czasu przerwy i przerwa się kończy.

- Przerwa podczas odpoczynku

Podczas przerwy licznik czasu odpoczynku w procesie zacierania jest również zatrzymywany za pomocą przycisku pauzy. Przycisk Wstrzymaj zostanie wówczas wyświetlony na czerwono. Podczas przerwy temperatura rzeczywista utrzymywana jest w stosunku do zadanej temperatury spoczynkowej, czyli sterownik PID, a tym samym płyta grzewcza pozostają aktywne. Za pomocą przerwy podczas odpoczynku można dostosować plan zacieru. Czas trwania przerwy wydłuża poprzedni czas odpoczynku.

## Przycisk Poprzedni

Przycisk Wstecz powoduje przejście do poprzedniego kroku planu zacierania. Jeśli proces zacierania został zatrzymany, licznik czasu bieżącego odpoczynku zostaje zresetowany i uruchomiony ponownie.

##Przycisk Dalej

Przycisk Dalej powoduje przejście do następnego kroku planu zacierania lub, jeśli był to ostatni krok w planie, kończy proces zacierania.

## Przycisk Zwiń

Przycisk Zwiń zwija lub zwija tabelę planu zacieru.

![Maischeplan](/docs/img/Maischeplan-anzeigen.jpg)

Przycisk zwijania pozostaje widoczny nawet po rozpoczęciu parzenia. Po rozpoczęciu parzenia wszystkie przyciski umożliwiające edycję planu zacieru są ukryte.
