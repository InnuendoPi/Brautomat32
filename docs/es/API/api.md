# ⚙️ API Broautomat32

Estas dos funciones de Javascript facilitan la comunicación con Brautomat32.  
Encapsulan llamadas `fetch()`, manejan errores, reconocimiento de texto/JSON y notificaciones de usuario opcionales (brindis/alerta).

---

## 🟢 apiGET(url, alarma, brindis, registro)

* @param {string} url - URL del punto final
* @param alarma {booleana} - habilita sendAlarm, valor predeterminado falso
* @param {boolean} brindis: mensaje de brindis en caso de error, valor predeterminado falso
* @param {boolean} log: salida de depuración a la consola en el navegador, valor predeterminado falso
* @returns {Promise\<any\>} - respuesta del servidor (objeto JSON o texto)

**Ejemplo:**  

```js
const misc = await apiGET('/reqMisc', falso, falso, verdadero);
console.log(varios);
```

---

## 🔵 apiPOST(url, datos, alarma, brindis, registro, tipo de publicación, tipo de respuesta)

* @param {string} url - URL del punto final
* @param {Objeto} datos - datos a enviar (json o txt)
* @param alarma {booleana} - habilita sendAlarm, valor predeterminado falso
* @param {boolean} brindis: mensaje de brindis en caso de error, valor predeterminado falso
* @param {boolean} log: salida de depuración a la consola en el navegador, valor predeterminado falso
* @param {"json"|"text"|"formdata"} postType - tipo de contenido para el encabezado, json predeterminado
* @param {"json"|"text"} tipo de respuesta: valor de retorno esperado, texto predeterminado
* @returns {Promise\<any\>} - Respuesta del servidor

**Ejemplo:**  

```js
espere apiPOST('/setKettle', {temp: 65, PID: verdadero }, verdadero, falso, verdadero);
console.log(varios);
```

---

## 🌐 Controlador de servidor web Brautomat32

Brautomat Puntos finales HTTP. El servidor web utiliza CORS y admite solicitudes **HTTP GET**, **POST**, **PUT** y **DELETE**.

---

## 🏠 Puntos finales base

| Punto final | Método | Descripción |
|-----------|----------|--------------|
| `/` | OBTENER | Carga la página de inicio |
| `/index`, `/index.htm`, `/index.html` | OBTENER | Rutas alternativas para la página de inicio |

---

## 🌡️ Sensores

| Punto final | Método | Descripción |
|-----------|----------|--------------|
| `/reqSensors?id=${sensorid}` | OBTENER | Devuelve una lista de todos los sensores |
| `/setSensor?id=${sensorid}` | PUBLICAR | Agrega un nuevo sensor o modifica uno existente |
| `/delSensor?id=${sensorid}` | PUBLICAR | Elimina un sensor |
| `/reqSearchSensorAddresses?id=${sensorid}` | OBTENER | Busca direcciones de sensores disponibles |
| `/senkal` | PUBLICAR | Realiza calibración del sensor |
| `/setSenErr?id=${sensorid}` | PUBLICAR | Establece el estado de error del sensor (depuración) |

| sensoride | Descripción |
|-----------|----------|
| -1 | recupera todos los sensores |
| 0 - 2 | Identificación del sensor |

**Ejemplo:**  

```js
datos constantes = esperar apiGET(`/reqSensors?id=0`);
consola.log(datos);
```

---

## ⚙️ Actores

| Punto final | Método | Descripción |
|-----------|----------|--------------|
| `/reqActors?id=${actorid}` | OBTENER | Devuelve una lista de todos los actores |
| `/setActor?id=${actorid}` | PUBLICAR | Crea o modifica un actor |
| `/delActor?id=${actorid}` | PUBLICAR | Elimina un actor |
| `/actorPower?id=${actorid}` | PUBLICAR | Cambia la potencia de un actuador |
| `/actorPWM?id=${actorid}` | PUBLICAR | Establece el valor PWM de un actuador |

| actoride | Descripción |
|-----------|----------|
| -1 | recupera todos los actores |
| 0 - 9 | Identificación del actuador |

**Ejemplo:**  

```js
datos constantes = esperar apiGET(`/reqActors?id=0`);
consola.log(datos);
```

---

## 🔥 Hervidor

| Punto final | Método | Descripción |
|-----------|----------|--------------|
| `/reqKettle?id=${kettleid}` | OBTENER | Devuelve los datos actuales de la caldera |
| `/reqKettlePID?id=${kettleid}` | OBTENER | Consulta PID parámetros |
| `/setKettle?id=${kettleid}` | PUBLICAR | Cambiar datos de caldera |
| `/setKettlePID?id=${kettleid}` | PUBLICAR | PID cambio de parámetro |
| `/handlePower?id=${teteraid}` | PUBLICAR | Activar/Desactivar rendimiento |

| hervidor de agua | Descripción |
|-----------|----------|
| 0 | Hervidor de puré |
| 1 | Hervidor de cerveza |
| 2 | SUD |
| 3 | Fermentador |

**Ejemplo:**  

```js
datos constantes = esperar apiGET(`/reqKettle?id=0`);
consola.log(datos);
```

---

## 📈 Perfiles

| Punto final | Método | Descripción |
|-----------|----------|--------------|
| `/setProfile` | PUBLICAR | Crear o cambiar un nuevo perfil |
| `/changeProfile?id=${kettleid}&pname=${pname}` | PUBLICAR | Cambiar perfil activo |
| `/delProfile?pname=${pname}` | PUBLICAR | Eliminar perfil |

