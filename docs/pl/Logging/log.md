# Rejestrowanie

![media](/docs/img/logging.jpg)

Logowanie dostępne jest wyłącznie w wersji rozwojowej. Zintegrowane rejestrowanie pomaga w rozwiązywaniu problemów, zarówno w przypadku błędów oprogramowania sprzętowego Brautomat32, jak i błędów użytkownika. Do wyjścia wymagany jest monitor szeregowy. Poniżej przedstawiono kod programu Microsoft Visual Studio z rozszerzeniem Microsoft Serial Monitor. Microsoft Visual Code jest bezpłatny i dostępny jako wersja samodzielna (nie wymaga instalacji).

Oprócz portu COM monitor szeregowy musi być ustawiony na szybkość transmisji 115200 i CRLF.

![Kod Microsoft Visual Studio](/docs/img/vscode.jpg)

## Ustawienia rejestrowania

Za pomocą ustawień systemowych można aktywować różne kanały wyjścia szeregowego.

* Konfiguracja - ten kanał wyświetla komunikaty w momencie odczytania lub zapisania konfiguracji.
* Czujniki - na tym kanale wyprowadzane są komunikaty o czujnikach
* Aktorzy - kanał do raportowania o aktorach
* Kocioł zacierowy - w tym kanale wyświetlane są komunikaty o pierwszym kotle
* Czajnik - wszystkie komunikaty dotyczące czajnika
* Kocioł do ponownego odlewania - Komunikaty dotyczące kotła do ponownego odlewania
* Fermenter - Komunikaty dotyczące trybu fermentatora
* System - w tym kanale wyświetlane są komunikaty systemowe
* Proces zacierania - w tym kanale rejestrowany jest proces zacierania
* Nextion Display – logowanie do wyświetlacza

Każdy kanał ma opcje wyłączone, błąd, informacje i szczegółowe.

* Wył. — brak logowania.

Kanał nie wysyła dziennika do konsoli szeregowej.

* Błąd — rejestrowane są tylko błędy.

Typ wyjścia debugowania Błąd rejestruje tylko błędy. W VSCode typ BŁĄDU jest wyświetlany na czerwono.

```json
[E][SENSOREN.cpp:1600] setSenErr(): Błąd czujnika testowego: #0 Stan błędu Sensor_Sud: 1
[E][SENSOREN.cpp:76] Update(): Sen: Błąd Sensor_Sud nr 1 nie mógł odczytać danych o temperaturze
```

* Informacje - Proces logowania

Debuguj procesy dziennika informacji o typie wyjściowym. Typ Info zawiera dane wyjściowe typu Error. W VSCode typ INFO jest wyświetlany na zielono.

```json
[I][KETTLES.cpp:2044] debConsole(): ustaw nowy powerlast: 1071746ms
[I][KETTLES.cpp:1922] webhook(): odpowiedź webhooka: 
[I][KETTLES.cpp:2044] debConsole(): webhook włączony: 5000 ms (mDutyCycle 5000 * moc 100 / 100)
```

* Pełne — wyświetlane są wszystkie dostępne informacje.

Dane wyjściowe debugowania typu szczegółowego obejmują wszystkie poprzednie typy. Ponadto wszystkie transmisje SSE są rejestrowane w trybie Verbose. W VSCode typ Verbose jest wyświetlany na niebiesko.

```json
[V][SYSTEM.cpp:847] SSEBroadcastJson(): czajnik hlt: {"ison":false,"state":false,"power":0,"enabled":3,setp:0,"temp":"32.4"}
[V][SYSTEM.cpp:919] SSEBroadcastJson(): czajnik sud: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:839] SSEBroadcastJson(): zacier w kotle: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Ponadto ustawienie System - verbose powoduje zwijanie rejestrowania wszystkich żądań GET i POST serwera WebServer.

Dane wyjściowe na konsoli szeregowej mają stałe formatowanie. Przykład:

```json
[V][SYSTEM.cpp:839] SSEBroadcastJson(): zacier w kotle: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Poszczególne części:

