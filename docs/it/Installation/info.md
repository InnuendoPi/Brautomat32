# Installazione

Per utilizzare Brautomat, è necessario eseguire il flashing del firmware. Inoltre, il microcontrollore ESP deve essere collegato al WiFi locale.

## Firmware flash con MS Windows

La versione Braautomat32 è per ESP32 e si basa sul framework IDF5.

* [ESP32 IDF5](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/main/Brautomat32.zip): Brautomat32.zip

Il firmware viene installato utilizzando lo script "Flashen.cmd" contenuto nell'archivio ZIP. L'archivio ZIP viene decompresso in una cartella qualsiasi. Il microcontrollore ESP è collegato al PC/notebook tramite un cavo USB. Facendo doppio clic sullo script Flashen.cmd si avvia il flashing del firmware.

Il sistema operativo MS Windows crea automaticamente una porta COM seriale quando si collega il microcontrollore ESP ad una porta USB del PC o del notebook.

![Gestione dispositivi di Windows](/docs/img/com.jpg)

È stato trovato un dispositivo ESP sulla COM7 nell'immagine. In rari casi in MS Windows non viene messa a disposizione automaticamente una porta COM seriale. I driver USB per i microcontrollori ESP sono disponibili sui seguenti siti Web: (MS Win e macOS)

