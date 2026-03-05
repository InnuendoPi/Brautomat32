# Adaptive PID Engine im Brautomat32

## Ziel und Lesereihenfolge

Dieses Dokument erklärt die **aktuelle** PID-Engine so, dass ein technisch interessierter Hobbybrauer die Regelung am Kessel nachvollziehen kann: Was misst die Engine, wie entscheidet sie, warum verhält sie sich in der Praxis so, und welche Stellschrauben sind sinnvoll.

Die Reihenfolge ist bewusst gewählt:

1. Zuerst die aktuelle Engine mit allen Begriffen und Parametern.
2. Danach der Vergleich mit der alten Logik (1.59.10) und deren Schwingungsansatz.

Damit tauchen Begriffe nicht "aus dem Nichts" auf.

## 0) Synchronisationscheck zur aktuellen Codebasis (v1.60.3)

Diese Version des Dokuments wurde gegen den aktuellen Stand der Firmware geprüft (`version.json` = 1.60.3). Wichtige Punkte:

- Die Kernlogik in `INNU_APID::Compute()` entspricht der beschriebenen Reihenfolge aus Modusprüfung, Koch-Bypass, Enzym-Limiter, Ramping/Coasting, PID und Anti-Windup.
- In der Implementierung heißt die interne Variable `thresOutput`; im UI-/Dokument-Kontext wird weiterhin oft `thresOut` verwendet. Beides beschreibt dieselbe feste Kochleistung.
- AutoTune nutzt weiterhin den Commit-gesicherten Start über `WAIT_HEAT_COMMIT` und leitet Empfehlungen über `RecalculatePIDFromLR(...)` aus `L/R` ab.
- Die FSM-Zustände/Events sind im aktuellen `InnuTasks`-Stand vorhanden; Queue-Priorisierung (Stop nach vorne) und `TEMP_TICK`-Coalescing sind aktiv implementiert.

Damit ist der fachliche Inhalt auf den aktuellen Code abgeglichen; unten folgen ergänzend konkrete Verbesserungs-Vorschläge für mehr Praxisnutzen am Brautag.

## 1) Aktuelle PID-Engine (heutiger Stand)

### 1.1 Grundidee der aktuellen Engine

Die aktuelle Regelung ist kein einzelner "nackter" PID-Block, sondern eine **mehrstufige Heizstrategie**. Der PID-Kern bleibt wichtig, wird aber durch vorgelagerte Logik ergänzt:

- Kochbereich mit fester Leistung (`thresTemp`/`thresOut`)
- Heat-up-Phase für zügiges Aufheizen
- Enzym-Limiter für schonendere Steigraten im Enzymfenster
- Ramping und Coasting für kontrollierte Annäherung an den Sollwert
- Phasenabhängige PID-Anteile plus Anti-Windup

Das Ziel ist die Kombination aus Geschwindigkeit und Ruhe: weg vom Sollwert schnell, nahe am Sollwert kontrolliert.

### 1.2 Begriffe, die später benutzt werden

#### Sollwert, Istwert, Ausgang

Der **Sollwert** ist die Zieltemperatur der aktuellen Rast. Der **Istwert** ist die gemessene Temperatur. Die Engine berechnet daraus eine **Ausgangsleistung in Prozent** (0 bis 100), die anschließend je nach Aktorpfad als IDS-Befehl, Relais-PWM oder Webhook-Schalten umgesetzt wird.

#### `P`, `I`, `D`

Der Reglerkern besteht weiterhin aus drei Anteilen:

- **P-Anteil** reagiert direkt auf den momentanen Temperaturfehler.
- **I-Anteil** korrigiert bleibende Abweichungen über Zeit.
- **D-Anteil** dämpft die Reaktion, indem er die Änderungsdynamik berücksichtigt.

Die aktuelle Engine setzt diese drei Anteile nicht starr ein, sondern skaliert sie je nach Situation und Phase.

#### `L` und `R` (modellbasierte Anlagenbeschreibung)

Die aktuelle AutoTune arbeitet mit zwei Anlagenparametern:

