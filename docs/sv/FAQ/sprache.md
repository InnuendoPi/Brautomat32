# Skapa en ny språkfil

Gör en kopia av språkfilen data/language/de.json och byt namn på filen med två tecken till en ny språkfil:

Spanska: es.json\
franska: fr.json\
danska: dk.json\
Holländska: nl.json\
osv.

Översätt alla ord med början från kolon på varje rad:

``` bash
 {
   "SAVE": "arkiv",
   "CLOSE": "cerca",
   ...
 }
```

Öppna Explorer i webbgränssnittet för Brautomat. Kopiera den nya språkfilen till mappen /language på din Brautomat. Slutligen måste den nya språkfilen göras känd för Brautomat: redigera filen /lang.js

``` bash
const supportedLocales = ["de", "en"];  // språkfiler 
```

Om du till exempel lade till en spanskspråkig fil es.json, redigera filen /lang.js enligt följande:

``` bash
const supportedLocales = ["de", "en", "es"];  // språkfiler 
```

Spara filen med kortkommandot Ctrl-S och starta om Brautomat. Nu kan du välja det nya språket i webbgränssnittet.

_Dela en ny språkfil med andra användare! Skicka mig din språkfil eller din rättelse._
