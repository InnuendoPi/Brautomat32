# Preparare il piano cottura

## Creazione del bollitore per il mosto

Nella prima sezione _Maischeplan_ si crea la caldaia MashSud utilizzando l'ingranaggio in alto a destra.

![Crea un bollitore per il mosto](/docs/img/IDS-einrichten.jpg)

## Configurazione di un piano cottura

Innanzitutto è necessario configurare un piano cottura. In questa configurazione di base è predisposto un piano cottura a induzione GGM IDS.

La prima impostazione riguarda il tipo IDS, dove è possibile selezionare IDS1 o IDS2. Seguono tre parametri di controllo:

* PIN bianco [relè] - Default: D7
* PIN giallo [Comando] - Predefinito: D6
* PIN blu [Interruzione] - Default: - (non utilizzato) o D5

Questi GPIO (D5, D6 e D7) sono preconfigurati per il cavo di collegamento GGM IDS con presa JST-HX o la morsettiera a vite.

Successivamente, è necessario assegnare un sensore di temperatura al bollitore MashBud. La selezione viene effettuata da un elenco di sensori già impostati. In questa configurazione di base è presente solo il sensore _Sensor IDS2_, che viene selezionato di conseguenza.

_Nota_: _Un sensore di temperatura deve essere assegnato in modo permanente a un piano di cottura. Il valore del sensore viene chiamato temperatura effettiva o temperatura attuale e durante il processo di ammostamento viene continuamente confrontato con la temperatura residua (temperatura nominale)._

![Configura la caldaia per il mosto](/docs/img/IDS-configure.jpg)

I parametri della scheda "Controllo della temperatura" sono spiegati in dettaglio nella sezione "Tutti i parametri". Per la configurazione di base vengono inizialmente adottati i valori predefiniti.

![Configura la caldaia per il mosto](/docs/img/IDS-temperaturen.jpg)

## Configurazione del controller PID.

Dopo la configurazione di base, il controller PID deve essere impostato nella scheda Gestione PID. Il controller PID calcola automaticamente la potenza necessaria al piano cottura per portare la temperatura di ammostamento (temperatura effettiva) alla temperatura di riposo. Una precisa configurazione del PID garantisce che la temperatura di riposo rimanga costante durante tutto il periodo di riposo.

Il controller PID è impostato con due parametri:

* Ku (guadagno finale) – fattore di guadagno
* Pu (periodo finale) – durata del periodo

Da questi due valori si calcolano i parametri PID P, I e D. Questi parametri sono individuali per ciascun sistema di produzione della birra e vengono determinati utilizzando il processo AutoTune. Il processo AutoTune è descritto in dettaglio nella sezione "AutoTune passo dopo passo".

Per questa configurazione di base vengono inseriti i seguenti valori per Ku e Pu. Viene quindi selezionata la regola di ottimizzazione PID _IDS PID Modalità_:

![IDS](/docs/img/IDS-AutoTune-erg.jpg)

Non appena vengono immessi i valori per Ku e Pu, l'algoritmo PID selezionato determina automaticamente i tre valori P, I e D. Una spiegazione dettagliata di tutti i parametri seguirà in seguito.

## Valori iniziali per caldaie di diverse dimensioni

Per un bollitore da 36 litri con un volume di ammostamento di circa 20 litri:

"testo".
Fattore di amplificazione Ku (guadagno finale): 182
Durata periodo Pu (periodo ultimo): 2245
```

Per un bollitore da 70 litri con un volume di ammostamento superiore a 50 litri:

"testo".
Fattore di amplificazione Ku (guadagno finale): 225
Durata del periodo Pu (periodo ultimo): 1500
```

## Completamento della configurazione di base

Dopo aver salvato le impostazioni, la configurazione di base è completa. Ora puoi preparare la birra con un sensore di temperatura e un bollitore per il mosto.

_Nota: per il processo di preparazione vero e proprio è necessario un piano di ammostamento._
