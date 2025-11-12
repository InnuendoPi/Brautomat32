# AutoTune Passo dopo passo

La procedura pratica AutoTune si presenta così:

![AutoTune](/docs/img/IDS-AutoTune.jpg)

1. Riempi il bollitore con una quantità normale di acqua

    un. Una quantità tipica corrisponde al riempimento della caldaia composto da getto principale e riempimento

    Esempio: 20 l di colata principale e 5 kg di riempimento danno come risultato una quantità tipica di 25 l di acqua per il processo AutoTune

    b. Accendi il mixer
2. Impostare una temperatura target AutoTune.

    un. la temperatura target dovrebbe essere di 50°C o più.

    B. La temperatura target dovrebbe essere almeno 10°C superiore alla temperatura effettiva attuale.

3. Attiva “PID AutoTune”
4. Abilita "AutoTune debug"
5. Salva questa impostazione
6. Facendo clic sul pulsante di accensione si avvia il processo AutoTune.

![AutoTune2](/docs/img/IDS-AutoTune-start.jpg)

Il processo AutoTune è composto da due fasi. La fase 1 si sta riscaldando alla temperatura target. Una volta raggiunta la temperatura target, il piano cottura si spegne. Talvolta la temperatura target viene notevolmente superata di 2-3°C. Per il processo AutoTune è necessario superare significativamente la temperatura target. Segue una fase di raffreddamento al di sotto della temperatura target. Queste due fasi si ripetono 5 volte. A seconda dell'ambiente, il processo AutoTune richiede un tempo relativamente lungo (90 minuti o più). La maggior parte del tempo è necessario durante le fasi di raffreddamento. Migliore è l'isolamento del bollitore, più a lungo dura il processo AutoTune o la fase di raffreddamento. Il processo AutoTune dovrebbe essere eseguito ad una temperatura tipica di ammostamento di ca. 60°C. Lo stato attuale viene visualizzato nella colonna "AutoTune Processo 0/5". Il primo numero è il passaggio corrente e il secondo numero è il numero di AutoTune passaggi previsti. I valori misurati vengono determinati durante il processo AutoTune. I valori misurati vengono costantemente controllati. Se un valore misurato mostra una deviazione, la misurazione viene ripetuta. Se ripetuto, viene visualizzato "AutoTune Processo 6/5". Vengono effettuate un massimo di 20 ripetizioni. Il risultato di AutoTune viene visualizzato nelle impostazioni GGM IDS nella scheda Gestione PID:

![AutoTune3](/docs/img/IDS-AutoTune-erg.jpg)

Il processo AutoTune è completato e i parametri di sistema determinati vengono salvati automaticamente.\
Il risultato di AutoTune è il fattore di amplificazione Ku (guadagno finale) e la durata del periodo (periodo finale). P, I e D vengono calcolati da questi due parametri. Sono disponibili vari algoritmi per il calcolo dei valori PID. Il Brautomat utilizza un algoritmo PID ottimizzato per la preparazione della birra (in realtà per il riscaldamento di liquidi) e viene utilizzato, ad esempio, anche nell'addon CraftBeerPi PIDBoil.

_Suggerimento: dopo il processo AutoTune, la configurazione dovrebbe essere salvata utilizzando un backup._

Una volta terminato il processo AutoTune e attivato il "AutoTune debug", il registro "AutoTune\_log.txt" può essere visualizzato tramite Explorer. Tutte le informazioni vengono registrate in questo file di registro.\
Il risultato di AutoTune viene salvato in formato JSON nei file "idsAutoTune.txt", "sudAutoTune.txt" o "hltAutoTune.txt". I file sono puramente informativi e non sono necessari per il funzionamento. In questi file sono elencati i valori dei PID secondo diversi metodi di calcolo.

Nel registro sono elencati i seguenti metodi di calcolo:

INTEGRALE PID\
QUALCHE SUPERAMENTO PID\
NESSUN SUPERAMENTO PID\
ZIEGLER NICHOLS PID\
ZIEGLER NICHOLS PI\
TYREUS LUYBEN PID\
TYREUS LUYBEN PI\
CIANCONE MARLIN PID\
CIANCONE MARLIN PI

I valori calcolati dei diversi algoritmi possono essere inseriti nelle impostazioni selezionando INDIVIDUAL_PID nelle righe P, I e D. Ciò tuttavia dovrebbe portare a risultati migliori solo in rari casi.
