import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from '../team-member.module.css';

export const metadata: Metadata = {
    title: 'Top Aesthetic Injector & Hormone Specialist | Natacha Christeler, APRN',
    description: 'Top 100 aesthetic injector with 25+ years in hormones, wellness, and medical weight loss. Book with Natacha Christeler at Adare Longevity & Aesthetics.',
};

export default function NatachaChristelerPage() {
    return (
        <section className="container">
            <div className={styles.profileContainer}>
                <div className={styles.profileGrid}>
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/team/natacha-christeler-real.png"
                                alt="Top 100 aesthetic injector and hormone specialist in Tampa and St. Petersburg, Natacha Christeler APRN"
                                fill
                                className={styles.profileImage}
                                priority
                            />
                        </div>
                    </div>

                    <div className={styles.profileContent}>
                        <div className={styles.header}>
                            <h1 className={styles.name}>Natacha Christeler, APRN-BC, MSN, BSN</h1>
                            <p className={styles.title}>Top 100 Aesthetic Injector in the Nation | Board-Certified Nurse Practitioner | Hormonal & Functional Wellness Expert | National Trainer</p>
                        </div>

                        <div className={`${styles.section} ${styles.bio}`}>
                            <h2 className={styles.sectionTitle}>Biography</h2>
                            <p>Natacha Christeler is a board-certified Nurse Practitioner and one of the Top 100 Aesthetic Injectors in the nation, bringing more than 25 years of experience across wellness, hormonal health, functional medicine, weight loss, and advanced aesthetics.</p>
                            <p>Her career began in nursing long before aesthetics became mainstream, allowing her to develop a deep clinical foundation rooted in physiology, patient safety, and long-term outcomes. In addition to her advanced aesthetic expertise, Natacha has treated thousands of patients through hormone optimization and medical weight-loss programs, giving her a whole-body perspective that informs every aesthetic plan.</p>
                            <p>As a national trainer and educator, she mentors other medical professionals while continuing to deliver refined, natural-appearing results that prioritize balance, longevity, and patient trust.</p>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Experience & Distinctions</h2>
                            <ul className={styles.list}>
                                <li>Top 100 Aesthetic Injector in the United States</li>
                                <li>Over 25 years of experience in wellness, hormonal health, weight loss, functional medicine, and advanced aesthetics</li>
                                <li>Board-Certified Advanced Practice Registered Nurse (APRN-BC)</li>
                                <li>Nationally recognized Master Aesthetic Injector</li>
                                <li>Aesthetic Trainer and Educator, teaching advanced injection techniques to medical professionals</li>
                                <li>Extensive clinical experience in hormone optimization, metabolic health, and medically supervised weight loss</li>
                            </ul>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Specializations & Services</h2>
                            <ul className={styles.list}>
                                <li>Advanced aesthetic injectables, including neuromodulators and dermal fillers</li>
                                <li>Facial balancing and structural rejuvenation</li>
                                <li>Bioidentical hormone replacement therapy for men and women</li>
                                <li>Medically supervised weight loss and metabolic optimization</li>
                                <li>Functional, wellness-driven treatment planning</li>
                                <li>Conservative, anatomy-based aesthetic strategies designed for long-term results</li>
                            </ul>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Education & Certifications</h2>
                            <ul className={styles.list}>
                                <li>Master of Science in Nursing (MSN)</li>
                                <li>Bachelor of Science in Nursing (BSN)</li>
                                <li>Board-Certified Nurse Practitioner (APRN-BC)</li>
                                <li>Advanced training in aesthetics, hormone replacement therapy, functional wellness, and weight management</li>
                                <li>Ongoing national and international medical education</li>
                            </ul>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Professional Philosophy</h2>
                            <div className={styles.bio}>
                                <p>Natacha believes true aesthetic excellence cannot exist without wellness. Her philosophy centers on treating the whole person, combining advanced aesthetic skill with deep knowledge of hormones, metabolism, and long-term health to support graceful, sustainable aging.</p>
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
                            <Button href="/book?provider=natacha" variant="primary">Book with Natacha</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
