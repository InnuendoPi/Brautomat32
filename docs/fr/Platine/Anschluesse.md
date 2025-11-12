# Connexions

![Planche 2](/docs/img/Anschluesse.jpg)

## Connectez l'ID GGM

Le réglage par défaut de la table à induction est :

| Tapez | Couleur | Connexion |
| ------------- | --------------- | -------------------- |
| Interruption | bleu/vert | - (inoccupé) ou D5 |
| Commande | jaune | D6 |
| Relais | blanc | J7 |
| Tension + | rouge | 5V/Vcc |
| Tensions - | noir | GND |
| |  | |

Sur le schéma électrique, les 5 branchements pour la plaque à induction sont marqués « GGM ». Le câble de connexion GGM du panneau de commande a un câble bleu, tandis que le câble de remplacement a un câble vert.

Le Brautomat, y compris l'écran, peut être utilisé avec l'alimentation électrique du GGM IDS. Il ne vous reste plus qu'à brancher les câbles rouge et noir sur les bornes à vis marquées. Dans ce cas, aucune autre alimentation supplémentaire ne doit être connectée au microcontrôleur ESP.

Alternativement, le Brautomat peut fonctionner avec une alimentation 5 V CC. Dans ce cas, le câble rouge n'est pas connecté au GGM IDS.

## Connectez les capteurs de température Dallas DS18B20

Le Brautomat prend en charge jusqu'à trois capteurs de température DS18B20. Le connecteur est marqué DS18B20-1 à DS18B20-3 sur l'illustration de la carte. Les couleurs des câbles des capteurs sont différentes. Pour les capteurs très bon marché sans étiquetage ni description, la palette de couleurs est généralement noir – rouge – jaune.

| Tapez | Couleur | Connexion |
| ------------- | --------------- | -------------------- |
| Tension + | vert ou rouge | Vcc |
| Ligne de données | blanc ou jaune | Données |
| Tensions - | marron ou noir | GND |
| |  | |

Il n'y a pas d'ordre de connexion pour les capteurs numériques Dallas DS18B20.

## Connectez les capteurs de température PT100x et MAX31865.

| Tapez | Connexion |
| ------------- | -------------------- |
| Horloge SPI dans | SCLK D9 |
| SDO MasterIn SlaveOut | MISO D10 |
| SDI MasterOut EsclaveIn | MOSI D11 |
| Broche de sélection de puce 0 | CS0 D13 |
| Broche de sélection de puce 1 | CS1 D16 |
| Broche de sélection de puce 2 | CS2 D17 |
| Vin | 3V3 |
| GND | GND |
| | |

La séquence CS0 à CS2 pour connecter les capteurs PT100x doit être respectée.

## Connecter l'affichage

| Câble | Affichage suivant | Connexion |
| ------------- | --------------- | -------------------- |
|     rouge | Actuel + | Vcc |
|   noir | Électricité - | GND |
|    bleu | TX | D1 |
|    jaune | RX | D2 |
|               |         |    |
