# Skuespillere

![Skuespillerinnstillinger](/docs/img/aktoren_settings.jpg)

Aktuatorer som røreverk, pumper eller ringvarmeelementer er konfigurert med et navn og en GPIO (bryter). Aktuatorer kan ha egenskapen PWM (pulsbreddemodulasjon). PWM i Brautomat er en timing av strøm (slå på og av eller strømmen flyter og strømmen flyter ikke). Oppføringen gjøres i prosent. Alltid på er 100 %. Når det gjelder en vannkoker, vil dette bety permanent maksimal ytelse. En PWM på 50 % vil være 50:50 strøm som flyter og strøm som ikke flyter. Pulsintervallet er 500ms. Strømmen kan endres under drift ved hjelp av de to knappene i aktuatortabellen. Strømskifteknappene er synlige for hver aktuator hvis PWM er aktivert for aktuatoren. PWM-funksjonen i Brautomat egner seg for eksempel for releer eller SSR-er. Funksjonen som motorstyring for røreverk er ikke egnet.

![Oversikt over skuespillere](/docs/img/aktoren.jpg)

## webhook

Aktuator GPIO-parameteren må settes til "-" slik at webhook-elementene vises i webgrensesnittet. I tillegg kreves webhook-URLen og lydkommandoen:

![webhook](/docs/img/aktoren_webhook1.jpg)

Eksempel Shelly 13:00:

Slå på Shelly 13:00: <http://192.168.1.5/relay/0?turn=on>\
Slå av Shelly 1PM: <http://192.168.1.5/relay/0?turn=off>

Webhook-URLen for Shelly 1PM er: <http://192.168.1.5/relay/0?turn=> (uten av og på). Parameteren webhook switch må settes til "på/av".

URL Tasmota: <http://192.168.1.5/cm?cmnd=Power1%201>
