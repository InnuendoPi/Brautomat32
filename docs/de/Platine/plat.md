# Die Platine zum Projekt

Die Platine für das Projekt Brautomat vereinfacht Aufbau und Anschluss der
gesamten Anlage. Sensoren, Aktoren, Display und Heizquellen werden über die
Schraubklemmblöcke bzw. die dafür vorgesehenen Anschlüsse mit dem Brautomat
verbunden. Für GGM-IDS-Systeme gibt es dabei spezielle Anschlüsse, während
relaisgesteuerte Heizquellen einfacher angebunden werden.

Das Board ist ein Breakout Board für die Mikrocontroller ESP8266 und ESP32. An die Schraubklemmblöcke können Sensoren, Schalter etc. angeschlossen. Beide Boards sind universell einsetzbar und nicht auf die Projekte Braautomat oder MQTTDevice beschränkt. Zwei Anschlüsse sind fest vorgegeben:

* GPIO D3 mit einem Widerstand 4k7 ist für Sensoren vom Typ Dallas DS18B20 vorgesehen.
* GPIO D8 ist auf der Platine mit dem Anschluss für einen Piezo Buzzer verbunden

![Platine 2](/docs/img/Platine21.jpg)
