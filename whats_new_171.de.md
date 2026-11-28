# Was ist neu in Brautomat32 1.71.0?

**1.71.0 Development** bringt MultiDevice, ServiceApp und den Wechsel auf
ESP-IDF 6.1.1 mit Arduino 4.0.0. MultiDevice bleibt optional.

[IDF6-Development-Paket herunterladen](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/development/Updates/ESP32-IDF6dev/Brautomat32.zip)

## Weitere Änderungen seit 1.66.6

- Maische- und Gärpläne können Leerzeichen und Umlaute im Dateinamen enthalten.
  Für neue Namen gilt die Grenze von 50 Zeichen einschließlich `.json`.
- Der Recovery-AP enthält eine eigene Seite zur WLAN-Einrichtung.
- In der Piezo-GPIO-Auswahl steht `-` für deaktiviert.
- Webhook-Basis-URLs erlauben bis zu 127 ASCII-Zeichen. `true/false` steht
  zusätzlich für Geräte wie Shelly Gen2 und Gen3 zur Verfügung.
- IDF6 verwendet getrennte Updatekanäle für Release und Development.
  Zusatzsprachen werden bei Bedarf separat geladen.

## MultiDevice: eine Anlage, mehrere Brautomaten

Ein **Master** übernimmt die gemeinsame Bedienung. Bis zu **drei Worker**
stellen ihre Kessel, Sensoren und Aktoren bereit. Die Verbindung erfolgt über
WLAN im lokalen Netzwerk.

Damit könnt ihr eure Anlage nach Aufgaben oder Standort aufteilen: beispielsweise
ein Worker am Maischekessel, einer an der Sudpfanne und einer am Nachgussbehälter.
Sensor- und Steuerleitungen enden am Brautomat vor Ort. Das vereinfacht die
Verkabelung und schafft zusätzliche Anschlussmöglichkeiten.

- Der Master darf auch eine reine Bedienstation ohne angeschlossene Geräte sein.
- Der Master sucht andere Brautomaten im lokalen Netzwerk. Ihre individuelle
  ESP32-Kennung unterscheidet die Geräte unabhängig vom Namen.
- Im gemeinsamen Webinterface zeigen kleine Worker-Badges, wo ein Gerät
  angeschlossen ist. Lokale Geräte am Master benötigen kein Badge.
- Der Maischeplan kann Kessel und Aktoren auf den Workern verwenden.
- Jeder Worker kann ein eigenes Nextion-HMI-Display haben. Eine Änderung der
  Nextion-HMI-Firmware ist für diese Erweiterung nicht vorgesehen.
- Im Webinterface des Workers zeigt eine kompakte Planansicht den aktuellen
  Master-Schritt, Temperaturen, Schrittdauer, Restzeit und den nächsten Schritt.

Wer nur einen Brautomat verwendet, kann seine Anlage weiterhin als SingleDevice
betreiben. MultiDevice ist optional.

![MultiDevice-Einstellungen am Master mit drei Worker-Plätzen](docs/img/whats-new-167-multidevice-de.png)

*MultiDevice am Master: Worker1 ist zugeordnet und verbunden. Zwei weitere Worker-Plätze sind noch frei.*

### Kessel und Bedienung

Im Verbund wird jeweils **ein Kessel pro Rolle** verwendet: MaischeSud, Sud und
HLT/Nachguss. Die Rollen sind nicht fest an Master oder bestimmte Worker gebunden.
Der Temperatursensor eines Kessels muss am selben Brautomat angeschlossen sein.

Sind mehrere Kessel derselben Rolle eingerichtet, gilt im gestoppten Betrieb die
Priorität **Master → Worker1 → Worker2 → Worker3**. Während eines laufenden oder
pausierten Plans bleibt die Zuordnung fest. Ein Verbindungsabbruch führt nicht
automatisch zur Auswahl eines anderen Kessels.

Für eigene Eingriffe am Worker lässt sich die Bedienung mit **„Steuerung übernehmen“**
lokal übernehmen. Die Rückgabe an den Master erfolgt über das Webinterface nach
Zustandsabgleich. Die Rückgabe selbst verändert weder Sollwerte noch Ausgänge;
ein pausierter Maischeplan wird anschließend ausdrücklich fortgesetzt.
Manueller Modus und Fermentermodus bleiben lokal.

![Webinterface von Worker1 mit Master-Planansicht, Sudpfanne, Pumpe und Sensor](docs/img/whats-new-167-worker-de.png)

*Direkt am Worker: oben die Master-Planansicht, darunter die angeschlossenen Geräte. Der Plan ist hier gestoppt.*

## Mehr Übersicht beim Brauen

