# Die Steuerung

Direkt unter dem Maischeplan befindet sich das Controller Deck. Mit den 5 Tasten Power, Play, Pause, Previous und Next wird der Maischprozess gesteuert.

![Steuerung](/docs/img/Buttons.jpg)

## Power Button

Mit dem Power Button wird der Maischprozess ein- und ausgeschaltet. Wenn die Funktion AutoTune in den Einstellungen eines Kochfeldes aktiviert ist, wird der AutoTune-Prozess über den Power Button gestartet bzw. gestoppt.

## Play Button

Der Play Button hat im Maischprozess zwei Funktionen:

1. Die erste Funktion ist _Start des Rasttimers für die aktuelle Rast_. Der Play Button startet den Rasttimer unabhängig von der IST-Temperatur.\
Beispiel: Wenn im Schritt Kochen die Würze bereits kocht, die IST-Temperatur mit 98,5°C aber unter der Rasttemperatur mit 100°C liegt, startet der Rasttimer nicht.

2. Die zweite Funktion des Play Buttons ist mit der Eigenschaft _autonext_ verknüpft: Fortsetzen des Maischvorgangs mit der nächsten Rast. Der Play-Button wird in dieser Funktion rot dargestellt. Die Funktion _Fortsetzen des Maischprozesses mit der nächsten Rast_ wird später in der Beschreibung _autonext_ im Maischplan erläutert.

## Pause Button

Die Funktion der Pausetaste ist während der Aufheizphase auf eine Rasttemperatur und während einer Rast zu unterscheiden.

- Pause während der Aufheizphase

Wenn der brauprozess mit dem Power Button gestartet wird, werden die Schaltflächen zum Editieren des Maischeplans ausgeblendet. Wird der Pause Button geklickt, werden die Editiersymbole wieder angezeigt. Während einer aktivierten Pause bleibt das Kochfeld eingeschaltet, um die Zieltemperatur zu erreichen. Die Schaltfläche Pause wird dann rot dargestellt. Mit Hilfe einer Pause kann der Maischplan während des Brauprozesses angepasst werden. Wird während einer Pause die Rasttemperatur erreicht, wird der Pausentimer gestartet und die Pause beendet.

- Pause während einer Rast

Während einer Rast wird mit der Pausetaste auch der Rasttimer im Maischprozess angehalten. Der Button Pause wird dann rot dargestellt. Während einer Pause wird die Ist-Temperatur gegenüber der Rastsolltemperatur gehalten, d.h. der PID-Regler und damit das Kochfeld bleiben aktiv. Mit Hilfe einer Pause während einer Rast kann der Maischeplan angepasst werden. Die Dauer der Pause verlängert die bisherige Rastzeit.

## Previous Button

Mit dem Prev-Button wird zum vorherigen Schritt im Maischeplan gesprungen. Wurde der Maischprozess angehalten, wird der Rasttimer des aktuellen Rasts zurückgesetzt und neu gestartet.

## Next Button

Mit dem Next Button wird zum nächsten Schritt im Maischeplan gesprungen oder, falls es der letzte Schritt im Plan war, der Maischeprozess beendet.

## Collapse Button

Der Collapse Button klappt die Tabelle Maischeplan ein oder aus.

![Maischeplan](/docs/img/Maischeplan-anzeigen.jpg)

Der Collapse Button bleibt auch nach dem Braustart sichtbar. Alle Buttons zur Bearbeitung des Maischeplans werden nach Braustart ausgeblendet.
