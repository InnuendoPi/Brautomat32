# System parametrów

## Systemu

### Aktywuj brzęczyk piezoelektryczny

Za pomocą tego parametru można aktywować brzęczyk piezoelektryczny. Domyślnie buzzer jest podłączony do GPIO D8. Odpowiada to układowi tablicy 2.1. Alarmy dźwiękowe wspomagają proces zacierania sygnałami dźwiękowymi.

### Aktywuj tosty i alarmy mp3

Grzanki to małe wiadomości push. Pojawiają się jako kafelki w prawym dolnym rogu przeglądarki. Z wyjątkiem komunikatów o błędach, tosty są automatycznie ukrywane po kilku sekundach. Istnieją wiadomości toastowe dotyczące procesu zacierania, wiadomości toastowe z systemu i alarmy beztekstowe w formacie mp3. Właściwość Tosty ma 3 opcje: Wył., Wł. i Błąd. Opcja „Off” powoduje wyłączenie komunikatów alarmowych. Opcja „Wł.” powoduje wysłanie wszystkich wiadomości tostowych i alarmów w formacie mp3. Opcja „tylko błędy” wysyła komunikaty tostowe tylko w przypadku błędów systemowych, ale nie wysyła komunikatów dotyczących procesu zacierania.

Tosty obsługują wyjście audio. Oznacza to, że tosty są eksponowane nie tylko wizualnie, ale także akustycznie podczas procesu zacierania. Oprogramowanie sprzętowe zawiera pliki audio info.mp3, sukces.mp3, ostrzeżenie.mp3 i błąd.mp3. Można wymieniać pliki audio (mp3). Tylko nazwa musi pozostać taka sama. W przeglądarce musi być aktywowane automatyczne odtwarzanie dźwięku dla adresu IP maszyny panny młodej.

dźwięk mp3 wymaga „gestu użytkownika” na urządzeniach z systemem iOS, takiego jak kliknięcie lub dotknięcie. Wystarczy kliknąć element na stronie internetowej, a odtwarzany będzie dźwięk w formacie mp3. Bez gestu użytkownika wyjście audio jest blokowane przez system iOS_.

Wszystkie główne przeglądarki, takie jak MS Edge, Chrome czy Firefox, mają opcje automatycznego odtwarzania multimediów w ustawieniach w ramach uprawnień witryny. Zalecane jest dodanie witryny z Brautomat do listy dozwolonych. Na poniższym obrazku dodana została strona internetowa z Brautomat o nazwie mDNS w przeglądarce Microsoft Edge. Alternatywnie można również wprowadzić adres IP

![media](/docs/img/autoplay-media.jpg)

Przy tym ustawieniu alarmy mp3 mogą zastąpić brzęczyk piezoelektryczny.

### Aktywuj wyświetlacz dotykowy

Za pomocą tego parametru można obsługiwać 3,5-calowy wyświetlacz Nextion HMI. Brautomat oferuje trzy widoki

#### Przegląd kotła

W tym widoku wyświetlane są IDS i temperatura po odlewaniu z temperaturą rzeczywistą i docelową. Wyświetlany jest bieżący i następny odpoczynek wraz z czasem trwania.
Długość czerwonego paska pod widokiem IDS i przekształceniem pokazuje czas odpoczynku, który upłynął.

![Wyświetlacz](/docs/img/kettlepage-sm.jpg)

#### MashBud

Ten widok przedstawia pierwszą płytę grzejną. Wyświetlany jest aktualny czas odpoczynku z temperaturą rzeczywistą i docelową, a także bieżącym pozostałym czasem. Długość czerwonego paska pod temperaturami pokazuje postęp aktualnego odpoczynku. Symbol po prawej stronie pozostałego czasu pokazuje, czy następna przerwa rozpocznie się automatycznie (autonext): zielony oznacza automatyczną, czerwony oznacza przerwę. Dodatkowo wyświetlany jest controller Deck z odpowiednimi funkcjami.

![Wyświetlacz](/docs/img/brewpage-sm.jpg)

#### Tryb ręczny (tylko dla GGM IDS2)

