# Changelog

ESP32 Arduino 3.3.7 ESP-IDF v5.5.2\
VSCode 1.109 pioarduino IDE 1.1.5\
InnuAPID AutoTune PID lib 1.10.18\
InnuTask lib 0.10.16\
InnuNextion Display lib 0.9\
InnuLog Debug lib serial monitor\
InnuFramework CSS/JS bootstrap 5.3.8

## Änderungen

* Breaking:     Finale Anpassung für WebUpdates von Version 1.59 oder älter
                die Konfigurationsdatei config.txt wird kopiert nach config.old.txt
                die PID Parameter werden zurückgesetzt (0.0). AutoTune muss durchgeführt werden.

Version 1.60.29 final RC

* Geändert:     PID-Rechenkern vereinheitlicht: `KL/KR -> KP/KI/KD` wird nun gemeinsam von AutoTune und `/setKettlePID` genutzt
* Neu:          WebIf `calcPID` für Maische, HLT und Sud (Recalc aus `KL/KR` inkl. `sa/psa/newo`)
* Geändert:     `reqKettlePID` / `setKettlePID` konsistent erweitert (vollständige PID-Parameter + Recalc-Flags)
* Korrektur:    Kleine PID-Fixes: Reset setzt `L` korrekt zurück; SUD-Label/Tooltip `KL/KR` korrigiert
* Korrektur:    0-Minuten Kochsteps mit autonext starten im Kochkontext zuverlässig (TempGate Fast-Path inkl. NEXT_STEP-Pfad)
* Korrektur:    Gate-Hänger bei deaktiviertem/ungültigem Step-Kessel behoben: Wechsel auf WAIT_USER mit Alarm/Toast statt stilles Warten in WAIT_TEMP
* Korrektur:    PLAY in WAIT_USER bei temp=0/duration=0/autonext=false schaltet nun immer direkt zum nächsten Step (kein WAIT_USER-Loop bei Actor/User-Gate-Steps)
* Korrektur:    Profil Sonderbefehle melden bei flaschen oder fehlendem Profil korrekt Fehler statt still weiterzulaufen
* Korrektur:    Actor-Steps mit Fehler (bspw. falscher Aktorname) wechseln auf den Status WAIT_USER statt still weiterzulaufen
* Korrektur:    Rezept-Import und API begrenzen Temperatur und Dauer auf gültige Bereiche (kein Negativ-/Overflow-Pfad mehr in Step-Timern)
* Korrektur:    Fermenter-Start mit 0-min Dauer ohne gültigen Actor wechselt auf WAIT_USER mit Warnung statt still auf MASH_IDLE zu wechseln
* Optimiert:    Mash-Event-Queue-Drops geben zusätzlich eine gedrosselte Toast-Warnung aus (bessere Sichtbarkeit bei Überlast)
* Korrektur:    Brewfather-Import stabilisiert: Hopfenverarbeitung in gegen Array-Out-of-Bounds und Off-by-one abgesichert
* Korrektur:    SSE-Versand gegen OOM-Abort gehärtet: Backpressure erweitert sowie konservative Heap-/Queue-Gates
* Korrektur:    Der Rezeptimport ist nur im echten Idle Status erlaubt und wird bei aktivem Brauvorgang mit Fehler/Toast abgewiesen
* Korrektur:    Rezeptimport (Brewfather + Upload) ist nur im Idle-Status erlaubt und wird bei aktivem Brauvorgang konsistent mit Error-Toast abgewiesen
* Korrektur:    Rezept-Operationen werden bei aktivem Brauvorgang blockiert
* Korrektur:    Tasks werden bei Importpfaden (Brewfather/Upload) temporär gestoppt und danach sauber neu gestartet

Version 1.60.28 final RC

