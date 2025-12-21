# KleinerBrauhelfer2

A partir da versão 2.5.0 o programa [ kleineBrauhelfer2](https://kleiner-brauhelfer.de/) possui um filtro de exportação para o Brautomat. O desenvolvimento e o design de receitas são possíveis em todos os detalhes imagináveis ​​com o pequeno auxiliar de preparo2. Com a folha de dicas, o kbh2 oferece um fluxograma muito bom e útil para implementação prática na cozinha da cervejaria. Com o filtro de exportação para Brautomat todas as etapas podem ser adotadas.

## O plano de mistura de guias kbh2

Na aba Mash Plan, o kbh2 oferece quatro maneiras diferentes de adicionar maltes ao mosto: mosturação, aquecimento, fermentação e decocção. Todos os quatro tipos são suportados em Brautomat. O tipo Mashing é inserido automaticamente com autonext desabilitado. Aquecendo e preparando com autonext ativado. A decocção é realizada com autonext desativado.

![Cozinhando](/docs/img/kbh2-maischplan.jpg)

 O Brautomat requer uma etapa de mosturação para reconhecer o fim da mosturação e a transição para a clarificação. No plano de mosturação kbh2, uma etapa de mosturação do tipo “aquecimento” com 76°C ou superior e duração de 1 minuto deve ser adicionada ao final. Nesta combinação, o mashing é reconhecido por Brautomat e inserido com [[TERM_10] desativado.

![Cozinhando](/docs/img/kbh2-maischplan2.jpg)

### Exemplo 1: processo de cozimento de mosturação kbh2 Earl Scheidt

[Earl Scheid](http://hb-tauschboerse.bplaced.net/Neues_Maischverfahren.htm)

O processo de cozimento de mostura de Earl Scheid pode ser muito bem planejado com o meineBrauhelfer2 e pode ser executado de forma muito fácil e automática usando o Brautomat. Observe que uma etapa de mosturação da cerveja (despejo principal e malte parte 2) é necessária entre as duas mosturas parciais. Dependendo do volume do malte 2, o procedimento recomendado é trabalhar com autonext desativado para a etapa de fermentação, a fim de ter tempo suficiente para a mosturação do malte 2 antes do início do segundo descanso de maltose. Alternativamente, aprox. 60°C com aquecimento direto (autonext) até 63°C pode ser selecionado como a temperatura alvo no cruzamento de mistura entre fundição principal/malte 1 e fundição principal/malte 2.

### Exemplo 2: decocção kbh2

O Brautomat suporta processos de decocção semiautomáticos. Por exemplo, se um mosto parcial foi desenhado, o Brautomat requer informações (clique em Play) quando esta etapa parcial for concluída. Criar receitas em kbh2 e importá-las para Brautomat facilita os dias de preparo com decocção. Uma descrição das opções pode ser encontrada nas instruções de kleineBrauhelfer2.

## A guia kbh2 cozinhando

Os 5 tipos de adição de lúpulo do mosto frontal, início da fervura, fervura, fim da fervura e batimento são retirados do auxiliar de fermentação pequeno2 e incluídos na ordem exigida no plano de mosturação de Brautomat.

Uma especificação de tempo em kbh2 na guia Cozinhar significa “por quanto tempo a adição de lúpulo é cozida”. O tempo de cozimento determina, entre outras coisas: Amargor e aroma. Veja também a coleção de fórmulas em kbh2.
A especificação de tempo kbh2 "por quanto tempo a adição de lúpulo é cozida" é convertida em uma especificação de tempo "a que horas ocorre a adição de lúpulo" quando importada para o Brautomat.

![Cozinhando](/docs/img/hopfen.jpg)

### Faça um pouco de matemática para frente e para trás

A adição de lúpulo é mostrada na imagem kbh2. A primeira adição de lúpulo é “Hallertauer Perle 7% 2020” com tempo de fervura de 65 minutos. Um segundo parâmetro é importante neste contexto: no lado esquerdo, o tempo total de cozimento está marcado em verde como 80 minutos. Assim, o mosto é fervido sem lúpulo por 15 minutos. A segunda adição de lúpulo é o lúpulo "Hallertauer Tradition 5,7% 2020" com tempo de fervura de 15 minutos. Nos últimos 15 minutos de cozimento do mosto, o Hallertau Perle ainda tem 15 minutos restantes dos 65 minutos originais e a segunda adição de lúpulo Hallertau Tradition cozinha por 15 minutos dos 15 minutos restantes de cozimento. A última adição de lúpulo é feita para bater, ou seja, após o término da fervura.

A tarefa de Brautomat é indicar o tempo de adição de lúpulo durante a fermentação e, idealmente, com um aktustium pequeno sinal para lembrá-lo da adição de lúpulo.

Neste exemplo especifica-se um tempo total de cozedura de 80 minutos e uma primeira adição de lúpulo “Hallertauer Perle” com um tempo de cozedura de 65 minutos. Isso resulta em uma diferença de 15 minutos no tempo de cozimento sem adição de lúpulo. A primeira etapa, fervura do mosto, dura 15 minutos. Agora deve ser feita a primeira adição de lúpulo. A segunda adição de lúpulo “Hallertauer Tradition 5,7% 2020” tem um tempo de cozimento de 15 minutos. Dos 65 minutos, 15 minutos são Hallertau Pearl e Hallertau Tradition juntos no mosto. 65 minutos menos 15 minutos resultam em um intervalo entre adições de lúpulo de 50 minutos. A adição de lúpulo Hallertauer Perle deve ser dada 50 minutos antes da adição de lúpulo Hallertauer Tradition.

O último lote de lúpulo “Hallertauer Tradition 5,7% 2020” é dado para bater. Quando você derrubá-lo, o cozimento estará concluído. Portanto a adição de lúpulo não conta para o tempo total de cozimento.

![Cozinhando](/docs/img/hopfengaben.jpg)

A adição de lúpulo comporta-se da mesma forma. Há um tempo de pós-isomerização de 10 minutos. A adição do lúpulo “Hallertauer Tradition 5,7% 2020” para bater com tempo de fervura de -5 minutos faz parte da pós-isomerização.

_Dica: Se duas adições de salto forem adicionadas ao mesmo tempo, o tempo de adição do primeiro salto será definido como 0 minutos e a adição do segundo salto será definida como o tempo de adição real. A lógica é simples de acordo com o cálculo acima: o intervalo entre duas adições de salto ao mesmo ponto zeo é de 0 minutos._

As adições do kbh2 das abas Mashing e Boiling se comportam da mesma maneira que as adições de lúpulo. Aditivos do tratamento de água e fermentação das guias kbh2 não são suportados.
