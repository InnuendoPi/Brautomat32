# ⚙️ API Brautomat32

Disse to Javascript-funksjonene gjør kommunikasjonen med Brautomat32 enklere.  
De innkapsler `fetch()`-kall, håndterer feil, JSON/tekstgjenkjenning og valgfrie brukervarsler (toast/alert).

---

## apiGET(url, alarm, toast, logg)

* @param {string} url – Endpoint URL
* @param {boolean} alarm - aktiver sendAlarm, standard false
* @param {boolean} toast - toast-melding ved feil, standard usann
* @param {boolean} logg - feilsøk utdata til konsoll i nettleseren, standard false
* @returns {Promise\<any\>} - svar fra server (JSON-objekt eller tekst)

**Eksempel:**  

``` js
const misc = await apiGET('/reqMisc', false, false, true);
console.log(diverse);
```

---

## 🔵 apiPOST(url, data, alarm, toast, log, postType, responseType)

* @param {string} url – Endpoint URL
* @param {Object} data - data som skal sendes (json eller txt)
* @param {boolean} alarm - aktiver sendAlarm, standard false
* @param {boolean} toast - toast-melding ved feil, standard usann
* @param {boolean} logg - feilsøk utdata til konsoll i nettleseren, standard false
* @param {"json"|"text"|"formdata"} postType - innholdstype for header, standard json
* @param {"json"|"text"} responseType - forventet returverdi, standardtekst
* @returns {Promise\<any\>} - Svar fra server

**Eksempel:**  

``` js
await apiPOST('/setKettle', { temp: 65, PID: sant }, sant, usant, sant);
console.log(diverse);
```

---

## 🌐 WebServer Handler Brautomat32

Brautomat HTTP-endepunkter. Nettserveren bruker CORS og støtter **HTTP GET**, **POST**, **PUT** og **DELETE**-forespørsler.

---

## 🏠 Basisendepunkter

| Endepunkt | Metode | Beskrivelse |
|------------|--------|-------------|
| `/` | FÅ | Laster hjemmesiden |
| `/index`, `/index.htm`, `/index.html` | FÅ | Alternative ruter for hjemmesiden |

---

## 🌡️ Sensorer

| Endepunkt | Metode | Beskrivelse |
|------------|--------|-------------|
| `/reqSensors?id=${sensorid}` | FÅ | Returnerer en liste over alle sensorer |
| `/setSensor?id=${sensorid}` | INNLEGG | Legger til en ny sensor eller endrer en eksisterende |
| `/delSensor?id=${sensorid}` | INNLEGG | Sletter en sensor |
| `/reqSearchSensorAddresses?id=${sensorid}` | FÅ | Søker etter tilgjengelige sensoradresser |
| `/senkal` | INNLEGG | Utfører sensorkalibrering |
| `/setSenErr?id=${sensorid}` | INNLEGG | Angir sensorfeilstatus (debug) |

| sensorid | Beskrivelse |
|-----------|--------|
| -1 | henter alle sensorer |
| 0 - 2 | Sensor ID |

**Eksempel:**  

``` js
const data = await apiGET(`/reqSensors?id=0`);
console.log(data);
```

---

## ⚙️ Skuespillere

| Endepunkt | Metode | Beskrivelse |
|------------|--------|-------------|
| `/reqActors?id=${actorid}` | FÅ | Returnerer en liste over alle aktører |
| `/setActor?id=${actorid}` | INNLEGG | Oppretter eller endrer en skuespiller |
| `/delActor?id=${actorid}` | INNLEGG | Sletter en skuespiller |
| `/actorPower?id=${actorid}` | INNLEGG | Bytter strømmen til en aktuator |
| `/actorPWM?id=${actorid}` | INNLEGG | Stiller inn PWM-verdien til en aktuator |

| actorid | Beskrivelse |
|-----------|--------|
| -1 | henter alle aktører |
| 0 - 9 | Aktuator ID |

**Eksempel:**  

``` js
const data = await apiGET(`/reqActors?id=0`);
console.log(data);
```

---

## 🔥 Vannkoker

| Endepunkt | Metode | Beskrivelse |
|------------|--------|-------------|
| `/reqKettle?id=${kettleid}` | FÅ | Returnerer gjeldende kjeledata |
| `/reqKettlePID?id=${kettleid}` | FÅ | Spørr PID parametere |
| `/setKettle?id=${kettleid}` | INNLEGG | Endre kjeledata |
| `/setKettlePID?id=${kettleid}` | INNLEGG | PID parameterendring |
| `/handlePower?id=${kettleid}` | INNLEGG | Aktiver/deaktiver ytelse |

| kettleid | Beskrivelse |
|-----------|--------|
| 0 | Vannkoker |
| 1 | Bryggekjele |
| 2 | LDS |
| 3 | Fermenteringsbeholder |

**Eksempel:**  

``` js
const data = await apiGET(`/reqKettle?id=0`);
console.log(data);
```

---

## 📈 Profiler

| Endepunkt | Metode | Beskrivelse |
|------------|--------|---------------|
| `/setProfile` | INNLEGG | Opprett eller endre en ny profil |
| `/changeProfile?id=${kettleid}&pname=${pname}` | INNLEGG | Bytt aktiv profil |
| `/delProfile?pname=${pname}` | INNLEGG | Slett profil |

