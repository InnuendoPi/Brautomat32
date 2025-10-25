# Changelog

ESP32 Arduino 3.3.2 ESP-IDF v5.5.1\
VSCode 1.105 pioarduino IDE 1.1.5\
InnuAPID AutoTune PID lib 1.8\
InnuTicker Task Scheduler lib 0.0.6\
InnuNextion Display lib 0.0.4\
InnuLog Debug lib serial monitor\
InnuFramework CSS/JS bootstrap 5.3.8

## Änderungen

Version 1.58.3 beta

* Fix:          Reconnect nach Power Off länger als timeout SSE
* Fix:          WebUpdate Toast Nachricht "No free SSE channel"
* Optimiert:    WebIf vollständig auf Bootstrap 5.3 mobile first responsive umgestellt
* Optimiert:    Toast Nachrichten werden nun mit dem Bootstrap Framework bereitgestellt. Toasts Plugin entfernt.
* Deaktiviert:  der Timer gesteuerte Braustart ist temporär deaktiviert (wird in einer der nächsten version neu implementiert)
* Upgrade:      Bootstrap 5.3.8
* Update:       pioArduino IDE 1.1.5
* Geändert:     jQuery vollständig entfernt
* Fix:          SSE handling prüft send bytes auf dead connection (TCP socket)
* Fix:          SSE Broadcast prüft vor dem senden, ob der Client verbunden ist
* Fix:          typo und debug Log Ausgaben SSE Broadcast auf VERBOSE gesetzt
* Geändert:     Modal Dialog Sud öffnet immer den ersten Tab
* Fix:          Schnelles Öffnen und Schließen Dialog Sud mit aktiven Tab BrewFather sendet zu viele requests in zu kurzer Zeit (empty repsonse)
* Fix:          ESP IDF Ticker im SSE handling ersetzt durch InnuTicker (client.print ISR not thread safe)
* Fix:          SSE Prüfung Client mit eindeutiger Session ID erweitert
* Fix:          JS Überprüfung "no free SSE channel"
* Update:       pioArduino IDE 1.1.2
* Update:       VSCode 1.105
* Fix:          Inline change Ku und Pu bei Auswahl PID-Relais korrigiert
* Fix:          Webhook powlist wurde im Modal Maischekessel falsch in das JSON eingetragen
* ReWork:       brautomat.js überarbeitet
* Optimiert:    jQuery Funktionen durch JS/DOM ersetzt. Bootstrap 4.6 Modal dialog, DateTimePicker, Toast erfordern weiterhin jQuery
* Optimiert:    SerializeJSON jQuery Plugin durch Javascript ersetzt
* Optimiert:    TableToJSON jQuery Plugin durch Javascript ersetzt
* Fix:          Anzeigefehler im Modus Fermenter behoben
* Fix:          Fokus war nicht korrekt, wenn ein Step im Maischeplan/Fermenterplan hinzugefügt wurde
* Update:       Arduino V3.3.2 ESP-IDF v5.5.1
* Optimiert:    Zusammenstellung der Dropdown selects vom ESP nach JS in den WebBrowser verschoben
* Fix:          Korrektur Überprüfung Client IP auf INADDR_NONE
* Optimiert:    WebServer replyJSONdoc
* Optimiert:    Webhandler SSE Broadcast und SSEkeepAlive
* Optimiert:    Webhandler SSEHandler, handleAll und handleNotFound
* Geändert:     Erlaubte Zeichen Gerätename: a-zA-Z0-9-_# das erste Zeichen muss a-zA-Z0-9 sein (wichtige Änderung: kein Leerzeichen)
* Geändert:     Erlaubte Zeichen Profilname: a-zA-Z0-9-_ das erste Zeichen muss a-zA-Z0-9 sein (wichtige Änderung: kein #, kein Leerzeichen)
* ReWork:       Eingabekontrolle WebIf (Geräte- und Dateinamen, Webhook URL, Api Credentials, MDNS, NTP)
* Fix:          wurde während einer aktiven mp3 eine weitere mp3 gestartet, wurde eine uncought exception ausgelöst
* ReWork:       html und js aufgeteilt in zwei Dateien. WebUpdate angepasst
* ReWork:       einheitliche Schnittstelle async apiGET und apiPOST (fetch)
* ReWork:       jQuery GET und POST request entfernt
* ReWork:       komplettes WebIf optimiert, Fehler korrigiert, Redundanzen entfernt, aria
* Fix:          Fehler manueller Modus behoben (loop updateProgress)
* Fix:          WebServer static korrigiert
* Fix:          Zieltemperatur Kessel wurde aus WebIf nicht übernommen

Version 1.57.12

* Fix:          async fetch ersetzt synchronous GET request SSE channel, language, breakDuration, WebUpdate Alert und checkAlive SSE
* Fix:          html Korrekturen Screenreader (aria)
* Fix:          Beim Anlegen von neuen Sensoren wurde die Eigenschaft "Sensor aktiv" (default true) im WebIf nicht korrekt angezeigt
* Geändert:     Wenn die Konfiguration im WLAN Config Portal eine erfolgreiche Verbindung herstellt, wird der Brautomat neu gestartet
* Geändert:     WiFiManager Konfiguration anggepasst: DEBUG Level NODEBUG, NOHELP
* Geändert:     WiFiManager Konfiguration anggepasst: WLAN setConnectTimeout 20s
* Geändert:     WiFiManager Konfiguration anggepasst: WLAN setMinimumSignalQuality 20%
* Geändert:     WiFi Std Konfiguration entfernt
* Optimiert:    SSE TimeOut und checkAliveSSE
* Fix:          sendAlarm in ledcWriteTone() konvertiert. sendAlarm Tone() nicht timer/interrupt safe.
* Geändert:     SNTP Time Update
* Geändert:     SSE keepAlive timer
* Fix:          SSE TimeOut
* Geändert:     Sprachdateien umbenannt (deutsch, english, norsk)
* Neu:          Sprachdatei Norwegisch
* Update:       Arduino V3.3.1
* Update:       ESP-IDF v5.5.1 (v5.5-129cd0d2-v4)
* Fix:          Korrektur Display Brewpage Buttons Next und Prev: aktueller Step wurde im Display nicht aktualisiert
* Fix:          Fehler WebIf Aktoren behoben: das modal window wurde nicht geöffnet (typo)
* Geändert:     Methode setActorsInterval angepasst (call by change)
* Geändert:     WebServer Performance (CORS deaktiviert, Boradcast Intervall reduziert, timeoutfreq reduziert)
* Fix:          Fehler sendCommand für GGM IDS behoben
* Update:       VSCode 1.104
* Update:       pioArduino 1.1.0
* Geändert:     WLAN connection timeout auf 60 Sekunden erhöht
* Geändert:     WLAN Signalstärke für WLAN Scan ConfigPortal auf min 10% RSSI reduziert
* Fix:          Debug Code entfernt (WebServer collectAllHeaders)
* Geändert:     im Nextion Display wird der Sensorstatus auch angezeigt (akt. Temperatur oder off)
* Neu:          Beta: Eigenschaft Sensor aktiv: ein Sensor kann temporär deaktiviert werden. Der Status Sensor aktiv wird nicht gespeichert
* Geändert:     der PID Controller setzt die Ausgangsleistung auf 0%, wenn der Kessel-Sensor deaktiviert wurde
* Fix           Handling Schaltzyklus Kessel korrigiert
* Update:       Update ESP-IDF v5.5.0.250821
* Neu:          Beta: Unterstützung für DC PWM Aktoren (Auswahl PWM analog für DC Motoren an L298/MOSFET wie bspw. Rührwerk oder Pumpen, Auflösung: 8bit)
* Geändert:     PWM umbenannt in PWM digital (einfaches Takten von Relais (on/off))

Version 1.57

* Geändert:     Logging erweitert, ids_error.log (develop only)
* Fix:          Interrupt handling IDS
* Update:       VSCode 1.103
* Fix:          WebIf Korrekturen
* Update:       Arduino V3.3.0 ESP-IDF v5.5.0 (Release 54.03.30-2)
* Fix:          Stack size für Task sendAlarm vergrößert (exception)
* Geändert:     Logging PID und AutoTune mit Logging verbunden
* Update:       InnuAPID Bibliothek 1.8
* Geändert:     Logging Display mit Logging verbunden
* Update:       InnuNextion Bibliothek 0.0.4
* Fix:          Korrektur WebIf Anzeige der aktuellen Temperatur im Modus AutoTune MaischeSud Kessel
* Geändert:     Logging erweitert, flag DEBUG_CPP
* Geändert:     Checkbox Ignoriere SPI Fehler" für PT100x Sensoren unter System eingefügt
* Geändert:     Logging Middleware (curl like) kann nun per Checkbox aktiviert werden (nicht mehr an Logging System gebunden, develop only)
* github:       Firmware Dateien und ZIP Develop Version in den Ordner build/ESP32-IDF5dev verschoben
* Fix:          Protokoll WebUpdate
* Fix:          doppelter Aufruf Konfiguration speichern bei Rezeptimport korrigiert
* Fix:          fehlerhaftes File Objekt für DateiUpload nach RAM Optimierung korrigiert
* Fix:          Log Ausgaben für PT100x Sensoren korrigiert
* Geändert:     Steuersignale an IDS in FreeRTOS Task gewandelt (nonblocking delay)
* Geändert:     handling Steuersignale an IDS angepasst
* Geändert:     sendAlarm an Piezo Buzzer werden über einen FreeRTOS Task gesendet (nonblocking delay)
* Fix:          typo TAG Log Ausgaben
* Geändert:     diverse Korrekturen und Ergänzungen Anleitung
* Entfernt:     Quellcode Bereinigung und Dokumentation
* Geändert:     einheitliche Anzahl von 15 Zeichen für Namen von Kessel, Aktoren und Sensoren. Kessel waren bislang auf 10 beschränkt
* Fix:          ändern der WebIf Sprache löscht die Werte in WebIf. Das Fenster Systemeinstellungen wird bei Änderung Sprache nun autom. geschlossen.
* Rework:       Log Ausgaben Aktoren, Sensoren und Kessel (tabellenform) - develop/debug Version only
* Update:       Arduino V3.3.0 ESP-IDF v5.5.0
* Update:       InnuAPID v1.7
* Rework:       Überarbeitung der Klassen sensors, actors, kettles. RAM handling, reorg gobal vars und static class vars
* Fix:          PID Setpoint wurde auf 0 gesetzt, wenn der Brauprozess pausiert und der Kessel editiert wurde
* Fix:          PID AutoTune Zuweisung Regel korrigiert
* Optimiert:    String handling (references, concats, removed/replaced with chars)
* Fix:          Display Manueller Modus Uhrzeit korrigiert
* Fix:          Controller Deck Button Play in einer 2- der 3-Kessel Umgebung: Step mit Zieltemperatur und Timer wurde sofort gestartet
* Fix:          Controller Deck Button Next in einer 2- der 3-Kessel Umgebung: Step mit Zieltemperatur und Timer wurde sofort gestartet
* Fix:          Anzeigefehler WebIf aktuelle Leistung Kessel behoben
* Fix:          eine SSE Client IP konnte aus der Liste SSE registrierter IP Adressen verloren gehen (verzögerte Anzeige der parameter im WebIf)
* Geändert:     Anleitung erweitert u. korrigiert
* Geändert:     Logging WebUpdate erweitert
* Geändert:     Anzeige WebUpdate zeigt an, ob Release oder Testversion aktiviert ist

* Release:      V 1.56
* Fix:          Anzeige Restzeit im Fermenter Modus korrigiert
* Geändert:     default dutycycle Fermenter 120 Sekunden (ehem. 60s)
* Geändert:     Der Gerätename kann in Sonderbefehlen verwendet werden (Kessel und Aktoren)
* Geändert:     Anleitung: Konfiguration und Einsatz von Kessel
* Fix:          Controller Deck Button Next und Prev Korrektur Sonderbefehle
* Fix:          Wenn der Maischeplan während eines aktiven Maischeprozess geändert wurde, dann wurde die Stepdauer aktueller Step nicht auf Mindestdauer geprüft
* Fix:          Korrektur und Optimierung Funktion SSEStep für die Anzeige aktueller Step Status
* Fix:          Wenn die Konfiguration während eines aktiven Maischeprozess geändert wurde, dann wurde die aktuelle Zieltemperatur immer dem Maischekessel zugewiesen
* Fix:          Fehler Kettle Sud speichern der Einstellungen behoben (typo)
* Fix:          Funktion checkTemp wurde per Loop doppelt aufgerufen werden
* Fix:          Logging System in der Einstellung verbose: Fehler WebServer MiddleWare Logger behoben
* Geändert:     Anleitung Logging: Installation und Konfiguration Microsoft VSCode portable
* Geändert:     Logging für Debug Version für esp32_exception_decoder angepasst (color escape sequences removed)
* Update:       VSCode 1.102
* Fix:          Fehler in EN Sprachdatei für MISC_DASH_LIST behoben
* Fix:          Aktualisierung WebIf für Sud und Hlt nach Änderungen Ticker Intervalle korrigiert
* Geändert:     die Ticker Intervalle PID verändern sich abhängig vom duytcycle dynamisch (Reduzierung der ticks/CPU Last)
* Geändert:     die Ticker Intervalle Maische, Sud und HLT verändern sich abhängig vom Power Status dynamisch (Reduzierung der ticks/CPU Last)
* Geändert:     das Ticker Intervall Aktoren verändert sich dynamisch, abhängig von eingeschalteten Aktoren und deren dutycycle (Reduzierung der ticks/CPU Last)
* Geändert:     die Ticker Callback Funktion für Sensoren wurde optimiert (Reduzierung der ticks/CPU Last)
* Fix:          typo Ticker Intervall HLT
* Geändert:     WebIf Korrektur Einstellungen HLT sampleTime
* Geändert:     debug Ausgaben Aktoren, Sensoren und Kettles angepasst
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
* Update:       Brautomat32 Develop Arduino Framework 3.2.1
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
