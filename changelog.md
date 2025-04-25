# Changelog

ESP32 Arduino 3.2.0 ESP-IDF v5.4.1\
VSCode 1.99 pioarduino IDE 1.0.6\
InnuAPID AutoTune PID lib 1.6\
InnuTicker Task Scheduler lib 0.0.6\
InnuNextion Display lib 0.0.2\
InnuLog Debug lib serial monitor\
InnuFramework CSS/JS bootstrap 4.6.2

Version 1.53RC

* Fix:          Bug: Fehler im Modul Rezept umbenennen/kopieren behoben (altes Format)
* Fix:          Debug Ausgaben BF Import entfernt
* Fix:          ein fehlerhaftes oder sehr großes Brewfather JSON konnte eine temporäre Datei im Status geöffnet hinterlassen
* Fix:          ESP32 IDF4 und ESP8266 Updates erstellt (EOL)P
* Update:       InnuTicker: RAM handling (ptr)
* Update:       InnuNextion: RAM handling (ptr)
* Update:       ArduinoJSON Bibliothek 7.4.1
* Geändert:     bei Aktoren ohne aktiviertes PWM wird die Eigenschaft Leistung nicht mehr angezeigt (100%)
* Geändert:     bei der PID Manager Eingabe Ku/Pu wird die Berechnung PID bei der Vorauswahl Autotune PID Modus automatisch durchgeführt
* Geändert:     Watchdog feed/reset angepasst
* Geändert:     RAM handling Webserver response (avoid mem copies)
* Geändert:     RAM handling Überprüfung auf Sonderzeichen (ptr)
* Geändert:     Rezeptimort (removed global var)

Version 1.52

* Geändert:     Vor der Erstellung eines Backups wird die Konfiguration gespeichert (Änderung BF API sichern)
* Fix:          Restore BrewFather credentials wurden wegen einer Ausnahme für den ESP8266 übersprungen
* Fix:          Resize Chart durch Funktion Chart löschen behoben
* Geändert:     Mit dem Start von einem Maischeschritt wird ein neuer Chart Messpunkt gesetzt
* Geändert:     Die Buttons Play, Pause, Prev und Next erstellen einen Messpunkt in der Chart zum Klickzeitpunkt
* Fix:          Protokollierung der Chart Messpunkte wird beim Boot gelöscht, wenn der vorherige Brauprozess noch keinen Maischestep gestartet hatte
* Fix:          Restore file wurde nicht geschlossen
* Fix:          Sichtbarkeit Brewfather API Elemente korrigiert, wenn keine API credentials eingetragen wurden
* Fix:          DS18B20 Sensorauflösung HIGH, wenn nach WebUpdate keine DS18B20 Sensorauflösung aus alter config gelesen werden kann
* Update:       ArduinoJSON Bibliothek 7.4.0

* Breaking:     Die Entwicklung für ESP8266 und ESP32 IDF4 (veraltetes Framework) endet mit Version 1.52
* Neuer Name:   Das Kürzel "pIO" wurde entfernt
* Neuer Name:   Der Brautomat32 für den ESP32 dem Framework IDF4 (eol) hat das Kürzel IDF4

* Fix:          Backup and Restore ESP8266: auf dem ESP8266 wird nur die config.txt gesichert und wiederhergestellt, Rezepte und Profile nicht möglich (noMemory)

Version 1.52 RC1

* Neu:          Reload Chart: das Chart kann neu geladen werden
* Neu:          alle Messpunkte für das Chart werden protokolliert. Pausen (Stromunterbrechungen) werden mit Ist 0°C und Soll 0°C erfasst.
* Fix:          InnuAPID: Fehler Berechnung Leistung korrigiert, wenn die Ist-Temperatur über dem Wert Übergang Temperatur kochen, die (neue) Ziel-Temperatur aber unter dem Wert liegt
* Fix:          SNTP Überprüfung: wenn beim Boot keine Uhrzeit abgerufen werden kann, wird getLocalTime wiederholt
* Fix:          Im debug_mode wurde breakDuration bei power off oder reboot durch den serial monitor doppelt von active_seconds einer aktiven Rast abgezogen
* Fix:          Fehler Compiler directives ESP8266 behoben

* Breaking:     prepareSys: ein Webupdate von Version 1.46 oder älter ist nicht mehr möglich

