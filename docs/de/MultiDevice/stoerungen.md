# Verbindung und Störungen

## Meldungen einordnen

| Anzeige | Was du prüfen solltest |
| --- | --- |
| Rolle zuerst speichern | Die gewählte Master-/Worker-Rolle speichern, dann die Suche erneut öffnen |
| Keinem Master zugeordnet | Den Worker am gewünschten Master auswählen, aktivieren und speichern |
| An anderen Master gebunden | Die bisherige Zuordnung bewusst lösen, bevor du einen anderen Master verwendest |
| Nicht verbunden / Nicht erreichbar | Stromversorgung, WLAN und Erreichbarkeit des Geräts prüfen |
| Messwert veraltet | Verbindung und Sensor am zugehörigen Brautomat prüfen; den alten Wert nicht als aktuelle Messung verwenden |
| Sensorfehler | Den Sensor und seine lokale Konfiguration prüfen |
| Schaltung/Kesselauftrag nicht bestätigt | Aktuellen Gerätestatus prüfen; nicht allein aus dem Klick auf Erfolg oder Abschaltung schließen |
| Bedienstatus unbekannt | Verbindung wiederherstellen und Bedienstatus erneut prüfen, bevor du weitere Aufträge gibst |

Bei fehlender Gerätesuche prüfe, ob Master und Worker im selben lokalen Netz
sind und miteinander kommunizieren dürfen. Teste bei Problemen mit dem
Gerätenamen auch die angezeigte IP-Adresse. Ein nicht auflösbarer Name beweist
für sich genommen keinen WLAN-Abbruch.

Error-Toasts bleiben bis zum manuellen Schließen sichtbar. Das Schließen
quittiert die Anzeige, behebt aber keine Geräte- oder Verbindungsstörung.

## Verbindung fällt während des Brauens aus

Prüfe die Meldungen und den Planstatus am Master. Ein anderer Worker übernimmt
den betroffenen Kessel nicht automatisch. Eine wiederhergestellte Verbindung
ist keine Aufforderung zum automatischen Fortsetzen eines pausierten Plans.

Für vom Master-Plan fernfreigegebene Worker-Kessel gilt in dieser Beta eine
vorläufige Frist von **zehn Sekunden ohne erneuerte Fernfreigabe**; danach wird
die zugehörige Regelung gestoppt. Das ist keine allgemeine Zusage, dass sämtliche
Aktoren und Ausgänge nach zehn Sekunden aus sind. Eine ausdrücklich bestätigte
lokale Übernahme beendet diese Fernüberwachung und lässt lokale Bedienung zu.

Wenn du vor Ort weiterarbeiten musst und den Worker bedienen kannst, verwende
[Steuerung übernehmen](bedienung.md#lokal-übernehmen-und-zurückgeben). Ist auch sein
Webinterface nicht erreichbar, hilft ein vorhandenes Display bei den dafür
vorgesehenen lokalen Bedienaktionen. Prüfe den tatsächlichen Anlagenzustand.

Bei **Ausschalten nicht bestätigt** bleibt der Plan gesperrt. Prüfe die
betroffenen Geräte und verwende anschließend **Ausschalten erneut versuchen**.

## Einen Worker wechseln

### Das bisherige Gerät ist erreichbar

Beende den Prozess vollständig und bringe das betroffene Gerät in den
gewünschten ausgeschalteten Zustand. Öffne am Master
**System Einstellungen → MultiDevice**, wähle beim bisherigen Worker
**Zuordnung lösen** und warte auf die Bestätigung. Anschließend kannst du
ein anderes Gerät auswählen, aktivieren und speichern.

### Das bisherige Gerät ist dauerhaft ausgefallen

1. Beende den laufenden oder pausierten Plan.
2. Stelle vor Ort sicher, dass der ausgefallene Worker und seine angeschlossenen
   Lasten sicher außer Betrieb sind.
3. Wähle am Master **Ausgefallenen Worker entfernen** und bestätige den Hinweis.
4. Ordne bei Bedarf einen Ersatz zu und prüfe Kesselrollen sowie Planbefehle,
   bevor du einen neuen Lauf startest.

**Entfernen ist keine Ausschaltbestätigung.** Der Master gibt die offenen
Aufträge dieses Workers auf. Das alte Gerät wird bei seiner Rückkehr nicht
automatisch wieder aufgenommen und muss vor erneuter Verwendung bewusst
zugeordnet werden.

![Worker-Zuordnung in den Master-Einstellungen](../../multidevice/master-setup-de.png)

*Bei einem erreichbaren Worker steht „Zuordnung lösen“ zur Verfügung. Die Aufnahme zeigt einen verbundenen Worker; das Entfernen eines ausgefallenen Geräts ist oben gesondert beschrieben.*
