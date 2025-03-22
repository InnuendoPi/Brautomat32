# Changelog

ESP32 Arduino 3.1.3 ESP-IDF v5.3.2\
ESP32 Arduino 2.0.17 ESP-IDF v4.4.7\
ESP8266 Arduino 3.1.2\
VSCode 1.98 pioarduino IDE 1.0.6\
InnuAPID AutoTune PID lib 1.6\
InnuTicker Task Scheduler lib 0.0.5\
InnuNextion Display lib\
InnuLog Debug lib serial monitor\
InnuFramework CSS/JS bootstrap 4.6.2

Version 1.51.8

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