* Entfernt:     prepareSys: Konvertierung altes Format Brautomat Konfiguration beim Boot entfernt (Brautomat V 1.46 oder älter)
* Entfernt:     prepareSys: Überprüfung der Verzeichnisse language, Profil und Rezept (Brautomat 1.46 oder älter) beim Boot entfernt
* Geändert:     prepareSys: ist keine Datei config.txt vorhanden, erstellt prepareSys eine default config.txt
* Geändert:     prepareSys: wenn beim boot die Datei backup.json vorhanden ist, wird die Datei gelöscht
* Fix:          Korrekturen WebIf nach W3C hmtl Validator
* Fix:          default Maischeplan wurde nicht geladen, wenn keine config vorhanden war
* Geändert:     Auslesen der Firmware Version Display angepasst
* Fix:          Korrektur Varialentyp für Display Rückgabe (type mismatch)
* Fix:          doppeltes speichern der Konfiguration beim Import über die Brewfather API entfernt
* Geändert:     Inline Konvertierung Format Maischepläne angepasst (doppelten Code entfernt)
* Fix:          Display Firmware Controller Deck: Seite Kettles wurde die Uhrzeit nicht korrekt dargestellt
* Geändert:     Restore stellt alle Objekte aus dem Backup wieder her
* Geändert:     Backup Dateiname kann nun vorgegeben werden
* Geändert:     Backup Brautomat beinhaltet: config, log, BrewFather API, Profile und Rezepte
* Neu:          Display Firmware Version in Nextion hinterlegt
* Geändert:     Inline Konvertierung Rezepte in neues Format
* Geändert:     Alle Importfilter auf neues Rezeptformat umgestellt
* Fix:          Fehler im JSON Format Rezpete behoben
* Geändert:     Brew Page - Nextion Display Firmware sys0: 10
* Neu:          Kopie von Maischeplan erstellen
* Geändert:     In der Tabelle Brewfather Rezepte/Sude wird die ID ausgeblendet
* Geändert:     BrewFather Rezepte und Sude ohne Namen (Entwürfe) werden gefiltert
* Geändert:     BrewFather Rezepte und Sude werden nach Rezeptnamen sortiert angezeigt
* Fix           fix(rmt): memset all config structs to zero before using PR #11203
* Fix:          Fehler in der Abfrage BrewFather API behoben, wenn eine große Anzahl an Rezepten oder Suden abgerufen wurde (Brewfather Limit 50)
* Revert:       async fetch Funktion ersetzt synchrone ajax get requests beim Start WebIf: WebUpdate lädt Webseite nicht neu (unhandled fetch err)
* Fix:          Fehler in der Abfrage BrewFather API behoben, wenn das Abfrageergebniss keine Rezepte oder Sude enthält
* Geändert:     Abfrage BrewFather API angepasst, wenn die API kein httpCode 200 (ok) sendet
* Update:       ESP32 IDF5 5.4.1 (3.20)
* Fix:          Brewfather Rezeptimport fehlende Temperatur Hopfengabe
* Fix:          Brewfather Rezeptimport maximale Anzahl Hopfengaben auf 15 erweitert
* Geändert:     Brewfather Rezeptimport Einmaisch- und Whirlpooltemperaturen werden ausgelesen
* Geändert:     async fetch Funktion ersetzt synchrone ajax get requests beim Start WebIf (SSE channel, language, etc.)
* Geändert:     handling WebIf gz Dateien (TTF, CSS, JS)
* Update:       ESP32 IDF5 5.4 RC2
* Geändert:     Überprüfung Dateiname beim Rezeptimport erweitert (/ wird durch _ ersetzt)
* Fix:          Korrektur serveStatic Einträge
* Neu:          Auswahl Auflösung DS18B20 Sensoren. Default HIGH (12bit, 0.0625°C, 750ms)
* Fix:          sendAlarm Info beim Booten bei aktiviertem Display entfernt. Boot wurde als Seitenwechsel behandelt
* Fix:          Display Firmware Werte Vorgaben entfernt
* Geändert:     doppeltes eraseflash beim Beenden Maischeplan entfernt
* Geändert:     InnuAPID Debug log output
* Neu:          Chart als JPEG speichern
* Fix:          sendAlarm bei Seitenwechsel Display
* Fix:          Links gitbook
* Geändert:     Anzahl der Schritte im Maischeplan von 20 auf max 30 erhöht
* Geändert:     ajax post requests response dataType auf Text statt automatische Erkennung
* Geändert:     ajax post requests optionale Parameter cache und async entfernt (Verwendung der defaults)
* Geändert:     Revert: WebIf playsounds warten auf complete response.status 200 verlangsamt das Webif im Brauprozess. review steht aus
* Fix:          Fehler beim Beenden Maischeprozess, wenn die maximale Anzahl an Steps (20) verwendet wurde
* neu:          neuer Parameter Deaktiviere PID Berechnung ab Übergang Kochen (noPIDboil)
* Geändert:     InnuAPID lib 1.6 noPIDboil
* Geändert:     Ablauf Maischeplan überarbeitet und doppelten Code entfernt (checkTemp) Teil 2
* Fix:          sendAlarm(ALARM_INFO) reboot bei aktiviertem Display entfernt
* Fix:          Debug Ausgaben type mismatch uint64_t
* Geändert:     WebIf playsounds auf response.status 200 (ok) oder 400 (err) angepasst
* neu:          Objekt Spinner wird angezeigt, wenn von der Brewfather API Daten gelesen werden
* neu:          Tab Brewfather API wird ausgeblendet, wenn die API credentials nicht konfiguriert sind
* Fix:          Korrektur Sichtbarkeit der Brewfather Objekte
* Fix:          Korrektur Auswahl deaktiviert Brewfather API
* Fix:          Fehler Speichern Brewfather API credentials behoben
* Neu:          Anbindung an BrewFather API (Rezepte und Sude)
* Fix:          BrewFather Importfilter
* Fix:          Revert Ablauf Maischeplan überarbeitet und doppelten Code entfernt (checkTemp)
* Update:       gitbook Anleitung de/en überarbeitet
* Geändert:     Auswahl für das Schaltsignal bei Webhook Aktoren oder Kessel
* Geändert:     Handling Leistung ab Übergang Kochen
* Geändert:     Ablauf Maischeplan überarbeitet und doppelten Code entfernt (checkTemp)
* Fix:          unter bestimmten Bedingungen konnte ein Sensorfehler Auswirkungen auf alle Kessel (PID) haben

