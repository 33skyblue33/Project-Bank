import {React, forwardRef} from "react";
import {Link} from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';

export const Sidebar = forwardRef(({}, ref) => {
    return(
        <aside ref={ref} className={styles.sidebar}>
            <Link to="/">Home</Link>
        </aside>
    );
});