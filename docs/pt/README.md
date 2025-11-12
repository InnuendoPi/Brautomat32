# O Brautomat

![ESP32](https://img.shields.io/static/v1?label=Arduino&message=ESP32&logo=arduino&logoColor=white&color=blue)

O Brautomat é um controle de preparação para o ESP32 D1 mini. O Brautomat é usado na cervejaria e oferece um controle intuitivo e fácil de usar. Durante a mosturação, as temperaturas de repouso são atingidas automaticamente e os tempos de repouso são respeitados. O Brautomat também suporta fervura de mosto e adição de lúpulo e ingredientes. No processo de infusão ascendente, o Brautomat pode automatizar totalmente o processo de mosturação.

> **Nota:**
Esta página foi traduzida automaticamente da documentação original em alemão.
\
Estas instruções são constantemente ampliadas, corrigidas ou melhoradas. Originalmente, apenas a placa de indução GGM IDS2 poderia ser controlada no projeto Brautomat. A partir da versão 1.48, outras placas também podem ser conectadas em modo relé. As instruções descrevem as funções com um GGM IDS em muitos lugares. Somente o modo manual é exclusivamente adequado para o GGM IDS2. Todas as outras funções e opções também estão disponíveis para outras placas.

 ---

## Layout deste guia

Estas instruções não estão em ordem e não precisam ser lidas de cima para baixo. A área temática _Software_, especialmente o capítulo _O plano de mash_, é recomendada para entrada no Brautomat. O capítulo _O plano de mash_ inclui um exemplo de dia de preparo no final das explicações das funções.

Este guia está dividido em três áreas temáticas:

* Software: o uso de firmware Brautomat
  * Instalação
  * Configuração básica
  * O plano de purê
  * AutoTune PID
  * Sensores, chaleiras, recargas e atuadores
  * Modo fermentador
* Hardware: a placa de circuito e extensões apropriadas
  * A estrutura e conexões da placa de circuito
  * A exibição
  * Carcaça 3D
  * hardware adicional
* Informações e perguntas frequentes
  * pequeno ajudante de fabricação de cerveja2
  * o dispositivo MQTT

A área de tópico _Software_ é concluída com um resumo _Parâmetros resumidos_. Detalhes e informações são fornecidos para muitos parâmetros para simplificar a configuração e o uso.

## Brautomat Versão de lançamento

A versão de lançamento do Brautomat é compilada com a estrutura estável atual espressif. Esta versão é para uso produtivo. A versão de lançamento é fornecida sem o módulo Logging. A versão é um pouco mais rápida. A versão de lançamento deve ser usada preferencialmente.

## Brautomat Versão de desenvolvimento

A versão de desenvolvimento do Brautomat é compilada com a estrutura esspressif atual. Esta versão é fornecida com o módulo Logging. Novos recursos e correções de bugs são lançados pela primeira vez na versão de desenvolvimento. Esta versão pode ser usada de forma produtiva, mas não é recomendada.
