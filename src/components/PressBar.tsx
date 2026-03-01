import styles from './PressBar.module.css';

export default function PressBar() {
    return (
        <section className={styles.sectionPress}>
            <div className="container">
                <h3 className={styles.heading}>As Seen In</h3>
                <div className={styles.logoGrid}>
                    <div className={styles.logoWrapper}>
                        <div className={styles.logoPlaceholder}>Tampa Bay Times</div>
                    </div>
                    <div className={styles.logoWrapper}>
                        <div className={styles.logoPlaceholder}>Tampa Magazine</div>
                    </div>
                    <div className={styles.logoWrapper}>
                        <div className={styles.logoPlaceholder}>Modern Luxury</div>
                    </div>
                    <div className={styles.logoWrapper}>
                        <div className={styles.logoPlaceholder}>WFLA News</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
