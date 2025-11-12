# Atores

![Configurações do ator](/docs/img/aktoren_settings.jpg)

Atuadores como agitadores, bombas ou elementos de aquecimento de anel são configurados com um nome e um GPIO (switch). Os atuadores podem ter a propriedade PWM (modulação por largura de pulso). PWM em Brautomat é um tempo de energia (liga e desliga ou a corrente flui e a corrente não flui). A entrada é feita em porcentagem. Sempre ligado é 100%. No caso de uma chaleira, isso significaria desempenho máximo permanente. Um PWM de 50% seria uma corrente de 50:50 fluindo e uma corrente não fluindo. O intervalo de pulso é de 500ms. A potência pode ser alterada durante a operação usando os dois botões na tabela do atuador. Os botões de mudança de energia ficam visíveis para cada atuador se o PWM tiver sido habilitado para o atuador. A função PWM em Brautomat é adequada, por exemplo, para relés ou SSRs. A função como controle de motor para agitadores não é adequada.

![Visão geral dos atores](/docs/img/aktoren.jpg)

## webhook

O parâmetro Actuator GPIO deve ser configurado como "-" para que os elementos do webhook sejam exibidos na interface web. Além disso, a URL do webhook e o comando sound são necessários:

![webhook](/docs/img/aktoren_webhook1.jpg)

Exemplo Shelly 13h:

Ligue Shelly 13h: <http://192.168.1.5/relay/0?turn=on>\
Desligue Shelly às 13h: <http://192.168.1.5/relay/0?turn=off>

A URL do webhook para Shelly 1PM é: <http://192.168.1.5/relay/0?turn=> (sem ligar e desligar). O parâmetro de troca do webhook deve ser definido como "ligado/desligado".

URL Tasmota: <http://192.168.1.5/cm?cmnd=Power1%201>
