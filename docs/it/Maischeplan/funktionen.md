# Caratteristiche

Nella seguente descrizione viene utilizzata una _ricetta di esempio inventata_. Questa descrizione non contiene la ricetta, ma la procedura per l'ammostamento con il Brautomat.

Il piano di mash è sotto forma di tabella. Questa tabella viene elaborata dall'alto verso il basso dal sistema di produzione della birra in un giorno di produzione della birra. Nella ricetta di esempio, la riga _Mashing 50°C_ è la prima fase di ammostamento e _WHP Hallertau Tradition_ è l'ultima fase di ammostamento. Una funzione molto importante nel piano mash è la proprietà nella colonna _autoext_.

## Funzioni di base

![Piano di mash](/docs/img/Brautomat.jpg)

A scopo orientativo viene dapprima descritta la struttura delle righe della tabella. Una riga nel piano di mash rappresenta un passaggio nel piano di mash. Ogni riga della tabella ha queste colonne:

* La colonna "Rest" mostra un nome per questo passaggio di mash.
* La colonna "Temperatura" contiene la temperatura di riposo (chiamata anche temperatura target o temperatura target in questo manuale).
* La colonna "Durata" contiene il tempo di riposo (timer), per quanto tempo il Brautomat deve mantenere la temperatura di riposo.
* La colonna "autoext" indica se il passaggio successivo verrà continuato automaticamente allo scadere del tempo di riposo (timer).

Dopo questi quattro dettagli sulla fase di ammostamento, in ogni riga sono presenti pulsanti di modifica con le seguenti funzioni: (da sinistra a destra)

![Modifica piano di mash](/docs/img/Brautomat-111.jpg)

* sposta questa riga in alto di una posizione
* sposta questa linea verso il basso di una posizione
* modifica questa riga
* cancella questa riga

L'intestazione della tabella contiene i seguenti pulsanti (da sinistra a destra)

![Modifica piano di mash](/docs/img/Brautomat-1.jpg)

* nuova riga: aggiungi un nuovo passaggio di mash alla fine della tabella
* Elimina: elimina l'intera tabella (piano di mash vuoto)
* Ricarica: rileggi la ricetta dal file. Le modifiche non vengono salvate. Il pulsante viene visualizzato in blu
* Database: selezione del piano di mash, importazione, esportazione e pianificazione del piano di mash
* Comprimi: comprimi ed espandi la tabella del piano di mash

![Modifica piano di mash](/docs/img/Brautomat-11.jpg)

Quando viene modificata una riga della tabella, i pulsanti cambiano.

* Esci: esce dall'editor di riga senza salvare. Il pulsante viene visualizzato in grigio
* Archiviazione: salva le modifiche nella riga della tabella nel piano di mash

Tutti i pulsanti per la modifica del piano di ammostamento vengono nascosti non appena viene avviato il processo di preparazione. Il pulsante di compressione per comprimere ed espandere la tabella viene nascosto non appena viene modificato il piano di mash.

Insieme ai controlli Power, Play, Pause, Prev e Next, il controllo della preparazione è intuitivo da usare. Il piano di ammostamento qui mostrato è un'importazione da kleineBrauhelfer2. L'importazione inserisce automaticamente le temperature di riposo ed i tempi di riposo. Quando si aggiunge il luppolo, l'acido alfa e la quantità in grammi vengono automaticamente aggiunti al nome del luppolo. Inoltre, queste abbreviazioni hanno il prefisso:

*VWH: luppolatura del mosto anteriore
* Cottura (senza aggiunta di luppolo)
* WPH: Whirlpool Hopping

Gli additivi come mostrato nell'immagine _Lievito alimentare da cucina 1gr_ vengono importati nel piano di ammostamento dal piccolo Brauherlfer2 con il tempo di somministrazione e la quantità.

## Modifica la tabella del piano di mash

