# Changelog

ESP32 Arduino 2.0.14\
VSCode 1.87 Arduino 0.6\
VSCode plugin ESP8266Littlefs based on VSCode plugin ESP8266fs\
InnuAPID AutoTune PID lib based on [Brett Beauregard](https://github.com/br3ttb/Arduino-PID-Library)\
InnuTicker task scheduler lib\
InnuFramework CSS/JS bootstrap 4.6.2\
Server Sent Events (8 SSE channels)

Version 1.38a

* Fix:          Debug code (breakpoint) entfernt
* Fix:          Rezept umbenennen ohne Funktion (debug code breakpoint)

* Update:       Anpassungen aus den Testversionen 1.37c bis 1.37j in Release 1.38 zusammengefasst
* Update:       Profile WebIf überarbeitet
* Update:       Beschreibung Platine erweitert
* Fix:          SSE Boradcast typo
* Update:       Sprachdateien

Version 1.37j

* Geändert:     aktiver Maischeplan kann nicht mehr gelöscht werden
* Neu:          Funktion Erstelle neuen leeren Maischeplan
* Neu:          Funktion Maischeplan umbenennen
* Geändert:     Einstellung Maischeplan Anordnung angepasst
* Geändert:     BrewFather Import Filter erweitert (tag recipe -> Sud gestartet)
* Neu:          BrewFather Import Filter erweitert (Version 2.0)
* Fix:          BrewFather Import, Tests mit versch. Rezepten steht noch aus
* Geändert:     Ticker handling optimiert
* Geändert:     Standard SampleTime für Induktion auf 2000ms angepasst
* Update:       ArduinoJSON lib 7.0.4
* Geändert:     Initialisierung Ticker Objekte
* Fix:          Bufferoverflow Toasts behoben
* Fix:          ArduinoJSON Rezept Import
* Update:       WiFiManager
* Fix:          Rezeptimport KBH2 Dekoktion: Korrektur Volumen Dick- und Dünnmaische

Version 1.36

* Geändert:     eine Tabellenzeile wird nach einem Klick mit Markierung angezeigt
* Geändert:     Wird eine Zeile zum Maischeplan hinzugefügt, wird die Zeile mit Markierung angezeigt und der Fokus wird auf die erste Zelle (Rastname) gesetzt

* Geändert:     Wenn ein Maischeprozess gestartet wird, werden die Buttons manueller Modus deaktiviert
* Geändert:     der Button Maischeplan speichern wird nur noch angezeigt, wenn eine Änderung vorgenommen wurde (der grüne Speichern Button entfällt)

* Geändert:     Wird vor dem Hinzufügen einer neuen Zeile zum Maischeplan eine vorhandene Zeile angeklickt, wird die neue Zeile nach der angeklickten Tabellenzeile eingefügt.
* Fix:          Script Flashen.cmd Parameter --baud eingefügt
* Geändert:     wenn ein neuer Maischeschritt leer bleibt (ohne Name, Dauer, Temperatur), wird die Zeile beim Speichern ignoriert
* Update:       ArduinoJSON Version 7 (alloc heap / stack). Alle JSON Verarbeitungen auf API V 7 angepasst
* Geändert:     Überarbeitung aller ArduinoJSON arrays und objects
* Geändert:     default Leistung bei Sensorfehler auf 0% angepasst (greetz@lowPerformer)
* Fix:          Webserver: simplifying webserver file uploads via form POST (#9211)

* Fix:          Löschen der aller Einstellungen und WLAN Einstellungen löschen
* Update:       ESPTool 4.7.0
* Geändert:     Flashen.cmd

* Fix:          Fehler beenden Zeileneditor behoben, wenn eine neue hinzugefügt wurde
* Geändert:     Zeileneditor wird nun mit Klick auf ein beliebiges Symbol zum Editieren beendet
* Geändert:     der Speichern Button wird bei Änderung Maischeplan rot angezeigt. Nach Speichern oder verlassen grün
* Geändert:     der Button Zeileneditor verlassen ohne speichern wird bei Änderung im Maischeplan grau dargestellt
* Geändert:     Der Fokus wird mit Klick auf Tabellenzeile editieren oder Tabellenzeile hinzufügen auf das Element Name (erste Spalte) gesetzt
* Geändert:     Der Button Database (Zeitplaner, Maischeplan wechseln, importieren, exportieren oder löschen) wird bei Änderungen am Maischeplan ausgeblendet

* Fix:          WebServer: use MD5Builder instead of mbedtls (#9123)
* Geändert:     Temperaturvorgaben Import in die Maischeplaneinstellungen Tab Voreinstellung Import verschoben
* Geändert:     Maischeplan Wechsel, Import, Export und Löschen in Tab Verwaltung verschoben
* Geändert:     Reihenfolge JS Dateien beim Start (lang.js vor brautomat.min.js)
* Erweitert:    Anleitung auf gitbook

* Geändert:     Steuerbefehle für IDS, HLT und Aktoren
* Fix:          Im manuellen Modus war die Anzeige Leistung nach dem Abschalten nicht korrekt (progress bar)
* Fix:          Inkonsistenz Anzeige Dashboard und tatsächlichem Maischeplan (Verwirrung um Buttons zum Speichern)
* Fix:          Es war möglich, mehr als eine Zeile im Maischeplan zeitgleich in den Editormodus zu versetzen
* Fix:          Die Eigenschaft autonext konnte ohne Editormodus in allen Zeilen der Tabelle verändert werden
* Fix:          Fehler Rastdauer in watchdog Eeprom write behoben, wenn PREV oder NEXT Button ausgeführt wurden
* Geändert:     Das Übernehmen einer Zeilenänderung wird nun direkt in die Maischeplan Datei geschrieben (kein doppeltes Speichern klicken)
* Geändert:     Der Button Speichern je Tabellenzeile im Editormodus wurde entfernt
* Geändert:     Der Button Maischeplan neu laden ändert Icon und Funktion im Editormodus
* Neu:          Button Editormodus ohne speichern verlassen als zweite Funktion auf Button Maischeplan neu laden
* Neu:          watchdog Eeprom write speichert zusätzlich den Status Pause Button
* Neu:          watchdog Eeprom write speichert zusätzlich den Status Play
* Neu:          watchdog Eeprom read setzt nach nach boot den Status Pause
* Neu:          watchdog Eeprom read setzt nach nach boot den Status Play Button
* Fix:          Korrektur Übersetzung SEN_PIN (Sensor PIN (CS))
* Neu:          Button Collapse Masicheplan wird im Editormodus ausgeblendet
* Geändert:     fault Behandlung PT100x Sensoren (not yet ready)
* Fix:          Bei Brauende blieb der Power Button im Status ON (grün)
* Neu:          Neuer Parameter Maximale Leistung GGM IDS bei Sensorfehler (0-100%)

Version 1.34a

* Fix:          Übersetzung
* Fix:          Links zu gitbook Parameter
* Geändert:     Quellcode ESP8266 und ESP32 zusammengefügt.
* Geändert:     Neues Format Maische Malz und mehr Rezeptimport

Version 1.33j

* Geändert:     GPIO Auswahl für Buzzer
* Geändert:     Zurücksetzen in Werkseinstellung angepasst (WLAN und Konfig löschen aktiviert)
* Fix:          Standard PID Regel MaischeSud korrigiert
* Geändert:     Standard SampleTime MaischeSud angepasst
* Fix:          Fehler maximale Anzahl an Sensoren
* Fix:          Fehler beim reload WebIf nach Neustart
* Fix:          Nach Wiederherstellung der Konfiguration wurde das Fenster nicht geschlossen
* Fix:          Datei lang.js in WebUpdate hinzugefügt (keine Sprachauswahl nach Update auf 1.33f)
* Geändert:     Auswahlliste Sensor-Typ (DS18B20, PT100x) und Sensor-Pin (2-, 3-, 4-Leiter) in Sprachfiles verschoben
* Geändert:     Auswahlliste PID Regeln in Sprachfiles verschoben
* Geändert:     Auswahlliste Typ IDS in Sprachfiles verschoben
* Neu:          Toast Nachrichten an Sprachfiles angepasst
* Fix:          Sprachfiles Auswahl Toasts und MP3 falsche Reihenfolge (on/off vertauscht)
* Neu:          Auswahl Sprache (de, en)
* Neu:          Verzeichnis /language
* Neu:          offenes Format (JSON) für Sprachdateien und ToolTipps erstellt

Version 1.32b

* Fix:          die Rasttemeraturen beim Rezeptimport wurden nicht korrekt gerundet
* Fix:          Wenn fehlendes Abmaischen im Rezeptimport kbh2 ausgewählt war, wurde die MaischeSud Abmaischtemperatur nicht übernommen
* Geändert:     debug Ausgaben entfernt
* Fix:          Button Neustart debug code entfernt
* Geändert:     Toasts vom Typ error um einen ok-Button zum Schließen erweitert
* Geändert:     mDNS Anzeige im Display, auf der Konsole und in der Anleitung angepasst
* Fix:          Fehler WebIf behoben (Webseite wurde teilweise geladen)
* Fix:          Fehler WebIf behoben howler.js entfernt
* Geändert:     Auf html5audio umgestellt
* Geändert:     Anschluss Max31865 geändert. Siehe Readme
* Neu:          Fehlerprüfung PT100x Sensoren
* Neu:          GGM IDS Pin Interrupt kann deaktiviert werden: Errorcodes der IDS werden nicht ausgelesen
* Neu:          GPIO Pin "Aus" eingefügt. Die Auswahl deaktiviert einen Aktor und gibt den GPIO frei
* Fix:          D20 (GPIO10) aus der Liste entfernt. GPIO10 wird intern verwendet (SD3 Flash)
* Fix:          Korrektur PT Sensor ID
* Fix:          Variablentyp mismatch korrigiert
* Fix:          Treiber Start Max31865 korrigiert
* Fix:          Startmodus Max31865 PT100 und PT1000 vertauscht
* Neu:          Unterstützung für PT100 und PT1000
* Neu:          Unterstützung für Max31865 Amplifier implementiert (PT100/PT1000)

Version 1.31

* Neu:          NTP Server konfigurierbar
* Fix:          Initialisierung Piezo
* Update:       jQuery 3.7.1
* Update:       Howler 2.2.4 (play audio files)
* Optimiert:    InnuFramework CSS (purge)
* Geändert:     Partionen angepasst - manuelles flashen erforderlich!
* Geändert:     Display MaischeSud angepasst

Version 1.30

* Fix:          Bootreihenfolge Treiber Display
* Fix:          Bootreihenfolge Treiber DS18B20
* Geändert:     Ticker Display entfernt

Version 1.29

* Fix:          WebUpdate dev branch
* Fix:          WebUpdate Protokoll unvollständig
* Fix:          KBH2 Datei wurde nach Rezeptimport nicht gelöscht (debug)
* Update:       ESP32 2.0.14
* Geändert:     Anzeigedauer Toast-Nachrichten reduziert: info, success 10s, warning 20s
* Fix:          Anzeigefehler Leistung IDS im Status statePlay (Play Button rot) nach Miascheschritt mit deaktiviertem autonext
* Fix:          WiFiClient.flush - Properly initialize and check _rxBuffer #8699
* Fix:          Anzeigefehler Timer nach Button Prev/Next auf Maischeschritt Aktor schalten behoben
* Fix:          Fehler Button Prev und Button Next auf Maischeschritt Aktor schalten springen behoben
* Fix:          Anzeigefehler Timer nächste Rast ("6046:00") behoben
* Fix:          Zeitgesteuerter Braustart: DateTimePicker im WebIf
* Fix:          Zeitgesteuerter Braustart: Aktor einschalten als erster Schritt wurde nicht erkannt
* Geändert:     Sensorkalibrierung auf 15 Messwerte reduziert
* Fix:          Watchdog Reset während Sensorkalibrierung
* Geändert:     WiFi.Events angepasst (Timeouts)
* Geändert:     Aktoren shortcut entfernt
* Fix:          Fehler Laden Web Interface behoben (request handler not found)
* Fix:          Profile können nicht gespeichert werden - Wenn das Verzeichnis Profile nicht existiert, wird es erstellt
* Neu:          Aktor und Nachguss Tracking im Eeprom
* Fix:          Exception WiFiClient.flush
* Fix:          Watchdog nach WLAN AP Mode und WebUpdate starten
* Geändert:     SSEkeepAlive 60s - WebIf checkAliveSSE 90s
* Neu:          Watchdog Task timeout 10s (Test)
* Neu:          Autostart Maischeprozess, wenn nach dem Neustart im Eeprom ein Maische Tracking gefunden wird (Reset oder Absturz)
                Maische Tracking wird entweder automatisch gelöscht (Maischeschritt beendet)
                oder Maische Tracking manuell durch Power Button (Start/Stop) zurücksetzen
* Neu:          Tracking aktueller Maischeschritt und Zeit im Eeprom
* Fix:          Fehler Board config behoben (cores)
* Fix:          Fehler WiFi Client behoben
* Fix:          Fehler bei der Erkennung Aktor ein/ausschalten im Maischeplan behoben
* Update:       ESP32 2.0.13
