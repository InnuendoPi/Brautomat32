# Temperatursensor einrichten

Im Abschnitt Sensoren wird mit einem Klick auf das Plus Zeichen ein neuer Sensor angelegt

![Sensoren anlegen](/docs/img/Sensor-einrichten.jpg)

Temperatursensoren vom Typ Dallas DS18B20 haben eine eindeutige Adresse. Über diese Adresse unterscheidet die Firmware die angeschlossenen Sensoren. Die Sensor Adresse kann aus der Auswahlliste ausgewählt. Wird kein Sensor angezeigt, kann mit dem Reload Button die Erkennung der Sensoren neu gestartet werden. Wird weiterhin kein Sensor angezeigt, ist die Kabelverbindung zu überprüfen. Als zweite Eigenschaft besitzt ein Sensor einen Namen. Über den Namen kann der Anwender die Sensoren unterscheiden. In dieser Grundkonfiguration hat der Sensor den Namen "Sensor IDS2".&#x20;
Sensornamen können maximal 20 Zeichen lang sein. Als Sonderzeichen sind das Hashtag # und das Leerzeichen erlaubt. Das Web Interface überprüft auftomatisch die Eingabe.

![Sensoren konfigurieren](/docs/img/Sensor-einstellungen.jpg)

Die Eigenschaften Offset 1 und Offset 2 sind für die Sensorkalibrierung und werden im Abschnitt "Sensoren - Kalibrierung" erläutert. Für die Beschreibung dieser Grundkonfiguration werden beide Werte unverändert bei 0.00 belassen. Mit einem Klick auf "Sensor speichern" wird der Sensor angelegt und im Dashboard im Abschnitt Sensoren angezeigt:

![Sensoren Dashboard](/docs/img/Sensor-dashboard.jpg)

Die Konfiguration von analogen Sensoren PT100x ist sinngemäß in gleicher Weise vorzunehmen. In dieser Grundeinrichtung wird nicht auf PT100x Sensoren eingegangen.
