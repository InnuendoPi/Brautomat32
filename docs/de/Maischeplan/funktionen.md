# Funktionen

Die folgende Beschreibung wird ein _erfundenes Beispielrezpet_ verwendet. Diese Beschreibung hat nicht das Rezept als Inhalt, sondern das Vorgehen beim Maischen mit dem Brautomat.

Der Maischeplan hat eine Tabellenform. Diese Tabelle wird an einem Brautag von oben nach unten vom Brautomat abgearbeitet. Im Beispielrezept ist die Zeile _Einmaischen 50°C_ der erste Maischeschritt und _WHP Hallertauer Tradition_ der letzte Maischeschritt. Eine sehr wichtige Funktion im Maischeplan ist die Eigenschaft in der Spalte _autonext_.

## Grundfunktionen

![Maischeplan](/docs/img/brautomat.jpg)

Zur Orientierung wird zunächst der Aufbau der Tabellenzeilen beschrieben. Eine Zeile im Maischeplan stellt einen Schritt im Maischeplan dar. Jede Zeile der Tabelle hat diese Spalten:

* Die Spalte "Rast" zeigt einen Namen für diesen Maischeschritt
* Die Spalte "Temperatur" zeigt die Rast-Temperatur (in dieser Anleitung auch Ziel- oder Soll-Temperatur genannt)
* Die Spalte "Dauer" ist die Rast-Dauer (Timer), wie lange der Brautomat die Rast-Temperatur halten soll
* Die Spalte "autonext" besagt, ob automatisch zum nächsten Schritt gewechselt wird, wenn die Rast-Dauer (Timer) erfüllt ist

Nach diesen vier Angaben zum Maische-Schritt hat jede Zeile Buttons zum Editieren mit den folgenden Funktionen: (von links nach rechts)

![Maischeplan editieren](/docs/img/brautomat-111.jpg)

* verschiebe diese Zeile eine Position nach oben
* verschiebe diese Zeile eine Position nach unten
* editiere diese Zeile
* lösche diese Zeile

Im Tabellenkopf befinden sich folgende Buttons (von links nach rechts)

![Maischeplan editieren](/docs/img/brautomat-1.jpg)

* neue Zeile: füge einen neuen Maischeschritt an das Ende der Tabelle an
* Löschen: lösche die gesammte Tabelle (leerer Maischeplan)
* Reload: lese das Rezept aus der Datei neu. Änderungen werden nicht gespeichert. Der Button wird blau angezeigt
* Database: Maischeplan Auswahl, Import, Export und Maischeplan Zeitplaner
* Collapse: Maischeplan Tabelle ein- und ausklappen

![Maischeplan editieren](/docs/img/brautomat-11.jpg)

Wird eine Tabellenzeile editiert, verändern sich die Buttons.

* Exit: verlasse den Zeileneditor ohne Speichern. Der Button wird grau angezeigt
* Speicher: Änderung in der Tabellenzeile im Maischeplan speichern

Alle Buttons zum Editieren des Maischeplans werden ausgeblendet, sobald der Brauprozess gestartet wird. Der Collapse-Button zum ein- und ausklappen der Tabelle wird ausgeblendet, sobald der Maischeplan editiert wird.\
Zusammen mit den Steuerelementen Power, Play, Pause, Prev und Next ergibt sich eine intuitiv zu bedienende Brausteuerung. Der hier dargestellte Maischeplan ist ein Import aus dem kleinenBrauhelfer2. Der Import fügt automatisch die Rasttemperaturen und Rastdauer ein. Bei den Hopfengaben werden automatisch Alphasäure und Menge in Gramm an den Hopfennamen angefügt. Außerdem werden diese Kurzbezeichnungen vorangestellt:

* VWH: Vorderwürzenhopfung
* Kochen (ohne Hopfengaben)
* WPH: Whirlpool Hopfung

Zusätze wie im Bild dargestellt _Kochen Hefenahrung 1gr_ werden mit Zeitpunkt der Gabe und Menge in den Maischeplan aus dem kleinenBrauherlfer2 importiert.

## Tabelle Maischeplan editieren

Ein Maischeplan kann im Brautomat verändert oder auch vollständig neu erstellt werden. Mit dem Stiftsymbol wird eine Zeile der Tabelle Maischeplan in den Editormodus versetzt.

![Maischeplan editieren](/docs/img/brautomat-3.jpg)

Es können nun nacheinander beliebig viele Tabellenzeilen verändert werden. Sobald ein Symbol zum Editieren des Maischeplans angeklickt wurde, wechselt der Button _Speichern_ von grün in rot. Sind alle Änderungen durchgeführt, muss der Maischeplan mit dem Button _Speichern_ abgespeichert werden. Alternativ können alle Änderungen mit dem Button _Exit_ zum Beenden ohne speichern verworfen werden.

