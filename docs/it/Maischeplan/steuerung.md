# I controlli

Direttamente sotto il piano di mash c'è il deck controller. Il processo di ammostamento è controllato con i 5 pulsanti Power, Play, Pause, Previous e Next.

![Controllo](/docs/img/Buttons.jpg)

## Pulsante di accensione

Il pulsante di accensione viene utilizzato per accendere e spegnere il processo di ammostamento. Se la funzione AutoTune è attivata nelle impostazioni di un piano cottura, il processo AutoTune viene avviato o interrotto tramite il pulsante di accensione.

## Pulsante Riproduci

Il pulsante Play ha due funzioni nel processo di ammostamento:

1. La prima funzione è _Avviare il timer di riposo per il riposo corrente_. Il pulsante Play avvia il timer di riposo indipendentemente dalla temperatura EFFETTIVA.\
Esempio: Se il mosto sta già bollendo nella fase di bollitura, ma la temperatura EFFETTIVA di 98,5°C è inferiore alla temperatura di riposo di 100°C, il timer di riposo non si avvia.

2. La seconda funzione del pulsante Play è collegata alla proprietà _autonext_: continuare il processo di ammostamento con il riposo successivo. In questa funzione il pulsante di riproduzione viene visualizzato in rosso. La funzione _Continua il processo di ammostamento con il resto successivo_ verrà spiegata più avanti nella descrizione _autonext_ nel piano di ammostamento.

## Pulsante Pausa

La funzione del pulsante pausa può essere distinta durante la fase di riscaldamento a temperatura di riposo e durante un riposo.

- Pausa durante la fase di riscaldamento

Se il processo di preparazione viene avviato con il pulsante di accensione, i pulsanti per modificare il piano di ammostamento vengono nascosti. Se si fa clic sul pulsante di pausa, i simboli di modifica verranno visualizzati nuovamente. Durante una pausa attivata, il piano cottura rimane acceso per raggiungere la temperatura target. Il pulsante Pausa verrà quindi visualizzato in rosso. Con l'aiuto di una pausa, il programma di ammostamento può essere modificato durante il processo di produzione della birra. Se durante una pausa viene raggiunta la temperatura di riposo, viene avviato il timer della pausa e la pausa termina.

- Pausa durante il riposo

Durante un riposo, anche il timer di riposo nel processo di ammostamento viene interrotto utilizzando il pulsante Pausa. Il pulsante Pausa verrà quindi visualizzato in rosso. Durante una pausa la temperatura effettiva viene mantenuta rispetto alla temperatura nominale di riposo, ovvero il controller PID e quindi il piano di cottura rimangono attivi. Con l'aiuto di una pausa durante il riposo è possibile modificare il piano di ammostamento. La durata della pausa prolunga il tempo di riposo precedente.

## Pulsante Precedente

Il pulsante Prec salta al passaggio precedente nel piano di mash. Se il processo di ammostamento è stato interrotto, il timer del riposo corrente viene ripristinato e riavviato.

##Pulsante Avanti

Il pulsante Successivo salta al passaggio successivo del piano di ammostamento o, se era l'ultimo passaggio del piano, termina il processo di ammostamento.

## Pulsante Comprimi

Il pulsante Comprimi comprime o comprime la tabella del piano di mash.

![Maischeplan](/docs/img/Maischeplan-anzeigen.jpg)

Il pulsante di chiusura rimane visibile anche dopo l'avvio dell'erogazione. Tutti i pulsanti per modificare il piano di ammostamento vengono nascosti dopo l'avvio della preparazione.
