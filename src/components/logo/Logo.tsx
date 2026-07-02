import Image from 'next/image';
import Link from 'next/link';
import styles from './Logo.module.css';

type LogoProps = {
    variant: 'header' | 'footer'
}

export const Logo = (props: LogoProps) => {
    const {variant} = props;

    return (
        <Link href="/" className={`${styles.logoLink} ${styles[variant]}`}>
            <Image
                src="/img/logo.svg"
                alt="MAXIOMA"
                fill
                priority
                className={styles.logoImage}
                sizes={variant === 'header'
                    ? '(max-width: 768px) 176px, 280px'
                    : '(max-width: 768px) 335px, 311px'
                }
            />
        </Link>
    );
};