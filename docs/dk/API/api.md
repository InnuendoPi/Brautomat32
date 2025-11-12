# ⚙️ API Brautomat32

These two Javascript functions make communication with the Brautomat32 easier.  
They encapsulate `fetch()` calls, handle errors, JSON/text recognition, and optional user notifications (toast/alert).

---

## 🟢 apiGET(url, alarm, toast, log)

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

## 🔵 apiPOST(url, data, alarm, toast, log, postType, responseType)

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
await apiPOST('/setKettle', { temp: 65, PID: true }, true, false, true);
console.log(misc);
```

---

## 🌐 WebServer Handler Brautomat32

Brautomat HTTP endpoints. The web server uses CORS and supports **HTTP GET**, **POST**, **PUT**, and **DELETE** requests.

---

## 🏠 Base endpoints

| Endpoint | Method | Description |
|-----------|----------|--------------|
| `/` | GET | Loads the homepage |
| `/index`, `/index.htm`, `/index.html` | GET | Alternative routes for the homepage |

---

## 🌡️ Sensors

| Endpoint | Method | Description |
|-----------|----------|--------------|
| `/reqSensors?id=${sensorid}` | GET | Returns a list of all sensors |
| `/setSensor?id=${sensorid}` | POST | Adds a new sensor or modifies an existing one |
| `/delSensor?id=${sensorid}` | POST | Deletes a sensor |
| `/reqSearchSensorAddresses?id=${sensorid}` | GET | Searches available sensor addresses |
| `/senkal` | POST | Performs sensor calibration |
| `/setSenErr?id=${sensorid}` | POST | Sets sensor error status (debug) |

| sensorid | Description |
|-----------|----------|
| -1 | retrieves all sensors |
| 0 - 2 | Sensor ID |

**Example:**  

```js
const data = await apiGET(`/reqSensors?id=0`);
console.log(data);
```

---

## ⚙️ Actors

| Endpoint | Method | Description |
|-----------|----------|--------------|
| `/reqActors?id=${actorid}` | GET | Returns a list of all actors |
| `/setActor?id=${actorid}` | POST | Creates or modifies an actor |
| `/delActor?id=${actorid}` | POST | Deletes an actor |
| `/actorPower?id=${actorid}` | POST | Switches the power of an actuator |
| `/actorPWM?id=${actorid}` | POST | Sets the PWM value of an actuator |

| actorid | Description |
|-----------|----------|
| -1 | retrieves all actors |
| 0 - 9 | Actuator ID |

**Example:**  

```js
const data = await apiGET(`/reqActors?id=0`);
console.log(data);
```

---

## 🔥 Kettle

| Endpoint | Method | Description |
|-----------|----------|--------------|
| `/reqKettle?id=${kettleid}` | GET | Returns current boiler data |
| `/reqKettlePID?id=${kettleid}` | GET | Query PID parameters |
| `/setKettle?id=${kettleid}` | POST | Change boiler data |
| `/setKettlePID?id=${kettleid}` | POST | PID parameter change |
| `/handlePower?id=${kettleid}` | POST | Enable/Disable Performance |

| kettleid | Description |
|-----------|----------|
| 0 | Mash kettle |
| 1 | Brew kettle |
| 2 | LDS |
| 3 | Fermenter |

**Example:**  

```js
const data = await apiGET(`/reqKettle?id=0`);
console.log(data);
```

---

## 📈 Profiles

| Endpoint | Method | Description |
|-----------|----------|--------------|
| `/setProfile` | POST | Create or change a new profile |
| `/changeProfile?id=${kettleid}&pname=${pname}` | POST | Switch active profile |
| `/delProfile?pname=${pname}` | POST | Delete profile |

| kettleid | Description |
|-----------|----------|
| 0 | Mash kettle |
| 1 | Brew kettle |
| 2 | LDS |
| 3 | Fermenter |
| pname | Profile name |

**Example:**  

```js
const data = await apiGET(`/reqKettle?type=0`);
console.log(data);
```

---

## 🍺 Brew / recipe management

| Endpoint | Method | Description |
|-----------|----------|--------------|
| `/setSud` | POST | Configure existing brew |
| `/setSudNew` | POST | Create new brew |
| `/setSudRen` | POST | Rename Sud |
| `/setSudCopy` | POST | Copy Sud |
| `/setSudCha` | POST | Change brew |
| `/delSud` | POST | Delete brew |
| `/reqSud` | GET | Get sud parameters |
| `/reqSudname` | GET | Get current brew name |
| `/reqBrauStart` | POST | Start the brewing process |

---

## ⚙️ Misc / General Settings

| Endpoint | Method | Description |
|-----------|----------|--------------|
| `/reboot` | POST | Restart the device |
| `/reqMisc` | GET | General system information |
| `/reqVis` | GET | Get visualization data |
| `/reqMiscAlert` | GET | Query alerts |
| `/reqBreakAlert` | GET | Query boil/break warnings |
| `/setMisc` | POST | Change general settings |
| `/setMiscLang` | POST | Set language |
| `/rezimp` | POST | Import recipe |
| `/setMash` | POST | Set mash plan |
| `/startHTTPUpdate` | POST | Start firmware update |
| `/setFerm` | POST | Set fermentation parameters |

---

## ▶️ Controls

| Endpoint | Method | Description |
|-----------|----------|--------------|
| `/Btn-Power` | POST | Trigger power button |
| `/btn-break` | POST | Trigger pause button |
| `/Btn-Play` | POST | Trigger start button |
| `/Btn-Next-Step` | POST | Next step |
| `/Btn-Prev-Step` | POST | Previous step |
| `/Btn-Edit` | POST | Activate edit mode |
| `/manpow` | POST | Control manual power |
| `/eraseFlash` | POST | Clear flash memory |

---

## 📡 Server Sent Events (SSE)

| Endpoint | Method | Description |
|-----------|----------|--------------|
| `/channel` | GET | Open SSE channel |
| `/startSSE` | GET | Starts SSE connection |
| `/checkAliveSSE` | GET | Checks active SSE connections |
| `/reloadMashSSE` | GET | Reloads mash data |
| `/language` | GET | Get language file |

---

## 📊 Graph / Chart data

| Endpoint | Method | Description |
|-----------|----------|--------------|
| `/getDots` | GET | Get chart data |
| `/removeDots` | POST | Clear chart data |

---

## 🍻 BrewFather integration

| Endpoint | Method | Description |
|-----------|----------|--------------|
| `/getbf` | GET | List of available BrewFather recipes |
| `/bfRecipe` | GET | Get recipe details |

---

## 💾 Backup & Restore

| Endpoint | Method | Description |
|-----------|----------|--------------|
| `/backup` | GET | Create system backup |
| `/restore` | POST | Restore backup |

---

## 📁 File management (FSBrowser)

| Endpoint | Method | Description |
|-----------|----------|--------------|
| `/edit` | GET | Load file editor |
| `/status` | GET | Get system status |
| `/list` | GET | Show file list |
| `/edit` | PUT | Create new file |
| `/edit` | DELETE | Delete file |
| `/edit` | POST | File upload |

---

## 🧩 Static content (cache enabled)

| Files | Description |
|----------|---------------|
| `/Brautomat.min.css`, `/bootstrap.min.css`, `/bootstrap.min.js`, `/Brautomat.min.js`, `/Brautomat.ttf` | Web assets |
| `/language/deutsch.json`, `/language/english.json`, `/language/norsk.json` | Language files |
| `/lang.js`, `/favicon.ico` | System files |
| `/info.mp3`, `/success.mp3`, `/warning.mp3`, `/error.mp3` | Audio files for system messages |

---
