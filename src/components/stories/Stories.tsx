'use client'

import styles from './Stories.module.css';
import {useState} from "react";

const images = [
    {id: 1, src: '/image1.jpg', alt: 'Image 1'},
    {id: 2, src: '/image2.jpg', alt: 'Image 2'},
    {id: 3, src: '/image3.jpg', alt: 'Image 3'},
    {id: 4, src: '/image4.jpg', alt: 'Image 4'},
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