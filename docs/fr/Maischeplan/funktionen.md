# Caractéristiques

Un _exemple de recette inventé_ est utilisé dans la description suivante. Cette description ne contient pas la recette, mais la procédure de brassage avec le Brautomat.

Le plan de purée se présente sous forme de tableau. Cette table est traitée de haut en bas par le système de brassage un jour de brassage. Dans l'exemple de recette, la ligne _Mashing 50°C_ est la première étape de brassage et _WHP Hallertau Tradition_ est la dernière étape de brassage. Une fonction très importante dans le plan de brassage est la propriété dans la colonne _autoext_.

## Fonctions de base

![Plan de purée](/docs/img/Brautomat.jpg)

À des fins d’orientation, la structure des lignes du tableau est d’abord décrite. Une ligne dans le plan de brassage représente une étape du plan de brassage. Chaque ligne du tableau comporte ces colonnes :

* La colonne « Repos » affiche un nom pour cette étape de purée.
* La colonne « Température » contient la température de repos (également appelée température cible ou cible dans ce manuel).
* La colonne "Durée" contient le temps de repos (minuterie), combien de temps le Brautomat doit maintenir la température de repos.
* La colonne "autoext" indique si l'étape suivante sera automatiquement poursuivie après l'expiration du temps de repos (minuterie).

Après ces quatre détails sur l'étape de brassage, il y a des boutons d'édition dans chaque ligne avec les fonctions suivantes : (de gauche à droite)

![Modifier le plan de purée](/docs/img/Brautomat-111.jpg)

* déplacer cette ligne d'une position
* déplacer cette ligne vers le bas d'une position
*modifier cette ligne
* supprimer cette ligne

L'en-tête du tableau contient les boutons suivants (de gauche à droite)

![Modifier le plan de purée](/docs/img/Brautomat-1.jpg)

* nouvelle ligne : ajoute une nouvelle étape de purée en fin de tableau
* Supprimer : supprimer la table entière (plan de purée vide)
* Recharger : relire la recette depuis le fichier. Les modifications ne sont pas enregistrées. Le bouton est affiché en bleu
* Base de données : sélection du plan de brassage, import, export et planificateur du plan de brassage
* Réduire : réduire et développer le tableau du plan de purée

![Modifier le plan de purée](/docs/img/Brautomat-11.jpg)

Lorsqu'une ligne du tableau est modifiée, les boutons changent.

* Quitter : quitte l'éditeur de ligne sans enregistrer. Le bouton s'affiche en gris
* Stockage : enregistrez les modifications dans la ligne du tableau dans le plan de purée

Tous les boutons permettant de modifier le plan de brassage sont masqués dès le démarrage du processus de brassage. Le bouton de réduction permettant de réduire et d'agrandir le tableau est masqué dès que le plan de brassage est modifié.

Avec les commandes Power, Play, Pause, Prev et Next, la commande d'infusion est intuitive à utiliser. Le plan de brassage présenté ici est une importation du kleineBrauhelfer2. L'importation insère automatiquement les températures et les temps de repos. Lors de l'ajout de houblon, l'acide alpha et la quantité en grammes sont automatiquement ajoutés au nom du houblon. De plus, ces abréviations sont préfixées :

* VWH : saut de moût avant
* Cuisson (sans ajout de houblon)
* WPH : saut dans les tourbillons

Les additifs comme indiqué sur l'image _Cuisson de la levure alimentaire 1gr_ sont importés dans le plan de purée du petit Brauherlfer2 avec le temps d'administration et la quantité.

## Modifier le tableau du plan de purée

Un plan de brassage peut être modifié dans Brautomat ou entièrement recréé. Le symbole du crayon place une ligne dans le tableau du plan de brassage en mode éditeur.

![Modifier le plan de purée](/docs/img/Brautomat-3.jpg)

N'importe quel nombre de lignes du tableau peut désormais être modifié l'une après l'autre. Dès qu'un symbole permettant de modifier le plan de brassage a été cliqué, le bouton _Enregistrer_ passe du vert au rouge. Une fois toutes les modifications effectuées, le plan de brassage doit être enregistré à l'aide du bouton _Enregistrer_. Alternativement, toutes les modifications peuvent être annulées en utilisant le bouton _Exit_ pour quitter sans enregistrer.

Dès qu'un processus de brassage a été lancé à l'aide du bouton d'alimentation, l'affichage change :

