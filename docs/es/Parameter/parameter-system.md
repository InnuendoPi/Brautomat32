# Sistema de parámetros

## Sistema

### Activar zumbador piezoeléctrico

Con este parámetro se puede activar un zumbador piezoeléctrico. Por defecto, el zumbador está conectado a GPIO D8. Esto corresponde al diseño del tablero 2.1. Las alarmas sonoras apoyan el proceso de maceración con señales acústicas.

### Activar brindis y alarmas mp3

Los brindis son pequeños mensajes push. Aparecen como un mosaico en la parte inferior derecha del navegador. A excepción de los mensajes de error, los brindis se ocultan automáticamente después de unos segundos. Hay mensajes de brindis sobre el proceso de maceración, mensajes de brindis del sistema y alarmas mp3 sin texto. La propiedad Tostadas tiene 3 opciones: Desactivado, Activado y Error. La opción "Off" desactiva los mensajes de alarma. La opción "Activado" envía todos los mensajes de brindis y alarmas mp3. La opción "solo errores" solo envía mensajes de brindis en caso de errores del sistema, pero no mensajes sobre el proceso de maceración.

Toasts admite salida de audio. Esto significa que las tostadas se muestran no sólo visualmente sino también acústicamente durante el proceso de maceración. El firmware contiene los archivos de audio info.mp3, Success.mp3, advertencia.mp3 y error.mp3. Los archivos de audio (mp3) se pueden intercambiar. Sólo el nombre tiene que permanecer igual. La reproducción automática de audio debe estar activada en el navegador para la dirección IP de la máquina de novias.

El audio mp3 requiere un "gesto del usuario" en dispositivos iOS, como un evento de clic o toque. Simplemente haga clic en un elemento del sitio web y se reproducirá el audio mp3. Sin el gesto del usuario, el sistema iOS bloquea la salida de audio.

Todos los navegadores principales, como MS Edge, Chrome o Firefox, tienen opciones para la reproducción automática de medios en la configuración de permisos del sitio web. Se recomienda agregar el sitio web de Brautomat a la lista de permitidos. En la siguiente imagen, la página web de Brautomat se ha agregado con el nombre mDNS en el navegador Microsoft Edge. Alternativamente, también se puede introducir la dirección IP

![medios](/docs/img/autoplay-media.jpg)

Con esta configuración, las alarmas mp3 pueden reemplazar un zumbador piezoeléctrico.

### Activar pantalla táctil

Con este parámetro se puede operar una pantalla Nextion HMI de 3,5 pulgadas. El Brautomat ofrece tres vistas

#### Descripción general de la caldera

En esta vista, el IDS y el post-fundición se muestran con las temperaturas reales y objetivo. El descanso actual y el siguiente se muestran con su duración.
La longitud de la barra roja debajo de la vista IDS y refundida muestra el tiempo de descanso transcurrido.

![Pantalla](/docs/img/kettlepage-sm.jpg)

#### MashBud

Esta vista muestra la primera placa. Se muestra el tiempo de descanso actual con las temperaturas real y objetivo, así como el tiempo restante actual. La longitud de la barra roja debajo de las temperaturas muestra el progreso del descanso actual. El símbolo a la derecha del tiempo restante muestra si el próximo descanso comenzará automáticamente (autonext): verde significa automático, rojo significa descanso. Además, se muestra la plataforma del controlador con las funciones correspondientes.

![Pantalla](/docs/img/brewpage-sm.jpg)

#### Modo manual (sólo para GGM IDS2)

Esta vista se utiliza para controlar manualmente la placa de inducción. En modo manual, están disponibles 6 niveles de potencia: 0, 20, 40, 60, 80 y 100% de potencia. El modo manual sólo es adecuado para el GGM IDS2. (¡IDS1 no probado!)

![Pantalla](/docs/img/induction-mode-sm.jpg)

Una pantalla es opcional. El Brautomat solo admite pantallas táctiles Nextion HMI de 3,5 pulgadas (series Basic y Discovery).

