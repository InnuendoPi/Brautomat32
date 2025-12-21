# Calibrage

Les capteurs Dallas DS18B20 présentent parfois des écarts par rapport à la température réelle. Les spécifications techniques des fabricants indiquent souvent une précision de +-0,5°C dans la plage de -10°C à 85°C. De plus, les capteurs sont dits calibrés.

Les écarts peuvent être corrigés à l’aide d’un étalonnage en 2 points. La calibration par le Brautomat est une correction linéaire. Un thermomètre calibré est nécessaire pour calibrer les capteurs. La bouilloire de brassage est remplie d'une quantité typique d'eau et chauffée à 40°C. La différence entre la valeur du capteur et celle du thermomètre calibré est saisie dans le paramètre « Offset 1 \[40°C] ». Ce processus est répété à 78°C et la différence est inscrite dans le paramètre « Offset 2 \[78°C] ». À l'avenir, toutes les mesures des capteurs seront émises avec cette correction.

Pour l'étalonnage, le capteur de température est réglé en mode haute résolution (résolution 12 bits ou 0,0625°C). Un étalonnage via l'interface Web comprend 60 valeurs mesurées. Le temps requis pour un étalonnage est presque exactement de 60 secondes. Le résultat de la mesure de température est la moyenne des 60 valeurs mesurées. Un décalage est la différence entre la température réelle et la moyenne.

Dans de nombreux cas, un étalonnage en 1 point dans un bain de glace est suffisant car le décalage des capteurs DS18B20 est généralement constant.

## Procédure d'étalonnage sans thermomètre de référence

Si un thermomètre de référence n'est pas disponible, l'étalonnage peut être effectué à l'aide d'un bain de glace et d'une ébullition.
Pour la plage de mesure inférieure, un récipient contenant 50 % de glaçons et 50 % d'eau froide est nécessaire. Un bain de glace a une température de (presque exactement) 0,0 °C. L'eau glacée doit être agitée en permanence, de préférence avec un agitateur magnétique. L'étalonnage démarre dans un bain de glace à 0 °C.

Le deuxième point d'étalonnage peut être déterminé via l'altitude au-dessus du niveau de la mer et le point d'ébullition associé. A 0 m d'altitude ou à une pression atmosphérique de 1 013 bar, la température d'ébullition est de 100,0°C. À mesure que l’altitude augmente, la pression atmosphérique et donc la température d’ébullition diminuent. Premièrement, le RHN local doit être déterminé, par exemple via Google Earth. Pour chaque mètre au-dessus du niveau de la mer, la température d'ébullition diminue de 0,003354°C. Sur le site Internet de [rechneronline](https://rechneronline.de/barometer/siedepunkt.php), le point d'ébullition est calculé en fonction de l'altitude au-dessus du niveau de la mer. De nombreux smartphones proposent également des informations sur l'altitude dans la boussole ou l'application de navigation. La hauteur au-dessus du niveau de la mer doit être déterminée avec une précision d'env. +-20m. Cela correspond à un changement de température du point d'ébullition de 0,06708°C et est donc bien en dehors de la précision du contrôle Brautomat. Le deuxième calibrage du point est effectué à l'aide d'une bouilloire de brassage de purée, d'un agitateur et du point d'ébullition local préalablement déterminé. La température cible est donc la température d’ébullition. Il est important de s'assurer que la température du point d'ébullition est atteinte et maintenue pendant au moins une minute avant de commencer l'étalonnage de la plage supérieure. Il est également très important que la table de cuisson reste allumée à puissance constante.

Le décalage n°1 (plage de valeurs inférieure) est la différence de 0,0°C (bain de glace) par rapport à la valeur moyenne du premier cycle d'étalonnage. Le décalage n°2 (plage supérieure) est la différence entre le point d'ébullition et la moyenne du deuxième cycle d'étalonnage.

## Procédure d'étalonnage avec un thermomètre clinique

Un thermomètre clinique est un thermomètre de référence bien adapté. La plage de mesure supérieure d'un thermomètre clinique est limitée à env. 40°C. La réalisation de l'étalonnage correspond à la procédure pour le bain de glace et la température d'ébullition. Seule différence : si vous choisissez par exemple 40 °C comme deuxième point de calibrage, la table de cuisson doit être éteinte dès que la température cible est atteinte et reste constante pendant env. 60 secondes (aucune fluctuation). Ce n'est qu'alors que dL'étalonnage, c'est-à-dire l'enregistrement de 60 échantillons de mesure, peut être lancé.

## Fichier journal d'étalonnage du capteur

Un fichier journal est écrit pour chaque étalonnage. Exemple :

```texte
13:22:37 L'étalonnage du capteur a commencé
*** Nom du capteur : Capteur IDS2
*** Modèle : DS18B20
*** Adresse : 2827c59d0d0000b1
*** Résolution : 12 bits
*** Délai d'expiration : 750 ms
------------------------------------------------------
ID Cible Réel Diff Offset
#01 24,6000 24,0000 -0,6000 0,6000

 - Valeurs du capteur 2 à 59 en conséquence

#60 24,6000 25,1875 0,5875 -0,6083
------------------------------------------------------
Température du décalage #1 : 24,6000
Moyenne après 60 mesures : 25,2083
Décalage n°1 : -0,6083
=========================================
```
