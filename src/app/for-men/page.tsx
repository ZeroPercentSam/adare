import Image from 'next/image';
import Link from 'next/link';
import styles from '../demographic.module.css';
import { getServiceCategory } from '@/data/services';
import { IconPrecision, IconCognition, IconPerformance, IconResilience, IconExecutive, IconAthlete, IconLegacy } from '@/components/GlossyIcons';
import Button from '@/components/Button';

export const metadata = {
    title: 'For Men · Male Optimization Protocols · ADARE',
    description: 'Protocols designed for peak male performance. Explore precision therapies for testosterone, cognition, virility, and physical resilience at ADARE Tampa Bay.',
};

const PILLARS = [
    {
        title: 'Endurance & Performance',
        description: 'Protocols designed to keep you sharp, energetic, and resilient in the boardroom and the gym.',
        icon: <IconPerformance size={32} />
    },
    {
        title: 'Cognition',
        description: 'Sharpen focus, memory, and executive function through targeted peptide and vascular therapy.',
        icon: <IconCognition size={32} />
    },
    {
        title: 'Precision Over Correction',
        description: 'Subtle, structural changes that preserve masculine features without looking "done".',
        icon: <IconPrecision size={32} />
    },
    {
        title: 'Resilience',
        description: 'Enhance recovery and stress adaptation for high-stakes lifestyles.',
        icon: <IconResilience size={32} />
    }
];

const DEMOGRAPHICS = [
    {
        title: 'The Executive',
        description: 'Demanding schedules require rapid recovery. High-dose NAD+ and targeted injectables to soften stress lines while maintaining command.',
        icon: <IconExecutive size={48} />
    },
    {
        title: 'The Athlete',
        description: 'Former or current competitors looking to maintain peak physicality and recover faster from injury.',
        icon: <IconAthlete size={48} />
    },
    {
        title: 'The Legacy',
        description: 'Men focused on longevity and extending their healthspan to enjoy wealth and family for decades.',
        icon: <IconLegacy size={48} />
    }
];

const SERVICES = [
    {
        title: 'Testosterone Optimization (TRT)',
        description: 'Male hormone levels naturally decline post-30, leading to fat gain, brain fog, and loss of ambition. Our comprehensive TRT programs do not just blindly prescribe testosterone; we manage estrogen conversion, systemic inflammation, and thyroid output to restore the aggressive drive, physical strength, and mental clarity of your prime.',
        linkText: 'Explore Hormone Optimization',
        href: '/services/longevity-metabolic-wellness/hormone-optimization'
    },
    {
        title: 'Peptide Therapy for Men',
        description: 'Advanced amino acid sequencing designed to command your body to burn fat, build lean tissue, and heal soft tissue injuries rapidly. Peptides like BPC-157 bypass the slow natural healing process, making them the ultimate tool for athletes recovering from joint or tendon degradation.',
        linkText: 'Explore Peptide Therapy',
        href: '/services/longevity-metabolic-wellness/peptide-therapy'
    },
    {
        title: 'Emsculpt NEO for Core Definition',
        description: 'Even with a rigorous diet and heavy lifting regimen, visceral fat and "love handles" can be stubborn due to male fat-storage patterns. Emsculpt NEO simultaneously destroys fat cells via radiofrequency heat and contracts target muscles 20,000 times in 30 minutes, specifically targeting the core and obliques for a deeply defined aesthetic.',
        linkText: 'Explore Emsculpt NEO',
        href: '/services/body-contouring/emsculpt-neo'
    },
    {
        title: 'Hair Restoration',
        description: 'Male pattern baldness affects the majority of men, but early, aggressive intervention can halt and reverse the process. Using advanced PRP (Platelet-Rich Plasma) extracted directly from your blood, we stimulate dormant hair follicles to re-enter the active growth phase, increasing density and coverage without surgery.',
        linkText: 'Explore Hair Restoration',
        href: '/services/advanced-aesthetics/hair-restoration'
    },
    {
        title: 'NAD+ Cognitive Infusions',
        description: 'To operate incredibly complex businesses or manage high-stress environments, extreme cognitive stamina is required. NAD+ is the co-enzyme responsible for cellular energy. Flooding your systemic circulation with NAD+ essentially reboots mitochondrial function, clearing brain fog instantly and providing sustained, raw mental energy.',
        linkText: 'Explore NAD+ Therapy',
        href: '/services/longevity-metabolic-wellness/nad-therapy'
    },
    {
        title: 'Hyperbaric Oxygen & IV Recovery',
        description: 'For the high-performer, downtime is the enemy. By combining high-pressure oxygen therapy (HBOT) with custom-compounded amino acid IV drips, we dramatically shrink the recovery window after intense exertion, jet lag, or heavy stress, forcing the body back to a state of equilibrium.',
        linkText: 'Explore IV Therapy',
        href: '/services/recovery-performance/iv-therapy'
    }
];

export default function ForMenPage() {
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/for-men-hero.png"
                        alt="For Men Hero"
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className="container" style={{ zIndex: 2 }}>
                    <h1>For Men</h1>
                    <p>Protocols designed for peak male performance.</p>
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
                        Precision Modalities for Men
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
                            Request Male Optimization Consultation
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
