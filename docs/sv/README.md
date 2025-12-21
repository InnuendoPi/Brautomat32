# Brautomat

![ESP32](https://img.shields.io/static/v1?label=Arduino&message=ESP32&logo=arduino&logoColor=white&color=blue)

Brautomat är en bryggkontroll för ESP32 D1 mini. Brautomat används i brygghuset och erbjuder en intuitiv, lättanvänd kontroll. Under mäskningen uppnås vilotemperaturer automatiskt och vilotiderna hålls. Brautomat stöder även vörtkokning och tillsats av humle och ingredienser. I den stigande infusionsprocessen kan Brautomat automatisera mäskningen helt.

> **Obs:**\
Dessa instruktioner utökas, korrigeras eller förbättras ständigt. Ursprungligen kunde endast GGM IDS2-induktionshällen styras i projektet Brautomat. Från version 1.48 kan även andra hällar anslutas i reläläge. Instruktionerna beskriver funktionerna med en GGM IDS på många ställen. Endast det manuella läget är exklusivt lämpligt för GGM IDS2. Alla andra funktioner och tillval finns även för andra hällar.

 ---

## Layout av denna guide

Dessa instruktioner är i ingen ordning och behöver inte läsas uppifrån och ned. Ämnesområdet _Programvara_, speciellt kapitlet _Mash-planen_, rekommenderas för inträde i Brautomat. Kapitlet _Mäskplanen_ innehåller ett exempel på en bryggdag i slutet av funktionernas förklaringar.

Denna guide är indelad i tre ämnesområden:

* Programvara: användning av firmware Brautomat
  * Installation
  * Grundläggande inställning
  * Mäskplanen
  * AutoTune PID
  * Sensorer, bryggkokare, refill och ställdon
  * Jäsningsläge
* Hårdvara: kretskortet och lämpliga förlängningar
  * Kretskortets struktur och anslutningar
  * Displayen
  * 3D-hus
  * extra hårdvara
* Info och vanliga frågor
  * liten brygghjälpare2
  * MQTT-enheten

Ämnesområdet _Programvara_ avslutas med en sammanfattning _Parametrar i ett ögonkast_. Detaljer och information tillhandahålls för många parametrar för att förenkla konfiguration och användning.

## Brautomat Releaseversion

Releaseversionen av Brautomat är kompilerad med det nuvarande stabila ramverket espressif. Denna version är för produktiv användning. Releaseversionen tillhandahålls utan Loggningsmodulen. Versionen är något snabbare. Utgivningsversionen bör helst användas.

## Brautomat Utvecklingsversion

Utvecklingsversionen av Brautomat är kompilerad med det nuvarande esspressif-ramverket. Denna version är försedd med Loggningsmodulen. Nya funktioner och buggfixar släpps först i utvecklingsversionen. Denna version kan användas produktivt, men rekommenderas inte.

> **Observera:**
Denna sida har automatiskt översatts från den ursprungliga tyska dokumentationen.
