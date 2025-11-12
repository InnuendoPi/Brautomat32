# Risoluzione dei problemi

Consigli e suggerimenti...continua...

## Wi-Fi

La portata WLAN dei microcontrollori ESP è limitata. L'attuale potenza del segnale WLAN viene visualizzata in Sistema -> Ripristina. Più il valore è vicino allo zero, più forte è il segnale. I valori da -50dBm a -75dBm sono molto buoni. Un valore inferiore a -80 dBm è negativo e causerà problemi. Nelle cucine dei birrifici con una potenza del segnale WiFi debole, l'intervallo PID può essere aumentato, ad esempio, a 7000 ms per ridurre la quantità di dati. Se la potenza del segnale è debole, è necessario utilizzare solo un browser attivo (vedere Eventi inviati dal server di seguito). È importante una posizione adatta per il Brautomat nella WLAN (o un ripetitore aggiuntivo). Una buona potenza del segnale non necessariamente, ma nella maggior parte dei casi, si traduce in una velocità di trasferimento dati più elevata e più stabile.

L'interfaccia web di Brautomat si basa sul framework bootstrap 4.6 con Javascript. I file richiesti (css, js e font) si trovano nella memoria flash di Brautomat. Questo ha un vantaggio e uno svantaggio. Il vantaggio è che non è necessaria alcuna connessione Internet per caricare i file necessari durante la preparazione della birra. Lo svantaggio è che nella WLAN locale il Brautomat deve fornire ad ogni browser collegato i file framework compressi una volta stabilita la connessione. Se un file non viene trasmesso correttamente e solo molto lentamente a causa, ad esempio, della debole potenza del segnale WiFi, l'interfaccia web non funzionerà correttamente. In questo caso l'interfaccia web non viene costruita correttamente (sembra quindi una pagina di testo) oppure è incompleta (le tabelle rimangono vuote). Nella maggior parte dei casi è sufficiente ricaricare il sito web (Ctrl-Shift-R).

Dopo un aggiornamento del firmware, il Brautomat dovrebbe essere sempre spento e la cache del browser cancellata.

##Browser

Il Brautomat è testato su Win11 con MS Edge e Firefox nella versione attuale, nonché su dispositivi iOS con MS Edge e Safari. MS Edge è preferibile durante lo sviluppo. Indipendentemente dal browser, la riproduzione audio automatica dei messaggi Toast (audio) deve essere attivata per l'indirizzo di Brautomat. Anche l'indirizzo di Brautomat dovrebbe essere incluso nelle eccezioni al blocco dei plug-in del browser. I browser obsoleti (ad esempio IE8) non sono supportati.

La cache del browser può portare ad annunci webfront errati. Il frontend web di Brautomat specifica no-cache e no-store quando viene chiamato, ma diversi browser ignorano queste istruzioni. La pulizia manuale della cache del browser viene spesso avviata con la combinazione di tasti Ctrl - Maiusc - Canc.

## Eventi inviati dal server e combinazioni di risparmio energia e client con blocco automatico

Il Brautomat invia dati ai browser connessi e attivi tramite eventi inviati dal server. Fino a 8 dispositivi possono connettersi al Brautomat contemporaneamente. Le combinazioni di risparmio energia o il blocco automatico possono interrompere una connessione. Il processo di preparazione non verrà interrotto o interrotto se la connessione viene persa! Il Brautomat continua a funzionare normalmente. I browser disconnessi semplicemente non ricevono nuove informazioni. Le informazioni includono temperature, fase di mash corrente, prestazioni attuali, grafici, ecc. Una connessione Eventi inviati dal server a Brautomat è il "canale dati" attraverso il quale le informazioni vengono inviate al browser. Se la connessione a Brautomat viene interrotta, il canale dati viene terminato. Un browser attivo riconosce quando il suo canale dati è terminato e si riconnette automaticamente su Brautomat dopo poco tempo.\
Le registrazioni su Brautomat non hanno ordine o priorità. Non ha alcun effetto se il browser web del PC o del tablet viene collegato per primo o per ultimo. Il processo di preparazione può essere avviato sul dispositivo A, messo in pausa sul dispositivo B, osservato sul dispositivo C e terminato sul dispositivo D. Se tutti e quattro i dispositivi sono attivi e collegati, tutti i browser mostrano i (quasi) contemporaneamenteinformazioni identiche perché ciascuno di questi quattro dispositivi ha il proprio canale dati.

