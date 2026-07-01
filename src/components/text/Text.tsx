// components/ui/TextWithGradient/TextWithGradient.tsx
import React from 'react';
import styles from './Text.module.css';

type TextVariant = 'default' | 'card';

type TextProps ={
    variant?: TextVariant;
    children: React.ReactNode;
    className?: string;
}

export const Text = (props: TextProps) => {
    const { variant = 'default', children, className = '' } = props;

    return (
        <p className={`${styles[variant]} ${className}`}>
            {children}
        </p>
    );
};