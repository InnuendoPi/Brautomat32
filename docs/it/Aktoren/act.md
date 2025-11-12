# Attori

![Impostazioni attore](/docs/img/aktoren_settings.jpg)

Attuatori come agitatori, pompe o elementi riscaldanti ad anello sono configurati con un nome e un GPIO (interruttore). Gli attuatori possono avere la proprietà PWM (modulazione della larghezza dell'impulso). PWM in Brautomat è una temporizzazione dell'alimentazione (accensione e spegnimento o flusso di corrente e flusso di corrente). L'inserimento avviene in percentuale. Sempre attivo è al 100%. Nel caso di un bollitore ciò significherebbe prestazioni massime permanenti. Un PWM del 50% corrisponderebbe a 50:50 in cui la corrente scorre e la corrente non scorre. L'intervallo degli impulsi è di 500 ms. La potenza può essere modificata durante il funzionamento utilizzando i due pulsanti presenti nella tabella degli attuatori. I pulsanti di cambio potenza sono visibili per ciascun attuatore se PWM è stato abilitato per l'attuatore. La funzione PWM in Brautomat è adatta, ad esempio, per relè o SSR. La funzione come controllo motore per agitatori non è adatta.

![Panoramica degli attori](/docs/img/aktoren.jpg)

## webhook

Il parametro GPIO dell'attuatore deve essere impostato su "-" in modo che gli elementi webhook vengano visualizzati nell'interfaccia web. Inoltre, sono richiesti l'URL del webhook e il comando audio:

![webhook](/docs/img/aktoren_webhook1.jpg)

Esempio Shelly 13:00:

Attiva Shelly 13:00: <http://192.168.1.5/relay/0?turn=on>\
Disattiva Shelly alle 13: <http://192.168.1.5/relay/0?turn=off>

L'URL del webhook per Shelly 1PM è: <http://192.168.1.5/relay/0?turn=> (senza attivazione e disattivazione). Il parametro dell'interruttore webhook deve essere impostato su "on/off".

URL Tasmota: <http://192.168.1.5/cm?cmnd=Power1%201>
