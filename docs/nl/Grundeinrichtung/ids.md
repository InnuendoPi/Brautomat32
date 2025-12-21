# Installeer de kookplaat

## De puree-brouwketel maken

In het eerste deel _Maischeplan_ wordt de MashSud-ketel gemaakt met behulp van het tandwiel rechtsboven.

![Maak puree-brouwketel](/docs/img/IDS-einrichten.jpg)

## Een kookplaat configureren

Eerst moet een kookplaat worden geconfigureerd. In deze basisopstelling wordt een GGM IDS inductiekookplaat opgesteld.

De eerste instelling betreft het IDS-type, waarbij IDS1 of IDS2 kan worden geselecteerd. Dit wordt gevolgd door drie controleparameters:

* PIN wit [relais] - Standaard: D7
* PIN geel [Opdracht] - Standaard: D6
* PIN blauw [Onderbreken] - Standaard: - (ongebruikt) of D5

Deze GPIO's (D5, D6 en D7) zijn voorgeconfigureerd voor de GGM IDS-aansluitkabel met JST-HX-bus of het schroefklemmenblok.

Vervolgens moet er een temperatuursensor aan de MashBud-waterkoker worden toegewezen. De selectie wordt gemaakt uit een lijst met sensoren die al zijn ingesteld. In deze basisconfiguratie is alleen de sensor _Sensor IDS2_ aanwezig, die overeenkomstig is geselecteerd.

_Opmerking_: _Een temperatuursensor moet permanent aan een kookplaat worden toegewezen. De sensorwaarde wordt de werkelijke temperatuur of huidige temperatuur genoemd en wordt tijdens het maischproces continu vergeleken met de resttemperatuur (doeltemperatuur)._

![Configureer de maischbrouwketel](/docs/img/IDS-konfigurieren.jpg)

De parameters op het tabblad "Temperatuurregeling" worden in het hoofdstuk "Alle parameters" gedetailleerd toegelicht. Voor de basisconfiguratie worden in eerste instantie de standaardwaarden overgenomen.

![Configureer de maischbrouwketel](/docs/img/IDS-temperaturen.jpg)

## De PID-controller instellen

Na de basisconfiguratie moet de PID-controller worden ingesteld op het tabblad PID Manager. De PID-controller berekent automatisch het vermogen dat nodig is voor de kookplaat om de maischtemperatuur (werkelijke temperatuur) op de rusttemperatuur te brengen. Een nauwkeurige PID-configuratie zorgt ervoor dat de rusttemperatuur gedurende de gehele rustperiode constant blijft.

De PID-controller is ingesteld met twee parameters:

* Ku (ultieme winst) – winstfactor
* Pu (ultieme periode) – periodelengte

Uit deze twee waarden worden de PID-parameters P, I en D berekend. Deze parameters zijn individueel voor elk zetsysteem en worden bepaald met behulp van het AutoTune-proces. Het AutoTune-proces wordt gedetailleerd beschreven in de sectie "AutoTune stap voor stap".

Voor deze basisopstelling worden de volgende waarden voor Ku en Pu ingevoerd. Vervolgens wordt de PID afstemmingsregel _IDS PID Mode_ geselecteerd:

![IDS](/docs/img/IDS-AutoTune-erg.jpg)

Zodra de waarden voor Ku en Pu zijn ingevoerd, bepaalt het geselecteerde PID-algoritme automatisch de drie waarden P, I en D. Een gedetailleerde uitleg van alle parameters volgt later.

## Startwaarden voor verschillende ketelgroottes

Voor een waterkoker van 36 liter met een maischvolume van ongeveer 20 liter:

```tekst
Versterkingsfactor Ku (uiteindelijke winst): 182
Periodeduur Pu (ultieme periode): 2245
```

Voor een ketel van 70 liter met een maischvolume van meer dan 50 liter:

```tekst
Versterkingsfactor Ku (uiteindelijke winst): 225
Periodelengte Pu (ultieme periode): 1500
```

## Voltooiing van de basisconfiguratie

Na het opslaan van de instellingen is de basisconfiguratie voltooid. Je kunt nu brouwen met een temperatuursensor en een maischbrouwketel.

_Let op: Voor het daadwerkelijke brouwproces is ook een maischplan nodig._
