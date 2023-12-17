# Display

Der Brautomat kann optional mit einem Touchdisplay betrieben werden. Unterstützt werden 3.5 Zoll Touchdisplay von Nextion

| Nextion Display | Firmware  |
| --------------- | --------- |
| NX4832T035 (Basic Serie) | [NX4832T035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/brautomat-NX4832T035.tft) |
| NX4832K035 (Enhanced Serie) | [NX4832K035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/brautomat-NX4832K035.tft) |
| NX4832F035 (Discovery Serie) | [NX4832F035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/brautomat-NX4832F035.tft)  |

Das Display benötigt für den Betrieb mit dem Brautomat eine Firmware. In der Tabelle ist die zum Displaytyp passende Firmware verlinkt. Siehe auch Displaydatei flashen.

## Display anschließen

Bevor ein Display genutzt werden kann, müssen die Jumper (Steckbrücken) J1 und J2 auf der Platine überprüft werden:

* Jumper J1: muss auf Position 1-2 gesteckt sein
* Jumper J2: muss auf Position 1-2 gesteckt sein
* Jumper J3: wird mit Nextion Display nicht genutzt und sollte auf 2-3 gesteckt sein

Anschließend werden die 4 Kabel vom Display mit der Platine verbunden

| Kabel         | Nextion Display | Anschlussklemme Platine  |
| ------------- | --------------- | ------------------------ |
|     rot       | Strom + | Vcc |
|   schwarz     | Strom - | GND |
|    blau       | TX      | SDL (D1) |
|    gelb       | RX      | SDA (D2) |

![Anschluss](/docs/img/disp1.jpg)

## Displaydatei flashen

Vor dem ersten Betrieb muss das Display vorbereitet werden. Hierzu wird die passende Display Firmware aus der Tabelle heruntergeladen und auf eine microSD Karte gespeichert. Die microSD Karte wird in den SD Kartenslot vom Display eingesteckt und der Brautomat eingeschaltet. Der Flashvorgang startet automatisch. Der Flashstatus wird auf dem Display angezeigt. Nach Abschluss wird der Brautomat ausgeschaltet und die microSD Karte wird entfernt. Für den normalen Betrieb wird die microSD Karte nicht benötigt.

## Ansicht MaischeSud

![MaischeSud](/docs/img/brewpage-sm.jpg)

Die Seite MaischeSud ist die bevorzugte Seite beim Brauen. Auf dem Dispaly werden die sekündlich die Informationen

* Ist-Temperatur
* Ziel-Temperatur (Rast-Temperatur)
* verbleibende Rastdauer

angezeigt. In der unteren Zeile wird zusätzlich die nächste Rast angezeigt. Die Zeitangabe links ist die Uhrzeit, zu welche die nächste Rast starten wird. Das grüne Play Symbol rechts zeigt an, dass die nächste Rast automatisch startet.

## Ansicht Kesselübersicht

![Kesselübersicht](/docs/img/kettlepage-sm.jpg)

Die Kesselübersicht wurde vom MQTTDevice übernommen und zeigt den MaischeSud Kessel und falls vorhanden den Nachguss mit den Informationen Ist- und Ziel-Temnperatur an.

_Hinweis: die Ansicht Kesselübersicht zeigt in der unteren Zeile die Adresse vom Brautomat: entweder den mDNS Namen oder die IP Adresse._

## Ansicht Manuelle Steuerung

![Manuelle Steueung](/docs/img/induction-mode-sm.jpg)

Die Seite manuelle Steuerung bietet die Möglichkeit, die GGM IDS manuell zu betreiben. Über die Buttons + und - können die Leistungsstufen hoch- bzw. heruntergeregelt werden.
