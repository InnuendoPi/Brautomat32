# Connessioni

![Scheda 2](/docs/img/Anschluesse.jpg)

## Collega l'ID GGM

L'impostazione predefinita per il piano cottura a induzione è:

| Digitare | Colore | Connessione |
| ------------- | --------------- | ------------------------ |
| Interruzione | blu/verde | - (non occupato) o D5 |
| Comando | giallo | D6 |
| Relè | bianco | D7 |
| Tensione + | rosso | 5V/Vcc |
| Tensione - | nero | TERRA |
| |  | |

Sullo schema elettrico i 5 collegamenti per il piano cottura a induzione sono contrassegnati "GGM". Il cavo di collegamento del GGM dalla centrale ha il cavo blu, mentre il cavo sostitutivo ha il cavo verde.

Il Brautomat incluso il display può essere utilizzato con l'alimentazione del GGM IDS. Tutto quello che devi fare è collegare i cavi rosso e nero ai terminali a vite contrassegnati. In questo caso non è necessario collegare un ulteriore alimentatore aggiuntivo al microcontrollore ESP.

In alternativa, il Brautomat può essere utilizzato con un'alimentazione da 5 V CC. In questo caso il cavo rosso non è collegato al GGM IDS.

## Collega i sensori di temperatura Dallas DS18B20

Il Brautomat supporta fino a tre sensori di temperatura DS18B20. Il connettore è contrassegnato da DS18B20-1 a DS18B20-3 sull'illustrazione della scheda. I colori dei cavi dei sensori sono diversi. Per i sensori molto economici senza etichetta o descrizione, lo schema dei colori è solitamente nero - rosso - giallo.

| Digitare | Colore | Connessione |
| ------------- | --------------- | ------------------------ |
| Tensione + | verde o rosso | Vcc |
| Linea dati | bianco o giallo | Dati |
| Tensione - | marrone o nero | TERRA |
| |  | |

Non esiste un ordine di connessione per i sensori digitali Dallas DS18B20.

## Collega i sensori di temperatura PT100x e MAX31865.

| Digitare | Connessione |
| ------------- | ------------------------ |
| Orologio SPI in | SCLC D9 |
| SDO MasterIn SlaveOut | MISO D10 |
| SDI MasterOut SlaveIn | MOSI D11 |
| Pin di selezione chip 0 | CS0 D13 |
| Pin di selezione chip 1 | CS1 D16 |
| Pin di selezione chip 2 | CS2 D17 |
| Vin | 3V3|
| TERRA | TERRA |
| | |

È necessario rispettare la sequenza da CS0 a CS2 per il collegamento dei sensori PT100x.

## Collega lo schermo

| Cavo | Visualizzazione successiva | Connessione |
| ------------- | --------------- | ------------------------ |
|     rosso | Corrente + | Vcc |
|   nero | Elettricità - | TERRA |
|    blu | Tx | D1 |
|    giallo | RX | D2 |
|               |         |    |
