# ⚙️ API Brautomat32

Dessa två Javascript-funktioner gör kommunikationen med Brautomat32 enklare.  
De kapslar in `fetch()`-anrop, hanterar fel, JSON/textigenkänning och valfria användarmeddelanden (toast/alert).

---

## apiGET(url, alarm, toast, logg)

* @param {string} url - Endpoint URL
* @param {boolean} alarm - aktivera sendAlarm, standard false
* @param {boolean} toast - toastmeddelande vid fel, standardfalskt
* @param {boolean} logg - felsök utdata till konsolen i webbläsaren, standard false
* @returns {Promise\<any\>} - svar från server (JSON-objekt eller text)

**Exempel:**  

``` js
const misc = await apiGET('/reqMisc', false, false, true);
console.log(diverse);
```

---

## 🔵 apiPOST(url, data, alarm, toast, log, postType, responseType)

* @param {string} url - Endpoint URL
* @param {Object} data - data som ska skickas (json eller txt)
* @param {boolean} alarm - aktivera sendAlarm, standard false
* @param {boolean} toast - toastmeddelande vid fel, standardfalskt
* @param {boolean} logg - felsök utdata till konsolen i webbläsaren, standard false
* @param {"json"|"text"|"formdata"} postType - innehållstyp för header, standard json
* @param {"json"|"text"} responseType - förväntat returvärde, standardtext
* @returns {Promise\<any\>} - Svar från servern

**Exempel:**  

``` js
await apiPOST('/setKettle', { temp: 65, PID: sant }, sant, falskt, sant);
console.log(diverse);
```

---

## 🌐 WebServer Handler Brautomat32

Brautomat HTTP-slutpunkter. Webbservern använder CORS och stöder **HTTP GET**, **POST**, **PUT** och **DELETE**-förfrågningar.

---

## 🏠 Basslutpunkter

| Slutpunkt | Metod | Beskrivning |
|-----------|--------|-------------|
| `/` | FÅ | Laddar hemsidan |
| `/index`, `/index.htm`, `/index.html` | FÅ | Alternativa vägar för hemsidan |

---

## 🌡️ Sensorer

| Slutpunkt | Metod | Beskrivning |
|-----------|--------|-------------|
| `/reqSensors?id=${sensorid}` | FÅ | Returnerar en lista över alla sensorer |
| `/setSensor?id=${sensorid}` | POST | Lägger till en ny sensor eller modifierar en befintlig |
| `/delSensor?id=${sensorid}` | POST | Tar bort en sensor |
| `/reqSearchSensorAddresses?id=${sensorid}` | FÅ | Söker tillgängliga sensoradresser |
| `/senkal` | POST | Utför sensorkalibrering |
| `/setSenErr?id=${sensorid}` | POST | Ställer in sensorfelstatus (debug) |

| sensorid | Beskrivning |
|----------------|--------|
| -1 | hämtar alla sensorer |
| 0 - 2 | Sensor-ID |

**Exempel:**  

``` js
const data = await apiGET(`/reqSensors?id=0`);
console.log(data);
```

---

## ⚙️ Skådespelare

| Slutpunkt | Metod | Beskrivning |
|-----------|--------|-------------|
| `/reqActors?id=${actorid}` | FÅ | Returnerar en lista över alla skådespelare |
| `/setActor?id=${actorid}` | POST | Skapar eller modifierar en skådespelare |
| `/delActor?id=${actorid}` | POST | Tar bort en skådespelare |
| `/actorPower?id=${actorid}` | POST | Växlar strömmen till ett ställdon |
| `/actorPWM?id=${actorid}` | POST | Ställer in PWM-värdet för ett ställdon |

| actorid | Beskrivning |
|----------------|--------|
| -1 | hämtar alla skådespelare |
| 0 - 9 | Ställdons-ID |

**Exempel:**  

``` js
const data = await apiGET(`/reqActors?id=0`);
console.log(data);
```

---

## 🔥 Vattenkokare

| Slutpunkt | Metod | Beskrivning |
|-----------|--------|-------------|
| `/reqKettle?id=${kettleid}` | FÅ | Returnerar aktuell panndata |
| `/reqKettlePID?id=${kettleid}` | FÅ | Fråga PID parametrar |
| `/setKettle?id=${kettleid}` | POST | Ändra panndata |
| `/setKettlePID?id=${kettleid}` | POST | PID parameterändring |
| `/handlePower?id=${kettleid}` | POST | Aktivera/inaktivera prestanda |

| kettleid | Beskrivning |
|----------------|--------|
| 0 | Mash vattenkokare |
| 1 | Bryggvattenkokare |
| 2 | LDS |
| 3 | Fermenterare |

**Exempel:**  

``` js
const data = await apiGET(`/reqKettle?id=0`);
console.log(data);
```

---

## 📈 Profiler

| Slutpunkt | Metod | Beskrivning |
|------------|--------|---------------|
| `/setProfile` | POST | Skapa eller ändra en ny profil |
| `/changeProfile?id=${kettleid}&pname=${pname}` | POST | Byt aktiv profil |
| `/delProfile?pname=${pname}` | POST | Ta bort profil |

