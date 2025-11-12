# Crea un nuovo file di lingua

Crea una copia del file di lingua data/lingual/de.json e rinomina il file con due caratteri in un nuovo file di lingua:

Spagnolo: es.json\
Francese: fr.json\
Danese: dk.json\
Olandese: nl.json\
ecc.

Traduci tutte le parole iniziando dai due punti in ogni riga:

"bash."
 {
   "SALVA": "archivio",
   "CHIUDI": "cerca",
   ...
 }
```

Apri Explorer nell'interfaccia web di Brautomat. Copia il nuovo file della lingua nella cartella /lingua sul tuo Brautomat. Infine, il nuovo file di lingua deve essere reso noto a Brautomat: modificare il file /lang.js

"bash."
const supportatoLocales = ["de", "en"];  // file di lingua 
```

Ad esempio, se hai aggiunto un file in lingua spagnola es.json, modifica il file /lang.js come segue:

"bash."
const supportatoLocales = ["de", "en", "es"];  // file di lingua 
```

Salvare il file con la scorciatoia da tastiera Ctrl-S e riavviare Brautomat. Ora puoi selezionare la nuova lingua nell'interfaccia web.

_Condividi un nuovo file di lingua con altri utenti! Inviami il file della tua lingua o la tua correzione._
