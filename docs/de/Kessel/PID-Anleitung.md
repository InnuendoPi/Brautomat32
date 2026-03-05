# Einfache Anleitung zur PID-Einstellung

> **Sicherheits-Hinweis:**
> Vor dem ersten Heizlauf bitte zuerst den
> [Sicherheits-Check vor erstem Heiztest](../Installation/sicherheitscheck-erster-heiztest.md)
> durchführen.

> **Hinweis:** Diese Anleitung gilt für den Stand ab Version 1.60.

Ein PID-Regler sorgt dafür, dass dein Braukessel die gewünschte Temperatur
möglichst genau hält, ohne zu überhitzen oder zu träge zu reagieren.
Diese Anleitung zeigt dir Schritt für Schritt, wie du ohne Vorwissen
funktionierende PID-Werte für dein System findest.

---

## 1. Startpunkt: Maischevolumen auswählen

Bestimme zuerst das typische Maischevolumen (Wasser + Malz).
Verwende nicht das maximale Kesselvolumen.

## 2. AutoTune: lass den Brautomat arbeiten

Der AutoTune-Modus liefert in ca. 5 Minuten gute Startwerte.
Neben `P`, `I` und `D` werden auch `SampleTime` und `PowerSampleTime`
ermittelt.

Wenn du diese Zeiten später anpasst, achte darauf:
`PowerSampleTime` sollte ein Vielfaches von `SampleTime` sein.
Ein guter Startpunkt ist Faktor 10.

### Merke

**Kleine Kessel -> höhere PID-Werte -> oft PI-Controller**

**Große Kessel -> niedrigere PID-Werte -> oft PID-Controller**

Es ist normal, dass unter ca. 25 l eher ein PI-Controller und ab ca. 30 l eher
ein PID-Controller ermittelt wird.

---

## 3. Erste Tests: Aufheizen auf eine Rast (z. B. 64 °C)

Nutze am besten das Rezept _Maischeplan Beispiel_.
Die ersten zwei Rasten eignen sich gut für die Bewertung:

- Einmaischen 50 °C
- Maltoserast 64 °C

Fülle den Kessel mit einer Wassermenge, die dem typischen Brautag-Volumen
entspricht. Starte dann den Brauvorgang und beobachte das Verhalten.

---

## 4. Feintuning: System optimieren

Für das Tuning gibt es zwei Stellgrößen:

1. Tuning-Faktor
2. PID-Parameter

Der Tuning-Faktor ist der einfachste Einstieg, um das Gesamtsystem defensiver
oder aggressiver zu fahren.
Optimiere zuerst damit.

---

## 5. Feintuning: PID-Parameter optimieren

Wenn der Tuning-Faktor nicht ausreicht, optimiere die PID-Parameter.

**Setze den Tuning-Faktor auf 1.2, bevor du die PID-Parameter anpasst.**

Beginne mit Schritten von 10-20 %. Wenn sich das Verhalten verbessert,
reduziere die Schrittweite auf 5 %.

| Verhalten | Korrektur |
| --- | --- |
| Temperatur steigt zu langsam | `Kp` erhöhen und `Ki` leicht erhöhen |
| Temperatur schießt über das Ziel hinaus | `Kp` senken und `Kd` erhöhen |
| Temperatur schwankt um die Zieltemperatur | `Ki` senken und `Kd` leicht erhöhen |
| Temperatur bleibt leicht unter der Zieltemperatur | `Ki` erhöhen |

Bei einem PI-Controller wird `Kd` nicht verändert (`D` bleibt 0).

Ersetze aufgeheiztes Wasser und wiederhole den Test.
Es ist normal, dass eine Anpassung das Verhalten zunächst verschlechtert.
Wenn du kein Rührwerk hast, rühre während des Tests regelmäßig um.

---

## Praxishilfe Brautag

Für konkrete Entscheidungen während des Brauens nutze den
[Praxisleitfaden Brautag](../Autotune-pid/praxisleitfaden-brautag.md).
