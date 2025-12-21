# Instalacja

Aby móc korzystać z Brautomat, należy sflashować oprogramowanie sprzętowe. Dodatkowo mikrokontroler ESP wymaga połączenia z lokalną siecią WiFi.

## Oprogramowanie sprzętowe Flash w systemie MS Windows

Wersja Brautomat32 jest przeznaczona dla ESP32 i jest oparta na frameworku IDF5.

* [ESP32 IDF5](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/main/Brautomat32.zip): Brautomat32.zip

Oprogramowanie sprzętowe instaluje się za pomocą skryptu „Flashen.cmd” znajdującego się w archiwum ZIP. Archiwum ZIP jest rozpakowywane w dowolnym folderze. Mikrokontroler ESP podłącza się do komputera PC/notebooka za pomocą kabla USB. Dwukrotne kliknięcie skryptu Flashen.cmd rozpoczyna flashowanie oprogramowania sprzętowego.

System operacyjny MS Windows automatycznie tworzy port szeregowy COM podczas podłączania mikrokontrolera ESP do portu USB komputera PC lub notebooka.

![Menedżer urządzeń Windows](/docs/img/com.jpg)

Na obrazie na COM7 znaleziono urządzenie ESP. W rzadkich przypadkach port szeregowy COM nie jest automatycznie udostępniany w systemie MS Windows. Sterowniki USB do mikrokontrolerów ESP dostępne są na stronach: (MS Win i macOS)

