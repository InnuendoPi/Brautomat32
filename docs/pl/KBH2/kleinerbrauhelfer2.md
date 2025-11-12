#KleinerBrauhelfer2

Od wersji 2.5.0 program [kleineBrauhelfer2](https://kleine-brauhelfer.de/) posiada filtr eksportu dla Brautomat. Dzięki małemu urządzeniu do parzenia2 możliwe jest opracowywanie receptur i projektowanie w każdym możliwym szczególe. Dzięki ściągawce kbh2 oferuje bardzo dobry i pomocny schemat blokowy do praktycznego wdrożenia w kuchni browaru. Za pomocą filtra eksportu dla Brautomat można zastosować wszystkie kroki.

## Plan mieszania zakładek kbh2

W zakładce Plan zacieru kbh2 oferuje cztery różne sposoby dodawania słodu do zacieru: zacieranie, podgrzewanie, warzenie i dekokcja. Wszystkie cztery typy są obsługiwane w Brautomat. Typ Mashing jest wstawiany automatycznie, a opcja autonext jest wyłączona. Nagrzewanie i parzenie przy włączonej opcji autonext. Odwar przeprowadza się przy wyłączonym autonext.

![Gotowanie](/docs/img/kbh2-maischplan.jpg)

 Brautomat wymaga etapu zacierania, aby rozpoznać koniec zacierania i przejście do lauterowania. W planie zacierania kbh2 na końcu należy dodać etap zacierania typu „rozgrzewanie” w temperaturze 76°C lub wyższej i czasie trwania 1 minuty. W tej kombinacji zacieranie jest rozpoznawane przez Brautomat i wstawiane z dezaktywowanym autonext.

![Gotowanie](/docs/img/kbh2-maischplan2.jpg)

### Przykład 1: proces gotowania zacieru kbh2 Earla Scheidta

[Earl Scheid](http://hb-tauschboerse.bplaced.net/Neues_Maischverfahren.htm)

Proces gotowania zacieru Earla Scheida można bardzo dobrze zaplanować za pomocą meineBrauhelfer2 i można go przeprowadzić bardzo łatwo i automatycznie za pomocą Brautomat. Należy pamiętać, że pomiędzy dwoma częściowymi zacierami wymagany jest etap zacierania (główny nalew i część słodowa 2). W zależności od objętości słodu 2 zalecaną procedurą jest praca z dezaktywowanym autonext na etapie warzenia, aby mieć wystarczająco dużo czasu na zacieranie słodu 2 przed rozpoczęciem drugiej przerwy maltozowej. Alternatywnie ok. 60°C z bezpośrednim ([TERM_10]]) ogrzewaniem do 63°C można wybrać jako temperaturę docelową w mieszance pomiędzy głównym odlewem/słodem 1 i głównym odlewem/słodem 2.

### Przykład 2: wywar kbh2

Brautomat obsługuje procesy dekokcyjne w trybie półautomatycznym. Na przykład, jeśli został sporządzony częściowy zacier, Brautomat wymaga informacji (kliknij Odtwórz), gdy ten częściowy krok zostanie ukończony. Tworzenie przepisów w kbh2 i importowanie ich do Brautomat ułatwia dni warzenia z dekokcją. Opis opcji można znaleźć w instrukcji kleineBrauhelfer2.

## Gotowanie na karcie kbh2

5 rodzajów dodatków chmielowych: brzeczka przednia, początek gotowania, gotowanie, koniec gotowania i ubijanie są pobierane z małego środka browarniczego2 i uwzględniane w wymaganej kolejności w planie zacieru Brautomat.

Podanie czasu w kbh2 w zakładce Gotowanie oznacza „jak długo gotowany jest dodatek chmielu”. Czas gotowania określa między innymi: Goryczkę i aromat. Zobacz także zbiór formuł w kbh2.
Specyfikacja czasu kbh2 „jak długo gotowany jest dodatek chmielu” jest konwertowana na specyfikację czasu „o której godzinie następuje dodanie chmielu” podczas importowania do Brautomat.

![Gotowanie](/docs/img/hopfen.jpg)

### Wykonaj trochę obliczeń matematycznych w tę i z powrotem

Dodatek chmielu pokazano na rysunku kbh2. Pierwszym dodatkiem chmielowym jest „Hallertauer Perle 7% 2020” z czasem gotowania 65 minut. W tym kontekście ważny jest drugi parametr: po lewej stronie całkowity czas gotowania zaznaczony jest na zielono i wynosi 80 minut. Tak więc brzeczkę gotuje się bez chmielu przez 15 minut. Drugim dodatkiem chmielu jest chmiel „Hallertauer Tradition 5,7% 2020” z czasem gotowania 15 minut. W ciągu ostatnich 15 minut gotowania brzeczki Hallertau Perle pozostało jeszcze 15 minut gotowania z pierwotnych 65 minut, a drugi dodatek chmielu Hallertau Tradition gotuje się przez 15 minut z pozostałych 15 minut gotowania. Ostatni dodatek chmielu dodaje się do pukania, czyli po ugotowaniunie.

Zadaniem Brautomat jest wskazanie momentu dodania chmielu podczas warzenia, a w idealnym przypadku przypomnienie o dodaniu chmielu sygnałem dźwiękowym.

W tym przykładzie podano całkowity czas gotowania wynoszący 80 minut i pierwszy dodatek chmielu „Hallertauer Perle” o czasie gotowania wynoszącym 65 minut. Skutkuje to różnicą 15 minut czasu gotowania bez dodatku chmielu. Pierwszy etap, gotowanie brzeczki, trwa 15 minut. Teraz należy dokonać pierwszego dodatku chmielu. Czas gotowania drugiego dodatku chmielowego „Hallertauer Tradition 5,7% 2020” wynosi 15 minut. Z 65 minut 15 minut to Hallertau Pearl i Hallertau Tradition razem w brzeczce. 65 minut minus 15 minut skutkuje 50-minutową przerwą między dodawaniami chmielu. Dodatek chmielu Hallertauer Perle należy podać 50 minut przed dodaniem chmielu Hallertauer Tradition.

Ostatnia partia chmielu „Hallertauer Tradition 5,7% 2020” oddawana jest do pukania. Po wybiciu gotowanie jest zakończone. Zatem dodatek chmielu nie wlicza się do całkowitego czasu gotowania.

![Gotowanie](/docs/img/hopfenbaren.jpg)

Dodatek chmielu zachowuje się w ten sam sposób. Czas po izomeryzacji wynosi 10 minut. Dodanie chmielu „Hallertauer Tradition 5,7% 2020” do ubijania z czasem wrzenia wynoszącym -5 minut jest częścią postizomeryzacji.

_Wskazówka: Jeśli jednocześnie dodane zostaną dwa przeskoki, czas dodania pierwszego przeskoku zostanie ustawiony na 0 minut, a dodatek drugiego przeskoku zostanie ustawiony na rzeczywisty czas dodania. Logika jest prosta zgodnie z powyższym obliczeniem: odstęp między dwoma dodatkami przeskoków do tego samego punktu zeo wynosi 0 minut._

Dodatki z kbh2 z zakładek Mashing i Boiling zachowują się identycznie jak dodatki chmielowe. Dodatki z zakładek kbh2 do uzdatniania wody i fermentacji nie są obsługiwane.
