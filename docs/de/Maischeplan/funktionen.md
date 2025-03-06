# Funktionen

In der folgenden Beschreibung wird ein _erfundenes Beispielrezept_ verwendet. Diese Beschreibung hat nicht das Rezept zum Inhalt, sondern die Vorgehensweise beim Maischen mit dem Brautomat.

Der Maischeplan hat die Form einer Tabelle. Diese Tabelle wird an einem Brautag von der Brauanlage von oben nach unten abgearbeitet. Im Beispielrezept ist die Zeile _Einmaischen 50°C_ der erste Maischeschritt und _WHP Hallertauer Tradition_ der letzte Maischeschritt. Eine sehr wichtige Funktion im Maischeplan ist die Eigenschaft in der Spalte _autoext_.

## Grundfunktionen

![Maischeplan](/docs/img/brautomat.jpg)

Zur Orientierung wird zunächst der Aufbau der Tabellenzeilen beschrieben. Eine Zeile im Maischeplan stellt einen Schritt im Maischeplan dar. Jede Tabellenzeile hat diese Spalten:

* Die Spalte "Rast" zeigt einen Namen für diesen Maischeschritt.
* In der Spalte "Temperatur" steht die Rasttemperatur (in diesem Handbuch auch Ziel- oder Solltemperatur genannt).
* In der Spalte "Dauer" steht die Rastzeit (Timer), wie lange der Brautomat die Rasttemperatur halten soll.
* Die Spalte "autoext" gibt an, ob nach Ablauf der Rastzeit (Timer) automatisch zum nächsten Schritt übergegangen wird.

Nach diesen vier Angaben zum Maischschritt befinden sich in jeder Zeile Editierbuttons mit folgenden Funktionen: (von links nach rechts)

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

Wenn eine Tabellenzeile bearbeitet wird, ändern sich die Buttons.

* Exit: verlasse den Zeileneditor ohne Speichern. Der Button wird grau angezeigt
* Speicher: Änderung in der Tabellenzeile im Maischeplan speichern

Alle Buttons zum Editieren des Maischeplans werden ausgeblendet, sobald der Brauprozess gestartet wird. Der Collapse-Button zum Ein- und Ausklappen der Tabelle wird ausgeblendet, sobald der Maischeplan editiert wird.

Zusammen mit den Steuerelementen Power, Play, Pause, Prev und Next ergibt sich eine intuitiv zu bedienende Brausteuerung. Der hier gezeigte Maischplan ist ein Import aus dem kleinenBrauhelfer2. Der Import fügt automatisch die Rasttemperaturen und Rastzeiten ein. Bei den Hopfengaben werden die Alphasäure und die Menge in Gramm automatisch an den Hopfennamen angehängt. Außerdem werden diese Kurzbezeichnungen vorangestellt:

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

## Funktion und Anwendung von autonext

![Maischeplan autonext](/docs/img/Maischeplan-autonext.jpg)

Der erste Schritt des Maischeplans mit dem Namen _Einmaischen 50°C_ hat eine Rastzeit von 10 Minuten und einen deaktivierten _autonext_. Das Bild zeigt die Situation, wenn der Rasttimer die 10 Minuten erreicht hat: Der Timer ist auf 00:00 Restzeit heruntergezählt. Der Play-Button wechselt automatisch auf rot. Unten rechts erscheint die Toastmeldung "Click play button". Das Induktionskochfeld schaltet sich aus. Der Brauprozess wartet auf einen Klick auf die Wiedergabetaste.

* Am Ende einer Pause mit deaktiviertem _autonext_ wird der Brauprozess gestoppt und das GGM IDS ausgeschaltet.

Der zweite Maischschritt mit der Bezeichnung _Maltoserast 63°C_ hat eine Rasttemperatur von 63°C und eine Rastzeit von 25 Minuten. In diesem Schritt steuert der Brautomat das Induktionskochfeld zunächst auf 63°C. Sobald diese 63°C erreicht sind, startet der Brautomat den Timer. Ein Rasttimer ist eine Stoppuhr, die auf 00:00 (0 Minuten : 0 Sekunden) herunterzählt. Wenn dieser Timer die Rastzeit von 25 Minuten erreicht hat, überprüft der Brautomat die Eigenschaft _autonext_. Wenn _autonext_ aktiviert ist, springt der Brautomat automatisch zum nächsten Schritt im Maischeplan. In diesem Beispielrezept ist dies der Schritt _Verzuckerung 72°C_. Der Schritt Verzuckerung hat eine Rasttemperatur von 72°C. Der Brautomat erhöht automatisch die Leistung des Induktionskochfeldes, um die neue Rasttemperatur zu erreichen.

