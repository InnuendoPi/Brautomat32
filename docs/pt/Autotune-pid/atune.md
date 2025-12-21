#AutoTune processo

O processo AutoTune determina parâmetros adequados para o sistema de fermentação para que o controle de temperatura no processo de mosturação possa ser realizado com a maior precisão possível. O foco está nas temperaturas REAIS e nas temperaturas ALVO correspondentes. Na prática, isto significa que o overshoot e o undershoot devem ser minimizados.

Nota: Uma ultrapassagem (excedendo a temperatura nominal) de 0,5°C é normal. Dependendo do isolamento da caldeira e da energia de indução fornecida, a temperatura continuará a subir ligeiramente mesmo depois de desligar a placa.

![AutoTune4](/docs/img/IDS-AutoTune-Ziel.jpg)

A seguinte descrição dos valores PID destina-se apenas como uma ajuda para usar o firmware e pode ser ignorada. O processo AutoTune é descrito a partir de "O processo AutoTune: passo a passo."\
O controlador PID controla o desempenho das placas. É importante determinar valores apropriados de P, I e D. Os valores PID são individuais para cada sistema de preparo e ambiente. AutoTune é um procedimento que ajuda a determinar valores adequados. A potência necessária das placas para passar da temperatura real à temperatura alvo é calculada a partir da soma dos três valores: Potência necessária = P + I + D\
Uma vez determinados os valores PID adequados, o parâmetro Interval (SampleTime) é usado para determinar os intervalos de tempo nos quais o desempenho necessário deve ser calculado.

## O valor P

Este parâmetro afeta a diferença entre a temperatura real e a temperatura alvo. Quanto maior for a diferença entre a temperatura real e a temperatura alvo, mais a placa aquece com o componente P. Se a temperatura alvo for atingida ou excedida, o componente P é igual a 0. Um valor P muito alto causa um forte overshoot ou undershoot.

## O que eu valorizo

O valor I aumenta continuamente a partir de zero à medida que a placa aquece. Quanto mais tempo o ochfeld leva para ir da temperatura real até a temperatura alvo, maior se torna o valor I. Juntamente com o valor P, resulta a seguinte adição: À medida que a temperatura alvo se aproxima, o valor P torna-se menor e o valor I aumenta. A temperatura alvo só é alcançada através do valor I. Acima da temperatura alvo, o valor I torna-se novamente menor. O valor I cria um overshoot.

## O valor D

O valor D é um amortecedor que amortece as oscilações das duas primeiras partes P e I. Muito D retarda o aquecimento e o resfriamento. Este valor também pode ser zero.

## Intervalo (SampleTime)

O cálculo PID ocorre continuamente. O intervalo descreve o ciclo. Em cada intervalo, a diferença entre a temperatura real e a temperatura alvo, bem como a mudança na temperatura real, é determinada continuamente. Um intervalo muito pequeno (por exemplo, 1000ms) leva a uma "vibração" da temperatura real no sentido de erros de arredondamento +- 0,0625°C na resolução de 12 bits. Um intervalo muito grande (por exemplo, 7.000 ms) leva a um comportamento lento. Um intervalo de 2.000 ms ou 3.000 ms deve funcionar bem na maioria dos ambientes. Apenas um múltiplo de 1000ms pode ser usado como tamanho de intervalo (1000, 2000, ... 7000).
