'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './StatsCounter.module.css';

interface StatProps {
    endValue: number;
    suffix?: string;
    label: string;
    duration?: number;
}

function Stat({ endValue, suffix = '', label, duration = 2000 }: StatProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const statRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (statRef.current) {
            observer.observe(statRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out function
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(easeOutQuart * endValue));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, endValue, duration]);

    return (
        <div className={styles.statItem} ref={statRef}>
            <div className={styles.statValue}>
                {count.toLocaleString()}{suffix}
            </div>
            <div className={styles.statLabel}>{label}</div>
        </div>
    );
}

export default function StatsCounter() {
    return (
        <section className={styles.sectionStats}>
            <div className="container">
                <div className={styles.statsGrid}>
                    <Stat endValue={5000} suffix="+" label="Treatments Performed" />
                    <Stat endValue={98} suffix="%" label="Patient Satisfaction" />
                    <Stat endValue={15} suffix="+" label="Years Combined Experience" />
                </div>
            </div>
        </section>
    );
}
