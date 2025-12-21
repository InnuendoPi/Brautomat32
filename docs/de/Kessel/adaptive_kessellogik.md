# Adaptive Kessellogik – präzise Temperaturführung mit automatischer Intervallsteuerung

Der Brautomat nutzt eine adaptive Heizregelung, um die Maischetemperatur stabil und schonend zu steuern. Die Regelung arbeitet nicht mit einfachen Ein/Aus-Schaltungen, sondern reagiert intelligent auf Temperaturverhalten und passt die Heizleistung dynamisch an.

Dies ermöglicht:

- schnelle Reaktionszeiten  
- stabile Temperaturführung  
- weniger Schwankungen  
- optimale Enzymarbeit  
- entspanntes Brauen ohne Nachregeln  

---

## Funktionsweise der adaptiven Logik

Während des Maischens überwacht das System fortlaufend:

- die aktuelle Temperatur  
- die Temperaturänderung der letzten Minuten  
- den Abstand zur Zieltemperatur  
- die Restwärme im Kessel  
- den Heiztyp (Induktionsfeld, Relais, Fermenter)  

Aus diesen Werten entscheidet die Steuerung kontinuierlich, wie viel Heizleistung tatsächlich benötigt wird.

### 1. Schnelles Aufheizen

Wenn die Zieltemperatur weit entfernt ist, wird mit voller Leistung aufgeheizt, um die nächste Rast schnell zu erreichen.

### 2. Sanftes Annähern

Je näher die Zieltemperatur kommt, desto weiter reduziert das System automatisch die Heizleistung. Dadurch wird ein Überschießen zuverlässig vermieden.

### 3. Stabile Rasttemperatur  

Nach Erreichen der Zieltemperatur hält die adaptive Logik die Temperatur konstant mit minimaler, fein dosierter Heizleistung.

---

## Ramping im Bereich 50–78 °C (ca. 1 °C pro Minute)

Zwischen 50 °C und 78 °C befinden sich alle wichtigen Enzymrasten.  
In diesem Temperaturbereich verwendet die Software eine sanfte Aufheizstrategie:

**Die Aufheizrate wird automatisch auf etwa 1 °C pro Minute begrenzt.**

Dies verhindert starkes Überheizen und sorgt für:

- saubere Temperaturübergänge  
- optimale Enzymaktivität  
- stabilere Rasten  
- reproduzierbare Ergebnisse  

---

## Automatische Intervall-Anpassung

Die adaptive Logik passt zusätzlich zu Heizleistung und Ramping auch die Mess- und Regelintervalle automatisch an.

## Wenn die Temperatur dynamisch ist  

(z. B. beim Aufheizen, Rühren, Nachgießen)

→ Die Intervalle werden **verkürzt**  
→ Die Temperatur wird häufiger aktualisiert  
→ Das System reagiert schneller

## Wenn die Temperatur stabil ist  

(z. B. während einer Rast)

→ Die Intervalle werden **verlängert**  
→ Die Regelung wird ruhiger  
→ Energieverbrauch sinkt  
→ Die Temperatur bleibt stabil ohne Flattern

## Beim Ramping (1 °C pro Minute)

Die Intervalllänge wird dynamisch angepasst:

| Situation | Verhalten der Regelintervalle |
|----------|--------------------------------|
| Temperatur steigt zu schnell | Intervalle kürzer → frühere Korrektur |
| Temperatur steigt zu langsam | Intervalle kürzer → Leistung wird erhöht |
| Temperatur ist genau im Soll | Intervalle länger → ruhiger Betrieb |

Dies ermöglicht eine besonders gleichmäßige Aufheizkurve.

---
