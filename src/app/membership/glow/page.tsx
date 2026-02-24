import Link from 'next/link';
import Image from 'next/image';
import styles from '../membership-detail.module.css';
import Button from '@/components/Button';

export const metadata = {
    title: 'Glow Membership · ADARE Longevity & Aesthetics',
    description: 'The Glow Membership at ADARE provides $199/mo in banked credit, member-exclusive pricing on injectables, and priority booking.',
};

export default function GlowMembershipPage() {
    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/membership-hero.png"
                        alt="Glow Membership"
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
                        <h1 className={styles.heroTitle}>Glow Membership</h1>
                        <p className={styles.heroTagline}>Consistent care. Elevated value.</p>
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
                            <h2>Invest in your aesthetic baseline.</h2>
                            <p>
                                The Glow Membership is designed for the client who understands that the best aesthetic
                                results come from consistency. Instead of a sunken fee, your monthly dues are
                                deposited directly into your "Glow Vault," ready to be used toward your next treatment.
                            </p>
                            <p>
                                Whether you are maintaining your neurotoxin schedule, investing in biostimulators,
                                or treating yourself to medical-grade skincare, the Glow Membership ensures
                                you receive preferential pricing and priority access.
                            </p>

                            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Membership Privileges</h3>
                            <ul>
                                <li><strong>$199 Banked Monthly:</strong> Every dollar goes toward your eligible aesthetic treatments.</li>
                                <li><strong>The HydraFacial Swap:</strong> Choose to use your monthly credit for a complimentary Signature HydraFacial instead.</li>
                                <li><strong>10% Off Injectables:</strong> Preferred pricing on Neurotoxins and Dermal Fillers.</li>
                                <li><strong>15% Off Skincare:</strong> Exclusive discounts on all medical-grade retail products.</li>
                                <li><strong>Priority Booking:</strong> Skip the waitlist and secure the best times with our providers.</li>
                            </ul>
                        </div>

                        <div className={styles.pricingCard}>
                            <h3>Glow Tier</h3>
                            <div className={styles.price}>$199<span>/mo</span></div>
                            <p className={styles.pricingSubline}>100% of your fee is banked as credit.</p>

                            <Button href="/book?type=membership-glow" variant="primary" className={styles.spacing}>
                                Join Glow
                            </Button>
                            <Button href="/book?type=consultation-glow" variant="outline">
                                Book Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
