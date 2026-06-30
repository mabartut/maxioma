import Image from 'next/image';
import Link from 'next/link';
import styles from './Logo.module.css';

export const Logo = () => {
    return (
        <Link href="/" className={styles.logoLink}>
            <div className={styles.logoContainer}>
                <Image
                    src="/img/logo.svg"
                    alt="MAXIOMA"
                    fill
                    priority
                    className={styles.logoImage}
                    sizes="(max-width: 768px) 176px, 280px"
                />
            </div>
        </Link>
    );
};

