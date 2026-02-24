import Image from 'next/image';
import Link from 'next/link';
import styles from '../demographic.module.css';
import { IconHarmony, IconRadiance, IconVitality, IconEmotional, IconPowerhouse, IconMatriarch, IconAgeless } from '@/components/GlossyIcons';
import Button from '@/components/Button';

export const metadata = {
    title: 'For Women · Female Optimization Protocols · ADARE',
    description: 'Protocols designed for female optimization. Explore precision therapies for hormonal harmony, radiance, emotional wellness, and longevity at ADARE Tampa Bay.',
};

const PILLARS = [
    {
        title: 'Hormonal Harmony',
        description: 'Addressing menopause, thyroid function, and metabolic health with precision.',
        icon: <IconHarmony size={32} />
    },
    {
        title: 'Radiance',
        description: 'Inside-out aesthetic strategies combining peptides, gut health, and regenerative skin therapies.',
        icon: <IconRadiance size={32} />
    },
    {
        title: 'Vitality',
        description: 'Combat fatigue and optimize sleep architecture for sustained energy.',
        icon: <IconVitality size={32} />
    },
    {
        title: 'Emotional Wellness',
        description: 'Neurotransmitter balancing to support mood, stress resilience, and clarity.',
        icon: <IconEmotional size={32} />
    }
];

const DEMOGRAPHICS = [
    {
        title: 'The Powerhouse',
        description: 'Female founders and leaders balancing high-pressure careers with biological optimization.',
        icon: <IconPowerhouse size={48} />
    },
    {
        title: 'The Matriarch',
        description: 'Mothers navigating post-partum recovery or prioritizing energy to keep up with a growing family.',
        icon: <IconMatriarch size={48} />
    },
    {
        title: 'The Ageless',
        description: 'Women navigating perimenopause or menopause who refuse to accept decline as a "normal" part of aging.',
        icon: <IconAgeless size={48} />
    }
];

const SERVICES = [
    {
        title: 'Bioidentical Hormone Replacement (BHRT)',
        description: 'As women age—specifically entering perimenopause and menopause—fluctuations in estrogen, progesterone, and testosterone rapidly cascade into weight gain, night sweats, profound fatigue, and bone density loss. We use precision bioidentical hormones to seamlessly replace exactly what your body is missing, stabilizing your mood, protecting your cardiovascular health, and immediately improving systemic vitality.',
        linkText: 'Explore Hormone Optimization',
        href: '/services/longevity-metabolic-wellness/hormone-optimization'
    },
    {
        title: 'Medical Weight Loss',
        description: 'Female biology is highly complex and uniquely resistant to simple caloric deficits, often due to underlying thyroid or hormone dysregulation. Our managed GLP-1 and peptide protocols go far beyond standard diet plans; we biologically reset your metabolic set point, suppress chronic cravings, and assist in sustainable, long-term body recomposition without compromising lean muscle.',
        linkText: 'Explore Medical Weight Loss',
        href: '/services/longevity-metabolic-wellness/medical-weight-loss'
    },
    {
        title: 'Structural Aesthetic Refinement',
        description: 'Age-related bone resorption and collagen depletion inherently alter the structural support of the female face. Using advanced placement of Dermal Fillers and Biostimulators like Sculptra®, our practitioners restore lost mid-face volume, define the jawline, and re-create a youthful, lifted contour without ever looking unnatural or "done".',
        linkText: 'Explore Dermal Fillers',
        href: '/services/advanced-aesthetics/dermal-fillers'
    },
    {
        title: 'Skin Quality & Collagen Induction',
        description: 'True radiance requires addressing the skin at a cellular level. Through clinical Microneedling and hyper-customized HydraFacial treatments, we mechanically stimulate your body\'s natural collagen and elastin production while deeply infusing targeted, medical-grade serums, dramatically reducing hyperpigmentation, texture irregularities, and fine lines.',
        linkText: 'Explore Microneedling',
        href: '/services/advanced-aesthetics/microneedling'
    },
    {
        title: 'Neurotoxins (Botox & Dysport)',
        description: 'Expression lines inevitably etch into the skin over time. We utilize conservative, micro-dosed neurotoxin injections to selectively relax the specific muscles causing dynamic wrinkles around the eyes and forehead. This preventative strategy preserves a smooth, rested aesthetic while allowing you to maintain full, natural emotional expression.',
        linkText: 'Explore Neurotoxins',
        href: '/services/advanced-aesthetics/neurotoxins'
    }
];

export default function ForWomenPage() {
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/for-women-hero.png"
                        alt="For Women Hero"
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className="container" style={{ zIndex: 2 }}>
                    <h1>For Women</h1>
                    <p>Protocols designed for female optimization.</p>
                </div>
            </section>

            <section className={styles.lightSection}>
                <div className="container">
                    <div className={styles.fourColGrid}>
                        {PILLARS.map((pillar, i) => (
                            <div key={i} className={styles.pillarCard}>
                                <div className={styles.iconWrapper}>{pillar.icon}</div>
                                <h3>{pillar.title}</h3>
                                <p>{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.lightSection} style={{ backgroundColor: '#fafafa' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Who We Treat</h2>
                    <div className={styles.threeColGrid}>
                        {DEMOGRAPHICS.map((demo, i) => (
                            <div key={i} className={styles.demographicCard}>
                                <div className={styles.iconWrapper}>{demo.icon}</div>
                                <h3>{demo.title}</h3>
                                <p>{demo.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.serviceList}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
                        Precision Modalities for Women
                    </h2>
                    <div className={styles.serviceGrid}>
                        {SERVICES.map((service, i) => (
                            <div key={i} className={styles.serviceItem}>
                                <div>
                                    <h3>{service.title}</h3>
                                </div>
                                <div>
                                    <p>{service.description}</p>
                                    <Link href={service.href} className={styles.serviceLink}>
                                        {service.linkText} →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center" style={{ marginTop: 'var(--spacing-24)' }}>
                        <Button href="/book?type=consultation" variant="primary">
                            Request Female Optimization Consultation
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
