# Parameter System

## System

### Piezo Buzzer aktivieren

Mit diesem Parameter kann ein Piezo-Buzzer aktiviert werden. Standardmäßig ist der Buzzer an GPIO D8 angeschlossen. Dies entspricht dem Layout der Platine 2.1. Buzzer Alarme unterstützen den Maischprozess durch Signaltöne.

### Toasts und mp3 Alarme aktivieren

Toasts sind kleine Push-Nachrichten. Sie erscheinen als Kachel unten rechts im Browser. Mit Ausnahme von Fehlermeldungen werden Toasts nach einigen Sekunden automatisch ausgeblendet. Es gibt Toast-Nachrichten über den Maischprozess, Toast-Nachrichten vom System und textlose mp3-Alarme. Die Eigenschaft Toasts hat 3 Optionen: Aus, Ein und Fehler. Die Option "Aus" schaltet die Alarmmeldungen aus. Die Option "Ein" sendet alle Toast-Nachrichten und mp3-Alarme. Die Option "nur Fehler" sendet nur Toastmeldungen bei Systemfehlern, aber keine Meldungen über den Maischprozess.

Toasts unterstützt Audioausgabe. Dadurch werden Toasts während des Maischprozesses nicht nur visuell, sondern auch akustisch angezeigt. Die Firmware enthält die Audiodateien info.mp3, success.mp3, warning.mp3 und error.mp3. Die Audiodateien (mp3) können ausgetauscht werden. Nur der Name muss gleich bleiben. Im Browser muss Autoplay Audio für die IP-Adresse des Brautautomaten aktiviert sein.

mp3-Audio benötigt auf iOS-Geräten eine "Benutzergeste", z.B. einen Klick oder ein Berührungsereignis. Einfach auf ein Element auf der Webseite klicken und mp3 Audio wird ausgegeben. Ohne die user gesture wird die Audioausgabe vom iOS System blockiert_.

Alle gängigen Browser wie MS Edge, Chrome oder Firefox haben in den Einstellungen unter Websiteberechtigungen Optionen für die automatische Medienwiedergabe. Es wird empfohlen, die Webseite vom Brautomat in die Liste "Erlauben" aufzunehmen. In der folgenden Abbildung wurde die Webseite vom Brautomat mit dem mDNS-Namen im Browser Microsoft Edge hinzugefügt. Alternativ kann auch die IP-Adresse eingetragen werden

![media](/docs/img/autoplay-media.jpg)

Mit dieser Einstellung können mp3 Alarme einen Piezo Buzzer ersetzen.

### Aktiviere Touchdisplay

Mit diesem Parameter kann ein Nextion HMI 3,5 Zoll Display betrieben werden. Der Brautomat bietet drei Ansichten

#### Kesselübersicht

In dieser Ansicht werden IDS und Nachguss mit Ist- und Solltemperaturen angezeigt. Die aktuelle und die nächste Rast werden mit Dauer angezeigt.
Die Länge des roten Balkens unter der Ansicht IDS und Nachguss zeigt die abgelaufene Rastzeit an.

![Display](/docs/img/kettlepage-sm.jpg)

#### MaischeSud

Diese Ansicht zeigt das erste Kochfeld. Es wird die aktuelle Rast mit Ist- und Solltemperatur sowie der aktuellen Restzeit angezeigt. Die Länge des roten Balkens unter den Temperaturen zeigt den Fortschritt der aktuellen Rast an. Das Symbol rechts neben der Restzeit zeigt an, ob die nächste Rast automatisch gestartet wird (autonext): grün bedeutet automatisch, rot bedeutet Pause. Zusätzlich wird das Controller Deck angezeigt mit den entsprechend Funktionen.

![Display](/docs/img/brewpage-sm.jpg)

#### Manueller Modus (nur für GGM IDS2)

Diese Ansicht dient zur manuellen Steuerung des Induktionskochfeldes. Im Handbetrieb stehen 6 Leistungsstufen zur Verfügung: 0, 20, 40, 60, 80 und 100% Leistung. Der manuelle Modus ist nur für das GGM IDS2 geeignet. (IDS1 nicht getestet!)

![Display](/docs/img/induction-mode-sm.jpg)

Ein Display ist optional. Der Brautomat unterstützt nur Nextion HMI 3,5 Zoll Touchdisplays (Basic und Discovery Serie).