Sobald ein Maischeprozess über den Power Button gestartet wurde, ändert sich die Ansicht:

![Maischeplan editieren](/docs/img/brautomat-4.jpg)

Die Buttons zum Editieren werden ausgeblendet. Um diese wieder sichtbar zu machen, muss der Maischeprozess mit dem Button Pause aus der Steuerung angehalten werden:

![Maischeplan editieren](/docs/img/brautomat-5.jpg)

Wenn der Maischeprozess pausiert ist, wird der Button Pause in der Steuerung rot dargestellt und die Funktionen zum Editieren werden eingelendet. Das Induktionskochfeld wird nicht ausgeschaltet. Es wird weiterhin die Rasttemperatur gehalten. Wenn der Rast-Timer aktiv ist, wird er angehalten. Wird der Maischeplan verändert (Editormodus), werden der Pause Button zum Fortsetzen vom Maischeprozess und der Button Power deaktiviert und grau dargestellt, bis die Änderungen im Maischeplan entweder gespeichert oder verworfen (Exit) wurden.

Anwendungsbeispiel:\
Am Ende von einem Maischeprozess wird über eine Jodprobe festgestellt, dass die Maische noch nicht jodnormal ist und noch Stärke vorhanden ist. Die Rast Verzuckerung 72°C soll verlängert werden:

* Maischeprozess pausieren
* Das Stiftsymbol in der Zeile Verzuckerung 72°C anklicken
* Rastdauer der 2. Verzuckerung um 5 Minuten verlängern
* Speichern
* Pause Button klicken und der Maischeprozess wird mit angepasster Rast-Dauer fortgesetzt.

## Funktion und Verwendung von autonext

![Maischeplan autonext](/docs/img/Maischeplan-autonext.jpg)

Der erste Schritt im Maischeplan mit dem Namen _Einmaischen 50°C_ hat eine Rastdauer von 10 Minuten und ein deaktiviertes _autonext_. Im Bild dargestellt ist die Situation, wenn der Rasttimer die 10 Minuten erreicht hat: der Timer ist auf 00:00 Restzeit heruntergezählt. Der Play Button wechselt automatisch auf rot. Unten rechts erscheint eine Toast Nachricht "Klicke play Button". Das Induktionskochfeld wird ausgeschaltet. Der Brauprozess wartet auf einen Klick auf den Button Play.

* am Ende einer Rast mit deaktiviertem _autonext_ wird der Maischeprozess angehalten und die GGM IDS wird ausgeschaltet

Der zweite Schritt im Maischeplan mit dem Namen _Maltoserast 63°C_ hat als Rast-Temperatur 63°C und eine Rast-Dauer von 25 Minuten. Der Brautomat steuert in diesem Schritt das Induktionskochfeld zunächst auf 63°C. Sobald diese 63°C erreicht sind, startet der Brautomat den Timer. Ein Rast-Timer ist eine Stoppuhr, die auf 00:00 (0 Minuten : 0 Sekunden) heruntergezählt wird. Wenn diese Stoppuhr die Rast-Dauer von 25 Minuten erreicht hat, überprüft der Brautomat die Eigenschaft _autonext_. Wenn _autonext_ aktiviert ist, springt der Brautomat automatisch zum nächsten Schritt im Maischeplan. In diesem Bespielrezept zum Schritt _Verzuckerung 72°C_. Die Rast Verzuckerung hat eine Rasttemperatur von 72°C. Automatisch erhöht der Brautomat die Leistung vom Induktionskochfeld, um die neue Rast-Temperatur zu erreichen.

* am Ende einer Rast mit aktiviertem _autonext_ wird der Maischeprozess automatisch fortgesetzt und die GGM IDS bleibt eingeschaltet.

![Maischeplan autonext](/docs/img/Maischeplan-autonext2.jpg)

Die Eigenschaft _autonext_ im siebten Schritt _Abmaischen 78°C_ ist nicht aktiviert. Wenn der Brautomat auf ein deaktivertes autonext trifft, beendet der Brautomat die aktuelle Rast nach Ablauf der Rast-Dauer und setzt die Leistung vom Induktionskochfeld auf 0% (aus). In diesem Status wird der "Play Button" rot angezeigt. Zum Fortsetzen des Brauvorgangs muss auf den Play Button geklickt werden.

