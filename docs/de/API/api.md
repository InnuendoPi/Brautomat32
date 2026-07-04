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
| `/index`, `/index.html` | GET | Alternative Routen für die Startseite |
| `/dashboard`, `/dashboard/` | GET | Lädt die reduzierte Dashboard-Ansicht als Info-Terminal |

---

## Sensoren

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/reqSensors?id=${sensorid}` | GET | Gibt die Konfiguration eines Sensors oder aller Sensoren zurück |
| `/setSensor` | POST | Fügt einen neuen Sensor hinzu oder ändert einen bestehenden. Erwartet JSON mit `id` und Sensorparametern |
| `/setSensorState` | POST | Aktiviert oder deaktiviert einen Sensor. Erwartet JSON `{ "id": number, "state": boolean }` |
| `/delSensor` | POST | Löscht einen Sensor. Erwartet JSON `{ "id": number }` |
| `/reqSearchSensorAdresses?id=${sensorid}` | GET | Durchsucht verfügbare Sensor-Adressen |
| `/senkal` | POST | Führt eine Sensorkalibrierung durch. Erwartet JSON mit `id` und Kalibrierungswerten |

Parameter `sensorid` für GET-Endpunkte:

| Wert | Beschreibung |
| ----------- | ---------- |
| `-1` | ruft alle Sensoren ab |
| `0` - `2` | Sensor-ID |

Für POST-Endpunkte wird die Sensor-ID im JSON-Body als `id` übertragen. Bei `/setSensor` kann `id=-1` einen neuen Sensor anlegen; bei `/setSensorState`, `/delSensor` und `/senkal` muss `id` eine vorhandene Sensor-ID sein.

**Beispiel:**  

```js
const data = await apiGET(`/reqSensors?id=0`);
console.log(data);

await apiPOST(`/setSensorState`, { id: 0, state: true });
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
| `/handlePower?id=${kettleid}` | POST | Leistung aktivieren/deaktivieren. JSON: `{"setp":78,"state":true}` schaltet ein, `{"setp":0,"state":false}` schaltet aus. Ohne `state` bleibt der Aufruf kompatibel als Toggle. |

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
| `/renameProfile` | POST | Profil umbenennen |
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
| `/reqProcessStatus` | GET | Kompakter Prozessstatus für Dashboard und Import-/Export-Verfügbarkeit |
| `/reqWifiCredentials` | GET | WLAN-Konfiguration abrufen |
| `/reqFirmwareSlot` | GET | Aktiven Firmware-/Update-Slot abrufen |
| `/scanWifi` | GET | WLAN-Netze scannen |
| `/getLanguage` | GET | Aktuell gewählte Sprache abrufen |
| `/setMisc` | POST | Allgemeine Einstellungen ändern |
| `/setWifiCredentials` | POST | WLAN-Konfiguration ändern |
| `/setMiscLang` | POST | Sprache einstellen |
| `/uploadLanguage` | POST | Sprachdatei hochladen |
| `/rezimp` | POST | Rezept importieren |
| `/upload` | POST | Rezeptdatei hochladen |
| `/setMash` | POST | Maischplan setzen |
| `/startHTTPUpdate` | POST | Firmware-Update starten |
| `/setFerm` | POST | Gärparameter setzen |
| `/eraseFlash` | GET | Flash-/Konfigurationsdaten löschen. Service-Funktion mit unmittelbarer Wirkung. |

### `/reqProcessStatus`

`GET /reqProcessStatus` liefert einen kleinen Prozessstatus für UI-Entscheidungen, z. B. ob Brewday Export/Import angeboten werden darf.

Wenn kein aktiver oder persistierter Prozess vorhanden ist:

```json
{
  "state": "idle"
}
```

Bei aktivem oder wiederaufnehmbarem Prozess:

| Feld | Typ | Beschreibung |
| --- | --- | --- |
| `state` | string | `active` oder `idle`. |
| `mode` | string | `mash` oder `fermenter`. |
| `name` | string | Aktueller Sud-/Planname. |
| `step_index` | integer | Aktiver Schrittindex. |
| `step` | string | Name des aktiven Schritts oder leerer String. |
| `remaining_sec` | integer | Restzeit in Sekunden. |
| `pause` | boolean | Prozess ist pausiert. |
| `play` | boolean | Prozess läuft bzw. Startstatus aktiv. |
| `runtime_power` | boolean | Runtime-Power ist aktuell aktiv. |
| `persisted` | boolean | Wiederaufnahmedaten sind gespeichert. |

---

