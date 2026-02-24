# AutoTune Schritt für Schritt

Das praktische Vorgehen AutoTune schaut wie folgt aus:

![AutoTune](/docs/img/IDS-AutoTune.jpg)

1. Befülle Deinen MaischeSud Kessel mit einer typischen Menge Wasser

    a. Eine typische Menge entspricht einer Kesselfüllung bestehend aus Hauptguss und Schüttung

    Beispiel: 16l Hauptguss und 4kg Schüttung ergibt eine typische Menge von 20l Wasser für den AutoTune Prozess

    b. Die Wassertemperatur soll ca. 50°C betragen (40-55°C)

    c. Schalte das Rührwerk ein
2. Trage das typische Volumen in das Eingabefeld "Kesselvolumen in Liter" ein
3. Aktiviere „PID AutoTune“
4. Aktiviere „AutoTune debug“
5. Speichere diese Einstellung
6. Mit einem Klick auf den Power Button wird der AutoTune Prozess gestartet.

![AutoTune2](/docs/img/IDS-AutoTune-start.jpg)

Der AutoTune-Prozess dauert ca. 5 Minuten. Der Prozess beendet sich selbstständig. Der AutoTune-Vorgang ist abgeschlossen und die ermittelten Anlagenparameter werden automatisch gespeichert.\
Das Ergebnis von AutoTune sind sind die Totzeit L und die Steigrate R. Aus diesen beiden Parametern werden P, I und D berechnet.

Wenn der AutoTune-Prozess beendet ist und "AutoTune debug" aktiviert wurde, kann über den Explorer das Protokoll "autotune\_log.txt" eingesehen werden. In dieser Protokolldatei werden alle Informationen protokolliert.\
In der Datei "idsAutoTune.txt", "sudAutoTune.txt" bzw. "hltAutoTune.txt" wird das Ergebnis von AutoTune im JSON-Format gespeichert. Die Dateien sind rein informativ und werden für den Betrieb nicht benötigt. In diesen Dateien sind die PID-Werte nach verschiedenen Berechnungsmethoden aufgelistet.
