# Parametersystem

## System

### Aktiver piezo-summer

En piezo-summer kan aktiveres med denne parameteren. Som standard er summeren koblet til GPIO D8. Dette tilsvarer utformingen av tavle 2.1. Sommeralarmer støtter meskeprosessen med signaltoner.

### Aktiver toasts og mp3-alarmer

Toasts er små push-meldinger. De vises som en flis nederst til høyre i nettleseren. Bortsett fra feilmeldinger, skjules toasts automatisk etter noen sekunder. Det er toast-meldinger om meskeprosessen, toast-meldinger fra systemet og tekstløse mp3-alarmer. Toasts-egenskapen har 3 alternativer: Av, På og Feil. Alternativet "Av" slår av alarmmeldingene. "På"-alternativet sender alle toast-meldinger og mp3-alarmer. Alternativet "bare feil" sender bare toast-meldinger i tilfelle systemfeil, men ikke meldinger om meskeprosessen.

Toasts støtter lydutgang. Dette betyr at toasts vises ikke bare visuelt, men også akustisk under meskeprosessen. Fastvaren inneholder lydfilene info.mp3, success.mp3, warning.mp3 og error.mp3. Lydfilene (mp3) kan utveksles. Bare navnet må forbli det samme. Autoplay Audio må aktiveres i nettleseren for IP-adressen til brudemaskinen.

mp3-lyd krever en "brukerbevegelse" på iOS-enheter, for eksempel et klikk eller berøringshendelse. Bare klikk på et element på nettsiden og mp3-lyd sendes ut. Uten brukerbevegelsen blokkeres lydutgangen av iOS-systemet_.

Alle større nettlesere som MS Edge, Chrome eller Firefox har muligheter for automatisk medieavspilling i innstillingene under nettsidetillatelser. Det anbefales å legge til nettstedet fra Brautomat til Tillat-listen. I det følgende bildet er nettsiden fra Brautomat lagt til med mDNS-navnet i Microsoft Edge-nettleseren. Alternativt kan også IP-adressen legges inn

![media](/docs/img/autoplay-media.jpg)

Med denne innstillingen kan mp3-alarmer erstatte en piezo-summer.

### Aktiver berøringsskjerm

En Nextion HMI 3,5 tommers skjerm kan betjenes med denne parameteren. Brautomat tilbyr tre visninger

#### Kjeloversikt

I denne visningen vises IDS og post-casting med faktiske temperaturer og måltemperaturer. Gjeldende og neste hvile vises med varighet.
Lengden på den røde linjen under IDS og omarbeidet visning viser medgått hviletid.

![Display](/docs/img/kettlepage-sm.jpg)

#### MashBud

Denne visningen viser den første koketoppen. Gjeldende hviletid vises med faktiske temperaturer og måltemperaturer samt gjeldende gjenværende tid. Lengden på den røde linjen under temperaturene viser fremdriften til den gjeldende hvilen. Symbolet til høyre for gjenværende tid viser om neste pause starter automatisk (autonext): grønt betyr automatisk, rødt betyr pause. I tillegg vises controller Deck med tilhørende funksjoner.

![Display](/docs/img/brewpage-sm.jpg)

#### Manuell modus (kun for GGM IDS2)

Denne visningen brukes til å manuelt styre induksjonstoppen. I manuell modus er 6 effektnivåer tilgjengelige: 0, 20, 40, 60, 80 og 100 % effekt. Manuell modus er kun egnet for GGM IDS2. (IDS1 ikke testet!)

![Display](/docs/img/induction-mode-sm.jpg)

En skjerm er valgfri. Brautomat støtter bare Nextion HMI 3,5-tommers berøringsskjermer (Basic- og Discovery-serien).

Skjermen konfigureres via et SD-kort. TFT-filen fra Info-mappen som samsvarer med skjermen, kopieres til SD-kortet og settes inn i skjermen. Så snart displayet er slått på, starter konfigurasjonen. Prosessen tar omtrent ett minutt. Fremdriften vises på displayet. Når konfigurasjonen er fullført, vil skjermen slå seg av og SD-kortet fjernes. Skjermen er nå klar til bruk.

Det skal bemerkes at SDA, SCL må opereres på PIN-kodene D1, D2.

### PT100x-sensorer MAX31865 AmplAktiver her

Hvis analoge PT100x-sensorer brukes, må denne bryteren aktiveres. En PT100x analog sensor krever en RTD til digital omformer for å koble til en ESP mikrokontroller. En MAX31865 forsterker er en RTD digital omformer i form av et lite tilleggskort.

### Aktiver mDNS