Widok ten służy do ręcznego sterowania płytą indukcyjną. W trybie ręcznym dostępnych jest 6 poziomów mocy: 0, 20, 40, 60, 80 i 100% mocy. Tryb ręczny jest odpowiedni tylko dla GGM IDS2. (IDS1 nie testowany!)

![Wyświetlacz](/docs/img/induction-mode-sm.jpg)

Wyświetlacz jest opcjonalny. Brautomat obsługuje tylko 3,5-calowe wyświetlacze dotykowe Nextion HMI (serie Basic i Discovery).

Wyświetlacz konfiguruje się za pomocą karty SD. Plik TFT z folderu Info odpowiadający wyświetlaczowi jest kopiowany na kartę SD i umieszczany w wyświetlaczu. Po włączeniu wyświetlacza rozpoczyna się konfiguracja. Proces trwa około minuty. Postęp jest pokazywany na wyświetlaczu. Po zakończeniu konfiguracji wyświetlacz wyłączy się, a karta SD zostanie wyjęta. Wyświetlacz jest teraz gotowy do użycia.

Należy zaznaczyć, że SDA, SCL muszą być obsługiwane na PINach D1, D2.

### Czujniki PT100x MAX31865 AmplAktywuj tutaj

Jeżeli stosowane są analogowe czujniki PT100x, należy aktywować ten przełącznik. Czujnik analogowy PT100x wymaga przetwornika RTD na cyfrowy w celu połączenia z mikrokontrolerem ESP. Wzmacniacz MAX31865 to przetwornik cyfrowy RTD w postaci małej dodatkowej płytki.

### Włącz mDNS

Multicast DNS służy do tłumaczenia nazw hostów na adresy IP w małych sieciach. mDNS umożliwia użycie „mówiącej” nazwy dla Brautomat. Domyślną nazwą jest mDNS „Brautomat”. Interfejs sieciowy jest dostępny pod adresem <http://Brautomat.local>. Nazwa hosta może mieć maksymalnie 15 znaków.

