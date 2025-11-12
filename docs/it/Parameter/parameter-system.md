# Sistema di parametri

## Sistema

### Attiva il cicalino piezoelettrico

Con questo parametro è possibile attivare un cicalino piezoelettrico. Per impostazione predefinita il cicalino è collegato a GPIO D8. Ciò corrisponde al layout della scheda 2.1. Gli allarmi acustici supportano il processo di ammostamento con segnali acustici.

### Attiva toast e allarmi mp3

I toast sono piccoli messaggi push. Appaiono come un riquadro in basso a destra nel browser. Ad eccezione dei messaggi di errore, i toast vengono automaticamente nascosti dopo alcuni secondi. Sono presenti messaggi di toast sul processo di ammostamento, messaggi di toast dal sistema e allarmi mp3 senza testo. La proprietà Toast ha 3 opzioni: Off, On ed Errore. L'opzione "Off" disattiva i messaggi di allarme. L'opzione "On" invia tutti i messaggi di avviso e gli allarmi mp3. L'opzione "Solo errori" invia solo messaggi di avviso in caso di errori di sistema, ma non messaggi sul processo di mashing.

Toast supporta l'uscita audio. Ciò significa che i toast vengono visualizzati non solo visivamente ma anche acusticamente durante il processo di ammostamento. Il firmware contiene i file audio info.mp3, success.mp3, warning.mp3 e error.mp3. I file audio (mp3) possono essere scambiati. Solo il nome deve rimanere lo stesso. L'audio di riproduzione automatica deve essere attivato nel browser per l'indirizzo IP della macchina sposa.

L'audio mp3 richiede un "gesto dell'utente" sui dispositivi iOS, come un evento clic o tocco. Basta fare clic su un elemento sul sito Web e verrà riprodotto l'audio mp3. Senza il gesto dell'utente, l'uscita audio è bloccata dal sistema iOS_.

Tutti i principali browser come MS Edge, Chrome o Firefox dispongono di opzioni per la riproduzione multimediale automatica nelle impostazioni sotto le autorizzazioni del sito web. Si consiglia di aggiungere il sito Web da Brautomat all'elenco Consenti. Nell'immagine seguente, la pagina Web da Brautomat è stata aggiunta con il nome mDNS nel browser Microsoft Edge. In alternativa è possibile inserire anche l'indirizzo IP

![media](/docs/img/autoplay-media.jpg)

Con questa impostazione, gli allarmi mp3 possono sostituire un cicalino piezoelettrico.

### Attiva il display touch

Con questo parametro è possibile utilizzare un display Nextion HMI da 3,5 pollici. Il Brautomat offre tre visualizzazioni

#### Panoramica della caldaia

In questa vista, IDS e post-colata vengono visualizzati con le temperature effettive e target. Il riposo attuale e quello successivo vengono visualizzati con la durata.
La lunghezza della barra rossa sotto la vista IDS e Recast mostra il tempo di riposo trascorso.

![Visualizza](/docs/img/kettlepage-sm.jpg)

#### MashBud

Questa vista mostra il primo piano cottura. Viene visualizzato il tempo di riposo attuale con la temperatura effettiva e quella nominale, nonché il tempo rimanente attuale. La lunghezza della barra rossa sotto le temperature mostra l'andamento del riposo attuale. Il simbolo a destra del tempo rimanente mostra se la pausa successiva inizierà automaticamente (autonext): verde significa automatico, rosso significa pausa. Inoltre, viene visualizzato il controller deck con le funzioni corrispondenti.

![Visualizza](/docs/img/brewpage-sm.jpg)

#### Modalità manuale (solo per GGM IDS2)

Questa visualizzazione viene utilizzata per controllare manualmente il piano cottura a induzione. In modalità manuale sono disponibili 6 livelli di potenza: 0, 20, 40, 60, 80 e 100% di potenza. La modalità manuale è adatta solo per il GGM IDS2. (IDS1 non testato!)

![Visualizza](/docs/img/induction-mode-sm.jpg)

Un display è opzionale. Il Brautomat supporta solo i display touch Nextion HMI da 3,5 pollici (serie Basic e Discovery).

