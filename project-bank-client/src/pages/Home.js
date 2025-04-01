import {React, useRef} from "react";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import friends from "./friends.png"; 

export function Home(){
    const sidebarRef = useRef(null);
    const navigate  = useNavigate();    

    const handleToggleSidebar = () => {
        const sidebar = sidebarRef.current;
        sidebar.style.left = sidebar.style.left == "0vw" ? "-25vw" : "0vw";
    };

    const handleRedirectHome = () => {
        navigate("/");
    };

    return(
        <main>
            <header className={styles.header}>
                <h2 className><FontAwesomeIcon className={styles.hamburger} icon={faBars} onClick={handleToggleSidebar}/></h2>
                <h1 className={styles.logo} onClick={handleRedirectHome}>S.K.Y.</h1>
              
            </header>

            <Sidebar  ref={sidebarRef}/>

            <section className={styles.content}>
                <p className={styles.text}>S.K.Y to pierwszy w Polsce bank sterowany całkowicie zdalnie. Ma umożliwić wygodę każdemu użytkownikowi oraz zaoszczędzić cenny czas. Dzięki intuicyjnej rozbudowie aplikacji i zabezpieczonemu systemowi, bank wkroczy na nowy poziom technologii. Każdy klient po zalogowaniu ma możliwość korzystania z wielu unikalnych opcji, takich jak: bezgotówkowe płatności 10% lokaty, kredyty 0%, kredyty hipoteczne w indywidualnych stopach kredytowych. To nie wszystkie plusy aplikacji, a tylko wprowadzenie. Użytkownik będzie mógł załatwić każdą ważną sprawę poprzez czat w aplikacji lub porozmawiać z konsultantem o każdej porze dnia. S.K.Y to niepowtarzalny bank, każdy klient ma  się czuć wyjątkowo. </p>
                <img src={friends} alt="Opis mojego zdjęcia" style={{ width: "50vw", height: "auto" }} />
            </section>

            <footer className={styles.footer}>
                Infolinia obslugi klienta czynna 24/h/7 - +48 790 855 033
            </footer>
        </main>   
    );
}