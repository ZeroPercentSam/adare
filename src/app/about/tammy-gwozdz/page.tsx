import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from '../team-member.module.css';

export const metadata: Metadata = {
    title: 'Tammy Gwozdz, APRN | ADARE Longevity & Aesthetics',
    description: 'Tammy Gwozdz, MSN, APRN is a board-certified nurse practitioner focused on holistic medicine, hormone replacement therapy, and aesthetics in Tampa.',
};

export default function TammyGwozdzPage() {
    return (
        <section className="container">
            <div className={styles.profileContainer}>
                <div className={styles.profileGrid}>
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/team/tammy-gwozdz-nurse-practitioner-tampa.jpg"
                                alt="Tammy Gwozdz - MSN, APRN"
                                fill
                                className={styles.profileImage}
                                priority
                            />
                        </div>
                    </div>

                    <div className={styles.profileContent}>
                        <div className={styles.header}>
                            <h1 className={styles.name}>Tammy Gwozdz, MSN, APRN</h1>
                            <p className={styles.title}>Board-Certified Nurse Practitioner</p>
                        </div>

                        <div className={`${styles.section} ${styles.bio}`}>
                            <h2 className={styles.sectionTitle}>Biography</h2>
                            <p>Tammy Gwozdz, MSN, APRN, is a board-certified nurse practitioner with a strong clinical foundation and a passion for helping patients achieve a higher quality of life. Originally from Jacksonville, Florida, she earned her Bachelor of Science in Nursing from the University of Florida and went on to complete her Master of Science in Nursing at South University.</p>
                            <p>Tammy began her career in high-acuity settings including emergency medicine, endovascular surgery, and cardiology, where she developed a deep appreciation for precision, critical thinking, and whole-body health. Over time, her passion evolved toward a more integrative approach, leading her into holistic medicine, hormone replacement therapy, peptide therapy, nutraceutical support, and aesthetics.</p>
                            <p>Today, she blends clinical expertise with a personalized, root-cause-focused philosophy to help patients feel better, perform better, and live more fully.</p>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Outside the Clinic</h2>
                            <div className={styles.bio}>
                                <p>Outside of the clinic, Tammy enjoys life with her husband and two children. Together, they love traveling, seeking new adventures, rock climbing, and discovering incredible food along the way.</p>
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
                            <Button href="/book?provider=tammy" variant="primary">Book with Tammy</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
