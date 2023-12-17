# Hardware

Die hier gezeigten Beispiele sind nur eine kleine Auswahl an Ideen. Die Links zeigen auf externe Inhalte, für die die jeweiligen Anbieter verantwortlich sind. Die Links sind mit keinem Affiliate Programm, Trading o. ä. verknüpft. Gerne können hier weitere Ideen und Bilder hinzugefügt werden.

## Beispiele für Aktoren

### Pumpen

![Aktoren](/docs/img/Pumpe1.jpg)

Eine Pumpe ist beim Läutern oder beim Transport in den Gärbehälter eine große Hilfe. Die verwendete Pumpe muss lebensmittelecht sein und für Temperaturen bis 100°C geeignet sein. Die Minipumpen von Rotekt eignen sich sehr gut für den Einsatz in der Brauküche:

![Aktoren](/docs/img/Pumpe2.jpg)

| Artikelname                                            | Link zum Artikel                  |
| ------------------------------------------------------ | --------------------------------- |
| Mini-Pumpe 12V DC                                      | [amazon](https://amzn.to/3E4iRUF) |
| Mini-Pumpe 12V DC                                      | [amazon](https://amzn.to/3E4iRUF) |
| Pneumatische Steckverbinder 8mm x 1/2 Zoll 90° drehbar | [amazon](https://amzn.to/3XmH2nP) |

Ebenfalls sehr gut und schnell sind Verbdinungen mit [Camlocks von Braubebo](https://www.braubebo.de/camlock/) wie auf dem ersten Bild dargestellt.

### SSR Solid State Relais

Mit dem Brautomat können sehr einfach SSRs geschaltet werden. SSR oder Solid State Relais schalten mit 3-5V Gleichstrom vom Brautomat den 220V Wechselstromkreis ein- bzw. aus. Die Fotek SSRs sind ideal zur Temperaturregelung und Steuerung über den Brautomat.

![fotek](/docs/img/fotek.jpg)

| Artikelname    | Link zum Artikel                  |
| -------------- | --------------------------------- |
| Fotek SSR 40DA | [amazon](https://amzn.to/3RSzKav) |

Anwenungsbeispiele für SSR: Wenn 220V an einem SSR Fotek über den Brautomat geschaltet wird, kann am "anderen Ende" der 220V Leitung eine Steckdose für einen beliebiges Gerät mit Stecker angebracht werden. Zum Beispiel für das Netzteil vom Rührwerk. Oder für einen Nachgusskocher. Oder für ein Ringheizlement. Auch das Netzteil der Rotek Pumpe kann über ein SSR ein- und ausgeschaltet werden.

### Relaismodul

Nicht alle Verbraucher benötigen ein leistungsstarkes SSR. Bspw. können Aktoren wie Rührwerk oder Pumpen mit günstigen Relaisboards geschaltet werden. Ein sehr gutes Relaisboard ist das Keenso 4 Kanal Optokoppler Reaisboard.

![keenso](/docs/img/keenso.jpg)

| Artikelname        | Link zum Artikel                  |
| ------------------ | --------------------------------- |
| Relaisboard Keenso | [amazon](https://amzn.to/3K3gg11) |

Das Relaisboard kann per Jumpereinstellung auf High Trigger (es fließt Strom) und Low Trigger (es fließt kein Strom) eingestellt werden. Diese Möglichkeit macht das Relaisboard ideal für den Einsatz mit einem ESP8266 oder einer Port Erweiterung PCF8574.

### Port Erweiterung PCF8574

Wenn mehr Aktoren betrieben werden sollen, als der ESP8266 (nutzbare) GPIOs anbietet, ist die PCF8674 Porterweiterung eine gute Lösung

![pcf8574](/docs/img/pcf8574.jpg)

| Artikelname              | Link zum Artikel                  |
| ------------------------ | --------------------------------- |
| Port Erweiterung PCF8574 | [amazon](https://amzn.to/3YrVi02) |

Die Porterweiterung muss an D6 und D7 vom ESP8266 angeschlossen werden. Mit dem Modul PCF8475 werden 6 zusätzliche Anschlüsse bereitgestellt. Der Brautomat unterstützt nur eine Porterweiterung!

### Ringheizelemente

Ein Ringheizlement ist beim Kochen der Würze nützlich, wenn die Leistung der GGM IDS nicht mehr oder nur so eben ausreicht, um die Würze wallend zu kochen. Eine gute Auswahl an Ringheizelementen gibt es beim [Douglas von Crafthardware](https://www.crafthardware.de/products/ringheizelement-3-5-kw-fuer-45-cm-kessel).
