#KleinerBrauhelfer2

A partire dalla versione 2.5.0 il programma [ kleineBrauhelfer2](https://kleiner-brauhelfer.de/) dispone di un filtro di esportazione per il Brautomat. Lo sviluppo e la progettazione delle ricette sono possibili in ogni dettaglio immaginabile con il piccolo ausilio per la preparazione della birra2. Con il cheat sheet, kbh2 offre un diagramma di flusso molto valido e utile per l'implementazione pratica nella cucina del birrificio. Con il filtro di esportazione per Brautomat è possibile adottare tutti i passaggi.

## Il piano di schiacciamento delle schede kbh2

Nella scheda Mash Plan, kbh2 offre quattro modi diversi per aggiungere malti al mash: ammostamento, riscaldamento, fermentazione e decozione. Tutti e quattro i tipi sono supportati in Brautomat. Il tipo Mashing viene inserito automaticamente con autonext disabilitato. Riscaldamento e preparazione con autonext attivato. Il decotto si effettua con autonext disattivato.

![Cucina](/docs/img/kbh2-maischplan.jpg)

 Il Brautomat richiede una fase di ammostamento per riconoscere la fine dell'ammostamento e il passaggio alla lauterizzazione. Nel piano di ammostamento kbh2, alla fine dovrebbe essere aggiunta una fase di ammostamento di tipo “riscaldamento” a 76°C o superiore e una durata di 1 minuto. In questa combinazione, l'ammostamento viene riconosciuto da Brautomat e inserito con autonext disattivato.

![Cucina](/docs/img/kbh2-maischplan2.jpg)

### Esempio 1: kbh2 Earl Scheidt cucina il processo di ammostamento

[Conte Scheid](http://hb-tauschboerse.bplaced.net/Neues_Maischverfahren.htm)

Il processo di cottura dell'ammostamento di Earl Scheid può essere pianificato molto bene con il meineBrauhelfer2 e può essere eseguito in modo molto semplice e automatico utilizzando il Brautomat. Si prega di notare che tra i due ammostamenti parziali è necessaria una fase di ammostamento della birra (colata principale e parte del malto 2). A seconda del volume di malto 2, la procedura consigliata è di lavorare con autonext disattivato per la fase di preparazione della birra in modo da avere tempo sufficiente per l'ammostamento nel malto 2 prima che inizi il secondo riposo di maltosio. In alternativa, ca. Come temperatura target nell'incrocio di miscelazione tra colata principale/malto 1 e colata principale/malto 2 è possibile selezionare 60°C con riscaldamento diretto (autonext) a 63°C.

### Esempio 2: decotto kbh2

Il Brautomat supporta processi di decozione con modalità semi-automatica. Ad esempio, se è stato disegnato un mash parziale, il Brautomat richiede informazioni (fare clic su Riproduci) quando questo passaggio parziale viene completato. Creare ricette in kbh2 e importarle in Brautomat semplifica le giornate di preparazione della birra con il decotto. Una descrizione delle opzioni si trova nelle istruzioni di kleineBrauhelfer2.

## La cottura della scheda kbh2

I 5 tipi di aggiunta di luppolo front wort, inizio bollitura, bollitura, fine bollitura e battitura vengono presi dal piccolo ausiliario di preparazione2 e inclusi nell'ordine richiesto nel piano di ammostamento di Brautomat.

Una specificazione del tempo in kbh2 nella scheda Cottura significa "per quanto tempo viene cotta l'aggiunta di luppolo". Il tempo di cottura determina, tra le altre cose: Amarezza e aroma. Vedi anche la raccolta di formule in kbh2.
La specifica temporale kbh2 "per quanto tempo viene cotta l'aggiunta di luppolo" viene convertita in una specifica temporale "a che ora avviene l'aggiunta di luppolo" quando importata nel Brautomat.

![Cucina](/docs/img/hopfen.jpg)

### Fai un po' di calcoli avanti e indietro

L'aggiunta del luppolo è mostrata nella figura kbh2. La prima aggiunta di luppolo è “Hallertauer Perle 7% 2020” con un tempo di bollitura di 65 minuti. Un secondo parametro è importante in questo contesto: sul lato sinistro è segnato in verde il tempo totale di cottura pari a 80 minuti. Quindi il mosto viene fatto bollire senza luppolo per 15 minuti. La seconda aggiunta di luppolo è il luppolo "Hallertauer Tradition 5,7% 2020" con un tempo di bollitura di 15 minuti. Negli ultimi 15 minuti di cottura del mosto, all'Hallertau Perle restano ancora 15 minuti di tempo di cottura dei 65 minuti originali e la seconda aggiunta di luppolo Hallertau Tradition cuoce per 15 minuti dei restanti 15 minuti di cottura. L'ultima aggiunta di luppolo viene effettuata per battitura, cioè dopo la fine della bollitura.

Il compito di Brautomat è quello di indicare il momento in cui aggiungere il luppolo durante la preparazione della birra e idealmente con un aktustiun piccolo segnale per ricordarvi l'aggiunta del luppolo.

In questo esempio viene specificato un tempo di cottura totale di 80 minuti e una prima aggiunta di luppolo “Hallertauer Perle” con un tempo di cottura di 65 minuti. Ciò si traduce in una differenza di 15 minuti di tempo di cottura senza aggiungere luppolo. Il primo passaggio, la bollitura del mosto, dura 15 minuti. Ora bisogna fare la prima aggiunta di luppolo. La seconda aggiunta di luppolo “Hallertauer Tradition 5,7% 2020” ha un tempo di cottura di 15 minuti. Dei 65 minuti, 15 minuti sono Hallertau Pearl e Hallertau Tradition insieme nel mosto. 65 minuti meno 15 minuti danno come risultato un intervallo tra le aggiunte di luppolo di 50 minuti. L'aggiunta di luppolo Hallertauer Perle deve essere somministrata 50 minuti prima dell'aggiunta di luppolo Hallertauer Tradition.

L'ultimo lotto di luppolo “Hallertauer Tradition 5,7% 2020” viene dato per bussare. Quando lo spegni, la cottura è terminata. Quindi l'aggiunta del luppolo non conta nel tempo totale di cottura.

![Cucina](/docs/img/hopfengaben.jpg)

L'aggiunta del luppolo si comporta allo stesso modo. C'è un tempo di post-isomerizzazione di 10 minuti. L'aggiunta del luppolo “Hallertauer Tradition 5.7% 2020” per la battitura con un tempo di ebollizione di -5 minuti fa parte della post-isomerizzazione.

_Suggerimento: se vengono aggiunte due aggiunte di hop contemporaneamente, il tempo di aggiunta del primo hop è impostato su 0 minuti e il tempo di aggiunta del secondo hop è impostato sul tempo di aggiunta effettivo. La logica è semplice in base al calcolo di cui sopra: l'intervallo tra due aggiunte di hop allo stesso punto zeo è 0 minuti._

Le aggiunte da kbh2 dalle schede Mashing e Boiling si comportano allo stesso modo delle aggiunte di luppolo. Gli additivi delle schede kbh2 per il trattamento dell'acqua e la fermentazione non sono supportati.