Un piano di mash può essere modificato in Brautomat o completamente ricreato. Il simbolo della matita mette una linea nella tabella del piano di mash in modalità editor.

![Modifica piano di mash](/docs/img/Brautomat-3.jpg)

Ora è possibile modificare un numero qualsiasi di righe della tabella una dopo l'altra. Non appena si clicca sul simbolo per la modifica del piano di mash, il pulsante _Salva_ cambia da verde a rosso. Una volta apportate tutte le modifiche, il piano di mash deve essere salvato utilizzando il pulsante _Salva_. In alternativa, tutte le modifiche possono essere annullate utilizzando il pulsante _Esci_ per uscire senza salvare.

Non appena viene avviato un processo di ammostamento utilizzando il pulsante di accensione, la visualizzazione cambia:

![Modifica piano di mash](/docs/img/Brautomat-4.jpg)

I pulsanti per la modifica sono nascosti. Per renderlo nuovamente visibile, il processo di ammostamento deve essere interrotto utilizzando il pulsante Pausa sul controllo:

![Modifica piano di mash](/docs/img/Brautomat-5.jpg)

Quando il processo di ammostamento è in pausa, il pulsante Pausa nel controllo viene visualizzato in rosso e vengono visualizzate le funzioni di modifica. Il piano cottura a induzione non si spegne. La temperatura di riposo continua a essere mantenuta. Se il timer di riposo è attivo, verrà messo in pausa. Se il piano di mash viene modificato (modalità Editor), il pulsante Pausa per continuare il processo di mash e il pulsante di accensione vengono disattivati ​​e visualizzati in grigio finché le modifiche nel piano di mash non vengono salvate o annullate (Esci).

Esempio di applicazione:\
Alla fine del processo di ammostamento, viene utilizzato un campione di iodio per determinare se il mosto non ha ancora un livello di iodio normale e che l'amido è ancora presente. Il riposo di saccarificazione a 72°C dovrebbe essere prolungato:

* Metti in pausa il processo di ammostamento
* Cliccare sul simbolo della matita nella riga Saccarificazione 72°C
* Prolungare di 5 minuti il tempo di riposo per la seconda saccarificazione
* Salva
* Fare clic sul pulsante di pausa e il processo di ammostamento continuerà con la durata di riposo regolata.

## Funzione e applicazione di autonext

![Maischeplan autonext](/docs/img/Maischeplan-autonext.jpg)

La prima fase del piano di ammostamento chiamata _Mashing 50°C_ prevede un tempo di riposo di 10 minuti e un _autonext_ disattivato. L'immagine mostra la situazione in cui il timer di riposo ha raggiunto i 10 minuti: il timer ha effettuato il conto alla rovescia fino a 00:00. Il pulsante di riproduzione diventa automaticamente rosso. Il messaggio di avviso "Fai clic sul pulsante di riproduzione" viene visualizzato in basso a destra. Il piano cottura si spegne. Il processo di preparazione attende un clic sul pulsante di riproduzione. L'interfaccia web mostra il passaggio successivo, che viene avviato facendo clic su Riproduci.

* Al termine di una pausa con _autonext_ disattivato, il processo di erogazione viene interrotto e il piano cottura viene spento.

La seconda fase di ammostamento, denominata _Maltoserast 63°C_, ha una temperatura di riposo di 63°C e un tempo di riposo di 25 minuti. In questa fase il Brautomat controlla inizialmente il piano cottura a 63°C. Non appena vengono raggiunti questi 63°C, il Brautomat avvia il timer. Un timer di riposo è un cronometro che conta alla rovescia fino a 00:00 (0 minuti: 0 secondi). Quando questo timer raggiunge il tempo di riposo di 25 minuti, il Brautomat controlla la proprietà _autonext_. Se _autonext_ è attivato, il Brautomat salta automaticamente al passaggio successivo nel piano di mash. In questa ricetta di esempio questa è la fase _Saccarificazione a 72°C_. La fase di saccarificazione ha una temperatura di riposo di 72°C. Il Brautomat aumenta automaticamente la potenza del piano cottura per raggiungere la nuova temperatura di riposo.

