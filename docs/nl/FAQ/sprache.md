# Maak een nieuw taalbestand

Maak een kopie van het taalbestand data/taal/de.json en hernoem het bestand met twee tekens naar een nieuw taalbestand:

Spaans: es.json\
Frans: fr.json\
Deens: dk.json\
Nederlands: nl.json\
enz.

Vertaal alle woorden vanaf de dubbele punt in elke regel:

``` bash
 {
   "SAVE": "archief",
   "SLUITEN": "cerca",
   ...
 }
```

Open Verkenner in de webinterface van Brautomat. Kopieer het nieuwe taalbestand naar de map /lingual op uw Brautomat. Tenslotte moet het nieuwe taalbestand bekend worden gemaakt aan Brautomat: bewerk het bestand /lang.js

``` bash
const ondersteundLocales = ["de", "nl"];  // taalbestanden 
```

Als u bijvoorbeeld een Spaans taalbestand es.json hebt toegevoegd, bewerkt u het bestand /lang.js als volgt:

``` bash
const ondersteundLocales = ["de", "en", "es"];  // taalbestanden 
```

Sla het bestand op met de sneltoets Ctrl-S en start Brautomat opnieuw op. Nu kunt u de nieuwe taal selecteren in de webinterface.

_Deel een nieuw taalbestand met andere gebruikers! Stuur mij uw taalbestand of uw correctie._
