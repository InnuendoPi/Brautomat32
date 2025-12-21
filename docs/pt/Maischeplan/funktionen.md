# Recursos

Um _exemplo de receita inventado_ é usado na descrição a seguir. Esta descrição não contém a receita, mas sim o procedimento de mosturação com o Brautomat.

O plano de mash tem a forma de uma tabela. Esta tabela é processada de cima para baixo pelo sistema de infusão no dia da infusão. Na receita de exemplo, a linha _Mashing 50°C_ é a primeira etapa de mosturação e _WHP Hallertau Tradition_ é a última etapa de mosturação. Uma função muito importante no plano mash é a propriedade na coluna _autoext_.

## Funções básicas

![mashplan](/docs/img/brautomat.jpg)

Para fins de orientação, primeiro é descrita a estrutura das linhas da tabela. Uma linha no plano de mistura representa uma etapa no plano de mistura. Cada linha da tabela possui estas colunas:

* A coluna "Rest" mostra um nome para esta etapa de mosturação.
* A coluna "Temperatura" contém a temperatura de repouso (também chamada de temperatura alvo ou alvo neste manual).
* A coluna “Duração” contém o tempo de descanso (timer), quanto tempo o Brautomat deverá manter a temperatura de descanso.
* A coluna "autoext" indica se o próximo passo continuará automaticamente após o término do tempo de descanso (temporizador).

Após esses quatro detalhes sobre a etapa de mosturação, existem botões de edição em cada linha com as seguintes funções: (da esquerda para a direita)

![Editar plano de mash](/docs/img/brautomat-111.jpg)

* mova esta linha uma posição para cima
* mova esta linha para baixo uma posição
*edite esta linha
*exclua esta linha

O cabeçalho da tabela contém os seguintes botões (da esquerda para a direita)

![Editar plano de mash](/docs/img/brautomat-1.jpg)

* nova linha: adicione uma nova etapa de mash ao final da tabela
* Excluir: exclua a tabela inteira (plano de mash vazio)
* Recarregar: releia a receita do arquivo. As alterações não são salvas. O botão é exibido em azul
* Banco de dados: seleção de plano de mash, importação, exportação e agendador de plano de mash
* Recolher: Recolher e expandir a tabela do plano mash

![Editar plano de mash](/docs/img/brautomat-11.jpg)

Quando uma linha da tabela é editada, os botões mudam.

* Sair: sai do editor de linha sem salvar. O botão é exibido em cinza
* Armazenamento: salve as alterações na linha da tabela no plano mash

Todos os botões para edição do plano de mosturação ficam ocultos assim que o processo de fermentação é iniciado. O botão de recolher para recolher e expandir a tabela fica oculto assim que o plano de mistura é editado.

Juntamente com os controles Power, Play, Pause, Prev e Next, o controle de preparação é intuitivo de usar. O plano de mosturação mostrado aqui é uma importação do kleineBrauhelfer2. A importação insere automaticamente as temperaturas e tempos de descanso. Ao adicionar lúpulo, o ácido alfa e a quantidade em gramas são automaticamente anexados ao nome do lúpulo. Além disso, essas abreviações são prefixadas:

* VWH: salto de mosto frontal
* Cozinhar (sem adição de lúpulo)
* WPH: Whirlpool Hopping

Os aditivos mostrados na imagem _Levedura alimentar 1gr_ são importados para o plano de purê do pequeno Brauherlfer2 com o tempo de administração e quantidade.

## Editar tabela do plano de mash

Um plano mash pode ser alterado em Brautomat ou completamente recriado. O símbolo do lápis coloca uma linha na tabela do plano de mistura no modo editor.

![Editar plano de mash](/docs/img/brautomat-3.jpg)

Qualquer número de linhas da tabela agora pode ser alterado um após o outro. Assim que um símbolo para edição do plano de mistura for clicado, o botão _Salvar_ muda de verde para vermelho. Depois de feitas todas as alterações, o plano de mosturação deve ser salvo usando o botão _Salvar_. Alternativamente, todas as alterações podem ser descartadas usando o botão _Sair_ para sair sem salvar.

Assim que um processo de mosturação for iniciado usando o botão liga/desliga, a visualização muda:

![Editar plano de mash](/docs/img/brautomat-4.jpg)

Os botões de edição estão ocultos. Para torná-los visíveis novamente,O processo de mosturação deve ser interrompido usando o botão Pause no controle:

![Editar plano de mash](/docs/img/brautomat-5.jpg)

Quando o processo de mosturação é pausado, o botão Pause no controle é exibido em vermelho e as funções de edição são exibidas. A placa de indução não desliga. A temperatura de repouso continua a ser mantida. Se o temporizador de descanso estiver ativo, ele será pausado. Se o plano de mosturação for alterado (modo Editor), o botão Pausar para continuar o processo de mosturação e o botão Power serão desativados e exibidos em cinza até que as alterações no plano de mosturação tenham sido salvas ou descartadas (Sair).

Exemplo de aplicação:\
No final do processo de mosturação, uma amostra de iodo é usada para determinar se o mosto ainda não é normal em termos de iodo e se o amido ainda está presente. O repouso de sacarificação a 72°C deve ser prolongado:

* Pause o processo de mosturação
* Clique no símbolo do lápis na linha Sacarificação 72°C
* Prolongue o tempo de descanso para a segunda sacarificação em 5 minutos
* Salvar
* Clique no botão de pausa e o processo de mosturação continuará com a duração do descanso ajustada.

## Função e aplicação de autonext

![Plano de mistura autonext](/docs/img/Maischeplan-autonext.jpg)

A primeira etapa do plano de mosturação chamada _Mashing 50°C_ tem um tempo de descanso de 10 minutos e um _autonext_ desativado. A imagem mostra a situação quando o cronômetro de descanso atingiu 10 minutos: O cronômetro fez a contagem regressiva até 00:00 do tempo restante. O botão play muda automaticamente para vermelho. A mensagem do brinde “Clique no botão play” aparece no canto inferior direito. A placa desliga-se. O processo de fermentação aguarda um clique no botão play. A interface web mostra o próximo passo, que é iniciado clicando em Play.

* No final de uma pausa com _autonext_ desativado, o processo de preparação é interrompido e a placa é desligada.

A segunda etapa de mosturação, denominada _Maltoserast 63°C_, tem temperatura de repouso de 63°C e tempo de repouso de 25 minutos. Nesta etapa, o Brautomat controla inicialmente a placa para 63°C. Assim que esses 63°C forem atingidos, o Brautomat inicia o cronômetro. Um cronômetro de descanso é um cronômetro que faz a contagem regressiva até 00:00 (0 minutos: 0 segundos). Quando este cronômetro atinge o tempo de descanso de 25 minutos, o Brautomat verifica a propriedade _autonext_. Se _autonext_ estiver ativado, o Brautomat salta automaticamente para a próxima etapa no plano de mistura. Nesta receita de exemplo esta é a etapa _Sacarificação 72°C_. A etapa de sacarificação tem temperatura de repouso de 72°C. O Brautomat aumenta automaticamente a potência da placa para atingir a nova temperatura de descanso.

* No final de um descanso com _autoext_ ativado, o processo de mosturação continua automaticamente e a placa permanece ligada.

![Plano de mistura autonext](/docs/img/Maischeplan-autonext2.jpg)