Als aktive Rast wird auf diesem Bild "Kochen", die aktuelle Leistung der GGM IDS wird mit 0% angezeigt und der Play Button ist rot. Dieser Status ist genau dann erreicht, wenn die Rast _Abmaischen 78°C_ beendet ist und der Brautomat auf das Fortsetzen durch eine Aktivität durch den Anwender wartet.

Während im ersten Beispiel von _autonext_ im Schritt Einmaischen meist direkt der Play Button zum Fortsetzen angeklickt wird, kann im zweiten Beispiel Abmaischen eine längere Zeit für das Läutern und die Läuterruhe vergehen. Der Brautomat wird in dem Zustand "Klicke Play Button" stehen gelassen. Es können in diesem Zustand alle Aktoren verwendet werden.

_Unterschied autonext und Pause: bei einem deaktiviertem autonext am Rastende wird die GGM IDS abgeschaltet. Mit dem Pause Button wird die Rast-Timer angehalten, aber die GGM IDS bleibt eingeschaltet und der Brautomat regelt die benötigte Leistung der GGM IDS._

In den folgenden Abschnitten werden optionale Sonderfunktionen beschrieben. Brautomat Einsteiger können die Beschreibung der Sonderfunktionen überspringen.

## Sonderfunktion 0°C Rast bei aktiviertem autonext

Eine Sonderfunktion hat die Rast-Temperatur 0°C bei aktivertem autonext: wenn die Rast-Temperatur auf 0°C gesetzt und autonext aktiviert ist, wird der Maischeschritt ohne Temperaturüberprüfung automatisch gestartet. Im Maischeplan Beispiel ist diese Sonderfunktion nach dem Würzekochen im Schritt _Nachisomerisierung_ dargestellt. Die Würze hat zu diesem Zeitpunkt eine Temperatur von ca. 100°C. Das Induktionskochfeld soll abgeschaltet werden und der Timer für die Nachisomerisierung soll direkt gestartet werden:

![Sonderfunktion 0°C](/docs/img/Maischeplan-Sonderfunktion.jpg)

Die Sonderfunktion _0°C Rasttemperatur mit aktiviertem autonext_ erfüllt genau dieses Anforderung: Ist- und Soll-Temperatur werden ignoriert und der Rast-Timer wird gestartet. Wäre die Rasttemperatur vom Schritt Nachisomerisierung nicht auf 0°C sondern bspw. auf 95°C eingestellt, würde der Rasttimer für den Schritt Nachisomerisierung erst starten, wenn die Temperatur im MaischeSud Kessel von 100°C auf 95°C abgekühlt ist. Während der Nachisomerisierung sinkt die Temperatur in der Würze. Ggfs. wird die Würze aktiv gekühlt. Die Sonderfunktion _0°C Rasttemperatur mit aktiviertem autonext_ bewirkt, dass das Induktionskochfeld ausgeschaltet bleibt.

_Hintergrund: Wenn die Funktion autonext aktiviert ist, vergleicht der Brautomat fortlaufend die aktuelle Ist-Temperatur mit der Rast-Temperatur. Die Eigenschaft "Temperatur delta zum Ziel" gibt an, wie viel Grad Unterschied vorhanden sein darf, um den nächsten Maische-Schritt automatisch zu starten. Bei einer Rasttemperatur von 63°C und bei einem "Temperatur delta zum Ziel" von 0.3°C würde der Maischeschritt ab einer Ist-Temperatur von 62.7°C bei steigender Temperatur und ab 63.3°C bei sinkender Temperatur gestartet._

## Brauverfahren

Durch die Tabellenform ist das Grundprinzip vom Brautomat die aufsteigende Infusion. Das schließt Varianten wie bspw. das Earlsche Kochmaischverfahren ein. Mit Hilfe der Eigenschaft "autonext" können auch andere Brauverfahren umgesetzt werden. Es gilt aber zu beachten, dass der Brautomat bei anderen Brauverfahren nur mit "halber Automatik" unterstützen kann. Ein auslösender Trigger für eine Aktion wie bspw. das Ziehen von Teilmaischen, muss durch den Anwender manuell erfolgen. Manuell bedeuet beim Brautomat das Anklicken vom Play Button. Eine Rast mit null Minuten Dauer und deaktiviertem autonext kann als Auslöser für eine manuelle Aktion genutzt werden.

_Hinweis: die folgenden zwei Themen Sonderfunktion Aktoren Schalten und Sonderfunktion IDS Profilwechsel sind optional und für den Einstieg in den Brautomat nicht relevant._

## Sonderfunktion Aktoren Schalten

Eine zweite Sonderfunktion sind Steuerbefehle für die Induktionskochfelder Maische und Sud, den Nachguss und die Aktoren. Die Syntax für den Maischeschritt lautet:

