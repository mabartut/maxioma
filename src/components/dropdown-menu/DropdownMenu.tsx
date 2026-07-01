'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './DropdownMenu.module.css';

type DropdownItem = {
    href: string;
    label: string;
};

type DropdownMenuProps = {
    label: string;
    items: DropdownItem[];
};

export const DropdownMenu = (props: DropdownMenuProps) => {
    const { label, items } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={styles.dropdown}>
            <button
                className={styles.dropdownButton}
                onClick={toggleMenu}
                aria-expanded={isOpen}
            >
                {label}
                <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
                <ul className={styles.dropdownMenu}>
                    {items.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={styles.dropdownItem}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};