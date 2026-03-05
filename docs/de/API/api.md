# API Brautomat32

Diese beiden Javascript Funktionen erleichtern die Kommunikation mit dem Brautomat32.  
Sie kapseln `fetch()`-Aufrufe, behandeln Fehler, JSON/Text-Erkennung und optionale Benutzerhinweise (Toast/Alarm).

---

## apiGET(url, alarm, toast, log)

* @param {string} url - Endpoint-URL
* @param {boolean} alarm - sendAlarm aktivieren, default false
* @param {boolean} toast - toast nachricht bei fehler, default false
* @param {boolean} log - debug ausgaben auf console im browser, default false
* @returns {Promise\<any\>} - Antwort vom Server (JSON-Objekt oder Text)

**Beispiel:**  

```js
const misc = await apiGET('/reqMisc', false, false, true);
console.log(misc);
```

---

## apiPOST(url, data, alarm, toast, log, postType, responseType)

* @param {string} url - Endpoint-URL
* @param {Object} data - Daten, die gesendet werden (json oder txt)
* @param {boolean} alarm - sendAlarm aktivieren, default false
* @param {boolean} toast - toast nachricht bei fehler, default false
* @param {boolean} log - debug ausgaben auf console im browser, default false
* @param {"json"|"text"|"formdata"} postType - content-type für header, default json
* @param {"json"|"text"} responseType - erwarteter Rückgabewert, default text
* @returns {Promise\<any\>} - Antwort vom Server

**Beispiel:**  

```js
await apiPOST('/setKettle', { temp: 65, pid: true }, true, false, true);
console.log(misc);
```

---

## WebServer Handler Brautomat32

Brautomat HTTP-Endpunkte. Der WebServer nutzt CORS und unterstützt **HTTP GET**, **POST**, **PUT**, und **DELETE** Requests.

---

## Basis-Endpunkte

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/` | GET | Lädt die Startseite |
| `/index`, `/index.htm`, `/index.html` | GET | Alternative Routen für die Startseite |

---

## Sensoren

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/reqSensors?id=${sensorid}` | GET | Gibt eine Liste aller Sensoren zurück |
| `/setSensor?id=${sensorid}` | POST | Fügt einen neuen Sensor hinzu oder ändert einen bestehenden |
| `/delSensor?id=${sensorid}` | POST | Löscht einen Sensor |
| `/reqSearchSensorAdresses?id=${sensorid}` | GET | Durchsucht verfügbare Sensor-Adressen |
| `/senkal` | POST | Führt eine Sensorkalibrierung durch |
| `/setSenErr?id=${sensorid}` | GET | Setzt Sensorfehler-Status (debug) |

| sensorid | Beschreibung |
| ----------- | ---------- |
| -1 | ruft alle Sensoren ab |
| 0 - 2 | Sensor ID |

**Beispiel:**  

```js
const data = await apiGET(`/reqSensors?id=0`);
console.log(data);
```

---

## Aktoren

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/reqActors?id=${actorid}` | GET | Gibt eine Liste aller Aktoren zurück |
| `/setActor?id=${actorid}` | POST | Erstellt oder ändert einen Aktor |
| `/delActor?id=${actorid}` | POST | Löscht einen Aktor |
| `/actorPower?id=${actorid}` | POST | Schaltet die Leistung eines Aktors |
| `/actorPWM?id=${actorid}` | POST | Setzt PWM-Wert eines Aktors |

| actorid | Beschreibung |
| ----------- | ---------- |
| -1 | ruft alle Aktoren ab |
| 0 - 9 | Aktor ID |

**Beispiel:**  

```js
const data = await apiGET(`/reqActors?id=0`);
console.log(data);
```

---

## Kessel (Kettle)

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/reqKettle?id=${kettleid}` | GET | Gibt aktuelle Kesseldaten zurück |
| `/reqKettlePID?id=${kettleid}` | GET | PID-Parameter abfragen (`kl`,`kr`,`kp`,`ki`,`kd`,`sa`,`psa`,`newo`,`tun`,`vol`,`maxo`,...) |
| `/setKettle?id=${kettleid}` | POST | Kesseldaten ändern |
| `/setKettlePID?id=${kettleid}` | POST | PID-Parameter ändern oder aus `kl/kr` neu berechnen (`recalc`, `applyRecommended`) |
| `/handlePower?id=${kettleid}` | POST | Leistung aktivieren/deaktivieren |

| kettleid | Beschreibung |
| ----------- | ---------- |
| 0 | Maische Kessel |
| 1 | Sud Kessel |
| 2 | HLT |
| 3 | Fermenter |

