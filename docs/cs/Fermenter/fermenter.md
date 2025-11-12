# Režim fermentace

V režimu fermentoru zpracovává Brautomat32 plán fermentace shora dolů stejným způsobem jako plán rmutu. Ovládací panel má stejné funkce.

![Dashboard Fermenter](/docs/img/fermenter_dash.jpg)

Zpracování kroků má důležitý rozdíl:

První krok v plánu fermentace je zahájen, když je dosaženo cílové teploty. To je obvykle doba, kdy se kvasnice přidávají do mladiny. Všechny následující kroky v plánu fermentace začínají okamžitě, bez ohledu na skutečnou teplotu.

Pro jeho nastavení lze nastavit jedno GPIO pro chlazení a jedno GPIO pro vytápění. Chlazení nebo topení je volitelné.

![Nastavení fermentoru](/docs/img/fermenter_set.jpg)

Fermentor má tři různé stavy: chlazení, ohřev a nečinnost. Když se změní stav chlazení nebo topení, spustí se pauza. Během pauzy se stav fermentoru nemění.

* Starý stav chlazení a nový stav chlazení: žádná pauza. Chlazení zůstane zapnuté
* Starý stav vytápění a nový stav vytápění: bez přerušení. Topení zůstává zapnuté
* Starý stav chlazení a nový stav topení: pauza 120s
* Starý stav vytápění a nový stav chlazení: pauza 120s

## Rampa

Krok fermentace je specifikován s počáteční a koncovou teplotou. Na prvním obrázku v této části je teplota v prvním kroku fermentoru 18 °C. To samozřejmě znamená, že teplota kvašení zůstává nezměněna po dobu 1 dne.

Ve druhém fermentačním kroku je počáteční teplota 18 °C a koncová teplota je 20 °C. Doba trvání tohoto fermentačního kroku je zadána jako 2 dny. Nyní existují dva způsoby, jak se dostat z počáteční do koncové teploty:

Když je aktivována rampa, Brautomat reguluje teplotu fermentace lineárně po dobu specifikovanou pro tento krok. V tomto případě se teplota zvyšuje z 18°C ​​na 20°C v krocích +0,1°C během 2 dnů.

S deaktivovanou rampou je konečná teplota stanovena na začátku kroku fermentoru, buď chlazením nebo ohřevem. Jakmile je stanovena konečná teplota, je udržována.

## Cyklus spínání relé

Cyklus spínání relé určuje, jak dlouho bude udržován jeden ze stavů chlazení, topení nebo klid. Povolený rozsah hodnot je mezi 1000 a 240000 ms. Výchozí hodnota je 120 000, tj. 120 sekund. Příliš malý spínací cyklus může mít negativní dopad na chladicí zařízení.

## Displej

V režimu fermentoru musí být vybrán pohled MashSud (strana 2). Přehled kotle a pohled ručního ovládání nelze použít pro režim fermentoru.