- Einheitliche Bedienelemente für lokale und entfernte Kessel und Aktoren.
- Temperatur und Steigrate übersichtlich angeordnet; bei ausgeschaltetem Kessel
  wird keine Steigrate eingeblendet.
- Laufend nachgeführte Zeitprognose für kommende Maischeplanschritte. Sie bleibt
  eine ungefähre Orientierung: Nicht vorgegebene Wartezeiten, etwa beim Läutern,
  können erst berücksichtigt werden, wenn ihr tatsächlich fortfahrt.
- Error-Toasts bleiben sichtbar, bis ihr sie selbst schließt.

![Dashboard-Bedienfeld mit Kessel, Aktoren und Sensorwerten](docs/img/whats-new-167-dashboard-de.png)

*Gemeinsam im Dashboard: lokale Geräte sowie Sudpfanne, Pumpe1 und Sensor von Worker1. Die Worker-Badges zeigen die Zuordnung und den Verbindungsstatus.*

![Dashboard-Statusleiste und Zeitstrahl mit Worker-Badge](docs/img/whats-new-167-zeitstrahl-de.png)

*Der Zeitstrahl zeigt den Auftrag „Pumpe1:ON“ mit Worker1-Badge. Der Maischeplan ist noch nicht gestartet; die Zeiten sind Vorschauwerte.*

## Partitionslayout und ServiceApp

Der Flash-Speicher wird neu aufgeteilt: Die Hauptfirmware erhält einen größeren
Bereich, daneben liegt die separate **ServiceApp**. Sie übernimmt Wartungsaufgaben
wie das Einspielen der Hauptfirmware sowie das Sichern und Wiederherstellen von
Dateien. Während die ServiceApp läuft, findet kein Braubetrieb statt.

ServiceApp und ServiceTool sind zwei verschiedene Dinge: Die **ServiceApp läuft
auf dem Brautomat**, das **ServiceTool auf eurem Computer**. Das normale WebUpdate
der Hauptfirmware nutzt nach der Umstellung die ServiceApp.

### Einmalige Umstellung über das ServiceTool

Der Umstieg von 1.66.x auf 1.7 erfordert eine neue Partitionstabelle.
Die Umstellung erfolgt auch bei einem einzelnen Brautomat per USB mit dem [ServiceTool ab 2.1.0](https://github.com/InnuendoPi/ServiceTool/releases/latest).

1. Brau- und Gärprozesse beenden. Den Brautomat per USB verbinden und
   prüfen, ob er über seine Geräte-URL erreichbar ist.
2. In **Service → Migration** das Paket **IDF6 Development** manuell
   auswählen. Den USB-Port und die angezeigte Zielversion 1.71.0 prüfen.
3. **Migration starten** wählen. Das ServiceTool sichert die Daten,
   schreibt Partitionstabelle, Hauptfirmware und ServiceApp per USB und
   spielt die Sicherung zurück. USB und Strom bis zum Abschluss verbunden lassen.
4. Vor dem nächsten Brauen Einstellungen, Pläne und Gerätezuordnungen prüfen.

Nach der Umstellung können weitere Updates innerhalb des IDF6-Development-Kanals
per WebUpdate eingespielt werden.

## Optionaler IDS-Rückkanal

Die GPIO-Auswahl für den Interrupt des GGM-IDS-Kochfelds (blaues Kabel) ist wieder
verfügbar. **Standardmäßig ist der Interrupt deaktiviert** und kann bei Bedarf
aktiviert werden.

Zur Verringerung von Fehlmeldungen werden Fehler erst nach drei gleichen,
aufeinanderfolgenden empfangenen Codes angezeigt. `0000` bedeutet OK. Die Meldung
allein pausiert keinen Plan und schaltet weder Heizung noch Relais automatisch ab.
Das Verhalten wird anhand der Rückmeldungen aus der Praxis weiter bewertet.

![IDS-Hardwareeinstellungen mit deaktiviertem Interrupt-Pin](docs/img/whats-new-167-ids-interrupt-de.png)

*„PIN blau [Interrupt]“ steht auf „–“: Der optionale Rückkanal ist deaktiviert.*

## Entwicklungsstand

Automatisierte Prüfungen und erste Gerätetests begleiten die Entwicklung.
Die Erprobung an realen Brauanlagen, mit mehreren Workern und unterschiedlichen
WLAN-Aufbauten wird zeigen, wo noch Anpassungen nötig sind.

Für Rückmeldungen helfen die Firmwareversionen, der Aufbau mit Master/Workern,
der betroffene Schritt und eine kurze Beschreibung des beobachteten Verhaltens.
