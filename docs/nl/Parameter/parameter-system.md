# Parametersysteem

## Systeem

### Activeer de piëzozoemer

Met deze parameter kan een piëzozoemer worden geactiveerd. Standaard is de zoemer verbonden met GPIO D8. Dit komt overeen met de indeling van bord 2.1. Zoemeralarmen ondersteunen het maischproces met signaaltonen.

### Activeer toast- en mp3-alarmen

Toasten zijn kleine push-berichten. Ze verschijnen als een tegel rechtsonder in de browser. Afgezien van foutmeldingen worden toasts na enkele seconden automatisch verborgen. Er zijn toastberichten over het maischproces, toastberichten van het systeem en tekstloze mp3-alarmen. De eigenschap Toasts heeft 3 opties: Uit, Aan en Fout. Met de optie "Uit" worden de alarmmeldingen uitgeschakeld. De optie "Aan" verzendt alle toastberichten en mp3-alarmen. De optie "Alleen fouten" verzendt alleen toastberichten in geval van systeemfouten, maar geen berichten over het maischproces.

Toasts ondersteunt audio-uitvoer. Dit betekent dat toasts tijdens het maischproces niet alleen visueel maar ook akoestisch worden weergegeven. De firmware bevat de audiobestanden info.mp3, success.mp3, waarschuwing.mp3 en error.mp3. De audiobestanden (mp3) kunnen worden uitgewisseld. Alleen de naam moet hetzelfde blijven. Autoplay Audio moet in de browser geactiveerd zijn voor het IP-adres van de bruidsmachine.

mp3-audio vereist een "gebruikersgebaar" op iOS-apparaten, zoals een klik- of aanraakgebeurtenis. Klik eenvoudig op een element op de website en mp3-audio wordt uitgevoerd. Zonder het gebruikersgebaar wordt de audio-uitvoer geblokkeerd door het iOS-systeem_.

Alle grote browsers zoals MS Edge, Chrome of Firefox hebben opties voor het automatisch afspelen van media in de instellingen onder websiterechten. Het wordt aanbevolen om de website van Brautomat toe te voegen aan de lijst Toestaan. In de volgende afbeelding is de webpagina van Brautomat toegevoegd met de mDNS-naam in de Microsoft Edge-browser. Als alternatief kan ook het IP-adres worden ingevoerd

![media](/docs/img/autoplay-media.jpg)

Met deze instelling kunnen mp3-alarmen een piëzo-zoemer vervangen.

### Aanraakscherm activeren

Met deze parameter kan een Nextion HMI 3,5 inch display worden bediend. De Brautomat biedt drie weergaven

#### Keteloverzicht

In deze weergave worden IDS en post-casting weergegeven met werkelijke en doeltemperaturen. De huidige en volgende rusttijd worden weergegeven met duur.
De lengte van de rode balk onder de IDS- en herschikkingsweergave toont de verstreken rusttijd.

![Weergave](/docs/img/kettlepage-sm.jpg)

#### MashBud

Deze weergave toont de eerste kookplaat. De huidige rusttijd wordt weergegeven met de werkelijke temperatuur, de doeltemperatuur en de huidige resterende tijd. De lengte van de rode balk onder de temperaturen toont de voortgang van de huidige rust. Het symbool rechts van de resterende tijd geeft aan of de volgende pauze automatisch begint (autonext): groen betekent automatisch, rood betekent pauze. Bovendien wordt de controller Deck weergegeven met de bijbehorende functies.

![Weergave](/docs/img/brewpage-sm.jpg)

#### Handmatige modus (alleen voor GGM IDS2)

Deze weergave wordt gebruikt om de inductiekookplaat handmatig te bedienen. In de handmatige modus zijn er 6 vermogensniveaus beschikbaar: 0, 20, 40, 60, 80 en 100% vermogen. De handmatige modus is alleen geschikt voor de GGM IDS2. (IDS1 niet getest!)

![Weergave](/docs/img/induction-mode-sm.jpg)

Een display is optioneel. De Brautomat ondersteunt alleen Nextion HMI 3,5 inch aanraakschermen (Basic- en Discovery-serie).

