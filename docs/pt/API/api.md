#⚙️API Brautomat32

Estas duas funções Javascript facilitam a comunicação com o Brautomat32.  
Eles encapsulam chamadas `fetch()`, manipulam erros, reconhecimento JSON/texto e notificações opcionais do usuário (toast/alert).

---

## 🟢 apiGET(url, alarme, brinde, log)

* @param {string} url – URL do terminal
* @param {boolean} alarme - habilita sendAlarm, padrão falso
* @param {boolean} brinde - mensagem do brinde em caso de erro, padrão falso
* @param {boolean} log – saída de depuração para console no navegador, padrão false
* @returns {Promise\<any\>} - resposta do servidor (objeto JSON ou texto)

**Exemplo:**  

```js
const misc = aguarda apiGET('/reqMisc', false, false, true);
console.log(misc);
```

---

## 🔵 apiPOST(url, dados, alarme, brinde, log, postType, responseType)

* @param {string} url – URL do terminal
* @param {Object} data – dados a serem enviados (json ou txt)
* @param {boolean} alarme - habilita sendAlarm, padrão falso
* @param {boolean} brinde - mensagem do brinde em caso de erro, padrão falso
* @param {boolean} log – saída de depuração para console no navegador, padrão false
* @param {"json"|"text"|"formdata"} postType - tipo de conteúdo para cabeçalho, json padrão
* @param {"json"|"text"} responseType - valor de retorno esperado, texto padrão
* @returns {Promise\<any\>} - Resposta do servidor

**Exemplo:**  

```js
aguarde apiPOST('/setKettle', { temp: 65, PID: verdadeiro }, verdadeiro, falso, verdadeiro);
console.log(misc);
```

---

## 🌐 Manipulador de Servidor Web Brautomat32

Brautomat Pontos de extremidade HTTP. O servidor web usa CORS e suporta solicitações **HTTP GET**, **POST**, **PUT** e **DELETE**.

---

## 🏠 Terminais básicos

| Ponto final | Método | Descrição |
|-----------|----------|-------------|
| `/` | OBTER | Carrega a página inicial |
| `/index`, `/index.htm`, `/index.html` | OBTER | Rotas alternativas para a página inicial |

---

## 🌡️ Sensores

| Ponto final | Método | Descrição |
|-----------|----------|-------------|
| `/reqSensors?id=${sensorid}` | OBTER | Retorna uma lista de todos os sensores |
| `/setSensor?id=${sensorid}` | POSTAR | Adiciona um novo sensor ou modifica um existente |
| `/delSensor?id=${sensorid}` | POSTAR | Exclui um sensor |
| `/reqSearchSensorAddresses?id=${sensorid}` | OBTER | Pesquisa endereços de sensores disponíveis |
| `/senkal` | POSTAR | Executa calibração do sensor |
| `/setSenErr?id=${sensorid}` | POSTAR | Define o status de erro do sensor (depuração) |

| sensoride | Descrição |
|-----------|----------|
| -1 | recupera todos os sensores |
| 0 - 2 | ID do sensor |

**Exemplo:**  

```js
dados const = aguarda apiGET(`/reqSensors?id=0`);
console.log(dados);
```

---

## ⚙️ Atores

| Ponto final | Método | Descrição |
|-----------|----------|-------------|
| `/reqActors?id=${actorid}` | OBTER | Retorna uma lista de todos os atores |
| `/setActor?id=${actorid}` | POSTAR | Cria ou modifica um ator |
| `/delActor?id=${actorid}` | POSTAR | Exclui um ator |
| `/actorPower?id=${actorid}` | POSTAR | Alterna a potência de um atuador |
| `/actorPWM?id=${actorid}` | POSTAR | Define o valor PWM de um atuador |

| ator | Descrição |
|-----------|----------|
| -1 | recupera todos os atores |
| 0 - 9 | ID do atuador |

**Exemplo:**  

```js
dados const = aguarda apiGET(`/reqActors?id=0`);
console.log(dados);
```

---

## 🔥 Chaleira

| Ponto final | Método | Descrição |
|-----------|----------|-------------|
| `/reqKettle?id=${kettleid}` | OBTER | Retorna dados atuais da caldeira |
| `/reqKettlePID?id=${kettleid}` | OBTER | Parâmetros de consulta PID |
| `/setKettle?id=${kettleid}` | POSTAR | Alterar dados da caldeira |
| `/setKettlePID?id=${kettleid}` | POSTAR | PID alteração de parâmetro |
| `/handlePower?id=${kettleid}` | POSTAR | Ativar/desativar desempenho |

| quelídeo | Descrição |
|-----------|----------|
| 0 | Chaleira de purê |
| 1 | Chaleira de fermentação |
| 2 | SUD |
| 3 | Fermentador |

**Exemplo:**  

```js
dados const = aguarda apiGET(`/reqKettle?id=0`);
console.log(dados);
```

---

## 📈 Perfis

| Ponto final | Método | Descrição |
|-----------|----------|--------------|
| `/setProfile` | POSTAR | Crie ou altere um novo perfil |
| `/changeProfile?id=${kettleid}&pname=${pname}` | POSTAR | Mudar perfil ativo |
| `/delProfile?pname=${pname}` | POSTAR | Excluir perfil |

