import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import TrustBar from '@/components/TrustBar';
import SplitLocations from '@/components/SplitLocations';
import styles from '../page.module.css';

export const metadata = {
    title: 'NAD+ IV Therapy in Clearwater & Tampa | Cellular Repair | ADARE',
    description: 'Eradicate deep fatigue and brain fog with high-dose NAD+ IV infusions available to residents of Clearwater and the Tampa Bay region.',
};

export default function NADTherapyClearwater() {
    return (
        <>
            <section className={styles.hero} style={{ minHeight: '60vh' }}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/services/nad-therapy.jpg"
                        alt="NAD+ IV Therapy in Clearwater"
                        fill
                        priority
                        className={styles.heroImage}
                        style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <h1 className={styles.heroTitle}>NAD+ IV Therapy Near Clearwater</h1>
                        <p className={styles.heroTagline}>Eradicate fatigue. Clear brain fog. Fuel your mitochondria.</p>
                        <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
                            <Button href="/book" variant="primary">Book Your IV Therapy</Button>
                        </div>
                    </div>
                </div>
            </section>

            <TrustBar />

            <section style={{ padding: 'var(--spacing-16) 0' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-6)' }}>High-Dose NAD+ Infusions for the Gulf Coast</h2>
                    <p style={{ color: 'var(--color-muted-text)', fontSize: 'var(--text-lg)', marginBottom: 'var(--spacing-8)' }}>
                        Easily accessible from Clearwater, Belleair, and the Pinellas beaches, ADARE's clinical IV lounge
                        provides the ultimate environment for cellular restoration. Our high-dose Nicotinamide Adenine Dinucleotide
                        (NAD+) drips are the gold standard for mitochondrial repair.
                    </p>
                    <p style={{ color: 'var(--color-muted-text)', fontSize: 'var(--text-lg)', marginBottom: 'var(--spacing-8)' }}>
                        Whether you are recovering from heavy travel, reversing severe post-viral exhaustion, or simply
                        biohacking your cognitive performance, our registered nurses will guide your infusion comfortably
                        and safely.
                    </p>
                    <Button href="/services/longevity-metabolic-wellness/nad-therapy" variant="outline">Discover NAD+ Therapy</Button>
                </div>
            </section>

            <SplitLocations />
        </>
    );
}
