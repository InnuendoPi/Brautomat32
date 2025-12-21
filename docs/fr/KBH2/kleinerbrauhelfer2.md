# KleinerBrauhelfer2

Depuis la version 2.5.0, le programme [ kleineBrauhelfer2](https://kleiner-brauhelfer.de/) dispose d'un filtre d'exportation pour le Brautomat. Le développement et la conception de recettes sont possibles dans les moindres détails imaginables grâce à la petite aide au brassage2. Avec l'aide-mémoire, kbh2 propose un organigramme très efficace et utile pour une mise en œuvre pratique dans la cuisine de la brasserie. Avec le filtre d'exportation pour Brautomat, toutes les étapes peuvent être adoptées.

## Le plan de brassage de l'onglet kbh2

Dans l'onglet Mash Plan, le kbh2 propose quatre manières différentes d'ajouter des malts au mash : brassage, chauffage, brassage et décoction. Les quatre types sont pris en charge dans Brautomat. Le type Mashing est automatiquement inséré avec autonext désactivé. Chauffage et infusion avec autonext activé. La décoction s'effectue avec des autonext désactivés.

![Cuisine](/docs/img/kbh2-maischplan.jpg)

 Le Brautomat nécessite une étape d'empâtage pour reconnaître la fin de l'empâtage et la transition vers la filtration. Dans le plan de brassage kbh2, une étape de brassage de type « réchauffement » à 76°C ou plus et d'une durée de 1 minute doit être ajoutée à la fin. Dans cette combinaison, le brassage est reconnu par Brautomat et inséré avec autonext désactivé.

![Cuisine](/docs/img/kbh2-maischplan2.jpg)

### Exemple 1 : kbh2 Processus de purée de cuisson Earl Scheidt

[Comte Scheid](http://hb-tauschboerse.bplaced.net/Neues_Maischverfahren.htm)

Le processus de cuisson en purée d'Earl Scheid peut être très bien planifié avec le meineBrauhelfer2 et peut être réalisé très facilement et automatiquement à l'aide du Brautomat. Veuillez noter qu'une étape de brassage de brassage (versage principal et partie 2 du malt) est nécessaire entre les deux brassages partiels. En fonction du volume de malt 2, la procédure recommandée est de travailler avec autonext désactivé pour l'étape de brassage afin d'avoir suffisamment de temps pour l'empâtage dans le malt 2 avant le début du deuxième repos du maltose. Alternativement, env. 60 °C avec chauffage direct (autonext) jusqu'à 63 °C peut être sélectionné comme température cible dans le croisement de mélange entre la coulée principale/malt 1 et la coulée principale/malt 2.

### Exemple 2 : décoction de kbh2

Le Brautomat prend en charge les processus de décoction semi-automatiques. Par exemple, si un moût partiel a été dessiné, le Brautomat demande des informations (cliquez sur Play) lorsque cette étape partielle est terminée. Créer des recettes dans kbh2 et les importer dans Brautomat facilite les journées de brassage avec décoction. Une description des options peut être trouvée dans les instructions de kleineBrauhelfer2.

## La cuisson de l'onglet kbh2

Les 5 types d'ajout de houblon avant moût, début d'ébullition, ébullition, fin d'ébullition et battage sont extraits de la petite aide au brassage2 et inclus dans l'ordre requis dans le plan de brassage de Brautomat.

Une indication de temps en kbh2 dans l'onglet Cuisson signifie « combien de temps l'ajout de houblon est cuit ». Le temps de cuisson détermine entre autres : L'amertume et l'arôme. Voir aussi la collection de formules dans kbh2.
La spécification de temps kbh2 « combien de temps l'ajout de houblon est-il cuit » est convertie en une spécification de temps « à quelle heure l'ajout de houblon a lieu » lorsqu'elle est importée dans le Brautomat.

![Cuisine](/docs/img/hopfen.jpg)

### Faites quelques allers-retours mathématiques

L'ajout de houblon est montré sur l'image kbh2. Le premier houblon ajouté est « Hallertauer Perle 7% 2020 » avec un temps d'ébullition de 65 minutes. Un deuxième paramètre est important dans ce contexte : sur le côté gauche, le temps de cuisson total est marqué en vert comme 80 minutes. Le moût est donc bouilli sans houblon pendant 15 minutes. Le deuxième ajout de houblon est le houblon "Hallertauer Tradition 5,7% 2020" avec un temps d'ébullition de 15 minutes. Au cours des 15 dernières minutes de cuisson du moût, il reste encore au Hallertau Perle 15 minutes de cuisson sur les 65 minutes d'origine et le deuxième ajout de houblon Hallertau Tradition cuit pendant 15 minutes sur les 15 minutes de cuisson restantes. Le dernier ajout de houblon est ajouté pour le cognement, c'est-à-dire après la fin de l'ébullition.

La tâche de Brautomat est d'indiquer l'heure d'ajout de houblon pendant le brassage et idéalement avec un aktustiun petit signal pour vous rappeler l'ajout de houblon.

Dans cet exemple, on précise un temps de cuisson total de 80 minutes et un premier ajout de houblon « Hallertauer Perle » avec un temps de cuisson de 65 minutes. Il en résulte une différence de temps de cuisson de 15 minutes sans ajout de houblon. La première étape, faire bouillir le moût, dure 15 minutes. Il faut maintenant effectuer le premier ajout de houblon. Le deuxième houblon « Hallertauer Tradition 5,7% 2020 » a un temps de cuisson de 15 minutes. Sur les 65 minutes, 15 minutes sont Hallertau Pearl et Hallertau Tradition réunies dans le moût. 65 minutes moins 15 minutes donnent un intervalle entre les ajouts de houblon de 50 minutes. L'ajout du houblon Hallertauer Perle doit être effectué 50 minutes avant l'ajout du houblon Hallertauer Tradition.

Le dernier lot de houblon « Hallertauer Tradition 5,7% 2020 » est donné au coupage. Lorsque vous l'éteignez, la cuisson est terminée. L’ajout de houblon ne compte donc pas dans le temps de cuisson total.

![Cuisine](/docs/img/hopfengaben.jpg)

L'ajout de houblon se comporte de la même manière. Il y a un temps de post-isomérisation de 10 minutes. L'ajout du houblon « Hallertauer Tradition 5,7% 2020 » pour le battage avec un temps d'ébullition de -5 minutes fait partie de la post-isomérisation.

_Conseil : Si deux ajouts de sauts sont ajoutés en même temps, le temps d'ajout du premier saut est réglé sur 0 minute et le temps d'ajout du deuxième saut est réglé sur le temps d'ajout réel. La logique est simple d'après le calcul ci-dessus : l'intervalle entre deux ajouts de sauts au même point zéo est de 0 minute._

Les ajouts du kbh2 depuis les onglets Mashing et Boiling se comportent de la même manière que les ajouts de houblon. Les additifs issus du traitement de l'eau et de la fermentation des onglets kbh2 ne sont pas pris en charge.
