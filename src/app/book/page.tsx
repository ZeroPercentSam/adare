import { Suspense } from 'react';
import Image from 'next/image';
import BookingForm from './BookingForm';
import styles from './page.module.css';
import { principles } from '@/data/principles';
import Accordion from '@/components/Accordion';

export const metadata = {
    title: 'Book a Consultation · ADARE Longevity & Aesthetics',
    description: 'Schedule a consultation for advanced aesthetics, longevity programs, and tailored wellness solutions at ADARE Tampa Bay.',
};

export default function BookPage() {
    return (
        <div className={styles.container}>
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/book-hero.png"
                        alt="Book at ADARE"
                        fill
                        priority
                        className={styles.heroImage}
                        sizes="100vw"
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <div className="container">
                        <span className={styles.heroLabel}>Get Started</span>
                        <h1 className={styles.heroTitle}>Book Your Consultation</h1>
                        <p className={styles.heroTagline}>
                            Take the first step towards tailored optimization. Select your desired service and we will contact you to confirm a timeframe.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.formSection}>
                <div className="container">
                    <div className={styles.formCard}>
                        {/* We use Suspense because BookingForm reads useSearchParams() */}
                        <Suspense fallback={<div className={styles.loading}>Loading booking options...</div>}>
                            <BookingForm />
                        </Suspense>
                    </div>
                </div>
            </section>

            {/* The ADARE Standard Section */}
            <section className={styles.principlesSection}>
                <div className="container">
                    <div className={styles.principlesHeader}>
                        <h2>The ADARE Standard</h2>
                        <p>Before you book, understand why our approach to aesthetics and longevity is fundamentally different. This is what you can expect from us.</p>
                    </div>
                    <div className={styles.principlesGrid}>
                        {principles.map((principle) => (
                            <div key={principle.id} className={styles.principleCard}>
                                <h3>{principle.shortTitle}</h3>
                                <p>{principle.tagline}</p>
                                <a href={`/about/principles/${principle.slug}`} className={styles.principleLink}>
                                    Read Philosophy →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Extensive Booking FAQ Section */}
            <section className={styles.faqSection}>
                <div className="container">
                    <div className={styles.faqHeader}>
                        <h2>Booking FAQ</h2>
                        <p>Everything you need to know about taking the next step with ADARE.</p>
                    </div>
                    <div className={styles.faqContainer}>
                        <Accordion items={bookingFaqs} />
                    </div>
                </div>
            </section>
        </div>
    );
}

const bookingFaqs = [
    {
        question: "Is it worth the investment? How much will it cost?",
        answer: "Our focus is on profound, foundational optimization rather than temporary fixes. While our advanced protocols are an investment in your health and appearance, a personalized consultation allows us to create a plan that fits your precise goals and lifestyle. We provide transparent pricing on all procedures once a plan is established."
    },
    {
        question: "What if I don't know what I need?",
        answer: "That is exactly why we require a consultation. You do not need to diagnose yourself or choose interventions off a menu. Our expert providers will conduct a thorough assessment—including advanced biomaker testing if needed—to build a roadmap perfectly suited to your biology."
    },
    {
        question: "Do I need a membership right away?",
        answer: "No. While our memberships offer the most value for ongoing optimization, many of our services can be booked individually. During your consultation, we can discuss whether a membership or an episodic treatment pathway makes the most sense for you."
    },
    {
        question: "Who will be treating me?",
        answer: "Adare is strictly a provider-led facility. All core interventions are administered or directly overseen by our advanced medical providers, ensuring unmatched clinical integrity and safety."
    },
    {
        question: "How soon will I see results? Will I need downtime?",
        answer: "This depends entirely on your personalized protocol. Many aesthetic treatments yield immediate or near-immediate results with zero to minimal downtime. Deeper metabolic and cellular interventions take weeks to compound into massive shifts in your vitality. We will outline the exact timeline and any expected downtime during your consultation."
    },
    {
        question: "Can I do a virtual consultation?",
        answer: "Yes, we offer virtual consultations for metabolic wellness, hormone optimization, and general protocol planning. However, aesthetic procedures and certain physical treatments require an in-person assessment."
    }
];
