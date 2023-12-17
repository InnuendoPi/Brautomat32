# Aktoren

![media](/docs/img/aktoren_einstellungen.jpg)

Aktoren wie bspw. Rührwerk, Pumpen oder Ringheizelemente werden mit einem Namen und einem GPIO (Schalter) konfiguriert. GPIO invertieren wurde im Abschnitt Nachguss erläutert. Aktoren können die Eigenschaft PWM (Pulsweitenmodulation) haben. PWM im Brautomat ist ein takten der Leistung (Ein und Ausschalten oder Storm fließt und Strom fließt nicht). Die Eingabe ist in Prozent. Permanent eingeschaltet sind 100%. Bei einem Wasserkocher wäre dies sinngemäß dauerhaft maximale Leistung. Ein PWM von 50% wäre 50:50 Strom fließt und Strom fließt nicht. Der pulse cycle beträgt 500ms. Die Leistung kann im laufenden Betrieb über die zwei Buttons in der Aktoren-Tabelle verändert werden. Die Buttons zur Veränderung der Leistung sind je Aktor sichtbar, wenn PWM für den Aktor aktiviert wurde. Die Funktion PWM im Brautomat ist bspw. für Relais oder SSRs geeignet. Ungeeignet ist die Funktion als Motorsteuerung Rührwerk.

![media](/docs/img/aktoren.jpg)
