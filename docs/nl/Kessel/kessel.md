# Ketelconfiguratie en gebruik

De Brautomat32 biedt de mogelijkheid om maximaal drie ketels op te stellen. De eerste ketel heeft de interne aanduiding MASH en alternatief IDS. Deze ketel is nodig voor het maischen. De twee andere ketels zijn optioneel. De tweede ketel heeft de interne aanduiding SUD, alternatief MLT en de derde ketel heeft de aanduiding HLT of Nachguss.

De drie ketels kunnen van het GGM-inductiekookplaat- of relaistype zijn. Een ketel van het relaistype is voorzien van een webhookverbinding.

![Kessel-configuratie](/docs/img/kessel_1.jpg)

De parameters worden beschreven in het hoofdstuk Basisconfiguratie en parameters in één oogopslag - Ketelparameters en zijn voor alle drie de ketels identiek.

Het gebruik van de drie ketels is echter anders, vooral het gebruik van het maischplan. Het maischplan is altijd gekoppeld aan de eerste ketel van maischbrouwsel, zolang er geen andere ketel via een besturingscommando in het maischplan is opgegeven. Besturingscommando's worden ook uitgelegd in het gedeelte over de speciale functie en besturingscommando's van het mashplan.

## Ketelbesturingsopdrachten

In deze sectie worden alleen commando's voor de ketelbediening behandeld. Besturingscommando's voor actuatoren zijn identiek gestructureerd, maar worden uitgelegd in de sectie Speciale functies en besturingscommando's van het mashplan. Een besturingscommando bevat altijd een dubbele punt in de restnaam. De Brautomat herkent alleen aan de dubbele punt dat deze rust als een controlecommando moet worden behandeld. Het formaat is apparaat:maximaal vermogen. Dit betekent dat de dubbele punt de apparaatnaam scheidt van de maximale prestaties.

De volgende namen zijn intern gedefinieerd als apparaatnamen voor de drie CV-ketels:

* MASH of IDS voor de eerste ketel
* MLT of SUD voor de tweede ketel
* HLT of REGUSS voor de derde ketel

Elke ketel krijgt in de instellingen een naam toegewezen. Deze naam kan ook worden gebruikt als apparaatnaam voor een besturingscommando.

Getallen tussen 0 en 100 zijn toegestaan ​​als maximale prestatie. De waarde komt overeen met de maximale vermogensparameter in de ketelinstellingen en wordt in procenten weergegeven. De specificatie AAN komt overeen met 100% en UIT komt overeen met 0%.

### Optie 1: de ketel handmatig schakelen

De tweede en derde ketel kunnen via de webinterface handmatig worden in- en uitgeschakeld met behulp van de betreffende aan/uit-knop. Als een ketel bijvoorbeeld is ingesteld voor re-infusie, kan in de ketelinstellingen de doeltemperatuur worden ingesteld op 78°C en kan de ketel indien nodig op de brouwdag worden ingeschakeld.

### Optie 2: automatisch schakelen van de ketel

De tweede en derde ketel kunnen ook via het maischplan geschakeld worden:

![Kessel-configuratie](/docs/img/kessel_2.jpg)

In dit vereenvoudigde maischplan wordt in lijn 2 automatisch de derde ketel HLT ingeschakeld. De stap HLT:100 met een doeltemperatuur van 78°C en een duur van 0 minuten schakelt de navulling met 100% vermogen in en stelt de doeltemperatuur in op 78°C. Omdat de tijdsduur is aangegeven op 0 minuten, is het bijvullen permanent ingeschakeld. De Brautomat gaat direct naar de volgende maischstap en laat de na-infusie ingeschakeld. De PID-controller regelt permanent het vermogen dat nodig is om de doeltemperatuur te bereiken en te behouden. Nachguss:100 zou identiek zijn aan het besturingscommando HLT:100. Als de navulling in de instellingen de naam “Cooker” heeft gekregen, kan ook het besturingscommando COOKER:100 worden gebruikt.

