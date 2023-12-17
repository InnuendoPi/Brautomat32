# AutoTune Schritt für Schritt

Das praktische Vorgehen AutoTune schaut wie folgt aus:

![AutoTune](/docs/img/IDS-AutoTune.jpg)

1. Befülle Deinen MaischeSud Kessel mit einer typischen Menge Wasser

    a. Eine typische Menge entspricht dem Hauptguss + Schüttung

    Beispiel: 20l Hauptguss und 5kg Schüttung ergibt eine typische Menge von 25l

    b. Schalte das Rührwerk ein
2. Setze eine AutoTune Zieltemperatur

    a. die Zieltemperatur sollte 50°C oder mehr betragen.

    b. die Zieltemperatur soll min. 10°C über der aktuellen Ist-Temperatur liegen.

3. Aktiviere „PID AutoTune“
4. Aktiviere „AutoTune debug“
5. Speichere diese Einstellung
6. Mit einem Klick auf den Power Button wird "AutoTune IDS" gestartet.

![AutoTune2](/docs/img/IDS-AutoTune-start.jpg)

Der AutoTune Prozess besteht aus zwei Phasen. Phase 1 ist das Aufheizen auf Zieltemperatur. Mit Erreichen der Zieltemperatur wird das Induktionskochfeld abgeschaltet. Die Zieltemperatur wird dabei teils deutlich um 2-3°C überschritten. Das deutliche Überschreiten der Zieltemperatur ist im AutoTune Prozess notwendig. Es folgt eine Abkühlphase unter die Zieltemperatur. Diese zwei Phase werden 5x wiederholt. Der AutoTune Prozess dauert je nach Umgebung relativ lange (90min und mehr). Der meiste Zeitbedarf entsteht während den Abkühlphasen. Je besser ein Braukessel isoliert ist, desto länger dauert der AutoTune Prozess bzw. die Abkühlphase. Der AutoTune Prozess sollte bei einer typischen Maischetemperaturen von ca. 60°C durchgeführt werden. Der aktuelle Status ist in der Spalte „AutoTune Prozess 0/5“ sichtbar. Die erste Zahl ist der aktuelle Schritt und die zweite Zahl die Anzahl der voraussichtlich benötigten AutoTune-Schritte. Im AutoTune Prozessverlauf werden Messwerte ermittelt. Die Messwerte werden fortlaufend überprüft. Hat ein Messwert eine Abweichung, wird die Messung wiederholt. Bei einer Wiederholung erscheint "AutoTune Prozess 6/5". Es werden maximal 20 Wiederholungen durchgeführt. Das AutoTune Ergebnis wird in den Einstellung der GGM IDS im Tab PID-Manager dargestellt:

![AutoTune3](/docs/img/IDS-AutoTune-erg.jpg)

Der AutoTune Prozess ist abgeschlossen und die ermittelten Anlagenparameter werden automatisch gespeichert.\
Das Ergebnis von AutoTune sind die Werte Verstärkungsfaktor Ku (ultimate gain) und die Periodendauer (ultimate period). Aus diesen zwei Parametern werden P, I und D berechnet. Zur Berechnung der PID-Werte stehen diverse Algorithmen zur Verfügung. Der Brautomat verwendet einen PID-Algorithmus, der für das Brauen (eigentlich für das Erhitzen von Flüssigkeiten) optimiert ist und u.a. auch im Addon PIDBoil von CraftBeerPi eingestezt wird.

_Tipp: Nach dem AutoTune Prozess sollte die Konfiguration mittels Backup gesichert werden._

Wenn der AutoTune Prozess beendet ist und "AutoTune debug" aktiviert wurde, kann über den Explorer das Protokoll "autotune\_log.txt" eingesehen werden. In dieser Protokolldatei werden alle Informationen mitgeschrieben.\
In der Datei "idsAutoTune.txt" bzw. "hltAutoTune.txt" wird das AutoTune Ergebnis im JSON Format abgespeichert. Beide Dateien sind rein informativ und werden für den Betrieb nicht benötigt. In diesen Dateien sind PID-Werte über verschiedene Berechnungsmethoden aufgeführt.

Im Log sind folgende Berechnungsmethoden aufgeführt:

INTEGRAL PID\
SOME OVERSHOOT PID\
NO OVERSHOOT PID\
ZIEGLER NICHOLS PID\
ZIEGLER NICHOLS PI\
TYREUS LUYBEN PID\
TYREUS LUYBEN PI\
CIANCONE MARLIN PID\
CIANCONE MARLIN PI

Die berechneten Werte der unterschiedlichen Algorithmen können in den EInstellungen mit der Auswahl INDIVIDUAL_PID in den Zeilen P, I und D eingetragen werden. Dies sollte jedoch nur in seltenen Fällen zu besseren Ergebnissen führen.