* Am Ende einer Rast mit aktiviertem _autoext_ wird der Maischprozess automatisch fortgesetzt und die GGM IDS bleibt eingeschaltet.

![Maischeplan autonext](/docs/img/Maischeplan-autonext2.jpg)

Die Eigenschaft _autonext_ im siebten Schritt _Abmaischen 78°C_ ist nicht aktiviert. Trifft der Brautomat auf ein deaktiviertes autonext, beendet der Brautomat nach Ablauf der Rastzeit die aktuelle Rast und setzt die Leistung des Induktionskochfeldes auf 0% (aus). In diesem Zustand wird die "Play-Taste" rot dargestellt. Um den Brauvorgang fortzusetzen, muss der Play Button angeklickt werden.

In diesem Bild ist der aktive Ruhezustand "Kochen", die aktuelle Leistung des GGM IDS wird mit 0% angezeigt und die Wiedergabetaste ist rot. Dieser Zustand wird genau dann erreicht, wenn die Rast _Abmaischen 78°C_ beendet ist und der Brautomat auf die Fortsetzung durch eine Benutzeraktion wartet.

Während im ersten Beispiel von _autonext_ im Schritt Einmaischen meist direkt der Play Button zum Fortsetzen angeklickt wird, kann im zweiten Beispiel Abmaischen eine längere Zeit für das Läutern und die Läuterruhe vergehen. Der Brautomat wird im Zustand "Play Button klicken" belassen. In diesem Zustand können alle Aktoren verwendet werden.

_Unterschied Autonext und Pause: Bei deaktiviertem Autonext am Rastende wird das GGM IDS abgeschaltet. Mit der Pausetaste wird der Rasttimer angehalten, die GGM IDS bleibt aber eingeschaltet und der Brautomat regelt die benötigte Leistung der GGM IDS._

In den folgenden Abschnitten werden die optionalen Sonderfunktionen beschrieben. Brautomat-Einsteiger können die Beschreibung der Sonderfunktionen überspringen.

## Sonderfunktion 0°C Rast bei aktiviertem Autonext

Eine Sonderfunktion ist die Rasttemperatur 0°C bei aktiviertem autonext: Wird die Rasttemperatur auf 0°C gesetzt und autonext aktiviert, wird der Maischeschritt ohne Temperaturkontrolle automatisch gestartet. Im Maischplanbeispiel ist diese Sonderfunktion nach dem Würzekochen im Schritt _Nachisomerisierung_ dargestellt. Die Würze hat zu diesem Zeitpunkt eine Temperatur von ca. 100°C. Das Induktionskochfeld soll abgeschaltet und der Timer für die Nachisomerisierung direkt gestartet werden:

![Sonderfunktion 0°C](/docs/img/Maischeplan-Sonderfunktion.jpg)

Die Sonderfunktion _0°C Rasttemperatur mit aktiviertem autonext_ erfüllt genau diese Anforderung: Ist- und Solltemperatur werden ignoriert und der Rasttimer wird gestartet. Wäre die Rasttemperatur des Schrittes Nachisomerisierung nicht auf 0°C, sondern z.B. auf 95°C eingestellt, würde der Rasttimer für den Schritt Nachisomerisierung erst starten, wenn die Temperatur im MaischeSud Kessel von 100°C auf 95°C abgekühlt ist. Während der Nachisomerisierung sinkt die Temperatur in der Würze. Bei Bedarf wird die Würze aktiv gekühlt. Die Sonderfunktion _0°C Rasttemperatur bei aktiviertem autonext_ bewirkt, dass das Induktionskochfeld ausgeschaltet bleibt.

Hintergrund: Ist die Funktion autonext aktiviert, vergleicht der Brautomat ständig die aktuelle Isttemperatur mit der Rasttemperatur. Die Eigenschaft "Temperatur Delta zur Solltemperatur" gibt an, wie viel Grad Abweichung zulässig sind, damit der nächste Maischschritt automatisch gestartet wird. Bei einer Rasttemperatur von 63°C und einem "Temperatur delta zum Soll" von 0,3°C würde der Maischeschritt ab einer Ist-Temperatur von 62,7°C bei steigender Temperatur und ab 63,3°C bei fallender Temperatur gestartet.

## Brauverfahren

