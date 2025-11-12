# Registrazione

![media](/docs/img/logging.jpg)

La registrazione è disponibile solo nella versione di sviluppo. La registrazione integrata aiuta nella risoluzione dei problemi, sia per errori nel firmware Brautomat32 che per errori dell'utente. Per l'output è necessario un monitor seriale. Di seguito viene mostrato Microsoft Visual Studio Code con l'estensione Microsoft Serial Monitor. Microsoft Visual Code è gratuito e disponibile come versione autonoma (non è richiesta alcuna installazione).

Il monitor seriale deve essere impostato su una velocità di trasmissione di 115200 e CRLF oltre alla porta COM.

![Codice di Microsoft Visual Studio](/docs/img/vscode.jpg)

## Impostazioni di registrazione

Vari canali per l'uscita seriale possono essere attivati tramite le impostazioni di sistema.

* Configurazione: questo canale visualizza i messaggi quando la configurazione viene letta o salvata.
* Sensori: in questo canale vengono emessi i messaggi relativi ai sensori
* Attori: un canale per riferire sugli attori
* Caldaia di ammostamento: in questo canale vengono visualizzati i messaggi relativi alla prima caldaia
* Bollitore: tutti i messaggi relativi al bollitore
* Caldaia a rifusione - Messaggi relativi alla caldaia a rifusione
* Fermentatore: messaggi sulla modalità fermentatore
* Sistema: i messaggi di sistema vengono visualizzati in questo canale
* Processo di ammostamento: il processo di ammostamento viene registrato in questo canale
* Nextion Display: registrazione per il display

Ogni canale ha le opzioni disattivato, errore, informazioni e dettagliato.

* Disattivato: nessuna registrazione.

Il canale non invia un registro alla console seriale.

* Errore: vengono registrati solo gli errori.

Il tipo di output del debug Errore registra solo gli errori. In VSCode, il tipo ERRORE viene visualizzato in rosso.

```json
[E] [SENSOREN.cpp:1600] setSenErr(): Errore sensore test: #0 Stato errore Sensor_Sud: 1
[E] [SENSOREN.cpp:76] Update(): Sen: l'errore Sensor_Sud n. 1 non è riuscito a leggere i dati sulla temperatura
```

* Informazioni: registra il processo

Debug dei processi di registro informazioni del tipo di output. Il tipo Info contiene l'output del tipo Errore. In VSCode, il tipo INFO viene visualizzato in verde.

```json
[I][KETTLES.cpp:2044] debConsole(): imposta nuovo powerlast: 1071746ms
[I][KETTLES.cpp:1922] webhook(): risposta del webhook: 
[I][KETTLES.cpp:2044] debConsole(): webhook attivo: 5000ms (mDutyCycle 5000 * Potenza 100 / 100)
```

* Verboso: vengono visualizzate tutte le informazioni disponibili.

L'output di debug del tipo dettagliato include tutti i tipi precedenti. Inoltre, tutte le trasmissioni SSE vengono registrate nel tipo Verbose. In VSCode, il tipo Verbose viene visualizzato in blu.

```json
[V][SYSTEM.cpp:847] SSEBroadcastJson(): kettle hlt: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:919] SSEBroadcastJson(): kettle sud: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:839] SSEBroadcastJson(): mash del bollitore: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Inoltre, l'impostazione Sistema - dettagliato genera una registrazione a ricciolo di tutte le richieste GET e POST del WebServer.

L'output sulla console seriale ha una formattazione fissa. Esempio:

```json
[V][SYSTEM.cpp:839] SSEBroadcastJson(): mash del bollitore: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Le singole parti:

```json
[V] Il tipo di output (qui Verbose)
```

```json
[SYSTEM.cpp:839] La posizione del codice sorgente di arrotondamento
```

```json
SSEBroadcastJson(): la funzione chiamante
```

Il messaggio di debug vero e proprio segue dopo i due punti:

```json
mash con bollitore: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Quando il Brautomat è connesso a una console seriale, al momento dell'avvio viene visualizzato il seguente output

```json
05:42:16.904 > [I] [SYSINFO] avvio della versione Braautomat32 V 1.56
05:42:22.467 > [I][SYSINFO] monta il filesystem LittleFS: ok, memoria heap libera: 192924
05:42:28.384 > [I][SYSINFO] mDNS http://Brautomat.local indirizzo IP 192.168.100.112 ora: 05:42:27 RSSI: -83
```

Oltre alla versione di Brautomat viene emesso il nome MDNS e l'indirizzo IP attuale. La riga _mount filesystem LittleFS: ok, free heap mem:_ indica che il file system è stato montato.

## Errore del sensore di prova

Un errore del sensore può essere attivato tramite un URL web. I sensori in Brautomat hanno un ID che inizia con 0. Un errore del sensore può essere generato tramite una chiamata web:

```json
http://Brautomat.local/setSenErr?id=0
```

Per correggere l'errore del sensore, si accede nuovamente allo stesso identico URL. Il primo sensore ha l'ID 0, il secondo l'ID 1 e il terzo l'ID 2. Nell'URL è sufficiente sostituire l'ultimo 0 con l'ID del sensore desiderato.

Con questo test degli errori del sensore è possibile controllare molto facilmente il parametro "Comportamento in caso di errore del sensore".

## Registrazione con Microsoft VSCode

Microsoft VSCode può essere configurato per l'accesso in pochi passaggi. Non è necessario installare Microsoft VSCode; la versione portatile è sufficiente.

Scarica Microsoft VSCode come file ZIP: [Microsoft VSCode](https://code.visualstudio.com/docs/?dv=winzip)

Estrai il file ZIP in qualsiasi directory. Vai alla directory in Esplora file e crea una cartella chiamata dati. La cartella dati mette MS VScode in modalità portatile e può essere utilizzata senza installazione.

![Codice di Microsoft Visual Studio](/docs/img/vscode_4.jpg)

Avviare Microsoft VSCode facendo doppio clic su Code.exe.

![Codice di Microsoft Visual Studio](/docs/img/vscode_1.jpg)

L'estensione Serial Monitor è richiesta in VScode per la registrazione. Fare clic sul pulsante Estensioni a sinistra e inserire "monitor seriale" nel campo di ricerca.

![Codice di Microsoft Visual Studio](/docs/img/vscode_2.jpg)

Installa l'estensione Serial Monitor di Microsoft. Il monitor seriale è incluso nella schermata Output. Fare clic sull'elemento di output nel menu Visualizza o aprire l'output con la combinazione di tasti Ctrl Shift U. La visualizzazione delle estensioni può essere nascosta o visualizzata facendo clic sul pulsante Estensione. Ora fai clic sulla scheda Monitor seriale nella finestra di output. Ora tutto ciò che devi fare è selezionare la porta COM e impostare il baud rate su 115200. La registrazione viene avviata con il pulsante Avvia monitoraggio.

![Codice di Microsoft Visual Studio](/docs/img/vscode_3.jpg)
