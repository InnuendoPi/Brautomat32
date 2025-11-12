# ⚙️API Brautomat32

Deze twee Javascript-functies maken de communicatie met de Brautomat32 eenvoudiger.  
Ze omvatten `fetch()`-aanroepen, verwerken fouten, JSON/tekstherkenning en optionele gebruikersmeldingen (toast/alert).

---

## 🟢 apiGET(url, alarm, toast, log)

* @param {string} url - Eindpunt-URL
* @param {boolean} alarm - schakel sendAlarm in, standaard false
* @param {boolean} toast - toastbericht bij fout, standaard onwaar
* @param {boolean} log - debug uitvoer naar console in de browser, standaard false
* @returns {Promise\<any\>} - antwoord van server (JSON-object of tekst)

**Voorbeeld:**  

```js
const misc = wacht op apiGET('/reqMisc', false, false, true);
console.log(diversen);
```

---

## 🔵apiPOST(url, data, alarm, toast, log, postType, responseType)

* @param {string} url - Eindpunt-URL
* @param {Object} data - gegevens die moeten worden verzonden (json of txt)
* @param {boolean} alarm - schakel sendAlarm in, standaard false
* @param {boolean} toast - toastbericht bij fout, standaard onwaar
* @param {boolean} log - debug uitvoer naar console in de browser, standaard false
* @param {"json"|"text"|"formdata"} postType - inhoudstype voor header, standaard json
* @param {"json"|"text"} responseType - verwachte retourwaarde, standaardtekst
* @returns {Promise\<any\>} - Reactie van server

**Voorbeeld:**  

```js
await apiPOST('/setKettle', {temp: 65, PID: true }, true, false, true);
console.log(diversen);
```

---

## 🌐 Webserverhandler Brautomat32

Brautomat HTTP-eindpunten. De webserver gebruikt CORS en ondersteunt **HTTP GET**-, **POST**-, **PUT**- en **DELETE**-verzoeken.

---

## 🏠 Basiseindpunten

| Eindpunt | Werkwijze | Beschrijving |
|-----------|----------|------------|
| `/` | KRIJG | Laadt de startpagina |
| `/index`, `/index.htm`, `/index.html` | KRIJG | Alternatieve routes voor de homepage |

---

## 🌡️ Sensoren

| Eindpunt | Werkwijze | Beschrijving |
|-----------|----------|------------|
| `/reqSensors?id=${sensorid}` | KRIJG | Retourneert een lijst met alle sensoren |
| `/setSensor?id=${sensorid}` | POST | Voegt een nieuwe sensor toe of wijzigt een bestaande |
| `/delSensor?id=${sensorid}` | POST | Verwijdert een sensor |
| `/reqSearchSensorAddresses?id=${sensorid}` | KRIJG | Zoekt beschikbare sensoradressen |
| `/senkal` | POST | Voert sensorkalibratie uit |
| `/setSenErr?id=${sensorid}` | POST | Stelt de sensorfoutstatus in (debug) |

| sensoride | Beschrijving |
|-----------|----------|
| -1 | haalt alle sensoren op |
| 0 - 2 | Sensor-ID |

**Voorbeeld:**  

```js
const data = wacht op apiGET(`/reqSensors?id=0`);
console.log(gegevens);
```

---

## ⚙️ Acteurs

| Eindpunt | Werkwijze | Beschrijving |
|-----------|----------|------------|
| `/reqActors?id=${actorid}` | KRIJG | Geeft een lijst met alle acteurs terug |
| `/setActor?id=${actorid}` | POST | Creëert of wijzigt een actor |
| `/delActor?id=${actorid}` | POST | Verwijdert een acteur |
| `/actorPower?id=${actorid}` | POST | Schakelt de kracht van een actuator |
| `/actorPWM?id=${actorid}` | POST | Stelt de PWM-waarde van een actor in |

| acteur | Beschrijving |
|-----------|----------|
| -1 | haalt alle acteurs op |
| 0 - 9 | Actuator-ID |

**Voorbeeld:**  

```js
const data = wacht op apiGET(`/reqActors?id=0`);
console.log(gegevens);
```

---

## 🔥Waterkoker

| Eindpunt | Werkwijze | Beschrijving |
|-----------|----------|------------|
| `/reqKettle?id=${kettleid}` | KRIJG | Geeft actuele ketelgegevens terug |
| `/reqKettlePID?id=${kettleid}` | KRIJG | PID-parameters opvragen |
| `/setKettle?id=${kettleid}` | POST | Ketelgegevens wijzigen |
| `/setKettlePID?id=${kettleid}` | POST | PID parameterwijziging |
| `/handlePower?id=${kettleid}` | POST | Prestaties in-/uitschakelen |

| Ketel | Beschrijving |
|-----------|----------|
| 0 | Pureerketel |
| 1 | Brouwketel |
| 2 | LDS |
| 3 | Vergister |

**Voorbeeld:**  

```js
const data = wacht op apiGET(`/reqKettle?id=0`);
console.log(gegevens);
```

---

## 📈 Profielen

| Eindpunt | Werkwijze | Beschrijving |
|-----------|----------|--------------|
| `/setProfiel` | POST | Een nieuw profiel aanmaken of wijzigen |
| `/changeProfile?id=${kettleid}&pname=${pname}` | POST | Actief profiel wijzigen |
| `/delProfile?pname=${pnaam}` | POST | Profiel verwijderen |

