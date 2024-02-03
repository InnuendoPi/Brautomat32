# Funktionen

Die folgende Beschreibung hat nicht das zugrunde liegende Rezept als Inhalt, sondern das Vorgehen beim Maischen mit dem Brautomat. Deshalb zeigen die Maischeplan Bilder in dieser Erläuterung verschiedene Maischepläne. Der Maischeplan Ablauf ist jedoch bei allen identisch: der Maischeplan hat eine Tabellenform. Diese Tabelle wird beim Maischen von oben nach unten abgearbeitet. Im ersten Beispiel ist die Zeile "Einmaischen 50°C" der erste Maische-Schritt und "WHP Hallertauer Tradition" der letzte Maische-Schritt. Eine sehr wichtige Funktion im Maischeplan hat die Eigenschaft _autonext_.

## Grundfunktionen

![Maischeplan](/docs/img/brautomat.jpg)

Zur Orientierung wird zunächst der Aufbau der Tabellenzeilen beschrieben. Jede Zeile der Tabelle hat diese Spalten:

* Die Spalte "Rast" zeigt einen Namen für diesen Maische-Schritt
* Die Spalte "Temperatur" zeigt die Rast-Temperatur (auch Ziel- oder Soll-Temperatur genannt)
* Die Spalte "Dauer" ist die Rast-Dauer (Timer), wie lange der Brautomat die Rast-Temperatur halten soll
* Die Spalte "autonext" besagt, ob automatisch zum nächsten Schritt gwechselt wird, wenn die Rast-Dauer (Timer) erfüllt ist

Nach diesen vier Angaben zum Maische-Schritt hat jede Zeile Buttons zum Editieren mit den folgenden Funktionen: (von links nach rechts)

* verschiebe diese Zeile eine Position nach oben
* verschiebe diese Zeile eine Position nach unten
* editiere diese Zeile
* lösche diese Zeile

Im Tabellenkopf befinden sich folgende Buttons (von links nach rechts)

* füge einen neuen Maischeschritt an das Ende der Tabelle an
* lösche die gesammte Tabelle (leerer Maischeplan)
* lese das Rezept neu ein und befülle die Tabelle UND verlassen den Editor ohne Speichern
* Rezeptauswahl und Zeitplaner
* Maischeplan speichern
* Tabelle ein/ausklappen

Die Symbole zum Editieren der Maischeschritte werden ausgeblendet, sobald der Brauprozess gestartet wird. Wird eine Maischeplanzeile editiert, wird automatisch er Button zum Ein- und Ausklappen der Tabelle ausgeblendet.\
Zusammen mit den Steuerelementen Power, Play, Pause, Prev und Next ergibt sich eine intuitiv zu bedienende Brausteuerung. Der hier dargestellte Maischeplan ist ein Import aus dem kleinenBrauhelfer2. Der Import fügt automatisch die Rasttemperaturen und Rastdauer ein. Bei den Hopfengaben werden automatisch Alphasäure und Menge in Gramm an den Hopfennamen angefügt. Außerdem werden diese Kurzbezeichnungen vorangestellt:

* VWH: Vorderwürzenhopfung
* Kochen (ohne Gaben)
* WPH: Whirlpool Hopfung

Zusätze wie im Bild dargestellt _Kochen Hefenahrung 1gr_ werden mit Zeitpunkt der Gabe und Menge in den Maischeplan aus dem kleinenBrauherlfer2 importiert.

## Tabelle Maischeplan editieren

Zunächst wird das Editieren vom Maischeplan vor dem Braustart beschrieben.\
Mit dem Stiftsymbol kann eine Zeile der Tabelle Maischeplan in den Editormodus versetzt werden.

![Maischeplan editieren](/docs/img/brautomat-3.jpg)

In der Abbildung wird deutlich, dass nur die Zeile im Editormodus verändert werden kann. Das gilt nicht nur für die Werte Rastname, Rastdauer und Rasttemperatur, sondern insbesondere auch für die Eigenschaft _autonext_. Der Editormodus einer Zeile kann mit dem Button _Speichern_ zum Abspeichern der Änderung oder mit dem Button _Exit_ zum Beenden ohne speichern verlassen werden. Sobald der Editormodus mit einem der zwei Möglichkeiten verlassen wird, wechselt der Button _Exit_ in die Funktion _Reload_. Hier wird die Doppelfunktion vom Button _Reload_ und _Exit_ deutlich.

