# 🍺 Einfache Anleitung zur PID-Einstellung  

Hinweis: Anleitung PID-Einstellung ab Version 1.60

Ein PID-Regler sorgt dafür, dass dein Braukessel die gewünschte Temperatur **genau hält**, ohne zu überhitzen oder zu langsam zu reagieren.  
Diese Anleitung zeigt dir Schritt für Schritt, wie du **ohne Vorwissen** funktionierende PID-Werte für dein System findest.

---

## 1️⃣ Startpunkt: Maischevolumen auswählen

Als Erstes bestimmst du das Maischevolumen (Wasser + Malze). Verwende nicht das maximale Kesselvolumen.

## 2️⃣ AutoTune: lass den Brautomat arbeiten

Der AutoTune-Modus liefert sehr gute Startwerte **in nur 5 Minuten**. AutoTune ermittelt neben PID auch die SampleTime und PowerSampleTime. Diese zwei Werte sind sehr wichtig. Wenn DU sie anpasst, achte immer darauf, dass PowerSample ein vielfaches von SampleTime ist. Verwende den Faktor 10.

### 🧠 Merke

**Kleine Kessel → hohe PID-Werte → der Brautomat ermittlet einen PI-Controller**  
**Große Kessel → niedrigere PID-Werte → der Brautomat ermittelt einen PID-Controller**

Es ist völlig korrekt, dass bei einem Volumen unter 25 Liter der Brautomat eher einen PI Controller und ab 30 Liter einen PID Controller ermittelt.

---

## 3️⃣ Erste Tests – Aufheizen auf eine Rast (z. B. 64 °C)

Verwende am Besten das Rezept _Maischeplan Beispiel_. Die ersten zwei Rasten sind perfekt geeignet, um die ideale Einstellung für Dein Setup zu finden:

- Einmaischen 50°C
- Maltoserast 64°C

Dein Kessel ist jetzt mit Wasser gefüllt. Die Wassermenge im Kessel entspricht dem Volumen einer Maische (Wasser + Malze), die an einem Brautag im Kessel sein würde. Jetzt starte den Brauvorgang und beobachte das Verhalten.

---

## 4️⃣ Feintuning: wie kann ich mein System optimieren

Du hast zwei Möglichkeiten für ein Tuning:

1. der Tuning Faktor
2. die PID Parameter

Der Tuning Faktor macht es dem Anwender sehr leicht, das gesamte System defensiver oder agressiver einzustellen. Probiere erst mit dem Tuning Faktor Dein System zu optimieren.

---

## 5️⃣ Feintuning: PID Optimierung

Die zweite Möglichkeit zur Optimierung sind die PID Parameter. Verwende diese Tabelle für ein schrittweises Herantasten an optimale Parameter.

**Setze den Tuning Faktor auf 1.2 bevor Du die PID Parameter anpasst!**

Beginne die Anpassungen vom P-Term, I-Term und D-Term in Schritten von 10-20%. Sobald sich eine Verbesserung einstellt, verkleinere die Schritte auf 5%.

| Verhalten | Korrektur |
|-----------|-----------|
| Temperatur steigt zu langsam | Kp erhöhen und Ki leicht erhöhen |
| Temperatur schießt über Ziel hinaus | Kp senken und Kd erhöhen |
| Temperatur wackelt um Zieltemperatur | Ki senken und Kd leicht erhöhen |
| Temperatur bleibt leicht unter Zieltemepratur | Ki erhöhen |

Anmerkung: bei einem PI-Controller wird Kd nicht verändert. Der D-Term bleibt 0.

Ersetze aufgewärmtes Wasser und wiederhole den Test. Es ist völlig normal, dass eine "Optimierung" das Verhalten auch mal verschlechtert. Wenn Du kein Rührwerk hast, solltest Du "immer mal wieder" umrühren. Das würdest Du an einem Brautag mit Malzen auch machen.

---
