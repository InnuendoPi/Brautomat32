# Créer un nouveau fichier de langue

Faites une copie du fichier de langue data/langue/de.json et renommez le fichier avec deux caractères en un nouveau fichier de langue :

Espagnol : es.json\
Français : fr.json\
Danois : dk.json\
Néerlandais : nl.json\
etc

Traduisez tous les mots commençant par les deux points dans chaque ligne :

```bash
 {
   "ENREGISTRER": "archive",
   "FERMER": "cerca",
   ...
 }
```

Ouvrez l'Explorateur dans l'interface Web de Brautomat. Copiez le nouveau fichier de langue dans le dossier /langue sur votre Brautomat. Enfin, le nouveau fichier de langue doit être fait connaître à Brautomat : éditer le fichier /lang.js

```bash
const supportéLocales = ["de", "en"];  // fichiers de langue 
```

Par exemple, si vous avez ajouté un fichier en espagnol es.json, modifiez le fichier /lang.js comme suit :

```bash
const supportéLocales = ["de", "en", "es"];  // fichiers de langue 
```

Enregistrez le fichier avec le raccourci clavier Ctrl-S et redémarrez Brautomat. Vous pouvez maintenant sélectionner la nouvelle langue dans l'interface Web.

_Partagez un nouveau fichier de langue avec d'autres utilisateurs ! Envoyez-moi votre fichier de langue ou votre correction._
