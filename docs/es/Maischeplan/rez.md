# Configuración del plan de mezcla

Brautomat ofrece una fácil gestión de planes combinados. Además de importar y exportar, puede cambiar entre planes combinados guardados. También es posible el control del tiempo. Este capítulo completa la descripción de las funciones básicas.

## Plan de puré

El nombre del plan de mezcla se puede especificar en la configuración. El nombre del archivo se deriva del nombre del plan de mezcla. Los parámetros *Tiempo total de cocción* y *Tiempo post-isomerización* se muestran solo para información y no se pueden editar. Estos parámetros se leen durante la importación de recetas. Si se crea un plan de maceración manualmente, los valores de tiempo de cocción y post-isomerización son irrelevantes porque el Brautomat no calcula las unidades de amargo.

## Control de tiempo

Con la ayuda del control del tiempo, se puede planificar e iniciar automáticamente un día nupcial.

![Control de tiempo](/docs/img/Control de tiempo.jpg)

Con el elemento DateTimerPicker puedes seleccionar fácilmente una fecha y hora. El nombre de la receta se reemplaza temporalmente por la hora de inicio especificada.

![Control de tiempo](/docs/img/Control de tiempo2.jpg)

Un control de tiempo activado se guarda en la configuración. Cuando se reinicia la máquina de preparación, se leen la fecha y la hora ajustadas. Si este inicio de preparación es en el futuro, se activa el control de tiempo. Si el inicio de la preparación es posterior, el control de tiempo se desactiva.

## Administrar planes combinados

### Crear plan combinado

El nombre del plan de maceración debe ingresarse en el campo de entrada. Con *OK* se crea un nuevo plan de macerado vacío.

### Cambiar el nombre del plan combinado

El nuevo nombre para el plan de mezcla debe ingresarse en el campo de entrada. Con *OK* el plan de maceración se guarda con el nuevo nombre.

### Cambiar plan de maceración

El Brautomat administra planes combinados en la memoria flash. Al seleccionar *Cambiar plan combinado* puede cambiar entre los planes combinados existentes.

### Importar plan combinado

El Brautomat puede importar recetas de elaboración de cerveza de las siguientes fuentes:

* KleinBrauhelfer2 (a partir de la versión 2.5 tipo de exportación Brautomat)
* Puré de malta y más
* Padre cervecero
* Brautomat

Una receta de elaboración de cerveza importada se convierte en un plan de maceración Brautomat. Se recomienda la gestión y creación de recetas con kbh2. El filtro de exportación "Brautomat" contiene de forma optimizada todos los datos necesarios para elaborar cerveza con el Brautomat.

Las recetas de MashMalzandMore también se deben importar primero al pequeño auxiliar de elaboración de cerveza2 y adaptarlas a los valores individuales del sistema, materias primas, etc. Dado que MMum no asigna nombres de resto, se recomienda editarlas en el plan de macerado KBH2.

Las recetas y cervezas se pueden importar desde BrewFather mediante la importación de archivos o mediante una llamada API. En BrewFather, los nombres de los restos pueden contener un cuerpo de texto (de casi cualquier longitud). El texto se reduce a un máximo de 50 caracteres. Brewfather permite números de coma flotante y texto como tiempo de descanso. Los parámetros se convierten a números enteros o se establecen en 0.

*Nota: Los microcontroladores ESP tienen una pequeña cantidad de RAM. Es posible que no se puedan importar recetas con textos muy largos, imágenes u otros archivos adjuntos. El Brautomat filtra recetas antes de importarlas. Sin embargo, puede que sea necesario eliminar imágenes y descripciones muy largas antes de importar.

Las recetas importadas se guardan en la carpeta /Recetas. El nombre de la receta se utiliza como nombre del archivo. La longitud máxima del nombre de archivo en el sistema de archivos Arduino es de 31 caracteres. Los espacios y diéresis se reemplazan al guardar.

### Exportar plan de mezcla

Un plan combinado se puede exportar en formato JSON. Para leerlo nuevamente, la importación debe usarse en formato Brautomat.

### Eliminar plan de maceración

El plan de mezcla seleccionado se elimina de la memoria flash.

## Importar valor predeterminado

![Importación preestablecida](/docs/img/preset_import.jpg)

El Brautomat requiere un Schmontó macerado (opcional) y macerado en un paso. En particular, el paso de macerado sirve como paso de separación entre el macerado y la cocción cuando autonext está desactivado. Al importar, Brautomat puede insertar la maceración y los pasos de maceración que faltan. Además, las temperaturas que faltan se pueden proporcionar con especificaciones.

### Valores predeterminados de temperatura para parámetros faltantes

En recetas de diferentes fuentes, entre otras cosas, puede faltar información sobre la temperatura. Esto se aplica especialmente a las temperaturas de maceración, maceración, mosto frontal y lúpulo. La lógica del programa interno del cervecero siempre requiere una temperatura para el procesamiento, incluso si algunas temperaturas no son necesarias desde la perspectiva del cervecero. Las temperaturas que faltan están preasignadas con valores predeterminados.

### Temperatura de maceración [°C]

Este parámetro es para importar recetas y describe la temperatura predeterminada para el macerado. Este parámetro solo se utiliza si no se especifica ninguna temperatura de maceración durante la importación de la receta.

### Temperatura de maceración [°C]

Este parámetro es para importar recetas y describe la temperatura predeterminada para el macerado. Este parámetro solo se utiliza si no se especifica ninguna temperatura de maceración durante la importación de la receta.

### Temperatura VWH [°C]

Este parámetro es para importar recetas y describe la temperatura estándar para un salto de mosto frontal. Las recetas a menudo no especifican una temperatura para el VWH. Se requiere una especificación de temperatura para Brautomat. Si se especifica una temperatura en la receta, esta se utilizará durante la importación.

### Temperatura WPH [°C]

Este parámetro es para importar recetas y describe la temperatura predeterminada para el salto de hidromasaje. Las recetas a menudo no especifican una temperatura para el WPH. Se requiere una especificación de temperatura para Brautomat. Si se especifica una temperatura en la receta, esta se utilizará durante la importación.

### Temperatura de cocción [°C]

Este parámetro describe la temperatura a la que el mosto hierve hasta hervir. El valor estándar es 98°C y corresponde aproximadamente a una ubicación a 500 m sobre el nivel del mar. Para la importación de recetas, este parámetro se utiliza como temperatura de cocción.
