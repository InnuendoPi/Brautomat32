# Exibição

O Brautomat pode opcionalmente ser operado com uma tela sensível ao toque. Tela sensível ao toque de 3,5 polegadas da Nextion é suportada

| Exibição seguinte | Firmware |
| --------------- | --------- |
| NX4832T035 (Série Básica) | [NX4832T035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/Brautomat-NX4832T035.tft) |
| NX4832K035 (série aprimorada) | [NX4832K035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/Brautomat-NX4832K035.tft) |
| NX4832F035 (Série Discovery) | [NX4832F035](https://raw.githubusercontent.com/InnuendoPi/Brautomat/main/display/Brautomat-NX4832F035.tft) |

O display requer firmware para operar com Brautomat. O firmware que corresponde ao tipo de display está vinculado na tabela. Consulte também atualizando o arquivo de exibição.

## Conectar tela

O display está conectado à placa com 4 cabos

| Cabo | Exibição seguinte | Placa terminal de conexão |
| ------------- | --------------- | ------------------------ |
|     vermelho | Atual + | Vcc |
|   preto | Eletricidade - | GND |
|    azul | TX | SDL (D1) |
|    amarelo | RX | SDA (D2) |

![Conexão](/docs/img/disp1.jpg)

## Arquivo de exibição Flash

O display deve ser preparado antes da operação inicial. Para fazer isso, o firmware de exibição apropriado é baixado da tabela e salvo em um cartão microSD. O cartão microSD é inserido no slot de cartão SD no display e o Brautomat é ligado. O processo de flashing começa automaticamente. O status do flash é mostrado no display. Depois de concluído, o Brautomat será desligado e o cartão microSD será removido. O cartão microSD não é necessário para a operação normal.

## Ver mistura de purê

![MaischeSud](/docs/img/brewpage-sm.jpg)

O lado MashSud é o preferido durante a fabricação de cerveja. As informações são mostradas no display a cada segundo

* Temperatura real
* Temperatura alvo (temperatura de repouso)
* tempo restante de descanso

exibido. O próximo descanso também é exibido na linha inferior. A hora à esquerda é a hora em que o próximo descanso começará. O símbolo de reprodução verde à direita indica que a próxima pausa começa automaticamente (autonext).

## Ver visão geral da caldeira

![Visão geral da chaleira](/docs/img/kettlepage-sm.jpg)

A visão geral da caldeira mostra a caldeira de fermentação e, se disponível, a caldeira de fermentação e vazamento com informações sobre a temperatura real e desejada.

_Nota: a visão geral da caldeira mostra o endereço de Brautomat na linha inferior: o nome mDNS ou o endereço IP._

## Visualização de controle manual

![Controle manual](/docs/img/induction-mode-sm.jpg)

A página de controle manual oferece a opção de operar o GGM IDS manualmente. Os níveis de potência podem ser ajustados para cima ou para baixo usando os botões + e -.
