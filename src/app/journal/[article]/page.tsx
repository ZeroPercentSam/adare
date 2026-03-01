import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getArticleBySlug, journalArticles } from '@/data/journal';
import Button from '@/components/Button';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: { article: string } }) {
    const articleData = getArticleBySlug(params.article);
    if (!articleData) return { title: 'Not Found' };

    return {
        title: `${articleData.title} | ADARE Journal`,
        description: articleData.excerpt,
        openGraph: {
            title: articleData.title,
            description: articleData.excerpt,
            images: [articleData.imageSrc],
            type: 'article',
        }
    };
}

export default function ArticlePage({ params }: { params: { article: string } }) {
    const articleData = getArticleBySlug(params.article);

    if (!articleData) {
        notFound();
    }

    // Get 3 related articles (exclude current one)
    const relatedArticles = journalArticles
        .filter(a => a.slug !== articleData.slug)
        .slice(0, 3);

    return (
        <article className={styles.articlePage}>
            {/* Header / Featured Image */}
            <header className={styles.header}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <span className={styles.categoryBadge}>{articleData.category}</span>
                    <h1 className={styles.title}>{articleData.title}</h1>

                    <div className={styles.metaRow}>
                        <div className={styles.authorInfo}>
                            <div className={styles.authorAvatar}>
                                <Image src={articleData.authorImage} alt={articleData.author} fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className={styles.authorNames}>
                                <strong>{articleData.author}</strong>
                                <span>{articleData.authorRole}</span>
                            </div>
                        </div>
                        <div className={styles.publishInfo}>
                            <span>{articleData.publishDate}</span>
                            <span>&bull;</span>
                            <span>{articleData.readTime}</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Featured Image */}
            <div className={styles.heroImageContainer}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div className={styles.heroImageWrapper}>
                        <Image
                            src={articleData.imageSrc}
                            alt={articleData.title}
                            fill
                            priority
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>

            {/* Content & Social Share */}
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', gap: 'var(--spacing-8)' }}>
                {/* Social Share Sidebar (Desktop) */}
                <aside className={styles.socialSidebar}>
                    <p className={styles.shareTitle}>Share</p>
                    <div className={styles.shareButtons}>
                        <button aria-label="Share on LinkedIn" className={styles.shareBtn}>in</button>
                        <button aria-label="Share on Twitter" className={styles.shareBtn}>X</button>
                        <button aria-label="Share on Facebook" className={styles.shareBtn}>f</button>
                        <button aria-label="Copy Link" className={styles.shareBtn}>🔗</button>
                    </div>
                </aside>

                {/* Main Content Body */}
                <div className={styles.contentBody} dangerouslySetInnerHTML={{ __html: articleData.content }} />
            </div>

            {/* Inline CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2>Ready to Optimize Your Health?</h2>
                    <p>Schedule a comprehensive consultation with our medical team to design a targeted protocol based on your unique biology.</p>
                    <Button href="/book" variant="primary">Book Your Consultation</Button>
                </div>
            </section>

            {/* Related Articles */}
            <section className={styles.relatedSection}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h3 style={{ marginBottom: 'var(--spacing-8)', textAlign: 'center' }}>Related Insights</h3>
                    <div className={styles.relatedGrid}>
                        {relatedArticles.map((rel) => (
                            <Link key={rel.slug} href={`/journal/${rel.slug}`} className={styles.relatedCard}>
                                <div className={styles.relatedImage}>
                                    <Image src={rel.imageSrc} alt={rel.title} fill style={{ objectFit: 'cover' }} />
                                </div>
                                <h4>{rel.title}</h4>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </article>
    );
}
