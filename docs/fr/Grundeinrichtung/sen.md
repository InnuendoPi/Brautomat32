# Configuration du capteur de température

## Ajouter un nouveau capteur

Dans la section _Capteurs_, un nouveau capteur peut être ajouté en cliquant sur le symbole plus.

![Créer des capteurs](/docs/img/Sensor-setup.jpg)

## Définir l'adresse et le nom du capteur

Les capteurs de température Dallas DS18B20 ont une adresse unique qui est utilisée par le micrologiciel pour l'identification. L'adresse du capteur est lue automatiquement. Si plusieurs capteurs sont connectés, l'adresse du capteur peut être sélectionnée dans la liste de sélection.

Si aucun capteur n'est affiché :

* La détection des capteurs peut être relancée à l'aide du bouton de rechargement.
* Si aucun capteur n'est toujours détecté, la connexion du câble doit être vérifiée.

Chaque capteur a besoin d'un nom. Dans cette configuration de base, le capteur est appelé « Sensor IDS2 ».  appelé.

_Remarque : les noms de capteurs peuvent contenir un maximum de 20 caractères. Les caractères spéciaux autorisés sont # et les espaces. La saisie est automatiquement vérifiée par l'interface Web._

![Configurer les capteurs](/docs/img/Sensor-settings.jpg)

## Calibrage du capteur (valeurs de décalage)

Les propriétés Offset 1 et Offset 2 sont utilisées pour l'étalonnage du capteur. Une explication détaillée peut être trouvée dans la section _Capteurs – Calibrage_.

Pour cette configuration de base, les deux valeurs restent inchangées à 0,00.

## Enregistrer et vérifier le capteur

En cliquant sur _save_, le capteur est créé puis affiché dans le tableau de bord sous _Sensors_.

![Tableau de bord des capteurs](/docs/img/Sensor-dashboard.jpg)

> **Remarque :**

La configuration des capteurs analogiques PT100x s'effectue de la même manière mais n'est pas abordée dans cette configuration de base.