Das Grundprinzip des Brauautomaten ist die aufsteigende Infusion. Dies schließt Varianten wie z.B. das Earlsche Kochmaischverfahren ein. Durch die Eigenschaft "autonext" können auch andere Brauverfahren realisiert werden. Es ist jedoch zu beachten, dass der Brautomat bei anderen Brauverfahren nur mit "Halbautomatik" unterstützen kann. Ein auslösender Trigger für eine Aktion, wie z.B. das Ziehen von Teilmaischen, muss manuell durch den Bediener erfolgen. Manuell bedeutet bei der Brauanlage das Anklicken des Play-Buttons. Als Auslöser für eine manuelle Aktion kann eine Pause von null Minuten mit deaktiviertem Autonext verwendet werden.

Hinweis: Die folgenden Themen zu den Steuerbefehlen sind optional und für den Einstieg in den Brautomat nicht relevant.

## Steuerbefehle

Eine zweite Sonderfunktion sind Steuerbefehle für die Induktionskochfelder Maische und Sud, Nachguss und Aktoren. Die Syntax für den Maischeschritt lautet

* Aktorname:Leistung

Die Leistung kann entweder EIN oder AUS oder eine Zahl zwischen 0 und 100% sein. Dabei entspricht der Zustand OFF dem Wert 0% und ON dem Wert 100%. Der Steuerbefehl für das erste Induktionskochfeld ist IDS oder MAISCHE. Der Steuerbefehl für das zweite Induktionskochfeld ist SUD. Der Steuerbefehl für das Nachgaren ist HLT. Für den Nachguss kann zusätzlich der Steuerbefehl Nachguss verwendet werden. Der Steuerbefehl für einen Aktor ist der Aktorname.

![Aktor Steuerbefehl](/docs/img/Maischeplan-Aktoren.jpg)

Der Maischeplan im Bild schaltet an drei Stellen Aktoren. Gleich zu Beginn wird das Rührwerk eingeschaltet: Rührwerk:EIN
Kurz vor Ende des Maischeplans wird das Rührwerk ausgeschaltet: Ruehrwerk:AUS und der Nachguss eingeschaltet: Nachguss:EIN. Aktornamen dürfen keine Sonderzeichen (außer - und _), Umlaute oder Leerzeichen enthalten und müssen eindeutig sein. Das Webinterface überprüft die Eingaben automatisch.

Der Steuerbefehl für einen Aktor kann mit einer Leistung angegeben werden, z.B. PUMPE:60. Der Aktor Pumpe wird dann mit 60% eingeschaltet. Dies setzt voraus, dass dieser Aktor für PWM aktiviert wurde. Wird der Steuerbefehl für einen Aktor ohne PWM ausgeführt, so wird die Leistung 60% durch EIN bzw. 100% ersetzt. Die Rasttemperatur und die Rastzeit müssen bei Steuerbefehlen für Aktoren auf 0 gesetzt werden.

Der Steuerbefehl IDS:50 setzt die maximale Ausgangsleistung des Induktionskochfeldes auf 50%. Ebenso kann mit HLT:75 das Nachgaren auf 75% Leistung eingestellt werden.

![IDS Steuerbefehl](/docs/img/sonderfunktion_sud1.jpg)

Der Steuerbefehl SÜD:Dickmaische kochen mit einer Rastzeit von 10 Minuten und einer Rasttemperatur von 100 Grad führt einen Maischeschritt auf einem zweiten Induktionskochfeld durch. Der Rasttimer wird gestartet, sobald die Rasttemperatur erreicht ist.

![Steuerbefehl SUD](/docs/img/sonderfunktion_sud2.jpg)

Der Steuerbefehl SUD:Dickmaische kochen mit einer Rasttemperatur von 100 Grad aber ohne Rastzeit schaltet das zweite Induktionskochfeld ein, startet den PID-Regler und springt direkt zum nächsten Schritt im Maischeplan.

![Steuerbefehl SUD](/docs/img/sonderfunktion_sud3.jpg)

Der Maischeschritt Verzuckerung 72°C wird auf dem ersten Induktionskochfeld "Maische" durchgeführt. Der PID-Regler regelt die erforderliche Leistung für den Maischkessel. Gleichzeitig regelt der PID-Regler die benötigte Leistung für den Kessel "Sud".

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

_Hinweis: Mit den Steuerbefehlen können die Kessel Maische, Sud und HLT gleichzeitig betrieben werden. Es kann jedoch nur ein Rasttimer aktiv sein. Das erste Induktionskochfeld "Maische" muss immer einen Rasttimer eingetragen haben._

