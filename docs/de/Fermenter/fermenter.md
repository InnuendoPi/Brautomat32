# Fermenter Modus

Im Fermenter Modus arbeitet der Brautomat32 den Gärplan in gleicher Weise wie beim Maischeplan top down ab. Das Controller Deck hat die gleichen Funktionen.

![Fermenter dashboard](/docs/img/fermenter_dash.jpg)

Die Verarbeitung der Steps hat einen wichtigen Untschied:

der ersten Schritt im Gärplan wird gestartet, wenn die Zieltemperatur erreicht ist. Das ist meist der Zeitpunkt, wenn die Hefe zur Würze gegeben wird. Alle folgenden Schritte im Gärplan werden sofort gestartet, unabhängig von der Ist-Temperatur.

Zur Einrichtung kann ein GPIO für eine Kühlung und ein GPIO für eine Heizung eingerichtet werden. Entweder die Kühlung oder die Heizung ist optional.

![Fermenter settings](/docs/img/fermenter_set.jpg)

The fermenter mode has three states: Cooling, Heating or Idle. When the state change from cooling or heating, a pause starts. The pause is 120 seconds:

* old cooling mode and new cooling mode: no pause. Cooling remains ON
* old heating mode and new heating mode: no pause. Heating remains ON
* old mode cooling and new mode heating or idle: pause 120s
* old mode heating and new mode cooling or idle: pause 120s
