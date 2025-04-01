import React, { createContext, useState, useContext, useEffect } from "react";

// Tworzymy kontekst dla motywu aplikacji
const ThemeContext = createContext();

// Hook ułatwiający dostęp do kontekstu motywu
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Funkcja sprawdzająca, czy użytkownik wcześniej ustawił preferencje motywu
  const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      // Pobieramy zapisane preferencje z localStorage
      const storedPrefs = window.localStorage.getItem("color-theme");
      if (typeof storedPrefs === "string") {
        // Jeśli preferencje są zapisane, zwracamy ich wartość jako boolean
        return storedPrefs === "true";
      }

      // Jeśli użytkownik ustawił preferowany motyw w przeglądarce
      const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
      if (userMedia.matches) {
        return true; // Preferowany motyw to ciemny
      }
    }

    // Domyślnie ustawiamy motyw jasny
    return false;
  };

  // Stan przechowujący informację o aktualnym motywie (ciemny/jasny)
  const [darkMode, setDarkMode] = useState(getInitialTheme());
  // Stan przechowujący informację o tym, czy trwa animacja zmiany motywu
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Funkcja zmieniająca motyw
  const toggleTheme = () => {
    setIsTransitioning(true); // Ustawiamy stan animacji na aktywny
    setDarkMode(!darkMode); // Przełączamy motyw na przeciwny

    // Po zakończeniu animacji resetujemy stan animacji
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Czas trwania animacji w milisekundach
  };

  // Efekt zapisujący preferencje motywu w localStorage
  useEffect(() => {
    localStorage.setItem("color-theme", darkMode.toString());
  }, [darkMode]);

  // Efekt stosujący odpowiednią klasę CSS do elementu <body> w zależności od motywu
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme"); // Dodajemy klasę dla ciemnego motywu
    } else {
      document.body.classList.remove("dark-theme"); // Usuwamy klasę dla ciemnego motywu
    }
  }, [darkMode]);

  // Efekt stosujący klasę CSS dla animacji zmiany motywu
  useEffect(() => {
    if (isTransitioning) {
      document.body.classList.add("theme-transitioning"); // Dodajemy klasę dla animacji
    } else {
      document.body.classList.remove("theme-transitioning"); // Usuwamy klasę po zakończeniu animacji
    }
  }, [isTransitioning]);

  // Udostępniamy wartości i funkcje w kontekście
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, isTransitioning }}>
      {children} {/* Renderujemy dzieci wewnątrz providera */}
    </ThemeContext.Provider>
  );
};
