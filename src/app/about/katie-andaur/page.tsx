import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from '../team-member.module.css';

export const metadata: Metadata = {
    title: 'Katie Andaur | Chief Operating Officer | ADARE Longevity & Aesthetics',
    description: 'Katie Andaur is the Chief Operating Officer of ADARE Longevity & Aesthetics, bringing an operational foundation of lifestyle, movement, and healthier living to the practice.',
};

export default function KatieAndaurPage() {
    return (
        <section className="container">
            <div className={styles.profileContainer}>
                <div className={styles.profileGrid}>
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/team/katie-andaur-coo-tampa.jpg"
                                alt="Katie Andaur - Chief Operating Officer"
                                fill
                                className={styles.profileImage}
                                priority
                            />
                        </div>
                    </div>

                    <div className={styles.profileContent}>
                        <div className={styles.header}>
                            <h1 className={styles.name}>Katie Andaur</h1>
                            <p className={styles.title}>Chief Operating Officer</p>
                        </div>

                        <div className={`${styles.section} ${styles.bio}`}>
                            <h2 className={styles.sectionTitle}>Biography</h2>
                            <p>Katie Andaur is the Chief Operating Officer of ADARE Longevity & Aesthetics, where she and Founder and CEO Trudy Fehlinger have built a practice rooted in intention, depth, and relationship-based care. Together, they have shaped ADARE from the ground up with the belief that healthcare should never feel transactional, and that people deserve to feel genuinely seen, heard, and understood.</p>
                            <p>ADARE was created with uncommon intention. Katie and Trudy were deliberate in building a place where time is respected, conversations unfold thoughtfully, and care is guided by curiosity rather than urgency. Health is approached through a deeper understanding of root causes and personal needs, recognizing that meaningful outcomes require space, context, and trust.</p>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Experience & Background</h2>
                            <div className={styles.bio}>
                                <p>Katie’s path into wellness began with a lifelong goal of becoming a physician. She pursued a pre-med track with a strong foundation in cell biology and gained experience working in hospital and pharmacy settings. Those experiences revealed critical gaps in traditional healthcare, particularly the lack of personalization, prevention, and lifestyle-centered care. Rather than stepping away from medicine, Katie chose to help build a model that addressed what was missing.</p>
                                <p>With certifications in nutrition coaching and personal training, and a background in the gym and coaching space, Katie brings a practical, grounded approach to wellness. She believes deeply in lifestyle, movement, and healthier eating habits as the foundation of long-term health, and in meeting people where they are rather than where systems expect them to be.</p>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>At ADARE</h2>
                            <div className={styles.bio}>
                                <p>At ADARE, Katie’s work centers on creating the conditions for meaningful care. Through thoughtful systems, team development, and operational clarity, she helps ensure that each interaction feels considered and personal. The practice reflects her belief that when care is built with intention, people return not out of habit, but out of trust.</p>
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
