# Registro

![mídia](/docs/img/logging.jpg)

O registro em log está disponível apenas na versão de desenvolvimento. O registro integrado auxilia na solução de problemas, tanto para erros no firmware do Brautomat32 quanto para erros do usuário. Um monitor serial é necessário para saída. O seguinte mostra o código do Microsoft Visual Studio com a extensão Microsoft Serial Monitor. O Microsoft Visual Code é gratuito e está disponível como uma versão autônoma (não requer instalação).

O monitor serial deve ser configurado para uma taxa de transmissão de 115200 e CRLF além da porta COM.

![Código do Microsoft Visual Studio](/docs/img/vscode.jpg)

## Configurações de registro

Vários canais para saída serial podem ser ativados através das configurações do sistema.

* Configuração - este canal exibe mensagens quando a configuração é lida ou salva.
* Sensores - mensagens sobre os sensores são emitidas neste canal
* Atores - um canal para reportagens sobre atores
* Caldeira Mash - mensagens sobre a primeira caldeira são exibidas neste canal
* Chaleira de fermentação - todas as mensagens sobre a chaleira de fermentação
* Caldeira de reformulação - Mensagens sobre a caldeira de reformulação
* Fermentador - Mensagens sobre o modo fermentador
* Sistema - as mensagens do sistema são exibidas neste canal
* Processo de mosturação - o processo de mosturação é registrado neste canal
* Nextion Display - Registro para exibição

Cada canal possui as opções desativado, erro, informação e detalhado.

* Desligado - sem registro.

O canal não envia um log para o console serial.

* Erro - Somente erros são registrados.

O tipo de saída de depuração Erro registra apenas erros. No VSCode, o tipo ERROR é exibido em vermelho.

```json
[E][SENSOREN.cpp:1600] setSenErr(): Erro do sensor de teste: #0 Estado de erro Sensor_Sud: 1
[E][SENSOREN.cpp:76] Atualização(): Sen: Erro Sensor_Sud nº 1 não foi possível ler os dados de temperatura
```

* Informações - Processo de registro

Depurar processos de log de informações do tipo de saída. O tipo Info contém a saída do tipo Error. No VSCode, o tipo INFO é exibido em verde.

```json
[I][KETTLES.cpp:2044] debConsole(): definir novo powerlast: 1071746ms
[I][KETTLES.cpp:1922] webhook(): resposta do webhook: 
[I][KETTLES.cpp:2044] debConsole(): webhook ativado: 5000ms (mDutyCycle 5000 * Potência 100/100)
```

* Verbose - todas as informações disponíveis são exibidas.

A saída de depuração do tipo detalhado inclui todos os tipos anteriores. Além disso, todas as transmissões SSE são registradas no tipo Verbose. No VSCode, o tipo Verbose é exibido em azul.

```json
[V][SYSTEM.cpp:847] SSEBroadcastJson(): kettle hlt: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:919] SSEBroadcastJson(): chaleira sud: {"ison":false,"state":false,"power":0,"enabled":3,"setp":0,"temp":"32.4"}
[V][SYSTEM.cpp:839] SSEBroadcastJson(): purê de chaleira: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Além disso, a configuração System - verbose gera um registro semelhante a curl de todas as solicitações GET e POST do WebServer.

A saída no console serial possui formatação fixa. Exemplo:

```json
[V][SYSTEM.cpp:839] SSEBroadcastJson(): purê de chaleira: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

As partes individuais:

```json
[V] O tipo de saída (aqui detalhado)
```

```json
[SYSTEM.cpp:839] A localização do código-fonte de arredondamento
```

```json
SSEBroadcastJson(): a função de chamada
```

A mensagem de depuração real segue após os dois pontos:

```json
purê de chaleira: {"power":0,"stepnr":0,"tempvalue":"50.4","target":0,"step":6,"timer":3}
```

Quando o Brautomat está conectado a um console serial, a seguinte saída aparece no momento da inicialização

```json
05:42:16.904 > [I][SYSINFO] iniciando a versão Brautomat32 V 1.56
05:42:22.467 > [I][SYSINFO] montar sistema de arquivos LittleFS: ok, heap livre mem: 192924
05:42:28.384 > [I][SYSINFO] mDNS http://Brautomat.endereço IP local 192.168.100.112 hora: 05:42:27 RSSI: -83
```

Além da versão de Brautomat, o nome MDNS e o endereço IP atual são gerados. A linha _mount filesystem LittleFS: ok, free heap mem:_ indica que o sistema de arquivos foi montado.

## Erro no sensor de teste

Um erro de sensor pode ser acionado por meio de um URL da web. Os sensores em Brautomat têm um ID começando com 0. Um erro de sensor pode ser gerado por meio de uma chamada web:

```json
http://Brautomat.local/setSenErr?id=0
```

Para corrigir o erro do sensor, exatamente o mesmo URL é acessado novamente. O primeiro sensor possui ID 0, o segundo possui ID 1 e o terceiro possui ID 2. Na URL você só precisa substituir o último 0 pelo ID do sensor desejado.

Com este teste de erro do sensor, o parâmetro “Comportamento em caso de erro do sensor” pode ser verificado muito facilmente.

## Registro com Microsoft VSCode

O Microsoft VSCode pode ser configurado para login em apenas algumas etapas. Não há necessidade de instalar o Microsoft VSCode; a versão portátil é suficiente.

Baixe o Microsoft VSCode como um arquivo ZIP: [Microsoft VSCode](https://code.visualstudio.com/docs/?dv=winzip)

Extraia o arquivo ZIP em qualquer diretório. Vá para o diretório no explorador de arquivos e crie uma pasta chamada data. A pasta de dados coloca o MS VScode em modo portátil e pode ser usada sem instalação.

![Código do Microsoft Visual Studio](/docs/img/vscode_4.jpg)

Inicie o Microsoft VSCode clicando duas vezes em Code.exe.

![Código do Microsoft Visual Studio](/docs/img/vscode_1.jpg)

A extensão Serial Monitor é necessária no VScode para registro. Clique no botão Extensões à esquerda e digite “monitor serial” no campo de pesquisa.

![Código do Microsoft Visual Studio](/docs/img/vscode_2.jpg)

Instale a extensão Serial Monitor da Microsoft. O monitor serial está incluído na exibição Saída. Clique no item de saída no menu de visualização ou abra a saída com a combinação de teclas Ctrl Shift U. A exibição de extensões pode ser ocultada ou mostrada clicando no botão Extensão. Agora clique na guia Serial Monitor na janela Output. Agora tudo que você precisa fazer é selecionar a porta COM e definir a taxa de transmissão para 115200. O registro é iniciado com o botão Iniciar monitoramento.

![Código do Microsoft Visual Studio](/docs/img/vscode_3.jpg)
