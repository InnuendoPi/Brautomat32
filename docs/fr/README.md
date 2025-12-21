# Le Brautomat

![ESP32]([[CHEMIN_0]])

Le Brautomat est une commande de brassage pour le ESP32 D1 mini. Le Brautomat est utilisé dans la brasserie et offre un contrôle intuitif et facile à utiliser. Lors du brassage, les températures de repos sont atteintes automatiquement et les temps de repos sont respectés. Le Brautomat prend également en charge l'ébullition du moût et l'ajout de houblon et d'ingrédients. Dans le processus d'infusion ascendante, le Brautomat peut entièrement automatiser le processus de brassage.

> **Remarque :**\
Ces instructions sont constamment complétées, corrigées ou améliorées. À l'origine, seule la table à induction GGM IDS2 pouvait être contrôlée dans le projet Brautomat. A partir de la version 1.48, d'autres plaques de cuisson peuvent également être connectées en mode relais. Les instructions décrivent les fonctions d'un GGM IDS à de nombreux endroits. Seul le mode manuel convient exclusivement au GGM IDS2. Toutes les autres fonctions et options sont également disponibles pour d'autres plaques de cuisson.

 ---

## Mise en page de ce guide

Ces instructions ne sont pas ordonnées et ne doivent pas être lues de haut en bas. Le domaine _Logiciel_, en particulier le chapitre _Le plan de brassage_, est recommandé pour l'entrée dans le Brautomat. Le chapitre _Le plan de brassage_ comprend un exemple de journée de brassage à la fin des explications des fonctions.

Ce guide est divisé en trois domaines :

* Logiciel : utilisation du firmware Brautomat
  *Installation
  * Configuration de base
  * Le plan purée
  * AutoTune PID
  * Capteurs, bouilloires, recharges et actionneurs
  * Mode fermenteur
* Matériel : le circuit imprimé et les extensions appropriées
  * La structure et les connexions du circuit imprimé
  * L'affichage
  * Boîtier 3D
  * matériel supplémentaire
* Informations et FAQ
  * petite aide au brassage2
  * le périphérique MQTT

Le domaine thématique _Logiciel_ se termine par un résumé _Paramètres en un coup d'œil_. Des détails et des informations sont fournis pour de nombreux paramètres afin de simplifier la configuration et l'utilisation.

## Brautomat Version finale

La version finale de Brautomat est compilée avec le framework stable actuel espressif. Cette version est destinée à une utilisation productive. La version release est fournie sans le module Logging. La version est légèrement plus rapide. La version release doit être utilisée de préférence.

## Brautomat Version de développement

La version de développement de Brautomat est compilée avec le framework esspressif actuel. Cette version est fournie avec le module Logging. Les nouvelles fonctionnalités et corrections de bugs sont publiées pour la première fois dans la version de développement. Cette version peut être utilisée de manière productive, mais n'est pas recommandée.

> **Remarque :**
Cette page a été traduite automatiquement à partir de la documentation originale allemande.
