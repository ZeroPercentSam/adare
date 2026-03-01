'use client';

import { useState } from 'react';
import styles from './TestimonialCarousel.module.css';

const testimonials = [
    {
        id: 1,
        quote: "The level of care and precision at ADARE is unmatched. My results are natural yet transformative. The best decision I've made for my longevity journey.",
        name: "Sarah M.",
        treatment: "Advanced Aesthetics & NAD+ Protocol",
        rating: 5
    },
    {
        id: 2,
        quote: "I've been to many luxury clinics, but the personalized, lab-driven approach here changed my entire perspective on what optimization actually means.",
        name: "David L.",
        treatment: "Longevity & Metabolic Wellness",
        rating: 5
    },
    {
        id: 3,
        quote: "From the high-touch experience to the evidence-based protocols, every detail is considered. It's not just a treatment; it's a comprehensive health upgrade.",
        name: "Jessica R.",
        treatment: "Hormone Optimization",
        rating: 5
    }
];

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className={styles.sectionTestimonials}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Patient Experiences</h2>
                </div>

                <div className={styles.carousel}>
                    <button className={styles.navButton} onClick={prevTestimonial} aria-label="Previous testimonial">&larr;</button>

                    <div className={styles.testimonialContainer}>
                        <div className={styles.stars}>
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                        </div>
                        <blockquote className={styles.quote}>
                            &ldquo;{testimonials[currentIndex].quote}&rdquo;
                        </blockquote>
                        <div className={styles.authorInfo}>
                            <span className={styles.name}>{testimonials[currentIndex].name}</span>
                            <span className={styles.treatment}>{testimonials[currentIndex].treatment}</span>
                        </div>
                    </div>

                    <button className={styles.navButton} onClick={nextTestimonial} aria-label="Next testimonial">&rarr;</button>
                </div>

                <div className={styles.dots}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