## Importazione di ricette

A causa della memoria limitata, l'importazione delle ricette non può importare ricette con PDF, immagini allegate o testi o spiegazioni molto lunghi. Per le ricette MashMalzandMore, importare in kbh2 e poi esportare nel formato Brautomat è una soluzione semplice e buona. È inoltre possibile importare ricette da Brewfather.

## AutoTune

Il processo AutoTune non dovrebbe concentrarsi sulla perfezione, ad es. S.v. 0,1°C. La deviazione dei sensori è solitamente maggiore. Il parametro AutoTune banda di rumore (dispersione attorno al valore target) è sufficientemente vicino alla temperatura target con un valore di 0,3 per raggiungere molto bene la temperatura target e mantenerla per tutto il periodo di riposo.\
I bollitori per il mosto molto ben isolati richiedono una serie di dati AutoTune più ampia. Nelle serie di dati, i valori misurati vengono registrati in ordine cronologico. All'inizio c'è il valore di misura attuale e alla fine della riga c'è il valore di misura più vecchio. La serie di dati del valore AutoTune dice "quanti valori prima della misurazione corrente il Brautomat guarda indietro (nel passato) per rilevare un cambiamento di temperatura di almeno AutoTune banda di rumore (0,3)". Per una caldaia ben isolata, la serie di dati dovrebbe essere riempita con 75 punti di misurazione. Per una caldaia non isolata è sufficiente una serie di dati di 50 punti di misurazione. Questi due parametri devono essere regolati a seconda dell'ambiente. Le specifiche standard dovrebbero produrre valori molto buoni nella stragrande maggioranza dei casi.

## Sensori e calibrazione

I sensori Dallas DS18B20 sono offerti su molte piattaforme a prezzi molto diversi. La calibrazione del sensore aiuta a ridurre al minimo le deviazioni. In ogni caso il sensore IDS dovrebbe essere calibrato perché sono possibili deviazioni di diversi gradi Celsius (a seconda dell'origine).\
Se un sensore segnala regolarmente un errore del sensore (toast) nell'interfaccia web, dovresti prima provare una connessione diversa per il sensore. I tre collegamenti presenti sulla scheda per i sensori sono equivalenti e non hanno un ordine prestabilito. Se ci sono problemi con i sensori è necessario controllare i punti di saldatura dei 3 morsetti a vite e la resistenza da 4,7kOhm (sulla scheda sotto l'ESP).

## Interruzione pin IDS GGM

L'interruzione del pin fornisce un canale di ritorno dal piano cottura a induzione al Brautomat. Questo canale di ritorno è collegato al Brautomat con un GPIO di interruzione dall'ESP. Un'interruzione interrompe il flusso del programma e verifica la condizione di interruzione.\
Il piano a induzione GGM IDS invia continuamente un'interruzione ogni 300 millisecondi circa: o il segnale “è tutto ok” (0000) oppure un codice di errore (es. 0010 per caldaia assente o caldaia vuota).

Sezione dell'uscita seriale su pin interrupt:

"testo".
10:00:00:174 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:543 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:864 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:209 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:554 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
```

L'uscita seriale sul pin interrupt mostra chiaramente che il piano di cottura a induzione invia costantemente "tutto ok". Tuttavia, il Brautomat interrompe il suo lavoro durante la preparazione ad ogni interruzione (circa ogni 300 ms) e controlla la condizione di interruzione. L'interruzione del pin dovrebbe quindi essere utilizzata solo per la risoluzione dei problemi.

I seguenti interrupt sono descritti nel manuale del GGM IDS2:

E0 no/caldaia vuota (0010 2)\
Errore circuito E1 (0011 3)\
E3 Surriscaldamento (0101 5)\
Sensore di temperatura E4 (0110 6)\
Protezione bassa tensione E7 (1001 9)\
Protezione da sovratensione E8 (1010 10)\
Pannello di controllo EC (1110 14)\

Sfortunatamente le stringhe binarie non sono note. È noto solo E1 caldaia assente/vuota. Il tempoLe seguenti parentesi sono state determinate tramite test, ma non sono certe.

L'interruzione del pin dovrebbe essere assegnata solo in caso di problemi. Il pin D5 è preassegnato per il primo piano cottura a induzione. Non è necessaria alcuna interruzione del pin durante il normale funzionamento della birra.