* Korrektur:    Sensorzugriffe zwischen Tasks, Web und Kalibrierung wurden über Mutex/Snapshots abgesichert (stabilere Parallelzugriffe)
* Geändert:     SSE-, Web- und Display-Ausgaben lesen Sensor-/Kesselwerte über Snapshot-Helper statt über direkte Feldzugriffe
* Geändert:     Kesselwerte (`Input`, `Setpoint`, `Output`) wurden auf atomare Cross-Core-Snapshots (Seqlock) umgestellt
* Korrektur:    Mehrere Grenzprüfungen im Maische-/Fermenter-Ablauf korrigiert (`>= maxActMashSteps`, invalid ID Checks)
* Optimiert:    Mash-Event-Queue entlastet (TEMP_TICK-Coalescing) und STOP-Events priorisiert, um Verzögerungen bei Last zu vermeiden
* Korrektur:    Task-Benachrichtigungen für ISR- und Task-Kontext vereinheitlicht (`FromISR`-sicher für Sensor/Actor/Display/CFG/Chart/Sys/Kettle)
* Optimiert:    AutoNext-Schrittlogik auf iterative Verarbeitung umgestellt (kein rekursiver Ablauf, geringeres Stack-Risiko)
* Korrektur:    Kettle-User-Events behandeln volle Queue robuster; `OFF`-Events haben Fallback für sichere Abschaltung
* Korrektur:    Display zeigt bei kurzzeitig ungültigen/fehlenden Sensorwerten den letzten gültigen Temperaturwert statt leerer Anzeige
* Optimiert:    Task-Diagnose erweitert (`Stack-Watermark`, Status, Core, Priorität, optional CPU-Anteil) für präzisere Laufzeitanalyse
* Geändert:     `DisplayTask` bleibt fest auf Core 1 mit Priorität 5, um Anzeige-Artefakte unter WiFi/AsyncTCP-Last zu vermeiden
* Optimiert:    `KettleTask`-Priorität auf 6 erhöht, damit Kessel-/Regelpfade unter Last schneller bedient werden
* Korrektur:    Wiederaufnahme nach Reset/Powerloss führt die Restzeit korrekt fort statt den Step-Timer auf volle Dauer zurückzusetzen
* Korrektur:    Bei Unterbrechungen länger als die Restzeit wird die Restzeit auf `0` gesetzt (kein sichtbarer Timer-Neustart)
* Optimiert:    Persistenz der Restzeit im laufenden Prozess robuster gemacht (aktuelle Laufzeit als Quelle, konsistente Grenzwerte)
* Korrektur:    Periodisches Speichern bleibt auch bei Actor-/Sofort-Schritten aktiv, damit der Resume-Zustand stabil bleibt
* Geändert:     Alarm-Auslösung schützt gegen inaktive Alarm-Task/Queue und vermeidet wirkungslose Trigger
* Optimiert:    Webhook-Worker wird direkt beim Task-Start initialisiert und reagiert dadurch konsistenter nach Systemstart
* Korrektur:    Nach Reset/Reboot wird im HMI der korrekt wiederhergestellte Stepname angezeigt statt dauerhaft der Name des ersten Steps
* Geändert:     Das automatische Ein-/Ausklappen des Maischeplans ist nur aktiv, wenn das Dashboard sichtbar ist
* Geändert:     Aufteilung der Tasks auf die CPU Kerne und deren Prioritäten angepasst
* Geändert:     der Status Brautomat wird nun alle 30s im Flash/NVS gespeichert (vorher 10s)
* Korrektur:    im Fermentermodus wird changeCFGDelayTicks nun mit der korrekten Vorgabe initialisiert (15min)
* Korrektur:    Fermenter Resume hat falschen Modus gesetzt (MODE_MASH statt MODE_FERM)
* Korrektur:    Überprüfung DS18B20 conversion completed wurde aktiviert (zu Debugzwecken deaktiviert)
* Korrektur:    MODE_MANUAL beendet doPID() check state nicht und ruft handleKettle doppelt auf
* Korrektur:    taskMashHandle und kettelUserTaskHandle korrekt gesetzt und initialisiert
* Korrektur:    mashStartTimer mindestdauer für Step wurde gesetzt, aber im Ablauf vorzeitig verlassen (toter Code)
* Korrektur:    im Fermenter Modus konnte eine Sensorabfrage eine out of bound exception produzieren
* Korrektur:    Boil-Latch darf nicht über Sud-Grenzen hinweg erhalten bleiben. Wird bei START/STOP zurückgesetzt

Version 1.60.27 RC4

* Korrektur:    Fehler im FSM in der Funktion mashCheckTempGate beim handling von Sonderbefehlen behoben
* Korrektur:    WLAN reload brautomat.local nach initialem Setup auf 10s erhöht.

Version 1.60.26 RC4

