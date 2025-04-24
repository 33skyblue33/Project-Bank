import React, { useEffect } from "react"; // Importowanie Reacta i hooka useEffect
import { Link } from "react-router-dom"; // Importowanie komponentu Link do nawigacji między stronami
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importowanie komponentu do ikon
import {
  faTimes,
  faHome,
  faCreditCard,
  faMoneyBillWave,
  faPiggyBank,
  faHeadset,
  faInfoCircle,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons"; // Importowanie ikon z FontAwesome
import styles from "../styles/Sidebar.module.css"; // Importowanie stylów CSS modułowych
import { useTheme } from "../context/ThemeContext"; // Importowanie kontekstu do obsługi motywu (ciemny/jasny)

export const Sidebar = ({ isOpen, onClose }) => {
  // Komponent Sidebar przyjmuje dwa propsy: isOpen (czy sidebar jest otwarty) i onClose (funkcja zamykająca sidebar)
  const { darkMode } = useTheme(); // Pobieranie informacji o trybie ciemnym z kontekstu

  // Hook useEffect do wyłączania przewijania strony, gdy sidebar jest otwarty
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Wyłączenie przewijania
    } else {
      document.body.style.overflow = ""; // Przywrócenie przewijania
    }

    // Funkcja czyszcząca, która przywraca przewijanie po zamknięciu sidebaru
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]); // Hook uruchamia się, gdy zmienia się wartość isOpen

  // Hook useEffect do zamykania sidebaru po naciśnięciu klawisza ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) { // Sprawdzenie, czy naciśnięto klawisz ESC (kod 27)
        onClose(); // Wywołanie funkcji zamykającej sidebar
      }
    };

    window.addEventListener("keydown", handleEsc); // Dodanie nasłuchiwania na zdarzenie naciśnięcia klawisza

    return () => {
      window.removeEventListener("keydown", handleEsc); // Usunięcie nasłuchiwania przy odmontowaniu komponentu
    };
  }, [onClose]); // Hook uruchamia się, gdy zmienia się funkcja onClose

  return (
    <>
      {/* Nakładka tła, która zamyka sidebar po kliknięciu */}
      <div
        className={`${styles.sidebarOverlay} ${isOpen ? styles.open : ""}`} // Dodanie odpowiednich klas CSS w zależności od stanu isOpen
        onClick={onClose} // Wywołanie funkcji zamykającej po kliknięciu
        aria-hidden="true" // Atrybut ARIA informujący, że element jest ukryty dla czytników ekranu
      />

      {/* Główna sekcja sidebaru */}
      <aside
        className={`${styles.sidebar} ${isOpen ? styles.open : ""} ${
          darkMode ? "dark-theme" : "" // Dodanie klasy dla trybu ciemnego, jeśli darkMode jest true
        }`}
      >
        {/* Nagłówek sidebaru */}
        <div className={styles.sidebarHeader}>
          <h3>Menu</h3> {/* Tytuł menu */}
          <button
            className={styles.closeButton} // Styl przycisku zamykającego
            onClick={onClose} // Wywołanie funkcji zamykającej po kliknięciu
            aria-label="Zamknij menu" // Atrybut ARIA dla czytników ekranu
          >
            <FontAwesomeIcon icon={faTimes} /> {/* Ikona zamykania */}
          </button>
        </div>

        {/* Nawigacja w sidebarze */}
        <nav className={styles.sidebarNav}>
          <ul>
            {/* Każdy element listy to link do innej strony */}
            <li>
              <Link to="/" onClick={onClose}> {/* Link do strony głównej */}
                <FontAwesomeIcon icon={faHome} /> {/* Ikona strony głównej */}
                <span>Strona główna</span> {/* Tekst linku */}
              </Link>
            </li>
            <li>
              <Link to="/konta" onClick={onClose}> {/* Link do strony kont osobistych */}
                <FontAwesomeIcon icon={faCreditCard} /> {/* Ikona kont */}
                <span>Konta osobiste</span>
              </Link>
            </li>
            <li>
              <Link to="/kredyty" onClick={onClose}> {/* Link do strony kredytów */}
                <FontAwesomeIcon icon={faMoneyBillWave} /> {/* Ikona kredytów */}
                <span>Kredyty</span>
              </Link>
            </li>
            <li>
              <Link to="/lokaty" onClick={onClose}> {/* Link do strony lokat */}
                <FontAwesomeIcon icon={faPiggyBank} /> {/* Ikona lokat */}
                <span>Lokaty</span>
              </Link>
            </li>
            <li>
              <Link to="/kontakt" onClick={onClose}> {/* Link do strony kontaktu */}
                <FontAwesomeIcon icon={faHeadset} /> {/* Ikona kontaktu */}
                <span>Kontakt</span>
              </Link>
            </li>
            <li>
              <Link to="/o-nas" onClick={onClose}> {/* Link do strony "O nas" */}
                <FontAwesomeIcon icon={faInfoCircle} /> {/* Ikona informacji */}
                <span>O nas</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Stopka sidebaru */}
        <div className={styles.sidebarFooter}>
          <p>
            <FontAwesomeIcon icon={faPhoneVolume} /> {/* Ikona telefonu */}
            <span>Infolinia: +48 790 855 033</span> {/* Numer infolinii */}
          </p>
        </div>
      </aside>
    </>
  );
};
