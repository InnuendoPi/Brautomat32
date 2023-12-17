# Aufbau der Platine

Diese kurze Anleitung beschreibt den Aufbau der Platine. Der Platinenaufbau ist nicht anspruchsvoll. Diese Kurzbeschreibung ist als Hilfe für den ungeübten Bastler gedacht und richtet sich natürlich nicht an versierte Elektrotechniker. Informationen zum Löten, geeignete Lötkolben und Lötzin sind auf youtube oder ähnlichen Kanälen zu finden.

Die Stückliste der Platine:

![Stückliste](/docs/img/Stueckliste.jpg)

## Überlegungen vor dem Aufbau

Die Platine kann an zwei Stellen, abhängig von der späteren Nutzung, unterschiedlich bestückt werden:

1.1 der direkten Anschluss vom Originalkabel GGM IDS

In diesem Fall wird die weiße JST-HX Buchse benötigt (im Bild Nummer 1). Der 5er Schraubklemmblock auf dem Bild direkt neben der JST-HX Buchse wird dann nicht verwendet.

1.2 der Anschluss mit dem Ersatzkabel

In diesem Fall wird die weiße JST-HX Buchse nicht verwendet, sondern der 5er Schraubklemmblock.

Es wird also entweder die JST-HX Buchse oder der 5er Schraubklemmblock auf der Platine an der Position Nummer 1 eingesetzt.

2.1 Der Stromanschluss auf der linken Seite der Platine

Der Stromanschluss auf der linken Seite ist optional und wird verwendet, wenn die Platine nicht über die GGM IDS mit Strom versorgt wird.

2.2 Der Stromanschluss auf der unteren Seite der Platine

Der Stromanschluss auf der unteren Seite ist optional und wird verwendet, wenn die Platine nicht über die GGM IDS mit Strom versorgt wird.

Die Stromanschlüsse auf der linken und auf der unteren Seite haben eine identische Funktion. Je nach Einbau der Platine bietet sich auf der linken oder auf der unteren Seite mehr Platz zum Verkabeln an. Wird die Platine mit Strom von der GGM IDS betrieben, können beide Stromanschlüsse weggelassen werden.

Die Platine bietet zus. einen Anschluss A0. Auch dieser Anschluss ist optional und wird im Projekt Brautomat nicht verwendet. Der Anschluss A0 vom ESP8266 wird bspw. für einen Drucksensor benötigt (Spundomat). Wird die Platine in einem anderen Projekt eingesetzt, kann dieser Lötpunkt mit einem 1er Schraubklemmblock bestückt werden.

Nicht empfohlen, aber möglich ist die Bestückung mit nur einem oder zwei statt der drei vorgesehenen 3er Schraubklemmblock für die Temperatursensoren. Wird kein Display angeschlossen, kann auch der 4er Schraubklemmblock auf der rechten Seite mit der Beschriftung "VCC - GND - SDA - SDL - D4" weggelassen werden.

## Die Schraubklemmblöcke einsetzen

Zwei Hinweise zum Einsetzen der Schraubklemmblöcke:

1. Die Öffnung der Schraubklemmblöcke zeigt immer nach außen (von der Platine weg).
2. Jeder Schraubklemmblock wird mit einem Lötpunkt fixiert, um dann den korrekten Sitz kontrollieren zu können.

Zuerst werden die zwei 8er Schraubklemmblöcke an der oberen Seite eingesteckt. Anschließend wird der 5er Schraubklemmblock auf der rechten Seite mit der Beschriftung "VCC - GND - SDA - SDL - D4" eingesteckt. Zuletzt wird der 2er Schraubklemmblock auf der linken (alternativ auf der unteren) Seite mit der Beschriftung "GND - 5V" eingesteckt (wenn dieser verwendet wird).

![Schraubklemmblock](/docs/img/Schraubklemm_1.jpeg) ![Schraubklemmblock](/docs/img/Schraubklemm_2.jpeg)

Die Platine nun umdrehen und jeden Schraubklemmblock mit einem Lötpunkt (im Bild 1) fixieren. Jetzt den korrekten Sitz der Schraubklemmblöcke kontrollieren. Alle Pins müssen korrekt durch die Lötpunkte durchgesteckt sein. Anschließend werden alle Pins verlötet.

![Schraubklemmblock](/docs/img/Schraubklemm_5.jpeg) ![Schraubklemmblock](/docs/img/Schraubklemm_4.jpeg)

In gleicher Weise werden die 3er Schraubklemmblöcke sowie die JST-HX Buchse bzw. der 5er Schraubklemmblock erst fixiert und dann verlötet.

