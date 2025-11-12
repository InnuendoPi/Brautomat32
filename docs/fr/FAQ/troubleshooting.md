# Dépannage

Trucs & Astuces... à suivre...

## Wi-Fi

La portée WLAN des microcontrôleurs ESP est limitée. La force actuelle du signal WLAN est affichée sous Système -> Réinitialiser. Plus la valeur est proche de zéro, plus le signal est fort. Les valeurs de -50dBm à -75dBm sont très bonnes. Une valeur inférieure à -80 dBm est mauvaise et entraînera des problèmes. Dans les cuisines de brasserie où le signal WiFi est faible, l'intervalle PID peut être augmenté à 7 000 ms, par exemple, pour réduire la quantité de données. Si la force du signal est faible, seul un navigateur actif doit être utilisé (voir Événements envoyés par le serveur ci-dessous). Il est important de trouver un emplacement approprié pour le Brautomat dans le WLAN (ou un répéteur supplémentaire). Une bonne puissance de signal n’entraîne pas nécessairement, mais dans la plupart des cas, un taux de transfert de données plus élevé et plus stable.

L'interface Web de Brautomat est basée sur le framework bootstrap 4.6 avec Javascript. Les fichiers requis (css, js et polices) se trouvent dans la mémoire flash de Brautomat. Cela présente un avantage et un inconvénient. L'avantage est qu'aucune connexion Internet n'est nécessaire pour charger les fichiers nécessaires lors du brassage. L'inconvénient est que dans le WLAN local, le Brautomat doit fournir les fichiers de structure compressés à chaque navigateur connecté une fois que la connexion est établie. Si un fichier n'est pas transmis correctement et seulement très lentement en raison, par exemple, d'une faible puissance du signal WiFi, l'interface Web ne fonctionnera pas correctement. Dans ce cas, l'interface web ne se construit pas correctement (elle ressemble alors à une page de texte) ou est incomplète (les tableaux restent vides). Dans la plupart des cas, recharger le site (Ctrl-Maj-R) suffit.

Après une mise à jour du firmware, le Brautomat doit toujours être éteint et le cache du navigateur supprimé.

## Navigateurs

Le Brautomat est testé sur Win11 avec MS Edge et Firefox dans la version actuelle, ainsi que sur les appareils iOS avec MS Edge et Safari. MS Edge est préféré pendant le développement. Quel que soit le navigateur, la lecture audio automatique des messages Toasts (audio) doit être activée pour l'adresse de Brautomat. L'adresse de Brautomat doit également être incluse dans les exceptions de blocage des plugins de navigateur. Les navigateurs obsolètes (par exemple IE8) ne sont pas pris en charge.

Le cache du navigateur peut conduire à des publicités Web incorrectes. L'interface Web de Brautomat spécifie l'absence de cache et l'absence de stockage lorsqu'elle est appelée, mais différents navigateurs ignorent ces instructions. La suppression manuelle du cache du navigateur est souvent lancée avec la combinaison de touches Ctrl - Maj - Suppr.

## Événements envoyés par le serveur, plans d'alimentation et clients à verrouillage automatique

Le Brautomat envoie des données aux navigateurs connectés et actifs via les événements envoyés par le serveur. Jusqu'à 8 appareils peuvent se connecter au Brautomat en même temps. Les modes d'alimentation ou le verrouillage automatique peuvent interrompre une connexion. Le processus de préparation ne sera ni arrêté ni interrompu si la connexion est perdue ! Le Brautomat continue de fonctionner normalement. Les navigateurs déconnectés ne reçoivent tout simplement aucune nouvelle information. Les informations incluent les températures, l'étape de brassage actuelle, les performances actuelles, les graphiques, etc. Une connexion d'événements envoyés par le serveur à Brautomat est le « canal de données » par lequel les informations sont envoyées au navigateur. Si la connexion à Brautomat est interrompue, le canal de données est terminé. Un navigateur actif reconnaît la fin de son canal de données et se reconnecte automatiquement sur Brautomat après un court laps de temps.\
Les inscriptions sur Brautomat n'ont ni ordre ni priorité. Le fait que le navigateur Web du PC ou de la tablette soit connecté en premier ou en dernier n'a aucun effet. Le processus de préparation peut être démarré sur l'appareil A, mis en pause sur l'appareil B, observé sur l'appareil C et terminé sur l'appareil D. Si les quatre appareils sont actifs et connectés, tous les navigateurs affichent i (presque) en même temps.informations identiques car chacun de ces quatre appareils possède son propre canal de données.

