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
                        src="/images/about-hero.png"
                        alt="ADARE Clinic Interior"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <div className="container">
                        <span className={styles.heroLabel}>Our Story</span>
                        <h1 className={styles.heroTitle}>About ADARE</h1>
                        <p className={styles.heroTagline}>Medical. Intentional. Evidence-Based.</p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className={styles.storySection}>
                <div className="container">
                    <div className={styles.storyGrid}>
                        <div className={styles.storyText}>
                            <h2>The Story of Adare</h2>
                            <p>
                                Adare is where longevity and elevated aesthetics come together with intention and refinement. It is designed for those who move through life with clarity, confidence, and ease, and who want their wellbeing and presence to reflect the same excellence they bring to everything else.
                            </p>
                            <p>
                                Adare is for women and men who expect more. They come with full lives, ambitious goals, and a desire to feel strong, confident, and at ease in their bodies. Whether building careers, leading teams, raising families, or entering a new chapter, they seek a place that meets them with warmth, intelligence, and true expertise.
                            </p>
                            <p>
                                Clients arrive seeking balance, radiance, or renewal. Some come to soften the impact of stress. Others want to age gracefully and intentionally. Many simply want to reconnect with the version of themselves that feels centered, capable, and well. Here, wellbeing is not an escape from life but an essential part of living it fully.
                            </p>
                            <p>
                                The Adare philosophy is shaped by modern expertise and refined taste. Treatments are purposeful and precise. Aesthetics are subtle and timeless, enhancing what is already authentic. Every experience is designed to support the life you are actively building.
                            </p>
                            <p>
                                The name Adare comes from the Irish <em>Áth Dara</em>, the ford of the oak. The imagery is quietly powerful: the rooted presence of the oak alongside water that moves with ease. It reflects a place where resilience and renewal coexist, and where transformation is approached with intention and grace.
                            </p>
                            <p>
                                Adare offers restoration without retreat, expertise without excess. It is a place where wellbeing becomes a more beautiful way of living, and where you step into the fullest expression of yourself.
                            </p>
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
                    <h2 className="text-center" style={{ marginBottom: 'var(--spacing-16)' }}>The Adare Team</h2>
                    <div className={styles.teamGrid}>
                        <a href="/about/trudy-fehlinger" className={styles.providerCard}>
                            <div className={styles.providerImageWrapper}>
                                <Image
                                    src="/images/team/trudy-fehlinger-founder-tampa.jpg"
                                    alt="Trudy Fehlinger - Founder"
                                    fill
                                    className={styles.providerImage}
                                />
                            </div>
                            <div className={styles.providerInfo}>
                                <h3>Trudy Fehlinger</h3>
                                <p className={styles.providerRole}>Founder</p>
                            </div>
                        </a>
                        <a href="/about/katie-andaur" className={styles.providerCard}>
                            <div className={styles.providerImageWrapper}>
                                <Image
                                    src="/images/team/katie-andaur-coo-tampa.jpg"
                                    alt="Katie Andaur - COO"
                                    fill
                                    className={styles.providerImage}
                                />
                            </div>
                            <div className={styles.providerInfo}>
                                <h3>Katie Andaur</h3>
                                <p className={styles.providerRole}>Chief Operating Officer</p>
                            </div>
                        </a>
                        <a href="/about/natacha-christeler" className={styles.providerCard}>
                            <div className={styles.providerImageWrapper}>
                                <Image
                                    src="/images/team/natacha-christeler-real.png"
                                    alt="Natacha Christeler - APRN-BC, MSN, BSN"
                                    fill
                                    className={styles.providerImage}
                                />
                            </div>
                            <div className={styles.providerInfo}>
                                <h3>Natacha Christeler, APRN</h3>
                                <p className={styles.providerRole}>Top 100 Aesthetic Injector</p>
                            </div>
                        </a>
                        <a href="/about/tammy-gwozdz" className={styles.providerCard}>
                            <div className={styles.providerImageWrapper}>
                                <Image
                                    src="/images/team/tammy-gwozdz-nurse-practitioner-tampa.jpg"
                                    alt="Tammy Gwozdz - MSN, APRN"
                                    fill
                                    className={styles.providerImage}
                                />
                            </div>
                            <div className={styles.providerInfo}>
                                <h3>Tammy Gwozdz, APRN</h3>
                                <p className={styles.providerRole}>Nurse Practitioner</p>
                            </div>
                        </a>
                        <a href="/about/amber-brnovich" className={styles.providerCard}>
                            <div className={styles.providerImageWrapper}>
                                <Image
                                    src="/images/team/Amber-Brnovich-Esthetician-tampa.jpg"
                                    alt="Amber Brnovich - Esthetician"
                                    fill
                                    className={styles.providerImage}
                                />
                            </div>
                            <div className={styles.providerInfo}>
                                <h3>Amber Brnovich</h3>
                                <p className={styles.providerRole}>Advanced Medical Esthetician</p>
                            </div>
                        </a>
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
