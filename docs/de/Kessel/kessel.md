# Kessel Konfiguration und Einsatz

Der Brautomat32 bietet die Möglichkeit, bis zu drei Kessel einzurichten. In dieser Anleitung hat der erste Kessel die Bezeichnung MaischeSud. Dieser Kessel ist für den Maischeprozess erforderlich. Die zwei weiteren Kessel sind optional. Der zweite Kessel hat in dieser Anleitung den Namen Sud und der dritte Kessel den Namen HLT bzw. Nachguss. Die Namen und die Funktion von Kessel zwei und drei sind frei wählbar.

Die drei Kessel können entweder vom Typ GGM Induktionskochfeld oder Relais sein. Ein Kessel vom Typ Relais beinhaltet eine webhook Anbindung.

![Kessel Konfiguration](/docs/img/kessel_1.jpg)

Die Kessel Konfiguration ist im Kapitel Grundeinrichtung und Parameter im Überblick - Parameter Kessel beschrieben und ist für alle drei Kessel identisch.

Der Einsatz der drei Kessel ist jedoch unterschiedlich, insbesondere der Einsatz über den Maischeplan. Der Maischeplan ist immer mit dem ersten Kessel MaischeSud verknüpft, solange im Maischeplan nicht expliziet ein anderer Kessel angegeben wird.

Um einen zweiten oder dritten Kessel in den Brauprozess einzubinden, kann manuell im Web Interface der jeweilige Power Button verwendet werden. Wird beispielsweise ein Kessel für den Nachguss eingerichtet, dann kann die Zieltemperatur auf 78°C gesetzt werden und der Kessel bei Bedarf am Brautag ein- und ausgeschaltet werden.

Das Beispiel Nachguss kann ebenso über den Maischeplan automatisch geschaltet werden:

![Kessel Konfiguration](/docs/img/kessel_2.jpg)

In diesem vereinfachten Maischeplan wird in Zeile 2 der Nachguss automatisch eingeschaltet. Der Step HLT:100 mit einer Zieltemperatur von 78°C und einer Dauer von 0 Minuten schalten den Nachguss mit 100% Leistung ein und setzt die Zieltemperatur auf 78°C. Weil die Dauer mit 0 Minuten angegeben ist, wird der nachguss dauerhaft eingeschaltet. Der Brautomat geht direkt zum nächsten Maischeschritt und belässt den Nachguss eingeschaltet.

![Kessel Konfiguration](/docs/img/kessel_3.jpg)

In diesem Maischeplan wird im dritten Step der Kessel Sud eingeschaltet. Im gegensatz zum vorherigen Beispiel Nachguss wird der Sud Kessel für die Dauer von 15 Minuten mit der Zieltemperatur 100°C eingeschaltet. Der Brautomat verbleibt so lange auf diesen Step, bis die Zieltemperatur erreicht und der 10 Minuten Timer abgeschlossen ist. Anschließend wird der Kessel Sud ausgeschaltet und der Brautomat springt zum nächsten Step.
