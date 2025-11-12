# Solução de problemas

Dicas e truques ... continua ...

## Wi-Fi

O alcance WLAN dos microcontroladores ESP é limitado. A intensidade atual do sinal WLAN é exibida em Sistema -> Redefinir. Quanto mais próximo o valor estiver de zero, mais forte será o sinal. Valores de -50dBm a -75dBm são muito bons. Um valor inferior a -80dBm é ruim e causará problemas. Em cozinhas de cervejarias com sinal WiFi fraco, o intervalo PID pode ser aumentado para 7.000 ms, por exemplo, para reduzir a quantidade de dados. Se a intensidade do sinal for fraca, apenas um navegador ativo deverá ser usado (consulte Eventos enviados pelo servidor abaixo). Um local adequado para o Brautomat na WLAN (ou um repetidor adicional) é importante. Uma boa intensidade de sinal não resulta necessariamente, mas na maioria dos casos, em uma taxa de transferência de dados mais alta e mais estável.

A interface web do Brautomat é baseada no framework bootstrap 4.6 com Javascript. Os arquivos necessários (css, js e fontes) estão na memória flash de Brautomat. Isto tem uma vantagem e uma desvantagem. A vantagem é que não é necessária nenhuma conexão com a Internet para carregar os arquivos necessários durante a preparação. A desvantagem é que na WLAN local o Brautomat tem que fornecer os arquivos da estrutura compactados para cada navegador conectado uma vez quando a conexão é estabelecida. Se um arquivo não for transmitido corretamente e muito lentamente devido à fraca intensidade do sinal WiFi, por exemplo, a interface da web não funcionará corretamente. Neste caso, a interface web não é construída corretamente (parece uma página de texto) ou está incompleta (as tabelas permanecem vazias). Na maioria dos casos, recarregar o site (Ctrl-Shift-R) é suficiente.

Após uma atualização de firmware, o Brautomat deve estar sempre desligado e o cache do navegador excluído.

## Navegadores

O Brautomat é testado em Win11 com MS Edge e Firefox na versão atual, bem como em dispositivos iOS com MS Edge e Safari. MS Edge é preferido durante o desenvolvimento. Independentemente do navegador, a reprodução automática de áudio das mensagens do Toasts (áudio) deve estar ativada para o endereço de Brautomat. O endereço de Brautomat também deve ser incluído nas exceções no bloqueio de plugins de navegador. Navegadores desatualizados (por exemplo, IE8) não são suportados.

O cache do navegador pode levar a anúncios webfront incorretos. O frontend web de Brautomat especifica no-cache e no-store quando chamado, mas navegadores diferentes ignoram essas instruções. A limpeza manual do cache do navegador geralmente é iniciada com a combinação de teclas Ctrl - Shift - Del.

## Eventos enviados pelo servidor e planos de energia e bloqueio automático de clientes

O Brautomat envia dados para navegadores conectados e ativos por meio de eventos enviados pelo servidor. Até 8 dispositivos podem se conectar ao Brautomat ao mesmo tempo. Planos de energia ou bloqueio automático podem interromper uma conexão. O processo de preparação não será interrompido ou abortado se a conexão for perdida! O Brautomat continua funcionando normalmente. Os navegadores desconectados simplesmente não recebem nenhuma informação nova. As informações incluem temperaturas, etapa de mistura atual, desempenho atual, gráficos, etc. Uma conexão de eventos enviados pelo servidor para Brautomat é o "canal de dados" através do qual as informações são enviadas ao navegador. Se a conexão com Brautomat for interrompida, o canal de dados será encerrado. Um navegador ativo reconhece quando seu canal de dados termina e faz login novamente em Brautomat após um curto período de tempo.\
As inscrições em Brautomat não têm ordem ou prioridades. Não tem efeito se o navegador da web do PC ou do tablet for conectado primeiro ou por último. O processo de fermentação pode ser iniciado no dispositivo A, pausado no dispositivo B, observado no dispositivo C e finalizado no dispositivo D. Se todos os quatro dispositivos estiverem ativos e conectados, todos os navegadores mostrarão i (quase) ao mesmo tempoinformações idênticas porque cada um desses quatro dispositivos possui seu próprio canal de dados.

