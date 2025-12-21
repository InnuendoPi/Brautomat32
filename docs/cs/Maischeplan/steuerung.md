# Ovládací prvky

Přímo pod plánem kaše je controller Deck. Proces rmutování se ovládá pomocí 5 tlačítek Power, Play, Pause, Previous a Next.

![Control](/docs/img/Buttons.jpg)

## Tlačítko napájení

Tlačítko napájení slouží k zapnutí a vypnutí procesu rmutování. Pokud je v nastavení varné desky aktivována funkce AutoTune, proces AutoTune se spustí nebo zastaví tlačítkem napájení.

## Tlačítko Přehrát

Tlačítko Play má v procesu rmutování dvě funkce:

1. První funkcí je _Spustit časovač odpočinku pro aktuální odpočinek_. Tlačítko Přehrát spustí časovač odpočinku bez ohledu na SKUTEČNOU teplotu.\
Příklad: Pokud se mladina již vaří v kroku varu, ale SKUTEČNÁ teplota 98,5°C je pod klidovou teplotou 100°C, časovač klidu se nespustí.

2. Druhá funkce tlačítka Přehrát je spojena s vlastností _autonext_: pokračování procesu rmutování dalším odpočinkem. Tlačítko přehrávání je v této funkci zobrazeno červeně. Funkce _Pokračovat v procesu rmutování s dalším odpočinkem_ bude vysvětlena později v popisu _autonext_ v plánu rmutování.

## Tlačítko Pozastavit

Funkci tlačítka pauzy lze rozlišit během fáze ohřevu na klidovou teplotu a během klidu.

- Pauza během fáze ohřevu

Pokud je proces vaření spuštěn tlačítkem napájení, tlačítka pro úpravu rmutovacího plánu jsou skryta. Po kliknutí na tlačítko pauzy se znovu zobrazí symboly úprav. Během aktivované pauzy zůstane varná deska zapnutá, aby dosáhla cílové teploty. Tlačítko Pauza se poté zobrazí červeně. Pomocí přestávky lze během procesu vaření upravit plán rmutování. Pokud je během přestávky dosaženo klidové teploty, spustí se časovač přestávky a přestávka skončí.

- Přestávka během odpočinku

Během odpočinku se také zastaví časovač odpočinku v procesu rmutování pomocí tlačítka pauzy. Tlačítko Pauza se poté zobrazí červeně. Během přestávky je skutečná teplota udržována vzhledem ke klidové nastavené hodnotě, tj. ovladač PID a tím i varná deska zůstávají aktivní. Pomocí přestávky během odpočinku lze upravit plán kaše. Délka přestávky prodlužuje předchozí dobu odpočinku.

## Tlačítko Předchozí

Tlačítko Předchozí přeskočí na předchozí krok v plánu mash. Pokud byl proces rmutování zastaven, časovač odpočinku aktuálního odpočinku se resetuje a restartuje.

## Tlačítko Další

Tlačítko Další přeskočí na další krok v plánu rmutování nebo, pokud to byl poslední krok v plánu, ukončí proces rmutování.

## Tlačítko Sbalit

Tlačítko Sbalit sbalí nebo sbalí tabulku slučovacího plánu.

![mashplan](/docs/img/Maischeplan-anzeigen.jpg)

Skládací tlačítko zůstává viditelné i po zahájení vaření. Všechna tlačítka pro úpravu rmutovacího plánu jsou po zahájení vaření skryta.
