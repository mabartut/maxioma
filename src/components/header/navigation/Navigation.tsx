
import Link from 'next/link';
import styles from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={styles.nav} >
            <ul>
                <li><Link href="/ecosystem">Экосистема</Link></li>
                <li><Link href="/products">Продукты</Link></li>
                <li><Link href="/about">О&nbsp;компании</Link></li>
                <li><Link href="/careers">Карьера</Link></li>
                <li><Link href="/solutions">Решения</Link></li>
                <li><Link href="/contacts">Контакты</Link></li>
            </ul>
        </nav>
    );
};