* Update:       Arduino 3.3.7 ESP-IDF 5.5.260206
* removed:      die Timer Funktion (zeitgesteuererter Braustart) wurde temporär komplett entfernt. Die Funktion wird im Release 1.60 nicht enthalten sein
* Optimiert:    heap und stack size/watermarks im Lastfall ermittelt (AsyncTCP, FreeRTOS Tasks, BrewFather Rezeptliste)
* Korrektur:    Speicher Fragmentierung nach Boot durch zwei große String arrays behoben
* Korrektur:    CFGTask periodischer Aufruf writeflash konnte auch im idle Modus aufgerufen werden
* Optimiert:    Anzeige nächster Step Maischeplan im Dashboard um Temperatur und Dauer erweitert
* Optimiert:    Der Button GET Brewfather Daten wird nur auf dem Tab BrewFather API angezeigt. Auf allen anderen Tabs ist der Button nicht mehr sichtbar

Version 1.60.25 RC4

* Korrektur:    Korrektur löschen letzter Sensor/Aktor. Im Web Interface wurden die letzten Elemente bis zum nächsten Reload weiterhin angezeigt
* Korrektur:    Korrketur Anzeige Web Interface erster Aktor
* Korrektur:    Speichern von Profilen: PID Parameter (type mismatch)
* Korrektur:    Speichern von Profilen: das Update Intervall wurde nicht korrekt neu berechnet
* Korrektur:    Speichern und Wechseln von Profilen: der Name vom aktiven Profil wurde nicht korrekt angezeigt

Version 1.60.24 RC4

* Korrektur:    interleaving Problem im Modul Logging behoben (atomic)

Version 1.60.23 RC4

* Korrektur:    Fix Exception BrewFather receipe und batche list TLS (OOM)
* Korrektur:    Funktion replyJSONdoc Überprüfung JSON erweitert
* Korrektur:    JS BrewFather Rezeptliste wird beim Schließen Modal Sud gelöscht. Die Auswahl BrewFather wird auf deaktiviert zurückgesetzt

Version 1.60.22 RC4

* Korrektur:    Fehler Chart Target -1 behoben

Version 1.60.21 RC3

* Revert:       Arduino 3.3.6 to 3.3.5: heap memory error verursacht WiFi Abbruch und exceptions

Version 1.60.20 RC3

* Update:       Arduino 3.3.6 ESP-IDF v5.5.2
* Update:       ESPTool 4.11.0
* Korrektur:    MAX31865/PT100(x) transiente Faults werden bei plausiblem Messwert (Δ ≤ 0,7 °C) weiterverwendet
* Korrektur:    MAX31865/PT100(x) Burst-Faults führen nicht mehr sofort zu permanent ERR, sondern zeitbasiert Streak-Reset + erhöhte Hard-Schwelle
* Korrektur:    bei Reboot wurde ohne aktiven Brauvorgang ein Chart Dot (Zeitstempel) erstellt
* Korrektur:    nach der Konfiguration WLAN wurde nicht korrekt auf brautomat.local weitergeleitet
* Bereinigung:  code cleanup Teil 3

Version 1.60.19 RC3

* Korrektur:    Anzeigefehler Zieltemperatur im Display nach Next/Prev Step über Controller Deck behoben

Version 1.60.18 RC3

* Korrektur:    Es war möglich, dass AutoTune doppelt gestartet wurde (AutoTune hing in einer Endlosschleife)
* Korrektur:    die Chart wird bei AutoTune nun auch befüllt

Version 1.60.17 RC3

* Korrektur:    Berechnung der Rastzeit nach Beenden einer Pause im Maischeprozess korrigiert
* Korrektur:    Fehler Abbruch Autotune über Power Button behoben
* Korrektur:    es war möglich, dass die Mash-Queue mit Temp_Ticks geflutet wurde

Version 1.60.16 RC2

* Korrektur:    AutoTune Messreihe L wird erkannt, wenn am Sensor eine stabile positive Steigung über ein Fenster sichtbar ist
* Geändert:     Ki Term passend zur neuen Messreihe L leicht reduziert

Version 1.60.15 RC2

* Korrektur:    AutoTune Induktion IDS: die Messreihe L startet nun exakt mit dem ersten burst command
* Geändert:     idsTxTask (RMT) auf Core 1 mit Prio 4
* Geändert:     AutoTune log Ausgaben angepasst (/autotune_log.txt)

Version 1.60.14 RC2

* Korrektur:    Nextion Display manueller Modus Fix Teil 1 (sync mit Web If folgt zeitnah)
* Korrektur:    WLAN disconnect entfernt
* Bereinigung:  code cleanup Teil 2

