import React from 'react';
import styles from './ButtonText.module.css';

type ButtonTextVariant = 'small' | 'large';

type ButtonTextProps= {
    variant?: ButtonTextVariant;
    children: React.ReactNode;
    className?: string;
}

export const ButtonText = (props: ButtonTextProps) => {
    const { variant = 'small', children, className = '' } = props;

    return (
        <span className={`${styles[variant]} ${className}`}>
      {children}
    </span>
    );
};