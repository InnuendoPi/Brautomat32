# Konfiguracja czujnika temperatury

## Dodaj nowy czujnik

W sekcji _Czujniki_ można dodać nowy czujnik klikając na symbol plusa.

![Utwórz czujniki](/docs/img/Sensor-einrichten.jpg)

## Ustaw adres i nazwę czujnika

Czujniki temperatury Dallas DS18B20 posiadają unikalny adres, który jest używany przez oprogramowanie do identyfikacji. Adres czujnika zostanie odczytany automatycznie. Jeżeli podłączonych jest więcej niż jeden czujnik, adres czujnika można wybrać z listy wyboru.

Jeśli nie jest wyświetlany żaden czujnik:

* Wykrywanie czujników można ponownie uruchomić za pomocą przycisku przeładowania.
* Jeśli w dalszym ciągu nie zostanie wykryty żaden czujnik, należy sprawdzić połączenie kablowe.

Każdy czujnik potrzebuje nazwy. W tej podstawowej konfiguracji czujnik nosi nazwę „Sensor IDS2”.  zwany.

_Uwaga: Nazwy czujników mogą zawierać maksymalnie 20 znaków. Dozwolone znaki specjalne to # i spacje. Wprowadzone dane są automatycznie sprawdzane przez interfejs sieciowy._

![Konfiguruj czujniki](/docs/img/Sensor-einstellungen.jpg)

## Kalibracja czujnika (wartości przesunięcia)

Do kalibracji czujnika używane są właściwości Offset 1 i Offset 2. Szczegółowe wyjaśnienie można znaleźć w rozdziale _Czujniki – Kalibracja_.

W przypadku tej podstawowej konfiguracji obie wartości pozostają niezmienione i wynoszą 0,00.

## Zapisz i sprawdź czujnik

Klikając _zapisz_, czujnik zostanie utworzony, a następnie wyświetlony w Dashboard w sekcji _Czujniki_.

![Czujniki Dashboard](/docs/img/Sensor-dashboard.jpg)

> **Uwaga:**

Konfigurowanie analogowych czujników PT100x odbywa się w ten sam sposób, ale nie jest ujęte w tej podstawowej konfiguracji.
