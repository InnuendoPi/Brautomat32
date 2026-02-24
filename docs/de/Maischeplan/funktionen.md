# Funktionen

In der folgenden Beschreibung wird ein _erfundenes Beispielrezept_ verwendet. Diese Beschreibung hat nicht das Rezept zum Inhalt, sondern die Vorgehensweise beim Maischen mit dem Brautomat.

Der Maischeplan hat die Form einer Tabelle. Diese Tabelle wird an einem Brautag von der Brauanlage von oben nach unten abgearbeitet. Im Beispielrezept ist die Zeile _Einmaischen 50°C_ der erste Maischeschritt und _WHP Hallertauer Tradition_ der letzte Maischeschritt. Eine sehr wichtige Funktion im Maischeplan ist die Eigenschaft in der Spalte _autonext_.

## Grundfunktionen

![Maischeplan](/docs/img/brautomat.jpg)

Zur Orientierung wird zunächst der Aufbau der Tabellenzeilen beschrieben. Eine Zeile im Maischeplan stellt einen Schritt im Maischeplan dar. Jede Tabellenzeile hat diese Spalten:

* Die Spalte "Rast" zeigt einen Namen für diesen Maischeschritt.
* In der Spalte "Temperatur" steht die Rasttemperatur (in diesem Handbuch auch Ziel- oder Solltemperatur genannt).
* In der Spalte "Dauer" steht die Rastzeit (Timer), wie lange der Brautomat die Rasttemperatur halten soll.
* Die Spalte "autonext" gibt an, ob nach Ablauf der Rastzeit (Timer) automatisch zum nächsten Schritt übergegangen wird.

Nach diesen vier Angaben zum Maischschritt befinden sich in jeder Zeile Editierbuttons mit folgenden Funktionen (von links nach rechts):

![Maischeplan editieren](/docs/img/brautomat-111.jpg)

* verschiebe diese Zeile eine Position nach oben
* verschiebe diese Zeile eine Position nach unten
* editiere diese Zeile
* lösche diese Zeile

Im Tabellenkopf befinden sich folgende Buttons (von links nach rechts)

![Maischeplan editieren](/docs/img/brautomat-1.jpg)

* neue Zeile: füge einen neuen Maischeschritt an das Ende der Tabelle an
* Löschen: lösche die gesamte Tabelle (leerer Maischeplan)
* Reload: lese das Rezept aus der Datei neu. Änderungen werden nicht gespeichert. Der Button wird blau angezeigt
* Database: Einstellungen, Auswahl, Import, Export und Löschen von Maischeplänen
* Collapse: Maischeplan Tabelle ein- und ausklappen

![Maischeplan editieren](/docs/img/brautomat-11.jpg)

Wenn eine Tabellenzeile bearbeitet wird, ändern sich die Buttons.

* Exit: verlasse den Zeileneditor ohne Speichern. Der Button wird grau angezeigt
* Speicher: Änderung in der Tabellenzeile im Maischeplan speichern

Alle Buttons zum Editieren des Maischeplans werden ausgeblendet, sobald der Brauprozess gestartet wird. Der Collapse-Button zum Ein- und Ausklappen der Tabelle wird ausgeblendet, sobald der Maischeplan editiert wird.

Zusammen mit den Steuerelementen Power, Play, Pause, Prev und Next ergibt sich eine intuitiv zu bedienende Brausteuerung. Der hier gezeigte Maischplan ist ein Import aus dem kleinenBrauhelfer2. Der Import fügt automatisch die Rasttemperaturen und Rastzeiten ein. Bei den Hopfengaben werden die Alphasäure und die Menge in Gramm automatisch an den Hopfennamen angehängt. Außerdem werden diese Kurzbezeichnungen vorangestellt:

* VWH: Vorderwürzenhopfung
* Kochen (ohne Hopfengaben)
* WHP: Whirlpool Hopfung

Zusätze wie im Bild dargestellt _Kochen Hefenahrung 1gr_ werden mit Zeitpunkt der Gabe und Menge in den Maischeplan aus dem kleinenBrauhelfer2 importiert.

## Tabelle Maischeplan editieren

Ein Maischeplan kann im Brautomat verändert oder auch vollständig neu erstellt werden. Mit dem Stiftsymbol wird eine Zeile der Tabelle Maischeplan in den Editormodus versetzt.

