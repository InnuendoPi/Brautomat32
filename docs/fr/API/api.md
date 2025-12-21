# ⚙️ API Brautomat32

Ces deux fonctions Javascript facilitent la communication avec le Brautomat32.  
Ils encapsulent les appels `fetch()`, gèrent les erreurs, la reconnaissance JSON/texte et les notifications utilisateur facultatives (toast/alerte).

---

## 🟢 apiGET(url, alarme, toast, journal)

* @param {string} url - URL du point de terminaison
* @param {boolean} alarm - active sendAlarm, false par défaut
* @param {boolean} toast - message toast en cas d'erreur, faux par défaut
* @param {boolean} log - sortie de débogage vers la console dans le navigateur, false par défaut
* @returns {Promise\<any\>} - réponse du serveur (objet JSON ou texte)

**Exemple :**  

```js
const misc = wait apiGET('/reqMisc', false, false, true);
console.log(misc);
```

---

## 🔵 apiPOST(url, données, alarme, toast, journal, postType, réponseType)

* @param {string} url - URL du point de terminaison
* @param {Object} data - données à envoyer (json ou txt)
* @param {boolean} alarm - active sendAlarm, false par défaut
* @param {boolean} toast - message toast en cas d'erreur, faux par défaut
* @param {boolean} log - sortie de débogage vers la console dans le navigateur, false par défaut
* @param {"json"|"text"|"formdata"} postType - type de contenu pour l'en-tête, json par défaut
* @param {"json"|"text"} réponseType - valeur de retour attendue, texte par défaut
* @returns {Promise\<any\>} - Réponse du serveur

**Exemple :**  

```js
wait apiPOST('/setKettle', { temp: 65, PID: true }, true, false, true);
console.log(misc);
```

---

## 🌐 Gestionnaire de serveur Web Brautomat32

Brautomat points de terminaison HTTP. Le serveur Web utilise CORS et prend en charge les requêtes **HTTP GET**, **POST**, **PUT** et **DELETE**.

---

## 🏠 Points de terminaison de base

| Point de terminaison | Méthode | Descriptif |
|-----------|----------|--------------|
| `/` | OBTENIR | Charge la page d'accueil |
| `/index`, `/index.htm`, `/index.html` | OBTENIR | Itinéraires alternatifs pour la page d'accueil |

---

## 🌡️ Capteurs

| Point de terminaison | Méthode | Descriptif |
|-----------|----------|--------------|
| `/reqSensors?id=${sensorid}` | OBTENIR | Renvoie une liste de tous les capteurs |
| `/setSensor?id=${sensorid}` | POSTER | Ajoute un nouveau capteur ou modifie un existant |
| `/delSensor?id=${sensorid}` | POSTER | Supprime un capteur |
| `/reqSearchSensorAddresses?id=${sensorid}` | OBTENIR | Recherche les adresses de capteurs disponibles |
| `/senkal` | POSTER | Effectue l'étalonnage du capteur |
| `/setSenErr?id=${sensorid}` | POSTER | Définit l'état d'erreur du capteur (débogage) |

| sensoride | Descriptif |
|-----------|----------|
| -1 | récupère tous les capteurs |
| 0 - 2 | ID du capteur |

**Exemple :**  

```js
const data = wait apiGET(`/reqSensors?id=0`);
console.log(données);
```

---

## ⚙️ Acteurs

| Point de terminaison | Méthode | Descriptif |
|-----------|----------|--------------|
| `/reqActors?id=${actorid}` | OBTENIR | Renvoie une liste de tous les acteurs |
| `/setActor?id=${actorid}` | POSTER | Crée ou modifie un acteur |
| `/delActor?id=${actorid}` | POSTER | Supprime un acteur |
| `/actorPower?id=${actorid}` | POSTER | Commute la puissance d'un actionneur |
| `/actorPWM?id=${actorid}` | POSTER | Définit la valeur PWM d'un actionneur |

| acteur | Descriptif |
|-----------|----------|
| -1 | récupère tous les acteurs |
| 0 - 9 | ID de l'actionneur |

**Exemple :**  

```js
const data = wait apiGET(`/reqActors?id=0`);
console.log(données);
```

---

## 🔥 Bouilloire

| Point de terminaison | Méthode | Descriptif |
|-----------|----------|--------------|
| `/reqKettle?id=${kettleid}` | OBTENIR | Renvoie les données actuelles de la chaudière |
| `/reqKettlePID?id=${kettleid}` | OBTENIR | Requête des paramètres PID |
| `/setKettle?id=${kettleid}` | POSTER | Modifier les données de la chaudière |
| `/setKettlePID?id=${kettleid}` | POSTER | PID changement de paramètre |
| `/handlePower?id=${kettleid}` | POSTER | Activer/Désactiver les performances |

| kettleidé | Descriptif |
|-----------|----------|
| 0 | Bouilloire à purée |
| 1 | Bouilloire |
| 2 | SDJ |
| 3 | Fermenteur |

**Exemple :**  

```js
const data = wait apiGET(`/reqKettle?id=0`);
console.log(données);
```

---

## 📈 Profils

| Point de terminaison | Méthode | Descriptif |
|-----------|----------|--------------|
| `/setProfile` | POSTER | Créer ou modifier un nouveau profil |
| `/changeProfile?id=${kettleid}&pname=${pname}` | POSTER | Changer de profil actif |
| `/delProfile?pname=${pname}` | POSTER | Supprimer le profil |

