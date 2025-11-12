# Il Brautomat

![ESP32](https://img.shields.io/static/v1?label=Arduino&message=ESP32&logo=arduino&logoColor=white&color=blue)

Il Brautomat è un controllo di erogazione per il ESP32 D1 mini. Il Brautomat viene utilizzato nel birrificio e offre un controllo intuitivo e facile da usare. Durante l'ammostamento le temperature di riposo vengono raggiunte automaticamente e i tempi di riposo vengono rispettati. Il Brautomat supporta anche la bollitura del mosto e l'aggiunta di luppolo e ingredienti. Nel processo di infusione ascendente, il Brautomat può automatizzare completamente il processo di ammostamento.

> **Nota:**
Questa pagina è stata tradotta automaticamente dalla documentazione originale tedesca.
\
Queste istruzioni vengono costantemente ampliate, corrette o migliorate. Originariamente nel progetto Brautomat era possibile controllare solo il piano cottura a induzione GGM IDS2. Dalla versione 1.48 è possibile collegare in modalità relè anche altri piani cottura. Le istruzioni descrivono in molti punti le funzioni con un GGM IDS. Solo la modalità manuale è adatta esclusivamente al GGM IDS2. Tutte le altre funzioni e opzioni sono disponibili anche per altri piani cottura.

 ---

## Layout di questa guida

Queste istruzioni non sono in ordine e non è necessario leggerle dall'alto verso il basso. Per l'inserimento nel Brautomat si consiglia l'argomento _Software_, in particolare il capitolo _Il piano di mash_. Nel capitolo _Il piano di ammostamento_ alla fine della spiegazione delle funzioni è riportato un esempio di giornata di preparazione.

Questa guida è divisa in tre aree tematiche:

* Software: l'uso del firmware Brautomat
  * Installazione
  * Configurazione di base
  * Il piano di poltiglia
  * AutoTune PID
  * Sensori, bollitori, ricariche e attuatori
  * Modalità fermentatore
* Hardware: il circuito stampato e le opportune estensioni
  * La struttura e le connessioni del circuito
  * Lo schermo
  * Custodia 3D
  *hardware aggiuntivo
* Informazioni e domande frequenti
  * piccolo aiutante per la preparazione della birra2
  * il dispositivo MQTT

L'area tematica _Software_ si conclude con un riepilogo _Parametri in sintesi_. Dettagli e informazioni vengono forniti per molti parametri per semplificare la configurazione e l'utilizzo.

## Brautomat Versione di rilascio

La versione di rilascio di Brautomat è compilata con l'attuale framework stabile espressif. Questa versione è per uso produttivo. La versione release viene fornita senza il modulo Logging. La versione è leggermente più veloce. La versione di rilascio dovrebbe essere utilizzata preferibilmente.

## Brautomat Versione di sviluppo

La versione di sviluppo di Brautomat è compilata con l'attuale framework esspressif. Questa versione viene fornita con il modulo Logging. Le nuove funzionalità e le correzioni di bug vengono rilasciate per la prima volta nella versione di sviluppo. Questa versione può essere utilizzata in modo produttivo, ma non è consigliata.
