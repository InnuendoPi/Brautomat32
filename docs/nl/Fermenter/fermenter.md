# Vergistermodus

In de vergistermodus verwerkt de Brautomat32 het fermentatieplan van boven naar beneden op dezelfde manier als het maischplan. Het controllerdeck heeft dezelfde functies.

![Fermenter-dashboard](/docs/img/fermenter_dash.jpg)

De verwerking van de stappen kent een belangrijk verschil:

De eerste stap in het fermentatieplan wordt gestart wanneer de doeltemperatuur is bereikt. Dit is meestal het moment waarop de gist aan het wort wordt toegevoegd. Alle volgende stappen in het fermentatieplan starten onmiddellijk, ongeacht de werkelijke temperatuur.

Om het in te stellen kan één GPIO worden ingesteld voor koeling en één GPIO voor verwarming. Koelen of verwarmen is optioneel.

![Instellingen voor vergister](/docs/img/fermenter_set.jpg)

De vergister heeft drie verschillende statussen: koelen, verwarmen en inactief. Wanneer de status van koelen of verwarmen verandert, start er een pauze. Tijdens de pauze verandert de status van de vergister niet.

* Oude status koeling en nieuwe status koeling: geen pauze. De koeling blijft ingeschakeld
* Oude status verwarming en nieuwe status verwarming: geen pauze. De verwarming blijft aan
* Oude status koelen en nieuwe status verwarmen: pauze 120s
* Oude status verwarmen en nieuwe status koelen: pauze 120s

## Oprit

Een vergisterstap wordt gespecificeerd met een begin- en een eindtemperatuur. In de eerste figuur in deze paragraaf bedraagt ​​de temperatuur in de eerste vergisterstap 18°C. Dit betekent uiteraard dat de fermentatietemperatuur gedurende een periode van 1 dag onveranderd blijft.

In de tweede vergisterstap is de starttemperatuur 18°C ​​en de eindtemperatuur 20°C. De duur voor deze fermentatiestap wordt ingevoerd als 2 dagen. Er zijn nu twee manieren om van de begin- naar de eindtemperatuur te komen:

Wanneer de ramp is geactiveerd, regelt de Brautomat de fermentatietemperatuur lineair gedurende de gespecificeerde duur voor deze stap. In dit geval wordt de temperatuur gedurende 2 dagen verhoogd van 18°C ​​naar 20°C in stappen van +0,1°C.

Als de ramp gedeactiveerd is, wordt de eindtemperatuur vastgesteld aan het begin van de vergisterstap, hetzij door koeling of verwarming. Zodra de eindtemperatuur is vastgesteld, wordt deze gehandhaafd.

## Schakelcyclus van relais

De relaisschakelcyclus bepaalt hoe lang een van de koel-, verwarmings- of inactieve toestanden wordt aangehouden. Het toegestane waardebereik ligt tussen 1000 en 240.000 ms. De standaardwaarde is 120.000, d.w.z. 120 seconden. Een te kleine schakelcyclus kan negatieve gevolgen hebben voor koelapparaten.

## Weergave

In de vergistermodus moet de MashSud-weergave (pagina 2) worden geselecteerd. Het keteloverzicht en het handmatige bedieningsscherm kunnen niet worden gebruikt voor de vergistermodus.