Uwaga: Nazwa mDNS jest konfigurowana bez protokołu (http://) i domeny najwyższego poziomu (.local) w ustawieniach systemu (Brautomat).

### Dashboard

Za pomocą Dashboard możesz łatwo pokazywać i ukrywać elementy. Na przykład, jeśli nie jest używane przekształcenie, element Przekształcenie dla Dashboard powinien być dezaktywowany. Wyłączone elementy zmniejszają ruch.

### Rejestrowanie

Rejestrowanie jest aktywowane tylko w wersji rozwojowej. Na karcie Rejestrowanie można aktywować wyjście dziennika szeregowego dla wszystkich modułów. Do rejestrowania dostępne są poziomy Error, Info, Verbose i Off. Wymagany jest monitor szeregowy, np. z Arduino IDE, VSCODE itp. Szybkość transmisji wynosi 115200.

Tryb błędu wyświetla tylko błędy.

Tryb informacyjny zawiera błędy, a także wyświetla informacje o konfiguracji na monitorze szeregowym.

Tryb szczegółowy obejmuje błędy i informacje, a także wyświetla informacje o przesyłaniu danych (transmisje SSE).

### Serwer czasu NTP

Network Time Protocol (NTP) regularnie synchronizuje czas z serwerem czasu. Domyślnym serwerem czasu jest europe.pool.ntp.org. Jeśli w sieci lokalnej znajduje się serwer czasu, należy go użyć. Jeśli skonfigurowany jest lokalny serwer czasu, Brautomat nie wymaga dostępu do Internetu. Na przykład fritz.box lub adres IP standardowej bramy.

### Strefa czasowa NTP

Strefa czasowa jest określana na podstawie tabeli. Strefa czasowa Europa Berlin jest wstępnie ustawiona:

<CET-1CEST,M3.5.0,M10.5.0/3>

Strefa czasowa służy do określenia prawidłowego czasu, włączając czas letni i zimowy.

#### Tabela stref czasowych

|Afryka/Abidżan |GMT0 |
|--------------------------------|------------------------------------------------|
|Afryka/Akra |GMT0 |
|Afryka/Addis_Ababa |EAT-3 |
|Afryka/Algier |CET-1 |
|Afryka/Asmara |EAT-3 |
|Afryka/Bamako |GMT0 |
|Afryka/Bangui |WAT-1 |
|Afryka/Bandżul |GMT0 |
|Afryka/Bissau |GMT0 |
|Afryka/Blantyre |CAT-2 |
|Afryka/Brazzaville |WAT-1 |
|Afryka/Bużumbura |CAT-2 |
|Afryka/Kair |EET-2EEST,M4.5.5/0,M10.5.4/24 |
|Afryka/Casablanka |<+01>-1 |
|Afryka/Ceuta |CET-1CEST,M3.5.0,M10.5.0/3 |
|Afryka/Konakry |GMT0 |
|Afryka/Dakar |GMT0 |
|Afryka/Dar_es_Salaam |EAT-3 |
|Afryka/Dżibuti |EAT-3 |
|Afryka/Duala |WAT-1 ||Afryka/El_Aaiun |<+01>-1 |
|Afryka/Wolne Miasto |GMT0 |
|Afryka/Gaborone |CAT-2 |
|Afryka/Harare |CAT-2 |
|Afryka/Johannesburg |SAST-2 |
|Afryka/Dżuba |CAT-2 |
|Afryka/Kampala |EAT-3 |
|Afryka/Chartum |CAT-2 |
|Afryka/Kigali |CAT-2 |
|Afryka/Kinszasa |WAT-1 |
|Afryka/Lagos |WAT-1 |
|Afryka/Libreville |WAT-1 |
|Afryka/Lome |GMT0 |
|Afryka/Luanda |WAT-1 |
|Afryka/Lubumbashi |CAT-2 |
|Afryka/Lusaka |CAT-2 |
|Afryka/Malabo |WAT-1 |
|Afryka/Maputo |CAT-2 |
|Afryka/Maseru |SAST-2 |
|Afryka/Mbabane |SAST-2 |
|Afryka/Mogadiszu |EAT-3 |
|Afryka/Monrowia |GMT0 |
|Afryka/Nairobi |EAT-3 |
|Afryka/Ndżamena |WAT-1 |
|Afryka/Niamey |WAT-1 |
|Afryka/Nawakszut |GMT0 |
|Afryka/Ouagadougou |GMT0 |
|Afryka/Porto-Novo |WAT-1 |
|Afryka/Sao_Tome |GMT0 |
|Afryka/Trypolis |EET-2 |
|Afryka/Tunis |CET-1 |
|Afryka/Windhuk |CAT-2 |
|Ameryka/Adak |HST10HDT,M3.2.0,M11.1.0 |
|Ameryka/Kotwiczenie |AKST9AKDT,M3.2.0,M11.1.0 |
|Ameryka/Anguilla |AST4 |
|Ameryka/Antigua |AST4 |
|Ameryka/Araguaina |<-03>3 |
|Ameryka/Argentyna/Buenos_Aires|<-03>3 |
|Ameryka/Argentyna/Catamarca |<-03>3 |
|Ameryka/Argentyna/Kordoba |<-03>3 |
|Ameryka/Argentyna/Jujuy |<-03>3 |
|Ameryka/Argentyna/La_Rioja |<-03>3 |
|Ameryka/Argentyna/Mendoza |<-03>3 |
|Ameryka/Argentyna/Rio_Gallegos|<-03>3 |
|Ameryka/Argentyna/Salta |<-03>3 |
|Ameryka/Argentyna/San_Juan |<-03>3 |
|Ameryka/Argentyna/San_Luis |<-03>3 |
|Ameryka/Argentyna/Tucuman |<-03>3 |
|Ameryka/Argentyna/Ushuaia |<-03>3 |
|Ameryka/Aruba |AST4 |
|Ameryka/Asuncion |<-04>4<-03>,M10.1.0/0,M3.4.0/0 |
|Ameryka/Atikokan|EST5 |
|Ameryka/Bahia |<-03>3 |
|Ameryka/Bahia_Banderas |CST6 |
|Ameryka/Barbados |AST4 |
|Ameryka/Belem |<-03>3 |
|Ameryka/Belize |CST6 |
|Ameryka/Blanc-Sablon |AST4 |
|Ameryka/Boa_Vista |<-04>4 |
|Ameryka/Bogota |<-05>5 |
|Ameryka/Boise |MST7MDT,M3.2.0,M11.1.0 |
|Ameryka/Cambridge_Bay |MST7MDT,M3.2.0,M11.1.0 |
|Ameryka/Campo_Grande |<-04>4 |
|Ameryka/Cancun |EST5 |
|Ameryka/Caracas |<-04>4 |
|Ameryka/Kajenne |<-03>3 |
|Ameryka/Kajmany |EST5 |
|Ameryka/Chicago |CST6CDT,M3.2.0,M11.1.0 |
|Ameryka/Chihuahua |CST6 |
|Ameryka/Kostaryka |CST6 |
|Ameryka/Creston |MST7 |
|Ameryka/Kuiaba |<-04>4 |
|Ameryka/Curaçao |AST4 |
|Ameryka/Danmarkshavn |GMT0 |
|Ameryka/Dawson |MST7 |
|Ameryka/Dawson_Creek |MST7 |
|Ameryka/Denver |MST7MDT,M3.2.0,M11.1.0 |
|Ameryka/Detroit |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Dominika |AST4 |
|Ameryka/Edmonton |MST7MDT,M3.2.0,M11.1.0 |
|Ameryka/Eirunepe |<-05>5 |
|Ameryka/Salwador |CST6 |
|Ameryka/Fortaleza |<-03>3 |
|Ameryka/Fort_Nelson |MST7 |
|Ameryka/Glace_Bay |AST4ADT,M3.2.0,M11.1.0 |
|Ameryka/Godthab |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|Ameryka/Goose_Bay |AST4ADT,M3.2.0,M11.1.0 |
|Ameryka/Grand_Turk |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Grenada |AST4 |
|Ameryka/Gwadelupa |AST4 |
|Ameryka/Gwatemala |CST6 |
|Ameryka/Guayaquil |<-05>5 |
|Ameryka/Gujana |<-04>4 |
|Ameryka/Halifax |AST4ADT,M3.2.0,M11.1.0 |
|Ameryka/Hawana |CST5CDT,M3.2.0/0,M11.1.0/1 |
|Ameryka/Hermosillo |MST7 |
|Ameryka/Indiana/Indianapolis |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Indiana/Knox |CST6CDT,M3.2.0,M11.1.0 |
|Ameryka/Indiana/Marengo |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Indiana/Petersburg |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Indiana/Tell_City |CST6CDT,M3.2.0,M11.1.0 |
|Ameryka/Indiana/Vevay |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Indiana/Vincennes |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Indiana/Winamac |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Inuvik |MST7MDT,M3.2.0,M11.1.0 |
|Ameryka/Iqaluit |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Jamajka |EST5 |
|Ameryka/Juneau |AKST9AKDT,M3.2.0,M11.1.0 |
|Ameryka/Kentucky/Louisville |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Kentucky/Monticello |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Kralendijk |AST4 |
|Ameryka/La_Paz |<-04>4 |
|Ameryka/Lima |<-05>5 |
|Ameryka/Los Angeles |PST8PDT,M3.2.0,M11.1.0 |
|Ameryka/Lower_Princes |AST4 |
|Ameryka/Maceio |<-03>3 |
|Ameryka/Managua |CST6 |
|Ameryka/Manaus |<-04>4 |
|Ameryka/Marigot |AST4 |
|Ameryka/Martynika |AST4 |
|Ameryka/Matamoros |CST6CDT,M3.2.0,M11.1.0 |
|Ameryka/Mazatlan |MST7 |
|Ameryka/Menominee |CST6CDT,M3.2.0,M11.1.0 |
|Ameryka/Merida |CST6 |
|Ameryka/Metlakatla |AKST9AKDT,M3.2.0,M11.1.0 |
|Ameryka/Meksyk_Miasto |CST6 |
|Ameryka/Miquelon |<-03>3<-02>,M3.2.0,M11.1.0 |
|Ameryka/Moncton |AST4ADT,M3.2.0,M11.1.0 |
|Ameryka/Monterrey |CST6 |
|Ameryka/Montevideo |<-03>3 |
|Ameryka/Montreal |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Montserrat |AST4 |
|Ameryka/Nassau |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Nowy_Jork |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Nipigon |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Nome |AKST9AKDT,M3.2.0,M11.1.0 |
|Ameryka/Noronha |<-02>2 |
|Ameryka/Dakota_Północna/Beulah |CST6CDT,M3.2.0,M11.1.0 |
|Ameryka/Dakota_Północna/Centrum |CST6CDT,M3.2.0,M11.1.0 |
|Ameryka/Dakota_Północna/Nowe_Salem|CST6CDT,M3.2.0,M11.1.0 |
|Ameryka/Nuuk |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|Ameryka/Ojinaga |CST6CDT,M3.2.0,M11.1.0 |
|Ameryka/Panama |EST5 |
|Ameryka/Pangnirtung |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Paramaribo |<-03>3 |
|Ameryka/Phoenix |MST7 |
|Ameryka/Port-au-Prince |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Port_Hiszpania |AST4 |
|Ameryka/Porto_Velho |<-04>4 |
|Ameryka/Portoryko |AST4 |
|Ameryka/Punta_Arenas |<-03>3 |
|Ameryka/Rzeka_Deszczowa |CST6CDT,M3.2.0,M11.1.0 |
|Ameryka/Rankin_Inlet |CST6CDT,M3.2.0,M11.1.0 |
|Ameryka/Recife |<-03>3|
|Ameryka/Regina |CST6 |
|Ameryka/Resolute |CST6CDT,M3.2.0,M11.1.0 |
|Ameryka/Rio_Branco |<-05>5 |
|Ameryka/Santarem |<-03>3 |
|Ameryka/Santiago |<-04>4<-03>,M9.1.6/24,M4.1.6/24 |
|Ameryka/Santo_Domingo |AST4 |
|Ameryka/Sao_Paulo |<-03>3 |
|Ameryka/Scoresbysund |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|Ameryka/Sitka |AKST9AKDT,M3.2.0,M11.1.0 |
|Ameryka/St_Barthelemy |AST4 |
|Ameryka/St_Johns |NST3:30NDT,M3.2.0,M11.1.0 |
|Ameryka/St_Kitts |AST4 |
|Ameryka/St_Lucia |AST4 |
|Ameryka/St_Thomas |AST4 |
|Ameryka/St_Vincent |AST4 |
|Ameryka/Swift_Current |CST6 |
|Ameryka/Tegucigalpa |CST6 |
|Ameryka/Thule |AST4ADT,M3.2.0,M11.1.0 |
|Ameryka/Thunder_Bay |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Tijuana |PST8PDT,M3.2.0,M11.1.0 |
|Ameryka/Toronto |EST5EDT,M3.2.0,M11.1.0 |
|Ameryka/Tortola |AST4 |
|Ameryka/Vancouver |PST8PDT,M3.2.0,M11.1.0 |
|Ameryka/Whitehorse |MST7 |
|Ameryka/Winnipeg |CST6CDT,M3.2.0,M11.1.0 |
|Ameryka/Jakutat |AKST9AKDT,M3.2.0,M11.1.0 |
|Ameryka/Nóż żółty |MST7MDT,M3.2.0,M11.1.0 |
|Antarktyda/Casey |<+08>-8 |
|Antarktyda/Davis |<+07>-7 |
|Antarktyda/DumontDUrville |<+10>-10 |
|Antarktyda/Macquarie |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Antarktyda/Mawson |<+05>-5 |
|Antarktyda/McMurdo |NZST-12NZDT,M9.5.0,M4.1.0/3 |
|Antarktyda/Palmer |<-03>3 |
|Antarktyda/Rothera |<-03>3 |
|Antarktyda/Syowa |<+03>-3 |
|Antarktyda/Troll |<+00>0<+02>-2,M3.5.0/1,M10.5.0/3 |
|Antarktyda/Wostok |<+05>-5 |
|Arktyka/Longyearbyen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Azja/Aden |<+03>-3 |
|Azja/Ałmaty |<+05>-5 |
|Azja/Amman |<+03>-3 |
|Azja/Anadyr |<+12>-12 |
|Azja/Aktau |<+05>-5 |
|Azja/Aktobe |<+05>-5 |
|Azja/Aszchabad |<+05>-5 |
|Azja/Atyrau |<+05>-5 |
|Azja/Bagdad |<+03>-3 |
|Azja/Bahrajn |<+03>-3 |
|Azja/Baku |<+04>-4 |
|Azja/Bangkok |<+07>-7 |
|Azja/Stodołaaul |<+07>-7 |
|Azja/Bejrut |EET-2EEST,M3.5.0/0,M10.5.0/0 |
|Azja/Biszkek |<+06>-6 |
|Azja/Brunei |<+08>-8 |
|Azja/Chita |<+09>-9 |
|Azja/Choibalsan |<+08>-8 |
|Azja/Kolombo |<+0530>-5:30 |
|Azja/Damaszek |<+03>-3 |
|Azja/Dhaka |<+06>-6 |
|Azja/Dili |<+09>-9 |
|Azja/Dubaj |<+04>-4 |
|Azja/Duszanbe |<+05>-5 |
|Azja/Famagusta |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Azja/Gaza |EET-2EEST,M3.4.4/50,M10.4.4/50 |
|Azja/Hebron |EET-2EEST,M3.4.4/50,M10.4.4/50 |
|Azja/Ho_Chi_Minh |<+07>-7 |
|Azja/Hongkong |HKT-8 |
|Azja/Hovd |<+07>-7 |
|Azja/Irkuck |<+08>-8 |
|Azja/Dżakarta |WIB-7 |
|Azja/Jayapura |WIT-9 |
|Azja/Jerozolima |IST-2IDT,M3.4.4/26,M10.5.0 |
|Azja/Kabul |<+0430>-4:30 |
|Azja/Kamczatka |<+12>-12 |
|Azja/Karaczi |PKT-5 |
|Azja/Katmandu |<+0545>-5:45 |
|Azja/Khandyga |<+09>-9 |
|Azja/Kalkuta |IST-5:30 |
|Azja/Krasnojarsk |<+07>-7 |
|Azja/Kuala_Lumpur |<+08>-8 |
|Azja/Kuching |<+08>-8 |
|Azja/Kuwejt |<+03>-3 |
|Azja/Makau |CST-8 |
|Azja/Magadan |<+11>-11 |
|Azja/Makassar |WITA-8 |
|Azja/Manila |PST-8 |
|Azja/Maskat |<+04>-4 |
|Azja/Nikozja |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Azja/Nowokuźnieck |<+07>-7 |
|Azja/Nowosybirsk |<+07>-7 |
|Azja/Omsk |<+06>-6 |
|Azja/Doustnie |<+05>-5 |
|Azja/Phnom_Penh |<+07>-7 |
|Azja/Pontianak |WIB-7 |
|Azja/Pjongjang |KST-9 |
|Azja/Katar |<+03>-3 |
|Azja/Kyzylorda |<+05>-5 |
|Azja/Riyad |<+03>-3 |
|Azja/Sachalin |<+11>-11 |
|Azja/Samarkanda |<+05>-5 |
|Azja/Seul |KST-9 |
|Azja/Szanghaj |CST-8 |
|Azja/Singapur |<+08>-8 |
|Azja/Srednekolymsk |<+11>-11 |
|Azja/Tajpej |CST-8 |
|Azja/Taszkent |<+05>-5 |
|Azja/Tbilisi |<+04>-4 |
|Azja/Teheran |<+0330>-3:30 |
|Azja/Thimpu |<+06>-6 |
|Azja/Tokio |JST-9 |
|Azja/Tomsk |<+07>-7 |
|Azja/Ułan Bator |<+08>-8 |
|Azja/Urumczi |<+06>-6 |
|Azja/Ust-Nera |<+10>-10 |
|Azja/Wientian |<+07>-7 |
|Azja/Władywostok |<+10>-10 |
|Azja/Jakuck |<+09>-9 |
|Azja/Rangon |<+0630>-6:30 |
|Azja/Jekaterynburg |<+05>-5 |
|Azja/Erewan |<+04>-4 |
|Atlantyk/Azory |<-01>1<+00>,M3.5.0/0,M10.5.0/1 |
|Atlantyk/Bermudy |AST4ADT,M3.2.0,M11.1.0 |
|Atlantyk/Kanary |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantyk/Wyspy Zielonego Przylądka |<-01>1 |
|Atlantyk/Wyspy Owcze |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantyk/Madera |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantyk/Reykjavik |GMT0 |
|Atlantyk/Gruzja_południowa |<-02>2 |
|Atlantyk/Stanley |<-03>3 |
|Atlantyk/St_Helena |GMT0 |
|Australia/Adelajda |ACST-9:30ACDT,M10.1.0,M4.1.0/3 |
|Australia/Brisbane |AEST-10 |
|Australia/Broken_Hill |ACST-9:30ACDT,M10.1.0,M4.1.0/3 |
|Australia/Currie |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Australia/Darwin |ACST-9:30 |
|Australia/Eucla |<+0845>-8:45 |
|Australia/Hobart |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Australia/Lindeman |AEST-10 |
|Australia/Lord_Howe |<+1030>-10:30<+11>-11,M10.1.0,M4.1.0 |
|Australia/Melbourne |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Australia/Perth |AWST-8 |
|Australia/Sydnej |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Europa/Amsterdam |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Andora |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Astrachań |<+04>-4 |
|Europa/Ateny |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Belgrad |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Berlin |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Bratysława |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Bruksela |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Bukareszt |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Budapeszt |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Busingen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Kiszyniów |EET-2EEST,M3.5.0,M10.5.0/3 |
|Europa/Kopenhaga |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Dublin |IST-1GMT0,M10.5.0,M3.5.0/1 |
|Europa/Gibraltar |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Guernsey |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Helsinki |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Wyspa_Man |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Stambuł |<+03>-3 |
|Europa/Jersey |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Kaliningrad |EET-2 |
|Europa/Kijów |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Kirow |MSK-3 |
|Europa/Lizbona |WET0WEST,M3.5.0/1,M10.5.0 |
|Europa/Lublana |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Londyn |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Luksemburg |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Madryt |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Malta |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Mariehamn |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Mińsk |<+03>-3 |
|Europa/Monako |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Moskwa |MSK-3 |
|Europa/Oslo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Paryż |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Podgorica |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Praga |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Ryga |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Rzym |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Samara |<+04>-4 |
|Europa/San_Marino |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Sarajewo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Saratów |<+04>-4 |
|Europa/Symferopol |MSK-3 |
|Europa/Skopje |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Sofia |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Sztokholm |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Tallin |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Tirana |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Uljanowsk |<+04>-4 |
|Europa/Użgorod |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Vaduz |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Watykan |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Wiedeń |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Wilno |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Wołgograd |MSK-3 |
|Europa/Warszawa |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Zagrzeb |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Zaporoże |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Zurych |CET-1CEST,M3.5.0,M10.5.0/3 |
|Indyjskie/Antananarywa |EAT-3 |
|Indyjski/Chagos |<+06>-6|
|Indyjski/Boże Narodzenie |<+07>-7 |
|Indyjskie/Kokosowe |<+0630>-6:30 |
|Indyjski/Komoro |EAT-3 |
|Indyjski/Kerguelen |<+05>-5 |
|Indian/Mahe |<+04>-4 |
|Indie/Malediwy |<+05>-5 |
|Indyjskie/Mauritius |<+04>-4 |
|Indyjski/Majotta |EAT-3 |
|Indian/Reunion |<+04>-4 |
|Pacyfik/Apia |<+13>-13 |
|Pacyfik/Auckland |NZST-12NZDT,M9.5.0,M4.1.0/3 |
|Pacyfik/Bougainville |<+11>-11 |
|Pacyfik/Chatham |<+1245>-12:45<+1345>,M9.5.0/2:45,M4.1.0/3:45|
|Pacyfik/Chuuk |<+10>-10 |
|Pacyfik/Wielkanoc |<-06>6<-05>,M9.1.6/22,M4.1.6/22 |
|Pacyfik/Efate |<+11>-11 |
|Pacyfik/Enderbury |<+13>-13 |
|Pacyfik/Fakaofo |<+13>-13 |
|Pacyfik/Fidżi |<+12>-12 |
|Pacyfik/Funafuti |<+12>-12 |
|Pacyfik/Galapagos |<-06>6 |
|Pacyfik/Gambier |<-09>9 |
|Pacyfik/Guadalcanal |<+11>-11 |
|Pacyfik/Guam |ChST-10 |
|Pacyfik/Honolulu |HST10 |
|Pacyfik/Kiritimati |<+14>-14 |
|Pacyfik/Kosra |<+11>-11 |
|Pacyfik/Kwajalein |<+12>-12 |
|Pacyfik/Majuro |<+12>-12 |
|Pacyfik/Markizy |<-0930>9:30 |
|Pacyfik/Midway |SST11 |
|Pacyfik/Nauru |<+12>-12 |
|Pacyfik/Niue |<-11>11 |
|Pacyfik/Norfolk |<+11>-11<+12>,M10.1.0,M4.1.0/3 |
|Pacyfik/Noumea |<+11>-11 |
|Pacyfik/Pago_Pago |SST11 |
|Pacyfik/Palau |<+09>-9 |
|Pacyfik/Pitcairn |<-08>8 |
|Pacyfik/Pohnpei |<+11>-11 |
|Pacyfik/Port_Moresby |<+10>-10 |
|Pacyfik/Rarotonga |<-10>10 |
|Pacyfik/Sajpan |ChST-10 |
|Pacyfik/Tahiti |<-10>10 |
|Pacyfik/Tarawa |<+12>-12 |
|Pacyfik/Tongatapu |<+13>-13 |
|Pacyfik/Wake |<+12>-12 |
|Pacyfik/Wallis |<+12>-12 |
|Itd./GMT |GMT0 |
|Itd./GMT-0 |GMT0 |
|Itd./GMT-1 |<+01>-1 |
|Itd./GMT-2 |<+02>-2 |
|Itd./GMT-3|<+03>-3 |
|Itd./GMT-4 |<+04>-4 |
|Itd./GMT-5 |<+05>-5 |
|Itd./GMT-6 |<+06>-6 |
|Itd./GMT-7 |<+07>-7 |
|Itp/GMT-8 |<+08>-8 |
|Itd./GMT-9 |<+09>-9 |
|Itd./GMT-10 |<+10>-10 |
|Itd./GMT-11 |<+11>-11 |
|Itd./GMT-12 |<+12>-12 |
|Itd./GMT-13 |<+13>-13 |
|Itd./GMT-14 |<+14>-14 |
|Itd/GMT0 |GMT0 |
|Itd./GMT+0 |GMT0 |
|Itd./GMT+1 |<-01>1 |
|Itd./GMT+2 |<-02>2 |
|Itd./GMT+3 |<-03>3 |
|Itd./GMT+4 |<-04>4 |
|Itd./GMT+5 |<-05>5 |
|Itd./GMT+6 |<-06>6 |
|Itd./GMT+7 |<-07>7 |
|Itd./GMT+8 |<-08>8 |
|Itd./GMT+9 |<-09>9 |
|Itd./GMT+10 |<-10>10 |
|Itd./GMT+11 |<-11>11 |
|Itd./GMT+12 |<-12>12 |
|Itd./UCT |UTC0 |
|Itp./UTC |UTC0 |
|Itd./Greenwich |GMT0 |
|Itd./Uniwersalny |UTC0 |
|Itd./Zulu |UTC0 |