![Maischeplan editieren](/docs/img/brautomat-3.jpg)

Es können nun nacheinander beliebig viele Tabellenzeilen verändert werden. Sobald ein Symbol zum Editieren des Maischeplans angeklickt wurde, wechselt der Button _Speichern_ von grün in rot. Sind alle Änderungen durchgeführt, muss der Maischeplan mit dem Button _Speichern_ abgespeichert werden. Alternativ können alle Änderungen mit dem Button _Exit_ zum Beenden ohne speichern verworfen werden.

Sobald ein Maischeprozess über den Power Button gestartet wurde, ändert sich die Ansicht:

![Maischeplan editieren](/docs/img/brautomat-4.jpg)

Die Buttons zum Editieren werden ausgeblendet. Um diese wieder sichtbar zu machen, muss der Maischeprozess mit dem Button Pause aus der Steuerung angehalten werden:

![Maischeplan editieren](/docs/img/brautomat-5.jpg)

Wenn der Maischeprozess pausiert ist, wird der Button Pause in der Steuerung rot dargestellt und die Funktionen zum Editieren werden eingeblendet. Das Induktionskochfeld wird nicht ausgeschaltet. Es wird weiterhin die Rasttemperatur gehalten. Wenn der Rast-Timer aktiv ist, wird er angehalten. Wird der Maischeplan verändert (Editormodus), werden der Pause-Button zum Fortsetzen des Maischeprozesses und der Button Power deaktiviert und grau dargestellt, bis die Änderungen im Maischeplan entweder gespeichert oder verworfen (Exit) wurden.

Anwendungsbeispiel:\
Am Ende eines Maischeprozesses wird über eine Jodprobe festgestellt, dass die Maische noch nicht jodnormal ist und noch Stärke vorhanden ist. Die Rast Verzuckerung 72°C soll verlängert werden:

* Maischeprozess pausieren
* Das Stiftsymbol in der Zeile Verzuckerung 72°C anklicken
* Rastdauer der 2. Verzuckerung um 5 Minuten verlängern
* Speichern
* Pause-Button klicken und der Maischeprozess wird mit angepasster Rastdauer fortgesetzt.

## Funktion und Anwendung von autonext

![Maischeplan autonext](/docs/img/Maischeplan-autonext.jpg)

Der erste Schritt des Maischeplans mit dem Namen _Einmaischen 50°C_ hat eine Rastzeit von 10 Minuten und einen deaktivierten _autonext_. Das Bild zeigt die Situation, wenn der Rasttimer die 10 Minuten erreicht hat: Der Timer ist auf 00:00 Restzeit heruntergezählt. Der Play-Button wechselt automatisch auf rot. Unten rechts erscheint die Toastmeldung "Click play button". Das Kochfeld schaltet sich aus. Der Brauprozess wartet auf einen Klick auf den Play Button. Das WebInterface zeigt den nächsten Schritt an, welcher mit Klick auf Play gestartet wird.

* Am Ende einer Pause mit deaktiviertem _autonext_ wird der Brauprozess gestoppt und das Kochfeld ausgeschaltet.

Der zweite Maischschritt mit der Bezeichnung _Maltoserast 63°C_ hat eine Rasttemperatur von 63°C und eine Rastzeit von 25 Minuten. In diesem Schritt steuert der Brautomat das Kochfeld zunächst auf 63°C. Sobald diese 63°C erreicht sind, startet der Brautomat den Timer. Ein Rasttimer ist eine Stoppuhr, die auf 00:00 (0 Minuten : 0 Sekunden) herunterzählt. Wenn dieser Timer die Rastzeit von 25 Minuten erreicht hat, überprüft der Brautomat die Eigenschaft _autonext_. Wenn _autonext_ aktiviert ist, springt der Brautomat automatisch zum nächsten Schritt im Maischeplan. In diesem Beispielrezept ist dies der Schritt _Verzuckerung 72°C_. Der Schritt Verzuckerung hat eine Rasttemperatur von 72°C. Der Brautomat erhöht automatisch die Leistung des Kochfeldes, um die neue Rasttemperatur zu erreichen.

* Am Ende einer Rast mit aktiviertem _autonext_ wird der Maischprozess automatisch fortgesetzt und das Kochfeld bleibt eingeschaltet.

