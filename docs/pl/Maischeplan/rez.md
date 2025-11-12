# Ustawienia planu zacierania

Brautomat oferuje łatwe zarządzanie planami zacierania. Oprócz importowania i eksportowania możesz przełączać się między zapisanymi planami zacierania. Możliwa jest także kontrola czasu. W tym rozdziale zakończono opis podstawowych funkcji.

## Plan miksowania

Nazwę planu zacierania można określić w ustawieniach. Nazwa pliku pochodzi od nazwy planu zacieru. Parametry *Całkowity czas gotowania* i *Czas po izomeryzacji* są wyświetlane wyłącznie w celach informacyjnych i nie można ich edytować. Parametry te są wczytywane podczas importu receptury. Jeśli plan zacierania zostanie utworzony ręcznie, czas gotowania i wartości po izomeryzacji nie mają znaczenia, ponieważ Brautomat nie oblicza jednostek gorzkich.

## Kontrola czasu

Dzięki kontroli czasu dzień ślubu można zaplanować i rozpocząć automatycznie.

![Kontrola czasu](/docs/img/Kontrola czasu.jpg)

Za pomocą elementu DateTimerPicker możesz łatwo wybrać datę i godzinę. Nazwa przepisu zostaje tymczasowo zastąpiona określonym czasem rozpoczęcia.

![Kontrola czasu](/docs/img/Kontrola czasu2.jpg)

Aktywowana kontrola czasu jest zapisana w konfiguracji. Po ponownym uruchomieniu zaparzacza wczytywana jest ustawiona data i godzina. Jeżeli start parzenia nastąpi w przyszłości, aktywowana jest kontrola czasu. Jeśli początek parzenia przypada w przeszłości, kontrola czasu jest wyłączona.

## Zarządzaj planami zacierania

### Utwórz plan zacierania

W polu wejściowym należy wpisać nazwę planu zacieru. Po *OK* tworzony jest nowy pusty plan zacieru.

### Zmień nazwę planu zacierania

W polu wejściowym należy wpisać nową nazwę planu zacieru. Po *OK* plan zacierania zostanie zapisany pod nową nazwą.

### Zmień plan zacierania

Brautomat zarządza planami zacierania w pamięci flash. Wybierając *Zmień plan zacierania*, możesz przełączać się pomiędzy istniejącymi planami zacierania.

### Importuj plan zacieru

Brautomat może importować przepisy warzenia z następujących źródeł:

* KleinBrauhelfer2 (od wersji 2.5 typ eksportu Brautomat)
* Słód zacierowy i nie tylko
* Piwowar
* Brautomat

Zaimportowany przepis na warzenie staje się planem zacieru Brautomat. Zalecane jest zarządzanie i tworzenie receptur za pomocą kbh2. Filtr eksportu „Brautomat” zawiera w zoptymalizowanej formie wszystkie dane potrzebne do zaparzenia za pomocą Brautomat.

Przepisy z MashMalzandMore również należy najpierw zaimportować do małego programu browarniczego2 i dostosować do indywidualnych wartości systemowych, surowców itp. Ponieważ MMum nie przypisuje reszcie nazw, zaleca się ich edycję w planie zacieru KBH2.

Przepisy i napary można importować z BrewFather poprzez import plików lub poprzez wywołanie API. W BrewFather pozostałe nazwy mogą zawierać treść (prawie dowolnej długości). Tekst zostaje skrócony do maksymalnie 50 znaków. Brewfather dopuszcza liczby zmiennoprzecinkowe i tekst jako czas odpoczynku. Parametry są konwertowane na liczby całkowite lub ustawiane na 0.

*Uwaga: Mikrokontrolery ESP mają niewielką ilość pamięci RAM. Import przepisów zawierających bardzo długi tekst, obrazy lub inne załączniki może nie być możliwy. Brautomat filtruje przepisy przed importem. Jednak przed importem może być konieczne usunięcie obrazów i bardzo długich opisów.

Zaimportowane przepisy są zapisywane w folderze /Recipes. Nazwa przepisu jest używana jako nazwa pliku. Maksymalna długość nazwy pliku w systemie plików Arduino wynosi 31 znaków. Podczas zapisywania spacje i umlauty są zastępowane.

### Eksportuj plan zacieru

Plan zacieru można wyeksportować w formacie JSON. Aby przeczytać go ponownie, należy użyć importu w formacie Brautomat.

### Usuń plan zacierania

Wybrany plan zacierania zostanie usunięty z pamięci flash.

## Importuj domyślne

![Import ustawień wstępnych](/docs/img/preset_import.jpg)

Brautomat wymaga Schjechałem zacierając (opcjonalnie) i jednoetapowo zacierając. W szczególności etap zacierania służy jako etap oddzielający zacieranie od gotowania, gdy opcja autonext jest wyłączona. Podczas importowania Brautomat może wstawić brakujące kroki zacierania i zacierania. Ponadto brakujące temperatury mogą zostać dostarczone wraz ze specyfikacjami.

### Domyślne temperatury dla brakujących parametrów

W przepisach pochodzących z różnych źródeł może między innymi brakować informacji o temperaturze. Dotyczy to w szczególności temperatur zacierania, rozcierania, brzeczki czołowej i chmielenia wirowego. Wewnętrzna logika programu piwowara zawsze wymaga temperatury do przetwarzania, nawet jeśli niektóre temperatury nie są konieczne z punktu widzenia piwowara. Brakującym temperaturom przypisywane są wartości domyślne.

### Temperatura zacierania [°C]

Ten parametr służy do importowania przepisu i opisuje domyślną temperaturę zacierania. Ten parametr jest używany tylko wtedy, gdy podczas importu receptury nie określono temperatury zacierania.

### Temperatura zacierania [°C]

Ten parametr służy do importowania przepisu i opisuje domyślną temperaturę zacierania. Ten parametr jest używany tylko wtedy, gdy podczas importu receptury nie określono temperatury zacierania.

### Temperatura VWH [°C]

Ten parametr służy do importowania receptury i opisuje standardową temperaturę chmielenia brzeczki czołowej. Przepisy często nie określają temperatury VWH. Dla Brautomat wymagana jest specyfikacja temperatury. Jeżeli w recepturze podana jest temperatura, zostanie ona wykorzystana podczas importu.

### Temperatura WPH [°C]

Ten parametr służy do importowania przepisu i opisuje domyślną temperaturę skakania whirlpool. Przepisy często nie określają temperatury WPH. Dla Brautomat wymagana jest specyfikacja temperatury. Jeżeli w recepturze podana jest temperatura, zostanie ona wykorzystana podczas importu.

### Temperatura gotowania [°C]

Parametr ten opisuje temperaturę, w której brzeczka wrze do wrzenia. Standardowa wartość wynosi 98°C i odpowiada w przybliżeniu lokalizacji na wysokości 500 m nad poziomem morza. W przypadku importu przepisu parametr ten służy jako temperatura gotowania.
