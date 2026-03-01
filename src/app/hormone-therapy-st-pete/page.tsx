import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import TrustBar from '@/components/TrustBar';
import SplitLocations from '@/components/SplitLocations';
import styles from '../page.module.css';

export const metadata = {
    title: 'Hormone Optimization for Men & Women | St. Pete | ADARE',
    description: 'TRT and bioidentical hormone therapy (BHRT) in St. Petersburg. Reclaim your energy and focus with lab-guided optimization at ADARE.',
};

export default function HormoneTherapyStPete() {
    return (
        <>
            <section className={styles.hero} style={{ minHeight: '60vh' }}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/services/hormone-optimization.jpg"
                        alt="Hormone Therapy in St. Pete"
                        fill
                        priority
                        className={styles.heroImage}
                        style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <h1 className={styles.heroTitle}>Hormone Therapy in St. Pete</h1>
                        <p className={styles.heroTagline}>TRT & BHRT. Lab-Guided precision. Restored vitality.</p>
                        <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
                            <Button href="/book" variant="primary">Book St. Pete</Button>
                        </div>
                    </div>
                </div>
            </section>

            <TrustBar />

            <section style={{ padding: 'var(--spacing-16) 0' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-6)' }}>Bioidentical Hormone Optimization in St. Petersburg</h2>
                    <p style={{ color: 'var(--color-muted-text)', fontSize: 'var(--text-lg)', marginBottom: 'var(--spacing-8)' }}>
                        Conveniently located for residents of Downtown St. Pete, Beach Drive, and Snell Isle,
                        ADARE brings advanced cellular medicine to Pinellas County. Our evidence-based approach to
                        hormone replacement therapy (HRT) rejects the "one-size-fits-all" model.
                    </p>
                    <p style={{ color: 'var(--color-muted-text)', fontSize: 'var(--text-lg)', marginBottom: 'var(--spacing-8)' }}>
                        Whether you are navigating perimenopause, seeking testosterone optimization (TRT), or
                        healing from metabolic burnout, our St. Pete clinical team utilizes advanced blood panels
                        to dial in your perfect biological baseline.
                    </p>
                    <Button href="/services/longevity-metabolic-wellness/hormone-optimization" variant="outline">Explore Hormone Optimization</Button>
                </div>
            </section>

            <SplitLocations />
        </>
    );
}
