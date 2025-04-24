import React, { useState, useEffect } from "react"; // Importowanie Reacta oraz hooków useState i useEffect
import { Link } from "react-router-dom"; // Importowanie komponentu Link do nawigacji między stronami
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importowanie komponentu do ikon
import {
  faBars,
  faMoon,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Importowanie ikon z biblioteki FontAwesome
import styles from "../styles/Header.module.css"; // Importowanie stylów CSS jako moduł
import { Button } from "./Button"; // Importowanie komponentu Button
import { useTheme } from "../context/ThemeContext"; // Importowanie kontekstu ThemeContext

// Komponent Header - nagłówek aplikacji
export function Header({ onToggleSidebar, onToggleTheme, darkMode }) {
  const [scrolled, setScrolled] = useState(false); // Stan do śledzenia, czy użytkownik przewinął stronę
  const { isTransitioning } = useTheme(); // Pobranie wartości z kontekstu ThemeContext

  // Hook useEffect - dodaje efekt przewijania do nagłówka
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY; // Pobranie aktualnej pozycji przewinięcia
      if (offset > 50) {
        setScrolled(true); // Ustawienie stanu na true, jeśli przewinięcie jest większe niż 50px
      } else {
        setScrolled(false); // Ustawienie stanu na false, jeśli przewinięcie jest mniejsze lub równe 50px
      }
    };

    window.addEventListener("scroll", handleScroll); // Dodanie nasłuchiwania na zdarzenie przewijania

    return () => {
      window.removeEventListener("scroll", handleScroll); // Usunięcie nasłuchiwania przy odmontowaniu komponentu
    };
  }, []); // Pusta tablica zależności oznacza, że efekt uruchomi się tylko raz po załadowaniu komponentu

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        isTransitioning ? styles.transitioning : ""
      }`} // Dynamiczne klasy CSS w zależności od stanu
    >
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          {/* Przycisk otwierający menu boczne */}
          <button
            className={styles.menuButton}
            onClick={onToggleSidebar} // Wywołanie funkcji przekazanej jako props
            aria-label="Menu" // Atrybut dostępności opisujący przycisk
          >
            <FontAwesomeIcon icon={faBars} /> {/* Ikona menu */}
          </button>

          {/* Logo aplikacji */}
          <Link to="/" className={styles.logo}>
            <span className={styles.logoText}>S.K.Y.</span>
          </Link>
        </div>

        {/* Nawigacja główna */}
        <nav className={styles.mainNav}>
          <ul>
            <li>
              <Link to="/">Strona główna</Link> {/* Link do strony głównej */}
            </li>
            <li>
              <Link to="/uslugi">Usługi</Link> {/* Link do strony usług */}
            </li>
            <li>
              <Link to="/o-nas">O nas</Link> {/* Link do strony "O nas" */}
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link> {/* Link do strony kontaktowej */}
            </li>
          </ul>
        </nav>

        <div className={styles.headerRight}>
          {/* Przycisk zmiany motywu */}
          <button
            className={styles.themeToggle}
            onClick={onToggleTheme} // Wywołanie funkcji zmieniającej motyw
            aria-label={
              darkMode ? "Przełącz na jasny motyw" : "Przełącz na ciemny motyw"
            } // Atrybut dostępności opisujący przycisk
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} /> {/* Ikona zmiany motywu */}
          </button>

          {/* Przyciski logowania i rejestracji */}
          <div className={styles.authButtons}>
            <Button small>Logowanie</Button> {/* Przycisk logowania */}
            <Button primary small>
              <FontAwesomeIcon icon={faUser} /> {/* Ikona użytkownika */}
              <span>Rejestracja</span> {/* Tekst przycisku rejestracji */}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