![Modifier le plan de brassage](/docs/img/Brautomat-4.jpg)

Les boutons d'édition sont masqués. Pour que cela soit à nouveau visible, le processus de brassage doit être arrêté à l'aide de la touche Pause de la commande :

![Modifier le plan de purée](/docs/img/Brautomat-5.jpg)

Lorsque le processus de brassage est en pause, le bouton Pause de la commande s'affiche en rouge et les fonctions d'édition sont affichées. La plaque à induction ne s'éteint pas. La température de repos continue d'être maintenue. Si la minuterie de repos est active, elle sera mise en pause. Si le plan de brassage est modifié (mode Éditeur), le bouton Pause pour poursuivre le processus de brassage et le bouton d'alimentation sont désactivés et affichés en gris jusqu'à ce que les modifications apportées au plan de brassage soient enregistrées ou ignorées (Quitter).

Exemple d'application :\
À la fin du processus de brassage, un échantillon d'iode est utilisé pour déterminer que le moût n'est pas encore iodé et que l'amidon est toujours présent. Le repos de saccharification à 72°C doit être prolongé :

* Suspendre le processus de brassage
* Cliquez sur le symbole du crayon dans la ligne Saccharification 72°C
* Prolonger le temps de repos pour la deuxième saccharification de 5 minutes
* Enregistrer
* Cliquez sur le bouton pause et le processus de brassage continuera avec la durée de repos ajustée.

## Fonction et application de autonext

![Maischeplan autonext](/docs/img/Maischeplan-autonext.jpg)

La première étape du plan de brassage appelée _Mashing 50°C_ a un temps de repos de 10 minutes et un _autonext_ désactivé. L'image montre la situation lorsque la minuterie de repos a atteint 10 minutes : La minuterie a décompté jusqu'à 00h00 du temps restant. Le bouton de lecture passe automatiquement au rouge. Le message toast « Cliquez sur le bouton de lecture » ​​apparaît en bas à droite. La table de cuisson s'éteint. Le processus de brassage attend un clic sur le bouton de lecture. L'interface Web affiche l'étape suivante, qui démarre en cliquant sur Play.

* A la fin d'une pause avec _autonext_ désactivé, le processus de préparation du café est arrêté et la table de cuisson est éteinte.

La deuxième étape d'empâtage, appelée _Maltoserast 63°C_, a une température de repos de 63°C et un temps de repos de 25 minutes. Dans cette étape, le Brautomat contrôle initialement la table de cuisson à 63°C. Dès que ces 63°C sont atteints, le Brautomat démarre le timer. Un minuteur de repos est un chronomètre qui compte à rebours jusqu'à 00h00 (0 minute : 0 seconde). Lorsque cette minuterie atteint le temps de repos de 25 minutes, le Brautomat vérifie la propriété _autonext_. Si _autonext_ est activé, le Brautomat passe automatiquement à l'étape suivante du plan de brassage. Dans cet exemple de recette, il s'agit de l'étape _Saccharification 72°C_. L'étape de saccharification a une température de repos de 72°C. Le Brautomat augmente automatiquement la puissance de la table de cuisson pour atteindre la nouvelle température de repos.

* A la fin d'un repos avec _autoext_ activé, le processus d'empâtage continue automatiquement et la table de cuisson reste allumée.

![Maischeplan autonext](/docs/img/Maischeplan-autonext2.jpg)

La propriété _autonext_ dans la septième étape _Mashing 78°C_ n'est pas activée. Si le Brautomat rencontre un autonext désactivé, le Brautomat met fin au repos en cours une fois le temps de repos écoulé et éteint la table de cuisson (puissance 0 %). Dans cet état, le bouton Lecture s'affiche en rouge. Pour continuer le processus de préparation, vous devez cliquer sur le bouton Lecture.

Alors que dans le premier exemple de _autonext_, on clique généralement directement sur le bouton Lecture pour continuer l'étape de brassage, dans le deuxième exemple de brassage, un temps plus long peut s'écouler pour la filtration et le repos de la filtration. Le Brautomat est laissé dans l'état « Cliquez sur le bouton de lecture ». La table de cuisson de la première chaudière reste éteinte. Dans cet état, tous les actionneurs ainsi que les deux autres chaudières peuvent être utilisés.

## Différence autonext et pause

Si autonext est désactivé à la fin du verrouillage, la table de cuisson est éteinte. Avec le bouton pause, la minuterie de repos est arrêtée,Cependant, la table de cuisson reste allumée et le Brautomat calcule la puissance nécessaire à la table de cuisson.

