# Brautomat

![ESP32](https://img.shields.io/static/v1?label=Arduino&message=ESP32&logo=arduino&logoColor=white&color=blue)

Brautomat to kontrola parzenia dla ESP32 D1 mini. Brautomat jest używany w warzelni i oferuje intuicyjne, łatwe w obsłudze sterowanie. Podczas zacierania temperatury spoczynkowe są osiągane automatycznie i przestrzegane są czasy odpoczynku. Brautomat obsługuje również gotowanie brzeczki oraz dodawanie chmielu i składników. W rosnącym procesie infuzji Brautomat może w pełni zautomatyzować proces zacierania.

> **Uwaga:**
Ta strona została automatycznie przetłumaczona z oryginalnej niemieckiej dokumentacji.
\
Instrukcje te są stale rozszerzane, poprawiane i udoskonalane. Pierwotnie w projekcie Brautomat można było sterować tylko płytą indukcyjną GGM IDS2. Od wersji 1.48 w trybie przekaźnikowym można podłączyć także inne płyty grzewcze. Instrukcje w wielu miejscach opisują funkcje GGM IDS. Tylko tryb ręczny jest odpowiedni wyłącznie dla GGM IDS2. Wszystkie pozostałe funkcje i opcje są dostępne także dla innych płyt grzewczych.

 ---

## Układ tego przewodnika

Instrukcje te nie są uporządkowane i nie trzeba ich czytać od góry do dołu. Obszar tematyczny _Oprogramowanie_, w szczególności rozdział _Plan zacierania_, zaleca się wprowadzić do Brautomat. W rozdziale _Plan zacieru_ na końcu objaśnień funkcji znajduje się przykładowy dzień warzenia.

Niniejszy przewodnik jest podzielony na trzy obszary tematyczne:

* Oprogramowanie: użycie oprogramowania sprzętowego Brautomat
  * Instalacja
  * Podstawowa konfiguracja
  * Plan zacieru
  * AutoTune PID
  * Czujniki, czajniki, wkłady i siłowniki
  * Tryb fermentatora
* Sprzęt: płytka drukowana i odpowiednie rozszerzenia
  * Struktura płytki drukowanej i połączenia
  * Wyświetlacz
  * Obudowa 3D
  * dodatkowy sprzęt
* Informacje i często zadawane pytania
  * mały pomocnik do parzenia2
  * urządzenie MQTT

Obszar tematyczny _Oprogramowanie_ kończy się podsumowaniem _Parametry w skrócie_. Dla wielu parametrów podano szczegółowe informacje i informacje, aby uprościć konfigurację i użytkowanie.

## Brautomat Wydanie wersji

Wydana wersja Brautomat jest skompilowana z bieżącym stabilnym frameworkiem espressif. Ta wersja jest przeznaczona do użytku produktywnego. Wersja wydana jest bez modułu Logging. Wersja jest nieco szybsza. Należy preferować wersję wydawniczą.

## Brautomat Wersja rozwojowa

Wersja rozwojowa Brautomat jest skompilowana z bieżącym frameworkiem esspressif. Ta wersja jest dostarczana z modułem Logging. Nowe funkcje i poprawki błędów są najpierw wydawane w wersji rozwojowej. Ta wersja może być używana produktywnie, ale nie jest zalecana.