```json
[V] Typ wyjścia (tutaj Pełny)
```

```json
[SYSTEM.cpp:839] Zaokrąglona lokalizacja kodu źródłowego
```

```json
SSEBroadcastJson(): Funkcja wywołująca
```

Rzeczywisty komunikat debugowania następuje po dwukropku:

```json
zacier w kotle: {„moc”: 0, „stepnr”: 0, „tempvalue”: „50,4”, „target”: 0, „step”: 6, „timer”: 3}
```

Gdy Brautomat jest podłączony do konsoli szeregowej, podczas uruchamiania pojawia się następujący komunikat

```json
05:42:16.904 > [I][SYSINFO] uruchamiam wersję Brautomat32 V 1.56
05:42:22.467 > [I][SYSINFO] zamontuj system plików LittleFS: ok, wolna pamięć sterty: 192924
05:42:28.384 > [I][SYSINFO] mDNS http://Brautomat.lokalny adres IP 192.168.100.112 czas: 05:42:27 RSSI: -83
```

Oprócz der wersja Brautomat wyświetlana jest nazwa MDNS i aktualny adres IP. Linia _mount system plików LittleFS: ok, wolna sterta mem:_ wskazuje, że system plików został zamontowany.

## Błąd czujnika testowego

Błąd czujnika może zostać wywołany poprzez adres URL strony internetowej. Czujniki w Brautomat mają identyfikator zaczynający się od 0. Błąd czujnika można wygenerować poprzez połączenie internetowe:

```json
http://Brautomat.local/setSenErr?id=0
```

Aby naprawić błąd czujnika, ponownie uzyskuje się dostęp do dokładnie tego samego adresu URL. Pierwszy czujnik ma identyfikator 0, drugi ma identyfikator 1, a trzeci ma identyfikator 2. W adresie URL wystarczy zastąpić ostatnie 0 żądanym identyfikatorem czujnika.

Za pomocą tego testu błędu czujnika można bardzo łatwo sprawdzić parametr „Zachowanie w przypadku błędu czujnika”.

## Rejestrowanie za pomocą Microsoft VSCode

Microsoft VSCode można skonfigurować do logowania w zaledwie kilku krokach. Nie ma potrzeby instalowania Microsoft VSCode; wersja przenośna jest wystarczająca.

Pobierz Microsoft VSCode jako plik ZIP: [Microsoft VSCode](https://code.visualstudio.com/docs/?dv=winzip)

Wyodrębnij plik ZIP do dowolnego katalogu. Przejdź do katalogu w eksploratorze plików i utwórz folder o nazwie data. Folder danych przełącza MS VScode w tryb przenośny i można go używać bez instalacji.

![Kod Microsoft Visual Studio](/docs/img/vscode_4.jpg)

Uruchom Microsoft VSCode, klikając dwukrotnie Code.exe.

![Kod Microsoft Visual Studio](/docs/img/vscode_1.jpg)

Do rejestrowania wymagane jest rozszerzenie Serial Monitor w VScode. Kliknij przycisk Rozszerzenia po lewej stronie i w polu wyszukiwania wpisz „monitor szeregowy”.

![Kod Microsoft Visual Studio](/docs/img/vscode_2.jpg)

Zainstaluj rozszerzenie Serial Monitor firmy Microsoft. Monitor szeregowy jest wyświetlany na wyświetlaczu wyjściowym. Kliknij element wyjściowy w menu widoku lub otwórz wynik za pomocą kombinacji klawiszy Ctrl Shift U. Wyświetlanie rozszerzeń można ukryć lub wyświetlić, klikając przycisk Rozszerzenia. Teraz kliknij zakładkę Serial Monitor w oknie Output. Teraz wystarczy wybrać port COM i ustawić prędkość transmisji na 115200. Rejestrację uruchamiamy przyciskiem Rozpocznij monitorowanie.

![Kod Microsoft Visual Studio](/docs/img/vscode_3.jpg)
