# Platine mit Levelshifter

Es gibt zwei Versionen der Platinen: mit LevelShifter und ohne LevelShifter.

![Platine mit LevelShifter](/docs/img/Platine.jpg)

Die Platine zum Projekt Brautomat macht den Aufbau und die Verwendung sehr einfach. Dabei ist die Platine völlig unabhängig vom Projekt Brautomat. Mit einem ESP8266 D1 mini oder ESP32 D1 kann die Platine universell eingesetzt werden. An die Schraubklemmblöcke werden beim Brautomat die GGM IDS, die Sensoren, die Aktoren und das Display angeschlossen.

## Jumperpositionen - Platine mit Levelshifter

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

## Teileliste

| Anzahl                                                | Artikelname                    | Link zum Artikel                  |
| ----------------------------------------------------- | ------------------------------ | --------------------------------- |
| 1                                                     | Schraubklemmblock 2pol 2,54    | (eg voelkner )                    |
| 3                                                     | Schraubklemmblock 3pol 2,54    | (eg voelkner )                    |
| 2                                                     | Schraubklemmblock 5pol 2,54    | (eg voelkner )                    |
| 2                                                     | Schraubklemmblock 8pol 2,54    | (eg voelkner )                    |
| 1                                                     | JST-HX Buchse 90° 2,54         | (eg voelkner )                    |
| 1                                                     | Stiftleiste 2,54               | [amazon](https://amzn.to/40Q8Nbv) |
| 4                                                     | Jumper 2,54                    | (eg voelkner )                    |
| 1                                                     | Widerstand 4,7kOhm             | [amazon](https://amzn.to/40OLPBA) |
| 1                                                     | D1 mini NodeMcu ESP8266        | [amazon](https://amzn.to/3RWwyL5) |
| 1                                                     | LevelShifter 8 Channel 5V 3.3V | [amazon](https://amzn.to/3xjkN7S) |
|                                                       |                                |                                   |

Die Position JST-HX Buchse ist für das original Anschlusskabel vorgesehen. Wird ein Ersatzkabel (ohne JST-HX Stecker) verwendet, kann an gleicher Stelle auf der Platine ein Schraubklemmblock 5pol im Rastermaß 2,54mm eingesetzt werden. Der Schaubklemmblock 2pol kann wahlweise unten rechts oder mittig links neben dem Wemos D1 mini eingesetzt werden.

_Tipp:_ _der ESP8266 sollte gesockelt werden. Mit Sockel (im Link oben enthalten) ist ausreichend Platz für den Widerstand unter dem ESP8266. Falls eine Fehlersuche erforderlich ist, kann ein gesockelter ESP8266 von der Platine abgesteckt werden._

Die Anschlüsse vom LevelShifter 8 Kanal müssen zur Anordnung auf der Platine identisch sein. Der Levelshifter aus dem Link hat diese Anordnung der Anschlüsse.

![Levelshifter](/docs/img/Levelshifter.jpg)

## Platine ohne Levelshifter

![Platine ohne LevelShifter](/docs/img/Platine20.jpg)

Die Platine ohne LevelShifter kommt ohne Jumper und ohne Extra-Port für das Display. Dafür bietet die Version für den ESP32 alle GPIOs an Schraubklemmblöcken.

## Teileliste 2

Die Position JST-HX Buchse ist eine Alternative zum 5 Pol Schraubklemmblock. Das Kabel vom Bedienteil der GGM IDS2 hat den passenden Stecker für eine JST-HX Buchse. Wir statt den Orignalkabel ein Ersatzkabel eingesetzt, ist die Verbindung mit einem 5er Schraubklemmblockj einfacher.

| Anzahl                                                | Artikelname                    | Link zum Artikel                  |
| ----------------------------------------------------- | ------------------------------ | --------------------------------- |
| 3                                                     | Schraubklemmblock 3pol 2,54    | (eg voelkner )                    |
| 1                                                     | Schraubklemmblock 5pol 2,54    | (eg voelkner )                    |
| 1 alternativ zum Schraubklemmblock 5pol               | JST-HX Buchse 90° 2,54         | (eg voelkner )                    |
| 2                                                     | Schraubklemmblock 8pol 2,54    | (eg voelkner )                    |
| 2                                                     | Schraubklemmblock 12pol 2,54   | (eg voelkner )                    |
| 2                                                     | JST-HX Buchse 90° 2,54         | (eg voelkner )                    |
| 1                                                     | Stiftleiste 2,54               | (amazon)                          |
| 1                                                     | Widerstand 4,7kOhm             | (amazon)                          |
| 1                                                     | Passiver Buzzer 12mm 3V        | (amazon)                          |
| 1                                                     | ESP32 D1 mini                  | (amazon)                          |

Anschluss Display:

| Kabel         | Nextion Display | Anschlussklemme Platine  |
| ------------- | --------------- | ------------------------ |
|     rot       | Strom + | Vcc |
|   schwarz     | Strom - | GND |
|    blau       | TX      | D1 |
|    gelb       | RX      | D2 |
