# Kessel-Konfiguration und Einsatz

> **Sicherheits-Hinweis:**
> Vor dem ersten Heizlauf bitte zuerst den
> [Sicherheits-Check vor erstem Heiztest](../Installation/sicherheitscheck-erster-heiztest.md)
> durchführen.

Brautomat32 unterstützt bis zu drei Kessel:

- Kessel 1 (Pflicht): `MAISCHE` oder `IDS`
- Kessel 2 (optional): `SUD` oder `MLT`
- Kessel 3 (optional): `HLT` oder `NACHGUSS`

Jeder Kessel kann als GGM-Induktionskochfeld oder als Relais-Gerät
(einschließlich Webhook-Anbindung) betrieben werden.

![Kessel Konfiguration](/docs/img/kessel_1.jpg)

Die Parameter sind in [Grundeinrichtung](../Grundeinrichtung/info.md) und
[Parameter Kessel](../Parameter/parameter-kessel.md) beschrieben.

## Grundprinzip im Maischeplan

Ohne expliziten Steuerbefehl läuft ein Maischeschritt immer auf Kessel 1
(`MAISCHE`/`IDS`).

Sobald ein Schrittname einen Doppelpunkt enthält, wird er als Steuerbefehl
interpretiert. Das Format lautet:

`GERAET:LEISTUNG`

Steuerbefehle für Aktoren sind im Kapitel
[Maischeplan Funktionen](../Maischeplan/funktionen.md) beschrieben.

## Gültige Geräte und Leistung

Gerätenamen:

- `MAISCHE` oder `IDS`
- `SUD` oder `MLT`
- `HLT` oder `NACHGUSS`
- alternativ der in den Einstellungen vergebene Kesselname

Leistung:

- Zahl `0` bis `100`
- `ON` = `100`
- `OFF` = `0`

Ab Version 1.60 sind zusätzlich möglich:

- `IDSTHRESOUT:80`
- `MAISCHETHRESOUT:80`

## Wenn/Dann-Leitfaden

Wenn du den Nachguss nur bei Bedarf schalten willst,
dann nutze den Power-Button im Webinterface (manueller Betrieb).

Wenn ein Zusatzkessel beim Maischen automatisch laufen soll,
dann setze einen Steuerbefehl mit passender Zieltemperatur im Maischeplan.

Wenn ein Schritt nur schalten und sofort weiterspringen soll,
dann nutze `Dauer = 0 min` mit aktiviertem `autonext`.

Wenn ein Kessel eine definierte Zeit gehalten werden soll,
dann nutze eine echte Rastdauer (`> 0 min`).

Wenn das Aufheizen zu aggressiv ist,
dann reduziere die Maximalleistung über Befehle wie `MAISCHE:75`.

## Praxisbeispiel 1: HLT dauerhaft im Hintergrund

![Kessel Konfiguration](/docs/img/kessel_2.jpg)

Beispielschritt:

- `HLT:100`
- Zieltemperatur `78 °C`
- Dauer `0 min`

Ergebnis:

- HLT/Nachguss wird mit `100 %` aktiviert.
- Brautomat springt sofort zur nächsten Rast.
- Der Kessel bleibt aktiv, PID regelt im Hintergrund auf `78 °C`.

Äquivalente Befehle:

- `HLT:100`
- `NACHGUSS:100`
- benutzerdefinierter Name, z. B. `KOCHER:100`

## Praxisbeispiel 2: SUD zeitgesteuert fahren

![Kessel Konfiguration](/docs/img/kessel_3.jpg)

Wenn `SUD` mit `100 °C` und `15 min` gesetzt ist,
bleibt Brautomat auf diesem Schritt,
bis Zieltemperatur und Rastdauer erreicht sind.
Danach wird `SUD` ausgeschaltet und der Plan läuft weiter.

Hinweis:
Wenn nach dem Doppelpunkt keine Zahl bzw. kein `ON/OFF` steht,
interpretiert Brautomat den Eintrag als `100 %`.

## Beispiel: Leistung während des Brauens reduzieren

Wenn dein Induktionskochfeld z. B. `3.5 kW` hat und das Volumen klein ist,
kann `MAISCHE:75` sinnvoll sein.

Typischer Schrittrahmen:

- Zieltemperatur `0 °C`
- Dauer `0 min`
- `autonext` aktiviert

## Beispiel: Dekoktion

Prinzip:

- Teilmaische kocht in Kessel 1
- Restmaische wird in Kessel 2/3 gehalten
- Nachguss läuft typischerweise auf Kessel 2/3

Möglicher Ablauf:

1. Restmaische in Kessel 2 ziehen (`autonext` aus).
2. Kessel 2 auf Solltemperatur halten (`Dauer 0`, `autonext` an).
3. Teilmaische in Kessel 1 kochen (`autonext` an).
4. Restmaische zurückführen (`autonext` aus).

## Webhook

Für Webhook-Steuerung:

- Parameter `PIN weiß Relay` auf `-` setzen
- Webhook-URL und Schaltmodus konfigurieren

![webhook](/docs/img/kessel_webhook1.jpg)

Beispiel Shelly 1PM:

- Ein: <http://192.168.1.5/relay/0?turn=on>
- Aus: <http://192.168.1.5/relay/0?turn=off>

Webhook-Basis-URL:

<http://192.168.1.5/relay/0?turn=>

Schaltmodus im Webinterface: `on/off`

Tasmota-Beispiel:

<http://192.168.x.x/cm?cmnd=Power1%201>
