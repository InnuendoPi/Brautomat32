# Parametersystem

## System

### Aktivera piezosummer

En piezosummer kan aktiveras med denna parameter. Som standard är summern ansluten till GPIO D8. Detta motsvarar layouten på tavla 2.1. Summerlarm stödjer mäskningen med signaltoner.

### Aktivera rostat bröd och mp3-larm

Toasts är små push-meddelanden. De visas som en ruta längst ned till höger i webbläsaren. Förutom felmeddelanden döljs skålar automatiskt efter några sekunder. Det finns toastmeddelanden om mäskningen, toastmeddelanden från systemet och textlösa mp3-larm. Egenskapen Toasts har 3 alternativ: Av, På och Fel. Alternativet "Av" stänger av larmmeddelandena. Alternativet "På" skickar alla toastmeddelanden och mp3-larm. Alternativet "endast fel" skickar bara toastmeddelanden i händelse av systemfel, men inte meddelanden om mäskningen.

Toasts stöder ljudutgång. Detta innebär att rostat bröd visas inte bara visuellt utan även akustiskt under mäskningen. Den fasta programvaran innehåller ljudfilerna info.mp3, success.mp3, warning.mp3 och error.mp3. Ljudfilerna (mp3) kan utbytas. Bara namnet måste förbli detsamma. Autoplay Audio måste vara aktiverat i webbläsaren för IP-adressen till brudmaskinen.

mp3-ljud kräver en "användargest" på iOS-enheter, till exempel en klick- eller pekhändelse. Klicka bara på ett element på webbplatsen och mp3-ljud kommer att matas ut. Utan användargesten blockeras ljudutgången av iOS-systemet_.

Alla större webbläsare som MS Edge, Chrome eller Firefox har alternativ för automatisk mediauppspelning i inställningarna under webbplatsbehörigheter. Det rekommenderas att lägga till webbplatsen från Brautomat till listan Tillåt. I följande bild har webbsidan från Brautomat lagts till med mDNS-namnet i Microsoft Edge-webbläsaren. Alternativt kan även IP-adressen anges

![media](/docs/img/autoplay-media.jpg)

Med den här inställningen kan mp3-larm ersätta en piezo-summer.

### Aktivera pekskärm

En Nextion HMI 3,5-tumsskärm kan användas med denna parameter. Brautomat erbjuder tre vyer

#### Pannöversikt

I den här vyn visas IDS och post-casting med faktiska temperaturer och måltemperaturer. Den nuvarande och nästa vila visas med varaktighet.
Längden på den röda stapeln under IDS och omarbetad vyn visar den förflutna vilotiden.

![Display](/docs/img/kettlepage-sm.jpg)

#### MashBud

Denna vy visar den första hällen. Den aktuella vilotiden visas med aktuell temperatur och måltemperatur samt aktuell återstående tid. Längden på den röda stapeln under temperaturerna visar förloppet för den aktuella vilan. Symbolen till höger om den återstående tiden visar om nästa paus startar automatiskt (autonext): grön betyder automatisk, röd betyder paus. Dessutom visas kontrollpanelen med motsvarande funktioner.

![Display](/docs/img/brewpage-sm.jpg)

#### Manuellt läge (endast för GGM IDS2)

Denna vy används för att manuellt styra induktionshällen. I manuellt läge finns 6 effektnivåer tillgängliga: 0, 20, 40, 60, 80 och 100 % effekt. Manuellt läge är endast lämpligt för GGM IDS2. (IDS1 ej testad!)

![Display](/docs/img/induction-mode-sm.jpg)

En display är valfri. Brautomat stöder endast Nextion HMI 3,5-tums pekskärmar (Basic- och Discovery-serien).

Skärmen konfigureras via ett SD-kort. TFT-filen från Info-mappen som matchar displayen kopieras till SD-kortet och sätts in i displayen. Så snart displayen slås på börjar konfigurationen. Processen tar ungefär en minut. Förloppet visas på displayen. När konfigurationen är klar stängs skärmen av och SD-kortet tas bort. Displayen är nu klar att användas.

Det bör noteras att SDA, SCL påPIN-koderna D1, D2 måste användas.

### PT100x-sensorer MAX31865 Aktivera förstärkare

Om analoga PT100x-givare används måste denna omkopplare aktiveras. En PT100x analog sensor kräver en RTD till digital omvandlare för att ansluta till en ESP mikrokontroller. En MAX31865-förstärkare är en RTD-digitalomvandlare i form av ett litet extra kort.

### Aktivera mDNS