Die Konfiguration des Displays erfolgt über eine SD-Karte. Die zum Display passende TFT Datei aus dem Ordner Info wird auf die SD Karte kopiert und in das Display gesteckt. Sobald das Display eingeschaltet wird, beginnt die Konfiguration. Der Vorgang dauert ca. eine Minute. Der Fortschritt wird auf dem Display angezeigt. Sobald die Konfiguration abgeschlossen ist, wird die Anzeige ausgeschaltet und die SD-Karte entfernt. Das Display ist jetzt betriebsbereit.

Es ist zu beachten, dass SDA, SCL an den PINs D1, D2 betrieben werden müssen.

### PT100x Sensoren MAX31865 Amplifier aktivieren

Wenn analoge Sensoren vom Typ PT100x verwendet werden, muss dieser Schalter aktiviert werden. Ein analoger PT100x-Sensor benötigt einen RTD-Digital-Wandler, um an einen ESP-Mikrocontroller angeschlossen zu werden. Ein MAX31865 Amplifier ist ein RTD Digital Wandler in Form einer kleinen Zusatzplatine.

### mDNS aktivieren

Multicast DNS wird verwendet, um Hostnamen in IP-Adressen in kleinen Netzwerken aufzulösen. mDNS ermöglicht es, einen "sprechenden" Namen für den Brautomat zu verwenden. Voreingestellt ist der mDNS-Name "brautomat". Das Webinterface ist über die Adresse <http://brautomat.local> erreichbar. Der Hostname ist auf maximal 15 Zeichen begrenzt.

