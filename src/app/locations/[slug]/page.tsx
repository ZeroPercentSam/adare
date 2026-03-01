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

import Script from 'next/script';

// Mock database for standard locations
const locationData = {
    'south-tampa': {
        name: 'South Tampa',
        address: '123 Bayshore Blvd, Tampa, FL 33606',
        phone: '(813) 555-0100',
        email: 'tampa@adare.clinic',
        geo: { lat: 27.9351, lon: -82.4789 },
        hours: [
            { day: 'Monday - Wednesday', hours: '9:00 AM – 6:00 PM' },
            { day: 'Thursday', hours: '10:00 AM – 7:00 PM' },
            { day: 'Friday', hours: '9:00 AM – 5:00 PM' },
            { day: 'Saturday', hours: 'By Appointment Only' },
            { day: 'Sunday', hours: 'Closed' }
        ],
        parking: 'Complimentary valet and private surface lot available.',
        imageSrc: '/images/location-tampa-hero.webp',
        details: 'Our flagship South Tampa location offers the full spectrum of ADARE services in a custom-designed, state-of-the-art facility. Nestled steps from Bayshore Boulevard, our clinic serves the discerning residents of Hyde Park, Davis Islands, Harbour Island, and Palma Ceia. Expect unparalleled privacy, elevated design, and a dedicated team committed to your optimization.',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112702.04692795328!2d-82.5510688663806!3d27.935930602016258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0x66f6fb4ff5f048d8!2sSouth%20Tampa%2C%20Tampa%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
        gallery: ['/images/clinic-tampa-1.jpg', '/images/clinic-tampa-2.jpg', '/images/clinic-tampa-3.jpg']
    },
    'st-pete': {
        name: 'St. Petersburg',
        address: '456 Beach Drive NE, St. Petersburg, FL 33701',
        phone: '(727) 555-0200',
        email: 'stpete@adare.clinic',
        geo: { lat: 27.7731, lon: -82.6400 },
        hours: [
            { day: 'Monday - Wednesday', hours: '9:00 AM – 6:00 PM' },
            { day: 'Thursday', hours: '10:00 AM – 7:00 PM' },
            { day: 'Friday', hours: '9:00 AM – 5:00 PM' },
            { day: 'Saturday', hours: 'By Appointment Only' },
            { day: 'Sunday', hours: 'Closed' }
        ],
        parking: 'Validated garage parking and accessible street parking.',
        imageSrc: '/images/location-stpete-hero.webp',
        details: 'Situated on the iconic Beach Drive, our St. Pete clinic brings luxury longevity and advanced aesthetics to the heart of Pinellas County. Conveniently serving Downtown St. Pete, Old Northeast, and Snell Isle, this location features world-class providers in an environment designed for absolute serenity and performance.',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0620138258287!2d-82.633423!3d27.777086099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e19a6b185077%3A0x5dfdf264c8d55169!2sBeach%20Dr%20NE%2C%20St.%20Petersburg%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
        gallery: ['/images/clinic-stpete-1.jpg', '/images/clinic-stpete-2.jpg', '/images/clinic-stpete-3.jpg']
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
        title: `ADARE Clinic ${data.name} | Longevity & Aesthetics`,
        description: `Visit ADARE in ${data.name}. Expert longevity and aesthetic protocols serving ${resolvedParams.slug === 'south-tampa' ? 'South Tampa, Hyde Park, and Davis Islands' : 'Downtown St. Pete and Old Northeast'}.`,
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
            <Script id={`schema-${resolvedParams.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MedicalBusiness",
                    "name": `ADARE Longevity & Aesthetics - ${data.name}`,
                    "image": `https://adare.clinic${data.imageSrc}`,
                    "@id": `https://adare.clinic/locations/${resolvedParams.slug}`,
                    "url": `https://adare.clinic/locations/${resolvedParams.slug}`,
                    "telephone": data.phone,
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": data.address.split(',')[0],
                        "addressLocality": data.name,
                        "addressRegion": "FL",
                        "postalCode": data.address.match(/\d{5}/)?.[0] || "",
                        "addressCountry": "US"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": data.geo.lat,
                        "longitude": data.geo.lon
                    },
                    "openingHoursSpecification": data.hours.map(h => {
                        let days = [];
                        if (h.day.includes('-')) {
                            // Simplified for demo
                            days = ["Monday", "Tuesday", "Wednesday"];
                        } else {
                            days = [h.day];
                        }
                        return {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": days,
                            "opens": h.hours === 'Closed' ? "00:00" : "09:00",
                            "closes": h.hours === 'Closed' ? "00:00" : "18:00"
                        };
                    })
                })
            }} />
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
                    <div className="container">
                        <span className={styles.heroLabel}>Location</span>
                        <h1 className={styles.heroTitle}>{data.name}</h1>
                        <p className={styles.heroTagline}>{data.address}</p>
                        <div className={styles.heroActions}>
                            <Button href={`/book?location=${resolvedParams.slug}`} variant="primary">Book at {data.name}</Button>
                        </div>
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

                            <div className={styles.mapContainer} style={{ marginTop: 'var(--spacing-8)' }}>
                                <iframe
                                    src={data.mapUrl}
                                    width="100%"
                                    height="300"
                                    style={{ border: 0, borderRadius: 'var(--radius-sm)' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
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

                            {/* Google Reviews Placeholder Widget */}
                            <div className={styles.reviewsWidget} style={{ marginTop: 'var(--spacing-8)' }}>
                                <h3>Patient Experiences</h3>
                                <div className={styles.reviewWidgetStars} style={{ color: 'var(--color-accent)' }}>★★★★★</div>
                                <p><strong>4.9/5</strong> based on 120+ Google Reviews at this location.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className={styles.gallerySection}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: 'var(--spacing-12)' }}>Clinic Interior</h2>
                    <div className={styles.galleryGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-6)' }}>
                        {data.gallery.map((img, i) => (
                            <div key={i} className={styles.galleryImageWrapper}>
                                <div style={{ width: '100%', paddingTop: '75%', position: 'relative', background: '#333' }}>
                                    {/* Placeholder styling instead of actual missing images for now */}
                                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontFamily: 'var(--font-mono)' }}>
                                        [Interior Photo {i + 1}]
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* FAQ Section */}
            < section className={styles.faqSection} >
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: 'var(--spacing-12)' }}>Visitor Information</h2>
                    <Accordion items={faqs} />
                </div>
            </section >

            {/* Footer CTA */}
            < section className={styles.footerCtaSection} >
                <div className="container text-center">
                    <h2 className={styles.ctaTitle}>Ready to begin?</h2>
                    <Button href={`/book?location=${resolvedParams.slug}`} variant="primary">Book your consultation</Button>
                </div>
            </section >
        </>
    );
}