Beispiel: Dekoktion mit zwei Induktionskochfeldern:

![IDS und SUD Steuerbefehl](/docs/img/sonderfunktion_sud4.jpg)

Aufgrund der Einschränkung "der erste Kessel "Maische" muss immer mit einer Rastzeit betrieben werden" ergibt sich für die Prozesse Dekoktion eine einfache Vorgehensweise: die zu kochende Teilmaische muss in den Kessel "Maische" und die auf Temperatur zu haltende Teilmaische muss in den Kessel "Sud".

Beispiel für die Verwendung der Leistung für das Induktionskochfeld:

Gegeben sei eine Schüttung mit 7kg und ein Hauptguss mit 28l. In Summe beträgt die Masse 35kg\

Mit Hilfe der Sonderfunktion IDS:<Leistung in %> kann die Leistung der GGM IDS so eingestellt werden, dass beim Maischen die Aufheizrate 1°C pro Minute beträgt.

![Steuerbefehl IDS Leistung](/docs/img/IDS-Sonderfunktion.jpg)

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

Eine weitere Sonderfunktion ist der Profilwechsel. Der Befehle lautet IDSPROFIL, SUDPROFIL und HLTPROFIL. Hinter dem Doppelpunkt folgt der Profilname.

Beispiele:

IDSPROFIL:Profil68l\
IDSPROFIL:Profil36l

Mit diesem Sonderbefehl werden alle Parameter von einem Kessel ausgestauscht. Auf diese Weise können unterschiedliche Hardware Profile hinterlegt werden. Im Brauverfahren Dekoktion bietet der Sonderbefehl eine einfache Möglichkeit, bei gleichem Kessel und kleinerem Volumen angepasst Parameter einzusetzen.

Die Sonderbefehle IDS: und IDSPROFIL: haben unterschiedliche Wirkungen: Der Sonderbefehl IDS: verändert die maximale Ausgangsleistung. Alle anderen Parameter bleiben gleich.

_Hinweis: der Sonderbefehl IDSPROFIL im Maischeplan wird abgebrochen, wenn der Gerätetyp (IDS1, IDS2 oder Relais) nicht identisch ist._

### Beispiel Steuerbefehl IDS

Als Beispiel wird die folgende Konfiguration für das GGM IDS bzw. den Kessel MaischeSud gegeben:

![IDS Steuerbefehl](/docs/img/aktoren_schalten4.jpg)

Die maximale Leistungsabgabe ist auf 100% voreingestellt. Die Temperatur "Übergang zum Sieden" beträgt 95°C. Ab dieser Temperatur beträgt die maximale Ausgangsleistung des GGM IDS nur noch 80%.

Der Maischeplan in der Abbildung beginnt mit dem Schritt "Aufheizen des Hauptgusses". Das Induktionskochfeld GGM IDS würde das Wasser mit der Leistung "Max. Leistung IDS" (Parameter im Register Temperatursteuerung), also mit 100%, erhitzen.

![IDS Steuerbefehl](/docs/img/aktoren_schalten2.jpg)

Bei 59°C startet der Rasttimer. Die Rastzeit beträgt null Minuten. Der Brautomat springt in die nächste Zeile zu Schritt 2.
Der Steuerbefehl IDS:65 setzt die maximale Leistung des IDS auf 65%. Der Brautomat springt auf die nächste Zeile zu Schritt 3.
Nun wird von 59°C auf die Zieltemperatur im Schritt "Maischen" aufgeheizt. Die maximale Leistung des IDS beträgt 65%.

Die maximale Ausgangsleistung von 65% wird in den folgenden Maischschritten beibehalten. Bis der Brautomat nach dem Maischschritt auf den Steuerbefehl IDS:100 trifft.

![IDS Steuerbefehl](/docs/img/aktoren_schalten3.jpg)

Der Steuerbefehl ändert die maximale Ausgangsleistung des IDS auf 100%. Die Würze wird nun mit 100% Leistung bis zur Temperatur "Übergang zum Kochen" bei 95°C (siehe oben) aufgeheizt. Ab 95°C schaltet das GGM IDS auf 80% Leistung. 80% entspricht dem Parameter "Leistung ab Übergang".

Mit den Steuerbefehlen für das IDS kann ein Anbrennen der Maische oder ein Überkochen der Würze, insbesondere bei kleineren Kesselvolumina, verhindert werden.
