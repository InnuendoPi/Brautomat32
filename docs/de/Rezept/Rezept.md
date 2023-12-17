# Einstellungen Maischeplan

## Einstellungen

In den Einstellungen kann der Maischeplan Name festgelegt werden. Aus dem Maischeplan Namen wird der Dateiname abgeleitet. Die Parameter *Gesamte Kochdauer* und *Nachisomerisierungszeit* werden angezeigt, sind aber nciht editierbar. Diese parameter werden beim Rezept Import eingelesen.

## Zeitsteuerung

Mit Hilfe der Zeitsteuerung kann ein Brautag geplant und automatisch gestartet werden.

![Zeitsteuerung](/docs/img/Zeitsteuerung.jpg)

Über das Element DateTimer Picker kann sehr einfach ein Datum und eine Uhrzeit ausgewählt werden.\
Im Dashboard wird auf der rechten Seite das Kalender Icon grün dargestellt. Der Rezeptname wird temporär ersetzt durch den angegebenen Startzeitpunkt

![Zeitsteuerung](/docs/img/Zeitsteuerung2.jpg)

## Maischeplan Import

Der Brautomat kann Braurezepte aus folgenden Quellen importieren:

* kleinerBrauhelfer2 (ab Version 2.5 Exporttyp Brautomat)
* MaischeMalzundMehr
* BrewFather
* Brautomat

Aus einem importiertem Braurezept wird ein Brautomat Maischeplan. Empfohlen wird die Rezeptverwaltung und -entwicklung mit dem kbh2. Der Exportfilter "Brautomat" beinhaltet alle Daten, die zum Brauen benötigt werden. Nur mit dem kbh2 sind Mengenangaben wie bspw. bei Hopfengaben in Gramm oder beim Zubrühen in Liter und erforderlicher Temperatur möglich.

Rezepte aus MaischeMalzundMehr sollten ebenfalls zunächst im kleinenBrauhelfer2 importiert und auf die individuellen Anlagenwerte, Rohstoffe etc. angepasst werden.

Rezepte aus BrewFather müssen die Eigenschaft boilTime (Kochdauer) mit einem ganzzahligen Wert belegt haben. Empfohlen wird auch ein Wert für den Parameter Equipment -> whirlpoolTime. Rastnamen können bei BrewFather einen (nahezu beliebig) langen Fließtext enthalten. Der Text wird auf maximal 50 Buchstaben gekürzt. Brewfather erlaubt Fließkommazahlen und Text als Rastdauer. Die Parameter werden in ganzzahlige Werte gewandelt oder auf 0 gesetzt.

*Hinweis: der ESP8266 hat nur einen kleinen RAM Speicher. Rezepte mit sehr lange Texten, Bildern oder anderen Anhängen können ggfs. nicht eingelesen werden.*

Importierte Rezepte werden im Ordner /Rezepte gespeichtert. Als Dateinamen wird der Rezpetnamen verwendet. Die maximale Dateinamenlänge im Arduino Dateisystem beträgt 31 Zeichen. Leerzeichen und Umlaute werden bei der Speicherung ersetzt.

## Optionen für den Import

Der Brautomat benötigt einen Step Einmaischen (optional) und einen Step Abmaischen. Insbesondere der Schritt Abmaischen dient mit deaktivertem "autonext" als Trennschritt zwischen Maischen und Kochen. Beim Import kann der Brautomat fehlende Einmaisch- und Abmaischschritte einfügen.

## Maischeplan Wechseln

Der Brautomat verwaltet Maischepläne im Flash Speicher. Über die Auswahl *Maischeplan Wechseln* kann zwischen den vorhandenen Maischeplänen gewechselt werden.

## Maischeplan Export

Ein Masicheplan kann im JSON Format exportiert werden und jederzeit wiederverwendet werden.
