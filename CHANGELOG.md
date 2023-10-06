# Changelog

ESP32 Arduino 2.0.14\
VSCode 1.83 Arduino 0.6\
VSCode plugin ESP8266Littlefs based on VSCode plugin ESP8266fs\
InnuAPID AutoTune PID lib based on [Brett Beauregard](https://github.com/br3ttb/Arduino-PID-Library)\
InnuTicker task scheduler lib\
InnuFramework CSS/JS bootstrap 4.6.2\
Server Sent Events (8 SSE channels)

Version 1.29

* Fix:          WebUpdate dev branch
* Fix:          WebUpdate Protokoll
* Fix:          Lösche KBH2 Datei nach Rezeptimport
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
