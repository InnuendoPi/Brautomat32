# Induktionskochfeld GGM IDS einrichten

## Anlegen des MaischeSud-Kessels

Im ersten Abschnitt "Maischeplan" wird der MaischeSud-Kessel über das Zahnrad oben rechts erstellt.

![MaischeSud Kessel anlegen](/docs/img/IDS-einrichten.jpg)

## Konfiguration eines Kochfelds

Zunächst muss ein Kochfeld konfiguriert werden. In dieser Grundeinrichtung wird ein GGM IDS Induktionskochfeld eingerichtet.

Die erste Einstellung betrifft den IDS-Typ, bei dem IDS1 oder IDS2 ausgewählt werden kann. Anschließend folgen drei Steuerungsparameter:

* PIN weiß [Relais] - Standard: D7
* PIN gelb [Command] - Standard: D6
* PIN blau [Interrupt] - Standard: D5

Diese GPIOs (D5, D6 und D7) sind für das GGM IDS-Anschlusskabel mit JST-HX-Buchse bzw. den Schraubklemmblock vorkonfiguriert.

Als nächstes muss ein Temperatursensor dem MaischeSud-Kessel zugewiesen werden. Die Auswahl erfolgt aus einer Liste bereits eingerichteter Sensoren. In dieser Grundeinrichtung ist nur der Sensor "Sensor IDS2" vorhanden, der entsprechend ausgewählt wird.

_Tipp_: _Dem Induktionskochfeld muss ein Temperatursensor fest zugewiesen werden. Der Sensorwert wird als Ist-Temperatur oder aktuelle Temperatur bezeichnet und während des Maischeprozesses kontinuierlich mit der Rast-Temperatur (Zieltemperatur) verglichen._

![MaischeSud Kessel konfigurieren](/docs/img/IDS-konfigurieren.jpg)

Die Parameter im Reiter "Temperatursteuerung" werden im Abschnitt "Alle Parameter" detailliert erläutert. Für die Grundeinrichtung werden zunächst die Standardwerte übernommen.

![MaischeSud Kessel konfigurieren](/docs/img/IDS-temperaturen.jpg)

## Einrichtung des PID-Controllers

Nach der Grundkonfiguration muss der PID-Controller im Tab PID Manager eingerichtet werden. Dieser berechnet automatisch die erforderliche Leistung der GGM IDS, um die Maische-Temperatur (Ist-Temperatur) auf die Rast-Temperatur zu bringen. Eine präzise PID-Konfiguration sorgt dafür, dass die Rast-Temperatur über die gesamte Rast-Dauer konstant bleibt.

Der PID-Controller wird mit zwei Parametern eingestellt:

* Ku (ultimate gain) – Verstärkungsfaktor
* Pu (ultimate period) – Periodendauer

Aus diesen beiden Werten werden die PID-Parameter P, I und D berechnet. Für eine anlagenbezogene Konfiguration wird der AutoTune-Prozess im Abschnitt "AutoTune Schritt für Schritt" ausführlich beschrieben.

Für diese Grundeinrichtung werden die folgenden Werte für Ku und Pu eingetragen. Danach wird die PID-Tuning-Regel "AutoTune Modus" ausgewählt:

![IDS](/docs/img/IDS-AutoTune-erg.jpg)

Sobald die Werte für Ku und Pu eingetragen sind, ermittelt der ausgewählte PID-Algorithmus automatisch die drei Werte P, I und D. Eine detaillierte Erklärung aller Parameter erfolgt später.

## Startwerte für verschiedene Kesselgrößen

Für einen 36L-Kessel mit etwa 20L Maischevolumen:

```text
Verstärkungsfaktor Ku (ultimate gain):      182
Periodendauer Pu (ultimate period):         2245
```

Für einen 70L-Kessel mit über 50L Maischevolumen:

```text
Verstärkungsfaktor Ku (ultimate gain):      225
Periodendauer Pu (ultimate period):         1500
```

## Abschluss der Grundkonfiguration

Nach dem Speichern der Einstellungen ist die Grundkonfiguration abgeschlossen. Mit einem Temperatursensor und einem MaischeSud-Kessel kann nun gebraut werden.

_Hinweis: Zum eigentlichen Brauvorgang wird zusätzlich ein Maischeplan benötigt._
