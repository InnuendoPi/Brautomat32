# Changelog

ESP32 Arduino 3.1.2 ESP-IDF v5.3.2
ESP32 Arduino 2.0.17 ESP-IDF v4.4.7
ESP8266 Arduino 3.1.2 Arduino CLI 1.1.1
VSCode plugin ESPFS
InnuAPID AutoTune PID lib
InnuTicker Task Scheduler lib
InnuNextion Display lib
InnuLog Debug lib serial monitor
InnuFramework CSS/JS bootstrap 4.6.2
Server Sent Events (6 SSE channels)

Version 1.50.2

* Update:       Arduino core 3.1.3 pioArduino 53.03.13
* Fix:          Rezeptimport war nach Umstellung 1.50 fehlerhaft (veraltetes Element im WebIf)
* Fix:          Webhooks festes mapping für HLT entfernt
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
