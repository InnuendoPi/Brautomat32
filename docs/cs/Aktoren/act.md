# Herci

![Nastavení herců](/docs/img/aktoren_settings.jpg)

Akční členy, jako jsou míchadla, čerpadla nebo kruhová topná tělesa, jsou konfigurovány s názvem a GPIO (spínač). Akční členy mohou mít vlastnost PWM (pulse width modulation). PWM v Brautomat je časování výkonu (zapínání a vypínání nebo teče proud a neteče proud). Zadání se provádí v procentech. Vždy zapnuto je 100 %. V případě varné konvice by to znamenalo trvalý maximální výkon. PWM 50 % by byl tekoucí proud 50:50 a netekoucí proud. Interval pulzu je 500 ms. Výkon lze měnit za provozu pomocí dvou tlačítek v tabulce pohonů. Tlačítka pro změnu výkonu jsou viditelná pro každý akční člen, pokud bylo pro akční člen povoleno PWM. Funkce PWM v Brautomat je vhodná např. pro relé nebo SSR. Funkce jako ovládání motoru pro míchadla není vhodná.

![Přehled herců](/docs/img/aktoren.jpg)

## webhook

Parametr Actuator GPIO musí být nastaven na "-", aby se prvky webhooku zobrazovaly ve webovém rozhraní. Kromě toho je vyžadována adresa URL webhooku a příkaz sound:

![webhook](/docs/img/aktoren_webhook1.jpg)

Příklad Shelly 13:00:

Zapněte Shelly 1PM: <http://192.168.1.5/relay/0?turn=on>\
Vypnout Shelly 13:00: <http://192.168.1.5/relay/0?turn=off>

Adresa URL webhooku pro Shelly 1PM je: <http://192.168.1.5/relay/0?turn=> (bez zapnutí a vypnutí). Parametr přepínače webhooku musí být nastaven na "on/off".

URL Tasmota: <http://192.168.1.5/cm?cmnd=Power1%201>
