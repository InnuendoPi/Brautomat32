# Configurações do plano Mash

O Brautomat oferece fácil gerenciamento de planos de mistura. Além de importar e exportar, você pode alternar entre planos de mistura salvos. O controle de tempo também é possível. Este capítulo completa a descrição das funções básicas.

## Plano de purê

O nome do plano mash pode ser especificado nas configurações. O nome do arquivo é derivado do nome do plano de mash. Os parâmetros *Tempo total de cozimento* e *Tempo pós-isomerização* são exibidos apenas para informação e não podem ser editados. Esses parâmetros são lidos durante a importação da receita. Se um plano de mosturação for criado manualmente, o tempo de cozimento e os valores pós-isomerização são irrelevantes porque o Brautomat não calcula unidades de amargor.

## Controle de tempo

Com a ajuda do controle de tempo, o dia da noiva pode ser planejado e iniciado automaticamente.

![Controle de tempo](/docs/img/Zeitsteuerung.jpg)

Com o elemento DateTimerPicker você pode selecionar facilmente uma data e hora. O nome da receita é temporariamente substituído pela hora de início especificada.

![Controle de tempo](/docs/img/Zeitsteuerung2.jpg)

Um controle de tempo ativado é salvo na configuração. Quando a máquina de infusão é reiniciada, a data e a hora definidas são lidas. Se o início da infusão ocorrer no futuro, o controle de tempo é ativado. Se o início da distribuição estiver no passado, o controle do tempo é desativado.

## Gerenciar planos de mash

### Criar plano de mistura

O nome do plano de mistura deve ser inserido no campo de entrada. Com *OK* um novo plano de mistura vazio é criado.

### Renomear plano de mash

O novo nome do plano de mistura deve ser inserido no campo de entrada. Com *OK* o plano de mosturação é salvo com o novo nome.

### Alterar plano de mistura

O Brautomat gerencia planos mash na memória flash. Ao selecionar *Alterar plano de mistura* você pode alternar entre os planos de mistura existentes.

### Importar plano de mash

O Brautomat pode importar receitas de cerveja das seguintes fontes:

* KleinBrauhelfer2 (da versão 2.5 tipo de exportação Brautomat)
* Purê de malte e muito mais
* Cervejeiro
* Brautomat

Uma receita de cerveja importada torna-se um plano de mosturação Brautomat. Recomenda-se o gerenciamento e a criação de receitas com kbh2. O filtro de exportação "Brautomat" contém de forma otimizada todos os dados necessários para a fabricação de cerveja com o Brautomat.

As receitas do MashMalzandMore também devem ser primeiro importadas para o pequeno auxiliar de fermentação2 e adaptadas aos valores individuais do sistema, matérias-primas, etc. Como o MMum não atribui nomes aos restos, é recomendado editá-lo no plano de mosturação KBH2.

Receitas e cervejas podem ser importadas do BrewFather por meio de importação de arquivo ou por chamada de API. No BrewFather, os nomes dos restos podem conter um corpo de texto (de quase qualquer comprimento). O texto é reduzido para no máximo 50 caracteres. Brewfather permite números de ponto flutuante e texto como tempo de descanso. Os parâmetros são convertidos em números inteiros ou definidos como 0.

*Nota: Os microcontroladores ESP possuem uma pequena quantidade de RAM. Receitas com textos, imagens ou outros anexos muito longos podem não ser importados. O Brautomat filtra as receitas antes da importação. Contudo, pode ser necessário remover imagens e descrições muito longas antes de importar.

As receitas importadas são salvas na pasta /Recipes. O nome da receita é usado como nome do arquivo. O comprimento máximo do nome do arquivo no sistema de arquivos Arduino é 31 caracteres. Espaços e tremas são substituídos ao salvar.

### Exportar plano de mash

Um plano mash pode ser exportado no formato JSON. Para lê-lo novamente, a importação deve ser utilizada no formato Brautomat.

### Remover plano de mash

O plano de mash selecionado é removido da memória flash.

## Importar padrão

![Padrão de importação](/docs/img/voreinstellung_import.jpg)

O Brautomat requer uma etapa de mosturação (opcional) e uma etapa de mosturação. EmEm particular, a etapa de mosturação serve como uma etapa de separação entre a mosturação e o cozimento quando autonext está desativado. Ao importar, o Brautomat pode inserir etapas de mosturação e de mosturação ausentes. Além disso, as temperaturas faltantes podem ser fornecidas com especificações.

### Padrões de temperatura para parâmetros ausentes

Receitas de diferentes fontes podem, entre outras coisas, não conter informações sobre temperatura. Isto se aplica em particular às temperaturas de mosturação, mosturação, mosto frontal e salto em hidromassagem. A lógica do programa interno da cervejaria sempre exige uma temperatura para processamento, mesmo que algumas temperaturas não sejam necessárias do ponto de vista da cervejaria. As temperaturas ausentes são pré-atribuídas com valores padrão.

### Temperatura de mosturação [°C]

Este parâmetro é para importação de receitas e descreve a temperatura padrão para mosturação. Este parâmetro só é utilizado se nenhuma temperatura de mosturação for especificada durante a importação da receita.

### Temperatura de mosturação [°C]

Este parâmetro é para importação de receitas e descreve a temperatura padrão para mosturação. Este parâmetro só é utilizado se nenhuma temperatura de mosturação for especificada durante a importação da receita.

### Temperatura VWH [°C]

Este parâmetro é para importação de receitas e descreve a temperatura padrão para um mosto frontal. As receitas muitas vezes não especificam uma temperatura para o VWH. Uma especificação de temperatura é necessária para Brautomat. Se for especificada uma temperatura na receita, esta será utilizada durante a importação.

### Temperatura WPH [°C]

Este parâmetro é para importação de receita e descreve a temperatura padrão para salto em hidromassagem. As receitas geralmente não especificam uma temperatura para o WPH. Uma especificação de temperatura é necessária para Brautomat. Se for especificada uma temperatura na receita, esta será utilizada durante a importação.

### Temperatura de cozimento [°C]

Este parâmetro descreve a temperatura na qual o mosto ferve até atingir a ebulição. O valor padrão é 98°C e corresponde aproximadamente a um local a 500m acima do nível do mar. Para a importação da receita, este parâmetro é utilizado como temperatura de cozimento.
