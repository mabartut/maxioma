import styles from './Header.module.css';
import {Logo} from "@/components/logo/Logo";

const Header = () => {
    const navItems = ['Экосистема', 'Продукты', 'О компании', 'Карьера', 'Решения', 'Контакты'];

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo/>
                {/* Навигация */}
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {navItems.map((item) => (
                            <li key={item} className={styles.navItem}>
                                <a href={`#${item.toLowerCase()}`} className={styles.navLink}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Кнопка */}
                <button className={styles.consultationBtn}>
                    Получить консультацию
                </button>
            </div>
        </header>
    );
};

export default Header;