| hervidor de agua | Descripción |
|-----------|----------|
| 0 | Hervidor de puré |
| 1 | Hervidor de cerveza |
| 2 | SUD |
| 3 | Fermentador |
| pnombre | Nombre del perfil |

**Ejemplo:**  

```js
datos constantes = esperar apiGET(`/reqKettle?type=0`);
consola.log(datos);
```

---

## 🍺 Gestión de elaboración/recetas

| Punto final | Método | Descripción |
|-----------|----------|--------------|
| `/setSud` | PUBLICAR | Configurar la preparación existente |
| `/setSudNuevo` | PUBLICAR | Crear nueva cerveza |
| `/setSudRen` | PUBLICAR | Cambiar nombre Sur |
| `/setSudCopy` | PUBLICAR | Copia Sur |
| `/setSudCha` | PUBLICAR | Cambiar cerveza |
| `/delSud` | PUBLICAR | Eliminar cerveza |
| `/reqSud` | OBTENER | Obtener parámetros sud |
| `/reqApellido` | OBTENER | Obtener el nombre de la cerveza actual |
| `/reqBrauStart` | PUBLICAR | Iniciar el proceso de elaboración de cerveza |

---

## ⚙️ Configuración miscelánea / general

| Punto final | Método | Descripción |
|-----------|----------|--------------|
| `/reiniciar` | PUBLICAR | Reinicie el dispositivo |
| `/reqMisc` | OBTENER | Información general del sistema |
| `/reqVis` | OBTENER | Obtener datos de visualización |
| `/reqMiscAlert` | OBTENER | Alertas de consulta |
| `/reqBreakAlert` | OBTENER | Consultar advertencias de ebullición/rotura |
| `/setMisc` | PUBLICAR | Cambiar configuración general |
| `/setMiscLang` | PUBLICAR | Establecer idioma |
| `/rezimp` | PUBLICAR | Receta de importación |
| `/setMash` | PUBLICAR | Establecer plan de maceración |
| `/startHTTPUpdate` | PUBLICAR | Iniciar actualización de firmware |
| `/setFerm` | PUBLICAR | Establecer parámetros de fermentación |

---

## ▶️ Controles

| Punto final | Método | Descripción |
|-----------|----------|--------------|
| `/Btn-Power` | PUBLICAR | Botón de encendido |
| `/btn-break` | PUBLICAR | Botón de pausa del disparador |
| `/Btn-Reproducir` | PUBLICAR | Botón de inicio del disparador |
| `/Btn-Siguiente-Paso` | PUBLICAR | Siguiente paso |
| `/Btn-Paso-Anterior` | PUBLICAR | Paso anterior |
| `/Btn-Editar` | PUBLICAR | Activar modo edición |
| `/ mano de obra` | PUBLICAR | Control de potencia manual |
| `/eraseFlash` | PUBLICAR | Borrar memoria flash |

---

## 📡 Eventos enviados por el servidor (SSE)

| Punto final | Método | Descripción |
|-----------|----------|--------------|
| `/canal` | OBTENER | Abrir canal ESS |
| `/inicioSSE` | OBTENER | Inicia conexión SSE |
| `/checkAliveSSE` | OBTENER | Comprueba las conexiones SSE activas |
| `/ recargarMashSSE` | OBTENER | Recarga datos combinados |
| `/idioma` | OBTENER | Obtener archivo de idioma |

---

## 📊 Gráficos / Datos de gráficos

| Punto final | Método | Descripción |
|-----------|----------|--------------|
| `/getPuntos` | OBTENER | Obtener datos del gráfico |
| `/removePuntos` | PUBLICAR | Borrar datos del gráfico |

---

## 🍻 Integración de BrewFather

| Punto final | Método | Descripción |
|-----------|----------|--------------|
| `/getbf` | OBTENER | Lista de recetas BrewFather disponibles |
| `/bfReceta` | OBTENER | Obtener detalles de la receta |

---

## 💾 Copia de seguridad y restauración

| Punto final | Método | Descripción |
|-----------|----------|--------------|
| `/copia de seguridad` | OBTENER | Crear copia de seguridad del sistema |
| `/restaurar` | PUBLICAR | Restaurar copia de seguridad |

---

## 📁 Gestión de archivos (FSBrowser)

| Punto final | Método | Descripción |
|-----------|----------|--------------|
| `/editar` | OBTENER | Cargar editor de archivos |
| `/estado` | OBTENER | Obtener el estado del sistema |
| `/lista` | OBTENER | Mostrar lista de archivos |
| `/editar` | PONER | Crear nuevo archivo |
| `/editar` | BORRAR | Eliminar archivo |
| `/editar` | PUBLICAR | Carga de archivos |

---

## 🧩 Contenido estático (caché habilitado)

| Archivos | Descripción |
|----------|---------------|
| `/Brautomat.min.css`, `/bootstrap.min.css`, `/bootstrap.min.js`, `/Brautomat.min.js`, `/Brautomat.ttf` | Activos web |
| `/language/deutsch.json`, `/language/english.json`, `/language/norsk.json` | Archivos de idioma |
| `/lang.js`, `/favicon.ico` | Archivos del sistema |
| `/info.mp3`, `/éxito.mp3`, `/warning.mp3`, `/error.mp3` | Archivos de audio para mensajes del sistema |

---
