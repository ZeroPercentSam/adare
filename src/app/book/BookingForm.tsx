'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Button from '@/components/Button';
import styles from './page.module.css';

export default function BookingForm() {
    const searchParams = useSearchParams();
    const typeQuery = searchParams.get('type');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'general-consultation',
        notes: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (typeQuery) {
            setFormData(prev => ({ ...prev, service: typeQuery }));
        }
    }, [typeQuery]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would submit to an API endpoint or booking system
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        setFormData({ name: '', email: '', phone: '', service: 'general-consultation', notes: '' });
    };

    if (isSubmitted) {
        return (
            <div className={styles.successMessage}>
                <h3>Request Received</h3>
                <p>Thank you for reaching out. One of our concierge coordinators will be in touch shortly to confirm your booking.</p>
                <Button href="/" variant="outline">Return Home</Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">Full Name</label>
                <input
                    className={styles.input}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                />
            </div>

            <div className={styles.formRow}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Email Address</label>
                    <input
                        className={styles.input}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@example.com"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="phone">Phone Number</label>
                    <input
                        className={styles.input}
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(555) 123-4567"
                    />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="service">Interested Service or Tier</label>
                <select
                    className={styles.select}
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                >
                    <option value="general-consultation">General Consultation</option>
                    <optgroup label="Memberships">
                        <option value="membership-glow">Glow Membership</option>
                        <option value="consultation-glow">Glow Consultation</option>
                        <option value="membership-foundation">Foundation Membership</option>
                        <option value="membership-adare">ADARE Membership</option>
                        <option value="consultation-wellness">Wellness Consultation / Labs</option>
                        <option value="consultation-private">Private Consultation</option>
                    </optgroup>
                    <optgroup label="Advanced Aesthetics">
                        <option value="aesthetics">Advanced Aesthetics General</option>
                        <option value="aesthetics-neurotoxins">Neurotoxins</option>
                        <option value="aesthetics-fillers">Dermal Fillers</option>
                        <option value="aesthetics-biostimulators">Biostimulators</option>
                        <option value="aesthetics-microneedling">Microneedling</option>
                        <option value="aesthetics-hydrafacial">HydraFacial</option>
                        <option value="aesthetics-hair">Hair Restoration</option>
                    </optgroup>
                    <optgroup label="Longevity & Wellness">
                        <option value="wellness">Longevity & Wellness General</option>
                        <option value="wellness-hormones">Hormone Optimization</option>
                        <option value="wellness-weightloss">Medical Weight Loss</option>
                        <option value="wellness-peptides">Peptide Therapy</option>
                        <option value="wellness-nad">NAD+ Therapy</option>
                    </optgroup>
                    <optgroup label="Recovery & Body">
                        <option value="recovery">Recovery General</option>
                        <option value="recovery-iv">IV Therapy</option>
                        <option value="recovery-redlight">Red Light Therapy</option>
                        <option value="recovery-hbot">Hyperbaric Oxygen Therapy</option>
                        <option value="body-emsculpt">Emsculpt NEO</option>
                    </optgroup>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="notes">Additional Notes (Optional)</label>
                <textarea
                    className={styles.textarea}
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your goals or any specific questions..."
                ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
                Request Appointment
            </button>

            {/* Mobile Floating Call Button */}
            <div className={styles.mobileCallFab}>
                <a href="tel:813-555-0100" className={styles.fabButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Call to Book
                </a>
            </div>
        </form>
    );
}
