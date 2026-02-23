import type { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
    title: 'Privacy Policy · ADARE',
    description: 'Privacy Policy for ADARE Longevity & Aesthetics.',
};

export default function PrivacyPolicyPage() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.lastUpdated}>Last Updated: October 2023</p>

            <div className={styles.content}>
                <p>This Privacy Policy describes how ADARE Longevity & Aesthetics ("we", "us", or "our") collects, uses, and shares your personal information when you use our website or services.</p>

                <h2>1. Information We Collect</h2>
                <p>We collect information that you provide to us directly, such as when you create an account, book an appointment, or contact us. This may include your name, email address, phone number, and medical history (handled in compliance with HIPAA).</p>

                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and personalize your experience.</p>

                <h2>3. HIPAA Compliance</h2>
                <p>Your protected health information (PHI) is handled strictly in accordance with the Health Insurance Portability and Accountability Act (HIPAA). Please refer to our separate Notice of Privacy Practices for detailed information on how your medical information is protected.</p>

                <h2>4. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at info@adare.clinic.</p>
            </div>
        </main>
    );
}
