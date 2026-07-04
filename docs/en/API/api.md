# API Brautomat32

These two Javascript functions make communication with the Brautomat32 easier.  
They encapsulate `fetch()` calls, handle errors, JSON/text recognition, and optional user notifications (toast/alert).

---

## apiGET(url, alarm, toast, log)

* @param {string} url - Endpoint URL
* @param {boolean} alarm - enable sendAlarm, default false
* @param {boolean} toast - toast message on error, default false
* @param {boolean} log - debug output to console in the browser, default false
* @returns {Promise\<any\>} - response from server (JSON object or text)

**Example:**  

```js
const misc = await apiGET('/reqMisc', false, false, true);
console.log(misc);
```

---

## apiPOST(url, data, alarm, toast, log, postType, responseType)

* @param {string} url - Endpoint URL
* @param {Object} data - data to be sent (json or txt)
* @param {boolean} alarm - enable sendAlarm, default false
* @param {boolean} toast - toast message on error, default false
* @param {boolean} log - debug output to console in the browser, default false
* @param {"json"|"text"|"formdata"} postType - content-type for header, default json
* @param {"json"|"text"} responseType - expected return value, default text
* @returns {Promise\<any\>} - Response from server

**Example:**  

```js
await apiPOST('/setKettle', { temp: 65, pid: true }, true, false, true);
console.log(misc);
```

---

## WebServer Handler Brautomat32

Brautomat HTTP endpoints. The web server uses CORS and supports **HTTP GET**, **POST**, **PUT**, and **DELETE** requests.

---

## Base endpoints

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/` | GET | Loads the homepage |
| `/index`, `/index.html` | GET | Alternative routes for the homepage |
| `/dashboard`, `/dashboard/` | GET | Loads the reduced dashboard view as an info terminal |

---

## Sensors

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/reqSensors?id=${sensorid}` | GET | Returns the configuration of one sensor or all sensors |
| `/setSensor` | POST | Adds a new sensor or modifies an existing one. Expects JSON with `id` and sensor parameters |
| `/setSensorState` | POST | Enables or disables a sensor. Expects JSON `{ "id": number, "state": boolean }` |
| `/delSensor` | POST | Deletes a sensor. Expects JSON `{ "id": number }` |
| `/reqSearchSensorAdresses?id=${sensorid}` | GET | Searches available sensor addresses |
| `/senkal` | POST | Performs sensor calibration. Expects JSON with `id` and calibration values |

Parameter `sensorid` for GET endpoints:

| Value | Description |
| ----------- | ---------- |
| `-1` | retrieves all sensors |
| `0` - `2` | Sensor ID |

For POST endpoints, the sensor ID is sent in the JSON body as `id`. For `/setSensor`, `id=-1` can create a new sensor; for `/setSensorState`, `/delSensor`, and `/senkal`, `id` must reference an existing sensor ID.

**Example:**  

```js
const data = await apiGET(`/reqSensors?id=0`);
console.log(data);

await apiPOST(`/setSensorState`, { id: 0, state: true });
```

---

## Actuators

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/reqActors?id=${actorid}` | GET | Returns a list of all actors |
| `/setActor?id=${actorid}` | POST | Creates or modifies an actor |
| `/delActor?id=${actorid}` | POST | Deletes an actor |
| `/actorPower?id=${actorid}` | POST | Switches the power of an actuator |
| `/actorPWM?id=${actorid}` | POST | Sets the PWM value of an actuator |

| actorid | Description |
| ----------- | ---------- |
| -1 | retrieves all actors |
| 0 - 9 | Actuator ID |

**Example:**  

```js
const data = await apiGET(`/reqActors?id=0`);
console.log(data);
```

---

## Kettle

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/reqKettle?id=${kettleid}` | GET | Returns current kettle data |
| `/reqKettlePID?id=${kettleid}` | GET | PID query parameters (`kl`,`kr`,`kp`,`ki`,`kd`,`sa`,`psa`,`newo`,`tun`,`vol`,`maxo`,...) |
| `/setKettle?id=${kettleid}` | POST | Change kettle data |
| `/setKettlePID?id=${kettleid}` | POST | PID parameters change or recalculate from `kl/kr` (`recalc`, `applyRecommended`) |
| `/handlePower?id=${kettleid}` | POST | Enable/disable power. JSON: `{"setp":78,"state":true}` switches on, `{"setp":0,"state":false}` switches off. Without `state` the endpoint remains compatible as toggle. |

