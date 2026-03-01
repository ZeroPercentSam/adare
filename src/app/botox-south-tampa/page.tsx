import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import TrustBar from '@/components/TrustBar';
import SplitLocations from '@/components/SplitLocations';
import styles from '../page.module.css';

export const metadata = {
    title: 'Botox & Neurotoxins in South Tampa | Expert Injectors | ADARE',
    description: 'Expert Botox and Dysport injectors in South Tampa. Soften wrinkles and preserve your natural expression with precision neurotoxins at ADARE.',
};

export default function BotoxSouthTampa() {
    return (
        <>
            <section className={styles.hero} style={{ minHeight: '60vh' }}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/services/neurotoxins.jpg"
                        alt="Botox in South Tampa"
                        fill
                        priority
                        className={styles.heroImage}
                        style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <h1 className={styles.heroTitle}>Botox & Neurotoxins in South Tampa</h1>
                        <p className={styles.heroTagline}>Expert Injectors. Natural Results. Preserving Your Expression.</p>
                        <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
                            <Button href="/book" variant="primary">Book South Tampa</Button>
                        </div>
                    </div>
                </div>
            </section>

            <TrustBar />

            <section style={{ padding: 'var(--spacing-16) 0' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-6)' }}>The Premier Destination for Botox in South Tampa</h2>
                    <p style={{ color: 'var(--color-muted-text)', fontSize: 'var(--text-lg)', marginBottom: 'var(--spacing-8)' }}>
                        ADARE Longevity & Aesthetics brings precision aesthetic medicine to the heart of South Tampa.
                        Our approach to Botox, Dysport, and Xeomin is conservative and calculated. We reject the "frozen"
                        look in favor of an elegant, rested appearance that enhances your natural bone structure.
                    </p>
                    <p style={{ color: 'var(--color-muted-text)', fontSize: 'var(--text-lg)', marginBottom: 'var(--spacing-8)' }}>
                        Whether you reside in Hyde Park, Davis Islands, or Palma Ceia, our South Tampa clinic offers
                        a private, high-touch environment for all your injectables and anti-aging needs.
                    </p>
                    <Button href="/services/advanced-aesthetics/neurotoxins" variant="outline">Learn More About Neurotoxins</Button>
                </div>
            </section>

            <SplitLocations />
        </>
    );
}
