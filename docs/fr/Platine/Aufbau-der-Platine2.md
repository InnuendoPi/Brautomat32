# Structure du tableau version 2

Ce petit guide décrit la structure du conseil d’administration. La structure du conseil d’administration n’est pas exigeante. Cette brève description est destinée à aider l'amateur inexpérimenté et ne s'adresse pas aux ingénieurs électriciens. Des informations sur le soudage, les fers à souder appropriés et la soudure peuvent être trouvées sur YouTube ou sur des chaînes similaires.

La liste des pièces de la carte :

![Liste des pièces](/docs/img/Aufbau1.jpg)

Numéro 1 : Résistance 4,7 kOhm\
Numéro 2 : prise JST-HX (blanche) et bornier à vis 5 broches\
Numéro 3 : buzzer piézo passif\
Numéro 4 : Borniers à vis au pas de 2,54 mm

## Liste des pièces pour la carte version 2

La position de la prise JST-HX est une alternative au bornier à vis à 5 broches. Le câble du panneau de commande du GGM IDS2 est doté de la fiche appropriée pour une prise JST-HX. Si un câble de remplacement est utilisé à la place du câble d'origine, le raccordement est plus facile avec un bornier à 5 vis.

| Numéro | Nom de l'article | Lien vers l'article |
| ----------------------------------------------------- | ------------------------------- | --------------------------------- |
| 3 | Bornier à vis 3 broches RM 2,54 | [amazon](https://www.amazon.de/dp/B07PH5HWQL/?coliid=I1JP3GL9UZVHAK&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 en option | Bornier à vis 3 broches RM 2,54 | |
| 1 | Bornier à vis 5 broches RM 2,54 | [amazon](https://www.amazon.de/dp/B07PJ71VW8/?coliid=I3AGEWLU82MSU5&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 alternative au bornier à vis 5 broches | Douille JST-HX 90° RM 2,54 | (voëlkner D17526) |
| 2 | Bornier à vis 8 broches RM 2,54 | [amazon](https://www.amazon.de/dp/B07PJ7YK3G/?coliid=I2SR2XJ0B6HEW9&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 2 | Bornier à vis 12 broches RM 2,54| [amazon](https://www.amazon.de/dp/B07NZ459BY/?coliid=I2HTZO5ENXO2Q6&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 | Embase à broches RM 2,54 | [amazon](https://www.amazon.de/dp/B01MQ5HJYQ?ref_=pe_27091401_487187591_302_E_DDE_dt_1) |
| 1 | Résistance 4,7kOhm | [amazon](https://www.amazon.de/dp/B0CL6N7334/?coliid=IVHTTAGFDF3TX&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1ZKFZ0X0XNS2PX9FJN3H) |
| 1 en option | Buzzer passif 12mm 3V | [amazon](https://www.amazon.de/dp/B0179I6LIK/ref=pe_27091401_487027711_TE_SCE_dp_i1) |
| 1 ESP32 | ESP32 D1 mini | [amazon](https://www.amazon.de/dp/B08BTRQNB3/?coliid=I3GILWFH2TDYH9&colid=I7GQB171JGLX&ref_=list_c_wl_lv_ov_lig_dp_it&th=1) |
| 1 en option | Écran Nextion 3,5"
|                                                       |                                |                                   |

_Remarque : les liens ou les numéros d'articles répertoriés sont purement informatifs et ne sont pas liés à des programmes d'affiliation/marketing._

L'écran Nextion 3,5 pouces est disponible en version Basic, Discovery ou Enhanced. Le modèle actuellement le moins cher peut être sélectionné pour le Brautomat. Les écrans de 2,8 pouces ou moins et de 4 pouces et plus ont une résolution en pixels différente et ne sont pas pris en charge par Brautomat !

## Considérations avant la construction

Le circuit imprimé peut varier en fonction de la connexion à la cuisinière à inductionhfeld GGM IDS peut être équipé différemment :

1.1 Le câble d'origine de la centrale GGM IDS est utilisé

Dans ce cas, la prise blanche JST-HX est requise (numéro 2 sur la photo). Le bornier à 5 vis sur la photo juste à côté de la prise JST-HX n'est alors pas utilisé.

1.2 Un câble de remplacement est utilisé

Dans ce cas, ce n'est pas la prise JST-HX blanche qui est utilisée, mais le bornier à 5 vis.

Ainsi, soit la prise JST-HX, soit le bornier à 5 vis est inséré dans la carte.

## Insérer les borniers à vis

Deux remarques sur l'insertion des borniers à vis :

1. L'ouverture des borniers à vis est toujours tournée vers l'extérieur (à l'opposé du circuit imprimé).
2. Les borniers à vis sont fixés avec un point de soudure. Le bon ajustement est ensuite vérifié. Tous les points de soudure sont ensuite soudés.

Dans ce qui suit, les borniers à vis sont insérés et soudés étape par étape.\
A l'étape 1, les deux borniers à vis à 12 broches sont insérés. Les GPIO D9 à D19 de ESP32 sont connectés aux 12 borniers à vis.

![Bornier à vis](/docs/img/Aufbau2.jpg)

Retournez maintenant la carte et fixez chaque bornier à vis avec un point de soudure. Vérifiez maintenant que les borniers à vis sont correctement positionnés. Toutes les broches doivent être correctement insérées dans les points de soudure. Toutes les broches sont ensuite soudées.

À l'étape numéro 2, les deux borniers à vis à 8 broches sont insérés. Les GPIO D0 à D8 de ESP32 sont connectés aux 8 borniers à vis.

![Borniers à vis](/docs/img/Aufbau3.jpg)

Le tableau ressemble maintenant à ceci dans cet état :

![Borniers à vis](/docs/img/Aufbau4.jpg)

À l'étape numéro 3, les trois borniers à 3 vis sont insérés et soudés.

![Bornier à vis pour capteurs](/docs/img/Aufbau5.jpg)

Les capteurs de température DS18B20 sont connectés aux trois connexions. Il n’y a ni ordre ni hiérarchie pour ces trois connexions. Si seuls des capteurs analogiques PT100x sont utilisés, les trois borniers à vis peuvent être omis.

Avec la version 2.1 de la carte, un bornier à 3 vis en option peut être utilisé en position GND à côté des borniers à 3 vis pour les capteurs. Les connexions GND supplémentaires sont utiles lorsque des actionneurs (pompes, agitateurs, etc.) sont utilisés. Si aucun actionneur n'est utilisé, le bornier à vis peut être omis.

À l'étape numéro 4, soit la prise JST-HX pour le câble d'origine, soit un bornier à 5 vis pour le câble de remplacement est inséré et soudé : (voir les considérations avant l'assemblage).

![JST-HX ou bornier à vis](/docs/img/Aufbau6.jpg)

## Le buzzer piézo

Le buzzer piézo est optionnel. Cette étape peut être ignorée si les signaux acoustiques ne sont pas souhaités.\
Le buzzer piézo a un pôle plus et un pôle moins

![Buzzer Plus Moins](/docs/img/Aufbau8.jpg)

Le pôle positif est inséré dans le marquage D8 et, par conséquent, le pôle négatif dans le marquage GND.

![Buzzer](/docs/img/Aufbau7.jpg)

## La résistance de 4,7kOhm

La résistance de 4,7kOhm est obligatoire pour les capteurs de température Dallas DS18B20. Si seuls des capteurs analogiques PT100x sont utilisés, la résistance peut être omise.

![Résistance](/docs/img/Aufbau9.jpg)

Les pattes de la résistance sont pliées à 90° (par exemple autour d'un tournevis plat). La résistance est ensuite insérée dans la position marquée « 4k7 ». La direction ne doit pas être prise en compte. La couleur de base des résistances est souvent bleue ou sable. Les anneaux colorés montrent la résistance électrique :

Résistance 4,7kOhm à 4 anneaux : jaune - violet - rouge - [tolérance]

Résistance 4,7kOhm à 5 anneaux : jaune - violet - noir - marron - [tolérance]

![Résistance](/docs/img/Aufbau10.jpg)

Les pattes de la résistance sont légèrement pliées vers l'extérieur au niveau du dos et soudées. Utilisez une pince coupante pour couper les pattes au-dessus de l'œil de soudure.

## Montez le microcontrôleur ESP sur la basen

En montant la base, le microcontrôleur ESP peut être retiré de la carte à tout moment. Le socketing est également utile lors du dépannage.

![Socket](/docs/img/Aufbau14.jpg)

La livraison des microcontrôleurs ESP comprend l'adaptateur numéro 1. De plus, un connecteur à broches numéro 2 avec un pas de 2,54 mm est requis.

![Liste des pièces](/docs/img/Aufbau11.jpg)

Des adaptateurs et des embases à broches sont nécessaires pour le branchement. Le connecteur à broches est d'abord branché sur l'adaptateur, comme indiqué au numéro 3. Les adaptateurs avec barrettes à broches sont ensuite insérés dans le circuit imprimé, deux à gauche et deux à droite.

_Conseil : le connecteur à broches est livré sous forme de connecteur à 40 broches. La longueur totale de l'embase à broches est insérée dans l'adaptateur. Le surplomb au-dessus de l'adaptateur est plié à l'extrémité._

![Socket](/docs/img/Aufbau12.jpg)

Désormais l’ESP est mis en place et fixé avec un point de soudure de chaque côté. L'ajustement des bases est maintenant vérifié. Tous les points de soudure sont ensuite soudés.

![ESP32](/docs/img/Aufbau15.jpg)

Enfin, tous les points de soudure doivent être vérifiés. Lorsque tous les points de soudure sont fermés, le Brautomat est prêt.
