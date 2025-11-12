# Calibração

Os sensores Dallas DS18B20 às vezes apresentam desvios da temperatura real. As especificações técnicas dos fabricantes geralmente indicam uma precisão de +-0,5°C na faixa de -10°C a 85°C. Além disso, os sensores são chamados de calibrados.

Os desvios podem ser corrigidos usando uma calibração de 2 pontos. A calibração pelo Brautomat é uma correção linear. Um termômetro calibrado é necessário para calibrar os sensores. A chaleira de infusão é enchida com uma quantidade típica de água e aquecida a 40°C. A diferença entre o valor do sensor e o termômetro calibrado é inserida no parâmetro "Offset 1 \[40°C]". Este processo é repetido a 78°C e a diferença é inserida no parâmetro “Offset 2 \[78°C]”. No futuro, todas as medições do sensor serão emitidas com esta correção.

Para calibração, o sensor de temperatura é configurado para modo de alta resolução (resolução de 12 bits ou 0,0625°C). Uma calibração através da interface web consiste em 60 valores medidos. O tempo necessário para uma calibração é quase exatamente 60 segundos. O resultado da medição da temperatura é a média dos 60 valores medidos. Um deslocamento é a diferença entre a temperatura real e a média.

Em muitos casos, uma calibração de 1 ponto em banho de gelo é suficiente porque o deslocamento dos sensores DS18B20 geralmente é constante.

## Procedimento para calibração sem termômetro de referência

Se um termômetro de referência não estiver disponível, a calibração pode ser realizada utilizando um banho de gelo e fervura.
Para a faixa de medição inferior é necessário um recipiente com 50% de cubos de gelo e 50% de água fria. Um banho de gelo tem uma temperatura de (quase exatamente) 0,0 °C. A água gelada deve ser agitada continuamente, de preferência com agitador magnético. A calibração é iniciada em banho de gelo a 0°C.

O segundo ponto de calibração pode ser determinado através da altitude acima do nível do mar e do ponto de ebulição associado. A 0 m acima do nível do mar ou a uma pressão atmosférica de 1.013 bar, a temperatura de ebulição é 100,0°C. À medida que a altitude aumenta, a pressão do ar e, portanto, a temperatura de ebulição diminuem. Primeiro, o NHN local deve ser determinado, por exemplo, através do Google Earth. Para cada metro acima do nível do mar, a temperatura de ebulição cai 0,003354°C. No site do [rechneronline](https://rechneronline.de/barometer/siedepunkt.php) o ponto de ebulição é calculado com base na altura acima do nível do mar. Muitos smartphones também oferecem informações de altitude na bússola ou no aplicativo de navegação. A altura acima do nível do mar deve ser determinada com uma precisão de aprox. +-20m. Isto corresponde a uma mudança na temperatura do ponto de ebulição de 0,06708°C e, portanto, está muito fora da precisão do controle Brautomat. A calibração do segundo ponto é realizada utilizando uma chaleira de fermentação, um agitador e o ponto de ebulição local previamente determinado. A temperatura alvo é, portanto, a temperatura do ponto de ebulição. É importante garantir que a temperatura do ponto de ebulição seja atingida e mantida durante pelo menos um minuto antes de iniciar a calibração da faixa superior. Também é muito importante que a placa permaneça ligada com potência constante.

O deslocamento #1 (faixa de valor inferior) é a diferença de 0,0°C (banho de gelo) em relação ao valor médio da primeira execução de calibração. O deslocamento #2 (faixa superior) é a diferença entre o ponto de ebulição e a média da segunda execução de calibração.

## Calibração de procedimento com termômetro clínico

Um termômetro clínico é um termômetro de referência adequado. A faixa de medição superior de um termômetro clínico é limitada a aprox. 40°C. A realização da calibração corresponde ao procedimento para banho de gelo e temperatura de ebulição. A única diferença: se escolher 40°C como segundo ponto de calibração, por exemplo, a placa deve ser desligada assim que a temperatura alvo for atingida e permanecer constante durante aprox. 60 segundos(sem flutuações). Só então a calibração, ou seja, o registro de 60 amostras de medição, pode ser iniciada.

## Arquivo de registro de calibração do sensor

Um arquivo de log é gravado para cada calibração. Exemplo:

```texto
13:22:37 Calibração do sensor iniciada
*** Nome do Sensor: Sensor IDS2
*** Modelo: DS18B20
*** Endereço: 2827c59d0d0000b1
*** Resolução: 12 bits
*** Tempo limite: 750ms
------------------------------------------------------
Deslocamento de diferença real do alvo de ID
#01 24,6000 24,0000 -0,6000 0,6000

 - Valores do sensor de 2 a 59 respectivamente

#60 24,6000 25,1875 0,5875 -0,6083
------------------------------------------------------
Temperatura do deslocamento #1: 24,6000
Média após 60 medições: 25,2083
Deslocamento nº 1: -0,6083
========================================
```