| kettleid | Beskrivning |
|----------------|--------|
| 0 | Mash vattenkokare |
| 1 | Bryggvattenkokare |
| 2 | LDS |
| 3 | Fermenterare |
| pname | Profilnamn |

**Exempel:**  

``` js
const data = await apiGET(`/reqKettle?type=0`);
console.log(data);
```

---

## 🍺 Brygg-/recepthantering

| Slutpunkt | Metod | Beskrivning |
|-----------|--------|-------------|
| `/setSud` | POST | Konfigurera befintlig bryggning |
| `/setSudNew` | POST | Skapa ny brygd |
| `/setSudRen` | POST | Byt namn på Sud |
| `/setSudCopy` | POST | Kopiera Sud |
| `/setSudCha` | POST | Ändra brygga |
| `/delSud` | POST | Ta bort brygd |
| `/reqSud` | FÅ | Hämta sud parametrar |
| `/reqSudname` | FÅ | Hämta aktuellt bryggnamn |
| `/reqBrauStart` | POST | Starta bryggningsprocessen |

---

## ⚙️ Övrigt / Allmänna inställningar

| Slutpunkt | Metod | Beskrivning |
|-----------|--------|-------------|
| `/reboot` | POST | Starta om enheten |
| `/reqMisc` | FÅ | Allmän systeminformation |
| `/reqVis` | FÅ | Hämta visualiseringsdata |
| `/reqMiscAlert` | FÅ | Frågevarningar |
| `/reqBreakAlert` | FÅ | Fråga koka/avbrottsvarningar |
| `/setMisc` | POST | Ändra allmänna inställningar |
| `/setMiscLang` | POST | Ställ in språk |
| `/rezimp` | POST | Importera recept |
| `/setMash` | POST | Sätt mäskplan |
| `/startHTTPUpdate` | POST | Starta firmwareuppdatering |
| `/setFerm` | POST | Ställ in jäsningsparametrar |

---

## ▶️ Kontroller

| Slutpunkt | Metod | Beskrivning |
|-----------|--------|-------------|
| `/Btn-Power` | POST | Utlösa strömknapp |
| `/btn-break` | POST | Utlösa pausknapp |
| `/Btn-Play` | POST | Utlösa startknapp |
| `/Btn-Nästa-steg` | POST | Nästa steg |
| `/Btn-Prev-Step` | POST | Föregående steg |
| `/Btn-Edit` | POST | Aktivera redigeringsläge |
| `/manpow` | POST | Styr manuell kraft |
| `/eraseFlash` | POST | Rensa flashminne |

---

## 📡 Server skickade händelser (SSE)

| Slutpunkt | Metod | Beskrivning |
|-----------|--------|-------------|
| `/kanal` | FÅ | Öppna SSE-kanal |
| `/startSSE` | FÅ | Startar SSE-anslutning |
| `/checkAliveSSE` | FÅ | Kontrollerar aktiva SSE-anslutningar |
| `/reloadMashSSE` | FÅ | Laddar om mash-data |
| `/språk` | FÅ | Hämta språkfil |

---

## 📊 Graf/diagramdata

| Slutpunkt | Metod | Beskrivning |
|-----------|--------|-------------|
| `/getDots` | FÅ | Hämta diagramdata |
| `/removeDots` | POST | Rensa sjökortsdata |

---

## 🍻 BrewFather-integration

| Slutpunkt | Metod | Beskrivning |
|-----------|--------|-------------|
| `/getbf` | FÅ | Lista över tillgängliga BrewFather-recept |
| `/bfRecept` | FÅ | Få receptdetaljer |

---

## 💾 Säkerhetskopiera och återställa

| Slutpunkt | Metod | Beskrivning |
|-----------|--------|-------------|
| `/backup` | FÅ | Skapa systemsäkerhetskopiering |
| `/restore` | POST | Återställ säkerhetskopia |

---

## 📁 Filhantering (FSBrowser)

| Slutpunkt | Metod | Beskrivning |
|-----------|--------|-------------|
| `/redigera` | FÅ | Ladda filredigerare |
| `/status` | FÅ | Hämta systemstatus |
| `/lista` | FÅ | Visa fillista |
| `/redigera` | SÄTT | Skapa ny fil |
| `/redigera` | DELETE | Ta bort fil |
| `/redigera` | POST | Filuppladdning |

---

## 🧩 Statiskt innehåll (cache aktiverat)

| Filer | Beskrivning |
|--------|--------------|
| `/Brautomat.min.css`, `/bootstrap.min.css`, `/bootstrap.min.js`, `/Brautomat.min.js`, `/Brautomat.ttf` | Webtillgångar |
| `/language/deutsch.json`, `/language/english.json`, `/language/norsk.json` | Språkfiler |
| `/lang.js`, `/favicon.ico` | Systemfiler |
| `/info.mp3`, `/success.mp3`, `/warning.mp3`, `/error.mp3` | Ljudfiler för systemmeddelanden |

---