La configurazione del display avviene tramite scheda SD. Il file TFT della cartella Info che corrisponde al display viene copiato sulla scheda SD e inserito nel display. Non appena si accende il display inizia la configurazione. Il processo dura circa un minuto. L'avanzamento viene visualizzato sul display. Una volta completata la configurazione, il display si spegnerà e la scheda SD verrà rimossa. Il display è ora pronto per l'uso.

Va notato che SDA, SCL sulI PIN D1, D2 devono essere utilizzati.

### Sensori PT100x MAX31865 Attiva l'amplificatore

Se si utilizzano sensori analogici PT100x, questo interruttore deve essere attivato. Un sensore analogico PT100x richiede un convertitore da RTD a digitale per connettersi a un microcontrollore ESP. Un amplificatore MAX31865 è un convertitore digitale RTD sotto forma di una piccola scheda aggiuntiva.

### Abilita mDNS

Il DNS multicast viene utilizzato per risolvere i nomi host in indirizzi IP nelle reti di piccole dimensioni. mDNS consente di utilizzare un nome "parlante" per il Brautomat. Il valore predefinito è il nome mDNS “Brautomat”. L'interfaccia web è raggiungibile tramite l'indirizzo <http://Brautomat.local>. Il nome host è limitato a un massimo di 15 caratteri.