![Kessel-configuratie](/docs/img/kessel_3.jpg)

Bij dit maischplan wordt in de derde stap het tweede ketelbrouwsel ingeschakeld. In tegenstelling tot het vorige voorbeeld HLT wordt de SUD-ketel gedurende 15 minuten ingeschakeld met de doeltemperatuur van 100°C. De Brautomat blijft op deze stap totdat de doeltemperatuur is bereikt en de rustperiode van 10 minuten is voltooid. Vervolgens wordt de ketel-SUD uitgeschakeld en springt de Brautomat naar de volgende stap in het maischplan.

De tekst "Te"ilmaische koken" wordt door Brautomat vertaald naar 100%. Als er geen getal tussen 0 en 100 staat of de informatie AAN of UIT na de dubbele punt, vervangt de Brautomat de tekst met 100% prestatie.

## Voorbeeld verschillende prestaties

Met de bedieningscommando's kan tijdens het zetproces het maximale vermogen worden aangepast. Als de inductiekookplaat bijvoorbeeld een maximaal vermogen heeft van 3,5 kW en de gebruikte brouwketel een inhoud heeft van 20 liter, dan kan met het bedieningscommando MASH:75 het maximale uitgangsvermogen van de inductiekookplaat worden teruggebracht tot 75% vermogen. De rest met het besturingscommando MASH:75 wordt aangemaakt met een doeltemperatuur van 0°C en een duur van 0 minuten met autonext geactiveerd.

## Voorbeeld afkooksel

Zoals hierboven beschreven wordt een rust uit het maischplan altijd toegewezen aan de eerste ketel (MASH) als er geen stuurcommando (dubbele in de restnaam) de rest aan een andere ketel toewijst. Een besturingscommando kan de tweede ketel met een doeltemperatuur aan-/uitschakelen en direct naar de volgende rustpauze springen, of deze met een rustperiode in het maischproces integreren.

Bij het brouwproces met afkooksel wordt een deel van het beslag gekookt, terwijl het resterende beslag op de gewenste temperatuur wordt gehouden. Een afkooksel met de Brautomat zou er als volgt uitzien:

* Trek de resterende puree in de tweede ketel. Deze taak wordt uitgevoerd door de rest van de resterende puree op te halen terwijl autonext is uitgeschakeld.
* schakel vervolgens de tweede ketel permanent in op een gewenste temperatuur met een rustperiode van nul minuten. autonext is geactiveerd.
* Kook een gedeeltelijke puree in de eerste ketel gedurende de gewenste rusttijd. autonext is geactiveerd.
* Voeg de resterende puree uit de tweede ketel toe aan de gedeeltelijke puree in de eerste ketel. autonext is uitgeschakeld.

De resten in een maischplan in een 2 of 3 ketelomgeving hebben het volgende principe:

* Het te koken gedeeltelijke puree wordt toegewezen aan de eerste ketel
* Restmaisch met temperatuurbehoud wordt toegewezen aan de tweede of derde ketel
*De navulling wordt altijd toegewezen aan de tweede of derde waterkoker

## webhook

De parameter PIN white relay moet worden ingesteld op "-", zodat de webhook-elementen in de webinterface worden weergegeven. Bovendien zijn de webhook-URL en het geluidscommando vereist:

![webhook](/docs/img/kessel_webhook1.jpg)

Voorbeeld Shelly 13.00 uur:

Schakel Shelly om 13.00 uur in: <http://192.168.1.5/relay/0?turn=on>\
Schakel Shelly uit om 13.00 uur: <http://192.168.1.5/relay/0?turn=off>

De webhook-URL voor Shelly 1PM is: <http://192.168.1.5/relay/0?turn=> (zonder aan en uit). De parameter voor de webhookschakelaar moet worden ingesteld op 'aan/uit'.

URL Tasmota: <http://192.168.x.x/cm?cmnd=Power1%201>
