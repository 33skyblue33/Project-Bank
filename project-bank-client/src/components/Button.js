// Importujemy React, który jest niezbędny do tworzenia komponentów w React.
import React from "react";

// Importujemy style z pliku CSS, które będą używane do stylizacji przycisku.
import styles from "../styles/Button.module.css";

// Tworzymy komponent Button jako funkcję. Komponent przyjmuje różne właściwości (props),
// które pozwalają na dostosowanie jego wyglądu i działania.
export const Button = ({
  children, // Zawartość przycisku (np. tekst lub inne elementy).
  primary = false, // Czy przycisk ma być w stylu "primary" (domyślnie false).
  small = false, // Czy przycisk ma być mały (domyślnie false).
  large = false, // Czy przycisk ma być duży (domyślnie false).
  fullWidth = false, // Czy przycisk ma zajmować pełną szerokość (domyślnie false).
  onClick, // Funkcja, która zostanie wywołana po kliknięciu przycisku.
  ...props // Pozostałe właściwości, które można przekazać do elementu <button>.
}) => {
  return (
    // Tworzymy element HTML <button> z dynamicznie przypisanymi klasami CSS.
    <button
      className={`
        ${styles.button} // Podstawowa klasa CSS dla przycisku.
        ${primary ? styles.primary : styles.secondary} // Klasa "primary" lub "secondary" w zależności od wartości propsa "primary".
        ${small ? styles.small : ""} // Dodajemy klasę "small", jeśli props "small" jest true.
        ${large ? styles.large : ""} // Dodajemy klasę "large", jeśli props "large" jest true.
        ${fullWidth ? styles.fullWidth : ""} // Dodajemy klasę "fullWidth", jeśli props "fullWidth" jest true.
      `}
      onClick={onClick} // Przypisujemy funkcję obsługującą kliknięcie.
      {...props} // Przekazujemy pozostałe właściwości do elementu <button>.
    >
      {children} {/* Wyświetlamy zawartość przycisku (np. tekst lub inne elementy). */}
    </button>
  );
};
