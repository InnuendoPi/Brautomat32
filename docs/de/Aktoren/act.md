# Aktoren

![Einstellungen Aktor](/docs/img/aktoren_einstellungen.jpg)

Aktoren wie Rührwerk, Pumpen oder Ringheizelemente werden mit einem Namen und einem GPIO (Schalter) konfiguriert. Aktoren können die Eigenschaft PWM (Pulsweitenmodulation) haben. PWM im Brautomat ist eine Taktung der Leistung (Ein- und Ausschalten oder Strom fließt und Strom fließt nicht). Die Eingabe erfolgt in Prozent. Ständig eingeschaltet ist 100%. Bei einem Wasserkocher wäre dies sinngemäß dauerhaft maximale Leistung. Eine PWM von 50% wäre 50:50 Strom fließt und Strom fließt nicht. Der Pulsabstand beträgt 500ms. Die Leistung kann während des Betriebs mit den beiden Schaltflächen in der Aktorentabelle geändert werden. Die Schaltflächen zum Ändern der Leistung sind für jeden Aktor sichtbar, wenn PWM für den Aktor aktiviert wurde. Die Funktion PWM im Brautomat ist z.B. für Relais oder SSRs geeignet. Nicht geeignet ist die Funktion als Motorsteuerung für Rührwerke.

![Übersicht Aktoren](/docs/img/aktoren.jpg)

## webhook

Der Parameter Aktor GPIO muss auf "-" eingestellt werden, damit die webhook Elemente im WebInterface angezeigt werden. Zusätzlich wird die webhook URL und das Schalltkommando benötigt:

![webhook](/docs/img/aktoren_webhook1.jpg)

Beispiel Shelly 1PM:

Shelly 1PM einschalten: <http://192.168.1.5/relay/0?turn=on>\
Shelly 1PM ausschalten: <http://192.168.1.5/relay/0?turn=off>

Die webhook URL für Shelly 1PM lautet: <http://192.168.1.5/relay/0?turn=> (ohne on und off). Der Parameter webhook Schalter muss auf "on/off" eingesteltl werden.

URL Tasmota: <http://192.168.1.5/cm?cmnd=Power1%201>
