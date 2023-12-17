# AutoTune Prozess

Der AutoTune Prozess ermittelt passende Parameter für die Brauanlage, damit die Temepratursteuerung im Maischeprozess so genau wie möglich durchgeführt werden kann. Im Fokus stehen die IST- und die zugehörigen SOLL-Temperaturen. In der Praxis bedeutet dies, dass ein Über- und Unterschwingen minimiert werden soll.

_Hinweis: ein Überschwingen (ein Überschreiten der Zieltemperatur) um +0.5°C ist normal. Je nach Kessel-Isolierung und zugeführter Induktionsenergie wird die Temperatur auch nach dem Ausschalten vom Induktionskochfeld weiter leicht ansteigen._

![AutoTune4](/docs/img/IDS-AutoTune-Ziel.jpg)

Die folgende Beschreibung der PID-Werte ist lediglich eine Hilfe zur Verwendung der Firmware und kann auch übersprungen werden. Der AutoTune Prozess wird ab "Der AutoTune Prozess: Schritt für Schritt" beschrieben.\
Der PID-Controller steuert die Leistung der Induktonsplatte. Es ist wichtig, geeignete P, I und D Werte zu ermitteln. Dabei sind die PID Werte je Brauanlage und Umgebung individuell. AutoTune ist ein Prozess, der bei der Ermittlung geeigneter Werte unterstützt. Die benötigte Leistung der Induktionsplatte, um von der Ist-Temperatur zur Zieltemperatur zu gelangen, wird aus der Summe der drei Werte berechnet: Erforderliche Leistung = P + I + D\
Sind geeignete PID Werte ermittelt, bestimmt der Parameter Intervall (SampleTime), in welcher Taktung die benötigte Leistung berechnet werden soll.

## Der P-Wert

Dieser Parameter wirkt auf der Basis Unterschied zwischen Ist und Soll. Je größer der Unterschied zwischen der Ist- und der Zieltemperatur ist, desto stärker heizt die Induktionsplatte mit dem P-Anteil. Ist die Zieltemperatur erreicht oder überschritten, ist der P-Anteil gleich 0. Ein sehr hoher P-Wert bewirkt ein starkes Über- bzw. Unterschwingen.

## Der I-Wert

Der I-Wert wird, während die Induktionsplatte heizt, bei null beginnend fortlaufend größer. Je länger die Induktionsplatte von der Ist-Temperatur zur Zieltemperatur benötigt, desto größer wird der I-Wert. Zusammen mit dem P-Wert ergibt sich nun folgende Addition: Der P-Wert wird bei Annäherung an die Zieltemperatur kleiner und der I-Wert größer. Nur über den I-Wert wird die Zieltemperatur erreicht. Der I-Wert wird oberhalb der Zieltemperatur wieder kleiner. Der I-Wert erzeugt ein Überschwingen.

## Der D-Wert

Der D-Wert ist ein Dämpfer, der die Schwingungen der ersten beiden Anteile P und I mindert. Ein zu starker D-Anteil verlangsamt das Auf- und Nachheizen der Induktionsplatte. Dieser Wert kann auch null sein.

## Intervall (SampleTime)

Die PID Berechnung findet fortlaufend statt. Das Intervall beschreibt die Taktung. In jedem Intervall wird die Differenz zwischen Ist- und Ziel-Temperatur sowie die Änderung der Ist-Temperatur ermittelt. zur  Ein zu kleines Intervall (bspw. 1000ms) führt zu einem "flattern" der Ist-Temperatur i. S. v. Rundungsfehlern +- 0.0625°C bei 12bit Auflösung. Ein zu großes Intervall (bspw. 7000ms) führt zu einem trägen Verhalten. Ein Intervall von 2000ms oder 3000ms sollte in den meisten Umgebungen sehr gut passen. Als Intervallgröße sollte ausschließlich ein Vielfaches von 1000 verwendet werden (1000, 2000, ... 7000).
