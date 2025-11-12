# Paramètres de la table de cuisson

## Contrôle de la température

### Puissance maximale

Ce paramètre décrit la puissance de sortie maximale de la table de cuisson. La valeur par défaut est 100 %. Ce paramètre est utilisé si une petite bouilloire d'un volume de 20 litres par exemple est utilisée sur la table de cuisson. En réduisant la puissance, on peut éviter un réchauffement trop rapide et un débordement. Les paramètres « Puissance maximale » et « Puissance de transition » doivent être réduits ensemble lors de l'utilisation de petites cuves de brassage.

A la fin de ce chapitre vous trouverez [deux exemples de calcul de la puissance requise](https://innuendopi.gitbook.io/brautomat32/info-5/parameter-ggm-ids#berechnung-der-erforderlichen-leistung).

### Delta de température par rapport à la cible

Ce paramètre décrit la différence par rapport à la température de repos (point de consigne) à laquelle la minuterie doit démarrer pour un repos. La valeur par défaut est 0,3°C. Lors du processus de brassage, le contrôleur PID permet un contrôle très précis de la température. Une température de repos est atteinte avec une précision de +-0,2°C par le contrôleur PID réduisant l'alimentation en énergie de manière contrôlée avant que la température de repos ne soit atteinte. La réduction de l’apport d’énergie a pour effet secondaire que l’étape finale pour atteindre la température de repos prend plus de temps. C'est exactement là que le paramètre « Delta par rapport à la cible » entre en jeu : par exemple, si une température de repos de 63 °C doit être atteinte et que la température actuelle est de 62,7 °C, alors la minuterie de repos démarrera avec un delta de température par rapport à la cible de 0,3 °C. En ce qui concerne le système de préparation individuel, le delta peut être utilisé pour éviter une prolongation indésirable du temps de repos.

### Transition vers la cuisson [°C]

Ce paramètre décrit la température à laquelle le contrôleur PID doit détecter que le moût bout. La valeur par défaut est 95°C. Ce paramètre ne décrit pas la température à laquelle le moût commence à bouillir. Ce paramètre décrit la température à laquelle le Brautomat désactive le contrôleur PID et contrôle la table de cuisson avec une puissance spécifiée "puissance de transition". Contrairement aux températures de repos, le but de la cuisson n'est pas d'atteindre et de maintenir précisément la température, mais plutôt de cuire en douceur. Ainsi, au lieu de réduire la puissance, la plaque à induction fonctionne à puissance constante lors de la cuisson.

### Puissance issue de la transition [%]

Ce paramètre décrit la puissance de sortie de la table de cuisson depuis la transition de température jusqu'à la cuisson. La valeur par défaut est 100 %. Le paramètre "Transition en cuisson" a été utilisé pour régler une température à laquelle le contrôleur PID est désactivé. Le paramètre « Puissance de transition » spécifie désormais la puissance de sortie fixe pour la table de cuisson. Si une bouilloire d'un volume de 35 litres ou plus est utilisée, la valeur par défaut de 100 % est un choix approprié. Dans les cuisines de brasserie équipées de petites bouilloires, un approvisionnement en énergie à 100 % peut provoquer un débordement. Dans ce cas, l'apport d'énergie maximum peut être réduit à, par exemple, 75 % grâce à ce paramètre.

### Désactiver PID pour la cuisson [on/off]

Ce paramètre détermine le comportement du contrôleur PID lors de la cuisson lorsque la température réelle est supérieure à la température cible. Exemple : la température de cuisson a été réglée à 98°C dans le plan purée. Le paramètre « Puissance depuis la transition » désactive le calcul PID à partir de la température « Transition vers l'ébullition ». Si le paramètre « Désactiver PID pour l'ébullition » est activé (par défaut), le contrôleur PID reste éteint même au-dessus de la température cible de 98°C du plan de brassage et la puissance du paramètre « Puissance de transition » est utilisée. Ce paramètre est activé par défaut et permet une cuisson roulée.

Si le paramètre "Désactiver PID pour la cuisson" n'est pas activé, la puissance nécessaire est calculée par le contrôleur PID une fois la température cible (ici 98°C) atteinte. La performance calculée au dessus de l’objectif-La température est de 0%. La table de cuisson s'éteint et évite le débordement si nécessaire.

### Performances d'erreur du capteur [0-100 %]

Si une erreur de capteur se produit, par exemple un capteur n'est pas connecté ou un défaut, la puissance de la table de cuisson peut être ajustée pour traiter cette erreur. Une valeur de 100 % ignore l'erreur du capteur.

Si la puissance est réglée sur 0 % en cas d'erreur de capteur, le Brautomat met en pause le processus de brassage. La table de cuisson est éteinte. Une fois le chronomètre de repos démarré, le chronomètre s'arrête.

Le Brautomat démarre le traitement des erreurs après 3 valeurs de capteur incorrectes consécutives. Les capteurs sont interrogés environ toutes les 2 000 ms. Cela signifie qu'env. 6 secondes s'écoulent entre l'erreur du capteur de message toast et le début de la gestion des erreurs.

Si un capteur défectueux signale à nouveau les valeurs correctes du capteur, le Brautomat poursuit automatiquement le processus de brassage.

_Remarque : le Max. Le paramètre de puissance n’est pas dépassé par le paramètre Erreur de capteur de mise sous tension. Par exemple, si Max. Power IDS a été configuré à 75 % et Power en cas d'erreur de capteur à 100 %, la puissance de sortie maximale effective est alors de 75 % même en cas d'erreur de capteur._

## PID Gestionnaire

### Intervalle (SampleTime)

Ce paramètre indique l'intervalle de temps auquel la puissance requise est calculée. La valeur par défaut est de 3 000 ms. L'intervalle est utilisé pour le calcul PID et dans le AutoTune. Dans les cuisines de brasserie présentant de petits volumes, un intervalle plus petit peut être avantageux. Plus l'intervalle est petit, plus la puissance requise est calculée fréquemment. Cela conduit à une utilisation plus élevée du gril automatique. Plage de valeurs 1 000 à 7 000 ms.

### PID Algorithme

Il y a trois options à choisir

* mode manuel PID : cette sélection permet d'utiliser vos propres valeurs Kp, Ki et Kd
* Mode IDS PID : cette sélection calcule les valeurs de Kp, Ki et Kd pour les plaques à induction GGM IDS en fonction des valeurs Ku et Pu du processus AutoTune
* Mode relais PID : cette sélection calcule les valeurs de Kp, Ki et Kd pour les tables de cuisson à relais en utilisant les valeurs Ku et Pu du processus AutoTune

## AutoTune

### AutoTune bande de bruit

Ce paramètre est utilisé pour détecter les valeurs extrêmes (Max, Min). La bande de bruit AutoTune indique le changement minimum par rapport à la valeur mesurée précédente qui doit être présent afin de reconnaître une nouvelle valeur extrême. La valeur par défaut du GGM IDS est 0,2. Pour une cuisinière refondue via un relais ou SSR, la valeur par défaut est de 0,5. Plage de valeurs : 0,1 - 1,0

### AutoTune Série de données (lookback)

Ce paramètre spécifie combien de valeurs mesurées doivent être prises en compte pour déterminer les valeurs extrêmes. La valeur par défaut est de 50 lectures. Veuillez noter qu'un maximum de 100 valeurs mesurées peuvent être configurées. Pour les cuves de brassage très bien isolées thermiquement, l'augmentation de la série de données à 100 valeurs mesurées peut améliorer la détection des valeurs extrêmes dans la phase de refroidissement du processus AutoTune.

### AutoTune débogage

Ce commutateur active le protocole AutoTune. Le journal fournit des informations si le processus AutoTune ne peut pas être terminé avec succès. Si le débogage AutoTune est activé, le protocole est également disponible lors du brassage.

_Ces 10 paramètres doivent être réglés individuellement pour chaque système de percolation. Les paramètres peuvent être modifiés pendant un processus de brassage. Avec un test avec une quantité d'eau typique, les paramètres peuvent être facilement déterminés avant une journée d'infusion._

## Profils

Le Brautomat peut gérer les profils matériels. Des profils peuvent être utilisés s'il y a différentes chaudières. Les utilisateurs possédant des bouilloires de différentes tailles peuvent utiliser des profils pour sélectionner la bouilloire pour le jour d'infusion au lieu d'avoir à ressaisir manuellement tous les paramètres. Un profil matériel contient tous les paramètres d'une chaudière.

Les profils sont enregistrés dans le dossier /Profiles. Les profils permettent une utilisation simple et rapideBasculez entre différentes chaudières. La fonction Enregistrer crée un fichier de profil avec les paramètres ci-dessus, tandis que la fonction Supprimer supprime le fichier de profil de la mémoire flash.

Le profil par défaut au démarrage de la machine à pain est toujours le dernier profil sélectionné.

## Calcul de la puissance requise

_Le paragraphe suivant décrit un sujet facultatif._

Lors du brassage, une augmentation de la température du moût de 1°C par minute est souhaitée. La puissance P requise du GGM IDS peut être calculée comme suit :

puissance requise P = m[kg] * 75\
performance existante du GGM IDS P = 3500\
Facteur en pourcentage = performance requise : performance existante

### Exemple 1

Dans le premier exemple, il y a un remplissage de 9 kg et un remplissage principal de 35 l. Cela donne une masse totale de

```json
m = 9 + 35 = 44
```

Nous substituons la masse m = 44 dans la formule simplifiée :

```json
P = 44 * 75 = 3300
```

Environ 3 300 W/min sont nécessaires pour chauffer un volume de 44 kg à 1°C par minute. Si le GGM IDS fonctionne à 100 % de puissance, soit 3 500 W, la différence de température de 1°C dans le moût est atteinte en moins de 60 secondes. Afin d’atteindre l’objectif d’augmentation de la température du moût de 1°C par minute, les performances maximales du GGM IDS doivent être réduites :

```json
3300 : 3500 = 0,94 ce qui correspond à 94%
```

Le GGM IDS devrait fonctionner avec env. Puissance 94-95 % (fonction spéciale IDS:94).

### Exemple 2

Dans le deuxième exemple, il y a un remplissage de 5,9 kg et un remplissage principal de 26,5 l. La masse totale est de 32,4 kg.

```json
m = 5,9 + 26,5 = 32,4
```

Nous substituons la masse m = 32,4 dans la formule simplifiée :

```json
P = 32,4 * 75 = 2430
2430 : 3500 = 0,69
```

Il faut environ 2430 W/min pour chauffer un volume de 32,4 kg à 1°C par minute. Le GGM IDS devrait fonctionner avec env. 69-70 % de puissance (fonction spéciale IDS:70).

### Messe de Simplification *75 ?

```json
P = m[kg] * c * T / (t * w)
```

m correspond à la masse de la coulée principale + remplissage\
c correspond à la capacité thermique spécifique du moût. La valeur 3600 est utilisée (unité Joule/(kg * °C))\
T correspond à la différence de température. Nous utilisons une différence de 1°C\
t correspond au temps. Nous mettons 60 secondes dans l'équation comme temps\
w le rendement de l'induction (80-90%). La valeur 0,8 est insérée dans l'équation

```json
c * T / (t * w) = 3600 * 1 / (60 * 0,8) = 75
```

Avec cette simplification on obtient la valeur 75.

### capacité thermique spécifique

Le spécifique utilisé ici Capacité thermique 3600 a une tolérance d'erreur d'environ 2% (en fonction de la température et de l'extrait). La farine de malt a une capacité thermique de 1 570 J/(kg*°C), l'eau a une capacité thermique de 4 190 J/(kg*°C) dans la plage de température de 50 à 80°C. En supposant que la teneur en eau dans la farine de malt est de 6 % : (Chiffres de l'exemple 1)

```json
9 * 94% * 1570 + (35 + 9 * 6%) * 4190 = 8,97 * 1,57 + 35,54 * 4,19 = 14,08 + 148,91 = 13282,2 + 148912,6 = 162194,8 / 44 = 3686,25 J par kg par degré degrés Celsius
```

Voir aussi [Braumagazin](https://braumagazin.de/article/berechnungen-in-der-brauerei/)