[![ESP32 Sterowniki](https://img.shields.io/static/v1?label=Treiber&message=ESP32&logo=arduino&logoColor=white&color=blue)](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)

Skrypt Flashen.cmd wykorzystuje narzędzie esptool.exe <https://github.com/espressif/esptool>. ESPTool jest bezpłatnie dostępny dla różnych systemów operacyjnych (macOS, Linux). Wersja 64-bitowa systemu Windows jest zawarta w archiwum ZIP. ESPTool jest objęty licencją GPL v2. Zobacz załączony [plik LICENCJI](https://github.com/espressif/esptool/blob/master/LICENSE), aby uzyskać kopię.

### Ręczne flashowanie MS Windows, macOS i Linux

Jeśli nie można użyć skryptu, oprogramowanie sprzętowe można przenieść ręcznie do mikrokontrolera ESP.

ESP32 Krok 1 Usuń Flash:

```json
esptool.exe --chip ESP32 kasowanie-flash
```

ESP32 Krok 2 Flash oprogramowania sprzętowego:

```json
esptool.exe --chip ESP32 --baud 921600 --przed resetem domyślnym --po twardym resecie zapis flash 0x1000 bootloader.bin 0x8000 partycje.bin 0xe000 boot_app0.bin 0x10000 firmware.bin 0x350000 LittleFS.bin
```

### Flashowanie oprogramowania sprzętowego w systemie macOS

Pobierz: [pyflasher](https://github.com/marcelstoer/nodemcu-pyflasher/releases)

W systemie macOS flashowanie oprogramowania sprzętowego dzieli się na dwa etapy. W pierwszym kroku oprogramowanie sprzętowe Brautomat.ino.bin jest instalowane na ESP za pomocą narzędzia pyflasher.

![macOS](/docs/img/flashen_macos.png)

Następnie należy połączyć Brautomat z siecią WLAN. Po podłączeniu Brautomat do Wi-Fi należy zainstalować system plików.\
Otwórz w przeglądarce: <http://Brautomat.local/update>

Po kliknięciu przycisku „System plików” plik LittleFS.bin jest wybierany i instalowany poprzez kliknięcie Aktualizuj system plików.

## Konfiguracja sieci WLAN

Po wgraniu oprogramowania sprzętowego Brautomat uruchamia się w trybie AccessPoint. Otwarta sieć WLAN o nazwie _Brautomat_ stanie się widoczna. Należy nawiązać połączenie z tą siecią WLAN. Po nawiązaniu połączenia przeglądarka internetowa otwiera portal konfiguracji sieci WLAN. Jeżeli portal nie otworzy się automatycznie, należy ręcznie wpisać adres <http://192.168.4.1> w przeglądarce internetowej.

![Konfiguracja WLAN](/docs/img/wlan1.jpg)

Konfiguracja sieci WLAN wyświetlana jest za pomocą przycisku „Konfiguruj WiFi”.

![Konfiguracja WLAN](/docs/img/wlan2.jpg)

Tutaj należy wprowadzić sieć WLAN (SSID i hasło). Po wybraniu _Zapisz_ Brautomat uruchamia się ponownie i łączy z siecią WLAN. Interfejs sieciowy Brautomat jest dostępny w lokalnej sieci WLAN pod adresem <http://Brautomat.local>.

Na tym kończy się podstawowa instalacja. Proces aktualizacji oprogramowania sprzętowego i konfiguracji sieci WLAN wystarczy wykonać tylko raz. Należy teraz skonfigurować Brautomat. Konfiguracja jest opisana w rozdziale _Podstawowa konfiguracja_. Następną sekcję _Aktualizacja_ można początkowo pominąć.

> **Uwaga:**\
Brautomat32 próbuje nawiązać połączenie z konfiguracją WLAN (SSID i hasło) przez maksymalnie 20 sekund. Jeśli nie można nawiązać połączenia, na przykład w przypadku nieprawidłowego wprowadzenia hasłazostał użyty, wówczas Brautomat32 uruchamia się ponownie w trybie AccessPoint.\
W rzadkich przypadkach i zwykle tylko wtedy, gdy sygnał WLAN jest słaby, Brautomat32 nie znajduje odpowiedniej sieci WLAN i uruchamia się również w trybie AccessPoint po ok. 20 sekund. W takim przypadku pomoże jedynie ponowne uruchomienie Brautomat32.

##Aktualizacje

Aktualizacje można zainstalować w Brautomat za pomocą menu „Aktualizacja”. Nowe oprogramowanie sprzętowe można zaimportować za pomocą „WebUpdate” lub „File Update”. Podczas aktualizacji oprogramowania sprzętowego za pomocą WebUpdate oprogramowanie pobiera aktualną wersję z Internetu z repozytorium github. Podczas aktualizacji poprzez aktualizację plików oprogramowanie sprzętowe jest przesyłane z lokalnego komputera. Kabel USB ani skrypt z instalacji nie są wymagane.

Obszar pamięci mikrokontrolera ESP jest podzielony na oprogramowanie układowe i system plików. Podczas bieżącej pracy konfiguracje, receptury i inne pliki można zapisywać lub zmieniać jedynie w systemie plików. Dostęp do obszaru oprogramowania sprzętowego można uzyskać wyłącznie w celu odczytu. Podczas aktualizacji obszar oprogramowania sprzętowego jest całkowicie ponownie instalowany, a poszczególne pliki w systemie plików są zastępowane.

### Aktualizacja internetowa

![WebUpdate](/docs/img/webupdate.jpg)

WebUpdate uruchamia ponownie Brautomat kilka razy. Najpierw następuje aktualizacja oprogramowania sprzętowego. Po kolejnym ponownym uruchomieniu framework zostanie zaktualizowany. Proces WebUpdate jest rejestrowany w pliku webUpdateLog.txt.

Jeśli włączona jest opcja _WebUpdate z wersją próbną_, WebUpdate zostanie przeprowadzona z aktualną wersją deweloperską. To są wersje testowe. Nowe funkcje oprogramowania sprzętowego są (zwykle) początkowo przechowywane jako wersja testowa w repozytorium github. Wersje próbne nie są zalecane do użytku produktywnego.

### Aktualizacja pliku

Aktualizacja oprogramowania sprzętowego poprzez wybór FileUpdate odbywa się w kilku krokach:

Najpierw należy pobrać aktualne oprogramowanie sprzętowe. Następnie archiwum ZIP zostanie rozpakowane.\
W interfejsie internetowym Brautomat wybierz pozycję menu Aktualizacja, a następnie FileUpdate. Wyświetli się prosta strona aktualizacji (rysunek 1):

![Aktualizacja pliku](/docs/img/dateiupdate2.jpg)

W obszarze Firmware za pomocą przycisku „Wybierz plik” należy teraz wybrać plik _firmware.bin_ z archiwum ZIP (na rysunku 2). Kliknięcie przycisku Aktualizuj oprogramowanie sprzętowe rozpoczyna aktualizację.

Można także zaktualizować system plików Brautomat.

> **Uwaga:**\
Funkcja Update FileSystem odbudowuje system plików. Aktualizacja FileSystem zastępuje wszystkie ustawienia i konfiguracje. Oprócz konfiguracji obejmuje to również profile kotłów i receptury warzenia zacieru. W prawie wszystkich przypadkach aktualizacja oprogramowania sprzętowego, po której następuje aktualizacja oprogramowania WebUpdate, jest właściwym wyborem, ponieważ usługa WebUpdate aktualizuje poszczególne pliki w systemie plików po aktualizacji oprogramowania sprzętowego.
