# Kessel Konfiguration und Einsatz

Der Brautomat32 bietet die Möglichkeit, bis zu drei Kessel einzurichten. Der erste Kessel hat intern die Bezeichnung MAISCHE, alternativ IDS. Dieser Kessel ist für den Maischeprozess erforderlich. Die beiden weiteren Kessel sind optional. Der zweite Kessel hat intern die Bezeichnung SUD, alternativ MLT, und der dritte Kessel die Bezeichnung HLT bzw. NACHGUSS.

Die drei Kessel können entweder vom Typ GGM Induktionskochfeld oder Relais sein. Ein Kessel vom Typ Relais beinhaltet eine webhook Anbindung.

![Kessel Konfiguration](/docs/img/kessel_1.jpg)

Die Parameter sind im Kapitel Grundeinrichtung und Parameter im Überblick - Parameter Kessel beschrieben und sind für alle drei Kessel identisch.

Der Einsatz der drei Kessel ist jedoch unterschiedlich, insbesondere der Einsatz über den Maischeplan. Der Maischeplan ist immer mit dem ersten Kessel MaischeSud verknüpft, solange kein anderer Kessel im Maischeplan über einen Steuerbefehl angegeben wird. Steuerbefehle werden auch im Abschnitt Maischeplan Sonderfunktion und Steuerbefehle erläutert.

## Steuerbefehle für Kessel

In diesem Abschnitt werden nur Steuerbefehle für Kessel betrachtet. Steuerbefehle für Aktoren sind zwar identisch aufgebaut, werden aber im Abschnitt Maischeplan Sonderfunktion und Steuerbefehle erläutert. Ein Steuerbefehl beinhaltet immer einen Doppelpunkt im Rastnamen. Nur anhand des Doppelpunktes erkennt der Brautomat, dass diese Rast als Steuerbefehl zu behandeln ist. Das Format lautet Gerät:maximale Leistung. Das heißt: Der Doppelpunkt trennt den Gerätenamen von der maximalen Leistung.

Als Gerätenamen für die drei Kessel sind folgende Bezeichnungen intern definiert:

* MAISCHE oder IDS für den ersten Kessel
* MLT oder SUD für den zweiten Kessel
* HLT oder NACHGUSS für den dritten Kessel

Jedem Kessel wird in den Einstellungen ein Name zugewiesen. Dieser Name kann ebenfalls als Gerätename für einen Steuerbefehl genutzt werden.

Als maximale Leistung sind Zahlen zwischen 0 und 100 erlaubt. Der Wert entspricht dem Parameter maximale Leistung in den Kessel Einstellungen und wird in Prozent angegeben. Die Angabe ON entspricht 100% und OFF 0%.

Ab Version 1.60 kann zusätzlich die Leistung ab Übergang zum Kochen per Sonderbefehl gesetzt werden:

* `IDSTHRESOUT:80`
* `MAISCHETHRESOUT:80`

### Möglichkeit 1: Manuelles Schalten von Kesseln

Der zweite und dritte Kessel können über das WebInterface mit dem jeweiligen Power-Button manuell ein- und ausgeschaltet werden. Wird beispielsweise ein Kessel für den Nachguss eingerichtet, kann in den Kessel-Einstellungen die Zieltemperatur auf 78°C gesetzt werden und der Kessel bei Bedarf am Brautag geschaltet werden.

### Möglichkeit 2: Automatisches Schalten von Kesseln

Der zweite und dritte Kessel können auch über den Maischeplan geschaltet werden:

![Kessel Konfiguration](/docs/img/kessel_2.jpg)

In diesem vereinfachten Maischeplan wird in Zeile 2 der dritte Kessel HLT automatisch eingeschaltet. Der Schritt HLT:100 mit einer Zieltemperatur von 78°C und einer Dauer von 0 Minuten schaltet den Nachguss mit 100% Leistung ein und setzt die Zieltemperatur auf 78°C. Weil die Dauer mit 0 Minuten angegeben ist, bleibt der Nachguss dauerhaft eingeschaltet. Der Brautomat geht direkt zum nächsten Maischeschritt und belässt den Nachguss eingeschaltet. Der PID Controller regelt dauerhaft die benötigte Leistung für das Erreichen und Halten der Zieltemperatur. Identisch zum Steuerbefehl HLT:100 wäre NACHGUSS:100. Hat der Nachguss in den Einstellungen den Namen "Kocher", kann der Steuerbefehl KOCHER:100 ebenfalls verwendet werden.

