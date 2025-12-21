# ⚙️ API Brautomat32

Queste due funzioni Javascript facilitano la comunicazione con il Brautomat32.  
Incapsulano le chiamate `fetch()`, gestiscono errori, riconoscimento JSON/testo e notifiche utente opzionali (toast/alert).

---

## 🟢 apiGET(url, allarme, toast, log)

* @param {string} URL: URL dell'endpoint
* @param {boolean} alert - abilita sendAlarm, default false
* @param {boolean} toast - messaggio di avviso popup in caso di errore, default false
* @param {boolean} log - debug dell'output sulla console nel browser, default false
* @returns {Promise\<any\>} - risposta dal server (oggetto JSON o testo)

**Esempio:**  

```js
const misc = attendono apiGET('/reqMisc', false, false, true);
console.log(varie);
```

---

## 🔵 apiPOST(url, dati, allarme, toast, log, postType, rispostaType)

* @param {string} URL: URL dell'endpoint
* @param {Object} data - dati da inviare (json o txt)
* @param {boolean} alert - abilita sendAlarm, default false
* @param {boolean} toast - messaggio di avviso popup in caso di errore, default false
* @param {boolean} log - debug dell'output sulla console nel browser, default false
* @param {"json"|"text"|"formdata"} postType - tipo di contenuto per l'intestazione, json predefinito
* @param {"json"|"text"} ResponseType - valore restituito previsto, testo predefinito
* @returns {Promise\<any\>} - Risposta dal server

**Esempio:**  

```js
attendono apiPOST('/setKettle', { temp: 65, PID: true }, true, false, true);
console.log(varie);
```

---

## 🌐 Gestore WebServer Braautomat32

Brautomat Endpoint HTTP. Il server Web utilizza CORS e supporta le richieste **HTTP GET**, **POST**, **PUT** e **DELETE**.

---

## 🏠 Endpoint di base

| Punto finale | Metodo | Descrizione |
|-----------|----------|--------------|
| `/` | OTTIENI | Carica la home page |
| `/index`, `/index.htm`, `/index.html` | OTTIENI | Percorsi alternativi per la homepage |

---

## 🌡️ Sensori

| Punto finale | Metodo | Descrizione |
|-----------|----------|--------------|
| `/reqSensors?id=${sensorid}` | OTTIENI | Restituisce un elenco di tutti i sensori |
| `/setSensor?id=${sensorid}` | POST | Aggiunge un nuovo sensore o ne modifica uno esistente |
| `/delSensor?id=${sensoride}` | POST | Elimina un sensore |
| `/reqSearchSensorAddresses?id=${sensorid}` | OTTIENI | Cerca gli indirizzi dei sensori disponibili |
| `/senkal` | POST | Esegue la calibrazione del sensore |
| `/setSenErr?id=${sensoride}` | POST | Imposta lo stato di errore del sensore (debug) |

| sensoriale | Descrizione |
|-----------|----------|
| -1 | recupera tutti i sensori |
| 0 - 2| ID sensore |

**Esempio:**  

```js
const data = attendono apiGET(`/reqSensors?id=0`);
console.log(dati);
```

---

## ⚙️ Attori

| Punto finale | Metodo | Descrizione |
|-----------|----------|--------------|
| `/reqActors?id=${actorid}` | OTTIENI | Restituisce un elenco di tutti gli attori |
| `/setActor?id=${actorid}` | POST | Crea o modifica un attore |
| `/delActor?id=${actorid}` | POST | Elimina un attore |
| `/actorPower?id=${actorid}` | POST | Commuta la potenza di un attuatore |
| `/actorPWM?id=${actorid}` | POST | Imposta il valore PWM di un attuatore |

| attore | Descrizione |
|-----------|----------|
| -1 | recupera tutti gli attori |
| 0 - 9 | Identificativo attuatore |

**Esempio:**  

```js
dati const = attendono apiGET(`/reqActors?id=0`);
console.log(dati);
```

---

## 🔥 Bollitore

| Punto finale | Metodo | Descrizione |
|-----------|----------|--------------|
| `/reqKettle?id=${kettleid}` | OTTIENI | Restituisce i dati attuali della caldaia |
| `/reqKettlePID?id=${kettleid}` | OTTIENI | Interroga i parametri PID |
| `/setKettle?id=${kettleid}` | POST | Modifica dati caldaia |
| `/setKettlePID?id=${kettleid}` | POST | PID modifica parametro |
| `/handlePower?id=${kettleid}` | POST | Abilita/Disabilita prestazioni |

| bollitoreide | Descrizione |
|-----------|----------|
| 0| Bollitore |
| 1| Bollitore |
| 2| SSL |
| 3| Fermentatore |

**Esempio:**  

```js
const dati = attendono apiGET(`/reqKettle?id=0`);
console.log(dati);
```

---

## 📈 Profili

| Punto finale | Metodo | Descrizione |
|-----------|----------|--------------|
| `/setProfile` | POST | Crea o modifica un nuovo profilo |
| `/changeProfile?id=${kettleid}&pname=${pname}` | POST | Cambia profilo attivo |
| `/delProfile?pname=${pname}` | POST | Elimina profilo |

