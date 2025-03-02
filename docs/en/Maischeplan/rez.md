# Einstellungen Maischeplan

Der Brautomat bietet eine einfache Verwaltung der Maischepläne. Neben importieren und exportieren kann zwischen gespeicherten Maischeplänen gewechselt werden. Ebenso ist eine Zeitsteuerung möglich. Dieses Kapitel beendet die Beschreibung der Grundfunktionen.

## Maischeplan

In den Einstellungen kann der Maischeplan Name festgelegt werden. Aus dem Maischeplan Namen wird der Dateiname abgeleitet. Die Parameter *Gesamte Kochdauer* und *Nachisomerisierungszeit* werden rein informativ angezeigt und sind nicht editierbar. Diese Parameter werden beim Rezept Import eingelesen. Wird ein Maischeplan manuell angelegt, sind die Werte Kochdauer und Nachisomerisierung ohne Bedeutung, weil der Brautomat keine Bittereinheiten berechnet.

### Zeitsteuerung

Mit Hilfe der Zeitsteuerung kann ein Brautag geplant und automatisch gestartet werden.

![Zeitsteuerung](/docs/img/Zeitsteuerung.jpg)

Über das Element DateTimerPicker kann sehr einfach ein Datum und eine Uhrzeit ausgewählt werden. Der Rezeptname wird temporär ersetzt durch den angegebenen Startzeitpunkt.

![Zeitsteuerung](/docs/img/Zeitsteuerung2.jpg)

Eine aktivierte Zeitsteuerung wird in der Konfiguration gespeichert. Startet der Brautomat neu, wird das eingestellte Datum und Uhrzeit eingelesen. Liegt dieser Braustart in der Zukunft, wird die Zeitsteuerung aktiviert. Liegt der Braustart in der Vergangenheit, wird die Zeitsteuerung deaktiviert.

## Verwaltung Maischepläne

### Maischeplan erstellen

In das Eingabefeld ist der Maischeplan Name einzugeben. Mit Klick auf *OK* wird ein neuer leerer Maischeplan erstellt.

### Maischeplan umbenennen

In das Eingabefeld ist der neue Name für den Maischeplan einzugeben. Mit Klick auf *OK* wird der Maischeplan unter dem neuen Namen gespeichert.

### Maischeplan wechseln

Der Brautomat verwaltet Maischepläne im Flash Speicher. Über die Auswahl *Maischeplan Wechseln* kann zwischen den vorhandenen Maischeplänen gewechselt werden.

### Maischeplan importieren

Der ausgewählte Maischeplan wird aus dem Flash Speicher entfernt.
Der Brautomat kann Braurezepte aus folgenden Quellen importieren:

* kleinerBrauhelfer2 (ab Version 2.5 Exporttyp Brautomat)
* MaischeMalzundMehr
* BrewFather
* Brautomat

Aus einem importiertem Braurezept wird ein Brautomat Maischeplan. Empfohlen wird die Rezeptverwaltung und -entwicklung mit dem kbh2. Der Exportfilter "Brautomat" beinhaltet alle Daten in optimierter Form, die zum Brauen mit dem Brautomat benötigt werden.

Rezepte aus MaischeMalzundMehr sollten ebenfalls zunächst im kleinenBrauhelfer2 importiert und auf die individuellen Anlagenwerte, Rohstoffe etc. angepasst werden. Weil MMum keine Rastnamen vergibt, empfiehlt sich eine Bearbeitung im KBH2 Maischplan.

Rezepte aus BrewFather müssen die Eigenschaft boilTime (Kochdauer) mit einem ganzzahligen Wert belegt haben. Empfohlen wird auch ein Wert für den Parameter Equipment -> whirlpoolTime. Rastnamen können bei BrewFather einen (nahezu beliebig) langen Fließtext enthalten. Der Text wird auf maximal 50 Buchstaben gekürzt. Brewfather erlaubt Fließkommazahlen und Text als Rastdauer. Die Parameter werden in ganzzahlige Werte gewandelt oder auf 0 gesetzt.

*Hinweis: die ESP Microcontroller haben einen kleinen RAM Speicher. Rezepte mit sehr langen Texten, Bildern oder anderen Anhängen können ggfs. nicht importiert werden. Vor dem Import sollten Bilder und sehr lange Beschreibungen entfernt werden.*

Importierte Rezepte werden im Ordner /Rezepte gespeichtert. Als Dateinamen wird der Rezpetnamen verwendet. Die maximale Dateinamenlänge im Arduino Dateisystem beträgt 31 Zeichen. Leerzeichen und Umlaute werden bei der Speicherung ersetzt.

### Maischeplan exportieren

Ein Maischeplan kann im JSON Format exportiert werden. Zum Wiedereinlesen ist der Import im Format Brautomat zu verwenden.

### Maischeplan entfernen

Der ausgewählte Maischeplan wird aus dem Flash Speicher entfernt.

## Voreinstellung Import

![Voreinstellung Import](/docs/img/voreinstellung_import.jpg)

Der Brautomat benötigt einen Step Einmaischen (optional) und einen Step Abmaischen. Insbesondere der Schritt Abmaischen dient mit deaktivertem "autonext" als Trennschritt zwischen Maischen und Kochen. Beim Import kann der Brautomat fehlende Einmaisch- und Abmaischschritte einfügen. Zusätzlich können fehlende Temperaturen mit Vorgaben belegt werden.

### Temperaturvorgaben für fehlende Parameter

Bei Rezepten aus unterschiedlichen Quellen können u.a. Temperaturangaben fehlen. Dies betrifft insbesondere die Temperaturen für das Einmaischen, das Abmaischen, die Vorderwürzenzhopfung und die Whirlpoolhopfung. Die interne Programmlogik des Brautomaten benötigt immer eine Temperatur zur Verarbeitung, auch wenn manche Temperaturen aus Sicht eines Brauers nicht erfordferlich sind. Fehlende Temperaturen werden mit Standardwerten vorbelegt werden.

### Temperatur Einmaischen [°C]

Dieser Parameter ist für den Rezeptimport und beschreibt die Standardtemperatur für das Einmaischen. Dieser Parameter wird nur dann verwendet, wenn beim Rezeptimport keine Einmaisch-Temperatur angegeben ist.

### Temperatur Abmaischen [°C]

Dieser Parameter ist für den Rezeptimport und beschreibt die Standardtemperatur für das Abmaischen. Dieser Parameter wird nur dann verwendet, wenn beim Rezeptimport keine Abmaisch-Temperatur angegeben ist.

### Temperatur VWH [°C]

Dieser Parameter ist für den Rezeptimport und beschreibt die Standardtemperatur für eine Vorderwürzenhopfung. Häufig wird bei Rezepten keine Temperatur für die VWH angegeben. Eine Temperaturangabe ist beim Brautomat erforderlich. Ist im Rezept eine Temnperatur angegeben, wird diese beim Import verwendet.

### Temperatur WPH [°C]

Dieser Parameter ist für den Rezeptimport und beschreibt die Standardtemperatur für eine Whirlpoolhopfung. Häufig wird bei Rezepten keine Temperatur für die WPH angegeben. Eine Temperaturangabe ist beim Brautomat erforderlich. Ist im Rezept eine Temnperatur angegeben, wird diese beim Import verwendet.

### Temperatur Kochen [°C]

Dieser Parameter beschreibt die Temperatur, ab der die Würze wallend kocht. Der Standardwert ist 98°C und entspricht etwa einem Standort in 500m Höhe über NN. Für den Rezeptimport wird dieser Parameter als Temperatur Kochen verwendet.
