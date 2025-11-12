# Opprett en ny språkfil

Lag en kopi av språkfilen data/language/de.json og gi nytt navn til filen med to tegn til en ny språkfil:

Spansk: es.json\
Fransk: fr.json\
Dansk: dk.json\
Nederlandsk: nl.json\
osv.

Oversett alle ord fra kolon i hver linje:

``` bash
 {
   "SAVE": "arkiv",
   "CLOSE": "cerca",
   ...
 }
```

Åpne Utforsker i nettgrensesnittet til Brautomat. Kopier den nye språkfilen til /language-mappen på Brautomat. Til slutt må den nye språkfilen gjøres kjent for Brautomat: rediger filen /lang.js

``` bash
const supportedLocales = ["de", "en"];  // språkfiler 
```

For eksempel, hvis du la til en spanskspråklig fil es.json, rediger filen /lang.js som følger:

``` bash
const supportedLocales = ["de", "en", "es"];  // språkfiler 
```

Lagre filen med hurtigtasten Ctrl-S og start Brautomat på nytt. Nå kan du velge det nye språket i webgrensesnittet.

_Del en ny språkfil med andre brukere! Send meg språkfilen din eller rettelsen din._