Version 1.51

* Update:       ArduinoJSON Bibliothek 7.3.1
* Geändert:     BrewFather Import Hopfengabe erweitert (Alpha und Menge)
* Update:       Arduino libs IDF 5.3
* Optimiert:    Optimierungen Webserver response
* Geändert:     Anpassungen WebIf Checkboxen
* Geändert:     Sprachauswahl in die Systemeinstellungen -> Dashboard verschoben
* Geändert:     Anpassungen Intervall Zeitaktualisierung
* Geändert:     WebIf requests verarbeiten die Webserver Antwort bei success (200)
* Geändert:     kann ein WebIf request nicht korrekt verarbeitet werden, sendet der Webserver 400 an das WebIf zurück
* Fix:          alle sprintf Aufrufe in snprintf gewandelt
* Fix:          Logging PID Controller falscher Variablentyp
* Geändert:     InnuTicker lib 0.0.5
* Geändert:     InnuAPID lib 1.5
* Optimiert:    Optimierungen Flash mem usage
* Fix:          WebIf Fehler doppelter playsound Aufruf, wenn der server response code bad request (400) war
* Fix:          WebIf fehlendes server response im Profilmanagement
* Revert:       Logging SSE Events (debug) werden im zugehörigen SSE Kanal protokolliert
* Geändert:     GPIO Commands und Webhook Requests für Aktoren optimiert
* Fix:          Fehler in der Funktion Reduzierung der Ausglangsleistung bei Sensorfehler behoben (mapping auf MaischeSud Kessel (aus V 1.4x) entfernt)
* Geändert:     GPIO Commands und Webhook Requests für die drei Kessel optimiert
* Geändert:     Informationen im Logging der drei Kessel (Maische, Sud, Hlt) und deren Typen (Error, Info, Verbose) überarbeitet
* Neu:          Im Logging GGM IDS werden die Commands an das Induktionskochfeld ausgegeben (binär)
* Geändert:     Logging Kessel und Aktoren angepasst
* Geändert:     Einheitliches handling Webhooks für Kessel und Aktoren
* Geändert:     Aktoren Webhooks angepasst
* Geändert:     Webhook Timeout 3000ms (def 5000) (ESP8266, ESP32)
* Geändert:     Webhook connection Timeout 3000ms (def 5000) (ESP32)
* Fix:          Endlose Error Toasts wenn webhook URL fehlerhaft (timeout)
* Fix:          Eine falsche oder fehlerhafte Webhook URL konnte den Brautomat vollständig blockieren
* Geändert:     Sichtbarkeit Parameter Schaltzyklus in den Einstellungen Kessel angepasst
* Fix:          Korrektur in der Ansicht Einstellungen für den Gerätetyp Webhook: der Parameter URL wurde bei erneutem Öffnen nicht angezeigt
* Geändert:     Der Parameter DutyCycle wird auf Standard default zurückgesetzt, wenn der Gerätetyp verändert wird
* Geändert:     Der Parameter Webhook URL wird gelöscht, wenn der Gerätetyp geändert wird
* Geändert:     Der Parameter GPIO Inverted wird gelöscht, wenn der Gerätetyp geändert wird
* Fix:          Parameter GPIO Inverted wurde nicht korrekt im Profil gespeichert
* Geändert:     Rezeptimport Formatüberprüfung angepasst (MMum, BrewFather)
* Geändert:     Logging SSE Events (debug) werden vollständig im Kanal System protokolliert
* Geändert:     Logging Webhook response message zum response code eingefügt
* Update:       Arduino core 3.1.3 pioArduino 53.03.13 (IDF 5.3.2.250210)
* Fix:          Rezeptimport war nach Umstellung 1.50 fehlerhaft (veraltetes Element im WebIf)
* Fix:          Webhooks mapping auf Kessel HLT ( aus V 1.4x) entfernt
* Neu:          Logging für Kessel Sud erweitert

