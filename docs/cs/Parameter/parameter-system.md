# Systém parametrů

## Systém

### Aktivujte piezo bzučák

Tímto parametrem lze aktivovat piezo bzučák. Ve výchozím nastavení je bzučák připojen k GPIO D8. To odpovídá rozložení desky 2.1. Alarmy bzučáků podporují proces rmutování pomocí signálních tónů.

### Aktivujte toasty a budíky mp3

Toasty jsou malé zprávy push. Zobrazují se jako dlaždice v pravém dolním rohu prohlížeče. Kromě chybových hlášení se toasty po několika sekundách automaticky skryjí. K dispozici jsou toastové zprávy o procesu rmutování, toastové zprávy ze systému a beztextové mp3 alarmy. Vlastnost Toasty má 3 možnosti: Vypnuto, Zapnuto a Chyba. Volba "Off" vypne alarmové zprávy. Možnost "Zapnuto" odešle všechny toastové zprávy a mp3 alarmy. Možnost „pouze chyby“ odesílá pouze toastové zprávy v případě systémových chyb, ale ne zprávy o procesu rmutování.

Toasty podporují zvukový výstup. To znamená, že tousty se během rmutování zobrazují nejen vizuálně, ale i akusticky. Firmware obsahuje zvukové soubory info.mp3, success.mp3, warning.mp3 a error.mp3. Zvukové soubory (mp3) lze vyměňovat. Jen jméno musí zůstat stejné. Automatické přehrávání zvuku musí být v prohlížeči aktivováno pro IP adresu stroje nevěsty.

Zvuk mp3 vyžaduje na zařízeních iOS „uživatelské gesto“, jako je kliknutí nebo dotyk. Jednoduše klikněte na prvek na webu a zvuk ve formátu mp3 se spustí. Bez uživatelského gesta je zvukový výstup blokován systémem iOS_.

Všechny hlavní prohlížeče jako MS Edge, Chrome nebo Firefox mají možnosti automatického přehrávání médií v nastavení pod oprávněními webu. Doporučuje se přidat web z Brautomat do seznamu povolených. Na následujícím obrázku byla v prohlížeči Microsoft Edge přidána webová stránka z Brautomat s názvem mDNS. Alternativně lze zadat také IP adresu

![media](/docs/img/autoplay-media.jpg)

S tímto nastavením mohou mp3 alarmy nahradit piezo bzučák.

### Aktivace dotykového displeje

S tímto parametrem lze ovládat 3,5palcový displej Nextion HMI. Brautomat nabízí tři pohledy

#### Přehled kotle

V tomto zobrazení jsou zobrazeny IDS a post-casting se skutečnými a cílovými teplotami. Aktuální a následující odpočinek se zobrazí s dobou trvání.
Délka červeného pruhu pod zobrazením IDS a překreslením ukazuje uplynulou dobu odpočinku.

![Zobrazení](/docs/img/kettlepage-sm.jpg)

#### MashBud

Tento pohled ukazuje první varnou desku. Zobrazí se aktuální doba odpočinku se skutečnou a cílovou teplotou a také aktuální zbývající čas. Délka červeného pruhu pod teplotami ukazuje průběh aktuálního odpočinku. Symbol napravo od zbývajícího času ukazuje, zda se další přestávka spustí automaticky (autonext): zelená znamená automaticky, červená znamená přestávku. Kromě toho se zobrazí ovládací panel s odpovídajícími funkcemi.

![Zobrazení](/docs/img/brewpage-sm.jpg)

#### Manuální režim (pouze pro GGM IDS2)

Toto zobrazení se používá k ručnímu ovládání indukční varné desky. V manuálním režimu je k dispozici 6 úrovní výkonu: 0, 20, 40, 60, 80 a 100 % výkonu. Manuální režim je vhodný pouze pro GGM IDS2. (IDS1 netestováno!)

![Display](/docs/img/induction-mode-sm.jpg)