Multicast DNS brukes til å løse vertsnavn til IP-adresser i små nettverk. mDNS gjør det mulig å bruke et "talende" navn for Brautomat. Standard er mDNS-navnet "Brautomat". Nettgrensesnittet kan nås via adressen <http://Brautomat.local>. Vertsnavnet er begrenset til maksimalt 15 tegn.

Merk: mDNS-navnet er konfigurert uten en protokoll (http://) og uten et toppnivådomene (.local) i systeminnstillingene (Brautomat).

### Dashboard

Ved å bruke Dashboard kan du enkelt vise og skjule elementer. For eksempel, hvis ingen omstøpning brukes, bør omstøpningselementet for Dashboard deaktiveres. Deaktiverte elementer reduserer trafikken.

### Logging

Logging er kun aktivert i utviklingsversjonen. På Logging-fanen kan seriell loggutgang aktiveres for alle moduler. Nivåene Error, Info, Verbose og Off er tilgjengelige for logging. Det kreves en seriell monitor, f.eks. med Arduino IDE, VSCODE etc. Baudhastigheten er 115200.

Feilmodus gir bare ut feil.

Info-modusen inneholder feil og gir også ut informasjon om konfigurasjonen i den serielle monitoren.

Utførlig modus inkluderer feil og info og gir også ut informasjon om dataoverføring (SSE-sendinger).

### NTP-tidsserver

Network Time Protocol (NTP) synkroniserer regelmessig tiden med en tidsserver. Standard tidsserver er europe.pool.ntp.org. Hvis det er en tidsserver på det lokale nettverket, bør denne brukes. Hvis en lokal tidsserver er konfigurert, krever ikke Brautomat Internett-tilgang. For eksempel fritz.box eller IP-adressen til standard gateway.

### NTP-tidssone

Tidssonen bestemmes fra en tabell. Tidssonen Europe Berlin er forhåndsinnstilt:

<CET-1CEST,M3.5.0,M10.5.0/3>

Tidssonen brukes til å bestemme riktig tid inkludert sommer- og vintertid.

#### Tidssonetabell

|Afrika/Abidjan |GMT0 |
|--------------------------------|------------------------------------------------|
|Afrika/Accra |GMT0 |
|Afrika/Addis_Ababa |EAT-3 |
|Afrika/Algier |CET-1 |
|Afrika/Asmara |EAT-3 |
|Afrika/Bamako |GMT0 |
|Afrika/Bangui |WAT-1 |
|Afrika/Banjul |GMT0 |
|Afrika/Bissau |GMT0 |
|Afrika/Blantyre |CAT-2 |
|Afrika/Brazzaville |WAT-1 |
|Afrika/Bujumbura |CAT-2 |
|Afrika/Kairo |EET-2EEST,M4.5.5/0,M10.5.4/24 |
|Afrika/Casablanca |<+01>-1 |
|Afrika/Ceuta |CET-1CEST,M3.5.0,M10.5.0/3 |
|Afrika/Conakry |GMT0 |
|Afrika/Dakar |GMT0 |
|Afrika/Dar_es_Salaam |EAT-3 |
|Afrika/Djibouti |EAT-3 |
|Afrika/Douala |WAT-1 ||Afrika/El_Aaiun |<+01>-1 |
|Afrika/Freetown |GMT0 |
|Afrika/Gaborone |CAT-2 |
|Afrika/Harare |CAT-2 |
|Afrika/Johannesburg |SAST-2 |
|Afrika/Juba |CAT-2 |
|Afrika/Kampala |EAT-3 |
|Afrika/Khartoum |CAT-2 |
|Afrika/Kigali |CAT-2 |
|Afrika/Kinshasa |WAT-1 |
|Afrika/Lagos |WAT-1 |
|Afrika/Libreville |WAT-1 |
|Afrika/Lomé |GMT0 |
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
|Afrika/Sao_Tome |GMT0 |
|Afrika/Tripoli |EET-2 |
|Afrika/Tunis |CET-1 |
|Afrika/Windhoek |CAT-2 |
|Amerika/Adak |HST10HDT,M3.2.0,M11.1.0 |
|Amerika/Anchorage |AKST9AKDT,M3.2.0,M11.1.0 |
|Amerika/Anguilla |AST4 |
|Amerika/Antigua |AST4 |
|Amerika/Araguaina |<-03>3 |
|Amerika/Argentina/Buenos_Aires|<-03>3 |
|Amerika/Argentina/Catamarca |<-03>3 |
|Amerika/Argentina/Cordoba |<-03>3 |
|Amerika/Argentina/Jujuy |<-03>3 |
|Amerika/Argentina/La_Rioja |<-03>3 |
|Amerika/Argentina/Mendoza |<-03>3 |
|Amerika/Argentina/Rio_Gallegos|<-03>3 |
|Amerika/Argentina/Salta |<-03>3 |
|Amerika/Argentina/San_Juan |<-03>3 |
|Amerika/Argentina/San_Luis |<-03>3 |
|Amerika/Argentina/Tucuman |<-03>3 |
|Amerika/Argentina/Ushuaia |<-03>3 |
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
|Amerika/Cayman |EST5 |
|Amerika/Chicago |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Chihuahua |CST6 |
|Amerika/Costa_Rica |CST6 |
|Amerika/Creston |MST7 |
|Amerika/Cuiaba |<-04>4 |
|Amerika/Curaçao |AST4 |
|Amerika/Danmarkshavn |GMT0 |
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
|America/Glace_Bay |AST4ADT,M3.2.0,M11.1.0 |
|Amerika/Godthab |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|America/Goose_Bay |AST4ADT,M3.2.0,M11.1.0 |
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
|America/Lower_Princes |AST4 |
|Amerika/Maceio |<-03>3 |
|Amerika/Managua |CST6 |
|Amerika/Manaus |<-04>4 |
|Amerika/Marigot |AST4 |
|Amerika/Martinique |AST4 |
|Amerika/Matamoros |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Mazatlan |MST7 |
|Amerika/Menominert |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Merida |CST6 |
|Amerika/Metlakatla |AKST9AKDT,M3.2.0,M11.1.0 |
|America/Mexico_City |CST6 |
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
|Amerika/North_Dakota/Beulah |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/North_Dakota/Center |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/North_Dakota/New_Salem|CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Nuuk |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|Amerika/Ojinaga |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Panama |EST5 |
|Amerika/Pangnirtung |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Paramaribo |<-03>3 |
|Amerika/Phoenix |MST7 |
|Amerika/Port-au-Prince |EST5EDT,M3.2.0,M11.1.0 |
|America/Port_of_Spain |AST4 |
|Amerika/Porto_Velho |<-04>4 |
|Amerika/Puerto_Rico |AST4 |
|America/Punta_Arenas |<-03>3 |
|Amerika/Rainy_River |CST6CDT,M3.2.0,M11.1.0 |
|America/Rankin_Inlet |CST6CDT,M3.2.0,M11.1.0 |
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
|Amerika/St_Barthelemy |AST4 |
|Amerika/St_Johns |NST3:30NDT,M3.2.0,M11.1.0 |
|Amerika/St_Kitts |AST4 |
|Amerika/St_Lucia |AST4 |
|Amerika/St_Thomas |AST4 |
|Amerika/St_Vincent |AST4 |
|Amerika/Swift_Current |CST6 |
|Amerika/Tegucigalpa |CST6 |
|Amerika/Thule |AST4ADT,M3.2.0,M11.1.0 |
|America/Thunder_Bay |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Tijuana |PST8PDT,M3.2.0,M11.1.0 |
|Amerika/Toronto |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Tortola |AST4 |
|Amerika/Vancouver |PST8PDT,M3.2.0,M11.1.0 |
|Amerika/Whitehorse |MST7 |
|Amerika/Winnipeg |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Yakutat |AKST9AKDT,M3.2.0,M11.1.0 |
|Amerika/Gulkniv |MST7MDT,M3.2.0,M11.1.0 |
|Antarktis/Casey |<+08>-8 |
|Antarktis/Davis |<+07>-7 |
|Antarktis/DumontDUrville |<+10>-10 |
|Antarktis/Macquarie |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Antarktis/Mawson |<+05>-5 |
|Antarktis/McMurdo |NZST-12NZDT,M9.5.0,M4.1.0/3 |
|Antarktis/Palmer |<-03>3 |
|Antarktis/Rothera |<-03>3 |
|Antarktis/Syowa |<+03>-3 |
|Antarktis/Troll |<+00>0<+02>-2,M3.5.0/1,M10.5.0/3 |
|Antarktis/Vostok |<+05>-5 |
|Arctic/Longyearbyen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Asia/Aden |<+03>-3 |
|Asia/Almaty |<+05>-5 |
|Asia/Amman |<+03>-3 |
|Asia/Anadyr |<+12>-12 |
|Asia/Aqtau |<+05>-5 |
|Asia/Aqtobe |<+05>-5 |
|Asia/Ashgabat |<+05>-5 |
|Asia/Atyrau |<+05>-5 |
|Asia/Bagdad |<+03>-3 |
|Asia/Bahrain |<+03>-3 |
|Asia/Baku |<+04>-4 |
|Asia/Bangkok |<+07>-7 |
|Asia/Fjøsaul |<+07>-7 |
|Asia/Beirut |EET-2EEST,M3.5.0/0,M10.5.0/0 |
|Asia/Bishkek |<+06>-6 |
|Asia/Brunei |<+08>-8 |
|Asia/Chita |<+09>-9 |
|Asia/Choibalsan |<+08>-8 |
|Asia/Colombo |<+0530>-5:30 |
|Asia/Damaskus |<+03>-3 |
|Asia/Dhaka |<+06>-6 |
|Asia/Dili |<+09>-9 |
|Asia/Dubai |<+04>-4 |
|Asia/Dushanbe |<+05>-5 |
|Asia/Famagusta |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Asia/Gaza |EET-2EEST,M3.4.4/50,M10.4.4/50 |
|Asia/Hebron |EET-2EEST,M3.4.4/50,M10.4.4/50 |
|Asia/Ho_Chi_Minh |<+07>-7 |
|Asia/Hong_Kong |HKT-8 |
|Asia/Hovd |<+07>-7 |
|Asia/Irkutsk |<+08>-8 |
|Asia/Jakarta |WIB-7 |
|Asia/Jayapura |WIT-9 |
|Asia/Jerusalem |IST-2IDT,M3.4.4/26,M10.5.0 |
|Asia/Kabul |<+0430>-4:30 |
|Asia/Kamchatka |<+12>-12 |
|Asia/Karachi |PKT-5 |
|Asia/Kathmandu |<+0545>-5:45 |
|Asia/Khandyga |<+09>-9 |
|Asia/Kolkata |IST-5:30 |
|Asia/Krasnoyarsk |<+07>-7 |
|Asia/Kuala_Lumpur |<+08>-8 |
|Asia/Kuching |<+08>-8 |
|Asia/Kuwait |<+03>-3 |
|Asia/Macau |CST-8 |
|Asia/Magadan |<+11>-11 |
|Asia/Makassar |WITA-8 |
|Asia/Manila |PST-8 |
|Asia/Muscat |<+04>-4 |
|Asia/Nicosia |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Asia/Novokuznetsk |<+07>-7 |
|Asia/Novosibirsk |<+07>-7 |
|Asia/Omsk |<+06>-6 |
|Asia/Oral |<+05>-5 |
|Asia/Phnom_Penh |<+07>-7 |
|Asia/Pontianak |WIB-7 |
|Asia/Pyongyang |KST-9 |
|Asia/Qatar |<+03>-3 |
|Asia/Qyzylorda |<+05>-5 |
|Asia/Riyadh |<+03>-3 |
|Asia/Sakhalin |<+11>-11 |
|Asia/Samarkand |<+05>-5 |
|Asia/Seoul |KST-9 |
|Asia/Shanghai |CST-8 |
|Asia/Singapore |<+08>-8 |
|Asia/Srednekolymsk |<+11>-11 |
|Asia/Taipei |CST-8 |
|Asia/Tashkent |<+05>-5 |
|Asia/Tbilisi |<+04>-4 |
|Asia/Teheran |<+0330>-3:30 |
|Asia/Thimphu |<+06>-6 |
|Asia/Tokyo |JST-9 |
|Asia/Tomsk |<+07>-7 |
|Asia/Ulaanbaatar |<+08>-8 |
|Asia/Urumqi |<+06>-6 |
|Asia/Ust-Nera |<+10>-10 |
|Asia/Vientiane |<+07>-7 |
|Asia/Vladivostok |<+10>-10 |
|Asia/Yakutsk |<+09>-9 |
|Asia/Yangon |<+0630>-6:30 |
|Asia/Yekaterinburg |<+05>-5 |
|Asia/Jerevan |<+04>-4 |
|Atlanterhavet/Azorene |<-01>1<+00>,M3.5.0/0,M10.5.0/1 |
|Atlantic/Bermuda |AST4ADT,M3.2.0,M11.1.0 |
|Atlantic/Canary |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantic/Cap_Verde |<-01>1 |
|Atlantic/Faroe |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantic/Madeira |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantic/Reykjavik |GMT0 |
|Atlanterhavet/Sør_Georgia |<-02>2 |
|Atlantic/Stanley |<-03>3 |
|Atlantic/St_Helena |GMT0 |
|Australia/Adelaide |ACST-9:30ACDT,M10.1.0,M4.1.0/3 |
|Australia/Brisbane |AEST-10 |
|Australia/Broken_Hill |ACST-9:30ACDT,M10.1.0,M4.1.0/3 |
|Australia/Currie |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Australia/Darwin |ACST-9:30 |
|Australia/Eucla |<+0845>-8:45 |
|Australia/Hobart |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Australia/Lindeman |AEST-10 |
|Australia/Lord_Howe |<+1030>-10:30<+11>-11,M10.1.0,M4.1.0 |
|Australia/Melbourne |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Australia/Perth |AWST-8 |
|Australia/Sydney |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Europa/Amsterdam |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Andorra |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Astrakhan |<+04>-4 |
|Europa/Aten |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Beograd |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Berlin |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Bratislava |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Brussel |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Bukarest |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Budapest |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Busingen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Chisinau |EET-2EEST,M3.5.0,M10.5.0/3 |
|Europa/København |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Dublin |IST-1GMT0,M10.5.0,M3.5.0/1 |
|Europa/Gibraltar |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Guernsey |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Helsingfors |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europe/Isle_of_Man |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Istanbul |<+03>-3 |
|Europa/Jersey |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Kaliningrad |EET-2 |
|Europa/Kiev |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Kirov |MSK-3 |
|Europa/Lisboa |WET0WEST,M3.5.0/1,M10.5.0 |
|Europa/Ljubljana |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/London |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Luxembourg |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Madrid |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Malta |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Mariehamn |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Minsk |<+03>-3 |
|Europa/Monaco |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Moskva |MSK-3 |
|Europa/Oslo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Paris |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Podgorica |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Praha |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Riga |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Roma |CET-1CEST,M3.5.0,M10.5.0/3 |
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
|Europa/Ulyanovsk |<+04>-4 |
|Europa/Uzhgorod |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Vaduz |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Vatikanet |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Wien |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Vilnius |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Volgograd |MSK-3 |
|Europa/Warszawa |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Zagreb |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Zaporozhye |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Zürich |CET-1CEST,M3.5.0,M10.5.0/3 |
|Indisk/Antananarivo |EAT-3 |
|Indisk/Chagos |<+06>-6|
|Indisk/jul |<+07>-7 |
|Indisk/Cocos |<+0630>-6:30 |
|Indisk/komoro |EAT-3 |
|Indisk/Kerguelen |<+05>-5 |
|Indisk/Mahe |<+04>-4 |
|Indisk/Maldivene |<+05>-5 |
|Indisk/Mauritius |<+04>-4 |
|Indisk/Mayotte |EAT-3 |
|Indisk/Reunion |<+04>-4 |
|Pacific/Apia |<+13>-13 |
|Pacific/Auckland |NZST-12NZDT,M9.5.0,M4.1.0/3 |
|Pacific/Bougainville |<+11>-11 |
|Pacific/Chatham |<+1245>-12:45<+1345>,M9.5.0/2:45,M4.1.0/3:45|
|Pacific/Chuuk |<+10>-10 |
|Pacific/Påske |<-06>6<-05>,M9.1.6/22,M4.1.6/22 |
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
|Etc/GMT |GMT0 |
|Etc/GMT-0 |GMT0 |
|Etc/GMT-1 |<+01>-1 |
|Etc/GMT-2 |<+02>-2 |
|Etc/GMT-3|<+03>-3 |
|Etc/GMT-4 |<+04>-4 |
|Etc/GMT-5 |<+05>-5 |
|Etc/GMT-6 |<+06>-6 |
|Etc/GMT-7 |<+07>-7 |
|Etc/GMT-8 |<+08>-8 |
|Etc/GMT-9 |<+09>-9 |
|Etc/GMT-10 |<+10>-10 |
|Etc/GMT-11 |<+11>-11 |
|Etc/GMT-12 |<+12>-12 |
|Etc/GMT-13 |<+13>-13 |
|Etc/GMT-14 |<+14>-14 |
|Etc/GMT0 |GMT0 |
|Etc/GMT+0 |GMT0 |
|Etc/GMT+1 |<-01>1 |
|Etc/GMT+2 |<-02>2 |
|Etc/GMT+3 |<-03>3 |
|Etc/GMT+4 |<-04>4 |
|Etc/GMT+5 |<-05>5 |
|Etc/GMT+6 |<-06>6 |
|Etc/GMT+7 |<-07>7 |
|Etc/GMT+8 |<-08>8 |
|Etc/GMT+9 |<-09>9 |
|Etc/GMT+10 |<-10>10 |
|Etc/GMT+11 |<-11>11 |
|Etc/GMT+12 |<-12>12 |
|Etc/UCT |UTC0 |
|Etc/UTC |UTC0 |
|Etc/Greenwich |GMT0 |
|Etc/Universal |UTC0 |
|Etc/Zulu |UTC0 |
