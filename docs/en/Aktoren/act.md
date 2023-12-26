# Aktoren

![Einstellungen Aktor](/docs/img/aktoren_einstellungen.jpg)

Aktoren wie bspw. Rührwerk, Pumpen oder Ringheizelemente werden mit einem Namen und einem GPIO (Schalter) konfiguriert. GPIO invertieren wurde im Abschnitt Nachguss erläutert. Aktoren können die Eigenschaft PWM (Pulsweitenmodulation) haben. PWM im Brautomat ist ein takten der Leistung (Ein und Ausschalten oder Storm fließt und Strom fließt nicht). Die Eingabe ist in Prozent. Permanent eingeschaltet sind 100%. Bei einem Wasserkocher wäre dies sinngemäß dauerhaft maximale Leistung. Ein PWM von 50% wäre 50:50 Strom fließt und Strom fließt nicht. Der pulse cycle beträgt 500ms. Die Leistung kann im laufenden Betrieb über die zwei Buttons in der Aktoren-Tabelle verändert werden. Die Buttons zur Veränderung der Leistung sind je Aktor sichtbar, wenn PWM für den Aktor aktiviert wurde. Die Funktion PWM im Brautomat ist bspw. für Relais oder SSRs geeignet. Ungeeignet ist die Funktion als Motorsteuerung Rührwerk.

![Übersicht Aktoren](/docs/img/aktoren.jpg)

## Aktoren im Masicheplan schalten

Aktoren können über den Maischeplan ein- und ausgeschaltet werden. Um einen Aktor automatisch über den Maischeplan zu schalten, muss der Name Maischeschritt der Aktorname, gefolgt von einem Doppelpunkt und dem Aktorstatus ON oder OFF lauten. Beispiel: Ruehrwerk:ON\
Für diese Sonderfunktion im Maischeplan muss die Rasttemperatur und die Rastdauer auf 0 gesetzt werden.

![Aktoren schalten](/docs/img/aktoren_schalten.jpg)

In diesem Beispiel wird das Rührwerk zum Braustart eingeschaltet.

_Hinweis: Die Firmware ersetzt in Aktornamen automatisch Umlaute und Leerzeichen. Im Maischeplan muss der Aktorname eingegeben werden: Ruehrwerk statt Rührwerk._