| Ketel | Beschrijving |
|-----------|----------|
| 0 | Pureerketel |
| 1 | Brouwketel |
| 2 | LDS |
| 3 | Vergister |
| pnaam | Profielnaam |

**Voorbeeld:**  

```js
const data = wacht op apiGET(`/reqKettle?type=0`);
console.log(gegevens);
```

---

## 🍺 Brouw-/receptbeheer

| Eindpunt | Werkwijze | Beschrijving |
|-----------|----------|------------|
| `/setSud` | POST | Bestaand brouwsel configureren |
| `/setSudNew` | POST | Nieuw brouwsel maken |
| `/setSudRen` | POST | Hernoem Sud |
| `/setSudCopy` | POST | Kopieer Zuid |
| `/setSudCha` | POST | Wijzig brouwsel |
| `/delSud` | POST | Brouwsel verwijderen |
| `/reqSud` | KRIJG | Sud-parameters ophalen |
| `/reqSudname` | KRIJG | Huidige brouwnaam ophalen |
| `/reqBrauStart` | POST | Start het brouwproces |

---

## ⚙️ Overige/algemene instellingen

| Eindpunt | Werkwijze | Beschrijving |
|-----------|----------|------------|
| `/reboot` | POST | Start het apparaat opnieuw |
| `/reqMisc` | KRIJG | Algemene systeeminformatie |
| `/reqVis` | KRIJG | Visualisatiegegevens ophalen |
| `/reqMiscAlert` | KRIJG | Querywaarschuwingen |
| `/reqBreakAlert` | KRIJG | Kook-/breekwaarschuwingen opvragen |
| `/setMisc` | POST | Algemene instellingen wijzigen |
| `/setMiscLang` | POST | Taal instellen |
| `/rezimp` | POST | Recept importeren |
| `/setMash` | POST | Maalplan instellen |
| `/startHTTPUpdate` | POST | Firmware-update starten |
| `/setFerm` | POST | Fermentatieparameters instellen |

---

## ▶️ Bediening

| Eindpunt | Werkwijze | Beschrijving |
|-----------|----------|------------|
| `/Btn-Power` | POST | Aan/uit-knop activeren |
| `/btn-break` | POST | Pauzeknop activeren |
| `/Btn-Play` | POST | Startknop activeren |
| `/Btn-volgende stap` | POST | Volgende stap |
| `/Btn-Vorige-Stap` | POST | Vorige stap |
| `/Btn-Bewerken` | POST | Bewerkingsmodus activeren |
| `/mankracht` | POST | Bediening handmatig vermogen |
| `/eraseFlash` | POST | Flash-geheugen wissen |

---

## 📡 Serververzonden gebeurtenissen (SSE)

| Eindpunt | Werkwijze | Beschrijving |
|-----------|----------|------------|
| `/kanaal` | KRIJG | SSE-kanaal openen |
| `/startSSE` | KRIJG | Start SSE-verbinding |
| `/checkAliveSSE` | KRIJG | Controleert actieve SSE-verbindingen |
| `/reloadMashSSE` | KRIJG | Herlaadt mash-gegevens |
| `/taal` | KRIJG | Taalbestand ophalen |

---

## 📊 Grafiek-/grafiekgegevens

| Eindpunt | Werkwijze | Beschrijving |
|-----------|----------|------------|
| `/getDots` | KRIJG | Grafiekgegevens ophalen |
| `/verwijderDots` | POST | Kaartgegevens wissen |

---

## 🍻 BrewFather-integratie

| Eindpunt | Werkwijze | Beschrijving |
|-----------|----------|------------|
| `/getbf` | KRIJG | Lijst met beschikbare BrewFather-recepten |
| `/bfRecept` | KRIJG | Ontvang receptdetails |

---

## 💾Back-up en herstel

| Eindpunt | Werkwijze | Beschrijving |
|-----------|----------|------------|
| `/back-up` | KRIJG | Systeemback-up maken |
| `/herstellen` | POST | Back-up herstellen |

---

## 📁 Bestandsbeheer (FSBrowser)

| Eindpunt | Werkwijze | Beschrijving |
|-----------|----------|------------|
| `/bewerk` | KRIJG | Bestandseditor laden |
| `/status` | KRIJG | Systeemstatus ophalen |
| `/lijst` | KRIJG | Bestandslijst weergeven |
| `/bewerk` | ZET | Nieuw bestand maken |
| `/bewerk` | VERWIJDEREN | Bestand verwijderen |
| `/bewerk` | POST | Bestand uploaden |

---

## 🧩 Statische inhoud (cache ingeschakeld)

| Bestanden | Beschrijving |
|----------|---------------|
| `/Brautomat.min.css`, `/bootstrap.min.css`, `/bootstrap.min.js`, `/Brautomat.min.js`, `/Brautomat.ttf` | Webmiddelen |
| `/taal/deutsch.json`, `/taal/english.json`, `/taal/norsk.json` | Taalbestanden |
| `/lang.js`, `/favicon.ico` | Systeembestanden |
| `/info.mp3`, `/success.mp3`, `/waarschuwing.mp3`, `/error.mp3` | Audiobestanden voor systeemberichten |

---
