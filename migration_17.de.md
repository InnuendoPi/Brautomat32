# Migration von 1.66.x auf 1.7

Für das neue IDF6-Partitionslayout ist eine einmalige USB-Migration mit
[ServiceTool ab 2.1.0](https://github.com/InnuendoPi/ServiceTool/releases/latest)
erforderlich.

1. Brau- und Gärprozesse beenden. Den Brautomat per USB verbinden und seine
   Erreichbarkeit über WLAN prüfen.
2. Unter **Service → Migration** das Paket **IDF6 Development** manuell
   auswählen. Den COM-Port und die angezeigte Zielversion prüfen.
3. **Migration starten** wählen. Das ServiceTool sichert die Daten, schreibt
   die neue Partitionstabelle, Hauptfirmware und ServiceApp und stellt die
   Sicherung wieder her. USB und Strom bis zum Abschluss verbunden lassen.
4. Vor dem nächsten Brautag Einstellungen, Rezepte und Gerätezuordnungen prüfen.

[Ausführliche Anleitung in GitBook](https://github.com/InnuendoPi/Brautomat32/blob/gitbook/docs/de/Installation/info.md#auf-171-development-migrieren)
