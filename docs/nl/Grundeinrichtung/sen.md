# Temperatuursensor instellen

## Nieuwe sensor toevoegen

In het gedeelte _Sensoren_ kan een nieuwe sensor worden toegevoegd door op het plusteken te klikken.

![Creëer sensoren](/docs/img/Sensor-setup.jpg)

## Sensoradres en naam instellen

Dallas DS18B20 temperatuursensoren hebben een uniek adres dat door de firmware wordt gebruikt voor identificatie. Het sensoradres wordt automatisch uitgelezen. Als er meer dan één sensor is aangesloten, kan het sensoradres uit de keuzelijst worden geselecteerd.

Als er geen sensor wordt weergegeven:

* De detectie van de sensoren kan opnieuw worden gestart met behulp van de herlaadknop.
*Als er nog steeds geen sensor wordt gedetecteerd, moet de kabelaansluiting worden gecontroleerd.

Elke sensor heeft een naam nodig. In deze basisopstelling wordt de sensor “Sensor IDS2” genoemd.  genaamd.

_Opmerking: Sensornamen kunnen maximaal 20 tekens bevatten. Toegestane speciale tekens zijn # en spaties. De invoer wordt automatisch gecontroleerd door de webinterface._

![Sensoren configureren](/docs/img/Sensor-settings.jpg)

## Sensorkalibratie (offsetwaarden)

De eigenschappen Offset 1 en Offset 2 worden gebruikt voor sensorkalibratie. Een gedetailleerde uitleg vindt u in de sectie _Sensoren – Kalibratie_.

Voor deze basisconfiguratie blijven beide waarden ongewijzigd op 0,00.

## Sensor opslaan en controleren

Door op _opslaan_ te klikken wordt de sensor aangemaakt en vervolgens in het dashboard weergegeven onder _Sensoren_.

![Sensorsdashboard](/docs/img/Sensor-dashboard.jpg)

> **Opmerking:**

Het configureren van analoge PT100x-sensoren gebeurt op dezelfde manier, maar wordt niet behandeld in deze basisopstelling.
