# Aufbau der neuen Platine ohne LevelShifter

Diese kurze Anleitung beschreibt den Aufbau der Platine. Der Platinenaufbau ist nicht anspruchsvoll. Diese Kurzbeschreibung ist als Hilfe für den ungeübten Bastler gedacht und richtet sich natürlich nicht an versierte Elektrotechniker. Informationen zum Löten, geeignete Lötkolben und Lötzin sind auf youtube oder ähnlichen Kanälen zu finden.

Die neue Platine ohne LevelShifter ist für den ESP8266 und den ESP32 Microcontroller geeignet. Die Platine mit LevelShifter ist nur mit dem ESP8266 einsetzbar.

Die Stückliste der Platine:

![Stückliste](/docs/img/Aufbau1.jpg)

Nummer 1: Widerstand 4.7kOhm\
Nummer 2: JST-HX Buchse (weiß) und 5 Pol Schraubklemmblock\
Nummer 3: passiver Piezo Buzzer\
Nummer 4: Schraubklemmblöcke mit dem Rastermaß 2.54mm

## Überlegungen vor dem Aufbau

Die Platine kann abhängig von der Verbindung zum Induktionskochfeld GGM IDS unterschiedlich bestückt werden:

1.1 Das Originalkabel vom Bedienfeld der GGM IDS wird verwendet

In diesem Fall wird die weiße JST-HX Buchse benötigt (im Bild Nummer 2). Der 5er Schraubklemmblock auf dem Bild direkt neben der JST-HX Buchse wird dann nicht verwendet.

1.2 Ein Ersatzkabel wird verwendet

In diesem Fall wird die weiße JST-HX Buchse nicht verwendet, sondern der 5er Schraubklemmblock.

Es wird also entweder die JST-HX Buchse oder der 5er Schraubklemmblock in die Platine eingesetzt.

## Die Schraubklemmblöcke einsetzen

Zwei Hinweise zum Einsetzen der Schraubklemmblöcke:

1. Die Öffnung der Schraubklemmblöcke zeigt immer nach außen (von der Platine weg).
2. Die Schraubklemmblöcke werden mit einem Lötpunkt fixiert. Dann wird der korrekten Sitz kontrolliert. Anschließend werden alle Lötpunkte verlötet.

Im Folgenden werden nun Step by Step die Schraubklemmblöcke eingesetzt und verlötet.\
Im Schritt Nummer 1 werden die zwei 12 Pol Schraubklemmblöcke eingesetzt. An den 12er Schraubklemmblöcken liegen die GPIOs D9 bis D19 vom ESP32 an.

![Schraubklemmblock](/docs/img/Aufbau2.jpg)

Die Platine nun umdrehen und jeden Schraubklemmblock mit einem Lötpunkt fixieren. Jetzt den korrekten Sitz der Schraubklemmblöcke kontrollieren. Alle Pins müssen korrekt durch die Lötpunkte durchgesteckt sein. Anschließend werden alle Pins verlötet.

In Schritt Nummer 2 werden die zwei 8 Pol Schraubklemmblöcke eingesetzt. An den 8er Schraubklemmblöcken liegen die GPIOs D0 bis D8 vom ESP32 und ESP8266 an.

![Schraubklemmblöcke](/docs/img/Aufbau3.jpg)

Die Platine schaut in diesem Status nun so aus:

![Schraubklemmblöcke](/docs/img/Aufbau4.jpg)

In Schritt Nummer 3 werden die drei 3er Schraubklemmblöcke eingesetzt und verlötet.

![Schraubklemmblock für Sensoren](/docs/img/Aufbau5.jpg)

An die drei Anschlüssen werden Temperatursensoren DS18B20 angeschlossen. Es gibt keine Reihenfolge oder Rangordnung für diese drei Anschlüsse. Werden nur analoge PT100x Sensoren eingesetzt, können die drei Schraubklemmblöcke weggelassen werden.

In Schritt Nummer 4 wird entweder die JST-HX Buchse für das Originalkabel oder ein 5er Schraubklemmblock für das Ersatzkabel eingesetzt und verlötet: (siehe Überlegungen vor dem Aufbau).

![JST-HX oder Schraubklemmblock](/docs/img/Aufbau6.jpg)

## Der Piezo Buzzer

Der Piezo Buzzer ist optional. Dieser Schritt kann übersprungen werden, wenn akustische Signale nicht erwünscht sind.\
Der Piezo Buzzer hat einen Plus- und einen Minuspol

![Buzzer Plus Minus](/docs/img/Aufbau8.jpg)

Der Pluspol wird in die Markierung D8 und dementsprechend der Minuspol in die Markierung GND eingesetzt.

![Buzzer](/docs/img/Aufbau7.jpg)

## Der 4.7kOhm Widerstand

Der Widerstand 4.7kOhm ist für die Temperatursensoren Dallas DS18B20 zwingend erforderlich. Werden nur analoge PT100x Sensoren eingesetzt, kann der Widerstand weggelassen werden.

![Widerstand](/docs/img/Aufbau9.jpg)

Die Beinchen am Widerstand werden um 90° gebogen (bspw. um einen Schlitzschraubendreher). Anschließend wird der Widerstand an der Position mit der Beschriftung "4k7" eingesetzt. Die Richtung muss nicht beachtet werden. Die Grundfarbe von Widerständen ist häufig blau oder sandfarben. Die Farbringe zeigen den elektrischen Widerstand:

4.7kOhm Widerstand mit 4 Ringen: gelb - violett - rot - [Toleranz]

4.7kOhm Widerstand mit 5 Ringen: gelb - violett - schwarz - braun - [Toleranz]

![Widerstand](/docs/img/Aufbau10.jpg)

Die Beinchen vom Widerstand werden auf der Rückseite leicht nach außen gebogen und verlötet. Mit einem Seitenschneider werden die Beinchen über dem Lötauge abgeschnitten.

## Den ESP32 aufsockeln

Durch das Aufsockeln lässt sich der ESP Mikrocontroller jederzeit von der Platine abnehmen. So kann wahlweise ein ESP8266 oder ein ESP32 eingesetzt werden. Das Aufsockeln ist auch bei einer Fehlersuche nützlich.

![Aufsockeln](/docs/img/Aufbau14.jpg)

Zum Lieferumfang der ESP Mikrocontroller gehören die Adapter Nummer 1. Zusätzlich wird eine Stiftleisten Nummer 2 im Rastermaß 2.54mm benötigt.

![Teileliste](/docs/img/Aufbau11.jpg)

Adapter und Stiftleisten werden für das Aufsockeln benötigt. Die Stiftleiste wird zunächst in den Adapter eingesteckt, wie in Nummer 3 dargestellt. Anschließend werden Adpapter mit Stiftleiste in die Platine eingesetzt, jeweils zwei Stück links und 2 Stück rechts

_Tipp: die Stiftleiste wird als 40 Pin Leiste geliefert. Die Stiftleiste wird in voller Länge in die Adapter gesteckt. Der Überhang über den Adapter wird am Ende abgeknickt._

![Sockel](/docs/img/Aufbau12.jpg)

Nun wird der ESP aufgelegt und mit einem Lötpunkt auf jeder Seite fixiert. Jetzt wird der Sitz der Sockel kontrolliert. Anschließend werden ale Lötpunkt verlötet.

![ESP32](/docs/img/Aufbau15.jpg)

Abschließend sollten alle Lötpunkte überprüft werden. Wenn alle Lötpunkte verschlossen sind, ist der Brautomat fertig.
