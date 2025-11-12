#Installation

Pour utiliser le Brautomat, le firmware doit être flashé. De plus, le microcontrôleur ESP doit être connecté au WiFi local.

## Micrologiciel Flash avec MS Windows

La version Brautomat32 est pour ESP32 et est basée sur le framework IDF5.

* [ESP32 IDF5](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/main/Brautomat32.zip) : Brautomat32.zip

Le firmware est installé à l'aide du script « Flashen.cmd » contenu dans l'archive ZIP. L'archive ZIP est décompressée dans n'importe quel dossier. Le microcontrôleur ESP est connecté au PC/ordinateur portable via un câble USB. Un double-clic sur le script Flashen.cmd lance le flashage du firmware.

Le système d'exploitation MS Windows crée automatiquement un port COM série lors de la connexion du microcontrôleur ESP à un port USB du PC ou de l'ordinateur portable.

![Gestionnaire de périphériques Windows](/docs/img/com.jpg)

Un périphérique ESP a été trouvé sur COM7 dans l'image. Dans de rares cas, un port série COM n'est pas automatiquement fourni sous MS Windows. Les pilotes USB pour les microcontrôleurs ESP sont disponibles sur les sites Web suivants : (MS Win et macOS)

[!"

Le script Flashen.cmd utilise l'outil esptool.exe <https://github.com/espressif/esptool>. ESPTool est disponible gratuitement pour différents systèmes d'exploitation (macOS, Linux). La version Windows 64 bits est incluse dans l'archive ZIP. ESPTool est sous licence GPL v2. Consultez le [fichier LICENSE](https://github.com/espressif/esptool/blob/master/LICENSE) ci-joint pour en obtenir une copie.

### Flashage manuel MS Windows, macOS et Linux

Si le script ne peut pas être utilisé, le firmware peut être transféré manuellement vers le microcontrôleur ESP.

ESP32 Étape 1 : Supprimer Flash :

```json
esptool.exe --chip ESP32 effacer-flash
```

ESP32 Étape 2 du micrologiciel Flash :

```json
esptool.exe --chip ESP32 --baud 921600 --avant la réinitialisation par défaut --après la réinitialisation matérielle write-flash 0x1000 bootloader.bin 0x8000 partitions.bin 0xe000 boot_app0.bin 0x10000 firmware.bin 0x350000 LittleFS.bin
```

### Firmware clignotant avec macOS

Télécharger : [pyflasher](https://github.com/marcelstoer/nodemcu-pyflasher/releases)

Sur macOS, le flashage du firmware est divisé en deux étapes. Dans un premier temps, le firmware Brautomat.ino.bin est installé sur l'ESP à l'aide de l'outil pyflasher.

![macOS](/docs/img/flashen_macos.png)

Le Brautomat doit ensuite être connecté au WLAN. Une fois le Brautomat connecté au WiFi, le système de fichiers doit être installé.\
Ouvrir dans le navigateur : <http://Brautomat.local/update>

Après avoir cliqué sur le bouton « Système de fichiers », le fichier LittleFS.bin est sélectionné et installé en cliquant sur Mettre à jour le système de fichiers.

##Configuration WLAN

Après avoir flashé le micrologiciel, le Brautomat démarre en mode AccessPoint. Un WLAN ouvert portant le nom _Brautomat_ devient visible. Une connexion doit être établie avec ce WLAN. Une fois la connexion établie, le navigateur Web ouvre le portail de configuration WLAN. Si le portail ne s'ouvre pas automatiquement, l'adresse <http://192.168.4.1> doit être saisie manuellement dans le navigateur Web.

![Configuration WLAN](/docs/img/wlan1.jpg)

La configuration WLAN est affichée à l'aide du bouton « Configurer le WiFi »

![Configuration WLAN](/docs/img/wlan2.jpg)

Le WLAN (SSID et mot de passe) doit être saisi ici. Avec _Save_, le Brautomat redémarre et se connecte au WLAN. L'interface Web de Brautomat est accessible dans le WLAN local via l'adresse <http://Brautomat.local>.

Ceci termine l’installation de base. Le processus de flashage du firmware et de configuration WLAN ne doit être effectué qu’une seule fois. Le Brautomat doit maintenant être configuré. La configuration est décrite dans la section _Basic Setupung_ décrit. La section suivante _Update_ peut être ignorée dans un premier temps.

> **Remarque :**\
Le Brautomat32 essaie d'établir une connexion avec la configuration WLAN (SSID et mot de passe) pendant 20 secondes maximum. Si aucune connexion ne peut être établie, par exemple si le mot de passe a été mal saisi, le Brautomat32 redémarrera en mode AccessPoint.\
Dans de rares cas, et généralement uniquement lorsque le signal WLAN est faible, le Brautomat32 ne trouve pas de WLAN approprié et démarre également en mode AccessPoint après environ 1 minute. 20 secondes. Dans ce cas, seul le redémarrage du Brautomat32 sera utile.

##Mises à jour

Les mises à jour peuvent être installées dans Brautomat via le menu « Mise à jour ». Un nouveau firmware peut être importé via « WebUpdate » ou « File Update ». Lors de la mise à jour du firmware via WebUpdate, le firmware télécharge la version actuelle depuis Internet à partir du référentiel github. Lors de la mise à jour via la mise à jour de fichier, le micrologiciel est téléchargé depuis le PC local. Un câble USB ou le script de l'installation ne sont pas requis.

La zone mémoire d'un microcontrôleur ESP est divisée en firmware et système de fichiers. Pendant le fonctionnement en cours, les configurations, recettes et autres fichiers ne peuvent être enregistrés ou modifiés que dans le système de fichiers. La zone Firmware n'est accessible qu'à des fins de lecture. Lors d'une mise à jour, la zone du micrologiciel est entièrement réinstallée et les fichiers individuels sont remplacés dans le système de fichiers.

### Mise à jour Web

![WebUpdate](/docs/img/webupdate.jpg)

Le WebUpdate redémarre le Brautomat plusieurs fois. Tout d'abord, le firmware est mis à jour. Après un autre redémarrage, le framework sera mis à jour. Le processus WebUpdate est enregistré dans le fichier webUpdateLog.txt.

Si l'option _WebUpdate avec version d'essai_ est activée, la WebUpdate sera effectuée avec la version développeur actuelle. Ce sont des versions de test. Les nouvelles fonctions du firmware sont (généralement) initialement stockées sous forme de version de test dans le référentiel github. Les versions d'essai ne sont pas recommandées pour une utilisation productive.

### Mise à jour du fichier

Une mise à jour du firmware via la sélection FileUpdate s'effectue en quelques étapes seulement :

Tout d'abord, le firmware actuel doit être téléchargé. L'archive ZIP sera alors décompressée.\
Dans l'interface Web Brautomat, sélectionnez l'élément de menu Mettre à jour puis FileUpdate. Un simple site de mise à jour (image 1) s'affiche :

![FileUpdate](/docs/img/fileupdate2.jpg)

Sous Firmware avec le bouton "Sélectionner un fichier", le fichier _firmware.bin_ doit maintenant être sélectionné dans l'archive ZIP (dans la figure 2). Cliquer sur Mettre à jour le micrologiciel démarre la mise à jour.

Le système de fichiers de Brautomat peut également être mis à jour.

> **Remarque :**\
La fonction Update FileSystem reconstruit le système de fichiers. La mise à jour du système de fichiers écrase tous les paramètres et configurations. En plus de la configuration, cela inclut également les profils et les recettes des chaudières de brassage de purée. Dans presque tous les cas, une mise à jour de fichier du micrologiciel suivie d'une WebUpdate constitue le bon choix, car WebUpdate met à jour les fichiers individuels dans le système de fichiers après la mise à jour du micrologiciel.