## Telemetry und Brewday Export/Import

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/telemetry` | GET | Schlanker Brautag-Zeitreihen-Snapshot für Grafana, Highcharts oder externe Logger. |
| `/debug` | GET | Breiter Debug-Snapshot mit Runtime-, Controller-, Sensor-, Kessel- und Aktorstatus. Nicht für 30s-Telemetrie-Logging gedacht. |
| `/brewday/export` | GET | Exportiert den kompletten aktuellen Brautag als `brautomat-brewday-v1` JSON-Stream mit Metadaten, Rezept-/Plan-Snapshot, Chartdots und Brewday-Pins. |
| `/brewday/import` | POST | Importiert ein `brautomat-brewday-v1` JSON als Review-Datensatz nach `/brewday_review.json`. Der Import überschreibt keine Konfiguration, keinen aktuellen Plan, keine Chartdots und beeinflusst keinen laufenden Prozess. |
| `/brewday/pins` | GET | Liefert die aktuell serverseitig aufgezeichneten Brewday-Pins aus `/brewday_pins.ndjson` als JSON-Array. Der Endpoint ist read-only und wird vom Dashboard zur Anzeige der Pins zu vorhandenen Chartdots genutzt. |

`/telemetry` ist für regelmäßiges Logging vorgesehen. Für Polling sind ca. 30 s im Maischebetrieb und 60-300 s im Fermenterbetrieb vorgesehen.

### `/telemetry`

`GET /telemetry` liefert genau einen aktuellen Messpunkt für externe Charts oder Logger. Der Endpoint ist read-only und enthält keine Stammdaten, keine Aktorliste, keine Sensorliste und keine Controller-Button-Logik.

| Feld | Typ | Beschreibung |
| --- | --- | --- |
| `t` | integer | Unix-Zeit des Geräts in Sekunden. |
| `mode` | string | Aktueller Modus, z. B. `idle`, `mash`, `fermenter`, `manual`, `autotune`. |
| `step` | integer | Aktiver Schrittindex, 0-basiert. `-1`, wenn kein gültiger Schritt aktiv ist. |
| `stepName` | string | Name des aktiven Plan-Schritts oder leerer String. |
| `m` | number | Maische-Isttemperatur. |
| `mt` | number | Maische-Solltemperatur. |
| `mp` | integer | Maische-Leistung in Prozent. |
| `s` | number | Sud-Isttemperatur. |
| `st` | number | Sud-Solltemperatur. |
| `sp` | integer | Sud-Leistung in Prozent. |
| `h` | number | Nachguss-Isttemperatur. |
| `ht` | number | Nachguss-Solltemperatur. |
| `hp` | integer | Nachguss-Leistung in Prozent. |
| `f` | number | Fermenter-Isttemperatur. |
| `ft` | number | Fermenter-Solltemperatur. |

Beispiel:

```json
{
  "t": 1782810363,
  "mode": "mash",
  "step": 2,
  "stepName": "Einmaischen 50°C",
  "m": 28.6875,
  "mt": 50,
  "mp": 100,
  "s": 28.6875,
  "st": 0,
  "sp": 0,
  "h": 28.89025,
  "ht": 0,
  "hp": 0,
  "f": 28.6875,
  "ft": 0
}
```

### `/debug`

`GET /debug` liefert einen breiten aktuellen Gerätezustand für Debugging oder externe Bedienoberflächen. Dieser Endpoint ist read-only, aber nicht als kompakter 30s-Telemetrie-Log gedacht.

Zeitfelder:

| Feld | Typ | Beschreibung |
| --- | --- | --- |
| `timestamp` | integer | Unix-Zeit des Geräts in Sekunden. |
| `uptimeMs` | integer | Laufzeit seit Boot in Millisekunden. |

Top-Level-Felder:

| Feld | Typ | Beschreibung |
| --- | --- | --- |
| `schema` | integer | Schema-Version, aktuell `1`. |
| `firmware` | string | Firmware-Name und Version. |
| `mode` | string | Aktueller Modus, z. B. `idle`, `mash`, `fermenter`, `manual`, `autotune`. |
| `process` | object | Prozesszustand und erlaubte Bedienaktionen. |
| `step` | object | Aktiver Plan-Schritt. Fehlt, wenn kein gültiger Schritt aktiv ist. |
| `kettles` | array | Status der konfigurierten Kessel. |
| `sensors` | array | Status der Temperatursensoren. |
| `actors` | array | Status der Aktoren. |

`process`:

| Feld | Typ | Beschreibung |
| --- | --- | --- |
| `power` | boolean | Prozess-Power aktiv. |
| `play` | boolean | Prozess läuft bzw. Startstatus aktiv. |
| `pause` | boolean | Prozess ist pausiert. |
| `mashState` | integer | Interner Maische-FSM-Zustand. |
| `fermState` | integer | Interner Fermenter-FSM-Zustand. |
| `fermHeatState` | integer | Interner Heiz-/Kühlzustand des Fermenters. |
| `activeStep` | integer | Aktiver Schrittindex, 0-basiert. |
| `stepCount` | integer | Anzahl geladener Schritte. |
| `timerRunning` | boolean | Step-Timer läuft. |
| `remainingSec` | integer | Restzeit des aktiven Timers in Sekunden. |
| `waitUserReason` | string | Grund für Benutzerfreigabe, sonst `none`. |
| `holdReason` | string | Haltegrund der Runtime, sonst `none`. |
| `canPower`, `canPlay`, `canPause`, `canNext`, `canPrev` | boolean | Aktuell erlaubte Controller-Aktionen. |

`step`:

| Feld | Typ | Beschreibung |
| --- | --- | --- |
| `index` | integer | Schrittindex, 0-basiert. |
| `name` | string | Schrittname aus Maische- oder Fermenterplan. |
| `temp` | number | Zieltemperatur bzw. Starttemperatur. |
| `duration` | integer | Dauer in Minuten. |
| `kettle` | integer | Zugeordneter Kessel. |
| `autonext` | boolean | Automatischer Übergang zum nächsten Schritt. |

`kettles[]`:

| Feld | Typ | Beschreibung |
| --- | --- | --- |
| `id` | integer | Kessel-ID. |
| `name` | string | Anzeigename. |
| `enabled` | integer | Konfigurierter Kesselmodus. |
| `state` | boolean | Schaltzustand. |
| `isOn` | boolean | Ausgang/Regler aktiv. |
| `sensorId` | integer | Zugeordneter Sensor. |
| `temp` | number | Aktuelle Isttemperatur. |
| `target` | number | Aktueller Sollwert. |
| `output` | number | PID-/Reglerausgabe. |
| `power` | integer | Effektive Leistung in Prozent. |

`sensors[]`:

| Feld | Typ | Beschreibung |
| --- | --- | --- |
| `id` | integer | Sensor-ID. |
| `name` | string | Anzeigename des Sensors. |
| `ok` | boolean | `true`, wenn Snapshot lesbar ist, Sensor aktiv ist und `err == 0`. |
| `state` | boolean | Sensorstatus der Firmware. |
| `err` | integer | Sensorfehlercode, `0` bedeutet kein Fehler. |
| `value` | number | Aktueller Messwert in °C. Bei ungültigem Snapshot `0.0`. |

`actors[]`:

| Feld | Typ | Beschreibung |
| --- | --- | --- |
| `id` | integer | Aktor-ID. |
| `name` | string | Anzeigename des Aktors. |
| `pin` | string | Konfigurierter Pin, z. B. `D0`. |
| `state` | boolean | Logischer Ein-/Aus-Zustand des Aktors. |
| `signalState` | boolean | Tatsächlicher Signalausgangszustand. |
| `power` | integer | Aktuelle Aktorleistung in Prozent. |
| `pwm` | integer | Konfigurierter PWM-Wert in Prozent. |

Beispiel:

```json
{
  "schema": 1,
  "timestamp": 1782810363,
  "uptimeMs": 1503143,
  "firmware": "Brautomat32 V 1.65.0 Develop",
  "mode": "mash",
  "process": {
    "power": true,
    "play": false,
    "pause": false,
    "mashState": 1,
    "fermState": 0,
    "fermHeatState": 0,
    "activeStep": 2,
    "stepCount": 18,
    "timerRunning": false,
    "remainingSec": 0,
    "waitUserReason": "none",
    "holdReason": "none",
    "canPower": true,
    "canPlay": true,
    "canPause": true,
    "canNext": true,
    "canPrev": true
  },
  "step": {
    "index": 2,
    "name": "Einmaischen 50°C",
    "temp": 50,
    "duration": 1,
    "kettle": 0,
    "autonext": false
  },
  "kettles": [
    {
      "id": 0,
      "name": "Maische",
      "enabled": 2,
      "state": false,
      "isOn": true,
      "sensorId": 0,
      "temp": 28.6875,
      "target": 50,
      "output": 100,
      "power": 100
    },
    {
      "id": 1,
      "name": "SudIDS5",
      "enabled": 1,
      "state": false,
      "isOn": false,
      "sensorId": 2,
      "temp": 28.6875,
      "target": 0,
      "output": 0,
      "power": 0
    },
    {
      "id": 2,
      "name": "Nachguss",
      "enabled": 3,
      "state": false,
      "isOn": false,
      "sensorId": 1,
      "temp": 28.89025,
      "target": 0,
      "output": 0,
      "power": 0
    },
    {
      "id": 3,
      "name": "Fermenter",
      "enabled": 4,
      "state": false,
      "isOn": false,
      "sensorId": 0,
      "temp": 28.6875,
      "target": 0,
      "output": 0,
      "power": 0
    }
  ],
  "sensors": [
    {
      "id": 0,
      "name": "senMaische",
      "ok": true,
      "state": true,
      "err": 0,
      "value": 28.6875
    },
    {
      "id": 1,
      "name": "senNachguss",
      "ok": true,
      "state": true,
      "err": 0,
      "value": 28.89025
    },
    {
      "id": 2,
      "name": "senSud",
      "ok": true,
      "state": true,
      "err": 0,
      "value": 28.6875
    }
  ],
  "actors": [
    {
      "id": 0,
      "name": "Ruehrwerk",
      "pin": "D0",
      "state": true,
      "signalState": true,
      "power": 100,
      "pwm": 100
    },
    {
      "id": 1,
      "name": "Pumpe",
      "pin": "D11",
      "state": false,
      "signalState": false,
      "power": 0,
      "pwm": 70
    }
  ]
}
```

Das Brewday-Exportformat enthält:

```json
{
  "format": "brautomat-brewday-v1",
  "schema": 1,
  "exportedAt": 1760000000,
  "firmware": "1.60.0",
  "mode": "mash",
  "recipe": {},
  "names": {},
  "plan": {},
  "chartdots": [],
  "pins": []
}
```

Die Pins werden serverseitig während des normalen Chart-Schreibens aus dem laufenden Maische- oder Fermenterplan aufgezeichnet. Ein Chart-Reset über `/removeDots` löscht auch die zugehörigen Brewday-Pins.

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

---

## Server-Sent Events (SSE)

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/channel` | GET | SSE-Kanal öffnen |
| `/startSSE` | GET | Startet SSE-Verbindung |
| `/checkAliveSSE` | GET | Prüft aktive SSE-Verbindungen |
| `/reloadMashSSE` | GET | Lädt Maischdaten neu |

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
| `/bfbatche` | POST | Legacy-/Frontend-Kompatibilität für Rezeptdetails im Batch-Kontext |

