import { Suspense } from 'react';
import BookingForm from './BookingForm';
import styles from './page.module.css';

export const metadata = {
    title: 'Book a Consultation · ADARE Longevity & Aesthetics',
    description: 'Schedule a consultation for advanced aesthetics, longevity programs, and tailored wellness solutions at ADARE Tampa Bay.',
};

export default function BookPage() {
    return (
        <div className={styles.container}>
            <section className={styles.heroSection}>
                <div className="container">
                    <h1 className={styles.title}>Book Your Consultation</h1>
                    <p className={styles.subtitle}>
                        Take the first step towards tailored optimization. Select your desired service and we will contact you to confirm a timeframe.
                    </p>
                </div>
            </section>

            <section className={styles.formSection}>
                <div className="container">
                    <div className={styles.formCard}>
                        {/* We use Suspense because BookingForm reads useSearchParams() */}
                        <Suspense fallback={<div className={styles.loading}>Loading booking options...</div>}>
                            <BookingForm />
                        </Suspense>
                    </div>
                </div>
            </section>
        </div>
    );
}
