# Die Platine zum Projekt

Die Platine zum Projekt Brautomat macht den Aufbau und die Verwendung sehr einfach. An die Schraubklemmblöcke werden beim Brautomat die GGM IDS, die Sensoren, die Aktoren und das Display angeschlossen.

Es gibt zwei Versionen der Platinen: Version 1 mit LevelShifter und Version 2 ohne LevelShifter. Beide Platinen können sowohl mit dem ESP8266, als auch mit dem ESP32 betrieben werden. Die Platine Version 2 hat Vorteile für den Betrieb mit einem ESP32 und ist einfacher im Aufbau. Die Platine Version 1 wurde ursprünglich für den ESP8266 im Projekt MQTTDevice entworfen und wird nicht mehr weiterentwickelt.

Die Platine ist ein breakout board für die Arduino Mikrocontroller ESP 8266 und ESP32. Ein breakout board leitet die Pins (GPIOs) der Mikrocontroller an Schraubklemmblöcke. An den Schraubklemmblöcken werden Sensoren, Schalter usw. angeschlossen. Beide Platinen sind universell einsetzbar und nicht auf die Projekte Brautomat oder MQTTDevice beschränkt.

![Platine 2](/docs/img/Platine21.jpg)

Die neuere Platine Version 2 hat im Gegensatz zu Version 1 keine Jumper und keinen Extra-Anschluss für das Display. Dafür bietet diese Version für den ESP32 alle GPIOs an Schraubklemmblöcken.

## Welcher ESP ist der Richtige?

Das Induktionskochfeld GGM IDS wird mit beiden ESP Microcontrollern identisch gesteuert.

* In einer Umgebung ohne bzw. mit sehr wenigen Aktoren ist der ESP8266 die etwas günstigere Version
* In einer Umgebung mit vielen Aktoren und der Möglichkeit für Erweiterungen ist der ESP32 die richtige Wahl
* In einer Umgebung mit analogen Sensoren PT100/PT1000 ist der ESP32 die richtige Wahl

</br>

* Der ESP32 im Vergleich zum ESP8266
    > bietet mehr CPU Leistung (dual core)\
    > bietet mehr Anschlüsse (GPIOs)\
    > bietet mehr Möglichkeiten für künftige Erweiterungen (Pumpen, Nachguss, Heizelemente, etc.)
