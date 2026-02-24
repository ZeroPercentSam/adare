import Image from 'next/image';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import styles from './page.module.css';
import Button from '@/components/Button';

export default function ServicesDirectory() {
    return (
        <div className={styles.container}>
            {/* Standard Hero */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/longevity-hero.png"
                        alt="ADARE Services"
                        fill
                        priority
                        className={styles.heroImage}
                        sizes="100vw"
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <div className="container">
                        <span className={styles.heroLabel}>Our Offerings</span>
                        <h1 className={styles.heroTitle}>Services</h1>
                        <p className={styles.heroTagline}>Comprehensive aesthetic and longevity treatments tailored to your biology.</p>
                    </div>
                </div>
            </section>

            {/* 4 Full-Screen Category Tiles */}
            <section className={styles.heroGrid}>
                {servicesData.map((category) => (
                    <Link href={`/services/${category.slug}`} key={category.slug} className={styles.heroTile}>
                        <Image
                            src={category.imageSrc}
                            alt={category.name}
                            fill
                            className={styles.tileImage}
                        />
                        <div className={styles.tileOverlay}></div>
                        <div className={styles.tileContent}>
                            <h2>{category.name}</h2>
                            <p>{category.tagline}</p>
                            <span className={styles.exploreLink}>Explore Category</span>
                        </div>
                    </Link>
                ))}
            </section>

            {/* Directory List of All Services */}
            <section className={styles.directorySection}>
                <div className="container">
                    <div className={styles.directoryHeader}>
                        <h2>Complete Directory</h2>
                        <p>Choose your category, then book in seconds.</p>
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className={styles.servicesTable}>
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {servicesData.flatMap((category) =>
                                    category.services.map((service) => (
                                        <tr key={service.slug}>
                                            <td className={styles.serviceName}>
                                                <Link href={`/services/${category.slug}/${service.slug}`}>
                                                    {service.name}
                                                </Link>
                                            </td>
                                            <td className={styles.serviceDescription}>
                                                {service.overview.split('.')[0]}. {/* Just use the first sentence */}
                                            </td>
                                            <td className={styles.serviceActions}>
                                                <Link href={`/services/${category.slug}/${service.slug}`} className={styles.actionLink}>
                                                    Learn More
                                                </Link>
                                                <span className={styles.divider}>·</span>
                                                <Link href={service.bookingUrl} className={styles.actionLinkBook}>
                                                    Book Now
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Membership CTA */}
            <section className={styles.membershipSection}>
                <div className="container text-center">
                    <h2 className={styles.membershipTitle}>Consistent care. Elevated value.</h2>
                    <Button href="/membership" variant="secondary">Explore Membership</Button>
                </div>
            </section>
        </div>
    );
}
