import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import { Sparkles, Activity, BatteryCharging, Dumbbell, Crown } from 'lucide-react';

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

                <div className={styles.heroNavContainer}>
                    <div className={styles.heroNavLine}>
                        <div className={styles.heroNavLineActive}></div>
                    </div>
                    <div className={styles.heroNav}>
                        <a href="/services/advanced-aesthetics" className={styles.heroNavItem}>
                            <Sparkles className={styles.heroNavIcon} strokeWidth={1} />
                            <span>ADVANCED<br />AESTHETICS</span>
                        </a>
                        <a href="/services/longevity-metabolic-wellness" className={styles.heroNavItem}>
                            <Activity className={styles.heroNavIcon} strokeWidth={1} />
                            <span>LONGEVITY &<br />METABOLIC</span>
                        </a>
                        <a href="/services/recovery-performance" className={styles.heroNavItem}>
                            <BatteryCharging className={styles.heroNavIcon} strokeWidth={1} />
                            <span>RECOVERY &<br />PERFORMANCE</span>
                        </a>
                        <a href="/services/body-contouring" className={styles.heroNavItem}>
                            <Dumbbell className={styles.heroNavIcon} strokeWidth={1} />
                            <span>BODY<br />CONTOURING</span>
                        </a>
                        <a href="/membership" className={styles.heroNavItem}>
                            <Crown className={styles.heroNavIcon} strokeWidth={1} />
                            <span>ADARE<br />MEMBERSHIPS</span>
                        </a>
                    </div>
                </div>
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
            <section className={styles.sectionLocations}>
                <div className="container text-center">
                    <div className={styles.locationsWrapper}>
                        <div className={styles.locationInfo}>
                            <h2>Locations</h2>
                            <div className={styles.locationList}>
                                <p>South Tampa</p>
                                <p>St. Pete</p>
                            </div>
                            <div className={styles.locationActions}>
                                <Button href="/locations" variant="outline">View Locations</Button>
                                <Button href="/book" variant="primary">Book Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