| kettleid | Description |
| ----------- | ---------- |
| 0 | Mash kettle |
| 1 | Brew kettle |
| 2 | HLT |
| 3 | Fermenter |

**Example:**  

```js
const data = await apiGET(`/reqKettle?id=0`);
console.log(data);
```

---

## Profiles

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/setProfile` | POST | Create or change a new profile |
| `/changeProfile?id=${kettleid}&pname=${pname}` | POST | Switch active profile |
| `/renameProfile` | POST | Rename profile |
| `/delProfile?pname=${pname}` | POST | Delete profile |

| kettleid | Description |
| ----------- | ---------- |
| 0 | Mash kettle |
| 1 | Brew kettle |
| 2 | HLT |
| 3 | Fermenter |
| pname | Profile name |

**Example:**  

```js
const data = await apiGET(`/reqKettle?type=0`);
console.log(data);
```

---

## Brew / recipe management

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/setSud` | POST | Configure existing brew |
| `/setSudNew` | POST | Create new brew |
| `/setSudRen` | POST | Rename brew |
| `/setSudCopy` | POST | Copy brew |
| `/setSudCha` | POST | Change brew |
| `/delSud` | POST | Delete brew |
| `/reqSud` | GET | Get brew parameters |
| `/reqSudname` | GET | Get current brew name |
| `/reqBrauStart` | GET | Start the brewing process |

Note: Changes to recipes (import, change, rename, copy, delete) are only possible in the idle state.

---

## Misc / General Settings

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/reboot` | POST | Restart the device |
| `/reqMisc` | GET | General system information |
| `/reqVis` | GET | Get visualization data |
| `/reqProcessStatus` | GET | Compact process state for dashboard and import/export availability |
| `/reqWifiCredentials` | GET | Get Wi-Fi configuration |
| `/reqFirmwareSlot` | GET | Get active firmware/update slot |
| `/scanWifi` | GET | Scan Wi-Fi networks |
| `/getLanguage` | GET | Get the currently selected language |
| `/setMisc` | POST | Change general settings |
| `/setWifiCredentials` | POST | Change Wi-Fi configuration |
| `/setMiscLang` | POST | Set language |
| `/uploadLanguage` | POST | Upload a language file |
| `/rezimp` | POST | Import recipe |
| `/upload` | POST | Upload a recipe file |
| `/setMash` | POST | Set mash plan |
| `/startHTTPUpdate` | POST | Start firmware update |
| `/setFerm` | POST | Set fermentation parameters |
| `/eraseFlash` | GET | Erase flash/configuration data. Service function with immediate effect. |

### `/reqProcessStatus`

`GET /reqProcessStatus` returns a small process state for UI decisions, for example whether brewday export/import may be offered.

When there is no active or persisted process:

```json
{
  "state": "idle"
}
```

With an active or resumable process:

| Field | Type | Description |
| --- | --- | --- |
| `state` | string | `active` or `idle`. |
| `mode` | string | `mash` or `fermenter`. |
| `name` | string | Current brew/plan name. |
| `step_index` | integer | Active step index. |
| `step` | string | Active step name or empty string. |
| `remaining_sec` | integer | Remaining time in seconds. |
| `pause` | boolean | Process is paused. |
| `play` | boolean | Process is running or start state is active. |
| `runtime_power` | boolean | Runtime power is currently active. |
| `persisted` | boolean | Resume data is stored. |

---

## Telemetry and Brewday Export/Import

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/api/telemetry` | GET | Compact brewday time-series snapshot for Grafana, Highcharts, or external loggers. |
| `/api/debug` | GET | Broad debug snapshot with runtime, controller, sensor, kettle, and actor state. Not intended for 30 s telemetry logging. |
| `/api/brewday/export` | GET | Exports the complete current brewday as a `brautomat-brewday-v1` JSON stream with metadata, recipe/plan snapshot, chartdots, and brewday pins. |
| `/api/brewday/import` | POST | Imports a `brautomat-brewday-v1` JSON as review data into `/brewday_review.json`. Import does not overwrite configuration, the current plan, chartdots, or influence a running process. |
| `/api/brewday/pins` | GET | Returns the currently server-side recorded brewday pins from `/brewday_pins.ndjson` as a JSON array. The endpoint is read-only and is used by the dashboard to render pins for existing chartdots. |

