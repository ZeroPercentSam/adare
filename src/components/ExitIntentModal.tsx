'use client';

import { useState, useEffect } from 'react';
import styles from './ExitIntentModal.module.css';
import Button from './Button';

export default function ExitIntentModal() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasFired, setHasFired] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Only run on desktop
        if (typeof window !== 'undefined' && window.innerWidth > 768) {
            const handleMouseLeave = (e: MouseEvent) => {
                if (e.clientY <= 0 && !hasFired) {
                    setIsVisible(true);
                    setHasFired(true);
                    // Prevent it from firing again in this session
                    sessionStorage.setItem('adare_exit_intent_fired', 'true');
                }
            };

            // Check if it already fired this session
            const alreadyFired = sessionStorage.getItem('adare_exit_intent_fired');
            if (!alreadyFired) {
                document.addEventListener('mouseleave', handleMouseLeave);
            }

            return () => {
                document.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [hasFired]);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsVisible(false), 3000); // Close after 3 seconds
    };

    if (!isVisible) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={handleClose} aria-label="Close">
                    &times;
                </button>

                {isSubmitted ? (
                    <div className={styles.successState}>
                        <h3>Assessment Sent</h3>
                        <p>Your personalized wellness assessment is on its way to your inbox.</p>
                    </div>
                ) : (
                    <>
                        <div className={styles.modalHeader}>
                            <h2>Not ready to book?</h2>
                            <p>Take our 2-minute wellness assessment and we'll create a personalized protocol recommendation for you.</p>
                        </div>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="exit-email" className="visually-hidden">Email Address</label>
                                <input type="email" id="exit-email" placeholder="Email Address" required className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="exit-phone" className="visually-hidden">Phone Number</label>
                                <input type="tel" id="exit-phone" placeholder="Phone Number" required className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="exit-interest" className="visually-hidden">Primary Interest</label>
                                <select id="exit-interest" required className={styles.select}>
                                    <option value="" disabled selected>Primary Interest</option>
                                    <option value="longevity">Longevity & Wellness</option>
                                    <option value="aesthetics">Advanced Aesthetics</option>
                                    <option value="weightloss">Medical Weight Loss</option>
                                    <option value="recovery">Recovery & Performance</option>
                                </select>
                            </div>
                            <div className={styles.submitWrapper}>
                                <Button type="submit" variant="primary">Send My Assessment</Button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
