# Mashplan-instellingen

De Brautomat biedt eenvoudig beheer van mash-plannen. Naast het importeren en exporteren kun je schakelen tussen opgeslagen mash-plannen. Ook tijdcontrole is mogelijk. In dit hoofdstuk wordt de beschrijving van de basisfuncties voltooid.

## Mash-plan

De naam van het maischplan kan worden opgegeven in de instellingen. De bestandsnaam is afgeleid van de naam van het mashplan. De parameters *Totale kooktijd* en *Post-isomerisatietijd* worden alleen ter informatie weergegeven en kunnen niet worden bewerkt. Deze parameters worden tijdens de receptimport ingelezen. Als er handmatig een maischplan wordt gemaakt, zijn de kooktijd en post-isomerisatiewaarden niet relevant omdat de Brautomat geen bittereenheden berekent.

## Tijdcontrole

Met behulp van tijdcontrole kan een bruidsdag automatisch worden gepland en gestart.

![Tijdcontrole](/docs/img/Tijdcontrole.jpg)

Met het DateTimerPicker element selecteer je eenvoudig een datum en tijd. De receptnaam wordt tijdelijk vervangen door de opgegeven starttijd.

![Tijdcontrole](/docs/img/Tijdcontrole2.jpg)

Een geactiveerde tijdsturing wordt in de configuratie opgeslagen. Wanneer de zetmachine opnieuw wordt opgestart, worden de ingestelde datum en tijd ingelezen. Als deze zetstart in de toekomst ligt, wordt de tijdsturing geactiveerd. Als de start van het koffiezetten in het verleden ligt, is de tijdbesturing gedeactiveerd.

## Beheer mash-plannen

### Mashplan maken

In het invoerveld moet de naam van het maischplan worden ingevuld. Met *OK* wordt een nieuw leeg maischplan aangemaakt.

### Hernoem het mash-plan

De nieuwe naam voor het maischplan moet in het invoerveld worden ingevuld. Met *OK* wordt het maischplan onder de nieuwe naam opgeslagen.

### Maalplan wijzigen

De Brautomat beheert mash-plannen in flash-geheugen. Door *Mashplan wijzigen* te selecteren, kunt u schakelen tussen de bestaande mashplannen.

### Maalplan importeren

De Brautomat kan brouwrecepten importeren uit de volgende bronnen:

* KleinBrauhelfer2 (vanaf versie 2.5 exporttype Brautomat)
* Pureer mout en meer
*Brouwvader
* Brautomat

Een geïmporteerd brouwrecept wordt een Brautomat pureeplan. Receptbeheer en creatie met kbh2 wordt aanbevolen. Het exportfilter "Brautomat" bevat in geoptimaliseerde vorm alle gegevens die nodig zijn voor het brouwen met de Brautomat.

Recepten uit MashMalzandMore moeten ook eerst in de kleine zethulp2 worden geïmporteerd en aan de individuele systeemwaarden, grondstoffen enz. worden aangepast. Omdat MMum geen restnamen toekent, is het raadzaam om deze in het KBH2-maischplan te bewerken.

Recepten en brouwsels kunnen vanuit BrewFather worden geïmporteerd via bestandsimport of via API-aanroep. In BrewFather kunnen rustnamen een hoofdtekst bevatten (van vrijwel elke lengte). De tekst wordt ingekort tot maximaal 50 tekens. Brewfather staat drijvende-kommagetallen en tekst toe als rusttijd. De parameters worden geconverteerd naar gehele getallen of ingesteld op 0.

*Opmerking: De ESP-microcontrollers hebben een kleine hoeveelheid RAM. Recepten met zeer lange tekst, afbeeldingen of andere bijlagen kunnen mogelijk niet worden geïmporteerd. De Brautomat filtert recepten vóór het importeren. Het kan echter nodig zijn om afbeeldingen en zeer lange beschrijvingen te verwijderen voordat u gaat importeren.

Geïmporteerde recepten worden opgeslagen in de map /Recepten. De receptnaam wordt gebruikt als bestandsnaam. De maximale lengte van de bestandsnaam in het Arduino-bestandssysteem is 31 tekens. Bij het opslaan worden spaties en trema's vervangen.

### Maalplan exporteren

Een mashplan kan worden geëxporteerd in JSON-formaat. Om het opnieuw te kunnen lezen, moet de import worden gebruikt in het Brautomat-formaat.

### Maalplan verwijderen

Het geselecteerde maischplan wordt uit het flashgeheugen verwijderd.

## Standaard importeren

![Vooraf ingestelde import](/docs/img/preset_import.jpg)

Voor de Brautomat is een Schreed-maischen (optioneel) en éénstaps-maischen. In het bijzonder dient de maischstap als scheidingsstap tussen maischen en koken wanneer autonext is gedeactiveerd. Bij het importeren kan de Brautomat ontbrekende maisch- en maischstappen invoegen. Daarnaast kunnen ontbrekende temperaturen voorzien worden van specificaties.

### Temperatuurstandaarden voor ontbrekende parameters

Bij recepten uit verschillende bronnen kan onder andere temperatuurinformatie ontbreken. Dit geldt met name voor de temperaturen voor het inmaischen, afmaischen, frontwort en whirlpoolhoppen. De interne programmalogica van de brouwer vereist altijd een temperatuur voor de verwerking, ook al zijn sommige temperaturen vanuit het perspectief van de brouwer niet nodig. Ontbrekende temperaturen zijn vooraf toegewezen met standaardwaarden.

### Maischtemperatuur [°C]

Deze parameter is bedoeld voor het importeren van recepten en beschrijft de standaardtemperatuur voor het maischen. Deze parameter wordt alleen gebruikt als er tijdens het importeren van het recept geen maischtemperatuur is opgegeven.

### Maischtemperatuur [°C]

Deze parameter is bedoeld voor het importeren van recepten en beschrijft de standaardtemperatuur voor het maischen. Deze parameter wordt alleen gebruikt als er tijdens het importeren van het recept geen maischtemperatuur is opgegeven.

### Temperatuur VWH [°C]

Deze parameter is bedoeld voor het importeren van recepten en beschrijft de standaardtemperatuur voor het hoppen van frontwort. Recepten vermelden vaak geen temperatuur voor de VWH. Voor Brautomat is een temperatuurspecificatie vereist. Als er in het recept een temperatuur is opgegeven, wordt deze gebruikt tijdens het importeren.

### Temperatuur WPH [°C]

Deze parameter is bedoeld voor het importeren van recepten en beschrijft de standaardtemperatuur voor whirlpoolhoppen. Recepten specificeren vaak geen temperatuur voor de WPH. Voor Brautomat is een temperatuurspecificatie vereist. Als er in het recept een temperatuur is opgegeven, wordt deze gebruikt tijdens het importeren.

### Kooktemperatuur [°C]

Deze parameter beschrijft de temperatuur waarbij het wort kookt tot aan de kook. De standaardwaarde is 98°C en komt ongeveer overeen met een locatie op 500 meter boven zeeniveau. Voor het importeren van recepten wordt deze parameter gebruikt als bereidingstemperatuur.
