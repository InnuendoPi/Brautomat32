# Utwórz nowy plik językowy

Utwórz kopię pliku językowego data/language/de.json i zmień dwuznakową nazwę pliku na nowy plik językowy:

hiszpański: es.json\
francuski: fr.json\
duński: dk.json\
holenderski: nl.json\
itp.

Przetłumacz wszystkie słowa w każdym wierszu, zaczynając od dwukropka:

,,bicie
 {
   "ZAPISZ": "archiwum",
   „ZAMKNIJ”: „cerca”,
   ...
 }
```

Otwórz Eksploratora w interfejsie internetowym Brautomat. Skopiuj nowy plik językowy do folderu /language na swoim Brautomat. Na koniec należy udostępnić Brautomat nowy plik językowy: edytuj plik /lang.js

,,bicie
const obsługiwaneLocales = ["de", "en"];  // pliki językowe 
```

Na przykład, jeśli dodano plik w języku hiszpańskim es.json, zmodyfikuj plik /lang.js w następujący sposób:

,,bicie
const obsługiwaneLocales = ["de", "en", "es"];  // pliki językowe 
```

Zapisz plik za pomocą skrótu klawiaturowego Ctrl-S i uruchom ponownie Brautomat. Teraz możesz wybrać nowy język w interfejsie internetowym.

_Udostępnij nowy plik językowy innym użytkownikom! Wyślij mi plik językowy lub poprawkę._