## Importação de receita

Devido à memória limitada, a importação de receitas não pode importar receitas com PDFs, anexos de imagens ou textos ou explicações muito longas. Para receitas MashMalzandMore, importar para kbh2 e depois exportar no formato Brautomat é uma solução simples e boa. Receitas do Brewfather também podem ser importadas.

## AutoTune

O processo AutoTune não deve focar na perfeição, ou seja, S.v. 0,1ºC. O desvio dos sensores costuma ser maior. A faixa de ruído do parâmetro AutoTune (dispersão em torno do valor alvo) está suficientemente próxima da temperatura alvo com um valor de 0,3 para atingir muito bem a temperatura alvo e mantê-la durante o período de descanso.
Chaleiras de fermentação muito bem isoladas exigem uma série de dados AutoTune maior. Na série de dados, os valores medidos são registrados em ordem cronológica. No início está o valor de medição atual e no final da linha está o valor de medição mais antigo. A série de dados de valor AutoTune diz "quantos valores antes da medição atual o Brautomat olha para trás (no passado) para detectar uma mudança de temperatura de pelo menos AutoTune faixa de ruído (0,3)". Para uma caldeira bem isolada, a série de dados deve ser preenchida com 75 pontos de medição. Para uma caldeira não isolada, é suficiente uma série de dados de 50 pontos de medição. Esses dois parâmetros precisam ser ajustados dependendo do ambiente. As especificações padrão devem produzir valores muito bons na grande maioria dos casos.

## Sensores e calibração

Os sensores Dallas DS18B20 são oferecidos em muitas plataformas a preços muito diferentes. A calibração do sensor ajuda a minimizar desvios. Em qualquer caso, o sensor IDS deve ser calibrado porque são possíveis desvios de vários graus Celsius (dependendo da origem).\
Se um sensor relatar regularmente erro de sensor (brindes) na interface da web, você deve primeiro tentar uma conexão diferente para o sensor. As três conexões na placa para os sensores são equivalentes e não possuem ordem pré-determinada. Se houver problemas no sensor, os pontos de solda dos 3 terminais de parafuso e a resistência de 4,7kOhm (na placa de circuito sob o ESP) devem ser verificados.

## Interrupção de pino GGM IDS

A interrupção do pino fornece um canal de retorno da placa de indução para o Brautomat. Este canal de retorno está conectado ao Brautomat com uma interrupção GPIO do ESP. Uma interrupção interrompe o fluxo do programa e verifica a condição de interrupção.\
A placa de indução GGM IDS envia continuamente uma interrupção aproximadamente a cada 300 milissegundos: o sinal “está tudo bem” (0000) ou um código de erro (por exemplo, 0010 para caldeira sem caldeira ou caldeira vazia).

Seção da saída serial na interrupção do pino:

```texto
10:00:00:174 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:543 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:00:864 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:209 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
10:00:01:554 -> 0000 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 1 1 
```

A saída serial na interrupção do pino mostra claramente que a placa de indução está constantemente enviando “tudo ok”. No entanto, o Brautomat interrompe seu trabalho durante a preparação a cada interrupção (aproximadamente a cada 300ms) e verifica a condição de interrupção. A interrupção do pino deve, portanto, ser usada apenas para solução de problemas.

As seguintes interrupções são descritas no manual GGM IDS2:

E0 caldeira sem/vazia (0010 2)\
Erro no circuito E1 (0011 3)\
Superaquecimento E3 (0101 5)\
Sensor de temperatura E4 (0110 6)\
Proteção de baixa tensão E7 (1001 9)\
Protetor contra surtos E8 (1010 10)\
Painel de controle CE (1110 14)\

Infelizmente, as strings binárias não são conhecidas. Apenas a caldeira E1 sem/vazia é conhecida. A horaOs colchetes a seguir foram determinados por meio de testes, mas não são certos.

A interrupção do pino só deve ser atribuída em caso de problemas. O pino D5 está pré-atribuído para a primeira placa de indução. Nenhuma interrupção de pino é necessária na operação normal de preparação de cerveja.