- **`L`**: Zeit bis eine stabile Heizwirkung am Sensor sichtbar wird (Totzeit/Verzögerungseffekt).
- **`R`**: Temperatur-Steigrate im Aufheizbereich in °C/s.

Diese zwei Werte beschreiben das thermische Verhalten des Kessels und sind die Grundlage für die empfohlenen Reglerparameter.

#### Enzymbereich und **Enzym-Limiter**

Der Enzymbereich ist ein konfiguriertes Temperaturfenster (typisch z. B. 50 bis 75 °C). In diesem Bereich soll die Maische nicht mit maximaler Steigrate durchlaufen.

Der **Enzym-Limiter** ist deshalb ein zusätzlicher Leistungsdeckel: Die PID darf intern rechnen, aber die tatsächlich ausgegebene Leistung wird im Enzymfenster begrenzt. Diese Grenze ist dynamisch und hängt u. a. von `R`, aktueller Steigrate und Tuning Factor ab.

#### **Ramping**

Ramping bedeutet: Die Engine nutzt intern einen **aktiven Sollwert**, der sich dem externen Ziel schrittweise nähert. Statt eines harten Sprungs auf den End-Sollwert wird die Zielgröße in kontrollierten Schritten nachgeführt. Das reduziert harte Regelimpulse.

#### **Coasting**

Coasting ist die "Ausroll"-Phase kurz vor dem Sollwert. Der Regler reduziert die Dynamik frühzeitig, damit die thermische Trägheit den letzten Teil der Annäherung übernimmt. Das reduziert Überschwingen.

#### `sa` und `psa`

- **`sa`** (`sampleTime`): Intervall der PID-Berechnung.
- **`psa`** (`powerSampleTime`): Zeitfenster, in dem die Prozentleistung in konkrete Ein-/Aus-Zeiten umgesetzt wird.

Beide Parameter sind in der aktuellen AutoTune an Aktorart und Kesselverhalten angepasst.

#### `thresTemp` und `thresOut`

Ab `thresTemp` kann die Engine in den Kochmodus wechseln und statt PID mit einer definierten Leistung `thresOut` fahren. Das macht die Kochphase reproduzierbarer.

### 1.3 Was in `Compute()` praktisch passiert

Die Berechnung läuft in einer klaren Reihenfolge:

1. **Modus prüfen**: Nur in `AUTOMATIC` wird geregelt.
2. **Kochlogik prüfen**: Wenn Kochbedingungen erfüllt sind, wird direkt `thresOut` gesetzt.
3. **Heat-up außerhalb Enzymfenster**: Bei großem Abstand zum Sollwert kann Vollleistung genutzt werden.
4. **Enzym-Limiter**: Im Enzymfenster wird das effektive `outMax` abgesenkt.
5. **Ramping/Coasting**: Der aktive Sollwert wird angepasst.
6. **PID-Berechnung**: P/I/D mit phasenabhängiger Skalierung.
7. **Anti-Windup und Grenzlogik**: Integrator und Ausgang werden sauber begrenzt.

Wichtig für das Verständnis: Enzym-Limiter, Ramping und Coasting sind keine "Deko", sondern echte Führungsmechanismen, die vor und neben dem PID wirken.

### 1.4 AutoTune der aktuellen Engine (L/R-basiert)

Die AutoTune ist als zustandsgeführter Ablauf umgesetzt und misst nicht blind "irgendwann", sondern robust:

1. **Start und Commit-Sicherung (`WAIT_HEAT_COMMIT`)**  
   Messung startet erst, wenn die Heizung tatsächlich wirksam geschaltet wurde. Bei IDS wird auf echte gesendete Power-Frames gewartet, bei Relais/Webhook auf den realen Schaltzustand.
2. **`L`-Messung mit Trendkriterium**  
   `L` wird nicht über einen einzigen Messsprung bestimmt, sondern über eine stabile positive Temperaturtrend-Erkennung (mit Fallback über Mindest-ΔT).
3. **`R`-Messung mit linearem Fit**  
   `R` wird über ein Zeitfenster mit linearem Fit geschätzt. Frühe Nichtlinearität wird übersprungen, Konvergenz wird geprüft, und es gibt Plausibilitätsgrenzen.
