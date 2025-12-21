# Struttura della versione 2 del tabellone

Questa breve guida descrive la struttura del tabellone. La struttura del consiglio non è impegnativa. Questa breve descrizione è intesa come aiuto per gli hobbisti inesperti e non è rivolta agli ingegneri elettrici. Informazioni sulla saldatura, sui saldatori adatti e sulle saldature si trovano su YouTube o canali simili.

L'elenco delle parti della scheda:

![BOM](/docs/img/Aufbau1.jpg)

Numero 1: resistenza 4,7 kOhm\
Numero 2: presa JST-HX (bianca) e morsettiera a vite a 5 pin\
Numero 3: cicalino piezo passivo\
Numero 4: morsettiere a vite con passo di 2,54 mm

## Elenco delle parti per la scheda versione 2

La posizione della presa JST-HX è un'alternativa alla morsettiera a vite a 5 pin. Il cavo proveniente dal pannello di controllo del GGM IDS2 ha la spina adatta per una presa JST-HX. Se viene utilizzato un cavo sostitutivo al posto del cavo originale, il collegamento è più semplice con una morsettiera a 5 viti.

| Numero | Nome articolo | Collegamento all'articolo |
| ----------------------------------------------------- | ------------------------------- | --------------------------------- |
| 3| Morsettiera a vite 3 poli RM 2,54 | [amazon](https://www.amazon.de/dp/B07PH5HWQL/?coliid=I1JP3GL9UZVHAK&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 opzionale | Morsettiera a vite 3 poli RM 2,54 | |
| 1| Morsettiera a vite 5 poli RM 2,54 | [amazon](https://www.amazon.de/dp/B07PJ71VW8/?coliid=I3AGEWLU82MSU5&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 alternativa alla morsettiera a vite a 5 poli | Presa JST-HX 90° RM 2,54 | (voelkner D17526) |
| 2| Morsettiera a vite 8 poli RM 2,54 | [amazon](https://www.amazon.de/dp/B07PJ7YK3G/?coliid=I2SR2XJ0B6HEW9&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 2| Morsettiera a vite 12 poli RM 2,54| [amazon](https://www.amazon.de/dp/B07NZ459BY/?coliid=I2HTZO5ENXO2Q6&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1| Intestazione pin RM 2,54 | [amazon](https://www.amazon.de/dp/B01MQ5HJYQ?ref_=pe_27091401_487187591_302_E_DDE_dt_1) |
| 1| Resistenza 4,7kOhm | [amazon](https://www.amazon.de/dp/B0CL6N7334/?coliid=IVHTTAGFDF3TX&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1ZKFZ0X0XNS2PX9FJN3H) |
| 1 opzionale | Cicalino passivo 12mm 3V | [amazon](https://www.amazon.de/dp/B0179I6LIK/ref=pe_27091401_487027711_TE_SCE_dp_i1) |
| 1 ESP32 | ESP32 D1 mini | [amazon](https://www.amazon.de/dp/B08BTRQNB3/?coliid=I3GILWFH2TDYH9&colid=I7GQB171JGLX&ref_=list_c_wl_lv_ov_lig_dp_it&th=1) |
| 1 opzionale | Visualizza Nextion 3.5" | [amazon](https://www.amazon.de/dp/B09PL9CTZ7/?coliid=I14PAW5R7XN3MC&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_15EQ8G7TVRFSGNWTHM5Y) |
|                                                       |                                |                                   |

_Nota: i link o i numeri degli articoli elencati sono puramente informativi e non collegati a programmi di affiliazione/marketing._

Il display Nextion da 3,5 pollici è disponibile nelle versioni Basic, Discovery o Enhanced. Il modello attualmente più economico può essere selezionato per il Brautomat. I display da 2,8 pollici o più piccoli e da 4 pollici e più grandi hanno una risoluzione pixel diversa e non sono supportati da Brautomat!

## Considerazioni prima della costruzione

Il piano può essere attrezzato diversamente a seconda del collegamento al piano ad induzione GGM IDS:

1.1 Viene utilizzato il cavo originale del pannello di controllo GGM IDS

In questo caso è necessaria la presa JST-HX bianca (numero 2 nella foto). In questo caso la morsettiera a 5 viti nella figura direttamente accanto alla presa JST-HX non viene utilizzata.

1.2 Viene utilizzato un cavo sostitutivo

In questo caso non viene utilizzata la presa bianca JST-HX, ma la morsettiera a 5 viti.

Quindi nella scheda viene inserita la presa JST-HX o la morsettiera a 5 viti.

## Inserire le morsettiere a vite

Due note sull'inserimento delle morsettiere a vite:

1. L'apertura delle morsettiere a vite è sempre rivolta verso l'esterno (lontano dalla scheda elettronica).
2. Le morsettiere a vite sono fissate con un punto di saldatura. Successivamente viene controllato il corretto adattamento. Tutti i punti di saldatura vengono quindi saldati.

Di seguito i morsetti a vite vengono inseriti e saldati passo dopo passo.\
Nel passaggio numero 1 zmorsettiere a vite bianche a 12 pin utilizzate. I GPIO da D9 a D19 da ESP32 sono collegati alle 12 morsettiere a vite.

![Morsettiera a vite](/docs/img/Aufbau2.jpg)

Ora capovolgi la scheda e fissa ciascuna morsettiera a vite con un punto di saldatura. Ora controlla che i morsetti a vite siano posizionati correttamente. Tutti i pin devono essere inseriti correttamente nei punti di saldatura. Tutti i pin vengono quindi saldati.

Nella fase numero 2 vengono inserite le due morsettiere a vite a 8 pin. I GPIO da D0 a D8 da ESP32 sono collegati alle 8 morsettiere a vite.

![Morsetti a vite](/docs/img/Aufbau3.jpg)

La scheda ora appare così in questo stato:

![Morsetti a vite](/docs/img/Aufbau4.jpg)

Nella fase numero 3, le tre morsettiere a 3 viti vengono inserite e saldate.

![Morsettiera a vite per sensori](/docs/img/Aufbau5.jpg)

I sensori di temperatura DS18B20 sono collegati alle tre connessioni. Non esiste un ordine o una gerarchia per queste tre connessioni. Se si utilizzano solo sensori analogici PT100x, le tre morsettiere a vite possono essere omesse.

Con la versione 2.1 della scheda, è possibile utilizzare una morsettiera opzionale a 3 viti nella posizione GND accanto alle morsettiere a 3 viti per i sensori. I collegamenti GND aggiuntivi sono utili quando si utilizzano attuatori (pompe, agitatori, ecc.). Se non vengono utilizzati attuatori, la morsettiera a vite può essere omessa.

Nella fase numero 4, viene inserita e saldata la presa JST-HX per il cavo originale o una morsettiera a 5 viti per il cavo sostitutivo: (vedere considerazioni prima del montaggio).

![JST-HX o morsettiera a vite](/docs/img/Aufbau6.jpg)

## Il cicalino piezoelettrico

Il cicalino piezoelettrico è opzionale. Questo passaggio può essere saltato se non si desiderano segnali acustici.\
Il cicalino piezoelettrico ha un polo positivo e uno negativo

![Cicalino Più Meno](/docs/img/Aufbau8.jpg)

Il polo positivo viene inserito nella marcatura D8 e quindi il polo negativo nella marcatura GND.

![Cicalino](/docs/img/Aufbau7.jpg)

## La resistenza da 4,7 kOhm

La resistenza da 4,7 kOhm è obbligatoria per i sensori di temperatura Dallas DS18B20. Se vengono utilizzati solo sensori analogici PT100x, il resistore può essere omesso.

![Resistenza](/docs/img/Aufbau9.jpg)

I piedini della resistenza sono piegati di 90° (ad esempio attorno ad un cacciavite a taglio). Il resistore viene quindi inserito nella posizione etichettata "4k7". La direzione non deve essere presa in considerazione. Il colore di base dei resistori è spesso blu o color sabbia. Gli anelli colorati mostrano la resistenza elettrica:

Resistenza da 4,7kOhm con 4 anelli: giallo - viola - rosso - [tolleranza]

Resistenza da 4,7kOhm con 5 anelli: giallo - viola - nero - marrone - [tolleranza]

![Resistenza](/docs/img/Aufbau10.jpg)

Le gambe della resistenza sono piegate leggermente verso l'esterno sul retro e saldate. Usa le taglierine laterali per tagliare le gambe sopra l'occhiello di saldatura.

## Montare il microcontrollore ESP

Montando la base, il microcontrollore ESP può essere rimosso dalla scheda in qualsiasi momento. Il socketing è utile anche durante la risoluzione dei problemi.

![Socket](/docs/img/Aufbau14.jpg)

La fornitura dei microcontrollori ESP comprende l'adattatore numero 1. Inoltre è necessaria una basetta pin numero 2 con un passo di 2,54 mm.

![Elenco parti](/docs/img/Aufbau11.jpg)

Per il socket sono necessari adattatori e connettori maschio. Il connettore pin viene prima inserito nell'adattatore, come mostrato nel numero 3. Successivamente vengono inseriti gli adattatori con pin strip nel circuito stampato, due a sinistra e due a destra

_Suggerimento: l'intestazione del pin viene fornita come intestazione da 40 pin. L'intera lunghezza dell'intestazione del pin viene inserita nell'adattatore. La sporgenza dell'adattatore è piegata all'estremità._

![Socket](/docs/img/Aufbau12.jpg)

Ora l'ESP è montato e fissato con un punto di saldatura su ciascun lato. Ora viene controllato l'adattamento delle basi. Tutti i punti di saldatura vengono quindi saldati.

![ESP32]([[PERCORSO_22]])

Infine, tutti i punti di saldatura dovrebbero essere praticatiessere controllato. Quando tutti i punti di saldatura sono chiusi, il Brautomat è pronto.