## Importation de recettes

En raison de la mémoire limitée, l'importation de recettes ne peut pas importer de recettes contenant des PDF, des images jointes ou des textes ou explications très longs. Pour les recettes MashMalzandMore, importer dans kbh2 puis exporter au format Brautomat est une solution simple et bonne. Les recettes de Brewfather peuvent également être importées.

## AutoTune

Le processus AutoTune ne doit pas se concentrer sur la perfection, c'est-à-dire S.v. 0,1°C. L'écart des capteurs est généralement plus grand. La bande de bruit du paramètre AutoTune (diffusion autour de la valeur cible) est suffisamment proche de la température cible avec une valeur de 0,3 pour très bien atteindre la température cible et la maintenir pendant la période de repos.\
Les bouilloires de brassage très bien isolées nécessitent une série de données AutoTune plus grande. Dans la série de données, les valeurs mesurées sont enregistrées par ordre chronologique. Au début se trouve la valeur de mesure actuelle et à la toute fin de la ligne se trouve la valeur de mesure la plus ancienne. La série de données de valeur AutoTune indique "combien de valeurs avant la mesure actuelle le Brautomat regarde-t-il en arrière (dans le passé) afin de détecter un changement de température d'au moins AutoTune bande de bruit (0,3)". Pour une chaudière bien isolée, la série de données doit contenir 75 points de mesure. Pour une chaudière non isolée, une série de données de 50 points de mesure suffit. Ces deux paramètres doivent être ajustés en fonction de l'environnement. Les spécifications standards devraient produire de très bonnes valeurs dans la grande majorité des cas.

## Capteurs et étalonnage

Les capteurs Dallas DS18B20 sont proposés sur de nombreuses plateformes à des prix très différents. L'étalonnage du capteur permet de minimiser les écarts. Dans tous les cas, le capteur IDS doit être calibré car des écarts de plusieurs degrés Celsius (selon l'origine) sont possibles.
Si un capteur signale régulièrement une erreur de capteur (toasts) dans l'interface Web, vous devez d'abord essayer une connexion différente pour le capteur. Les trois connexions sur la carte pour les capteurs sont équivalentes et n'ont pas d'ordre prédéterminé. En cas de problèmes de capteurs, il faudra vérifier les points de soudure des 3 borniers à vis et la résistance de 4,7kOhm (sur le circuit imprimé sous l'ESP).

## Interruption de la broche GGM IDS

L'interruption par broche fournit un canal de retour de la plaque à induction vers le Brautomat. Ce canal de retour est connecté au Brautomat avec une interruption GPIO de l'ESP. Une interruption interrompt le déroulement du programme et vérifie la condition d'interruption.\
La table à induction GGM IDS envoie en permanence une interruption toutes les 300 millisecondes environ : soit le signal « tout va bien » (0000), soit un code d'erreur (par exemple 0010 pour pas de chaudière ou chaudière vide).

Section de sortie série sur interruption de broche :

```texte
10:00:00:174 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:543 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:864 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:209 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:554 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
```

La sortie série au niveau de l'interruption de broche montre clairement que la plaque à induction envoie constamment « tout va bien ». Cependant, le Brautomat interrompt son travail pendant le brassage à chaque interruption (environ toutes les 300 ms) et vérifie la condition d'interruption. L'interruption de broche ne doit donc être utilisée qu'à des fins de dépannage.

Les interruptions suivantes sont décrites dans le manuel du GGM IDS2 :

E0 non/chaudière vide (0010 2)\
Erreur du circuit E1 (0011 3)\
E3 Surchauffe (0101 5)\
Sonde de température E4 (0110 6)\
Protection basse tension E7 (1001 9)\
Parasurtenseur E8 (1010 10)\
Panneau de commande EC (1110 14)\

Malheureusement, les chaînes binaires ne sont pas connues. Seul E1 chaudière non/vide est connu. Le tempsLes tranches suivantes ont été déterminées grâce à des tests, mais ne sont pas certaines.

L'interruption de broche ne doit être attribuée qu'en cas de problèmes. La broche D5 est préaffectée à la première plaque à induction. Aucune interruption de broche n’est requise dans le fonctionnement normal du brassage.
