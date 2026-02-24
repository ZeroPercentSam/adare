import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { principles } from '@/data/principles';
import styles from './page.module.css';
import Button from '@/components/Button';
import Accordion from '@/components/Accordion';

export const generateStaticParams = async () => {
    return principles.map((p) => ({
        slug: p.slug,
    }));
};

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const principle = principles.find((p) => p.slug === slug);
    if (!principle) return { title: 'Not Found' };

    return {
        title: `${principle.title} · ADARE Longevity & Aesthetics`,
        description: principle.tagline,
    };
};

export default async function PrinciplePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const principle = principles.find((p) => p.slug === slug);

    if (!principle) {
        notFound();
    }

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroImageContainer}>
                    <Image
                        src={principle.heroImage}
                        alt={principle.title}
                        fill
                        priority
                        className={styles.heroImage}
                        sizes="100vw"
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <div className="container">
                        <span className={styles.heroLabel}>Core Principle</span>
                        <h1 className={styles.heroTitle}>{principle.title}</h1>
                        <p className={styles.heroTagline}>{principle.tagline}</p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.mainContent}>
                <div className="container">
                    <div className={styles.contentGrid}>
                        <div className={styles.textContent}>
                            <h2 className={styles.sectionTitle}>The Philosophy</h2>
                            <p className={styles.leadParagraph}>{principle.description}</p>

                            <div className={styles.detailText}>
                                {principle.detailParagraphs.map((para, idx) => (
                                    <p key={idx}>{para}</p>
                                ))}
                            </div>
                        </div>

                        <div className={styles.faqSidebar}>
                            <div className={styles.faqCard}>
                                <h3>Common Questions</h3>
                                <Accordion items={principle.faqs} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Innovative Quote/Callout Section */}
            <section className={styles.calloutSection}>
                <div className="container text-center">
                    <h2 className={styles.calloutText}>
                        "We refuse to separate brilliant aesthetics from deep internal health. They are two sides of the exact same coin."
                    </h2>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2>Experience the Difference</h2>
                    <p>Ready to optimize your health with {principle.title.toLowerCase()}?</p>
                    <div className={styles.ctaActions}>
                        <Button href="/book" variant="primary">Book a Consultation</Button>
                        <Button href="/" variant="outline">Return Home</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
