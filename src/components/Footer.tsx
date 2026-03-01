import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer} role="contentinfo">
            <div className={styles.container}>
                <div className={styles.newsletterSection}>
                    <div className={styles.newsletterContent}>
                        <h3>Subscribe to The Protocol</h3>
                        <p>Our monthly intelligence brief delivering the latest in cellular aging, peptide science, and aesthetic refinement directly to your inbox.</p>
                    </div>
                    <form className={styles.newsletterForm} action="#">
                        <input type="email" placeholder="Enter your email address" required className={styles.newsletterInput} />
                        <button type="submit" className={styles.newsletterButton}>Subscribe</button>
                    </form>
                </div>

                <div className={styles.topSection}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            ADARE
                        </Link>
                        <p className={styles.brandTagline}>Medical. Intentional. Evidence-Based.</p>
                        <Link href="/book" className={styles.bookButton}>
                            Book a Consultation
                        </Link>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.column}>
                            <h4>South Tampa</h4>
                            <ul className={styles.contactList}>
                                <li>123 Bayshore Blvd, Suite 100<br />Tampa, FL 33606</li>
                                <li><a href="tel:813-555-0100">(813) 555-0100</a></li>
                                <li>Mon-Fri: 9am - 6pm<br />Sat: 10am - 4pm</li>
                            </ul>
                        </div>

                        <div className={styles.column}>
                            <h4>St. Petersburg</h4>
                            <ul className={styles.contactList}>
                                <li>456 Central Ave<br />St. Petersburg, FL 33701</li>
                                <li><a href="tel:727-555-0200">(727) 555-0200</a></li>
                                <li>Mon-Fri: 9am - 6pm<br />Sat: 10am - 4pm</li>
                            </ul>
                        </div>

                        <div className={styles.column}>
                            <h4>Company</h4>
                            <ul>
                                <li><Link href="/about">The ADARE Standard</Link></li>
                                <li><Link href="/services">Treatments & Protocols</Link></li>
                                <li><Link href="/membership">The Membership</Link></li>
                                <li><Link href="/journal">The ADARE Journal</Link></li>
                                <li><Link href="/corporate-wellness">Corporate Wellness</Link></li>
                                <li><Link href="/careers">Careers</Link></li>
                            </ul>
                        </div>
                    </div>
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
