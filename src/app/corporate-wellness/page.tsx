import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Corporate Wellness & VIP Retreats · ADARE',
    description: 'Elevate your executive team with the ADARE Corporate Wellness Protocol. Private retreats, executive optimizations, and corporate memberships in Tampa Bay.',
};

export default function CorporateWellnessPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/membership-hero.png" // using existing high-quality image as placeholder
                        alt="ADARE Corporate Wellness"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <div className="container">
                        <span className={styles.heroLabel}>B2B Partnerships</span>
                        <h1 className={styles.heroTitle}>Elevate Your Executive Team.</h1>
                        <p className={styles.heroTagline}>The ADARE Corporate Wellness Protocol.</p>
                        <div style={{ marginTop: 'var(--spacing-8)' }}>
                            <Button href="mailto:partnerships@adare.clinic" variant="primary">Inquire About Partnerships</Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.introSection}>
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-6)' }}>Performance Is Biological.</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-muted-text)', lineHeight: 1.6 }}>
                        High-performing companies run on high-performing individuals. Yet the traditional executive physical is reactive and outdated. At ADARE, we partner with industry-leading organizations in Tampa Bay to proactively optimize the health, resilience, and cognitive endurance of their leadership teams.
                    </p>
                </div>
            </section>

            <section className={styles.roiSection}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: 'var(--spacing-16)' }}>The ROI of Corporate Wellness</h2>
                    <div className={styles.roiGrid}>
                        <div className={styles.roiCard}>
                            <div className={styles.roiStat}>31%</div>
                            <h3>Higher Productivity</h3>
                            <p>Teams with optimized circadian rhythm and hormone balance report significantly increased focus and output.</p>
                        </div>
                        <div className={styles.roiCard}>
                            <div className={styles.roiStat}>-41%</div>
                            <h3>Reduction in Absenteeism</h3>
                            <p>Proactive metabolic care and IV therapeutics keep your leadership team healthy during critical sprints.</p>
                        </div>
                        <div className={styles.roiCard}>
                            <div className={styles.roiStat}>6x</div>
                            <h3>Return on Investment</h3>
                            <p>For every dollar invested in deeply clinical wellness programs, companies save an average of six dollars in healthcare costs and lost time.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.darkSection}>
                <div className="container">
                    <div className={styles.protocolGrid}>
                        <div className={styles.protocolContent}>
                            <h2 style={{ color: 'var(--color-primary-inverse)', marginBottom: 'var(--spacing-6)' }}>The Executive Protocol</h2>
                            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--spacing-6)' }}>
                                We do not offer generic health-fair screenings. The ADARE Executive Protocol is a rigorous, data-driven approach to human optimization, designed specifically for individuals making high-stakes decisions under pressure.
                            </p>
                            <ul className={styles.protocolList}>
                                <li>
                                    <strong>Comprehensive Diagnostics:</strong> Deep-dive panels mapping hormone profiles, nutrient deficiencies, and cardiovascular risk.
                                </li>
                                <li>
                                    <strong>Cognitive & Physical Optimization:</strong> Peptide therapies and NAD+ infusions for immediate mental clarity.
                                </li>
                                <li>
                                    <strong>Aesthetic Rejuvenation:</strong> Ensuring your team\'s external presentation matches their internal vitality.
                                </li>
                                <li>
                                    <strong>Concierge Telehealth:</strong> Priority access to our medical board, keeping your executives out of waiting rooms.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.protocolImageWrapper}>
                            <Image
                                src="/images/about-philosophy.webp" // placeholder
                                alt="The Executive Protocol"
                                fill
                                className={styles.protocolImage}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.retreatSection}>
                <div className="container text-center">
                    <span className={styles.heroLabel} style={{ color: 'var(--color-primary)', display: 'block', marginBottom: 'var(--spacing-4)' }}>VIP Access</span>
                    <h2 style={{ marginBottom: 'var(--spacing-6)' }}>Host Your Next Board Retreat at ADARE</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto var(--spacing-12)', color: 'var(--color-muted-text)' }}>
                        Elevate your next leadership summit. Our state-of-the-art facilities in South Tampa and St. Petersburg are available for private, half-day corporate buyouts. Treat your board or executive team to a curated experience of IV hydration, aesthetic treatments, and longevity consultations in an environment of absolute luxury and discretion.
                    </p>
                    <Button href="mailto:partnerships@adare.clinic?subject=Corporate%20Retreat%20Inquiry" variant="primary">Inquire About Facility Buyouts</Button>
                </div>
            </section>
        </>
    );
}
