# Aufbau der Platine Version 1

> **Hinweis:**
Die Platine V1 ist veraltet und wird nicht mehr weiterentwickelt.

Diese kurze Anleitung beschreibt den Aufbau der Platine. Der Platinenaufbau ist nicht anspruchsvoll. Diese Kurzbeschreibung ist als Hilfe für den ungeübten Bastler gedacht und richtet sich natürlich nicht an versierte Elektrotechniker. Informationen zum Löten, geeignete Lötkolben und Lötzin sind auf youtube oder ähnlichen Kanälen zu finden.

## Platine Version 1

Die Platine mit LevelShifter war die erste Version der Platine und stammt ursprünglich aus dem Projekt MQTTDevice. Die Platine Version 1 ist veraltet und wird nicht mehr weiterentwickelt.

![Platine mit LevelShifter](/docs/img/Platine.jpg)

## Jumperpositionen auf der Platine Version 1

Die Platine hat 4 Jumper. Die Jumper J1, J2 und J3 müssen mindestens auf _2-3_ gesetzt werden.

```Jumpereinstellung Kurzform
- Wird ein Display eingesetzt, müssen J1 und J2 auf 1-2 gesteckt sein. 
- Wir kein Display eingesetzt, müssen J1 und J2 auf 2-3 gesteckt sein. 
- J3 wird immer auf 2-3 gesteckt.

1. Jumper J1: Pin D1 
    - In der Position 1-2 wird Pin D1 (GPIO 5) auf den Displayanschluss umgeleitet (SDL)
    - in der Position 2-3 wird kein Display verwendet (default)
2. Jumper J2: Pin D2
    - In der Position 1-2 wird Pin D2 (GPIO 4) auf den Displayanschluss umgeleitet (SDA)
    - in der Position 2-3 wird kein Display verwendet  (default)
3. Jumper J3: Pin D4
    - In der Position 1-2 wird Pin D4 (GPIO 2) auf den Displayanschluss umgeleitet.
    - in der Position 2-3 wird Pin D4 nicht umgeleitet (default)

4. Jumper J4: Stromzufuhr über GGM IDS
    - wenn der Jumper J4 gesetzt ist, wird die Stromzufuhr von der GGM IDS für den Brautomat genutzt.
    - wenn der Jumper J4 nicht gesetzt ist, wird die Stromzufuhr an den Anschluss *5V* und *GND* angeklemmt.
```

## Teileliste für die Platine Version 1

| Anzahl                                                | Artikelname                    | Link zum Artikel                  |
| ----------------------------------------------------- | ------------------------------ | --------------------------------- |
| 1                                                     | Schraubklemmblock 2pol 2,54    | (voelkner S84366) |
| 3                                                     | Schraubklemmblock 3pol 2,54    | (voelkner S84893) |
| 2                                                     | Schraubklemmblock 5pol 2,54    | (voelkner S84806) |
| 2                                                     | Schraubklemmblock 8pol 2,54    | (voelkner S84611) |
| 1 alternativ ein zus. 5er Schraubklemmblock           | JST-HX Buchse 90° 2,54         | (voelkner D17526) |
| 1                                                     | Stiftleiste 2,54               | (voelkner D19990) |
| 4                                                     | Jumper 2,54                    | (voelkner S655251) |
| 1                                                     | Widerstand 4,7kOhm             |  |
| 1 ESP8266                                             | ESP8266 Wemos D1 mini          | [amazon](https://www.amazon.de/dp/B08BTYHJM1/?coliid=I3HCHU407TLWGX&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_2FHXW05SH9AGJ9Z8WH2K) |
| 1 ESP32 Alternative zum ESP8266                       | ESP32 D1 mini                  | [amazon](https://www.amazon.de/dp/B08BTRQNB3/?coliid=I3GILWFH2TDYH9&colid=I7GQB171JGLX&ref_=list_c_wl_lv_ov_lig_dp_it&th=1) |
| 1                                                     | LevelShifter 8 Channel 5V 3.3V | [amazon](https://www.amazon.de/dp/B07HC5PB58/?coliid=I3T4KSZWWNYE26&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_YCVXDMRW8G4N4MVXQXC5) |
| 1                                                     | Display Nextion 3.5" | [komputer.de](https://www.komputer.de/zen/index.php?main_page=product_info&cPath=30&products_id=617&zenid=l8eg2n29r5iai1l7ur8c8c5nu3) |
|                                                       |                                |                                   |

_Hinweis: die aufgeführten Links oder Artikelnummern sind rein informativ und nicht mit Affiliate/Marketing Programmen verknüpft._

Die Position JST-HX Buchse ist für das original Anschlusskabel vorgesehen. Wird ein Ersatzkabel (ohne JST-HX Stecker) verwendet, kann an gleicher Stelle auf der Platine ein Schraubklemmblock 5pol im Rastermaß 2,54mm eingesetzt werden. Der Schaubklemmblock 2pol kann wahlweise unten rechts oder mittig links neben dem Wemos D1 mini eingesetzt werden.

_Tipp:_ _der ESP8266 oder der ESP32 sollte gesockelt werden. Mit Sockel ist ausreichend Platz für den Widerstand unter dem ESP. Falls eine Fehlersuche erforderlich ist, kann ein gesockelter ESP von der Platine abgesteckt werden._

Die Anschlüsse vom LevelShifter 8 Kanal müssen zur Anordnung auf der Platine identisch sein. Der Levelshifter aus dem Link hat diese Anordnung der Anschlüsse.

![Levelshifter](/docs/img/Levelshifter.jpg)

## Überlegungen vor dem Aufbau

Die Stückliste der Platine:

![Stückliste](/docs/img/Stueckliste.jpg)

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
