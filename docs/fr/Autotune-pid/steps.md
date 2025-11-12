# AutoTune Pas à pas

La procédure pratique AutoTune ressemble à ceci :

![AutoTune](/docs/img/IDS-AutoTune.jpg)

1. Remplissez votre bouilloire à purée avec une quantité d'eau typique

    une. Une quantité typique correspond à un remplissage de chaudière composé de coulée principale et de remplissage

    Exemple : 20 l de coulée principale et 5 kg de remplissage donnent une quantité typique de 25 l d'eau pour le processus AutoTune

    b. Allumez le mixeur
2. Définissez une température cible de AutoTune

    une. la température cible doit être de 50 °C ou plus.

    b. La température cible doit être au moins 10°C supérieure à la température réelle actuelle.

3. Activez « PID AutoTune »
4. Activez « AutoTune débogage »
5. Enregistrez ce paramètre
6. Cliquer sur le bouton d'alimentation démarre le processus AutoTune.

![AutoTune2](/docs/img/IDS-AutoTune-start.jpg)

Le processus AutoTune se compose de deux phases. La phase 1 chauffe jusqu'à la température cible. Lorsque la température cible est atteinte, la table de cuisson s'éteint. La température cible est parfois largement dépassée de 2 à 3°C. Un dépassement significatif de la température cible est nécessaire pour le processus AutoTune. Vient ensuite une phase de refroidissement en dessous de la température cible. Ces deux phases sont répétées 5 fois. En fonction de l'environnement, le processus AutoTune prend un temps relativement long (90 minutes ou plus). La plupart du temps est nécessaire pendant les phases de refroidissement. Plus une cuve de brassage est bien isolée, plus le processus AutoTune ou la phase de refroidissement dure longtemps. Le processus AutoTune doit être effectué à une température de purée typique d'env. 60°C. L'état actuel est affiché dans la colonne « AutoTune Processus 0/5 ». Le premier nombre est l'étape actuelle et le deuxième nombre est le nombre de AutoTune étapes qui devraient être nécessaires. Les valeurs mesurées sont déterminées au cours du processus AutoTune. Les valeurs mesurées sont constamment vérifiées. Si une valeur mesurée présente un écart, la mesure est répétée. Si cela est répété, "AutoTune Processus 6/5" s'affiche. Un maximum de 20 répétitions est effectué. Le résultat de AutoTune est affiché dans les paramètres GGM IDS de l'onglet Gestionnaire PID :

![AutoTune3](/docs/img/IDS-AutoTune-erg.jpg)

Le processus AutoTune est terminé et les paramètres système déterminés sont automatiquement enregistrés.\
Le résultat de AutoTune est le facteur d'amplification Ku (gain ultime) et la durée de la période (période ultime). P, I et D sont calculés à partir de ces deux paramètres. Différents algorithmes sont disponibles pour calculer les valeurs PID. Le Brautomat utilise un algorithme PID optimisé pour le brassage (en fait pour chauffer des liquides) et est également utilisé, par exemple, dans l'addon CraftBeerPi PIDBoil.

_Conseil : Après le processus AutoTune, la configuration doit être enregistrée à l'aide d'une sauvegarde._

Lorsque le processus AutoTune est terminé et que "AutoTune debug" a été activé, le journal "AutoTune\_log.txt" peut être consulté via l'Explorateur. Toutes les informations sont enregistrées dans ce fichier journal.\
Le résultat de AutoTune est enregistré au format JSON dans les fichiers "idsAutoTune.txt", "sudAutoTune.txt" ou "hltAutoTune.txt". Les fichiers sont purement informatifs et ne sont pas nécessaires au fonctionnement. Dans ces fichiers les valeurs PID sont répertoriées selon différentes méthodes de calcul.

Les méthodes de calcul suivantes sont répertoriées dans le journal :

INTÉGRALE PID\
QUELQUES DÉPASSEMENTS PID\
PAS DE DÉPASSEMENT PID\
ZIEGLER NICHOLS PID\
ZIEGLER NICHOLS PI\
TYREUS LUYBEN PID\
TYREUS LUYBEN PI\
CIANCONE MARLIN PID\
CIANCONE MARLIN PI

Les valeurs calculées des différents algorithmes peuvent être saisies dans les paramètres avec la sélection INDIVIDUAL_PID dans les lignes P, I et D. Cependant, cela ne devrait conduire à de meilleurs résultats que dans de rares cas.
