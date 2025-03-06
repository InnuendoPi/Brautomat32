# Kalibrierung

Sensoren vom Typ Dallas DS18B20 weisen teilweise Abweichungen von der tatsächlichen Temperatur auf. In den technischen Spezifikationen der Hersteller wird oft eine Genauigkeit von +-0,5°C im Bereich von -10°C bis 85°C angegeben. Zusätzlich werden die Sensoren als kalibriert bezeichnet.

Mit Hilfe einer 2-Punkt-Kalibrierung können Abweichungen korrigiert werden. Die Kalibrierung durch den Brautomat ist eine lineare Korrektur. Für die Kalibrierung der Sensoren ist ein geeichtes Thermometer erforderlich. Der Braukessel wird mit einer typischen Menge Wasser gefüllt und auf 40°C aufgeheizt. Die Differenz zwischen dem Sensorwert und dem geeichten Thermometer wird in den Parameter "Offset 1 \[40°C]" eingegeben. Dieser Vorgang wird bei 78°C wiederholt und die Differenz in den Parameter "Offset 2 \[78°C]" eingetragen. Zukünftig werden alle Messwerte des Sensors mit dieser Korrektur ausgegeben.

Für die Kalibrierung wird der Temperatursensor in den Hochauflösungsmodus (12bit Auflösung bzw. 0,0625°C) versetzt. Eine Kalibrierung über das Webinterface besteht aus 60 Messwerten. Der Zeitbedarf für eine Kalibrierung beträgt fast genau 60 Sekunden. Das Ergebnis der Temperaturmessung ist der Mittelwert der 60 Messwerte. Ein Offset ist die Differenz zwischen der tatsächlichen Temperatur und dem Mittelwert.

In vielen Fällen ist eine 1-Punkt-Kalibrierung im Eisbad ausreichend, da der Offset der Sensoren DS18B20 in der Regel konstant ist.

## Vorgehensweise Kalibrierung ohne Referenzthermometer

Steht kein Referenzthermometer zur Verfügung, kann eine Kalibrierung mit einem Eisbad und einem Kochvorgang durchgeführt werden.
Für den unteren Messbereich wird ein Behälter mit 50% Eiswürfeln und 50% kaltem Wasser benötigt. Ein Eisbad hat eine Temperatur von (fast genau) 0,0 °C. Das Eiswasser muss kontinuierlich gerührt werden, vorzugsweise mit einem Magnetrührer. Im Eisbad wird die Kalibrierung bei 0 °C gestartet.

Der zweite Punkt für eine Kalibrierung kann über die Höhe über Normalnull und den damit verbundenen Siedepunkt bestimmt werden. Bei 0 m über NHN bzw. einem atmosphärischen Druck von 1.013 bar beträgt die Siedetemperatur 100.l0°C. Mit zunehmender Höhe sinkt der Luftdruck und damit die Siedetemperatur. Zunächst muss die örtliche NHN z.B. über google earth ermittelt werden. Pro Meter über NHN sinkt die Siedetemperatur um 0,003354°C. Auf der Webseite von [rechneronline](https://rechneronline.de/barometer/siedepunkt.php) wird der Siedepunkt über die Höhe über NHN berechnet. Auch viele Smartphones bieten die Höheninformation in der Kompass- oder Navi-App an. Die Höhe über NHN sollte mit einer Genauigkeit von ca. +-20m bestimmt werden. Dies entspricht einer Änderung der Siedepunkttemperatur von 0,06708°C und liegt damit weit außerhalb der Genauigkeit der Brautomat-Steuerung. Die zweite Punktkalibrierung wird mit einem MaischeSud Kessel, einem Rührwerk und dem zuvor ermittelten lokalen Siedepunkt durchgeführt. Die Zieltemperatur ist also die Siedepunkttemperatur. Es ist darauf zu achten, dass die Siedepunkttemperatur erreicht und mindestens eine Minute gehalten wird, bevor die Kalibrierung für den oberen Wertebereich gestartet wird. Außerdem ist es sehr wichtig, dass das Induktionskochfeld mit konstanter Leistung eingeschaltet bleibt.

Offset #1 (unterer Wertebereich) ist die Differenz von 0.0°C (Eisbad) zum Mittelwert des ersten Kalibrierlaufs. Offset #2 (oberer Wertebereich) ist die Differenz zwischen dem Siedepunkt und dem Mittelwert aus dem zweiten Kalibrierdurchgang.

## Verfahren Kalibrierung mit Fieberthermometer

Ein Fieberthermometer ist ein gut geeignetes Referenzthermometer. Der obere Messbereich ist bei einem Fieberthermometer auf ca. 40°C begrenzt. Die Durchführung der Kalibrierung entspricht der Vorgehensweise bei Eisbad und Siedetemperatur. Einziger Unterschied: Wählt man z.B. 40°C als zweiten Kalibrierpunkt, so muss die Induktionskochplatte abgeschaltet werden, sobald die Solltemperatur erreicht ist und für ca. 60 Sekunden konstant bleibt (keine Schwankungen). Erst dann darf die Kalibrierung, d.h. die Aufnahme von 60 Messproben gestartet werden.

## Logdatei Sensorkalibrierung

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
