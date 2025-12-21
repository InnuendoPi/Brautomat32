# Configurazione del sensore di temperatura

## Aggiungi un nuovo sensore

Nella sezione _Sensori_ è possibile aggiungere un nuovo sensore facendo clic sul simbolo più.

![Crea sensori](/docs/img/Sensor-einrichten.jpg)

## Imposta l'indirizzo e il nome del sensore

I sensori di temperatura Dallas DS18B20 hanno un indirizzo univoco utilizzato dal firmware per l'identificazione. L'indirizzo del sensore viene letto automaticamente. Se è collegato più di un sensore, l'indirizzo del sensore può essere selezionato dall'elenco di selezione.

Se non viene visualizzato alcun sensore:

* Il rilevamento dei sensori può essere riavviato utilizzando il pulsante di ricarica.
* Se non viene ancora rilevato alcun sensore, è necessario controllare il collegamento del cavo.

Ogni sensore necessita di un nome. In questa configurazione di base il sensore si chiama “Sensor IDS2”.  chiamato.

_Nota: i nomi dei sensori possono contenere un massimo di 20 caratteri. I caratteri speciali consentiti sono # e spazi. L'input viene controllato automaticamente dall'interfaccia web._

![Configura sensori](/docs/img/Sensor-einstellungen.jpg)

## Calibrazione del sensore (valori di offset)

Le proprietà Offset 1 e Offset 2 vengono utilizzate per la calibrazione del sensore. Una spiegazione dettagliata può essere trovata nella sezione _Sensori – Calibrazione_.

Per questa configurazione base entrambi i valori rimangono invariati a 0,00.

## Salva e controlla il sensore

Facendo clic su _save_ il sensore viene creato e quindi visualizzato in Dashboard sotto _Sensori_.

![Sensori Dashboard](/docs/img/Sensor-dashboard.jpg)

> **Nota:**

La configurazione dei sensori analogici PT100x viene eseguita allo stesso modo ma non è trattata in questa configurazione di base.
