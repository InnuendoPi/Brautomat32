# ⚙️ API Brautomat32

Tyto dvě funkce JavaScriptu usnadňují komunikaci s Brautomat32.  
Zapouzdřují volání `fetch()`, zpracovávají chyby, rozpoznávání JSON/textu a volitelná uživatelská upozornění (toast/upozornění).

---

## 🢢 apiGET(url, alarm, toast, log)

* @param {string} url – URL koncového bodu
* @param {boolean} alarm - povolit sendAlarm, výchozí hodnota false
* @param {boolean} toast - zpráva toastu o chybě, výchozí hodnota false
* @param {boolean} log – výstup ladění do konzole v prohlížeči, výchozí false
* @returns {Promise\<any\>} – odpověď ze serveru (objekt nebo text JSON)

**Příklad:**  

```js
const misc = wait apiGET('/reqMisc', false, false, true);
console.log(misc);
```

---

## 🔵 apiPOST(url, data, alarm, toast, log, postType, responseType)

* @param {string} url – URL koncového bodu
* @param {Object} data – data k odeslání (json nebo txt)
* @param {boolean} alarm - povolit sendAlarm, výchozí hodnota false
* @param {boolean} toast - zpráva toastu o chybě, výchozí hodnota false
* @param {boolean} log – výstup ladění do konzole v prohlížeči, výchozí false
* @param {"json"|"text"|"formdata"} postType – typ obsahu pro záhlaví, výchozí json
* @param {"json"|"text"} responseType - očekávaná návratová hodnota, výchozí text
* @returns {Slib\<jakýkoli\>} - Odpověď ze serveru

**Příklad:**  

```js
wait apiPOST('/setKettle', { temp: 65, PID: true }, true, false, true);
console.log(misc);
```

---

## 🌐 Obsluha webového serveru Brautomat32

Brautomat koncové body HTTP. Webový server používá CORS a podporuje požadavky **HTTP GET**, **POST**, **PUT** a **DELETE**.

---

## 🏠 Základní koncové body

| Koncový bod | Metoda | Popis |
|-----------|----------|--------------|
| `/` | ZÍSKEJTE | Načte domovskou stránku |
| `/index`, `/index.htm`, `/index.html` | ZÍSKEJTE | Alternativní trasy pro domovskou stránku |

---

## 🌡️ Senzory

| Koncový bod | Metoda | Popis |
|-----------|----------|--------------|
| `/reqSensors?id=${sensorid}` | ZÍSKEJTE | Vrátí seznam všech senzorů |
| `/setSensor?id=${sensorid}` | PŘÍSPĚVEK | Přidá nový senzor nebo upraví stávající |
| `/delSensor?id=${sensorid}` | PŘÍSPĚVEK | Vymaže senzor |
| `/reqSearchSensorAddresses?id=${sensorid}` | ZÍSKEJTE | Vyhledá dostupné adresy senzorů |
| `/senkal` | PŘÍSPĚVEK | Provádí kalibraci snímače |
| `/setSenErr?id=${sensorid}` | PŘÍSPĚVEK | Nastavuje chybový stav snímače (ladit) |

| senzorický | Popis |
|-----------|----------|
| -1 | načte všechny senzory |
| 0 - 2 | ID snímače |

**Příklad:**  

```js
const data = wait apiGET(`/reqSensors?id=0`);
console.log(data);
```

---

## ⚙️ Herci

| Koncový bod | Metoda | Popis |
|-----------|----------|--------------|
| `/reqActors?id=${actorid}` | ZÍSKEJTE | Vrátí seznam všech aktérů |
| `/setActor?id=${actorid}` | PŘÍSPĚVEK | Vytvoří nebo upraví herce |
| `/delActor?id=${actorid}` | PŘÍSPĚVEK | Smaže herce |
| `/actorPower?id=${actorid}` | PŘÍSPĚVEK | Spíná výkon pohonu |
| `/actorPWM?id=${actorid}` | PŘÍSPĚVEK | Nastavuje hodnotu PWM pohonu |

| herec | Popis |
|-----------|----------|
| -1 | načte všechny aktéry |
| 0–9 | ID ovladače |

**Příklad:**  

```js
const data = wait apiGET(`/reqActors?id=0`);
console.log(data);
```

---

## 🔥 Rychlovarná konvice

| Koncový bod | Metoda | Popis |
|-----------|----------|--------------|
| `/reqKettle?id=${kettleid}` | ZÍSKEJTE | Vrací aktuální data kotle |
| `/reqKettlePID?id=${kettleid}` | ZÍSKEJTE | Dotaz na parametry PID |
| `/setKettle?id=${kettleid}` | PŘÍSPĚVEK | Změnit údaje kotle |
| `/setKettlePID?id=${kettleid}` | PŘÍSPĚVEK | PID změna parametru |
| `/handlePower?id=${kettleid}` | PŘÍSPĚVEK | Povolit/zakázat výkon |

| kettleid | Popis |
|-----------|----------|
| 0 | Rychlovarná konvice |
| 1 | Varná konvice |
| 2 | LDS |
| 3 | Fermentor |

**Příklad:**  

```js
const data = wait apiGET(`/reqKettle?id=0`);
console.log(data);
```

---

## 📈 Profily

| Koncový bod | Metoda | Popis |
|-----------|----------|--------------|
| `/setProfile` | PŘÍSPĚVEK | Vytvořit nebo změnit nový profil |
| `/changeProfile?id=${kettleid}&pname=${pname}` | PŘÍSPĚVEK | Přepnout aktivní profil |
| `/delProfile?pname=${pname}` | PŘÍSPĚVEK | Smazat profil |

