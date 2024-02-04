# Parameter GGM IDS

## Temperatursteuerung

### Max. Leistung IDS

Dieser Parameter beschreibt die maximale Ausgangsleistung der GGM IDS. Der Standardwert ist 100%. Dieser Parameter kommt zum Einsatz, wenn ein kleiner Kessel mit bspw. 20l Volumen auf der GGM IDS genutzt wird. Durch Reduzierung der Leistung der IDS kann ein zu schnelles Aufheizen und ein Überkochen vermieden werden. Die Parameter "Max. Leistung IDS" und "Leistung kochen" sollten beim Einsatz von kleineren Braukesseln zusammen reduziert werden.

### Temperatur delta zum Ziel

Dieser Parameter beschreibt, ab welcher Differenz zur Rasttemperatur (Ziel) der Timer einer Rast starten soll. Der Standardwert ist 0.3°C. Im Maischeprozess ermöglicht der PID Controller eine sehr genaue Temperatursteuerung. Eine Rasttemperatur wird mit +-0.2°C genau erreicht, indem der PID Controller die Energiezufuhr vor dem Erreichen der Rasttemperatur kontrolliert reduziert. Die Reduzierung der Energiezufuhr hat als Nebeneffekt, dass der letzte Schritt zum Erreichen der Rasttemperatur länger dauert. Genau an dieser Stelle kommt der Parameter "delta zum Ziel" ins Spiel: soll bspw. eine Rasttemperatur von 63°C erreicht werden und ist die aktuelle Temperatur 62.7°C, dann würde mit einem Temperatur delta zum Ziel von 0.3°C der Rasttimer starten. Bezogen auf die individuelle Brauanlage kann mit delta zum Ziel eine ungewollte Verlängerung der Rastzeit vermieden werden.

### Übergang zum Kochen [°C]

Dieser Parameter beschreibt die Temperatur, ab der der PID Controller das Kochen der Würze erkennen soll. Der Standardwert ist 95°C. Dieser Parameter beschreibt nicht, ab welcher Temperatur die Würze zu kochen beginnt. Dieser Parameter beschreibt die Temperatur, ab der der Brautomat den PID Controller deaktiviert und mit einer vorgegebenen Leistung "Leistung ab Übergang" das Induktionskochfeld steuert. Anders als bei den Rast-Temperaturen ist beim Kochen nicht das genaue Erreichen und halten der Temperatur das Ziel, sondern das wallend Kochen. Anstatt also die Leistung zu reduzieren, wird beim Kochen das Induktionskochfeld mit einer konstanten Leistng betrieben.

### Leistung ab Übergang [%]

Dieser Parameter beschreibt die Ausgangsleistung der IDS ab der Temperatur Kochen. Der Standardwert ist 100%. Mit dem Parameter "Übergang zum Kochen" ist eine Temperatur festgelegt worden, ab der der PID Controller deaktiviert wird. Mit dem Parameter "Leistung ab Übergang" wird nun die feste Ausgangsleistung der IDS vorgegeben. Wird ein Braukessel mit einem Volumen über 35l oder mehr eingesetzt, ist der Standardwert 100% eine passende Wahl. In Brauküchen mit kleinen Kesseln kann 100% Energiezufuhr ein Überkochen bewirken. In diesem Fall kann die maximale Energiezufuhr mit diesem Parameter auf bspw. 75% reduziert werden.

### Temperatur Kochen [°C]

Dieser Parameter beschreibt die Temperatur, ab der die Würze wallend kocht. Der Standardwert ist 98°C und entspricht etwa einem Standort in 500m Höhe über NN. Mit diesem Parameter wird der Start einer Rast Kochen beeinflusst. Für den Rezeptimport wird dieser Parameter als Temperatur Kochen verwendet.

### Leistung bei Sensorfehler [0-100%]

Tritt ein Sensorfehler auf, bspw. ein Sensor ist nicht verbunden oder ein Defekt, kann die Leistung der IDS für diesen Fehlerfall angepasst werden. Ein Wert von 100% ignoriert den Sensorfehler.

Wird die Leistung bei Sensorfehler auf 0% eingestellt, dann pausiert der Brautomat den Maischeprozess. Die GGM IDS wird abgeschaltet. Ist der Rasttimer gestartet, wird der Timer angehalten.

Der Brautomat startet nach 5 aufeinanderfolgenden fehlerhaften Sensorwerten (-127.0°C) die Fehlerbehandlung. Die Sensoren werden ca. alle 1000ms abgefragt. D.h. es vergehen zwischen Toast Nachricht Sensorfehler und Start der Fehlerbehandlung ca. 5 Sekunden.

Meldet ein fehlerhafter Sensor wieder korrekte Sensorwerte, führt der Brautomat den Maischeprozess automatisch fort.

