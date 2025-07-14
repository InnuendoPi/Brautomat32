# Fermenter Modus

Im Fermenter Modus arbeitet der Brautomat32 den Gärplan in gleicher Weise wie beim Maischeplan top down ab. Das Controller Deck hat die gleichen Funktionen.

![Fermenter dashboard](/docs/img/fermenter_dash.jpg)

Die Verarbeitung der Steps hat einen wichtigen Untschied:

der ersten Schritt im Gärplan wird gestartet, wenn die Zieltemperatur erreicht ist. Das ist meist der Zeitpunkt, wenn die Hefe zur Würze gegeben wird. Alle folgenden Schritte im Gärplan werden sofort gestartet, unabhängig von der Ist-Temperatur.

Zur Einrichtung kann ein GPIO für eine Kühlung und ein GPIO für eine Heizung eingerichtet werden. Entweder die Kühlung oder die Heizung ist optional.

![Fermenter settings](/docs/img/fermenter_set.jpg)

Der Fermenter hat drei verschiedene Stati: Kühlung, Heizung und Idle. Wenn sich der Status von Kühlung oder Heizung ändert, startet eine Pause. Während der Pause ändert sich der Status vom Fermenter nicht.

* Alter Status Kühlung und neuer Status Kühlung: keine Pause. Die Kühlung bleibt eingeschaltet
* Alter Status Heizung und neuer Status Heizung: keine Pause. Die Heizung bleibt eingeschaltet
* Alter Status Kühlung und neuer Status Heizung: Pause 120s
* Alter Status Heizung und neuer Status Kühlung: Pause 120s

## Ramp

Ein Fermenter Schritt wird mit einer Start- und einer Endtemperatur angegeben. In der ersten Abbildung in diesem Abschnitt beträgt im ersten Fermenter Schritt die Temperatur jeweils 18°C. Das bedeutet natürlich, dass für die Dauer von 1 Tage die Gärtemperatur unverändert bleibt.

Im zweiten Fermenter Schritt beträgt die Starttemperatur 18°C und die Endtemperatur 20°C. Die Dauer für diesen Fermenter Schritt ist mit 2 Tagen eingetragen. Es gibt nun zwei Möglichkeiten, um von der Start- auf die Endtemepratur zu kommen:

Bei aktiviertem ramp steuert der Brautomat die Gärtemperatur über die angegebene Dauer für diesen Schritt linear. In diesem Fall wird in +0.1°C Schritten über 2 Tage hinweg die Temperatur von 18°C auf 20°C geführt.

Bei deaktiviertem ramp wird die Endtemperatur mit dem Start vom Fermenter Schritt hergestellt, entweder mittels Kühlung oder Heizung. Sobald die Endtemepratur hergestellt ist, wird sie gehalten.

## Relais Schaltzyklus

Der Relais Schaltzyklus bestimmt, wie lange einer der Stati Kühlung, Heizung oder Idle gehalten. Der zulässige Wertebereich liegt zwischen 1000 und 240000ms. Voreingestellt ist 120000, also 120 Sekunden. Ein zu kleiner Schaltzyklus kann sich auf Kühlgeräte negativ auswirken.

## Display

Im Fermenter Modus ist die Ansicht MaischeSud (Seite 2) auszuwählen. Die Kesselübersicht und die Ansicht manuelle Steuerung sind nicht für den Fermenter Modus verwendbar.
