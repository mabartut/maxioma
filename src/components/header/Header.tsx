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
                <Logo variant={'header'}/>

                <Link href="/ecosystem">ecosystem</Link>

                <DropdownMenu label={'qwe'}>
                    <li>
                        <Link href="/ecosystem">ecosystem</Link>
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