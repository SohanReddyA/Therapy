import Head from 'next/head';
import styles from "styles/Header.module.css";

export default function Header() {

    return (
        <div className={styles.font}>
            <div className={styles.logo}>Logo</div>
            <div className={styles.right}>
                <div>Therapists</div>
                <div>Test</div>
                <div className={styles.signup}>SignUP</div>
            </div>
            
        </div>
        
    );
}