![Maischeplan autonext](/docs/img/Maischeplan-autonext2.jpg)

Die Eigenschaft _autonext_ im siebten Schritt _Abmaischen 78°C_ ist nicht aktiviert. Trifft der Brautomat auf ein deaktiviertes autonext, beendet der Brautomat nach Ablauf der Rastzeit die aktuelle Rast und schaltet das Kochfeld aus (0% Leistung). In diesem Zustand wird der Play Button rot dargestellt. Um den Brauvorgang fortzusetzen, muss der Play Button angeklickt werden.

Während im ersten Beispiel von _autonext_ im Schritt Einmaischen meist direkt der Play Button zum Fortsetzen angeklickt wird, kann im zweiten Beispiel Abmaischen eine längere Zeit für das Läutern und die Läuterruhe vergehen. Der Brautomat wird im Zustand "Play Button klicken" belassen. Das Kochfeld vom ersten Kessel verbleibt ausgeschaltet. In diesem Zustand können alle Aktoren und auch die zwei anderen Kessel verwendet werden.

## Unterschied Autonext und Pause

Bei deaktiviertem Autonext am Rastende wird das Kochfeld abgeschaltet. Mit dem Pause Button wird der Rasttimer angehalten, das Kochfeld bleibt aber eingeschaltet und der Brautomat berechnet die benötigte Leistung für das Kochfeld.

In den folgenden Abschnitten werden die optionalen Sonderfunktionen beschrieben. Brautomat-Einsteiger können die Beschreibung der Sonderfunktionen überspringen.

## Sonderfunktion 0°C Rast bei aktiviertem Autonext

Eine Sonderfunktion ist die Rasttemperatur 0°C bei aktiviertem autonext: Wird die Rasttemperatur auf 0°C gesetzt und autonext aktiviert, wird der Maischeschritt ohne Temperaturkontrolle automatisch gestartet. Im Maischplanbeispiel ist diese Sonderfunktion nach dem Würzekochen im Schritt _Nachisomerisierung_ dargestellt. Die Würze hat zu diesem Zeitpunkt eine Temperatur von ca. 100°C. Das Kochfeld soll abgeschaltet und der Timer für die Nachisomerisierung direkt gestartet werden:

![Sonderfunktion 0°C](/docs/img/Maischeplan-Sonderfunktion.jpg)

Die Sonderfunktion _0°C Rasttemperatur mit aktiviertem autonext_ erfüllt genau diese Anforderung: Ist- und Solltemperatur werden ignoriert und der Rasttimer wird gestartet. Wäre die Rasttemperatur des Schrittes Nachisomerisierung nicht auf 0°C, sondern z.B. auf 95°C eingestellt, würde der Rasttimer für den Schritt Nachisomerisierung erst starten, wenn die Temperatur im MaischeSud Kessel von 100°C auf 95°C abgekühlt ist. Während der Nachisomerisierung sinkt die Temperatur in der Würze. Bei Bedarf wird die Würze aktiv gekühlt. Die Sonderfunktion _0°C Rasttemperatur bei aktiviertem autonext_ bewirkt, dass das Kochfeld ausgeschaltet bleibt.

## Brauverfahren

Das Grundprinzip des Brautomaten ist die aufsteigende Infusion. Dies schließt Varianten wie z.B. das Earlsche Kochmaischverfahren ein. Durch die Eigenschaft "autonext" können auch andere Brauverfahren realisiert werden. Es ist jedoch zu beachten, dass der Brautomat bei anderen Brauverfahren nur halbautomatisch unterstützen kann. Ein auslösender Trigger für eine Aktion, wie z.B. das Ziehen von Teilmaischen, muss manuell durch den Bediener erfolgen. Manuell bedeutet beim Brautomat die Verwendung der Buttons Play und Pause. Als Auslöser für eine manuelle Aktion kann eine Rast von null Minuten mit deaktiviertem Autonext verwendet werden.

Hinweis: Die folgenden Themen zu den Steuerbefehlen sind optional und für den Einstieg in den Brautomat nicht relevant.

## Braukessel

