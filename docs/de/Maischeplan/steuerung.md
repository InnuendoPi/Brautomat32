# Die Steuerung

Direkt unterhalb vom Maischeplan befindet sich die Steuerung. Mithilfe der 5 Buttons Power, Play, Pause, Previous und Next wird der Maischeprozess gesteuert.

![Maischeplan](/docs/img/Buttons.jpg)

## Der Power Button

Über den Power Button wird der Maischeprozess ein- bzw. ausgeschaltet. Wenn die Funktion AutoTune in den Einstellungen der GGM IDS oder im Nachguss aktiviert ist, wird der AutoTune Prozess über den Power Button gestartet bzw. gestoppt.

## Der Play Button

Der Play Button hat im Maischeprozess zwei Funktionen:

1. Die erste Funktion lautet "starte den Rast-Timer für die aktuelle Rast". Der Play Button startet unabhängig von der IST-Temperatur den Rast-Timer.\
Beispiel: wenn im Schritt Kochen die Würze bereits wallend kocht, die Ist-Temperatur mit 98,5°C aber unter der Rast-Temperatur mit 100°C liegt und somit der Rast-Timer nicht startet.\

2. Die zweite Funktion vom Play Button hängt mit der Eigenschaft _autonext_ zusammen: setze den Maischeprozess mit der nächsten Rast fort. Die Funktionen "mit der nächsten Rast den Maischeprozess fortsetzen" wird später in der Beschreibung _autonext_ im Maischeplan erläutert. Der Play Button wird in dieser Funktion rot angezeigt.

## Der Pause Button

Die Funktion vom Pause Button ist während der Aufheizphase auf eine Rasttemperatur und während einer Rast zu unterscheiden.

- Pause während der Aufheizphase

In der Aufheizphase werden die Buttons zum Maischeplan editieren ein- bzw. ausgeblendet. Das Induktionskochfeld bleibt während einer aktivierten Pause eingeschaltet, um die Zieltemperatur zu erreichen. Der Pause Button wird dann rot angezeigt. Mithilfe einer Pause kann der Maischeplan während des Brauprozesses angepasst werden. Wird während einer Pause die Rast-Zieltemperatur erreicht, wird der Rast-Timer gestartet und die Pause beendet.

- Pause während einer Rast

Während einer Rast wird mit dem Pause Button zusätzlich der Rast-Timer im Maischeprozess angehalten. Der Pause Button wird dann rot angezeigt. Bei einer Pause wird die Ist-Temperatur gegenüber der Rast-Zieltemperatur gehalten, d. h. der PID-Controller und somit das Induktionskochfeld bleiben aktiv. Mithilfe einer Pause während einer Rast kann der Maischeplan angepasst werden. Die Dauer der Pause verlängert die bisherige Rastdauer.

## Der Previous Button

Mit dem Prev Button wird zum vorherigem Schritt im Maischeplan gesprungen. War der Maischeprozess pausiert, wird der Rast-Timer der aktuellen Rast zurückgesetzt und neu gestartet.

## Der Next Button

Mit dem Next Button wird zum nächsten Schritt im Maischeplan gesprungen oder falls es der letzte Schritt im Plan war der Maischeprozess beendet.

## Der Collapse Button

Der Collapse Button klappt die Tabelle Maischeplan ein bzw. aus.

![Maischeplan](/docs/img/Maischeplan-anzeigen.jpg)

Der Collapse Button bleibt nach Braustart sichtbar. Alle Buttons zum Editieren des Maischeplans werden mit Braustart ausgeblendet.
