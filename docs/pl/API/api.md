# ⚙️ API Brautomat32

Te dwie funkcje JavaScript ułatwiają komunikację z Brautomat32.  
Hermetyzują wywołania `fetch()`, obsługują błędy, rozpoznawanie JSON/tekstu i opcjonalne powiadomienia użytkownika (toast/alert).

---

## 🟢 apiGET(url, alarm, toast, log)

* @param {string} url - Adres URL punktu końcowego
* @param {boolean} alarm - włącz sendAlarm, domyślnie false
* @param {boolean} toast - wyskakujący komunikat w przypadku błędu, domyślnie false
* @param {boolean} log - wyjście debugowania do konsoli w przeglądarce, domyślnie false
* @returns {Promise\<any\>} - odpowiedź z serwera (obiekt JSON lub tekst)

**Przykład:**  

```j
const misc = czekaj na apiGET('/reqMisc', fałsz, fałsz, prawda);
konsola.log(różne);
```

---

## 🔵 apiPOST(adres URL, dane, alarm, toast, dziennik, typ postu, typ odpowiedzi)

* @param {string} url - Adres URL punktu końcowego
* @param {Object} data - dane do przesłania (json lub txt)
* @param {boolean} alarm - włącz sendAlarm, domyślnie false
* @param {boolean} toast - wyskakujący komunikat w przypadku błędu, domyślnie false
* @param {boolean} log - wyjście debugowania do konsoli w przeglądarce, domyślnie false
* @param {"json"|"text"|"formdata"} postType - typ zawartości nagłówka, domyślny json
* @param {"json"|"text"} typ odpowiedzi - oczekiwana wartość zwracana, tekst domyślny
* @returns {Obietnica\<dowolny\>} - Odpowiedź z serwera

**Przykład:**  

```j
czekaj na apiPOST('/setKettle', { temp: 65, PID: prawda }, prawda, fałsz, prawda);
konsola.log(różne);
```

---

## 🌐 Obsługa serwera WWW Brautomat32

Brautomat Punkty końcowe HTTP. Serwer WWW korzysta z CORS i obsługuje żądania **HTTP GET**, **POST**, **PUT** i **DELETE**.

---

## 🏠 Podstawowe punkty końcowe

| Punkt końcowy | Metoda | Opis |
|----------|----------|-------------|
| `/` | OTRZYMAJ | Ładuje stronę główną |
| `/indeks`, `/indeks.htm`, `/indeks.html` | OTRZYMAJ | Alternatywne trasy dla strony głównej |

---

## 🌡️ Czujniki

| Punkt końcowy | Metoda | Opis |
|----------|----------|-------------|
| `/reqSensors?id=${sensorid}` | OTRZYMAJ | Zwraca listę wszystkich czujników |
| `/setSensor?id=${sensorid}` | POST | Dodaje nowy czujnik lub modyfikuje istniejący |
| `/delSensor?id=${sensorid}` | POST | Usuwa czujnik |
| `/reqSearchSensorAddresses?id=${sensorid}` | OTRZYMAJ | Wyszukuje dostępne adresy czujników |
| `/senkal` | POST | Wykonuje kalibrację czujnika |
| `/setSenErr?id=${sensorid}` | POST | Ustawia status błędu czujnika (debugowanie) |

| sensoryczny | Opis |
|----------|----------|
| -1 | pobiera wszystkie czujniki |
| 0 - 2 | Identyfikator czujnika |

**Przykład:**  

```j
const dane = oczekuj apiGET(`/reqSensors?id=0`);
konsola.log(dane);
```

---

## ⚙️Aktorzy

| Punkt końcowy | Metoda | Opis |
|----------|----------|-------------|
| `/reqActors?id=${actorid}` | OTRZYMAJ | Zwraca listę wszystkich aktorów |
| `/setActor?id=${actorid}` | POST | Tworzy lub modyfikuje aktora |
| `/delActor?id=${actorid}` | POST | Usuwa aktora |
| `/actorPower?id=${actorid}` | POST | Przełącza moc siłownika |
| `/actorPWM?id=${actorid}` | POST | Ustawia wartość PWM siłownika |

| aktor | Opis |
|----------|----------|
| -1 | pobiera wszystkich aktorów |
| 0 - 9 | Identyfikator siłownika |

**Przykład:**  

```j
const dane = oczekuj apiGET(`/reqActors?id=0`);
konsola.log(dane);
```

---

## 🔥 Czajnik

| Punkt końcowy | Metoda | Opis |
|----------|----------|-------------|
| `/reqKettle?id=${kettleid}` | OTRZYMAJ | Zwraca aktualne dane kotła |
| `/reqKettlePID?id=${kettleid}` | OTRZYMAJ | Zapytanie o parametry PID |
| `/setKettle?id=${kettleid}` | POST | Zmień dane kotła |
| `/setKettlePID?id=${kettleid}` | POST | PID zmiana parametru |
| `/handlePower?id=${kettleid}` | POST | Włącz/wyłącz wydajność |

| czajnik | Opis |
|----------|----------|
| 0 | Czajnik do zacieru |
| 1 | Czajnik |
| 2 | LDS |
| 3 | Fermentator |

**Przykład:**  

```j
const dane = oczekuj apiGET(`/reqKettle?id=0`);
konsola.log(dane);
```

---

## 📈 Profile

| Punkt końcowy | Metoda | Opis |
|----------|------|-------------------|
| `/setProfil` | POST | Utwórz lub zmień nowy profil |
| `/changeProfile?id=${kettleid}&pname=${pname}` | POST | Przełącz aktywny profil |
| `/delProfile?pname=${pname}` | POST | Usuń profil |

