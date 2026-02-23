'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc: string;
    categoryLink: string;
    bookingLink: string;
    delay?: number;
}

export default function ServiceCard({
    title,
    description,
    imageSrc,
    categoryLink,
    bookingLink,
    delay = 0,
}: ServiceCardProps) {
    const { isVisible, domRef } = useScrollReveal();

    return (
        <div
            ref={domRef}
            className={`${styles.cardWrapper} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className={styles.image}
                        priority={false}
                    />
                    <div className={styles.overlay}></div>
                </div>

                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>

                    <div className={styles.actions}>
                        <Link href={categoryLink} className={styles.link}>
                            Learn More
                        </Link>
                        <Link href={bookingLink} className={styles.bookLink}>
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
