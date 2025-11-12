# Configuração e uso da caldeira

A Brautomat32 oferece a opção de configuração de até três caldeiras. A primeira caldeira tem a designação interna MASH e alternativamente IDS. Esta chaleira é necessária para o processo de mosturação. As outras duas caldeiras são opcionais. A segunda caldeira tem a designação interna SUD, alternativamente MLT e a terceira caldeira tem a designação HLT ou Nachguss.

As três caldeiras podem ser de placa de indução GGM ou do tipo relé. Uma caldeira tipo relé inclui uma conexão webhook.

![Configuração do Kessel](/docs/img/kessel_1.jpg)

Os parâmetros estão descritos no capítulo Configuração básica e visão geral dos parâmetros - Parâmetros da caldeira e são idênticos para as três caldeiras.

Porém, o uso das três chaleiras é diferente, principalmente o uso do plano de purê. O plano de mostura está sempre vinculado à primeira caldeira de fermentação, desde que nenhuma outra caldeira seja especificada no plano de mostura através de um comando de controle. Os comandos de controle também são explicados na seção de funções especiais e comandos de controle do plano de mash.

## Comandos de controle da caldeira

Esta seção considera apenas os comandos de controle da caldeira. Os comandos de controle para atuadores são estruturados de forma idêntica, mas são explicados na função especial do plano mash e na seção de comandos de controle. Um comando de controle sempre contém dois pontos no nome restante. O Brautomat reconhece apenas pelos dois pontos que esse resto deve ser tratado como um comando de controle. O formato é dispositivo: potência máxima. Isso significa que os dois pontos separam o nome do dispositivo do desempenho máximo.

Os seguintes nomes são definidos internamente como nomes de dispositivos para as três caldeiras:

* MASH ou IDS para a primeira chaleira
* MLT ou SUD para a segunda caldeira
* HLT ou REGUSS para a terceira caldeira

Cada caldeira recebe um nome nas configurações. Este nome também pode ser usado como nome de dispositivo para um comando de controle.

Números entre 0 e 100 são permitidos como desempenho máximo. O valor corresponde ao parâmetro de potência máxima nas configurações da caldeira e é dado em percentagem. A especificação ON corresponde a 100% e OFF corresponde a 0%.

### Opção 1: comutação manual da caldeira

A segunda e terceira caldeiras podem ser ligadas e desligadas manualmente através da interface web através do respectivo botão liga / desliga. Por exemplo, se uma caldeira estiver configurada para reinfusão, a temperatura alvo pode ser definida para 78°C nas configurações da caldeira e a caldeira pode ser ligada no dia da preparação, se necessário.

### Opção 2: comutação automática da caldeira

A segunda e terceira caldeiras também podem ser trocadas através do plano de mosturação:

![Configuração do Kessel](/docs/img/kessel_2.jpg)

Neste plano de mosturação simplificado, a terceira caldeira HLT é ligada automaticamente na linha 2. A etapa HLT:100 com temperatura alvo de 78°C e duração de 0 minutos liga a recarga com 100% de potência e define a temperatura alvo para 78°C. Como a duração é especificada como 0 minutos, a recarga fica ligada permanentemente. O Brautomat vai diretamente para a próxima etapa de mosturação e deixa a pós-infusão ligada. O controlador PID regula permanentemente a potência necessária para atingir e manter a temperatura alvo. Nachguss:100 seria idêntico ao comando de controle HLT:100. Se a recarga tiver recebido o nome “Cooker” nas configurações, então o comando de controle COOKER:100 também pode ser usado.

![Configuração do Kessel](/docs/img/kessel_3.jpg)

Neste plano de mosturação, a segunda preparação da chaleira é ativada na terceira etapa. Ao contrário do exemplo anterior HLT, a caldeira SUD é ligada por um período de 15 minutos com a temperatura alvo de 100°C. O Brautomat permanece nesta etapa até que a temperatura alvo seja atingida e o período de descanso de 10 minutos seja concluído. A chaleira SUD é então desligada e o Brautomat salta para a próxima etapa no plano de mosturação.

O texto “Te"cooking ilmaische" é traduzido por Brautomat para 100%. Se não houver nenhum número entre 0 e 100 ou a informação ON ou OFF após os dois pontos, então o Brautomat substitui o texto com 100% de desempenho.

## Exemplo de desempenho diferente

Os comandos de controle podem ser usados para ajustar a potência máxima durante o processo de preparação. Por exemplo, se a placa de indução tiver uma potência máxima de 3,5 kW e a chaleira utilizada tiver um volume de 20 litros, então o comando de controlo MASH:75 pode ser usado para reduzir a potência máxima de saída da placa de indução para 75% da potência. O restante com o comando de controle MASH:75 é criado com uma temperatura alvo de 0°C e uma duração de 0 minutos com autonext ativado.

## Exemplo de decocção