![Schraubklemmblock](/docs/img/Schraubklemm_3.jpeg)

## Den Widerstand einsetzen

Der Widerstand 4.7kOhm ist für die Temperatursensoren zwingend erforderlich.

![Widerstand](/docs/img/Widerstand_1.jpeg)

Die Beinchen am Widerstand werden um 90° gebogen (bspw. um einen Schlitzschraubendreher). Anschließend wird der Widerstand an der Position mit der Beschriftung "4k7" eingesetzt. Die Richtung muss nicht beachtet werden. Die Grundfarbe von Widerständen ist häufig blau oder sandfarben. Die Farbringe zeigen den elektrischen Widerstand:

4.7kOhm Widerstand mit 4 Ringen: gelb - violett - rot - [Toleranz]

4.7kOhm Widerstand mit 5 Ringen: gelb - violett - schwarz - braun - [Toleranz]

![Widerstand](/docs/img/Widerstand_2.jpeg) ![Widerstand](/docs/img/Widerstand_3.jpeg)

Die Beinchen vom Widerstand werden auf der Rückseite leicht nach außen gebogen und verlötet. Mit einem Seitenschneider werden die Beinchen über dem Lötauge abgeschnitten.

## Den Level Shifter einsetzen

Der Level Shifter besteht aus einer kleinen Platine und zwei 10er Stiftleisten. Die Stiftleisten werden zuerst eingesetzt

![Level_Shifter](/docs/img/Level_Shifter_1.jpeg)

Anschließend wird die kleine Level Shifter Platine auf die Stifte aufgesetzt

![Level_Shifter](/docs/img/Level_Shifter_2.jpeg)

Die Ausrichtung ist beim Level Shifter zu beachten: eine Seite ist mit LV (für low volt) beschriftet und die gegenüberliegende Seite mit HV (für high volt). LV zeigt zum ESP8266 und LV1 ist immer auf der linken Seiten.
HV zeigt zu den 8er Schraubklemmblöcken und HV1 ist ebenfalls links.

Die zwei Stiftleisten werden wieder mit einem Lötpunkt fixiert, um anschließend den korrekten Sitz aller Stifte in den Lötpunkten kontrollieren zu können. Anschließend werden alle Löstpunkte der Stiftleiste verlötet.

## Die Stiftleisten für die Jumper einsetzen

![Stiftleiste](/docs/img/Stiftleiste_1.jpeg)

Aus der langen Stiftleiste werden drei 3er und eine 2er Stiftleiste benötigt. Stiftleisten haben Sollbruchstellen und können nach der benötigen Anzahl an Stiften abgeknickt werden. Die kleinen Stiftleisten werden nacheinander in die Positionen J1, J2, J3 und J4 eingesteckt und mit jeweils einem Lötpunkt fixiert. Weil die Stiftleisten sehr klein sind und beim Löten sehr schnell sehr heiß werden, gestaltet sich das Fixieren meist etwas schwierig. Ein Hilfsmittel ist bspw. eine Krokodilklemme

![Stiftleiste](/docs/img/Stiftleiste_2.jpeg) ![Stiftleiste](/docs/img/Stiftleiste_3.jpeg) ![Stiftleiste](/docs/img/Stiftleiste_4.jpeg)

Bei den Stiftlisten das Vorgehen "mit einem Lötpunkt fixieren und den korrekten Sitz" beachten.

## Den ESP8266 einsetzen

Es wird das Aufsockeln vom ESP8266 empfohlen. Eine neue ESP8266 Variante oder ein defekter ESP kann gesockelt sehr einfach ausgetauscht bzw. ersetzt werden.

![ESP8266](/docs/img/ESP8266_1.jpeg)

Zum Aufsockeln werden passende Sockelstecker mitgeliefert. Die Nummer 1 wird in die Platine gestekt. Die Nummer 2 wird mit den langen Beinchen in die Nummer 1 gesteckt. Das schaut dann aus wie Nummer 3. Der ESP8266 wird am Ende auf die kurzen Beinchen von Nummer 2 aufgelegt.

![ESP8266](/docs/img/ESP8266_2.jpeg) ![ESP8266](/docs/img/ESP8266_3.jpeg)

Auch hier wieder mit einem Lötpunkt fixieren und den Sitz der Stiftleisten kontrollieren. Anschließend alle Lötpunkte verlöten.

![ESP8266](/docs/img/ESP8266_4.jpeg)

Abschließend sollten alle Lötpunkte mit einer Lupe oder dem Smartphone begutachtet werden. Wenn alle Lötpunkte verschlossen sind, ist der Brautomat fertig.