Displej je volitelný. Brautomat podporuje pouze 3,5palcové dotykové displeje Nextion HMI (řady Basic a Discovery).

Displej se konfiguruje pomocí SD karty. Soubor TFT ze složky Info, který odpovídá zobrazení, se zkopíruje na kartu SD a vloží se do displeje. Jakmile se zapne displej, začne konfigurace. Proces trvá asi minutu. Průběh se zobrazuje na displeji. Po dokončení konfigurace se displej vypne a SD karta se vyjme. Displej je nyní připraven k použití.

Je třeba poznamenat, že SDA, SCL naJe nutné obsluhovat PINy D1, D2.

### Senzory PT100x MAX31865 Aktivujte zesilovač

Pokud jsou použity analogové snímače PT100x, musí být tento spínač aktivován. Analogový snímač PT100x vyžaduje RTD na digitální převodník pro připojení k mikrokontroléru ESP. MAX31865 zesilovač je RTD digitální převodník ve formě malé přídavné desky.

### Povolit mDNS

Multicast DNS se používá k překladu názvů hostitelů na IP adresy v malých sítích. mDNS umožňuje použít "mluvící" jméno pro Brautomat. Výchozí je název mDNS „Brautomat“. Webové rozhraní je dostupné přes adresu <http://Brautomat.local>. Název hostitele je omezen na maximálně 15 znaků.