* Al termine del riposo con _autoext_ attivato, il processo di ammostamento continua automaticamente e il piano cottura rimane acceso.

![Maischeplan autonext](/docs/img/Maischeplan-autonext2.jpg)

La proprietà _autonext_ nella settima fase _Mashing 78°C_ non è attivata. Se il Brautomat incontra un autonext disattivato, il Brautomat termina il riposo corrente allo scadere del tempo di riposo e spegne il piano di cottura (potenza 0%). In questo stato il pulsante Riproduci viene visualizzato in rosso. Per continuare il processo di preparazione è necessario fare clic sul pulsante Riproduci.

Mentre nel primo esempio di _autonext_ solitamente si clicca direttamente sul pulsante Play per proseguire nella fase di mashing, nel secondo esempio di mashing può trascorrere un tempo più lungo per la lautering e lauter rest. Il Brautomat viene lasciato nello stato "Fai clic sul pulsante Riproduci". Il piano cottura della prima caldaia rimane spento. In questo stato è possibile utilizzare tutti gli attuatori ed anche le altre due caldaie.

## Differenza autonext e interruzione

Se autonext viene disattivato allo scadere del blocco, il piano cottura viene spento. Con il pulsante pausa il timer di riposo viene fermato,Il piano cottura resta comunque acceso e il Brautomat calcola la potenza necessaria per il piano cottura.

Le sezioni seguenti descrivono le funzioni speciali opzionali. I Brautomat principianti possono saltare la descrizione delle funzioni speciali.

## Funzione speciale 0°C riposo quando autonext è attivato

Una funzione speciale è la temperatura di riposo a 0°C quando è attivato autonext: Se la temperatura di riposo è impostata a 0°C e autonext è attivato, la fase di ammostamento viene avviata automaticamente senza controllo della temperatura. Nell'esempio del piano di ammostamento, questa funzione speciale viene mostrata dopo la bollitura del mosto nella fase di _post-isomerizzazione_. A questo punto il mosto ha una temperatura di ca. 100°C. Il piano di cottura deve essere spento e il timer per la post-isomerizzazione deve essere avviato immediatamente:

![Funzione speciale 0°C](/docs/img/Maischeplan-Sonderfunktion.jpg)

La funzione speciale _0°C temperatura di riposo con autonext attivato_ soddisfa esattamente questo requisito: la temperatura effettiva e quella nominale vengono ignorate e viene avviato il timer di riposo. Se la temperatura di riposo della fase di post-isomerizzazione non fosse impostata su 0°C, ma piuttosto su 95°C, ad esempio, il timer di riposo per la fase di post-isomerizzazione si avvierebbe solo quando la temperatura nel bollitore di ammostamento si sarà raffreddata da 100°C a 95°C. Durante la post-isomerizzazione la temperatura nel mosto diminuisce. Se necessario, il mosto viene raffreddato attivamente. La funzione speciale _0°C temperatura di riposo con autonext_ attivato fa sì che il piano cottura rimanga spento.

## Processo di produzione della birra

Il principio di base della macchina per la preparazione della birra è l'infusione ascendente. Ciò include varianti come il processo di ammostamento di cottura di Earl. È possibile implementare anche altri processi di produzione della birra utilizzando la proprietà “autonext”. Tuttavia, va notato che il Brautomat può supportare solo altri processi di produzione della birra con "semiautomatico". L'attivazione di un'azione, come l'estrazione di un mash parziale, deve essere eseguita manualmente dall'operatore. Per Brautomat, manuale significa utilizzare i pulsanti Riproduci e Pausa. Una pausa di zero minuti con autonext disabilitato può essere utilizzata come attivazione per un'azione manuale.

