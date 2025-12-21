# Visualizza

Il Brautomat può essere utilizzato opzionalmente con un display touch. È supportato il display touch da 3,5 pollici di Nextion

| Visualizzazione successiva | Firmware |
| --------------- | --------- |
| NX4832T035 (serie base) | [NX4832T035]([[PERCORSO_0]]) |
| NX4832K035 (serie migliorata) | [NX4832K035]([[PERCORSO_1]]) |
| NX4832F035 (serie Discovery) | [NX4832F035]([[PERCORSO_2]]) |

Il display richiede il firmware per funzionare con Brautomat. Il firmware che corrisponde al tipo di display è collegato nella tabella. Vedi anche lampeggiare il file di visualizzazione.

## Collega lo schermo

Il display è collegato alla scheda con 4 cavi

| Cavo | Visualizzazione successiva | Morsettiera di collegamento |
| ------------- | --------------- | ------------------------ |
|     rosso | Corrente + | Vcc |
|   nero | Elettricità - | TERRA |
|    blu | Tx | SDL (D1) |
|    giallo | RX | SDA (D2) |

![Connessione](/docs/img/disp1.jpg)

## File di visualizzazione flash

Il display deve essere preparato prima della messa in funzione. Per fare ciò, il firmware del display appropriato viene scaricato dal tavolo e salvato su una scheda microSD. La scheda microSD viene inserita nello slot per scheda SD sul display e il Brautomat è acceso. Il processo di flashing si avvia automaticamente. Lo stato del flash viene visualizzato sul display. Una volta completato, il Brautomat verrà spento e la scheda microSD verrà rimossa. La scheda microSD non è necessaria per il normale funzionamento.

## Visualizza il mash brew

![MashSud](/docs/img/brewpage-sm.jpg)

Il lato MashSud è il lato preferito durante la preparazione della birra. Le informazioni vengono visualizzate sul display ogni secondo

*Temperatura effettiva
*Temperatura target (temperatura di riposo)
*tempo di riposo rimanente

visualizzato. Nella riga inferiore viene visualizzata anche la pausa successiva. L'ora a sinistra è l'ora in cui inizierà il riposo successivo. Il simbolo di riproduzione verde a destra indica che la pausa successiva inizia automaticamente (autonext).

## Visualizza la panoramica della caldaia

![Panoramica caldaia](/docs/img/kettlepage-sm.jpg)

La panoramica della caldaia mostra la caldaia per l'ammostamento e, se disponibile, la caldaia per l'infusione e il versamento con le informazioni sulla temperatura effettiva e nominale.

_Nota: la vista panoramica della caldaia mostra l'indirizzo di Brautomat nella riga inferiore: il nome mDNS o l'indirizzo IP._

## Visualizzazione del controllo manuale

![Controllo manuale](/docs/img/induction-mode-sm.jpg)

La pagina di controllo manuale offre la possibilità di utilizzare manualmente il GGM IDS. I livelli di potenza possono essere regolati verso l'alto o verso il basso utilizzando i pulsanti + e -.
