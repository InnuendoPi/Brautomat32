# Einstellungen Maischeplan

Der Brautomat bietet eine einfache Verwaltung der Maischepläne. Neben importieren und exportieren kann zwischen gespeicherten Maischeplänen gewechselt werden. Ebenso ist eine Zeitsteuerung möglich.

## Einstellungen

In den Einstellungen kann der Maischeplan Name festgelegt werden. Aus dem Maischeplan Namen wird der Dateiname abgeleitet. Die Parameter *Gesamte Kochdauer* und *Nachisomerisierungszeit* werden rein informativ angezeigt und sind nicht editierbar. Diese Parameter werden beim Rezept Import eingelesen. Wird ein Maischeplan manuell angelegt, sind die Werte Kochdauer und Nachisomerisierung ohne Bedeutung, weil der Brautomat keine Bittereinheiten berechnet.

## Zeitsteuerung

Mit Hilfe der Zeitsteuerung kann ein Brautag geplant und automatisch gestartet werden.

![Zeitsteuerung](/docs/img/Zeitsteuerung.jpg)

Über das Element DateTimer Picker kann sehr einfach ein Datum und eine Uhrzeit ausgewählt werden. Der Rezeptname wird temporär ersetzt durch den angegebenen Startzeitpunkt.

![Zeitsteuerung](/docs/img/Zeitsteuerung2.jpg)

## Maischeplan Import

Der Brautomat kann Braurezepte aus folgenden Quellen importieren:

* kleinerBrauhelfer2 (ab Version 2.5 Exporttyp Brautomat)
* MaischeMalzundMehr
* BrewFather
* Brautomat

Aus einem importiertem Braurezept wird ein Brautomat Maischeplan. Empfohlen wird die Rezeptverwaltung und -entwicklung mit dem kbh2. Der Exportfilter "Brautomat" beinhaltet alle Daten in optimierter Form, die zum Brauen mit dem Brautomat benötigt werden.

Rezepte aus MaischeMalzundMehr sollten ebenfalls zunächst im kleinenBrauhelfer2 importiert und auf die individuellen Anlagenwerte, Rohstoffe etc. angepasst werden. Weil MMum keine Rastnamen vergibt, empfiehlt sich eine Bearbeitung im KBH2 Maischplan.

Rezepte aus BrewFather müssen die Eigenschaft boilTime (Kochdauer) mit einem ganzzahligen Wert belegt haben. Empfohlen wird auch ein Wert für den Parameter Equipment -> whirlpoolTime. Rastnamen können bei BrewFather einen (nahezu beliebig) langen Fließtext enthalten. Der Text wird auf maximal 50 Buchstaben gekürzt. Brewfather erlaubt Fließkommazahlen und Text als Rastdauer. Die Parameter werden in ganzzahlige Werte gewandelt oder auf 0 gesetzt.

*Hinweis: die ESP Microcontroller haben einen kleinen RAM Speicher. Rezepte mit sehr lange Texten, Bildern oder anderen Anhängen können ggfs. nicht eingelesen werden. Vor dem Import sollten Bilder und sehr lange Beschreibungen entfernt werden.*

Importierte Rezepte werden im Ordner /Rezepte gespeichtert. Als Dateinamen wird der Rezpetnamen verwendet. Die maximale Dateinamenlänge im Arduino Dateisystem beträgt 31 Zeichen. Leerzeichen und Umlaute werden bei der Speicherung ersetzt.

## Optionen für den Import

Der Brautomat benötigt einen Step Einmaischen (optional) und einen Step Abmaischen. Insbesondere der Schritt Abmaischen dient mit deaktivertem "autonext" als Trennschritt zwischen Maischen und Kochen. Beim Import kann der Brautomat fehlende Einmaisch- und Abmaischschritte einfügen. Zusätzlich können fehlende Temperaturen mit Vorgaben belegt werden.

## Maischeplan Wechseln

Der Brautomat verwaltet Maischepläne im Flash Speicher. Über die Auswahl *Maischeplan Wechseln* kann zwischen den vorhandenen Maischeplänen gewechselt werden.

## Maischeplan Export

Ein Maischeplan kann im JSON Format exportiert werden. Zum Wiedereinlesen ist der Import im Format Brautomat zu verwenden.

## Maischeplan löschen

Der ausgewählte Maischeplan wird aus dem Flash Speicher entfernt.
