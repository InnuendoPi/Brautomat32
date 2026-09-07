# Fermenter Modus

Im Fermenter Modus arbeitet der Brautomat32 den Gärplan in gleicher Weise wie beim Maischeplan top down ab. Das Controller Deck hat die gleichen Funktionen.

![Fermenter dashboard](/docs/img/fermenter_dash.jpg)

Die Verarbeitung der Schritte hat einen wichtigen Unterschied:

Der erste Schritt im Gärplan wird sofort mit dem Prozessstart gestartet. Alle folgenden Schritte im Gärplan werden sofort gestartet, unabhängig von der Ist-Temperatur.

Nach einem manuellen Schrittwechsel mit Next startet einmaliges Play den gewählten Schritt. Zum Bearbeiten eines laufenden Gärplans zuerst pausieren. Beim Umordnen bleiben der aktive Schritt und seine Restzeit erhalten. Sein Name muss vorher und nachher eindeutig sein; Löschen oder Umbenennen dieses Schritts während des Laufs wird abgewiesen.

Die Schrittdauer lässt sich in Tagen, Stunden und Minuten eingeben. Speichert ein anderer Browser einen geänderten Plan, bleibt ein offener Entwurf erhalten. Ein veralteter Entwurf wird beim Speichern abgewiesen; mit Neuladen den aktuellen Plan übernehmen und die gewünschten Änderungen erneut eintragen.

Zur Einrichtung kann ein GPIO für eine Kühlung und ein GPIO für eine Heizung eingerichtet werden. Entweder die Kühlung oder die Heizung ist optional.

![Fermenter settings](/docs/img/fermenter_set.jpg)

Der Fermenter hat drei verschiedene Stati: Kühlung, Heizung und Idle. Wenn sich der Status von Kühlung oder Heizung ändert, startet eine Pause. Während der Pause ändert sich der Status vom Fermenter nicht.

* Alter Status Kühlung und neuer Status Kühlung: keine Pause. Die Kühlung bleibt eingeschaltet
* Alter Status Heizung und neuer Status Heizung: keine Pause. Die Heizung bleibt eingeschaltet
* Alter Status Kühlung und neuer Status Heizung: Pause 120s
* Alter Status Heizung und neuer Status Kühlung: Pause 120s

## Ramp

Ein Fermenter Schritt wird mit einer Start- und einer Endtemperatur angegeben. In der ersten Abbildung in diesem Abschnitt beträgt im ersten Fermenter Schritt die Temperatur jeweils 18°C. Das bedeutet natürlich, dass für die Dauer von 1 Tage die Gärtemperatur unverändert bleibt.

Im zweiten Fermenter-Schritt beträgt die Starttemperatur 18 °C und die Endtemperatur 20 °C. Die Dauer für diesen Fermenter-Schritt ist mit 2 Tagen eingetragen. Es gibt nun zwei Möglichkeiten, um von der Start- auf die Endtemperatur zu kommen:

Bei aktiviertem ramp steuert der Brautomat die Gärtemperatur über die angegebene Dauer für diesen Schritt linear. In diesem Fall wird in +0.1°C Schritten über 2 Tage hinweg die Temperatur von 18°C auf 20°C geführt.

Bei deaktiviertem Ramp wird die Endtemperatur mit dem Start des Fermenter-Schritts hergestellt, entweder mittels Kühlung oder Heizung. Sobald die Endtemperatur erreicht ist, wird sie gehalten.

## Relais Schaltzyklus

Der Relais Schaltzyklus bestimmt, wie lange einer der Stati Kühlung, Heizung oder Idle gehalten. Der zulässige Wertebereich liegt zwischen 1000 und 240000ms. Voreingestellt ist 120000, also 120 Sekunden. Ein zu kleiner Schaltzyklus kann sich auf Kühlgeräte negativ auswirken.

## Display

Im Fermenter Modus ist die Ansicht MaischeSud (Seite 2) auszuwählen. Die Kesselübersicht und die Ansicht manuelle Steuerung sind nicht für den Fermenter Modus verwendbar.

## Temperaturanzeige und Verbindung

Gültige Ist- und Solltemperaturen von 0 °C und unter 0 °C werden angezeigt;
auch -1 °C ist ein gültiger Messwert. Ungültige Werte erscheinen im Chart als
Lücke. Ältere gespeicherte Chartverläufe können -1 °C noch als Lücke darstellen.
Das Nextion zeigt gültige Sollwerte von 0 °C und darunter ebenfalls an.

Zum Wechsel zwischen Maische- und Fermenteransicht den Prozess mit Power stoppen;
eine Pause allein genügt nicht. Ein Browser ohne offene Änderungen übernimmt
neu gespeicherte Fermenterpläne automatisch. Vor dem Neuladen eines veralteten
Entwurfs die gewünschten Änderungen notieren, da Neuladen den Entwurf verwirft.
