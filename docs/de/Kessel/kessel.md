# Kessel Konfiguration und Einsatz

Der Brautomat32 bietet die Möglichkeit, bis zu drei Kessel einzurichten. Der erste Kessel die interne Bezeichnung MAISCHE und alternativ IDS. Dieser Kessel ist für den Maischeprozess erforderlich. Die zwei weiteren Kessel sind optional. Der zweite Kessel hat die interne Bezeichnung SUD, alternativ MLT und der dritte Kessel Bezeichnung HLT bzw. NACHGUSS.

Die drei Kessel können entweder vom Typ GGM Induktionskochfeld oder Relais sein. Ein Kessel vom Typ Relais beinhaltet eine webhook Anbindung.

![Kessel Konfiguration](/docs/img/kessel_1.jpg)

Die Parameter sind im Kapitel Grundeinrichtung und Parameter im Überblick - Parameter Kessel beschrieben und sind für alle drei Kessel identisch.

Der Einsatz der drei Kessel ist jedoch unterschiedlich, insbesondere der Einsatz über den Maischeplan. Der Maischeplan ist immer mit dem ersten Kessel MaischeSud verknüpft, solange kein anderer Kessel im Maischeplan über einen Steuerbefehl angegeben wird. Steuerbefehle werden auch im Abschnitt Maischeplan Sonderfunktion und Steuerbefehle erläutert.

## Steuerbefehle für Kessel

In diesem Abschnitt werden nur Steuerbefehle für Kessel betrachtet. Steuerbefehle für Aktoren sind zwar identisch aufgebaut, werden aber im Abschnitt Maischeplan Sonderfunktion und Steuerbefehle erläutert. Ein Steuerbefehl beinhaltet immer einen Doppelpunkt im Rast Namen. Nur anhand des Doppelpunktes erkennt der Brautomat, dass diese Rast als Steuerbefehl zu behandeln ist. Das Format lautet Gerät:maximale Leistung. D.h. der Doppelpunkt trennt den Gerätenamen von der maximalen Leistung.

Als Gerätenamen für die drei Kessel sind folgende Bezeichnungen intern definiert:

* MAISCHE oder IDS für den ersten Kessel
* MLT oder SUD für den zweiten Kessel
* HLT oder NACHGUSS für den dritten Kessel

Jedem Kessel wird ein Name in den Einstellung zugewiesen. Dieser Name kann ebenfalls als Gerätename für einen Steuerbefehl genutzt werden.

Als maximale Leistung sind Zahlen zwischen 0 und 100 erlaubt. Der Wert entspricht dem Parameter maximale Leistung in den Kessel Einstellungen und wird in Prozent angegeben. Die Angabe ON entspricht 100% und OFF 0%.

### Möglichkeit 1: manuelles schalten von Kessel

Der zweite und dritte Kessel kann über das Web Interface mit dem jeweiligen Power Button manuell ein- und ausgeschaltet werden. Wird beispielsweise ein Kessel für den Nachguss eingerichtet, dann kann in den Kessel Einstellungen die Zieltemperatur auf 78°C gesetzt werden und der Kessel bei Bedarf am Brautag geschaltet werden.

### Möglichkeit 2: automatisches schalten von Kessel

Der zweite und dritte Kessel können auch über den Maischeplan geschaltet werden:

![Kessel Konfiguration](/docs/img/kessel_2.jpg)

In diesem vereinfachten Maischeplan wird in Zeile 2 der dritte Kessel HLT automatisch eingeschaltet. Der Step HLT:100 mit einer Zieltemperatur von 78°C und einer Dauer von 0 Minuten schalten den Nachguss mit 100% Leistung ein und setzt die Zieltemperatur auf 78°C. Weil die Dauer mit 0 Minuten angegeben ist, wird der Nachguss dauerhaft eingeschaltet. Der Brautomat geht direkt zum nächsten Maischeschritt und belässt den Nachguss eingeschaltet. Der PID Controller regelt dauerhaft die benötigte Leistung für das Erreichen und Halten der Zieltemperatur. Identisch zum Steuerbefehl HLT:100 wäre NACHGUSS:100. Hat der Nachguss in den Einstellungen den Namen "Kocher" erhalten, dann kann der Steuerbefehl KOCHER:100 ebenfalls verwendet werden.