Multicast DNS används för att lösa värdnamn till IP-adresser i små nätverk. mDNS gör det möjligt att använda ett "talande" namn för Brautomat. Standard är mDNS-namnet "Brautomat". Webbgränssnittet kan nås via adressen <http://Brautomat.local>. Värdnamnet är begränsat till högst 15 tecken.

Obs: mDNS-namnet är konfigurerat utan ett protokoll (http://) och utan en toppdomän (.local) i systeminställningarna (Brautomat).

### Instrumentpanel

Element kan enkelt visas och döljas via instrumentpanelen. Till exempel, om ingen omarbetning används, ska omarbetningselementet inaktiveras för instrumentpanelen. Inaktiverade objekt minskar trafiken.

### Loggning

Loggning aktiveras endast i utvecklingsversionen. På fliken Loggning kan seriell loggutgång aktiveras för alla moduler. Nivåerna Error, Info, Verbose och Off är tillgängliga för loggning. En seriell monitor krävs, t.ex. med Arduino IDE, VSCODE etc. Baudhastigheten är 115200.

Felläge ger bara ut fel.

Infoläget innehåller fel och matar även ut information om konfigurationen i den seriella monitorn.

Utförligt läge inkluderar fel och info och matar även ut information om dataöverföring (SSE-sändningar).

### NTP-tidsserver

Network Time Protocol (NTP) synkroniserar regelbundet tiden med en tidsserver. Standardtidsservern är europe.pool.ntp.org. Om det finns en tidsserver på det lokala nätverket ska denna användas. Om en lokal tidsserver är konfigurerad kräver Brautomat inte internetåtkomst. Till exempel fritz.box eller IP-adressen för standardgatewayen.

### NTP-tidszon

Tidszonen bestäms från en tabell. Tidszonen Europe Berlin är förinställd:

<CET-1CEST,M3.5.0,M10.5.0/3>

Tidszonen används för att bestämma rätt tid inklusive sommar- och vintertid.

#### Tidszonstabell

|Afrika/Abidjan |GMT0 |
|--------------------------------|------------------------------------------------|
|Afrika/Accra |GMT0 |
|Afrika/Addis_Ababa |ÄTA-3 |
|Afrika/Alger |CET-1 |
|Afrika/Asmara |ÄTA-3 |
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
|Afrika/Dar_es_Salaam |ÄTA-3 |
|Afrika/Djibouti |ÄTA-3 |
|Afrika/Douala |WAT-1 |
|Afrika/El_Aaiun |<+01>-1 |
|Afrika/Freetown |GMT0 |
|Afrika/Gaborone |CAT-2 |
|Afrika/Harare |CAT-2 |
|Afrika/Johannesburg |SAST-2 |
|Afrika/Juba |CAT-2 |
|Afrika/Kampala |ÄTA-3 |
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
|Afrika/Mogadishu |ÄTA-3 |
|Afrika/Monrovia |GMT0 |
|Afrika/Nairobi |ÄTA-3 |
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
|Amerika/Asuncion|<-04>4<-03>,M10.1.0/0,M3.4.0/0 |
|Amerika/Atikokan |EST5 |
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
|Amerika/Dominika |AST4 |
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
|Amerika/Juneau |AKST9AKDT,M3.2.0,M11.1.0 |
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
|Amerika/Menominerad |CST6CDT,M3.2.0,M11.1.0 |
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
|America/Rankin_Inlet |CST6CDT,M3.2.0,M11.1.0|
|Amerika/Recife |<-03>3 |
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
|Antarctica/DumontDUrville |<+10>-10 |
|Antarktis/Macquarie |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Antarktis/Mawson |<+05>-5 |
|Antarktis/McMurdo |NZST-12NZDT,M9.5.0,M4.1.0/3 |
|Antarktis/Palmer |<-03>3 |
|Antarktis/Rothera |<-03>3 |
|Antarktis/Syowa |<+03>-3 |
|Antarktis/Troll |<+00>0<+02>-2,M3.5.0/1,M10.5.0/3 |
|Antarktis/Vostok |<+05>-5 |
|Arctic/Longyearbyen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Asien/Aden |<+03>-3 |
|Asien/Almaty |<+05>-5 |
|Asien/Amman |<+03>-3 |
|Asien/Anadyr |<+12>-12 |
|Asien/Aqtau |<+05>-5 |
|Asien/Aqtobe |<+05>-5 |
|Asien/Ashgabat |<+05>-5 |
|Asien/Atyrau |<+05>-5 |
|Asien/Bagdad |<+03>-3 |
|Asien/Bahrain |<+03>-3 |
|Asien/Baku |<+04>-4 |
|Asien/Bangkok|<+07>-7 |
|Asien/Barnaul |<+07>-7 |
|Asien/Beirut |EET-2EEST,M3.5.0/0,M10.5.0/0 |
|Asien/Bishkek |<+06>-6 |
|Asien/Brunei |<+08>-8 |
|Asien/Chita |<+09>-9 |
|Asien/Choibalsan |<+08>-8 |
|Asien/Colombo |<+0530>-5:30 |
|Asien/Damaskus |<+03>-3 |
|Asien/Dhaka |<+06>-6 |
|Asien/Dili |<+09>-9 |
|Asien/Dubai |<+04>-4 |
|Asien/Dushanbe |<+05>-5 |
|Asien/Famagusta |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Asien/Gaza |EET-2EEST,M3.4.4/50,M10.4.4/50 |
|Asien/Hebron |EET-2EEST,M3.4.4/50,M10.4.4/50 |
|Asien/Ho_Chi_Minh |<+07>-7 |
|Asien/Hong_Kong |HKT-8 |
|Asien/Hovd |<+07>-7 |
|Asien/Irkutsk |<+08>-8 |
|Asien/Jakarta |WIB-7 |
|Asien/Jayapura |WIT-9 |
|Asien/Jerusalem |IST-2IDT,M3.4.4/26,M10.5.0 |
|Asien/Kabul |<+0430>-4:30 |
|Asien/Kamchatka |<+12>-12 |
|Asien/Karachi |PKT-5 |
|Asien/Kathmandu |<+0545>-5:45 |
|Asien/Khandyga |<+09>-9 |
|Asien/Kolkata |IST-5:30 |
|Asien/Krasnoyarsk |<+07>-7 |
|Asien/Kuala_Lumpur |<+08>-8 |
|Asien/Kuching |<+08>-8 |
|Asien/Kuwait |<+03>-3 |
|Asien/Macau |CST-8 |
|Asien/Magadan |<+11>-11 |
|Asien/Makassar |WITA-8 |
|Asien/Manila |PST-8 |
|Asien/Muscat |<+04>-4 |
|Asien/Nicosia |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Asien/Novokuznetsk |<+07>-7 |
|Asien/Novosibirsk |<+07>-7 |
|Asien/Omsk |<+06>-6 |
|Asien/Oral |<+05>-5 |
|Asien/Phnom_Penh |<+07>-7 |
|Asien/Pontianak |WIB-7 |
|Asien/Pyongyang |KST-9 |
|Asien/Qatar |<+03>-3 |
|Asien/Qyzylorda |<+05>-5 |
|Asien/Riyadh |<+03>-3 |
|Asien/Sakhalin |<+11>-11 |
|Asien/Samarkand |<+05>-5 |
|Asien/Seoul |KST-9|
|Asien/Shanghai |CST-8 |
|Asien/Singapore |<+08>-8 |
|Asien/Srednekolymsk |<+11>-11 |
|Asien/Taipei |CST-8 |
|Asien/Tasjkent |<+05>-5 |
|Asien/Tbilisi |<+04>-4 |
|Asien/Teheran |<+0330>-3:30 |
|Asien/Thimphu |<+06>-6 |
|Asien/Tokyo |JST-9 |
|Asien/Tomsk |<+07>-7 |
|Asien/Ulaanbaatar |<+08>-8 |
|Asien/Urumqi |<+06>-6 |
|Asien/Ust-Nera |<+10>-10 |
|Asien/Vientiane |<+07>-7 |
|Asien/Vladivostok |<+10>-10 |
|Asien/Jakutsk |<+09>-9 |
|Asien/Yangon |<+0630>-6:30 |
|Asien/Yekaterinburg |<+05>-5 |
|Asien/Jerevan |<+04>-4 |
|Atlanten/Azorerna |<-01>1<+00>,M3.5.0/0,M10.5.0/1 |
|Atlantic/Bermuda |AST4ADT,M3.2.0,M11.1.0 |
|Atlantic/Canary |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantic/Cape_Verde |<-01>1 |
|Atlanten/Färöarna |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantic/Madeira |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantic/Reykjavik |GMT0 |
|Atlantic/South_Georgia |<-02>2 |
|Atlantic/Stanley |<-03>3 |
|Atlantic/St_Helena |GMT0 |
|Australien/Adelaide |ACST-9:30ACDT,M10.1.0,M4.1.0/3 |
|Australien/Brisbane |AEST-10 |
|Australien/Broken_Hill |ACST-9:30ACDT,M10.1.0,M4.1.0/3 |
|Australien/Currie |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Australien/Darwin |ACST-9:30 |
|Australien/Eucla |<+0845>-8:45 |
|Australien/Hobart |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Australien/Lindeman |AEST-10 |
|Australien/Lord_Howe |<+1030>-10:30<+11>-11,M10.1.0,M4.1.0 |
|Australien/Melbourne |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Australien/Perth |AWST-8 |
|Australien/Sydney |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Europa/Amsterdam |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Andorra |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Astrakhan |<+04>-4 |
|Europa/Aten |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Belgrad |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Berlin |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Bratislava |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Bryssel |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Bukarest |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Budapest |CET-1CEST,M3.5.0,M10.5.0/3|
|Europa/Busingen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Chisinau |EET-2EEST,M3.5.0,M10.5.0/3 |
|Europa/Köpenhamn |CET-1CEST,M3.5.0,M10.5.0/3 |
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
|Europa/Lissabon |WET0WEST,M3.5.0/1,M10.5.0 |
|Europa/Ljubljana |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/London |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Luxemburg |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Madrid |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Malta |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Mariehamn |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Minsk |<+03>-3 |
|Europa/Monaco |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Moskva |MSK-3 |
|Europa/Oslo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Paris |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Podgorica |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Prag |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Riga |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Rom |CET-1CEST,M3.5.0,M10.5.0/3 |
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
|Europa/Vatikanen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Wien |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Vilnius |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Volgograd |MSK-3 |
|Europa/Warszawa |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Zagreb |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Zaporozhye |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Zürich |CET-1CEST,M3.5.0,M10.5.0/3 |
|Indisk/Antananarivo |ÄTA-3 |
|Indisk/Chagos |<+06>-6 |
|Indisk/jul |<+07>-7 |
|Indian/Cocos |<+0630>-6:30 |
|Indien/Komorerna |ÄTA-3 |
|Indian/Kerguelen |<+05>-5 |
|Indisk/Mahe |<+04>-4 |
|Indien/Maldiverna |<+05>-5 |
|Indien/Mauritius |<+04>-4 |
|Indisk/Mayotte |ÄTA-3 |
|Indian/Reunion |<+04>-4 |
|Pacific/Apia |<+13>-13 |
|Pacific/Auckland |NZST-12NZDT,M9.5.0,M4.1.0/3 |
|Pacific/Bougainville |<+11>-11 |
|Pacific/Chatham |<+1245>-12:45<+1345>,M9.5.0/2:45,M4.1.0/3:45|
|Pacific/Chuuk |<+10>-10 |
|Pacific/Påsk |<-06>6<-05>,M9.1.6/22,M4.1.6/22 |
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
|Ettc/GMT |GMT0 |
|Etc/GMT-0 |GMT0 |
|Etc/GMT-1 |<+01>-1 |
|Ettc/GMT-2|<+02>-2 |
|Etc/GMT-3 |<+03>-3 |
|Etc/GMT-4 |<+04>-4 |
|Etc/GMT-5 |<+05>-5 |
|Etc/GMT-6 |<+06>-6 |
|Etc/GMT-7 |<+07>-7 |
|Etc/GMT-8 |<+08>-8 |
|Etc/GMT-9 |<+09>-9 |
|Etc/GMT-10 |<+10>-10 |
|Etc/GMT-11 |<+11>-11 |
|Etc/GMT-12 |<+12>-12 |
|Ettc/GMT-13 |<+13>-13 |
|Etc/GMT-14 |<+14>-14 |
|Ettc/GMT0 |GMT0 |
|Ettc/GMT+0 |GMT0 |
|Ettc/GMT+1 |<-01>1 |
|Etc/GMT+2 |<-02>2 |
|Etc/GMT+3 |<-03>3 |
|Etc/GMT+4 |<-04>4 |
|Etc/GMT+5 |<-05>5 |
|Etc/GMT+6 |<-06>6 |
|Etc/GMT+7 |<-07>7 |
|Ettc/GMT+8 |<-08>8 |
|Ettc/GMT+9 |<-09>9 |
|Ettc/GMT+10 |<-10>10 |
|Etc/GMT+11 |<-11>11 |
|Ettc/GMT+12 |<-12>12 |
|Etc/UCT |UTC0 |
|Ettc/UTC |UTC0 |
|Ettc/Greenwich |GMT0 |
|Etc/Universal |UTC0 |
|Ettc/Zulu |UTC0 |
