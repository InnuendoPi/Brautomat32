# Changelog

ESP32 Arduino 3.2.1 ESP-IDF v5.4.2\
VSCode 1.101 pioarduino IDE 1.0.6\
InnuAPID AutoTune PID lib 1.6\
InnuTicker Task Scheduler lib 0.0.6\
InnuNextion Display lib 0.0.3\
InnuLog Debug lib serial monitor\
InnuFramework CSS/JS bootstrap 4.6.2

## Übersicht Brautomat32 Versionen

Brautomat32 Release: produktiver Einsatz\
main repository, InnuLog deaktiviert\
RAM:   [==        ]  19.2% (used 62956 bytes from 327680 bytes)\
Flash: [========= ]  86.1% (used 1467426 bytes from 1703936 bytes)

Brautomat32 Testversion: neue Funktionen\
develop repository, InnuLog aktiviert\
RAM:   [==        ]  19.2% (used 62956 bytes from 327680 bytes)\
Flash: [========= ]  90.0% (used 1534118 bytes from 1703936 bytes)

## Änderungen

Version 1.56.12 Development

* Neu:          WebServer Middleware Logger (curl ähnliche Protokollierung WebServer). Auswahl Logging System verbose, Develop Version only
* Neu:          Relais PID Modus in die Auswahl PID Algorithmus eingefügt (höhere Dämpfung Kd)
* Geändert:     debug Ausgaben PID Controller
* Geändert:     debug Ausgaben Kettles
* Fix:          die Funktion setNewPower hat per loop Kettle Update erneut aufgerufen
* Entfernt:     Zieltemperatur 0 nach Power off
* Geändert:     WebServer serveStatic cache header Anpassungen
* Fix:          Ausgabe Konsole Access Point Mode WLAN config Portal
* Fix:          Ausgabe Konsole boot und init Brautomat
* Fix:          Display Firmware Controller Deck Power Button wurde als default on angezeigt
* Fix:          Fehler bei der Berechnung Restzeit behoben, wenn die Rastdauer 0 Sekunden beträgt
* Geändert:     Generische Schnittstelle (kettles, sensors, actors, misc) für das Senden von JSON Datenpaketen
* Fix:          Überprüfung freier Speicher Dateisystem, bevor ein Messpunkt protokolliert wird
* Update:       IDF 5.4.2 Release
* Update:       Arduino Framework 3.2.1
* Update:       esptool v5.0.0
* Geändert:     Logging auf der ser. Schnittstelle ist Bestandteil bei Testversionen, aber nicht mehr in Release Versionen
* Geändert:     InnuLog Debug Bibliothek als Compiler Direktive eingebunden (build_flag BRAUTOMAT_DEBUG)
* Geändert:     Display Firmware Restzeit BrewPage Font angepasst
* Geändert:     in der Fermenter Chart wird nun alle 30min ein neuer Messpunkt erstellt. Bisher 15min
* Geändert:     Anzahl der Display Aktualisierungen reduziert
* Fix:          Display progress bar kettlePage
* Geändert:     debug Ausgaben InnuNextion lib angepasst
* Update:       IDF 5.4.2-25
* Fix:          BrewFather API Filter korrigiert
* Geändert:     diverse Quellcode Optimierungen
* Geändert:     node-minify CSS, JS und html
* Update:       IDF 5.4.2
* Geändert:     diverse WebIf html Korrekturen
* Geändert:     WiFiManager config portal Optionen erase und update entfernt. Standard debug level der lib deaktiviert
* Geändert:     Bereich Schaltzyklus Aktoren 10ms bis 240000ms
* Update:       ArduinoJSON 7.4.2
* Fix:          Bug IDF cores uart (feat(uart): fixes pin attach for any IDF 5.x (#11499))
* Fix:          Bug IDF cores uart (fixes pin attach for any IDF 5.x #11499)
* Geändert:     Javascript load first tab on load/reload for modal windows
* Test:         GGM IDS5 hinzugefügt (noch im Test!)
* Geändert:     Tooltipp Chart Zieltemperatur mit einer Nachkommastelle
* Fix:          Darstellung Einstellungen MaischeSud Kessel im Relais Modus fehlerhaft
* Geändert:     diverse WebIf Javascript Korrekturen
* Geändert:     Javascript clear values on load/reload for modal windows
* Fix:          es gab eine Bedingung, unter der startSSE die DS18B20 Sensoren vor Ablauf conversion time abfragen konnte
* Geändert:     prepare Sys für WebUpdate auf Version 1.56+ (Verzeichnis Fermenter, Beispiele Ale und Lager)
* Fix:          doppelter sendAlarm nach power off/reboot, wenn ein Maische oder Fermenter Prozess aktiv war
* Fix:          Default dutyCycle Fermenter auf 60s korrigiert
* Fix:          WebIf falsche Zuweisung modal window
* Fix:          Power Button Display Fermenter Modus
* Fix:          sendAlarm Tone wurde bei Start/Stop Maische/Fermenter doppelt aufgerufen
* Fix:          Aktualisierung der WebIf Buttons SSE wurde doppelt aufgerufen
* Fix:          Anzahl der Chart Messpunkte im Fermenter Modus korrigiert
* Fix:          Progress bar Display war nicht korrekt berechnet
* Fix:          Überprüfung dutyCycle max auf 240s korrigiert
* Geändert:     Status Fermenter wird alle 60s gespeichert (MaischeSud alle 10s)
* Fix:          speichern aktueller Status Berechnung der Restzeit
* Fix:          Prüfung Speichern aktueller Status im Flash korrigiert
* Geändert:     TickerSys Aufrufe optimiert (doppelte Aufrufe per loop)
* Fix:          eine aktive Kühlung oder Heizung schaltet mit Erreichen der Ziel-Temperatur ab
* Entfernt:     Unterstützung für alte Display Firmware entfernt (älter als commit 1.51.16 aus April 2025)
* Fix:          Anzeige Restzeit Fermenter
* Fix:          WebIf Benennung GPIOs Fermenter vertauscht
* Geändert:     calcRemaining angepasst (Reduzierung der Berechnungen per loop)
* Fix:          Bei aktivem Gärplan führte eine Änderung der Fermentereinstellungen (verlassen editState) zu Ziel-Temperatur von 0°C.
* Fix:          Bei aktivem Gärplan wurde nach eine Änderung der Fermentereinstellungen (saveConfig) checkFermTemp nicht mehr aufgerufen
* Geändert:     Anpassung language Dateien für Fermenter Anzeige WebIf Status
* Geändert:     Anpassungen aktueller Status Flash Speicher
* Geändert:     setLastTime bei manueller Aktualisierung Sensoren, Aktoren und Kettles
* Fix:          Bug IDF cores WiFi (Workaround bug in esp_wifi_get_protocol() (#11239))
* Fix:          Bug IDF cores NetworkClientSecure (Do not check if client is connected if already disconnected (#11356))
* Optimiert:    Berechnung der Sensorwerte calc offsets nach Update (Reduzierung der Berechnungen per loop)
* Geändert:     Sensorfehler sendtoast erst nach zwei aufeinanderfolgenden Abfragefehlern
* Neu:          Pause nach Kühlung/Heizen eingefügt
* Fix:          Chart laden nach reboot/power off unvollständig
* Geändert:     NTP Zeitsynchronisierung angepasst
* Fix:          GPIO invertieren wurde nicht korrekt gespeichert
* Fix:          Step Restzeit auf Display fehlerhaft
* Entfernt:     ESP8266
* Entfernt:     IDF4
* Neu:          Fermenter Modus

Version 1.55.2 Release

* Geändert:     Tabelle BrewFather wird beim Öffnen Modal immer geleert
* Geändert:     Chart laden nach reboot/power off
* Fix:          html check undefined object
* Fix:          typo check Kesseltyp
* Geändert:     div. Anpassungen html/js
* Geändert:     Überprüfung returnCodes BrewFather
* Fix:          Fehler empty response im request getDots behoben
* Geändert:     in den Einstellungen der Kessel wird der aktive Profilname im Header angezeigt
* Geändert:     in den Einstellungen der Aktoren und Sensoren wird der Gerätename im Header angezeigt
* Fix:          Fehler Hardware Profil löschen behoben
* Fix:          BrewFather API Tabelle: handling IDs Rezepte/Sude
* Fix:          Liste Hardware Profile
* Fix:          Fehler im Modul Maischeplan editieren autonext behoben
* Geändert:     Reload Maischeplan (reset array and read mashplan)
* Update:       VSCode
* Fix:          html Buttons aria-hidden Attribut
* Fix:          Fehler im Modul Maischeplan editieren behoben
