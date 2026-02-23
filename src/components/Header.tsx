'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menus on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
                <div className={styles.navContainer}>
                    <Link href="/" className={styles.logo}>
                        ADARE
                    </Link>

                    <div className={styles.desktopMenu}>
                        <button
                            className={styles.menuItem}
                            onClick={() => setIsServicesOpen(true)}
                            aria-expanded={isServicesOpen}
                        >
                            Services
                        </button>
                        <Link href="/membership" className={styles.menuItem}>Membership</Link>
                        <Link href="/about" className={styles.menuItem}>About</Link>
                        <Link href="/locations" className={styles.menuItem}>Locations</Link>
                    </div>

                    <div className={styles.actions}>
                        <Link href="/book" className={styles.bookButton}>
                            Book Now
                        </Link>
                        <button
                            className={styles.hamburger}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            <span className={`${styles.line} ${isMobileMenuOpen ? styles.lineOpen1 : ''}`}></span>
                            <span className={`${styles.line} ${isMobileMenuOpen ? styles.lineOpen2 : ''}`}></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Services Mega Menu Overlay */}
            <div className={`${styles.megaMenu} ${isServicesOpen ? styles.megaMenuOpen : ''}`}>
                <div className={styles.megaMenuHeader}>
                    <h2>SERVICES</h2>
                    <button
                        className={styles.closeButton}
                        onClick={() => setIsServicesOpen(false)}
                        aria-label="Close services menu"
                    >
                        ✕
                    </button>
                </div>

                <div className={styles.megaMenuContent}>
                    <div className={styles.category}>
                        <Link href="/services/advanced-aesthetics" onClick={() => setIsServicesOpen(false)}>
                            <h3>Advanced Aesthetics</h3>
                        </Link>
                        <ul>
                            <li><Link href="/services/advanced-aesthetics/neurotoxins" onClick={() => setIsServicesOpen(false)}>Neurotoxins</Link></li>
                            <li><Link href="/services/advanced-aesthetics/dermal-fillers" onClick={() => setIsServicesOpen(false)}>Dermal Fillers</Link></li>
                            <li><Link href="/services/advanced-aesthetics/biostimulators" onClick={() => setIsServicesOpen(false)}>Biostimulators</Link></li>
                            <li><Link href="/services/advanced-aesthetics/microneedling" onClick={() => setIsServicesOpen(false)}>Microneedling</Link></li>
                            <li><Link href="/services/advanced-aesthetics/facials" onClick={() => setIsServicesOpen(false)}>Facials</Link></li>
                            <li><Link href="/services/advanced-aesthetics/hair-restoration" onClick={() => setIsServicesOpen(false)}>Hair Restoration</Link></li>
                        </ul>
                    </div>

                    <div className={styles.category}>
                        <Link href="/services/longevity-metabolic-wellness" onClick={() => setIsServicesOpen(false)}>
                            <h3>Longevity & Metabolic Wellness</h3>
                        </Link>
                        <ul>
                            <li><Link href="/services/longevity-metabolic-wellness/hormone-optimization" onClick={() => setIsServicesOpen(false)}>Hormone Optimization</Link></li>
                            <li><Link href="/services/longevity-metabolic-wellness/medical-weight-loss" onClick={() => setIsServicesOpen(false)}>Medical Weight Loss</Link></li>
                            <li><Link href="/services/longevity-metabolic-wellness/peptide-therapy" onClick={() => setIsServicesOpen(false)}>Peptide Therapy</Link></li>
                            <li><Link href="/services/longevity-metabolic-wellness/nad-therapy" onClick={() => setIsServicesOpen(false)}>NAD+ Therapy</Link></li>
                        </ul>
                    </div>

                    <div className={styles.category}>
                        <Link href="/services/body-contouring" onClick={() => setIsServicesOpen(false)}>
                            <h3>Body Contouring</h3>
                        </Link>
                        <ul>
                            <li><Link href="/services/body-contouring/emsculpt-neo" onClick={() => setIsServicesOpen(false)}>Emsculpt NEO</Link></li>
                        </ul>
                    </div>

                    <div className={styles.category}>
                        <Link href="/services/recovery-performance" onClick={() => setIsServicesOpen(false)}>
                            <h3>Recovery & Performance</h3>
                        </Link>
                        <ul>
                            <li><Link href="/services/recovery-performance/iv-therapy" onClick={() => setIsServicesOpen(false)}>IV Therapy</Link></li>
                            <li><Link href="/services/recovery-performance/red-light-therapy" onClick={() => setIsServicesOpen(false)}>Red Light Therapy</Link></li>
                            <li><Link href="/services/recovery-performance/hyperbaric-oxygen-therapy" onClick={() => setIsServicesOpen(false)}>Hyperbaric Oxygen Therapy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.megaMenuFooter}>
                    <Link href="/book" className={styles.bookButtonLarge} onClick={() => setIsServicesOpen(false)}>
                        Book a Consultation
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Slide-in */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileMenuLinks}>
                    <button
                        className={styles.mobileMenuItem}
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsServicesOpen(true);
                        }}
                    >
                        Services
                    </button>
                    <Link href="/membership" className={styles.mobileMenuItem} onClick={() => setIsMobileMenuOpen(false)}>Membership</Link>
                    <Link href="/about" className={styles.mobileMenuItem} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link href="/locations" className={styles.mobileMenuItem} onClick={() => setIsMobileMenuOpen(false)}>Locations</Link>
                </div>
            </div>
        </>
    );
}