| kettleid | Beskrivelse |
|-----------|--------|
| 0 | Vannkoker |
| 1 | Bryggekjele |
| 2 | LDS |
| 3 | Fermenteringsbeholder |
| pname | Profilnavn |

**Eksempel:**  

``` js
const data = await apiGET(`/reqKettle?type=0`);
console.log(data);
```

---

## 🍺 Brygge / oppskriftshåndtering

| Endepunkt | Metode | Beskrivelse |
|------------|--------|-------------|
| `/setSud` | INNLEGG | Konfigurer eksisterende brygg |
| `/setSudNew` | INNLEGG | Opprett nytt brygg |
| `/setSudRen` | INNLEGG | Gi nytt navn til Sud |
| `/setSudCopy` | INNLEGG | Kopier Sud |
| `/setSudCha` | INNLEGG | Endre brygge |
| `/delSud` | INNLEGG | Slett brygg |
| `/reqSud` | FÅ | Få sud parametere |
| `/reqSudname` | FÅ | Få nåværende bryggnavn |
| `/reqBrauStart` | INNLEGG | Start bryggeprosessen |

---

## ⚙️ Diverse / Generelle innstillinger

| Endepunkt | Metode | Beskrivelse |
|------------|--------|-------------|
| `/reboot` | INNLEGG | Start enheten på nytt |
| `/reqMisc` | FÅ | Generell systeminformasjon |
| `/reqVis` | FÅ | Få visualiseringsdata |
| `/reqMiscAlert` | FÅ | Spørringsvarsler |
| `/reqBreakAlert` | FÅ | Spørr advarsler om koke/brudd |
| `/setMisc` | INNLEGG | Endre generelle innstillinger |
| `/setMiscLang` | INNLEGG | Angi språk |
| `/rezimp` | INNLEGG | Importer oppskrift |
| `/setMash` | INNLEGG | Sett mash plan |
| `/startHTTPUpdate` | INNLEGG | Start fastvareoppdatering |
| `/setFerm` | INNLEGG | Angi gjæringsparametere |

---

## ▶️ Kontroller

| Endepunkt | Metode | Beskrivelse |
|------------|--------|-------------|
| `/Btn-Power` | INNLEGG | Utløser strømknapp |
| `/btn-break` | INNLEGG | Utløs pauseknapp |
| `/Btn-Play` | INNLEGG | Trigger startknapp |
| `/Btn-Next-Step` | INNLEGG | Neste trinn |
| `/Btn-Prev-Step` | INNLEGG | Forrige trinn |
| `/Btn-Rediger` | INNLEGG | Aktiver redigeringsmodus |
| `/manpow` | INNLEGG | Kontroller manuell kraft |
| `/eraseFlash` | INNLEGG | Tøm flash-minne |

---

## 📡 Server sendte hendelser (SSE)

| Endepunkt | Metode | Beskrivelse |
|------------|--------|-------------|
| `/kanal` | FÅ | Åpne SSE-kanal |
| `/startSSE` | FÅ | Starter SSE-tilkobling |
| `/checkAliveSSE` | FÅ | Sjekker aktive SSE-forbindelser |
| `/reloadMashSSE` | FÅ | Laster inn mash-data på nytt |
| `/språk` | FÅ | Hent språkfil |

---

## 📊 Graf/kartdata

| Endepunkt | Metode | Beskrivelse |
|------------|--------|-------------|
| `/getDots` | FÅ | Få kartdata |
| `/removeDots` | INNLEGG | Slett kartdata |

---

## 🍻 BrewFather-integrasjon

| Endepunkt | Metode | Beskrivelse |
|------------|--------|-------------|
| `/getbf` | FÅ | Liste over tilgjengelige BrewFather-oppskrifter |
| `/bfRecipe` | FÅ | Få oppskriftsdetaljer |

---

## 💾 Sikkerhetskopiering og gjenoppretting

| Endepunkt | Metode | Beskrivelse |
|------------|--------|-------------|
| `/backup` | FÅ | Lag systemsikkerhetskopi |
| `/restore` | INNLEGG | Gjenopprett sikkerhetskopi |

---

## 📁 Filbehandling (FSBrowser)

| Endepunkt | Metode | Beskrivelse |
|------------|--------|-------------|
| `/edit` | FÅ | Last inn filredigering |
| `/status` | FÅ | Få systemstatus |
| `/liste` | FÅ | Vis filliste |
| `/edit` | PUT | Opprett ny fil |
| `/edit` | SLETT | Slett fil |
| `/edit` | INNLEGG | Filopplasting |

---

## 🧩 Statisk innhold (cache aktivert)

| Filer | Beskrivelse |
|--------|--------------|
| `/Brautomat.min.css`, `/bootstrap.min.css`, `/bootstrap.min.js`, `/Brautomat.min.js`, `/Brautomat.ttf` | Nettressurser |
| `/language/deutsch.json`, `/language/english.json`, `/language/norsk.json` | Språkfiler |
| `/lang.js`, `/favicon.ico` | Systemfiler |
| `/info.mp3`, `/success.mp3`, `/warning.mp3`, `/error.mp3` | Lydfiler for systemmeldinger |

---
