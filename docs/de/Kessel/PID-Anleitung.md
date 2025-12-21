# 🍺 Einfache Anleitung zur PID-Einstellung  

Hinweis: Anleitung PID-Einstellung bis Version 1.59.9

## Für Hobbybrauer ohne technische Vorkenntnisse

Ein PID-Regler sorgt dafür, dass dein Braukessel die gewünschte Temperatur **genau hält**, ohne zu überhitzen oder zu langsam zu reagieren.  
Diese Anleitung zeigt dir Schritt für Schritt, wie du **ohne Vorwissen** funktionierende PID-Werte für dein System findest.

---

## 1️⃣ Startpunkt: Kesselgröße auswählen

Als Erstes bestimmst du deine Kesselgröße (Wasser/Maischemenge).  
Beginne mit diesen Startwerten:

| Kesselgröße | Kp (Start) | Ki (Start) | Kd (Start) |
|-------------|------------|------------|------------|
| **5–10 L** (kleiner Topf, Induktion) | 30 | 0.20 | 5 |
| **10–20 L** (kleiner Einkocher) | 20 | 0.05 | 10 |
| **20–30 L** (typischer Einkocher) | 15 | 0.04 | 8 |
| **30–40 L** (isolierter Sudkessel) | 12 | 0.03 | 8 |
| **40–70 L** (großer Braukessel) | 10 | 0.02 | 5 |

### 🧠 Merke

**Kleine Kessel → hohe PID-Werte**  
**Große Kessel → niedrigere PID-Werte**

---

## 2️⃣ Einfluss von Isolierung und Rührwerk

## 🧊 Ist dein Kessel isoliert?

Dann hält dein System die Wärme besser. Der PID-Controller soll **gemäßigter arbeiten.**

- **Kp → 20 % reduzieren**
- **Kd → 20 % reduzieren**

---

## 🔄 Hast du ein Rührwerk?

Ein Rührwerk mischt die Maische und verteilt die Wärme gleichmäßig. Dein Braukessel reagiert dadurch **schneller und stabiler.**

- **Kp → 20–30 % erhöhen**
- **Ki → 20 % erhöhen**
- **Kd → 20 % reduzieren**

---

## 3️⃣ Erste Tests – Aufheizen auf eine Rast (z. B. 63 °C)

### Zuerst Deinen Kessel korrekt konfigurieren

Öffne die Einstellungen von Deinem Kessel. Konfiguriere Im Tab **Hardware** den richtigen Kesseltyp (GGM IDS oder Relais gesteuert), die korrekten Anschlüsse (GPIOs) und wähle dann den zugewiesenen Temperatursensor aus.

Im Tab **Temperatursteuerung** verwende am Besten die Voreinstellung.

### 🧠 WICHTIG: im Tab PID Manager musst Du _manueller PID Modus_ auswählen

Das ist eine ganz entscheidende Auswahl: **manueller PID Modus**

Wir machen kein AutoTune, sondern passen Dein Setup individuell an den Brautomat an. Die Eingabefelder _Verstärkungsfaktor Ku (gain)_ und _Periodendauer Pu (period)_ verwenden wir nicht. Wenn Du möchtest, kannst Du in diese beiden Eingabefelder eine 0 oder 1 eintragen.

Jetzt gebe in den Feldern PID Kp, PID Ki und PID Kd Deine Startwerte ein und speichere die Einstellung ab.

### Starte einen Maischeschritt und beobachte das Verhalten

Verwende am Besten das Rezept _Maischeplan Beispiel_. Die ersten zwei Rasten sind perfekt geeignet, um die ideale Einstellung für Dein Setup zu finden:

- Einmaischen 50°C
- Maltoserast 64°C

Dein Kessel ist jetzt mit Wasser gefüllt. Die Wassermenge im Kessel entspricht dem Volumen einer Maische (Wasser + Malze), die an einem Brautag im Kessel sein würde. Jetzt starte den Brauvorgang und beobachte das Verhalten.

Falls nötig → so korrigieren:

| Verhalten | Was tun? |
|----------|----------|
| **Heizt zu langsam auf - es dauert ewig** | Kp +5; Ki leicht erhöhen |
| **Überschwingt Sollwert - Zieltempertur ordentlich überschritten** | Kp −5; Kd +5 |
| **Schwankt („Wellen“) - Sinuskurve um die Zieltemperatur** | Ki senken; Kd +3 |
| **Bleibt unter Soll - erreicht die Zieltemperatur nicht** | Ki erhöhen |