Der Brautomat unterstützt bis zu drei Braukessel. Der erste Kessel ist für den Maischeprozess erforderlich. Ein zweiter Kessel ist optional und kann bspw. in Brauverfahren wie Dekoktion eingesetzt werden. Der dritte Kessel wird häufig als Nachguss eingesetzt und ist ebenfalls optional. Die Verwendung des 2. und 3. Kessels ist frei wählbar, lediglich der erste Kessel ist an den Maischeprozess und hier speziell an den Rast-Timer gebunden.

Standardnamen für Steuerbefehle:

* Erster Kessel: IDS oder MAISCHE
* Zweiter Kessel: MLT oder SUD
* Dritter Kessel: HLT oder NACHGUSS

## Steuerbefehle

Eine zweite Sonderfunktion sind Steuerbefehle für die Kochfelder und Aktoren. Die Syntax für den Maischeschritt lautet.

* Aktorname:Leistung

Die Leistung kann entweder ON oder OFF oder eine Zahl zwischen 0 und 100% sein. Dabei entspricht der Zustand OFF dem Wert 0% und ON dem Wert 100%. Der Steuerbefehl für das erste Induktionskochfeld ist IDS oder MAISCHE. Der Steuerbefehl für das zweite Induktionskochfeld ist SUD. Der Steuerbefehl für den Nachguss ist HLT. Der Steuerbefehl für einen Aktor ist der Aktorname.

![Aktor Steuerbefehl](/docs/img/Maischeplan-Aktoren.jpg)

Der Maischeplan im Bild schaltet an drei Stellen Aktoren. Gleich zu Beginn wird das Rührwerk eingeschaltet: Rührwerk:ON
Kurz vor Ende des Maischeplans wird das Rührwerk ausgeschaltet: Ruehrwerk:OFF und der Nachguss eingeschaltet: Nachguss:ON.

Der Steuerbefehl für einen Aktor kann mit einer Leistung angegeben werden, z.B. PUMPE:60. Der Aktor Pumpe wird dann mit 60% Leistung eingeschaltet. Dies setzt voraus, dass dieser Aktor für PWM aktiviert wurde. Die Rast-Temperatur und die Rastdauer müssen bei Steuerbefehlen auf 0 gesetzt werden.

Der Steuerbefehl IDS:50 setzt die maximale Ausgangsleistung des Kochfeldes auf 50%. Ebenso kann mit HLT:75 der Nachguss auf 75% Leistung eingeschaltet werden.

![IDS Steuerbefehl](/docs/img/sonderfunktion_sud1.jpg)

Der Steuerbefehl SUD:Dickmaische kochen mit einer Rastzeit von 10 Minuten und einer Rasttemperatur von 100 Grad führt einen Maischeschritt auf einem zweiten Kochfeld durch. Der Rasttimer wird gestartet, sobald die Rasttemperatur erreicht ist.

![Steuerbefehl SUD](/docs/img/sonderfunktion_sud2.jpg)

Der Steuerbefehl SUD:Dickmaische kochen mit einer Rasttemperatur von 100 Grad aber ohne Rastzeit schaltet das zweite Kochfeld ein, startet den PID-Controller für das Kochfeld und springt direkt zum nächsten Schritt im Maischeplan.

![Steuerbefehl SUD](/docs/img/sonderfunktion_sud3.jpg)

Der Maischeschritt Verzuckerung 72°C wird auf dem ersten Kochfeld _Maische_ durchgeführt. Der PID-Regler regelt die erforderliche Leistung für den Maischkessel. Gleichzeitig regelt der PID-Controller die benötigte Leistung für den Kessel _Sud_.

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

### Sonderbefehl Leistung ab Übergang (ab 1.60)

Zusätzlich zur allgemeinen Leistungsbegrenzung (`IDS:75`) kann im Maischeplan auch die Leistung ab Übergang zum Kochen direkt gesetzt werden:

* `IDSTHRESOUT:80`
* `MAISCHETHRESOUT:80`

Der Wert gilt in Prozent (0 bis 100) und steuert die feste Kochleistung ab dem eingestellten Übergang zum Kochen. Das ist besonders hilfreich, wenn beim Aufheizen 100% Leistung gewünscht sind, beim wallenden Kochen aber z. B. nur 70 bis 85% sinnvoll sind.

_Hinweis: Mit den Steuerbefehlen können die Kessel Maische, Sud und HLT gleichzeitig betrieben werden. Es kann jedoch nur ein Rasttimer aktiv sein. Der Rasttimer ist immer mit dem ersten Kochfeld "Maische" verknüpft._

