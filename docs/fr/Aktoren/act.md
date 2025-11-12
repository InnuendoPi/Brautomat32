# Acteurs

![Paramètres de l'acteur](/docs/img/aktoren_settings.jpg)

Les actionneurs tels que les agitateurs, les pompes ou les éléments chauffants annulaires sont configurés avec un nom et un GPIO (interrupteur). Les actionneurs peuvent avoir la propriété PWM (modulation de largeur d'impulsion). PWM dans Brautomat est une synchronisation de l'alimentation (mise sous et hors tension ou le courant circule et le courant ne circule pas). La saisie se fait en pourcentage. Toujours allumé, c'est 100 %. Dans le cas d’une bouilloire, cela signifierait une performance maximale permanente. Un PWM de 50 % correspondrait à un courant 50 : 50 circulant et un courant ne circulant pas. L'intervalle d'impulsion est de 500 ms. La puissance peut être modifiée pendant le fonctionnement à l'aide des deux boutons du tableau des actionneurs. Les boutons de changement de puissance sont visibles pour chaque actionneur si PWM a été activé pour l'actionneur. La fonction PWM dans Brautomat convient, par exemple, aux relais ou aux SSR. La fonction de commande de moteur pour les agitateurs n'est pas adaptée.

![Aperçu des acteurs](/docs/img/aktoren.jpg)

## webhook

Le paramètre Actuator GPIO doit être réglé sur "-" pour que les éléments du webhook soient affichés dans l'interface web. De plus, l'URL du webhook et la commande sound sont requises :

![webhook](/docs/img/aktoren_webhook1.jpg)

Exemple Shelly 13h :

Allumez Shelly à 13h : <http://192.168.1.5/relay/0?turn=on>\
Éteignez Shelly à 13h : <http://192.168.1.5/relay/0?turn=off>

L'URL du webhook pour Shelly 1PM est : <http://192.168.1.5/relay/0?turn=> (sans activation ni désactivation). Le paramètre du commutateur webhook doit être défini sur « on/off ».

URL Tasmota : <http://192.168.1.5/cm?cmnd=Power1%201>