Ersetze aufgewärmtes Wasser und wiederhole den Test. Es ist völlig normal, dass eine "Korrektur" das Verhalten auch mal verschlechtert. Wenn Du kein Rührwerk hast, solltest Du beim Maischeschritt Einmaischen "immer mal wieder" umrühren. Das würdest Du beim echten Einmaischen auch machen. Wenn Du ein Hobbybrauer vom Typ "ich rühre per Hand immer mal wieder die Maische" bist, dann mache das bei den Tests genauso.

---

## 4️⃣ Beispiele

### 18 L Einkocher, isoliert, mit Rührwerk  

→ Kp ≈ 22, Ki ≈ 0.06, Kd ≈ 8

### 7 L Induktionstopf, ohne Isolierung und Rührwerk  

→ Kp=30, Ki=0.20, Kd=5

### 35 L isolierter Braukessel, mit Rührwerk  

→ Kp≈14, Ki≈0.04, Kd≈7

---

## 5️⃣ Feintuning

| Verhalten | Korrektur |
|-----------|-----------|
| Temperatur steigt zu langsam | Kp erhöhen |
| Temperatur schießt über Ziel hinaus | Kp senken, Kd erhöhen |
| Temperatur wackelt um Zieltemperatur | Ki senken |
| Temperatur bleibt leicht unter Zieltemepratur | Ki erhöhen |

---

## 🎯 Fertig

Mit dieser Anleitung kann jeder Nutzer ohne Vorwissen seinen PID-Regler sinnvoll einstellen – für kleine Induktionstöpfe, Einkocher oder große Braukessel, egal ob mit oder ohne Rührwerk.

**Unbedingt beachten:** Der PID Algorithmus steht auf _manueller PID Modus_

## Das WORST CASE Szenario

Gesucht werden die idealen PID Einstellung für folgendes Setup:

- Induktionskochfeld GGM IDS2 mit 3500 Watt Leistung
- Spaghetti Kochtopf mit 7 Liter Volumen
- keine Isolierung
- kein Rührwerk, aber ein Kochlöffel

Das worst case Szenario: Die gesuchte PID Einstellung soll 3500Watt Leistung für nur 7 Liter Wasser so bändigen, dass die Zieltemepraturen der Rasten ohne Überschwingen angefahren und gehalten werden.

### 1️⃣ Startpunkt:

| Kesselgröße | Kp (Start) | Ki (Start) | Kd (Start) |
|-------------|------------|------------|------------|
| **5–10 L** (kleiner Topf, Induktion) | 30 | 0.20 | 5 |

### 2️⃣ Einfluss von Isolierung und Rührwerk

Keine Isolierung und kein Rührwerk. Der Startpunkt wird nicht verändert.

### 3️⃣ Erste Tests – Aufheizen auf eine Rast

Der Kessel ist konfiguriert und der Startpunkt ist im PID Manager eingetragen:

![PID Anleitung](/docs/img/pid_anleitung_1.jpg)

Das Rezept _Maischeplan_Beispiel_ ist ausgewählt. 7 Liter Wsser mit ca. 23°C sind im Spaghetti Kochtopf. Die erste Rast Einmaischen hat die Zieltemperatur 50°C. Los geht's ...

Das erste Testergebnis:

![PID Anleitung](/docs/img/pid_anleitung_2.jpg)

## 4️⃣ Feintuning

Mit den Werten aus dem Startpunkt wurde ein Überschwingen von 0.5°C beobachtet. Du musst für Dich entscheiden, ob das Ergebnis azeptabel ist oder ob Du es genauer haben möchtest.

### 🧠 WICHTIG: Im Web Interface werden Temperaturen auf eine Nachkommastelle gerundet dargestellt.

Im worst case Szenario wollen wir es genauer. In der Tabelle _Verhalten - was tun?_ steht, wie wir unseren Startpunkt anpassen müssen:

| Verhalten | Was tun? |
|----------|----------|
| **Überschwingt Sollwert - Zieltempertur ordentlich überschritten** | Kp −5; Kd +5 |

Neuer Startpunkt:

| Kesselgröße | Kp (Start) | Ki (Start) | Kd (Start) |
|-------------|------------|------------|------------|
| **5–10 L** (kleiner Topf, Induktion) | 25 | 0.20 | 10 |