![Kessel Konfiguration](/docs/img/kessel_3.jpg)

In diesem Maischeplan wird im dritten Step der zweite Kessel Sud eingeschaltet. Im Gegensatz zum vorherigen Beispiel HLT wird der Kessel SUD für die Dauer von 15 Minuten mit der Zieltemperatur 100°C eingeschaltet. Der Brautomat verbleibt so lange auf diesen Step, bis die Zieltemperatur erreicht und die Rastdauer von 10 Minuten abgeschlossen ist. Anschließend wird der Kessel SUD ausgeschaltet und der Brautomat springt zum nächsten Step im Maischeplan.

Der Text "Teilmaische kochen" wird vom Brautomat übersetzt zu 100%. Wenn nach dem Doppelpunkt keine Zahl zwischen 0 und 100 oder die Angaben ON bzw. OFF stehen, dann ersetzt der Brautomat den Text mit 100% Leistung.

## Beispiel unterschiedliche Leistung

Die Steuerbefehle können genutzt werden, um die maximale Leistung während des Brauprozesses anzupassen. Hat bspw. das Induktionskochfeld eine maximale Leistung von 3.5kW und der verwendete Braukessel ein Volumen von 20 Liter, dann kann der Steuerbefehl MAISCHE:75 genutzt werden, um die maximale Ausgangsleistung vom Induktionskochfeld auf 75% Leistung zu reduzieren. Die Rast mit dem Steuerbefehl MAISCHE:75 wird mit 0°C Zieltemperatur und 0 Minuten Dauer bei aktiviertem autonext erstellt.

## Beispiel Dekoktion

Wie oben beschrieben, wird eine Rast aus dem Maischeplan immer dem ersten Kessel (MAISCHE) zugewiesen, wenn kein Steuerbefehl (Doppelpunkt im Rastnamen) die Rast einen anderen Kessel zuweist. Ein Steuerbefehl kann den zweiten Kessel entweder mit einer Zieltemperatur ein-/Ausschalten und direkt zur nächsten Rast springen oder mit einer Rastdauer in den Maischeprozess einbinden.

Im Brauverfahren Dekoktion werden Teilmaischen gekocht, während die Restmaische auf einer gewünschten Temperatur gehalten werden. Dekokation mit dem Brautomat würde wie folgt aussehen:

* Restmaische in den zweiten Kessel ziehen. Eine Rast Restmaische ziehen mit deaktiviertem autonext erfüllt diese Aufgabe.
* anschließend schalte den zweiten Kessel auf eine gewünschte Temperatur mit einer Rastdauer von null Minuten dauerhaft ein. autonext ist aktiviert.
* Teilmaische im ersten Kessel mit der gewünschten Rastdauer kochen. autonext ist aktiviert.
* Restmaische aus dem zweiten Kessel zur Teilmaische in den ersten Kessel geben. autonext ist deaktiviert.

Die Rasten in einem Maischeplan in einer 2 oder 3 Kesselumgebung haben folgendes Prinzip:

* zu kochende Teilmaischen werden dem ersten Kessel zugewiesen
* Restmaischen mit Temperatur halten werden dem zweiten oder dritten Kessel zugewiesen
* der Nachguss wird immer dem zweiten oder dritten Kessel zugewiesen

## webhook

Der Parameter PIN weiß Relay muss auf "-" eingestellt werden, damit die webhook Elemente im WebInterface angezeigt werden. Zusätzlich wird die webhook URL und das Schalltkommando benötigt:

![webhook](/docs/img/kessel_webhook1.jpg)

Beispiel Shelly 1PM:

Shelly 1PM einschalten: <http://192.168.1.5/relay/0?turn=on>\
Shelly 1PM ausschalten: <http://192.168.1.5/relay/0?turn=off>

Die webhook URL für Shelly 1PM lautet: <http://192.168.1.5/relay/0?turn=> (ohne on und off). Der Parameter webhook Schalter muss auf "on/off" eingesteltl werden.

URL Tasmota: <http://192.168.x.x/cm?cmnd=Power1%201>

## 🔧 Steuerung der Kessel – Direkt vs. Hybrid

Der Brautomat kann je nach Aufbau mit **1 bis 3 Kesseln** betrieben werden. Jeder Kessel steuert ein eigenes Kochfeld über einen GPIO.  
Der Brautomat ist so ausgelegt, dass sie automatisch in allen Umgebungen stabil funktioniert.

### ⚙️ Zwei mögliche Steuerungsarten

| Variante | Beschreibung | Vorteile | Hinweise |
|-----------|---------------|-----------|-----------|
| **Direktsteuerung** | Das Kommando an das Kochfeld wird direkt ausgeführt. Alle Signale werden unmittelbar vom Hauptprogramm (z. B. `loop()` oder Ticker) an den Ausgang gesendet. | • Einfachste Struktur<br>• Kein zusätzlicher Speicherbedarf<br>• Maximale Geschwindigkeit | • Blockiert die CPU kurzzeitig (ca. 5 ms pro Kommando)<br>• Nicht geeignet für mehrere Kessel gleichzeitig |
| **Hybrid-Steuerung** | Kommandos werden über eine interne **Warteschlange (Queue)** an einen eigenen Task übergeben. Der Task arbeitet alle Befehle nacheinander ab. | • Stabil bei mehreren Kesseln<br>• Keine Signalkollisionen<br>• Hintergrundverarbeitung ohne CPU-Blockierung | • Minimaler zusätzlicher Speicherbedarf (~4 kB)<br> |

### 💡 Umsetzung

Der Brautomat verwendet die **Hybrid-Steuerung**. Diese ist universell einsetzbar und funktioniert in allen Umgebungen, insbesondere in Umgebungen mit 2 oder 3 Induktionskochfeldern:

| Umgebung | Empfohlene Variante | Begründung |
|-----------|--------------------|-------------|
| **1 Kessel** | Hybrid | gleiche Funktion wie Direktmodus, ohne Nachteil |
| **2 Kessel** | Hybrid | sicheres Puffern der Kommandos |
| **3 Kessel** | Hybrid | verhindert Signalüberlagerungen |

> 🔸 Die Direktsteuerung ist nur für spezielle, sehr einfache Aufbauten geeignet (z. B. Einzelkessel mit minimalem Code).  
>
> 🔹 Die Hybrid-Lösung ist für alle modernen ESP32-Baugruppen die **Standard- und empfohlene Variante**.

### 📊 Technische Gegenüberstellung

| Merkmal | **Direkt** | **Hybrid** |
|----------|-------------|-------------|
| Speicherverbrauch | ~0 kB | ~4 kB |
| CPU-Blockierung | ja (ca. 5 ms) | nein |
| Stabilität (mehrere Kessel) | eingeschränkt | hoch |
| Timing-Sicherheit | hoch (1 Kessel) | sehr hoch (1–3 Kessel) |
| Erweiterbarkeit | gering | sehr gut |
| Empfohlene Verwendung | einfache Einzelsysteme | universelle Mehrkesselsysteme |

---

### 🔍 Zusammenfassung

Die Hybrid-Steuerung ist die **empfohlene und standardmäßig aktivierte Betriebsart**.  
Sie sorgt dafür, dass auch bei mehreren Kesseln alle Signale **koordiniert, sicher und zeitgenau** übertragen werden –  
ohne den Hauptprozess zu blockieren.

> ✅ **Kurz gesagt:**  
>
> * Für **1 Kessel**: kein Nachteil, gleiche Performance  
> * Für **2–3 Kessel**: volle Stabilität  
> * Eine Software für alle Varianten
