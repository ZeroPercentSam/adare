import Link from 'next/link';
import styles from '../membership-detail.module.css';
import Button from '@/components/Button';

export const metadata = {
    title: 'ADARE Membership · ADARE Longevity & Aesthetics',
    description: 'The pinnacle of ADARE. A comprehensive $995/mo membership encompassing hormone optimization, weight loss, unlimited recovery, and aesthetics.',
};

export default function AdareMembershipPage() {
    return (
        <main>
            <section className={styles.hero} style={{ backgroundColor: '#11131C' }}>
                <div className="container">
                    <h1 style={{ color: 'var(--color-accent-warm)' }}>ADARE Membership</h1>
                    <p>Comprehensive optimization, fully integrated.</p>
                </div>
            </section>

            <section className={styles.detailSection}>
                <div className="container">
                    <Link href="/membership" style={{ color: 'var(--color-primary)', textDecoration: 'underline', marginBottom: '2rem', display: 'inline-block' }}>
                        ← Back to Memberships
                    </Link>
                    <div className={styles.grid}>
                        <div className={styles.infoBlock}>
                            <h2>The ultimate investment in your biology.</h2>
                            <p>
                                The ADARE Membership represents the absolute pinnacle of our clinical offerings.
                                It is designed for the uncompromising individual who treats their biological health
                                as their most valuable asset.
                            </p>
                            <p>
                                This tier eliminates the concept of individual treatments. Instead, an expert medical
                                team builds a cohesive, 360-degree optimization strategy integrating your aesthetic
                                goals with cellular longevity protocols. Everything you need to look and perform at
                                your absolute peak is seamlessly managed for one predictable investment.
                            </p>

                            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Unprecedented Inclusions</h3>
                            <ul>
                                <li><strong>Hormone Optimization Included:</strong> Full BHRT/TRT management and all required lab panels at no extra cost.</li>
                                <li><strong>Medical Weight Loss Included:</strong> Full GLP-1/GIP protocols managed and supplied.</li>
                                <li><strong>Unlimited Recovery:</strong> Access to Hyperbaric Oxygen Therapy and Red Light Therapy.</li>
                                <li><strong>Weekly IV Therapy:</strong> One custom nutrient IV drip per week.</li>
                                <li><strong>Aesthetic Allowance:</strong> A generous quarterly allowance for Neurotoxins or Dermal Fillers.</li>
                                <li><strong>Private Concierge:</strong> A dedicated, 24/7 direct-line medical concierge to handle all booking and adjustments.</li>
                            </ul>
                        </div>

                        <div className={styles.pricingCard}>
                            <h3>ADARE Tier</h3>
                            <div className={styles.price}>$995<span>/mo</span></div>
                            <p className={styles.pricingSubline}>By application only. Limited availability.</p>

                            <Button href="/book?type=membership-adare" variant="primary" className={styles.spacing}>
                                Apply Now
                            </Button>
                            <Button href="/book?type=consultation-private" variant="outline">
                                Private Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