Wenn der Maischeprozess bereits gestartet wurde, ändert sich das Verhalten.

![Maischeplan editieren](/docs/img/brautomat-4.jpg)

Die Buttons zum Editieren werden ausgeblendet. Um diese wieder sichtbar zu machen, muss der Masicheprozess mit dem Button Pause aus der Steuerung angehalten werden:

![Maischeplan editieren](/docs/img/brautomat-5.jpg)

Wenn der Maischeprozess pausiert ist, wird der Button Pause in der Steuerung rot dargestellt und die Funktionen zum Editieren werden eingelendet. Das Induktionskochfeld wird nicht ausgeschaltet. Es wird weiterhin die Rasttemperatur gehalten. Der Rasttimer wird angehalten.

Anwendungsbeispiel: gegen Ende der 2. Verzuckerung wird über eine Jodprobe festgestellt, dass die Maische noch nicht jodnormal ist und noch Stärke vorhanden ist. Die oben beschriebene Funktion sehr nützlich:

* Maischeprozess pausieren
* Rastdauer der 2. Verzuckerung um 5 Minuten vergrößern
* Maischeprozess fortsetzen

## Funktion und Verwendung von autonext

![Maischeplan](/docs/img/Maischeplan-autonext.jpg)

Der erste Schritt im Maischeplan mit dem Namen _Einmaischen 50°C_ hat eine Rastdauer von 10 Minuten und ein deaktiviertes _autonext_. Ein deaktiviertes _autonext_ hat folgende Bedeutung: im Bild dargestellt ist die Situation, wenn der Rasttimer die 10 Minuten erreicht hat. Der Play Button wechselt automatisch auf rot. Unten rechts erscheint eine Toast Nachricht "Klicke play Button". Das Induktionskochfeld wird ausgeschaltet. Der Brauprozess wartet auf einen Klick auf den Button Play.
Der zweite Schritt im Maischeplan mit dem Namen _Maltoserast 63°C_ hat als Rast-Temperatur 63°C und eine Rast-Dauer von 25 Minuten. Der Brautomat steuert in diesem Schritt das Induktionskochfeld zunächst auf 63°C. Sobald diese 63°C erreicht sind, startet der Brautomat den Timer. Ein Rast-Timer ist eine Stoppuhr. Wenn diese Stoppuhr die Rast-Dauer von 25 Minuten erreicht hat, überprüft der Brautomat die Eigenschaft _autonext_. Wenn _autonext_ aktiviert ist, springt der Brautomat automatisch zum nächsten Schritt im Maischeplan. In diesem Bespiel zum Schritt _Zwischenrast_. Die Zwischenrast hat eine Rasttemperatur von 67°C. Automatisch erhöht der Brautomat die Leistung vom Induktionskochfeld, um die Rast-Temperatur zu erreichen. Der Maischeprozess verläuft bei aktiviertem autonext automatisch.

![Maischeplan](/docs/img/Maischeplan-autonext2.jpg)

Die Eigenschaft _autonext_ im siebten Schritt _Abmaischen 78°C_ ist nicht aktiviert. Wenn der Brautomat auf ein deaktivertes autonext trifft, beendet der Brautomat die aktuelle Rast nach Ablauf der Rast-Dauer und setzt die Leistung vom Induktionskochfeld auf 0% (aus). In diesem Status wird der "Play Button" rot angezeigt. Zum Fortsetzen des Brauvorgangs muss auf den Play Button geklickt werden.

Als aktive Rast wird auf diesem Bild "Kochen" angezeigt. Die aktuelle Leistung wird mit 0% angezeigt und der Play Button ist rot. Dieser Status ist genau dann erreicht, wenn die Rast _Abmaischen 78°C_ beendet ist und der Brautomat auf das Fortsetzen durch eine Aktivität durch den Anwender wartet. Der Maischeprozess verläuft bei deaktiviertem autonext manuell.

In dem Bild ist wieder die Toast Nachricht "Klicke Play Button" dargestellt. Toasts können optional aktiviert werden und erscheinen mit Ton, sobald ein Schritt beendet oder eine manuelle Aktivität erforderlich ist.

