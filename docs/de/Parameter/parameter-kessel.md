# Parameter Kochfeld

## Temperaturregelung

### Max. Leistung

Dieser Parameter beschreibt die maximale Ausgangsleistung des Kochfeldes. Der Standardwert ist 100%. Dieser Parameter wird verwendet, wenn ein kleiner Kessel mit z.B. 20l Volumen auf dem Kochfeld verwendet wird. Durch die Reduzierung der Leistung kann ein zu schnelles Aufheizen und Überkochen vermieden werden. Die Parameter "Max. Leistung" und "Leistung ab Übergang" sollten bei der Verwendung von kleinen Braukesseln gemeinsam reduziert werden.

Am Ende dieses Kapitels finden Sie [zwei Beispiele zur Berechnung der benötigten Leistung](https://innuendopi.gitbook.io/brautomat32/info-5/parameter-ggm-ids#berechnung-der-erforderlichen-leistung).

### Temperatur delta zum Ziel

Dieser Parameter beschreibt, ab welcher Differenz zur Rasttemperatur (Sollwert) der Timer für eine Rast starten soll. Der Standardwert ist 0,3°C. Im Maischprozess ermöglicht der PID-Regler eine sehr genaue Temperaturregelung. Eine Rasttemperatur wird auf +-0,2°C genau erreicht, indem der PID-Regler die Energiezufuhr vor Erreichen der Rasttemperatur kontrolliert reduziert. Die Reduzierung der Energiezufuhr hat den Nebeneffekt, dass der letzte Schritt zum Erreichen der Rasttemperatur länger dauert. Genau an dieser Stelle kommt der Parameter "Delta zum Ziel" ins Spiel: Soll z.B. eine Rasttemperatur von 63°C erreicht werden und die aktuelle Temperatur beträgt 62,7°C, dann würde bei einem Temperatur delta zum Ziel von 0,3°C der Rasttimer starten. Bezogen auf die individuelle Brauanlage kann mit delta zum Ziel eine ungewollte Verlängerung der Rastzeit vermieden werden.

### Übergang zum Kochen [°C]

Dieser Parameter beschreibt die Temperatur, ab der der PID Controller das Kochen der Würze erkennen soll. Der Standardwert ist 95°C. Dieser Parameter beschreibt nicht, ab welcher Temperatur die Würze zu kochen beginnt. Dieser Parameter beschreibt die Temperatur, ab der der Brautomat den PID Controller deaktiviert und mit einer vorgegebenen Leistung "Leistung ab Übergang" das Kochfeld steuert. Anders als bei den Rast-Temperaturen ist beim Kochen nicht das genaue Erreichen und halten der Temperatur das Ziel, sondern das wallend Kochen. Anstatt also die Leistung zu reduzieren, wird beim Kochen das Induktionskochfeld mit einer konstanten Leistung betrieben.

### Leistung ab Übergang [%]

Dieser Parameter beschreibt die Ausgangsleistung für das Kochfeld ab der Temperatur Übergang zum Kochen. Der Standardwert ist 100%. Mit dem Parameter "Übergang zum Kochen" ist eine Temperatur festgelegt worden, ab der der PID Controller deaktiviert wird. Mit dem Parameter "Leistung ab Übergang" wird nun die feste Ausgangsleistung für das Kochfeld vorgegeben. Wird ein Braukessel mit einem Volumen über 35l oder mehr eingesetzt, ist der Standardwert 100% eine passende Wahl. In Brauküchen mit kleinen Kesseln kann 100% Energiezufuhr ein Überkochen bewirken. In diesem Fall kann die maximale Energiezufuhr mit diesem Parameter auf bspw. 75% reduziert werden.

Ab Version 1.60 kann diese Leistung zusätzlich direkt im Maischeplan per Sonderbefehl gesetzt werden:

* `IDSTHRESOUT:80`
* `MAISCHETHRESOUT:80`

### Deaktiviere PID zum Kochen [on/off]

Dieser Parameter bestimmt das Verhalten vom PID Controller beim Kochen, wenn die Ist-Temperatur über der Ziel-Temperatur liegt. Beispiel: die Kochtemperatur wurde im Maischeplan auf 98°C festgelegt. Der Parameter "Leistung ab Übergang" schaltet die PID Berechnung ab der Temperatur "Übergang zum Kochen" aus. Wenn der Parameter "Deaktiviere PID zum Kochen" aktiviert ist (Standard), dann bleibt der PID Controller auch über der Ziel-Temperatur von 98°C aus dem Maischeplan ausgeschaltet und die Leistung aus dem Parameter "Leistung ab Übergang" wird verwendet. Dieser Parameter ist in der Voreinstellung aktiviert und ermöglicht ein wallendes Kochen.

Wenn der Parameter "Deaktiviere PID zum Kochen" nicht aktiviert ist, wird die benötigte Leistung ab Erreichen der Ziel-Temperatur (hier 98°C) durch den PID Controller berechnet. Die berechnete Leistung oberhalb der Ziel-Temperatur ist 0%. Das Kochfeld schaltet ab und verhindert ggfs. ein Überkochen.

### Leistung bei Sensorfehler [0-100%]

Tritt ein Sensorfehler auf, bspw. ein Sensor ist nicht verbunden oder ein Defekt, kann die Leistung vom Kochfeld für diesen Fehlerfall angepasst werden. Ein Wert von 100% ignoriert den Sensorfehler.

Wird die Leistung bei Sensorfehler auf 0% eingestellt, dann pausiert der Brautomat den Maischeprozess. Das Kochfeld wird abgeschaltet. Ist der Rasttimer gestartet, wird der Timer angehalten.

Der Brautomat startet nach 3 aufeinanderfolgenden fehlerhaften Sensorwerten die Fehlerbehandlung. Die Sensoren werden ca. alle 2000ms abgefragt. Das heißt, es vergehen zwischen der Toast-Nachricht Sensorfehler und dem Start der Fehlerbehandlung ca. 6 Sekunden.

Meldet ein fehlerhafter Sensor wieder korrekte Sensorwerte, führt der Brautomat den Maischeprozess automatisch fort.

_Hinweis: der Parameter Max. Leistung wird durch den Parameter Leistung bei Sensorfehler nicht überschritten. Wurde bspw. Max. Leistung IDS auf 75% und Leistung bei Sensorfehler auf 100% konfiguriert, dann ist die effektive maximale Ausgangsleistung auch bei einem Sensorfehler 75%._

## PID Manager

### Intervall (SampleTime)

Dieser Parameter gibt an, in welchem zeitlichen Abstand die benötigte Leistung berechnet wird. Der Standardwert ist 3000ms. Das Intervall wird für die PID-Berechnung und im AutoTune eingesetzt. In Brauküchen mit kleinem Volumen ist ein kleineres Intervall ggfs. vorteilhaft. Je kleiner das Intervall, desto häufiger wird die benötigte Leistung berechnet. Dies führt zu einer höheren Auslastung des Brautomaten. Wertebereich 1000 - 7000ms.

### PID Algorithmus

Es stehen drei Optionen zur Auswahl

* manueller PID Modus: diese Auswahl erlaubt die Verwendung eigener Kp-, Ki- und Kd-Werte
* IDS PID Modus: diese Auswahl berechnet anhand der Werte Ku und Pu aus dem AutoTune Prozess die Werte für Kp, Ki und Kd für GGM IDS Induktionskochfelder
* Relay PID Modus: diese Auswahl berechnet anhand der Werte Ku und Pu aus dem AutoTune Prozess die Werte für Kp, Ki und Kd für relaisbasierte Kochfelder

## AutoTune

### AutoTune noiseband

Dieser Parameter wird für die Erkennung von Extremwerten (Max, Min) verwendet. AutoTune noiseband gibt an, welche Mindeständerung zum vorherigen Messwert vorhanden sein muss, um einen neuen Extremalwert zu erkennen. Der Standardwert für die GGM IDS beträgt 0.2. Für einen Nachgusskocher über ein Relais oder SSR beträgt der Standardwert 0.5. Wertebereich: 0.1 - 1.0

### AutoTune Datenreihe (lookback)

Dieser Parameter gibt an, wie viele Messwerte für die Ermittlung von Extremalwerten betrachtet werden sollen. Der Standardwert beträgt 50 Messwerte. Zu beachten gilt, dass maximal 100 Messwerte konfiguriert werden können. Bei sehr gut wärmeisolierten Braukesseln kann eine Erhöhung auf 100 Messwerte in der Datenreihe die Erkennung von Extremalwerten in der Abkühlphase vom AutoTune Prozess verbessern.

### AutoTune debug

Dieser Schalter aktiviert das AutoTune Protokoll. Das Protokoll bietet Hinweise, wenn der AutoTune Prozess nicht erfolgreich abgeschlossen werden kann. Bei aktiviertem AutoTune debug steht das Protokoll auch beim Brauen zur Verfügung.

_Diese 10 Parameter sind je Brauanlage individuell einzustellen. Die Parameter können während eines Maischeprozesses geändert werden. Mit einem Testlauf mit einer typischen Menge Wasser können die Parameter vor einem Brautag leicht ermittelt werden._

## Profile

Der Brautomat kann Hardware Profile verwalten. Profile können verwendet werden, wenn unterschiedliche Kessel vorhanden sind. Anwender mit unterschiedlich großen Kesseln können über Profile den Kessel für den Brautag auswählen, anstatt manuell alle Parameter neu eingeben zu müssen. Ein Hardware Profil beinhaltet alle  Einstellungen von einem Kessel.

Profile werden im Ordner /Profile gespeichert. Profile ermöglichen einen schnellen und einfachen Wechsel zwischen verschiedenen Kesseln. Die Funktion Speichern erstellt eine Profildatei mit den o.g. Parametern, während die Funktion Löschen die Profildatei aus dem Flash-Speicher entfernt.

Das Standardprofil beim Start des Brautomaten ist immer das zuletzt ausgewählte Profil.

## Berechnung der erforderlichen Leistung

_Der folgende Absatz beschreibt ein optionales Thema._

Beim Maischen ist ein Anstieg der Maischetemperatur von 1°C pro Minute erwünscht. Die benötigte Leistung P der GGM IDS kann wie folgt berechnet werden:

erforderliche Leistung P = m[kg] * 75\
vorhandene Leistung der GGM IDS P = 3500\
Faktor in Prozent = erforderliche Leistung : vorhandene Leistung

### Beispiel 1

Im ersten Beispiel ist eine Schüttung mit 9kg und ein Hauptguss mit 35l gegeben. Daraus ergibt sich eine Gesamtmasse von

```json
m = 9 + 35 = 44
```

Die Masse m = 44 setzen wir in die vereinfachte Formel ein:

```json
P = 44 * 75 = 3300
```

Es sind näherungsweise 3300 W/min erforderlich, um ein Volumen von 44kg pro Minute um 1°C zu erhitzen. Wird die GGM IDS mit 100% Leistung betrieben, also 3500W, wird die Temperaturdifferenz von 1°C in der Maische in weniger als 60 Sekunden erreicht. Um das Ziel 1°C Temperaturanstieg in der Maische pro Minute zu erreichen, muss die maximale Leistung der GGM IDS reduziert werden:

```json
3300 : 3500 = 0,94 das entspricht 94%
```

Die GGM IDS müsste mit ca. 94-95% Leistung betrieben werden (Sonderfunktion IDS:94).

### Beispiel 2

Im zweiten Beispiel ist eine Schüttung mit 5,9kg und ein Hauptguss von 26,5l gegeben. Die Gesamtmasse beträgt 32,4kg.

```json
m = 5,9 + 26,5 = 32,4
```

Die Masse m = 32,4 setzen wir in die vereinfachte Formel ein:

```json
P = 32,4 * 75 = 2430
2430 : 3500 = 0,69
```

Es sind näherungsweise 2430 W/min erforderlich, um ein Volumen von 32,4kg pro Minute um 1°C zu erhitzen. Die GGM IDS müsste mit ca. 69-70% Leistung betrieben werden (Sonderfunktion IDS:70).

### Vereinfachung Masse * 75?

```json
P = m[kg] * c * T / (t * w)
```

m   entspricht Masse Hauptguss + Schüttung\
c   entspricht der spezifischen Wärmekapazität Maische. Der Wert 3600 wird eingesetzt (Einheit Joule/(kg * °C))\
T   entspricht der Temperaturdifferenz. Wir verwenden 1°C Differenz\
t   entspricht der Zeit. Wir setzen als Zeit 60sek in die Gleichung ein\
w   der Wirkungsgrad Induktion (80-90%). Es wird der Wert 0.8 in die Gleichung eingesetzt

```json
c * T / (t * w) = 3600 * 1 / (60 * 0.8) = 75
```

Mit dieser Vereinfachung erhalten wir den Wert 75.

### spezifische Wärmekapazität

Die hier verwendete spez. Wärmekapazität 3600 hat eine Fehlertoleranz von ca. 2% (Abhängig von Temperatur und Extrakt). Malzschrot hat eine Wärmekapazität von 1570 J/(kg*°C), Wasser hat im Temperaturbereich 50-80°C eine Wärmekapazität von 4190 J/(kg*°C). Unter der Annahme, der Wassergehalt im Malzschrot beträgt 6%: (Zahlen aus Beispiel 1)

```json
9 * 94% * 1570 + (35 + 9 * 6%) * 4190 = 8,97 * 1,57 + 35,54 * 4,19 = 14,08 + 148,91 = 13282,2 + 148912,6 = 162194,8 / 44 = 3686,25 J pro kg und Grad Celsius
```

Siehe auch [Braumagazin](https://braumagazin.de/article/berechnungen-in-der-brauerei/)
