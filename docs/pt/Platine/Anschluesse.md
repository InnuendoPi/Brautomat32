# Conexões

![Quadro 2](/docs/img/Anschluesse.jpg)

## Conecte os IDS do GGM

A configuração padrão para a placa de indução é:

| Tipo | Cor | Conexão |
| ------------- | --------------- | ------------------------ |
| Interromper | azul/verde | - (desocupado) ou D5 |
| Comando | amarelo | D6 |
| Relé | branco | D7 |
| Tensão + | vermelho | 5V/Vcc |
| Tensão - | preto | GND |
| |  | |

No esquema eléctrico, as 5 ligações da placa de indução estão marcadas com "GGM". O cabo de conexão GGM do painel de controle possui um cabo azul, enquanto o cabo de substituição possui um cabo verde.

O Brautomat incluindo o display pode ser operado com a fonte de alimentação do GGM IDS. Tudo o que você precisa fazer é conectar os cabos vermelho e preto nos terminais de parafuso marcados. Neste caso, outra fonte de alimentação adicional não deve ser conectada ao microcontrolador ESP.

Alternativamente, o Brautomat pode ser operado com uma fonte de alimentação de 5V DC. Neste caso o cabo vermelho não está conectado ao GGM IDS.

## Conecte sensores de temperatura Dallas DS18B20

O Brautomat suporta até três sensores de temperatura DS18B20. O conector está marcado como DS18B20-1 a DS18B20-3 na ilustração da placa. As cores dos cabos dos sensores são diferentes. Para sensores muito baratos, sem etiqueta ou descrição, o esquema de cores geralmente é preto - vermelho - amarelo.

| Tipo | Cor | Conexão |
| ------------- | --------------- | ------------------------ |
| Tensão + | verde ou vermelho | Vcc |
| Linha de dados | branco ou amarelo | Dados |
| Tensão - | marrom ou preto | GND |
| |  | |

Não há ordem de conexões para os sensores digitais Dallas DS18B20.

## Conecte os sensores de temperatura PT100x e MAX31865.

| Tipo | Conexão |
| ------------- | ------------------------ |
| Relógio SPI em | SCLK D9 |
| SDO MasterIn SlaveOut | Miso D10 |
| SDI MasterOut SlaveIn | MOSI D11 |
| Pino de seleção do chip 0 | CS0 D13 |
| Pino de seleção de chip 1 | CS1 D16 |
| Pino de seleção de chip 2 | CS2 D17 |
| Vin | 3V3 |
| GND | GND |
| | |

Deve ser observada a sequência CS0 a CS2 para conexão dos sensores PT100x.

## Conectar tela

| Cabo | Exibição seguinte | Conexão |
| ------------- | --------------- | ------------------------ |
|     vermelho | Atual + | Vcc |
|   preto | Eletricidade - | GND |
|    azul | TX | D1 |
|    amarelo | RX | D2 |
|               |         |    |
