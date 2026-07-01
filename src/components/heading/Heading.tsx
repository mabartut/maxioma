// components/ui/Heading/ButtonText.tsx
import React from 'react';
import styles from './Heading.module.css';

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4';

type HeadingProps ={
    variant: HeadingVariant;
    children: React.ReactNode;
    className?: string;
}

export const Heading = (props: HeadingProps) => {
    const { variant, children, className = '' } = props;
    const Tag = variant;

    return (
        <Tag className={`${styles[variant]} ${className}`}>
            {children}
        </Tag>
    );
};