Conforme descrito acima, um resto do plano de mosturação é sempre atribuído à primeira caldeira (MASH) se nenhum comando de controle (dois pontos no nome do resto) atribuir o resto a outra caldeira. Um comando de controle pode ligar/desligar a segunda caldeira com uma temperatura alvo e saltar diretamente para o próximo descanso ou integrá-la ao processo de mosturação com um período de descanso.

No processo de preparo por decocção, o mosto parcial é cozido enquanto o mosto restante é mantido na temperatura desejada. A decocção com o Brautomat ficaria assim:

* Puxe o purê restante para a segunda chaleira. Extrair o resto do mosto restante com autonext desativado cumpre esta tarefa.
* em seguida, ligue permanentemente a segunda caldeira até a temperatura desejada com um período de repouso de zero minutos. autonext está ativado.
* Cozinhe o purê parcial na primeira chaleira pelo tempo de descanso desejado. autonext está ativado.
* Adicione o purê restante da segunda chaleira ao purê parcial da primeira chaleira. autonext está desativado.

Os descansos num plano de mosturação num ambiente de 2 ou 3 chaleiras têm o seguinte princípio:

* O mosto parcial a ser cozido é atribuído à primeira caldeira
* O mosto residual com manutenção de temperatura é atribuído à segunda ou terceira caldeira
* A recarga é sempre atribuída à segunda ou terceira chaleira

## webhook

O parâmetro PIN white relay deve ser definido como "-" para que os elementos do webhook sejam exibidos na interface web. Além disso, a URL do webhook e o comando sound são necessários:

![webhook](/docs/img/kessel_webhook1.jpg)

Exemplo Shelly 13h:

Ligue Shelly 13h: <http://192.168.1.5/relay/0?turn=on>\
Desligue Shelly às 13h: <http://192.168.1.5/relay/0?turn=off>

A URL do webhook para Shelly 1PM é: <http://192.168.1.5/relay/0?turn=> (sem ligar e desligar). O parâmetro de troca do webhook deve ser definido como "ligado/desligado".

URL Tasmota: <http://192.168.x.x/cm?cmnd=Power1%201>

## 🔧 Controle de caldeira – direto vs. híbrido

Dependendo da estrutura, o Brautomat pode ser operado com **1 a 3 caldeiras**. Cada caldeira controla a sua própria placa através de um GPIO.  
O Brautomat foi projetado para funcionar automaticamente de forma estável em todos os ambientes.

### ⚙️ Dois tipos de controle possíveis

| Variante | Descrição | Vantagens | Notas |
|-----------|---------------|-----------|-----------|
| **Controle direto** | O comando para a placa é executado diretamente. Todos os sinais são enviados diretamente para a saída do programa principal (por exemplo, `loop()` ou ticker). | • Estrutura mais simples<br>• Não requer memória adicional<br>• Velocidade máxima | • Bloqueia brevemente a CPU (aprox. 5 ms por comando)<br>• Não é adequado para várias caldeiras ao mesmo tempo |
| **Controle híbrido** | Os comandos são passados ​​para uma tarefa separada por meio de uma **fila** interna. A tarefa processa todos os comandos um após o outro. | • Estável com múltiplas caldeiras<br>• Sem colisões de sinal<br>• Processamento em segundo plano sem bloqueio de CPU | • Requisito mínimo de memória adicional (~4 kB)<br> |

### 💡 Implementação

O Brautomat usa **controle híbrido**. Isso pode ser usado universalmente e funciona emtodos os ambientes, especialmente em ambientes com 2 ou 3 placas de indução:

| Meio Ambiente | Variante recomendada | Justificação |
|-----------|----------|------------|
| **1 caldeira** | Híbrido | mesma função do modo direto, sem desvantagem |
| **2 caldeiras** | Híbrido | buffer seguro de comandos |
| **3 caldeiras** | Híbrido | evita sobreposição de sinal |

> 🔸 O controle direto é adequado apenas para configurações especiais e muito simples (por exemplo, caldeiras individuais com código mínimo).  
>
> 🔹 A solução híbrida é a **variante padrão e recomendada** para todas as montagens ESP32 modernas.

### 📊 Comparação técnica

| Recurso | **Direto** | **Híbrido** |
|----------|------------|------------|
| Uso de memória | ~0kB | ~4kB |
| Bloqueio de CPU | sim (aprox. 5 ms) | não |
| Estabilidade (caldeiras múltiplas) | restrito | alto |
| Segurança de tempo | alto (1 chaleira) | muito elevado (1–3 caldeiras) |
| Expansibilidade | baixo | muito bom |
| Uso recomendado | sistemas individuais simples | sistemas multi-caldeiras universais |

---

### 🔍 Resumo

O controle híbrido é o **modo recomendado e ativado por padrão**.  
Garante que todos os sinais sejam transmitidos de maneira coordenada, segura e oportuna, mesmo com múltiplas caldeiras -  
sem bloquear o processo principal.

> ✅ **Resumindo:**  
>
> * Para **1 caldeira**: sem desvantagem, mesmo desempenho  
> * Para **2-3 caldeiras**: estabilidade total  
> * Um software para todas as variantes
