#Cria um novo arquivo de idioma

Faça uma cópia do arquivo de idioma data/linguagem/de.json e renomeie o arquivo com dois caracteres para um novo arquivo de idioma:

Espanhol: es.json\
Francês: fr.json\
Dinamarquês: dk.json\
Holandês: nl.json\
etc.

Traduza todas as palavras começando com dois pontos em cada linha:

```bash
 {
   "SAVE": "arquivo",
   "CLOSE": "cerca",
   ...
 }
```

Abra o Explorer na interface web de Brautomat. Copie o novo arquivo de idioma para a pasta /idioma em seu Brautomat. Por fim, o novo arquivo de idioma deve ser divulgado a Brautomat: edite o arquivo /lang.js

```bash
const suportadoLocales = ["de", "en"];  //arquivos de idioma 
```

Por exemplo, se você adicionou um arquivo em espanhol es.json, edite o arquivo /lang.js da seguinte maneira:

```bash
const SupportedLocales = ["de", "en", "es"];  //arquivos de idioma 
```

Salve o arquivo com o atalho de teclado Ctrl-S e reinicie Brautomat. Agora você pode selecionar o novo idioma na interface web.

_Compartilhe um novo arquivo de idioma com outros usuários! Envie-me seu arquivo de idioma ou sua correção._
