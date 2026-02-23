import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getServiceCategory, getServiceDetail, servicesData } from '@/data/services';
import Button from '@/components/Button';
import Accordion from '@/components/Accordion';
import ServiceCard from '@/components/ServiceCard';
import styles from './page.module.css';

interface ServicePageProps {
    params: Promise<{
        category: string;
        service: string;
    }>
}

export async function generateStaticParams() {
    const paths: { category: string; service: string }[] = [];

    servicesData.forEach((category) => {
        category.services.forEach((service) => {
            paths.push({
                category: category.slug,
                service: service.slug,
            });
        });
    });

    return paths;
}

export async function generateMetadata({ params }: ServicePageProps) {
    const resolvedParams = await params;
    const serviceData = getServiceDetail(resolvedParams.category, resolvedParams.service);
    if (!serviceData) return {};

    return {
        title: serviceData.metaTitle,
        description: serviceData.metaDescription,
    };
}

export default async function ServicePage({ params }: ServicePageProps) {
    const resolvedParams = await params;
    const { category, service } = resolvedParams;

    const categoryData = getServiceCategory(category);
    const serviceData = getServiceDetail(category, service);

    if (!categoryData || !serviceData) {
        notFound();
    }

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src={`/images/services/${serviceData.slug}-hero.webp`}
                        alt={serviceData.name}
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <h1>{serviceData.name}</h1>
                    <p className={styles.heroTagline}>{serviceData.tagline}</p>
                    <div className={styles.heroActions}>
                        <Button href={serviceData.bookingUrl} variant="primary">Book Now</Button>
                    </div>
                </div>
            </section>

            <section className={styles.detailsSection}>
                <div className="container">
                    <div className={styles.contentGrid}>
                        <div className={styles.mainContent}>
                            <div className={styles.overviewBlock}>
                                <h2>Overview</h2>
                                <p>{serviceData.overview}</p>
                            </div>

                            {serviceData.options && (
                                <div className={styles.optionsBlock}>
                                    <h3>Options</h3>
                                    <ul className={styles.elegantList}>
                                        {serviceData.options.map((opt, i) => (
                                            <li key={i}>{opt.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className={styles.expectationsBlock}>
                                <h2>What to Expect</h2>
                                <ol className={styles.numberedList}>
                                    {serviceData.expectations.map((step, i) => (
                                        <li key={i}>{step}</li>
                                    ))}
                                </ol>
                            </div>

                            <div className={styles.resultsBlock}>
                                <h2>Results & Timing</h2>
                                <p>{serviceData.resultsAndTiming}</p>
                            </div>
                        </div>

                        <aside className={styles.sidebar}>
                            <div className={styles.bestForCard}>
                                <h3>Best For</h3>
                                <ul className={styles.elegantList}>
                                    {serviceData.bestFor.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Pair With Section */}
            <section className={styles.pairWithSection}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: 'var(--spacing-12)' }}>Complete Your Protocol</h2>
                    <div className={styles.pairWithGrid}>
                        {serviceData.pairWith.map((pair, index) => {
                            const pairService = getServiceDetail(pair.categorySlug, pair.slug);
                            if (!pairService) return null;
                            return (
                                <ServiceCard
                                    key={pair.slug}
                                    title={pairService.name}
                                    description={pairService.tagline}
                                    imageSrc={`/images/services/${pairService.slug}.webp`}
                                    categoryLink={`/services/${pair.categorySlug}/${pair.slug}`}
                                    bookingLink={pairService.bookingUrl}
                                    delay={index * 0.1}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: 'var(--spacing-12)' }}>Frequently Asked Questions</h2>
                    <Accordion items={serviceData.faqs} />
                </div>
            </section>

            {/* Footer CTA & Membership */}
            <section className={styles.footerCtaSection}>
                <div className="container text-center">
                    <h2 className={styles.membershipTitle}>Consistent care. Elevated value.</h2>
                    <p className={styles.membershipBody} style={{ marginBottom: 'var(--spacing-8)' }}>
                        Choose a membership built for consistency, progress, and priority access.
                    </p>
                    <div className={styles.ctaActions}>
                        <Button href="/membership" variant="secondary">Explore Membership</Button>
                        <Button href={serviceData.bookingUrl} variant="primary">Book This Service</Button>
                    </div>
                </div>
            </section>
        </>
    );
}
