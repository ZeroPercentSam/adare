'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './BeforeAfterGallery.module.css';

export default function BeforeAfterGallery() {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(Number(e.target.value));
    };

    return (
        <section className={styles.sectionGallery}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Clinical Outcomes</h2>
                    <p>Real results from personalized ADARE protocols.</p>
                </div>

                <div className={styles.galleryWrapper}>
                    <div className={styles.sliderContainer}>
                        {/* After Image (Background) */}
                        <div className={styles.imageAfter}>
                            {/* Placeholder for real After image - Using CSS gradient for visual placeholder */}
                            <div className={styles.placeholderAfter}>
                                <span>AFTER</span>
                            </div>
                        </div>

                        {/* Before Image (Foreground, clipped) */}
                        <div
                            className={styles.imageBefore}
                            style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                        >
                            {/* Placeholder for real Before image */}
                            <div className={styles.placeholderBefore}>
                                <span>BEFORE</span>
                            </div>
                        </div>

                        {/* Slider Input */}
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderValue}
                            onChange={handleSliderChange}
                            className={styles.slider}
                            aria-label="Before and after comparison slider"
                        />

                        {/* Slider Line/Thumb Visual */}
                        <div className={styles.sliderLine} style={{ left: `${sliderValue}%` }}>
                            <div className={styles.sliderThumb}>
                                <span>&harr;</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.caseDetails}>
                        <h3>Full Facial Balancing</h3>
                        <p>Patient received a customized combination of neurotoxins, dermal fillers, and biostimulators over a 6-month period to restore volume loss and improve skin laxity.</p>
                        <span className={styles.timeframe}>Timeframe: 6 Months &middot; Provider: Dr. Jenkins</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