Nota: i seguenti argomenti sui comandi di controllo sono facoltativi e non rilevanti per iniziare con Brautomat.

## Bollitore per la birra

Il Brautomat supporta fino a tre bollitori. Il primo bollitore è necessario per il processo di ammostamento. Un secondo bollitore è opzionale e può essere utilizzato, ad esempio, nei processi di preparazione della birra come il decotto. Il terzo bollitore viene spesso utilizzato come ricarica ed è anch'esso opzionale. L'utilizzo del 2° e 3° bollitore è selezionabile liberamente, solo il primo bollitore è legato al processo di ammostamento e specificatamente al timer di riposo.

Nomi predefiniti per i comandi di controllo:

* Primo bollitore: IDS o MASH
* Seconda caldaia: MLT o SUD
* Terza caldaia: HLT o REGUSS

## Comandi di controllo

Una seconda funzione speciale sono i comandi di controllo dei piani cottura e degli attuatori. La sintassi per la fase di mash è.

* Nome dell'attore: Performance

L'alimentazione può essere ON o OFF oppure un numero compreso tra 0 e 100%. Lo stato OFF corrisponde al valore 0% e ON al valore 100%. Il comando di controllo per il primo piano cottura a induzione è IDS o MASH. Il comando di controllo per il secondo piano cottura a induzione è SUD. Il comando di controllo per la rifusione è HLT. Il comando di controllo per un attuatore è il nome dell'attuatore.

![Comando controllo attore](/docs/img/Maischeplan-Aktoren.jpg)

Il piano di ammostamento nell'immagine commuta gli attuatori in tre punti. L'agitatore è acceso fin dall'inizio: Agitatore:ON
Poco prima della fine del programma di ammostamento, l'agitatore viene spento: Agitatore:OFF e il riempimento viene attivato: Refill:ON.

Il comando di controllo per un attuatore può essere specificato con una potenza, ad es. POMPA:60. La pompa dell'attuatore viene quindi accesa con una potenza del 60%. Ciò presuppone che questo attuatore sia stato attivato per PWM. La temperatura di riposo e la Rast La durata deve essere impostata su 0 per i comandi di controllo.

Il comando di controllo IDS:50 imposta la potenza di uscita massima del piano cottura al 50%. La rifusione può anche essere attivata al 75% della potenza con HLT:75.

![Comando di controllo IDS](/docs/img/sonderfunktion_sud1.jpg)

Il comando di controllo SUD: Cuocere un mosto denso con un tempo di riposo di 10 minuti e una temperatura di riposo di 100 gradi esegue una fase di mosto su un secondo piano di cottura. Il timer di riposo viene avviato non appena viene raggiunta la temperatura di riposo.

![Comando di controllo SUD](/docs/img/sonderfunktion_sud2.jpg)

Il comando di controllo SUD: Cuocere una purea densa con una temperatura di riposo di 100 gradi ma senza tempo di riposo accende il secondo piano di cottura, avvia il controller PID per il piano di cottura e salta direttamente al passaggio successivo nel piano di ammostamento.

![Comando di controllo SUD](/docs/img/sonderfunktion_sud3.jpg)

La fase di ammostamento, saccarificazione a 72°C, viene effettuata sul primo piano di cottura _Maische_. Il controller PID regola la potenza necessaria per il bollitore. Allo stesso tempo il regolatore PID regola la potenza necessaria per la caldaia _Sud_.

Esempi:

* Agitatore:ON
* Agitatore: SPENTO
* RHE:40
*ID:75
*ID:DISATTIVATO
* ALTO:100
*ALTA:DISATTIVATA
* SUD: cuocere una poltiglia densa
* SUD:60

_Nota: i comandi di controllo possono essere utilizzati per azionare contemporaneamente le caldaie di ammostamento, infusione e HLT. Tuttavia, solo un timer di riposo può essere attivo. Il timer di riposo è sempre legato al primo “mash”._

### Esempio di comando di controllo IDS

