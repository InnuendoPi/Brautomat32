# Crear un nuevo archivo de idioma

Haga una copia del archivo de idioma data/language/de.json y cambie el nombre del archivo con dos caracteres a un nuevo archivo de idioma:

Español: es.json\
Francés: fr.json\
Danés: dk.json\
Holandés: nl.json\
etc.

Traduce todas las palabras que comienzan con dos puntos en cada línea:

```golpecito
 {
   "GUARDAR": "archivo",
   "CERRAR": "cerca",
   ...
 }
```

Abra Explorer en la interfaz web de Brautomat. Copie el nuevo archivo de idioma a la carpeta /language en su Brautomat. Finalmente, el nuevo archivo de idioma debe ser dado a conocer a Brautomat: editar el archivo /lang.js

```golpecito
const supportLocales = ["de", "en"];  // archivos de idioma 
```

Por ejemplo, si agregó un archivo en español es.json, edite el archivo /lang.js de la siguiente manera:

```golpecito
const supportLocales = ["de", "en", "es"];  // archivos de idioma 
```

Guarde el archivo con el atajo de teclado Ctrl-S y reinicie Brautomat. Ahora puede seleccionar el nuevo idioma en la interfaz web.

_¡Comparte un nuevo archivo de idioma con otros usuarios! Envíame tu archivo de idioma o tu corrección._
