/**
 * Add your language code to supportedLocales
 * e.g. if you want to add spanish
 *
 * supportedLocales = ["en", "de", "es"];
 *
 * copy /langauage/en.json to /languages/es.json
 * translate all words into spanish in each line after the colon
 * 
 * Do not change any word before the colon!
 *
 * {
 *   "SPEICHERN": " archivo",
 *   "SCHLIESSEN": " cerca",
 *   "MAISCHEPLAN": "plan de puré",
 *   "EINSTELLUNGEN": "ajustes".
 *   ...
 * }
 * 
 */

// language configuration
const supportedLocales = ["de", "en"];  // language files 
const defaultLocale = "de";             // default language 

// optional configuration 
const defaultTimeFormat = 'YMDHM';  // DateTimePicker Year Month Day Hour Minute
const defaultFirstDayOfWeek = 1;    // DateTimePicker 0~6: Sunday~Saturday, e.g.: 1 (Monday), default: 0(Sunday)
