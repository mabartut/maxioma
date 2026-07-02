import styles from './Header.module.css';
import {Logo} from "@/components/logo/Logo";
import {Button} from "@/components/button/Button";
import {DropdownMenu} from "@/components/dropdown-menu/DropdownMenu";
import Link from "next/link";

const Header = () => {
    const navItems = ['Экосистема', 'Продукты', 'О компании', 'Карьера', 'Решения', 'Контакты'];

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo/>
                {/* Навигация */}
                <DropdownMenu label={'qwe'}>
                    <li>
                        <Link href="/123">123</Link>
                    </li>
                    <li>
                        <Link href="/456">456</Link>
                    </li>
                    <li>
                        <Link href="/789">789</Link>
                    </li>
                </DropdownMenu>
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

                <Button variant={'1'}>
                    Получить консультацию
                </Button>
            </div>
        </header>
    );
};

export default Header;