**Beispiel:**  

```js
const data = await apiGET(`/reqKettle?id=0`);
console.log(data);
```

---

## Profile

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/setProfile` | POST | Neues Profil erstellen oder ändern |
| `/changeProfile?id=${kettleid}&pname=${pname}` | POST | Aktives Profil wechseln |
| `/delProfile?pname=${pname}` | POST | Profil löschen |

| kettleid | Beschreibung |
| ----------- | ---------- |
| 0 | Maische Kessel |
| 1 | Sud Kessel |
| 2 | HLT |
| 3 | Fermenter |
| pname | Profilname |

**Beispiel:**  

```js
const data = await apiGET(`/reqKettle?type=0`);
console.log(data);
```

---

## Sud / Rezeptverwaltung

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/setSud` | POST | Bestehenden Sud konfigurieren |
| `/setSudNew` | POST | Neuen Sud anlegen |
| `/setSudRen` | POST | Sud umbenennen |
| `/setSudCopy` | POST | Sud kopieren |
| `/setSudCha` | POST | Sud wechseln |
| `/delSud` | POST | Sud löschen |
| `/reqSud` | GET | Sud-Parameter abrufen |
| `/reqSudname` | GET | Aktuellen Sudnamen abrufen |
| `/reqBrauStart` | GET | Brauvorgang starten |

Hinweis: Änderungen an Rezepten (Import, Wechsel, Umbenennen, Kopieren, Löschen) sind nur im Idle-Zustand möglich.

---

## Misc / Allgemeine Einstellungen

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/reboot` | POST | Neustart des Geräts |
| `/reqMisc` | GET | Allgemeine Systeminformationen |
| `/reqVis` | GET | Visualisierungsdaten abrufen |
| `/setMisc` | POST | Allgemeine Einstellungen ändern |
| `/setMiscLang` | POST | Sprache einstellen |
| `/rezimp` | POST | Rezept importieren |
| `/setMash` | POST | Maischplan setzen |
| `/startHTTPUpdate` | POST | Firmware-Update starten |
| `/setFerm` | POST | Gärparameter setzen |

---

## Steuerung

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/Btn-Power` | GET | Power-Button auslösen |
| `/Btn-Pause` | GET | Pause-Button auslösen |
| `/Btn-Play` | GET | Start-Button auslösen |
| `/Btn-Next-Step` | GET | Nächster Schritt |
| `/Btn-Prev-Step` | GET | Vorheriger Schritt |
| `/Btn-Edit` | POST | Edit-Modus aktivieren |
| `/manpow` | POST | Manuelle Leistung steuern |
| `/eraseFlash` | GET | Flash-Speicher löschen |

---

## Server-Sent Events (SSE)

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/channel` | GET | SSE-Kanal öffnen |
| `/startSSE` | GET | Startet SSE-Verbindung |
| `/checkAliveSSE` | GET | Prüft aktive SSE-Verbindungen |
| `/reloadMashSSE` | GET | Lädt Maischdaten neu |
| `/language` | GET | Sprachdatei abrufen |

---

## Graph / Diagrammdaten

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/getDots` | GET | Diagrammdaten abrufen |
| `/removeDots` | POST | Diagrammdaten löschen |

---

## BrewFather Integration

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/getbf` | GET | Liste verfügbarer BrewFather-Rezepte |
| `/bfRecipe` | POST | Rezeptdetails abrufen |

---

## Backup & Wiederherstellung

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/backup` | POST | System-Backup erstellen |
| `/restore` | POST | Backup wiederherstellen |

---

## Dateiverwaltung (FSBrowser)

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/edit` | GET | Datei-Editor laden |
| `/status` | GET | Systemstatus abrufen |
| `/list` | GET | Dateiliste anzeigen |
| `/edit` | PUT | Neue Datei erstellen |
| `/edit` | DELETE | Datei löschen |
| `/edit` | POST | Datei-Upload |

---

## Statische Inhalte (Cache aktiviert)

| Dateien | Beschreibung |
| ---------- | --------------- |
| `/brautomat.min.css`, `/bootstrap.min.css`, `/bootstrap.min.js`, `/brautomat.min.js`, `/brautomat.ttf` | Web-Assets |
| `/language/deutsch.json`, `/language/english.json`, `/language/norsk.json` | Sprachdateien |
| `/lang.js`, `/favicon.ico` | Systemdateien |
| `/info.mp3`, `/success.mp3`, `/warning.mp3`, `/error.mp3` | Audiodateien für Systemmeldungen |

---
