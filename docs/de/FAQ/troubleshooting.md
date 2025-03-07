# Troubleshooting

Tipps & Tricks ... to be continued ...

## WLAN

Die WLAN Reichweite der ESP Microcontroller ist begrenzt. Der ESP32 mit der Firmware Brautomat32pIO bietet unter identischen Bedingungen die beste Leistung. Unter System -> Reset wird die aktuelle WLAN Signalstärke angezeigt. Je näher der Wert an null liegt, desto stärker ist das Signal. Werte von -50dBm bis -75dBm sind sehr gut. Ein Wert kleiner als -80dBm ist schlecht und führt zu Problemen. In Brauküchen mit schwacher WLAN Signalstärke kann das PID Intervall bspw. auf 7000ms erhöht werden, um die Datenmenge zu verkleinern. Auch sollte beim schwacher Signalstärke nur ein aktiver Browser genutzt werden (siehe hierzu Server Sent Events weiter unten). Ein passender Standort für den Brautomat im WLAN (oder ein zus. Repeater) ist wichtig. Eine gute Signalstärke hat nicht zwangsläufig, aber in den meisten Fällen eine höhere und stabilere Datenübertragungsrate zur Folge.

Das Web Interface vom Brautomat baut auf dem bootstrap Framework 4.6 mit Javascript auf. Die benötigten Dateien (css, js und fonts) liegen im Flash Speicher vom Brautomat. Das hat einen Vor- und einen Nachteil. Der Vorteil ist, dass keine Internetverbindung für das Laden der erforderlichen Dateien beim Brauen benötigt wird. Der Nachteil ist, dass im lokalen WLAN der Brautomat jedem verbundenen Browser die Framework Dateien einmalig bei Verbindungsaufbau komprimiert bereitstellen muss. Wird eine Datei bspw. wegen schwacher WLAN Signalstärke nicht korrekt und nur sehr langsam übermittelt, funktioniert das Web Interface nicht korrekt. Das WebInterface baut sich dem Fall nicht korrekt (es schaut dann wie eine Textseite aus) oder unvollständig auf (die Tabellen bleiben leer). In den meisten Fällen reicht ein Reload der Webseite aus (Strg-Shift-R).

Nach einem Firmware Update sollte der Brautomat immer ausgeschaltet und der Browser Cache gelöscht werden.

## Browser

Getestet wird der Brautomat auf Win11 mit MS Edge und Firefox in der jeweils aktuellen Version, sowie auf iOS Geräten mit MS Edge und Safari. Bevorzugt verwendet wird während der Entwicklung MS Edge. Unabhängig vom Browser muss die automatische Audiowiedergabe für die Toasts Nachrichten (Audio) für die Adresse des Brautomat aktiviert werden. Die Adresse vom Brautomat sollte ebenfalls in blockierenden Browser Plugins in den Ausnahmen aufgenommen werden. Veraltete Browser (bspw IE8) werden nicht unterstützt.

Der Browser Cache kann zu fehlerhaften Anzeigen Webfront führen. Das Webfrontend vom brautomat legt beim Aufruf no-cache und no-store fest, jedoch ignorieren unterschiedliche Browser diese Anweisungen. Den Browser Cache manuell löschen wird häufig mit der Tastenkombination Strg - Shift - Entf gestartet.

## Server Sent Events & Energiesparpläne und automatisches Sperren von Clients

Der Brautomat sendet Daten über Server Sent Events an verbundene und aktive Browser. Bis zu 8 Geräte können sich zeitgleich mit dem Brautomat verbinden. Energiesparpläne oder automatisches Sperren können eine Verbindung unterbrechen. Der Brauprozess wird bei einem Verbindungsabbruch nicht angehalten oder abgebrochen! Der Brautomat arbeitet ganz normal weiter. Nicht verbundene Browser erhalten lediglich keine neuen Informationen. Unter Informationen sind Temperaturen, aktueller Maischeschritt, aktuelle Leistungen, Charts etc. zu verstehen. Eine Server Sent Events Verbindung zum Brautomat ist der "Datenkanal", durch den die Informationen zum Browser gesendet werden. Wird die Verbidnung zum Brautomat unterbrochen, wird der Datenkanal beendet. Ein aktiver Browser erkennt, wenn sein Datenkanal beendet ist und meldet sich am Brautomat nach kurzer Zeit automatisch neu an.\
Anmeldungen am Brautomat haben keine Reihenfolge oder Prioritäten. Es hat keine Auswirkung, ob der Webbrowser vom PC oder das Tablet zuerst oder zuletzt verbunden wird. Der Brauprozess kann auf Gerät A gestartet, auf Gerät B pausiert, auf Gerät C beobachtet und auf Gerät D beendet werden. Sind alle vier Geräte aktiv und verbunden, zeigen alle Browser (nahezu) zeitgleich identische Informationen an, weil jedes dieser vier Geräte ein einen eigenen Datenkanal besitzt.

