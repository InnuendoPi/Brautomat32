# Skådespelare

![Skådespelareinställningar](/docs/img/aktoren_settings.jpg)

Ställdon som omrörare, pumpar eller ringvärmeelement är konfigurerade med ett namn och en GPIO (switch). Ställdon kan ha egenskapen PWM (pulsbreddsmodulering). PWM i Brautomat är en timing av ström (att slå på och av eller ström flyter och ström flyter inte). Anmälan görs i procent. Alltid på är 100%. När det gäller en vattenkokare skulle detta innebära permanent maximal prestanda. En PWM på 50% skulle vara 50:50 ström som flyter och ström inte flyter. Pulsintervallet är 500ms. Effekten kan ändras under drift med de två knapparna i ställdontabellen. Strömändringsknapparna är synliga för varje ställdon om PWM har aktiverats för ställdonet. PWM-funktionen i Brautomat lämpar sig till exempel för reläer eller SSR:er. Funktionen som motorstyrning för omrörare är inte lämplig.

![Översikt över skådespelare](/docs/img/aktoren.jpg)

## webhook

Parametern Actuator GPIO måste ställas in på "-" så att webhook-elementen visas i webbgränssnittet. Dessutom krävs webhook-URL och ljudkommandot:

![webhook](/docs/img/aktoren_webhook1.jpg)

Exempel Shelly 13:00:

Slå på Shelly 13:00: <http://192.168.1.5/relay/0?turn=on>\
Stäng av Shelly 13:00: <http://192.168.1.5/relay/0?turn=off>

Webhook-URL:n för Shelly 1PM är: <http://192.168.1.5/relay/0?turn=> (utan på och av). Webhook switch-parametern måste ställas in på "on/off".

URL Tasmota: <http://192.168.1.5/cm?cmnd=Power1%201>
