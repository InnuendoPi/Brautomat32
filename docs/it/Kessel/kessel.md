# Configurazione e utilizzo della caldaia

Il Braautomat32 offre la possibilità di configurare fino a tre caldaie. La prima caldaia ha la denominazione interna MASH e in alternativa IDS. Questo bollitore è necessario per il processo di ammostamento. Le altre due caldaie sono opzionali. La seconda caldaia ha la denominazione interna SUD, in alternativa MLT e la terza caldaia ha la denominazione HLT o Nachguss.

Le tre caldaie possono essere del tipo a induzione GGM o del tipo a relè. Una caldaia di tipo relè include una connessione webhook.

![Configurazione caldaia](/docs/img/kessel_1.jpg)

I parametri sono descritti nel capitolo Configurazione di base e panoramica dei parametri - Parametri caldaia e sono identici per tutte e tre le caldaie.

Tuttavia, l'uso dei tre bollitori è diverso, soprattutto l'uso del piano di ammostamento. Il piano di ammostamento è sempre collegato alla prima caldaia del mosto finché nel piano di ammostamento non viene specificata nessun'altra caldaia tramite un comando di controllo. I comandi di controllo sono spiegati anche nella sezione relativa alle funzioni speciali del piano di mash e ai comandi di controllo.

## Comandi di controllo della caldaia

In questa sezione vengono presi in considerazione solo i comandi di controllo della caldaia. I comandi di controllo per gli attuatori sono strutturati in modo identico, ma sono spiegati nella sezione relativa alle funzioni speciali e ai comandi di controllo del piano mash. Un comando di controllo contiene sempre due punti nel nome del resto. Il Brautomat riconosce solo dai due punti che questo resto deve essere trattato come un comando di controllo. Il formato è dispositivo:potenza massima. Ciò significa che i due punti separano il nome del dispositivo dalle prestazioni massime.

I seguenti nomi sono definiti internamente come nomi di dispositivo per le tre caldaie:

* MASH o IDS per il primo bollitore
*MLT o SUD per la seconda caldaia
*HLT o REGUSS per la terza caldaia

Ad ogni caldaia viene assegnato un nome nelle impostazioni. Questo nome può essere utilizzato anche come nome del dispositivo per un comando di controllo.

I numeri compresi tra 0 e 100 sono consentiti come prestazione massima. Il valore corrisponde al parametro di potenza massima nelle impostazioni della caldaia ed è espresso in percentuale. La specifica ON corrisponde al 100% e OFF corrisponde allo 0%.

### Opzione 1: commutazione manuale della caldaia

La seconda e la terza caldaia possono essere accese e spente manualmente tramite l'interfaccia web utilizzando il rispettivo pulsante di accensione. Se ad esempio una caldaia è predisposta per la reinfusione, nelle impostazioni della caldaia è possibile impostare la temperatura nominale su 78°C e, se necessario, accendere la caldaia il giorno della preparazione.

### Opzione 2: accensione automatica della caldaia

Il secondo e il terzo bollitore possono essere commutati anche tramite il piano di ammostamento:

![Configurazione caldaia](/docs/img/kessel_2.jpg)

In questo piano di ammostamento semplificato, la terza caldaia HLT viene accesa automaticamente nella riga 2. Il passo HLT:100 con una temperatura target di 78°C e una durata di 0 minuti accende il riempimento con una potenza del 100% e imposta la temperatura target a 78°C. Poiché la durata specificata è 0 minuti, la ricarica è sempre attiva. Il Brautomat passa direttamente alla fase successiva di ammostamento e lascia attiva la post-infusione. Il controller PID regola in modo permanente la potenza necessaria per raggiungere e mantenere la temperatura target. Nachguss:100 sarebbe identico al comando di controllo HLT:100. Se nelle impostazioni alla ricarica è stato assegnato il nome “Cooker”, è possibile utilizzare anche il comando di controllo COOKER:100.

![Configurazione caldaia](/docs/img/kessel_3.jpg)

In questo piano di ammostamento, nella terza fase viene attivata la seconda preparazione del bollitore. A differenza dell'esempio precedente HLT, la caldaia SUD viene accesa per un periodo di 15 minuti con la temperatura nominale di 100°C. Il Brautomat rimane su questo passaggio fino al raggiungimento della temperatura target e al completamento del periodo di riposo di 10 minuti. Successivamente il bollitore SUD viene spento e il Brautomat passa alla fase successiva del piano di ammostamento.

Il testo "Cuoci poltiglia parziale" proviene da Brautomat traduce al 100%. Se non è presente alcun numero compreso tra 0 e 100 o l'informazione ON o OFF dopo i due punti, il Brautomat sostituisce il testo con una potenza del 100%.

## Esempio di prestazioni diverse

I comandi di controllo possono essere utilizzati per regolare la potenza massima durante il processo di erogazione. Se ad esempio il piano di cottura a induzione ha una potenza massima di 3,5 kW e il bollitore utilizzato ha un volume di 20 litri, è possibile utilizzare il comando di controllo MASH:75 per ridurre la potenza massima erogata dal piano di cottura a induzione al 75% della potenza. Il resto con il comando di controllo MASH:75 viene creato con una temperatura target di 0°C e una durata di 0 minuti con autonext attivato.

## Esempio di decotto

Come descritto sopra, un riposo del piano di ammostamento viene sempre assegnato alla prima caldaia (MASH) se nessun comando di controllo (due punti nel nome del riposo) assegna il resto ad un'altra caldaia. Un comando di controllo può accendere/spegnere la seconda caldaia con una temperatura nominale e passare direttamente al riposo successivo oppure integrarla nel processo di ammostamento con un periodo di riposo.

Nel processo di preparazione del decotto, il mosto parziale viene cotto mentre il mosto rimanente viene mantenuto alla temperatura desiderata. Il decotto con il Brautomat sarebbe simile a questo:

* Metti il mosto rimanente nel secondo bollitore. L'estrazione del resto del mash rimanente con autonext disattivato soddisfa questo compito.
* quindi accendere permanentemente la seconda caldaia alla temperatura desiderata con un periodo di riposo di zero minuti. autonext è attivato.
* Cuocere il mosto parziale nel primo bollitore per il tempo di riposo desiderato. autonext è attivato.
* Aggiungere il mosto rimanente del secondo bollitore al mosto parziale del primo bollitore. autonext è disabilitato.

I riposi in un piano di ammostamento in un ambiente a 2 o 3 caldaie seguono il seguente principio:

* Alla prima caldaia viene assegnato il mosto parziale da cuocere
* L'ammostamento residuo con mantenimento della temperatura viene assegnato alla seconda o terza caldaia
*La ricarica è sempre assegnata al secondo o terzo bollitore

## webhook

Il parametro PIN White Relay deve essere impostato su "-" in modo che gli elementi webhook vengano visualizzati nell'interfaccia web. Inoltre, sono richiesti l'URL del webhook e il comando audio:

![webhook](/docs/img/kessel_webhook1.jpg)

Esempio Shelly 13:00:

Attiva Shelly 13:00: <http://192.168.1.5/relay/0?turn=on>\
Disattiva Shelly alle 13: <http://192.168.1.5/relay/0?turn=off>

L'URL del webhook per Shelly 1PM è: <http://192.168.1.5/relay/0?turn=> (senza attivazione e disattivazione). Il parametro dell'interruttore webhook deve essere impostato su "on/off".

URL Tasmota: <http://192.168.x.x/cm?cmnd=Power1%201>
