# Configuração do sensor de temperatura

## Adicionar novo sensor

Na seção _Sensores_, um novo sensor pode ser adicionado clicando no símbolo de mais.

![Criar sensores](/docs/img/Sensor-einrichten.jpg)

## Defina o endereço e o nome do sensor

Os sensores de temperatura Dallas DS18B20 possuem um endereço exclusivo que é usado pelo firmware para identificação. O endereço do sensor é lido automaticamente. Se mais de um sensor estiver conectado, o endereço do sensor poderá ser selecionado na lista de seleção.

Se nenhum sensor for exibido:

* A detecção dos sensores pode ser reiniciada através do botão recarregar.
* Se nenhum sensor ainda for detectado, a conexão do cabo deverá ser verificada.

Cada sensor precisa de um nome. Nesta configuração básica o sensor é denominado “Sensor IDS2”.  chamado.

_Nota: Os nomes dos sensores podem conter no máximo 20 caracteres. Os caracteres especiais permitidos são # e espaços. A entrada é verificada automaticamente pela interface web._

![Configurar sensores](/docs/img/Sensor-einstellungen.jpg)

## Calibração do sensor (valores de deslocamento)

As propriedades Offset 1 e Offset 2 são usadas para calibração do sensor. Uma explicação detalhada pode ser encontrada na seção _Sensores – Calibração_.

Para esta configuração básica, ambos os valores permanecem inalterados em 0,00.

## Salve e verifique o sensor

Ao clicar em _salvar_ o sensor é criado e exibido em Dashboard em _Sensores_.

![Sensores Dashboard](/docs/img/Sensor-dashboard.jpg)

> **Nota:**

A configuração dos sensores analógicos PT100x é feita da mesma maneira, mas não é abordada nesta configuração básica.
