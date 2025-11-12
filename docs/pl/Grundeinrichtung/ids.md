# Ustawić płytę grzejną

## Tworzenie kotła do zaparzania zacieru

W pierwszej sekcji _Maischeplan_ kocioł MashSud jest tworzony za pomocą koła zębatego w prawym górnym rogu.

![Utwórz kocioł do zaparzania zacieru](/docs/img/IDS-einrichten.jpg)

## Konfiguracja płyty kuchennej

Najpierw należy skonfigurować płytę kuchenną. W tej podstawowej konfiguracji instalowana jest płyta indukcyjna GGM IDS.

Pierwsze ustawienie dotyczy typu IDS, gdzie można wybrać IDS1 lub IDS2. Następnie następują trzy parametry kontrolne:

* PIN biały [przekaźnik] - Domyślnie: D7
* PIN żółty [Polecenie] - Domyślnie: D6
* PIN niebieski [Przerwanie] - Domyślnie: - (nieużywany) lub D5

Te GPIO (D5, D6 i D7) są wstępnie skonfigurowane dla kabla połączeniowego GGM IDS z gniazdem JST-HX lub listwą zacisków śrubowych.

Następnie do czajnika MashBud należy przypisać czujnik temperatury. Wyboru dokonuje się z listy czujników, które zostały już skonfigurowane. W tej podstawowej konfiguracji występuje tylko czujnik _Sensor IDS2_, który jest odpowiednio wybrany.

_Uwaga_: _Czujnik temperatury musi być na stałe przypisany do płyty kuchennej. Wartość czujnika określana jest jako temperatura rzeczywista lub temperatura bieżąca i jest stale porównywana z temperaturą spoczynkową (temperaturą docelową) podczas procesu zacierania._

![Konfiguruj kocioł do parzenia zacieru](/docs/img/IDS-configure.jpg)

Parametry w zakładce „Regulacja temperatury” zostały szczegółowo opisane w rozdziale „Wszystkie parametry”. W przypadku konfiguracji podstawowej początkowo przyjmowane są wartości domyślne.

![Konfiguruj kocioł do zaparzania zacieru](/docs/img/IDS-temperaturen.jpg)

## Konfigurowanie kontrolera PID.

Po podstawowej konfiguracji należy skonfigurować kontroler PID w zakładce Menedżer PID. Sterownik PID automatycznie oblicza moc potrzebną płycie do doprowadzenia temperatury zacieru (temperatura rzeczywista) do temperatury spoczynkowej. Precyzyjna konfiguracja PID gwarantuje, że temperatura spoczynkowa pozostanie stała przez cały okres odpoczynku.

Kontroler PID ustawiony jest za pomocą dwóch parametrów:

* Ku (wzmocnienie maksymalne) – współczynnik wzmocnienia
* Pu (okres ostateczny) – długość okresu

Z tych dwóch wartości obliczane są parametry PID P, I i D. Parametry te są indywidualne dla każdego systemu zaparzania i wyznaczane są za pomocą procesu AutoTune. Proces AutoTune został szczegółowo opisany w sekcji „AutoTune krok po kroku”.

Dla tej podstawowej konfiguracji wprowadzono następujące wartości Ku i Pu. Następnie wybierana jest reguła strojenia PID _IDS PID Tryb_:

![IDS](/docs/img/IDS-AutoTune-erg.jpg)

Po wprowadzeniu wartości Ku i Pu wybrany algorytm PID automatycznie wyznacza trzy wartości P, I i D. Szczegółowe wyjaśnienie wszystkich parametrów nastąpi później.

## Wartości początkowe dla różnych wielkości kotłów

Dla czajnika o pojemności 36 l i objętości zacieru około 20 l:

```tekst
Współczynnik wzmocnienia Ku (maksymalne wzmocnienie): 182
Czas trwania okresu Pu (okres ostateczny): 2245
```

Dla czajnika o pojemności 70 l i objętości zacieru powyżej 50 l:

```tekst
Współczynnik wzmocnienia Ku (maksymalne wzmocnienie): 225
Długość okresu Pu (okres ostateczny): 1500
```

## Zakończenie podstawowej konfiguracji

Po zapisaniu ustawień podstawowa konfiguracja jest zakończona. Można teraz zaparzyć za pomocą czujnika temperatury i czajnika do zaparzania zacieru.

_Uwaga: Plan zacieru jest również wymagany w przypadku samego procesu warzenia._
