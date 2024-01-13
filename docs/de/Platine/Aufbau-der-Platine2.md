# Aufbau der neuen Platine ohne LevelShifter

Diese kurze Anleitung beschreibt den Aufbau der Platine. Der Platinenaufbau ist nicht anspruchsvoll. Diese Kurzbeschreibung ist als Hilfe für den ungeübten Bastler gedacht und richtet sich natürlich nicht an versierte Elektrotechniker. Informationen zum Löten, geeignete Lötkolben und Lötzin sind auf youtube oder ähnlichen Kanälen zu finden.

Die Stückliste der Platine:

![Stückliste](/docs/img/Aufbau1.jpg)

Nummer 1: Widerstand 4.7kOhm\
Nummer 2: JST-HX Buchse (weiß) und 5 Pol Schraubklemmblock. Siehe "Überlegungen vor dem Aufbau"\
Nummer 3: passiver Piezo Buzzer. Siehe "Der Piezo Buzzer"\
Nummer 4: Schraubklemmblöcke mit dem Rastermaß 2.54mm

## Überlegungen vor dem Aufbau

Die Platine kann an einer Stelle, abhängig von der späteren Nutzung, unterschiedlich bestückt werden:

1.1 der direkten Anschluss vom Originalkabel GGM IDS

In diesem Fall wird die weiße JST-HX Buchse benötigt (im Bild Nummer 2). Der 5er Schraubklemmblock auf dem Bild direkt neben der JST-HX Buchse wird dann nicht verwendet.

1.2 der Anschluss mit dem Ersatzkabel

In diesem Fall wird die weiße JST-HX Buchse nicht verwendet, sondern der 5er Schraubklemmblock.

Es wird also entweder die JST-HX Buchse oder der 5er Schraubklemmblock auf der Platine eingesetzt.

## Die Schraubklemmblöcke einsetzen

Zwei Hinweise zum Einsetzen der Schraubklemmblöcke:

1. Die Öffnung der Schraubklemmblöcke zeigt immer nach außen (von der Platine weg).
2. Jeder Schraubklemmblock wird mit einem Lötpunkt fixiert, um dann den korrekten Sitz kontrollieren zu können.

Im Folgenden werden nun Step by Step die Schraubklemmblöcke eingesetzt und verlötet. Schritt Nummer 1 sind die zwei 12 Pol Schraubklemmblöcke

![Schraubklemmblock](/docs/img/Aufbau2.jpg)

Die Platine nun umdrehen und jeden Schraubklemmblock mit einem Lötpunkt (im Bild 1) fixieren. Jetzt den korrekten Sitz der Schraubklemmblöcke kontrollieren. Alle Pins müssen korrekt durch die Lötpunkte durchgesteckt sein. Anschließend werden alle Pins verlötet.

Schritt Nummer 2 sind die zwei 8 Pol Schraubklemmblöcke

![Schraubklemmblock](/docs/img/Aufbau3.jpg)

Die Platine schaut in diesem Status so aus:

![Schraubklemmblock](/docs/img/Aufbau4.jpg)

In Schritt Nummer 3 werden die drei 3er Schraubklemmblöcke eingesetzt und verlötet.

![Schraubklemmblock](/docs/img/Aufbau5.jpg)

An diese drei Anschlüssen werden Temperatursensoren DS18B20 angeschlossen. Es gibt keine Reihenfolge oder Rangordnung.

In Schritt Nummer 4 wird entweder die JST-HX Buchse für das Originalkabel oder ein 5er Schraubklemmblock für das Ersatzkabel eingesetzt und verlötet: (siehe Überlegungen vor dem Aufbau)

![Schraubklemmblock](/docs/img/Aufbau6.jpg)

## Der Piezo Buzzer

Der Piezo Buzzer ist optional. Dieser Schritt kann übersprungen werden, wenn akustische Signale nicht erwünscht sind.\
Der Piezo Buzzer hat einen Plus- und einen Minuspol

![Schraubklemmblock](/docs/img/Aufbau8.jpg)

In Schritt Nummer 5 wird der Pizo Buzzer eingesetzt. Der Pluspol wird in die Markierung D8 und dementsprechend der Minuspol in die Markierung GND eingesetzt.

![Schraubklemmblock](/docs/img/Aufbau7.jpg)

## De4 4.7kOhm Widerstand

Der Widerstand 4.7kOhm ist für die Temperatursensoren Dallas DS18B20 zwingend erforderlich.

![Schraubklemmblock](/docs/img/Aufbau9.jpg)

Die Beinchen am Widerstand werden um 90° gebogen (bspw. um einen Schlitzschraubendreher). Anschließend wird der Widerstand an der Position mit der Beschriftung "4k7" eingesetzt. Die Richtung muss nicht beachtet werden. Die Grundfarbe von Widerständen ist häufig blau oder sandfarben. Die Farbringe zeigen den elektrischen Widerstand:

4.7kOhm Widerstand mit 4 Ringen: gelb - violett - rot - [Toleranz]

4.7kOhm Widerstand mit 5 Ringen: gelb - violett - schwarz - braun - [Toleranz]

![Schraubklemmblock](/docs/img/Aufbau10.jpg)

Die Beinchen vom Widerstand werden auf der Rückseite leicht nach außen gebogen und verlötet. Mit einem Seitenschneider werden die Beinchen über dem Lötauge abgeschnitten.

## Den ESP einsetzen

Es wird das Aufsockeln vom ESP8266 empfohlen. Eine neue ESP8266 Variante oder ein defekter ESP kann gesockelt sehr einfach ausgetauscht bzw. ersetzt werden.

Abschließend sollten alle Lötpunkte mit einer Lupe oder dem Smartphone begutachtet werden. Wenn alle Lötpunkte verschlossen sind, ist der Brautomat fertig.
