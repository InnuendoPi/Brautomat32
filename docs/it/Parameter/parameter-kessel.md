# Parametri del piano cottura

## Controllo della temperatura

### Potenza massima

Questo parametro descrive la potenza massima erogata dal piano cottura. Il valore predefinito è 100%. Questo parametro viene utilizzato se sul piano di cottura viene utilizzato un piccolo bollitore con, ad esempio, un volume di 20 litri. Riducendo la potenza si può evitare un riscaldamento troppo rapido e un traboccamento. I parametri "Potenza massima" e "Potenza di transizione" dovrebbero essere ridotti insieme quando si utilizzano bollitori piccoli.

Alla fine di questo capitolo troverai [due esempi per il calcolo della potenza richiesta](https://innuendopi.gitbook.io/brautomat32/info-5/parameter-ggm-ids#berechnung-der-erforderlichen-leistung).

### Delta della temperatura rispetto al target

Questo parametro descrive la differenza rispetto alla temperatura di riposo (setpoint) alla quale il timer dovrebbe avviarsi per un periodo di riposo. Il valore predefinito è 0,3°C. Nel processo di ammostamento, il controller PID consente un controllo molto preciso della temperatura. Una temperatura di riposo viene raggiunta con una precisione di +-0,2°C dal controller PID riducendo l'apporto energetico in modo controllato prima che venga raggiunta la temperatura di riposo. Ridurre l'apporto energetico ha l'effetto collaterale che il passaggio finale per raggiungere la temperatura di riposo richiede più tempo. È proprio qui che entra in gioco il parametro "Delta rispetto al target": se ad esempio si deve raggiungere una temperatura di riposo di 63°C e la temperatura attuale è 62,7°C, il timer di riposo si avvierà con un delta di temperatura rispetto al target di 0,3°C. In relazione al sistema di erogazione individuale, delta può essere utilizzato per evitare un prolungamento indesiderato del tempo di riposo.

### Passaggio alla cottura [°C]

Questo parametro descrive la temperatura alla quale il controller PID dovrebbe rilevare che il mosto sta bollendo. Il valore predefinito è 95°C. Questo parametro non descrive la temperatura alla quale il mosto inizia a bollire. Questo parametro descrive la temperatura alla quale il Brautomat disattiva il controller PID e controlla il piano cottura con una potenza specificata "potenza di transizione". A differenza delle temperature di riposo, lo scopo della cottura non è raggiungere e mantenere con precisione la temperatura, ma piuttosto cuocere senza intoppi. Quindi, invece di ridurre la potenza, il piano cottura a induzione viene utilizzato a potenza costante durante la cottura.

### Potenza dalla transizione [%]

Questo parametro descrive la potenza erogata dal piano cottura dal passaggio della temperatura alla cottura. Il valore predefinito è 100%. Il parametro "Transizione alla cottura" è stato utilizzato per impostare una temperatura alla quale il controller PID è disattivato. Il parametro “Potenza dalla transizione” ora specifica la potenza di uscita fissa per il piano cottura. Se viene utilizzato un bollitore con un volume di 35 litri o più, il valore predefinito del 100% è una scelta adatta. Nelle cucine dei birrifici con piccoli bollitori, l'approvvigionamento energetico al 100% può causare traboccamento. In questo caso l'apporto energetico massimo può essere ridotto, ad esempio, al 75% utilizzando questo parametro.

### Disattiva PID per la cottura [on/off]

Questo parametro determina il comportamento del controller PID durante la cottura quando la temperatura effettiva è superiore alla temperatura target. Esempio: nel piano di ammostamento la temperatura di cottura è stata impostata su 98°C. Il parametro "Potenza dalla transizione" disattiva il calcolo del PID dalla temperatura "Transizione all'ebollizione". Se il parametro "Disattiva PID per l'ebollizione" è attivato (predefinito), il regolatore PID rimane spento anche al di sopra della temperatura nominale di 98°C del piano di ammostamento e viene utilizzata la potenza del parametro "Potenza dalla transizione". Questo parametro è attivato di default e abilita la cottura rolling.

Se il parametro "Disattivare PID per la cottura" non è attivato, la potenza necessaria viene calcolata dal regolatore PID una volta raggiunta la temperatura target (qui 98°C). La prestazione calcolata è superiore all'obiettivo-La temperatura è 0%. Se necessario, il piano cottura si spegne e impedisce il traboccamento.

### Prestazioni errore sensore [0-100%]

Se si verifica un errore del sensore, ad esempio un sensore non è collegato o è difettoso, è possibile regolare la potenza del piano cottura per gestire questo errore. Un valore del 100% ignora l'errore del sensore.

Se la potenza è impostata sullo 0% in caso di errore del sensore, il Brautomat mette in pausa il processo di ammostamento. Il piano cottura è spento. Una volta avviato il timer di riposo, il timer viene fermato.

Il Brautomat avvia la gestione degli errori dopo 3 valori errati consecutivi del sensore. I sensori vengono interrogati ogni 2000ms circa. Ciò significa che ca. Trascorrono 6 secondi tra l'errore del sensore del messaggio di avviso popup e l'inizio della gestione dell'errore.

Se un sensore difettoso riporta nuovamente i valori corretti del sensore, il Brautomat continua automaticamente il processo di ammostamento.

_Nota: il massimo. Il parametro di alimentazione non viene superato dal parametro Errore sensore di accensione. Ad esempio, se Max. Power IDS è stato configurato al 75% e Power in caso di errore del sensore al 100%, quindi la potenza di uscita massima effettiva è del 75% anche in caso di errore del sensore._

## PID Direttore

### Intervallo (SampleTime)

Questo parametro indica l'intervallo di tempo in cui viene calcolata la potenza richiesta. Il valore predefinito è 3000 ms. L'intervallo viene utilizzato per il calcolo del PID e nel AutoTune. Nelle cucine dei birrifici con volumi ridotti può essere vantaggioso un intervallo più breve. Quanto più piccolo è l'intervallo, tanto più frequentemente viene calcolata la potenza richiesta. Ciò porta ad un maggiore utilizzo della griglia automatica. Intervallo di valori 1000 - 7000 ms.

### PID Algoritmo

Ci sono tre opzioni tra cui scegliere

* modalità manuale PID: questa selezione consente l'utilizzo dei propri valori Kp, Ki e Kd
* Modalità IDS PID: questa selezione calcola i valori di Kp, Ki e Kd per i piani a induzione GGM IDS in base ai valori Ku e Pu del processo AutoTune
* Modalità Relè PID: questa selezione calcola i valori di Kp, Ki e Kd per i piani cottura basati su relè utilizzando i valori Ku e Pu del processo AutoTune

## AutoTune

### AutoTune banda di rumore

Questo parametro viene utilizzato per rilevare valori estremi (Max, Min). AutoTune banda di rumore indica la variazione minima rispetto al valore misurato precedente che deve essere presente per riconoscere un nuovo valore estremo. Il valore predefinito per GGM IDS è 0,2. Per una cucina rifusa tramite relè o SSR, il valore predefinito è 0,5. Intervallo di valori: 0,1 - 1,0

### AutoTune Serie di dati (lookback)

Questo parametro specifica quanti valori misurati devono essere considerati per determinare i valori estremi. Il valore predefinito è 50 letture. Si prega di notare che è possibile configurare un massimo di 100 valori misurati. Per bollitori molto ben isolati termicamente, l'aumento della serie di dati a 100 valori misurati può migliorare il rilevamento di valori estremi nella fase di raffreddamento del processo AutoTune.

### AutoTune debug

Questo interruttore attiva il protocollo AutoTune. Il registro fornisce informazioni se il processo AutoTune non può essere completato con successo. Se il debug AutoTune è attivato, il protocollo è disponibile anche durante la preparazione.

_Questi 10 parametri devono essere impostati individualmente per ciascun sistema di erogazione. I parametri possono essere modificati durante un processo di ammostamento. Con un test di funzionamento con una quantità tipica di acqua, i parametri possono essere facilmente determinati prima di una giornata di produzione della birra._

## Profili

Il Brautomat può gestire i profili hardware. I profili possono essere utilizzati se sono presenti caldaie diverse. Gli utenti con bollitori di diverse dimensioni possono utilizzare i profili per selezionare il bollitore per il giorno di produzione della birra invece di dover reinserire manualmente tutti i parametri. Un profilo hardware contiene tutte le impostazioni di una caldaia.

I profili vengono salvati nella cartella /Profiles. I profili consentono un'operazione semplice e velocePassare da una caldaia all'altra. La funzione Salva crea un file di profilo con i parametri sopra indicati, mentre la funzione Elimina rimuove il file di profilo dalla memoria flash.

Il profilo predefinito all'avvio della macchina per il pane è sempre l'ultimo profilo selezionato.

## Calcolo della potenza richiesta

_Il paragrafo seguente descrive un argomento facoltativo._

Durante l'ammostamento si desidera un aumento della temperatura di ammostamento di 1°C al minuto. La potenza P richiesta del GGM IDS può essere calcolata come segue:

potenza richiesta P = m[kg] * 75\
performance esistente del GGM IDS P = 3500\
Fattore in percentuale = prestazione richiesta: prestazione esistente

### Esempio 1

Nel primo esempio si prevede un riempimento di 9kg e un versamento principale di 35l. Ciò si traduce in una massa totale di

```json
m = 9 + 35 = 44
```

Sostituiamo la massa m = 44 nella formula semplificata:

```json
P = 44 * 75 = 3300
```

Per riscaldare un volume di 44 kg di 1°C al minuto sono necessari circa 3300 W/min. Se il GGM IDS viene utilizzato con una potenza del 100%, ovvero 3500 W, la differenza di temperatura di 1°C nel mosto viene raggiunta in meno di 60 secondi. Per raggiungere l'obiettivo di un aumento della temperatura di 1°C nel mosto al minuto, la prestazione massima del GGM IDS deve essere ridotta:

```json
3300: 3500 = 0,94 che corrisponde al 94%
```

Il GGM IDS dovrebbe essere utilizzato con ca. Potenza 94-95% (funzione speciale IDS:94).

### Esempio 2

Nel secondo esempio si effettua un riempimento di 5,9 kg e un versamento principale di 26,5 l. La massa totale è di 32,4 kg.

```json
m = 5,9 + 26,5 = 32,4
```

Sostituiamo la massa m = 32,4 nella formula semplificata:

```json
P = 32,4 * 75 = 2430
2430: 3500 = 0,69
```

Sono necessari circa 2430 W/min per riscaldare un volume di 32,4 kg di 1°C al minuto. Il GGM IDS dovrebbe essere utilizzato con ca. Potenza 69-70% (funzione speciale IDS:70).

### Messa di semplificazione * 75?

```json
P = m[kg] * c * T / (t * w)
```

m corrisponde alla massa del getto principale + riempimento\
c corrisponde alla capacità termica specifica del mosto. Viene utilizzato il valore 3600 (unità Joule/(kg * °C))\
T corrisponde alla differenza di temperatura. Usiamo 1°C di differenza\
t corrisponde al tempo. Inseriamo 60 secondi nell'equazione come tempo\
w il rendimento di induzione (80-90%). Nell'equazione viene inserito il valore 0,8

```json
c*T/(t*w) = 3600*1/(60*0,8) = 75
```

Con questa semplificazione otteniamo il valore 75.

### capacità termica specifica

La capacità termica specifica qui utilizzata 3600 ha una tolleranza di errore di circa il 2% (a seconda della temperatura e dell'estratto). La farina di malto ha una capacità termica di 1570 J/(kg*°C), l'acqua ha una capacità termica di 4190 J/(kg*°C) nell'intervallo di temperatura 50-80°C. Supponendo che il contenuto di acqua nella farina di malto sia del 6%: (figure dall'esempio 1)

```json
9 * 94% * 1570 + (35 + 9 * 6%) * 4190 = 8,97 * 1,57 + 35,54 * 4,19 = 14,08 + 148,91 = 13282,2 + 148912,6 = 162194,8 / 44 = 3686,25 J per kg per grado Celsius
```

Vedi anche [Braumagazin](https://braumagazin.de/article/berechnungen-in-der-brauerei/)
