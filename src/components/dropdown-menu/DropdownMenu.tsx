'use client';

import React, {useState, useRef} from 'react';
import styles from './DropdownMenu.module.css';

type DropdownMenuProps = {
    label: string;
    children: React.ReactNode;
};

export const DropdownMenu = (props: DropdownMenuProps) => {
    const {label, children} = props;
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => setIsOpen(false);

    // Фокусируем кнопку при открытии
    React.useEffect(() => {
        if (isOpen && buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [isOpen]);

    const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
        // Проверяем, уходит ли фокус за пределы компонента
        if (!dropdownRef.current?.contains(event.relatedTarget as Node)) {
            closeMenu();
        }
    };

    return (
        <div
            className={styles.dropdown}
            ref={dropdownRef}
            onBlur={handleBlur}
        >
            <button
                ref={buttonRef}
                className={styles.dropdownButton}
                onClick={toggleMenu}
                aria-expanded={isOpen}
            >
                {label}
                <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
                <ul className={styles.dropdownMenu}>
                    {/*{React.Children.map(children, (child) => {*/}
                    {/*    if (React.isValidElement(child)) {*/}
                    {/*        return React.cloneElement(child);*/}
                    {/*    }*/}
                    {/*    return child;*/}
                    {/*})}*/}
                    {children}

                </ul>
            )}
        </div>
    );
};