* Aktorname:Leistung

Dabei kann die Leistung entweder ON oder OFF oder eine Zahl zwischen 0 und 100% sein. Dabei entspricht der Status OFF dem Wert 0% und ON dem Wert 100%. Der Steuerbefehl für das erste Induktionskochfeld lautet IDS oder MAISCHE. Der Steuerbefehl für das zweite Induktionskochfeld lautet SUD. Der Steuerbefehl für den Nachguss lautet HLT. Für den Nachguss ist zusätzlich der Steuerbefehl Nachguss nutzbar. Der Steuerbefehl für einen Aktor ist der Aktorname.

![Sonderfunktion Steuerbefehl](/docs/img/Maischeplan-Aktoren.jpg)

Der Maischeplan im Bild schaltet an drei Stellen Aktoren. Direkt zu Beginn wird das Rührwerk eingeschaltet: Ruehrwerk:ON
Kurz vor dem Ende des Maischeplans wird das Rührwerk mit dem Befehl Ruehrwerk:OFF ausgeschaltet und der Nachguss mit Nachuss:ON eingeschaltet. Aktornamen dürfen keine Sonderzeichen (außer - und _), Umlaute oder Leerzeichen enthalten und müssen eindeutig sein. Das Web Interface überprüft automatische die Eingaben.

Der Steuerbefehl für einen Aktor kann mit einer Leistung angegeben werden, bspw. PUMPE:60. Der Aktor Pumpe würde nun mit 60% eingeschaltet werden. Das setzt voraus, dass dieser Aktor für PWM aktiviert wurde. Wird der Steuerbefehl für einen Aktor ohne PWM ausgeführt, dann wird die Leistung 60% ersetzt durch ON bzw. 100%. Die Rasttemperatur und die Rastdauer müssen für bei Steuerbefehlen für Aktoren auf 0 gesetzt sein.

Der Steuerbefehl IDS:50 setzt die maximale Ausgangsleistung vom Induktionskochfeld auf 50%. Ebenso kann der Nachguss mit HLT:75 auf 75% Leistung gesetzt werden.

![Sonderfunktion Steuerbefehl](/docs/img/sonderfunktion_sud1.jpg)

Der Steuerbefehl SUD:Dickmaische kochen und einer Rastdauer von 10 Minuten und einer Rasttempertur von 100 Grad führt einen Maischeschritt auf einem zweiten Induktionskochfeld aus. Der Rasttimer wird gestartet, sobald die Rasttemperatur erreicht ist.

![Sonderfunktion Steuerbefehl](/docs/img/sonderfunktion_sud2.jpg)

Der Steuerbefehl SUD:Dickmaische kochen und einer Rasttempertur von 100 Grad aber ohne Rastdauer schaltet das zweite Induktionskochfeld ein, startet den PID Controller und springt direkt zum nächsten Schritt im Maischeplan.

![Sonderfunktion Steuerbefehl](/docs/img/sonderfunktion_sud3.jpg)

Der Maischeschritt Verzuckerung 72°C wird auf dem ersten Induktionkochfeld "Maische" ausgeführt. Der PID Controller regelt die benötigte Leistung für den Kessel "Maische". Zeitgleich regelt der PID Controller die benötigte leistung für den Kessel "Sud".

Beispiele:

* Ruehrwerk:ON
* Ruehrwerk:OFF
* RHE:40
* IDS:75
* IDS:OFF
* HLT:100
* HLT:OFF
* SUD:Dickmaische kochen
* SUD:60

_Hinweis: über die Steuerbefehle können die Kessel Maische, Sud und HLT zeitgleich genutzt werden. Es kann aber nur ein Rasttimer aktiv sein. Das erste Induktionskochfeld "Maische" muss immer eine Rastdauer eingetragen haben._

Beispiel Dekoktion mit zwei Induktionskochfeldern:

![Sonderfunktion Steuerbefehl](/docs/img/sonderfunktion_sud4.jpg)

Aufgrund der Einschränkung "der erste Kessel "Maische" muss immer mit einer Rastdauer betrieben werden", ergibt sich für die Prozesse Dekoktion ein einfaches Vorgehen: die zu kochende Teilmaische muss in den Kessel "Maische" und die auf Temperatur zu haltende Teilmaische muss in den Kessel "Sud".

Beispiel für die Verwendung der Leistung für das Induktionskochfeld:

Gegeben sei eine Schüttung mit 7kg und ein Hauptguss mit 28l. In Summe beträgt die Masse 35kg\