Les sections suivantes décrivent les fonctions spéciales facultatives. Brautomat les débutants peuvent ignorer la description des fonctions spéciales.

## Fonction spéciale repos 0°C lorsque autonext est activé

Une fonction spéciale est la température de repos 0°C lorsque autonext est activé : Si la température de repos est réglée sur 0°C et que autonext est activé, l'étape de brassage démarre automatiquement sans contrôle de température. Dans l'exemple du plan de brassage, cette fonction spéciale est affichée après l'ébullition du moût dans l'étape _post-isomérisation_. Le moût a alors une température d'env. 100°C. La table de cuisson doit être éteinte et la minuterie de post-isomérisation doit être démarrée immédiatement :

![Fonction spéciale 0°C](/docs/img/Maischeplan-Sonderfunktion.jpg)

La fonction spéciale _0°C température de repos avec autonext_ activé répond exactement à cette exigence : les températures réelles et cibles sont ignorées et la minuterie de repos est démarrée. Si la température de repos de l'étape de post-isomérisation n'était pas réglée à 0°C, mais plutôt à 95°C, par exemple, la minuterie de repos pour l'étape de post-isomérisation ne démarrerait que lorsque la température dans la cuve de brassage aurait refroidi de 100°C à 95°C. Pendant la post-isomérisation, la température dans le moût baisse. Si nécessaire, le moût est activement refroidi. La fonction spéciale _0°C température de repos lorsque l'autonext_ est activée fait que la table de cuisson reste éteinte.

## Processus de brassage

Le principe de base de la machine à infuser est l'infusion ascendante. Cela inclut des variantes telles que le processus de purée de cuisson d'Earl. D'autres processus de brassage peuvent également être implémentés à l'aide de la propriété « autonext ». Cependant, il convient de noter que le Brautomat ne peut prendre en charge que d'autres processus de brassage avec "semi-automatique". Le déclenchement d'une action, telle que l'extraction d'une purée partielle, doit être effectué manuellement par l'opérateur. Pour Brautomat, manuel signifie utiliser les boutons Lecture et Pause. Une pause de zéro minute avec autonext désactivé peut être utilisée comme déclencheur d'une action manuelle.

Remarque : Les rubriques suivantes sur les commandes de contrôle sont facultatives et ne sont pas pertinentes pour démarrer avec Brautomat.

## Bouilloire

Le Brautomat prend en charge jusqu'à trois bouilloires. La première bouilloire est nécessaire pour le processus de brassage. Une deuxième bouilloire est facultative et peut être utilisée, par exemple, dans des processus de brassage tels que la décoction. La troisième bouilloire est souvent utilisée comme recharge et est également facultative. L'utilisation des 2ème et 3ème bouilloires est librement sélectionnable, seule la première bouilloire est liée au processus de brassage et spécifiquement à la minuterie de repos.

Noms par défaut des commandes de contrôle :

* Première bouilloire : IDS ou MASH
* Deuxième chaudière : MLT ou SUD
* Troisième chaudière : HLT ou REGUSS

## Commandes de contrôle

Une deuxième fonction spéciale concerne les commandes de contrôle des plaques de cuisson et des actionneurs. La syntaxe de l'étape de purée est la suivante.

* Nom de l'acteur : Performance

L'alimentation peut être allumée ou éteinte ou un nombre compris entre 0 et 100 %. L'état OFF correspond à la valeur 0% et ON à la valeur 100%. La commande de contrôle de la première plaque à induction est IDS ou MASH. La commande de contrôle de la deuxième plaque à induction est SUD. La commande de contrôle pour la refonte est HLT. La commande de contrôle d'un actionneur est le nom de l'actionneur.

![Commande de contrôle des acteurs](/docs/img/Maischeplan-Aktoren.jpg)

Le plan de brassage sur la photo commute les actionneurs à trois endroits. L'agitateur est activé dès le début : Agitateur : ON
Peu avant la fin du programme de brassage, l'agitateur est éteint : Agitateur : OFF et la recharge est activée : Recharge : ON.

La commande de contrôle d'un actionneur peut être spécifiée avec une puissance, par ex. POMPE :60. La pompe actionneur est ensuite mise en marche avec une puissance de 60 %. Cela suppose que cet actionneur a été activé pour PWM. La température de repos et le Rast La durée doit être définie sur 0 pour les commandes de contrôle.

