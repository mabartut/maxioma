// components/ui/Button/Button.tsx
import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
};

export const Button = (props: ButtonProps) => {
    const { children, onClick, disabled = false, className = '' } = props;

    return (
        <button
            className={`${styles.button} ${disabled ? styles.disabled : ''} ${className}`}
    onClick={onClick}
    disabled={disabled}
        >
        {children}
        </button>
);
};