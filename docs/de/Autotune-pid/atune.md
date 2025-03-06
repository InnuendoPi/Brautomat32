# AutoTune Prozess

Der AutoTune-Prozess ermittelt geeignete Parameter für die Brauanlage, damit die Temperaturregelung im Maischprozess möglichst genau durchgeführt werden kann. Der Fokus liegt dabei auf den IST-Temperaturen und den dazugehörigen SOLL-Temperaturen. In der Praxis bedeutet dies, dass Über- und Unterschwingen minimiert werden sollen.

Hinweis: Ein Überschwingen (Überschreiten der Solltemperatur) von 0,5°C ist normal. Je nach Isolierung des Kessels und zugeführter Induktionsenergie steigt die Temperatur auch nach Abschalten des Induktionskochfeldes noch leicht an.

![AutoTune4](/docs/img/IDS-AutoTune-Ziel.jpg)

Die folgende Beschreibung der PID-Werte dient lediglich als Hilfe bei der Verwendung der Firmware und kann übersprungen werden. Der AutoTune-Prozess wird ab "Der AutoTune-Prozess: Schritt für Schritt" beschrieben.\
Der PID-Regler steuert die Leistung der Induktivität. Es ist wichtig, geeignete P-, I- und D-Werte zu bestimmen. Die PID-Werte sind für jede Brauanlage und Umgebung individuell. AutoTune ist ein Verfahren, das bei der Ermittlung geeigneter Werte hilft. Die erforderliche Leistung der Induktionsplatte, um von der Ist-Temperatur zur Soll-Temperatur zu gelangen, wird aus der Summe der drei Werte berechnet: Benötigte Leistung = P + I + D\
Wenn geeignete PID-Werte ermittelt wurden, wird mit dem Parameter Intervall (SampleTime) festgelegt, in welchen Zeitabständen die erforderliche Leistung berechnet werden soll.

## Der P-Wert

Dieser Parameter wirkt auf die Differenz zwischen Ist- und Solltemperatur. Je größer die Differenz zwischen Ist- und Solltemperatur ist, desto stärker heizt die Induktionsplatte mit dem P-Anteil. Ist die Solltemperatur erreicht oder überschritten, ist der P-Anteil gleich 0. Ein sehr hoher P-Wert bewirkt ein starkes Über- bzw. Unterschwingen.

## Der I-Wert

Der I-Wert steigt beim Aufheizen der Induktionsplatte von Null kontinuierlich an. Je länger die Induktionsplatte braucht, um von der Ist- auf die Solltemperatur zu kommen, desto größer wird der I-Wert. Zusammen mit dem P-Wert ergibt sich folgende Addition: Bei Annäherung an die Zieltemperatur wird der P-Wert kleiner und der I-Wert größer. Die Zieltemperatur wird nur über den I-Wert erreicht. Oberhalb der Zieltemperatur wird der I-Wert wieder kleiner. Der I-Wert erzeugt ein Überschwingen.

## Der D-Wert

Der D-Wert ist ein Dämpfer, der die Schwingungen der ersten beiden Anteile P und I dämpft. Ein zu großer D-Anteil verlangsamt das Aufheizen und Abkühlen der Induktionsplatte. Dieser Wert kann auch Null sein.

## Intervall (SampleTime)

Die PID-Berechnung erfolgt kontinuierlich. Das Intervall beschreibt den Zyklus. In jedem Intervall wird die Differenz zwischen Ist- und Solltemperatur sowie die Änderung der Isttemperatur ermittelt. Ein zu kleines Intervall (z.B. 1000ms) führt zu einem "Flattern" der Isttemperatur im Sinne von Rundungsfehlern +- 0,0625°C bei 12bit Auflösung. Ein zu großes Intervall (z.B. 7000ms) führt zu einem trägen Verhalten. Ein Intervall von 2000ms oder 3000ms sollte in den meisten Umgebungen gut geeignet sein. Als Intervallgröße kann nur ein Vielfaches von 1000 verwendet werden (1000, 2000, ... 7000).
