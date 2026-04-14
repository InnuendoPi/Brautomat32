# API Brautomat32

These two JavaScript functions make communication with the Brautomat32 easier.  
They wrap `fetch()` calls, handle errors, JSON/text detection, and optional user notifications.

---

## apiGET(url, alarm, toast, log)

- `url`: endpoint URL
- `alarm`: enable `sendAlarm`, default `false`
- `toast`: toast notification on error, default `false`
- `log`: debug output in the browser console, default `false`
- return value: `Promise<any>`

**Example**

```js
const misc = await apiGET("/reqMisc", false, false, true);
console.log(misc);
```

---

## apiPOST(url, data, alarm, toast, log, postType, responseType)

- `url`: endpoint URL
- `data`: payload for `json`, `text` or `formdata`
- `alarm`: enable `sendAlarm`, default `false`
- `toast`: toast notification on error, default `false`
- `log`: debug output in the browser console, default `false`
- `postType`: `json`, `text` or `formdata`
- `responseType`: `json` or `text`
- return value: `Promise<any>`

**Example**

```js
await apiPOST("/setKettle", { temp: 65, pid: true }, true, false, true);
```

---

## WebServer Handler Brautomat32

Brautomat HTTP endpoints. The web server supports GET, POST, PUT and DELETE.

---

## Base endpoints

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/` | GET | Load the main page |
| `/index`, `/index.html` | GET | Alternative routes for the main page |
| `/dashboard`, `/dashboard/` | GET | Load the reduced dashboard view |

---

## Sensors

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/reqSensors?id=${sensorid}` | GET | Return a list of all sensors |
| `/setSensor?id=${sensorid}` | POST | Add or modify a sensor |
| `/delSensor?id=${sensorid}` | POST | Delete a sensor |
| `/reqSearchSensorAdresses?id=${sensorid}` | GET | Search available sensor addresses |
| `/senkal` | POST | Run sensor calibration |

| sensorid | Description |
| ----------- | ---------- |
| -1 | retrieve all sensors |
| 0 - 2 | sensor ID |

---

## Actuators

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/reqActors?id=${actorid}` | GET | Return a list of all actuators |
| `/setActor?id=${actorid}` | POST | Create or modify an actuator |
| `/delActor?id=${actorid}` | POST | Delete an actuator |
| `/actorPower?id=${actorid}` | POST | Switch actuator power |
| `/actorPWM?id=${actorid}` | POST | Set the PWM value of an actuator |

| actorid | Description |
| ----------- | ---------- |
| -1 | retrieve all actuators |
| 0 - 9 | actuator ID |

---

## Kettle

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/reqKettle?id=${kettleid}` | GET | Return current kettle data |
| `/reqKettlePID?id=${kettleid}` | GET | Query PID parameters |
| `/setKettle?id=${kettleid}` | POST | Change kettle data |
| `/setKettlePID?id=${kettleid}` | POST | Change PID parameters or recalculate them |
| `/handlePower?id=${kettleid}` | POST | Enable or disable power |

| kettleid | Description |
| ----------- | ---------- |
| 0 | mash kettle |
| 1 | brew kettle |
| 2 | HLT |
| 3 | fermenter |

---

## Profiles

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/setProfile` | POST | Create or change a profile |
| `/changeProfile?id=${kettleid}&pname=${pname}` | POST | Switch the active profile |
| `/renameProfile` | POST | Safely rename a profile and update active references |
| `/delProfile?pname=${pname}` | POST | Delete a profile |

| kettleid | Description |
| ----------- | ---------- |
| 0 | mash kettle |
| 1 | brew kettle |
| 2 | HLT |
| 3 | fermenter |
| pname | profile name |

---

## Brew / recipe management

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/setSud` | POST | Configure an existing brew |
| `/setSudNew` | POST | Create a new brew |
| `/setSudRen` | POST | Rename a brew |
| `/setSudCopy` | POST | Copy a brew |
| `/setSudCha` | POST | Change the active brew |
| `/delSud` | POST | Delete a brew |
| `/reqSud` | GET | Get brew parameters |
| `/reqSudname` | GET | Get the current brew name |
| `/reqBrauStart` | GET | Start the brewing process |

Note: Recipe changes are only possible while the system is idle.

---

## Misc / General settings

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/reboot` | POST | Restart the device |
| `/reqMisc` | GET | Get general system information |
| `/reqVis` | GET | Get visualization data |
| `/reqWifiCredentials` | GET | Get stored WiFi credentials |
| `/reqFirmwareSlot` | GET | Get the active firmware partition and version data |
| `/scanWifi` | GET | Start a WiFi scan or fetch scan results |
| `/getLanguage` | GET | Get the currently selected language |
| `/setMisc` | POST | Change general settings |
| `/setWifiCredentials` | POST | Save WiFi credentials |
| `/setMiscLang` | POST | Set language |
| `/uploadLanguage` | POST | Upload a language file |
| `/rezimp` | POST | Import a recipe |
| `/upload` | POST | Upload a recipe file |
| `/setMash` | POST | Set mash plan |
| `/startHTTPUpdate` | POST | Start firmware update |
| `/setFerm` | POST | Set fermentation parameters |

---

## Controls

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/Btn-Power` | GET | Trigger the power button |
| `/Btn-Pause` | GET | Trigger the pause button |
| `/Btn-Play` | GET | Trigger the start button |
| `/Btn-Next-Step` | GET | Next step |
| `/Btn-Prev-Step` | GET | Previous step |
| `/Btn-Edit` | POST | Activate edit mode |
| `/manpow` | POST | Control manual power |

---

## Server-Sent Events (SSE)

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/channel` | GET | Open the SSE channel |
| `/startSSE` | GET | Start the SSE connection |
| `/checkAliveSSE` | GET | Check active SSE connections |
| `/reloadMashSSE` | GET | Reload mash data |

---

## Graph / Chart data

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/getDots` | GET | Get chart data |
| `/removeDots` | POST | Delete chart data |

---

## BrewFather integration

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/getbf` | GET | List available BrewFather recipes |
| `/bfRecipe` | POST | Get recipe details |
| `/bfbatche` | POST | Legacy/frontend compatibility for batch recipe detail lookup |

---

## Backup & Restore

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/backup` | POST | Create a system backup |
| `/restore` | POST | Restore a backup |
| `/config.txt` | GET | Download the current text configuration |
| `/download?file=...` | GET | Download any file from LittleFS |

---

## Filesystem / Service

| Endpoint | Method | Description |
| ----------- | ---------- | -------------- |
| `/status` | GET | Get system status |
| `/list` | GET | Show the file list |
| `/edit` | GET/PUT/POST/DELETE | Create, upload, fetch or delete files in LittleFS |

---
