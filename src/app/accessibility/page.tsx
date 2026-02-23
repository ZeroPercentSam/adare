import type { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
    title: 'Accessibility Statement · ADARE',
    description: 'Accessibility Statement for ADARE Longevity & Aesthetics website.',
};

export default function AccessibilityStatementPage() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Accessibility Statement</h1>
            <p className={styles.lastUpdated}>Last Updated: October 2023</p>

            <div className={styles.content}>
                <p>ADARE Longevity & Aesthetics is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability.</p>

                <h2>Our Commitment</h2>
                <p>We are actively working to increase the accessibility and usability of our website and in doing so adhere to many of the available standards and guidelines, specifically the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.</p>

                <h2>Features</h2>
                <ul>
                    <li><strong>Keyboard Navigation:</strong> Our site is fully navigable using a keyboard.</li>
                    <li><strong>Skip Links:</strong> A "skip to main content" link is available for screen reader users and keyboard navigators.</li>
                    <li><strong>Semantic HTML:</strong> We use appropriate semantic structures to ensure screen readers can understand the content flow.</li>
                    <li><strong>Contrast:</strong> Color palettes are chosen to meet or exceed contrast ratio requirements.</li>
                    <li><strong>Focus Management:</strong> Clear visual indications are provided for focused elements.</li>
                </ul>

                <h2>Feedback</h2>
                <p>If you experience any difficulty in accessing any part of this website, please feel free to call us at (813) 555-0100 or email us at info@adare.clinic and we will work with you to provide the information, item, or transaction you seek through an alternate communication method.</p>
            </div>
        </main>
    );
}
