# Sistema de parâmetros

## Sistema

### Ativar campainha piezo

Uma campainha piezoelétrica pode ser ativada com este parâmetro. Por padrão, a campainha está conectada ao GPIO D8. Isto corresponde ao layout do quadro 2.1. Os alarmes sonoros apoiam o processo de mosturação com tons de sinal.

### Ativar brindes e alarmes de mp3

Brindes são pequenas mensagens push. Eles aparecem como um bloco no canto inferior direito do navegador. Exceto pelas mensagens de erro, os brindes são ocultados automaticamente após alguns segundos. Há mensagens de brinde sobre o processo de mosturação, mensagens de brinde do sistema e alarmes de mp3 sem texto. A propriedade Toasts possui 3 opções: Off, On e Error. A opção “Desligado” desliga as mensagens de alarme. A opção "Ligado" envia todas as mensagens brindes e alarmes mp3. A opção "somente erros" envia mensagens brinde apenas em caso de erros do sistema, mas não mensagens sobre o processo de mashing.

O Toasts suporta saída de áudio. Isto significa que as torradas são exibidas não apenas visualmente, mas também acusticamente durante o processo de mosturação. O firmware contém os arquivos de áudio info.mp3, Success.mp3, warning.mp3 e error.mp3. Os arquivos de áudio (mp3) podem ser trocados. Apenas o nome deve permanecer o mesmo. A reprodução automática de áudio deve estar ativada no navegador para o endereço IP da máquina noiva.

o áudio mp3 requer um "gesto do usuário" em dispositivos iOS, como um clique ou evento de toque. Basta clicar em um elemento do site e o áudio mp3 será emitido. Sem o gesto do usuário, a saída de áudio é bloqueada pelo sistema iOS_.

Todos os principais navegadores, como MS Edge, Chrome ou Firefox, têm opções para reprodução automática de mídia nas configurações de permissões do site. Recomenda-se adicionar o site de Brautomat à lista de permissões. Na imagem a seguir, a página da web de Brautomat foi adicionada com o nome mDNS no navegador Microsoft Edge. Alternativamente, o endereço IP também pode ser inserido

![mídia](/docs/img/autoplay-media.jpg)

Com esta configuração, os alarmes mp3 podem substituir uma campainha piezoelétrica.

### Ativar tela sensível ao toque

Um display Nextion HMI de 3,5 polegadas pode ser operado com este parâmetro. O Brautomat oferece três visualizações

#### Visão geral da caldeira

Nesta visualização, o IDS e a pós-fundição são exibidos com as temperaturas reais e alvo. O descanso atual e o próximo são exibidos com duração.
O comprimento da barra vermelha sob a visualização de IDS e reformulação mostra o tempo de descanso decorrido.

![Exibição](/docs/img/kettlepage-sm.jpg)

#### MashBud

Esta vista mostra a primeira placa. O tempo de descanso atual é exibido com as temperaturas reais e alvo, bem como o tempo restante atual. O comprimento da barra vermelha sob as temperaturas mostra o progresso do descanso atual. O símbolo à direita do tempo restante mostra se o próximo intervalo começará automaticamente (autonext): verde significa automático, vermelho significa intervalo. Além disso, o deck do controlador é exibido com as funções correspondentes.

![Exibição](/docs/img/brewpage-sm.jpg)

#### Modo manual (somente para GGM IDS2)

Esta visualização é usada para controlar manualmente a placa de indução. No modo manual, estão disponíveis 6 níveis de potência: 0, 20, 40, 60, 80 e 100% de potência. O modo manual é adequado apenas para o GGM IDS2. (IDS1 não testado!)

![Exibição](/docs/img/induction-mode-sm.jpg)

Um display é opcional. O Brautomat suporta apenas telas sensíveis ao toque Nextion HMI de 3,5 polegadas (séries Basic e Discovery).

A exibição é configurada através de um cartão SD. O arquivo TFT da pasta Info que corresponde ao display é copiado para o cartão SD e inserido no display. Assim que o display for ligado, a configuração começa. O processo leva cerca de um minuto. O progresso é mostrado no display. Assim que a configuração for concluída, o display será desligado e o cartão SD será removido. O display agora está pronto para uso.

