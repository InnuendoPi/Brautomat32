# Create a new language file

Make a copy of the language file data/language/de.json and rename the file with two characters to a new language file:

Spanish: es.json\
French: fr.json\
Danish: dk.json\
Dutch: nl.json\
etc.

Translate all words starting from the colon in each line:

```bash
 {
   "SAVE": "archivo",
   "CLOSE": "cerca",
   ...
 }
```

Open Explorer in the web interface of Brautomat. Copy the new language file to the /language folder on your Brautomat. Finally, the new language file must be made known to Brautomat: edit the file /lang.js

```bash
const supportedLocales = ["de", "en"];  // language files 
```

For example, if you added a Spanish language file es.json, then edit the /lang.js file as follows:

```bash
const supportedLocales = ["de", "en", "es"];  // language files 
```

Save the file with the keyboard shortcut Ctrl-S and restart Brautomat. Now you can select the new language in the web interface.

_Share a new language file with other users! Send me your language file or your correction._