_Hinweis: der Parameter Max. Leistung IDS wird durch den Parameter Leistung bei Sensorfehler nicht überschritten. Wurde bspw. Max. Leistung IDS auf 75% und Leistung bei Sensorfehler auf 100% konfiguriert, dann ist die effektive maximale Ausgangsleistung der IDS auch bei einem Sensorfehler 75%._

### Temperatur Einmaischen [°C]

Dieser Parameter ist für den Rezeptimport und beschreibt die Standardtemperatur für das Einmaischen. Dieser Parameter wird nur dann verwendet, wenn beim Rezeptimport keine Einmaisch-Temperatur angegeben ist.

### Temperatur Abmaischen [°C]

Dieser Parameter ist für den Rezeptimport und beschreibt die Standardtemperatur für das Abmaischen. Dieser Parameter wird nur dann verwendet, wenn beim Rezeptimport keine Abmaisch-Temperatur angegeben ist.

### Temperatur VWH [°C]

Dieser Parameter ist für den Rezeptimport und beschreibt die Standardtemperatur für eine Vorderwürzenhopfung. Häufig wird bei Rezepten keine Temperatur für die VWH angegeben. Eine Temperaturangabe ist beim Brautomat erforderlich. Ist im Rezept eine Temnperatur angegeben, wird diese beim Import verwendet.

### Temperatur WPH [°C]

Dieser Parameter ist für den Rezeptimport und beschreibt die Standardtemperatur für eine Whirlpoolhopfung. Häufig wird bei Rezepten keine Temperatur für die WPH angegeben. Eine Temperaturangabe ist beim Brautomat erforderlich. Ist im Rezept eine Temnperatur angegeben, wird diese beim Import verwendet.

## PID Manager

### Intervall (SampleTime)

Dieser Parameter gibt an, in welchem zeitlichen Abstand eine Berechnung der benötigten Leistung ermittelt werden. Der Standardwert ist 3000ms. Das Intervall wird zur PID Berechnung und im AutoTune eingesetzt. In Brauküchen mit kleinem Volumen ist ein kleineres Intervall ggfs. vorteilhaft. Je kleiner das Intervall, desto häufiger werden Sensoren abgefragt und PID Werte berechnet. Dies führt zur einer höheren Auslastung des Brautomaten. Wertebereich 1000 - 7000ms

### PID Algorithmus

## AutoTune

### AutoTune noiseband

Dieser Parameter wird für die Erkennung von Extremwerten (Max, Min) verwendet. AutoTune noiseband gibt an, welche Mindeständeurng zum vorherigen Messwert vorhanden sein muss, um einen neuen Extremalwert zu erkennen. Der Standardwert für die GGM IDS beträgt 0.2. Für einen Nachguss Kocher über ein Relais oder SSR beträgt der Standardwert 0.5. Wertebereich: 0.1 - 1.0

### AutoTune Datenreihe

Dieser Parameter gibt an, wie viele Messwerte für die Ermittlung von Extremalwerten betrachtet werden sollen. Der Standardwert beträgt 50 Messwerte. Zu beachten gilt, dass maximal 100 Messwerte konfiguriert werden können. Bei sehr gut wärmeisolierten Braukesseln (bspw. mit Armaflex) kann eine Erhöhung auf 100 Messwerte in der Datenreihe die Erkennung von Extremalwerten in der Abkühlphase vom AutoTune Prozess verbessern.

### AutoTune debug

Dieser Schalter aktiviert das AutoTune Protokoll. Das Protokoll bietet Hinweise, wenn der AutoTune Prozess nciht erfolgreich abgeschlossen werden kann. Bei aktiviertem AutoTune debug steht das Protokoll auch beim Brauen zur Verfügung.

_Diese 10 Parameter sind je Brauanlage individuell einzustellen. Die Parameter können während eines Maischeprozesses geändert werden. Mit einem Testlauf mit einer typischen Menge Wasser können die Paramter vor einem Brautag leicht ermittelt werden._

## Profile

Der Brautomat kann Hardware Profile verwalten. Profile werden nur genutzt, wenn unterschiedliche MaischeSud Kessel vorhanden sind. Anwender mit unterschiedlich großen MaischeSud Kesseln können über Profile den MaischeSud Kessel für den Brautag auswählen, anstatt manuell alle Parameter neu eingeben zu müssen. Ein Hardware Profil beinhaltet alle benötigten EInstellungen von einem MaischeSud Kessel:

* die PID-Controller EInstellungen
* die maximale Leistung IDS
* Leistung ab Übergang

Profile werden im Ordner /Profile gespeichert. Profile ermöglichen einen schnellen und einfachen Wechsel zwischen verschiedenen MaischeSud Kessel. Die Funktion Speichern erstellt eine Profildatei mit den o.g. Paramter, während die Funktion Löschen die Profildatei aus dem Flash-Speicher entfernt.

Das Standardprofil beim Start des Brautomaten ist immer das zuletzt ausgewählte Profil.
