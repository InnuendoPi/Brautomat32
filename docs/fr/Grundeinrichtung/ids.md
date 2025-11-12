# Installer la table de cuisson

## Création de la bouilloire de brassage de purée

Dans la première section _Maischeplan_, la chaudière MashSud est créée à l'aide de l'engrenage en haut à droite.

![Créer une bouilloire de purée](/docs/img/IDS-einrichten.jpg)

## Configurer une table de cuisson

Tout d'abord, une table de cuisson doit être configurée. Une table de cuisson à induction GGM IDS est installée dans cette configuration de base.

Le premier paramètre concerne le type d'IDS, où IDS1 ou IDS2 peut être sélectionné. Viennent ensuite trois paramètres de contrôle :

* PIN blanc [relais] - Par défaut : D7
* PIN jaune [Commande] - Par défaut : D6
* PIN bleu [Interruption] - Par défaut : - (inutilisé) ou D5

Ces GPIO (D5, D6 et D7) sont préconfigurés pour le câble de connexion GGM IDS avec prise JST-HX ou le bornier à vis.

Ensuite, un capteur de température doit être attribué à la bouilloire MashBud. La sélection s'effectue parmi une liste de capteurs déjà paramétrés. Dans cette configuration de base, seul le capteur _Sensor IDS2_ est présent et est sélectionné en conséquence.

_Remarque_ : _Une sonde de température doit être affectée en permanence à une table de cuisson. La valeur du capteur est appelée température réelle ou température actuelle et est comparée en permanence à la température de repos (température cible) pendant le processus de brassage._

![Configurer la chaudière de brassage de purée](/docs/img/IDS-configure.jpg)

Les paramètres de l'onglet « Contrôle de température » sont expliqués en détail dans la section « Tous les paramètres ». Pour la configuration de base, les valeurs par défaut sont initialement adoptées.

![Configurer la chaudière de brassage de purée](/docs/img/IDS-temperaturen.jpg)

## Configuration du contrôleur PID

Après la configuration de base, le contrôleur PID doit être configuré dans l'onglet PID Manager. Le contrôleur PID calcule automatiquement la puissance nécessaire à la table de cuisson pour amener la température de la purée (température réelle) à la température de repos. Une configuration PID précise garantit que la température de repos reste constante pendant toute la période de repos.

Le contrôleur PID est défini avec deux paramètres :

* Ku (gain ultime) – facteur de gain
* Pu (période ultime) – durée de la période

Les paramètres PID P, I et D sont calculés à partir de ces deux valeurs. Ces paramètres sont individuels pour chaque système de brassage et sont déterminés à l'aide du processus AutoTune. Le processus AutoTune est décrit en détail dans la section "AutoTune étape par étape".

Les valeurs suivantes pour Ku et Pu sont saisies pour cette configuration de base. La règle de réglage PID _IDS PID Mode_ est alors sélectionnée :

![IDS](/docs/img/IDS-AutoTune-erg.jpg)

Dès que les valeurs de Ku et Pu sont saisies, l'algorithme PID sélectionné détermine automatiquement les trois valeurs P, I et D. Une explication détaillée de tous les paramètres suivra plus tard.

## Valeurs de départ pour différentes tailles de chaudière

Pour une bouilloire de 36 L avec un volume de purée d’environ 20 L :

```texte
Facteur d'amplification Ku (gain ultime) : 182
Durée de la période Pu (période ultime) : 2245
```

Pour une bouilloire de 70 L avec un volume de purée supérieur à 50 L :

```texte
Facteur d'amplification Ku (gain ultime) : 225
Durée de la période Pu (période ultime) : 1500
```

## Achèvement de la configuration de base

Après avoir enregistré les paramètres, la configuration de base est terminée. Vous pouvez désormais infuser avec un capteur de température et une bouilloire à purée.

_Remarque : un plan de purée est également requis pour le processus de brassage proprement dit._
