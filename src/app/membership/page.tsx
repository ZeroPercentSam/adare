import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/Button';
import Accordion from '@/components/Accordion';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Membership · ADARE Longevity & Aesthetics',
    description: 'Glow, Foundation, and ADARE memberships for consistent care, member pricing, and priority access. From $199/month.',
};

export default function MembershipPage() {
    const faqs = [
        { question: 'Can I switch tiers?', answer: 'Yes, you can upgrade or downgrade your membership tier at any time with a 30-day notice to accommodate your evolving optimization goals.' },
        { question: 'How does the Glow credit banking work?', answer: 'Your $199 monthly fee is banked into your "Glow Vault," which can be applied directly to eligible aesthetic services or used for a monthly HydraFacial.' },
        { question: 'What bloodwork is included with Foundation?', answer: 'The Foundation membership includes extensive quarterly comprehensive metabolic, hormonal, and micronutrient panels to precisely guide your protocol.' },
        { question: 'What is the booking process for members?', answer: 'Members receive access to a priority booking portal and direct text access to our concierge wellness coordinators.' },
        { question: 'Is there a minimum commitment?', answer: 'We request an initial 3-month commitment to ensure we have adequate time to establish your baseline and begin seeing clinical progress.' },
        { question: 'Can I pause my membership?', answer: 'Yes, memberships can be paused for up to 2 months per calendar year.' },
    ];

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/membership-hero.webp"
                        alt="ADARE Membership"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <h1>Membership</h1>
                    <p>Consistent care. Preferential access. Elevated value.</p>
                </div>
            </section>

            <section className={styles.tiersSection}>
                <div className="container">
                    <div className={styles.tiersGrid}>
                        {/* Glow Membership */}
                        <div className={styles.tierCard} id="glow">
                            <div className={styles.tierHeader}>
                                <h2>Glow Membership</h2>
                                <div className={styles.price}>$199<span>/month</span></div>
                                <p className={styles.tierSubline}>Banking membership with monthly skin option.</p>
                            </div>
                            <div className={styles.tierFeatures}>
                                <ul>
                                    <li>$199 monthly credit bank applied toward eligible services</li>
                                    <li>Option to receive one HydraFacial each month in place of banking credit</li>
                                    <li>Member-only pricing on select services</li>
                                    <li>Priority booking access</li>
                                </ul>
                            </div>
                            <div className={styles.tierActions}>
                                <Button href="/book?type=membership-glow" variant="primary" className={styles.fullWidthButton}>Join Glow</Button>
                                <Button href="/book?type=consultation-glow" variant="outline" className={styles.fullWidthButton}>Book Consultation</Button>
                            </div>
                        </div>

                        {/* Foundation Membership */}
                        <div className={`${styles.tierCard} ${styles.featuredTier}`} id="foundation">
                            <div className={styles.tierHeader}>
                                <h2>Foundation Membership</h2>
                                <div className={styles.price}>$299<span>/month</span></div>
                                <p className={styles.tierSubline}>Built for hormone, weight loss, and peptide clients.</p>
                            </div>
                            <div className={styles.tierFeatures}>
                                <ul>
                                    <li>Monthly membership designed for ongoing metabolic and hormonal programs</li>
                                    <li>Bloodwork included as part of membership</li>
                                    <li>Member pricing for hormone optimization, medical weight loss, and peptide therapy</li>
                                    <li>Structured follow-ups and plan accountability</li>
                                </ul>
                            </div>
                            <div className={styles.tierActions}>
                                <Button href="/book?type=membership-foundation" variant="secondary" className={styles.fullWidthButton}>Join Foundation</Button>
                                <Button href="/book?type=consultation-wellness" variant="outline" className={styles.fullWidthButtonLight}>Start with Labs</Button>
                            </div>
                        </div>

                        {/* ADARE Membership */}
                        <div className={styles.tierCard} id="adare">
                            <div className={styles.tierHeader}>
                                <h2>ADARE Membership</h2>
                                <div className={styles.price}>$995<span>/month</span></div>
                                <p className={styles.tierSubline}>Comprehensive optimization, fully integrated.</p>
                            </div>
                            <div className={styles.tierFeatures}>
                                <ul>
                                    <li>Hormone optimization included</li>
                                    <li>Medical weight loss program included</li>
                                    <li>Peptide therapy included</li>
                                    <li>IV therapy included</li>
                                    <li>Aesthetic services included</li>
                                    <li>Priority scheduling and concierge planning</li>
                                </ul>
                            </div>
                            <div className={styles.tierActions}>
                                <Button href="/book?type=membership-adare" variant="primary" className={styles.fullWidthButton}>Apply for ADARE Membership</Button>
                                <Button href="/book?type=consultation-private" variant="outline" className={styles.fullWidthButton}>Book Private Consultation</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: 'var(--spacing-12)' }}>Membership FAQs</h2>
                    <Accordion items={faqs} />
                </div>
            </section>
        </>
    );
}