Het display wordt geconfigureerd via een SD-kaart. Het TFT-bestand uit de map Info dat overeenkomt met het display wordt naar de SD-kaart gekopieerd en in het display geplaatst. Zodra het display wordt ingeschakeld, begint de configuratie. Het proces duurt ongeveer een minuut. De voortgang wordt weergegeven op het display. Zodra de configuratie is voltooid, wordt het display uitgeschakeld en wordt de SD-kaart verwijderd. Het display is nu klaar voor gebruik.

Opgemerkt moet worden dat SDA, SCL moeten worden gebruikt op de pincodes D1, D2.

### PT100x-sensoren MAX31865 AmplActiveer hier

Als analoge PT100x-sensoren worden gebruikt, moet deze schakelaar worden geactiveerd. Een analoge PT100x-sensor vereist een RTD-naar-digitaal-omzetter om verbinding te maken met een ESP-microcontroller. Een MAX31865-versterker is een digitale RTD-omzetter in de vorm van een klein extra bord.

### mDNS inschakelen

Multicast DNS wordt gebruikt om hostnamen om te zetten in IP-adressen in kleine netwerken. mDNS maakt het mogelijk om een ​​"sprekende" naam te gebruiken voor de Brautomat. De standaardwaarde is de mDNS-naam “Brautomat”. De webinterface is te bereiken via het adres <http://Brautomat.local>. De hostnaam is beperkt tot maximaal 15 tekens.

