# Acteurs

![Actorinstellingen](/docs/img/aktoren_settings.jpg)

Aandrijvingen zoals roerwerken, pompen of ringverwarmingselementen worden geconfigureerd met een naam en een GPIO (schakelaar). Actuators kunnen de eigenschap PWM (pulsbreedtemodulatie) hebben. PWM in Brautomat is een timing van vermogen (in- en uitschakelen of stroom vloeit en stroom vloeit niet). De boeking gebeurt in procenten. Altijd aan is 100%. In het geval van een waterkoker betekent dit permanent maximale prestaties. Een PWM van 50% zou 50:50 stroom vloeien en stroom niet vloeien. Het pulsinterval bedraagt ​​500 ms. Het vermogen kan tijdens bedrijf worden gewijzigd met behulp van de twee knoppen in de actuatortabel. De stroomwisselknoppen zijn voor elke actuator zichtbaar als PWM voor de actuator is ingeschakeld. De PWM-functie in Brautomat is bijvoorbeeld geschikt voor relais of SSR's. De functie als motorbesturing voor roerwerken is niet geschikt.

![Overzicht acteurs](/docs/img/aktoren.jpg)

## webhook

De parameter Actuator GPIO moet op "-" worden ingesteld, zodat de webhook-elementen in de webinterface worden weergegeven. Bovendien zijn de webhook-URL en het geluidscommando vereist:

![webhook](/docs/img/aktoren_webhook1.jpg)

Voorbeeld Shelly 13.00 uur:

Schakel Shelly om 13.00 uur in: <http://192.168.1.5/relay/0?turn=on>\
Schakel Shelly uit om 13.00 uur: <http://192.168.1.5/relay/0?turn=off>

De webhook-URL voor Shelly 1PM is: <http://192.168.1.5/relay/0?turn=> (zonder aan en uit). De parameter voor de webhookschakelaar moet worden ingesteld op 'aan/uit'.

URL Tasmota: <http://192.168.1.5/cm?cmnd=Power1%201>