Nota: il nome mDNS è configurato nelle impostazioni di sistema (Brautomat) senza protocollo (http://) e senza dominio di primo livello (.local).

### Cruscotto

Gli elementi possono essere facilmente visualizzati e nascosti tramite la dashboard. Ad esempio, se non viene utilizzata alcuna rifusione, l'elemento Rifusione deve essere disattivato per il dashboard. Gli articoli disabilitati riducono il traffico.

### Registrazione

La registrazione è attivata solo nella versione di sviluppo. Nella scheda Registrazione è possibile attivare l'output seriale del registro per tutti i moduli. Per la registrazione sono disponibili i livelli Error, Info, Verbose e Off. È necessario un monitor seriale, ad es. con Arduino IDE, VSCODE ecc. La velocità di trasmissione è 115200.

La modalità Errore restituisce solo errori.

La modalità Info contiene errori e fornisce anche informazioni sulla configurazione nel monitor seriale.

La modalità dettagliata include errori e informazioni e fornisce anche informazioni sul trasferimento dei dati (trasmissioni SSE).

### Server dell'ora NTP

Il Network Time Protocol (NTP) sincronizza regolarmente l'ora con un time server. Il server temporale predefinito è Europe.pool.ntp.org. Se sulla rete locale è presente un time server, è necessario utilizzare questo. Se è configurato un server dell'ora locale, il Brautomat non richiede l'accesso a Internet. Ad esempio fritz.box o l'indirizzo IP del gateway standard.

### Fuso orario NTP

Il fuso orario è determinato da una tabella. Il fuso orario Europa Berlino è preimpostato:

<CET-1CEST,M3.5.0,M10.5.0/3>

Il fuso orario viene utilizzato per determinare l'ora corretta, inclusa l'ora legale e quella invernale.

#### Tabella dei fusi orari

|Africa/Abidjan |GMT0 |
|--------------------------------|------------------------------------------------|
|Africa/Accra |GMT0 |
|Africa/Addis_Abeba |EAT-3 |
|Africa/Algeri |CET-1 |
|Africa/Asmara |EAT-3 |
|Africa/Bamako |GMT0 |
|Africa/Bangui |WAT-1 |
|Africa/Banjul |GMT0 |
|Africa/Bissau |GMT0 |
|Africa/Blantyre |CAT-2 |
|Africa/Brazzaville |WAT-1 |
|Africa/Bujumbura |CAT-2 |
|Africa/Cairo |EET-2EEST,M4.5.5/0,M10.5.4/24 |
|Africa/Casablanca |<+01>-1 |
|Africa/Ceuta |CET-1CEST,M3.5.0,M10.5.0/3 |
|Africa/Conakry |GMT0 |
|Africa/Dakar |GMT0 |
|Africa/Dar_es_Salaam |EAT-3 |
|Africa/Gibuti |EAT-3 |
|Africa/Douala |WAT-1 |
|Africa/El_Aaiun |<+01>-1 |
|Africa/Freetown |GMT0 |
|Africa/Gaborone |CAT-2 |
|Africa/Harare |CAT-2 |
|Africa/Johannesburg |SAST-2 |
|Africa/Giuba |CAT-2 |
|Africa/Kampala |EAT-3 |
|Africa/Khartum |CAT-2 |
|Africa/Kigali |CAT-2 |
|Africa/Kinshasa |WAT-1 |
|Africa/Lagos |WAT-1 |
|Africa/Libreville |WAT-1 |
|Africa/Lomé |GMT0 |
|Africa/Luanda |WAT-1 |
|Africa/Lubumbashi |CAT-2 |
|Africa/Lusaka |CAT-2 |
|Africa/Malabo |WAT-1 |
|Africa/Maputo |CAT-2 |
|Africa/Maseru |SAST-2 |
|Africa/Mbabane |SAST-2 |
|Africa/Mogadiscio |EAT-3 |
|Africa/Monrovia |GMT0 |
|Africa/Nairobi |EAT-3 |
|Africa/Ndjamena |WAT-1 |
|Africa/Niamey |WAT-1 |
|Africa/Nouakchott |GMT0 |
|Africa/Ouagadougou |GMT0 |
|Africa/Porto-Novo |WAT-1 |
|Africa/Sao_Tomé |GMT0 |
|Africa/Tripoli |EET-2 |
|Africa/Tunisi |CET-1 |
|Africa/Windhoek |CAT-2 |
|America/Adak |HST10HDT,M3.2.0,M11.1.0 |
|America/Anchorage |AKST9AKDT,M3.2.0,M11.1.0 |
|America/Anguilla |AST4 |
|America/Antigua |AST4 |
|America/Araguaina |<-03>3 |
|America/Argentina/Buenos_Aires|<-03>3 |
|America/Argentina/Catamarca |<-03>3 |
|America/Argentina/Cordoba |<-03>3 |
|America/Argentina/Jujuy |<-03>3 |
|America/Argentina/La_Rioja |<-03>3 |
|America/Argentina/Mendoza |<-03>3 |
|America/Argentina/Rio_Gallegos|<-03>3 |
|America/Argentina/Salta |<-03>3 |
|America/Argentina/San_Juan |<-03>3 |
|America/Argentina/San_Luis |<-03>3 |
|America/Argentina/Tucuman |<-03>3 |
|America/Argentina/Ushuaia |<-03>3 |
|America/Aruba |AST4 |
|America/Asunción|<-04>4<-03>,M10.1.0/0,M3.4.0/0 |
|America/Atikokan |EST5 |
|America/Bahia |<-03>3 |
|America/Bahia_Banderas |CST6 |
|America/Barbados |AST4 |
|America/Belem |<-03>3 |
|America/Belize |CST6 |
|America/Blanc-Sablon |AST4 |
|America/Boa_Vista |<-04>4 |
|America/Bogotà |<-05>5 |
|America/Boise |MST7MDT,M3.2.0,M11.1.0 |
|America/Cambridge_Bay |MST7MDT,M3.2.0,M11.1.0 |
|America/Campo_Grande |<-04>4 |
|America/Cancun |EST5 |
|America/Caracas |<-04>4 |
|America/Caienna |<-03>3 |
|America/Caiman |EST5 |
|America/Chicago |CST6CDT,M3.2.0,M11.1.0 |
|America/Chihuahua |CST6 |
|America/Costa_Rica |CST6 |
|America/Creston |MST7 |
|America/Cuiaba |<-04>4 |
|America/Curaçao |AST4 |
|America/Danmarkshavn |GMT0 |
|America/Dawson |MST7 |
|America/Dawson_Creek |MST7 |
|America/Denver |MST7MDT,M3.2.0,M11.1.0 |
|America/Detroit |EST5EDT,M3.2.0,M11.1.0 |
|America/Dominica |AST4 |
|America/Edmonton |MST7MDT,M3.2.0,M11.1.0 |
|America/Eirunepe |<-05>5 |
|America/El_Salvador |CST6 |
|America/Fortaleza |<-03>3 |
|America/Fort_Nelson |MST7 |
|America/Glace_Bay |AST4ADT,M3.2.0,M11.1.0 |
|America/Godthab |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|America/Goose_Bay |AST4ADT,M3.2.0,M11.1.0 |
|America/Grand_Turk |EST5EDT,M3.2.0,M11.1.0 |
|America/Grenada |AST4 |
|America/Guadalupa |AST4 |
|America/Guatemala |CST6 |
|America/Guayaquil |<-05>5 |
|America/Guyana |<-04>4 |
|America/Halifax |AST4ADT,M3.2.0,M11.1.0 |
|America/L'Avana |CST5CDT,M3.2.0/0,M11.1.0/1 |
|America/Hermosillo |MST7 |
|America/Indiana/Indianapolis |EST5EDT,M3.2.0,M11.1.0 |
|America/Indiana/Knox |CST6CDT,M3.2.0,M11.1.0 |
|America/Indiana/Marengo |EST5EDT,M3.2.0,M11.1.0 |
|America/Indiana/Pietroburgo |EST5EDT,M3.2.0,M11.1.0 |
|America/Indiana/Tell_City |CST6CDT,M3.2.0,M11.1.0 |
|America/Indiana/Vevay |EST5EDT,M3.2.0,M11.1.0|
|America/Indiana/Vincennes |EST5EDT,M3.2.0,M11.1.0 |
|America/Indiana/Winamac |EST5EDT,M3.2.0,M11.1.0 |
|America/Inuvik |MST7MDT,M3.2.0,M11.1.0 |
|America/Iqaluit |EST5EDT,M3.2.0,M11.1.0 |
|America/Giamaica |EST5 |
|America/Giugno |AKST9AKDT,M3.2.0,M11.1.0 |
|America/Kentucky/Louisville |EST5EDT,M3.2.0,M11.1.0 |
|America/Kentucky/Monticello |EST5EDT,M3.2.0,M11.1.0 |
|America/Kralendijk |AST4 |
|America/La_Paz |<-04>4 |
|America/Lima |<-05>5 |
|America/Los_Angeles |PST8PDT,M3.2.0,M11.1.0 |
|America/Lower_Princes |AST4 |
|America/Maceio |<-03>3 |
|America/Managua |CST6 |
|America/Manaus |<-04>4 |
|America/Marigot |AST4 |
|America/Martinica |AST4 |
|America/Matamoros |CST6CDT,M3.2.0,M11.1.0 |
|America/Mazatlán |MST7 |
|America/Menominee |CST6CDT,M3.2.0,M11.1.0 |
|America/Merida |CST6 |
|America/Metlakatla |AKST9AKDT,M3.2.0,M11.1.0 |
|America/Città_Messico |CST6 |
|America/Miquelon |<-03>3<-02>,M3.2.0,M11.1.0 |
|America/Moncton |AST4ADT,M3.2.0,M11.1.0 |
|America/Monterrey |CST6 |
|America/Montevideo |<-03>3 |
|America/Montreal |EST5EDT,M3.2.0,M11.1.0 |
|America/Montserrat |AST4 |
|America/Nassau |EST5EDT,M3.2.0,M11.1.0 |
|America/New_York |EST5EDT,M3.2.0,M11.1.0 |
|America/Nipigon |EST5EDT,M3.2.0,M11.1.0 |
|America/Nome |AKST9AKDT,M3.2.0,M11.1.0 |
|America/Noronha |<-02>2 |
|America/Nord_Dakota/Beulah |CST6CDT,M3.2.0,M11.1.0 |
|America/Nord_Dakota/Centro |CST6CDT,M3.2.0,M11.1.0 |
|America/Nord_Dakota/Nuova_Salem|CST6CDT,M3.2.0,M11.1.0 |
|America/Nuuk |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|America/Ojinaga |CST6CDT,M3.2.0,M11.1.0 |
|America/Panama |EST5 |
|America/Pangnirtung |EST5EDT,M3.2.0,M11.1.0 |
|America/Paramaribo |<-03>3 |
|America/Fenice |MST7 |
|America/Port-au-Prince |EST5EDT,M3.2.0,M11.1.0 |
|America/Porto_di_Spagna |AST4 |
|America/Porto_Velho |<-04>4 |
|America/Porto_Rico |AST4 |
|America/Punta_Arenas |<-03>3 |
|America/Rainy_River |CST6CDT,M3.2.0,M11.1.0 |
|America/Rankin_Inlet |CST6CDT,M3.2.0,M11.1.0|
|America/Recife |<-03>3 |
|America/Regina |CST6 |
|America/Risoluto |CST6CDT,M3.2.0,M11.1.0 |
|America/Rio_Branco |<-05>5 |
|America/Santarem |<-03>3 |
|America/Santiago |<-04>4<-03>,M9.1.6/24,M4.1.6/24 |
|America/Santo_Domingo |AST4 |
|America/San_Paolo |<-03>3 |
|America/Scoresbysund |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|America/Sitka |AKST9AKDT,M3.2.0,M11.1.0 |
|America/St_Barthelemy |AST4 |
|America/St_Johns |NST3:30NDT,M3.2.0,M11.1.0 |
|America/St_Kitts |AST4 |
|America/Santa Lucia |AST4 |
|America/San_Tommaso |AST4 |
|America/St_Vincent |AST4 |
|America/Swift_Current |CST6 |
|America/Tegucigalpa |CST6 |
|America/Thule |AST4ADT,M3.2.0,M11.1.0 |
|America/Thunder_Bay |EST5EDT,M3.2.0,M11.1.0 |
|America/Tijuana |PST8PDT,M3.2.0,M11.1.0 |
|America/Toronto |EST5EDT,M3.2.0,M11.1.0 |
|America/Tortola |AST4 |
|America/Vancouver |PST8PDT,M3.2.0,M11.1.0 |
|America/Whitehorse |MST7 |
|America/Winnipeg |CST6CDT,M3.2.0,M11.1.0 |
|America/Yakutat |AKST9AKDT,M3.2.0,M11.1.0 |
|America/Coltello Giallo |MST7MDT,M3.2.0,M11.1.0 |
|Antartide/Casey |<+08>-8 |
|Antartide/Davis |<+07>-7 |
|Antartide/DumontDUrville |<+10>-10 |
|Antartide/Macquarie |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Antartide/Mawson |<+05>-5 |
|Antartide/McMurdo |NZST-12NZDT,M9.5.0,M4.1.0/3 |
|Antartide/Palmer |<-03>3 |
|Antartide/Rothera |<-03>3 |
|Antartide/Syowa |<+03>-3 |
|Antartide/Troll |<+00>0<+02>-2,M3.5.0/1,M10.5.0/3 |
|Antartide/Vostok |<+05>-5 |
|Artico/Longyearbyen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Asia/Aden |<+03>-3 |
|Asia/Almaty |<+05>-5 |
|Asia/Amman |<+03>-3 |
|Asia/Anadyr |<+12>-12 |
|Asia/Aqtau |<+05>-5 |
|Asia/Aqtobe |<+05>-5 |
|Asia/Asgabat |<+05>-5 |
|Asia/Atyrau |<+05>-5 |
|Asia/Baghdad |<+03>-3 |
|Asia/Bahrein |<+03>-3 |
|Asia/Baku |<+04>-4 |
|Asia/Bangkok|<+07>-7 |
|Asia/Barnaul |<+07>-7 |
|Asia/Beirut |EET-2EEST,M3.5.0/0,M10.5.0/0 |
|Asia/Bishkek |<+06>-6 |
|Asia/Brunei |<+08>-8 |
|Asia/Chita |<+09>-9 |
|Asia/Choibalsan |<+08>-8 |
|Asia/Colombo |<+0530>-5:30 |
|Asia/Damasco |<+03>-3 |
|Asia/Dacca |<+06>-6 |
|Asia/Dili |<+09>-9 |
|Asia/Dubai |<+04>-4 |
|Asia/Dushanbe |<+05>-5 |
|Asia/Famagosta |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Asia/Gaza |EET-2EEST,M3.4.4/50,M10.4.4/50 |
|Asia/Hebron |EET-2EEST,M3.4.4/50,M10.4.4/50 |
|Asia/Ho_Chi_Minh |<+07>-7 |
|Asia/Hong_Kong |HKT-8 |
|Asia/Hovd |<+07>-7 |
|Asia/Irkutsk |<+08>-8 |
|Asia/Giakarta |WIB-7 |
|Asia/Jayapura |WIT-9 |
|Asia/Gerusalemme |IST-2IDT,M3.4.4/26,M10.5.0 |
|Asia/Kabul |<+0430>-4:30 |
|Asia/Kamčatka |<+12>-12 |
|Asia/Karachi |PKT-5 |
|Asia/Kathmandu |<+0545>-5:45 |
|Asia/Khandyga |<+09>-9 |
|Asia/Calcutta |IST-5:30 |
|Asia/Krasnojarsk |<+07>-7 |
|Asia/Kuala_Lumpur |<+08>-8 |
|Asia/Kuching |<+08>-8 |
|Asia/Kuwait |<+03>-3 |
|Asia/Macao |CST-8 |
|Asia/Magadan |<+11>-11 |
|Asia/Makassar |WITA-8 |
|Asia/Manila |PST-8 |
|Asia/Mascate |<+04>-4 |
|Asia/Nicosia |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Asia/Novokuznetsk |<+07>-7 |
|Asia/Novosibirsk |<+07>-7 |
|Asia/Omsk |<+06>-6 |
|Asia/Orale |<+05>-5 |
|Asia/Phnom_Penh |<+07>-7 |
|Asia/Pontianak |WIB-7 |
|Asia/Pyongyang |KST-9 |
|Asia/Qatar |<+03>-3 |
|Asia/Qyzylorda |<+05>-5 |
|Asia/Riad |<+03>-3 |
|Asia/Sachalin |<+11>-11 |
|Asia/Samarcanda |<+05>-5 |
|Asia/Seul |KST-9|
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
|Asia/Ulan Bator |<+08>-8 |
|Asia/Urumqi |<+06>-6 |
|Asia/Ust-Nera |<+10>-10 |
|Asia/Vientiane |<+07>-7 |
|Asia/Vladivostok |<+10>-10 |
|Asia/Jakutsk |<+09>-9 |
|Asia/Yangon |<+0630>-6:30 |
|Asia/Ekaterinburg |<+05>-5 |
|Asia/Erevan |<+04>-4 |
|Atlantico/Azzorre |<-01>1<+00>,M3.5.0/0,M10.5.0/1 |
|Atlantico/Bermuda |AST4ADT,M3.2.0,M11.1.0 |
|Atlantico/Canarie |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantico/Capo_Verde |<-01>1 |
|Atlantico/Faroe |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantico/Madeira |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlantico/Reykjavik |GMT0 |
|Atlantico/Georgia_del_Sud |<-02>2 |
|Atlantico/Stanley |<-03>3 |
|Atlantico/Sant'Elena |GMT0 |
|Australia/Adelaide |ACST-9:30ACDT,M10.1.0,M4.1.0/3 |
|Australia/Brisbane |AEST-10 |
|Australia/Collina_Broccata |ACST-9:30ACDT,M10.1.0,M4.1.0/3 |
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
|Europa/Astrachan' |<+04>-4 |
|Europa/Atene |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Belgrado |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Berlino |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Bratislava |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Bruxelles |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Bucarest |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Budapest |CET-1CEST,M3.5.0,M10.5.0/3|
|Europa/Busingen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Chisinau |EET-2EEST,M3.5.0,M10.5.0/3 |
|Europa/Copenaghen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Dublino |IST-1GMT0,M10.5.0,M3.5.0/1 |
|Europa/Gibilterra |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Guernsey |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Helsinki |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Isola_di_Man |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Istanbul |<+03>-3 |
|Europa/Jersey |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Kaliningrad |EET-2 |
|Europa/Kiev |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Kirov |MSK-3 |
|Europa/Lisbona |WET0WEST,M3.5.0/1,M10.5.0 |
|Europa/Lubiana |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Londra |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Lussemburgo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Madrid |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Malta |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Mariehamn |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Minsk |<+03>-3 |
|Europa/Monaco |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Mosca |MSK-3 |
|Europa/Oslo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Parigi |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Podgorica |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Praga |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Riga |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Roma |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Samara |<+04>-4 |
|Europa/San_Marino |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Sarajevo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Saratov |<+04>-4 |
|Europa/Simferopoli |MSK-3 |
|Europa/Skopje |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Sofia |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Stoccolma |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Tallinn |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Tirane |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Uljanovsk |<+04>-4 |
|Europa/Uzhgorod |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Vaduz |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Vaticano |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Vienna |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Vilnius |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Volgograd |MSK-3 |
|Europa/Varsavia |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Zagabria |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Zaporozhye |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Zurigo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Indiano/Antananarivo |EAT-3 |
|Indiano/Chagos |<+06>-6 |
|Indiano/Natale |<+07>-7 |
|Indiano/Cocos |<+0630>-6:30 |
|Indiano/Comore |EAT-3 |
|Indiano/Kerguelen |<+05>-5 |
|Indiano/Mahe |<+04>-4 |
|Indiano/Maldive |<+05>-5 |
|Indiano/Maurizio |<+04>-4 |
|Indiano/Mayotte |EAT-3 |
|Indiano/Riunione |<+04>-4 |
|Pacifico/Apia |<+13>-13 |
|Pacifico/Auckland |NZST-12NZDT,M9.5.0,M4.1.0/3 |
|Pacifico/Bougainville |<+11>-11 |
|Pacifico/Chatham |<+1245>-12:45<+1345>,M9.5.0/2:45,M4.1.0/3:45|
|Pacifico/Chuuk |<+10>-10 |
|Pacifico/Pasqua |<-06>6<-05>,M9.1.6/22,M4.1.6/22 |
|Pacifico/Efate |<+11>-11 |
|Pacifico/Enderbury |<+13>-13 |
|Pacifico/Fakaofo |<+13>-13 |
|Pacifico/Fiji |<+12>-12 |
|Pacifico/Funafuti |<+12>-12 |
|Pacifico/Galapagos |<-06>6 |
|Pacifico/Gambier |<-09>9 |
|Pacifico/Guadalcanal |<+11>-11 |
|Pacifico/Guam |ChST-10 |
|Pacifico/Honolulu |HST10 |
|Pacifico/Kiritimati |<+14>-14 |
|Pacifico/Kosrae |<+11>-11 |
|Pacifico/Kwajalein |<+12>-12 |
|Pacifico/Majuro |<+12>-12 |
|Pacifico/Marchesi |<-09.30>9:30 |
|Pacifico/Medio strada |SST11 |
|Pacifico/Nauru |<+12>-12 |
|Pacifico/Niue |<-11>11 |
|Pacifico/Norfolk |<+11>-11<+12>,M10.1.0,M4.1.0/3 |
|Pacifico/Noumea |<+11>-11 |
|Pacifico/Pago_Pago |SST11 |
|Pacifico/Palau |<+09>-9 |
|Pacifico/Pitcairn |<-08>8 |
|Pacifico/Pohnpei |<+11>-11 |
|Pacifico/Port_Moresby |<+10>-10 |
|Pacifico/Rarotonga |<-10>10 |
|Pacifico/Saipan |Cap.ST-10 |
|Pacifico/Tahiti |<-10>10 |
|Pacifico/Tarawa |<+12>-12 |
|Pacifico/Tongatapu |<+13>-13 |
|Pacifico/Sveglia |<+12>-12 |
|Pacifico/Vallese |<+12>-12 |
|Ecc/GMT |GMT0 |
|Ecc/GMT-0 |GMT0 |
|Ecc/GMT-1 |<+01>-1 |
|Ecc/GMT-2|<+02>-2 |
|Ecc/GMT-3 |<+03>-3 |
|Ecc/GMT-4 |<+04>-4 |
|Ecc/GMT-5 |<+05>-5 |
|Ecc/GMT-6 |<+06>-6 |
|Ecc/GMT-7 |<+07>-7 |
|Ecc/GMT-8 |<+08>-8 |
|Ecc/GMT-9 |<+09>-9 |
|Ecc/GMT-10 |<+10>-10 |
|Ecc/GMT-11 |<+11>-11 |
|Ecc/GMT-12 |<+12>-12 |
|Ecc/GMT-13 |<+13>-13 |
|Ecc/GMT-14 |<+14>-14 |
|Ecc/GMT0 |GMT0 |
|Ecc/GMT+0 |GMT0 |
|Ecc/GMT+1 |<-01>1 |
|Ecc/GMT+2 |<-02>2 |
|Ecc/GMT+3 |<-03>3 |
|Ecc/GMT+4 |<-04>4 |
|Ecc/GMT+5 |<-05>5 |
|Ecc/GMT+6 |<-06>6 |
|Ecc/GMT+7 |<-07>7 |
|Ecc/GMT+8 |<-08>8 |
|Ecc/GMT+9 |<-09>9 |
|Ecc/GMT+10 |<-10>10 |
|Ecc/GMT+11 |<-11>11 |
|Ecc/GMT+12 |<-12>12 |
|Etc/UCT |UTC0 |
|Etc/UTC |UTC0 |
|Ecc/Greenwich |GMT0 |
|Ecc/Universale |UTC0 |
|Etc/Zulu |UTC0 |
