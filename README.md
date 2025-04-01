# Dokumentacja projektu S.K.Y. Bank

## Spis treści
1. [Opis projektu](#opis-projektu)
2. [Struktura projektu](#struktura-projektu)
3. [System stylów](#system-stylów)
4. [Komponenty](#komponenty)
5. [Zarządzanie stanem](#zarządzanie-stanem)
6. [Dodawanie nowej strony](#dodawanie-nowej-strony)
7. [Dodawanie nowych funkcjonalności](#dodawanie-nowych-funkcjonalności)
8. [Responsywność](#responsywność)
9. [Fonty i ikony](#fonty-i-ikony)
10. [Animacje](#animacje)
11. [Porady i rozwiązywanie problemów](#porady-i-rozwiązywanie-problemów)
12. [Checklist dla nowych stron](#checklist-dla-nowych-stron)

## Opis projektu

S.K.Y. Bank to projekt strony internetowej dla fikcyjnego banku, który oferuje zarządzanie finansami całkowicie zdalnie. Strona została zbudowana przy użyciu React.js z wykorzystaniem React Router do nawigacji oraz kontekstu (Context API) do zarządzania motywem ciemnym/jasnym.

Główne funkcjonalności:
- Strona główna prezentująca bank i jego usługi
- Przełączanie między jasnym a ciemnym motywem
- Responsywny układ dopasowujący się do różnych urządzeń
- Menu boczne wysuwane na urządzeniach mobilnych

## Struktura projektu

```
project-bank-client/
├── public/              # Pliki publiczne (favicon, index.html)
├── src/
│   ├── components/      # Reużywalne komponenty
│   │   ├── Button.js    # Komponent przycisku
│   │   ├── Features.js  # Komponent sekcji z funkcjami
│   │   ├── Header.js    # Komponent nagłówka
│   │   └── Sidebar.js   # Komponent menu bocznego
│   ├── context/         # Konteksty React
│   │   └── ThemeContext.js  # Kontekst motywu
│   ├── pages/           # Strony aplikacji
│   │   ├── Home.js      # Strona główna
│   │   └── AboutUs.js   # Strona "O nas" (do utworzenia)
│   ├── styles/          # Pliki CSS
│   │   ├── Button.module.css  # Style dla przycisku
│   │   ├── Features.module.css # Style dla funkcji
│   │   ├── globals.css  # Globalne style i zmienne CSS
│   │   ├── Header.module.css  # Style dla nagłówka
│   │   ├── Home.module.css    # Style dla strony głównej
│   │   └── Sidebar.module.css # Style dla menu bocznego
│   ├── App.js           # Główny komponent aplikacji
│   └── index.js         # Punkt wejściowy aplikacji
```

## System stylów

Projekt wykorzystuje moduły CSS (CSS Modules) dla stylizacji komponentów, co pozwala na lokalny zakres stylów dla każdego komponentu. Wszystkie style są zapisane w plikach `.module.css`.

### Zmienne CSS

W pliku `globals.css` zdefiniowane są zmienne CSS, które służą do spójnego wyglądu aplikacji. Podstawowe zmienne to kolory, cienie, animacje i wysokości elementów.

W trybie ciemnym wartości tych zmiennych są nadpisywane, zmieniając paletę kolorów na ciemniejszą z jasnymi akcentami.

### Jak zmienić kolory w aplikacji

Jeśli chcesz zmienić kolorystykę całej aplikacji, wystarczy edytować zmienne CSS w pliku `globals.css`. Wszystkie elementy korzystające z tych zmiennych automatycznie przyjmą nową kolorystykę.

### Użycie zmiennych CSS

Aby użyć zdefiniowanych zmiennych CSS, należy odnosić się do nich używając `var()`:

```css
.myElement {
  color: var(--text);
  background-color: var(--background);
  border: 1px solid var(--border);
}
```

### Struktura plików CSS

Każdy komponent ma swój własny plik CSS modułowy:

- `Button.module.css` - style dla przycisku
- `Features.module.css` - style dla kart funkcji
- `Header.module.css` - style dla nagłówka
- `Home.module.css` - style dla strony głównej
- `Sidebar.module.css` - style dla menu bocznego
- `globals.css` - globalne style i zmienne

### Dodawanie własnych klas CSS

Aby dodać nową klasę CSS do istniejącego pliku modułowego:

1. Otwórz odpowiedni plik `.module.css`
2. Dodaj nową klasę
3. Zaimportuj i użyj w komponencie

## Komponenty

Projekt zawiera kilka kluczowych komponentów, które są wielokrotnie wykorzystywane w różnych częściach aplikacji:

### 1. Button

`Button.js` to uniwersalny komponent przycisku, który można dostosować za pomocą różnych właściwości:

- `primary` - czy przycisk ma być w głównym kolorze (niebieski/różowy)
- `small` - czy przycisk ma być mały (mniejsze padding i font)
- `large` - czy przycisk ma być duży (większe padding i font)
- `fullWidth` - czy przycisk ma zajmować pełną szerokość kontenera

### 2. Header

`Header.js` to komponent nagłówka strony, który zawiera logo, nawigację oraz przyciski do logowania i rejestracji. Zmienia wygląd podczas przewijania strony.

Komponent przyjmuje następujące właściwości:
- `onToggleSidebar` - funkcja wywoływana po kliknięciu przycisku menu
- `onToggleTheme` - funkcja wywoływana po kliknięciu przycisku zmiany motywu
- `darkMode` - wartość boolean określająca aktualny motyw

### 3. Sidebar

`Sidebar.js` to komponent bocznego menu, który wysuwa się po kliknięciu przycisku hamburger menu w nagłówku. Zawiera linki nawigacyjne do różnych części aplikacji.

Komponent przyjmuje następujące właściwości:
- `isOpen` - wartość boolean określająca, czy menu jest otwarte
- `onClose` - funkcja wywoływana po zamknięciu menu

### 4. Features

`Features.js` to komponent wyświetlający karty z funkcjami/zaletami banku. Każda karta zawiera ikonę, tytuł i opis.

### Modyfikacja istniejących komponentów

#### Dodawanie nowych funkcji do Features:

Aby dodać nową funkcję/zaletę do komponentu Features, otwórz `Features.js` i dodaj nowy obiekt do tablicy `features`.

#### Dodawanie nowych linków do Sidebar:

Aby dodać nowy link do menu bocznego, otwórz `Sidebar.js` i dodaj nowy element do listy w `sidebarNav`.

#### Dodawanie nowych linków do Header:

Aby dodać nowy link do menu głównego, otwórz `Header.js` i dodaj nowy element do listy w `mainNav`.

## Zarządzanie stanem

### ThemeContext

`ThemeContext.js` to kontekst React odpowiedzialny za zarządzanie motywem (ciemnym/jasnym) aplikacji. Udostępnia następujące wartości:

- `darkMode` - wartość boolean określająca, czy aktywny jest tryb ciemny
- `toggleTheme` - funkcja do przełączania między trybami
- `isTransitioning` - wartość boolean określająca, czy trwa animacja zmiany motywu

### Jak działa ThemeContext

1. `ThemeContext.js` tworzy kontekst React za pomocą `createContext()`
2. `ThemeProvider` to komponent, który opakowuje aplikację i udostępnia wartości kontekstu
3. Stan motywu (`darkMode`) jest przechowywany w `localStorage`, dzięki czemu preferencje użytkownika są zapamiętywane między sesjami
4. Funkcja `toggleTheme()` przełącza między jasnym a ciemnym motywem
5. Podczas zmiany motywu ustawiana jest flaga `isTransitioning`, która pozwala na płynne animacje przejścia

### Tworzenie własnego kontekstu

Jeśli potrzebujesz utworzyć własny kontekst (np. dla zarządzania danymi użytkownika), możesz wzorować się na `ThemeContext.js`.

## Dodawanie nowej strony

Aby dodać nową stronę "O nas", należy wykonać następujące kroki:

### 1. Utworzenie pliku strony

Utwórz nowy plik `AboutUs.js` w katalogu `src/pages` zawierający komponent strony "O nas".

### 2. Utworzenie pliku stylów

Utwórz nowy plik `AboutUs.module.css` w katalogu `src/styles` zawierający style dla strony "O nas".

### 3. Dodanie pliku do App.js

Otwórz `App.js` i dodaj nową trasę do komponentu `Routes`.

### 4. Dodanie linków w nawigacji

Dodaj linki do nowej strony w komponentach `Header.js` i `Sidebar.js`.

## Dodawanie nowych funkcjonalności

### 1. Kalkulator kredytowy

Kalkulator kredytowy to przydatna funkcjonalność dla strony banku, pozwalająca użytkownikom oszacować miesięczne raty kredytu.

**Koncepcja:**
- Formularz z polami: kwota kredytu, oprocentowanie, okres spłaty
- Suwaki (input type="range") dla łatwego wyboru wartości
- Wyświetlanie wyników: miesięczna rata, całkowity koszt kredytu, całkowite odsetki
- Automatyczne przeliczanie wyników po zmianie parametrów

**Implementacja:**
1. Utwórz komponent z formularzem zawierającym pola i suwaki
2. Dodaj funkcję do obliczania raty kredytu zgodnie ze wzorem na ratę annuitetową
3. Zastosuj formatowanie liczb do wyświetlania wartości pieniężnych
4. Dodaj obsługę resetowania kalkulatora
5. Dodaj informację o charakterze orientacyjnym wyliczeń

### 2. System powiadomień (Toast notifications)

System powiadomień informuje użytkowników o wykonanych akcjach, potwierdzeniach lub błędach.

**Koncepcja:**
- Powiadomienia pojawiające się w prawym górnym rogu ekranu
- Różne typy powiadomień: sukces, błąd, informacja, ostrzeżenie
- Automatyczne znikanie po określonym czasie
- Możliwość manualnego zamknięcia

**Implementacja:**
1. Utwórz kontekst do zarządzania powiadomieniami (NotificationContext)
2. Zdefiniuj funkcje do dodawania różnych typów powiadomień
3. Utwórz komponent wyświetlający powiadomienia
4. Dodaj animacje pojawiania się i znikania powiadomień
5. Zaimplementuj automatyczne usuwanie powiadomień po upływie czasu

### 3. Slider/karuzela dla promocji

Slider może być wykorzystany na stronie głównej do prezentowania promocji i ofert specjalnych.

**Koncepcja:**
- Automatycznie przewijane slajdy z informacjami o promocjach
- Przyciski do ręcznego przechodzenia między slajdami
- Wskaźniki (kropki) pokazujące aktualny slajd
- Obsługa gestów dotykowych (swipe) na urządzeniach mobilnych

**Implementacja:**
1. Utwórz komponent z kontenerem dla slajdów
2. Zaimplementuj mechanizm zmiany slajdów (automatyczny i ręczny)
3. Dodaj wskaźniki aktualnego slajdu
4. Dodaj obsługę gestów dotykowych
5. Zastosuj animacje przejścia między slajdami

### 4. Formularz kontaktowy

Formularz kontaktowy umożliwia użytkownikom wysyłanie wiadomości do banku.

**Koncepcja:**
- Pola do wprowadzania danych: imię i nazwisko, email, telefon, temat, treść
- Walidacja pól formularza
- Informacje o błędach
- Potwierdzenie wysłania wiadomości

**Implementacja:**
1. Utwórz komponent formularza z odpowiednimi polami
2. Dodaj obsługę stanu formularza (useState)
3. Zaimplementuj walidację pól
4. Dodaj obsługę wysyłania formularza (można symulować)
5. Wyświetl potwierdzenie po wysłaniu formularza

### 5. Wyszukiwarka

Wyszukiwarka pozwala użytkownikom szybko znaleźć potrzebne informacje na stronie.

**Koncepcja:**
- Pole wyszukiwania w nagłówku strony
- Wyświetlanie sugestii podczas pisania
- Strona wyników wyszukiwania
- Wyróżnienie wyszukiwanej frazy w wynikach

**Implementacja:**
1. Dodaj pole wyszukiwania do komponentu Header
2. Utwórz funkcję wyszukiwania w danych (można symulować)
3. Stwórz stronę wyników wyszukiwania
4. Dodaj mechanizm wyróżniania wyszukiwanej frazy w wynikach

## Responsywność

### Projektowanie responsywne

Projektowanie responsywne to podejście, które zapewnia optymalne wyświetlanie strony na różnych urządzeniach. W projekcie S.K.Y. Bank responsywność jest zaimplementowana przy użyciu:

1. **Punktów granicznych (breakpoints)** - media queries definiują, jak strona ma się zachowywać przy różnych szerokościach ekranu:
   ```
   /* Duże ekrany (komputery stacjonarne) */
   @media (max-width: 1200px) { ... }

   /* Średnie ekrany (laptopy, małe monitory) */
   @media (max-width: 992px) { ... }

   /* Małe ekrany (tablety) */
   @media (max-width: 768px) { ... }

   /* Bardzo małe ekrany (telefony) */
   @media (max-width: 576px) { ... }
   ```

2. **Elastycznego układu (Flexible layout)** - elementy zmieniają swoje położenie i rozmiar w zależności od szerokości ekranu.

3. **Elastycznych obrazów i mediów** - obrazy i inne media skalują się proporcjonalnie.

4. **Względnych jednostek miary** - używanie jednostek takich jak rem, em, %, vw/vh zamiast px.

### Mobilne modyfikacje UI

Na urządzeniach mobilnych interfejs zostaje zmodyfikowany:

1. **Menu** - główna nawigacja jest ukrywana, a w jej miejsce pojawia się przycisk burgera, który otwiera menu boczne
2. **Typografia** - zmniejszenie rozmiaru czcionek dla lepszej czytelności
3. **Odstępy** - zmniejszenie marginesów i paddingów, aby efektywnie wykorzystać mniejszą przestrzeń
4. **Układy** - zmiana układów z wielokolumnowych na jednokolumnowe
5. **Przyciski** - zwiększenie rozmiaru przycisków dla łatwiejszej interakcji dotykowej

### Testowanie responsywności

Aby przetestować, jak strona zachowuje się na różnych urządzeniach:

1. **Narzędzia deweloperskie przeglądarki** - używaj trybu responsywnego (F12 > ikona urządzenia mobilnego)
2. **Emulacja urządzeń** - testuj na predefiniowanych rozmiarach popularnych urządzeń
3. **Rzeczywiste urządzenia** - testuj na prawdziwych telefonach i tabletach, jeśli to możliwe
4. **Zmiana rozmiaru okna** - zwykłe zmienianie rozmiaru okna przeglądarki

### Dobre praktyki

- Używaj `box-sizing: border-box;` dla przewidywalnego zachowania elementów
- Stosuj `flex` i `grid` do tworzenia elastycznych układów
- Stosuj podejście "mobile-first" - najpierw projektuj dla małych ekranów, potem dodawaj style dla większych
- Używaj jednostek względnych (rem, em, %) zamiast bezwzględnych (px)
- Testuj na różnych urządzeniach i przeglądarkach

## Fonty i ikony

### System fontów

Projekt korzysta z Google Fonts jako źródła czcionek. Główna czcionka to Poppins, która jest zaimportowana w `globals.css`.

#### Wagi czcionek

Projekt korzysta z kilku wag czcionki Poppins:
- **300 (Light)** - dla tekstu o mniejszym znaczeniu
- **400 (Regular)** - dla standardowego tekstu
- **500 (Medium)** - dla elementów, które powinny być nieco wyróżnione
- **600 (SemiBold)** - dla podtytułów i ważniejszych elementów
- **700 (Bold)** - dla nagłówków i elementów o dużym znaczeniu

#### Zmiana czcionki

Aby zmienić czcionkę w całym projekcie:

1. Wybierz nową czcionkę na Google Fonts
2. Wygeneruj kod importu
3. Zamień import w `globals.css`
4. Zmień rodzinę czcionek w selektorze `body`

#### Hierarchia typograficzna

Projekt używa jasnej hierarchii typograficznej:
- `h1` - główne nagłówki stron (3rem)
- `h2` - nagłówki sekcji (2.5rem)
- `h3` - mniejsze nagłówki i tytuły kart (1.5rem)
- Tekst podstawowy (1rem)
- Tekst drugorzędny (0.9rem)

### System ikon

Projekt wykorzystuje bibliotekę Font Awesome do ikon. Ikony są importowane i używane w komponentach za pomocą komponentu `FontAwesomeIcon`.

#### Rodzaje ikon

Font Awesome udostępnia różne pakiety ikon:
- `@fortawesome/free-solid-svg-icons` - ikony solid (pełne)
- `@fortawesome/free-regular-svg-icons` - ikony regular (konturowe)
- `@fortawesome/free-brands-svg-icons` - ikony marek i mediów społecznościowych

#### Używanie ikon

Aby użyć ikony:
1. Zaimportuj `FontAwesomeIcon` z `@fortawesome/react-fontawesome`
2. Zaimportuj konkretne ikony z odpowiedniego pakietu
3. Użyj komponentu `FontAwesomeIcon` z props'em `icon`

#### Dostosowywanie ikon

Ikony Font Awesome można dostosowywać na różne sposoby:
- Zmiana rozmiaru: props `size` (np. "xs", "sm", "lg", "2x", "3x")
- Zmiana koloru: props `style={{ color: "var(--primary)" }}`
- Animacje: props `spin`, `pulse`
- Transformacje: props `flip`, `rotation`

#### Inne źródła ikon

Alternatywnie można używać innych bibliotek ikon:
- Material Icons
- Heroicons
- Bootstrap Icons
- Feather Icons

## Animacje

### Rodzaje animacji w projekcie

Projekt S.K.Y. Bank wykorzystuje różne rodzaje animacji dla poprawy doświadczenia użytkownika:

1. **Animacje przejścia (transitions)** - płynne zmiany właściwości CSS
2. **Animacje keyframe** - bardziej złożone animacje definiowane klatka po klatce
3. **Animacje interakcji** - reagują na akcje użytkownika (hover, focus, active)

### Predefiniowane animacje

W pliku `globals.css` zdefiniowane są gotowe animacje:

1. **fadeIn** - efekt pojawiania się elementu
2. **slideUp** - efekt wjeżdżania elementu z dołu
3. **pulse** - efekt pulsowania elementu

### Tworzenie własnych animacji

Aby stworzyć własną animację:

1. Zdefiniuj animację keyframe
2. Utwórz klasę korzystającą z tej animacji
3. Zastosuj klasę do elementu

### Właściwości animacji

- **animation-name** - nazwa animacji keyframe
- **animation-duration** - czas trwania animacji
- **animation-timing-function** - funkcja przejścia (ease, linear, ease-in, ease-out, cubic-bezier)
- **animation-delay** - opóźnienie przed rozpoczęciem animacji
- **animation-iteration-count** - liczba powtórzeń (liczba lub infinite)
- **animation-direction** - kierunek animacji (normal, reverse, alternate)
- **animation-fill-mode** - zachowanie przed i po animacji (none, forwards, backwards, both)

### Najlepsze praktyki animacji

1. **Wydajność** - animuj tylko właściwości, które nie powodują ponownego renderowania strony (transform, opacity)
2. **Subtelność** - animacje powinny być subtelne i nie rozpraszać użytkownika
3. **Cel** - każda animacja powinna mieć cel (np. zwrócenie uwagi, wskazanie zmiany stanu)
4. **Czas trwania** - krótkie animacje (0.1-0.5s) dla małych elementów, dłuższe (0.5-1s) dla większych
5. **Dostępność** - pamiętaj o użytkownikach, którzy mogą preferować zredukowane animacje (`prefers-reduced-motion`)

## Porady i rozwiązywanie problemów

### Najczęstsze problemy i ich rozwiązania

#### 1. Problem: Style CSS nie są aplikowane
**Rozwiązanie:**
- Sprawdź, czy prawidłowo importujesz plik CSS modułowy
- Upewnij się, że używasz poprawnie składni `className={styles.mojaKlasa}`
- Sprawdź, czy nie ma konfliktu nazw klas
- Otwórz narzędzia deweloperskie (F12) i zbadaj element

#### 2. Problem: Komponent nie renderuje się
**Rozwiązanie:**
- Sprawdź, czy komponent jest prawidłowo zaimportowany
- Upewnij się, że nazwa komponentu zaczyna się od wielkiej litery
- Sprawdź, czy wszystkie wymagane propsy są przekazane
- Zobacz konsolę deweloperską, czy nie ma błędów

#### 3. Problem: React Router - strony nie działają po odświeżeniu
**Rozwiązanie:**
- W środowisku deweloperskim: użyj HashRouter zamiast BrowserRouter
- W środowisku produkcyjnym: skonfiguruj serwer, aby zawsze serwował index.html
- Sprawdź, czy wszystkie ścieżki są poprawnie zdefiniowane w Route

#### 4. Problem: Problemy z responsywnością
**Rozwiązanie:**
- Dodaj meta tag viewport
- Testuj na różnych urządzeniach lub używaj narzędzi deweloperskich do emulacji
- Upewnij się, że używasz media queries w prawidłowej kolejności
- Używaj jednostek względnych (rem, %, vh/vw) zamiast bezwzględnych (px)

#### 5. Problem: Zdjęcia/ikony nie wyświetlają się
**Rozwiązanie:**
- Sprawdź ścieżki do plików
- W React, importuj obrazy bezpośrednio
- Upewnij się, że pliki są faktycznie w odpowiednim miejscu
- Sprawdź, czy format pliku jest obsługiwany przez przeglądarkę

### Dobre praktyki w projekcie React

#### 1. Organizacja komponentów
- Grupuj komponenty według funkcjonalności lub typu
- Twórz małe, reużywalne komponenty z jednym celem
- Wykorzystuj kompozycję komponentów zamiast tworzenia skomplikowanych, monolitycznych komponentów

#### 2. Zarządzanie stanem
- Przechowuj stan jak najbliżej komponentu, który go używa
- Używaj Context API dla stanu globalnego
- Nie duplikuj stanu między komponentami
- Rozważ użycie useReducer dla skomplikowanej logiki stanu

#### 3. Wydajność
- Używaj React.memo dla komponentów funkcyjnych, które często się renderują
- Używaj useCallback dla funkcji przekazywanych w dół do komponentów potomnych
- Używaj useMemo dla kosztownych obliczeń
- Unikaj renderowania warunkowego całych komponentów, jeśli to możliwe
- Używaj lazy loading dla dużych komponentów, które nie są potrzebne od razu

#### 4. Stylowanie
- Preferuj CSS modułowy nad globalnymi stylami
- Używaj zmiennych CSS do definiowania kolorów, czcionek itp.
- Grupuj style według komponentów
- Utrzymuj spójny system stylów w całej aplikacji

#### 5. Debugowanie
- Używaj React Developer Tools
- Korzystaj z konsoli do logowania stanu i propów
- Ustawiaj breakpointy w narzędziach deweloperskich
- Używaj Error Boundaries do łapania błędów

## Checklist dla nowych stron

Przed dodaniem nowej strony do projektu S.K.Y. Bank, upewnij się, że wszystkie poniższe punkty zostały zrealizowane:

### 1. Podstawowe pliki i struktura
- [ ] Utworzony plik komponentu strony w katalogu `src/pages`
- [ ] Utworzony plik stylów CSS modułowych w katalogu `src/styles`
- [ ] Zaimportowane wymagane zależności (React, komponenty, style, ikony)
- [ ] Zdefiniowana podstawowa struktura komponentu (funkcja, eksport)

### 2. Konfiguracja routingu
- [ ] Dodany import nowej strony w `App.js`
- [ ] Dodana nowa trasa w komponencie `Routes`
- [ ] Dodane linki do nowej strony:
  - [ ] W menu głównym (`Header.js`)
  - [ ] W menu bocznym (`Sidebar.js`)
  - [ ] W innych miejscach, jeśli potrzebne

### 3. Struktura strony
- [ ] Komponent `Header` z odpowiednimi propsami
- [ ] Komponent `Sidebar` z odpowiednimi propsami
- [ ] Sekcja hero z tytułem i opisem
- [ ] Odpowiednie sekcje treści
- [ ] Stopka (footer)

### 4. Stany i hooki
- [ ] Stan dla otwierania/zamykania menu bocznego
- [ ] Wykorzystanie kontekstu motywu
- [ ] Inne stany specyficzne dla strony (formularze, dane, filtry itp.)

### 5. Style i responsywność
- [ ] Zdefiniowane podstawowe style dla strony i jej sekcji
- [ ] Odpowiednie wykorzystanie zmiennych CSS
- [ ] Dodane media queries dla responsywności
- [ ] Zweryfikowane działanie na różnych rozmiarach ekranu

### 6. Testy i poprawki
- [ ] Sprawdzone, czy wszystkie linki działają poprawnie
- [ ] Zweryfikowane, czy tryb ciemny działa poprawnie
- [ ] Sprawdzone, czy nie ma błędów w konsoli
- [ ] Przetestowane na różnych urządzeniach i przeglądarkach
- [ ] Sprawdzona dostępność (kontrast, struktura nagłówków, alternatywne teksty dla obrazów)

### 7. Treść
- [ ] Dodana treść strony (teksty, obrazy, przyciski)
- [ ] Sprawdzona poprawność językowa i ortograficzna
- [ ] Zoptymalizowane obrazy (rozmiar, format)
- [ ] Dodane ikony i grafiki