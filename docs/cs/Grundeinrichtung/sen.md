# Nastavení snímače teploty

## Přidat nový senzor

V sekci _Sensors_ lze přidat nový senzor kliknutím na symbol plus.

![Vytvořit senzory](/docs/img/Sensor-einrichten.jpg)

## Nastavte adresu a název senzoru

Teplotní čidla Dallas DS18B20 mají jedinečnou adresu, kterou firmware používá k identifikaci. Adresa snímače se načte automaticky. Pokud je připojeno více než jedno čidlo, lze adresu čidla vybrat z výběrového seznamu.

Pokud není zobrazen žádný senzor:

* Detekci senzorů lze restartovat pomocí tlačítka reload.
* Pokud stále není detekován žádný senzor, je nutné zkontrolovat připojení kabelu.

Každý senzor potřebuje jméno. V tomto základním nastavení se senzor nazývá „Sensor IDS2“.  volal.

_Poznámka: Názvy senzorů mohou obsahovat maximálně 20 znaků. Povolené speciální znaky jsou # a mezery. Zadání je automaticky kontrolováno webovým rozhraním._

![Konfigurovat senzory](/docs/img/Sensor-einstellungen.jpg)

## Kalibrace senzoru (hodnoty offsetu)

Vlastnosti Offset 1 a Offset 2 se používají pro kalibraci senzoru. Podrobné vysvětlení naleznete v sekci _Sensors – Calibration_.

Pro tuto základní konfiguraci zůstávají obě hodnoty nezměněny na 0,00.

## Uložte a zkontrolujte senzor

Kliknutím na _save_ je senzor vytvořen a poté zobrazen v Dashboard pod _Sensors_.

![Sensory Dashboard](/docs/img/Sensor-dashboard.jpg)

> **Poznámka:**

Konfigurace analogových snímačů PT100x se provádí stejným způsobem, ale není zahrnuta v tomto základním nastavení.