| quelídeo | Descrição |
|-----------|----------|
| 0 | Chaleira de purê |
| 1 | Chaleira de fermentação |
| 2 | SUD |
| 3 | Fermentador |
| nome do nome | Nome do perfil |

**Exemplo:**  

```js
dados const = aguarda apiGET(`/reqKettle?type=0`);
console.log(dados);
```

---

## 🍺 Gerenciamento de cervejas/receitas

| Ponto final | Método | Descrição |
|-----------|----------|-------------|
| `/setSud` | POSTAR | Configurar cerveja existente |
| `/setSudNew` | POSTAR | Criar nova bebida |
| `/setSudRen` | POSTAR | Renomear Sul |
| `/setSudCopy` | POSTAR | Copiar Sul |
| `/setSudCha` | POSTAR | Alterar cerveja |
| `/delSud` | POSTAR | Excluir cerveja |
| `/reqSud` | OBTER | Obtenha parâmetros sud |
| `/reqSudname` | OBTER | Obtenha o nome atual da cerveja |
| `/reqBrauStart` | POSTAR | Inicie o processo de fermentação |

---

## ⚙️ Configurações diversas/gerais

| Ponto final | Método | Descrição |
|-----------|----------|-------------|
| `/reiniciar` | POSTAR | Reinicie o dispositivo |
| `/reqMisc` | OBTER | Informações gerais do sistema |
| `/reqVis` | OBTER | Obtenha dados de visualização |
| `/reqMiscAlert` | OBTER | Alertas de consulta |
| `/reqBreakAlert` | OBTER | Consultar avisos de fervura/quebra |
| `/setMisc` | POSTAR | Alterar configurações gerais |
| `/setMiscLang` | POSTAR | Definir idioma |
| `/rezimp` | POSTAR | Receita de importação |
| `/setMash` | POSTAR | Definir plano de mistura |
| `/startHTTPUpdate` | POSTAR | Iniciar atualização de firmware |
| `/setFerm` | POSTAR | Definir parâmetros de fermentação |

---

## ▶️ Controles

| Ponto final | Método | Descrição |
|-----------|----------|-------------|
| `/Btn-Power` | POSTAR | Botão liga / desliga do gatilho |
| `/btn-break` | POSTAR | Botão de pausa do gatilho |
| `/Btn-Play` | POSTAR | Botão de início do gatilho |
| `/Btn-Próxima etapa` | POSTAR | Próxima etapa |
| `/Btn-Prev-Step` | POSTAR | Etapa anterior |
| `/Btn-Editar` | POSTAR | Ativar modo de edição |
| `/mão de obra` | POSTAR | Controle de potência manual |
| `/apagarFlash` | POSTAR | Limpar memória flash |

---

## 📡 Eventos enviados pelo servidor (SSE)

| Ponto final | Método | Descrição |
|-----------|----------|-------------|
| `/canal` | OBTER | Canal SSE aberto |
| `/startSSE` | OBTER | Inicia conexão SSE |
| `/checkAliveSSE` | OBTER | Verifica conexões SSE ativas |
| `/reloadMashSSE` | OBTER | Recarrega dados mash |
| `/idioma` | OBTER | Obter arquivo de idioma |

---

## 📊 Dados gráficos / gráficos

| Ponto final | Método | Descrição |
|-----------|----------|-------------|
| `/getDots` | OBTER | Obtenha dados do gráfico |
| `/removeDots` | POSTAR | Limpar dados do gráfico |

---

## 🍻 Integração BrewFather

| Ponto final | Método | Descrição |
|-----------|----------|-------------|
| `/getbf` | OBTER | Lista de receitas BrewFather disponíveis |
| `/bfReceita` | OBTER | Obtenha detalhes da receita |

---

## 💾 Backup e restauração

| Ponto final | Método | Descrição |
|-----------|----------|-------------|
| `/backup` | OBTER | Criar backup do sistema |
| `/restaurar` | POSTAR | Restaurar cópia de segurança |

---

## 📁 Gerenciamento de arquivos (FSBrowser)

| Ponto final | Método | Descrição |
|-----------|----------|-------------|
| `/editar` | OBTER | Carregar editor de arquivo |
| `/status` | OBTER | Obtenha o status do sistema |
| `/lista` | OBTER | Mostrar lista de arquivos |
| `/editar` | COLOCAR | Criar novo arquivo |
| `/editar` | EXCLUIR | Excluir arquivo |
| `/editar` | POSTAR | Carregamento de arquivo |

---

## 🧩 Conteúdo estático (cache habilitado)

| Arquivos | Descrição |
|----------|---------------|
| `/Brautomat.min.css`, `/bootstrap.min.css`, `/bootstrap.min.js`, `/Brautomat.min.js`, `/Brautomat.ttf` | Ativos da Web |
| `/idioma/deutsch.json`, `/idioma/english.json`, `/idioma/norsk.json` | Arquivos de idioma |
| `/lang.js`, `/favicon.ico` | Arquivos do sistema |
| `/info.mp3`, `/success.mp3`, `/warning.mp3`, `/error.mp3` | Arquivos de áudio para mensagens do sistema |

---