Version 1.60.13 RC2

* Korrektur:    WLAN connection timeout vergrößert (Mesh und DHCP)
* Korrektur:    WLAN AP-Mode timeout implementiert. Nach 3 Minuten wird der Brautmat neu gestartet
* Korrektur:    WLAN Stabilität optimiert
* Geändert:     idsTxTask (RMT) auf Core 1 mit Prio 2
* Bereinigung:  code cleanup Teil 1

Version 1.60.12 RC1

* Korrektur:    AutoTune hat für sampleTime und powerSampleTime zu konservative Werte ermittelt
* Korrektur:    Anpassung der Messpunkte für sampleTime und powerSampletime abhängig vom Kesseltyp (IDS, Relais, webhook)
* Korrektur:    engere Grenzen für sampleTime und PowerSampletime (clamp)
* Korrektur:    AutoTune Induktion IDS: die Messreihe L startet nun exakt mit dem ersten burst command

Version 1.60.11 RC1

* Korrektur:    Status Power und Play Button nach dem letzten Step im Masiche/Fermenterplan korrigiert

Version 1.60.10 RC1

* Korrektur:    wenn der Brauvorgang beendet wurde, wurde der Eeprom Braustatus korrekt gelöscht, aber Step 0 hinterlegt
* Korrektur:    Maischesteps mit 0°C und einer Dauer über 0min wurden nicht ausgeführt (bspw. Nachisomerisierung)
* Korrektur:    Lüfternachlauf/Relais off für IDS korrigiert
* Korrektur:    AutoTune hat zu konservative Thresout Leistung berechnet (Leistung ab Übergang Kochen)
* Korrektur:    wurde der Brauvorgang pausiert, um die PID Einstellungen anzupassen, wurde der PID Controller nicht korrekt neu gestartet
* Korrektur:    Kessel Sud und Kessel HLT konnten bei Braustart eingeschaltet werden, wenn ein setpoint konfiguriert war
* Korrektur:    im Maischeplan kann nun autonext direkt editiert werden
* Korrektur:    im Maischeplan kann nun wieder mit Tab durch die Tabellentzellen gesprungen werden
* Korrektur:    wurde eine Pause während des Brauens beendet, wurde der Maischeplan nicht automatisch wieder eingeklappt
* Geändert:     DisplayTask auf Core 1 mit Prio 3
* Geändert:     ChartTask auf Core 0 mit Prio 2
* Geändert:     CFGTask auf Core 1 mit Prio 2

Version 1.60.9

* Neu:          mit dem Sonderbefehl IDSTHRESOUT bzw. MAISCHETHRESOUT kann die noPIDBoil Leistung im Maischeplan eingestellt werden
* Korrektur:    Sensoren EMA Filter und MAX31865 glitches Filter

Version 1.60.8

* Korrektur:    Anzeigefehler Web If und Display bei einer Stepdauer über 72 Minuten behoben
* Korrektur:    Click event für Kessel HLT und Sud wurden manchmal nicht korrekt ausgeführt
* Korrektur:    die Click Fläche für Kessel HLT und Sud wurde auf die Zelle (td) vergrößert, statt wie bislang nur auf das Power Icon
* Korrektur:    ds Power Icon Sud und HLT hat im Zustand OFF die Farbe primary und im Zustand ON die Farbe success (konsistent mit allen anderen Buttons)
* Neu:          Mit einem Ausrufezeichen als letztes Zeichen im Stepnamen kann ein Quittieren von Toast Nachrichten erzwungen werden (Kochen Hopfen Hall.Perle!)
* Geändert:     Wenn das Logging System auf VERBOSE gesetzt wird, werden in der Browser Konsole apiGET und apiPOST debug Ausgaben protokolliert (nur develop)
* Korrektur:    sendAlarm ON/OFF für Kessel HLT und Sud bei Power Click wurde nicht ausgeführt
* Entfernt:     veraltetes Flag "Ignoriere SPI Fehler für PT100x Sensoren" gelöscht
* Geändert:     bei einem Fehler SPI MAX31865 (PT100x Sensor err) wird zusätzlich zum clear ein soft recover durchgeführt
* Korrektur:    der Kesselname wurde durch das Sprachfile überschrieben (mismatch)

Version 1.60.7

