import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'The ADARE Standard · Longevity & Aesthetics',
    description: 'Medical, intentional, evidence-based. Discover the definitive standard in Tampa Bay\'s luxury longevity and aesthetics practice.',
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
                        <span className={styles.heroLabel}>Our Ethos</span>
                        <h1 className={styles.heroTitle}>The ADARE Standard</h1>
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
                                Founded by Trudy Fehlinger, ADARE was built on a singular premise: aesthetics and longevity medicine must be rooted in absolute clinical rigor. Tired of the transactional nature of the traditional med-spa industry, Trudy envisioned a facility where patients are treated as complex biological systems, not quick appointments. Under her leadership, and the medical direction of elite providers like Natacha Christeler, ADARE has set a new benchmark for luxury medical care in Tampa Bay.
                            </p>
                            <p>
                                The ADARE philosophy is shaped by modern expertise and refined taste. Treatments are purposeful and precise. Aesthetics are subtle and timeless, enhancing what is already authentic. Every experience is designed to support the life you are actively building.
                            </p>
                            <p>
                                Adare offers restoration without retreat, expertise without excess. It is a place where wellbeing becomes a more beautiful way of living, and where you step into the fullest expression of yourself.
                            </p>
                            <div style={{ marginTop: 'var(--spacing-8)' }}>
                                <Button href="/book" variant="primary">Experience the Standard</Button>
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

            {/* The Protocol Section */}
            <section className={styles.lightSection} style={{ backgroundColor: '#111', color: '#fff', padding: 'var(--spacing-24) 0' }}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: 'var(--spacing-16)', color: 'var(--color-primary-inverse)' }}>The Protocol</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-8)' }}>
                        <div style={{ borderTop: '2px solid var(--color-accent)', paddingTop: 'var(--spacing-6)' }}>
                            <div style={{ color: 'var(--color-accent)', fontWeight: 'bold', marginBottom: 'var(--spacing-2)' }}>Phase 01</div>
                            <h3 style={{ color: 'var(--color-primary-inverse)' }}>Clinical Assessment</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>We establish your baseline through comprehensive biomarker testing, kinetic evaluation, and structural facial analysis. No guessing.</p>
                        </div>
                        <div style={{ borderTop: '2px solid rgba(255,255,255,0.2)', paddingTop: 'var(--spacing-6)' }}>
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 'bold', marginBottom: 'var(--spacing-2)' }}>Phase 02</div>
                            <h3 style={{ color: 'var(--color-primary-inverse)' }}>Strategic Design</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>Our medical board architects a coordinated regimen blending regenerative therapies, hormone optimization, and precision aesthetics.</p>
                        </div>
                        <div style={{ borderTop: '2px solid rgba(255,255,255,0.2)', paddingTop: 'var(--spacing-6)' }}>
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 'bold', marginBottom: 'var(--spacing-2)' }}>Phase 03</div>
                            <h3 style={{ color: 'var(--color-primary-inverse)' }}>Execution</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>Implementation of protocol by elite-tier injectors and longevity specialists in our private, state-of-the-art facilities.</p>
                        </div>
                        <div style={{ borderTop: '2px solid rgba(255,255,255,0.2)', paddingTop: 'var(--spacing-6)' }}>
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 'bold', marginBottom: 'var(--spacing-2)' }}>Phase 04</div>
                            <h3 style={{ color: 'var(--color-primary-inverse)' }}>Maintenance</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>Ongoing lab monitoring, protocol refinement, and priority access mapping to ensure absolute, sustained optimization.</p>
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
                        <div className={styles.providerCard} style={{ cursor: 'default' }}>
                            <div className={styles.providerImageWrapper} style={{ backgroundColor: '#eaeaea' }}>
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontFamily: 'var(--font-mono)' }}>
                                    [ND Portrait]
                                </div>
                            </div>
                            <div className={styles.providerInfo}>
                                <h3>Dr. [Name Pending], ND</h3>
                                <p className={styles.providerRole}>Naturopathic Doctor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facility Gallery Placeholder */}
            <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: '#fafafa' }}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: 'var(--spacing-12)' }}>Our Facilities</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-6)' }}>
                        {[1, 2, 3].map((item) => (
                            <div key={item} style={{ paddingBottom: '75%', position: 'relative', backgroundColor: '#eaeaea', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontFamily: 'var(--font-mono)' }}>
                                    [Facility Interior {item}]
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Membership CTA & B2B Press Kit */}
            <section className={styles.membershipSection}>
                <div className="container text-center">
                    <h2 className={styles.membershipTitle}>Ready to begin your protocol?</h2>
                    <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'var(--spacing-12)' }}>
                        <Button href="/book" variant="primary">Book a Consultation</Button>
                        <Button href="/services" variant="secondary">Explore Services</Button>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: 'var(--spacing-12)', maxWidth: '600px', margin: '0 auto' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-4)' }}>Press & Partnerships</h3>
                        <p style={{ color: 'var(--color-muted-text)', marginBottom: 'var(--spacing-6)' }}>Access our media assets, provider bios, and brand guidelines.</p>
                        <Button href="/b2b-press-kit.pdf" variant="outline">Download Press Kit</Button>
                    </div>
                </div>
            </section>
        </>
    );
}
