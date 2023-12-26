# Erstelle eine neue Sprachdatei

Erstelle eine Kopie der Sprachdatei data/language/de.json und benenne die Datei mit zwei Zeichen in eine neue Sprachdatei:

Spanisch: es.json\
Französisch: fr.json\
Dänisch: dk.json\
Niederländisch: nl.json\
etc.

Übersetze in jeder Zeile alle Wörter ab dem Doppelpunkt:

```bash
 {
   "SPEICHERN": " archivo",
   "SCHLIESSEN": " cerca",
   ...
 }
```

Öffne im Web Interface vom Brautomat den Explorer. Kopiere die neue Sprachdatei auf Deinen Brautomat in den Ordner /language. Abschließend muss die neue Sprachdatei dem Brautomat bekannt gemacht werden: editiere die Datei /lang.js

```bash
const supportedLocales = ["de", "en"];  // language files 
```

Wenn Du bspw. eine spanische Sprachdatei es.json hinzugefügt hast, dann editiere die Datei /lang.js wie folgt:

```bash
const supportedLocales = ["de", "en", "es"];  // language files 
```

Speichere die Datei mit der Tastenkombination Strg-S und starte den Brautomat neu. Nun kannst Du die neue Sprache im WebInterface auswählen.

_Teile eine neue Sprachdatei mit anderen Usern! Sende mir Deine Sprachdatei oder Deine Korrektur._
