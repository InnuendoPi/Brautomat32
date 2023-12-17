# Kalibrierung

Sensoren vom Typ Dallas DS18B20 haben teilweise Abweichungen von der tatsächlichen Temperatur. In den techn. Spezifikationen der Hersteller wird oft eine Genauigkeit von +-0.5°C im Bereich von -10°C bis 85°C angegeben. Ferner werden die Sensoren als kalibriert bezeichnet.

Mithilfe einer 2-Punkte Kalibrierung können Abweichungen korrigiert werden. Die Kalibrierung vom Brautomat ist eine lineare Korrektur. Zur Kalibrierung der Sensoren wird ein geeichtes Thermometer benötigt. Der Braukessel wird mit einer typischen Menge Wasser befüllt und auf 40°C erhitzt. Der Unterschied zwischen dem Sensorwert und dem geeichten Thermometer wird im Parameter "Offset 1 \[40°C]" eingetragen. Dieser Vorgang wird bei 78°C wiederholt und der Unterschied wird im Parameter "Offset 2 \[78°C]" eingetragen. Alle Sensormesswerten werden künfig anhand dieser Korrektur ausgegeben.

Zur Kalibrierung wird das Temperatursensor in den Modus hohe Auflösung versetzt (12bit Auflösung bzw. 0.0625°C). Eine Kalibrierung über das Web Interface besteht aus 60 Messproben. Der Zeitbedarf beträgt fast genau 60 Sekunden für eine Kalibrierung. Als Ergebnis der Temperaturmessung wird der Mittelwert der 60 Messproben genommen. Ein Offset ist die Differenz zwischen der tatsächlichen Temperatur und dem Mittelwert.

In vielen Fällen reicht eine 1-Punkt-Kalibrierung im Eisbad aus, weil die Abweichung der Sensoren DS18B20 meistens kontant verläuft.

## Vorgehensweise Kalibrierung ohne Referenz-Thermometer

Steht ein Referenz-Thermometer nicht zur Verfügung, kann eine Kalibrierung mit einem Eisbad und einem Kochvorgang durchgeführt werden.\
Es wird für den unteren Messbereich ein Gefäss mit 50% Eiswürfel und 50% kaltem Wasser benötigt. Ein Eisbad hat eine (fast exakte) Temperatur von 0.0°C. Das Eiswasser muss kontinuierlich gerührt werden, vorzugsweise mit einem Magnetrührer. Im Eisbad wird die Kalibrierung auf 0°C gestartet.

Der zweite Punkt für eine Kalibrierung kann über die Höhe über Normalhöhennull und dem damit verbundenen Siedepunkt ermittelt werden. Bei 0m über NHN bzw. bei einem atmosphärischen Druck von 1.013bar beträgt die Siedepunkttemperatur 100.l0°C. Mit steigender Höhe nimmt der atmosphärische Druck ab und somit sinkt die Siedepunkttemperatur. Zunächst muss die örtliche NHN bspw. über google earth ermittelt werden. Der Siedepunkt sinkt je Meter über NHN um 0.003354°C. Auf der Websiete von [rechneronline](https://rechneronline.de/barometer/siedepunkt.php) wird der Siedepunkt über die Höhe über NHN ausgerechnet. Viele Smartphones bieten die Information Höhe in der Kompass- oder Navi-App ebenfalls. Die Höhe über NHN sollte mit einer Genauigkeit von etwa +-20m ermittelt werden. Das entspricht einer Verändeurng der Siedepunkttemperatur von 0.06708°C und damit weit außerhalb der Genauigkeit der Steuerung Brautomat. Die zweite Punkt Kalibrierung wird mit einem MaischeSud Kessel, einem Rührwerk und dem zuvor ermittelten lokalen Siedepunkt durchgeführt. Die Zieltemperatur ist dementsprechen die Siedepunkttemperatur. Es ist darauf zu achten, dass die Siedepunkttemperatur erreicht ist und über mindestens eine Minute gehalten wird, bevor die Kalibrierung für den oberen Wertebereich gestartet wird. Außerdem ist es sehr wichtig, dass das Induktionskochfeld mit konstanter Leistung eingeschaltet bleibt.

Offset #1 (unterer Wertebereich) ist die Differenz von 0.0°C (Eisbad) gegenüber dem Mittelwert aus dem ersten Durchgang Kalibierung. Offset #2 (oberer Wertebereich) ist die Differenz zwischen Siedepunkt und dem Mittelwert aus dem zweiten Durchgang Kalibrierung.

## Vorgehensweise Kalibrierung mit Fieber-Thermometer

Ein Fieber-Thermometer ist ein gut geeignetes Refernz-Thermometer. Der oberere Weiterebereich ist mit einem Fieberthemometer bei ca. 40°C eingeschränkt. Die Durchführung der Kalibrierung entspricht der Vorgehensweise Eisbad und Siedepunkttemperatur. Einziger Unterschied: wenn bspw. 40°C als zweiter Kalibrierungspunkt ausgewählt wurde, dann muss die Induktionskochplatte ausgeschaltet werden, sobald die Zieltemperatur erreicht wurde und über ca. 60 Sekunden konstant blieb (keine Schwanken). Erst dann soll die Kalibrierung, also das erfassen von 60 Messproben gestartet werden.

## Logfile Sensorkalibrierung

Bei jeder Kalibrierung wird ein Logfile geschrieben. Beispiel:

```text
13:22:37 Sensor Kalibrierung gestartet
*** Sensor Name: Sensor IDS2
*** Modell: DS18B20
*** Adresse: 2827c59d0d0000b1
*** Resolution: 12bit
*** Timeout: 750ms
-----------------------------------------
ID Soll Ist Diff Offset
#01 24.6000 24.0000 -0.6000 0.6000

 - Sensorwerte 2 bis 59 sinngemäß

#60 24.6000 25.1875 0.5875 -0.6083
-----------------------------------------
Temperatur von Offset #1: 24.6000
Mittelwert nach 60 Messungen: 25.2083
Offset #1: -0.6083
=========================================
```
