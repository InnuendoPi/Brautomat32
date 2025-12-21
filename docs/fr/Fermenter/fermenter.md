# Mode fermenteur

En mode fermenteur, le Brautomat32 traite le plan de fermentation de haut en bas de la même manière que le plan de brassage. Le controller Deck a les mêmes fonctions.

![Fermenteur Dashboard](/docs/img/fermenter_dash.jpg)

Le traitement des étapes présente une différence importante :

La première étape du plan de fermentation démarre lorsque la température cible est atteinte. C'est généralement le moment où la levure est ajoutée au moût. Toutes les étapes suivantes du plan de fermentation démarrent immédiatement, quelle que soit la température réelle.

Pour le configurer, un GPIO peut être configuré pour le refroidissement et un GPIO pour le chauffage. Le refroidissement ou le chauffage est facultatif.

![Paramètres du fermenteur](/docs/img/fermenter_set.jpg)

Le fermenteur a trois états différents : refroidissement, chauffage et ralenti. Lorsque l'état du refroidissement ou du chauffage change, une pause démarre. Pendant la pause, l'état du fermenteur ne change pas.

* Ancien état de refroidissement et nouvel état de refroidissement : pas de pause. Le refroidissement reste activé
* Ancien statut de chauffage et nouveau statut de chauffage : pas de pause. Le chauffage reste allumé
* Ancien état de refroidissement et nouvel état de chauffage : pause 120 s
* Ancien état de chauffage et nouvel état de refroidissement : pause 120 s

## Rampe

Une étape de fermentation est spécifiée avec une température de début et une température de fin. Dans la première figure de cette section, la température dans la première étape de fermentation est de 18°C. Bien entendu, cela signifie que la température de fermentation reste inchangée pendant 1 jour.

Dans la deuxième étape de fermentation, la température de départ est de 18°C ​​​​et la température finale est de 20°C. La durée de cette étape de fermentation est inscrite à 2 jours. Il existe désormais deux manières d’obtenir la température du début à la fin :

Lorsque la rampe est activée, le Brautomat contrôle la température de fermentation de manière linéaire sur la durée spécifiée pour cette étape. Dans ce cas, la température est augmentée de 18°C ​​à 20°C par pas de +0,1°C sur 2 jours.

Avec la rampe désactivée, la température finale est établie au début de l'étape de fermentation, soit par refroidissement, soit par chauffage. Une fois la température finale établie, elle est maintenue.

## Cycle de commutation des relais

Le cycle de commutation du relais détermine la durée pendant laquelle l'un des états de refroidissement, de chauffage ou de repos est maintenu. La plage de valeurs autorisée est comprise entre 1 000 et 240 000 ms. La valeur par défaut est 120 000, soit 120 secondes. Un cycle de commutation trop petit peut avoir un impact négatif sur les appareils de refroidissement.

## Affichage

En mode fermenteur, la vue MashSud (page 2) doit être sélectionnée. L'aperçu de la chaudière et la vue de commande manuelle ne peuvent pas être utilisés pour le mode fermenteur.
