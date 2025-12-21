# Impostazioni del piano Mash

Il Brautomat offre una facile gestione dei piani di mash. Oltre a importare ed esportare, puoi passare da un piano di mash salvato all'altro. È anche possibile il controllo del tempo. Questo capitolo completa la descrizione delle funzioni base.

## Piano di mash

Il nome del piano di mash può essere specificato nelle impostazioni. Il nome del file deriva dal nome del piano di mash. I parametri *Tempo di cottura totale* e *Tempo di post-isomerizzazione* vengono visualizzati solo a titolo informativo e non possono essere modificati. Questi parametri vengono letti durante l'importazione della ricetta. Se un piano di ammostamento viene creato manualmente, il tempo di cottura e i valori di post-isomerizzazione sono irrilevanti perché il Brautomat non calcola le unità di amaro.

## Controllo del tempo

Con l'aiuto del controllo temporale è possibile pianificare e avviare automaticamente la giornata nuziale.

![Controllo temporale](/docs/img/Zeitsteuerung.jpg)

Con l'elemento DateTimerPicker puoi selezionare facilmente una data e un'ora. Il nome della ricetta viene temporaneamente sostituito dall'ora di inizio specificata.

![Controllo temporale](/docs/img/Zeitsteuerung2.jpg)

Un controllo orario attivato viene salvato nella configurazione. Quando la macchina per il caffè viene riavviata, vengono lette la data e l'ora impostate. Se l'inizio della preparazione è futuro, viene attivato il controllo del tempo. Se l'inizio dell'erogazione è nel passato, il controllo del tempo è disattivato.

## Gestisci i piani di mash

### Crea un piano di mash

Il nome del piano di mash deve essere inserito nel campo di immissione. Con *OK* viene creato un nuovo piano di mash vuoto.

### Rinomina il piano di mash

Il nuovo nome per il piano di mash deve essere inserito nel campo di immissione. Con *OK* il piano di mash viene salvato con il nuovo nome.

### Cambia il piano di mash

Il Brautomat gestisce i piani di mash nella memoria flash. Selezionando *Cambia piano di mash* è possibile passare da un piano di mash esistente all'altro.

### Importa il piano di mash

Il Brautomat può importare ricette di produzione della birra dalle seguenti fonti:

* KleinBrauhelfer2 (dalla versione 2.5 tipo di esportazione Brautomat)
* Mash malto e altro ancora
* Birraio
* Brautomat

Una ricetta di produzione della birra importata diventa un piano di ammostamento Brautomat. Si consiglia la gestione e creazione delle ricette con kbh2. Il filtro di esportazione "Brautomat" contiene in forma ottimizzata tutti i dati necessari per la preparazione della birra con il Brautomat.

Anche le ricette di MashMalzandMore dovrebbero essere prima importate nel piccolo ausilio di preparazione2 e adattate ai valori di sistema individuali, alle materie prime, ecc. Poiché MMum non assegna nomi di riposo, si consiglia di modificarli nel piano di ammostamento KBH2.

Ricette e birre possono essere importate da BrewFather tramite importazione di file o tramite chiamata API. In BrewFather, i nomi delle pause possono contenere un corpo di testo (di quasi qualsiasi lunghezza). Il testo viene abbreviato fino a un massimo di 50 caratteri. Brewfather consente numeri e testo in virgola mobile come tempo di riposo. I parametri vengono convertiti in numeri interi o impostati su 0.

*Nota: i microcontrollori ESP hanno una piccola quantità di RAM. Potrebbe non essere possibile importare ricette con testo, immagini o altri allegati molto lunghi. Il Brautomat filtra le ricette prima dell'importazione. Tuttavia, potrebbe essere necessario rimuovere immagini e descrizioni molto lunghe prima dell'importazione.

Le ricette importate vengono salvate nella cartella /Recipes. Il nome della ricetta viene utilizzato come nome del file. La lunghezza massima del nome file nel file system Arduino è di 31 caratteri. Gli spazi e le dieresi vengono sostituiti durante il salvataggio.

### Esporta il piano di ammostamento

Un piano mash può essere esportato in formato JSON. Per rileggerlo, l'importazione deve essere utilizzata nel formato Brautomat.

### Rimuovi il piano di mash

Il piano di mash selezionato viene rimosso dalla memoria flash.

## Importa impostazione predefinita

![Importa valore predefinito](/docs/img/voreinstellung_import.jpg)

Il Brautomat richiede una fase di ammostamento (opzionale) e una fase di ammostamento. InIn particolare, la fase di ammostamento serve come fase di separazione tra l'ammostamento e la cottura quando autonext è disattivato. Durante l'importazione, il Brautomat può inserire passaggi di ammostamento e ammostamento mancanti. Inoltre, le temperature mancanti possono essere fornite con specifiche.

### Valori predefiniti della temperatura per i parametri mancanti

Nelle ricette provenienti da fonti diverse potrebbero, tra le altre cose, mancare le informazioni sulla temperatura. Ciò vale in particolare per le temperature di ammostamento, ammostamento, mosto e hopping. La logica del programma interno del birraio richiede sempre una temperatura per la lavorazione, anche se alcune temperature non sono necessarie dal punto di vista del birraio. Le temperature mancanti sono preassegnate con valori predefiniti.

### Temperatura di ammostamento [°C]

Questo parametro serve per l'importazione delle ricette e descrive la temperatura predefinita per l'ammostamento. Questo parametro viene utilizzato solo se durante l'importazione della ricetta non viene specificata la temperatura di ammostamento.

### Temperatura di ammostamento [°C]

Questo parametro serve per l'importazione delle ricette e descrive la temperatura predefinita per l'ammostamento. Questo parametro viene utilizzato solo se durante l'importazione della ricetta non viene specificata la temperatura di ammostamento.

### Temperatura VWH [°C]

Questo parametro serve per l'importazione delle ricette e descrive la temperatura standard per la luppolatura del mosto. Le ricette spesso non specificano una temperatura per il VWH. È richiesta una specifica della temperatura per Brautomat. Se nella ricetta è specificata una temperatura, questa verrà utilizzata durante l'importazione.

### Temperatura WPH [°C]

Questo parametro serve per l'importazione delle ricette e descrive la temperatura predefinita per l'hopping dell'idromassaggio. Le ricette spesso non specificano una temperatura per il WPH. È richiesta una specifica della temperatura per Brautomat. Se nella ricetta è specificata una temperatura, questa verrà utilizzata durante l'importazione.

### Temperatura di cottura [°C]

Questo parametro descrive la temperatura alla quale il mosto bolle fino a bollire. Il valore standard è 98°C e corrisponde approssimativamente ad un luogo a 500 m sopra il livello del mare. Per l'importazione delle ricette questo parametro viene utilizzato come temperatura di cottura.