![Kessel Konfiguration](/docs/img/kessel_3.jpg)

In diesem Maischeplan wird im dritten Schritt der zweite Kessel Sud eingeschaltet. Im Gegensatz zum vorherigen Beispiel HLT wird der Kessel SUD für die Dauer von 15 Minuten mit der Zieltemperatur 100°C eingeschaltet. Der Brautomat verbleibt so lange auf diesem Schritt, bis die Zieltemperatur erreicht und die Rastdauer von 15 Minuten abgeschlossen ist. Anschließend wird der Kessel SUD ausgeschaltet und der Brautomat springt zum nächsten Schritt im Maischeplan.

Der Text "Teilmaische kochen" wird vom Brautomat als 100% interpretiert. Wenn nach dem Doppelpunkt keine Zahl zwischen 0 und 100 oder die Angaben ON bzw. OFF stehen, ersetzt der Brautomat den Text durch 100% Leistung.

## Beispiel unterschiedliche Leistung

Die Steuerbefehle können genutzt werden, um die maximale Leistung während des Brauprozesses anzupassen. Hat bspw. das Induktionskochfeld eine maximale Leistung von 3.5kW und der verwendete Braukessel ein Volumen von 20 Liter, dann kann der Steuerbefehl MAISCHE:75 genutzt werden, um die maximale Ausgangsleistung vom Induktionskochfeld auf 75% Leistung zu reduzieren. Die Rast mit dem Steuerbefehl MAISCHE:75 wird mit 0°C Zieltemperatur und 0 Minuten Dauer bei aktiviertem autonext erstellt.

## Beispiel Dekoktion

Wie oben beschrieben, wird eine Rast aus dem Maischeplan immer dem ersten Kessel (MAISCHE) zugewiesen, wenn kein Steuerbefehl (Doppelpunkt im Rastnamen) die Rast einem anderen Kessel zuweist. Ein Steuerbefehl kann den zweiten Kessel entweder mit einer Zieltemperatur ein-/ausschalten und direkt zur nächsten Rast springen oder mit einer Rastdauer in den Maischeprozess einbinden.

Im Brauverfahren Dekoktion werden Teilmaischen gekocht, während die Restmaische auf einer gewünschten Temperatur gehalten wird. Dekoktion mit dem Brautomat sieht wie folgt aus:

* Restmaische in den zweiten Kessel ziehen. Eine Rast Restmaische ziehen mit deaktiviertem autonext erfüllt diese Aufgabe.
* anschließend den zweiten Kessel auf eine gewünschte Temperatur mit einer Rastdauer von null Minuten dauerhaft einschalten. autonext ist aktiviert.
* Teilmaische im ersten Kessel mit der gewünschten Rastdauer kochen. autonext ist aktiviert.
* Restmaische aus dem zweiten Kessel zur Teilmaische in den ersten Kessel geben. autonext ist deaktiviert.

Die Rasten in einem Maischeplan in einer 2 oder 3 Kesselumgebung haben folgendes Prinzip:

* zu kochende Teilmaischen werden dem ersten Kessel zugewiesen
* Restmaischen mit Temperatur halten werden dem zweiten oder dritten Kessel zugewiesen
* der Nachguss wird immer dem zweiten oder dritten Kessel zugewiesen

## webhook

Der Parameter PIN weiß Relay muss auf "-" eingestellt werden, damit die Webhook-Elemente im WebInterface angezeigt werden. Zusätzlich werden die Webhook-URL und das Schaltkommando benötigt:

![webhook](/docs/img/kessel_webhook1.jpg)

Beispiel Shelly 1PM:

Shelly 1PM einschalten: <http://192.168.1.5/relay/0?turn=on>\
Shelly 1PM ausschalten: <http://192.168.1.5/relay/0?turn=off>

Die webhook URL für Shelly 1PM lautet: <http://192.168.1.5/relay/0?turn=> (ohne on und off). Der Parameter webhook Schalter muss auf "on/off" eingestellt werden.

URL Tasmota: <http://192.168.x.x/cm?cmnd=Power1%201>
