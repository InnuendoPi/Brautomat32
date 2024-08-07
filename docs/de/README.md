# Der Brautomat

![ESP32](https://img.shields.io/static/v1?label=Arduino&message=ESP32&logo=arduino&logoColor=white&color=blue) ![ESP8266](https://img.shields.io/static/v1?label=Arduino&message=ESP8266&logo=arduino&logoColor=white&color=green)

Der Brautomat ist eine Brausteuerung für die Induktionskochfelder GGM IDS1 und IDS2 mit einem ESP32 D1 mini oder ESP8266 Wemos D1 mini. Der Brautomat wird im Sudhaus von Hobbybrauern eingesetzt und bietet eine intuitiv einfach zu bedienende Steuerung. Beim Maischen werden Rast-Temperaturen automatisiert angefahren und die Rast-Zeiten eingehalten. Ebenso unterstützt der Brautomat den Hobbybrauer beim Kochen der Würze und bei den Hopfengaben. Im Verfahren aufsteigende Infusion kann der Brautomat den Maischeprozess vollständig automatisieren.

 _Hinweis: Der Brautomat kann ausschließlich an den Induktionskochfelder GGM IDS1 und GGM IDS2 betrieben werden._

---

## Aufteilung dieser Anleitung

Diese Anleitung unterteilt sich in drei Themenbereich:

* Die Software: die Verwendung der Firmware Brautomat
  * Installation
  * Grundeinrichtung
  * Der Maischeplan
  * AutoTune PID
  * Sensoren, Aktoren und Nachguss
* Die Hardware: die Platine und passende Erweiterungen
  * Die Platine Aufbau und Anschlüsse
  * Das Display
  * 3D Gehäuse
  * zus. Hardware
* Infos, FAQs & co
  * kleinerBrauhelfer2
  * das MQTTDevice

Der Themenbereich Software wird mit einer Zusammenfassung _Parameter im Überblick_ abgeschlossen. Zu vielen Parametern werden Details und Informationen gegeben, um die Konfiguration und Anwendung zu vereinfachen.

Diese Anleitung hat keine Reihenfolge und muss nicht von oben nach unten durchgelesen werden. Der Themenbereich Software, insbesondere das Kapitel _Der Maischeplan_, ist für den Einstieg in den Brautomat empfohlen.

_"Legal note: Boxing Bell" (info), "Short School Bell" (error), "Ding sound effect" (warning) und "Success sound effect" (success) mp3 von Free Sounds Library_ [http://www.freesoundslibrary.com](http://www.freesoundslibrary.com) _Licence: Attribution 4.0 International (CC BY 4.0). You are allowed to use sound effects free of charge and royalty free in your multimedia projects for commercial or non-commercial purposes._