4. **Ableitung der Empfehlung aus `L`/`R`**  
   Aus den Messwerten werden `Kp`, `Ki`, `Kd`, `sa`, `psa`, `thresOut` und Heat-up-Fenster bestimmt.

### 1.5 Wie die Engine aus `L` und `R` auf `P/I/D` kommt

In der Funktion `RecalculatePIDFromLR(...)` werden aus dem Anlagenmodell konkrete Reglerwerte berechnet. Dabei fließen mehrere Dinge ein:

- Anlagenklasse (schnell/normal/langsam) aus `R`
- Aktorpfad (IDS vs. Relais/Webhook) für sinnvolle Zeitfenster
- Volumenabhängige Anpassungen
- Tuning Factor als Stilparameter

Die diskreten Reglerwerte entstehen aus kontinuierlichen Größen, die an die gewählte Abtastzeit (`sa`) angepasst werden. Dadurch passt die Engine den Regler an die reale Taktung an, statt nur statische Tabellenwerte zu übernehmen.

### 1.6 Tuning Factor im Detail

Der Tuning Factor verändert **nicht** die gemessenen physikalischen Werte `L` und `R`, sondern den Regelstil:

- Bei kleinerem Wert: defensiver, früheres Bremsen, kleinere effektive Aggressivität.
- Bei höherem Wert: späteres Bremsen, mehr Vortrieb, engeres Stabilitätsfenster.

Technisch wirkt der Faktor gleichzeitig auf mehrere Ebenen:

- Übergangszonen zwischen Heat-up, Approach und Coasting
- Effektive P-/I-/D-Stärke
- Enzym-Limiter-Grenzen
- Ramping-Dynamik

Genau deshalb fühlt sich derselbe Kessel mit unterschiedlichem Tuning Factor deutlich anders an, obwohl das zugrunde liegende `L/R`-Modell gleich bleibt.

Technisch steckt dahinter in der aktuellen Engine eine mehrfache Skalierung:

- Für die PID-Synthese wird ein Faktor `alpha` verwendet (`alpha = 3.0 - 0.75 * tuneFactor`, begrenzt auf 1.0 bis 3.0).  
  Niedriger Tuning Factor ergibt also ein größeres `alpha` und damit eine defensivere Auslegung, höherer Tuning Factor ein kleineres `alpha` und damit eine direktere Auslegung.
- Der I-Anteil wird zusätzlich mit einem I-Skalierer beeinflusst (`betaIScale = 1.0 + tuneFactor/8.0`, gedeckelt).  
  Dadurch ändert sich nicht nur „wie schnell“ der Regler reagiert, sondern auch, wie stark er bleibende Abweichungen aktiv nachzieht.
- Der D-Stilfaktor enthält ebenfalls den Tuning Factor (`dFactorStyle = 0.7 + 0.3 * tuneFactor`).  
  Damit wird die Dämpfung zwischen „ruhig“ und „sportlich“ verschoben, ohne den Regler instabil werden zu lassen.
- In der Führungslogik wirkt der Faktor parallel auf Ramping und Coasting sowie auf den Enzym-Limiter.  
  Praktisch heißt das: nicht nur die Reglergleichung ändert sich, sondern der gesamte Fahrstil der Temperaturkurve.

Für den Brauer ist der Tuning Factor damit die wichtigste Feinjustage, weil er gleichzeitig mehrere Stellglieder koordiniert. Genau deshalb ist er im Alltag oft wirksamer als isoliertes Drehen an nur `P`, `I` oder `D`.

### 1.7 Praxisleitfaden für den Brauer

Für reproduzierbare Ergebnisse am Brautag ist diese Reihenfolge sinnvoll:

1. AutoTune mit realistischem Volumen und echter Umwälzung fahren.
2. Plausibilität von `L`, `R`, `sa`, `psa`, `thresOut` prüfen.
3. Erst den Tuning Factor anpassen.
4. Manuelle Eingriffe in `P/I/D` nur in kleinen Schritten und isoliert testen.

Typische Fehler sind nicht "falsche Mathematik", sondern falsche Randbedingungen: zu wenig Volumen beim Tuning, andere Pumpensituation als im Braubetrieb oder viele gleichzeitige Parameteränderungen.

