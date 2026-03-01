import Image from 'next/image';
import Link from 'next/link';
import { journalArticles } from '@/data/journal';
import Button from '@/components/Button';
import styles from './page.module.css';

export const metadata = {
    title: 'The ADARE Journal | Medical Aesthetics & Longevity',
    description: 'Expert insights on longevity, aesthetics, hormone optimization, and cellular medicine from the medical team at ADARE Tampa Bay.',
};

export default function JournalIndex() {
    const featuredArticle = journalArticles[0];
    const remainingArticles = journalArticles.slice(1);

    const categories = ['All', 'Aesthetics Education', 'Longevity & Science', 'Hormone Health', 'Recovery & Performance', 'ADARE Life'];

    return (
        <div style={{ paddingTop: '80px', paddingBottom: '0' }}>
            {/* Header */}
            <header className={styles.journalHeader}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--spacing-4)' }}>The ADARE Journal</h1>
                    <p style={{ color: 'var(--color-muted-text)', fontSize: 'var(--text-lg)', maxWidth: '600px', margin: '0 auto' }}>
                        Medical insights, clinic updates, and inside looks at the science of longevity and aesthetics.
                    </p>
                </div>
            </header>

            {/* Email Capture Section */}
            <section className={styles.subscribeSection}>
                <div className="container">
                    <div className={styles.subscribeCard}>
                        <h2>Subscribe to The Protocol</h2>
                        <p>Our monthly intelligence brief delivering the latest in cellular aging, peptide science, and aesthetic refinement directly to your inbox.</p>
                        <form className={styles.subscribeForm} action="#">
                            <input type="email" placeholder="Enter your email address" required className={styles.emailInput} />
                            <Button type="submit" variant="primary">Subscribe</Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Featured Article */}
            <section className="container" style={{ marginBottom: 'var(--spacing-16)' }}>
                <h2 className={styles.sectionHeading}>Featured</h2>
                <div className={styles.featuredCard}>
                    <div className={styles.featuredImageWrapper}>
                        <Link href={`/journal/${featuredArticle.slug}`}>
                            <Image
                                src={featuredArticle.imageSrc}
                                alt={featuredArticle.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </Link>
                    </div>
                    <div className={styles.featuredContent}>
                        <span className={styles.categoryBadge}>{featuredArticle.category}</span>
                        <h3 className={styles.featuredTitle}>
                            <Link href={`/journal/${featuredArticle.slug}`}>{featuredArticle.title}</Link>
                        </h3>
                        <p className={styles.featuredExcerpt}>{featuredArticle.excerpt}</p>
                        <div className={styles.meta}>
                            <span>{featuredArticle.readTime}</span>
                            <span>&bull;</span>
                            <span>{featuredArticle.publishDate}</span>
                        </div>
                        <div style={{ marginTop: 'var(--spacing-6)' }}>
                            <Button href={`/journal/${featuredArticle.slug}`} variant="outline">Read Article</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="container" style={{ marginBottom: 'var(--spacing-12)' }}>
                <div className={styles.categoryNav}>
                    {categories.map((cat, idx) => (
                        <button key={idx} className={`${styles.categoryBtn} ${idx === 0 ? styles.activeCategory : ''}`}>
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Article Grid */}
            <section className="container" style={{ paddingBottom: 'var(--spacing-24)' }}>
                <div className={styles.articleGrid}>
                    {remainingArticles.map((article) => (
                        <article key={article.slug} className={styles.articleCard}>
                            <Link href={`/journal/${article.slug}`} className={styles.imageLink}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={article.imageSrc}
                                        alt={article.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </Link>
                            <div className={styles.articleContent}>
                                <span className={styles.categoryBadge}>{article.category}</span>
                                <h2 className={styles.title}>
                                    <Link href={`/journal/${article.slug}`}>{article.title}</Link>
                                </h2>
                                <p className={styles.excerpt}>{article.excerpt}</p>
                                <div className={styles.meta}>
                                    <span>{article.readTime}</span>
                                    <span>&bull;</span>
                                    <span>{article.publishDate}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