| kettleid | Popis |
|-----------|----------|
| 0 | Rychlovarná konvice |
| 1 | Varná konvice |
| 2 | LDS |
| 3 | Fermentor |
| jméno | Jméno profilu |

**Příklad:**  

```js
const data = wait apiGET(`/reqKettle?type=0`);
console.log(data);
```

---

## 🍺 Správa vaření / receptů

| Koncový bod | Metoda | Popis |
|-----------|----------|--------------|
| `/setSud` | PŘÍSPĚVEK | Konfigurace stávajícího vaření |
| `/setSudNew` | PŘÍSPĚVEK | Vytvořit nový nápoj |
| `/setSudRen` | PŘÍSPĚVEK | Přejmenovat Sud |
| `/setSudCopy` | PŘÍSPĚVEK | Kopírovat Sud |
| `/setSudCha` | PŘÍSPĚVEK | Změna vaření |
| `/delSud` | PŘÍSPĚVEK | Smazat vařit |
| `/reqSud` | ZÍSKEJTE | Získat sud parametry |
| `/reqSudname` | ZÍSKEJTE | Získejte aktuální název piva |
| `/reqBrauStart` | PŘÍSPĚVEK | Spusťte proces vaření |

---

## ⚙️ Různé / Obecná nastavení

| Koncový bod | Metoda | Popis |
|-----------|----------|--------------|
| `/reboot` | PŘÍSPĚVEK | Restartujte zařízení |
| `/reqMisc` | ZÍSKEJTE | Všeobecné systémové informace |
| `/reqVis` | ZÍSKEJTE | Získat data vizualizace |
| `/reqMiscAlert` | ZÍSKEJTE | Upozornění na dotaz |
| `/reqBreakAlert` | ZÍSKEJTE | Dotaz na varování před varem/přerušením |
| `/setMisc` | PŘÍSPĚVEK | Změnit obecná nastavení |
| `/setMiscLang` | PŘÍSPĚVEK | Nastavit jazyk |
| `/rezimp` | PŘÍSPĚVEK | Import recept |
| `/setMash` | PŘÍSPĚVEK | Nastavit plán kaše |
| `/startHTTPUpdate` | PŘÍSPĚVEK | Spustit aktualizaci firmwaru |
| `/setFerm` | PŘÍSPĚVEK | Nastavení parametrů fermentace |

---

## ▶️ Ovládací prvky

| Koncový bod | Metoda | Popis |
|-----------|----------|--------------|
| `/Btn-Power` | PŘÍSPĚVEK | Spouštěcí tlačítko |
| `/btn-break` | PŘÍSPĚVEK | Tlačítko spuštění pauzy |
| `/Btn-Play` | PŘÍSPĚVEK | Spouštěcí tlačítko |
| `/Btn-Další-krok` | PŘÍSPĚVEK | Další krok |
| `/Btn-Prev-Step` | PŘÍSPĚVEK | Předchozí krok |
| `/Btn-Edit` | PŘÍSPĚVEK | Aktivujte režim úprav |
| `/manpow` | PŘÍSPĚVEK | Ovládání ručního napájení |
| `/eraseFlash` | PŘÍSPĚVEK | Vymazat flash paměť |

---

## 📡 Server odeslané události (SSE)

| Koncový bod | Metoda | Popis |
|-----------|----------|--------------|
| `/kanál` | ZÍSKEJTE | Otevřít kanál SSE |
| `/startSSE` | ZÍSKEJTE | Spustí připojení SSE |
| `/checkAliveSSE` | ZÍSKEJTE | Kontroluje aktivní připojení SSE |
| `/reloadMashSSE` | ZÍSKEJTE | Znovu načte data mash |
| `/jazyk` | ZÍSKEJTE | Získat jazykový soubor |

---

## 📊 Graf / grafová data

| Koncový bod | Metoda | Popis |
|-----------|----------|--------------|
| `/getDots` | ZÍSKEJTE | Získat data grafu |
| `/removeDots` | PŘÍSPĚVEK | Vymazat data grafu |

---

## 🍻 Integrace BrewFather

| Koncový bod | Metoda | Popis |
|-----------|----------|--------------|
| `/getbf` | ZÍSKEJTE | Seznam dostupných receptů BrewFather |
| `/bfRecipe` | ZÍSKEJTE | Získejte podrobnosti o receptu |

---

## 💾 Zálohování a obnovení

| Koncový bod | Metoda | Popis |
|-----------|----------|--------------|
| `/záloha` | ZÍSKEJTE | Vytvořit zálohu systému |
| `/obnovit` | PŘÍSPĚVEK | Obnovit zálohu |

---

## 📁 Správa souborů (FSBrowser)

| Koncový bod | Metoda | Popis |
|-----------|----------|--------------|
| `/edit` | ZÍSKEJTE | Načíst editor souborů |
| `/stav` | ZÍSKEJTE | Získat stav systému |
| `/seznam` | ZÍSKEJTE | Zobrazit seznam souborů |
| `/edit` | PUT | Vytvořit nový soubor |
| `/edit` | VYMAZAT | Smazat soubor |
| `/edit` | PŘÍSPĚVEK | Nahrání souboru |

---

## 🧩 Statický obsah (povolená mezipaměť)

| Soubory | Popis |
|----------|---------------|
| `/Brautomat.min.css`, `/bootstrap.min.css`, `/bootstrap.min.js`, `/Brautomat.min.js`, `/Brautomat.ttf` | Webová aktiva |
| `/language/deutsch.json`, `/language/english.json`, `/language/norsk.json` | Jazykové soubory |
| `/lang.js`, `/favicon.ico` | Systémové soubory |
| `/info.mp3`, `/success.mp3`, `/warning.mp3`, `/error.mp3` | Zvukové soubory pro systémové zprávy |

---
