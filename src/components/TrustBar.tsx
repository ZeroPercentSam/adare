import styles from './TrustBar.module.css';

export default function TrustBar() {
    return (
        <div className={styles.trustBar}>
            <div className="container">
                <div className={styles.trustContent}>
                    <div className={styles.reviews}>
                        <div className={styles.stars}>
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <span className={styles.reviewText}>4.9/5 from 120+ Google Reviews</span>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.affiliations}>
                        <div className={styles.affiliation}>
                            <span className={styles.affiliationText}>Board Certified</span>
                        </div>
                        <div className={styles.affiliation}>
                            <span className={styles.affiliationText}>ASLMS Member</span>
                        </div>
                        <div className={styles.affiliation}>
                            <span className={styles.affiliationText}>A4M Fellow</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
