# Paramètres du plan de purée

Le Brautomat offre une gestion simple des plans de brassage. En plus de l'importation et de l'exportation, vous pouvez basculer entre les plans de purée enregistrés. Un contrôle du temps est également possible. Ce chapitre complète la description des fonctions de base.

## Plan de purée

Le nom du plan de brassage peut être précisé dans les paramètres. Le nom du fichier est dérivé du nom du plan de brassage. Les paramètres *Temps total de cuisson* et *Temps post-isomérisation* sont affichés à titre indicatif et ne sont pas modifiables. Ces paramètres sont lus lors de l'importation de la recette. Si un plan de brassage est créé manuellement, les valeurs de temps de cuisson et de post-isomérisation ne sont pas pertinentes car le Brautomat ne calcule pas les unités amères.

## Contrôle du temps

Grâce au contrôle du temps, une journée nuptiale peut être planifiée et démarrée automatiquement.

![Contrôle du temps](/docs/img/Time control.jpg)

Avec l'élément DateTimerPicker, vous pouvez facilement sélectionner une date et une heure. Le nom de la recette est temporairement remplacé par l'heure de début spécifiée.

![Contrôle du temps](/docs/img/Time control2.jpg)

Un contrôle horaire activé est enregistré dans la configuration. Lors du redémarrage de la machine à café, la date et l'heure réglées sont lues. Si ce début de préparation se situe dans le futur, la commande horaire est activée. Si le début de la distribution est passé, le contrôle horaire est désactivé.

## Gérer les plans de purée

### Créer un plan de purée

Le nom du plan de brassage doit être saisi dans le champ de saisie. Avec *OK*, un nouveau plan de brassage vide est créé.

### Renommer le plan de purée

Le nouveau nom du plan de brassage doit être saisi dans le champ de saisie. Avec *OK*, le plan de brassage est enregistré sous le nouveau nom.

### Changer le plan de purée

Le Brautomat gère les plans de purée en mémoire flash. En sélectionnant *Modifier le plan de brassage*, vous pouvez basculer entre les plans de brassage existants.

### Importer un plan de purée

Le Brautomat peut importer des recettes de brassage à partir des sources suivantes :

* KleinBrauhelfer2 (à partir de la version 2.5, type d'exportation Brautomat)
* Mash malt et plus
* Père brasseur
* Brautomat

Une recette de brassage importée devient un Brautomat plan de brassage. La gestion et la création de recettes avec kbh2 sont recommandées. Le filtre d'export "Brautomat" contient sous une forme optimisée toutes les données nécessaires au brassage avec le Brautomat.

Les recettes de MashMalzandMore doivent également être d'abord importées dans la petite aide au brassage2 et adaptées aux valeurs individuelles du système, aux matières premières, etc. Comme MMum n'attribue pas de noms de repos, il est recommandé de les éditer dans le plan de purée KBH2.

Les recettes et les bières peuvent être importées depuis BrewFather via l'importation de fichiers ou via un appel API. Dans BrewFather, les noms de repos peuvent contenir un corps de texte (de presque n'importe quelle longueur). Le texte est raccourci à 50 caractères maximum. Brewfather autorise les nombres à virgule flottante et le texte comme temps de repos. Les paramètres sont convertis en entiers ou mis à 0.

*Remarque : les microcontrôleurs ESP disposent d'une petite quantité de RAM. Il est possible que les recettes contenant du texte, des images ou d'autres pièces jointes très longues ne puissent pas être importées. Le Brautomat filtre les recettes avant l'importation. Cependant, il peut être nécessaire de supprimer les images et les descriptions très longues avant l'importation.

Les recettes importées sont enregistrées dans le dossier /Recipes. Le nom de la recette est utilisé comme nom de fichier. La longueur maximale du nom de fichier dans le système de fichiers Arduino est de 31 caractères. Les espaces et les trémas sont remplacés lors de la sauvegarde.

### Exporter le plan de purée

Un plan de brassage peut être exporté au format JSON. Pour le relire, l'import doit être utilisé au format Brautomat.

### Supprimer le plan de purée

Le plan de brassage sélectionné est supprimé de la mémoire flash.

## Importer par défaut

![Importation prédéfinie](/docs/img/preset_import.jpg)

Le Brautomat nécessite un Schmonté en purée (facultatif) et purée en une étape. En particulier, l'étape d'empâtage sert d'étape de séparation entre l'empâtage et la cuisson lorsque autonext est désactivé. Lors de l'importation, le Brautomat peut insérer des étapes de brassage et de brassage manquantes. De plus, les températures manquantes peuvent être fournies avec des spécifications.

### Température par défaut pour les paramètres manquants

Les recettes provenant de différentes sources peuvent, entre autres, manquer d'informations sur la température. Cela s'applique en particulier aux températures d'empâtage, d'empâtage, de moût avant et de houblonnage dans le tourbillon. La logique du programme interne du brasseur exige toujours une température pour le traitement, même si certaines températures ne sont pas nécessaires du point de vue du brasseur. Les températures manquantes sont prédéfinies avec des valeurs par défaut.

### Température de brassage [°C]

Ce paramètre est destiné à l'importation de recettes et décrit la température par défaut pour le brassage. Ce paramètre n'est utilisé que si aucune température d'empâtage n'est précisée lors de l'import de la recette.

### Température de brassage [°C]

Ce paramètre est destiné à l'importation de recettes et décrit la température par défaut pour le brassage. Ce paramètre n'est utilisé que si aucune température d'empâtage n'est précisée lors de l'import de la recette.

### Température VWH [°C]

Ce paramètre est destiné à l'importation de recettes et décrit la température standard pour un saut de moût avant. Souvent, les recettes ne précisent pas de température pour le VWH. Une spécification de température est requise pour Brautomat. Si une température est précisée dans la recette, elle sera utilisée lors de l'import.

### Température WPH [°C]

Ce paramètre est destiné à l'importation de recettes et décrit la température par défaut pour le saut dans le tourbillon. Souvent, les recettes ne précisent pas de température pour le WPH. Une spécification de température est requise pour Brautomat. Si une température est précisée dans la recette, elle sera utilisée lors de l'import.

### Température de cuisson [°C]

Ce paramètre décrit la température à laquelle le moût bout jusqu'à ébullition. La valeur standard est de 98°C et correspond approximativement à un emplacement à 500 m d'altitude. Pour l’import de recette, ce paramètre est utilisé comme température de cuisson.
