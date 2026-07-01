'use client'

import styles from './Stories.module.css';
import {useState} from "react";

const images = [
    {id: 1, src: '/img/stories-1.jpg', alt: 'Image 1'},
    {id: 2, src: '/img/stories-2.jpg', alt: 'Image 2'},
    {id: 3, src: '/img/stories-3.jpg', alt: 'Image 3'},
    {id: 4, src: '/img/stories-4.jpg', alt: 'Image 4'},
];

export default function Stories() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <div className={styles.gallery}>
            {images.map((image, index) => (
                <div
                    key={image.id}
                    className={`${styles.slide} ${activeIndex === index ? styles.active : ''}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    // onMouseLeave={() => setActiveIndex(null)}
                >
                    <img src={image.src} alt={image.alt}/>
                </div>
            ))}
        </div>
    );
}