Deve-se notar que SDA, SCL noOs PINs D1, D2 devem ser operados.

### Sensores PT100x MAX31865 Ativar amplificador

Se forem utilizados sensores analógicos PT100x, esta chave deverá ser ativada. Um sensor analógico PT100x requer um conversor RTD para digital para conectar a um microcontrolador ESP. Um amplificador MAX31865 é um conversor digital RTD na forma de uma pequena placa adicional.

### Habilitar mDNS

O DNS multicast é usado para resolver nomes de host para endereços IP em redes pequenas. O mDNS torna possível usar um nome "falante" para o Brautomat. O padrão é o nome mDNS “Brautomat”. A interface web pode ser acessada através do endereço <http://Brautomat.local>. O nome do host é limitado a no máximo 15 caracteres.

Nota: O nome mDNS é configurado sem protocolo (http://) e sem domínio de nível superior (.local) nas configurações do sistema (Brautomat).

### Painel

Os elementos podem ser facilmente mostrados e ocultados através do painel. Por exemplo, se nenhuma reformulação for usada, o elemento Reformulação deverá ser desativado para o painel. Itens desativados reduzem o tráfego.

### Registro

O registro só é ativado na versão de desenvolvimento. Na guia Logging, a saída de log serial pode ser ativada para todos os módulos. Os níveis Error, Info, Verbose e Off estão disponíveis para registro. É necessário um monitor serial, por ex. com o Arduino IDE, VSCODE etc. A taxa de transmissão é 115200.

O modo de erro gera apenas erros.

O modo Info contém erros e também gera informações sobre a configuração no monitor serial.

O modo detalhado inclui erros e informações e também gera informações sobre transferência de dados (transmissões SSE).

### Servidor de horário NTP

O Network Time Protocol (NTP) sincroniza regularmente a hora com um servidor de horário. O servidor de horário padrão é europe.pool.ntp.org. Se houver um servidor de horário na rede local, ele deverá ser usado. Se um servidor de horário local estiver configurado, o Brautomat não requer acesso à Internet. Por exemplo, fritz.box ou o endereço IP do gateway padrão.

### Fuso horário NTP

O fuso horário é determinado a partir de uma tabela. O fuso horário Europa Berlim está predefinido:

<CET-1CEST,M3.5.0,M10.5.0/3>

O fuso horário é usado para determinar a hora correta, incluindo o horário de verão e inverno.

#### Tabela de fuso horário

|África/Abidjan |GMT0 |
|--------------------------------|------------------------------------------------|
|África/Acra |GMT0 |
|África/Addis_Abeba |EAT-3 |
|África/Argel |CET-1 |
|África/Asmara |EAT-3 |
|África/Bamako |GMT0 |
|África/Bangui |WAT-1 |
|África/Banjul |GMT0 |
|África/Bissau |GMT0 |
|África/Blantyre |CAT-2 |
|África/Brazzaville |WAT-1 |
|África/Bujumbura |CAT-2 |
|África/Cairo |EET-2EEST,M4.5.5/0,M10.5.4/24 |
|África/Casablanca |<+01>-1 |
|África/Ceuta |CET-1CEST,M3.5.0,M10.5.0/3 |
|África/Conacri |GMT0 |
|África/Dakar |GMT0 |
|África/Dar_es_Salaam |EAT-3 |
|África/Djibuti |EAT-3 |
|África/Douala |WAT-1 |
|África/El_Aaiun |<+01>-1 |
|África/Freetown |GMT0 |
|África/Gaborone |CAT-2 |
|África/Harare |CAT-2 |
|África/Joanesburgo |SAST-2 |
|África/Juba |CAT-2 |
|África/Kampala |EAT-3 |
|África/Cartum |CAT-2 |
|África/Kigali |CAT-2 |
|África/Kinshasa |WAT-1 |
|África/Lagos |WAT-1 |
|África/Libreville |WAT-1 |
|África/Lomé |GMT0 |
|África/Luanda |WAT-1 |
|África/Lubumbashi |CAT-2 |
|África/Lusaka |CAT-2 |
|África/Malabo |WAT-1 |
|África/Maputo |CAT-2 |
|África/Maseru |SAST-2 |
|África/Mbabane |SAST-2 |
|África/Mogadíscio |EAT-3 |
|África/Monróvia |GMT0 |
|África/Nairóbi |EAT-3 |
|África/Ndjamena |WAT-1 |
|África/Niamey |WAT-1 |
|África/Nouakchott |GMT0 |
|África/Ouagadougou |GMT0 |
|África/Porto-Novo |WAT-1 |
|África/São_Tomé |GMT0 |
|África/Trípoli |EET-2 |
|África/Túnis |CET-1 |
|África/Windhoek |CAT-2 |
|América/Adak |HST10HDT,M3.2.0,M11.1.0 |
|América/Ancoragem |AKST9AKDT,M3.2.0,M11.1.0 |
|América/Anguila |AST4 |
|América/Antígua |AST4 |
|América/Araguaína |<-03>3 |
|América/Argentina/Buenos_Aires|<-03>3 |
|América/Argentina/Catamarca |<-03>3 |
|América/Argentina/Córdoba |<-03>3 |
|América/Argentina/Jujuy |<-03>3 |
|América/Argentina/La_Rioja |<-03>3 |
|América/Argentina/Mendoza |<-03>3 |
|América/Argentina/Rio_Gallegos|<-03>3 |
|América/Argentina/Salta |<-03>3 |
|América/Argentina/San_Juan |<-03>3 |
|América/Argentina/San_Luis |<-03>3 |
|América/Argentina/Tucumán |<-03>3 |
|América/Argentina/Ushuaia |<-03>3 |
|América/Aruba |AST4 |
|América/Assunção|<-04>4<-03>,M10.1.0/0,M3.4.0/0 |
|América/Atikokan |EST5 |
|América/Bahia |<-03>3 |
|América/Bahia_Banderas |CST6 |
|América/Barbados |AST4 |
|América/Belém |<-03>3 |
|América/Belize |CST6 |
|América/Blanc-Sablon |AST4 |
|América/Boa_Vista |<-04>4 |
|América/Bogotá |<-05>5 |
|América/Boise |MST7MDT,M3.2.0,M11.1.0 |
|América/Cambridge_Bay |MST7MDT,M3.2.0,M11.1.0 |
|América/Campo_Grande |<-04>4 |
|América/Cancún |EST5 |
|América/Caracas |<-04>4 |
|América/Caiena |<-03>3 |
|América/Cayman |EST5 |
|América/Chicago |CST6CDT,M3.2.0,M11.1.0 |
|América/Chihuahua |CST6 |
|América/Costa_Rica |CST6 |
|América/Creston |MST7 |
|América/Cuiabá |<-04>4 |
|América/Curaçao |AST4 |
|América/Dinamarca |GMT0 |
|América/Dawson |MST7 |
|América/Dawson_Creek |MST7 |
|América/Denver |MST7MDT,M3.2.0,M11.1.0 |
|América/Detroit |EST5EDT,M3.2.0,M11.1.0 |
|América/Domínica |AST4 |
|América/Edmonton |MST7MDT,M3.2.0,M11.1.0 |
|América/Eirunepé |<-05>5 |
|América/El_Salvador |CST6 |
|América/Fortaleza |<-03>3 |
|América/Fort_Nelson |MST7 |
|América/Glace_Bay |AST4ADT,M3.2.0,M11.1.0 |
|América/Godthab |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|América/Goose_Bay |AST4ADT,M3.2.0,M11.1.0 |
|América/Grand_Turk |EST5EDT,M3.2.0,M11.1.0 |
|América/Granada |AST4 |
|América/Guadalupe |AST4 |
|América/Guatemala |CST6 |
|América/Guayaquil |<-05>5 |
|América/Guiana |<-04>4 |
|América/Halifax |AST4ADT,M3.2.0,M11.1.0 |
|América/Havana |CST5CDT,M3.2.0/0,M11.1.0/1 |
|América/Hermosillo |MST7 |
|América/Indiana/Indianápolis |EST5EDT,M3.2.0,M11.1.0 |
|América/Indiana/Knox |CST6CDT,M3.2.0,M11.1.0 |
|América/Indiana/Marengo |EST5EDT,M3.2.0,M11.1.0 |
|América/Indiana/Petersburgo |EST5EDT,M3.2.0,M11.1.0 |
|América/Indiana/Tell_City |CST6CDT,M3.2.0,M11.1.0 |
|América/Indiana/Vevay |EST5EDT,M3.2.0,M11.1.0 |
|América/Indiana/Vincennes |EST5EDT,M3.2.0,M11.1.0 |
|América/Indiana/Winamac |EST5EDT,M3.2.0,M11.1.0 |
|América/Inuvik |MST7MDT,M3.2.0,M11.1.0 |
|América/Iqaluit |EST5EDT,M3.2.0,M11.1.0 |
|América/Jamaica |EST5 |
|América/Junho |AKST9AKDT,M3.2.0,M11.1.0 |
|América/Kentucky/Louisville |EST5EDT,M3.2.0,M11.1.0 |
|América/Kentucky/Monticello |EST5EDT,M3.2.0,M11.1.0 |
|América/Kralendijk |AST4 |
|América/La_Paz |<-04>4 |
|América/Lima |<-05>5 |
|América/Los_Angeles |PST8PDT,M3.2.0,M11.1.0 |
|América/Lower_Princes |AST4 |
|América/Maceió |<-03>3 |
|América/Manágua |CST6 |
|América/Manaus |<-04>4 |
|América/Marigot |AST4 |
|América/Martinica |AST4 |
|América/Matamoros |CST6CDT,M3.2.0,M11.1.0 |
|América/Mazatlán |MST7 |
|América/Menominee |CST6CDT,M3.2.0,M11.1.0 |
|América/Mérida |CST6 |
|América/Metlakatla |AKST9AKDT,M3.2.0,M11.1.0 |
|América/Cidade_México |CST6 |
|América/Miquelon |<-03>3<-02>,M3.2.0,M11.1.0 |
|América/Moncton |AST4ADT,M3.2.0,M11.1.0 |
|América/Monterrey |CST6 |
|América/Montevidéu |<-03>3 |
|América/Montreal |EST5EDT,M3.2.0,M11.1.0 |
|América/Montserrat |AST4 |
|América/Nassau |EST5EDT,M3.2.0,M11.1.0 |
|América/Nova_Iorque |EST5EDT,M3.2.0,M11.1.0 |
|América/Nipigon |EST5EDT,M3.2.0,M11.1.0 |
|América/Nome |AKST9AKDT,M3.2.0,M11.1.0 |
|América/Noronha |<-02>2 |
|América/Dakota_Norte/Beulah |CST6CDT,M3.2.0,M11.1.0 |
|América/Dakota_Norte/Centro |CST6CDT,M3.2.0,M11.1.0 |
|América/North_Dakota/New_Salem|CST6CDT,M3.2.0,M11.1.0 |
|América/Nuuk |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|América/Ojinaga |CST6CDT,M3.2.0,M11.1.0 |
|América/Panamá |EST5 |
|América/Pangnirtung |EST5EDT,M3.2.0,M11.1.0 |
|América/Paramaribo |<-03>3 |
|América/Fênix |MST7 |
|América/Porto Príncipe |EST5EDT,M3.2.0,M11.1.0 |
|América/Porto_de_Espanha |AST4 |
|América/Porto_Velho |<-04>4 |
|América/Porto_Rico |AST4 |
|América/Punta_Arenas |<-03>3 |
|América/Rainy_River |CST6CDT,M3.2.0,M11.1.0 |
|América/Rankin_Inlet |CST6CDT,M3.2.0,M11.1.0|
|América/Recife |<-03>3 |
|América/Regina |CST6 |
|América/Resoluta |CST6CDT,M3.2.0,M11.1.0 |
|América/Rio_Branco |<-05>5 |
|América/Santarém |<-03>3 |
|América/Santiago |<-04>4<-03>,M9.1.6/24,M4.1.6/24 |
|América/Santo_Domingo |AST4 |
|América/São_Paulo |<-03>3 |
|América/Pontuaçãobysund |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|América/Sitka |AKST9AKDT,M3.2.0,M11.1.0 |
|América/St_Barthelemy |AST4 |
|América/St_Johns |NST3:30NDT,M3.2.0,M11.1.0 |
|América/St_Kitts |AST4 |
|América/St_Lucia |AST4 |
|América/St_Thomas |AST4 |
|América/St_Vincent |AST4 |
|América/Swift_Current |CST6 |
|América/Tegucigalpa |CST6 |
|América/Thule |AST4ADT,M3.2.0,M11.1.0 |
|América/Thunder_Bay |EST5EDT,M3.2.0,M11.1.0 |
|América/Tijuana |PST8PDT,M3.2.0,M11.1.0 |
|América/Toronto |EST5EDT,M3.2.0,M11.1.0 |
|América/Tortola |AST4 |
|América/Vancouver |PST8PDT,M3.2.0,M11.1.0 |
|América/Cavalo Branco |MST7 |
|América/Winnipeg |CST6CDT,M3.2.0,M11.1.0 |
|América/Yakutat |AKST9AKDT,M3.2.0,M11.1.0 |
|América/Faca Amarela |MST7MDT,M3.2.0,M11.1.0 |
|Antártica/Casey |<+08>-8 |
|Antártica/Davis |<+07>-7 |
|Antártica/DumontDUrville |<+10>-10 |
|Antártica/Macquarie |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Antártica/Mawson |<+05>-5 |
|Antártica/McMurdo |NZST-12NZDT,M9.5.0,M4.1.0/3 |
|Antártica/Palmer |<-03>3 |
|Antártica/Rothera |<-03>3 |
|Antártica/Syowa |<+03>-3 |
|Antártica/Troll |<+00>0<+02>-2,M3.5.0/1,M10.5.0/3 |
|Antártica/Vostok |<+05>-5 |
|Ártico/Longyearbyen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Ásia/Áden |<+03>-3 |
|Ásia/Almaty |<+05>-5 |
|Ásia/Amã |<+03>-3 |
|Ásia/Anadyr |<+12>-12 |
|Ásia/Aqtau |<+05>-5 |
|Ásia/Aqtobe |<+05>-5 |
|Ásia/Ashgabat |<+05>-5 |
|Ásia/Atyrau |<+05>-5 |
|Ásia/Bagdá |<+03>-3 |
|Ásia/Bahrein |<+03>-3 |
|Ásia/Baku |<+04>-4 |
|Ásia/Banguecoque|<+07>-7 |
|Ásia/Barnaul |<+07>-7 |
|Ásia/Beirute |EET-2EEST,M3.5.0/0,M10.5.0/0 |
|Ásia/Bishkek |<+06>-6 |
|Ásia/Brunei |<+08>-8 |
|Ásia/Chita |<+09>-9 |
|Ásia/Choibalsan |<+08>-8 |
|Ásia/Colombo |<+0530>-5:30 |
|Ásia/Damasco |<+03>-3 |
|Ásia/Daca |<+06>-6 |
|Ásia/Díli |<+09>-9 |
|Ásia/Dubai |<+04>-4 |
|Ásia/Dushanbe |<+05>-5 |
|Ásia/Famagusta |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Ásia/Gaza |EET-2EEST,M3.4.4/50,M10.4.4/50 |
|Ásia/Hebron |EET-2EEST,M3.4.4/50,M10.4.4/50 |
|Ásia/Ho_Chi_Minh |<+07>-7 |
|Ásia/Hong_Kong |HKT-8 |
|Ásia/Hovd |<+07>-7 |
|Ásia/Irkutsk |<+08>-8 |
|Ásia/Jacarta |WIB-7 |
|Ásia/Jayapura |WIT-9 |
|Ásia/Jerusalém |IST-2IDT,M3.4.4/26,M10.5.0 |
|Ásia/Cabul |<+0430>-4:30 |
|Ásia/Kamchatka |<+12>-12 |
|Ásia/Carachi |PKT-5 |
|Ásia/Catmandu |<+0545>-5:45 |
|Ásia/Khandyga |<+09>-9 |
|Ásia/Calcutá |IST-5:30 |
|Ásia/Krasnoyarsk |<+07>-7 |
|Ásia/Kuala_Lumpur |<+08>-8 |
|Ásia/Kuching |<+08>-8 |
|Ásia/Kuwait |<+03>-3 |
|Ásia/Macau |CST-8 |
|Ásia/Magadan |<+11>-11 |
|Ásia/Makassar |WITA-8 |
|Ásia/Manila |PST-8 |
|Ásia/Mascate |<+04>-4 |
|Ásia/Nicósia |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Ásia/Novokuznetsk |<+07>-7 |
|Ásia/Novosibirsk |<+07>-7 |
|Ásia/Omsk |<+06>-6 |
|Ásia/Oral |<+05>-5 |
|Ásia/Phnom_Penh |<+07>-7 |
|Ásia/Pontianak |WIB-7 |
|Ásia/Pyongyang |KST-9 |
|Ásia/Catar |<+03>-3 |
|Ásia/Qyzylorda |<+05>-5 |
|Ásia/Riade |<+03>-3 |
|Ásia/Sakhalin |<+11>-11 |
|Ásia/Samarcanda |<+05>-5 |
|Ásia/Seul |KST-9|
|Ásia/Xangai |CST-8 |
|Ásia/Singapura |<+08>-8 |
|Ásia/Srednekolymsk |<+11>-11 |
|Ásia/Taipei |CST-8 |
|Ásia/Tashkent |<+05>-5 |
|Ásia/Tbilisi |<+04>-4 |
|Ásia/Teerã |<+0330>-3:30 |
|Ásia/Timbu |<+06>-6 |
|Ásia/Tóquio |JST-9 |
|Ásia/Tomsk |<+07>-7 |
|Ásia/Ulaanbaatar |<+08>-8 |
|Ásia/Urumqi |<+06>-6 |
|Ásia/Ust-Nera |<+10>-10 |
|Ásia/Vienciana |<+07>-7 |
|Ásia/Vladivostok |<+10>-10 |
|Ásia/Yakutsk |<+09>-9 |
|Ásia/Rangum |<+0630>-6:30 |
|Ásia/Ecaterimburgo |<+05>-5 |
|Ásia/Yerevan |<+04>-4 |
|Atlântico/Açores |<-01>1<+00>,M3.5.0/0,M10.5.0/1 |
|Atlântico/Bermudas |AST4ADT,M3.2.0,M11.1.0 |
|Atlântico/Canárias |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlântico/Cabo Verde |<-01>1 |
|Atlântico/Faroé |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlântico/Madeira |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlântico/Reykjavik |GMT0 |
|Atlântico/Sul_Geórgia |<-02>2 |
|Atlântico/Stanley |<-03>3 |
|Atlântico/Santa Helena |GMT0 |
|Austrália/Adelaide |ACST-9:30ACDT,M10.1.0,M4.1.0/3 |
|Austrália/Brisbane |AEST-10 |
|Austrália/Broken_Hill |ACST-9:30ACDT,M10.1.0,M4.1.0/3 |
|Austrália/Currie |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Austrália/Darwin |ACST-9:30 |
|Austrália/Eucla |<+0845>-8:45 |
|Austrália/Hobart |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Austrália/Lindeman |AEST-10 |
|Austrália/Lord_Howe |<+1030>-10:30<+11>-11,M10.1.0,M4.1.0 |
|Austrália/Melbourne |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Austrália/Perth |AWST-8 |
|Austrália/Sydney |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Europa/Amsterdã |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Andorra |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Astracã |<+04>-4 |
|Europa/Atenas |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Belgrado |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Berlim |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Bratislava |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Bruxelas |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Bucareste |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Budapeste |CET-1CEST,M3.5.0,M10.5.0/3|
|Europa/Busingen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Chisinau |EET-2EEST,M3.5.0,M10.5.0/3 |
|Europa/Copenhague |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Dublin |IST-1GMT0,M10.5.0,M3.5.0/1 |
|Europa/Gibraltar |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Guernsey |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Helsínquia |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Ilha_de_Man |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Istambul |<+03>-3 |
|Europa/Jersey |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Kaliningrado |EET-2 |
|Europa/Kiev |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Kirov |MSK-3 |
|Europa/Lisboa |WET0WEST,M3.5.0/1,M10.5.0 |
|Europa/Liubliana |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Londres |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Luxemburgo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Madri |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Malta |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Mariehamn |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Minsk |<+03>-3 |
|Europa/Mônaco |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Moscou |MSK-3 |
|Europa/Oslo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Paris |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Podgorica |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Praga |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Riga |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Roma |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Samara |<+04>-4 |
|Europa/San_Marino |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Sarajevo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Saratov |<+04>-4 |
|Europa/Simferopol |MSK-3 |
|Europa/Skopje |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Sófia |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Estocolmo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Tallinn |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Tirane |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Ulyanovsk |<+04>-4 |
|Europa/Uzhgorod |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Vaduz |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Vaticano |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Viena |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Vilnius |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Volgogrado |MSK-3 |
|Europa/Varsóvia |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Zagreb |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Zaporozhye |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Zurique |CET-1CEST,M3.5.0,M10.5.0/3 |
|Índia/Antananarivo |EAT-3 |
|Indiano/Chagos |<+06>-6 |
|Indiano/Natal |<+07>-7 |
|Indiano/Cocos |<+0630>-6:30 |
|Índia/Comores |EAT-3 |
|Índia/Kerguelen |<+05>-5 |
|Índia/Mahe |<+04>-4 |
|Índia/Maldivas |<+05>-5 |
|Índia/Maurício |<+04>-4 |
|Índia/Mayotte |EAT-3 |
|Índia/Reunião |<+04>-4 |
|Pacífico/Apia |<+13>-13 |
|Pacífico/Auckland |NZST-12NZDT,M9.5.0,M4.1.0/3 |
|Pacífico/Bougainville |<+11>-11 |
|Pacífico/Chatham |<+1245>-12:45<+1345>,M9.5.0/2:45,M4.1.0/3:45|
|Pacífico/Chuuk |<+10>-10 |
|Pacífico/Páscoa |<-06>6<-05>,M9.1.6/22,M4.1.6/22 |
|Pacífico/Efate |<+11>-11 |
|Pacífico/Enderbury |<+13>-13 |
|Pacífico/Fakaofo |<+13>-13 |
|Pacífico/Fiji |<+12>-12 |
|Pacífico/Funafuti |<+12>-12 |
|Pacífico/Galápagos |<-06>6 |
|Pacífico/Gambier |<-09>9 |
|Pacífico/Guadalcanal |<+11>-11 |
|Pacífico/Guam |ChST-10 |
|Pacífico/Honolulu |HST10 |
|Pacífico/Kiritimati |<+14>-14 |
|Pacífico/Kosrae |<+11>-11 |
|Pacífico/Kwajalein |<+12>-12 |
|Pacífico/Majuro |<+12>-12 |
|Pacífico/Marquesas |<-0930>9:30 |
|Pacífico/Midway |SST11 |
|Pacífico/Nauru |<+12>-12 |
|Pacífico/Niue |<-11>11 |
|Pacífico/Norfolk |<+11>-11<+12>,M10.1.0,M4.1.0/3 |
|Pacífico/Nouméa |<+11>-11 |
|Pacífico/Pago_Pago |SST11 |
|Pacífico/Palau |<+09>-9 |
|Pacífico/Pitcairn |<-08>8 |
|Pacífico/Pohnpei |<+11>-11 |
|Pacífico/Port_Moresby |<+10>-10 |
|Pacífico/Rarotonga |<-10>10 |
|Pacífico/Saipan |ChST-10 |
|Pacífico/Taiti |<-10>10 |
|Pacífico/Tarawa |<+12>-12 |
|Pacífico/Tongatapu |<+13>-13 |
|Pacífico/Despertar |<+12>-12 |
|Pacífico/Wallis |<+12>-12 |
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