La commande de contrôle IDS:50 règle la puissance de sortie maximale de la table de cuisson à 50 %. La refonte peut également être activée à 75 % de puissance avec HLT:75.

![Commande de contrôle IDS](/docs/img/sonderfunktion_sud1.jpg)

La commande de contrôle SUD : Cuire une purée épaisse avec un temps de repos de 10 minutes et une température de repos de 100 degrés réalise une étape purée sur une deuxième plaque de cuisson. La minuterie de repos démarre dès que la température de repos est atteinte.

![Commande de contrôle SUD](/docs/img/sonderfunktion_sud2.jpg)

La commande SUD : Cuire une purée épaisse avec une température de repos de 100 degrés mais sans temps de repos allume la deuxième plaque de cuisson, démarre le contrôleur PID de la table de cuisson et passe directement à l'étape suivante du plan de purée.

![Commande de contrôle SUD](/docs/img/sonderfunktion_sud3.jpg)

L'étape d'empâtage, saccharification à 72°C, est réalisée sur la première table de cuisson _Maische_. Le contrôleur PID régule la puissance requise pour la cuve à purée. Parallèlement, le régulateur PID régule la puissance nécessaire à la chaudière _Sud_.

Exemples :

* Agitateur : ON
* Agitateur : OFF
* RHÉ:40
*ID : 75
*ID : OFF
* HLT : 100
* HLT : OFF
* SUD : Cuire une purée épaisse
* SUD:60

_Remarque : Les commandes de contrôle peuvent être utilisées pour faire fonctionner simultanément les chaudières de brassage, de brassage et HLT. Cependant, une seule minuterie de repos peut être active. La minuterie de repos est toujours liée à la première table de cuisson « purée »._

### Exemple de commande de contrôle IDS

A titre d'exemple, la configuration suivante est donnée pour le GGM IDS ou la chaudière MashSud :

![Commande de contrôle IDS](/docs/img/aktoren_schaltung4.jpg)

La puissance maximale est préréglée à 100 %. La température « Passage en Cuisson » est de 95°C. A partir de cette température, la puissance de sortie maximale du GGM IDS n'est plus que de 80 %.

Le programme de brassage dans l'illustration commence par l'étape « Chauffage de la coulée principale ». La table de cuisson à induction GGM IDS chaufferait l'eau avec la puissance "Max. Power IDS" (paramètre dans le registre de contrôle de température), c'est-à-dire à 100 %.

![Commande de contrôle IDS](/docs/img/aktoren_schaltung2.jpg)

La minuterie de repos démarre à 59°C. Le temps de repos est de zéro minute. Le Brautomat passe à la ligne suivante jusqu'à l'étape 2.
La commande de contrôle IDS:65 fixe la puissance maximale de l'IDS à 65 %. Le Brautomat passe à la ligne suivante jusqu'à l'étape 3.
La température passe maintenant de 59°C à la température cible lors de l'étape de « brassage ». La performance maximale de l'IDS est de 65 %.

La puissance de sortie maximale de 65 % est maintenue dans les étapes de brassage suivantes. Jusqu'à ce que Brautomat réponde à la commande de contrôle IDS:100 après l'étape de brassage.

![Commande de contrôle IDS](/docs/img/aktoren_schaltung3.jpg)

La commande de contrôle modifie la puissance de sortie maximale de l'IDS à 100 %. Le moût est maintenant chauffé à 100% de puissance jusqu'à la température de « passage à l'ébullition » à 95°C (voir ci-dessus). A partir de 95°C le GGM IDS passe à 80% de puissance. 80% correspond au paramètre "Puissance de transition".

Les commandes de contrôle de l'IDS peuvent être utilisées pour empêcher le moût de brûler ou le moût de déborder, en particulier avec des volumes de bouilloire plus petits.

### Exemple : Décoction avec deux feux

![Commande de contrôle IDS et SUD](/docs/img/sonderfunktion_sud4.jpg)

En raison de la restriction _la première cuve à moût doit toujours fonctionner avec un temps de repos_, il existe une procédure simple pour les processus de décoction : la purée partielle à cuire doit aller dans la marmite _Mash_ et la purée partielle à maintenir à température doit aller dans la marmite _Sud_.

### Exemple d'utilisation de l'énergie pour une table de cuisson

Un remplissage de 7 kg et un versement principal de 28 l sont fournis. Au total la masse est de 35kg\

