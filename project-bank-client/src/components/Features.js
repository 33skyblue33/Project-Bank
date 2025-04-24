// Importowanie biblioteki React, aby móc korzystać z JSX i tworzyć komponenty
import React from "react";

// Importowanie komponentu FontAwesomeIcon do wyświetlania ikon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importowanie konkretnych ikon z zestawu ikon FontAwesome (solid)
import {
  faMobileAlt, // Ikona telefonu komórkowego
  faShieldAlt, // Ikona tarczy (bezpieczeństwo)
  faUserClock, // Ikona zegara (oszczędność czasu)
} from "@fortawesome/free-solid-svg-icons";

// Importowanie modułu CSS do stylizowania komponentu
import styles from "../styles/Features.module.css";

// Definiowanie funkcjonalnego komponentu React o nazwie Features
export const Features = () => {
  // Tablica obiektów reprezentujących cechy (features), każda z ikoną, tytułem i opisem
  const features = [
    {
      icon: faMobileAlt, // Ikona reprezentująca dostępność mobilną
      title: "W pełni zdalny", // Tytuł cechy
      description:
        "Zarządzaj swoimi finansami z dowolnego miejsca na świecie za pomocą intuicyjnej aplikacji", // Opis cechy
    },
    {
      icon: faShieldAlt, // Ikona reprezentująca bezpieczeństwo
      title: "Bezpieczny", // Tytuł cechy
      description:
        "Zaawansowane systemy zabezpieczeń chroniące Twoje pieniądze i dane osobowe", // Opis cechy
    },
    {
      icon: faUserClock, // Ikona reprezentująca oszczędność czasu
      title: "Oszczędność czasu", // Tytuł cechy
      description:
        "Wszystkie operacje bankowe wykonasz w kilka sekund bez wychodzenia z domu", // Opis cechy
    },
  ];

  // Zwracanie JSX, który renderuje komponent
  return (
    // Główny kontener w formie siatki (grid), stylizowany za pomocą modułu CSS
    <div className={styles.featuresGrid}>
      {/* Iteracja po tablicy features i dynamiczne tworzenie kart dla każdej cechy */}
      {features.map((feature, index) => (
        // Każda karta cechy to div z unikalnym kluczem (key) opartym na indeksie
        <div key={index} className={styles.featureCard}>
          {/* Sekcja ikony w karcie cechy */}
          <div className={styles.featureIcon}>
            <FontAwesomeIcon icon={feature.icon} /> {/* Renderowanie ikony */}
          </div>
          {/* Tytuł cechy */}
          <h3>{feature.title}</h3>
          {/* Opis cechy */}
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};
