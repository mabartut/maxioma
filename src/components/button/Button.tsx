// components/ui/Button/Button.tsx
import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

export const Button = (props: ButtonProps) => {
    const { children, onClick, className = '' } = props;

    return (
        <button
            className={`${styles.button} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};