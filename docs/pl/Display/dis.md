# Wyświetlacz

Brautomat można opcjonalnie obsługiwać za pomocą wyświetlacza dotykowego. Obsługiwany jest 3,5-calowy wyświetlacz dotykowy firmy Nextion

| Następny wyświetlacz | Oprogramowanie sprzętowe |
| --------------- | --------- |
| NX4832T035 (seria podstawowa) | [NX4832T035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/Brautomat-NX4832T035.tft) |
| NX4832K035 (seria wzmocniona) | [NX4832K035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/Brautomat-NX4832K035.tft) |
| NX4832F035 (seria Discovery) | [NX4832F035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/Brautomat-NX4832F035.tft) |

Wyświetlacz wymaga oprogramowania sprzętowego do działania z Brautomat. Link do oprogramowania sprzętowego odpowiadającego typowi wyświetlacza znajduje się w tabeli. Zobacz także flashowanie pliku ekranowego.

## Podłącz wyświetlacz

Wyświetlacz jest podłączony do płytki za pomocą 4 kabli

| Kabel | Następny wyświetlacz | Podłączenie listwy zaciskowej |
| --------- | --------------- | ------------------------ |
|     czerwony | Aktualny + | Vcc |
|   czarny | Elektryczność - | GND |
|    niebieski | Teksas | SDL (D1) |
|    żółty | Odbiór | SDA (D2) |

![Połączenie](/docs/img/disp1.jpg)

## Plik wyświetlania Flash

Wyświetlacz należy przygotować przed pierwszym uruchomieniem. W tym celu należy pobrać z tabeli odpowiedni firmware wyświetlacza i zapisać go na karcie microSD. Karta microSD jest wkładana do gniazda kart SD w wyświetlaczu i włącza się Brautomat. Proces flashowania rozpoczyna się automatycznie. Stan lampy błyskowej jest pokazywany na wyświetlaczu. Po zakończeniu Brautomat zostanie wyłączony, a karta microSD zostanie wyjęta. Karta microSD nie jest wymagana do normalnej pracy.

## Zobacz napar z zacieru

![MaischeSud](/docs/img/brewpage-sm.jpg)

Strona MashSud jest preferowaną stroną podczas warzenia. Informacje pojawiają się na wyświetlaczu co sekundę

* Rzeczywista temperatura
* Temperatura docelowa (temperatura spoczynkowa)
* pozostały czas odpoczynku

wyświetlane. Następna reszta jest również wyświetlana w dolnym wierszu. Czas po lewej stronie to czas, w którym rozpocznie się kolejny odpoczynek. Zielony symbol gry po prawej stronie oznacza, że ​​następna przerwa rozpoczyna się automatycznie (autonext).

## Wyświetl przegląd kotła

![Przegląd czajnika](/docs/img/kettlepage-sm.jpg)

Przegląd kotła pokazuje kocioł do zaparzania zacieru oraz, jeśli jest dostępny, kocioł do zaparzania i zalewania z informacją o temperaturze rzeczywistej i docelowej.

_Uwaga: widok ogólny kotła pokazuje adres Brautomat w dolnym wierszu: albo nazwę mDNS, albo adres IP._

## Widok sterowania ręcznego

![Sterowanie ręczne](/docs/img/induction-mode-sm.jpg)

Strona ręcznego sterowania oferuje możliwość ręcznej obsługi GGM IDS. Poziomy mocy można regulować w górę lub w dół za pomocą przycisków + i -.
