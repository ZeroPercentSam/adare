import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from '../team-member.module.css';

export const metadata: Metadata = {
    title: 'Trudy Fehlinger | Founder | ADARE Longevity & Aesthetics',
    description: 'Trudy Fehlinger is the Founder of ADARE Longevity & Aesthetics, a luxury wellness and aesthetics practice in Tampa Bay.',
};

export default function TrudyFehlingerPage() {
    return (
        <section className="container">
            <div className={styles.profileContainer}>
                <div className={styles.profileGrid}>
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/team/trudy-fehlinger-founder-tampa.jpg"
                                alt="Trudy Fehlinger - Founder"
                                fill
                                className={styles.profileImage}
                                priority
                            />
                        </div>
                    </div>

                    <div className={styles.profileContent}>
                        <div className={styles.header}>
                            <h1 className={styles.name}>Trudy Fehlinger</h1>
                            <p className={styles.title}>Founder, ADARE Longevity & Aesthetics</p>
                        </div>

                        <div className={`${styles.section} ${styles.bio}`}>
                            <h2 className={styles.sectionTitle}>Biography</h2>
                            <p>Trudy Fehlinger is the Founder of ADARE Longevity & Aesthetics, a place created with uncommon intention, where care feels considered, time is respected, and people are met with quiet attentiveness from the moment they arrive.</p>
                            <p>ADARE was shaped by Trudy’s deep passion for wellness, and by a belief that the experience of care matters as much as the care itself. She is thoughtful about how people are welcomed, how conversations unfold, and how supported they feel as their needs evolve through the various phases of life. Nothing is hurried. Nothing is assumed. Each interaction is guided by presence, clarity, and respect.</p>
                            <p>What makes ADARE distinct is its depth. Time is given generously, not as a luxury, but as a standard. Wellness and aesthetics are approached with curiosity and discernment, guided by the understanding that meaningful care requires space to listen, consider, and look beyond the obvious. Here, guidance feels measured and personal, shaped by conversation rather than urgency.</p>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Philosophy & Team Culture</h2>
                            <div className={styles.bio}>
                                <p>Equally central to ADARE is the caliber of its people. Trudy is intentional about cultivating a team of providers who care deeply, think critically, and remain genuinely curious in their work. Clinicians are chosen not only for their expertise, but for how they listen, how they ask questions, and how committed they are to continued learning. This shared mindset creates care that feels intelligent, attentive, and deeply human.</p>
                                <p>With a background in law, business, and healthcare operations, Trudy brings structure and discernment to everything behind the scenes, allowing the experience itself to feel calm, seamless, and reassuring. The result is a practice where wellness and aesthetics are layered thoughtfully, through presence, guidance, and trust.</p>
                                <p>ADARE is designed to be a place people return to not out of habit, but out of preference. A place where they are known, where care unfolds with intention, and where support feels steady as life changes. It reflects Trudy’s commitment to building something rare and meaningful, a practice designed to serve people well, with grace, intelligence, and purpose.</p>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Locations</h2>
                            <div className={styles.locations}>
                                <span className={styles.locationBadge}>South Tampa</span>
                                <span className={styles.locationBadge}>St. Petersburg</span>
                            </div>
                        </div>

                        <div className={styles.ctaSection}>
                            <Button href="/book" variant="primary">Book a Consultation</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
