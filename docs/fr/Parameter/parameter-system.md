# Système de paramètres

## Système

### Activer le buzzer piézo

Un buzzer piézo peut être activé avec ce paramètre. Par défaut le buzzer est connecté au GPIO D8. Cela correspond à la disposition du tableau 2.1. Les alarmes sonores soutiennent le processus de brassage avec des signaux sonores.

### Activer les toasts et les alarmes mp3

Les toasts sont de petits messages push. Ils apparaissent sous forme de vignette en bas à droite du navigateur. À l'exception des messages d'erreur, les toasts sont automatiquement masqués après quelques secondes. Il y a des messages toast sur le processus de brassage, des messages toast du système et des alarmes mp3 sans texte. La propriété Toasts propose 3 options : Désactivé, Activé et Erreur. L'option "Off" désactive les messages d'alarme. L'option "On" envoie tous les messages toast et alarmes mp3. L'option "erreurs uniquement" envoie uniquement des messages toast en cas d'erreurs système, mais pas de messages sur le processus de brassage.

Toasts prend en charge la sortie audio. Cela signifie que les toasts sont affichés non seulement visuellement mais aussi acoustiquement pendant le processus de brassage. Le firmware contient les fichiers audio info.mp3, success.mp3, warn.mp3 et error.mp3. Les fichiers audio (mp3) peuvent être échangés. Seul le nom doit rester le même. La lecture automatique audio doit être activée dans le navigateur pour l'adresse IP de la machine à mariée.

L'audio mp3 nécessite un « geste de l'utilisateur » sur les appareils iOS, comme un événement de clic ou de toucher. Cliquez simplement sur un élément du site Web et l'audio mp3 sera émis. Sans le geste de l'utilisateur, la sortie audio est bloquée par le système iOS_.

Tous les principaux navigateurs tels que MS Edge, Chrome ou Firefox disposent d'options de lecture automatique des médias dans les paramètres des autorisations du site Web. Il est recommandé d'ajouter le site Web de Brautomat à la liste verte. Dans l'image suivante, la page Web de Brautomat a été ajoutée avec le nom mDNS dans le navigateur Microsoft Edge. Alternativement, l'adresse IP peut également être saisie

![média](/docs/img/autoplay-media.jpg)

Avec ce réglage, les alarmes mp3 peuvent remplacer un buzzer piézo.

### Activer l'écran tactile

Un écran Nextion HMI 3,5 pouces peut être utilisé avec ce paramètre. Le Brautomat propose trois vues

#### Aperçu de la chaudière

Dans cette vue, l'IDS et la post-coulée sont affichés avec les températures réelles et cibles. Le repos actuel et le prochain sont affichés avec la durée.
La longueur de la barre rouge sous la vue IDS et refonte indique le temps de repos écoulé.

![Affichage](/docs/img/kettlepage-sm.jpg)

#### MashBud

Cette vue montre la première table de cuisson. Le temps de repos actuel est affiché avec les températures réelle et cible ainsi que le temps restant actuel. La longueur de la barre rouge sous les températures montre la progression du repos en cours. Le symbole à droite du temps restant indique si la prochaine pause démarrera automatiquement (autonext) : vert signifie automatique, rouge signifie pause. De plus, la platine contrôleur est affichée avec les fonctions correspondantes.

![Affichage](/docs/img/brewpage-sm.jpg)

#### Mode manuel (uniquement pour GGM IDS2)

Cette vue permet de contrôler manuellement la plaque à induction. En mode manuel, 6 niveaux de puissance sont disponibles : 0, 20, 40, 60, 80 et 100 % de puissance. Le mode manuel ne convient qu'au GGM IDS2. (IDS1 non testé !)

![Affichage](/docs/img/induction-mode-sm.jpg)

Un affichage est facultatif. Le Brautomat prend uniquement en charge les écrans tactiles Nextion HMI de 3,5 pouces (séries Basic et Discovery).