* Korrektur:    doppelter Aufruf AutoTune Start entfernt
* Korrektur:    Web Interface Anzeige noiseband und Tooltipp korrigiert
* Korrektur:    Kochen mit Hopfengabe 0 Minuten Dauer wurde nicht korrekt durchgeführt

Version 1.60.6

* Korrektur:    PID Relais/SSR Fehlerkorrektur powerSampleTime
* Korrektur:    Auswahl Webhook Power typo
* Korrektur:    2-Punkte Kalibrierung Sensoren
* Entfernt:     doppeltes Eingabefeld dutyCycle im Web Interface entfernt
* Korrektur:    Web Interface Anzeige Elemente im Fermenter Modus
* Geändert:     Anpassungen InnuAPID für den Kesseltyp webhook (größerer Schaltzyklus)
* Geändert:     webhook timeout auf 2000ms für den Kesseltyp webhook reduziert
* Korrektur:    AutoTune Start Messreihe lambda L für webhook

Version 1.60.4

* Geändert:     das aktive Hardware Profil bei allen Kettels wird im Tab Profile angezeigt
* Korrektur:    typo autotune

Version 1.60.3

* Korrektur:    AutoTune Messwert lambda L (Totzeit)
* Geändert:     Anzahl valider Messwerte lambda R auf 45 erhöht
* Geändert:     Start Messreihe lambda R ab 60 Sekunden
* Geändert:     Mindestlaufzeit Messreihe lambda R erhöht auf 240 Sekunden
* Geändert:     maximale Dauer Messreige lambda R auf 6 Minuten erhöht (failed)
* Geändert:     Konvergenzkriterium angepasst
* Korrektur:    Debuglog Ausgaben

Version 1.60.2 (revert)

* Korrektur:    typo Debug log PID/AutoTune

Version 1.60.1

* Korrektur:    typo Debug log PID/AutoTune
* Geändert:     PIN Interrupt deaktiviert (GGM IDS)
* Geändert:     AutoTune Prozess: lambda R ist erst gültig, wenn ausreichend Temperaturdifferenz vorliegt
* Geändert:     AutoTune Prozess: lambda R ist erst gültig, wenn die Messwerte in einem gültigen Bereich liegen
* Geändert:     AutoTune Prozess: Extremwerte vom Temperatursensor werden entschärft

Version 1.60.0 beta test

* Neu:          Finite State Machine (FSM) - vollständige Konvertierung in unabhängige, non-blocking tasks
* Neu:          Remote Control Transceiver (RMT) - Steuerung der GGM IDS ohne busy wait blocking
* Neu:          InnuAPID 1.10 - lambda PID Controller
* Neu:          Adaptive Kessel-Steuerung

Version 1.59.9

* Update:       Arduino 3.3.5
* Fix:          Eingabeüberprüfung für Dateinamen erweitert (Sonderzeichen div. Sprachen)
* Fix:          WiFi ConfigPortal WIFI_MODE korrigiert. Der AP Mode wurde nicht verlassen
* Fix:          WiFi ConfigPortal minmiales Fallback, falls Dateisystem oder JS/CSS nicht verfügbar
* Neu:          WiFi Setup Brautomat32 Captive Portal
* Entfernt:     WiFiManager 2.0
* Patch         WiFiManager 2.0 ESPAsyncWebserver 3.9
* Update:       ESPAsyncWebServer 3.9.0
* Fix:          GGM IDS Interrupt: minimaler ISR im IRAM. Abschaltbar über PIN_INTERRUPT
* Revert:       GGM IDS Interrupt über ISR + vTask führte zu keiner brauchbaren Lösung (false positive, Betrieb IDS gestört)
* Fix:          InnuNextion Display lib: Artefakte

Version 1.59.7 RC1

* Fix:          Pfadfehler github entfernt (debug tests)
* Fix:          Korrektur WebHandler manuelles Kochen (invalid json)
* Update:       GGM IDS SendCommand: non-blocking senden der Leistungsstufen
* Fix:          Überprüfung Anzahl Zeichen Stepname für Displayanzeige
* Fix:          Task SendAlarm (Tondauer und Länge)
* Fix:          BrewFather WebHandler Batches
* Update:       InnuNextion Display Lib: isPageStable und isDisplayReady bevor neue Daten gesendet werden
* Fix:          InnuNextion Display lib: Fix parsing serial input buttons and change page
* Update:       Display Firmware T035, F035 und K035 (optional)
* Fix:          alle ToolTipps haben "null" angezeigt
* Optimiert:    Taskverteilung cores (AsyncTCP)
* Geändert:     Umstellung von jsonBody auf AsyncJson für alle HTTP_POST request mit json body
* Fix:          eine zu frühe Rückmeldung an das Web Interface (200) konnte vor Übernahme der Einstellungen ein SSE CFGJSON auslösen

