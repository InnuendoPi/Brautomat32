# Das RSteckCase

Das RSteckCase wurde vom Hobbybrauer ralfsteck entworfen. Die 3D Druckdateien sind im Archiv Gehaeuse/RSteckCase/RSteckCase.zip hinterlegt.\
Das Gehäuse ist unterteilt in die zwei Baugruppen Gehäuseunterteil und Gehäusedeckel.

## RSteck „Stachelschwein“-Gehäuse für den Brautomat

![Ralf Steck Gehäuse](/docs/img/rsteckcase2.jpg)
![Ralf Steck Gehäuse](/docs/img/rsteckcase1.jpg)
![Ralf Steck Gehäuse](/docs/img/rsteckcase3.jpg)

## Übersicht

- **Brautomat-Steuerung** mit Display im Pultgehäuse
- **Maischekesselheizung** über IDS5-Platte (umgebaut mit 4-Pol-Schalter, um zwischen externer und Frontplattensteuerung umzuschalten)
- **2x SSR-Relais** für Sudpfanne und Nachgusskessel
- **PWM-Geschwindigkeitssteuerung** (Mosfet) für das Rührwerk
- **2 Relaisausgänge**, einer davon aktuell noch nicht nach außen geführt
- **3x DS18B20-Temperatursensoren** für alle 3 Töpfe

> _Der Name „Stachelschwein“ erschließt sich schnell, wenn man das Gehäuse mit allen 11 Kabeln angeschlossen sieht, die wirr in alle Richtungen abstehen._

## Gehäuse

- Gefunden bei eBay für ca. 13 Euro.
- Name: „Baustromverteiler Gehäuse 16A 400V 2x 230V Schuko VDE Leergehäuse mit Steckdosen“
- Alternativer Suchbegriff: Kombi-Wandsteckdose
- Hersteller: TP-Electric, Modell: [120x170 Combination Box](https://tpelectric.com.tr/en/products/48/120x170)
- Vorteil: Zwei Schuko-Steckdosen oben, ideal für die SSR-Ausgänge

## Schaltung & Komponenten

- **Innuendos Platine** mit ESP-32
- **12V auf 5V Spannungswandler**  
  [Amazon-Link](https://www.amazon.de/dp/B07XFMMY1F)
- **2-Relais-Schaltkarte von AZ-Delivery**  
  [Amazon-Link](https://www.amazon.de/dp/B07TYXBFJ3?th=1)
- **Mosfet-Drehzahlregler**  
  [Amazon-Link](https://www.amazon.de/dp/B0DG8B58PM)
- **2x SSR-40DA Solid State Relais**  
  [Amazon-Link](https://www.amazon.de/dp/B0DQKWNVJ6)
- **2x SSR-Kühlkörper**  
  [Amazon-Link](https://www.amazon.de/dp/B08C76VHZ5)
- **2x Kaltgerätebuchse für die 220V-Anschlüsse**  
  [Amazon-Link](https://www.amazon.de/dp/B0D4MB1321)
- **Diverse SP13 „Luftfahrt“-Steckverbinder** (2, 3 und 5-polig)  
  [Amazon-Link](https://www.amazon.de/dp/B0CTY7F75W)

## Umbau & 3D-Druck

- Für den Umbau der IDS5:  
  **4-poliger Ein/Ein-Schalter**  
  [Amazon-Link](https://www.amazon.de/dp/B07H65423M)
- Stecker von Forumsmitglied Jojo5
- Für die Innuendo-Platine:  
  - Höhergelegter Schlitten (3D-gedruckt)
  - Weitere 3D-Druckteile: Halter für Spannungswandler und Relaiskarte, Abdeckung des Frontpanels, Handhalter für die Steuerung  
  - _(Link zu den STL-Daten kann hier ergänzt werden)_

## Verkabelung & Stromversorgung

- 12V-Eingang hinten unten in der Mitte (Netzteil des Rührwerks)
- 12V-Strom wird auf Relais und Mosfet-Ausgang sowie auf den Stromwandler geführt
- Nach dem Stromwandler: 5V auf SSR-Schalteingänge, Innuendo-Platine und Relaiskarte
- Für die Verkabelung:  
  **Hebelklemmen**  
  [Amazon-Link](https://amzn.eu/d/aeKAEhg)  
  (Erleichtert das Lösen der Verbindung zu den SSRs und das Abnehmen des Deckels)

## Hochvolt-Bereich & Kühlung

- 220V-Bereich komplett im Deckel, abgedeckt mit biegsamer Kunststoffplatte
- Stromfluss: Kaltgerätebuchsen → SSR → Schukosteckdosen
- Kühlkörper werden beim Brauen ca. 60°C warm, Wandmontage ermöglicht Luftzirkulation von unten nach oben
- (Auf Bildern ist zum Teil ein drittes SSR zu sehen, das nicht mehr genutzt wird)

## Umbau IDS-Platte

- Einbau eines vierpoligen Ein/Ein-Schalters vorne rechts an der Unterseite
- Verkabelung:
  - Mittlere Polreihe: Stecker Richtung Heizelement
  - Vordere Polreihe: 5-poliges Kabel Richtung Brautomat
  - Hintere Polreihe: Buchse Richtung Bedienfeld-PCB
  - Drei GND-Leitungen direkt miteinander verlötet
- Schalter nach vorn: Bedienfeld aktiv  
  Schalter nach hinten: Steuerung per Brautomat

---
