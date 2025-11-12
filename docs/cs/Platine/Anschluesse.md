# Připojení

![Deska 2](/docs/img/Anschluesse.jpg)

## Připojte GGM IDS

Výchozí nastavení pro indukční varnou desku je:

| Typ | Barva | Připojení |
| ------------- | ---------------- | ------------------------- |
| Přerušit | modrá/zelená | - (neobsazeno) nebo D5 |
| Příkaz | žlutá | D6 |
| Relé | bílá | D7 |
| Napětí + | červená | 5V/Vcc |
| Napětí - | černá | GND |
| |  | |

Na schématu zapojení je 5 přípojek pro indukční varnou desku označeno „GGM“. Propojovací kabel GGM z ovládacího panelu má modrý kabel, náhradní kabel má kabel zelený.

Brautomat včetně displeje lze provozovat s napájením GGM IDS. Jediné, co musíte udělat, je zapojit červený a černý kabel do označených šroubovacích svorek. V tomto případě nesmí být k mikrokontroléru ESP připojen další přídavný zdroj.

Alternativně může být Brautomat provozován s 5V DC napájecím zdrojem. V tomto případě není červený kabel připojen k GGM IDS.

## Připojte teplotní senzory Dallas DS18B20

Brautomat podporuje až tři teplotní senzory DS18B20. Konektor je na obrázku desky označen DS18B20-1 až DS18B20-3. Barvy senzorových kabelů jsou různé. U velmi levných snímačů bez označení nebo popisu je barevné schéma obvykle černá - červená - žlutá.

| Typ | Barva | Připojení |
| ------------- | ---------------- | ------------------------- |
| Napětí + | zelená nebo červená | Vcc |
| Datová linka | bílá nebo žlutá | Údaje |
| Napětí - | hnědá nebo černá | GND |
| |  | |

Pro digitální senzory Dallas DS18B20 není žádné pořadí připojení.

## Připojte teplotní čidla PT100x a MAX31865.

| Typ | Připojení |
| ------------- | ------------------------- |
| SPI hodiny v | SCLK D9 |
| SDO MasterIn SlaveOut | MISO D10 |
| SDI MasterOut SlaveIn | MOSI D11 |
| Výběr čipu kolík 0 | CS0 D13 |
| Výběr čipu kolík 1 | CS1 D16 |
| Výběr čipu kolík 2 | CS2 D17 |
| Vin | 3V3 |
| GND | GND |
| | |

Musí být dodržena sekvence CS0 až CS2 pro připojení snímačů PT100x.

## Připojte displej

| Kabel | Nextion Display | Připojení |
| ------------- | ---------------- | ------------------------- |
|     červená | Aktuální + | Vcc |
|   černá | Elektřina - | GND |
|    modrá | TX | D1 |
|    žlutá | RX | D2 |
|               |         |    |
