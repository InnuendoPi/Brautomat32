# Der Brautomat

Der Brautomat ist eine Brausteuerung für die Induktionskochfelder GGM IDS1 und IDS2 mit einem ESP32 D1 mini oder ESP8266 Wemos D1 mini. Der Brautomat wird im Sudhaus von Hobbybrauern eingesetzt und bietet eine intuitiv einfach zu bedienende Steuerung. Beim Maischen werden Rast-Temperaturen automatisiert angefahren und die Rast-Zeiten eingehalten. Ebenso unterstützt der Brautomat den Hobbybrauer beim Kochen der Würze und bei den Hopfengaben. Im Verfahren aufsteigende Infusion kann der Brautomat den Maischeprozess vollständig automatisieren.

 _Hinweis: Induktionskochfelder anderer Hersteller werden nicht unterstützt._

---

## Aufteilung dieser Anleitung

Diese Anleitung unterteilt sich in drei Themenbereich:

* Die Software: die Verwendung der Firmware Brautomat
  * Installation
  * Grundeinrichtung
  * Der Maischeplan
  * AutoTune PID
  * Sensoren, Aktoren und Nachguss
  * Rezepte
* Die Hardware: die Platine und passende Erweiterungen
  * Die Platine Aufbau und Anschlüsse
  * Das Display
  * 3D Gehäuse
  * zus. Hardware
* Infos, FAQs & co
  * der kleineBrauhelfer2
  * das MQTTDevice

Diese Anleitung hat keine Reihenfolge und muss nicht von oben nach unten durchgelesen werden.

## Funktionsübersicht

* Steuerung der Induktionskochfelder GGM
  * GGM IDS1
  * GGM IDS2
* integrierter PID-Controller
* PID-AutoTune
* Temperatursensoren
  * Dallas DS18B20
  * PT100 und PT1000 (MAX31865)
* Maischeplan
  * Automatisches Anfahren und halten der Rasttemperaturen
  * Würzekochen
  * Alarmierung für Hopfengaben
* Verwaltung von Maischeplänen
* Steuerung für einen Nachguss Kessel (HLT)
* Steuerung von Aktoren, wie bspw. Rührwerk, Pumpen, etc.
* PWM für Aktoren
* Audio Alarme
  * MP3 Alarme
  * Akkustische Signale (Piezo Buzzer)
* Toasts Nachrichten
* Temperaturverlauf im Maischeprozess als Grafik (line chart)
* Rezept Import
  * kleinen Brauhelfer2
  * Maische Malz und Mehr
  * BrewFather
* Rezept Export
* Unterstützung für 3,5" HMI Touchdisplay Nextion

_"Legal note: Boxing Bell" (info), "Short School Bell" (error), "Ding sound effect" (warning) und "Success sound effect" (success) mp3 von Free Sounds Library_ [http://www.freesoundslibrary.com](http://www.freesoundslibrary.com) _Licence: Attribution 4.0 International (CC BY 4.0). You are allowed to use sound effects free of charge and royalty free in your multimedia projects for commercial or non-commercial purposes._
