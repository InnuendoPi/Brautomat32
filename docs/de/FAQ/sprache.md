# Neue Sprachdatei erstellen

Erstelle eine Kopie von `data/language/de.json` und benenne die Datei mit einem
neuen Sprachcode (2 Zeichen), zum Beispiel:

- Spanisch: `es.json`
- Französisch: `fr.json`
- Dänisch: `dk.json`
- Niederländisch: `nl.json`

Übersetze anschließend in jeder Zeile den Text rechts vom Doppelpunkt:

```json
{
  "SPEICHERN": "guardar",
  "SCHLIESSEN": "cerrar"
}
```

## Sprachdatei auf den Brautomat kopieren

1. Öffne im Webinterface den Explorer.
2. Kopiere die neue Sprachdatei in den Ordner `/language`.
3. Bearbeite die Datei `/lang.js`.

Standard:

```js
const supportedLocales = ["de", "en"]; // language files
```

Mit zusätzlicher Sprache (`es`):

```js
const supportedLocales = ["de", "en", "es"]; // language files
```

Speichere die Datei (`Strg+S`) und starte den Brautomat neu.
Danach kannst du die neue Sprache im Webinterface auswählen.

Teile neue Sprachdateien oder Korrekturen gern mit anderen Nutzern.
