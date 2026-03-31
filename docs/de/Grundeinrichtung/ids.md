# Kochfeld einrichten

## Anlegen des MaischeSud-Kessels

Im ersten Abschnitt _Maischeplan_ wird der MaischeSud-Kessel über das Zahnrad oben rechts erstellt.

![MaischeSud Kessel anlegen](/docs/img/IDS-einrichten.jpg)

## Konfiguration eines Kochfelds

Zunächst muss die Heizquelle für den MaischeSud-Kessel konfiguriert werden.
In diesem Kapitel wird die Einrichtung eines unterstützten GGM-IDS-Systems
gezeigt.

Die erste Einstellung betrifft den IDS-Typ. IDS1 und IDS5 werden identisch
angesteuert, IDS2 separat. Anschließend folgen die zugehörigen
Steuerungsparameter:

* PIN weiß [Relais] - Standard: D7
* PIN gelb [Command] - Standard: D6
* PIN blau [Interrupt] - Standard: - (unbelegt)

Für ein GGM-IDS-System werden die aktiven Steueranschlüsse `Relais` und
`Command` verwendet. Für den normalen Einstieg reichen die Standardwerte.

Der Anschluss `Interrupt` wird aktuell nicht verwendet.

Als nächstes muss ein Temperatursensor dem MaischeSud-Kessel zugewiesen werden. Die Auswahl erfolgt aus einer Liste bereits eingerichteter Sensoren. In dieser Grundeinrichtung ist nur der Sensor _Sensor IDS2_ vorhanden, der entsprechend ausgewählt wird.

_Hinweis_: _Einem Kochfeld muss ein Temperatursensor fest zugewiesen werden. Der Sensorwert wird als Ist-Temperatur oder aktuelle Temperatur bezeichnet und während des Maischeprozesses kontinuierlich mit der Rast-Temperatur (Zieltemperatur) verglichen._

![MaischeSud Kessel konfigurieren](/docs/img/IDS-konfigurieren.jpg)

Die Parameter im Reiter "Temperatursteuerung" werden im Abschnitt "Alle Parameter" detailliert erläutert. Für die Grundeinrichtung werden zunächst die Standardwerte übernommen.

![MaischeSud Kessel konfigurieren](/docs/img/IDS-temperaturen.jpg)

## Einrichtung des PID-Controllers

Nach der Grundkonfiguration muss der PID-Controller eingerichtet werden. Wenn
du neu einsteigst, arbeite zuerst mit den Standardwerten und führe danach
AutoTune aus. Eigene Feineinstellungen sind für den ersten Test nicht nötig.

Wie AutoTune durchgeführt wird, ist hier Schritt für Schritt beschrieben:
[AutoTune Schritt für Schritt](../Autotune-pid/steps.md)

## Vertiefung (Fortgeschrittene)

Die technische Detailbeschreibung zur entkoppelten IDS-Sendelogik ab 1.60 findest du hier:
[IDS RMT Sendelogik 1.60 (Fortgeschrittene)](ids-rmt-160.md)