### 1.8 Konkreter Praxisnutzen am Brautag (direkt anwendbar)

Dieser Abschnitt ist als Arbeitsanleitung gedacht, nicht als Theorie.

#### So verwendest du diesen Abschnitt

1. Symptom in der Matrix unten auswählen.
2. Nur die **erste Maßnahme** umsetzen und mindestens einen Rast- oder Heizabschnitt beobachten.
3. Nur wenn das Symptom bleibt, die **zweite Maßnahme** ausführen.
4. Immer nur **eine** Stellgröße gleichzeitig ändern (sonst ist keine Ursache eindeutig).

#### 2-Minuten-Check vor dem Start

- Volumen liegt im Bereich des AutoTune-Laufs (Ziel: innerhalb von etwa +/-10 %).
- Pumpen-/Rührwerkszustand ist identisch zum AutoTune-Lauf.
- Sensorwerte sind plausibel (keine Sprünge, keine offensichtlichen Ausreißer).
- Für diesen Sud sind noch keine parallelen Änderungen an mehreren Parametern geplant.

#### Startprofile nach Setup (für den ersten Lauf)

| Setup | Startpunkt | Erste sichere Korrektur |
|---|---|---|
| 20-30 L, starke Umwälzung, IDS | AutoTune-Werte unverändert + mittlerer Tuning Factor | Bei Überschwingen zuerst Tuning Factor leicht senken |
| 40-60 L, Relais/PWM, mittlere Trägheit | AutoTune-Werte unverändert + mittlerer bis leicht defensiver Tuning Factor | Bei trägem Aufheizen Tuning Factor in kleinen Schritten erhöhen |
| HLT / träges System | AutoTune-Werte + eher defensiver Tuning Factor | Bei Pendeln im Haltebereich Tuning Factor leicht senken, erst danach `P/I/D` prüfen |

#### Symptom -> Maßnahme (Braualltag)

| Symptom | Wahrscheinliche Ursache | Erste Maßnahme | Zweite Maßnahme |
|---|---|---|---|
| Überschwingen > 0.5 K im Enzymbereich | Regler zu aggressiv oder reale Trägheit höher als beim Tuning | Tuning Factor leicht senken | Enzymfenster/Coasting prüfen, danach erst `P/I/D` fein anpassen |
| Aufheizen deutlich zu langsam | Zu defensiver Fahrstil oder geänderte Umwälzung/Volumen | Umwälzung und Volumen-Realität prüfen | Tuning Factor moderat erhöhen |
| Rast hält nicht stabil (ständiges Nachregeln) | Sensorposition/Strömung ungünstig, `sa`/`psa` unplausibel | Sensorlage und Durchmischung prüfen, `sa`/`psa` plausibilisieren | Danach erst `I` klein nachführen |
| Ruhiger Start, später Schwingen nahe Soll | Thermische Verzögerung wurde unterschätzt | Coasting-Verhalten prüfen | Tuning Factor leicht senken, ggf. `D` vorsichtig anheben |
| AutoTune passt, Brautag verhält sich anders | Randbedingungen zwischen Tuning und Produktion abweichend | AutoTune unter echten Braubedingungen wiederholen | Erst danach manuelle PID-Korrektur |

#### Grenzen der Automatik (wichtig)

Wenn Durchmischung schlecht ist, Sensoren träge montiert sind oder Heizleistung nicht zum Volumen passt, dominiert die Prozessphysik. Dann bringt PID-Feintuning nur wenig. In diesen Fällen zuerst die Anlage/Prozessführung verbessern, danach erneut tunen.

## 2) FSM in der aktuellen Engine

### 2.1 Warum die FSM eingeführt wurde

Die aktuelle Engine trennt bewusst zwischen **Regelalgorithmus** (PID/AutoTune) und **Ablaufsteuerung** (Start, Stop, Pause, Stepwechsel, Moduswechsel).  
Genau dafür ist die FSM da: Sie sorgt dafür, dass immer klar ist, in welchem Betriebszustand das System ist und welche Aktion als Nächstes erlaubt ist.

