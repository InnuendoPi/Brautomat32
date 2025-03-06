# AutoTune PID

Für den Brautomat wurde eine eigene PID AutoTune Bibliothek InnuAPID entwickelt. Die Ausgangsbasis war die Arduino PID Bibliothek [Brett Beauregard](https://github.com/br3ttb/Arduino-PID-Library), sowie die Addons AutoTune und PIDBoil für CraftbeerPi.

Die PID-Regelung hat die Aufgabe, eine konstante Maischetemperatur zu erzeugen und aufrechtzuerhalten, unabhängig vom Kesselvolumen oder der Art der Wärmeenergiezufuhr.
