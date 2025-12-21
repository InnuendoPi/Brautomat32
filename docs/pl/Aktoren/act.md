#Aktorzy

![Ustawienia siłownika](/docs/img/aktoren_einstellungen.jpg)

Elementy wykonawcze, takie jak mieszadła, pompy lub elementy grzejne pierścieniowe, są konfigurowane za pomocą nazwy i GPIO (przełącznika). Siłowniki mogą posiadać właściwość PWM (modulacja szerokości impulsu). PWM w Brautomat to czas zasilania (włączanie i wyłączanie lub prąd płynie, a prąd nie płynie). Wpis dokonywany jest w procentach. Zawsze włączone jest na 100%. W przypadku czajnika oznaczałoby to stałą maksymalną wydajność. PWM wynoszące 50% oznaczałoby przepływ prądu w stosunku 50:50 i brak przepływu. Interwał impulsów wynosi 500 ms. Moc można zmieniać w trakcie pracy za pomocą dwóch przycisków znajdujących się na tablicy siłowników. Przyciski zmiany mocy są widoczne dla każdego siłownika, jeśli dla siłownika zostało włączone PWM. Funkcja PWM w Brautomat jest odpowiednia na przykład dla przekaźników lub SSR. Funkcja sterowania silnikiem dla mieszadeł nie jest odpowiednia.

![Przegląd siłowników](/docs/img/aktoren.jpg)

## webhook

Parametr Actuator GPIO musi być ustawiony na „-”, aby elementy webhooka były wyświetlane w interfejsie sieciowym. Ponadto wymagany jest adres URL webhooka i polecenie dźwiękowe:

![webhook](/docs/img/aktoren_webhook1.jpg)

Przykład Shelly o 13:00:

Włącz Shelly o 13:00: <http://192.168.1.5/relay/0?turn=on>\
Wyłącz Shelly o 13:00: <http://192.168.1.5/relay/0?turn=off>

Adres URL webhooka dla Shelly 1PM to: <http://192.168.1.5/relay/0?turn=> (bez włączania i wyłączania). Parametr przełącznika webhooka musi być ustawiony na „on/off”.

Adres URL Tasmota: <http://192.168.1.5/cm?cmnd=Power1%201>
