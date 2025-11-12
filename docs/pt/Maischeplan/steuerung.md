# Os controles

Diretamente abaixo do plano de mash está o deck do controlador. O processo de mosturação é controlado com os 5 botões Power, Play, Pause, Previous e Next.

![Controle](/docs/img/Buttons.jpg)

## Botão liga / desliga

O botão liga / desliga é usado para ligar e desligar o processo de mosturação. Se a função AutoTune estiver ativada nas configurações de uma placa, o processo AutoTune é iniciado ou interrompido através do botão liga/desliga.

## Botão Reproduzir

O botão Play tem duas funções no processo de mosturação:

1. A primeira função é _Iniciar o cronômetro de descanso para o descanso atual_. O botão Play inicia o cronômetro de descanso independentemente da temperatura REAL.\
Exemplo: Se o mosto já estiver fervendo na etapa de fervura, mas a temperatura REAL de 98,5°C estiver abaixo da temperatura de repouso de 100°C, o temporizador de repouso não inicia.

2. A segunda função do botão Play está vinculada à propriedade _autonext_: continuar o processo de mosturação com o próximo descanso. O botão play é exibido em vermelho nesta função. A função _Continuar o processo de mosturação com o próximo descanso_ será explicada posteriormente na descrição _autonext_ no plano de mosturação.

## Botão de pausa

A função do botão de pausa pode ser distinguida durante a fase de aquecimento até uma temperatura de repouso e durante o repouso.

- Pausa durante a fase de aquecimento

Se o processo de fermentação for iniciado com o botão liga/desliga, os botões para edição do plano de mosturação ficarão ocultos. Se o botão de pausa for clicado, os símbolos de edição serão exibidos novamente. Durante uma pausa ativada, a placa permanece ligada para atingir a temperatura alvo. O botão Pausar será exibido em vermelho. Com a ajuda de um intervalo, o cronograma de mosturação pode ser ajustado durante o processo de fermentação. Se a temperatura de repouso for atingida durante um intervalo, o temporizador de intervalo é iniciado e o intervalo termina.

- Pausa durante um descanso

Durante um descanso, o temporizador de descanso no processo de mosturação também é interrompido através do botão de pausa. O botão Pausar será exibido em vermelho. Durante uma pausa, a temperatura real é mantida em relação à temperatura nominal de repouso, ou seja, o controlador PID e, portanto, a placa permanece ativa. Com a ajuda de uma pausa durante o descanso, o plano de mosturação pode ser ajustado. A duração do intervalo prolonga o tempo de descanso anterior.

## Botão Anterior

O botão Anterior salta para a etapa anterior no plano de mistura. Se o processo de mosturação tiver sido interrompido, o temporizador de descanso atual será zerado e reiniciado.

##Próximo botão

O botão Próximo salta para a próxima etapa do plano de mosturação ou, se for o último passo do plano, finaliza o processo de mosturação.

## Botão Recolher

O botão Collapse recolhe ou recolhe a tabela do plano de mash.

![Maischeplan](/docs/img/Maischeplan-anzeigen.jpg)

O botão de recolhimento permanece visível mesmo após o início da preparação. Todos os botões para editar o plano de mosturação ficam ocultos após o início da preparação.
