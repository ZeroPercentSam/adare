import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer} role="contentinfo">
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            ADARE
                        </Link>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.column}>
                            <h4><Link href="/services">Services</Link></h4>
                            <ul>
                                <li><Link href="/services/advanced-aesthetics">Aesthetics</Link></li>
                                <li><Link href="/services/longevity-metabolic-wellness">Longevity</Link></li>
                                <li><Link href="/services/recovery-performance">Recovery</Link></li>
                                <li><Link href="/services/body-contouring">Body Contouring</Link></li>
                            </ul>
                        </div>

                        <div className={styles.column}>
                            <h4><Link href="/membership">Membership</Link></h4>
                            <ul>
                                <li><Link href="/membership#glow">Glow</Link></li>
                                <li><Link href="/membership#foundation">Foundation</Link></li>
                                <li><Link href="/membership#adare">ADARE</Link></li>
                            </ul>
                        </div>

                        <div className={styles.column}>
                            <h4><Link href="/locations">Locations</Link></h4>
                            <ul>
                                <li><Link href="/locations/south-tampa">South Tampa</Link></li>
                                <li><Link href="/locations/st-pete">St. Pete</Link></li>
                            </ul>
                        </div>

                        <div className={styles.column}>
                            <h4><Link href="/about">About</Link></h4>
                            <ul>
                                <li><Link href="/about/principles/provider-led-care">Provider-Led Care</Link></li>
                                <li><Link href="/about/principles/lab-first-decision-making">Lab-First Decisions</Link></li>
                                <li><Link href="/about/principles/personalized-protocols">Personalized Protocols</Link></li>
                                <li><Link href="/about/principles/high-touch-experience">High-Touch Experience</Link></li>
                                <li><Link href="/about/principles/ongoing-optimization">Ongoing Optimization</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.ctaSection}>
                    <Link href="/book" className={styles.bookButton}>
                        Book a Consultation
                    </Link>
                </div>

                <div className={styles.bottomSection}>
                    <div className={styles.copyright}>
                        © 2026 ADARE Longevity & Aesthetics. All rights reserved.
                    </div>

                    <div className={styles.legalLinks}>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <span className={styles.separator}>·</span>
                        <Link href="/terms">Terms</Link>
                        <span className={styles.separator}>·</span>
                        <Link href="/medical-disclaimer">Medical Disclaimer</Link>
                        <span className={styles.separator}>·</span>
                        <Link href="/accessibility">Accessibility</Link>
                    </div>

                    <div className={styles.socialLinks}>
                        <a href="https://www.instagram.com/adare_life" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
                        <span className={styles.separator}>·</span>
                        <a href="https://www.facebook.com/ADARECollective" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook (Collective)</a>
                        <span className={styles.separator}>·</span>
                        <a href="https://www.facebook.com/adarelongevityandaesthetics1" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook (Aesthetics)</a>
                        <span className={styles.separator}>·</span>
                        <a href="https://www.linkedin.com/company/adarelongevityandaesthetics/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