L'affichage est configuré via une carte SD. Le fichier TFT du dossier Info correspondant à l'écran est copié sur la carte SD et inséré dans l'écran. Dès que l'écran est allumé, la configuration commence. Le processus prend environ une minute. La progression est affichée à l'écran. Une fois la configuration terminée, l'écran s'éteindra et la carte SD sera retirée. L'écran est maintenant prêt à l'emploi.

Il convient de noter que SDA, SCL sur leLes PIN D1, D2 doivent être exploités.

### Capteurs PT100x MAX31865 Activer l'amplificateur

Si des capteurs analogiques PT100x sont utilisés, cet interrupteur doit être activé. Un capteur analogique PT100x nécessite un convertisseur RTD vers numérique pour se connecter à un microcontrôleur ESP. Un amplificateur MAX31865 est un convertisseur numérique RTD sous la forme d'une petite carte supplémentaire.

### Activer mDNS

Le DNS multidiffusion est utilisé pour résoudre les noms d'hôte en adresses IP dans les petits réseaux. mDNS permet d'utiliser un nom « parlant » pour le Brautomat. La valeur par défaut est le nom mDNS « Brautomat ». L'interface web est accessible via l'adresse <http://Brautomat.local>. Le nom d'hôte est limité à un maximum de 15 caractères.

