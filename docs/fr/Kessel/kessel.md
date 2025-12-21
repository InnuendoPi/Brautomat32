# Configuration et utilisation de la chaudière

Le Brautomat32 offre la possibilité d'installer jusqu'à trois chaudières. La première chaudière porte la désignation interne MASH et alternativement IDS. Cette bouilloire est nécessaire pour le processus de brassage. Les deux autres chaudières sont optionnelles. La deuxième chaudière porte la désignation interne SUD, alternativement MLT et la troisième chaudière porte la désignation HLT ou Nachguss.

Les trois chaudières peuvent être soit de type plaque à induction GGM, soit de type relais. Une chaudière de type relais comprend une connexion webhook.

![Configuration Kessel](/docs/img/kessel_1.jpg)

Les paramètres sont décrits dans le chapitre Configuration de base et paramètres en un coup d'œil - Paramètres de la chaudière et sont identiques pour les trois chaudières.

Cependant, l’utilisation des trois bouilloires est différente, notamment l’utilisation du plan purée. Le plan de brassage est toujours lié à la première chaudière de brassage tant qu'aucune autre chaudière n'est spécifiée dans le plan de brassage via une commande de contrôle. Les commandes de contrôle sont également expliquées dans la section Fonctions spéciales et commandes de contrôle du plan de brassage.

## Commandes de contrôle de chaudière

Cette section ne considère que les commandes de contrôle de la chaudière. Les commandes de contrôle pour les actionneurs sont structurées de manière identique, mais sont expliquées dans la section Fonctions spéciales et commandes de contrôle du plan de brassage. Une commande de contrôle contient toujours deux points dans le reste du nom. Le Brautomat reconnaît uniquement à partir des deux points que ce repos doit être traité comme une commande de contrôle. Le format est appareil : puissance maximale. Cela signifie que les deux points séparent le nom de l'appareil des performances maximales.

Les noms suivants sont définis en interne comme noms d'appareil pour les trois chaudières :

* MASH ou IDS pour la première bouilloire
* MLT ou SUD pour la deuxième chaudière
* HLT ou REGUSS pour la troisième chaudière

Chaque chaudière se voit attribuer un nom dans les paramètres. Ce nom peut également être utilisé comme nom d'appareil pour une commande de contrôle.

Les nombres compris entre 0 et 100 sont autorisés comme performances maximales. La valeur correspond au paramètre de puissance maximale dans les réglages de la chaudière et est donnée en pourcentage. La spécification ON correspond à 100% et OFF correspond à 0%.

### Option 1 : commutation manuelle de la chaudière

Les deuxième et troisième chaudières peuvent être allumées et éteintes manuellement via l'interface Web à l'aide du bouton d'alimentation correspondant. Par exemple, si une chaudière est configurée pour la réinfusion, la température cible peut être réglée à 78°C dans les réglages de la chaudière et la chaudière peut être allumée le jour de l'infusion si nécessaire.

### Option 2 : commutation automatique de la chaudière

Les deuxième et troisième cuves peuvent également être commutées via le plan de purée :

![Configuration Kessel](/docs/img/kessel_2.jpg)

Dans ce plan de brassage simplifié, la troisième chaudière HLT est allumée automatiquement dans la ligne 2. L'étape HLT:100 avec une température cible de 78°C et une durée de 0 minute enclenche la recharge à 100% de puissance et règle la température cible à 78°C. Comme la durée est indiquée à 0 minute, la recharge est allumée en permanence. Le Brautomat passe directement à l'étape de brassage suivante et laisse la post-infusion activée. Le contrôleur PID régule en permanence la puissance nécessaire pour atteindre et maintenir la température cible. Nachguss:100 serait identique à la commande de contrôle HLT:100. Si la recharge a reçu le nom « Cooker » dans les paramètres, la commande de contrôle COOKER:100 peut également être utilisée.

![Configuration Kessel](/docs/img/kessel_3.jpg)

Dans ce plan de brassage, la deuxième infusion en cuve est activée lors de la troisième étape. Contrairement à l'exemple HLT précédent, la chaudière SUD est allumée pendant une durée de 15 minutes avec la température cible de 100°C. Le Brautomat reste sur cette étape jusqu'à ce que la température cible soit atteinte et que la période de repos de 10 minutes soit terminée. La bouilloire SUD est ensuite éteinte et le Brautomat passe à l'étape suivante du plan de brassage.

Le texte "Te"Cuisine ilmaische" se traduit par Brautomat à 100 %. S'il n'y a pas de chiffre entre 0 et 100 ou l'information ON ou OFF après les deux points, alors le Brautomat remplace le texte avec 100% de performance.

## Exemple de performances différentes

Les commandes de contrôle peuvent être utilisées pour ajuster la puissance maximale pendant le processus de brassage. Par exemple, si la plaque à induction a une puissance maximale de 3,5 kW et que la bouilloire utilisée a un volume de 20 litres, alors la commande de contrôle MASH:75 peut être utilisée pour réduire la puissance de sortie maximale de la plaque à induction à 75 % de la puissance. Le reste avec la commande de contrôle MASH:75 est créé avec une température cible de 0°C et une durée de 0 minute avec autonext activé.

## Exemple de décoction

Comme décrit ci-dessus, un reste du plan de brassage est toujours affecté à la première chaudière (MASH) si aucune commande de contrôle (deux points dans le nom du reste) n'affecte le reste à une autre chaudière. Une commande de contrôle peut soit allumer/éteindre la deuxième chaudière avec une température cible et passer directement au repos suivant, soit l'intégrer dans le processus de brassage avec une période de repos.

Dans le processus de brassage par décoction, une purée partielle est cuite tandis que la purée restante est maintenue à la température souhaitée. La décoction avec le Brautomat ressemblerait à ceci :

* Tirez le reste de la purée dans la deuxième bouilloire. Tirer un reste de purée restante avec autonext désactivé remplit cette tâche.
* puis allumer la deuxième chaudière en permanence à la température souhaitée avec une période de repos de zéro minute. autonext est activé.
* Faites cuire une purée partielle dans la première bouilloire pendant le temps de repos souhaité. autonext est activé.
* Ajoutez le reste de la purée de la deuxième bouilloire à la purée partielle de la première bouilloire. autonext est désactivé.

Les repos en plan purée dans un environnement à 2 ou 3 cuves ont le principe suivant :

* La purée partielle à cuire est affectée à la première chaudière
* La purée résiduelle avec maintien en température est affectée à la deuxième ou à la troisième chaudière
* La recharge est toujours attribuée à la deuxième ou à la troisième bouilloire

## webhook

Le paramètre PIN white relay doit être réglé sur "-" pour que les éléments du webhook soient affichés dans l'interface web. De plus, l'URL du webhook et la commande sound sont requises :

![webhook](/docs/img/kessel_webhook1.jpg)

Exemple Shelly 13h :

Allumez Shelly à 13h : <http://192.168.1.5/relay/0?turn=on>\
Éteignez Shelly à 13h : <http://192.168.1.5/relay/0?turn=off>

L'URL du webhook pour Shelly 1PM est : <http://192.168.1.5/relay/0?turn=> (sans activation ni désactivation). Le paramètre du commutateur webhook doit être défini sur « on/off ».

URL Tasmota : <http://192.168.x.x/cm?cmnd=Power1%201>