Im ersten Bild Maischeplan sind das Einmaischen und das Abmaischen mit deaktiviertem autonext dargestellt. Das Einmaischen hat eigentlich keine Rast-Dauer und ist beendet, wenn das Schrot im Hauptgusswasser ist. Der Brauprozess wird dann mit Klick auf den roten Play Button fortgesetzt.
Das Abmaischen ist meist nach sehr kurzer Zeit (im Bild 1 Minute) beendet. Es folgt die Läuterruhe und das Läutern. Auch hier wird der Brauprozess erst forgesetzt, wenn der Play Button geklickt wird.

_Tipp: bei deaktiviertem autonext am Rastende wird die GGM IDS abgeschaltet. Mit dem Pause Button wird die Rast-Zeit angehalten (Timer). Die GGM IDS bleibt eingeschaltet und hält die aktuelle Temperatur._

Wenn die Funktion _autonext_ aktiviert ist, überprüft der Brautomat forlaufend die aktuelle Ist-Temperatur mit der Rast-Temperatur. Die Eigenschaft "Temperatur delta zum Ziel" gibt an, wie viel Grad Unterschied vorhanden sein darf, um den nächsten Maische-Schritt zu starten. In dem Beispiel Maltoserast 63°C und bei einem "Temperatur delta zum Ziel" von 0.3°C würde der Maischeschritt ab einer Ist-Temperatur von 62.7°C gestartet (bzw. ab 63.3°C).

_Tipp: mit "Temperatur delta zum Ziel" wird ein Temperaturbereich um die Rast-Temperatur angegeben, innerhalb dem der Timer einer Rast gestartet wird._

## Sonderfunktion 0°C Rast bei aktiviertem autonext

Eine Sonderfunktion hat die Rast-Temperatur 0°C bei aktivertem autonext: wenn die Rast-Temperatur auf 0°C gesetzt und autonext aktiviert ist, wird der Maischeschritt ohne Temperaturüberprüfung automatisch gestartet. Im folgenden Bild ist die Situation unmittelbar nach dem Würzekochen dargestellt. Die Würze hat zu diesem Zeitpunkt eine Temperatur von ca. 100°C. Das Induktionskochfeld soll abgeschaltet werden und der Timer für die Nachisomerisierung soll direkt gestartet werden:

![Sonderfunktion 0°C](/docs/img/Maischeplan-Sonderfunktion.jpg)

Die Sonderfunktion "0°C Rasttemperatur mit aktiviertem autonext" erfüllt genau dieses Anforderung: Ist- und Soll-Temperatur werden ignoriert und der Rast-Timer wird gestartet. Wäre die Rasttemperatur vom Schritt Nachisomerisierung nicht auf 0°C sondern bspw. auf 95°C eingestellt, würde der Rasttimer für den Schritt Nachisomerisierung erst starten, wenn die Temperatur im MaischeSud Kessel von Kochen 100°C auf 95°C abgekühlt ist. Während der Nachisomerisierung sinkt die Temperatur in der Würze. Ggfs. wird auch aktiv gekühlt. Die Sonderfunktion "0°C Rasttemperatur mit aktiviertem autonext" bewirkt, dass das Induktionskochfeld ausgeschaltet bleibt.

## Sonderfunktion Aktoren Schalten

Eine zweite Sonderfunktion Steuerbefehle für das Induktionskochfeld, den Nachguss und die Aktoren. Die Syntax für den Maischeschritt lautet Aktorname Doppelpunkt Leistung. Dabei kann die entweder ON oder OFF sein oder eine Zahl zweichen 0.100%. Dabei entspricht der Status OFF dem Wert 0% und ON dem Wert 100%. Die Rasttemperatur und die Rastdauer müssen für diese Sonderfunktion auf 0 gesetzt sein. Der Steuerbefehl für das Induktionskochfeld lautet IDS. Der Steuerbefehl für den Nachguss lautet HLT. Für den Nachguss ist zusätzlich der Steuerbefehl Nachguss nutzbar. Der Steuerbefehl für einen Aktor ist der Aktorname.

![Sonderfunktion Steuerbefehl](/docs/img/Maischeplan-Aktoren.jpg)

