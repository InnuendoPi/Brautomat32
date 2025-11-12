# Instalação

Para usar o Brautomat, o firmware deve ser atualizado. Além disso, o microcontrolador ESP precisa estar conectado ao WiFi local.

## Firmware Flash com MS Windows

A versão Brautomat32 é para ESP32 e é baseada no framework IDF5.

* [ESP32 IDF5](https://github.com/InnuendoPi/Brautomat32/raw/refs/heads/main/Brautomat32.zip): Brautomat32.zip

O firmware é instalado usando o script “Flashen.cmd” contido no arquivo ZIP. O arquivo ZIP é descompactado em qualquer pasta. O microcontrolador ESP é conectado ao PC/notebook através de um cabo USB. Clicar duas vezes no script Flashen.cmd inicia a atualização do firmware.

O sistema operacional MS Windows cria automaticamente uma porta serial COM ao conectar o microcontrolador ESP a uma porta USB do PC ou notebook.

![Gerenciador de dispositivos do Windows](/docs/img/com.jpg)

Um dispositivo ESP foi encontrado no COM7 na imagem. Em casos raros, uma porta COM serial não é fornecida automaticamente no MS Windows. Drivers USB para microcontroladores ESP estão disponíveis nos seguintes sites: (MS Win e macOS)

[!"

O script Flashen.cmd usa a ferramenta esptool.exe <https://github.com/espressif/esptool>. ESPTool está disponível gratuitamente para vários sistemas operacionais (macOS, Linux). A versão do Windows de 64 bits está incluída no arquivo ZIP. ESPTool é licenciado sob GPL v2. Consulte o [arquivo LICENSE](https://github.com/espressif/esptool/blob/master/LICENSE) para obter uma cópia.

### Atualização manual do MS Windows, macOS e Linux

Se o script não puder ser usado, o firmware poderá ser transferido manualmente para o microcontrolador ESP.

ESP32 Etapa 1 Excluir Flash:

```json
esptool.exe --chip ESP32 apagar-flash
```

ESP32 Etapa 2 Firmware flash:

```json
esptool.exe --chip ESP32 --baud 921600 --before default-reset --após reinicialização forçada write-flash 0x1000 bootloader.bin 0x8000 partições.bin 0xe000 boot_app0.bin 0x10000 firmware.bin 0x350000 LittleFS.bin
```

### Atualização de firmware com macOS

Baixar: [pyflasher](https://github.com/marcelstoer/nodemcu-pyflasher/releases)

No macOS, a atualização do firmware é dividida em duas etapas. Na primeira etapa, o firmware Brautomat.ino.bin é instalado no ESP usando a ferramenta pyflasher.

![macOS](/docs/img/flashen_macos.png)

O Brautomat deve então estar conectado à WLAN. Assim que o Brautomat estiver conectado ao WiFi, o sistema de arquivos deverá ser instalado.\
Abra no navegador: <http://Brautomat.local/update>

Após clicar no botão “Sistema de arquivos”, o arquivo LittleFS.bin é selecionado e instalado clicando em Atualizar sistema de arquivos.

##Configuração WLAN

Depois de atualizar o firmware, o Brautomat inicia no modo AccessPoint. Uma WLAN aberta com o nome _Brautomat_ fica visível. Uma conexão deve ser estabelecida com esta WLAN. Assim que a conexão for estabelecida, o navegador da web abre o portal de configuração WLAN. Caso o portal não abra automaticamente, o endereço <http://192.168.4.1> deverá ser inserido manualmente no navegador web.

![Configuração WLAN](/docs/img/wlan1.jpg)

A configuração WLAN é exibida usando o botão “Configurar WiFi”

![Configuração WLAN](/docs/img/wlan2.jpg)

A WLAN (SSID e senha) deve ser inserida aqui. Com _Save_ o Brautomat reinicia e se conecta à WLAN. A interface web do Brautomat pode ser acessada na WLAN local através do endereço <http://Brautomat.local>.

Isso conclui a instalação básica. O processo de atualização do firmware e configuração WLAN só precisa ser executado uma vez. O Brautomat agora deve ser configurado. A configuração está descrita na seção _Configuração Básicaung_ descrito. A seção _Update_ a seguir pode ser ignorada inicialmente.

> **Nota:**\
O Brautomat32 tenta estabelecer conexão com a configuração WLAN (SSID e senha) por até 20 segundos. Se nenhuma conexão puder ser estabelecida, por exemplo se a senha foi digitada incorretamente, o Brautomat32 será reiniciado em Modo AccessPoint.\
Em casos raros e normalmente apenas quando o sinal WLAN é fraco, o Brautomat32 não encontra uma WLAN adequada e também inicia no modo AccessPoint após aprox. 20 segundos. Neste caso, apenas reiniciar o Brautomat32 ajudará.

##Atualizações

As atualizações podem ser instaladas em Brautomat através do menu “Atualizar”. Um novo firmware pode ser importado via “WebUpdate” ou “File Update”. Ao atualizar o firmware via WebUpdate, o firmware baixa a versão atual da Internet no repositório github. Ao atualizar via atualização de arquivo, o firmware é carregado do PC local. Não é necessário um cabo USB ou o script de instalação.

A área de memória de um microcontrolador ESP é dividida em firmware e sistema de arquivos. Durante a operação contínua, configurações, receitas e outros arquivos só podem ser salvos ou alterados no sistema de arquivos. A área Firmware só pode ser acessada para fins de leitura. Durante uma atualização, a área do firmware é completamente reinstalada e os arquivos individuais são substituídos no sistema de arquivos.

### Atualização Web

![WebUpdate](/docs/img/webupdate.jpg)

O WebUpdate reinicia o Brautomat diversas vezes. Primeiro, o firmware é atualizado. Após outra reinicialização, a estrutura será atualizada. O processo WebUpdate é registrado no arquivo webUpdateLog.txt.

Se a opção _WebUpdate com versão de teste_ estiver ativada, o WebUpdate será realizado com a versão atual do desenvolvedor. Estas são versões de teste. Novas funções no firmware são (geralmente) inicialmente armazenadas como uma versão de teste no repositório github. Versões de teste não são recomendadas para uso produtivo.

### Atualização de arquivo

Uma atualização do firmware através da seleção FileUpdate ocorre em apenas alguns passos:

Primeiro, o firmware atual deve ser baixado. O arquivo ZIP será então descompactado.\
Na interface web Brautomat, selecione o item de menu Atualizar e depois FileUpdate. Um site de atualização simples (figura 1) é exibido:

![FileUpdate](/docs/img/fileupdate2.jpg)

Em Firmware com o botão "Selecionar arquivo", o arquivo _firmware.bin_ deve agora ser selecionado no arquivo ZIP (na Figura 2). Clicar em Atualizar Firmware inicia a atualização.

O sistema de arquivos de Brautomat também pode ser atualizado.

> **Nota:**\
A função Update FileSystem reconstrói o sistema de arquivos. Atualizar FileSystem substitui todas as definições e configurações. Além da configuração, isso também inclui perfis e receitas da caldeira de purê. Em quase todos os casos, uma atualização de firmware de arquivo seguida por um WebUpdate é a escolha certa porque o WebUpdate atualiza arquivos individuais no sistema de arquivos após a atualização do firmware.
