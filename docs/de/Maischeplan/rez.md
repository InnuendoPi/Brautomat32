# Einstellungen Maischeplan

Der Brautomat bietet eine einfache Verwaltung von Maischeplänen. Du kannst Pläne importieren, exportieren, umbenennen, wechseln und löschen. Mit diesem Kapitel sind die Grundfunktionen vollständig beschrieben.

## Maischeplan

In den Einstellungen kann der Name des Maischeplans festgelegt werden. Aus dem Maischeplannamen wird der Dateiname abgeleitet. Die Parameter *Gesamtkochzeit* und *Nachisomerisierungszeit* werden nur zur Information angezeigt und können nicht editiert werden. Diese Parameter werden beim Rezeptimport eingelesen. Wird ein Maischplan manuell erstellt, sind die Werte Kochdauer und Nachisomerisierung ohne Bedeutung, da der Brautomat keine Bittereinheiten berechnet.

### Maischeplan erstellen

Im Eingabefeld ist der Name des Maischeplans einzugeben. Mit *OK* wird ein neuer leerer Maischeplan angelegt.

### Maischeplan umbenennen

Im Eingabefeld ist der neue Name für den Maischeplan einzugeben. Mit *OK* wird der Maischeplan unter dem neuen Namen gespeichert.

### Maischeplan ändern

Der Brautomat verwaltet Maischepläne im Flash-Speicher. Durch Auswahl von *Maischeplan wechseln* kann zwischen den vorhandenen Maischeplänen gewechselt werden.

### Maischeplan importieren

Der Brautomat kann Braurezepte aus folgenden Quellen importieren:

* kleinerBrauhelfer2 (ab Version 2.5 Exporttyp Brautomat)
* MaischeMalzundMehr
* Brewfather
* Brautomat

Aus einem importierten Braurezept wird ein Brautomat Maischeplan. Empfohlen wird die Rezeptverwaltung und -erstellung mit kbh2. Der Exportfilter "Brautomat" enthält in optimierter Form alle Daten, die zum Brauen mit dem Brautomat benötigt werden.

Rezepte aus MaischeMalzundMehr sollten ebenfalls zuerst in den kleinenBrauhelfer2 importiert und an die individuellen Anlagenwerte, Rohstoffe etc. angepasst werden. Da MMum keine Rastennamen vergibt, empfiehlt sich eine Bearbeitung im KBH2 Maischplan.

Rezepte und Sude können aus BrewFather per Datei-Import oder per API-Abruf importiert werden. Rastennamen dürfen in BrewFather sehr lang sein; der Brautomat kürzt sie auf maximal 50 Zeichen. Rastzeiten aus Fließkommazahlen oder Text werden beim Import in Ganzzahlen umgewandelt oder auf 0 gesetzt.

*Wichtig (ab 1.60):* Rezept-Import, Umbenennen, Kopieren, Wechseln und Löschen sind nur im Idle-Zustand erlaubt. Während eines aktiven Brauvorgangs werden diese Aktionen blockiert.

*Hinweis: Die ESP-Mikrocontroller haben einen kleinen RAM-Speicher. Rezepte mit sehr langen Texten, Bildern oder anderen Anhängen können unter Umständen nicht importiert werden. Der Brautomat filtert Rezepte vor dem Import. Trotzdem kann es erforderlich sein, dass Bilder und sehr lange Beschreibungen vor dem Import entfernt werden müssen.

Importierte Rezepte werden im Ordner /Rezepte gespeichert. Als Dateiname wird der Rezeptname verwendet. Die maximale Länge des Dateinamens im Arduino-Dateisystem beträgt 31 Zeichen. Leerzeichen und Umlaute werden beim Speichern ersetzt.

### Maischeplan exportieren

Ein Maischeplan kann im JSON-Format exportiert werden. Zum Wiedereinlesen muss der Import im Brautomat-Format verwendet werden.

### Maischeplan entfernen

Der ausgewählte Maischeplan wird aus dem Flashspeicher entfernt.

## Voreinstellung Import

![Voreinstellung Import](/docs/img/voreinstellung_import.jpg)

Der Brautomat benötigt einen Schritt Einmaischen (optional) und einen Schritt Abmaischen. Insbesondere der Schritt Abmaischen dient bei deaktiviertem autonext als Trennschritt zwischen Maischen und Kochen. Beim Importieren kann der Brautomat fehlende Einmaisch- und Abmaischschritte einfügen. Zusätzlich können fehlende Temperaturen mit Vorgaben versehen werden.

### Temperaturvorgaben für fehlende Parameter

Bei Rezepten aus verschiedenen Quellen können u.a. Temperaturangaben fehlen. Dies betrifft insbesondere die Temperaturen für Einmaischen, Abmaischen, Vorderwürze und Whirlpool-Hopfung. Die interne Programmlogik des Brautomaten benötigt immer eine Temperatur für die Verarbeitung, auch wenn einige Temperaturen aus Sicht des Brauers nicht notwendig sind. Fehlende Temperaturen werden mit Standardwerten vorbelegt.

### Temperatur Einmaischen [°C]

Dieser Parameter ist für den Rezeptimport und beschreibt die Standardtemperatur für das Einmaischen. Dieser Parameter wird nur dann verwendet, wenn beim Rezeptimport keine Einmaisch-Temperatur angegeben ist.

### Temperatur Abmaischen [°C]

Dieser Parameter ist für den Rezeptimport und beschreibt die Standardtemperatur für das Abmaischen. Dieser Parameter wird nur dann verwendet, wenn beim Rezeptimport keine Abmaisch-Temperatur angegeben ist.

### Temperatur VWH [°C]

Dieser Parameter ist für den Rezeptimport und beschreibt die Standardtemperatur für eine Vorderwürzenhopfung. Häufig wird bei Rezepten keine Temperatur für die VWH angegeben. Eine Temperaturangabe ist beim Brautomat erforderlich. Ist im Rezept eine Temperatur angegeben, wird diese beim Import verwendet.

### Temperatur WPH [°C]

Dieser Parameter ist für den Rezeptimport und beschreibt die Standardtemperatur für eine Whirlpoolhopfung. Häufig wird bei Rezepten keine Temperatur für die WPH angegeben. Eine Temperaturangabe ist beim Brautomat erforderlich. Ist im Rezept eine Temperatur angegeben, wird diese beim Import verwendet.

### Temperatur Kochen [°C]

Dieser Parameter beschreibt die Temperatur, ab der die Würze wallend kocht. Der Standardwert ist 98°C und entspricht etwa einem Standort in 500m Höhe über NN. Für den Rezeptimport wird dieser Parameter als Temperatur Kochen verwendet.