A titolo di esempio per la caldaia GGM IDS o MashSud è riportata la seguente configurazione:

![Comando di controllo IDS](/docs/img/aktoren_schaltung4.jpg)

La potenza massima è preimpostata al 100%. La temperatura di “Transizione alla Cottura” è di 95°C. A partire da questa temperatura la potenza massima in uscita dal GGM IDS è solo dell'80%.

Il programma di ammostamento nell'illustrazione inizia con la fase "Riscaldamento della colata principale". Il piano cottura a induzione GGM IDS riscalderebbe l'acqua con la potenza "Max. Power IDS" (parametro nel registro di controllo della temperatura), cioè con il 100%.

![Comando di controllo IDS](/docs/img/aktoren_schaltung2.jpg)

Il timer di riposo inizia a 59°C. Il tempo di riposo è pari a zero minuti. Il Brautomat passa alla riga successiva al passaggio 2.
Il comando di controllo IDS:65 imposta la potenza massima dell'IDS al 65%. Il Brautomat passa alla riga successiva al passaggio 3.
Ora la temperatura viene riscaldata da 59°C alla temperatura target nella fase di “ammostamento”. La prestazione massima dell'IDS è del 65%.

La potenza di uscita massima del 65% viene mantenuta nelle successive fasi di ammostamento. Fino a quando il Brautomat non incontra il comando di controllo IDS:100 dopo la fase di ammostamento.

![Comando di controllo IDS](/docs/img/aktoren_schaltung3.jpg)

Il comando di controllo modifica la potenza di uscita massima dell'IDS al 100%. Il mosto viene ora riscaldato al 100% della potenza fino alla temperatura di “transizione all'ebollizione” a 95°C (vedi sopra). A partire da 95°C il GGM IDS passa all'80% di potenza. L'80% corrisponde al parametro "Potenza da transizione".

I comandi di controllo dell'IDS possono essere utilizzati per evitare che il mosto bruci o che il mosto trabocchi, soprattutto con volumi di bollitore più piccoli.

### Esempio: Decotto con due piani cottura

![Comando di controllo IDS e SUD](/docs/img/sonderfunktion_sud4.jpg)

A causa della restrizione _il primo ammostamento deve essere sempre fatto funzionare con un tempo di riposo_, per i processi di decozione esiste una procedura semplice: il mosto parziale da cuocere deve entrare nel bollitore _Ammostamento_ e il mosto parziale da mantenere a temperatura deve entrare nel bollitore _Sud_.

### Esempio di utilizzo della potenza per un piano cottura

Vengono forniti un riempimento di 7 kg e un versamento principale di 28 litri. In totale la massa è di 35 kg\

Con l'aiuto della funzione speciale IDS: <Potenza in %> è possibile regolare la potenza di un piano di cottura in modo che la velocità di riscaldamento durante l'ammostamento sia di 1°C al minuto.

![Comando di controllo potenza MASH](/docs/img/IDS-Sonderfunktion.jpg)

_SpiegaPer informazioni sul metodo di calcolo vedere: Parametri del GGM IDS - Termoregolazione - Prestazioni massime dell'IDS._

```json

    Potenza richiesta P = m * c * T / (t * w)
    L'espressione c*T/(t*w) è sostituita dal valore 75 con un rendimento dell'80% per il piano cottura a induzione
    La massa m è 35 kg
    P = 35 x 75 = 2625
    2625 W rappresentano il 75% della potenza massima. potenza 3500W (2625/3500*100=75%)

```

Nel piano di ammostamento mostrato sopra, la potenza massima dell'IDS viene impostata al 75% dopo l'ammostamento nella riga 2 con il comando di controllo "IDS:75". Con questo comando di controllo vengono eseguite le fasi successive (riposo del maltosio, saccarificazione e ammostamento) con una resa massima del 75%. Dopo l'ammostamento, l'utente deve fare clic sul pulsante di riproduzione (autonext disabilitato). Qui inizia la filtrazione, seguita dal riposo della filtrazione, ecc. Il processo di preparazione continua con il comando di controllo “IDS:100”. La potenza massima dell'IDS è impostata al 100% per la bollitura del mosto.