`/api/telemetry` is intended for regular logging. Intended polling intervals are about 30 s during mash mode and 60-300 s during fermenter mode.

### `/api/telemetry`

`GET /api/telemetry` returns exactly one current measurement point for external charts or loggers. The endpoint is read-only and does not include static metadata, actor lists, sensor lists, or controller button logic.

| Field | Type | Description |
| --- | --- | --- |
| `t` | integer | Device Unix time in seconds. |
| `mode` | string | Current mode, e.g. `idle`, `mash`, `fermenter`, `manual`, `autotune`. |
| `step` | integer | Active zero-based step index. `-1` when no valid step is active. |
| `stepName` | string | Active plan step name or empty string. |
| `m` | number | Mash current temperature. |
| `mt` | number | Mash target temperature. |
| `mp` | integer | Mash power in percent. |
| `s` | number | Boil kettle current temperature. |
| `st` | number | Boil kettle target temperature. |
| `sp` | integer | Boil kettle power in percent. |
| `h` | number | HLT current temperature. |
| `ht` | number | HLT target temperature. |
| `hp` | integer | HLT power in percent. |
| `f` | number | Fermenter current temperature. |
| `ft` | number | Fermenter target temperature. |

Example:

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

### `/api/debug`

`GET /api/debug` returns a broad current device snapshot for debugging or external control UIs. The endpoint is read-only, but it is not intended as compact 30 s telemetry logging.

Time fields:

| Field | Type | Description |
| --- | --- | --- |
| `timestamp` | integer | Device Unix time in seconds. |
| `uptimeMs` | integer | Runtime since boot in milliseconds. |

Top-level fields:

| Field | Type | Description |
| --- | --- | --- |
| `schema` | integer | Schema version, currently `1`. |
| `firmware` | string | Firmware name and version. |
| `mode` | string | Current mode, e.g. `idle`, `mash`, `fermenter`, `manual`, `autotune`. |
| `process` | object | Process state and currently allowed controller actions. |
| `step` | object | Active plan step. Omitted when no valid step is active. |
| `kettles` | array | State of configured kettles. |
| `sensors` | array | Temperature sensor state. |
| `actors` | array | Actor state. |

`process`:

| Field | Type | Description |
| --- | --- | --- |
| `power` | boolean | Process power is active. |
| `play` | boolean | Process is running or start state is active. |
| `pause` | boolean | Process is paused. |
| `mashState` | integer | Internal mash FSM state. |
| `fermState` | integer | Internal fermenter FSM state. |
| `fermHeatState` | integer | Internal fermenter heating/cooling state. |
| `activeStep` | integer | Active zero-based step index. |
| `stepCount` | integer | Number of loaded steps. |
| `timerRunning` | boolean | Step timer is running. |
| `remainingSec` | integer | Remaining active timer duration in seconds. |
| `waitUserReason` | string | Reason for user confirmation, otherwise `none`. |
| `holdReason` | string | Runtime hold reason, otherwise `none`. |
| `canPower`, `canPlay`, `canPause`, `canNext`, `canPrev` | boolean | Controller actions currently allowed. |

`step`:

| Field | Type | Description |
| --- | --- | --- |
| `index` | integer | Zero-based step index. |
| `name` | string | Step name from mash or fermenter plan. |
| `temp` | number | Target temperature or start temperature. |
| `duration` | integer | Duration in minutes. |
| `kettle` | integer | Assigned kettle. |
| `autonext` | boolean | Automatic transition to the next step. |

`kettles[]`:

| Field | Type | Description |
| --- | --- | --- |
| `id` | integer | Kettle ID. |
| `name` | string | Display name. |
| `enabled` | integer | Configured kettle mode. |
| `state` | boolean | Switching state. |
| `isOn` | boolean | Output/controller active. |
| `sensorId` | integer | Assigned sensor. |
| `temp` | number | Current temperature. |
| `target` | number | Current setpoint. |
| `output` | number | PID/controller output. |
| `power` | integer | Effective power in percent. |

