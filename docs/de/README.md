# Der Brautomat

![ESP32](https://img.shields.io/static/v1?label=Arduino&message=ESP32&logo=arduino&logoColor=white&color=blue)

Der Brautomat ist eine Brausteuerung für den ESP32 D1 mini. Der Brautomat wird im Sudhaus eingesetzt und bietet eine intuitiv einfach zu bedienende Steuerung. Beim Maischen werden Rast-Temperaturen automatisiert angefahren und die Rast-Zeiten eingehalten. Ebenso unterstützt der Brautomat das Würzekochen und die Hopfen- und Zutatengaben. Im Verfahren aufsteigende Infusion kann der Brautomat den Maischeprozess vollständig automatisieren.

> **Hinweis:**\
Diese Anleitung wird laufend erweitert und verbessert. Ursprünglich konnte im Projekt Brautomat nur das Induktionskochfeld GGM IDS2 gesteuert werden. Seit Version 1.48 können im Relais-Modus auch andere Kochfelder angeschlossen werden. Viele Beispiele in der Anleitung zeigen eine GGM IDS. Nur der manuelle Modus ist ausschließlich für die GGM IDS2 geeignet. Alle anderen Funktionen und Möglichkeiten sind auch mit anderen Kochfeldern nutzbar.

Stand der Anleitung: Release-Linie `main` (Version 1.60). Lokale Development-Builds können davon abweichen.

 ---

## Aufteilung dieser Anleitung

Diese Anleitung hat keine feste Reihenfolge und muss nicht von oben nach unten gelesen werden. Für den Einstieg ist der Themenbereich _Software_ mit dem Kapitel _Der Maischeplan_ besonders geeignet. Das Kapitel _Der Maischeplan_ beinhaltet am Ende der Funktionsbeschreibung einen Beispiel-Brautag.

Diese Anleitung unterteilt sich in drei Themenbereiche:

* Software: die Verwendung der Firmware Brautomat
  * Installation
  * Grundeinrichtung
  * Der Maischeplan
  * AutoTune PID
  * Sensoren, Sudkessel, Nachguss und Aktoren
  * Fermenter Modus
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

Die Release-Version vom Brautomat wird mit dem aktuellen stabilen Framework von Espressif kompiliert. Diese Version ist für den produktiven Einsatz vorgesehen. Die Release-Version wird ohne das Logging-Modul bereitgestellt und ist dadurch etwas schneller. Für den produktiven Betrieb sollte die Release-Version bevorzugt eingesetzt werden.

## Brautomat Development Version

Die Development-Version vom Brautomat wird ebenfalls mit dem aktuellen Espressif-Framework kompiliert. Diese Version enthält das Logging-Modul. Neue Funktionen und Fehlerkorrekturen erscheinen zuerst in der Development-Version. Sie kann produktiv genutzt werden, ist dafür aber nicht primär gedacht.
