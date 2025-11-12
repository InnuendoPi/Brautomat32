# Modalità fermentatore

In modalità fermentatore, il Brautomat32 elabora il piano di fermentazione dall'alto verso il basso allo stesso modo del piano di ammostamento. Il controller deck ha le stesse funzioni.

![Dashboard del fermentatore](/docs/img/fermenter_dash.jpg)

L'elaborazione dei passaggi presenta un'importante differenza:

La prima fase del piano di fermentazione viene avviata al raggiungimento della temperatura target. Questo è solitamente il momento in cui il lievito viene aggiunto al mosto. Tutte le fasi successive del piano di fermentazione iniziano immediatamente, indipendentemente dalla temperatura effettiva.

Per configurarlo, è possibile impostare un GPIO per il raffreddamento e un GPIO per il riscaldamento. Il raffreddamento o il riscaldamento sono opzionali.

![Impostazioni fermentatore](/docs/img/fermenter_set.jpg)

Il fermentatore ha tre diversi stati: raffreddamento, riscaldamento e inattività. Quando cambia lo stato del raffreddamento o del riscaldamento, inizia una pausa. Durante la pausa lo stato del fermentatore non cambia.

* Raffreddamento vecchio stato e raffreddamento nuovo stato: nessuna pausa. Il raffreddamento rimane acceso
* Riscaldamento vecchio stato e riscaldamento nuovo: nessuna interruzione. Il riscaldamento rimane acceso
* Vecchio stato raffreddamento e nuovo stato riscaldamento: pausa 120 s
* Vecchio stato riscaldamento e nuovo stato raffreddamento: pausa 120 s

## Rampa

Una fase del fermentatore è specificata con una temperatura iniziale e una finale. Nella prima figura di questa sezione, la temperatura nella prima fase del fermentatore è 18°C. Naturalmente questo significa che la temperatura di fermentazione rimane invariata per un periodo di 1 giorno.

Nella seconda fase di fermentazione la temperatura iniziale è di 18°C ​​e la temperatura finale è di 20°C. La durata di questa fase del fermentatore viene inserita come 2 giorni. Ora ci sono due modi per passare dalla temperatura iniziale a quella finale:

Quando la rampa è attivata, il Brautomat controlla la temperatura di fermentazione in modo lineare durante la durata specificata per questa fase. In questo caso la temperatura viene aumentata da 18°C ​​a 20°C con incrementi di +0,1°C nell'arco di 2 giorni.

Con rampa disattivata, la temperatura finale viene stabilita all'inizio della fase di fermentazione, tramite raffreddamento o riscaldamento. Una volta stabilita la temperatura finale, viene mantenuta.

## Ciclo di commutazione del relè

Il ciclo di commutazione del relè determina per quanto tempo viene mantenuto uno degli stati di raffreddamento, riscaldamento o inattività. L'intervallo di valori consentito è compreso tra 1000 e 240000 ms. Il valore predefinito è 120000, ovvero 120 secondi. Un ciclo di commutazione troppo breve può avere un impatto negativo sui dispositivi di raffreddamento.

##Visualizza

In modalità fermentatore è necessario selezionare la visualizzazione MashSud (pagina 2). La panoramica della caldaia e la visualizzazione del controllo manuale non possono essere utilizzate per la modalità fermentatore.
