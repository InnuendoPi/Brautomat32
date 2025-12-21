# Oppsett av temperatursensor

## Legg til ny sensor

I seksjonen _Sensorer_ kan en ny sensor legges til ved å klikke på plusssymbolet.

![Opprett sensorer](/docs/img/Sensor-einrichten.jpg)

## Angi sensoradresse og navn

Dallas DS18B20 temperatursensorer har en unik adresse som brukes av fastvaren for identifikasjon. Sensoradressen leses ut automatisk. Hvis mer enn én sensor er tilkoblet, kan sensoradressen velges fra valglisten.

Hvis ingen sensor vises:

* Deteksjonen av sensorene kan startes på nytt ved hjelp av reload-knappen.
* Hvis ingen sensor fortsatt er registrert, må kabelforbindelsen kontrolleres.

Hver sensor trenger et navn. I dette grunnleggende oppsettet kalles sensoren "Sensor IDS2".  ringte.

_Merk: Sensornavn kan inneholde maksimalt 20 tegn. Tillatte spesialtegn er # og mellomrom. Inndata sjekkes automatisk av nettgrensesnittet._

![Konfigurer sensorer](/docs/img/Sensor-einstellungen.jpg)

## Sensorkalibrering (offset-verdier)

Egenskapene Offset 1 og Offset 2 brukes til sensorkalibrering. En detaljert forklaring finner du i delen _Sensorer – Kalibrering_.

For denne grunnleggende konfigurasjonen forblir begge verdiene uendret på 0,00.

## Lagre og kontroller sensor

Ved å klikke på _lagre_ opprettes sensoren og vises deretter i Dashboard under _Sensorer_.

![Sensorer Dashboard](/docs/img/Sensor-dashboard.jpg)

> **Merk:**

Konfigurering av analoge PT100x-sensorer gjøres på samme måte, men dekkes ikke i dette grunnleggende oppsettet.
