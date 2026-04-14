# API Brautomat32

Diese beiden JavaScript-Funktionen erleichtern die Kommunikation mit dem Brautomat32.  
Sie kapseln `fetch()`-Aufrufe, behandeln Fehler, JSON/Text-Erkennung und optionale Benutzerhinweise.

---

## apiGET(url, alarm, toast, log)

- `url`: Endpoint-URL
- `alarm`: `sendAlarm` aktivieren, Standard `false`
- `toast`: Toast-Nachricht bei Fehler, Standard `false`
- `log`: Debug-Ausgaben in der Browser-Konsole, Standard `false`
- Rueckgabe: `Promise<any>`

**Beispiel**

```js
const misc = await apiGET("/reqMisc", false, false, true);
console.log(misc);
```

---

## apiPOST(url, data, alarm, toast, log, postType, responseType)

- `url`: Endpoint-URL
- `data`: Datenobjekt fuer `json`, `text` oder `formdata`
- `alarm`: `sendAlarm` aktivieren, Standard `false`
- `toast`: Toast-Nachricht bei Fehler, Standard `false`
- `log`: Debug-Ausgaben in der Browser-Konsole, Standard `false`
- `postType`: `json`, `text` oder `formdata`
- `responseType`: `json` oder `text`
- Rueckgabe: `Promise<any>`

**Beispiel**

```js
await apiPOST("/setKettle", { temp: 65, pid: true }, true, false, true);
```

---

## WebServer Handler Brautomat32

Brautomat HTTP-Endpunkte. Der WebServer unterstuetzt GET, POST, PUT und DELETE.

---

## Basis-Endpunkte

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/` | GET | Laedt die Startseite |
| `/index`, `/index.html` | GET | Alternative Routen fuer die Startseite |
| `/dashboard`, `/dashboard/` | GET | Laedt die reduzierte Dashboard-Ansicht |

---

## Sensoren

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/reqSensors?id=${sensorid}` | GET | Gibt eine Liste aller Sensoren zurueck |
| `/setSensor?id=${sensorid}` | POST | Fuegt einen Sensor hinzu oder aendert ihn |
| `/delSensor?id=${sensorid}` | POST | Loescht einen Sensor |
| `/reqSearchSensorAdresses?id=${sensorid}` | GET | Durchsucht verfuegbare Sensor-Adressen |
| `/senkal` | POST | Fuehrt eine Sensorkalibrierung durch |

| sensorid | Beschreibung |
| ----------- | ---------- |
| -1 | ruft alle Sensoren ab |
| 0 - 2 | Sensor-ID |

---

## Aktoren

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/reqActors?id=${actorid}` | GET | Gibt eine Liste aller Aktoren zurueck |
| `/setActor?id=${actorid}` | POST | Erstellt oder aendert einen Aktor |
| `/delActor?id=${actorid}` | POST | Loescht einen Aktor |
| `/actorPower?id=${actorid}` | POST | Schaltet die Leistung eines Aktors |
| `/actorPWM?id=${actorid}` | POST | Setzt den PWM-Wert eines Aktors |

| actorid | Beschreibung |
| ----------- | ---------- |
| -1 | ruft alle Aktoren ab |
| 0 - 9 | Aktor-ID |

---

## Kessel

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/reqKettle?id=${kettleid}` | GET | Gibt aktuelle Kesseldaten zurueck |
| `/reqKettlePID?id=${kettleid}` | GET | Fragt PID-Parameter ab |
| `/setKettle?id=${kettleid}` | POST | Aendert Kesseldaten |
| `/setKettlePID?id=${kettleid}` | POST | Aendert PID-Parameter oder berechnet sie neu |
| `/handlePower?id=${kettleid}` | POST | Aktiviert oder deaktiviert Leistung |

| kettleid | Beschreibung |
| ----------- | ---------- |
| 0 | Maischekessel |
| 1 | Sudkessel |
| 2 | HLT |
| 3 | Fermenter |

---

