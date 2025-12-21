# Modo fermentador

No modo fermentador, o Brautomat32 processa o plano de fermentação top down da mesma forma que o plano de mosturação. O controller Deck tem as mesmas funções.

![Fermentador Dashboard](/docs/img/fermenter_dash.jpg)

O processamento das etapas tem uma diferença importante:

A primeira etapa do plano de fermentação é iniciada quando a temperatura desejada é atingida. Geralmente é esse o momento em que o fermento é adicionado ao mosto. Todas as etapas subsequentes do plano de fermentação começam imediatamente, independentemente da temperatura real.

Para configurá-lo, um GPIO pode ser configurado para resfriamento e um GPIO para aquecimento. O resfriamento ou o aquecimento são opcionais.

![Configurações do fermentador](/docs/img/fermenter_set.jpg)

O fermentador possui três estados diferentes: resfriamento, aquecimento e inativo. Quando o estado de arrefecimento ou aquecimento muda, inicia-se uma pausa. Durante a pausa, o estado do fermentador não muda.

* Resfriamento de status antigo e resfriamento de novo status: sem pausa. O resfriamento permanece ligado
* Aquecimento de status antigo e aquecimento de status novo: sem interrupção. O aquecimento permanece ligado
* Resfriamento de status antigo e aquecimento de novo status: pausa 120s
* Aquecimento de status antigo e resfriamento de novo status: pausa 120s

## Rampa

Uma etapa de fermentação é especificada com uma temperatura inicial e final. Na primeira figura desta seção, a temperatura na primeira etapa do fermentador é de 18°C. Naturalmente, isto significa que a temperatura de fermentação permanece inalterada por um período de 1 dia.

Na segunda etapa do fermentador, a temperatura inicial é de 18°C ​​e a temperatura final é de 20°C. A duração desta etapa de fermentação é inserida como 2 dias. Existem agora duas maneiras de ir da temperatura inicial até a final:

Quando a rampa é ativada, o Brautomat controla a temperatura de fermentação linearmente ao longo da duração especificada para esta etapa. Neste caso, a temperatura é elevada de 18°C ​​para 20°C em etapas de +0,1°C ao longo de 2 dias.

Com a rampa desativada, a temperatura final é estabelecida no início da etapa fermentadora, seja por resfriamento ou aquecimento. Uma vez estabelecida a temperatura final, ela é mantida.

## Ciclo de comutação do relé

O ciclo de comutação do relé determina por quanto tempo um dos estados de resfriamento, aquecimento ou inatividade é mantido. A faixa de valores permitida está entre 1.000 e 240.000 ms. O padrão é 120.000, ou seja, 120 segundos. Um ciclo de comutação muito pequeno pode ter um impacto negativo nos dispositivos de refrigeração.

## Exibição

No modo fermentador, a visualização MashSud (página 2) deve ser selecionada. A visão geral da caldeira e a visualização do controle manual não podem ser utilizadas no modo fermentador.