A l'aide de la fonction spéciale IDS : <Puissance en %>, la puissance d'une table de cuisson peut être réglée de manière à ce que la vitesse de chauffe pendant le brassage soit de 1°C par minute.

![Commande de contrôle MASH power](/docs/img/IDS-Sonderfunktion.jpg)

_ExpliquePour plus d'informations sur la méthode de calcul, voir : Paramètres du GGM IDS - Contrôle de température - Performance maximale de l'IDS._

```json

    Puissance requise P = m * c * T / (t * w)
    L'expression c*T/(t*w) est remplacée par la valeur 75 à un rendement de 80% pour la plaque à induction
    La masse m est de 35kg
    P = 35x75 = 2625
    2625W représente 75% du maximum. puissance 3500W (2625 / 3500 * 100 = 75%)

```

Dans le plan de brassage présenté ci-dessus, la sortie maximale de l'IDS est fixée à 75 % après le brassage dans la ligne 2 avec la commande de contrôle "IDS:75". Avec cette commande de contrôle, les étapes suivantes (repos du maltose, saccharification et brassage) sont réalisées avec un rendement maximum de 75%. Après le brassage, l'utilisateur doit cliquer sur le bouton de lecture (autonext désactivé). Ici commence la filtration, suivie du repos de la filtration, etc. Le processus de brassage se poursuit avec la commande de contrôle « IDS:100 ». La puissance maximale de l'IDS est réglée à 100 % pour l'ébullition du moût.

_Remarque : Le rendement de 80 % utilisé ici pour une table de cuisson à induction est une valeur moyenne. Un réservoir de brassage isolé et couvert (couvercle ou agitateur) peut avoir une plus grande efficacité._

## Modification du profil de fonction spéciale

Une autre fonction spéciale est le changement de profil. Les commandes sont IDSPROFIL, SUDPROFIL et HLTPROFIL. Le nom du profil suit les deux points.

Exemples :

PROFIL IDS : Profil68l\
PROFIL IDS : Profil36l

Avec cette commande spéciale, tous les paramètres d'une chaudière sont échangés. De cette manière, différents profils matériels peuvent être stockés. Dans le processus de brassage de décoction, la commande spéciale offre un moyen simple d'utiliser des paramètres ajustés avec la même chaudière et un volume plus petit.

Les commandes spéciales IDS : et IDSPROFIL : ont des effets différents : La commande spéciale IDS : modifie la puissance de sortie maximale. Tous les autres paramètres restent les mêmes.

_Remarque : la commande spéciale IDSPROFILE dans le plan de brassage est annulée si le type d'appareil (IDS1, IDS2 ou relais) n'est pas identique._

## Exemple de journée de brassage

Enfin, les commandes spéciales, les ajouts de houblons et la procédure générale sont résumés à l'aide d'une journée de brassage. Cet exemple est basé sur la configuration suivante :

Environnement à deux chaudières :

* une bouilloire de brassage de purée (volume 70l, GGM IDS2 de 3,6 kW)
* une bouilloire refondue (bouilloire 35l, 2kW)

Deux acteurs :

* un agitateur (commandé par relais)
* un élément chauffant annulaire (dans la chaudière de brassage de purée, 3,5 kW)

Le plan de purée :

![exemple de jour de brassage de plan de purée](/docs/img/example_control_commands1.jpg)

L'exemple montre à quel point il est facile d'allumer et d'éteindre les actionneurs à l'aide de commandes spéciales ou comment des commandes spéciales sont intégrées dans le plan de brassage. Lors de la première étape de brassage, l'agitateur est mis en marche. Le Brautomat exécute la commande spéciale et passe immédiatement à l'étape suivante du plan de purée. L'étape de brassage a été configurée avec une durée de 1 minute et autonext désactivée. Lors de cette étape, le malt est ajouté à l'eau de brassage. L’étape dure plus d’une minute, mais en fonction du remplissage, on ne sait pas à l’avance combien de temps prendra l’empâtage. Après une minute d'écrasement, le Brautomat éteint la table de cuisson et affiche le bouton play en rouge (désactivé autonext). Le Brautomat « attend » désormais que l’étape soit terminée et que le bouton de lecture soit cliqué. Lorsque la table de cuisson est éteinte et que du malt est ajouté, la température de mélange de la purée sera inférieure à 55°C. Ce procédé convient par exemple à un ajout lent et détendu des malts ou à un court repos protéique.