## Rezeptimport

Der Rezeptimport kann aufgrund des begrenzten Speichers keine Rezepte mit PDF, Bildanhängen oder sehr langen Texten bzw. Erläuterungen importieren. Bei MaischeMalzundMehr Rezepten ist der Import in kbh2 und dann ein Export im Format Brautomat eine einfache und gute Lösung. Rezepte aus Brewfather sind ebenfalls importierbar.

## AutoTune

Beim AutoTune Prozess sollte der Fokus nicht auf Perfektion i. S. v. 0.1°C liegen. Die Abweichung der Sensoren ist meist größer. Der Parameter AutoTune noiseband (Streuung um den Zielwert) ist mit einem Wert von 0.3 ausreichend nah an der Zieltemperatur, um die Zieltemperatur sehr gut zu treffen und über die Rastdauer zu halten.\
Sehr gut isolierte Maische- Sudkessel benötigen einen größere AutoTune Datenreihe. In der Datenreihe werden Messwerte in zeitlicher Abfolge festgehalten. Am Anfang steht der aktuelle Messwert und ganz am Ende der Reihe steht der älteste Messwert. Der Wert AutoTune Datenreihe besagt, "auf wie viele Werte vor der aktuellen Messung schaut der Brautomat (in die Vergangenheit) zurück, um eine Temperaturänderung von mindestens AutoTune noiseband (0.3) zu erkennen". Für einen gut isolierter Kessel sollte die Datenreihe mit 75 Messpunkten befüllt werden. Bei einem nicht isoliertem Kessel reicht eine Datenreihe von 50 Messpunkten aus. Diese zwei Parameter müssen je nach Umgebung angepasst werden. Die Standardvorgaben sollten in den allermeisten Fällen sehr gute Werte ermitteln.

## Sensoren und Kalibrierung

Sensoren vom Typ Dallas DS18B20 werden auf sehr vielen Plattformen zu sehr unterschiedlichen Preisen angeboten. Die Sensorkalibrierung hilft Abweichungen zu minimieren. In jedem Fall sollte der Sensor der IDS kalibriert werden, weil Abweichungen von mehreren Grad Celsius (je nach Herkunft) möglich sind.\
Wenn ein Sensor regelmäßig im Web Interface mit Sensor Error (Toasts) gemeldet wird, sollte zunächst ein anderer Anschluss für den Sensor ausprobiert werden. Die drei Anschlüsse auf der Platine für die Sensoren sind gleichwertig und haben keine vorgegebene Reihenfolge. Bei Sensorproblemen sind die Lötpunkte der 3er-Schraubklemmblöcke und der Widerstand 4.7kOhm (auf der Platine unter dem ESP) zu prüfen.

## GGM IDS Pin Interrupt

Der Pin Interrupt liefert einen Rückkanal vom Induktionskochfeld zum Brautomat. Dieser Rückkanal wird mit einem Interrupt GPIO vom ESP mit dem Brautomat verbunden. Ein Interrupt unterbricht den Programmablauf und prüft die Interrupt Bedingung.\
Das Induktionkochfeld GGM IDS sendet fortlaufend etwa alle 300 Millisekunden einen Interrupt: entweder das Signal "alles ok" (0000) oder einen ErrorCode (bspw. 0010 für kein Kessel bzw. leerer Kessel).

Ausschnitt serielle Ausgabe am Pin Interrupt:

```text
10:00:00:174 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:543 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:864 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:209 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:554 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
```

Die serielle Ausgabe am Pin Interrupt zeigt anschaulich, dass das Induktionskochfeld permanent "alles ok" sendet. Der Brautomat unterbricht aber mit jedem Interrupt (etwa alle 300ms) seine Arbeit beim Brauen und überprüft die Interrupt Bedingung. Der Pin Interrupt sollte daher nur zur Fehlersuche eingesetzt werden.

Im Handbuch der GGM IDS2 sind folgende Interrupts beschrieben:

E0 kein/leerer Kessel (0010 2)\
E1 Stromkreisfehler (0011 3)\
E3 Überhitzung (0101 5)\
E4 Temperatursensor (0110 6)\
E7 Niederspannungsschutz (1001 9)\
E8 Überspannungsschutz (1010 10)\
EC Bedienfeld (1110 14)\

Leider sind die binären Zeichenfolgen nicht bekannt. Lediglich E1 kein/leerer Kessel ist bekannt. Die Zeichenfolgen den Klammern wurden durch Tests ermittelt, sind aber nicht sicher.

Der Pin Interrupt sollte nur bei Problemen belegt werden. Für das erste Induktionskochfeld ist vorbelegt der Pin D5. Im normalen Braubetrieb ist kein Pin Interrupt erforderlich.
