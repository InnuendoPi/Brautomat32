# Aktoren

![media](/docs/img/aktoren_einstellungen.jpg)

Aktoren wie Rührwerk, Pumpen oder Ringheizelemente werden mit einem Namen und einem GPIO (Schalter) konfiguriert. Aktoren können die Eigenschaft PWM (Pulsweitenmodulation) haben. PWM im Brautomat ist eine Taktung der Leistung (Ein- und Ausschalten oder Strom fließt und Strom fließt nicht). Die Eingabe erfolgt in Prozent. Ständig eingeschaltet ist 100%. Bei einem Wasserkocher wäre dies sinngemäß dauerhaft maximale Leistung. Eine PWM von 50% wäre 50:50 Strom fließt und Strom fließt nicht. Der Pulsabstand beträgt 500ms. Die Leistung kann während des Betriebs mit den beiden Schaltflächen in der Aktorentabelle geändert werden. Die Schaltflächen zum Ändern der Leistung sind für jeden Aktor sichtbar, wenn PWM für den Aktor aktiviert wurde. Die Funktion PWM im Brautomat ist z.B. für Relais oder SSRs geeignet. Nicht geeignet ist die Funktion als Motorsteuerung für Rührwerke.

![media](/docs/img/aktoren.jpg)