_Alternative :_ activez la propriété autonext et définissez la période de repos sur 5 minutes. Dans ce cas, le Brautomat maintiendrait la température de purée pendant 5 minutes (purée), puis chaufferait automatiquement jusqu'au prochain repos.

La prochaine étape est le reste du maltose. Le PID Le contrôleur régule la puissance nécessaire pour atteindre la température cible dans la purée et la maintenir pendant une période de 40 minutes. Dans la ligne 4, la recharge est activée à l'aide d'une commande spéciale. La température cible pour la recharge est de 75°C et la durée est de 0 minute. Le Brautomat démarre le contrôleur PID pour la refonte de la chaudière et régule la puissance requise en arrière-plan. À ce stade du plan de brassage, deux contrôleurs PID sont actifs : un contrôleur PID pour la cuve de brassage et un contrôleur PID pour l'après-coulage. Le Brautomat passe directement à l'étape suivante après la mise sous tension.

Dans le plan de brassage, l'actionneur de l'élément chauffant annulaire est activé ou activé une fois avec la commande spéciale _RHE:ON_ et une fois avec _RHE:50_. Le ON traduit le Brautomat avec des performances de 100 %, tandis que 50 est traité en conséquence avec des performances de 50 %. La bouilloire MashSud a un volume maximum de 70 litres. L'élément chauffant annulaire soutient la table de cuisson pendant la cuisson avec 50 % de puissance pour une cuisson vigoureuse : plaque de cuisson 100 % de puissance (3,5 kW) plus élément chauffant annulaire de 1,75 kW (50 %). En fin de cuisson, l'élément chauffant annulaire est éteint avec la commande spéciale _RHE:OFF_.

Le timing des ajouts de houblon est calculé en fonction de leur temps de cuisson. Le programme de purée a un temps de cuisson total de 90 minutes. Faites bouillir pendant 30 minutes sans ajouter de houblon. Le temps de cuisson total des ajouts individuels de houblon s'additionne. C'est-à-dire le premier ajout de houblon _Hall. Tradition 6,0% 37,2g_ est cuit pendant 60 minutes au total :

* Durée du hall d'ajout de houblon en purée. Tradition 37,2g : 30 minutes
* Durée du hall d'ajout de houblon en purée. Tradition 31g : 15 minutes
  * A la fin de cette étape d'empâtage, le premier ajout de houblon (37,2g) est dans le moût pendant 45 minutes
* Durée du hall d'ajout de houblon en purée. Tradition 30g : 10 minutes
  * A l'issue de cette étape d'empâtage, le premier ajout de houblon (37,2g) est de 55 minutes et le second est de 25 minutes dans le moût
* Durée du hall d'ajout de houblon en purée. Tradition 7g : 5 minutes
  * A l'issue de cette étape d'empâtage, le premier ajout de houblon (37,2g) est de 60 minutes, le deuxième de 24 minutes et le troisième de 15 minutes dans le moût.

Alors que des outils comme kleineBrauhelfer, BrewFather ou MMum indiquent toujours le temps de cuisson total pour chaque ajout de houblon individuel, le Brautomat doit fournir une alarme ou une indication quant au moment où un ajout de houblon doit être ajouté au moût pendant le brassage.

_Extension :_ L'explication des doses de houblon est étendue pour inclure deux ou plusieurs doses en même temps :

![exemple de plan de brassage pour une journée de brassage](/docs/img/example_control_commands3.jpg)

Le houblon doit être ajouté 10 minutes avant la fin de l'ébullition. Tradition 6,0% 30g_ et la levure alimentaire _Levure nutritive_ sont ajoutés au moût en même temps. L'illustration montre à quel point la procédure est simple : des doses simultanées d'une durée de 0 minute sont administrées avant une dose d'une durée.

L'avant-dernière étape après l'isomérisation utilise la fonction spéciale température cible 0°C. La table de cuisson est éteinte avec cette étape de purée. La fonction spéciale température de repos 0°C amène le Brautomat à démarrer immédiatement la minuterie de repos 10 minutes. Le moût a alors une température d'env. 100°C et refroidit lentement. Étant donné que l'étape suivante implique l'ajout de houblon aromatique à 78°C, le moût est activement refroidi pendant la période de repos de 10 minutes après l'isomérisation.

Le graphique du plan de purée :

![exemple de jour de brassage de plan de purée](/docs/img/example_control_commands2.jpg)