La pantalla se configura mediante una tarjeta SD. El archivo TFT de la carpeta Información que coincide con la pantalla se copia a la tarjeta SD y se inserta en la pantalla. Tan pronto como se enciende la pantalla, comienza la configuración. El proceso dura aproximadamente un minuto. El progreso se muestra en la pantalla. Una vez completada la configuración, la pantalla se apagará y se retirará la tarjeta SD. La pantalla ya está lista para su uso.

Cabe señalar que SDA, SCL en elSe deben utilizar los PIN D1, D2.

### Sensores PT100x MAX31865 Activar amplificador

Si se utilizan sensores analógicos PT100x, este interruptor debe estar activado. Un sensor analógico PT100x requiere un convertidor RTD a digital para conectarse a un microcontrolador ESP. Un amplificador MAX31865 es un conversor digital RTD en forma de una pequeña placa adicional.

### Habilitar mDNS

El DNS de multidifusión se utiliza para resolver nombres de host en direcciones IP en redes pequeñas. mDNS permite utilizar un nombre "parlante" para Brautomat. El valor predeterminado es el nombre mDNS “Brautomat”. Se puede acceder a la interfaz web a través de la dirección <http://Brautomat.local>. El nombre de host está limitado a un máximo de 15 caracteres.

Nota: El nombre mDNS se configura sin protocolo (http://) y sin dominio de nivel superior (.local) en la configuración del sistema (Brautomat).

### Panel de control

Los elementos se pueden mostrar y ocultar fácilmente a través del panel. Por ejemplo, si no se utiliza ninguna refundición, el elemento Recasting debe desactivarse para el tablero. Los elementos deshabilitados reducen el tráfico.

### Registro

El registro sólo se activa en la versión de desarrollo. En la pestaña Registro, la salida de registro en serie se puede activar para todos los módulos. Los niveles Error, Información, Detallado y Desactivado están disponibles para el registro. Se requiere un monitor en serie, p. con Arduino IDE, VSCODE, etc. La velocidad en baudios es 115200.

El modo de error solo genera errores.

El modo Información contiene errores y también genera información sobre la configuración en el monitor serie.

El modo detallado incluye errores e información y también genera información sobre la transferencia de datos (transmisiones SSE).

### Servidor de hora NTP

El protocolo de hora de red (NTP) sincroniza periódicamente la hora con un servidor de hora. El servidor de hora predeterminado es europe.pool.ntp.org. Si hay un servidor de hora en la red local, se debe utilizar este. Si se configura un servidor de hora local, Brautomat no requiere acceso a Internet. Por ejemplo, fritz.box o la dirección IP de la puerta de enlace estándar.

### Zona horaria NTP

La zona horaria se determina a partir de una tabla. La zona horaria Europa Berlín está preestablecida:

<CET-1CEST,M3.5.0,M10.5.0/3>

La zona horaria se utiliza para determinar la hora correcta, incluidos los horarios de verano e invierno.

#### Tabla de zona horaria

|África/Abiyán |GMT0 |
|--------------------------------|------------------------------------------------|
|África/Accra |GMT0 |
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
|África/El Cairo |EET-2EEST,M4.5.5/0,M10.5.4/24 |
|África/Casablanca |<+01>-1 |
|África/Ceuta |CET-1CEST,M3.5.0,M10.5.0/3 |
|África/Conakry |GMT0 |
|África/Dakar |GMT0 |
|África/Dar_es_Salaam |EAT-3 |
|África/Djibouti |EAT-3 |
|África/Douala |WAT-1 |
|África/El_Aaiun |<+01>-1 |
|África/Freetown |GMT0 |
|África/Gaborone |CAT-2 |
|África/Harare |CAT-2 |
|África/Johannesburgo |SAST-2 |
|África/Juba |CAT-2 |
|África/Kampala |EAT-3 |
|África/Jartum |CAT-2 |
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
|África/Mogadiscio |EAT-3 |
|África/Monrovia |GMT0 |
|África/Nairobi |EAT-3 |
|África/Ndjamena |WAT-1 |
|África/Niamey |WAT-1 |
|África/Nouakchot |GMT0 |
|África/Uagadugú |GMT0 |
|África/Porto-Novo |WAT-1 |
|África/Santo_Tomé |GMT0 |
|África/Trípoli |EET-2 |
|África/Túnez |CET-1 |
|África/Windhoek |CAT-2 |
|América/Adak |HST10HDT,M3.2.0,M11.1.0 |
|América/Anchorage |AKST9AKDT,M3.2.0,M11.1.0 |
|América/Anguila |AST4 |
|América/Antigua |AST4 |
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
|América/Asunción|<-04>4<-03>,M10.1.0/0,M3.4.0/0 |
|América/Atikokan |EST5 |
|América/Bahía |<-03>3 |
|América/Bahía_Banderas |CST6 |
|América/Barbados |AST4 |
|América/Belem |<-03>3 |
|América/Belice |CST6 |
|América/Blanc-Sablon |AST4 |
|América/Boa_Vista |<-04>4 |
|América/Bogotá |<-05>5 |
|América/Boise |MST7MDT,M3.2.0,M11.1.0 |
|América/Cambridge_Bay |MST7MDT,M3.2.0,M11.1.0 |
|América/Campo_Grande |<-04>4 |
|América/Cancún |EST5 |
|América/Caracas |<-04>4 |
|América/Cayena |<-03>3 |
|América/Caimán |EST5 |
|América/Chicago |CST6CDT,M3.2.0,M11.1.0 |
|América/Chihuahua |CST6 |
|América/Costa_Rica |CST6 |
|América/Creston |MST7 |
|América/Cuiabá |<-04>4 |
|América/Curazao |AST4 |
|América/Danmarkshavn |GMT0 |
|América/Dawson |MST7 |
|América/Dawson_Creek |MST7 |
|América/Denver |MST7MDT,M3.2.0,M11.1.0 |
|América/Detroit |EST5EDT,M3.2.0,M11.1.0 |
|América/Dominica |AST4 |
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
|América/Guyana |<-04>4 |
|América/Halifax |AST4ADT,M3.2.0,M11.1.0 |
|América/La Habana |CST5CDT,M3.2.0/0,M11.1.0/1 |
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
|América/Juneau |AKST9AKDT,M3.2.0,M11.1.0 |
|América/Kentucky/Louisville |EST5EDT,M3.2.0,M11.1.0 |
|América/Kentucky/Monticello |EST5EDT,M3.2.0,M11.1.0 |
|América/Kralendijk |AST4 |
|América/La_Paz |<-04>4 |
|América/Lima |<-05>5 |
|América/Los_Ángeles |PST8PDT,M3.2.0,M11.1.0 |
|América/Bajos_Príncipes |AST4 |
|América/Maceió |<-03>3 |
|América/Managua |CST6 |
|América/Manaos |<-04>4 |
|América/Marigot |AST4 |
|América/Martinica |AST4 |
|América/Matamoros |CST6CDT,M3.2.0,M11.1.0 |
|América/Mazatlán |MST7 |
|América/Menominee |CST6CDT,M3.2.0,M11.1.0 |
|América/Mérida |CST6 |
|América/Metlakatla |AKST9AKDT,M3.2.0,M11.1.0 |
|América/Ciudad_de_México |CST6 |
|América/Miquelón |<-03>3<-02>,M3.2.0,M11.1.0 |
|América/Moncton |AST4ADT,M3.2.0,M11.1.0 |
|América/Monterrey |CST6 |
|América/Montevideo |<-03>3 |
|América/Montreal |EST5EDT,M3.2.0,M11.1.0 |
|América/Montserrat |AST4 |
|América/Nassau |EST5EDT,M3.2.0,M11.1.0 |
|América/Nueva_York |EST5EDT,M3.2.0,M11.1.0 |
|América/Nipigon |EST5EDT,M3.2.0,M11.1.0 |
|América/Nombre |AKST9AKDT,M3.2.0,M11.1.0 |
|América/Noronha |<-02>2 |
|América/Dakota_del_Norte/Beulah |CST6CDT,M3.2.0,M11.1.0 |
|América/Dakota_del_Norte/Centro |CST6CDT,M3.2.0,M11.1.0 |
|América/Dakota_del_Norte/Nueva_Salem|CST6CDT,M3.2.0,M11.1.0 |
|América/Nuuk |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|América/Ojinaga |CST6CDT,M3.2.0,M11.1.0 |
|América/Panamá |EST5 |
|América/Pangnirtung |EST5EDT,M3.2.0,M11.1.0 |
|América/Paramaribo |<-03>3 |
|América/Phoenix |MST7 |
|América/Puerto Príncipe |EST5EDT,M3.2.0,M11.1.0 |
|América/Puerto_de_España |AST4 |
|América/Porto_Velho |<-04>4 |
|América/Puerto_Rico |AST4 |
|América/Punta_Arenas |<-03>3 |
|América/Río_lluvioso |CST6CDT,M3.2.0,M11.1.0 |
|América/Rankin_Inlet |CST6CDT,M3.2.0,M11.1.0|
|América/Recife |<-03>3 |
|América/Regina |CST6 |
|América/Decidida |CST6CDT,M3.2.0,M11.1.0 |
|América/Rio_Branco |<-05>5 |
|América/Santarem |<-03>3 |
|América/Santiago |<-04>4<-03>,M9.1.6/24,M4.1.6/24 |
|América/Santo_Domingo |AST4 |
|América/Sao_Paulo |<-03>3 |
|América/Scoresbysund |<-02>2<-01>,M3.5.0/-1,M10.5.0/0 |
|América/Sitka |AKST9AKDT,M3.2.0,M11.1.0 |
|América/San_Bartolomé |AST4 |
|América/St_Johns |NST3:30NDT,M3.2.0,M11.1.0 |
|América/St_Kitts |AST4 |
|América/Santa Lucía |AST4 |
|América/Santo_Tomás |AST4 |
|América/San Vicente |AST4 |
|América/Swift_Current |CST6 |
|América/Tegucigalpa |CST6 |
|América/Thule |AST4ADT,M3.2.0,M11.1.0 |
|América/Thunder_Bay |EST5EDT,M3.2.0,M11.1.0 |
|América/Tijuana |PST8PDT,M3.2.0,M11.1.0 |
|América/Toronto |EST5EDT,M3.2.0,M11.1.0 |
|América/Tórtola |AST4 |
|América/Vancouver |PST8PDT,M3.2.0,M11.1.0 |
|América/Whitehorse |MST7 |
|América/Winnipeg |CST6CDT,M3.2.0,M11.1.0 |
|América/Yakutat |AKST9AKDT,M3.2.0,M11.1.0 |
|América/Yellowknife |MST7MDT,M3.2.0,M11.1.0 |
|Antártida/Casey |<+08>-8 |
|Antártida/Davis |<+07>-7 |
|Antártida/DumontDUrville |<+10>-10 |
|Antártida/Macquarie |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Antártida/Mawson |<+05>-5 |
|Antártida/McMurdo |NZST-12NZDT,M9.5.0,M4.1.0/3 |
|Antártida/Palmer |<-03>3 |
|Antártida/Rothera |<-03>3 |
|Antártida/Syowa |<+03>-3 |
|Antártida/Troll |<+00>0<+02>-2,M3.5.0/1,M10.5.0/3 |
|Antártida/Vostok |<+05>-5 |
|Ártico/Longyearbyen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Asia/Adén |<+03>-3 |
|Asia/Almaty |<+05>-5 |
|Asia/Amán |<+03>-3 |
|Asia/Anádyr |<+12>-12 |
|Asia/Aqtau |<+05>-5 |
|Asia/Aqtobe |<+05>-5 |
|Asia/Ashgabat |<+05>-5 |
|Asia/Atirau |<+05>-5 |
|Asia/Bagdad |<+03>-3 |
|Asia/Bahréin |<+03>-3 |
|Asia/Bakú |<+04>-4 |
|Asia/Bangkok|<+07>-7 |
|Asia/Barnaúl |<+07>-7 |
|Asia/Beirut |EET-2EEST,M3.5.0/0,M10.5.0/0 |
|Asia/Bishkek |<+06>-6 |
|Asia/Brunéi |<+08>-8 |
|Asia/Chitá |<+09>-9 |
|Asia/Choibalsan |<+08>-8 |
|Asia/Colombo |<+0530>-5:30 |
|Asia/Damasco |<+03>-3 |
|Asia/Daca |<+06>-6 |
|Asia/Dili |<+09>-9 |
|Asia/Dubái |<+04>-4 |
|Asia/Dushanbé |<+05>-5 |
|Asia/Famagusta |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Asia/Gaza |EET-2EEST,M3.4.4/50,M10.4.4/50 |
|Asia/Hebrón |EET-2EEST,M3.4.4/50,M10.4.4/50 |
|Asia/Ho_Chi_Minh |<+07>-7 |
|Asia/Hong_Kong |HKT-8 |
|Asia/Hovd |<+07>-7 |
|Asia/Irkutsk |<+08>-8 |
|Asia/Yakarta |WIB-7 |
|Asia/Jayapura |WIT-9 |
|Asia/Jerusalén |IST-2IDT,M3.4.4/26,M10.5.0 |
|Asia/Kabul |<+0430>-4:30 |
|Asia/Kamchatka |<+12>-12 |
|Asia/Karachi |PKT-5 |
|Asia/Katmandú |<+0545>-5:45 |
|Asia/Khandyga |<+09>-9 |
|Asia/Calcuta |IST-5:30 |
|Asia/Krasnoyarsk |<+07>-7 |
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
|Asia/Oral |<+05>-5 |
|Asia/Phnom_Penh |<+07>-7 |
|Asia/Pontianak |WIB-7 |
|Asia/Pyongyang |KST-9 |
|Asia/Catar |<+03>-3 |
|Asia/Qyzylorda |<+05>-5 |
|Asia/Riad |<+03>-3 |
|Asia/Sajalín |<+11>-11 |
|Asia/Samarcanda |<+05>-5 |
|Asia/Seúl |KST-9|
|Asia/Shanghái |CST-8 |
|Asia/Singapur |<+08>-8 |
|Asia/Srednekolimsk |<+11>-11 |
|Asia/Taipei |CST-8 |
|Asia/Taskent |<+05>-5 |
|Asia/Tiflis |<+04>-4 |
|Asia/Teherán |<+0330>-3:30 |
|Asia/Timbu |<+06>-6 |
|Asia/Tokio |JST-9 |
|Asia/Tomsk |<+07>-7 |
|Asia/Ulan Bator |<+08>-8 |
|Asia/Urumqi |<+06>-6 |
|Asia/Ust-Nera |<+10>-10 |
|Asia/Vientián |<+07>-7 |
|Asia/Vladivostok |<+10>-10 |
|Asia/Yakutsk |<+09>-9 |
|Asia/Yangón |<+0630>-6:30 |
|Asia/Ekaterimburgo |<+05>-5 |
|Asia/Ereván |<+04>-4 |
|Atlántico/Azores |<-01>1<+00>,M3.5.0/0,M10.5.0/1 |
|Atlántico/Bermuda |AST4ADT,M3.2.0,M11.1.0 |
|Atlántico/Canarias |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlántico/Cabo_Verde |<-01>1 |
|Atlántico/Feroe |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlántico/Madeira |WET0WEST,M3.5.0/1,M10.5.0 |
|Atlántico/Reikiavik |GMT0 |
|Atlántico/Georgia_del_sur |<-02>2 |
|Atlántico/Stanley |<-03>3 |
|Atlántico/Santa Elena |GMT0 |
|Australia/Adelaida |ACST-9:30ACDT,M10.1.0,M4.1.0/3 |
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
|Australia/Sídney |AEST-10AEDT,M10.1.0,M4.1.0/3 |
|Europa/Ámsterdam |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Andorra |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Astracán |<+04>-4 |
|Europa/Atenas |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Belgrado |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Berlín |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Bratislava |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Bruselas |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Bucarest |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Budapest |CET-1CEST,M3.5.0,M10.5.0/3|
|Europa/Busingen |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Chisinau |EET-2EEST,M3.5.0,M10.5.0/3 |
|Europa/Copenhague |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Dublín |IST-1GMT0,M10.5.0,M3.5.0/1 |
|Europa/Gibraltar |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Guernesey |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Helsinki |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Isla_de_Man |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Estambul |<+03>-3 |
|Europa/Jersey |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Kaliningrado |EET-2 |
|Europa/Kiev |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Kírov |MSK-3 |
|Europa/Lisboa |WET0WEST,M3.5.0/1,M10.5.0 |
|Europa/Liubliana |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Londres |GMT0BST,M3.5.0/1,M10.5.0 |
|Europa/Luxemburgo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Madrid |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Malta |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Mariehamn |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Minsk |<+03>-3 |
|Europa/Mónaco |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Moscú |MSK-3 |
|Europa/Oslo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/París |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Podgorica |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Praga |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Riga |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Roma |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Samara |<+04>-4 |
|Europa/San_Marino |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Sarajevo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Saratov |<+04>-4 |
|Europa/Simferópol |MSK-3 |
|Europa/Skopje |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Sofía |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Estocolmo |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Tallin |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Tirana |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Uliánovsk |<+04>-4 |
|Europa/Uzhgorod |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Vaduz |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Vaticano |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Viena |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Vilna |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Volgogrado |MSK-3 |
|Europa/Varsovia |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Zagreb |CET-1CEST,M3.5.0,M10.5.0/3 |
|Europa/Zaporozhye |EET-2EEST,M3.5.0/3,M10.5.0/4 |
|Europa/Zúrich |CET-1CEST,M3.5.0,M10.5.0/3 |
|India/Antananarivo |EAT-3 |
|indio/Chagos |<+06>-6 |
|India/Navidad |<+07>-7 |
|India/Cocos |<+0630>-6:30 |
|India/Comoras |EAT-3 |
|India/Kerguelen |<+05>-5 |
|India/Mahé |<+04>-4 |
|India/Maldivas |<+05>-5 |
|India/Mauricio |<+04>-4 |
|India/Mayotte |EAT-3 |
|India/Reunión |<+04>-4 |
|Pacífico/Apia |<+13>-13 |
|Pacífico/Auckland |NZST-12NZDT,M9.5.0,M4.1.0/3 |
|Pacífico/Bougainville |<+11>-11 |
|Pacífico/Chatham |<+1245>-12:45<+1345>,M9.5.0/2:45,M4.1.0/3:45|
|Pacífico/Chuuk |<+10>-10 |
|Pacífico/Semana Santa |<-06>6<-05>,M9.1.6/22,M4.1.6/22 |
|Pacífico/Efate |<+11>-11 |
|Pacífico/Enderbury |<+13>-13 |
|Pacífico/Fakaofo |<+13>-13 |
|Pacífico/Fiyi |<+12>-12 |
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
|Pacífico/Noumea |<+11>-11 |
|Pacífico/Pago_Pago |SST11 |
|Pacífico/Palau |<+09>-9 |
|Pacífico/Pitcairn |<-08>8 |
|Pacífico/Pohnpei |<+11>-11 |
|Pacífico/Port_Moresby |<+10>-10 |
|Pacífico/Rarotonga |<-10>10 |
|Pacífico/Saipan |ChST-10 |
|Pacífico/Tahití |<-10>10 |
|Pacífico/Tarawa |<+12>-12 |
|Pacífico/Tongatapu |<+13>-13 |
|Pacífico/Estela |<+12>-12 |
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
|Etc./Universal |UTC0 |
|Etc/Zulú |UTC0 |