## Profile

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/setProfile` | POST | Neues Profil erstellen oder aendern |
| `/changeProfile?id=${kettleid}&pname=${pname}` | POST | Aktives Profil wechseln |
| `/renameProfile` | POST | Profil sicher umbenennen und aktive Referenzen aktualisieren |
| `/delProfile?pname=${pname}` | POST | Profil loeschen |

| kettleid | Beschreibung |
| ----------- | ---------- |
| 0 | Maischekessel |
| 1 | Sudkessel |
| 2 | HLT |
| 3 | Fermenter |
| pname | Profilname |

---

## Sud / Rezeptverwaltung

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/setSud` | POST | Bestehenden Sud konfigurieren |
| `/setSudNew` | POST | Neuen Sud anlegen |
| `/setSudRen` | POST | Sud umbenennen |
| `/setSudCopy` | POST | Sud kopieren |
| `/setSudCha` | POST | Sud wechseln |
| `/delSud` | POST | Sud loeschen |
| `/reqSud` | GET | Sud-Parameter abrufen |
| `/reqSudname` | GET | Aktuellen Sudnamen abrufen |
| `/reqBrauStart` | GET | Brauvorgang starten |

Hinweis: Rezeptaenderungen sind nur im Idle-Zustand moeglich.

---

## Misc / Allgemeine Einstellungen

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/reboot` | POST | Neustart des Geraets |
| `/reqMisc` | GET | Allgemeine Systeminformationen |
| `/reqVis` | GET | Visualisierungsdaten abrufen |
| `/reqWifiCredentials` | GET | Gespeicherte WLAN-Zugangsdaten abrufen |
| `/reqFirmwareSlot` | GET | Aktive Firmware-Partition und Versionsdaten abrufen |
| `/scanWifi` | GET | WLAN-Scan starten oder Ergebnis abrufen |
| `/getLanguage` | GET | Aktuell gewaehlte Sprache abrufen |
| `/setMisc` | POST | Allgemeine Einstellungen aendern |
| `/setWifiCredentials` | POST | WLAN-Zugangsdaten speichern |
| `/setMiscLang` | POST | Sprache einstellen |
| `/uploadLanguage` | POST | Sprachdatei hochladen |
| `/rezimp` | POST | Rezept importieren |
| `/upload` | POST | Rezeptdatei hochladen |
| `/setMash` | POST | Maischplan setzen |
| `/startHTTPUpdate` | POST | Firmware-Update starten |
| `/setFerm` | POST | Gaerparameter setzen |

---

## Steuerung

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/Btn-Power` | GET | Power-Button ausloesen |
| `/Btn-Pause` | GET | Pause-Button ausloesen |
| `/Btn-Play` | GET | Start-Button ausloesen |
| `/Btn-Next-Step` | GET | Naechster Schritt |
| `/Btn-Prev-Step` | GET | Vorheriger Schritt |
| `/Btn-Edit` | POST | Edit-Modus aktivieren |
| `/manpow` | POST | Manuelle Leistung steuern |

---

## Server-Sent Events (SSE)

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/channel` | GET | SSE-Kanal oeffnen |
| `/startSSE` | GET | SSE-Verbindung starten |
| `/checkAliveSSE` | GET | Aktive SSE-Verbindungen pruefen |
| `/reloadMashSSE` | GET | Maischdaten neu laden |

---

## Graph / Diagrammdaten

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/getDots` | GET | Diagrammdaten abrufen |
| `/removeDots` | POST | Diagrammdaten loeschen |

---

## BrewFather Integration

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/getbf` | GET | Liste verfuegbarer BrewFather-Rezepte |
| `/bfRecipe` | POST | Rezeptdetails abrufen |
| `/bfbatche` | POST | Legacy-/Frontend-Kompatibilitaet fuer Rezeptdetails im Batch-Kontext |

---

## Backup & Wiederherstellung

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/backup` | POST | System-Backup erstellen |
| `/restore` | POST | Backup wiederherstellen |
| `/config.txt` | GET | Aktuelle Text-Konfiguration herunterladen |
| `/download?file=...` | GET | Beliebige Datei aus LittleFS herunterladen |

---

## Dateisystem / Service

| Endpoint | Methode | Beschreibung |
| ----------- | ---------- | -------------- |
| `/status` | GET | Systemstatus abrufen |
| `/list` | GET | Dateiliste anzeigen |
| `/edit` | GET/PUT/POST/DELETE | Dateien in LittleFS anlegen, hochladen, abrufen oder loeschen |

---
