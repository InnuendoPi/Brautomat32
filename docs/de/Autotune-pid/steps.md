# AutoTune Schritt für Schritt

Das praktische Vorgehen AutoTune schaut wie folgt aus:

![AutoTune](/docs/img/IDS-AutoTune.jpg)

1. Befülle Deinen MaischeSud Kessel mit einer typischen Menge Wasser

    a. Eine typische Menge entspricht einer Kesselfüllung bestehend aus Hauptguss und Schüttung

    Beispiel: 20l Hauptguss und 5kg Schüttung ergibt eine typische Menge von 25l Wasser für den AutoTune Prozess

    b. Schalte das Rührwerk ein
2. Setze eine AutoTune Zieltemperatur

    a. die Zieltemperatur sollte 50°C oder mehr betragen.

    b. die Zieltemperatur soll min. 10°C über der aktuellen Ist-Temperatur liegen.

3. Aktiviere „PID AutoTune“
4. Aktiviere „AutoTune debug“
5. Speichere diese Einstellung
6. Mit einem Klick auf den Power Button wird der AutoTune Prozess gestartet.

![AutoTune2](/docs/img/IDS-AutoTune-start.jpg)

Der AutoTune-Prozess besteht aus zwei Phasen. Phase 1 ist das Aufheizen auf die Zieltemperatur. Bei Erreichen der Zieltemperatur wird das Kochfeld abgeschaltet. Dabei wird die Zieltemperatur teilweise deutlich um 2-3°C überschritten. Die deutliche Überschreitung der Zieltemperatur ist für den AutoTune-Prozess notwendig. Es folgt eine Abkühlphase unter die Zieltemperatur. Diese beiden Phasen werden 5x wiederholt. Der AutoTune-Prozess dauert je nach Umgebung relativ lange (90min und mehr). Die meiste Zeit wird während der Abkühlphasen benötigt. Je besser ein Sudkessel isoliert ist, desto länger dauert der AutoTune-Prozess bzw. die Abkühlphase. Der AutoTune-Prozess sollte bei einer typischen Maischetemperatur von ca. 60°C durchgeführt werden. Der aktuelle Status wird in der Spalte „AutoTune Prozess 0/5“ angezeigt. Die erste Zahl ist der aktuelle Schritt und die zweite Zahl ist die Anzahl der voraussichtlich erforderlichen AutoTune-Schritte. Während des AutoTune-Prozesses werden Messwerte ermittelt. Die Messwerte werden ständig überprüft. Weist ein Messwert eine Abweichung auf, wird die Messung wiederholt. Bei einer Wiederholung wird "AutoTune Prozess 6/5" angezeigt. Maximal werden 20 Wiederholungen durchgeführt. Das Ergebnis von AutoTune wird in den Einstellungen des GGM IDS im Register PID-Manager angezeigt:

![AutoTune3](/docs/img/IDS-AutoTune-erg.jpg)

Der AutoTune-Vorgang ist abgeschlossen und die ermittelten Anlagenparameter werden automatisch gespeichert.\
Das Ergebnis von AutoTune sind der Verstärkungsfaktor Ku (ultimate gain) und die Periodendauer (ultimate period). Aus diesen beiden Parametern werden P, I und D berechnet. Für die Berechnung der PID-Werte stehen verschiedene Algorithmen zur Verfügung. Der Brautomat verwendet einen PID-Algorithmus, der für das Brauen (eigentlich für das Erhitzen von Flüssigkeiten) optimiert ist und z.B. auch im Addon PIDBoil von CraftBeerPi verwendet wird.

_Tipp: Nach dem AutoTune-Prozess sollte die Konfiguration mittels Backup gesichert werden._

Wenn der AutoTune-Prozess beendet ist und "AutoTune debug" aktiviert wurde, kann über den Explorer das Protokoll "autotune\_log.txt" eingesehen werden. In dieser Protokolldatei werden alle Informationen protokolliert.\
In der Datei "idsAutoTune.txt", "sudAutoTune.txt" bzw. "hltAutoTune.txt" wird das Ergebnis von AutoTune im JSON-Format gespeichert. Die Dateien sind rein informativ und werden für den Betrieb nicht benötigt. In diesen Dateien sind die PID-Werte nach verschiedenen Berechnungsmethoden aufgelistet.

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

Die berechneten Werte der verschiedenen Algorithmen können in den Einstellungen mit der Auswahl INDIVIDUAL_PID in den Zeilen P, I und D eingegeben werden. Dies dürfte jedoch nur in seltenen Fällen zu besseren Ergebnissen führen.
