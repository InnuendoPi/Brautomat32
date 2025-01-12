# Induktionskochfeld GGM IDS einrichten

Im ersten Abschnitt "Maischeplan" wird der MaischeSud Kessel über das Zahnrad oben rechts angelegt.

![MaischeSud Kessel anlegen](/docs/img/IDS-einrichten.jpg)

Zunächst muss das Induktionskochfeld konfiguriert werden. Die erste Eigenschaft ist der IDS Typ. Es stehen IDS1 und IDS2 zur Auswahl. Es folgen drei Parameter zur Steuerung:

* PIN weiß [Relais] - Standardeinstellung: D7
* PIN gelb [Command] - Standardeinstellung: D6
* PIN blau [Interrupt] - Standardeinstellung: - (kein Interrupt)

_Hinweis: PIN blau [Interrupt] sollte durch die Auswahl "-" unbelegt bleiben. Siehe hierzu auch FAQ: Pin Interrupt_

Vorbelegt sind GPIOs (D6 und D7) für das original Anschlusskabel der GGM IDS. Diese Vorauswahl entspricht auch der Platine in diesem Projekt. Als nächste Eigenschaft muss ein Temperatursensor angegeben werden, welcher dem MaischeSud Kessel zugewiesen wird. In der Auswahlliste erscheinen die Sensornamen der bereits eingerichteten Sensoren. In dieser Grundeinrichtung ist nur ein Sensor mit dem Namen "Sensor IDS2" vorhanden und wird ausgewählt.

_Tipp: dem Induktionskochfeld muss ein Temperatursensor fest zugewiesen werden. Der Sensorwert wird im Folgenden auch Ist-Temperatur oder aktuelle Temperatur genannt und wird im Maischeprozess immer wieder mit der Rast-Temperatur (Zieltemperatur) verglichen._

![MaischeSud Kessel konfigurieren](/docs/img/IDS-konfigurieren.jpg)

Die Parameter auf dem Reiter "Temperatursteuerung" werden im Abschnitt "alle Parameter" erläutert. Die Standardwerte sollen zunächst übernommen werden.

![MaischeSud Kessel konfigurieren](/docs/img/IDS-temperaturen.jpg)

Nach der Grundkonfiguration muss der PID-Controller im Tab PID Manager eingerichtet werden. Der PID-Controller berechnet automatisch die benötigte Leistung der GGM IDS, um die Temperatur in der Maische (Ist) auf Rast-Temperatur (Ziel) zu bringen. Je besser der PID-Controller konfiguriert ist, desto genauer wird die Rast-Temperatur über die Rast-Dauer gehalten. Konfiguriert wird der PID-Controller über die zwei Parameter Ku und Pu, aus denen die Parameter P, I und D berechnet werden. Für eine anlagenbezogene Konfiguration wird der Prozess AutoTune im Abschnitt "AutoTune Schritt für Schritt" im Detail erläutert. Für diese erste Grundeinrichtung werden folgende Werte für den Verstärkungsfaktor Ku und die Periodendauer Pu eingetragen und dann die PID tuning Regel "IDS" ausgewählt:

![IDS](/docs/img/IDS-pid-einrichten.jpg)

Wenn die Werte für Ku und Pu eingetragen sind, ermittelt die Auswahl "PID Algorithmus" die drei Werte P, I und D automatisch. Eine Erläuterung aller Parameter erfolgt später.

_Tipp:_ _Bei einem Kesselvolumen von 36l und einem Maischevolumen von ca. 20l sind folgende Startparameter gut geeignet:_

```text
Verstärkungsfaktor Ku (ultimate gain):      182
Periodendauer Pu (ultimate period):         2245
```

_Bei einem Kesselvolumen von 70l und einem Maischevolumen von über 50l sind folgende Startparameter gut geeignet:_

```text
Verstärkungsfaktor Ku (ultimate gain):      225
Periodendauer Pu (ultimate period):         1500
```

Mit dem Speichern der Konfiguration ist die Grundkonfiguration bereits abgeschlossen. Mit einem Temperatursensor und einem MaischeSud Kessel kann nun gebraut werden. Zum Brauen ist noch ein Maischeplan erforderlich.

Die Tabs AutoTune und Profile werden in dieser Grundkonfiguration nicht erläutert. Der AutoTune Prozess wird sehr detailliert in einem eigenem Abschnitt erläutert. Es wird empfohlen, den AutoTune Prozess nach der Grundeinrichtung durchzuführen. Das Thema Profile beschreibt die Möglichkeit, die Parameter verschiedener MaischeSud Kessel abzuspeichern und zwischen diesen Profilen zu wechseln. Profile sind optional und für den Einstig in den Brautomat nicht erforderlich.
