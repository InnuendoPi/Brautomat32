# Der Brautomat

![ESP32](https://img.shields.io/static/v1?label=Arduino&message=ESP32&logo=arduino&logoColor=white&color=blue) ![ESP8266](https://img.shields.io/static/v1?label=Arduino&message=ESP8266&logo=arduino&logoColor=white&color=green)

Der Brautomat ist eine Brausteuerung für den ESP32 D1 mini oder ESP8266 Wemos D1 mini. Der Brautomat wird im Sudhaus von Hobbybrauern eingesetzt und bietet eine intuitiv einfach zu bedienende Steuerung. Beim Maischen werden Rast-Temperaturen automatisiert angefahren und die Rast-Zeiten eingehalten. Ebenso unterstützt der Brautomat den Hobbybrauer beim Kochen der Würze und bei den Hopfengaben. Im Verfahren aufsteigende Infusion kann der Brautomat den Maischeprozess vollständig automatisieren.

> **Hinweis:**\
diese Anleitung wird stetig erweitert, korrigiert bzw. verbessert. Ursprünglich konnte im Projket Brautomat nur das Induktionskochfeld GGM IDS2 gesteuert werden. Ab Version 1.48 können im Modus Relais auch andere Kochfelder angeschlossen werden. Die Anleitung beschreibt an sehr vielen Stellen die Funktionen mit einer GGM IDS. Nur der manuelle Modus ist ausschließlich für die GGM IDS2 geeignet. Alle anderen Funktionen und Möglichkeiten sind jeweils auch für andere Kochfelder verfügbar.

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
* Infos und FAQs
  * kleinerBrauhelfer2
  * das MQTTDevice

Der Themenbereich Software wird mit einer Zusammenfassung _Parameter im Überblick_ abgeschlossen. Zu vielen Parametern werden Details und Informationen gegeben, um die Konfiguration und Anwendung zu vereinfachen.

Diese Anleitung hat keine Reihenfolge und muss nicht von oben nach unten durchgelesen werden. Der Themenbereich Software, insbesondere das Kapitel _Der Maischeplan_, ist für den Einstieg in den Brautomat empfohlen.