| kettleidé | Descriptif |
|-----------|----------|
| 0 | Bouilloire à purée |
| 1 | Bouilloire |
| 2 | SDJ |
| 3 | Fermenteur |
| pnom | Nom du profil |

**Exemple :**  

```js
const data = wait apiGET(`/reqKettle?type=0`);
console.log(données);
```

---

## 🍺 Gestion des brassages/recettes

| Point de terminaison | Méthode | Descriptif |
|-----------|----------|--------------|
| `/setSud` | POSTER | Configurer le brassage existant |
| `/setSudNouveau` | POSTER | Créer une nouvelle infusion |
| `/setSudRen` | POSTER | Renommer Sud |
| `/setSudCopy` | POSTER | Copier Sud |
| `/setSudCha` | POSTER | Changer d'infusion |
| `/delSud` | POSTER | Supprimer l'infusion |
| `/reqSud` | OBTENIR | Obtenir les paramètres sud |
| `/reqSudname` | OBTENIR | Obtenir le nom actuel de la brasserie |
| `/reqBrauStart` | POSTER | Démarrer le processus de brassage |

---

## ⚙️ Divers / Paramètres généraux

| Point de terminaison | Méthode | Descriptif |
|-----------|----------|--------------|
| `/redémarrer` | POSTER | Redémarrez l'appareil |
| `/reqMisc` | OBTENIR | Informations générales sur le système |
| `/reqVis` | OBTENIR | Obtenir des données de visualisation |
| `/reqMiscAlert` | OBTENIR | Alertes de requête |
| `/reqBreakAlert` | OBTENIR | Interroger les avertissements d'ébullition/pause |
| `/setMisc` | POSTER | Modifier les paramètres généraux |
| `/setMiscLang` | POSTER | Définir la langue |
| `/rezimp` | POSTER | Importer la recette |
| `/setMash` | POSTER | Définir le plan de purée |
| `/startHTTPUpdate` | POSTER | Démarrer la mise à jour du micrologiciel |
| `/setFerm` | POSTER | Définir les paramètres de fermentation |

---

## ▶️ Contrôles

| Point de terminaison | Méthode | Descriptif |
|-----------|----------|--------------|
| `/Btn-Power` | POSTER | Bouton d'alimentation de déclenchement |
| `/btn-break` | POSTER | Déclencher le bouton pause |
| `/Btn-Play` | POSTER | Bouton de démarrage de déclenchement |
| `/Btn-Étape suivante` | POSTER | Prochaine étape |
| `/Btn-Prev-Step` | POSTER | Étape précédente |
| `/Btn-Edit` | POSTER | Activer le mode édition |
| `/manpow` | POSTER | Contrôler la puissance manuelle |
| `/effacerFlash` | POSTER | Effacer la mémoire flash |

---

## 📡 Événements envoyés par le serveur (SSE)

| Point de terminaison | Méthode | Descriptif |
|-----------|----------|--------------|
| `/canal` | OBTENIR | Canal ESS ouvert |
| `/startSSE` | OBTENIR | Démarre la connexion SSE |
| `/checkAliveSSE` | OBTENIR | Vérifie les connexions SSE actives |
| `/reloadMashSSE` | OBTENIR | Recharge les données de purée |
| `/langue` | OBTENIR | Obtenir le fichier de langue |

---

## 📊 Graphique / Données de graphique

| Point de terminaison | Méthode | Descriptif |
|-----------|----------|--------------|
| `/getDots` | OBTENIR | Obtenir des données graphiques |
| `/removeDots` | POSTER | Effacer les données du graphique |

---

## 🍻 Intégration BrewFather

| Point de terminaison | Méthode | Descriptif |
|-----------|----------|--------------|
| `/getbf` | OBTENIR | Liste des recettes BrewFather disponibles |
| `/bfRecette` | OBTENIR | Obtenez les détails de la recette |

---

## 💾 Sauvegarde et restauration

| Point de terminaison | Méthode | Descriptif |
|-----------|----------|--------------|
| `/sauvegarde` | OBTENIR | Créer une sauvegarde du système |
| `/restaurer` | POSTER | Restaurer la sauvegarde |

---

## 📁 Gestion des fichiers (FSBrowser)

| Point de terminaison | Méthode | Descriptif |
|-----------|----------|--------------|
| `/modifier` | OBTENIR | Charger l'éditeur de fichiers |
| `/statut` | OBTENIR | Obtenir l'état du système |
| `/liste` | OBTENIR | Afficher la liste des fichiers |
| `/modifier` | METTRE | Créer un nouveau fichier |
| `/modifier` | SUPPRIMER | Supprimer le fichier |
| `/modifier` | POSTER | Téléchargement de fichiers |

---

## 🧩 Contenu statique (cache activé)

| Fichiers | Descriptif |
|--------------|--------------------|
| `/Brautomat.min.css`, `/bootstrap.min.css`, `/bootstrap.min.js`, `/Brautomat.min.js`, `/Brautomat.ttf` | Actifs Web |
| `/langue/deutsch.json`, `/langue/english.json`, `/langue/norsk.json` | Fichiers de langue |
| `/lang.js`, `/favicon.ico` | Fichiers système |
| `/info.mp3`, `/success.mp3`, `/warning.mp3`, `/error.mp3` | Fichiers audio pour les messages système |

---
