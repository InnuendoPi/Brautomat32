# Inställning av temperatursensor

## Lägg till ny sensor

I avsnittet _Sensorer_ kan en ny sensor läggas till genom att klicka på plussymbolen.

![Skapa sensorer](/docs/img/Sensor-setup.jpg)

## Ställ in sensoradress och namn

Dallas DS18B20 temperatursensorer har en unik adress som används av den fasta programvaran för identifiering. Givaradressen läses ut automatiskt. Om mer än en sensor är ansluten kan sensoradressen väljas från urvalslistan.

Om ingen sensor visas:

* Detekteringen av sensorerna kan startas om med hjälp av återladdningsknappen.
* Om ingen sensor fortfarande detekteras måste kabelanslutningen kontrolleras.

Varje sensor behöver ett namn. I denna grundinställning kallas sensorn "Sensor IDS2".  kallad.

_Obs: Sensornamn kan innehålla maximalt 20 tecken. Tillåtna specialtecken är # och mellanslag. Inmatningen kontrolleras automatiskt av webbgränssnittet._

![Konfigurera sensorer](/docs/img/Sensor-settings.jpg)

## Sensorkalibrering (offsetvärden)

Egenskaperna Offset 1 och Offset 2 används för sensorkalibrering. En detaljerad förklaring finns i avsnittet _Sensorer – Kalibrering_.

För denna grundläggande konfiguration förblir båda värdena oförändrade vid 0,00.

## Spara och kontrollera sensorn

Genom att klicka på _spara_ skapas sensorn och visas sedan i instrumentpanelen under _Sensorer_.

![Sensor Dashboard](/docs/img/Sensor-dashboard.jpg)

> **Obs!**

Konfigurering av analoga PT100x-sensorer görs på samma sätt men täcks inte av denna grundinställning.
