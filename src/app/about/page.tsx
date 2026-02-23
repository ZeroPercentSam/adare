import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'About · ADARE Longevity & Aesthetics',
    description: 'Medical, intentional, evidence-based. Meet the providers behind Tampa Bay\'s luxury longevity and aesthetics practice.',
};

export default function AboutPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/about-hero.webp"
                        alt="ADARE Clinic Interior"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <h1>About ADARE</h1>
                    <p>Medical. Intentional. Evidence-Based.</p>
                </div>
            </section>

            {/* Story Section */}
            <section className={styles.storySection}>
                <div className="container">
                    <div className={styles.storyGrid}>
                        <div className={styles.storyText}>
                            <h2>The ADARE Philosophy</h2>
                            <p>
                                ADARE was founded on a simple premise: longevity, aesthetics, and cellular medicine should be delivered with clinical integrity and elevated design. We believe that optimization is not episodic—it requires consistency, precision, and an evidence-based approach.
                            </p>
                            <p>
                                Our protocols are lab-first, tailored to your unique biology, and designed to support you from the inside out. We do not chase trends. We follow the science to deliver measurable change and natural refinement.
                            </p>
                            <div className={styles.signature}>
                                <Image src="/images/signature-placeholder.webp" alt="Founders Signature" width={150} height={50} />
                            </div>
                        </div>
                        <div className={styles.storyImageWrapper}>
                            <Image
                                src="/images/about-philosophy.webp"
                                alt="ADARE Philosophy"
                                fill
                                className={styles.storyImage}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pillars Section */}
            <section className={styles.pillarsSection}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: 'var(--spacing-16)' }}>Our Pillars of Care</h2>
                    <div className={styles.pillarsGrid}>
                        <div className={styles.pillar}>
                            <div className={styles.pillarNumber}>01</div>
                            <h3>Provider-Led Care</h3>
                            <p>Every treatment plan is directed by experienced medical providers who prioritize your health, safety, and long-term outcomes above all else.</p>
                        </div>
                        <div className={styles.pillar}>
                            <div className={styles.pillarNumber}>02</div>
                            <h3>Lab-First Precision</h3>
                            <p>We do not guess. Our metabolic and longevity programs begin with comprehensive laboratory testing to build protocols based on your actual data.</p>
                        </div>
                        <div className={styles.pillar}>
                            <div className={styles.pillarNumber}>03</div>
                            <h3>Natural Refinement</h3>
                            <p>Our aesthetic philosophy is rooted in structure, balance, and tissue health. Enhancements should support your anatomy, never overwriting it.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className={styles.teamSection}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: 'var(--spacing-16)' }}>The Providers</h2>
                    <div className={styles.teamGrid}>
                        {/* Provider 1 */}
                        <div className={styles.providerCard}>
                            <div className={styles.providerImageWrapper}>
                                <Image
                                    src="/images/provider-1.webp"
                                    alt="Dr. Sarah Johnson"
                                    fill
                                    className={styles.providerImage}
                                />
                            </div>
                            <div className={styles.providerInfo}>
                                <h3>Dr. Sarah Johnson, MD</h3>
                                <p className={styles.providerRole}>Medical Director</p>
                                <p className={styles.providerBio}>
                                    Board-certified physician specializing in functional medicine, hormone optimization, and cellular therapies. Dr. Johnson oversees all clinical protocols at ADARE.
                                </p>
                            </div>
                        </div>
                        {/* Provider 2 */}
                        <div className={styles.providerCard}>
                            <div className={styles.providerImageWrapper}>
                                <Image
                                    src="/images/provider-2.webp"
                                    alt="Jessica Evans, APRN"
                                    fill
                                    className={styles.providerImage}
                                />
                            </div>
                            <div className={styles.providerInfo}>
                                <h3>Jessica Evans, APRN</h3>
                                <p className={styles.providerRole}>Lead Aesthetic Injector</p>
                                <p className={styles.providerBio}>
                                    Advanced Practice Registered Nurse with over a decade of experience in facial anatomy, neuromodulators, and biostimulatory treatments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Membership CTA */}
            <section className={styles.membershipSection}>
                <div className="container text-center">
                    <h2 className={styles.membershipTitle}>Ready to begin your protocol?</h2>
                    <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button href="/book" variant="primary">Book a Consultation</Button>
                        <Button href="/services" variant="secondary">Explore Services</Button>
                    </div>
                </div>
            </section>
        </>
    );
}
