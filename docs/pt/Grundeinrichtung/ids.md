#Configure o fogão

## Criando a chaleira de purê

Na primeira seção _Maischeplan_, a caldeira MashSud é criada usando a engrenagem no canto superior direito.

![Criar chaleira de purê](/docs/img/IDS-einrichten.jpg)

## Configurando um fogão

Primeiro, uma placa deve ser configurada. Uma placa de indução GGM IDS é configurada nesta configuração básica.

A primeira configuração diz respeito ao tipo de IDS, onde pode ser selecionado IDS1 ou IDS2. Isto é seguido por três parâmetros de controle:

* PIN branco [relé] - Padrão: D7
* PIN amarelo [Comando] - Padrão: D6
* PIN azul [Interromper] - Padrão: - (não utilizado) ou D5

Esses GPIOs (D5, D6 e D7) são pré-configurados para o cabo de conexão GGM IDS com soquete JST-HX ou bloco terminal de parafuso.

Em seguida, um sensor de temperatura deve ser atribuído à chaleira MashBud. A seleção é feita a partir de uma lista de sensores já configurados. Nesta configuração básica, apenas o sensor _Sensor IDS2_ está presente, que é selecionado de acordo.

_Nota_: _Um sensor de temperatura deve estar permanentemente atribuído a uma placa. O valor do sensor é referido como a temperatura real ou temperatura atual e é continuamente comparado com a temperatura de repouso (temperatura alvo) durante o processo de mosturação._

![Configurar caldeira de mistura de purê](/docs/img/IDS-configure.jpg)

Os parâmetros da aba "Controle de temperatura" são explicados detalhadamente na seção "Todos os parâmetros". Para a configuração básica, inicialmente são adotados os valores padrão.

![Configurar caldeira de fermentação de purê](/docs/img/IDS-temperaturen.jpg)

## Configurando o controlador PID

Após a configuração básica, o controlador PID deve ser configurado na aba Gerenciador PID. O controlador PID calcula automaticamente a potência necessária para que a placa leve a temperatura do mosto (temperatura real) à temperatura de repouso. Uma configuração precisa do PID garante que a temperatura de repouso permaneça constante durante todo o período de repouso.

O controlador PID é configurado com dois parâmetros:

* Ku (ganho final) – fator de ganho
* Pu (período final) – duração do período

Os parâmetros PID P, I e D são calculados a partir desses dois valores. Esses parâmetros são individuais para cada sistema de fermentação e são determinados usando o processo AutoTune. O processo AutoTune é descrito em detalhes na seção "AutoTune passo a passo".

Os seguintes valores para Ku e Pu são inseridos para esta configuração básica. A regra de ajuste PID _IDS PID Mode_ é então selecionada:

![IDS](/docs/img/IDS-AutoTune-erg.jpg)

Assim que os valores para Ku e Pu são inseridos, o algoritmo PID selecionado determina automaticamente os três valores P, I e D. Uma explicação detalhada de todos os parâmetros será apresentada posteriormente.

## Valores iniciais para diferentes tamanhos de caldeiras

Para uma chaleira de 36L com volume de purê de cerca de 20L:

```texto
Fator de amplificação Ku (ganho final): 182
Duração do período Pu (período final): 2245
```

Para uma chaleira de 70L com volume de purê superior a 50L:

```texto
Fator de amplificação Ku (ganho final): 225
Duração do período Pu (período final): 1500
```

## Conclusão da configuração básica

Depois de salvar as configurações, a configuração básica estará concluída. Agora você pode preparar cerveja com um sensor de temperatura e uma chaleira para fazer purê.

_Observação: um plano de mosturação também é necessário para o processo de fermentação real._
