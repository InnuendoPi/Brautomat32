# Parâmetros da placa

## Controle de temperatura

### Potência máxima

Este parâmetro descreve a potência máxima de saída da placa. O valor padrão é 100%. Este parâmetro é utilizado se for utilizada na placa uma chaleira pequena com, por exemplo, 20l de volume. Ao reduzir a potência, pode-se evitar o aquecimento muito rápido e a ebulição. Os parâmetros "Potência máx." e "Potência de transição" devem ser reduzidos juntos ao usar chaleiras pequenas.

No final deste capítulo você encontrará [dois exemplos para calcular a potência necessária](https://innuendopi.gitbook.io/brautomat32/info-5/parameter-ggm-ids#berechnung-der-erforderlichen-leistung).

### Delta de temperatura até o alvo

Este parâmetro descreve a diferença da temperatura de repouso (setpoint) na qual o temporizador deve iniciar para repouso. O valor padrão é 0,3°C. No processo de mosturação, o controlador PID permite um controle de temperatura muito preciso. Uma temperatura de repouso é alcançada com uma precisão de +-0,2°C pelo controlador PID, reduzindo o fornecimento de energia de maneira controlada antes que a temperatura de repouso seja atingida. A redução do fornecimento de energia tem o efeito colateral de que a etapa final para atingir a temperatura de repouso demora mais tempo. É exatamente aqui que o parâmetro "Delta até o alvo" entra em ação: por exemplo, se uma temperatura de repouso de 63°C for alcançada e a temperatura atual for 62,7°C, então o temporizador de repouso iniciaria em um delta de temperatura até o alvo de 0,3°C. Em relação ao sistema de infusão individual, o delta pode ser utilizado para evitar uma extensão indesejada do tempo de descanso.

### Transição para cozimento [°C]

Este parâmetro descreve a temperatura na qual o controlador PID deve detectar que o mosto está fervendo. O valor padrão é 95°C. Este parâmetro não descreve a temperatura na qual o mosto começa a ferver. Este parâmetro descreve a temperatura na qual o Brautomat desativa o controlador PID e controla a placa com uma potência especificada "potência de transição". Ao contrário das restantes temperaturas, o objectivo da cozedura não é atingir e manter a temperatura com precisão, mas sim cozinhar suavemente. Assim, em vez de reduzir a potência, a placa de indução funciona a uma potência constante durante o cozimento.

### Potência da transição [%]

Este parâmetro descreve a potência de saída da placa desde a transição de temperatura até à cozedura. O valor padrão é 100%. O parâmetro "Transição para cozimento" foi utilizado para definir uma temperatura na qual o controlador PID é desativado. O parâmetro “Potência da transição” agora especifica a potência de saída fixa da placa. Se for usada uma chaleira com volume de 35l ou mais, o valor padrão de 100% é uma escolha adequada. Em cozinhas de cervejarias com chaleiras pequenas, o fornecimento de 100% de energia pode causar fervura. Neste caso, o fornecimento máximo de energia pode ser reduzido para, por exemplo, 75% com este parâmetro.

### Desative PID para cozinhar [ligado/desligado]

Este parâmetro determina o comportamento do controlador PID ao cozinhar quando a temperatura real está acima da temperatura alvo. Exemplo: a temperatura de cozedura foi regulada para 98°C no plano de mosturação. O parâmetro "Potência da transição" desliga o cálculo PID da temperatura "Transição para ebulição". Se o parâmetro "Desativar PID para fervura" estiver ativado (padrão), então o controlador PID permanece desligado mesmo acima da temperatura alvo de 98°C do plano de mosturação e a energia do parâmetro "Power from transaction" é usada. Este parâmetro está ativado por padrão e permite o cozimento contínuo.

Se o parâmetro "Desativar PID para cozinhar" não estiver ativado, a potência necessária é calculada pelo controlador PID assim que a temperatura alvo (aqui 98°C) for atingida. A potência calculada acima da temperatura alvo é 0%. A placa desliga-se e evita que ferva, se necessário.

### Desempenhoem caso de erro do sensor [0-100%]

Se ocorrer um erro no sensor, por exemplo, um sensor não está ligado ou existe um defeito, a potência da placa pode ser ajustada para resolver este erro. Um valor de 100% ignora o erro do sensor.

Se a potência for ajustada para 0% em caso de erro do sensor, o Brautomat pausa o processo de mosturação. A placa está desligada. Assim que o cronômetro de descanso for iniciado, o cronômetro será interrompido.

O Brautomat inicia o tratamento de erros após 3 valores consecutivos de sensor incorretos. Os sensores são consultados aproximadamente a cada 2.000 ms. Isto significa que aprox. 6 segundos se passam entre o erro do sensor de mensagem do sistema e o início do tratamento de erros.

Se um sensor com defeito reportar valores corretos do sensor novamente, o Brautomat continua automaticamente o processo de mosturação.

_Nota: o máx. parâmetro de potência não é excedido pelo parâmetro Erro do sensor de ligação. Por exemplo, se máx. Power IDS foi configurado para 75% e Power em caso de erro do sensor para 100%, então a potência de saída máxima efetiva é de 75% mesmo no caso de erro do sensor._

## PID Gerente

### Intervalo (Tempo de Amostra)

Este parâmetro indica o intervalo de tempo em que a potência necessária é calculada. O valor padrão é 3.000 ms. O intervalo é usado para o cálculo do PID e no AutoTune. Em cozinhas cervejeiras com pequenos volumes, um intervalo menor pode ser vantajoso. Quanto menor o intervalo, mais frequentemente a potência necessária é calculada. Isto leva a uma maior utilização do frango automático. Faixa de valores 1.000 - 7.000 ms.

### PID Algoritmo

Existem três opções para escolher

* modo manual PID: esta seleção permite o uso de seus próprios valores Kp, Ki e Kd
* Modo IDS PID: esta seleção calcula os valores de Kp, Ki e Kd para placas de indução GGM IDS com base nos valores Ku e Pu do processo AutoTune
* Modo Relé PID: esta seleção calcula os valores de Kp, Ki e Kd para placas baseadas em relé usando os valores Ku e Pu do processo AutoTune

## AutoTune

### AutoTune banda de ruído

Este parâmetro é utilizado para detectar valores extremos (Max, Min). AutoTune noiseband indica a alteração mínima do valor medido anterior que deve estar presente para reconhecer um novo valor extremo. O valor padrão para o IDS GGM é 0,2. Para um fogão reformulado por meio de relé ou SSR, o valor padrão é 0,5. Faixa de valores: 0,1 - 1,0

### AutoTune Série de dados (retrospectiva)

Este parâmetro especifica quantos valores medidos devem ser considerados para determinar valores extremos. O valor padrão é 50 leituras. Observe que um máximo de 100 valores medidos podem ser configurados. Para chaleiras cervejeiras muito bem isoladas termicamente, aumentar a série de dados para 100 valores medidos pode melhorar a detecção de valores extremos na fase de resfriamento do processo AutoTune.

### AutoTune depuração

Esta opção ativa o protocolo AutoTune. O log fornece informações se o processo AutoTune não puder ser concluído com êxito. Se a depuração AutoTune estiver ativada, o protocolo também estará disponível durante a preparação.

_Estes 10 parâmetros devem ser configurados individualmente para cada sistema de distribuição. Os parâmetros podem ser alterados durante um processo de mosturação. Com um teste com uma quantidade típica de água, os parâmetros podem ser facilmente determinados antes do dia de preparo._

## Perfis

O Brautomat pode gerenciar perfis de hardware. Os perfis podem ser usados ​​se houver caldeiras diferentes. Os usuários com chaleiras de tamanhos diferentes podem usar perfis para selecionar a chaleira para o dia de preparo, em vez de ter que inserir novamente todos os parâmetros manualmente. Um perfil de hardware contém todas as configurações de uma caldeira.

Os perfis são salvos na pasta /Profiles. Os perfis permitem alternar rápida e facilmente entre diferentes caldeiras. A função Salvar cria um arquivo de perfil com dnos parâmetros acima, enquanto a função Excluir remove o arquivo de perfil da memória flash.

O perfil padrão ao iniciar a máquina de fazer pão é sempre o último perfil selecionado.

## Cálculo da potência necessária

_O parágrafo a seguir descreve um tópico opcional._

Na mosturação, é desejado um aumento na temperatura da mostura de 1°C por minuto. A potência necessária P do GGM IDS pode ser calculada da seguinte forma:

potência necessária P = m[kg] * 75\
desempenho existente do GGM IDS P = 3500\
Fatore em porcentagem = desempenho necessário: desempenho existente

### Exemplo 1

No primeiro exemplo há um enchimento de 9kg e um vazamento principal de 35l. Isso resulta em uma massa total de

```json
m = 9 + 35 = 44
```

Substituímos a massa m = 44 na fórmula simplificada:

```json
P = 44 * 75 = 3300
```

Aproximadamente 3.300 W/min são necessários para aquecer um volume de 44 kg a 1°C por minuto. Se o GGM IDS for operado com 100% de potência, ou seja, 3500W, a diferença de temperatura de 1°C no mosto é alcançada em menos de 60 segundos. Para atingir a meta de aumento de 1°C na temperatura do mosto por minuto, o desempenho máximo do GGM IDS deve ser reduzido:

```json
3300: 3500 = 0,94 que corresponde a 94%
```

O GGM IDS teria que ser operado com aprox. 94-95% de potência (função especial IDS:94).

### Exemplo 2

No segundo exemplo há um enchimento de 5,9kg e um vazamento principal de 26,5l. A massa total é de 32,4kg.

```json
m = 5,9 + 26,5 = 32,4
```

Substituímos a massa m = 32,4 na fórmula simplificada:

```json
P = 32,4 * 75 = 2.430
2.430: 3.500 = 0,69
```

São necessários aproximadamente 2.430 W/min para aquecer um volume de 32,4 kg a 1°C por minuto. O GGM IDS teria que ser operado com aprox. 69-70% de potência (função especial IDS:70).

### Massa de Simplificação *75?

```json
P = m[kg] * c * T / (t * w)
```

m corresponde à massa da peça fundida principal + preenchimento\
c corresponde à capacidade térmica específica do mosto. O valor 3600 é usado (unidade Joule/(kg * °C))\
T corresponde à diferença de temperatura. Usamos uma diferença de 1°C\
t corresponde ao tempo. Colocamos 60 segundos na equação como o tempo\
w a eficiência de indução (80-90%). O valor 0,8 é inserido na equação

```json
c * T / (t * w) = 3600 * 1 / (60 * 0,8) = 75
```

Com esta simplificação obtemos o valor 75.

### capacidade térmica específica

A capacidade térmica específica usada aqui 3600 tem uma tolerância de erro de aproximadamente 2% (dependendo da temperatura e do extrato). A farinha de malte tem uma capacidade térmica de 1570 J/(kg*°C), a água tem uma capacidade térmica de 4190 J/(kg*°C) na faixa de temperatura de 50-80°C. Supondo que o teor de água na farinha de malte seja de 6%: (Figuras do Exemplo 1)

```json
9 * 94% * 1570 + (35 + 9 * 6%) * 4190 = 8,97 * 1,57 + 35,54 * 4,19 = 14,08 + 148,91 = 13282,2 + 148912,6 = 162194,8 / 44 = 3686,25 J por kg por grau Celsius
```

Veja também [Revista Brewing](https://braumagazin.de/article/berechnungen-in-der-brauerei/)
