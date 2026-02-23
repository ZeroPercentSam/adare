import type { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
    title: 'Terms of Service · ADARE',
    description: 'Terms of Service for ADARE Longevity & Aesthetics.',
};

export default function TermsOfServicePage() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Terms of Service</h1>
            <p className={styles.lastUpdated}>Last Updated: October 2023</p>

            <div className={styles.content}>
                <p>Please read these Terms of Service completely before using adare.clinic which is owned and operated by ADARE Longevity & Aesthetics.</p>

                <h2>1. Acceptance of Terms</h2>
                <p>By using or accessing the Site in any way, viewing or browsing the Site, or adding your own content to the Site, you are agreeing to be bound by these Terms of Service.</p>

                <h2>2. Medical Disclaimer</h2>
                <p>The content on this website is for informational purposes only and does not constitute medical advice. Use of our website does not create a provider-patient relationship.</p>

                <h2>3. Appointment Cancellation Policy</h2>
                <p>We require a minimum 24-hour notice for appointment cancellations or rescheduling. Failure to do so may result in a cancellation fee.</p>

                <h2>4. Changes to Terms</h2>
                <p>We reserve the right to modify these Terms of Service at any time. We do so by posting and drawing attention to the updated terms on the Site. Your decision to continue to visit and make use of the Site after such changes have been made constitutes your formal acceptance of the new Terms of Service.</p>
            </div>
        </main>
    );
}
