import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/globals.css';
import styles from './layout.module.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const cormorant = Cormorant_Garamond({
    weight: ['400', '600'],
    subsets: ['latin'],
    variable: '--font-serif',
    display: 'swap'
});

export const metadata: Metadata = {
    title: 'ADARE Longevity & Aesthetics · Tampa Bay',
    description: 'Luxury longevity, aesthetics, and cellular medicine in Tampa Bay. Hormone optimization, medical weight loss, injectables, and recovery services. Book now.',
    openGraph: {
        title: 'ADARE Longevity & Aesthetics · Tampa Bay',
        description: 'Luxury longevity, aesthetics, and cellular medicine in Tampa Bay. Hormone optimization, medical weight loss, injectables, and recovery services.',
        url: 'https://adaremd.com',
        siteName: 'ADARE Longevity & Aesthetics',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
            <head>
                <Script id="schema-medical-clinic" type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalClinic",
                        "name": "ADARE Longevity & Aesthetics",
                        "image": "https://adaremd.com/images/meta-image.webp",
                        "@id": "https://adaremd.com",
                        "url": "https://adaremd.com",
                        "telephone": "(813) 555-0100",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "123 Bayshore Blvd",
                            "addressLocality": "Tampa",
                            "addressRegion": "FL",
                            "postalCode": "33606",
                            "addressCountry": "US"
                        },
                        "medicalSpecialty": ["Aesthetics", "Anti-Aging", "Aesthetic Dermatology"]
                    })
                }} />
            </head>
            <body>
                <a href="#main-content" className="visually-hidden">
                    Skip to main content
                </a>
                <header className={styles.header} role="banner">
                    <Header />
                </header>

                <main id="main-content" role="main" className={styles.main}>
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    );
}
