import type { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
    title: 'Medical Disclaimer · ADARE',
    description: 'Medical Disclaimer for ADARE Longevity & Aesthetics.',
};

export default function MedicalDisclaimerPage() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Medical Disclaimer</h1>
            <p className={styles.lastUpdated}>Last Updated: October 2023</p>

            <div className={styles.content}>
                <p>The information provided on ADARE Longevity & Aesthetics (adare.clinic) and our associated social media platforms is for general informational and educational purposes only.</p>

                <h2>Not Medical Advice</h2>
                <p>The content provided on this website is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>

                <h2>No Provider-Patient Relationship</h2>
                <p>Use of this website, including communication via forms or email, does not establish a provider-patient relationship between you and ADARE Longevity & Aesthetics or any of its practitioners.</p>

                <h2>Results May Vary</h2>
                <p>Before-and-after photos and testimonials on this site represent individual experiences. Individual results from treatments can and will vary based on factors such as genetics, age, health history, and compliance with aftercare protocols.</p>
            </div>
        </main>
    );
}
