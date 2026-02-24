import Link from 'next/link';
import Image from 'next/image';
import styles from '../membership-detail.module.css';
import Button from '@/components/Button';

export const metadata = {
    title: 'Foundation Membership · ADARE Longevity & Aesthetics',
    description: 'The Foundation Membership fuels your metabolic wellness journey, including comprehensive bloodwork, hormone optimization pricing, and follow-ups.',
};

export default function FoundationMembershipPage() {
    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/membership-hero.png"
                        alt="Foundation Membership"
                        fill
                        priority
                        className={styles.heroImage}
                        sizes="100vw"
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <div className="container">
                        <span className={styles.heroLabel}>Membership Tier</span>
                        <h1 className={styles.heroTitle}>Foundation Membership</h1>
                        <p className={styles.heroTagline}>Built for hormone, weight loss, and peptide optimization.</p>
                    </div>
                </div>
            </section>

            <section className={styles.detailSection}>
                <div className="container">
                    <Link href="/membership" style={{ color: 'var(--color-primary)', textDecoration: 'underline', marginBottom: '2rem', display: 'inline-block' }}>
                        ← Back to Memberships
                    </Link>
                    <div className={styles.grid}>
                        <div className={styles.infoBlock}>
                            <h2>Data-driven metabolic control.</h2>
                            <p>
                                True longevity requires precision. The Foundation Membership is specifically engineered
                                for clients undertaking active hormonal, weight loss, or peptide therapies at ADARE.
                                By moving to a membership model, we remove the friction of constant consultation and
                                lab fees, allowing us to focus entirely on your biological progression.
                            </p>
                            <p>
                                Your membership includes all routine comprehensive blood panels required to monitor
                                your therapies, alongside drastically reduced pricing for advanced longevity modalities.
                            </p>

                            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Membership Privileges</h3>
                            <ul>
                                <li><strong>Included Bloodwork:</strong> Quarterly comprehensive metabolic and hormonal lab panels (a massive annual savings).</li>
                                <li><strong>Reduced Medication Pricing:</strong> Exclusive deeply discounted rates for BHRT and Medical Weight Loss prescriptions.</li>
                                <li><strong>20% Off IV Therapy & Peptides:</strong> Supercharge your recovery with member-only rates on advanced modalities.</li>
                                <li><strong>Dedicated Check-ins:</strong> Routine clinical tracking to titrate and perfect your dosing.</li>
                                <li><strong>Concierge Access:</strong> Direct text access to our wellness coordinators for seamless support.</li>
                            </ul>
                        </div>

                        <div className={styles.pricingCard}>
                            <h3>Foundation Tier</h3>
                            <div className={styles.price}>$299<span>/mo</span></div>
                            <p className={styles.pricingSubline}>Access to wholesale medication rates and labs.</p>

                            <Button href="/book?type=membership-foundation" variant="primary" className={styles.spacing}>
                                Join Foundation
                            </Button>
                            <Button href="/book?type=consultation-wellness" variant="outline">
                                Start with Labs
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
