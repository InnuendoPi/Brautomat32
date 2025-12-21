# Calibrazione

I sensori Dallas DS18B20 talvolta presentano deviazioni dalla temperatura effettiva. Le specifiche tecniche dei produttori spesso indicano una precisione di +-0,5°C nell'intervallo da -10°C a 85°C. Inoltre, i sensori vengono definiti calibrati.

Le deviazioni possono essere corrette utilizzando una calibrazione a 2 punti. La calibrazione tramite Brautomat è una correzione lineare. Per calibrare i sensori è necessario un termometro calibrato. Il bollitore viene riempito con una quantità tipica di acqua e riscaldato a 40°C. La differenza tra il valore del sensore e il termometro calibrato viene inserita nel parametro "Offset 1 \[40°C]". Questo processo viene ripetuto a 78°C e la differenza viene inserita nel parametro “Offset 2 \[78°C]”. In futuro, tutte le misurazioni dei sensori verranno emesse con questa correzione.

Per la calibrazione, il sensore di temperatura è impostato sulla modalità ad alta risoluzione (risoluzione a 12 bit o 0,0625°C). Una calibrazione tramite l'interfaccia web è composta da 60 valori misurati. Il tempo necessario per una calibrazione è quasi esattamente di 60 secondi. Il risultato della misurazione della temperatura è la media dei 60 valori misurati. Un offset è la differenza tra la temperatura effettiva e quella media.

In molti casi è sufficiente una calibrazione a 1 punto in un bagno di ghiaccio perché l'offset dei sensori DS18B20 è solitamente costante.

## Procedura per la calibrazione senza termometro di riferimento

Se non è disponibile un termometro di riferimento, la calibrazione può essere eseguita utilizzando un bagno di ghiaccio e un punto di ebollizione.
Per il campo di misura inferiore è necessario un contenitore con il 50% di cubetti di ghiaccio e il 50% di acqua fredda. Un bagno di ghiaccio ha una temperatura (quasi esattamente) di 0,0 °C. L'acqua ghiacciata deve essere agitata continuamente, preferibilmente con un agitatore magnetico. La calibrazione viene avviata in un bagno di ghiaccio a 0 °C.

Il secondo punto per la calibrazione può essere determinato tramite l'altitudine sul livello del mare e il relativo punto di ebollizione. A 0 m sopra il livello del mare o ad una pressione atmosferica di 1.013 bar, la temperatura di ebollizione è di 100,0°C. All’aumentare dell’altitudine, la pressione dell’aria e quindi la temperatura di ebollizione diminuiscono. Innanzitutto è necessario determinare il NHN locale, ad esempio tramite Google Earth. Per ogni metro sopra il livello del mare la temperatura di ebollizione diminuisce di 0,003354°C. Sul sito web di [rechneronline](https://rechneronline.de/barometer/siedepunkt.php) il punto di ebollizione viene calcolato in base all'altezza sul livello del mare. Molti smartphone offrono anche informazioni sull'altitudine nella bussola o nell'app di navigazione. L'altezza sopra il livello del mare deve essere determinata con una precisione di ca. +-20m. Ciò corrisponde a una variazione della temperatura del punto di ebollizione di 0,06708°C ed è quindi molto al di fuori della precisione del controllo Brautomat. La calibrazione del secondo punto viene effettuata utilizzando un bollitore per il mosto, un agitatore e il punto di ebollizione locale precedentemente determinato. La temperatura target è quindi la temperatura del punto di ebollizione. È importante assicurarsi che la temperatura del punto di ebollizione venga raggiunta e mantenuta per almeno un minuto prima di iniziare la calibrazione del range superiore. È inoltre molto importante che il piano rimanga acceso a potenza costante.

L'offset n. 1 (intervallo di valori inferiore) è la differenza di 0,0°C (bagno di ghiaccio) rispetto al valore medio della prima corsa di calibrazione. L'offset n. 2 (intervallo superiore) è la differenza tra il punto di ebollizione e la media della seconda esecuzione di calibrazione.

## Calibrazione della procedura con termometro clinico

Un termometro clinico è un termometro di riferimento adatto. Il campo di misurazione superiore di un termometro clinico è limitato a ca. 40°C. L'esecuzione della calibrazione corrisponde alla procedura per il bagno di ghiaccio e la temperatura di ebollizione. L'unica differenza: se si sceglie ad esempio 40°C come secondo punto di calibrazione, il piano cottura deve essere spento non appena viene raggiunta la temperatura nominale e rimane costante per ca. 60 secondi (nessuna fluttuazione). Solo allora il dÈ possibile avviare la calibrazione, ovvero la registrazione di 60 campioni di misurazione.

## File di registro della calibrazione del sensore

Per ogni calibrazione viene scritto un file di registro. Esempio:

"testo".
13:22:37 Calibrazione del sensore avviata
*** Nome del sensore: sensore IDS2
*** Modello: DS18B20
*** Indirizzo: 2827c59d0d0000b1
*** Risoluzione: 12 bit
*** Scadenza: 750ms
------------------------------------------------------
Scostamento differenziale effettivo target ID
#01 24,6000 24,0000 -0,6000 0,6000

 - Valori del sensore da 2 a 59 di conseguenza

#60 24,6000 25,1875 0,5875 -0,6083
------------------------------------------------------
Temperatura dell'offset n. 1: 24,6000
Media dopo 60 misurazioni: 25.2083
Scostamento n. 1: -0,6083
=========================================
```