In der Praxis verhindert das vor allem drei typische Fehlerklassen:

- eine Aktion wird mehrfach ausgelöst (z. B. Start/Stop in kurzer Folge),
- ein Schritt bleibt in einem Zwischenzustand hängen (z. B. WAIT ohne Rückkehrpfad),
- Bedienlogik und Heizlogik geraten bei Sonderfällen auseinander.

Die FSM ist damit kein „Zusatzfeature“, sondern das organisatorische Rückgrat der aktuellen Engine.

### 2.2 Die globalen Betriebsmodi

Auf oberster Ebene arbeitet die Engine mit exklusiven Betriebsmodi:

- `MODE_NONE`: kein aktiver Brau-/Fermenter-/Autotune-Prozess,
- `MODE_MASH`: automatischer Maischeablauf,
- `MODE_MANUAL`: manuelle Kesselsteuerung,
- `MODE_AUTOTUNE`: AutoTune aktiv,
- `MODE_FERM`: Fermenterablauf.

Wichtig ist die Exklusivität: Es läuft immer genau ein Modus aktiv. Beim Wechsel wird der alte Modus sauber beendet, bevor der neue aktiv wird. Dadurch entstehen keine „halben“ Zustände wie gleichzeitig aktiver Manual- und Autotune-Betrieb.

### 2.3 Die FSM-Zustände im Ablauf

Innerhalb der Ablaufsteuerung arbeitet die Maschine mit klaren Zuständen:

- `MASH_IDLE`: kein aktiver Plan,
- `MASH_WAIT_TEMP`: Aufheizphase bis Temperatur-Gate frei gibt,
- `MASH_RUNNING_STEP`: Schritt läuft mit aktivem Timer,
- `MASH_PAUSED`: Pause aktiv, Timer angehalten,
- `MASH_WAIT_USER`: Warten auf Benutzeraktion (z. B. AutoNext aus),
- `MASH_FINISHED`: Plan sauber beendet,
- `MASH_AUTOTUNE_RUNNING`: AutoTune läuft.

Der große Vorteil ist die Eindeutigkeit: Jede UI-Aktion und jedes interne Event hat einen definierten Zustand als Eingang und einen definierten Folgezustand als Ausgang.

### 2.4 Events: Wie die FSM „angetrieben“ wird

Die FSM arbeitet ereignisbasiert. Typische Events sind:

- `MASH_EVT_START`, `MASH_EVT_STOP`,
- `MASH_EVT_PLAY`,
- `MASH_EVT_PAUSE_START`, `MASH_EVT_PAUSE_STOP`,
- `MASH_EVT_NEXT_STEP`, `MASH_EVT_PREV_STEP`,
- `MASH_EVT_TEMP_TICK`,
- `MASH_EVT_TIMEOUT`,
- `MASH_EVT_AUTOTUNE_START`, `MASH_EVT_AUTOTUNE_STOP`.

Diese Events landen in einer Queue. Entscheidend für Robustheit ist die Priorisierung:

- Kritische Events wie Stop/Autotune-Stop werden bevorzugt nach vorne gestellt.
- Häufige, idempotente Events wie `TEMP_TICK` werden zusammengefasst (Coalescing), damit die Queue nicht vollläuft.

Dadurch bleibt das System auch unter Last reaktionsfähig und „Stop“ wird nicht von weniger wichtigen Events blockiert.

### 2.5 Virtueller Timer statt losem Tick-Verhalten

Für Schrittlaufzeiten nutzt die FSM einen eigenen virtuellen Timer mit:

- `running`,
- `periodMs`,
- `remainingMs`,
- `deadline`.

Das klingt unscheinbar, ist aber zentral: Die Restlaufzeit ist explizit Zustand und nicht nur ein Nebeneffekt von Tick-Intervallen.  
Pause/Fortsetzen, Timeouts, Stepwechsel und UI-Anzeige greifen damit auf dieselbe Zeitquelle zu.

### 2.6 Konkreter Ablauf in der neuen Engine

Typischer Maischeablauf in FSM-Sprache:

1. `START` setzt Modus/State auf aktiven Betrieb.
2. Engine geht in `WAIT_TEMP` und bereitet Heizen für den Schritt vor.
3. `TEMP_TICK` prüft das Temp-Gate.
4. Bei Gate-Freigabe startet der Step-Timer, Zustand wird `RUNNING_STEP`.
5. Bei Ablauf des Timers kommt `TIMEOUT`.
6. Je nach Schrittkonfiguration folgt AutoNext oder `WAIT_USER`.
7. `PLAY` setzt den Ablauf fort oder startet den nächsten zulässigen Schritt.
8. `STOP` führt immer in einen sauberen Endzustand zurück.

Dasselbe Muster gilt auch für Sonderfälle wie 0-Temperatur-/0-Dauer-Steps, Actor-Steps und AutoTune-Start/Stop: nicht als Sonderhack in der Loop, sondern als definierter Eventpfad.

### 2.7 Zusammenspiel von FSM und PID-Engine

Wichtig ist die Rollenverteilung:

- Die FSM entscheidet **wann** geregelt oder geheizt werden darf.
- Die PID-Engine entscheidet **wie** innerhalb dieses Fensters geregelt wird.

So bleiben Verantwortlichkeiten sauber getrennt:  
Ablaufsteuerung (FSM) für Prozesslogik, PID/AutoTune für thermische Regelung.

## 3) Vergleich mit der alten PID-Version 1.59.10

### 3.1 Architektur damals: Ticker-getrieben statt heutiger FSM-Task-Orchestrierung

Im 1.59.10-Stand lief die Regelung über zyklische `InnuTicker`-Callbacks. `TickerPID` rief `tickerPIDCallback()` auf; dort liefen je nach Zustand entweder `runAtune(...)` oder reguläre `Compute(...)`-Aufrufe. Das war funktional, aber deutlich stärker an feste Tickerzyklen gebunden.

Heute ist der Ablauf stärker über Tasks und Zustandslogik (FSM) organisiert, wodurch AutoTune, Regelung, UI-Update und Moduswechsel robuster entkoppelt werden.

### 3.2 Regelung damals in `InnuAPID.cpp`

Die alte `Compute()` war ein klassischer PID mit Grenzlogik:

- P/I/D-Berechnung
- Windup-Schutz über Grenzen
- Kochumschaltung über `thresTemp`/`thresOut`

Was damals noch nicht in dieser Form vorhanden war: ausgeprägte Phasenführung mit Ramping/Coasting und ein systemadaptiver Enzym-Limiter auf Basis des Anlagenmodells.

### 3.3 AutoTune damals: Schwingungsmethode mit `Ku/Pu`

Jetzt die Begriffe, die in der alten Welt zentral waren:

- **`Ku` (Ultimate Gain)**: kritische Verstärkung, bei der das System gerade anfängt dauerhaft zu schwingen.
- **`Pu` (Ultimate Period)**: Periodendauer dieser kritischen Schwingung.

Die alte AutoTune erzeugte gezielt eine Relais-Schwingung um den Sollwert (`RELAY_STEP_UP`/`RELAY_STEP_DOWN`), detektierte Peaks über Lookback-Fenster und leitete daraus `Ku`/`Pu` ab. In `autoPID.cpp` wurden `Ku` und `Pu` dann über ausgewählte Tuning-Regeln (Divisoren pro Regel) in `P/I/D` umgerechnet.

Das ist ein klassischer und legitimer Ansatz, aber sensibel auf Peak-Erkennung, Rauschen und Zyklus-Timing.

### 3.4 Was der Unterschied in der Praxis bedeutet

Im direkten Braubetrieb ist der wichtigste Unterschied:

- Alt: Schwingungskennwerte (`Ku/Pu`) plus feste Tuning-Regel.
- Neu: Anlagenmodell (`L/R`) plus phasenabhängige Führungslogik.

Dadurch ist die aktuelle Engine im Alltag oft reproduzierbarer, besonders wenn Kesselgröße, Sensorlage oder Aktorpfad wechseln.

## 4) Abschlussvergleich: FSM vs. Loop mit InnuTicker (ohne Tasks)

Der Unterschied liegt nicht nur in „neuere Struktur“, sondern in der Art, wie der Ablauf technisch abgesichert wird.

