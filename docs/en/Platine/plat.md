# Platine mit Levelshifter

Es gibt zwei Versionen der Platinen: mit LevelShifter und ohne LevelShifter. Beide Platinen können sowohl mit dem ESP8266, als auch mit dem ESP32 betrieben werden. Die Platine mit LevelShifter wurde ursprünglich für den ESP8266 entworfen. Die Platine ohne LevelShifter hat Vorteile für den Betrieb mit einem ESP32. Einfacher im Aufbau ist die Version ohne LevelSHifter.

Beide Versionen der Platine sind ein breakout board für die Arduino Mikrocontroller. Ein breakout board leitet die Pins (GPIOs) der Mikrocontroller an Schraubklemmblöcke. An den Schraubklemmblöcken werden Sensoren, Schalter usw. angeschlossen. Beide Platinen sind universell einsetzbar und nicht auf die Projekte Brautomat oder MQTTDevice beschränkt.

![Platine mit LevelShifter](/docs/img/Platine.jpg)

Die Platine zum Projekt Brautomat macht den Aufbau und die Verwendung sehr einfach. An die Schraubklemmblöcke werden beim Brautomat die GGM IDS, die Sensoren, die Aktoren und das Display angeschlossen.

## Jumperpositionen auf der Platine mit Levelshifter

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

## Teileliste für die Platine mit LevelShifter

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

## Platine ohne Levelshifter

![Platine ohne LevelShifter](/docs/img/Platine20.jpg)

Die Platine ohne LevelShifter hat keine Jumper und keinen Extra-Anschluss für das Display. Dafür bietet diese Version für den ESP32 alle GPIOs an Schraubklemmblöcken. Diese Platine ist einfacher im Aufbau.

## Teileliste für die Platine ohne LevelShifter

Die Position JST-HX Buchse ist eine Alternative zum 5 Pol Schraubklemmblock. Das Kabel vom Bedienteil der GGM IDS2 hat den passenden Stecker für eine JST-HX Buchse. Wird statt dem Orignalkabel ein Ersatzkabel eingesetzt, ist die Verbindung mit einem 5er Schraubklemmblockj einfacher.

| Anzahl                                                | Artikelname                    | Link zum Artikel                  |
| ----------------------------------------------------- | ------------------------------ | --------------------------------- |
| 3                                                     | Schraubklemmblock 3pol RM 2.54 | (voelkner S84893) |
| 1                                                     | Schraubklemmblock 5pol RM 2.54 | (voelkner S84806) |
| 1 alternativ zum Schraubklemmblock 5pol               | JST-HX Buchse 90° RM 2.54      | (voelkner D17526) |
| 2                                                     | Schraubklemmblock 8pol RM 2.54 | (voelkner S84611) |
| 2                                                     | Schraubklemmblock 12pol RM 2.54| (voelkner S84031) |
| 1                                                     | Stiftleiste RM 2.54            | (voelkner D19990) |
| 1                                                     | Widerstand 4,7kOhm             |                           |
| 1 optional                                            | Passiver Buzzer 12mm 3V        |                           |
| 1 ESP32                                               | ESP32 D1 mini                  | [amazon](https://www.amazon.de/dp/B08BTRQNB3/?coliid=I3GILWFH2TDYH9&colid=I7GQB171JGLX&ref_=list_c_wl_lv_ov_lig_dp_it&th=1) |
| 1 ESP8266 alternative zum ESP32                       | ESP8266 Wemos D1 mini          | [amazon](https://www.amazon.de/dp/B08BTYHJM1/?coliid=I3HCHU407TLWGX&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_2FHXW05SH9AGJ9Z8WH2K) |
| 1 optional                                            | Display Nextion 3.5" | [komputer.de](https://www.komputer.de/zen/index.php?main_page=product_info&cPath=30&products_id=617&zenid=l8eg2n29r5iai1l7ur8c8c5nu3) |
|                                                       |                                |                                   |

_Hinweis: die aufgeführten Links oder Artikelnummern sind rein informativ und nicht mit Affiliate/Marketing Programmen verknüpft._

Das Display Nextion 3.5 Zoll ist als Basic, Discovery oder Enhanced verfügbar. Für den Brautomat kann das aktuell günstigste Modell gewählt werden. Displays mit 2.8 Zoll oder kleiner sowie 4 Zoll und größer haben eine andere Pixel-Auflösung und werden vom Brautomat nicht unterstützt!

Anschluss Display:

| Kabel         | Nextion Display | Anschlussklemme Platine  |
| ------------- | --------------- | ------------------------ |
|     rot       | Strom + | Vcc |
|   schwarz     | Strom - | GND |
|    blau       | TX      | D1 |
|    gelb       | RX      | D2 |
|               |         |    |

## Welcher ESP und welche Platine ist für mich die Richtige?

Grundsätzlich gibt es keine falsche Variante. Das Induktionskochfeld GGM IDS wird bei allen Varianten identisch gesteuert. Es gibt aber Vorteile für die eine oder andere Vorgehensweise:

* In einer Umgebung ohne bzw. mit sehr wenigen Aktoren ist der ESP8266 die etwas günstigere Version
* In einer Umgebung mit vielen Aktoren und der Möglichkeit für Erweiterungen ist der ESP32 die richtige Wahl
* In einer Umgebung mit analogen Sensoren PT100/PT1000 ist der ESP32 die richtige Wahl

</br>

* Wird der ESP32 eingesetzt, sollte die neue Platine ohne LevelShifter bevorzugt werden
* Wenn Relais oder SSRs eingesetzt werden, die eine Steuerspannung von min. 4V benötigten, dann ist die Platine mit LevelShifter eine gute Wahl

</br>

* Der ESP8266 auf der Platine mit LevelShifter
    > ist über einige Jahre ausgereift und in vielen Umgebungen im Einsatz\
    > im Projekt MQTTDevice entstanden\
    > eine sichere Wahl für alle, die einfach brauen möchten
* Der ESP32 auf der neuen Platine ohne LevelShifter
    > bietet mehr CPU Leistung (dual core)\
    > bietet mehr Anschlüsse (GPIOs)
    > bietet mehr Möglichkeiten für künftige Erweiterungen (Pumpen, Nachguss, Heizelemente, etc.)
