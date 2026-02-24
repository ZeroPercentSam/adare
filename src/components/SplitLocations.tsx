import Link from 'next/link';
import Image from 'next/image';
import styles from './SplitLocations.module.css';

export default function SplitLocations() {
    return (
        <section className={styles.splitLocations}>
            <div className={styles.locationBlock}>
                <div className={styles.bgImage}>
                    <Image
                        src="/images/home-hero.png"
                        alt="South Tampa Location Background"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority={false}
                    />
                </div>
                <div className={styles.overlay}></div>
                <div className={styles.content}>
                    <div className={styles.details}>
                        <h2>South Tampa</h2>
                        <p>123 Bayshore Blvd</p>
                        <p>Tampa, FL 33606</p>
                        <p>(813) 555-0100</p>
                    </div>
                    <Link href="/locations/south-tampa" className={styles.button}>
                        View Now
                    </Link>
                </div>
            </div>

            <div className={styles.locationBlock}>
                <div className={styles.bgImage}>
                    <Image
                        src="/images/longevity-hero.png"
                        alt="St. Pete Location Background"
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        priority={false}
                    />
                </div>
                <div className={styles.overlay}></div>
                <div className={styles.content}>
                    <div className={styles.details}>
                        <h2>St. Pete</h2>
                        <p>456 Central Ave</p>
                        <p>St. Petersburg, FL 33701</p>
                        <p>(727) 555-0200</p>
                    </div>
                    <Link href="/locations/st-pete" className={styles.button}>
                        View Now
                    </Link>
                </div>
            </div>
        </section>
    );
}
