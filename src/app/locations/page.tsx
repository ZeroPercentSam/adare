import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Locations · South Tampa & St. Pete · ADARE',
    description: 'Visit ADARE in South Tampa or St. Petersburg. Book your consultation today.',
};

export default function LocationsDirectory() {
    const locations = [
        {
            slug: 'south-tampa',
            name: 'South Tampa',
            address: '123 Bayshore Blvd, Tampa, FL 33606',
            phone: '(813) 555-0100',
            imageSrc: '/images/location-tampa-hero.webp',
        },
        {
            slug: 'st-pete',
            name: 'St. Petersburg',
            address: '456 Beach Drive NE, St. Petersburg, FL 33701',
            phone: '(727) 555-0200',
            imageSrc: '/images/location-stpete-hero.webp',
        }
    ];

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Locations</h1>
                    <p>Find your nearest ADARE Longevity & Aesthetics clinic in Tampa Bay.</p>
                </div>
            </section>

            <section className={styles.locationsSection}>
                <div className="container">
                    <div className={styles.locationsGrid}>
                        {locations.map((loc) => (
                            <div key={loc.slug} className={styles.locationCard}>
                                <Link href={`/locations/${loc.slug}`} className={styles.imageWrapperLink}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={loc.imageSrc}
                                            alt={`ADARE ${loc.name}`}
                                            fill
                                            className={styles.locationImage}
                                        />
                                    </div>
                                </Link>
                                <div className={styles.locationInfo}>
                                    <h2>{loc.name}</h2>
                                    <p className={styles.address}>{loc.address}</p>
                                    <p className={styles.phone}>{loc.phone}</p>
                                    <div className={styles.actions}>
                                        <Button href={`/locations/${loc.slug}`} variant="outline">View Details</Button>
                                        <Button href={`/book?location=${loc.slug}`} variant="primary">Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className={styles.footerCtaSection}>
                <div className="container text-center">
                    <h2>Your next decade starts here.</h2>
                    <Button href="/book" variant="primary">Book a Consultation</Button>
                </div>
            </section>
        </>
    );
}
