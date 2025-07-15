# Der Brautomat

![ESP32](https://img.shields.io/static/v1?label=Arduino&message=ESP32&logo=arduino&logoColor=white&color=blue)

Der Brautomat ist eine Brausteuerung für den ESP32 D1 mini. Der Brautomat wird im Sudhaus eingesetzt und bietet eine intuitiv einfach zu bedienende Steuerung. Beim Maischen werden Rast-Temperaturen automatisiert angefahren und die Rast-Zeiten eingehalten. Ebenso unterstützt der Brautomat das Würzekochen und die Hopfen- und Zutatengaben. Im Verfahren aufsteigende Infusion kann der Brautomat den Maischeprozess vollständig automatisieren.

> **Hinweis:**\
Diese Anleitung wird stetig erweitert, korrigiert bzw. verbessert. Ursprünglich konnte im Projket Brautomat nur das Induktionskochfeld GGM IDS2 gesteuert werden. Ab Version 1.48 können im Modus Relais auch andere Kochfelder angeschlossen werden. Die Anleitung beschreibt an  vielen Stellen die Funktionen mit einer GGM IDS. Nur der manuelle Modus ist ausschließlich für die GGM IDS2 geeignet. Alle anderen Funktionen und Möglichkeiten sind jeweils auch für andere Kochfelder verfügbar.

 ---

## Aufteilung dieser Anleitung

Diese Anleitung hat keine Reihenfolge und muss nicht von oben nach unten durchgelesen werden. Der Themenbereich _Software_, insbesondere das Kapitel _Der Maischeplan_, ist für den Einstieg in den Brautomat empfohlen.

Diese Anleitung unterteilt sich in drei Themenbereich:

* Software: die Verwendung der Firmware Brautomat
  * Installation
  * Grundeinrichtung
  * Der Maischeplan
  * AutoTune PID
  * Sensoren, Sudkessel, Nachguss und Aktoren
* Hardware: die Platine und passende Erweiterungen
  * Die Platine Aufbau und Anschlüsse
  * Das Display
  * 3D Gehäuse
  * zus. Hardware
* Infos und FAQs
  * kleinerBrauhelfer2
  * das MQTTDevice

Der Themenbereich _Software_ wird mit einer Zusammenfassung _Parameter im Überblick_ abgeschlossen. Zu vielen Parametern werden Details und Informationen gegeben, um die Konfiguration und Anwendung zu vereinfachen.

## Brautomat Release Version

Die Release version vom Brautomat wird mit dem aktuellen stable Framework espressif compiliert. Diese Version ist für den produktiven Einsatz. Die Release Version wird ohne das Modul Logging bereitgestellt. Die Version ist etwas schneller. Die Release Version sollte bevorzugt eingesetzt werden.

## Brautomat Development Version

Die Development Version vom Brautomat wird mit dem aktuellen Framework esspressif compiliert. Diese Version wird mit dem Modul Logging bereitgestellt. Neue Funktionen und Fehlerkorrekturen werden zuerst in der Development Version bereitgestellt. Diese Version kann produktiv genutzt werden, ist aber nicht empfohlen.