### Beispiel Steuerbefehl IDS

Als Beispiel wird die folgende Konfiguration für das GGM IDS bzw. den Kessel MaischeSud gegeben:

![IDS Steuerbefehl](/docs/img/aktoren_schalten4.jpg)

Die maximale Leistungsabgabe ist auf 100% voreingestellt. Die Temperatur "Übergang zum Kochen" beträgt 95°C. Ab dieser Temperatur beträgt die maximale Ausgangsleistung des GGM IDS nur noch 80%.

Der Maischeplan in der Abbildung beginnt mit dem Schritt "Aufheizen des Hauptgusses". Das Induktionskochfeld GGM IDS würde das Wasser mit der Leistung "Max. Leistung IDS" (Parameter im Register Temperatursteuerung), also mit 100%, erhitzen.

![IDS Steuerbefehl](/docs/img/aktoren_schalten2.jpg)

Bei 59°C startet der Rasttimer. Die Rastzeit beträgt null Minuten. Der Brautomat springt in die nächste Zeile zu Schritt 2.
Der Steuerbefehl IDS:65 setzt die maximale Leistung des IDS auf 65%. Der Brautomat springt auf die nächste Zeile zu Schritt 3.
Nun wird von 59°C auf die Zieltemperatur im Schritt "Maischen" aufgeheizt. Die maximale Leistung des IDS beträgt 65%.

Die maximale Ausgangsleistung von 65% wird in den folgenden Maischschritten beibehalten. Bis der Brautomat nach dem Maischschritt auf den Steuerbefehl IDS:100 trifft.

![IDS Steuerbefehl](/docs/img/aktoren_schalten3.jpg)

Der Steuerbefehl ändert die maximale Ausgangsleistung des IDS auf 100%. Die Würze wird nun mit 100% Leistung bis zur Temperatur "Übergang zum Kochen" bei 95°C (siehe oben) aufgeheizt. Ab 95°C schaltet das GGM IDS auf 80% Leistung. 80% entspricht dem Parameter "Leistung ab Übergang".

Mit den Steuerbefehlen für die IDS kann ein Anbrennen der Maische oder ein Überkochen der Würze, insbesondere bei kleineren Kesselvolumina, verhindert werden.

### Beispiel: Dekoktion mit zwei Kochfeldern

![IDS und SUD Steuerbefehl](/docs/img/sonderfunktion_sud4.jpg)

Aufgrund der Einschränkung _der erste Kessel Maische muss immer mit einer Rastzeit betrieben werden_ ergibt sich für die Prozesse Dekoktion eine einfache Vorgehensweise: die zu kochende Teilmaische muss in den Kessel _Maische_ und die auf Temperatur zu haltende Teilmaische muss in den Kessel _Sud_.

### Beispiel für die Verwendung der Leistung für ein Kochfeld

Gegeben sei eine Schüttung mit 7kg und ein Hauptguss mit 28l. In Summe beträgt die Masse 35kg\

Mit Hilfe der Sonderfunktion IDS:<Leistung in %> kann die Leistung eines Kochfeldes so eingestellt werden, dass beim Maischen die Aufheizrate 1°C pro Minute beträgt.

![Steuerbefehl MAISCHE Leistung](/docs/img/IDS-Sonderfunktion.jpg)

_Erläuterungen zum Rechenweg siehe: Parameter der GGM IDS - Temperatursteuerung - Maximale Leistung der IDS._

```json

    Benötigte Leistung P = m * c * T / (t * w)
    Der Ausdruck c * T / (t * w) wird bei einem Wirkungsgrad von 80% für das Induktionskochfeld ersetzt durch den Wert 75
    Die Masse m beträgt 35kg
    P = 35 x 75 = 2625
    2625W sind 75% der max. Leistung 3500W (2625 / 3500 * 100 = 75%)

```

Im oben dargestellten Maischeplan wird in Zeile 2 mit dem Steuerbefehl "IDS:75" die maximale Leistung der IDS nach dem Einmaischen auf 75% eingestellt. Mit diesem Steuerbefehl werden die folgenden Schritte (Maltoserast, Verzuckerung und Abmaischen) mit einer maximalen Leistung von 75% durchgeführt. Nach dem Abmaischen muss der Benutzer auf den Play-Button klicken (Autonext deaktiviert). Hier beginnt das Läutern, gefolgt von der Läuterruhe usw. Der Brauprozess wird mit dem Steuerbefehl "IDS:100" fortgesetzt. Die maximale Leistung der IDS wird für das Würzekochen auf 100% Leistung gesetzt.

