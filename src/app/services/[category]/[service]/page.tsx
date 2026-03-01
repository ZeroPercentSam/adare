import { notFound } from 'next/navigation';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { getServiceCategory, getServiceDetail, servicesData } from '@/data/services';
import Button from '@/components/Button';
import Accordion from '@/components/Accordion';
import ServiceCard from '@/components/ServiceCard';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
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
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": serviceData.faqs.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                })
            }} />
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src={serviceData.imageSrc || `/images/services/${serviceData.slug}-hero.webp`}
                        alt={serviceData.name}
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <div className="container">
                        <span className={styles.heroLabel}>Service Protocol</span>
                        <h1 className={styles.heroTitle}>{serviceData.name}</h1>
                        <p className={styles.heroTagline}>{serviceData.tagline}</p>
                        <div className={styles.heroActions}>
                            <Button href={serviceData.bookingUrl} variant="primary">Book This Service</Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.protocolSection}>
                <div className="container">
                    <div className={styles.protocolGrid}>

                        {/* LEFT COLUMN: The Protocol, Science, Experience */}
                        <div className={styles.protocolMain}>

                            <div className={styles.sectionBlock}>
                                <h2>The Protocol</h2>
                                <div className={styles.protocolBoxes}>
                                    {serviceData.options && serviceData.options.length > 0 ? (
                                        serviceData.options.map((opt, i) => (
                                            <div key={i} className={styles.protocolBox}>
                                                <div className={styles.checkIcon}>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                </div>
                                                <span>{opt.name}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <div className={styles.protocolBox}>
                                            <div className={styles.checkIcon}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            </div>
                                            <span>{serviceData.name} Core Protocol</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className={styles.sectionBlock}>
                                <h2>The Science</h2>
                                <div className={styles.scienceText} dangerouslySetInnerHTML={{ __html: serviceData.overview }} />
                            </div>

                            <div className={styles.sectionBlock}>
                                <h2>The Experience</h2>
                                <div className={styles.experienceList}>
                                    {serviceData.expectations.map((step, i) => (
                                        <div key={i} className={styles.experienceItem}>
                                            <div className={styles.experienceNumber}>{i + 1}</div>
                                            <p>{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* RIGHT COLUMN: Outcomes, Ideal Candidate, Contraindications, CTA */}
                        <aside className={styles.protocolSidebar}>

                            <div className={styles.outcomesBlock}>
                                <h2>Expected Outcomes</h2>
                                <div className={styles.outcomeItem}>
                                    <div className={styles.outcomeNumber}>01</div>
                                    <div className={styles.outcomeContent}>
                                        <h4>Primary Result</h4>
                                        <p>{serviceData.resultsAndTiming}</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.sidebarBox}>
                                <h3>Ideal Candidate</h3>
                                <p>{serviceData.bestFor.join(', ')}.</p>
                            </div>

                            <div className={styles.sidebarBox}>
                                <h3>Contraindications</h3>
                                <p>Active infection, certain autoimmune conditions, pregnancy, or known allergies to components. Consult with our medical team to determine if this protocol aligns with your current health status and medical history.</p>
                            </div>

                            <div className={styles.ctaBox}>
                                <h3>Is this right for you?</h3>
                                <p>Every protocol begins with a comprehensive evaluation to ensure it aligns with your unique physiology and goals.</p>
                                <div className={styles.ctaButtonWrapper}>
                                    <Link href={serviceData.bookingUrl} className={styles.ctaButton}>
                                        INQUIRE ABOUT THIS PROTOCOL
                                    </Link>
                                </div>
                            </div>

                        </aside>
                    </div>
                </div>
            </section>

            {/* Before & After Gallery */}
            <BeforeAfterGallery />

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
                                    imageSrc={pairService.imageSrc || `/images/services/${pairService.slug}.webp`}
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