Hinweis: Der mDNS Name wird ohne Protokoll (http://) und ohne Top-Level-Domain (.local) in den Systemeinstellungen (brautomat) konfiguriert.

### Dashboard

Über das Dashboard können sehr einfach Elemente ein- und ausgeblendet werden. Wird z.B. kein Nachguss verwendet, sollte das Element Nachguss für das Dashboard deaktiviert werden. Deaktivierte Elemente reduzieren den Datenverkehr.

### Protokollierung

Auf der Registerkarte Logging kann eine serielle Protokollausgabe für alle Module aktiviert werden. Für die Protokollierung stehen die Stufen Error, Info, Verbose und Off zur Verfügung. Benötigt wird ein serieller Monitor, z.B. mit der Arduino IDE, VSCODE etc. Die Baudrate beträgt 115200.

Der Error Modus gibt nur Fehler aus.

Der Modus Info beinhaltet Error und gibt zusätzlich Informationen zur Konfiguration im Serial Monitor aus.

Der Verbose Modus beinhaltet Error und Info und gibt zusätzlich Informationen zum Datentransfer (SSE Broadcasts) aus.

### NTP-Zeitserver

Das Network Time Protocol (NTP) synchronisiert die Uhrzeit regelmäßig mit einem Zeitserver. Der Standardzeitserver ist europe.pool.ntp.org. Wenn im lokalen Netzwerk ein Zeitserver vorhanden ist, sollte dieser verwendet werden. Wird ein lokaler Zeitserver konfiguriert, benötigt der Brautomat keinen Internetzugang. Bspw. fritz.box oder die IP Adresse vom Standard Gateway.

### NTP Zeitzone

Die Zeitzone wird aus einer Tabelle bestimmt. Die Zeitzone Europa Berlin ist voreingestellt:

<CET-1CEST,M3.5.0,M10.5.0/3>

Anhand der Zeitzone wird die korrekte Uhrzeit inklusive Sommer- bzw. Winterzeit ermittelt.

#### Zeitzonen-Tabelle

|Africa/Abidjan                |GMT0                                        |
|------------------------------|--------------------------------------------|
|Africa/Accra                  |GMT0                                        |
|Africa/Addis_Ababa            |EAT-3                                       |
|Africa/Algiers                |CET-1                                       |
|Africa/Asmara                 |EAT-3                                       |
|Africa/Bamako                 |GMT0                                        |
|Africa/Bangui                 |WAT-1                                       |
|Africa/Banjul                 |GMT0                                        |
|Africa/Bissau                 |GMT0                                        |
|Africa/Blantyre               |CAT-2                                       |
|Africa/Brazzaville            |WAT-1                                       |
|Africa/Bujumbura              |CAT-2                                       |
|Africa/Cairo                  |EET-2EEST,M4.5.5/0,M10.5.4/24               |
|Africa/Casablanca             |<+01>-1                                     |
|Africa/Ceuta                  |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Africa/Conakry                |GMT0                                        |
|Africa/Dakar                  |GMT0                                        |
|Africa/Dar_es_Salaam          |EAT-3                                       |
|Africa/Djibouti               |EAT-3                                       |
|Africa/Douala                 |WAT-1                                       |
|Africa/El_Aaiun               |<+01>-1                                     |
|Africa/Freetown               |GMT0                                        |
|Africa/Gaborone               |CAT-2                                       |
|Africa/Harare                 |CAT-2                                       |
|Africa/Johannesburg           |SAST-2                                      |
|Africa/Juba                   |CAT-2                                       |
|Africa/Kampala                |EAT-3                                       |
|Africa/Khartoum               |CAT-2                                       |
|Africa/Kigali                 |CAT-2                                       |
|Africa/Kinshasa               |WAT-1                                       |
|Africa/Lagos                  |WAT-1                                       |
|Africa/Libreville             |WAT-1                                       |
|Africa/Lome                   |GMT0                                        |
|Africa/Luanda                 |WAT-1                                       |
|Africa/Lubumbashi             |CAT-2                                       |
|Africa/Lusaka                 |CAT-2                                       |
|Africa/Malabo                 |WAT-1                                       |
|Africa/Maputo                 |CAT-2                                       |
|Africa/Maseru                 |SAST-2                                      |
|Africa/Mbabane                |SAST-2                                      |
|Africa/Mogadishu              |EAT-3                                       |
|Africa/Monrovia               |GMT0                                        |
|Africa/Nairobi                |EAT-3                                       |
|Africa/Ndjamena               |WAT-1                                       |
|Africa/Niamey                 |WAT-1                                       |
|Africa/Nouakchott             |GMT0                                        |
|Africa/Ouagadougou            |GMT0                                        |
|Africa/Porto-Novo             |WAT-1                                       |
|Africa/Sao_Tome               |GMT0                                        |
|Africa/Tripoli                |EET-2                                       |
|Africa/Tunis                  |CET-1                                       |
|Africa/Windhoek               |CAT-2                                       |
|America/Adak                  |HST10HDT,M3.2.0,M11.1.0                     |
|America/Anchorage             |AKST9AKDT,M3.2.0,M11.1.0                    |
|America/Anguilla              |AST4                                        |
|America/Antigua               |AST4                                        |
|America/Araguaina             |<-03>3                                      |
|America/Argentina/Buenos_Aires|<-03>3                                      |
|America/Argentina/Catamarca   |<-03>3                                      |
|America/Argentina/Cordoba     |<-03>3                                      |
|America/Argentina/Jujuy       |<-03>3                                      |
|America/Argentina/La_Rioja    |<-03>3                                      |
|America/Argentina/Mendoza     |<-03>3                                      |
|America/Argentina/Rio_Gallegos|<-03>3                                      |
|America/Argentina/Salta       |<-03>3                                      |
|America/Argentina/San_Juan    |<-03>3                                      |
|America/Argentina/San_Luis    |<-03>3                                      |
|America/Argentina/Tucuman     |<-03>3                                      |
|America/Argentina/Ushuaia     |<-03>3                                      |
|America/Aruba                 |AST4                                        |
|America/Asuncion              |<-04>4<-03>,M10.1.0/0,M3.4.0/0              |
|America/Atikokan              |EST5                                        |
|America/Bahia                 |<-03>3                                      |
|America/Bahia_Banderas        |CST6                                        |
|America/Barbados              |AST4                                        |
|America/Belem                 |<-03>3                                      |
|America/Belize                |CST6                                        |
|America/Blanc-Sablon          |AST4                                        |
|America/Boa_Vista             |<-04>4                                      |
|America/Bogota                |<-05>5                                      |
|America/Boise                 |MST7MDT,M3.2.0,M11.1.0                      |
|America/Cambridge_Bay         |MST7MDT,M3.2.0,M11.1.0                      |
|America/Campo_Grande          |<-04>4                                      |
|America/Cancun                |EST5                                        |
|America/Caracas               |<-04>4                                      |
|America/Cayenne               |<-03>3                                      |
|America/Cayman                |EST5                                        |
|America/Chicago               |CST6CDT,M3.2.0,M11.1.0                      |
|America/Chihuahua             |CST6                                        |
|America/Costa_Rica            |CST6                                        |
|America/Creston               |MST7                                        |
|America/Cuiaba                |<-04>4                                      |
|America/Curacao               |AST4                                        |
|America/Danmarkshavn          |GMT0                                        |
|America/Dawson                |MST7                                        |
|America/Dawson_Creek          |MST7                                        |
|America/Denver                |MST7MDT,M3.2.0,M11.1.0                      |
|America/Detroit               |EST5EDT,M3.2.0,M11.1.0                      |
|America/Dominica              |AST4                                        |
|America/Edmonton              |MST7MDT,M3.2.0,M11.1.0                      |
|America/Eirunepe              |<-05>5                                      |
|America/El_Salvador           |CST6                                        |
|America/Fortaleza             |<-03>3                                      |
|America/Fort_Nelson           |MST7                                        |
|America/Glace_Bay             |AST4ADT,M3.2.0,M11.1.0                      |
|America/Godthab               |<-02>2<-01>,M3.5.0/-1,M10.5.0/0             |
|America/Goose_Bay             |AST4ADT,M3.2.0,M11.1.0                      |
|America/Grand_Turk            |EST5EDT,M3.2.0,M11.1.0                      |
|America/Grenada               |AST4                                        |
|America/Guadeloupe            |AST4                                        |
|America/Guatemala             |CST6                                        |
|America/Guayaquil             |<-05>5                                      |
|America/Guyana                |<-04>4                                      |
|America/Halifax               |AST4ADT,M3.2.0,M11.1.0                      |
|America/Havana                |CST5CDT,M3.2.0/0,M11.1.0/1                  |
|America/Hermosillo            |MST7                                        |
|America/Indiana/Indianapolis  |EST5EDT,M3.2.0,M11.1.0                      |
|America/Indiana/Knox          |CST6CDT,M3.2.0,M11.1.0                      |
|America/Indiana/Marengo       |EST5EDT,M3.2.0,M11.1.0                      |
|America/Indiana/Petersburg    |EST5EDT,M3.2.0,M11.1.0                      |
|America/Indiana/Tell_City     |CST6CDT,M3.2.0,M11.1.0                      |
|America/Indiana/Vevay         |EST5EDT,M3.2.0,M11.1.0                      |
|America/Indiana/Vincennes     |EST5EDT,M3.2.0,M11.1.0                      |
|America/Indiana/Winamac       |EST5EDT,M3.2.0,M11.1.0                      |
|America/Inuvik                |MST7MDT,M3.2.0,M11.1.0                      |
|America/Iqaluit               |EST5EDT,M3.2.0,M11.1.0                      |
|America/Jamaica               |EST5                                        |
|America/Juneau                |AKST9AKDT,M3.2.0,M11.1.0                    |
|America/Kentucky/Louisville   |EST5EDT,M3.2.0,M11.1.0                      |
|America/Kentucky/Monticello   |EST5EDT,M3.2.0,M11.1.0                      |
|America/Kralendijk            |AST4                                        |
|America/La_Paz                |<-04>4                                      |
|America/Lima                  |<-05>5                                      |
|America/Los_Angeles           |PST8PDT,M3.2.0,M11.1.0                      |
|America/Lower_Princes         |AST4                                        |
|America/Maceio                |<-03>3                                      |
|America/Managua               |CST6                                        |
|America/Manaus                |<-04>4                                      |
|America/Marigot               |AST4                                        |
|America/Martinique            |AST4                                        |
|America/Matamoros             |CST6CDT,M3.2.0,M11.1.0                      |
|America/Mazatlan              |MST7                                        |
|America/Menominee             |CST6CDT,M3.2.0,M11.1.0                      |
|America/Merida                |CST6                                        |
|America/Metlakatla            |AKST9AKDT,M3.2.0,M11.1.0                    |
|America/Mexico_City           |CST6                                        |
|America/Miquelon              |<-03>3<-02>,M3.2.0,M11.1.0                  |
|America/Moncton               |AST4ADT,M3.2.0,M11.1.0                      |
|America/Monterrey             |CST6                                        |
|America/Montevideo            |<-03>3                                      |
|America/Montreal              |EST5EDT,M3.2.0,M11.1.0                      |
|America/Montserrat            |AST4                                        |
|America/Nassau                |EST5EDT,M3.2.0,M11.1.0                      |
|America/New_York              |EST5EDT,M3.2.0,M11.1.0                      |
|America/Nipigon               |EST5EDT,M3.2.0,M11.1.0                      |
|America/Nome                  |AKST9AKDT,M3.2.0,M11.1.0                    |
|America/Noronha               |<-02>2                                      |
|America/North_Dakota/Beulah   |CST6CDT,M3.2.0,M11.1.0                      |
|America/North_Dakota/Center   |CST6CDT,M3.2.0,M11.1.0                      |
|America/North_Dakota/New_Salem|CST6CDT,M3.2.0,M11.1.0                      |
|America/Nuuk                  |<-02>2<-01>,M3.5.0/-1,M10.5.0/0             |
|America/Ojinaga               |CST6CDT,M3.2.0,M11.1.0                      |
|America/Panama                |EST5                                        |
|America/Pangnirtung           |EST5EDT,M3.2.0,M11.1.0                      |
|America/Paramaribo            |<-03>3                                      |
|America/Phoenix               |MST7                                        |
|America/Port-au-Prince        |EST5EDT,M3.2.0,M11.1.0                      |
|America/Port_of_Spain         |AST4                                        |
|America/Porto_Velho           |<-04>4                                      |
|America/Puerto_Rico           |AST4                                        |
|America/Punta_Arenas          |<-03>3                                      |
|America/Rainy_River           |CST6CDT,M3.2.0,M11.1.0                      |
|America/Rankin_Inlet          |CST6CDT,M3.2.0,M11.1.0                      |
|America/Recife                |<-03>3                                      |
|America/Regina                |CST6                                        |
|America/Resolute              |CST6CDT,M3.2.0,M11.1.0                      |
|America/Rio_Branco            |<-05>5                                      |
|America/Santarem              |<-03>3                                      |
|America/Santiago              |<-04>4<-03>,M9.1.6/24,M4.1.6/24             |
|America/Santo_Domingo         |AST4                                        |
|America/Sao_Paulo             |<-03>3                                      |
|America/Scoresbysund          |<-02>2<-01>,M3.5.0/-1,M10.5.0/0             |
|America/Sitka                 |AKST9AKDT,M3.2.0,M11.1.0                    |
|America/St_Barthelemy         |AST4                                        |
|America/St_Johns              |NST3:30NDT,M3.2.0,M11.1.0                   |
|America/St_Kitts              |AST4                                        |
|America/St_Lucia              |AST4                                        |
|America/St_Thomas             |AST4                                        |
|America/St_Vincent            |AST4                                        |
|America/Swift_Current         |CST6                                        |
|America/Tegucigalpa           |CST6                                        |
|America/Thule                 |AST4ADT,M3.2.0,M11.1.0                      |
|America/Thunder_Bay           |EST5EDT,M3.2.0,M11.1.0                      |
|America/Tijuana               |PST8PDT,M3.2.0,M11.1.0                      |
|America/Toronto               |EST5EDT,M3.2.0,M11.1.0                      |
|America/Tortola               |AST4                                        |
|America/Vancouver             |PST8PDT,M3.2.0,M11.1.0                      |
|America/Whitehorse            |MST7                                        |
|America/Winnipeg              |CST6CDT,M3.2.0,M11.1.0                      |
|America/Yakutat               |AKST9AKDT,M3.2.0,M11.1.0                    |
|America/Yellowknife           |MST7MDT,M3.2.0,M11.1.0                      |
|Antarctica/Casey              |<+08>-8                                     |
|Antarctica/Davis              |<+07>-7                                     |
|Antarctica/DumontDUrville     |<+10>-10                                    |
|Antarctica/Macquarie          |AEST-10AEDT,M10.1.0,M4.1.0/3                |
|Antarctica/Mawson             |<+05>-5                                     |
|Antarctica/McMurdo            |NZST-12NZDT,M9.5.0,M4.1.0/3                 |
|Antarctica/Palmer             |<-03>3                                      |
|Antarctica/Rothera            |<-03>3                                      |
|Antarctica/Syowa              |<+03>-3                                     |
|Antarctica/Troll              |<+00>0<+02>-2,M3.5.0/1,M10.5.0/3            |
|Antarctica/Vostok             |<+05>-5                                     |
|Arctic/Longyearbyen           |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Asia/Aden                     |<+03>-3                                     |
|Asia/Almaty                   |<+05>-5                                     |
|Asia/Amman                    |<+03>-3                                     |
|Asia/Anadyr                   |<+12>-12                                    |
|Asia/Aqtau                    |<+05>-5                                     |
|Asia/Aqtobe                   |<+05>-5                                     |
|Asia/Ashgabat                 |<+05>-5                                     |
|Asia/Atyrau                   |<+05>-5                                     |
|Asia/Baghdad                  |<+03>-3                                     |
|Asia/Bahrain                  |<+03>-3                                     |
|Asia/Baku                     |<+04>-4                                     |
|Asia/Bangkok                  |<+07>-7                                     |
|Asia/Barnaul                  |<+07>-7                                     |
|Asia/Beirut                   |EET-2EEST,M3.5.0/0,M10.5.0/0                |
|Asia/Bishkek                  |<+06>-6                                     |
|Asia/Brunei                   |<+08>-8                                     |
|Asia/Chita                    |<+09>-9                                     |
|Asia/Choibalsan               |<+08>-8                                     |
|Asia/Colombo                  |<+0530>-5:30                                |
|Asia/Damascus                 |<+03>-3                                     |
|Asia/Dhaka                    |<+06>-6                                     |
|Asia/Dili                     |<+09>-9                                     |
|Asia/Dubai                    |<+04>-4                                     |
|Asia/Dushanbe                 |<+05>-5                                     |
|Asia/Famagusta                |EET-2EEST,M3.5.0/3,M10.5.0/4                |
|Asia/Gaza                     |EET-2EEST,M3.4.4/50,M10.4.4/50              |
|Asia/Hebron                   |EET-2EEST,M3.4.4/50,M10.4.4/50              |
|Asia/Ho_Chi_Minh              |<+07>-7                                     |
|Asia/Hong_Kong                |HKT-8                                       |
|Asia/Hovd                     |<+07>-7                                     |
|Asia/Irkutsk                  |<+08>-8                                     |
|Asia/Jakarta                  |WIB-7                                       |
|Asia/Jayapura                 |WIT-9                                       |
|Asia/Jerusalem                |IST-2IDT,M3.4.4/26,M10.5.0                  |
|Asia/Kabul                    |<+0430>-4:30                                |
|Asia/Kamchatka                |<+12>-12                                    |
|Asia/Karachi                  |PKT-5                                       |
|Asia/Kathmandu                |<+0545>-5:45                                |
|Asia/Khandyga                 |<+09>-9                                     |
|Asia/Kolkata                  |IST-5:30                                    |
|Asia/Krasnoyarsk              |<+07>-7                                     |
|Asia/Kuala_Lumpur             |<+08>-8                                     |
|Asia/Kuching                  |<+08>-8                                     |
|Asia/Kuwait                   |<+03>-3                                     |
|Asia/Macau                    |CST-8                                       |
|Asia/Magadan                  |<+11>-11                                    |
|Asia/Makassar                 |WITA-8                                      |
|Asia/Manila                   |PST-8                                       |
|Asia/Muscat                   |<+04>-4                                     |
|Asia/Nicosia                  |EET-2EEST,M3.5.0/3,M10.5.0/4                |
|Asia/Novokuznetsk             |<+07>-7                                     |
|Asia/Novosibirsk              |<+07>-7                                     |
|Asia/Omsk                     |<+06>-6                                     |
|Asia/Oral                     |<+05>-5                                     |
|Asia/Phnom_Penh               |<+07>-7                                     |
|Asia/Pontianak                |WIB-7                                       |
|Asia/Pyongyang                |KST-9                                       |
|Asia/Qatar                    |<+03>-3                                     |
|Asia/Qyzylorda                |<+05>-5                                     |
|Asia/Riyadh                   |<+03>-3                                     |
|Asia/Sakhalin                 |<+11>-11                                    |
|Asia/Samarkand                |<+05>-5                                     |
|Asia/Seoul                    |KST-9                                       |
|Asia/Shanghai                 |CST-8                                       |
|Asia/Singapore                |<+08>-8                                     |
|Asia/Srednekolymsk            |<+11>-11                                    |
|Asia/Taipei                   |CST-8                                       |
|Asia/Tashkent                 |<+05>-5                                     |
|Asia/Tbilisi                  |<+04>-4                                     |
|Asia/Tehran                   |<+0330>-3:30                                |
|Asia/Thimphu                  |<+06>-6                                     |
|Asia/Tokyo                    |JST-9                                       |
|Asia/Tomsk                    |<+07>-7                                     |
|Asia/Ulaanbaatar              |<+08>-8                                     |
|Asia/Urumqi                   |<+06>-6                                     |
|Asia/Ust-Nera                 |<+10>-10                                    |
|Asia/Vientiane                |<+07>-7                                     |
|Asia/Vladivostok              |<+10>-10                                    |
|Asia/Yakutsk                  |<+09>-9                                     |
|Asia/Yangon                   |<+0630>-6:30                                |
|Asia/Yekaterinburg            |<+05>-5                                     |
|Asia/Yerevan                  |<+04>-4                                     |
|Atlantic/Azores               |<-01>1<+00>,M3.5.0/0,M10.5.0/1              |
|Atlantic/Bermuda              |AST4ADT,M3.2.0,M11.1.0                      |
|Atlantic/Canary               |WET0WEST,M3.5.0/1,M10.5.0                   |
|Atlantic/Cape_Verde           |<-01>1                                      |
|Atlantic/Faroe                |WET0WEST,M3.5.0/1,M10.5.0                   |
|Atlantic/Madeira              |WET0WEST,M3.5.0/1,M10.5.0                   |
|Atlantic/Reykjavik            |GMT0                                        |
|Atlantic/South_Georgia        |<-02>2                                      |
|Atlantic/Stanley              |<-03>3                                      |
|Atlantic/St_Helena            |GMT0                                        |
|Australia/Adelaide            |ACST-9:30ACDT,M10.1.0,M4.1.0/3              |
|Australia/Brisbane            |AEST-10                                     |
|Australia/Broken_Hill         |ACST-9:30ACDT,M10.1.0,M4.1.0/3              |
|Australia/Currie              |AEST-10AEDT,M10.1.0,M4.1.0/3                |
|Australia/Darwin              |ACST-9:30                                   |
|Australia/Eucla               |<+0845>-8:45                                |
|Australia/Hobart              |AEST-10AEDT,M10.1.0,M4.1.0/3                |
|Australia/Lindeman            |AEST-10                                     |
|Australia/Lord_Howe           |<+1030>-10:30<+11>-11,M10.1.0,M4.1.0        |
|Australia/Melbourne           |AEST-10AEDT,M10.1.0,M4.1.0/3                |
|Australia/Perth               |AWST-8                                      |
|Australia/Sydney              |AEST-10AEDT,M10.1.0,M4.1.0/3                |
|Europe/Amsterdam              |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Andorra                |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Astrakhan              |<+04>-4                                     |
|Europe/Athens                 |EET-2EEST,M3.5.0/3,M10.5.0/4                |
|Europe/Belgrade               |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Berlin                 |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Bratislava             |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Brussels               |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Bucharest              |EET-2EEST,M3.5.0/3,M10.5.0/4                |
|Europe/Budapest               |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Busingen               |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Chisinau               |EET-2EEST,M3.5.0,M10.5.0/3                  |
|Europe/Copenhagen             |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Dublin                 |IST-1GMT0,M10.5.0,M3.5.0/1                  |
|Europe/Gibraltar              |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Guernsey               |GMT0BST,M3.5.0/1,M10.5.0                    |
|Europe/Helsinki               |EET-2EEST,M3.5.0/3,M10.5.0/4                |
|Europe/Isle_of_Man            |GMT0BST,M3.5.0/1,M10.5.0                    |
|Europe/Istanbul               |<+03>-3                                     |
|Europe/Jersey                 |GMT0BST,M3.5.0/1,M10.5.0                    |
|Europe/Kaliningrad            |EET-2                                       |
|Europe/Kiev                   |EET-2EEST,M3.5.0/3,M10.5.0/4                |
|Europe/Kirov                  |MSK-3                                       |
|Europe/Lisbon                 |WET0WEST,M3.5.0/1,M10.5.0                   |
|Europe/Ljubljana              |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/London                 |GMT0BST,M3.5.0/1,M10.5.0                    |
|Europe/Luxembourg             |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Madrid                 |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Malta                  |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Mariehamn              |EET-2EEST,M3.5.0/3,M10.5.0/4                |
|Europe/Minsk                  |<+03>-3                                     |
|Europe/Monaco                 |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Moscow                 |MSK-3                                       |
|Europe/Oslo                   |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Paris                  |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Podgorica              |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Prague                 |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Riga                   |EET-2EEST,M3.5.0/3,M10.5.0/4                |
|Europe/Rome                   |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Samara                 |<+04>-4                                     |
|Europe/San_Marino             |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Sarajevo               |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Saratov                |<+04>-4                                     |
|Europe/Simferopol             |MSK-3                                       |
|Europe/Skopje                 |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Sofia                  |EET-2EEST,M3.5.0/3,M10.5.0/4                |
|Europe/Stockholm              |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Tallinn                |EET-2EEST,M3.5.0/3,M10.5.0/4                |
|Europe/Tirane                 |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Ulyanovsk              |<+04>-4                                     |
|Europe/Uzhgorod               |EET-2EEST,M3.5.0/3,M10.5.0/4                |
|Europe/Vaduz                  |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Vatican                |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Vienna                 |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Vilnius                |EET-2EEST,M3.5.0/3,M10.5.0/4                |
|Europe/Volgograd              |MSK-3                                       |
|Europe/Warsaw                 |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Zagreb                 |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Europe/Zaporozhye             |EET-2EEST,M3.5.0/3,M10.5.0/4                |
|Europe/Zurich                 |CET-1CEST,M3.5.0,M10.5.0/3                  |
|Indian/Antananarivo           |EAT-3                                       |
|Indian/Chagos                 |<+06>-6                                     |
|Indian/Christmas              |<+07>-7                                     |
|Indian/Cocos                  |<+0630>-6:30                                |
|Indian/Comoro                 |EAT-3                                       |
|Indian/Kerguelen              |<+05>-5                                     |
|Indian/Mahe                   |<+04>-4                                     |
|Indian/Maldives               |<+05>-5                                     |
|Indian/Mauritius              |<+04>-4                                     |
|Indian/Mayotte                |EAT-3                                       |
|Indian/Reunion                |<+04>-4                                     |
|Pacific/Apia                  |<+13>-13                                    |
|Pacific/Auckland              |NZST-12NZDT,M9.5.0,M4.1.0/3                 |
|Pacific/Bougainville          |<+11>-11                                    |
|Pacific/Chatham               |<+1245>-12:45<+1345>,M9.5.0/2:45,M4.1.0/3:45|
|Pacific/Chuuk                 |<+10>-10                                    |
|Pacific/Easter                |<-06>6<-05>,M9.1.6/22,M4.1.6/22             |
|Pacific/Efate                 |<+11>-11                                    |
|Pacific/Enderbury             |<+13>-13                                    |
|Pacific/Fakaofo               |<+13>-13                                    |
|Pacific/Fiji                  |<+12>-12                                    |
|Pacific/Funafuti              |<+12>-12                                    |
|Pacific/Galapagos             |<-06>6                                      |
|Pacific/Gambier               |<-09>9                                      |
|Pacific/Guadalcanal           |<+11>-11                                    |
|Pacific/Guam                  |ChST-10                                     |
|Pacific/Honolulu              |HST10                                       |
|Pacific/Kiritimati            |<+14>-14                                    |
|Pacific/Kosrae                |<+11>-11                                    |
|Pacific/Kwajalein             |<+12>-12                                    |
|Pacific/Majuro                |<+12>-12                                    |
|Pacific/Marquesas             |<-0930>9:30                                 |
|Pacific/Midway                |SST11                                       |
|Pacific/Nauru                 |<+12>-12                                    |
|Pacific/Niue                  |<-11>11                                     |
|Pacific/Norfolk               |<+11>-11<+12>,M10.1.0,M4.1.0/3              |
|Pacific/Noumea                |<+11>-11                                    |
|Pacific/Pago_Pago             |SST11                                       |
|Pacific/Palau                 |<+09>-9                                     |
|Pacific/Pitcairn              |<-08>8                                      |
|Pacific/Pohnpei               |<+11>-11                                    |
|Pacific/Port_Moresby          |<+10>-10                                    |
|Pacific/Rarotonga             |<-10>10                                     |
|Pacific/Saipan                |ChST-10                                     |
|Pacific/Tahiti                |<-10>10                                     |
|Pacific/Tarawa                |<+12>-12                                    |
|Pacific/Tongatapu             |<+13>-13                                    |
|Pacific/Wake                  |<+12>-12                                    |
|Pacific/Wallis                |<+12>-12                                    |
|Etc/GMT                       |GMT0                                        |
|Etc/GMT-0                     |GMT0                                        |
|Etc/GMT-1                     |<+01>-1                                     |
|Etc/GMT-2                     |<+02>-2                                     |
|Etc/GMT-3                     |<+03>-3                                     |
|Etc/GMT-4                     |<+04>-4                                     |
|Etc/GMT-5                     |<+05>-5                                     |
|Etc/GMT-6                     |<+06>-6                                     |
|Etc/GMT-7                     |<+07>-7                                     |
|Etc/GMT-8                     |<+08>-8                                     |
|Etc/GMT-9                     |<+09>-9                                     |
|Etc/GMT-10                    |<+10>-10                                    |
|Etc/GMT-11                    |<+11>-11                                    |
|Etc/GMT-12                    |<+12>-12                                    |
|Etc/GMT-13                    |<+13>-13                                    |
|Etc/GMT-14                    |<+14>-14                                    |
|Etc/GMT0                      |GMT0                                        |
|Etc/GMT+0                     |GMT0                                        |
|Etc/GMT+1                     |<-01>1                                      |
|Etc/GMT+2                     |<-02>2                                      |
|Etc/GMT+3                     |<-03>3                                      |
|Etc/GMT+4                     |<-04>4                                      |
|Etc/GMT+5                     |<-05>5                                      |
|Etc/GMT+6                     |<-06>6                                      |
|Etc/GMT+7                     |<-07>7                                      |
|Etc/GMT+8                     |<-08>8                                      |
|Etc/GMT+9                     |<-09>9                                      |
|Etc/GMT+10                    |<-10>10                                     |
|Etc/GMT+11                    |<-11>11                                     |
|Etc/GMT+12                    |<-12>12                                     |
|Etc/UCT                       |UTC0                                        |
|Etc/UTC                       |UTC0                                        |
|Etc/Greenwich                 |GMT0                                        |
|Etc/Universal                 |UTC0                                        |
|Etc/Zulu                      |UTC0                                        |