_Hinweis: Der hier verwendete Wirkungsgrad von 80% für ein Induktionskochfeld ist ein Durchschnittswert. Ein isolierter und abgedeckter Maischebehälter (Deckel oder Rührwerk) kann einen höheren Wirkungsgrad haben._

## Sonderfunktion Profilwechsel

Eine weitere Sonderfunktion ist der Profilwechsel. Der Befehl lautet IDSPROFIL, SUDPROFIL und HLTPROFIL. Hinter dem Doppelpunkt folgt der Profilname.

Beispiele:

IDSPROFIL:Profil68l\
IDSPROFIL:Profil36l

Mit diesem Sonderbefehl werden alle Parameter eines Kessels ausgetauscht. Auf diese Weise können unterschiedliche Hardware-Profile hinterlegt werden. Im Brauverfahren Dekoktion bietet der Sonderbefehl eine einfache Möglichkeit, bei gleichem Kessel und kleinerem Volumen angepasste Parameter einzusetzen.

Die Sonderbefehle IDS: und IDSPROFIL: haben unterschiedliche Wirkungen: Der Sonderbefehl IDS: verändert die maximale Ausgangsleistung. Alle anderen Parameter bleiben gleich.

_Hinweis: der Sonderbefehl IDSPROFIL im Maischeplan wird abgebrochen, wenn der Gerätetyp (IDS1, IDS2 oder Relais) nicht identisch ist._

## Beispiel Brautag

Abschließend werden die Sonderbefehle, die Hopfengaben und das allgemeine Vorgehen anhand eines Brautages zusammengefasst. Dieses Beispiel basiert auf folgendem Setup:

Zwei-Kessel-Umgebung:

* ein Maische-Sud-Kessel (Volumen 70l, GGM IDS2 mit 3.6kW)
* ein Nachguss Kessel (Wasserkocher 35l, 2kW)

Zwei Aktoren:

* ein Rührwerk (relaisgesteuert)
* ein Ringheizelement (im MaischeSud Kessel, 3.5kW)

Der Maischeplan:

![example mash plan brewing day](/docs/img/example_control_commands1.jpg)

Das Beispiel zeigt, wie einfach es ist, über Sonderbefehle Aktoren ein- und auszuschalten bzw. Sonderbefehle in den Maischeplan einzubinden. Im ersten Maischeschritt wird das Rührwerk eingeschaltet. Der Brautomat führt den Sonderbefehl aus und springt sofort zum nächsten Schritt im Maischeplan. Der Schritt Einmaischen (mash in) wurde mit einer Dauer von 1 Minute und deaktiviertem autonext konfiguriert. In diesem Schritt wird das Malz zum Brauwasser gegeben. Der Schritt dauert länger als eine Minute, aber je nach Schüttung ist vorab nicht bekannt, wie lange das Einmaischen dauern wird. Nach einer Minute Einmaischen schaltet der Brautomat das Kochfeld ab und zeigt den Play-Button in rot an (deaktiviertes autonext). Der Brautomat "wartet" nun, bis der Schritt abgeschlossen ist und der Play-Button geklickt wird. Aus dem Zustand Kochfeld ausgeschaltet und Zugabe Malze ergibt sich eine Mischtemperatur für die Maische, die unterhalb von 55°C liegen wird. Dieses Vorgehen ist bspw. für ein ruhiges, langsames Zugeben der Malze oder auch für eine kurze Eiweißrast geeignet.

_Alternative:_ die Eigenschaft autonext aktivieren und die Rastdauer auf 5 Minuten setzen. In dem Fall würde der Brautomat die Einmaischtemperatur 5 Minuten lang halten (Einmaischen) und anschließend automatisch zur nächsten Rast aufheizen.