A propriedade _autonext_ no sétimo passo _Mashing 78°C_ não está ativada. Se o Brautomat encontrar um [[TERM_10] desativado, o Brautomat termina o descanso atual após o tempo de descanso ter expirado e desliga a placa (0% de potência). Neste estado, o botão Play é exibido em vermelho. Para continuar o processo de preparação, o botão Play deve ser clicado.

Enquanto no primeiro exemplo de _autonext_ o botão Play geralmente é clicado diretamente para continuar na etapa de mosturação, no segundo exemplo de mosturação pode passar um tempo mais longo para a lauterização e o descanso da lauter. O Brautomat é deixado no estado “Click Play Button”. A placa da primeira caldeira permanece desligada. Neste estado, todos os atuadores e também as outras duas caldeiras podem ser utilizados.

## Diferença autonext e quebra

Se autonext estiver desativado no final do bloqueio, a placa é desligada. O botão de pausa interrompe o temporizador de descanso, mas a placa permanece ligada e o Brautomat calcula a potência necessária para a placa.

As seções a seguir descrevem o Filho opcionalas funções são descritas. Brautomat iniciantes podem pular a descrição das funções especiais.

## Função especial 0°C descanso quando autonext é ativado

Uma função especial é a temperatura de repouso 0°C quando autonext está ativado: Se a temperatura de repouso for definida para 0°C e autonext estiver ativado, a etapa de mosturação é iniciada automaticamente sem controle de temperatura. No exemplo do plano de mosturação, esta função especial é mostrada após a fervura do mosto na etapa _pós-isomerização_. Neste ponto o mosto tem uma temperatura de aprox. 100°C. A placa deve ser desligada e o temporizador de pós-isomerização deve ser iniciado imediatamente:

![Função especial 0°C](/docs/img/Maischeplan-Sonderfunktion.jpg)

A função especial _0°C temperatura de repouso com autonext ativado_ atende exatamente a este requisito: as temperaturas reais e alvo são ignoradas e o temporizador de repouso é iniciado. Se a temperatura de repouso da etapa de pós-isomerização não fosse definida para 0°C, mas sim para 95°C, por exemplo, o temporizador de repouso para a etapa de pós-isomerização só começaria quando a temperatura na caldeira de fermentação do mosto tivesse esfriado de 100°C para 95°C. Durante a pós-isomerização a temperatura do mosto cai. Se necessário, o mosto é resfriado ativamente. A função especial _0°C temperatura de repouso quando o autonext_ está ativado faz com que a placa permaneça desligada.

## Processo de fabricação de cerveja

O princípio básico da máquina de fazer cerveja é a infusão ascendente. Isso inclui variantes como o processo de purê de cozimento de Earl. Outros processos de fermentação também podem ser implementados usando a propriedade “autonext”. No entanto, deve-se notar que o Brautomat só pode suportar outros processos de fabricação de cerveja com "semiautomático". Um gatilho para uma ação, como puxar mosturação parcial, deve ser feito manualmente pelo operador. Para Brautomat, manual significa usar os botões Reproduzir e Pausar. Uma pausa de zero minutos com autonext desativado pode ser usada como gatilho para uma ação manual.

Nota: Os tópicos a seguir sobre comandos de controle são opcionais e não relevantes para introdução ao Brautomat.

## Chaleira de fermentação

O Brautomat suporta até três chaleiras. A primeira chaleira é necessária para o processo de mosturação. Uma segunda chaleira é opcional e pode ser usada, por exemplo, em processos de fermentação como decocção. A terceira chaleira é frequentemente usada como recarga e também é opcional. A utilização da 2ª e 3ª chaleira é livremente selecionável, apenas a primeira chaleira está vinculada ao processo de mosturação e especificamente ao temporizador de descanso.

Nomes padrão para comandos de controle:

* Primeira chaleira: IDS ou MASH
* Segunda caldeira: MLT ou SUD
* Terceira caldeira: HLT ou REGUSS

## Comandos de controle

Uma segunda função especial são os comandos de controle para placas e atuadores. A sintaxe para a etapa mash é.

*Nome do ator:Atuação

A alimentação pode estar LIGADA ou DESLIGADA ou um número entre 0 e 100%. O estado OFF corresponde ao valor 0% e ON ao valor 100%. O comando de controle para a primeira placa de indução é IDS ou MASH. O comando de controle para a segunda placa de indução é SUD. O comando de controle para a reformulação é HLT. O comando de controle para um atuador é o nome do atuador.

![Comando de controle do atuador](/docs/img/Maischeplan-Aktoren.jpg)

O plano mash na imagem alterna os atuadores em três locais. O agitador é ligado logo no início: Agitador:ON
Pouco antes do final do programa de mosturação, o agitador é desligado: Agitador:OFF e a recarga é ligada: Refill:ON.

O comando de controle para um atuador pode ser especificado com uma potência, por ex. BOMBA:60. A bomba do atuador é então ligada com 60% da potência. Isso pressupõe que este atuador foi ativado para PWM. A temperatura de repouso e a duração do repouso devem ser definidas como 0 para comandos de controle.

O comando de controle IDS:50 define a potência máxima de saída da placa para 50%. A reformulação também pode ser ligada para 75% da potência com HLT:75.![Comando de controle IDS](/docs/img/sonderfunktion_sud1.jpg)

O comando de controle SUD: Cozinhe purê espesso com tempo de descanso de 10 minutos e temperatura de repouso de 100 graus realiza uma etapa de purê em um segundo fogão. O temporizador de repouso é iniciado assim que a temperatura de repouso é atingida.

![Comando de controle SUD](/docs/img/sonderfunktion_sud2.jpg)

O comando de controle SUD: Cozinhe purê espesso com temperatura de repouso de 100 graus, mas sem tempo de descanso liga a segunda placa, inicia o controlador PID da placa e salta diretamente para a próxima etapa no plano de purê.

![Comando de controle SUD](/docs/img/sonderfunktion_sud3.jpg)

A etapa de sacarificação da mosturação a 72°C é realizada na primeira placa _Maische_. O controlador PID regula a potência necessária para o mash tun. Ao mesmo tempo, o controlador PID regula a potência necessária para a caldeira _Sud_.

Exemplos:

* Agitador: LIGADO
* Agitador: DESLIGADO
*RHE:40
*IDS:75
*IDS:DESATIVADO
*HLT:100
*HLT:DESLIGADO
* SUD: Cozinhe purê grosso
*SUD:60

_Nota: Os comandos de controle podem ser usados para operar as caldeiras de purê, fermentação e HLT ao mesmo tempo. No entanto, apenas um temporizador de descanso pode estar ativo. O temporizador de descanso está sempre ligado à primeira placa “mash”._

### Exemplo de IDS de comando de controle

A título de exemplo, é fornecida a seguinte configuração para o GGM IDS ou para a caldeira MashSud:

![Comando de controle IDS](/docs/img/aktoren_schalten4.jpg)

A potência máxima está predefinida em 100%. A temperatura de “transição para cozimento” é de 95°C. A partir desta temperatura, a potência máxima de saída do GGM IDS é de apenas 80%.

O cronograma de mosturação na ilustração começa com a etapa “Aquecimento da mistura principal”. A placa de indução GGM IDS aqueceria a água com a potência “Max. Power IDS” (parâmetro no registo de controlo de temperatura), ou seja, com 100%.

![Comando de controle IDS](/docs/img/aktoren_schalten2.jpg)

O cronômetro de descanso começa em 59°C. O tempo de descanso é de zero minutos. O Brautomat salta para a próxima linha da etapa 2.
O comando de controle IDS:65 ajusta a potência máxima do IDS para 65%. O Brautomat salta para a próxima linha da etapa 3.
Agora a temperatura é aquecida de 59°C até a temperatura alvo na etapa de “mostragem”. O desempenho máximo do IDS é de 65%.

A potência máxima de saída de 65% é mantida nas etapas de mosturação seguintes. Até que Brautomat atenda ao comando de controle IDS:100 após a etapa de mosturação.

![Comando de controle IDS](/docs/img/aktoren_schalten3.jpg)

O comando de controle altera a potência máxima de saída do IDS para 100%. O mosto é agora aquecido a 100% da potência até à temperatura de “transição para ebulição” a 95°C (ver acima). A partir de 95°C o GGM IDS muda para 80% de potência. 80% corresponde ao parâmetro “Potência desde a transição”.

Os comandos de controle do IDS podem ser usados ​​para evitar que o mosto queime ou que o mosto ferva, especialmente com volumes menores de caldeira.

### Exemplo: Decocção com dois bicos

![Comando de controle IDS e SUD](/docs/img/sonderfunktion_sud4.jpg)

Devido à restrição _o primeiro mosto deve ser sempre operado com tempo de descanso_, existe um procedimento simples para os processos de decocção: o mosto parcial a ser cozido deve ir para o fervedor _Mash_ e o mosto parcial a ser mantido em temperatura deve ir para o fervedor _Sud_.

### Exemplo de uso de energia para um fogão

São fornecidos um enchimento de 7kg e um vazamento principal de 28l. No total a massa é de 35kg\

Com a ajuda da função especial IDS: <Potência em %>, a potência de uma placa pode ser ajustada para que a taxa de aquecimento durante a mosturação seja de 1°C por minuto.

![Comando de controle MASH power](/docs/img/IDS-Sonderfunktion.jpg)

_Para explicações sobre o método de cálculo, consulte: Parâmetros do IDS GGM - Controle de temperatura - Desempenho máximo do IDS._

```json

    Potência necessária P = m * c * T / (t * w)
    A expressão c * T / (t * w) é substituída pelo valor 75 com uma eficiência de 80% para a placa de indução
    A massa m é 35 kg
    P = 35 x 75 = 2625
    2625W é 75% do máximo. potência 3500W (2625/3500 * 100 = 75%)

```

No plano de mosturação mostrado acima, a saída máxima do IDS é definida para 75% após a mosturação na linha 2 com o comando de controle "IDS:75". Com este comando de controle são realizadas as etapas seguintes (descanso de maltose, sacarificação e mosturação) com rendimento máximo de 75%. Após a mosturação, o usuário deve clicar no botão play (autonext desabilitado). A lavagem começa aqui, seguida pelo descanso da lavagem, etc. O processo de fermentação continua com o comando de controle “IDS:100”. A potência máxima do IDS é definida como 100% da potência para fervura do mosto.

_Nota: O rendimento de 80% utilizado aqui para uma placa de indução é um valor médio. Um tanque de purê isolado e coberto (tampa ou agitador) pode ter maior eficiência._

## Mudança de perfil de função especial

Outra função especial é a mudança de perfil. Os comandos são IDSPROFIL, SUDPROFIL e HLTPROFIL. O nome do perfil segue os dois pontos.

Exemplos:

IDSPERFIL:Profil68l\
IDSPERFIL:Profil36l

Com este comando especial são trocados todos os parâmetros de uma caldeira. Desta forma, diferentes perfis de hardware podem ser armazenados. No processo de preparo por decocção, o comando especial oferece uma maneira fácil de utilizar parâmetros ajustados com a mesma caldeira e volume menor.

Os comandos especiais IDS: e IDSPROFIL: têm efeitos diferentes: O comando especial IDS: altera a potência máxima de saída. Todos os outros parâmetros permanecem os mesmos.

_Nota: o comando especial IDSPROFILE no plano mash é cancelado se o tipo de dispositivo (IDS1, IDS2 ou relé) não for idêntico._

## Exemplo de dia de preparo

Finalmente, os pedidos especiais, as adições de lúpulo e o procedimento geral são resumidos usando um dia de fermentação. Este exemplo é baseado na seguinte configuração:

Ambiente de duas caldeiras:

* uma chaleira para fazer purê (volume 70l, GGM IDS2 com 3,6kW)
* uma chaleira remodelada (chaleira 35l, 2kW)

Dois atores:

* um agitador (controlado por relé)
* um elemento de aquecimento de anel (na caldeira de fermentação de purê, 3,5kW)

O plano de purê:

![exemplo de dia de preparação do plano de purê](/docs/img/example_control_commands1.jpg)

O exemplo mostra como é fácil ligar e desligar os atuadores usando comandos especiais ou como os comandos especiais são integrados ao plano de mistura. Na primeira etapa de mosturação, o agitador é ligado. O Brautomat executa o comando especial e salta imediatamente para a próxima etapa do plano de mash. O mash in step foi configurado com duração de 1 minuto e autonext desabilitado. Nesta etapa o malte é adicionado à água de infusão. A etapa leva mais de um minuto, mas dependendo do recheio não se sabe com antecedência quanto tempo levará a amassadura. Após um minuto de maceração, o Brautomat desliga a placa e exibe o botão play em vermelho (desativado autonext). O Brautomat agora “espera” até que a etapa seja concluída e o botão play seja clicado. Quando a placa é desligada e o malte é adicionado, a temperatura de mistura do mosto será inferior a 55°C. Este procedimento é adequado, por exemplo, para uma adição lenta e relaxada de maltes ou para um breve descanso proteico.

_Alternativa:_ ativar a propriedade autonext e definir o período de descanso para 5 minutos. Neste caso, o Brautomat manteria a temperatura de mosturação por 5 minutos (mostragem) e depois aqueceria automaticamente para o próximo descanso.

O próximo passo é o descanso da maltose. O controlador PID regula a potência necessária para atingir a temperatura alvo no mosto e mantê-la por um período de 40 minutos. Na linha 4, o refil é ligado por meio de um comando especial. A temperatura alvo para a recarga é de 75°C e a duração é de 0 minutos. O Brautomat inicia o controlador PID para a remodelação da caldeira e regula a potência necessária em segundo plano. ParaNeste ponto do plano de mosturação, dois controladores PID estão ativos: um controlador PID para a chaleira de fermentação do mosto e um controlador PID para o pós-despejo. O Brautomat salta diretamente para a próxima etapa após ligar.

No plano mash, o atuador do elemento de aquecimento de anel é ligado ou ligado uma vez com o comando especial _RHE:ON_ e uma vez com _RHE:50_. O ON traduz o Brautomat com 100% de desempenho, enquanto 50 é processado de acordo com 50% de desempenho. A chaleira MashSud tem volume máximo de 70 litros. O elemento de aquecimento circular suporta a placa durante a cozedura com 50% de potência para uma cozedura vigorosa: placa com 100% de potência (3,5 kW) mais elemento de aquecimento circular de 1,75 kW (50%). No final da cozedura, a resistência circular é desligada com o comando especial _RHE:OFF_.

O tempo de adição de lúpulo é calculado com base no tempo de cozimento. A programação do purê tem tempo total de cozimento de 90 minutos. 30 minutos disso estão fervendo sem adicionar lúpulo. O tempo total de cozimento das adições individuais de lúpulo aumenta. Ou seja a primeira adição de lúpulo _Hall. Tradição 6,0% 37,2g_ é cozido por um total de 60 minutos:

* Duração do mash step hop adição Hall. Tradição 37,2g: 30 minutos
* Duração do mash step hop adição Hall. Tradição 31g: 15 minutos
  * Ao final desta etapa de mosturação, a primeira adição de lúpulo (37,2g) fica no mosto por 45 minutos
* Duração do mash step hop adição Hall. Tradição 30g: 10 minutos
  * Ao final desta etapa de mosturação, a primeira adição de lúpulo (37,2g) é de 55 minutos e a segunda é de 25 minutos no mosto
* Duração do mash step hop adição Hall. Tradição 7g: 5 minutos
  * Ao final desta etapa de mosturação, a primeira adição de lúpulo (37,2g) é de 60 minutos, a segunda de 24 minutos e a terceira de 15 minutos no mosto.

Embora ferramentas como kleineBrauhelfer, BrewFather ou MMum sempre indiquem o tempo total de cozimento para cada adição individual de lúpulo, o Brautomat deve fornecer um alarme ou uma indicação de quando uma adição de lúpulo precisa ser adicionada ao mosto durante a fermentação.

_Extensão:_ A explicação das doses de lúpulo é ampliada para incluir duas ou mais doses ao mesmo tempo:

![exemplo de dia de preparo do plano de purê](/docs/img/example_control_commands3.jpg)

O lúpulo deve ser adicionado 10 minutos antes do final da fervura. Tradição 6,0% 30g_ e fermento alimentar _Levedura nutritiva_ são adicionados ao mosto ao mesmo tempo. A ilustração mostra como o procedimento é simples: são administradas doses simultâneas com duração de 0 minutos antes de uma dose com duração.

A penúltima etapa pós-isomerização utiliza a função especial temperatura alvo 0°C. A placa é desligada com esta etapa de mosturação. A função especial temperatura de descanso 0°C faz com que o Brautomat inicie o cronômetro de descanso 10 minutos imediatamente. Neste ponto o mosto tem uma temperatura de aprox. 100°C e está esfriando lentamente. Como a etapa seguinte envolve a adição de lúpulo aromático a 78°C, o mosto é resfriado ativamente durante o período de descanso pós-isomerização de 10 minutos.

O gráfico para o plano de mash:

![exemplo de dia de preparo do plano de purê](/docs/img/example_control_commands2.jpg)