---

## Backup & Wiederherstellung

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/backup` | POST | System-Backup erstellen |
| `/restore` | POST | Backup wiederherstellen |
| `/config.txt` | GET | Aktuelle Text-Konfiguration herunterladen |
| `/download?file=...` | GET | Beliebige Datei aus dem LittleFS herunterladen |
| `/update` | GET | WebUpdate-Seite laden |
| `/update` | POST | Firmware-/Datei-Upload über WebUpdate ausführen |

---

## Dateisystem / Service

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/status` | GET | Systemstatus abrufen |
| `/list` | GET | Dateiliste anzeigen |
| `/edit`, `/edit.htm`, `/edit.html` | GET | LittleFS-Dateimanager laden |
| `/edit` | POST | Datei in LittleFS hochladen |
| `/edit` | PUT | Datei oder Verzeichnis in LittleFS anlegen |
| `/edit` | DELETE | Datei oder Verzeichnis aus LittleFS löschen |

---

## Testflow / Development

Diese Endpunkte sind nur in Builds mit `BRAUTOMAT_TESTFLOW_ENABLED` registriert und dienen Test-Runnern bzw. Debugging.

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/dev/snapshot` | GET | Debug-Testflow-Snapshot mit `meta.testflowSchema`. |
| `/dev/mashplan-readback` | GET | Aktuellen Maischeplan für Test-Readback abrufen. |
| `/dev/sensor-error` | GET | Sensorfehler für Testflow setzen. |
| `/dev/sensor-override` | GET | Sensorwert für Testflow überschreiben. |
| `/dev/webupdate-source` | GET | WebUpdate-Quelle für Testflow setzen/lesen. |
| `/dev/testflow-reset` | GET | Testflow-Zustand zurücksetzen. |
| `/setSenErr` | GET | Legacy-Alias für `/dev/sensor-error`. |

---

## Statische Inhalte (Cache aktiviert)

| Dateien | Beschreibung |
| ---------- | --------------- |
| `/brautomat.min.css`, `/bootstrap.min.css`, `/bootstrap.min.js`, `/brautomat.min.js`, `/brautomat.ttf` | Web-Assets |
| `/language/<name>.json` | Sprachdateien |
| `/lang.js`, `/favicon.ico` | Systemdateien |
| `/info.mp3`, `/success.mp3`, `/warning.mp3`, `/error.mp3` | Audiodateien für Systemmeldungen |

---