Poznámka: Název mDNS je konfigurován bez protokolu (http://) a bez domény nejvyšší úrovně (.local) v nastavení systému (Brautomat).

### Ovládací panel

Prvky lze snadno zobrazit a skrýt prostřednictvím palubní desky. Pokud se například nepoužívá žádné přetypování, měl by být prvek Recasting pro řídicí panel deaktivován. Deaktivované položky snižují provoz.

### Protokolování

Protokolování je aktivováno pouze ve vývojové verzi. Na záložce Logování lze aktivovat výstup sériového logu pro všechny moduly. Pro protokolování jsou k dispozici úrovně Error, Info, Verbose a Off. Je vyžadován sériový monitor, např. s Arduino IDE, VSCODE atd. Přenosová rychlost je 115200.

Chybový režim zobrazuje pouze chyby.

Režim Info obsahuje chyby a také zobrazuje informace o konfiguraci na sériovém monitoru.

Podrobný režim zahrnuje chyby a informace a také vydává informace o přenosu dat (vysílání SSE).

### Časový server NTP

Network Time Protocol (NTP) pravidelně synchronizuje čas s časovým serverem. Výchozí časový server je europe.pool.ntp.org. Pokud je v místní síti časový server, měl by být použit. Pokud je nakonfigurován místní časový server, Brautomat nevyžaduje přístup k internetu. Například fritz.box nebo IP adresa standardní brány.

### Časové pásmo NTP

Časové pásmo se určuje z tabulky. Časové pásmo Europe Berlin je přednastaveno:

<CET-1CEST,M3.5.0,M10.5.0/3>

Časové pásmo se používá k určení správného času včetně letního a zimního času.

#### Tabulka časových pásem

|Afrika/Abidjan |GMT0 |
|-------------------------------|------------------------------------------------|
|Afrika/Accra |GMT0 |
|Afrika/Addis_Abeba |EAT-3 |
|Afrika/Alžír |CET-1 |
|Afrika/Asmara |EAT-3 |
|Afrika/Bamako |GMT0 |
|Afrika/Bangui |WAT-1 |
|Afrika/Banjul |GMT0 |
|Afrika/Bissau |GMT0 |
|Afrika/Blantyre |CAT-2 |
|Afrika/Brazzaville |WAT-1 |
|Afrika/Bujumbura |CAT-2 |
|Afrika/Káhira |EET-2EEST,M4.5.5/0,M10.5.4/24 |
|Afrika/Casablanca |<+01>-1 |
|Afrika/Ceuta |CET-1CEST,M3.5.0,M10.5.0/3 |
|Afrika/Conakry |GMT0 |
|Afrika/Dakar |GMT0 |
|Afrika/Dar_es_Salaam |EAT-3 |
|Afrika/Džibutsko |EAT-3 |
|Afrika/Douala |WAT-1 |
|Afrika/El_Aaiun |<+01>-1 |
|Afrika/Freetown |GMT0 |
|Afrika/Gaborone |CAT-2 |
|Afrika/Harare |CAT-2 |
|Afrika/Johannesburg |SAST-2 |
|Afrika/Juba |CAT-2 |
|Afrika/Kampala |EAT-3 |
|Afrika/Chartúm |CAT-2 |
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
|Afrika/Mogadišo |EAT-3 |
|Afrika/Monrovia |GMT0 |
|Afrika/Nairobi |EAT-3 |
|Afrika/Ndjamena |WAT-1 |
|Afrika/Niamey |WAT-1 |
|Afrika/Nouakchott |GMT0 |
|Afrika/Ouagadougou |GMT0 |
|Afrika/Porto-Novo |WAT-1 |
|Afrika/Sao_Tome |GMT0 |
|Afrika/Tripolis |EET-2 |
|Afrika/Tunisko |CET-1 |
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
|Amerika/Cancún |EST5 |
|Amerika/Caracas |<-04>4 |
|Amerika/Kajenské ostrovy |<-03>3 |
|Amerika/Kajmanské ostrovy |EST5 |
|Amerika/Chicago |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Čivava |CST6 |
|Amerika/Kostarika |CST6 |
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
|Amerika/Jamajka |EST5 |
|Amerika/červen |AKST9AKDT,M3.2.0,M11.1.0 |
|Amerika/Kentucky/Louisville |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Kentucky/Monticello |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Kralendijk |AST4 |
|Amerika/La_Paz |<-04>4 |
|Amerika/Lima |<-05>5 |
|Amerika/Los_Angeles |PST8PDT,M3.2.0,M11.1.0 |
|Amerika/nižší_princové |AST4 |
|Amerika/Maceio |<-03>3 |
|Amerika/Managua |CST6 |
|Amerika/Manaus |<-04>4 |
|Amerika/Marigot |AST4 |
|Amerika/Martinique |AST4 |
|Amerika/Matamoros |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Mazatlán |MST7 |
|Amerika/Menominee |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Merida |CST6 |
|Amerika/Metlakatla |AKST9AKDT,M3.2.0,M11.1.0 |
|Amerika/Mexiko_City |CST6 |
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
|Amerika/Severní_Dakota/Beulah |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Severní_Dakota/Střed |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Severní_Dakota/New_Salem|CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Nuuk |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|Amerika/Ojinaga |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Panama |EST5 |
|Amerika/Pangnirtung |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Paramaribo |<-03>3 |
|Amerika/Phoenix |MST7 |
|Amerika/Port-au-Prince |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Port_of_Spain |AST4 |
|Amerika/Porto_Velho |<-04>4 |
|Amerika/Portoriko |AST4 |
|Amerika/Punta_Arenas |<-03>3 |
|Amerika/Rainy_River |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Rankin_Inlet |CST6CDT,M3.2.0,M11.1.0|
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
|Amerika/Thunder_Bay |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Tijuana |PST8PDT,M3.2.0,M11.1.0 |
|Amerika/Toronto |EST5EDT,M3.2.0,M11.1.0 |
|Amerika/Tortola |AST4 |
|Amerika/Vancouver |PST8PDT,M3.2.0,M11.1.0 |
|Amerika/Whitehorse |MST7 |
|Amerika/Winnipeg |CST6CDT,M3.2.0,M11.1.0 |
|Amerika/Jakutat |AKST9AKDT,M3.2.0,M11.1.0 |
|Amerika/Žlutý nůž |MST7MDT,M3.2.0,M11.1.0 |
|Antarktida/Casey |<+08>-8 |
|Antarktida/Davis |<+07>-7 |
|Antarktida/DumontDUrville |<+10>-10 |
|Antarktida/Macquarie |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Antarktida/Mawson |<+05>-5 |
|Antarktida/McMurdo |NZST-12NZDT,M9.5.0,M4.1.0/3 |
|Antarktida/Palmer |<-03>3 |
|Antarktida/Rothera |<-03>3 |
|Antarktida/Syowa |<+03>-3 |
|Antarktida/Troll |<+00>0<+02>-2,M3.5.0/1,M10.5.0/3 |
|Antarktida/Vostok |<+05>-5 |
|Arktida/Longyearbyen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Asie/Aden |<+03>-3 |
|Asie/Almaty |<+05>-5 |
|Asie/Ammán |<+03>-3 |
|Asie/Anadyr |<+12>-12 |
|Asie/Aktau |<+05>-5 |
|Asie/Aqtobe |<+05>-5 |
|Asie/Ašchabad |<+05>-5 |
|Asie/Atyrau |<+05>-5 |
|Asie/Bagdád |<+03>-3 |
|Asie/Bahrajn |<+03>-3 |
|Asie/Baku |<+04>-4 |
|Asie/Bangkok|<+07>-7 |
|Asie/Barnaul |<+07>-7 |
|Asie/Bejrút |EET-2EEST,M3.5.0/0,M10.5.0/0 |
|Asie/Bishkek |<+06>-6 |
|Asie/Brunej |<+08>-8 |
|Asie/Chita |<+09>-9 |
|Asie/Choibalsan |<+08>-8 |
|Asie/Colombo |<+0530>-5:30 |
|Asie/Damašek |<+03>-3 |
|Asie/Dháka |<+06>-6 |
|Asie/Dili |<+09>-9 |
|Asie/Dubaj |<+04>-4 |
|Asie/Dušanbe |<+05>-5 |
|Asie/Famagusta |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Asie/Gaza |EET-2EEST,M3.4.4/50,M10.4.4/50 |
|Asie/Hebron |EET-2EEST,M3.4.4/50,M10.4.4/50 |
|Asie/Ho_Chi_Minh |<+07>-7 |
|Asie/Hong_Kong |HKT-8 |
|Asie/Hovd |<+07>-7 |
|Asie/Irkutsk |<+08>-8 |
|Asie/Jakarta |WIB-7 |
|Asie/Jayapura |WIT-9 |
|Asie/Jeruzalém |IST-2IDT,M3.4.4/26,M10.5.0 |
|Asie/Kábul |<+0430>-4:30 |
|Asie/Kamčatka |<+12>-12 |
|Asie/Karachi |PKT-5 |
|Asie/Káthmándú |<+0545>-5:45 |
|Asie/Khandyga |<+09>-9 |
|Asie/Kolkata |IST-5:30 |
|Asie/Krasnojarsk |<+07>-7 |
|Asie/Kuala_Lumpur |<+08>-8 |
|Asie/Kuching |<+08>-8 |
|Asie/Kuvajt |<+03>-3 |
|Asie/Macao |CST-8 |
|Asie/Magadan |<+11>-11 |
|Asie/Makassar |WITA-8 |
|Asie/Manila |PST-8 |
|Asie/Muscat |<+04>-4 |
|Asie/Nikósie |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Asie/Novokuzneck |<+07>-7 |
|Asie/Novosibirsk |<+07>-7 |
|Asie/Omsk |<+06>-6 |
|Asie/Orální |<+05>-5 |
|Asie/Phnom_Penh |<+07>-7 |
|Asie/Pontianak |WIB-7 |
|Asie/Pchjongjang |KST-9 |
|Asie/Katar |<+03>-3 |
|Asie/Qyzylorda |<+05>-5 |
|Asie/Rijád |<+03>-3 |
|Asie/Sachalin |<+11>-11 |
|Asie/Samarkand |<+05>-5 |
|Asie/Soul |KST-9|
|Asie/Šanghaj |CST-8 |
|Asie/Singapur |<+08>-8 |
|Asie/Sredněkolymsk |<+11>-11 |
|Asie/Taipei |CST-8 |
|Asie/Taškent |<+05>-5 |
|Asie/Tbilisi |<+04>-4 |
|Asie/Teherán |<+0330>-3:30 |
|Asie/Thimphu |<+06>-6 |
|Asie/Tokio |JST-9 |
|Asie/Tomsk |<+07>-7 |
|Asie/Ulánbátar |<+08>-8 |
|Asie/Urumči |<+06>-6 |
|Asie/Ust-Nera |<+10>-10 |
|Asie/Vientiane |<+07>-7 |
|Asie/Vladivostok |<+10>-10 |
|Asie/Jakutsk |<+09>-9 |
|Asie/Yangon |<+0630>-6:30 |
|Asie/Jekatěrinburg |<+05>-5 |
|Asie/Jerevan |<+04>-4 |
|Atlantik/Azory |<-01>1<+00>,M3.5.0/0,M10.5.0/1 |
|Atlantik/Bermudy |AST4ADT,M3.2.0,M11.1.0 |
|Atlantik/Kanárské ostrovy |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantik/Kapverdy |<-01>1 |
|Atlantik/Faerské ostrovy |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantik/Madeira |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantik/Reykjavík |GMT0 |
|Atlantik/Jižní_Gruzie |<-02>2 |
|Atlantik/Stanley |<-03>3 |
|Atlantik/St_Helena |GMT0 |
|Austrálie/Adelaide |ACST-9:30ACDT,M10.1.0,M4.1.0/3 |
|Austrálie/Brisbane |AEST-10 |
|Austrálie/Broken_Hill |ACST-9:30ACDT,M10.1.0,M4.1.0/3 |
|Austrálie/Currie |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Austrálie/Darwin |ACST-9:30 |
|Austrálie/Eucla |<+0845>-8:45 |
|Austrálie/Hobart |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Austrálie/Lindeman |AEST-10 |
|Austrálie/Lord_Howe |<+1030>-10:30<+11>-11,M10.1.0,M4.1.0 |
|Austrálie/Melbourne |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Austrálie/Perth |AWST-8 |
|Austrálie/Sydney |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Evropa/Amsterdam |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Andorra |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Astrachaň |<+04>-4 |
|Evropa/Atény |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Evropa/Bělehrad |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Berlín |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Bratislava |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Brusel |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Bukurešť |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Evropa/Budapešť |CET-1CEST,M3.5.0,M10.5.0/3|
|Evropa/Busingen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Kišiněv |EET-2EEST,M3.5.0,M10.5.0/3 |
|Evropa/Kodaň |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Dublin |IST-1GMT0,M10.5.0,M3.5.0/1 |
|Evropa/Gibraltar |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Guernsey |GMT0BST,M3.5.0/1,M10.5.0 |
|Evropa/Helsinki |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Evropa/Isle_of_Man |GMT0BST,M3.5.0/1,M10.5.0 |
|Evropa/Istanbul |<+03>-3 |
|Evropa/Jersey |GMT0BST,M3.5.0/1,M10.5.0 |
|Evropa/Kaliningrad |EET-2 |
|Evropa/Kyjev |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Evropa/Kirov |MSK-3 |
|Evropa/Lisabon |WET0WEST,M3.5.0/1,M10.5.0 |
|Evropa/Ljubljana |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Londýn |GMT0BST,M3.5.0/1,M10.5.0 |
|Evropa/Lucembursko |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Madrid |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Malta |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Mariehamn |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Evropa/Minsk |<+03>-3 |
|Evropa/Monaco |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Moskva |MSK-3 |
|Evropa/Oslo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Paříž |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Podgorica |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Praha |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Riga |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Evropa/Řím |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Samara |<+04>-4 |
|Evropa/San_Marino |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Sarajevo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Saratov |<+04>-4 |
|Evropa/Simferopol |MSK-3 |
|Evropa/Skopje |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Sofie |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Evropa/Stockholm |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Tallinn |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Evropa/Tirane |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Ulyanovsk |<+04>-4 |
|Evropa/Užhorod |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Evropa/Vaduz |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Vatikán |SEČ-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Vídeň |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Vilnius |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Evropa/Volgograd |MSK-3 |
|Evropa/Varšava |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Záhřeb |CET-1CEST,M3.5.0,M10.5.0/3 |
|Evropa/Zaporozhye |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Evropa/Curych |CET-1CEST,M3.5.0,M10.5.0/3 |
|Ind/Antananarivo |EAT-3 |
|Ind/Chagos |<+06>-6 |
|Indické/Vánoce |<+07>-7 |
|Indické/Kokosové |<+0630>-6:30 |
|Ind/Comoro |EAT-3 |
|Ind/Kerguelen |<+05>-5 |
|Ind/Mahe |<+04>-4 |
|Ind/Maledivy |<+05>-5 |
|Ind/Mauricius |<+04>-4 |
|Ind/Mayotte |EAT-3 |
|Ind/Reunion |<+04>-4 |
|Pacifik/Apia |<+13>-13 |
|Pacifik/Auckland |NZST-12NZDT,M9.5.0,M4.1.0/3 |
|Pacifik/Bougainville |<+11>-11 |
|Pacifik/Chatham |<+1245>-12:45<+1345>,M9.5.0/2:45,M4.1.0/3:45|
|Pacifik/Chuuk |<+10>-10 |
|Pacifik/Velikonoce |<-06>6<-05>,M9.1.6/22,M4.1.6/22 |
|Pacifik/Efate |<+11>-11 |
|Pacifik/Enderbury |<+13>-13 |
|Pacifik/Fakaofo |<+13>-13 |
|Pacifik/Fidži |<+12>-12 |
|Pacifik/Funafuti |<+12>-12 |
|Pacifik/Galapagos |<-06>6 |
|Pacifik/Gambier |<-09>9 |
|Pacifik/Guadalcanal |<+11>-11 |
|Pacifik/Guam |ChST-10 |
| Pacifik/Honolulu | HST10 |
|Pacifik/Kiritimati |<+14>-14 |
|Pacifik/Kosrae |<+11>-11 |
|Pacifik/Kwajalein |<+12>-12 |
|Pacifik/Majuro |<+12>-12 |
|Pacifik/Marquesas |<-0930>9:30 |
|Pacifik/Midway |SST11 |
|Pacifik/Nauru |<+12>-12 |
|Pacifik/Niue |<-11>11 |
|Pacifik/Norfolk |<+11>-11<+12>,M10.1.0,M4.1.0/3 |
|Pacifik/Noumea |<+11>-11 |
|Pacifik/Pago_Pago |SST11 |
|Pacifik/Palau |<+09>-9 |
|Pacifik/Pitcairn |<-08>8 |
|Pacifik/Pohnpei |<+11>-11 |
|Pacifik/Port_Moresby |<+10>-10 |
|Pacifik/Rarotonga |<-10>10 |
|Pacifik/Saipan |ChST-10 |
|Pacifik/Tahiti |<-10>10 |
|Pacifik/Tarawa |<+12>-12 |
|Pacifik/Tongatapu |<+13>-13 |
|Pacifik/Probuzení |<+12>-12 |
|Pacifik/Wallis |<+12>-12 |
|Etc/GMT |GMT0 |
|Etc/GMT-0 |GMT0 |
|Etc/GMT-1 |<+01>-1 |
|Etc/GMT-2|<+02>-2 |
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
