# AutoTune Schritt für Schritt

> **Sicherheits-Hinweis:**
> Vor dem ersten Heizlauf bitte zuerst den
> [Sicherheits-Check vor erstem Heiztest](../Installation/sicherheitscheck-erster-heiztest.md)
> durchführen.

Das praktische Vorgehen für AutoTune sieht wie folgt aus:

![AutoTune](/docs/img/IDS-AutoTune.jpg)

1. Befülle deinen MaischeSud-Kessel mit einer typischen Menge Wasser

    a. Eine typische Menge entspricht einer Kesselfüllung bestehend aus Hauptguss und Schüttung

    Beispiel: 16 l Hauptguss und 4 kg Schüttung ergeben eine typische Menge von 20 l Wasser für den AutoTune-Prozess

    b. Die Wassertemperatur soll ca. 50 °C betragen (40-55 °C)

    c. Schalte das Rührwerk ein
2. Trage das typische Volumen in das Eingabefeld "Kesselvolumen in Liter" ein
3. Aktiviere „PID AutoTune“
4. Aktiviere „AutoTune debug“
5. Speichere diese Einstellung
6. Mit einem Klick auf den Power-Button wird der AutoTune-Prozess gestartet.

![AutoTune2](/docs/img/IDS-AutoTune-start.jpg)

Der AutoTune-Prozess dauert ca. 5 Minuten. Der Prozess beendet sich selbstständig.
Der AutoTune-Vorgang ist abgeschlossen und die ermittelten Anlagenparameter werden
automatisch gespeichert.
Das Ergebnis von AutoTune sind die Totzeit `L` und die Steigrate `R`.
Aus diesen beiden Parametern werden `P`, `I` und `D` berechnet.

Wenn der AutoTune-Prozess beendet ist und "AutoTune debug" aktiviert wurde,
kann über den Explorer das Protokoll `autotune_log.txt` eingesehen werden.
In dieser Protokolldatei werden alle Informationen protokolliert.
In den Dateien `idsAutoTune.txt`, `sudAutoTune.txt` bzw. `hltAutoTune.txt`
wird das Ergebnis von AutoTune im JSON-Format gespeichert.
Die Dateien sind rein informativ und werden für den Betrieb nicht benötigt.
