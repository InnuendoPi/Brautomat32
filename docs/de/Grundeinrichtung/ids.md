# Kochfeld einrichten

## Anlegen des MaischeSud-Kessels

Im ersten Abschnitt _Maischeplan_ wird der MaischeSud-Kessel über das Zahnrad oben rechts erstellt.

![MaischeSud Kessel anlegen](/docs/img/IDS-einrichten.jpg)

## Konfiguration eines Kochfelds

Zunächst muss ein Kochfeld konfiguriert werden. In dieser Grundeinrichtung wird ein GGM IDS Induktionskochfeld eingerichtet.

Die erste Einstellung betrifft den IDS-Typ, bei dem IDS1 oder IDS2 ausgewählt werden kann. Anschließend folgen drei Steuerungsparameter:

* PIN weiß [Relais] - Standard: D7
* PIN gelb [Command] - Standard: D6
* PIN blau [Interrupt] - Standard: - (unbelegt)

Diese GPIOs (D6 und D7) sind für das GGM IDS-Anschlusskabel mit JST-HX-Buchse bzw. den Schraubklemmblock vorkonfiguriert. Der Interrupt-Pin bleibt in der Regel unbelegt und wird nur zur Fehlersuche verwendet.

Als nächstes muss ein Temperatursensor dem MaischeSud-Kessel zugewiesen werden. Die Auswahl erfolgt aus einer Liste bereits eingerichteter Sensoren. In dieser Grundeinrichtung ist nur der Sensor _Sensor IDS2_ vorhanden, der entsprechend ausgewählt wird.

_Hinweis_: _Einem Kochfeld muss ein Temperatursensor fest zugewiesen werden. Der Sensorwert wird als Ist-Temperatur oder aktuelle Temperatur bezeichnet und während des Maischeprozesses kontinuierlich mit der Rast-Temperatur (Zieltemperatur) verglichen._

![MaischeSud Kessel konfigurieren](/docs/img/IDS-konfigurieren.jpg)

Die Parameter im Reiter "Temperatursteuerung" werden im Abschnitt "Alle Parameter" detailliert erläutert. Für die Grundeinrichtung werden zunächst die Standardwerte übernommen.

![MaischeSud Kessel konfigurieren](/docs/img/IDS-temperaturen.jpg)

## Einrichtung des PID-Controllers

Nach der Grundkonfiguration muss der PID-Controller im Tab PID Manager eingerichtet werden. Der PID Controller berechnet automatisch die erforderliche Leistung für das Kochfeld, um die Maische-Temperatur (Ist-Temperatur) auf die Rast-Temperatur zu bringen. Eine präzise PID-Konfiguration sorgt dafür, dass die Rast-Temperatur über die gesamte Rast-Dauer konstant bleibt.

Im Abschnitt AutoTune PID wird Schritt für Schritt erläutert, wie die PID-Parameter ermittelt werden.
