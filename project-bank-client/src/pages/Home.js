// Importujemy potrzebne biblioteki i komponenty
import { React, useState, useEffect } from "react"; // React oraz hooki useState i useEffect
import styles from "../styles/Home.module.css"; // Import stylów CSS jako moduł
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Ikony FontAwesome
import {
  faBars,
  faMoon,
  faSun,
  faPhoneVolume,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"; // Konkretne ikony z FontAwesome
import { Sidebar } from "../components/Sidebar"; // Komponent Sidebar
import { useTheme } from "../context/ThemeContext"; // Kontekst do obsługi motywu (ciemny/jasny)
import { Header } from "../components/Header"; // Komponent nagłówka
import { Features } from "../components/Features"; // Komponent sekcji funkcji
import { Button } from "../components/Button"; // Komponent przycisku
import friends from "./friends.png"; // Obrazek używany w sekcji hero

// Główny komponent strony Home
export function Home() {
  // Stan do zarządzania otwieraniem/zamykaniem paska bocznego
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Pobieramy wartości z kontekstu motywu
  const { darkMode, toggleTheme } = useTheme();

  // Hook useEffect do zmiany klasy body w zależności od motywu
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme"); // Dodajemy klasę dla ciemnego motywu
    } else {
      document.body.classList.remove("dark-theme"); // Usuwamy klasę dla jasnego motywu
    }
  }, [darkMode]); // Efekt uruchamia się, gdy zmienia się wartość darkMode

  // Funkcja do przełączania stanu paska bocznego
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    // Główna struktura strony
    <div className={`${styles.pageWrapper} ${darkMode ? styles.darkMode : ""}`}>
      {/* Nagłówek strony */}
      <Header
        onToggleSidebar={handleToggleSidebar} // Przekazujemy funkcję do otwierania/zamykania paska bocznego
        onToggleTheme={toggleTheme} // Przekazujemy funkcję do przełączania motywu
        darkMode={darkMode} // Przekazujemy aktualny stan motywu
      />

      {/* Pasek boczny */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Główna zawartość strony */}
      <main className={styles.main}>
        {/* Sekcja hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Witaj w cyfrowej bankowości <span>S.K.Y.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Pierwszy w Polsce bank sterowany całkowicie zdalnie
            </p>
            <div className={styles.heroButtons}>
              {/* Przycisk do założenia konta */}
              <Button primary>Załóż konto</Button>
              {/* Przycisk z ikoną do dowiedzenia się więcej */}
              <Button>
                Dowiedz się więcej <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </div>
          {/* Obrazek w sekcji hero */}
          <div className={styles.heroImage}>
            <img src={friends} alt="Klienci banku S.K.Y." />
          </div>
        </section>

        {/* Sekcja funkcji */}
        <section className={styles.features}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Dlaczego S.K.Y.?</h2>

            {/* Komponent Features */}
            <Features />

            <div className={styles.featuresText}>
              <p>
                S.K.Y to niepowtarzalny bank, gdzie każdy klient czuje się
                wyjątkowo. Nasza misja to oszczędzać Twój cenny czas,
                zapewniając jednocześnie najwyższy poziom bezpieczeństwa i
                innowacji.
              </p>
              <p>
                Dzięki intuicyjnej aplikacji i zabezpieczonemu systemowi,
                wkraczamy na nowy poziom technologii bankowej. Każdy klient po
                zalogowaniu ma dostęp do unikalnych opcji.
              </p>
            </div>
          </div>
        </section>

        {/* Sekcja usług */}
        <section className={styles.services}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Unikalne usługi</h2>

            <div className={styles.servicesGrid}>
              {/* Karty usług */}
              <div className={styles.serviceCard}>
                <h3>Bezgotówkowe płatności</h3>
                <p>Wygodne i szybkie płatności w każdym miejscu</p>
              </div>

              <div className={styles.serviceCard}>
                <h3>10% lokaty</h3>
                <p>Najwyższe oprocentowanie na rynku</p>
              </div>

              <div className={styles.serviceCard}>
                <h3>Kredyty 0%</h3>
                <p>Wybrane kredyty z zerowym oprocentowaniem</p>
              </div>

              <div className={styles.serviceCard}>
                <h3>Kredyty hipoteczne</h3>
                <p>Z indywidualnymi stopami kredytowymi</p>
              </div>

              <div className={styles.serviceCard}>
                <h3>Wsparcie 24/7</h3>
                <p>Konsultanci dostępni o każdej porze dnia i nocy</p>
              </div>

              <div className={styles.serviceCard}>
                <h3>Wirtualny asystent</h3>
                <p>Inteligentny pomocnik dla wszystkich operacji</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sekcja CTA (Call to Action) */}
        <section className={styles.cta}>
          <div className="container">
            <h2>Gotowy na bankowanie przyszłości?</h2>
            <p>
              Dołącz do S.K.Y. i przekonaj się, jak wygodna może być bankowość
            </p>
            <Button primary large>
              Otwórz konto już teraz
            </Button>
          </div>
        </section>
      </main>

      {/* Stopka strony */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            {/* Logo i hasło w stopce */}
            <div className={styles.footerLogo}>
              <h3>S.K.Y.</h3>
              <p>Przyszłość bankowości</p>
            </div>

            {/* Linki w stopce */}
            <div className={styles.footerLinks}>
              <div>
                <h4>O nas</h4>
                <ul>
                  <li>
                    <a href="#">Historia</a>
                  </li>
                  <li>
                    <a href="#">Misja</a>
                  </li>
                  <li>
                    <a href="#">Kariera</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4>Produkty</h4>
                <ul>
                  <li>
                    <a href="#">Konta osobiste</a>
                  </li>
                  <li>
                    <a href="#">Kredyty</a>
                  </li>
                  <li>
                    <a href="#">Lokaty</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4>Wsparcie</h4>
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Kontakt</a>
                  </li>
                  <li>
                    <a href="#">Bezpieczeństwo</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Kontakt w stopce */}
            <div className={styles.footerContact}>
              <div className={styles.contactItem}>
                <FontAwesomeIcon icon={faPhoneVolume} />
                <span>Infolinia 24/7: +48 790 855 033</span>
              </div>
            </div>
          </div>

          {/* Dolna część stopki */}
          <div className={styles.footerBottom}>
            <p>
              &copy; {new Date().getFullYear()} S.K.Y. Bank. Wszelkie prawa
              zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