| czajnik | Opis |
|----------|----------|
| 0 | Czajnik do zacieru |
| 1 | Czajnik |
| 2 | LDS |
| 3 | Fermentator |
| nazwa | Nazwa profilu |

**Przykład:**  

```j
const dane = oczekuj apiGET(`/reqKettle?type=0`);
konsola.log(dane);
```

---

## 🍺 Zarządzanie naparami/przepisami

| Punkt końcowy | Metoda | Opis |
|----------|----------|-------------|
| `/setSud` | POST | Skonfiguruj istniejący napar |
| `/setSudNowy` | POST | Utwórz nowy napar |
| `/setSudRen` | POST | Zmień nazwę Sud |
| `/setSudCopy` | POST | Kopiuj Sud |
| `/setSudCha` | POST | Zmień napar |
| `/delSud` | POST | Usuń napar |
| `/reqSud` | OTRZYMAJ | Uzyskaj parametry sud |
| `/reqNazwa` | OTRZYMAJ | Uzyskaj aktualną nazwę napoju |
| `/reqBrauStart` | POST | Rozpocznij proces parzenia |

---

## ⚙️ Różne / Ustawienia ogólne

| Punkt końcowy | Metoda | Opis |
|----------|----------|-------------|
| `/uruchom ponownie` | POST | Uruchom ponownie urządzenie |
| `/reqRóżne` | OTRZYMAJ | Ogólne informacje o systemie |
| `/reqVis` | OTRZYMAJ | Uzyskaj dane wizualizacyjne |
| `/reqMiscAlert` | OTRZYMAJ | Alerty zapytań |
| `/reqBreakAlert` | OTRZYMAJ | Zapytanie o ostrzeżenia o gotowaniu/przerwaniu |
| `/setMisc` | POST | Zmień ustawienia ogólne |
| `/setMiscLang` | POST | Ustaw język |
| `/rezimp` | POST | Importuj przepis |
| `/setMash` | POST | Ustaw plan zacieru |
| `/startHTTPUpdate` | POST | Rozpocznij aktualizację oprogramowania |
| `/setFerm` | POST | Ustaw parametry fermentacji |

---

## ▶️ Sterowanie

| Punkt końcowy | Metoda | Opis |
|----------|----------|-------------|
| `/Btn-Power` | POST | Włącz przycisk zasilania |
| `/btn-break` | POST | Uruchom przycisk pauzy |
| `/Btn-Play` | POST | Przycisk startu spustowego |
| `/Btn-Następny krok` | POST | Następny krok |
| `/Btn-Poprzedni-krok` | POST | Poprzedni krok |
| `/Btn-Edycja` | POST | Aktywuj tryb edycji |
| `/manpow` | POST | Sterowanie mocą ręczną |
| `/usuńFlash` | POST | Wyczyść pamięć flash |

---

## 📡 Zdarzenia wysłane przez serwer (SSE)

| Punkt końcowy | Metoda | Opis |
|----------|----------|-------------|
| `/kanał` | OTRZYMAJ | Otwórz kanał SSE |
| `/startSSE` | OTRZYMAJ | Rozpoczyna połączenie SSE |
| `/checkAliveSSE` | OTRZYMAJ | Sprawdza aktywne połączenia SSE |
| `/reloadMashSSE` | OTRZYMAJ | Ładuje ponownie dane zacieru |
| `/język` | OTRZYMAJ | Pobierz plik językowy |

---

## 📊 Wykres / dane wykresu

| Punkt końcowy | Metoda | Opis |
|----------|----------|-------------|
| `/getDots` | OTRZYMAJ | Pobierz dane wykresu |
| `/usuńkropki` | POST | Wyczyść dane wykresu |

---

## 🍻 Integracja z BrewFather

| Punkt końcowy | Metoda | Opis |
|----------|----------|-------------|
| `/getbf` | OTRZYMAJ | Lista dostępnych przepisów BrewFather |
| `/bfPrzepis` | OTRZYMAJ | Uzyskaj szczegóły przepisu |

---

## 💾 Kopia zapasowa i przywracanie

| Punkt końcowy | Metoda | Opis |
|----------|----------|-------------|
| `/kopia zapasowa` | OTRZYMAJ | Utwórz kopię zapasową systemu |
| `/przywróć` | POST | Przywróć kopię zapasową |

---

## 📁 Zarządzanie plikami (FSBrowser)

| Punkt końcowy | Metoda | Opis |
|----------|----------|-------------|
| `/edytuj` | OTRZYMAJ | Załaduj edytor plików |
| `/status` | OTRZYMAJ | Uzyskaj status systemu |
| `/lista` | OTRZYMAJ | Pokaż listę plików |
| `/edytuj` | POSTAW | Utwórz nowy plik |
| `/edytuj` | USUŃ | Usuń plik |
| `/edytuj` | POST | Przesyłanie pliku |

---

## 🧩 Treść statyczna (włączona pamięć podręczna)

| Pliki | Opis |
|---------|--------------|
| `/Brautomat.min.css`, `/bootstrap.min.css`, `/bootstrap.min.js`, `/Brautomat.min.js`, `/Brautomat.ttf` | Zasoby sieciowe |
| `/język/deutsch.json`, `/język/english.json`, `/język/norsk.json` | Pliki językowe |
| `/lang.js`, `/favicon.ico` | Pliki systemowe |
| `/info.mp3`, `/success.mp3`, `/warning.mp3`, `/error.mp3` | Pliki audio dla komunikatów systemowych |

---