Mit Hilfe der Sonderfunktion IDS:<Leistung in %> kann die Leistung der GGM IDS so eingestellt werden, dass beim Maischen die Aufheizrate 1°C pro Minute beträgt.

![Sonderfunktion Steuerbefehl](/docs/img/IDS-Sonderfunktion.jpg)

_Erläuterungen zum Rechenweg siehe: Parameter der GGM IDS - Temperatursteuerung - Maximale Leistung der IDS._

`Benötigte Leistung P = m * c * T / (t * w)`\
`Der Ausdruck c * T / (t * w) wird bei einem Wirkungsgrad von 80% für das Induktionskochfeld ersetzt durch den Wert 75`\
`Die Masse m beträgt 35kg`\
`P = 35 x 75 = 2625`
`2625W sind 75% der max. Leistung 3500W (2625 / 3500 * 100 = 75%)`\

In dem oben dargestellten Maischeplan wird in Zeile 2 mit dem Steuerbefehl "IDS:75" die maximale Leistung der IDS nach dem Einmaischen auf 75% gesetzt. Mit diesem Steuerbefehl werden die nächsten Schritte (Maltoserast, Verzuckerung und Abmaischen) mit maximal 75% Leistung durchgeführt. Nach dem Abmaischen muss der User auf den Play Button klicken (autonext deaktiviert). Hier beginnt das Läutern, gefolgt von der Läuterruhe etc. Der Brauprozess wird mit dem Steuerbefehl "IDS:100" fortgesetzt. Die maximale Leistung der IDS wird zum Kochen der Würze auf 100% Leistung gesetzt.

_Hinweis: Der hier verwendete Wirkungsgrad 80% für ein Induktionskochfeld ist eine Durchschnittswert. Ein isolierter und abgedeckter Maischekessel (Deckel oder Rührwerk) kann einen höheren Wirkungsgrad besitzen._

## Sonderfunktion IDS Profilwechsel

Eine weitere Sonderfunktion ist der PID Profilwechsel. Der Befehl lautet IDSPROFIL. Als Zahl wird die Profilnummer angegeben. Das erste Profil hat die Nummer 0 (null), das 2. Prodil die Nummer 1

Beispiele:

IDSPROFIL:0
IDSPROFIL:1

Der Profilwechsel ermöglicht die Verarbeitung von Teilmaischen mit angepassten PID Parametern.

### Beispiel Steuerbefehl IDS

Für das Beispiel sei folgende Konfiguration für die GGM IDS bzw. den MasicheSud Kessel gegeben:

![Sonderfunktion Steuerbefehl](/docs/img/aktoren_schalten4.jpg)

Die maximale Ausgangsleistung ist mit 100% auf dem Standardwert konfiguriert. Die Temperatur "Übergang zum Kochen" beträgt 95°C. Ab dieser Temepratur beträgt die maximale Ausgangsleistung der GGM IDS nur noch 80%.

Der Maischeplan in der Abbildung startet mit dem Schritt "Hauptguss aufheizen". Das Induktionskochfeld GGM IDS würde mit der Leistung "Max. Leistung IDS" (Parameter im Tab Temperatursteuerung) das Wasser erhitzen, also mit 100%.

![Sonderfunktion Steuerbefehl](/docs/img/aktoren_schalten2.jpg)

Bei 59°C startet der Rasttimer. Die Rastdauer beträgt null Minuten. Der Brautomat springt in die nächste Zeile zu Schritt 2.
Der Steuerbefehl IDS:65 setzt die maximale Leistung der IDS auf 65%. Der Brautomat springt in die nächste Zeile zu Schritt 3.
Nun wird von 59°C auf die Zieltemperatur im Schritt "Einmaischen" aufgeheitzt. Die maximale Leistung der IDS beträgt 65%.

Die maximale Ausgangsleistung von 65% wird in den folgenden Maischeschritten beibehalten. Bis der Brautomat nach dem Schritt "Abmaischen" auf en Steuerbefehl IDS:100 trifft

![Sonderfunktion Steuerbefehl](/docs/img/aktoren_schalten3.jpg)

Der Steuerbefehl ändert die maximale Ausgangsleistung der IDS auf 100%. Nun wird die Würze bis zur Temperatur "Übergang zum Kochen" bei 95°C (siehe oben) mit 100% Leistung erhitzt. Ab 95°C schaltet die GGM IDS auf 80% Leistung. 80% entspricht dem Parameter "Leistung ab Übergang".

Mit den Steuerbefehlen für die IDS kann ein Anbrennen der Maische oder ein Überkochen der Würze verhindert werden, insbesondere bei kleineren Kesselvolumen.
