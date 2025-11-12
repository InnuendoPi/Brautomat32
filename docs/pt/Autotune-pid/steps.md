# AutoTune Passo a passo

O procedimento prático AutoTune é assim:

![AutoTune](/docs/img/IDS-AutoTune.jpg)

1. Encha sua chaleira com uma quantidade normal de água

    uma. Uma quantidade típica corresponde a um enchimento de caldeira que consiste em fundição principal e enchimento

    Exemplo: 20l de vazamento principal e 5kg de enchimento resultam em uma quantidade típica de 25l de água para o processo AutoTune

    b. Ligue a batedeira
2. Defina uma temperatura alvo AutoTune

    uma. a temperatura alvo deve ser 50°C ou mais.

    b. A temperatura alvo deve estar pelo menos 10°C acima da temperatura real atual.

3. Ative “PID AutoTune”
4. Habilite “AutoTune depuração”
5. Salve esta configuração
6. Clicar no botão liga / desliga inicia o processo AutoTune.

![AutoTune2](/docs/img/IDS-AutoTune-start.jpg)

O processo AutoTune consiste em duas fases. A fase 1 é o aquecimento até a temperatura desejada. Quando a temperatura alvo é atingida, a placa é desligada. A temperatura alvo é por vezes significativamente excedida em 2-3°C. Exceder significativamente a temperatura alvo é necessário para o processo AutoTune. Isto é seguido por uma fase de resfriamento abaixo da temperatura alvo. Estas duas fases são repetidas 5 vezes. Dependendo do ambiente, o processo AutoTune leva um tempo relativamente longo (90 minutos ou mais). A maior parte do tempo é necessário durante as fases de resfriamento. Quanto melhor for o isolamento de uma chaleira de infusão, mais tempo durará o processo AutoTune ou a fase de resfriamento. O processo AutoTune deve ser realizado em uma temperatura típica de mosturação de aprox. 60°C. O status atual é exibido na coluna “AutoTune Processo 0/5”. O primeiro número é a etapa atual e o segundo número é o número de AutoTune etapas que se espera serem necessárias. Os valores medidos são determinados durante o processo AutoTune. Os valores medidos são verificados constantemente. Se um valor medido apresentar um desvio, a medição será repetida. Se repetido, "AutoTune Processo 6/5" será exibido. São realizadas no máximo 20 repetições. O resultado de AutoTune é exibido nas configurações do GGM IDS na guia PID Manager:

![AutoTune3](/docs/img/IDS-AutoTune-erg.jpg)

O processo AutoTune é concluído e os parâmetros determinados do sistema são salvos automaticamente.\
O resultado de AutoTune é o fator de amplificação Ku (ganho final) e a duração do período (período final). P, I e D são calculados a partir desses dois parâmetros. Vários algoritmos estão disponíveis para calcular os valores PID. O Brautomat usa um algoritmo PID que é otimizado para fabricação de cerveja (na verdade, para aquecimento de líquidos) e também é usado, por exemplo, no complemento CraftBeerPi PIDBoil.

_Dica: Após o processo AutoTune, a configuração deverá ser salva usando um backup._

Quando o processo AutoTune terminar e "AutoTune debug" for ativado, o log "AutoTune\_log.txt" poderá ser visualizado através do Explorer. Todas as informações são registradas neste arquivo de log.\
O resultado de AutoTune é salvo em formato JSON nos arquivos "idsAutoTune.txt", "sudAutoTune.txt" ou "hltAutoTune.txt". Os arquivos são meramente informativos e não são necessários para a operação. Nestes arquivos os valores de PID são listados de acordo com diferentes métodos de cálculo.

Os seguintes métodos de cálculo estão listados no log:

INTEGRAL PID\
ALGUMA EXCESSÃO PID\
SEM EXCEDÊNCIA PID\
ZIEGLER NICHOLS PID\
ZIEGLER NICHOLS PI\
TYREUS LUYBEN PID\
TYREUS LUYBEN PI\
CIANCONE MARLIN PID\
CIANCONE MARLIN PI

Os valores calculados dos diferentes algoritmos podem ser inseridos nas configurações com a seleção INDIVIDUAL_PID nas linhas P, I e D. No entanto, isso só deve levar a melhores resultados em casos raros.