[![ESP32 Driver](https://img.shields.io/static/v1?label=Treiber&message=ESP32&logo=arduino&logoColor=white&color=blue)](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)

Lo script Flashen.cmd utilizza lo strumento esptool.exe <https://github.com/espressif/esptool>. ESPTool è disponibile gratuitamente per vari sistemi operativi (macOS, Linux). La versione di Windows a 64 bit è inclusa nell'archivio ZIP. ESPTool è concesso in licenza con GPL v2. Per una copia, consultare il [file di LICENZA](https://github.com/espressif/esptool/blob/master/LICENSE) allegato.

### Flash manuale di MS Windows, macOS e Linux

Se lo script non può essere utilizzato, il firmware può essere trasferito manualmente al microcontrollore ESP.

ESP32 Passaggio 1 Elimina Flash:

```json
esptool.exe --chip ESP32 cancella-flash
```

ESP32 Passaggio 2 Firmware flash:

```json
esptool.exe --chip ESP32 --baud 921600 --prima del ripristino predefinito --dopo l'hard reset write-flash 0x1000 bootloader.bin 0x8000 partizioni.bin 0xe000 boot_app0.bin 0x10000 firmware.bin 0x350000 LittleFS.bin
```

### Firmware lampeggiante con macOS

Scarica: [pyflasher](https://github.com/marcelstoer/nodemcu-pyflasher/releases)

Su macOS, il flashing del firmware è diviso in due passaggi. Nella prima fase, il firmware Brautomat.ino.bin viene installato sull'ESP utilizzando lo strumento pyflasher.

![macOS](/docs/img/flashen_macos.png)

Successivamente il Brautomat deve essere collegato alla WLAN. Una volta connesso il Brautomat al WiFi, è necessario installare il file system.\
Apri nel browser: <http://Brautomat.local/update>

Dopo aver fatto clic sul pulsante "File system", il file LittleFS.bin viene selezionato e installato facendo clic su Aggiorna file system.

## Configurazione Wi-Fi

Dopo aver aggiornato il firmware, Brautomat si avvia in modalità AccessPoint. Diventa visibile una WLAN aperta con il nome _Brautomat_. È necessario stabilire una connessione con questa WLAN. Una volta stabilita la connessione, il browser web apre il portale di configurazione WLAN. Se il portale non si apre automaticamente, è necessario inserire manualmente l'indirizzo <http://192.168.4.1> nel browser web.

![Configurazione WLAN](/docs/img/wlan1.jpg)

La configurazione WLAN viene visualizzata utilizzando il pulsante "Configura WiFi".

![Configurazione WLAN](/docs/img/wlan2.jpg)

Qui è necessario inserire la WLAN (SSID e password). Con _Salva_ il Brautomat si riavvia e si connette alla WLAN. L'interfaccia web di Brautomat è raggiungibile nella WLAN locale tramite l'indirizzo <http://Brautomat.local>.

Questo completa l'installazione di base. Il processo di flashing del firmware e di configurazione WLAN deve essere eseguito solo una volta. Il Brautomat deve ora essere configurato. La configurazione è descritta nella sezione _Configurazione di base_. Inizialmente è possibile saltare la sezione successiva _Aggiornamento_.

> **Nota:**\
Il Braautomat32 tenta di stabilire una connessione con la configurazione WLAN (SSID e password) per un massimo di 20 secondi. Se non è possibile stabilire una connessione, ad esempio se la password è stata inserita in modo erratoè stato utilizzato, il Braautomat32 si riavvia in modalità AccessPoint.\
In rari casi e di solito solo quando il segnale WLAN è debole, il Braautomat32 non trova una WLAN adatta e si avvia anche in modalità AccessPoint dopo ca. 20 secondi. In questo caso sarà utile solo riavviare il Braautomat32.

##Aggiornamenti

Gli aggiornamenti possono essere installati in Brautomat tramite il menu "Aggiorna". Un nuovo firmware può essere importato tramite “WebUpdate” o “Aggiornamento file”. Quando si aggiorna il firmware tramite WebUpdate, il firmware scarica la versione corrente da Internet dal repository github. Durante l'aggiornamento tramite aggiornamento file, il firmware viene caricato dal PC locale. Non sono necessari un cavo USB o lo script di installazione.

L'area di memoria di un microcontrollore ESP è divisa in firmware e file system. Durante il funzionamento è possibile salvare o modificare configurazioni, ricette e altri file solo nel file system. All'area Firmware è possibile accedere solo in lettura. Durante l'aggiornamento l'area firmware viene completamente reinstallata e i singoli file vengono sostituiti nel file system.

### Aggiornamento Web

![AggiornamentoWeb](/docs/img/webupdate.jpg)

Il WebUpdate riavvia il Brautomat più volte. Innanzitutto, il firmware viene aggiornato. Dopo un altro riavvio, il framework verrà aggiornato. Il processo WebUpdate viene registrato nel file webUpdateLog.txt.

Se è attivata l'opzione _WebUpdate con versione di prova_, il WebUpdate verrà eseguito con l'attuale versione sviluppatore. Queste sono versioni di prova. Le nuove funzioni nel firmware vengono (solitamente) inizialmente archiviate come versione di prova nel repository github. Le versioni di prova non sono consigliate per l'uso produttivo.

###Aggiornamento file

Un aggiornamento del firmware tramite la selezione FileUpdate avviene in pochi passaggi:

Innanzitutto è necessario scaricare il firmware attuale. L'archivio ZIP verrà quindi decompresso.\
Nell'interfaccia web Brautomat selezionare la voce di menu Aggiorna e quindi FileUpdate. Viene visualizzato un semplice sito Web di aggiornamento (immagine 1):

![AggiornamentoFile](/docs/img/dateiupdate2.jpg)

In Firmware con il pulsante "Seleziona file" è ora necessario selezionare il file _firmware.bin_ dall'archivio ZIP (nella Figura 2). Facendo clic su Aggiorna firmware si avvia l'aggiornamento.

È anche possibile aggiornare il file system di Brautomat.

> **Nota:**\
La funzione Aggiorna FileSystem ricostruisce il file system. Aggiorna FileSystem sovrascrive tutte le impostazioni e configurazioni. Oltre alla configurazione, questo include anche i profili e le ricette della caldaia per la preparazione del mash. In quasi tutti i casi un aggiornamento del file firmware seguito da un WebUpdate è la scelta giusta perché WebUpdate aggiorna i singoli file nel file system dopo l'aggiornamento del firmware.