`sensors[]`:

| Field | Type | Description |
| --- | --- | --- |
| `id` | integer | Sensor ID. |
| `name` | string | Sensor display name. |
| `ok` | boolean | `true` when the snapshot is readable, the sensor is active, and `err == 0`. |
| `state` | boolean | Firmware sensor state. |
| `err` | integer | Sensor error code, `0` means no error. |
| `value` | number | Current measured value in °C. `0.0` when the snapshot is invalid. |

`actors[]`:

| Field | Type | Description |
| --- | --- | --- |
| `id` | integer | Actor ID. |
| `name` | string | Actor display name. |
| `pin` | string | Configured pin, e.g. `D0`. |
| `state` | boolean | Logical actor on/off state. |
| `signalState` | boolean | Actual signal output state. |
| `power` | integer | Current actor power in percent. |
| `pwm` | integer | Configured PWM value in percent. |

Example:

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

The brewday export format contains:

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

Pins are recorded server-side while the normal chart writer runs, using the active mash or fermenter plan. A chart reset through `/removeDots` also removes the related brewday pins.

---

## Controls

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/Btn-Power` | GET | Trigger power button |
| `/Btn-Pause` | GET | Trigger pause button |
| `/Btn-Play` | GET | Trigger start button |
| `/Btn-Next-Step` | GET | Next step |
| `/Btn-Prev-Step` | GET | Previous step |
| `/Btn-Edit` | POST | Activate edit mode |
| `/manpow` | POST | Control manual power |

---

## Server Sent Events (SSE)

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/channel` | GET | Open SSE channel |
| `/startSSE` | GET | Starts SSE connection |
| `/checkAliveSSE` | GET | Checks active SSE connections |
| `/reloadMashSSE` | GET | Reloads mash data |

---

## Graph / Chart data

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/getDots` | GET | Get chart data |
| `/removeDots` | POST | Clear chart data |

---

## BrewFather integration

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/getbf` | GET | List of available BrewFather recipes |
| `/bfRecipe` | POST | Get recipe details |
| `/bfbatche` | POST | Legacy/frontend compatibility for batch recipe detail lookup |

---

## Backup & Restore

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/backup` | POST | Create system backup |
| `/restore` | POST | Restore backup |
| `/config.txt` | GET | Download the current text configuration |
| `/download?file=...` | GET | Download any file from LittleFS |
| `/update` | GET | Load WebUpdate page |
| `/update` | POST | Run firmware/file upload through WebUpdate |

---

## Filesystem / Service

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/status` | GET | Get system status |
| `/list` | GET | Show file list |
| `/edit`, `/edit.htm`, `/edit.html` | GET | Load LittleFS file manager |
| `/edit` | POST | Upload file to LittleFS |
| `/edit` | PUT | Create file or directory in LittleFS |
| `/edit` | DELETE | Delete file or directory from LittleFS |

---

## Testflow / Development

These endpoints are only registered in builds with `BRAUTOMAT_TESTFLOW_ENABLED` and are intended for test runners or debugging.

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/dev/snapshot` | GET | Debug testflow snapshot with `meta.testflowSchema`. |
| `/dev/mashplan-readback` | GET | Get current mash plan for test readback. |
| `/dev/sensor-error` | GET | Set sensor error for testflow. |
| `/dev/sensor-override` | GET | Override sensor value for testflow. |
| `/dev/webupdate-source` | GET | Set/read WebUpdate source for testflow. |
| `/dev/testflow-reset` | GET | Reset testflow state. |
| `/setSenErr` | GET | Legacy alias for `/dev/sensor-error`. |

---

## Static content (cache enabled)

| Files | Description |
| ---------- | --------------- |
| `/brautomat.min.css`, `/bootstrap.min.css`, `/bootstrap.min.js`, `/brautomat.min.js`, `/brautomat.ttf` | Web assets |
| `/language/<name>.json` | Language files |
| `/lang.js`, `/favicon.ico` | System files |
| `/info.mp3`, `/success.mp3`, `/warning.mp3`, `/error.mp3` | Audio files for system messages |

---