Der nächste Schritt ist die Maltoserast. Der PID Controller regelt die benötigte Leistung, um die Zieltemperatur in der Maische zu erreichen und für die Dauer von 40 Minuten zu halten. In Zeile 4 wird per Sonderbefehl der Nachguss eingeschaltet. Die Zieltemperatur für den Nachguss beträgt 75°C und die Dauer beträgt 0 Minuten. Der Brautomat startet für den Kessel Nachguss den PID Controller und regelt die benötigte Leistung im Hintergrund. An dieser Stelle vom Maischeplan sind zwei PID Controller aktiv: ein PID Controller für den MaischeSud Kessel und ein PID Controller für den Nachguss. Der Brautomat springt nach dem Einschalten Nachguss direkt zum nächsten Schritt.

Im Maischeplan wird der Aktor Ringheizelement einmal mit dem Sonderbefehl _RHE:ON_ und einmal mit _RHE:50_ eingeschaltet bzw. umgeschaltet. Das ON übersetzt der Brautomat mit 100% Leistung, während 50 dementsprechend mit 50% Leistung verarbeitet wird. Der MaischeSud Kessel hat ein max. Volumen von 70 Liter. Das Ringheizelement unterstützt das Kochfeld während des Kochens mit 50% Leistung für ein kräftig wallendes Kochen: 100% Leistung Kochfeld (3.5kW) plus 1.75kW Ringheizelement (50%). Zum Kochende wird das Ringheizelement mit dem Sonderbefehl _RHE:OFF_ ausgeschaltet.

Der Zeitpunkt der Hopfengaben wird auf Basis ihrer Kochdauer berechnet. Der Maischeplan hat eine Gesamtkochdauer von 90 Minuten. Davon sind 30 Minuten Kochen ohne Hopfengaben. Die Gesamtkochdauer der einzelnen Hopfengaben summiert sich auf. Das heißt, die erste Hopfengabe _Hall. Tradition 6.0% 37.2g_ wird insgesamt 60 Minuten gekocht:

* Dauer Maischeschritt Hopfengabe Hall. Tradition 37.2g: 30 Minuten
* Dauer Maischeschritt Hopfengabe Hall. Tradition 31g:   15 Minuten
  * am Ende dieses Maischeschritts ist die erste Hopfengabe (37.2g) 45 Minuten in der Würze
* Dauer Maischeschritt Hopfengabe Hall. Tradition 30g:   10 Minuten
  * am Ende dieses Maischeschritts ist die erste Hopfengabe (37.2g) 55 Minuten und die zweite 25 Minuten in der Würze
* Dauer Maischeschritt Hopfengabe Hall. Tradition 7g:     5 Minuten
  * am Ende dieses Maischeschritts ist die erste Hopfengabe (37.2g) 60 Minuten, die zweite 24 Minuten und die dritte 15 Minuten in der Würze

Während Tools wie kleinerBrauhelfer, BrewFather oder MMum immer die Gesamtkochdauer für jede einzelne Hopfengabe angeben, muss der Brautomat einen Alarm oder Hinweis geben, wann eine Hopfengabe während des Brauens zur Würze gegeben werden muss.

_Erweiterung:_ Die Erläuterung Hopfengaben wird um zwei oder mehr Gaben zum selben Zeitpunkt erweitert:

![example mash plan brewing day](/docs/img/example_control_commands3.jpg)

10 Minuten vor Kochende soll die Hopfengabe _Hall. Tradition 6.0% 30g_ und Hefenahrung _Nutrient yeast_ zeitgleich zur Würze gegeben werden. Die Abbildung zeigt, wie einfach das Vorgehen ist: zeitgleiche Gaben werden mit 0 Minuten Dauer vor einer Gabe mit Dauer gesetzt.

Der vorletzte Schritt Nachisomerisierung (post isomerization) verwendet die Sonderfunktion Zieltemperatur 0°C. Das Kochfeld wird mit diesem Maischeschritt abgeschaltet. Die Sonderfunktion Rasttemperatur 0°C veranlasst den Brautomat, den Rasttimer für 10 Minuten sofort zu starten. Die Würze hat zu diesem Zeitpunkt eine Temperatur von ca. 100°C und kühlt langsam ab. Weil der folgende Schritt eine Aromahopfengabe bei 78°C ist, wird die Würze während der Rastdauer von 10 Minuten Nachisomerisierung aktiv gekühlt.

Der Graph zum Maischeplan:

![example mash plan brewing day](/docs/img/example_control_commands2.jpg)
