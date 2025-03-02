# Einrichtung des Temperatursensors

## Neuen Sensor hinzufügen

Im Abschnitt "Sensoren" kann ein neuer Sensor durch Klicken auf das Plus-Symbol hinzugefügt werden.

![Sensoren anlegen](/docs/img/Sensor-einrichten.jpg)

## Sensoradresse und Name festlegen

Temperatursensoren vom Typ Dallas DS18B20 besitzen eine eindeutige Adresse, die von der Firmware zur Identifikation genutzt wird. Die Adresse kann aus der Auswahlliste gewählt werden.

Falls kein Sensor angezeigt wird:

* Die Erkennung der Sensoren kann mit dem Reload-Button erneut gestartet werden.
* Falls weiterhin kein Sensor erkannt wird, sollte die Kabelverbindung überprüft werden.

Jeder Sensor benötigt zudem einen Namen, der zur leichteren Unterscheidung dient. In dieser Grundeinrichtung wird der Sensor "Sensor IDS2".&#x20; genannt.

_Hinweis: Sensornamen dürfen maximal 20 Zeichen enthalten. Erlaubte Sonderzeichen sind # und Leerzeichen. Die Eingabe wird vom Webinterface automatisch überprüft._

![Sensoren konfigurieren](/docs/img/Sensor-einstellungen.jpg)

## Sensorkalibrierung (Offset-Werte)

Die Eigenschaften Offset 1 und Offset 2 dienen zur Sensorkalibrierung. Eine detaillierte Erklärung erfolgt im Abschnitt "Sensoren – Kalibrierung".

Für diese Grundkonfiguration bleiben beide Werte unverändert bei 0.00.

## Sensor speichern und überprüfen

Durch Klicken auf "Sensor speichern" wird der Sensor angelegt und anschließend im Dashboard unter "Sensoren" angezeigt.

![Sensoren Dashboard](/docs/img/Sensor-dashboard.jpg)

_Hinweis: Die Konfiguration von analogen PT100x-Sensoren erfolgt auf die gleiche Weise, wird jedoch in dieser Grundeinrichtung nicht behandelt._