Opmerking: De mDNS-naam wordt geconfigureerd zonder protocol (http://) en zonder topniveaudomein (.local) in de systeeminstellingen (Brautomat).

### Dashboard

Met Dashboard kun je eenvoudig elementen weergeven en verbergen. Als er bijvoorbeeld geen herschikking wordt gebruikt, moet het herschikkingselement voor de Dashboard worden gedeactiveerd. Uitgeschakelde items verminderen het verkeer.

### Loggen

Loggen is alleen geactiveerd in de ontwikkelingsversie. Op het tabblad Logging kan seriële loguitvoer voor alle modules worden geactiveerd. De niveaus Error, Info, Uitgebreid en Uit zijn beschikbaar voor loggen. Er is een seriële monitor vereist, b.v. met de Arduino IDE, VSCODE etc. De baudrate is 115200.

De foutmodus geeft alleen fouten weer.

De Info-modus bevat fouten en geeft ook informatie over de configuratie door aan de seriële monitor.

De uitgebreide modus bevat fouten en informatie en voert ook informatie uit over gegevensoverdracht (SSE-uitzendingen).

### NTP-tijdserver

Het Network Time Protocol (NTP) synchroniseert de tijd regelmatig met een tijdserver. De standaardtijdserver is europe.pool.ntp.org. Als er een tijdserver op het lokale netwerk aanwezig is, moet deze worden gebruikt. Als er een lokale tijdserver is geconfigureerd, heeft de Brautomat geen internettoegang nodig. Bijvoorbeeld fritz.box of het IP-adres van de standaardgateway.

### NTP-tijdzone

De tijdzone wordt bepaald aan de hand van een tabel. De tijdzone Europe Berlin is vooraf ingesteld:

<CET-1CEST,M3.5.0,M10.5.0/3>

De tijdzone wordt gebruikt om de juiste tijd te bepalen, inclusief zomer- en wintertijd.

#### Tijdzonetabel

|Afrika/Abidjan |GMT0 |
|-----------------------------|-------------------------------------------|
|Afrika/Accra |GMT0 |
|Afrika/Addis_Abeba |EAT-3 |
|Afrika/Algiers |CET-1 |
|Afrika/Asmara |EAT-3 |
|Afrika/Bamako |GMT0 |
|Afrika/Bangui |WAT-1 |
|Afrika/Banjul |GMT0 |
|Afrika/Bissau |GMT0 |
|Afrika/Blantyre |CAT-2 |
|Afrika/Brazzaville |WAT-1 |
|Afrika/Bujumbura |CAT-2 |
|Afrika/Caïro |EET-2EEST,M4.5.5/0,M10.5.4/24 |
|Afrika/Casablanca |<+01>-1 |
|Afrika/Ceuta |CET-1CEST,M3.5.0,M10.5.0/3 |
|Afrika/Conakry |GMT0 |
|Afrika/Dakar |GMT0 |
|Afrika/Dar_es_Salaam |EAT-3 |
|Afrika/Djibouti |EAT-3 |
|Afrika/Douala |WAT-1 ||Afrika/El_Aaiun |<+01>-1 |
|Afrika/Vrijstad |GMT0 |
|Afrika/Gaborone |CAT-2 |
|Afrika/Harare |CAT-2 |
|Afrika/Johannesburg |SAST-2 |
|Afrika/Juba |CAT-2 |
|Afrika/Kampala |EAT-3 |
|Afrika/Khartoem |CAT-2 |
|Afrika/Kigali |CAT-2 |
|Afrika/Kinshasa |WAT-1 |
|Afrika/Lagos |WAT-1 |
|Afrika/Libreville |WAT-1 |
|Afrika/Lome |GMT0 |
|Afrika/Luanda |WAT-1 |
|Afrika/Lubumbashi |CAT-2 |
|Afrika/Lusaka |CAT-2 |
|Afrika/Malabo |WAT-1 |
|Afrika/Maputo |CAT-2 |
|Afrika/Maseru |SAST-2 |
|Afrika/Mbabane |SAST-2 |
|Afrika/Mogadishu |EAT-3 |
|Afrika/Monrovia |GMT0 |
|Afrika/Nairobi |EAT-3 |
|Afrika/Ndjamena |WAT-1 |
|Afrika/Niamey |WAT-1 |
|Afrika/Nouakchott |GMT0 |
|Afrika/Ouagadougou |GMT0 |
|Afrika/Porto-Novo |WAT-1 |
|Afrika/Sao_Tomé |GMT0 |
|Afrika/Tripoli |EET-2 |
|Afrika/Tunis |CET-1 |
|Afrika/Windhoek |CAT-2 |
|Amerika/Adak |HST10HDT,M3.2.0,M11.1.0 |
|Amerika/Anchorage |AKST9AKDT,M3.2.0,M11.1.0 |
|Amerika/Anguilla |AST4 |
|Amerika/Antigua |AST4 |
|Amerika/Araguaina |<-03>3 |
|Amerika/Argentinië/Buenos_Aires|<-03>3 |
|Amerika/Argentinië/Catamarca |<-03>3 |
|Amerika/Argentinië/Cordoba |<-03>3 |
|Amerika/Argentinië/Jujuy |<-03>3 |
|Amerika/Argentinië/La_Rioja |<-03>3 |
|Amerika/Argentinië/Mendoza |<-03>3 |
|Amerika/Argentinië/Rio_Gallegos|<-03>3 |
|Amerika/Argentinië/Salta |<-03>3 |
|Amerika/Argentinië/San_Juan |<-03>3 |
|Amerika/Argentinië/San_Luis |<-03>3 |
|Amerika/Argentinië/Tucuman |<-03>3 |
|Amerika/Argentinië/Ushuaia |<-03>3 |
|Amerika/Aruba |AST4 |
|Amerika/Asuncion |<-04>4<-03>,M10.1.0/0,M3.4.0/0 |
|Amerika/Atikokan|EST5 |
|Amerika/Bahia |<-03>3 |
|Amerika/Bahia_Banderas |CST6 |
|Amerika/Barbados |AST4 |
|Amerika/Belem |<-03>3 |
|Amerika/Belize |CST6 |
|Amerika/Blanc-Sablon |AST4 |
|Amerika/Boa_Vista |<-04>4 |
|Amerika/Bogota |<-05>5 |
|Amerika/Boise |MST7MDT,M3.2.0,M11.1.0 |
|Amerika/Cambridge_Bay |MST7MDT,M3.2.0,M11.1.0 |
|Amerika/Campo_Grande |<-04>4 |
|Amerika/Cancun |EST5 |
|Amerika/Caracas |<-04>4 |
|Amerika/Cayenne |<-03>3 |
|Amerika/Kaaiman |EST5 |
|Amerika/Chicago |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Chihuahua |CST6 |
|Amerika/Costa_Rica |CST6 |
|Amerika/Creston |MST7 |
|Amerika/Cuiaba |<-04>4 |
|Amerika/Curaçao |AST4 |
|Amerika/Denemarken |GMT0 |
|Amerika/Dawson |MST7 |
|Amerika/Dawson_Creek |MST7 |
|Amerika/Denver |MST7MDT,M3.2.0,M11.1.0 |
|Amerika/Detroit |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Dominica |AST4 |
|Amerika/Edmonton |MST7MDT,M3.2.0,M11.1.0 |
|Amerika/Eirunepe |<-05>5 |
|Amerika/El_Salvador |CST6 |
|Amerika/Fortaleza |<-03>3 |
|Amerika/Fort_Nelson |MST7 |
|Amerika/Glace_Bay |AST4ADT,M3.2.0,M11.1.0 |
|Amerika/Godthab |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|Amerika/Goose_Bay |AST4ADT,M3.2.0,M11.1.0 |
|Amerika/Grand_Turk |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Grenada |AST4 |
|Amerika/Guadeloupe |AST4 |
|Amerika/Guatemala |CST6 |
|Amerika/Guayaquil |<-05>5 |
|Amerika/Guyana |<-04>4 |
|Amerika/Halifax |AST4ADT,M3.2.0,M11.1.0 |
|Amerika/Havana |CST5CDT,M3.2.0/0,M11.1.0/1 |
|Amerika/Hermosillo |MST7 |
|Amerika/Indiana/Indianapolis |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Indiana/Knox |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Indiana/Marengo |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Indiana/Petersburg |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Indiana/Tell_City |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Indiana/Vevay |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Indiana/Vincennes |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Indiana/Winamac |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Inuvik |MST7MDT,M3.2.0,M11.1.0 |
|Amerika/Iqaluit |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Jamaica |EST5 |
|Amerika/juneau |AKST9AKDT,M3.2.0,M11.1.0 |
|Amerika/Kentucky/Louisville |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Kentucky/Monticello |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Kralendijk |AST4 |
|Amerika/La_Paz |<-04>4 |
|Amerika/Lima |<-05>5 |
|Amerika/Los_Angeles |PST8PDT,M3.2.0,M11.1.0 |
|Amerika/Lower_Princes |AST4 |
|Amerika/Maceio |<-03>3 |
|Amerika/Managua |CST6 |
|Amerika/Manaus |<-04>4 |
|Amerika/Marigot |AST4 |
|Amerika/Martinique |AST4 |
|Amerika/Matamoros |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Mazatlan |MST7 |
|Amerika/Menominee |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Merida |CST6 |
|Amerika/Metlakatla |AKST9AKDT,M3.2.0,M11.1.0 |
|Amerika/Mexico_Stad |CST6 |
|Amerika/Miquelon |<-03>3<-02>,M3.2.0,M11.1.0 |
|Amerika/Moncton |AST4ADT,M3.2.0,M11.1.0 |
|Amerika/Monterrey |CST6 |
|Amerika/Montevideo |<-03>3 |
|Amerika/Montreal |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Montserrat |AST4 |
|Amerika/Nassau |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/New_York |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Nipigon |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Nome |AKST9AKDT,M3.2.0,M11.1.0 |
|Amerika/Noronha |<-02>2 |
|Amerika/Noord-Dakota/Beulah |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Noord-Dakota/Midden |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/North_Dakota/New_Salem|CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Nuuk |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|Amerika/Ojinaga |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Panama |EST5 |
|Amerika/Pangnirtung |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Paramaribo |<-03>3 |
|Amerika/Phoenix |MST7 |
|Amerika/Port-au-Prince |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Haven_van_Spanje |AST4 |
|Amerika/Porto_Velho |<-04>4 |
|Amerika/Puerto_Rico |AST4 |
|Amerika/Punta_Arenas |<-03>3 |
|Amerika/Rainy_River |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Rankin_Inlet |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Recife |<-03>3|
|Amerika/Regina |CST6 |
|Amerika/Resolute |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Rio_Branco |<-05>5 |
|Amerika/Santarem |<-03>3 |
|Amerika/Santiago |<-04>4<-03>,M9.1.6/24,M4.1.6/24 |
|Amerika/Santo_Domingo |AST4 |
|Amerika/Sao_Paulo |<-03>3 |
|Amerika/Scoresbysund |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|Amerika/Sitka |AKST9AKDT,M3.2.0,M11.1.0 |
|Amerika/St_Barthélemy |AST4 |
|Amerika/St_Johns |NST3:30NDT,M3.2.0,M11.1.0 |
|Amerika/St_Kitts |AST4 |
|Amerika/St_Lucia |AST4 |
|Amerika/St_Thomas |AST4 |
|Amerika/St_Vincent |AST4 |
|Amerika/Swift_Current |CST6 |
|Amerika/Tegucigalpa |CST6 |
|Amerika/Thule |AST4ADT,M3.2.0,M11.1.0 |
|Amerika/Thunder_Bay |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Tijuana |PST8PDT,M3.2.0,M11.1.0 |
|Amerika/Toronto |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Tortola |AST4 |
|Amerika/Vancouver |PST8PDT,M3.2.0,M11.1.0 |
|Amerika/Whitehorse |MST7 |
|Amerika/Winnipeg |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Yakutat |AKST9AKDT,M3.2.0,M11.1.0 |
|Amerika/Geelmes |MST7MDT,M3.2.0,M11.1.0 |
|Antarctica/Casey |<+08>-8 |
|Antarctica/Davis |<+07>-7 |
|Antarctica/DumontDUrville |<+10>-10 |
|Antarctica/Macquarie |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Antarctica/Mawson |<+05>-5 |
|Antarctica/McMurdo |NZST-12NZDT,M9.5.0,M4.1.0/3 |
|Antarctica/Palmer |<-03>3 |
|Antarctica/Rothera |<-03>3 |
|Antarctica/Syowa |<+03>-3 |
|Antarctica/Trol |<+00>0<+02>-2,M3.5.0/1,M10.5.0/3 |
|Antarctica/Vostok |<+05>-5 |
|Arctisch/Longyearbyen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Azië/Aden |<+03>-3 |
|Azië/Almaty |<+05>-5 |
|Azië/Amman |<+03>-3 |
|Azië/Anadyr |<+12>-12 |
|Azië/Aqtau |<+05>-5 |
|Azië/Aqtobe |<+05>-5 |
|Azië/Asjchabad |<+05>-5 |
|Azië/Atyrau |<+05>-5 |
|Azië/Bagdad |<+03>-3 |
|Azië/Bahrein |<+03>-3 |
|Azië/Bakoe |<+04>-4 |
|Azië/Bangkok |<+07>-7 |
|Azië/Schuuraul |<+07>-7 |
|Azië/Beiroet |EET-2EEST,M3.5.0/0,M10.5.0/0 |
|Azië/Bisjkek |<+06>-6 |
|Azië/Brunei |<+08>-8 |
|Azië/Chita |<+09>-9 |
|Azië/Choibalsan |<+08>-8 |
|Azië/Colombo |<+0530>-5:30 |
|Azië/Damascus |<+03>-3 |
|Azië/Dhaka |<+06>-6 |
|Azië/Dili |<+09>-9 |
|Azië/Dubai |<+04>-4 |
|Azië/Dushanbe |<+05>-5 |
|Azië/Famagusta |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Azië/Gaza |EET-2EEST,M3.4.4/50,M10.4.4/50 |
|Azië/Hebron |EET-2EEST,M3.4.4/50,M10.4.4/50 |
|Azië/Ho_Chi_Minh |<+07>-7 |
|Azië/Hongkong |HKT-8 |
|Azië/Hovd |<+07>-7 |
|Azië/Irkutsk |<+08>-8 |
|Azië/Jakarta |WIB-7 |
|Azië/Jayapura |WIT-9 |
|Azië/Jeruzalem |IST-2IDT,M3.4.4/26,M10.5.0 |
|Azië/Kaboel |<+0430>-4:30 |
|Azië/Kamtsjatka |<+12>-12 |
|Azië/Karachi |PKT-5 |
|Azië/Kathmandu |<+0545>-5:45 |
|Azië/Khandyga |<+09>-9 |
|Azië/Kolkata |IST-5:30 |
|Azië/Krasnojarsk |<+07>-7 |
|Azië/Kuala_Lumpur |<+08>-8 |
|Azië/Kuching |<+08>-8 |
|Azië/Koeweit |<+03>-3 |
|Azië/Macau |CST-8 |
|Azië/Magadan |<+11>-11 |
|Azië/Makassar |WITA-8 |
|Azië/Manilla |PST-8 |
|Azië/Muscat |<+04>-4 |
|Azië/Nicosia |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Azië/Novokoeznetsk |<+07>-7 |
|Azië/Novosibirsk |<+07>-7 |
|Azië/Omsk |<+06>-6 |
|Azië/Oraal |<+05>-5 |
|Azië/Phnom_Penh |<+07>-7 |
|Azië/Pontianak |WIB-7 |
|Azië/Pyongyang |KST-9 |
|Azië/Qatar |<+03>-3 |
|Azië/Qyzylorda |<+05>-5 |
|Azië/Riyad |<+03>-3 |
|Azië/Sachalin |<+11>-11 |
|Azië/Samarkand |<+05>-5 |
|Azië/Seoel |KST-9 |
|Azië/Shanghai |CST-8 |
|Azië/Singapore |<+08>-8 |
|Azië/Srednekolymsk |<+11>-11 |
|Azië/Taipei |CST-8 |
|Azië/Tasjkent |<+05>-5 |
|Azië/Tbilisi |<+04>-4 |
|Azië/Teheran |<+0330>-3:30 |
|Azië/Thimphu |<+06>-6 |
|Azië/Tokio |JST-9 |
|Azië/Tomsk |<+07>-7 |
|Azië/Ulaanbaatar |<+08>-8 |
|Azië/Urumqi |<+06>-6 |
|Azië/Ust-Nera |<+10>-10 |
|Azië/Vientiane |<+07>-7 |
|Azië/Vladivostok |<+10>-10 |
|Azië/Jakoetsk |<+09>-9 |
|Azië/Yangon |<+0630>-6:30 |
|Azië/Jekaterinenburg |<+05>-5 |
|Azië/Jerevan |<+04>-4 |
|Atlantische Oceaan/Azoren |<-01>1<+00>,M3.5.0/0,M10.5.0/1 |
|Atlantische Oceaan/Bermuda |AST4ADT,M3.2.0,M11.1.0 |
|Atlantische Oceaan/Canarische |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantische Oceaan/Kaapverdië |<-01>1 |
|Atlantische Oceaan/Faeröer |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantische Oceaan/Madeira |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantische Oceaan/Reykjavik |GMT0 |
|Atlantische Oceaan/Zuid-Georgië |<-02>2 |
|Atlantische Oceaan/Stanley |<-03>3 |
|Atlantische Oceaan/Sint-Helena |GMT0 |
|Australië/Adelaide |ACST-9:30ACDT,M10.1.0,M4.1.0/3 |
|Australië/Brisbane |AEST-10 |
|Australië/Broken_Hill |ACST-9:30ACDT,M10.1.0,M4.1.0/3 |
|Australië/Currie |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Australië/Darwin |ACST-9:30 |
|Australië/Eucla |<+0845>-8:45 |
|Australië/Hobart |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Australië/Lindeman |AEST-10 |
|Australië/Lord_Howe |<+1030>-10:30<+11>-11,M10.1.0,M4.1.0 |
|Australië/Melbourne |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Australië/Perth |AWST-8 |
|Australië/Sydney |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Europa/Amsterdam |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Andorra |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Astrachan |<+04>-4 |
|Europa/Athene |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Belgrado |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Berlijn |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Bratislava |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Brussel |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Boekarest |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Boedapest |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Busingen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Chisinau |EET-2EEST,M3.5.0,M10.5.0/3 |
|Europa/Kopenhagen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Dublin |IST-1GMT0,M10.5.0,M3.5.0/1 |
|Europa/Gibraltar |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Guernsey |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Helsinki |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Isle_of_Man |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Istanboel |<+03>-3 |
|Europa/Jersey |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Kaliningrad |EET-2 |
|Europa/Kiev |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Kirov |MSK-3 |
|Europa/Lissabon |WET0WEST,M3.5.0/1,M10.5.0 |
|Europa/Ljubljana |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Londen |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Luxemburg |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Madrid |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Malta |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Mariehamn |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Minsk |<+03>-3 |
|Europa/Monaco |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Moskou |MSK-3 |
|Europa/Oslo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Parijs |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Podgorica |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Praag |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Riga |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Rome |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Samara |<+04>-4 |
|Europa/San_Marino |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Sarajevo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Saratov |<+04>-4 |
|Europa/Simferopol |MSK-3 |
|Europa/Skopje |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Sofia |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Stockholm |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Tallinn |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Tirane |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Oeljanovsk |<+04>-4 |
|Europa/Oezjhorod |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Vaduz |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Vaticaan |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Wenen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Vilnius |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Volgograd |MSK-3 |
|Europa/Warschau |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Zagreb |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Zaporozhye |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Zürich |CET-1CEST,M3.5.0,M10.5.0/3 |
|Indiaas/Antananarivo |EAT-3 |
|Indisch/Chagos |<+06>-6|
|Indiaas/Kerstmis |<+07>-7 |
|Indiaas/Cocos |<+0630>-6:30 |
|Indiaas/Comoro |EAT-3 |
|Indiaas/Kerguelen |<+05>-5 |
|Indiaas/Mahe |<+04>-4 |
|Indiaas/Maldiven |<+05>-5 |
|Indiaas/Mauritius |<+04>-4 |
|Indiaas/Mayotte |EAT-3 |
|Indiaas/Reünie |<+04>-4 |
|Pacific/Apia |<+13>-13 |
|Pacific/Auckland |NZST-12NZDT,M9.5.0,M4.1.0/3 |
|Pacific/Bougainville |<+11>-11 |
|Pacific/Chatham |<+1245>-12:45<+1345>,M9.5.0/2:45,M4.1.0/3:45|
|Pacific/Chuuk |<+10>-10 |
|Pacific/Pasen |<-06>6<-05>,M9.1.6/22,M4.1.6/22 |
|Pacific/Efate |<+11>-11 |
|Pacific/Enderbury |<+13>-13 |
|Pacific/Fakaofo |<+13>-13 |
|Pacific/Fiji |<+12>-12 |
|Pacific/Funafuti |<+12>-12 |
|Pacific/Galapagos |<-06>6 |
|Pacific/Gambier |<-09>9 |
|Pacific/Guadalcanal |<+11>-11 |
|Pacific/Guam |ChST-10 |
|Pacific/Honolulu |HST10 |
|Pacific/Kiritimati |<+14>-14 |
|Pacific/Kosrae |<+11>-11 |
|Pacific/Kwajalein |<+12>-12 |
|Pacific/Majuro |<+12>-12 |
|Pacific/Marquesas |<-0930>9:30 |
|Pacific/Midway |SST11 |
|Pacific/Nauru |<+12>-12 |
|Pacific/Niue |<-11>11 |
|Pacific/Norfolk |<+11>-11<+12>,M10.1.0,M4.1.0/3 |
|Pacific/Noumea |<+11>-11 |
|Pacific/Pago_Pago |SST11 |
|Pacific/Palau |<+09>-9 |
|Pacific/Pitcairn |<-08>8 |
|Pacific/Pohnpei |<+11>-11 |
|Pacific/Port_Moresby |<+10>-10 |
|Pacific/Rarotonga |<-10>10 |
|Pacific/Saipan |ChST-10 |
|Pacific/Tahiti |<-10>10 |
|Pacific/Tarawa |<+12>-12 |
|Pacific/Tongatapu |<+13>-13 |
|Pacific/Wake |<+12>-12 |
|Pacific/Wallis |<+12>-12 |
|Enz./GMT |GMT0 |
|Enz/GMT-0 |GMT0 |
|Enz/GMT-1 |<+01>-1 |
|Enz/GMT-2 |<+02>-2 |
|Enz./GMT-3|<+03>-3 |
|Enz/GMT-4 |<+04>-4 |
|Enz/GMT-5 |<+05>-5 |
|Enz/GMT-6 |<+06>-6 |
|Enz/GMT-7 |<+07>-7 |
|Enz/GMT-8 |<+08>-8 |
|Enz/GMT-9 |<+09>-9 |
|Enz/GMT-10 |<+10>-10 |
|Enz/GMT-11 |<+11>-11 |
|Enz/GMT-12 |<+12>-12 |
|Enz/GMT-13 |<+13>-13 |
|Enz/GMT-14 |<+14>-14 |
|Enz/GMT0 |GMT0 |
|Enz/GMT+0 |GMT0 |
|Enz/GMT+1 |<-01>1 |
|Enz/GMT+2 |<-02>2 |
|Enz/GMT+3 |<-03>3 |
|Enz/GMT+4 |<-04>4 |
|Enz/GMT+5 |<-05>5 |
|Enz/GMT+6 |<-06>6 |
|Enz/GMT+7 |<-07>7 |
|Enz/GMT+8 |<-08>8 |
|Enz/GMT+9 |<-09>9 |
|Enz/GMT+10 |<-10>10 |
|Enz/GMT+11 |<-11>11 |
|Enz/GMT+12 |<-12>12 |
|Enz/UCT |UTC0 |
|Enz/UTC |UTC0 |
|Enz./Greenwich |GMT0 |
|Enz/Universeel |UTC0 |
|Enz/Zoeloe |UTC0 |