### 4.1 Loop + InnuTicker (ohne Tasks)

Im alten Verfahren wurden viele Funktionen zyklisch in der `loop()` über mehrere `Ticker.update()`-Aufrufe getaktet. Das ist einfach und gut nachvollziehbar, hat aber Grenzen:

- Die Reihenfolge im Loop bestimmt indirekt Prioritäten.
- Zeitkritische und weniger kritische Aktionen teilen sich denselben Durchlauf.
- Zustandswechsel entstehen häufig verteilt über mehrere Callbacks.
- Bei Sonderfällen steigt der Aufwand für Guard-Logik in vielen Einzelstellen.

Für klassische Grundabläufe funktioniert das, aber mit wachsender Komplexität wird die Kopplung zwischen UI, Ablauf und Heizlogik schnell unübersichtlich.

### 4.2 FSM + Task-Architektur

Im aktuellen Verfahren arbeitet die Ablaufsteuerung als Ereignisautomat mit klaren Zuständen und Event-Queue. Sensor-, Kessel-, System- und Ablaufverarbeitung sind taskbasiert getrennt.

Praktischer Nutzen:

- definierte Übergänge statt impliziter Nebenwirkungen,
- priorisierte Stop-/Sicherheits-Events,
- weniger Queue-Fluten durch Event-Coalescing,
- stabilere Reaktion bei gleichzeitigen Aktionen (UI, Sensorupdate, Timeout, Moduswechsel).

Gerade bei AutoTune, Pause/Fortsetzen und Sondersteps ist diese Struktur deutlich robuster als ein rein zyklischer Loop-Ablauf.

## 5) IDS-RMT-Remote-Control-Logik (aktuelle Lösung)

### 5.1 Ziel der IDS-Sendelogik

Die aktuelle IDS-Ansteuerung ist so aufgebaut, dass die Leistungsvorgaben der PID-Engine sauber in echte IDS-Telegramme umgesetzt werden, ohne den restlichen Ablauf zu blockieren.  
Dafür wurde die Sendelogik von der eigentlichen Kesselregelung getrennt.

Praktisch heißt das:

- `Update()` und PID liefern nur den gewünschten Zielbefehl (`cmd`) und ob TX aktiv sein soll.
- Ein separater IDS-TX-Task übernimmt das tatsächliche Senden über RMT.
- Die Heizlogik bleibt dadurch reaktiv, auch wenn viele Telegramme gesendet werden.

### 5.2 Wie die neue RMT-Lösung arbeitet

Die neue Lösung kombiniert drei Ebenen:

1. **RMT-Frame-Erzeugung pro Kommando**  
   Ein IDS-Frame wird als Startsequenz plus 33 Bit-Paare aufgebaut. Die Pulszeiten kommen aus der bekannten IDS-Befehlsmatrix (`P0` bis `P10`).
2. **Dedizierter TX-Task für mehrere Kessel**  
   Der Task läuft als kontinuierlicher Sender und bedient alle aktiven IDS-Kessel fair, statt nur einen Kessel am Stück „durchzudrücken“.
3. **Snapshot/Atomic-Steuerung**  
   Kessel-Update schreibt nur atomare Snapshot-Werte (`enabled`, `cmd`, Burst-Sequenz). Der TX-Task liest diese Werte und sendet.

Damit ist die Verantwortung klar getrennt: Regellogik erzeugt Soll-Kommandos, TX-Logik sorgt für zeitlich sauberen Versand.

### 5.3 Zentrale Schutzmechanismen der neuen Lösung

Die aktuelle IDS-TX-Logik enthält mehrere wichtige Sicherungen:

- **Fair Scheduling**: pro Runde maximal ein Frame je Kessel, damit mehrere Kessel sich nicht gegenseitig verhungern.
- **Burst-Logik**: bei Start, Stufensprung oder echtem Aus-Übergang werden mehrere Wiederholframes ausgelöst, um kritische Kanten robuster zu machen.
- **Keepalive**: wenn ein Leistungslevel gehalten wird, werden in definierten Abständen Refresh-Frames gesendet.
- **Relay-Settle-Zeit**: nach Relais-EIN wird eine kurze Stabilisierung abgewartet, bevor Nicht-Null-Kommandos gesendet werden.
- **Pinwechsel-Handling**: bei Änderung des gelben IDS-Pins wird alter RMT-Kontext sauber freigegeben und neu initialisiert.

