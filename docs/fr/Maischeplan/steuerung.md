# Les contrôles

Directement sous le plan de brassage se trouve le contrôleur. Le processus de brassage est contrôlé avec les 5 boutons Alimentation, Lecture, Pause, Précédent et Suivant.

![Contrôle](/docs/img/Buttons.jpg)

## Bouton d'alimentation

Le bouton d'alimentation est utilisé pour allumer et éteindre le processus de brassage. Si la fonction AutoTune est activée dans les réglages d'une table de cuisson, le processus AutoTune est démarré ou arrêté via le bouton d'alimentation.

## Bouton de lecture

Le bouton Lecture a deux fonctions dans le processus de brassage :

1. La première fonction est _Démarrer la minuterie de repos pour le repos en cours_. Le bouton Lecture démarre la minuterie de repos quelle que soit la température RÉELLE.\
Exemple : Si le moût bout déjà lors de l'étape d'ébullition, mais que la température RÉELLE de 98,5°C est inférieure à la température de repos de 100°C, la minuterie de repos ne démarre pas.

2. La deuxième fonction du bouton Play est liée à la propriété _autonext_ : poursuivre le processus de brassage avec le repos suivant. Le bouton de lecture est affiché en rouge dans cette fonction. La fonction _Continuer le processus de brassage avec le reste suivant_ sera expliquée plus loin dans la description _autonext_ dans le plan de brassage.

## Bouton Pause

La fonction du bouton pause peut être distinguée pendant la phase de chauffage jusqu'à une température de repos et pendant une phase de repos.

- Pause pendant la phase de chauffage

Si le processus de brassage est démarré avec le bouton d'alimentation, les boutons permettant de modifier le plan de brassage sont masqués. Si vous cliquez sur le bouton pause, les symboles d'édition seront à nouveau affichés. Pendant une pause activée, la table de cuisson reste allumée pour atteindre la température cible. Le bouton Pause s’affichera alors en rouge. À l'aide d'une pause, le programme de brassage peut être ajusté pendant le processus de brassage. Si la température de repos est atteinte pendant une pause, la minuterie de pause est démarrée et la pause se termine.

- Pause pendant un repos

Pendant un repos, la minuterie de repos du processus de brassage est également arrêtée à l'aide du bouton pause. Le bouton Pause s’affichera alors en rouge. Pendant une pause, la température réelle est maintenue par rapport à la température de consigne de repos, c'est-à-dire que le contrôleur PID et ainsi la table de cuisson restent actifs. A l'aide d'une pause pendant un repos, le plan de purée peut être ajusté. La durée de la pause prolonge le temps de repos précédent.

## Bouton Précédent

Le bouton Précédent permet de passer à l'étape précédente du plan de purée. Si le processus de brassage a été arrêté, la minuterie de repos du repos en cours est réinitialisée et redémarrée.

##Bouton Suivant

Le bouton Suivant permet de passer à l'étape suivante du plan de brassage ou, s'il s'agissait de la dernière étape du plan, de mettre fin au processus de brassage.

## Bouton Réduire

Le bouton Réduire réduit ou réduit le tableau du plan de brassage.

![Maischeplan](/docs/img/Maischeplan-anzeigen.jpg)

Le bouton d'effondrement reste visible même après le début de la préparation. Tous les boutons permettant de modifier le plan de brassage sont masqués après le démarrage du brassage.
