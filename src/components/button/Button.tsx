import React from 'react';
import styles from './Button.module.css';

type ButtonVariant =
    | '1'
    | '2'
    | '4'
    | '5'
    | '6'
    | '7'
    | '4_Blue'
    | '5_Blue';

type ButtonProps = {
    children: React.ReactNode;
    variant: ButtonVariant;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
};

export const Button = (props: ButtonProps) => {
    const {
        children,
        variant,
        onClick,
        disabled = false,
        className = '',
        type = 'button'
    } = props;

    return (
        <button
            type={type}
            className={`${styles.button} ${styles[`variant${variant}`]} ${disabled ? styles.disabled : ''} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};