# Temperatursensor einrichten

Im Abschnitt Sensoren wird mit einem Klick auf das Plus Zeichen ein neuer Sensor angelegt

![Sensoren anlegen](/docs/img/Sensor-einrichten.jpg)

Die Temperatursensoren vom Typ Dallas DS18B20 besitzen eine eindeutige Adresse. Anhand dieser Adresse unterscheidet die Firmware die angeschlossenen Sensoren. Die Sensoradresse kann aus der Auswahlliste ausgewählt werden. Wird kein Sensor angezeigt, kann mit dem Reload Button die Erkennung der Sensoren neu gestartet werden. Wird immer noch kein Sensor angezeigt, muss die Kabelverbindung überprüft werden. Als zweite Eigenschaft hat ein Sensor einen Namen. Der Name dient dem Benutzer zur Unterscheidung der Sensoren. In dieser Grundkonfiguration hat der Sensor den Namen "Sensor IDS2".&#x20;
Sensornamen dürfen maximal 20 Zeichen lang sein. Als Sonderzeichen sind das Hashtag # und das Leerzeichen erlaubt. Das Webinterface überprüft die Eingabe automatisch.

![Sensoren konfigurieren](/docs/img/Sensor-einstellungen.jpg)

Die Eigenschaften Offset 1 und Offset 2 sind für die Sensorkalibrierung und werden im Abschnitt "Sensoren - Kalibrierung" erläutert. Für die Beschreibung dieser Grundkonfiguration werden beide Werte unverändert auf 0.00 belassen. Durch Klicken auf "Sensor speichern" wird der Sensor angelegt und im Dashboard im Abschnitt "Sensoren" angezeigt:

![Sensoren Dashboard](/docs/img/Sensor-dashboard.jpg)

Die Konfiguration der analogen PT100x-Sensoren erfolgt analog. Auf PT100x-Sensoren wird in dieser Grundkonfiguration nicht eingegangen.
