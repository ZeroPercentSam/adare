import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import TrustBar from '@/components/TrustBar';
import SplitLocations from '@/components/SplitLocations';
import styles from '../page.module.css';

export const metadata = {
    title: 'Medical Weight Loss in Tampa Bay | Semaglutide | ADARE',
    description: 'Transform your body with clinically managed GLP-1 (Semaglutide) weight loss programs in Tampa Bay. Sustainable fat loss overseen by experts.',
};

export default function MedicalWeightLossTampaBay() {
    return (
        <>
            <section className={styles.hero} style={{ minHeight: '60vh' }}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/services/medical-weight-loss.jpg"
                        alt="Medical Weight Loss in Tampa Bay"
                        fill
                        priority
                        className={styles.heroImage}
                        style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <h1 className={styles.heroTitle}>Medical Weight Loss in Tampa Bay</h1>
                        <p className={styles.heroTagline}>GLP-1 precision. Metabolic reset. Sustainable results.</p>
                        <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
                            <Button href="/book" variant="primary">Schedule Consultation</Button>
                        </div>
                    </div>
                </div>
            </section>

            <TrustBar />

            <section style={{ padding: 'var(--spacing-16) 0' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-6)' }}>Clinically Managed Fat Loss for Tampa Bay</h2>
                    <p style={{ color: 'var(--color-muted-text)', fontSize: 'var(--text-lg)', marginBottom: 'var(--spacing-8)' }}>
                        Serving the entire Tampa Bay area from our dual luxury clinic locations, ADARE offers the
                        highest standard of medical weight loss utilizing FDA-cleared GLP-1 medications like
                        Semaglutide and Tirzepatide.
                    </p>
                    <p style={{ color: 'var(--color-muted-text)', fontSize: 'var(--text-lg)', marginBottom: 'var(--spacing-8)' }}>
                        Our programs are not just about reaching a number on a scale; they are about resetting your
                        metabolism, eliminating food noise, and preserving lean muscle mass while systematically burning
                        fat. Accompanied by close medical supervision and body composition tracking.
                    </p>
                    <Button href="/services/longevity-metabolic-wellness/medical-weight-loss" variant="outline">Learn More About the Program</Button>
                </div>
            </section>

            <SplitLocations />
        </>
    );
}
