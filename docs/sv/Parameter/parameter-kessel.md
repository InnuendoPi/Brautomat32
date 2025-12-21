# Hällparametrar

## Temperaturkontroll

### Max effekt

Denna parameter beskriver hällens maximala uteffekt. Standardvärdet är 100 %. Denna parameter används om en liten vattenkokare med till exempel 20l volym används på hällen. Genom att minska effekten kan man undvika för snabb uppvärmning och överkokning. Parametrarna "Max. effekt" och "Power from transition" bör reduceras samtidigt vid användning av små bryggkokare.

I slutet av detta kapitel hittar du [två exempel för att beräkna den erforderliga effekten](https://innuendopi.gitbook.io/brautomat32/info-5/parameter-ggm-ids#berechnung-der-erforderlichen-leistung).

### Temperatur delta till mål

Denna parameter beskriver skillnaden från vilotemperaturen (börvärdet) vid vilken timern ska starta för en vila. Standardvärdet är 0,3°C. I mäskningen möjliggör regulatorn PID mycket exakt temperaturkontroll. En vilotemperatur uppnås med en noggrannhet på +-0,2°C genom att PID-regulatorn minskar energitillförseln på ett kontrollerat sätt innan vilotemperaturen uppnås. Att minska energitillförseln har den bieffekten att det sista steget för att nå vilotemperaturen tar längre tid. Det är precis där "Delta to target"-parametern spelar in: Om till exempel en vilotemperatur på 63°C ska uppnås och den aktuella temperaturen är 62,7°C, skulle vilotimern starta vid ett temperaturdelta till målet på 0,3°C. I förhållande till det individuella bryggsystemet kan delta användas för att undvika en oönskad förlängning av vilotiden.

### Övergång till matlagning [°C]

Denna parameter beskriver den temperatur vid vilken PID-regulatorn ska detektera att vörten kokar. Standardvärdet är 95°C. Denna parameter beskriver inte temperaturen vid vilken vörten börjar koka. Denna parameter beskriver temperaturen vid vilken Brautomat inaktiverar PID-regulatorn och styr hällen med en specificerad effekt "power from transition". I motsats till vilotemperaturerna är syftet med tillagningen inte att exakt nå och bibehålla temperaturen, utan snarare att laga smidigt. Så istället för att minska effekten drivs induktionshällen med konstant effekt vid matlagning.

### Power from transition [%]

Denna parameter beskriver uteffekten för hällen från temperaturövergången till matlagning. Standardvärdet är 100 %. Parametern "Övergång till matlagning" har använts för att ställa in en temperatur vid vilken kontrollenheten PID är avaktiverad. Parametern "Power from transition" anger nu den fasta uteffekten för hällen. Om en bryggkokare med en volym på 35l eller mer används är standardvärdet på 100 % ett lämpligt val. I bryggerikök med små vattenkokare kan 100 % energitillförsel orsaka överkokning. I detta fall kan den maximala energitillförseln reduceras till till exempel 75 % med denna parameter.

### Inaktivera PID för matlagning [på/av]

Den här parametern bestämmer beteendet för PID-kontrollen vid tillagning när den faktiska temperaturen är över måltemperaturen. Exempel: tillagningstemperaturen var inställd på 98°C i mäskplanen. Parametern "Power from transition" stänger av PID-beräkningen från "Transition to boiling"-temperaturen. Om parametern "Avaktivera PID för kokning" är aktiverad (standard), förblir PID-regulatorn avstängd även över måltemperaturen på 98°C från mäskplanen och strömmen från parametern "Power from transition" används. Denna parameter är aktiverad som standard och möjliggör rullande tillagning.

Om parametern "Avaktivera PID för matlagning" inte är aktiverad, beräknas den erforderliga effekten av PID-kontrollen när måltemperaturen (här 98°C) har uppnåtts. Den beräknade effekten över måltemperaturen är 0 %. Hällen stängs av och förhindrar överkokning vid behov.

### Prestandavid sensorfel [0-100 %]

Om ett sensorfel uppstår, till exempel att en sensor inte är ansluten eller en defekt, kan hällens effekt justeras för att hantera detta fel. Ett värde på 100 % ignorerar sensorfelet.

Om effekten är inställd på 0 % i händelse av ett sensorfel, pausar Brautomat mäskningen. Hällen är avstängd. När vilotimern har startat stoppas timern.

Brautomat startar felhantering efter 3 på varandra följande felaktiga sensorvärden. Sensorerna frågas ungefär var 2000:e ms. Detta innebär att ca. Det går 6 sekunder mellan sensorfelet för toastmeddelandet och början av felhanteringen.

Om en felaktig sensor rapporterar korrekta sensorvärden igen, fortsätter Brautomat automatiskt mäskningen.

_Obs: Max. effektparametern överskrids inte av parametern Power on sensor error. Till exempel, om Max. Power IDS konfigurerades till 75 % och Power vid sensorfel till 100 %, då är den effektiva maximala uteffekten 75 % även i händelse av ett sensorfel._

## PID Manager

### Intervall (SampleTime)

Denna parameter indikerar det tidsintervall vid vilket den erforderliga effekten beräknas. Standardvärdet är 3000ms. Intervallet används för PID-beräkningen och i AutoTune. I bryggerikök med små volymer kan ett mindre intervall vara fördelaktigt. Ju mindre intervall, desto oftare beräknas den erforderliga effekten. Detta leder till ett högre utnyttjande av den automatiska broilern. Värdeintervall 1000 - 7000ms.

### PID Algoritm

Det finns tre alternativ att välja mellan

* manuellt läge PID: detta val tillåter användning av dina egna Kp-, Ki- och Kd-värden
* IDS PID läge: detta val beräknar värdena för Kp, Ki och Kd för GGM IDS induktionshällar baserat på Ku- och Pu-värdena från AutoTune-processen
* Reläläge PID: detta val beräknar värdena för Kp, Ki och Kd för reläbaserade hällar med hjälp av Ku- och Pu-värdena från AutoTune-processen

## AutoTune

### AutoTune brusband

Denna parameter används för att detektera extrema värden (Max, Min). AutoTune brusband indikerar den minsta förändring från det tidigare uppmätta värdet som måste finnas för att känna igen ett nytt extremvärde. Standardvärdet för GGM IDS är 0,2. För en omgjuten spis via ett relä eller SSR är standardvärdet 0,5. Värdeintervall: 0,1 - 1,0

### AutoTune Dataserie (återblick)

Denna parameter anger hur många uppmätta värden som ska beaktas för att bestämma extrema värden. Standardvärdet är 50 avläsningar. Observera att maximalt 100 mätvärden kan konfigureras. För mycket väl värmeisolerade brygggrytor kan en ökning av dataserien till 100 uppmätta värden förbättra detekteringen av extrema värden i kylfasen av AutoTune-processen.

### AutoTune felsöka

Denna switch aktiverar AutoTune-protokollet. Loggen ger information om AutoTune-processen inte kan slutföras framgångsrikt. Om AutoTune felsökning är aktiverad är protokollet även tillgängligt vid bryggning.

_Dessa 10 parametrar måste ställas in individuellt för varje bryggsystem. Parametrarna kan ändras under en mäskningsprocess. Med en testkörning med en typisk mängd vatten kan parametrarna enkelt bestämmas innan en bryggdag._

## Profiler

Brautomat kan hantera hårdvaruprofiler. Profiler kan användas om det finns olika pannor. Användare med vattenkokare av olika storlekar kan använda profiler för att välja vattenkokare för bryggdagen istället för att manuellt behöva ange alla parametrar. En hårdvaruprofil innehåller alla inställningar för en panna.

Profiler sparas i mappen /Profiles. Profiler möjliggör snabb och enkel växling mellan olika pannor. Spara-funktionen skapar en profilfil med dsv ovanstående parametrar, medan Delete-funktionen tar bort profilfilen från flashminnet.

Standardprofilen vid start av bakmaskinen är alltid den senast valda profilen.

## Beräkning av erforderlig effekt

_Följande stycke beskriver ett valfritt ämne._

Vid mäskning önskas en ökning av mäsktemperaturen med 1°C per minut. Den erforderliga effekten P för GGM IDS kan beräknas enligt följande:

erforderlig effekt P = m[kg] * 75\
befintliga prestanda för GGM IDS P = 3500\
Faktor i procent = prestanda som krävs: befintlig prestation

### Exempel 1

I det första exemplet finns en fyllning på 9 kg och en huvudhäll på 35 l. Detta resulterar i en total massa på

``` json
m = 9 + 35 = 44
```

Vi ersätter massan m = 44 i den förenklade formeln:

``` json
P = 44 * 75 = 3300
```

Cirka 3300 W/min krävs för att värma en volym på 44 kg med 1°C per minut. Om GGM IDS drivs med 100 % effekt, dvs 3500W, uppnås temperaturskillnaden på 1°C i mäsken på mindre än 60 sekunder. För att uppnå målet om 1°C temperaturökning i mäsken per minut måste den maximala prestandan för GGM IDS reduceras:

``` json
3300: 3500 = 0,94 vilket motsvarar 94%
```

GGM IDS skulle behöva drivas med ca. 94-95% effekt (specialfunktion IDS:94).

### Exempel 2

I det andra exemplet finns en fyllning på 5,9 kg och en huvudhäll på 26,5 l. Den totala vikten är 32,4 kg.

``` json
m = 5,9 + 26,5 = 32,4
```

Vi ersätter massan m = 32,4 i den förenklade formeln:

``` json
P = 32,4 * 75 = 2430
2430: 3500 = 0,69
```

Det tar ungefär 2430 W/min att värma en volym på 32,4 kg med 1°C per minut. GGM IDS skulle behöva drivas med ca. 69-70% effekt (specialfunktion IDS:70).

### Förenklingsmassa * 75?

``` json
P = m[kg] * c * T / (t * w)
```

m motsvarar massan av huvudgjutstycket + fyllning\
c motsvarar mäskens specifika värmekapacitet. Värdet 3600 används (enhet Joule/(kg * °C))\
T motsvarar temperaturskillnaden. Vi använder 1°C skillnad\
t motsvarar tiden. Vi lägger in 60 sekunder i ekvationen som tiden\
w induktionseffektiviteten (80-90%). Värdet 0,8 infogas i ekvationen

``` json
c * T / (t * w) = 3600 * 1 / (60 * 0,8) = 75
```

Med denna förenkling får vi värdet 75.

### specifik värmekapacitet

Den specifika som används här Värmekapacitet 3600 har en feltolerans på cirka 2% (beroende på temperatur och extrakt). Maltmjöl har en värmekapacitet på 1570 J/(kg*°C), vatten har en värmekapacitet på 4190 J/(kg*°C) i temperaturområdet 50-80°C. Om man antar att vattenhalten i maltmjölet är 6 %: (Siffror från exempel 1)

``` json
9 * 94% * 1570 + (35 + 9 * 6%) * 4190 = 8,97 * 1,57 + 35,54 * 4,19 = 14,08 + 148,91 = 13282,2 + 148912,6 = 8 /6246 grader per 5 kg per 5 kg. Celsius
```

Se även [Brewing Magazine](https://braumagazin.de/article/berechnungen-in-der-brauerei/)
