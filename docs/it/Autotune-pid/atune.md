# processo AutoTune.

Il processo AutoTune determina i parametri adatti per il sistema di produzione della birra in modo che il controllo della temperatura nel processo di ammostamento possa essere effettuato nel modo più accurato possibile. Il focus è sulle temperature EFFETTIVE e sulle corrispondenti temperature TARGET. In pratica ciò significa che il superamento e il mancato raggiungimento dovrebbero essere ridotti al minimo.

Nota: un superamento (superamento della temperatura impostata) di 0,5°C è normale. A seconda dell'isolamento della caldaia e dell'energia di induzione fornita, la temperatura continuerà ad aumentare leggermente anche dopo lo spegnimento del piano cottura.

![Sintonizzazione automatica4](/docs/img/IDS-AutoTune-Ziel.jpg)

La seguente descrizione dei valori PID è intesa solo come aiuto nell'uso del firmware e può essere saltata. Il processo AutoTune è descritto partendo da "Il processo AutoTune: passo dopo passo."\
Il controller PID controlla le prestazioni dei piani cottura. È importante determinare i valori P, I e D appropriati. I valori PID sono individuali per ciascun sistema e ambiente di produzione della birra. AutoTune è una procedura che aiuta a determinare i valori adatti. La potenza necessaria ai piani cottura per passare dalla temperatura effettiva alla temperatura target si calcola dalla somma dei tre valori: Potenza richiesta = P + I + D\
Una volta determinati i valori PID adeguati, il parametro Interval (SampleTime) viene utilizzato per determinare gli intervalli di tempo in cui deve essere calcolata la prestazione richiesta.

## Il valore P

Questo parametro influenza la differenza tra la temperatura effettiva e quella target. Quanto maggiore è la differenza tra la temperatura effettiva e quella nominale, tanto più il piano di cottura si riscalda con la componente P. Se la temperatura target viene raggiunta o superata, la componente P è uguale a 0. Un valore P molto elevato provoca un forte superamento o sottoelongazione.

## Il valore io

Il valore I aumenta continuamente partendo da zero man mano che il piano si riscalda. Quanto più tempo impiega l'Ochfeld per passare dalla temperatura effettiva a quella target, tanto maggiore diventa il valore I. Insieme al valore P risulta la seguente addizione: all'avvicinarsi della temperatura target, il valore P diminuisce e il valore I aumenta. La temperatura nominale viene raggiunta solo tramite il valore I. Al di sopra della temperatura nominale il valore I diminuisce nuovamente. Il valore I crea un superamento.

## Il valore D

Il valore D è uno smorzatore che smorza le oscillazioni delle prime due parti P e I. Troppo D rallenta il riscaldamento e il raffreddamento. Questo valore può anche essere zero.

## Intervallo (SampleTime)

Il calcolo del PID avviene continuamente. L'intervallo descrive il ciclo. In ogni intervallo viene rilevata continuamente la differenza tra la temperatura effettiva e quella nominale nonché la variazione della temperatura effettiva. Un intervallo troppo piccolo (ad esempio 1000 ms) porta ad uno "sfarfallio" della temperatura effettiva nel senso di errori di arrotondamento +- 0,0625°C con una risoluzione di 12 bit. Un intervallo troppo lungo (ad esempio 7000 ms) porta a un comportamento lento. Un intervallo di 2000 ms o 3000 ms dovrebbe funzionare bene nella maggior parte degli ambienti. Come dimensione dell'intervallo è possibile utilizzare solo un multiplo di 1000 ms (1000, 2000, ... 7000).