Der Maischeplan im Bild schaltet an drei Stellen Aktoren. Direkt zu Beginn wird das Rührwerk eingeschaltet: Ruehrwerk:ON
Kurz vor dem Ende des Maischeplans wird das Rührwerk mit dem Befehl Ruehrwerk:OFF ausgeschaltet und der Nachguss mit Nachuss:ON eingeschaltet. Aktornamen sollen keine Sonderzeichen, Umlaute oder Leerzeichen enthalten. Aktornamen müssen eindeutig sein. Die Firmware ersetzt bei der Neuanlage von Aktoren automatisch Umlaute und Leerzeichen.

Der Steuerbefehl für einen Aktor kann mit einer Leistung angegeben werden, bspw. PUMPE:60. Der Aktor Pumpe würde nun mit 60% eingeschaltet werden. Das setzt voraus, dass dieser Aktor für PWM aktiviert wurde. Wir der Steuerbefehl für einen Aktor ohne PWM ausgeführt, dann wird die Leistung 60% ersetzt durch ON bzw. 100%.

Der Steuerbefehl IDS:50 setzt die maximale Ausgangsleistung vom Induktionskochfeld auf 50%. Ebenso kann der Nachguss mit HLT:75 auf 75% Leistung gesetzt werden.

Beispiele:

* Ruehrwerk:ON
* Ruehrwerk:OFF
* RHE:40
* IDS:80
* IDS:OFF
* HLT:100
* HLT:OFF

_RHE ist ein Aktorname für ein Ringheizelement als Beispiel für einen Aktor mit PWM._

### Beispiel Steuerbefehl IDS

Für das Beispiel sei folgende Konfiguration für die GGM IDS bzw. den MasicheSud Kessel gegeben:

![Sonderfunktion Steuerbefehl](/docs/img/aktoren_schalten4.jpg)

Die maximale Ausgangsleistung ist mit 100% auf dem Standardwert konfiguriert. Die Temperatur "Übergang zum Kochen" beträgt 95°C. Ab dieser Temepratur beträgt die maximale Ausgangsleistung der GGM IDS nur noch 80%.

Der Maischeplan in der Abbildung startet mit dem Schritt "Hauptguss aufheizen". Das Induktionskochfeld GGM IDS würde mit der Leistung "Max. Leistung IDS" (Parameter im Tab Temperatursteuerung) das Wasser erhitzen. In diesem Beispiel soll der Parameter "Max. Leistung IDS" den Wert 100% haben.

![Sonderfunktion Steuerbefehl](/docs/img/aktoren_schalten2.jpg)

Bei 59°C startet der Rasttimer. Die Rastdauer beträgt null Minuten. Der Brautomat springt in die nächste Zeile zum Schritt 2.
Der Steuerbefehl IDS:65 versetzt die maximale Leistung der IDS auf 65%. Der Brautomat springt in die nächste Zeile zum Schritt 3.
Nun wird von 59°C auf die Zieltemperatur im Schritt "Einmaischen" aufgeheitzt. Die Leistung der IDS beträgt 65%

Die maximale Ausgangsleistung von 65% wird in den folgenden Maischeschritten beibehalten. Bis der Brautomat nach dem Schritt "Abmaischen" auf en Steuerbefehl IDS:100 trifft

![Sonderfunktion Steuerbefehl](/docs/img/aktoren_schalten3.jpg)

Der Steuerbefehl ändert die maximale Ausgangsleistung der IDS auf 100%. Nun wird die Würze bis zur Temperatur "Übergang zum Kochen" bei 95°C (siehe oben) mit 100% Leistung erhitzt. Ab 95°C schaltet die GGM IDS auf 80% Leistung.

Mit den Steuerbefehlen für die IDS kann ein Anbrennen der Maische oder ein Überkochen der WÜrze verhindert werden.

## Brauverfahren

Durch die Tabellenform ist das Grundprinzip vom Brautomat die aufsteigende Infusion. Das schließt Varianten wie bspw. das Earlsche Kochmaischverfahren ein. Mit Hilfe der Eigenschaft "autonext" können auch andere Brauverfahren umgesetzt werden. Es gilt aber zu beachten, dass der Brautomat bei anderen Brauverfahren nur mit "halber Automatik" unterstützen kann. Ein auslösender Trigger für eine Aktion wie bspw. das Ziehen von Teilmaischen, muss durch den Anwender manuell erfolgen. Manuell bedeuet beim Brautomat durch das klicken vom Play Button. Eine Rast mit einer Minute Dauer und deaktiviertem autonext kann ein Auslöser sein.
