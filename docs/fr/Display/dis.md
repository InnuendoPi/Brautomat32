# Affichage

Le Brautomat peut en option être utilisé avec un écran tactile. L'écran tactile de 3,5 pouces de Nextion est pris en charge

| Affichage suivant | Micrologiciel |
| --------------- | --------- |
| NX4832T035 (série de base) | [NX4832T035]([[CHEMIN_0]]) |
| NX4832K035 (série améliorée) | [NX4832K035]([[CHEMIN_1]]) |
| NX4832F035 (Série Découverte) | [NX4832F035]([[CHEMIN_2]]) |

L'écran nécessite un micrologiciel pour fonctionner avec Brautomat. Le micrologiciel qui correspond au type d'affichage est lié dans le tableau. Voir aussi flasher le fichier d'affichage.

## Connecter l'affichage

L'écran est connecté à la carte avec 4 câbles

| Câble | Affichage suivant | Bornier de connexion |
| ------------- | --------------- | -------------------- |
|     rouge | Actuel + | Vcc |
|   noir | Électricité - | GND |
|    bleu | TX | SDL (D1) |
|    jaune | RX | SDA (D2) |

![Connexion](/docs/img/disp1.jpg)

## Fichier d'affichage Flash

L'écran doit être préparé avant la première utilisation. Pour ce faire, le firmware d'affichage approprié est téléchargé à partir du tableau et enregistré sur une carte microSD. La carte microSD est insérée dans la fente pour carte SD sur l'écran et le Brautomat est allumé. Le processus de clignotement démarre automatiquement. L'état du flash est affiché sur l'écran. Une fois terminé, le Brautomat sera éteint et la carte microSD sera retirée. La carte microSD n'est pas nécessaire pour un fonctionnement normal.

## Voir la purée

![MashSud](/docs/img/brewpage-sm.jpg)

Le côté MashSud est le côté préféré lors du brassage. Les informations s'affichent à l'écran toutes les secondes

* Température réelle
* Température cible (température de repos)
* temps de repos restant

affiché. Le reste suivant est également affiché dans la ligne du bas. L'heure à gauche est l'heure à laquelle débutera le prochain repos. Le symbole de jeu vert à droite indique que le repos suivant démarre automatiquement (autonext).

## Afficher l'aperçu de la chaudière

![Aperçu de la chaudière](/docs/img/kettlepage-sm.jpg)

L'aperçu de la chaudière montre la chaudière de brassage de purée et, si disponible, la chaudière de brassage et de versement avec les informations sur la température réelle et cible.

_Remarque : la vue d'ensemble de la chaudière affiche l'adresse de Brautomat dans la ligne du bas : soit le nom mDNS, soit l'adresse IP._

## Vue de contrôle manuel

![Contrôle manuel](/docs/img/induction-mode-sm.jpg)

La page de contrôle manuel offre la possibilité de faire fonctionner le GGM IDS manuellement. Les niveaux de puissance peuvent être ajustés vers le haut ou vers le bas à l'aide des boutons + et -.
