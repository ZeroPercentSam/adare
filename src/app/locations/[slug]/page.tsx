import { notFound } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/Button';
import Accordion from '@/components/Accordion';
import styles from './page.module.css';

interface LocationPageProps {
    params: Promise<{
        slug: string;
    }>
}

// Mock database for standard locations
const locationData = {
    'south-tampa': {
        name: 'South Tampa',
        address: '123 Bayshore Blvd, Tampa, FL 33606',
        phone: '(813) 555-0100',
        email: 'tampa@adare.clinic',
        hours: [
            { day: 'Monday - Wednesday', hours: '9:00 AM – 6:00 PM' },
            { day: 'Thursday', hours: '10:00 AM – 7:00 PM' },
            { day: 'Friday', hours: '9:00 AM – 5:00 PM' },
            { day: 'Saturday', hours: 'By Appointment Only' },
            { day: 'Sunday', hours: 'Closed' }
        ],
        parking: 'Complimentary valet and private surface lot available.',
        imageSrc: '/images/location-tampa-hero.webp',
        details: 'Our flagship South Tampa location offers the full spectrum of ADARE services in a custom-designed, state-of-the-art facility.'
    },
    'st-pete': {
        name: 'St. Petersburg',
        address: '456 Beach Drive NE, St. Petersburg, FL 33701',
        phone: '(727) 555-0200',
        email: 'stpete@adare.clinic',
        hours: [
            { day: 'Monday - Wednesday', hours: '9:00 AM – 6:00 PM' },
            { day: 'Thursday', hours: '10:00 AM – 7:00 PM' },
            { day: 'Friday', hours: '9:00 AM – 5:00 PM' },
            { day: 'Saturday', hours: 'By Appointment Only' },
            { day: 'Sunday', hours: 'Closed' }
        ],
        parking: 'Validated garage parking and accessible street parking.',
        imageSrc: '/images/location-stpete-hero.webp',
        details: 'Situated on Beach Drive, our St. Pete clinic brings luxury longevity and advanced aesthetics to Pinellas County.'
    }
};

export async function generateStaticParams() {
    return [
        { slug: 'south-tampa' },
        { slug: 'st-pete' },
    ];
}

export async function generateMetadata({ params }: LocationPageProps) {
    const resolvedParams = await params;
    const data = locationData[resolvedParams.slug as keyof typeof locationData];
    if (!data) return {};

    return {
        title: `${data.name} Location · ADARE`,
        description: `Visit ADARE Longevity & Aesthetics in ${data.name}. Book your consultation today.`,
    };
}

export default async function LocationPage({ params }: LocationPageProps) {
    const resolvedParams = await params;
    const data = locationData[resolvedParams.slug as keyof typeof locationData];

    if (!data) {
        notFound();
    }

    const faqs = [
        { question: 'Do you accept walk-ins?', answer: 'To ensure every patient receives our full attention, all visits are by appointment only.' },
        { question: 'What should I bring to my first appointment?', answer: 'Please arrive 15 minutes early to finalize any intake forms. If you have recent bloodwork or medical history records, please bring them or submit them via our patient portal beforehand.' },
        { question: 'Is parking available?', answer: data.parking },
    ];

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src={data.imageSrc}
                        alt={`ADARE ${data.name}`}
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <h1>{data.name}</h1>
                    <p>{data.address}</p>
                    <div className={styles.heroActions}>
                        <Button href={`/book?location=${resolvedParams.slug}`} variant="primary">Book at {data.name}</Button>
                    </div>
                </div>
            </section>

            <section className={styles.detailsSection}>
                <div className="container">
                    <div className={styles.detailsGrid}>
                        <div className={styles.infoBlock}>
                            <h2>About This Clinic</h2>
                            <p>{data.details}</p>

                            <div className={styles.contactCard}>
                                <h3>Contact</h3>
                                <p><strong>Phone:</strong> <a href={`tel:${data.phone}`}>{data.phone}</a></p>
                                <p><strong>Email:</strong> <a href={`mailto:${data.email}`}>{data.email}</a></p>
                                <p><strong>Address:</strong><br />{data.address}</p>
                            </div>
                        </div>

                        <div className={styles.hoursBlock}>
                            <div className={styles.hoursCard}>
                                <h3>Hours of Operation</h3>
                                <ul className={styles.hoursList}>
                                    {data.hours.map((h, i) => (
                                        <li key={i}>
                                            <span className={styles.day}>{h.day}</span>
                                            <span className={styles.time}>{h.hours}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: 'var(--spacing-12)' }}>Visitor Information</h2>
                    <Accordion items={faqs} />
                </div>
            </section>

            {/* Footer CTA */}
            <section className={styles.footerCtaSection}>
                <div className="container text-center">
                    <h2 className={styles.ctaTitle}>Ready to begin?</h2>
                    <Button href={`/book?location=${resolvedParams.slug}`} variant="primary">Book your consultation</Button>
                </div>
            </section>
        </>
    );
}