Version 1.50

* Update:       Arduino core 3.1.2 pioArduino 53.03.12 with Fix #10972 (String nullptr)
* Geändert:     Webhook URL für Maischekessel aktiviert
* Geändert:     Profile um Webhook URL erweitert
* Neu:          Sonderbefehl SUDPROFIL
* Neu:          Sonderbefehl HLTPROFIL, alternativ NACHGUSSPROFIL
* Neu:          Sonderbefehl MAISCHEPROFIL als Alternative für IDSPROFIL
* Geändert:     Kesselprofile für Sud und Nachguss hinzugefügt
* Geändert:     WebIf Optimierung abgeschlossen
* Geändert:     Kessel Sud für die Verwendung von Webhooks erweitert
* Geändert:     einheitliche Optik für die Einstellungen Kessel Maische, Sud an Nachguss
* Gerändert:    Nachguss Tab Temperatursteuerung eingefügt
* Geändert:     Button Nachguss löschen entfernt. Funktion wird mit Auswahl deaktiviert ausgeführt
* Downgrade:    Arduino core 3.1.1 wegen Fehler in 53.03.12 (Exception)
* Geändert:     Nachguss für Verwendung mit IDS erweitert (wegen Downgrade noch nicht abgeschlossen)
* Geändert:     Verarbeitung der Kettle Parameter url, dutycycle und invert überarbeitet
* Update:       Arduino core 3.1.2
* Geändert:     träges WebIf Part 4: Ausblenden von Objekten überarbeitet
* Geändert:     träges WebIf Part 3: request Zeitkorrektur nach Stromlos/-Ausfall überarbeitet
* Geändert:     träges WebIf Part 2: request & response handling überarbeitet
* Fix:          träges WebIf Part 1: Server response mime Format für JSON korrigiert
* Geändert:     Abfrageintervall Sensoren von Minimum SampleTime MAISCHE, SUD und HLT auf festen Wert 2000ms gesetzt
* Geändert:     neuer Parameter DutyCycle im Relais Modus (1000ms bis 60000ms). Default 5000
* Geändert:     InnuAPID Bibliothek Übergabe KettleID für debug Ausgaben hinzugefügt (default 0)
* Geändert:     InnuAPID Bibliothek Berechnung der benötigten Leistung wenn lastTime null ist
* Fix:          Fehler in setProfil D Parameter behoben
* Update:       VSCode 1.97
* Update:       Dallas Temperature Bibliothek 4.0.4

Version 1.49

Die Version 1.49 ist ein Zwischenupdate für alle Bautomat versionen (ESP8266 und ESP32 (Brautomat32, Brautomat32pIO). Nach dem Zwischenupdate kann direkt auf Version 1.50 aktualisiert werden