Gerade diese Punkte sind für stabile Praxis wichtig, weil sie nicht nur „ein Telegramm senden“, sondern den realen Betrieb mit Relais, mehreren Kesseln und Lastwechseln absichern.

### 5.4 Bedeutung für AutoTune

Die neue AutoTune-Logik startet die eigentliche Messung erst nach bestätigtem Heiz-Commit.  
Bei IDS wird dafür nicht nur „Soll-Befehl gesetzt“ geprüft, sondern der Zeitpunkt eines tatsächlich gesendeten Power-Frames.

Das verbessert die Messqualität von `L`, weil Messstart und reale Heizwirkung zeitlich sauberer zusammenliegen.

### 5.5 Vergleich zur alten blockierenden Lösung

Die alte IDS-Sendelogik arbeitete frameweise blockierend über Bit-Toggling:

- `digitalWrite(HIGH/LOW)` im Bitloop,
- `ets_delay_us(...)` pro Bitdauer,
- zusätzliche Guard-Zeit nach dem Frame.

Damit war der Sendevorgang für die Dauer eines Frames aktiv blockierend auf dem ausführenden Kontext.

Die neue RMT-Lösung unterscheidet sich konzeptionell:

1. **Alt**: Bit-Timing in Software-Schleifen mit Busy-Wait.  
   **Neu**: Pulsfolge per RMT-Hardware, Versand über dedizierten TX-Task.
2. **Alt**: Blockierende Frame-Ausgabe je Kommando.  
   **Neu**: Nicht-blockierende Ablaufsteuerung, fairer Multi-Kessel-Versand.
3. **Alt**: Begrenzte Entkopplung zwischen Regel- und Sendelogik.  
   **Neu**: klare Trennung durch Snapshot-API und TX-Worker.
4. **Alt**: weniger robuste Kantenbehandlung bei Start/Stufenwechsel.  
   **Neu**: Burst-, Keepalive- und Settle-Mechanik integriert.

Für den Brauer ist der praktische Effekt vor allem: stabileres Schaltverhalten bei gleichzeitiger Prozesslast und reproduzierbarere AutoTune-Messstarts.

### 5.6 Schnellvergleich Alt vs. Neu

| Thema | Alt (blockierend) | Neu (RMT + TX-Task) |
| --- | --- | --- |
| Signal-Erzeugung | `digitalWrite` + `ets_delay_us` im Bitloop | RMT-Hardware erzeugt Pulsfolge |
| Ausführung | Frameweise blockierend im ausführenden Kontext | Entkoppelt über dedizierten IDS-TX-Task |
| Mehrere Kessel | Keine echte faire Interleaving-Logik | Fair Scheduling, max. 1 Frame/Kessel/Runde |
| Kantenrobustheit | Basisumschaltung ohne systematische Burst-Strategie | Burst bei Start/Stufensprung/Off-Edge |
| Halteleistung | Kein expliziter Keepalive-Mechanismus | Definierter Keepalive je nach Betriebsfall |
| AutoTune-Startbezug | Heizanforderung und echte Sendung zeitlich weniger klar gekoppelt | Commit über tatsächlich gesendeten Power-Frame |

## Fazit

Die aktuelle PID-Engine ist kein kleines "Feintuning" der alten Version, sondern ein struktureller Wechsel:

1. von `Ku/Pu`-Schwingungslogik zu `L/R`-Modell
2. von stark tickergeführter Ausführung zu FSM-/Task-orientierter Orchestrierung
3. von primär klassischem PID zu einer phasenorientierten, brauprozessnahen Regelstrategie
4. von blockierender IDS-Bitbang-Sendung zu RMT-basierter, entkoppelter TX-Logik

Für den Brauer bedeutet das: mehr Stellschrauben mit klarer Funktion und in der Regel eine ruhigere, besser nachvollziehbare Temperaturführung.
