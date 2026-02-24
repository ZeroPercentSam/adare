import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import HeroNav from '@/components/HeroNav';
import SplitLocations from '@/components/SplitLocations';

export default function Home() {
    return (
        <>
            {/* Hero Module */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <video
                        src="/videos/home-hero.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={styles.heroVideo}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <h1>For Those Who Expect More.</h1>
                    <p>Longevity, aesthetics, and cellular medicine delivered with clinical integrity and elevated design.</p>
                    <div className={styles.heroActions}>
                        <Button href="/services" variant="outline" className={styles.heroButton}>Explore Services</Button>
                        <Button href="/book" variant="primary">Book Now</Button>
                    </div>
                </div>

                <HeroNav />
            </section>

            {/* Services Preview Grid */}
            <section className={styles.sectionServices}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2>Explore Care</h2>
                    </div>
                    <div className={styles.servicesGrid}>
                        <ServiceCard
                            title="Advanced Aesthetics"
                            description="Precision injectables and regenerative skin treatments designed for natural refinement."
                            imageSrc="/images/aesthetics-category.webp"
                            categoryLink="/services/advanced-aesthetics"
                            bookingLink="/book"
                            delay={0}
                        />
                        <ServiceCard
                            title="Longevity & Metabolic Wellness"
                            description="Lab-guided hormone, weight loss, peptide, and NAD+ programs built for performance."
                            imageSrc="/images/longevity-category.webp"
                            categoryLink="/services/longevity-metabolic-wellness"
                            bookingLink="/book"
                            delay={0.1}
                        />
                        <ServiceCard
                            title="Recovery & Performance"
                            description="Hyperbaric oxygen, red light, and IV therapy to accelerate recovery and resilience."
                            imageSrc="/images/recovery-category.webp"
                            categoryLink="/services/recovery-performance"
                            bookingLink="/book"
                            delay={0.2}
                        />
                        <ServiceCard
                            title="Body Contouring"
                            description="Emsculpt NEO for muscle and fat outcomes with measurable change."
                            imageSrc="/images/body-category.webp"
                            categoryLink="/services/body-contouring"
                            bookingLink="/book"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* The ADARE Difference */}
            <section className={styles.sectionDifference}>
                <div className="container">
                    <div className={styles.differenceContent}>
                        <h2>Medical. Intentional.<br />Evidence-Based.</h2>
                        <div className={styles.differencePoints}>
                            <div className={styles.point}>
                                <span className={styles.pointIcon}>+</span>
                                <span className={styles.pointText}>Provider-led care</span>
                            </div>
                            <div className={styles.point}>
                                <span className={styles.pointIcon}>+</span>
                                <span className={styles.pointText}>Lab-first decision making</span>
                            </div>
                            <div className={styles.point}>
                                <span className={styles.pointIcon}>+</span>
                                <span className={styles.pointText}>Personalized protocols</span>
                            </div>
                            <div className={styles.point}>
                                <span className={styles.pointIcon}>+</span>
                                <span className={styles.pointText}>High-touch experience</span>
                            </div>
                            <div className={styles.point}>
                                <span className={styles.pointIcon}>+</span>
                                <span className={styles.pointText}>Ongoing optimization, not one-time treatments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Membership CTA */}
            <section className={styles.sectionMembership}>
                <div className="container text-center">
                    <h2 className={styles.membershipTitle}>Optimization is not episodic.</h2>
                    <p className={styles.membershipBody}>Choose a membership built for consistency, progress, and priority access.</p>
                    <Button href="/membership" variant="secondary">Explore Membership</Button>
                </div>
            </section>

            {/* Locations */}
            <SplitLocations />

            {/* Footer CTA */}
            <section className={styles.sectionFooterCta}>
                <div className="container text-center">
                    <h2>Your next decade starts here.</h2>
                    <Button href="/book" variant="primary">Book a Consultation</Button>
                </div>
            </section>
        </>
    );
}
