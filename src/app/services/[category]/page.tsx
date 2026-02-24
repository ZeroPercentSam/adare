import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getServiceCategory, servicesData } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import Accordion from '@/components/Accordion';
import styles from './page.module.css';

interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>
}

export async function generateStaticParams() {
    return servicesData.map((category) => ({
        category: category.slug,
    }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
    const resolvedParams = await params;
    const categoryData = getServiceCategory(resolvedParams.category);
    if (!categoryData) return {};

    return {
        title: categoryData.metaTitle,
        description: categoryData.metaDescription,
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const resolvedParams = await params;
    const categoryData = getServiceCategory(resolvedParams.category);

    if (!categoryData) {
        notFound();
    }

    // Generate generic category FAQs (simplified for example)
    const categoryFaqs = [
        { question: 'What can I expect during my first visit?', answer: 'A comprehensive consultation to understand your goals, review your history, and design a customized protocol.' },
        { question: 'How do I know which service is right for me?', answer: 'Our providers will guide you based on your clinical assessment. We recommend booking a general consultation for this category if you are unsure.' },
        { question: 'Do you offer memberships?', answer: 'Yes, our ADARE memberships provide structured value, priority access, and consistent care across all our service lines.' },
    ];

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src={categoryData.imageSrc}
                        alt={categoryData.name}
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <h1>{categoryData.name}</h1>
                    <p className={styles.heroTagline}>{categoryData.tagline}</p>
                    <p className={styles.heroIntro}>{categoryData.intro}</p>
                </div>
            </section>

            <section className={styles.servicesGridSection}>
                <div className="container">
                    <div className={styles.grid}>
                        {categoryData.services.map((service, index) => (
                            <ServiceCard
                                key={service.slug}
                                title={service.name}
                                description={service.tagline}
                                imageSrc={service.imageSrc || `/images/services/${service.slug}.webp`} // Use custom image or fallback
                                categoryLink={`/services/${categoryData.slug}/${service.slug}`}
                                bookingLink={service.bookingUrl}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>

                    <div className={styles.categoryCta}>
                        <Button href={categoryData.categoryBookingUrl} variant="primary">
                            Book a Consultation
                        </Button>
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

            {/* Category FAQs */}
            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: 'var(--spacing-12)' }}>Frequently Asked Questions</h2>
                    <Accordion items={categoryFaqs} />
                </div>
            </section>
        </>
    );
}
