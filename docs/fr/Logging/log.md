# Journalisation

![média](/docs/img/logging.jpg)

La journalisation n'est disponible que dans la version de développement. La journalisation intégrée facilite le dépannage, à la fois pour les erreurs du micrologiciel Brautomat32 et pour les erreurs des utilisateurs. Un moniteur série est requis pour la sortie. Ce qui suit montre Microsoft Visual Studio Code avec l’extension Microsoft Serial Monitor. Microsoft Visual Code est gratuit et disponible en version autonome (aucune installation requise).

Le moniteur série doit être réglé sur un débit en bauds de 115 200 et CRLF en plus du port COM.

![Code Microsoft Visual Studio](/docs/img/vscode.jpg)

## Paramètres de journalisation

Différents canaux pour la sortie série peuvent être activés via les paramètres du système.

* Configuration - ce canal affiche des messages lorsque la configuration est lue ou enregistrée.
* Capteurs - les messages concernant les capteurs sont émis dans ce canal
* Acteurs - un canal de reportage sur les acteurs
* Chaudière à purée - les messages concernant la première chaudière sont affichés dans ce canal
* Bouilloire de brassage - tous les messages concernant la bouilloire de brassage
* Chaudière de refonte - Messages sur la chaudière de refonte
* Fermenteur - Messages sur le mode fermenteur
* Système - les messages système sont affichés dans ce canal
* Processus de brassage - le processus de brassage est enregistré dans ce canal
* Nextion Display - Journalisation de l'affichage

Chaque canal a les options désactivé, erreur, information et verbeux.

* Désactivé - pas de journalisation.

Le canal n'envoie pas de journal à la console série.

* Erreur - Seules les erreurs sont enregistrées.

Le type de sortie de débogage Erreur enregistre uniquement les erreurs. Dans VSCode, le type d'ERREUR est affiché en rouge.

```json
[E][SENSOREN.cpp:1600] setSenErr() : Erreur du capteur de test : #0 État d'erreur Sensor_Sud : 1
[E][SENSOREN.cpp:76] Update() : Sen : l'erreur Sensor_Sud n°1 n'a pas pu lire les données de température
```

* Info - Processus de journalisation

Déboguer les processus de journal d’informations sur le type de sortie. Le type Info contient la sortie de type Erreur. Dans VSCode, le type INFO est affiché en vert.

```json
[I][KETTLES.cpp:2044] debConsole() : définit la nouvelle durée de vie : 1071746 ms
[I][KETTLES.cpp:1922] webhook() : réponse du webhook : 
[I][KETTLES.cpp:2044] debConsole() : webhook activé : 5 000 ms (mDutyCycle 5 000 * Puissance 100/100)
```

* Verbeux - toutes les informations disponibles sont affichées.

La sortie de débogage de type verbeux inclut tous les types précédents. De plus, toutes les diffusions SSE sont enregistrées en type Verbose. Dans VSCode, le type Verbose est affiché en bleu.

```json
[V][SYSTEM.cpp:847] SSEBroadcastJson() : kettle hlt : {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:919] SSEBroadcastJson() : kettle sud : {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:839] SSEBroadcastJson() : purée de bouilloire : {"power":0,"stepnr":0,"tempvalue":50.4","target":0,"step":6,"timer":3}
```

De plus, le paramètre Système - détaillé génère une journalisation de type curl de toutes les requêtes GET et POST du serveur Web.

La sortie sur la console série a un formatage fixe. Exemple :

```json
[V][SYSTEM.cpp:839] SSEBroadcastJson() : purée de bouilloire : {"power":0,"stepnr":0,"tempvalue":50.4","target":0,"step":6,"timer":3}
```

Les pièces individuelles :

```json
[V] Le type de sortie (ici Verbose)
```

```json
[SYSTEM.cpp:839] Emplacement du code source d'arrondi
```

```json
SSEBroadcastJson() : La fonction appelante
```

Le message de débogage réel suit après les deux points :

```json
purée de bouilloire : {"power":0,"stepnr":0,"tempvalue":50.4","target":0,"step":6,"timer":3}
```

Lorsque le Brautomat est connecté à une console série, la sortie suivante apparaît au moment du démarrage

```json
05:42:16.904 > [I][SYSINFO] démarrage de Brautomat32 V 1.56
05:42:22.467 > [I][SYSINFO] monter le système de fichiers LittleFS : ok, mémoire de tas libre : 192924
05:42:28.384 > [I][SYSINFO] mDNS http://Brautomat.adresse IP locale 192.168.100.112 heure : 05:42:27 RSSI : -83
```

En plus der version de Brautomat, le nom MDNS et l'adresse IP actuelle sont affichés. La ligne _mount filesystem LittleFS: ok, free heap mem:_ indique que le système de fichiers a été monté.

## Erreur du capteur de test

Une erreur de capteur peut être déclenchée via une URL Web. Les capteurs dans Brautomat ont un ID commençant par 0. Une erreur de capteur peut être générée via un appel web :

```json
http://Brautomat.local/setSenErr?id=0
```

Pour corriger l'erreur du capteur, la même URL est à nouveau accessible. Le premier capteur a l'ID 0, le deuxième a l'ID 1 et le troisième a l'ID 2. Dans l'URL, il vous suffit de remplacer le dernier 0 par l'ID du capteur souhaité.

Avec ce test d'erreur de capteur, le paramètre « Comportement en cas d'erreur de capteur » peut être vérifié très facilement.

## Journalisation avec Microsoft VSCode

Microsoft VSCode peut être configuré pour la connexion en quelques étapes seulement. Il n'est pas nécessaire d'installer Microsoft VSCode ; la version portable est suffisante.

Téléchargez Microsoft VSCode sous forme de fichier ZIP : [Microsoft VSCode](https://code.visualstudio.com/docs/?dv=winzip)

Extrayez le fichier ZIP dans n'importe quel répertoire. Accédez au répertoire de l'explorateur de fichiers et créez un dossier appelé data. Le dossier de données met MS VScode en mode portable et peut être utilisé sans installation.

![Code Microsoft Visual Studio](/docs/img/vscode_4.jpg)

Démarrez Microsoft VSCode en double-cliquant sur Code.exe.

![Code Microsoft Visual Studio](/docs/img/vscode_1.jpg)

L'extension Serial Monitor est requise dans VScode pour la journalisation. Cliquez sur le bouton Extensions à gauche et saisissez « moniteur série » dans le champ de recherche.

![Code Microsoft Visual Studio](/docs/img/vscode_2.jpg)

Installez l'extension Serial Monitor de Microsoft. Le moniteur série est inclus dans l'affichage de sortie. Cliquez sur l'élément de sortie dans le menu Affichage ou ouvrez la sortie avec la combinaison de touches Ctrl Maj U. L'affichage des extensions peut être masqué ou affiché en cliquant sur le bouton Extension. Cliquez maintenant sur l'onglet Serial Monitor dans la fenêtre Sortie. Il ne vous reste plus qu'à sélectionner le port COM et à régler le débit en bauds sur 115 200. La journalisation démarre avec le bouton Démarrer la surveillance.

![Code Microsoft Visual Studio](/docs/img/vscode_3.jpg)
