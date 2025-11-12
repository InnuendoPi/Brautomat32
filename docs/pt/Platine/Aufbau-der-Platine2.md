#Estrutura do tabuleiro versão 2

Este breve guia descreve a estrutura do conselho. A estrutura do conselho não é exigente. Esta breve descrição destina-se a ser uma ajuda para o hobbyista inexperiente e não se destina a engenheiros elétricos. Informações sobre soldagem, ferros de solda adequados e solda podem ser encontradas no YouTube ou canais semelhantes.

A lista de peças da placa:

![Lista de peças](/docs/img/Aufbau1.jpg)

Número 1: Resistor 4,7kOhm\
Número 2: soquete JST-HX (branco) e bloco terminal de parafuso de 5 pinos\
Número 3: campainha piezo passiva\
Número 4: Bornes de parafuso com passo de 2,54 mm

## Lista de peças para placa versão 2

A posição do soquete JST-HX é uma alternativa ao bloco terminal de parafuso de 5 pinos. O cabo do painel de controle do GGM IDS2 possui o plugue apropriado para uma tomada JST-HX. Se for utilizado um cabo de substituição em vez do cabo original, a ligação é mais fácil com um bloco de terminais de 5 parafusos.

| Número | Nome do item | Link para artigo |
| ----------------------------------------------------- | ------------------------------ | --------------------------------- |
| 3 | Bloco terminal de parafuso 3 pinos RM 2.54 | [amazon](https://www.amazon.de/dp/B07PH5HWQL/?coliid=I1JP3GL9UZVHAK&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 opcional | Bloco terminal de parafuso 3 pinos RM 2.54 | |
| 1 | Bloco de terminais de parafuso 5 pinos RM 2.54 | [amazon](https://www.amazon.de/dp/B07PJ71VW8/?coliid=I3AGEWLU82MSU5&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 alternativa ao bloco terminal de parafuso de 5 pinos | Soquete JST-HX 90° RM 2,54 | (voelkner D17526) |
| 2 | Bloco terminal de parafuso 8 pinos RM 2.54 | [amazon](https://www.amazon.de/dp/B07PJ7YK3G/?coliid=I2SR2XJ0B6HEW9&coid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 2 | Bloco terminal de parafuso 12 pinos RM 2.54| [amazon](https://www.amazon.de/dp/B07NZ459BY/?coliid=I2HTZO5ENXO2Q6&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1MYFTEN8WCBBE7AD4J7T) |
| 1 | Cabeçalho de pino RM 2,54 | [amazon](https://www.amazon.de/dp/B01MQ5HJYQ?ref_=pe_27091401_487187591_302_E_DDE_dt_1) |
| 1 | Resistência 4,7kOhm | [amazon](https://www.amazon.de/dp/B0CL6N7334/?coliid=IVHTTAGFDF3TX&colid=I7GQB171JGLX&psc=1&ref_=cm_sw_r_cp_ud_lstpd_1ZKFZ0X0XNS2PX9FJN3H) |
| 1 opcional | Campainha passiva 12mm 3V | [amazon](https://www.amazon.de/dp/B0179I6LIK/ref=pe_27091401_487027711_TE_SCE_dp_i1) |
| 1 ESP32 | ESP32 D1 mini | [amazon](https://www.amazon.de/dp/B08BTRQNB3/?coliid=I3GILWFH2TDYH9&colid=I7GQB171JGLX&ref_=list_c_wl_lv_ov_lig_dp_it&th=1) |
| 1 opcional | Tela Nextion de 3,5"
|                                                       |                                |                                   |

_Observação: os links ou números de itens listados são meramente informativos e não vinculados a programas de afiliados/marketing._

A tela Nextion de 3,5 polegadas está disponível como Basic, Discovery ou Enhanced. O modelo atualmente mais barato pode ser selecionado para Brautomat. Telas com 2,8 polegadas ou menores e 4 polegadas e maiores têm uma resolução de pixels diferente e não são suportadas por Brautomat!

## Considerações antes da construção

A placa de circuito pode variar dependendo da conexão ao fogão de induçãohfeld GGM IDS pode ser equipado de forma diferente:

1.1 É utilizado o cabo original da central GGM IDS

Neste caso, é necessário o soquete JST-HX branco (número 2 na imagem). O bloco terminal de 5 parafusos na imagem diretamente ao lado do soquete JST-HX não é usado.

1.2 Um cabo de substituição é usado

Neste caso não é utilizado o soquete JST-HX branco, mas sim o bloco de terminais de 5 parafusos.

Portanto, o soquete JST-HX ou o bloco terminal de 5 parafusos é inserido na placa.

## Insira os blocos terminais de parafuso

Duas notas sobre a inserção dos blocos de terminais de parafuso:

1. A abertura dos terminais de parafuso está sempre voltada para fora (longe da placa de circuito).
2. Os terminais de parafuso são fixados com um ponto de solda. O ajuste correto é então verificado. Todos os pontos de solda são então soldados.

A seguir, os blocos de terminais de parafuso são inseridos e soldados passo a passo.\
Na etapa número 1, os dois blocos terminais de parafuso de 12 pinos são inseridos. Os GPIOs D9 a D19 de ESP32 são conectados aos 12 blocos de terminais de parafuso.

![Bloco de terminais de parafuso](/docs/img/Aufbau2.jpg)

Agora vire a placa e fixe cada bloco terminal de parafuso com um ponto de solda. Agora verifique se os blocos de terminais de parafuso estão corretamente assentados. Todos os pinos devem ser inseridos corretamente nos pontos de solda. Todos os pinos são então soldados.

Na etapa número 2, os dois blocos terminais de parafuso de 8 pinos são inseridos. Os GPIOs D0 a D8 de ESP32 são conectados aos 8 blocos terminais de parafuso.

![Blocos de terminais de parafuso](/docs/img/Aufbau3.jpg)

O quadro agora fica assim neste status:

![Blocos de terminais de parafuso](/docs/img/Aufbau4.jpg)

Na etapa número 3, os três blocos terminais de parafuso são inseridos e soldados.

![Bloco de terminais de parafuso para sensores](/docs/img/Aufbau5.jpg)

Os sensores de temperatura DS18B20 estão conectados às três conexões. Não há ordem ou hierarquia para essas três conexões. Se forem utilizados apenas sensores analógicos PT100x, os três blocos de terminais de parafuso podem ser omitidos.

Com a versão 2.1 da placa, um bloco de terminais de 3 parafusos opcional pode ser usado na posição GND próximo aos blocos de terminais de 3 parafusos para sensores. As conexões GND adicionais são úteis quando são usados ​​atuadores (bombas, agitadores, etc.). Se não forem utilizados atuadores, o bloco terminal de parafuso pode ser omitido.

Na etapa número 4, o soquete JST-HX para o cabo original ou um bloco terminal de 5 parafusos para o cabo substituto é inserido e soldado: (consulte as considerações antes da montagem).

![JST-HX ou bloco terminal de parafuso](/docs/img/Aufbau6.jpg)

## A campainha piezo

A campainha piezoelétrica é opcional. Esta etapa pode ser ignorada se os sinais acústicos não forem desejados.\
A campainha piezo tem um pólo positivo e um pólo negativo

![Buzzer Mais Menos](/docs/img/Aufbau8.jpg)

O pólo positivo é inserido na marcação D8 e, consequentemente, o pólo negativo na marcação GND.

![Campainha](/docs/img/Aufbau7.jpg)

## O resistor de 4,7kOhm

O resistor de 4,7kOhm é obrigatório para os sensores de temperatura Dallas DS18B20. Se forem utilizados apenas sensores analógicos PT100x, o resistor pode ser omitido.

![Resistência](/docs/img/Aufbau9.jpg)

As pernas da resistência são dobradas em 90° (por exemplo, em torno de uma chave de fenda). O resistor é então inserido na posição identificada como “4k7”. A direção não precisa ser levada em consideração. A cor básica dos resistores geralmente é azul ou cor de areia. Os anéis coloridos mostram a resistência elétrica:

Resistor de 4,7kOhm com 4 anéis: amarelo - violeta - vermelho - [tolerância]

Resistor de 4,7kOhm com 5 anéis: amarelo - violeta - preto - marrom - [tolerância]

![Resistência](/docs/img/Aufbau10.jpg)

As pernas da resistência são dobradas ligeiramente para fora na parte traseira e soldadas. Use cortadores laterais para cortar as pernas acima do olho de solda.

## Monte o microcontrolador ESP na basen

Ao montar a base, o microcontrolador ESP pode ser removido da placa a qualquer momento. O soquete também é útil na solução de problemas.

![Soquete](/docs/img/Aufbau14.jpg)

O escopo de entrega dos microcontroladores ESP inclui o adaptador número 1. Além disso, é necessário um cabeçote de pino número 2 com passo de 2,54 mm.

![Lista de peças](/docs/img/Aufbau11.jpg)

Adaptadores e conectores de pinos são necessários para soquetes. O conector do pino é primeiro conectado ao adaptador, conforme mostrado no número 3. Os adaptadores com tiras de pinos são então inseridos na placa de circuito, dois à esquerda e dois à direita

_Dica: o cabeçote de pinos é entregue como cabeçote de 40 pinos. Todo o comprimento do cabeçalho do pino é inserido no adaptador. A saliência sobre o adaptador está dobrada na extremidade._

![Soquete](/docs/img/Aufbau12.jpg)

Agora o ESP é colocado e fixado com um ponto de solda em cada lado. Agora o ajuste das bases está verificado. Todos os pontos de solda são então soldados.

![ESP32](/docs/img/Aufbau15.jpg)

Finalmente, todos os pontos de solda devem ser verificados. Quando todos os pontos de solda estiverem fechados, o Brautomat estará pronto.
