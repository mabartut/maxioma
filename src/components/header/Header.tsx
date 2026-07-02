import styles from './Header.module.css';
import {Logo} from "@/components/logo/Logo";
import {Button} from "@/components/button/Button";
import {DropdownMenu} from "@/components/dropdown-menu/DropdownMenu";
import Link from "next/link";
import {Navigation} from "@/components/header/navigation/Navigation";

const Header = () => {
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
                <Navigation/>

                <Button variant={'1'}>
                    Получить консультацию
                </Button>
            </div>
        </header>
    );
};

export default Header;