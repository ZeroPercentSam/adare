import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from '../team-member.module.css';

export const metadata: Metadata = {
    title: 'Amber Brnovich | ADARE Longevity & Aesthetics',
    description: 'Advanced Medical Esthetician and Certified Nutrition & Lifestyle Coach at ADARE longevity and aesthetics.',
};

export default function AmberBrnovichPage() {
    return (
        <section className="container">
            <div className={styles.profileContainer}>
                <div className={styles.profileGrid}>
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/team/Amber-Brnovich-Esthetician-tampa.jpg"
                                alt="Amber Brnovich - Advanced Medical Esthetician"
                                fill
                                className={styles.profileImage}
                                priority
                            />
                        </div>
                    </div>

                    <div className={styles.profileContent}>
                        <div className={styles.header}>
                            <h1 className={styles.name}>Amber Brnovich</h1>
                            <p className={styles.title}>Advanced Medical Esthetician | Certified Nutrition & Lifestyle Coach</p>
                        </div>

                        <div className={`${styles.section} ${styles.bio}`}>
                            <h2 className={styles.sectionTitle}>Biography</h2>
                            <p>Amber Brnovich is an Advanced Medical Esthetician and Certified Nutrition and Lifestyle Coach with a background in biology and a deep passion for whole-body skin health. She takes an integrative, inside-out approach to aesthetics, blending advanced skincare with evidence-based nutrition and lifestyle guidance to support true, lasting transformation.</p>
                            <p>With over five years of experience combining medical aesthetics with nutrition and lifestyle optimization, Amber helps clients address the root causes of skin concerns rather than relying on surface-level solutions. After using proper nutrition and lifestyle changes to put her own autoimmune condition into remission, Amber brings both clinical expertise and lived experience into her work.</p>
                            <p>Her thoughtful, education-focused approach empowers clients to understand their skin, optimize their health, and achieve long-term radiance.</p>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Experience & Distinctions</h2>
                            <ul className={styles.list}>
                                <li>Advanced Medical Esthetician with a certified nutrition and lifestyle coaching background</li>
                                <li>Academic foundation in Biology</li>
                                <li>Over 5 years of experience integrating aesthetics, nutrition, and lifestyle optimization</li>
                                <li>Specialized in inside-out skin health, inflammation-aware care, and long-term results</li>
                                <li>Known for blending clinical skincare with whole-body wellness strategies</li>
                            </ul>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Specializations & Services</h2>
                            <ul className={styles.list}>
                                <li>Advanced medical aesthetics and corrective skincare treatments</li>
                                <li>Nutrition-supported skin transformation and acne support</li>
                                <li>Lifestyle coaching for skin health, inflammation, and barrier repair</li>
                                <li>Holistic skin consultations addressing diet, stress, and daily habits</li>
                                <li>Personalized, education-driven treatment plans for sustainable results</li>
                            </ul>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Education & Certifications</h2>
                            <ul className={styles.list}>
                                <li>Advanced Medical Esthetician</li>
                                <li>Certified Acne Specialist</li>
                                <li>Certified Nutrition Coach</li>
                                <li>Certified Lifestyle Coach</li>
                                <li>Academic background in Biology</li>
                                <li>Ongoing education in integrative skincare, nutrition, and lifestyle medicine</li>
                            </ul>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Professional Philosophy</h2>
                            <div className={styles.bio}>
                                <p>Amber believes lasting skin health is built from the inside out. Her philosophy centers on education, nourishment, and lifestyle alignment, pairing advanced aesthetics with nutrition and lifestyle coaching to support sustainable, whole-body results.</p>
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
                            <Button href="/book?provider=amber" variant="primary">Book with Amber</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
