# AutoTune processus

Le processus AutoTune détermine les paramètres appropriés pour le système de brassage afin que le contrôle de la température dans le processus de brassage puisse être effectué aussi précisément que possible. L'accent est mis sur les températures RÉELLES et les températures CIBLES correspondantes. En pratique, cela signifie que les dépassements excessifs et inférieurs doivent être minimisés.

Remarque : Un dépassement (dépassement de la température de consigne) de 0,5 °C est normal. En fonction de l'isolation de la chaudière et de l'énergie d'induction fournie, la température continuera à augmenter légèrement même après l'arrêt de la table de cuisson.

![AutoTune4](/docs/img/IDS-AutoTune-Ziel.jpg)

La description suivante des valeurs PID est uniquement destinée à vous aider à utiliser le micrologiciel et peut être ignorée. Le processus AutoTune est décrit à partir de "Le processus AutoTune : étape par étape."\
Le contrôleur PID contrôle les performances des tables de cuisson. Il est important de déterminer les valeurs P, I et D appropriées. Les valeurs PID sont individuelles pour chaque système de brassage et environnement. AutoTune est une procédure qui permet de déterminer les valeurs appropriées. La puissance nécessaire des plaques de cuisson pour passer de la température réelle à la température souhaitée est calculée à partir de la somme des trois valeurs : Puissance requise = P + I + D\
Une fois que les valeurs PID appropriées ont été déterminées, le paramètre Intervalle (SampleTime) est utilisé pour déterminer les intervalles de temps auxquels les performances requises doivent être calculées.

## La valeur P

Ce paramètre affecte la différence entre la température réelle et la température cible. Plus la différence entre la température réelle et la température souhaitée est grande, plus la table de cuisson chauffe avec la composante P. Si la température cible est atteinte ou dépassée, la composante P est égale à 0. Une valeur P très élevée provoque un fort dépassement ou sous-dépassement.

## La valeur que je porte

La valeur I augmente continuellement à partir de zéro à mesure que la table de cuisson chauffe. Plus l'Ochfeld met du temps pour passer de la température réelle à la température cible, plus la valeur I augmente. Avec la valeur P, il en résulte l'addition suivante : à mesure que la température cible se rapproche, la valeur P diminue et la valeur I augmente. La température cible n'est atteinte que via la valeur I. Au-dessus de la température cible, la valeur I redevient plus petite. La valeur I crée un dépassement.

## La valeur D

La valeur D est un amortisseur qui amortit les oscillations des deux premières parties P et I. Trop de D ralentit le chauffage et le refroidissement. Cette valeur peut également être nulle.

## Intervalle (SampleTime)

Le calcul PID s'effectue en continu. L'intervalle décrit le cycle. Dans chaque intervalle, la différence entre la température réelle et la température cible ainsi que la variation de la température réelle sont déterminées en continu. Un intervalle trop petit (par exemple 1000 ms) entraîne un « flottement » de la température réelle dans le sens d'erreurs d'arrondi +- 0,0625°C à une résolution de 12 bits. Un intervalle trop grand (par exemple 7 000 ms) entraîne un comportement lent. Un intervalle de 2 000 ms ou 3 000 ms devrait bien fonctionner dans la plupart des environnements. Seul un multiple de 1 000 ms peut être utilisé comme taille d'intervalle (1 000, 2 000, ... 7 000).
