'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Activity, BatteryCharging, Dumbbell, Crown } from 'lucide-react';
import styles from './HeroNav.module.css';

const ITEMS = [
    { href: '/services/advanced-aesthetics', icon: Sparkles, text: 'ADVANCED\nAESTHETICS' },
    { href: '/services/longevity-metabolic-wellness', icon: Activity, text: 'LONGEVITY &\nMETABOLIC' },
    { href: '/services/recovery-performance', icon: BatteryCharging, text: 'RECOVERY &\nPERFORMANCE' },
    { href: '/services/body-contouring', icon: Dumbbell, text: 'BODY\nCONTOURING' },
    { href: '/membership', icon: Crown, text: 'ADARE\nMEMBERSHIPS' }
];

export default function HeroNav() {
    const navRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const [lineStyle, setLineStyle] = useState({ left: '0px', width: '20%', opacity: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const updateLinePosition = (item: HTMLElement | Element) => {
        const lineTrack = lineRef.current?.parentElement;
        if (!lineTrack || !item) return;

        const itemRect = item.getBoundingClientRect();
        const trackRect = lineTrack.getBoundingClientRect();

        const left = itemRect.left - trackRect.left;
        const width = itemRect.width;

        setLineStyle({
            left: `${left}px`,
            width: `${width}px`,
            opacity: 1
        });
    };

    const handleScroll = () => {
        if (!isMobile || !navRef.current || !lineRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (maxScroll <= 0) {
            setLineStyle({ left: '0%', width: '100%', opacity: 1 });
            return;
        }

        const scrollRatio = scrollLeft / maxScroll;
        const thumbWidthPercent = (clientWidth / scrollWidth) * 100;
        const maxLeftPercent = 100 - thumbWidthPercent;
        const leftPercent = scrollRatio * maxLeftPercent;

        setLineStyle({
            left: `${leftPercent}%`,
            width: `${thumbWidthPercent}%`,
            opacity: 1
        });
    };

    useEffect(() => {
        if (isMobile) {
            handleScroll();
        } else if (!isHovering && navRef.current) {
            const firstItem = navRef.current.children[0];
            if (firstItem) {
                // Wait a tick for layout to settle on initial render
                setTimeout(() => updateLinePosition(firstItem), 50);
            }
        }
    }, [isMobile, isHovering]);

    const handleItemEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isMobile) return;
        setIsHovering(true);
        updateLinePosition(e.currentTarget);
    };

    const handleNavLeave = () => {
        if (isMobile) return;
        setIsHovering(false);
    };

    return (
        <div className={styles.heroNavContainer}>
            <div className={styles.heroNavLine}>
                <div
                    ref={lineRef}
                    className={styles.heroNavLineActive}
                    style={{
                        ...lineStyle,
                        transition: isMobile ? 'none' : 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease'
                    }}
                ></div>
            </div>
            <div
                className={styles.heroNav}
                ref={navRef}
                onScroll={handleScroll}
                onMouseLeave={handleNavLeave}
            >
                {ITEMS.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={idx}
                            href={item.href}
                            className={styles.heroNavItem}
                            onMouseEnter={handleItemEnter}
                        >
                            <Icon className={styles.heroNavIcon} strokeWidth={1} />
                            <span>
                                {item.text.split('\n').map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        {i === 0 && <br />}
                                    </span>
                                ))}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
