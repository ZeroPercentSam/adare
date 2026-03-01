import Image from 'next/image';
import Link from 'next/link';
import styles from './ProviderSection.module.css';

export default function ProviderSection() {
    return (
        <section className={styles.sectionProvider}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Meet Your Providers</h2>
                    <p className={styles.subtitle}>Precision medicine delivered by industry-leading clinical experts.</p>
                </div>

                <div className={styles.grid}>
                    {/* Placeholder Provider 1 */}
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/placeholder-provider-1.jpg"
                                alt="Provider Name"
                                fill
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.name}>Dr. Sarah Jenkins, MD</h3>
                            <span className={styles.credentials}>Medical Director &middot; Longevity Specialist</span>
                            <p className={styles.philosophy}>"True aesthetic refinement begins at the cellular level."</p>
                            <Link href="/about" className={styles.link}>Read Full Bio &rarr;</Link>
                        </div>
                    </div>

                    {/* Placeholder Provider 2 */}
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/placeholder-provider-2.jpg"
                                alt="Provider Name"
                                fill
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.name}>Michael Chen, PA-C</h3>
                            <span className={styles.credentials}>Lead Injector &middot; Aesthetic Expert</span>
                            <p className={styles.philosophy}>"We balance artistic vision with precise anatomical knowledge."</p>
                            <Link href="/about" className={styles.link}>Read Full Bio &rarr;</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
