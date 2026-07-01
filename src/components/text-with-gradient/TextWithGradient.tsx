import React from 'react';
import styles from './TextWithGradient.module.css';

type Variant = 'green' | 'blue';

type TextWithGradientProps = {
    variant?: Variant;
    children: React.ReactNode;
    className?: string;
}

export const TextWithGradient = (props: TextWithGradientProps) => {
    const {variant = 'green', children, className = ''} = props;

    return (
        <span className={`${styles.text} ${styles[variant]} ${className}`}>
            {children}
        </span>
    );
};