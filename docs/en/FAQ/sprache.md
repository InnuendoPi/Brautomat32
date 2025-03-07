# Create a new language file

Create a copy of the language file data/language/en.json and rename the file with two characters to a new language file:

Spanish: es.json\
French: fr.json\
Danish: dk.json\
Dutch: nl.json\
etc.

Translate all words from the colon in each line:

```bash
 {
   “SAVE": ‘ archivo’,
   “CLOSE": ‘ cerca’,
   ...
 }
```

Open the Explorer in the web interface of the Brautomat. Copy the new language file to your Brautomat in the /language folder. Finally, the new language file must be made known to the Brautomat: edit the file /lang.js

```bash
const supportedLocales = ["de", "en"];  // language files 
```

For example, if you have added a Spanish language file es.json, then edit the file /lang.js as follows:

```bash
const supportedLocales = [“de”, “en”, “es”]; // language files 
```

Save the file with the key combination Ctrl-S and restart the Brautomat. Now you can select the new language in the WebInterface.

Share a new language file with other users! Send me your language file or your correction.