Remarque : Le nom mDNS est configuré sans protocole (http://) et sans domaine de premier niveau (.local) dans les paramètres système (Brautomat).

### Tableau de bord

Les éléments peuvent être facilement affichés et masqués via le tableau de bord. Par exemple, si aucune refonte n'est utilisée, l'élément Refonte doit être désactivé pour le tableau de bord. Les éléments désactivés réduisent le trafic.

### Journalisation

La journalisation n'est activée que dans la version de développement. Dans l'onglet Journalisation, la sortie du journal série peut être activée pour tous les modules. Les niveaux Erreur, Info, Verbeux et Désactivé sont disponibles pour la journalisation. Un moniteur série est requis, par ex. avec l'IDE Arduino, VSCODE etc. Le débit en bauds est de 115 200.

Le mode erreur génère uniquement des erreurs.

Le mode Info contient des erreurs et génère également des informations sur la configuration dans le moniteur série.

Le mode verbeux inclut les erreurs et les informations et génère également des informations sur le transfert de données (diffusions SSE).

### Serveur de temps NTP

Le Network Time Protocol (NTP) synchronise régulièrement l'heure avec un serveur de temps. Le serveur de temps par défaut est europe.pool.ntp.org. S'il existe un serveur de temps sur le réseau local, celui-ci doit être utilisé. Si un serveur de temps local est configuré, le Brautomat ne nécessite pas d'accès à Internet. Par exemple, fritz.box ou l'adresse IP de la passerelle standard.

### Fuseau horaire NTP

Le fuseau horaire est déterminé à partir d'un tableau. Le fuseau horaire Europe Berlin est prédéfini :

<CET-1CEST,M3.5.0,M10.5.0/3>

Le fuseau horaire est utilisé pour déterminer l’heure correcte, y compris l’heure d’été et d’hiver.

#### Tableau des fuseaux horaires

|Afrique/Abidjan |GMT0 |
|--------------------------------|------------------------------------------------|
|Afrique/Accra |GMT0 |
|Afrique/Addis_Abeba |EAT-3 |
|Afrique/Alger |CET-1 |
|Afrique/Asmara |EAT-3 |
|Afrique/Bamako |GMT0 |
|Afrique/Bangui |WAT-1 |
|Afrique/Banjul |GMT0 |
|Afrique/Bissau |GMT0 |
|Afrique/Blantyre |CAT-2 |
|Afrique/Brazzaville |WAT-1 |
|Afrique/Bujumbura |CAT-2 |
|Afrique/Le Caire |EET-2EEST,M4.5.5/0,M10.5.4/24 |
|Afrique/Casablanca |<+01>-1 |
|Afrique/Ceuta |CET-1CEST,M3.5.0,M10.5.0/3 |
|Afrique/Conakry |GMT0 |
|Afrique/Dakar |GMT0 |
|Afrique/Dar_es_Salaam |EAT-3 |
|Afrique/Djibouti |EAT-3 |
|Afrique/Douala |WAT-1 |
|Afrique/El_Aaiun |<+01>-1 |
|Afrique/Freetown |GMT0 |
|Afrique/Gaborone |CAT-2 |
|Afrique/Harare |CAT-2 |
|Afrique/Johannesburg |SAST-2 |
|Afrique/Juba |CAT-2 |
|Afrique/Kampala |EAT-3 |
|Afrique/Khartoum |CAT-2 |
|Afrique/Kigali |CAT-2 |
|Afrique/Kinshasa |WAT-1 |
|Afrique/Lagos |WAT-1 |
|Afrique/Libreville |WAT-1 |
|Afrique/Lomé |GMT0 |
|Afrique/Luanda |WAT-1 |
|Afrique/Lubumbashi |CAT-2 |
|Afrique/Lusaka |CAT-2 |
|Afrique/Malabo |WAT-1 |
|Afrique/Maputo |CAT-2 |
|Afrique/Maseru |SAST-2 |
|Afrique/Mbabane |SAST-2 |
|Afrique/Mogadiscio |EAT-3 |
|Afrique/Monrovia |GMT0 |
|Afrique/Nairobi |EAT-3 |
|Afrique/Ndjamena |WAT-1 |
|Afrique/Niamey |WAT-1 |
|Afrique/Nouakchott |GMT0 |
|Afrique/Ouagadougou |GMT0 |
|Afrique/Porto-Novo |WAT-1 |
|Afrique/Sao_Tome |GMT0 |
|Afrique/Tripoli |EET-2 |
|Afrique/Tunis |CET-1 |
|Afrique/Windhoek |CAT-2 |
|Amérique/Adak |HST10HDT,M3.2.0,M11.1.0 |
|Amérique/Anchorage |AKST9AKDT,M3.2.0,M11.1.0 |
|Amérique/Anguilla |AST4 |
|Amérique/Antigua |AST4 |
|Amérique/Araguaína |<-03>3 |
|Amérique/Argentine/Buenos_Aires|<-03>3 |
|Amérique/Argentine/Catamarca |<-03>3 |
|Amérique/Argentine/Cordoue |<-03>3 |
|Amérique/Argentine/Jujuy |<-03>3 |
|Amérique/Argentine/La_Rioja |<-03>3 |
|Amérique/Argentine/Mendoza |<-03>3 |
|Amérique/Argentine/Rio_Gallegos|<-03>3 |
|Amérique/Argentine/Salta |<-03>3 |
|Amérique/Argentine/San_Juan |<-03>3 |
|Amérique/Argentine/San_Luis |<-03>3 |
|Amérique/Argentine/Tucuman |<-03>3 |
|Amérique/Argentine/Ushuaia |<-03>3 |
|Amérique/Aruba |AST4 |
|Amérique/Asunción|<-04>4<-03>,M10.1.0/0,M3.4.0/0 |
|Amérique/Atikokan |EST5 |
|Amérique/Bahia |<-03>3 |
|America/Bahia_Banderas |CST6 |
|Amérique/Barbade |AST4 |
|Amérique/Belem |<-03>3 |
|Amérique/Belize |CST6 |
|Amérique/Blanc-Sablon |AST4 |
|Amérique/Boa_Vista |<-04>4 |
|Amérique/Bogota |<-05>5 |
|Amérique/Boise |MST7MDT,M3.2.0,M11.1.0 |
|Amérique/Cambridge_Bay |MST7MDT,M3.2.0,M11.1.0 |
|Amérique/Campo_Grande |<-04>4 |
|Amérique/Cancún |EST5 |
|Amérique/Caracas |<-04>4 |
|Amérique/Cayenne |<-03>3 |
|Amérique/Caïmans |EST5 |
|Amérique/Chicago |CST6CDT,M3.2.0,M11.1.0 |
|Amérique/Chihuahua |CST6 |
|Amérique/Costa_Rica |CST6 |
|Amérique/Creston |MST7 |
|Amérique/Cuiaba |<-04>4 |
|Amérique/Curaçao |AST4 |
|Amérique/Danmarkshavn |GMT0 |
|Amérique/Dawson |MST7 |
|Amérique/Dawson_Creek |MST7 |
|Amérique/Denver |MST7MDT,M3.2.0,M11.1.0 |
|Amérique/Détroit |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/Dominique |AST4 |
|Amérique/Edmonton |MST7MDT,M3.2.0,M11.1.0 |
|Amérique/Eirunepe |<-05>5 |
|Amérique/Salvador |CST6 |
|Amérique/Fortaleza |<-03>3 |
|Amérique/Fort_Nelson |MST7 |
|Amérique/Glace_Bay |AST4ADT,M3.2.0,M11.1.0 |
|Amérique/Godthab |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|Amérique/Goose_Bay |AST4ADT,M3.2.0,M11.1.0 |
|Amérique/Grande_Turquie |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/Grenade |AST4 |
|Amérique/Guadeloupe |AST4 |
|Amérique/Guatemala |CST6 |
|Amérique/Guayaquil |<-05>5 |
|Amérique/Guyane |<-04>4 |
|Amérique/Halifax |AST4ADT,M3.2.0,M11.1.0 |
|Amérique/La Havane |CST5CDT,M3.2.0/0,M11.1.0/1 |
|Amérique/Hermosillo |MST7 |
|Amérique/Indiana/Indianapolis |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/Indiana/Knox |CST6CDT,M3.2.0,M11.1.0 |
|Amérique/Indiana/Marengo |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/Indiana/Pétersbourg |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/Indiana/Tell_City |CST6CDT,M3.2.0,M11.1.0 |
|Amérique/Indiana/Vevay |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/Indiana/Vincennes |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/Indiana/Winamac |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/Inuvik |MST7MDT,M3.2.0,M11.1.0 |
|Amérique/Iqaluit |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/Jamaïque |EST5 |
|Amérique/Juneau |AKST9AKDT,M3.2.0,M11.1.0 |
|Amérique/Kentucky/Louisville |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/Kentucky/Monticello |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/Kralendijk |AST4 |
|Amérique/La_Paz |<-04>4 |
|Amérique/Lima |<-05>5 |
|Amérique/Los_Angeles |PST8PDT,M3.2.0,M11.1.0 |
|Amérique/Lower_Princes |AST4 |
|Amérique/Maceió |<-03>3 |
|Amérique/Managua |CST6 |
|Amérique/Manaus |<-04>4 |
|Amérique/Marigot |AST4 |
|Amérique/Martinique |AST4 |
|Amérique/Matamoros |CST6CDT,M3.2.0,M11.1.0 |
|Amérique/Mazatlan |MST7 |
|Amérique/Menominee |CST6CDT,M3.2.0,M11.1.0 |
|Amérique/Mérida |CST6 |
|Amérique/Metlakatla |AKST9AKDT,M3.2.0,M11.1.0 |
|Amérique/Mexico_City |CST6 |
|Amérique/Miquelon |<-03>3<-02>,M3.2.0,M11.1.0 |
|Amérique/Moncton |AST4ADT,M3.2.0,M11.1.0 |
|Amérique/Monterrey |CST6 |
|Amérique/Montevideo |<-03>3 |
|Amérique/Montréal |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/Montserrat |AST4 |
|Amérique/Nassau |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/New_York |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/Nipigon |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/Nome |AKST9AKDT,M3.2.0,M11.1.0 |
|Amérique/Noronha |<-02>2 |
|Amérique/Dakota_du_Nord/Beulah |CST6CDT,M3.2.0,M11.1.0 |
|Amérique/Dakota_du_Nord/Centre |CST6CDT,M3.2.0,M11.1.0 |
|Amérique/Dakota_du_Nord/New_Salem|CST6CDT,M3.2.0,M11.1.0 |
|Amérique/Nuuk |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|Amérique/Ojinaga |CST6CDT,M3.2.0,M11.1.0 |
|Amérique/Panama |EST5 |
|Amérique/Pangnirtung |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/Paramaribo |<-03>3 |
|Amérique/Phoenix |MST7 |
|Amérique/Port-au-Prince |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/Port_d'Espagne |AST4 |
|Amérique/Porto_Velho |<-04>4 |
|Amérique/Porto_Rico |AST4 |
|Amérique/Punta_Arenas |<-03>3 |
|Amérique/Rainy_River |CST6CDT,M3.2.0,M11.1.0 |
|Amérique/Rankin_Inlet |CST6CDT,M3.2.0,M11.1.0|
|Amérique/Recife |<-03>3 |
|Amérique/Régina |CST6 |
|Amérique/Résolu |CST6CDT,M3.2.0,M11.1.0 |
|Amérique/Rio_Branco |<-05>5 |
|Amérique/Santarem |<-03>3 |
|Amérique/Santiago |<-04>4<-03>,M9.1.6/24,M4.1.6/24 |
|Amérique/Saint_Domingue |AST4 |
|Amérique/Sao_Paulo |<-03>3 |
|Amérique/Scoresbysund |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|Amérique/Sitka |AKST9AKDT,M3.2.0,M11.1.0 |
|Amérique/St_Barthelemy |AST4 |
|Amérique/St_Johns |NST3:30NDT,M3.2.0,M11.1.0 |
|Amérique/St_Kitts |AST4 |
|Amérique/Sainte_Lucie |AST4 |
|Amérique/St_Thomas |AST4 |
|Amérique/St_Vincent |AST4 |
|Amérique/Swift_Current |CST6 |
|Amérique/Tegucigalpa |CST6 |
|Amérique/Thulé |AST4ADT,M3.2.0,M11.1.0 |
|Amérique/Thunder_Bay |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/Tijuana |PST8PDT,M3.2.0,M11.1.0 |
|Amérique/Toronto |EST5EDT,M3.2.0,M11.1.0 |
|Amérique/Tortola |AST4 |
|Amérique/Vancouver |PST8PDT,M3.2.0,M11.1.0 |
|Amérique/Whitehorse |MST7 |
|Amérique/Winnipeg |CST6CDT,M3.2.0,M11.1.0 |
|Amérique/Yakoutat |AKST9AKDT,M3.2.0,M11.1.0 |
|Amérique/Yellowknife |MST7MDT,M3.2.0,M11.1.0 |
|Antarctique/Casey |<+08>-8 |
|Antarctique/Davis |<+07>-7 |
|Antarctique/DumontDUrville |<+10>-10 |
|Antarctique/Macquarie |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Antarctique/Mawson |<+05>-5 |
|Antarctique/McMurdo |NZST-12NZDT,M9.5.0,M4.1.0/3 |
|Antarctique/Palmer |<-03>3 |
|Antarctique/Rothera |<-03>3 |
|Antarctique/Syowa |<+03>-3 |
|Antarctique/Troll |<+00>0<+02>-2,M3.5.0/1,M10.5.0/3 |
|Antarctique/Vostok |<+05>-5 |
|Arctique/Longyearbyen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Asie/Aden |<+03>-3 |
|Asie/Almaty |<+05>-5 |
|Asie/Amman |<+03>-3 |
|Asie/Anadyr |<+12>-12 |
|Asie/Aqtau |<+05>-5 |
|Asie/Aqtobe |<+05>-5 |
|Asie/Achgabat |<+05>-5 |
|Asie/Atyraou |<+05>-5 |
|Asie/Bagdad |<+03>-3 |
|Asie/Bahreïn |<+03>-3 |
|Asie/Bakou |<+04>-4 |
|Asie/Bangkok|<+07>-7 |
|Asie/Barnaoul |<+07>-7 |
|Asie/Beyrouth |EET-2EEST,M3.5.0/0,M10.5.0/0 |
|Asie/Bichkek |<+06>-6 |
|Asie/Brunei |<+08>-8 |
|Asie/Tchita |<+09>-9 |
|Asie/Choibalsan |<+08>-8 |
|Asie/Colombo |<+0530>-5:30 |
|Asie/Damas |<+03>-3 |
|Asie/Dacca |<+06>-6 |
|Asie/Dili |<+09>-9 |
|Asie/Dubaï |<+04>-4 |
|Asie/Douchanbé |<+05>-5 |
|Asie/Famagouste |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Asie/Gaza |EET-2EEST,M3.4.4/50,M10.4.4/50 |
|Asie/Hébron |EET-2EEST,M3.4.4/50,M10.4.4/50 |
|Asie/Ho_Chi_Minh |<+07>-7 |
|Asie/Hong_Kong |HKT-8 |
|Asie/Hovd |<+07>-7 |
|Asie/Irkoutsk |<+08>-8 |
|Asie/Jakarta |WIB-7 |
|Asie/Jayapura |WIT-9 |
|Asie/Jérusalem |IST-2IDT,M3.4.4/26,M10.5.0 |
|Asie/Kaboul |<+0430>-4:30 |
|Asie/Kamtchatka |<+12>-12 |
|Asie/Karachi |PKT-5 |
|Asie/Katmandou |<+0545>-5:45 |
|Asie/Khandyga |<+09>-9 |
|Asie/Calcutta |IST-5:30 |
|Asie/Krasnoïarsk |<+07>-7 |
|Asie/Kuala_Lumpur |<+08>-8 |
|Asie/Kuching |<+08>-8 |
|Asie/Koweït |<+03>-3 |
|Asie/Macao |CST-8 |
|Asie/Magadan |<+11>-11 |
|Asie/Makassar |WITA-8 |
|Asie/Manille |PST-8 |
|Asie/Mascate |<+04>-4 |
|Asie/Nicosie |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Asie/Novokuznetsk |<+07>-7 |
|Asie/Novossibirsk |<+07>-7 |
|Asie/Omsk |<+06>-6 |
|Asie/Orale |<+05>-5 |
|Asie/Phnom_Penh |<+07>-7 |
|Asie/Pontianak |WIB-7 |
|Asie/Pyongyang |KST-9 |
|Asie/Qatar |<+03>-3 |
|Asie/Qyzylorda |<+05>-5 |
|Asie/Riyad |<+03>-3 |
|Asie/Sakhaline |<+11>-11 |
|Asie/Samarkand |<+05>-5 |
|Asie/Séoul |KST-9|
|Asie/Shanghai |CST-8 |
|Asie/Singapour |<+08>-8 |
|Asie/Srednekolymsk |<+11>-11 |
|Asie/Taipei |CST-8 |
|Asie/Tachkent |<+05>-5 |
|Asie/Tbilissi |<+04>-4 |
|Asie/Téhéran |<+0330>-3:30 |
|Asie/Thimphou |<+06>-6 |
|Asie/Tokyo |JST-9 |
|Asie/Tomsk |<+07>-7 |
|Asie/Oulan-Bator |<+08>-8 |
|Asie/Urumqi |<+06>-6 |
|Asie/Oust-Nera |<+10>-10 |
|Asie/Vientiane |<+07>-7 |
|Asie/Vladivostok |<+10>-10 |
|Asie/Iakoutsk |<+09>-9 |
|Asie/Rangoon |<+0630>-6:30 |
|Asie/Ekaterinbourg |<+05>-5 |
|Asie/Erevan |<+04>-4 |
|Atlantique/Açores |<-01>1<+00>,M3.5.0/0,M10.5.0/1 |
|Atlantique/Bermudes |AST4ADT,M3.2.0,M11.1.0 |
|Atlantique/Canaries |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantique/Cap-Vert |<-01>1 |
|Atlantique/Féroé |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantique/Madère |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantique/Reykjavik |GMT0 |
|Atlantique/Sud_Géorgie |<-02>2 |
|Atlantique/Stanley |<-03>3 |
|Atlantique/Sainte-Hélène |GMT0 |
|Australie/Adélaïde |ACST-9:30ACDT,M10.1.0,M4.1.0/3 |
|Australie/Brisbane |AEST-10 |
|Australie/Broken_Hill |ACST-9:30ACDT,M10.1.0,M4.1.0/3 |
|Australie/Currie |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Australie/Darwin |ACST-9:30 |
|Australie/Eucla |<+0845>-8:45 |
|Australie/Hobart |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Australie/Lindeman |AEST-10 |
|Australie/Lord_Howe |<+1030>-10:30<+11>-11,M10.1.0,M4.1.0 |
|Australie/Melbourne |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Australie/Perth |AWST-8 |
|Australie/Sydney |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Europe/Amsterdam |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Andorre |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Astrakhan |<+04>-4 |
|Europe/Athènes |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europe/Belgrade |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Berlin |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Bratislava |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Bruxelles |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Bucarest |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europe/Budapest |CET-1CEST,M3.5.0,M10.5.0/3|
|Europe/Büsingen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Chisinau |EET-2EEST,M3.5.0,M10.5.0/3 |
|Europe/Copenhague |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Dublin |IST-1GMT0,M10.5.0,M3.5.0/1 |
|Europe/Gibraltar |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Guernesey |GMT0BST,M3.5.0/1,M10.5.0 |
|Europe/Helsinki |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europe/Île_de_Man |GMT0BST,M3.5.0/1,M10.5.0 |
|Europe/Istanbul |<+03>-3 |
|Europe/Jersey |GMT0BST,M3.5.0/1,M10.5.0 |
|Europe/Kaliningrad |EET-2 |
|Europe/Kiev |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europe/Kirov |MSK-3 |
|Europe/Lisbonne |WET0WEST,M3.5.0/1,M10.5.0 |
|Europe/Ljubljana |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Londres |GMT0BST,M3.5.0/1,M10.5.0 |
|Europe/Luxembourg |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Madrid |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Malte |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Mariehamn |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europe/Minsk |<+03>-3 |
|Europe/Monaco |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Moscou |MSK-3 |
|Europe/Oslo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Paris |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Podgorica |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Prague |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Riga |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europe/Rome |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Samara |<+04>-4 |
|Europe/Saint-Marin |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Sarajevo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Saratov |<+04>-4 |
|Europe/Simféropol |MSK-3 |
|Europe/Skopje |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Sofia |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europe/Stockholm |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Tallinn |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europe/Tirane |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Oulianovsk |<+04>-4 |
|Europe/Oujgorod |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europe/Vaduz |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Vatican |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Vienne |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Vilnius |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europe/Volgograd |MSK-3 |
|Europe/Varsovie |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Zagreb |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europe/Zaporozhye |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europe/Zurich |CET-1CEST,M3.5.0,M10.5.0/3 |
|Indien/Antananarivo |EAT-3 |
|Indien/Chagos |<+06>-6 |
|Indien/Noël |<+07>-7 |
|Indien/Cocos |<+0630>-6:30 |
|Indien/Comore |EAT-3 |
|Indien/Kerguelen |<+05>-5 |
|Indien/Mahé |<+04>-4 |
|Indien/Maldives |<+05>-5 |
|Indien/Maurice |<+04>-4 |
|Indien/Mayotte |EAT-3 |
|Indien/Réunion |<+04>-4 |
|Pacifique/Apia |<+13>-13 |
|Pacifique/Auckland |NZST-12NZDT,M9.5.0,M4.1.0/3 |
|Pacifique/Bougainville |<+11>-11 |
|Pacifique/Chatham |<+1245>-12:45<+1345>,M9.5.0/2:45,M4.1.0/3:45|
|Pacifique/Chuuk |<+10>-10 |
|Pacifique/Pâques |<-06>6<-05>,M9.1.6/22,M4.1.6/22 |
|Pacifique/Efate |<+11>-11 |
|Pacifique/Enderbury |<+13>-13 |
|Pacifique/Fakaofo |<+13>-13 |
|Pacifique/Fidji |<+12>-12 |
|Pacifique/Funafuti |<+12>-12 |
|Pacifique/Galápagos |<-06>6 |
|Pacifique/Gambier |<-09>9 |
|Pacifique/Guadalcanal |<+11>-11 |
|Pacifique/Guam |ChST-10 |
|Pacifique/Honolulu |HST10 |
|Pacifique/Kiritimati |<+14>-14 |
|Pacifique/Kosrae |<+11>-11 |
|Pacifique/Kwajalein |<+12>-12 |
|Pacifique/Majuro |<+12>-12 |
|Pacifique/Marquises |<-0930>9h30 |
|Pacifique/Midway |SST11 |
|Pacifique/Nauru |<+12>-12 |
|Pacifique/Niue |<-11>11 |
|Pacifique/Norfolk |<+11>-11<+12>,M10.1.0,M4.1.0/3 |
|Pacifique/Nouméa |<+11>-11 |
|Pacifique/Pago_Pago |SST11 |
|Pacifique/Palau |<+09>-9 |
|Pacifique/Pitcairn |<-08>8 |
|Pacifique/Pohnpei |<+11>-11 |
|Pacifique/Port_Moresby |<+10>-10 |
|Pacifique/Rarotonga |<-10>10 |
|Pacifique/Saipan |ChST-10 |
|Pacifique/Tahiti |<-10>10 |
|Pacifique/Tarawa |<+12>-12 |
|Pacifique/Tongatapu |<+13>-13 |
|Pacifique/Sillage |<+12>-12 |
|Pacifique/Valais |<+12>-12 |
|Etc/GMT |GMT0 |
|Etc/GMT-0 |GMT0 |
|Etc/GMT-1 |<+01>-1 |
|Etc/GMT-2|<+02>-2 |
|Etc/GMT-3 |<+03>-3 |
|Etc/GMT-4 |<+04>-4 |
|Etc/GMT-5 |<+05>-5 |
|Etc/GMT-6 |<+06>-6 |
|Etc/GMT-7 |<+07>-7 |
|Etc/GMT-8 |<+08>-8 |
|Etc/GMT-9 |<+09>-9 |
|Etc/GMT-10 |<+10>-10 |
|Etc/GMT-11 |<+11>-11 |
|Etc/GMT-12 |<+12>-12 |
|Etc/GMT-13 |<+13>-13 |
|Etc/GMT-14 |<+14>-14 |
|Etc/GMT0 |GMT0 |
|Etc/GMT+0 |GMT0 |
|Etc/GMT+1 |<-01>1 |
|Etc/GMT+2 |<-02>2 |
|Etc/GMT+3 |<-03>3 |
|Etc/GMT+4 |<-04>4 |
|Etc/GMT+5 |<-05>5 |
|Etc/GMT+6 |<-06>6 |
|Etc/GMT+7 |<-07>7 |
|Etc/GMT+8 |<-08>8 |
|Etc/GMT+9 |<-09>9 |
|Etc/GMT+10 |<-10>10 |
|Etc/GMT+11 |<-11>11 |
|Etc/GMT+12 |<-12>12 |
|Etc/UCT |UTC0 |
|Etc/UTC |UTC0 |
|Etc/Greenwich |GMT0 |
|Etc/Universel |UTC0 |
|Etc/Zoulou |UTC0 |
