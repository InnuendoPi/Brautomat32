# Die Steuerung

Direkt unter dem Maischeplan befindet sich das Controller Deck. Mit den 5 Tasten Power, Play, Pause, Previous und Next wird der Maischprozess gesteuert.

![Steuerung](/docs/img/Buttons.jpg)

## Power Button

Mit dem Power Button wird der Maischprozess ein- und ausgeschaltet. Wenn die Funktion AutoTune in den Einstellungen eines Kochfeldes aktiviert ist, wird der AutoTune-Prozess über den Power Button gestartet bzw. gestoppt.

## Play Button

Der Play Button hat im Maischprozess zwei Funktionen:

1. Die erste Funktion ist _Start des Rasttimers für die aktuelle Rast_. Der Play Button startet den Rasttimer unabhängig von der Ist-Temperatur.\
Beispiel: Wenn im Schritt Kochen die Würze bereits kocht, die Ist-Temperatur mit 98,5 °C aber unter der Rasttemperatur mit 100 °C liegt, kann der Rasttimer mit Play dennoch gestartet werden.

2. Die zweite Funktion des Play Buttons ist mit der Eigenschaft _autonext_
   (automatischer Wechsel zum nächsten Schritt) verknüpft: Fortsetzen des
   Maischvorgangs mit der nächsten Rast. Der Play-Button wird in dieser
   Funktion rot dargestellt. Die Funktion _Fortsetzen des Maischprozesses mit
   der nächsten Rast_ wird später in der Beschreibung _autonext_ im
   Maischplan erläutert.

## Pause Button

Die Funktion der Pausetaste ist während der Aufheizphase auf eine Rasttemperatur und während einer Rast zu unterscheiden.

- Pause während der Aufheizphase

Wenn der Brauprozess mit dem Power Button gestartet wird, werden die Schaltflächen zum Editieren des Maischeplans ausgeblendet. Wird der Pause Button geklickt, werden die Editiersymbole wieder angezeigt. Während einer aktivierten Pause bleibt das Kochfeld eingeschaltet, um die Zieltemperatur zu erreichen. Die Schaltfläche Pause wird dann rot dargestellt. Mit Hilfe einer Pause kann der Maischplan während des Brauprozesses angepasst werden. Wird während einer Pause die Rasttemperatur erreicht, wird der Pausentimer gestartet und die Pause beendet.

- Pause während einer Rast

Während einer Rast wird mit der Pausetaste auch der Rasttimer im Maischprozess angehalten. Der Button Pause wird dann rot dargestellt. Während einer Pause wird die Ist-Temperatur gegenüber der Rastsolltemperatur gehalten, d.h. der PID-Regler und damit das Kochfeld bleiben aktiv. Mit Hilfe einer Pause während einer Rast kann der Maischeplan angepasst werden. Die Dauer der Pause verlängert die bisherige Rastzeit.

Nach einem Neustart lässt sich eine gespeicherte Pause wieder lösen. Ihre Restzeit bleibt während der Unterbrechung erhalten. Auch nach dem Wiederanlauf einer laufenden Rast fügt Pause/Resume keine zusätzliche Restzeit hinzu, sofern die geplante Rastdauer unverändert bleibt.

Ein durch Sensorfehler angehaltener Rasttimer bleibt unabhängig von der Benutzerpause angehalten. Das Lösen der Pause quittiert diesen Sensor-Hold nicht und startet den Timer nicht erneut.

Beim Bearbeiten in Pause muss der aktive Schritt mit eindeutigem, unverändertem Namen erhalten bleiben. Beim Umordnen folgt die aktive Rast diesem Schritt; ihre Restzeit bleibt erhalten. Ein Wechsel zur Fermenteransicht ist erst nach Stoppen des Prozesses möglich. Wird das Speichern abgelehnt, bleiben die Eingaben im aktualisierten Planeditor erhalten.

## Previous Button

Mit dem Prev-Button wird zum vorherigen Schritt im Maischeplan gesprungen. Wurde der Maischprozess angehalten, wird der Rasttimer des aktuellen Rasts zurückgesetzt und neu gestartet.

## Next Button

Mit dem Next Button wird zum nächsten Schritt im Maischeplan gesprungen. Beim letzten Schritt ist Next deaktiviert.

Ein mit Next ausgewählter reiner Aktorbefehl wird erst mit Play ausgeführt. Bei deaktiviertem Autonext bestätigt ein weiterer Play-Klick den ausgeführten Befehl. Bereits ausgeführte SUD-/HLT-Befehle mit Zieltemperatur und Dauer 0 werden ebenfalls mit Play bestätigt.

Ein erreichtes Kochtemperatur-Gate bleibt für folgende Kochschritte desselben Kessels erhalten. Beim Wechsel auf einen anderen Kessel muss dieser seine eigene Zieltemperatur erreichen.

## Collapse Button

Der Collapse Button klappt die Tabelle Maischeplan ein oder aus.

![Maischeplan](/docs/img/Maischeplan-anzeigen.jpg)

Der Collapse Button bleibt auch nach dem Braustart sichtbar. Alle Buttons zur Bearbeitung des Maischeplans werden nach Braustart ausgeblendet.

## Geplanter Braustart

Ein zukünftiger Starttermin bleibt nach einem Neustart erhalten. Der Start erfolgt einmalig über dieselben Freigaben wie mit Power. Dafür müssen die Maischeansicht und ein Plan ausgewählt sein; ein anderer aktiver Betriebsmodus oder eine angewählte AutoTune-Konfiguration verhindert den Terminstart. Ein um mindestens eine Minute verpasster Termin wird verworfen. Ein abgewiesener Termin wird nicht später automatisch erneut ausgeführt.
