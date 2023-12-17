# Changelog

ESP8266 Arduino 3.1.2\
VSCode 1.80 Arduino 0.6\
VSCode plugin ESP8266Littlefs based on VSCode plugin ESP8266fs\
InnuAPID AutoTune PID lib based on [Brett Beauregard](https://github.com/br3ttb/Arduino-PID-Library)\
InnuTicker task scheduler lib\
InnuFramework CSS/JS bootstrap 4.6.2\
Server Sent Events (8 SSE channels)

Version 1.24a

* Fix:          Arduino ESP8266 core: No poison after block with current git version (Issue #8952)
* Neu:          SSE auto reconnect onerror
* Neu:          SSE checkAlive für Mobile Browser (nur auf iOS getestet)
* Geändert:     InnuFramework

Version 1.23a

* Geändert:     Manuelles Kochen in den Voreinstellungen auf deaktiviert geändert
* Geändert:     Grafik Chart in den Voreinstellungen auf deaktiviert geändert
* Korrektur:    "Grundkonfiguration ausführen" als Schrittname wurden nicht angezeigt, wenn keine Konfiguration vorhanden ist
* Neu:          Chart ein/ausklappbar (Button collapse) - Grafik wird eingeklappt im Hintergrund aktualisiert
* Geändert:     Anleitung überarbeitet
* Geändert:     InnuFramework

Version 1.23

* Geändert:     Anleitung überarbeitet
* Geändert:     Abschlusstest AutoTune IDS, AutoTune HLT
* Geändert:     Abschlusstest Brauen

Version 1.22e - 1.22j

* Neu:          Maischeplan ein/ausklappbar (Button collapse)
* Neu:          Ändern der Leistung zur Laufzeit in der Aktoren-Tabelle über zwei Buttons (Schritte +/- 10%)
* Neu:          Aktoren PWM Schalter (zum Ausblenden der Buttons Änderung der Leistung in der Tabelle Aktoren)
* Geändert:     Maischeplan SSE optimiert
* Korrektur:    Maischeplan Änderung über SSE (Aktualisierung aller verbundenen Clients)
* Korrektur:    Arduino ESP8266 core: Fix for occasional timeout issues #8944 (net error timeout - WebIf Fehler)
* Geändert:     PID Nachguss Vorgaben angepasst
* Korrektur:    WebIf laden der select box Parameter (empty rsponse)
* Geändert:     Ticker Intervalle IDS und HLT
* Geändert:     Ticker Intervalle PID Berechnung
* Geändert:     Ticker Intervalle und durycylcles Aktoren (PWM)
* Korrektur:    Arduino ESP8266 core: Fix for dangerous relocation: j: cannot encode #8925
* Geändert:     Arduino ESP8266 core: Add support WiFiClientSecure TCP KeepAlive #8940
* Geändert:     Intervalle (SampleTime) können im laufendem Betrieb geändert werden
* Geändert:     Intervalle (SampleTime) Bereich vergrößert 3000 - 7000
* Geändert:     Nachguss PID Temperatur und GPIO Taktung erweitert
* Geändert:     Sensorzuweisung Nachguss
* Korrektur:    PID Debug Ausgaben
* Korrektur:    SetPoint und Target Nachguss
* Geändert:     InnuFramework
* Korrektur:    Anzahl Verbindungen (request) WebIf verringert
* Korrektur:    Verzögerung beim Start SSE mit Firefox behoben
* Neu:          Überprüfung SSE checkAlive für Tablets/Smartphones

Version 1.22d

* Geändert:     PID Algorithmus IDS: Individuell oder IDS
* Geändert:     PID Algorithmus HLT: Individuell oder Nachguss
* Geändert:     PID Algorithmus: Button löschen entfernt
* Geändert:     Datenmenge unr requests PID Manger IDS/HLT minimiert
* Geändert:     Web Interface Reihenfolge
* Korrektur:    Sudname nach Deaktivierung geplanter Braustart nicht korrekt angezeigt

Version 1.22c

* Geändert:     Datentranfer Optimierung (push)
* Geändert:     Flash Speicher Optimierung
* Korrektur:    Arduino ESP8266 core: WiFi Client core fix #8941
* Korrektur:    Start HLT AutoTune
* Geändert:     Web cache control

Version 1.22b

* Korrektur     Fehler beim Einlesen der Konfiguration (Temperaturvorgaben IDS, zugewiesener Sensor)

Version 1.22a

* Korrektur:    Rezeptimport KBH2 Zusätze: falscher Parameter ausgewertet (menge statt erg_menge)
* Korrektur:    Step Aktualisierung wurde u.U. doppelt in einem loop aufgerufen
* Fix:          Fehler beim Laden WebIf bzw. unvollständiges Laden (streamfile header response #8873)
* Fix:          JSON parse Sensoren Daten: unexpected non-whitespace character (array)
* Geändert:     InnuFramework mimeTypes und mimeTables
* Geändert:     Start Server Sent Event optimiert
* Geändert:     Laden vom WebIf beschleunigt
* Geändert:     Der Button Status Server Sent Events führt nur bei disconnect einen reload aus (rot)\
                Wenn SSE verbunden ist, hat der Button außer tooltip keine Funktion (grün)

Version 1.22

* Geändert:     Rezept Import kbh2: Hopfengabe wird zusammengesetzt aus Name, Alpha [%] und Menge [gr]
* Korrektur:    Rezepttyp Erkennung korrigiert (type mismatch, Zahlendreher nach Optimierung).
* Neu:          Rezeptimport KBH2 Hopfengaben und Zutaten um Mengenangaben erweitert
* Neu:          Rezeptimport KBH2 Zubrühen um Mengen- und Temperaturangaben erweitert
* Neu:          Rezeptimport KBH2 Dekoktion um Mengenangaben erweitert
* Neu:          Rezeptimport KBH2 um Zutaten aus den Tabs Maischen und Kochen erweitert
* Neu:          Eigenschaften Temperatur Einmaischen und Abmaischen für Rezeptimport eingefügt
* Neu:          Eigenschaften Temperatur Vorderwürzenhopfung und Whirpoolhopfung für Rezeptimport eingefügt
* Geändert:     Rezept Import BrewFather: Daten (Zeit, Temp) werden vor verarbeiten überprüft
* Korrektur:    Rezept Import BrewFather: Rastennamen und Hopfengaben auf 50 Zeichen begrenzt
* Korrektur:    Rezept Import BrewFather: Berechnung Kochdauer Hopfengabe
* Korrektur:    Rezept Import BrewFather: Rastdauer 0 Minuten, wenn Rezept mit Fließkommazahlen erstellt wurde
* Korrektur:    Start Chart Ticker (Graph Temperaturen) bei Braustart über Timer
* Korrektur:    Bei Braustart über Timer wurden die Buttons zum Editieren nicht ausgeblendet
* Korrektur:    Aktualisieren der Buttons bei Braustart über Timer (Power Button war nicht aktiv grün gesetzt)
* Korrektur:    Speichern der Konfiguration HLT
* Korrektur:    Refresh Maischeplan nach editieren nicht korrekt geladen
* Korrektur:    Import MMuM Filtergröße
* Korrektur:    Import type mismatch JSON as int to var unsigend long
* Korrektur:    Import sehr großer Rezepte
* Korrektur:    Import Filter Speicherverbrauch optimiert
* Neu:          IDS Parameter Temperatur kochen: Temperatur bei der die Würze wallend kocht
* Korrektur:    Parameter Temperatur kochen umbenannt in Übergang zum Kochen
* Korrektur:    Rezept Import kbh2: autonext wurde falsch gesetzt
* ZF:           Alle Importfilter sollten nun komplett sein. Empfehlung: kleinerBrauhelfer2!
* Korrektur:    Rezept Import MMuM: Hopfengaben zum gleichen Zeitpunkt
* Korrektur:    Rezept Import MMuM: Typ Hopfen_VWH_1_Sorte eingefügt
* Neu:          Optionen für den Import: Einmaischen 50°C für 1min mit deaktiviertem autonext, falls nicht vorhanden (oder gefunden)
* Neu:          Optionen für den Import: Abmaischen 78°C für 1min mit deaktiviertem autonext, falls nicht vorhanden (oder gefunden)
* Neu:          Import MaischeMalzundMehr Rezepte: Dekoktion
* Korrektur:    Rezept Import KBH2: Hopfengaben zum gleichen Zeitpunkt
* Korrektur:    Rezept Import KBH2: Vorderwürzenhopfung vor Step Kochen
* Korrektur:    Step Dauer 0 Minuten
* Deaktiviert:  Hinweis (Toasts) neue Version
* Neu:          Import Brewfather Rezepte
* Korrektur:    Import Brewfather: Hopfengabe Zeitpunkt
* Geändert:     Import MaischeMalzundMehr Rezepte: JSON Import Filter eingefügt (Anmerkungen werden nicht mehr eingelesen)
* Geändert:     Import MaischeMalzundMehr Rezepte: Überprüfung auf Maischeform Infusion eingefügt
* Korrektur:    Import MaischeMalzundMehr Rezepte: Import Rezept Name u. Kochdauer
* Neu:          Import MaischeMalzundMehr Rezepte: Import Hopfengaben hinzugefügt

Version 1.21

* Optimiert:    Quellcode überarbeitet
* Neu:          Hinweis (Toasts) neue Version
* Geändert:     Anleitung
* Update:       JQuery 3.7.0

Version 1.20

* Optimiert:    Web Interface Geschwindigkeit  
* Neu           Synchronisierung ESP8266 und Web Browser (SSE)
* Neu           Server Sent Events (SSE) ersetzen Ajax/JQuery requests (http polling)
* Neu           8 SSE Kanäle (channels) stehen zur Verfügung
* Neu           Favicon
* Geändert:     Anleitung
* Korrektur:    Reload nach Firmware Update (Toast)
* Korrektur:    Reload nach SSE connection closed (Toast)

Version 1.19

* Neu:          SSE
* Korrektur:    CSS/JS load files unknown length
* Korrektur:    Konvertierungsfehler Datum Uhrzeit nach epochtime (Berechnung Startzeit Brauen)
* Neu:          Schaltjahr Epochtime
* Korrektur:    Rezept Import

Version 1.18

* Neu:         Zeitsteuerung Brauen eingefügt
* Neu:         DateTimePicker im Menü Sud (Zeitsteuerung)
* Neu:         Manueller Modus im Web Interface eingefügt
* Geändert:    Sichtbarkeit der Dashboard Elemente (Systemeinstellungen - Dashboard)
* Optimiert:   Icons (icomoon free)
* Geändert:    Option Manueller Modus im Dashboard aktiviert
* Korrektur:   Tippfehler
* Optimiert:   Geschwindigkeit Web Interface

Version 1.17

* Update:      SoftSerial 8.0.2 (Kommunikation Nextion Display)
* Optimiert:   Geschwindigkeit Nextion Display
* Korrektur:   Während AutoTune wird die erste Zeile Maischeplan nicht mehr markiert
* Geändert:    Beim Start vom Brautomat wird die GGM IDS auf null Prozenzt Leistung gesetzt
* Geändert:    Erkennen von Min/Max AutoTune
* Geändert:    Überprüfung ob AutoTune Peaks stabil sind
* Optimiert:   Während AutoTune GGM IDS wird die Auflösung Temperstursensor auf 12bit gesetzt (max. Auflösung, 0.0625°C)
* Geändert:    Prüfung auf isConnected der Temperatursensoren entfernt (fehlerhafter Rückgabe bei manchen DS18B20 Sensoren)
* Geändert:    Sensor Fehler Code Auswertung entfernt (-254, -253, -252, -127). Sensorwerte ab -127.0 werden als Sensorfehler behandelt
* Optimiert:   MP3 Dateien komprimiert
* Optimiert:   Reihenfolge web requests optimiert
* Geändert:    AutoTune debug Log komprimiert
* Erweitert:   Dashboard Status (not yet ready)
* Korrektur:   JS Toasts (Typo)
* Korrektur:   WebUpdate Toasty entfernt (alte JS)
* Neu:         Tab Dashboard: Konfiguration der Elemente auf dem Dashboard
* Geändert:    Ansicht Dashboard
* Geändert:    Refresh Dashboard

Version 1.15   maintenance/Framework update

* Optimiert:   Framework Innuticker Display Update read SoftSerial (updateBack)
* Optimiert:   Web Interface Ladevorgang verbessert (toasts lib)
* Optimiert:   TouchDisplay Reaktionszeit beschleunigt
* Geändert:    Framework Aktualisierung der Ticker Objekte (updateBack)
* Ersetzt:     Toast Lib

Version 1.14  maintenance update

* Update:     ESP8266 Arduino 3.1.2
* Update:     VSCode 1.76 Arduino 0.6
* Update:     ArduinoJSON 6.21
* Update:     SoftwareSerial 8.0.1
* Optimiert:  Framework

Version 1.13

* Korrektur:   Fehler beim Speichern Einstelung Toast Nachrichten behoben (typo)
* Korrektur:   Toast Objekte
* Korrektur:   Die Ladezeit für die toast.min.js verbessert (dauert trotzdem noch zu lange)
* Geändert:    Toasts vom Typ Error bleiben stehen, bis sie angeklickt werden
* Geändert:    Abfragen Toasttypen
* Korrektur:   Fehler Toasts und Alarme mp3 Einstellung Nur Fehler

Version 1.12

* Neu:        Name Maischeplan editierbar (Rezeptname)
* Neu:        Info zur Kochdauer und Nachisomerisierungszeit (readonly)
* Korrketur:  Zeitberechnung Hopfengabe Typ Ausschlagen
* Korrektur:  Nachisomerisierung wenn Hopfengabe Typ Ausschlagen vorhanden ist
* Korrektur:  Reihenfolge bei Nachisomerisierung und Ausschlagen korrigiert
* Korrektur:  Zeitpunktberechnung Hopfengabe Typ Kochen (3)
* Korrektur:  Benachrichtigung Firmware Update WebUpdate (Alert)
* Optimiert:  CSS Dateien

Version 1.11 - das kleinerBrauhelfer2 Update

* Neu:        Import aus dem Tab Maischeplan: Einmaischen, Aufheizen, Zubrühen und Dekoktion
* Neu:        Import aus dem Tab Kochen: Vorderwürze, Ausschlagen und Hopfengabe Kochbeginn, Kochen und Kochende
* Neu:        Kochdauer und Nachisomerisierungszeit werden aus kbh2 verwendet
* Neu:        der Sudname aus kbh2 wird als Rezeptname im Brautomat verwendet
* Angepasst:  Maximale Anzahl Einzelschritte im Maischeplan auf 20 erhöht (Dekoktion)
* Angepasst:  Maischeschritt Einmaischen, Zubrühen und Dekoktion werden mit deaktiviertem autonext importiert
* Angepasst:  Maischschritt Aufheizen über 76°C wird mit deaktiviertem autonext importiert (Abmaischen)
* Angepasst:  Vorderwürzenhopfung wird mit 0min Dauer und 0°C importiert
* Angepasst:  ist keine Hopfengabe vom Typ Kochbeginn enthalten, wird vor der ersten Hopfengabe Kochen ein Kochenschritt eingefügt
* Angepasst:  die Dauer errechnet sich in dem Fall aus Kochdauer abzüglich der Summe der Hopfengaben
* Angepasst:  eine Hopfengabe Ausschlagen mird mit positiver Dauer und 80°C importiert
* Angepasst:  die Dauer entspricht beim Ausschlagen der Nachisomerisierungszeit
* Geändert:   Der Rezeptimport aus dem kleinenBrauhelfer2 benötigt Version 2.5 oder neuer

Vielen Dank an bourgeoislab für die Unterstützung ;-)

Version 1.1 (rel)

* Update:     bootstrap minified CSS (purged)
* Optimiert:  Ladegeschwindigkeit verbessert
* Update:     Arduino für VSCode 0.5.0
* Update:     VSCode 1.75
* Update:     Bibliothek PCF8574 0.3.8
* Korrektur:  Anzeige Toast zeitgleich auf unterschiedlichen Geräten. Auf iOS weiterhin nur ein workaround möglich
* Geändert:   wenn der Maischeprozess gestartet ist, muss der Maischeprozess pausiert werden, um den Maischeplan editieren zu können
* Neu:        die Buttons und Icons zum Editieren werden während des Maischeprozesses ausgeblendet
              auf Smartphones und kleinen Tablets ist die Tabelle Maischeplan durch das Ausblenden vollständig sichtbar
* Neu:        die aktuelle Rast wird im Maischeplan farblich markiert.
* Geändert:   die Buttons Power (grün), Play und Pause (rot) werden im aktiven Zustand mit voller Farbe dargestellt (vorher outline)
* Geändert:   der aktuelle Status Power, Play und Pause wird geräteübergreifend gespeichert
* Korrektur:  Toasts timer handling (Toast wurden nicht zugestellt)
* Neu:        success.mp und warning.mp3 (Benennung beibehalten)
* Neu:        Toasts werden nach 60 Sekunden gelöscht oder durch neuen Toast überschrieben
* Neu:        mp3 Alarme für Systemevents
* Geändert:   Reboot initiert nun automatisch ein page reload
* Update:     ArduinoJSON Bibliothek
* Update:     PCF8574 Bibliothek (GPIO Erweiterung)
* Entfernt:   Debug Ausgaben
* Korrektur:  Log Datei AutoTune
* Geändert:   Datei handling
* Geändert:   Display Dateien HMI
* Geändert:   Anleitung auf gitpages aktualisiert

Version 1.0l

* Korrektur:  logischer Fehler in Abfrage Zieltemperatur 0°C behoben
* Update:     mp3 Audio für iOS

Version 1.0k

* Neu:        MP3 Audio für Toast Nachrichten (info.mp3 und error.mp3)
              die MP3 Dateien können ausgetauscht werden
* Korrektur:  Auswahl Toastnachrichten: Aus, Ein oder nur Fehler
* Korrektur:  Anzeige Toast Nachrichten angepasst: Uhrzeit #lfdNr : Nachricht
* Korrektur:  ESP8266 cores (#8844)

Version 1.0j

* Neu:        Button vorheriger Step. Springt einen Maischeschritt zurück.
              Wenn Pause aktiviert ist, wird der Rast-Timer der aktuellen Rast zurückgesetzt.
* Korrektur:  Bibliothek ESPSoftSerial aktualisiert (github #267)
* Geändert:   Anleitung auf gitpages aktualisiert

Version 1.0i

* Update:     ESP8266 cores aktualisiert
* Update:     Arduino for Visual Code 0.4.13
* Korrektur:  Ticker Bibliothek
* Korrektur:  Name im AP Modus Brautomat
* Korrektur:  Im Modus Kochen wurde ein logischer Fehler in der Auswertung autonext behoben
* Neu:        Zubrühen

Version 1.0h

* Korrektur:  Speicherzuteilung Rezept nicht ausreichend für 15 Maischeschritte. Neue Größe Rezpet JSON 2048
* Korrektur:  Fehler in autonext behoben, wenn setpoint vom nachfolgenden Maischeschritt unter Ist-Temperatur liegt
* Neu:        Wenn die Zieltemperatur auf 0°C gesetzt wird und autonext aktiv, wird der Step ohne Temperaturprüfung gestartet
* Korrektur:  Typo: Änderung am Objekt IDS während des Brauens ändert die Leistung Objekt HLT.
* Korrektur:  Temperatur delta zum Ziel sowohl über als auch unter setpoint (fabs)
* Korrektur:  HLT Standardregel INDIVIDUAL_PID

Version 1.0g

* Geändert:   Parameter AutoTune Intervall umbenanntn in PID Intervall (IDS und Nachguss) [2sek bis 5sek]
* Geändert:   Parameter PID Intervall in Tab PID-Manager verschoben
* Geändert:   das PID Intervall (SampleTime) legt die Taktung Auslesen Sensor und Leistung an Indution fest
* Anmerkung:  Reihenfolge: Sensorwert auslesen - PID Berechnung - berechnete Leistung an IDS senden
* Anmerkung:  ein sehr kleines Intervall (alle 2sek) führt zu sehr vielen Berechnungen wordurch der Brautomat träger reagiert.
* Anmerkung:  kleinere Intervalle (2sek) kann bei kleinen Maischevolumen (10-15l) vorteilhaft sein
* Korrektur:  Fehler HLT PID Anzeige behoben
* Korrektur:  HLT AutoTune Zieltemperatur readonly
* Korrektur:  Web Interface Parameterbeschreibungen
* Geändert:   Das Ein- und Ausblenden der Tabellen Nachguss, Sensoren und Aktoren wird nicht mehr automatisch gespeichert
* Geändert:   Das Ändern der Tuning Regel wird nicht mehr automatisch gespeichert
* Neu:        Überprüfung Wertebereich für Eingaben der Paramtertypen Leistung, Temperatur, Anzahl und Zeit eingefügt

Version 1.0f

* Update:     ESP8266 Arduino 3.1.1
* Geändert:   Refresh Sensoren, IDS und HLT auf 2000ms
* Geändert:   AutoTune timeout auf 20min
* Geändert:   Max Leistung als oberes Limit in die PID Berechnung integriert
* Neu:        Eigenschaft Max Leistung HLT eingefügt
* Korrektur:  Fehler HLT PID Berechnung behoben
* Korrektur:  WebUpdate Tools ist Teil von WebUpdate Firmware. Button WebUpdate Tools entfernt

Version 1.0e und früher

* Neu:        Neue Option für Toasts "Info": alle Nachrichten
* Neu:        Neue Option für Toasts "Fehler": nur Nachrichten bei Sensor oder WLAN Fehler
* Update:     ESP8266 core fix #8796 #8797
* Update:     VSCode 1.74.3
* Korrektur:  Umwandlung Sensor Adresse in Hex (SetResolution)
* Neu:        Parameter Maximale Leistung IDS kann nun während des Brauens verändert werden
* Neu:        Parameter Temperatur Kochen IDS kann nun während des Brauens verändert werden
* Neu:        Parameter Leistung Kochen IDS kann nun während des Brauens verändert werden
* Neu:        Toast Nachrichten bei Sensorfehler
* Neu:        Alarm Error bei Sensor Fehler
* Neu:        Alarm Error bei WLAN Fehler
* Korrektur:  Toast Nachrichten konnten nicht deaktiviert werden
* Korrektur:  Auswahl Tuning Regel IDS und Nachguss berechnet keine Werte für P, I, D
* Geändert:   Seitenwechsel Display auf 0x66 angepasst (Vorbereitung Update Bibliothek NextionX2)
* Update:     ESP8266 3.1.0: Fehler in ESPWebServer behoben (Webseite ganz oder teilweise nicht erreichbar)
* Update:     ESP8266 3.1.0: Fehler in ESPSoftSerial behoben (Anbindung Display)
* Update:     ESP8266 Arduino 3.1.0
* Update:     VSCode 1.74.2
* Update:     Nextion HMI Editor 1.65
