# Induktionskochfeld GGM IDS einrichten

Im ersten Abschnitt "Maischeplan" wird über das Zahnrad oben rechts der MaischeSud Kessel angelegt.

![MaischeSud Kessel anlegen](/docs/img/IDS-einrichten.jpg)

Zuerst muss das Induktionskochfeld konfiguriert werden. Die erste Eigenschaft ist der Gerätetyp. Zur Auswahl stehen GGM IDS1, GGM IDS2 und Relais. Es folgen drei Steuerparameter:

* PIN weiß [Relais] - Standardeinstellung: D7
* PIN gelb [Command] - Standardeinstellung: D6
* PIN blau [Interrupt] - Standardeinstellung: - (kein Interrupt)

_Hinweis: PIN blau [Interrupt] sollte durch die Auswahl "-" unbelegt bleiben. Siehe hierzu auch FAQ: Pin Interrupt_

Die GPIOs (D6 und D7) sind für das Originalanschlusskabel des GGM IDS voreingestellt. Diese Vorbelegung entspricht auch der Platine in diesem Projekt. Als nächstes muss ein Temperatursensor angegeben werden, der dem MaischeSud Kessel zugeordnet ist. In der Auswahlliste erscheinen die Sensornamen der bereits konfigurierten Sensoren. In dieser Grundeinstellung ist nur ein Sensor mit dem Namen "Sensor IDS2" vorhanden und ausgewählt.

_Tipp: dem Induktionskochfeld muss ein Temperatursensor fest zugewiesen werden. Der Sensorwert wird im Folgenden auch Ist-Temperatur oder aktuelle Temperatur genannt und wird im Maischeprozess immer wieder mit der Rast-Temperatur (Zieltemperatur) verglichen._

![MaischeSud Kessel konfigurieren](/docs/img/IDS-konfigurieren.jpg)

Wenn Relais ausgewählt ist, ändert sich das Aussehen. Die Option GPIO invertieren muss aktiviert sein, wenn das Kochfeld eingeschaltet ist und der Brautomat ausgeschaltet anzeigt. Der Relaisschaltzyklus bleibt auf dem Standardwert von 5000ms.

![MaischeSud Kessel konfigurieren](/docs/img/relais-konfigurieren.jpg)

Die Parameter auf der Registerkarte "Temperaturregelung" werden im Abschnitt "Alle Parameter" erläutert. Die Standardwerte sind zunächst zu übernehmen.

![MaischeSud Kessel konfigurieren](/docs/img/IDS-temperaturen.jpg)

Nach der Grundkonfiguration muss im Register PID Manager der PID-Regler konfiguriert werden. Der PID-Regler berechnet automatisch die Leistung, die benötigt wird, um die Temperatur in der Maische (Ist) auf die Rasttemperatur (Soll) zu bringen. Je besser der PID-Regler konfiguriert ist, desto genauer wird die Rasttemperatur während der Rastzeit gehalten. Der PID-Regler wird über die beiden Parameter Ku und Pu konfiguriert, aus denen die Parameter P, I und D berechnet werden. Für eine anlagenspezifische Konfiguration ist der AutoTune-Prozess im Abschnitt "AutoTune Schritt für Schritt" detailliert beschrieben. Für diese erste Grundkonfiguration werden die folgenden Werte für den Verstärkungsfaktor Ku und die Periodendauer Pu eingegeben und dann die PID-Regel "AutoTune PID Modus" ausgewählt:

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

Mit dem Speichern der Konfiguration ist die Grundkonfiguration abgeschlossen. Mit einem Temperaturfühler und einem MaischeSud Kessel kann nun gebraut werden. Zum Brauen wird noch ein Maischplan benötigt.

Die Register AutoTune und Profile werden in dieser Grundkonfiguration nicht erklärt. Der AutoTune-Prozess wird in einem eigenen Abschnitt ausführlich erklärt. Es wird empfohlen, den AutoTune-Prozess nach der Grundkonfiguration durchzuführen. Das Thema Profile beschreibt die Möglichkeit, die Parameter verschiedener MaischeSud Kessel zu speichern und zwischen diesen Profilen zu wechseln. Die Profile sind optional und werden für den Einstieg in den Brautomat nicht benötigt.