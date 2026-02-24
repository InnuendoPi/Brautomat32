# Create a new language file

To add a new UI language:

1. Copy `data/language/de.json`.
2. Rename it with a two-letter code, for example:
   * Spanish: `es.json`
   * French: `fr.json`
   * Danish: `dk.json`
   * Dutch: `nl.json`

Translate the values (text after `:`) in the new file:

```bash
{
  "SAVE": "archivo",
  "CLOSE": "cerrar"
}
```

Upload the new file to `/language` on Brautomat via the file explorer in the web interface.

Then register the locale in `/lang.js`:

```bash
const supportedLocales = ["de", "en"];  // language files
```

Example for Spanish:

```bash
const supportedLocales = ["de", "en", "es"];  // language files
```

Save (`Ctrl+S`) and restart Brautomat.
The new language can then be selected in the web interface.

If you want to share your translation, send the language file or a correction patch.
