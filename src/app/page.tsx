import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import HeroNav from '@/components/HeroNav';
import SplitLocations from '@/components/SplitLocations';
import TrustBar from '@/components/TrustBar';
import ProviderSection from '@/components/ProviderSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import PressBar from '@/components/PressBar';
import StatsCounter from '@/components/StatsCounter';

export default function Home() {
    return (
        <>
            {/* Hero Module */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    {/* Mobile Fallback Image */}
                    <Image
                        src="/images/hero-poster.jpg"
                        alt="ADARE Longevity & Aesthetics"
                        fill
                        priority
                        className={styles.heroStaticImage}
                    />
                    {/* Desktop Video */}
                    <video
                        src="/videos/home-hero.mp4"
                        poster="/images/hero-poster.jpg"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={styles.heroVideo}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <div className="container">
                        <span className={styles.heroLabel}>Tampa Bay's Premier Clinic</span>
                        <h1 className={styles.heroTitle}>For Those Who Expect More.</h1>
                        <p className={styles.heroTagline}>Precision longevity medicine, advanced aesthetics, and cellular optimization — exclusively for Tampa Bay's most discerning patients.</p>
                        <div className={styles.heroActions}>
                            <Button href="/assessment" variant="outline" className={styles.heroButton}>See If You Qualify</Button>
                            <Button href="/book" variant="primary">Book Now</Button>
                        </div>
                    </div>
                </div>

                <div className={styles.scrollIndicator}>
                    <span>Explore</span>
                    <svg className={styles.scrollIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>

                <HeroNav />
            </section>

            {/* Trust Signals */}
            <TrustBar />
            <PressBar />

            {/* Services Preview Grid */}
            <section className={styles.sectionServices}>
                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeText}>
                        Botox &middot; Semaglutide &middot; NAD+ IV &middot; Hormone Optimization &middot; Emsculpt NEO &middot; Peptide Therapy &middot; Microneedling &middot; Red Light Therapy &middot;
                        Botox &middot; Semaglutide &middot; NAD+ IV &middot; Hormone Optimization &middot; Emsculpt NEO &middot; Peptide Therapy &middot; Microneedling &middot; Red Light Therapy &middot;
                    </div>
                </div>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2>Explore Care</h2>
                    </div>
                    <div className={styles.servicesGrid}>
                        <ServiceCard
                            title="Advanced Aesthetics"
                            description="Refine your profile and reverse the signs of aging with precision injectables and regenerative skin treatments."
                            imageSrc="/images/aesthetics-hero-new.jpg"
                            categoryLink="/services/advanced-aesthetics"
                            bookingLink="/book"
                            isPopular={true}
                            delay={0}
                        />
                        <ServiceCard
                            title="Longevity & Wellness"
                            description="Reclaim the energy, focus, and vitality that time has taken — guided by labs, not guesswork."
                            imageSrc="/images/longevity-hero-new.jpg"
                            categoryLink="/services/longevity-metabolic-wellness"
                            bookingLink="/book"
                            isPopular={true}
                            delay={0.1}
                        />
                        <ServiceCard
                            title="Recovery & Performance"
                            description="Slash recovery times and build profound cellular resilience with hyperbaric, red light, and IV therapies."
                            imageSrc="/images/recovery-hero-new.jpg"
                            categoryLink="/services/recovery-performance"
                            bookingLink="/book"
                            delay={0.2}
                        />
                        <ServiceCard
                            title="Body Contouring"
                            description="Achieve measurable muscle growth and fat reduction without downtime using Emsculpt NEO."
                            imageSrc="/images/body-hero-new.jpg"
                            categoryLink="/services/body-contouring"
                            bookingLink="/book"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Provider Section */}
            <ProviderSection />

            {/* The ADARE Difference */}
            <section className={styles.sectionDifference}>
                <div className="container">
                    <div className={styles.differenceContent}>
                        <h2>Medical. Intentional.<br />Evidence-Based.</h2>
                        <div className={styles.differencePoints}>
                            <Link href="/about/principles/provider-led-care" className={styles.point}>
                                <span className={styles.pointIcon}>+</span>
                                <span className={styles.pointText}>Provider-led care</span>
                                <span className={styles.pointArrow}>→</span>
                            </Link>
                            <Link href="/about/principles/lab-first-decision-making" className={styles.point}>
                                <span className={styles.pointIcon}>+</span>
                                <span className={styles.pointText}>Lab-first decision making</span>
                                <span className={styles.pointArrow}>→</span>
                            </Link>
                            <Link href="/about/principles/personalized-protocols" className={styles.point}>
                                <span className={styles.pointIcon}>+</span>
                                <span className={styles.pointText}>Personalized protocols</span>
                                <span className={styles.pointArrow}>→</span>
                            </Link>
                            <Link href="/about/principles/high-touch-experience" className={styles.point}>
                                <span className={styles.pointIcon}>+</span>
                                <span className={styles.pointText}>High-touch experience</span>
                                <span className={styles.pointArrow}>→</span>
                            </Link>
                            <Link href="/about/principles/ongoing-optimization" className={styles.point}>
                                <span className={styles.pointIcon}>+</span>
                                <span className={styles.pointText}>Ongoing optimization, not one-time treatments</span>
                                <span className={styles.pointArrow}>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Counter */}
            <StatsCounter />

            {/* Testimonials */}
            <TestimonialCarousel />

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