Version 1.59.6 RC1

* Fix:          InnuTicker 0.8 BusyGuard (RAII)
* Update:       Arduino 3.3.4
* Fix:          Braustatus im Eeprom speichern konnte überlappend ausgeführt werden. WriteFlash in InnuTicker Objekt migriert (RAII-Schutz)
* Fix:          die Charts von Maische, Sud und HLT waren zeitlich nicht synchron
* Geändert:     wird der Brautomat bei aktivem Brauprozess ausgeschaltet, wird im Temperaturverlauf eine Lücken für die Dauer der Unterbrechung angezeigt
* Fix:          Anzeige Chart Sud und Chart Hlt war nicht möglich
* Fix:          Fehler Backup behoben: der WebServer hat nicht korrekt auf die Anfrage download Backup geantwortet
* Neu:          InnuNextion: shadow table (Reduzierung der Schreibbefehle an das Display um ca. 70%)
* Fix:          wenn kein Masichekessel konfiguriert war, wurden im Display konfigurierte Sud und HLT Kessel nicht angezeigt
* Fix:          Display Anzeige: der Fortschrittsbalken war bei Rastdauer über 60 Minuten nicht korrekt berechnet (Länge roter Balken)
* Fix:          InnuNextion Display Bibliothek: timing für das Auslesen Seitenwechsel korrigiert (+50ms)
* Fix:          Nextion Display: im SSE handler war es möglich, dass nicht aktive Elemente aktualisiert wurden (manuelles Kochen)

Version 1.59.5

* ReWork:       nur vorhandene Sprachdateien werden beim WebUpdate aktualisiert
* Rework:       Sprachdateien werden bei Auswahl aus dem github repository nachgeladen
* Entfernt:     die JS Datei lang.js wurde entfernt
* Neu:          Sprachdateien spanisch, französisch, niederländisch, dänisch, schwedisch, polnisch, tschechisch, spanisch, portugisisch
* Fix:          SSE checkAlive: ESPAsyncWebServer Korrekturen
* Update:       Arduino V3.3.3
* Fix:          Exception behoben (AsyncTCP LoadProhibited-Exception)
* Fix:          NOT FOUND HANDLER: bootstrap.min.css.map
* Fix:          language fallback deutsch (key und file)
* Korrektur:    Aufteilung TickerSYS und writeFlash EEprom Braustatus auf zwei unabhängig Tasks
* Geändert:     sendCommand an GGM IDS von FreeRTOS Task Typ Queue auf Typ Hybrid (Queue + Notify) umgestellt
* Update:       InnuTicker 0.0.7 Reentrancy-Schutz für Ticker Objekte (RAII-Prinzip)
* Korrektur:    WebIf Dashboard (kein reload nach Anpassung mehr erforderlich)
* Korrektur:    typo global var Javascript
* Neu:          InfoToast wenn neues Release auf github verfügbar ist
* Neu:          DateiUpdate Webseite neu gestaltet
* Neu:          ESP32AsyncWebserver ersetzt den ESP Weberver
* Neu:          Dashboard im Modus Brauen
* Fix:          mehrere aufeinanderfolgende Aktor Steps im Maischeplan mit deaktiviertem autonext
* Geändert:     wenn ein Aktor oder ein Kessel nicht vollständig konfiguriert ist, wird das Gerät nicht geschaltet und es erscheint eine Toastnachricht

Version 1.58.4 beta

* Fix:          Fehler taskhandle behoben
* Geändert:     Bei Änderung der Kessel Typ Relais/Fermenter werden die GPIOs auf OFF geschaltet. Der GPIO Zustand HIGH/LOW konnte unbestimmt sein
* Fix:          SSE checkAlive resetTimeOut
* Fix:          CSS Korrektur Button SSE Status
* Fix:          CSS Korrektur für Javascript Funktion replaceClass (hover)
* Fix:          CSS Korrektur für Javascript Funktionen showElements und hideElements
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