_Nota: il rendimento dell'80% qui utilizzato per un piano cottura a induzione è un valore medio. Un serbatoio di ammostamento isolato e coperto (coperchio o agitatore) può avere un'efficienza maggiore._

## Modifica del profilo della funzione speciale

Un'altra funzione speciale è il cambio del profilo. I comandi sono IDSPROFIL, SUDPROFIL e HLTPROFIL. Il nome del profilo segue i due punti.

Esempi:

IDSPROFILE:Profil68l\
IDSPROFILE:Profil36l

Con questo comando speciale si scambiano tutti i parametri di una caldaia. In questo modo è possibile memorizzare diversi profili hardware. Nel processo di preparazione del decotto, il comando speciale offre un modo semplice per utilizzare i parametri regolati con la stessa caldaia e un volume inferiore.

I comandi speciali IDS: e IDSPROFIL: hanno effetti diversi: Il comando speciale IDS: modifica la potenza massima in uscita. Tutti gli altri parametri rimangono gli stessi.

_Nota: il comando speciale IDSPROFILE nel piano mash viene annullato se il tipo di dispositivo (IDS1, IDS2 o relè) non è identico._

## Esempio di giorno della preparazione

Infine, gli ordini speciali, le aggiunte di luppolo e la procedura generale vengono riepilogati utilizzando un giorno di produzione. Questo esempio si basa sulla seguente configurazione:

Ambiente a due caldaie:

* un bollitore per il mosto (volume 70 l, GGM IDS2 con 3,6 kW)
* un bollitore rifuso (bollitore 35 l, 2 kW)

Due attori:

* un agitatore (controllato da relè)
* un elemento riscaldante ad anello (nella caldaia del mosto, 3,5 kW)

Il piano di mash:

![esempio di giorno di preparazione del piano di ammostamento](/docs/img/example_control_commands1.jpg)

L'esempio mostra quanto sia semplice accendere e spegnere gli attuatori utilizzando comandi speciali o come i comandi speciali siano integrati nel piano di mash. Nella prima fase di ammostamento l'agitatore è acceso. Il Brautomat esegue il comando speciale e salta immediatamente al passaggio successivo nel piano di mash. Il mash in step è stato configurato con una durata di 1 minuto e autonext disabilitato. In questa fase il malto viene aggiunto all'acqua della birra. La fase dura più di un minuto, ma non si sa in anticipo quanto tempo durerà l'ammostamento, a seconda del ripieno. Dopo aver tritato per un minuto, il Brautomat spegne il piano cottura e visualizza il pulsante di riproduzione in rosso (disattivato autonext). Il Brautomat ora "attende" finché il passaggio non viene completato e viene fatto clic sul pulsante di riproduzione. Quando il piano cottura viene spento e viene aggiunto il malto, la temperatura di miscelazione del mosto sarà inferiore a 55°C. Questa procedura è adatta, ad esempio, per un'aggiunta rilassata e lenta dei malti o per un breve riposo proteico.

_Alternativa:_ attiva la proprietà autonext e imposta il periodo di riposo a 5 minuti. In questo caso il Brautomat manterrebbe la temperatura di ammostamento per 5 minuti (ammostamento) per poi riscaldarsi automaticamente fino al riposo successivo.

Il passo successivo è il resto del maltosio. IL PID Il controller regola la potenza necessaria per raggiungere la temperatura target nel mosto e mantenerla per un periodo di 40 minuti. Nella riga 4 l'accensione della ricarica avviene tramite un apposito comando. La temperatura target per la ricarica è 75°C e la durata è 0 minuti. Il Brautomat avvia il regolatore PID per la rifusione della caldaia e regola in background la potenza richiesta. A questo punto del piano di ammostamento sono attivi due controller PID: un controller PID per il bollitore di ammostamento e un controller PID per il post-versamento. Il Brautomat salta direttamente al passaggio successivo dopo l'accensione.