| bollitoreide | Descrizione |
|-----------|----------|
| 0| Bollitore |
| 1| Bollitore |
| 2| SSL |
| 3| Fermentatore |
| pnome | Nome del profilo |

**Esempio:**  

```js
dati const = attendono apiGET(`/reqKettle?type=0`);
console.log(dati);
```

---

## 🍺Gestione preparazioni/ricette

| Punto finale | Metodo | Descrizione |
|-----------|----------|--------------|
| `/setSud` | POST | Configura la birra esistente |
| `/setSudNew` | POST | Crea nuova birra |
| `/setSudRen` | POST | Rinomina Sud |
| `/setSudCopy` | POST | Copia Sud |
| `/setSudCha` | POST | Cambia birra |
| `/delSud` | POST | Elimina birra |
| `/reqSud` | OTTIENI | Ottieni i parametri sud |
| `/reqSudnome` | OTTIENI | Ottieni il nome attuale della birra |
| `/reqBrauStart` | POST | Avviare il processo di preparazione della birra |

---

## ⚙️ Impostazioni varie/generali

| Punto finale | Metodo | Descrizione |
|-----------|----------|--------------|
| `/reboot` | POST | Riavviare il dispositivo |
| `/reqMisc` | OTTIENI | Informazioni generali sul sistema |
| `/reqVis` | OTTIENI | Ottieni dati di visualizzazione |
| `/reqMiscAlert` | OTTIENI | Avvisi di query |
| `/reqBreakAlert` | OTTIENI | Interroga gli avvisi di ebollizione/rottura |
| `/setMisc` | POST | Modifica le impostazioni generali |
| `/setMiscLang` | POST | Imposta lingua |
| `/rezimp` | POST | Importa ricetta |
| `/setMash` | POST | Imposta il piano di ammostamento |
| `/startHTTPUpdate` | POST | Avvia aggiornamento firmware |
| `/setFerm` | POST | Impostare i parametri di fermentazione |

---

## ▶️ Controlli

| Punto finale | Metodo | Descrizione |
|-----------|----------|--------------|
| `/Btn-Power` | POST | Attivare il pulsante di accensione |
| `/btn-break` | POST | Attiva il pulsante di pausa |
| `/Btn-Play` | POST | Attiva il pulsante di avvio |
| `/Btn-Passaggio-successivo` | POST | Passaggio successivo |
| `/Btn-Passaggio-Prec` | POST | Passaggio precedente |
| `/Btn-Modifica` | POST | Attiva la modalità modifica |
| `/manpow` | POST | Controllo della potenza manuale |
| `/eraseFlash` | POST | Cancella memoria flash |

---

## 📡 Eventi inviati dal server (SSE)

| Punto finale | Metodo | Descrizione |
|-----------|----------|--------------|
| `/canale` | OTTIENI | Apri il canale SSE |
| `/startSSE` | OTTIENI | Avvia la connessione SSE |
| `/checkAliveSSE` | OTTIENI | Controlla le connessioni SSE attive |
| `/reloadMashSSE` | OTTIENI | Ricarica i dati di mash |
| `/lingua` | OTTIENI | Ottieni il file della lingua |

---

## 📊 Grafico/dati del grafico

| Punto finale | Metodo | Descrizione |
|-----------|----------|--------------|
| `/getDots` | OTTIENI | Ottieni dati cartografici |
| `/removeDots` | POST | Cancella dati cartografici |

---

## 🍻 Integrazione BrewFather

| Punto finale | Metodo | Descrizione |
|-----------|----------|--------------|
| `/getbf` | OTTIENI | Elenco delle ricette BrewFather disponibili |
| `/bfRicetta` | OTTIENI | Ottieni i dettagli della ricetta |

---

## 💾 Backup e ripristino

| Punto finale | Metodo | Descrizione |
|-----------|----------|--------------|
| `/backup` | OTTIENI | Crea backup di sistema |
| `/ripristina` | POST | Ripristina backup |

---

## 📁 Gestione dei file (FSBrowser)

| Punto finale | Metodo | Descrizione |
|-----------|----------|--------------|
| `/modifica` | OTTIENI | Carica l'editor di file |
| `/stato` | OTTIENI | Ottieni lo stato del sistema |
| `/lista` | OTTIENI | Mostra elenco file |
| `/modifica` | METTERE | Crea nuovo file |
| `/modifica` | ELIMINA | Elimina file |
| `/modifica` | POST | Caricamento file |

---

## 🧩 Contenuto statico (cache abilitata)

| File | Descrizione |
|----------|---------------|
| `/Brautomat.min.css`, `/bootstrap.min.css`, `/bootstrap.min.js`, `/Brautomat.min.js`, `/Brautomat.ttf` | Risorse Web |
| `/lingua/deutsch.json`, `/lingua/english.json`, `/lingua/norsk.json` | File di lingua |
| `/lang.js`, `/favicon.ico` | File di sistema |
| `/info.mp3`, `/success.mp3`, `/warning.mp3`, `/error.mp3` | File audio per i messaggi di sistema |

---