Nel piano di ammostamento l'attuatore dell'elemento riscaldante anulare viene attivato oppure attivato una volta con il comando speciale _RHE:ON_ e una volta con _RHE:50_. ON traduce il Brautomat con una prestazione del 100%, mentre 50 viene elaborato di conseguenza con una prestazione del 50%. Il bollitore MashSud ha un volume massimo di 70 litri. L'elemento riscaldante ad anello supporta il piano cottura durante la cottura con il 50% di potenza per cotture vigorose: piano cottura al 100% di potenza (3,5kW) più elemento riscaldante ad anello da 1,75kW (50%). Al termine della cottura la resistenza circolare viene spenta con l'apposito comando _RHE:OFF_.

I tempi delle aggiunte di luppolo vengono calcolati in base al loro tempo di cottura. Il programma di ammostamento prevede un tempo di cottura totale di 90 minuti. Bollire per 30 minuti senza aggiungere luppolo. Il tempo totale di cottura delle singole aggiunte di luppolo si somma. Cioè. la prima aggiunta di luppolo _Hall. Tradition 6,0% 37,2g_ viene cotto per un totale di 60 minuti:

* Durata dell'aggiunta di mash step hop Hall. Tradizione 37,2 g: 30 minuti
* Durata dell'aggiunta di mash step hop Hall. Tradizione 31g: 15 minuti
  * Al termine di questa fase di ammostamento, la prima aggiunta di luppolo (37,2 g) rimane nel mosto per 45 minuti
* Durata dell'aggiunta di mash step hop Hall. Tradizione 30g: 10 minuti
  * Al termine di questa fase di ammostamento, la prima aggiunta di luppolo (37,2 g) dura 55 minuti e la seconda dura 25 minuti nel mosto
* Durata dell'aggiunta di mash step hop Hall. Tradizione 7g: 5 minuti
  * Al termine di questa fase di ammostamento, la prima aggiunta di luppolo (37,2 g) è di 60 minuti, la seconda di 24 minuti e la terza di 15 minuti nel mosto

Mentre strumenti come kleineBrauhelfer, BrewFather o MMum indicano sempre il tempo di cottura totale per ogni singola aggiunta di luppolo, il Brautomat deve fornire un allarme o un'indicazione su quando è necessario aggiungere un'aggiunta di luppolo al mosto durante la preparazione.

_Estensione:_ La spiegazione delle dosi di luppolo viene ampliata per includere due o più dosi contemporaneamente:

![esempio di giorno di preparazione del piano di ammostamento](/docs/img/example_control_commands3.jpg)

Il luppolo va aggiunto 10 minuti prima della fine della bollitura. Al mosto vengono aggiunti contemporaneamente Tradition 6,0% 30g_ e lievito alimentare _lievito nutriente_. L'illustrazione mostra quanto sia semplice la procedura: dosi simultanee della durata di 0 minuti vengono somministrate prima di una dose di durata.

La penultima fase post-isomerizzazione utilizza la funzione speciale temperatura target 0°C. Con questa fase di ammostamento il piano cottura viene spento. La funzione speciale temperatura di riposo 0°C fa sì che il Brautomat avvii immediatamente il timer di riposo di 10 minuti. A questo punto il mosto ha una temperatura di ca. 100°C e si sta lentamente raffreddando. Poiché la fase successiva prevede l'aggiunta del luppolo aromatico a 78°C, il mosto viene raffreddato attivamente durante il periodo di riposo post-isomerizzazione di 10 minuti.

Il grafico per il piano di mash:

![esempio di giorno di preparazione del piano di ammostamento](/docs/img/example_control_commands2.jpg)
