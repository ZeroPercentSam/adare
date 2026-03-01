import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExitIntentModal from '@/components/ExitIntentModal';
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
    title: {
        template: '%s | ADARE Longevity & Aesthetics',
        default: 'Luxury Medical Spa in Tampa Bay | Longevity & Aesthetics | ADARE',
    },
    description: "Tampa Bay's premier medical wellness practice, offering advanced aesthetics, hormone optimization, peptide therapy, NAD+ treatments, and body contouring.",
    openGraph: {
        title: 'Luxury Medical Spa in Tampa Bay | Longevity & Aesthetics | ADARE',
        description: "Tampa Bay's premier medical wellness practice, offering advanced aesthetics, hormone optimization, peptide therapy, NAD+ treatments, and body contouring.",
        url: 'https://adare-vert.vercel.app',
        siteName: 'ADARE Longevity & Aesthetics',
        images: [
            {
                url: '/images/meta-image-new.jpg', // Local public route
                width: 1200,
                height: 630,
                alt: 'ADARE Tampa Bay',
            },
        ],
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
                        "@type": ["MedicalClinic", "LocalBusiness", "MedicalBusiness"],
                        "name": "ADARE Longevity & Aesthetics",
                        "image": "https://adare-vert.vercel.app/images/meta-image-new.jpg",
                        "@id": "https://adare-vert.vercel.app",
                        "url": "https://adare-vert.vercel.app",
                        "telephone": "(813) 555-0100",
                        "priceRange": "$$$",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "123 Bayshore Blvd",
                            "addressLocality": "Tampa",
                            "addressRegion": "FL",
                            "postalCode": "33606",
                            "addressCountry": "US"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 27.9404,
                            "longitude": -82.4633
                        },
                        "openingHoursSpecification": [
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                "opens": "09:00",
                                "closes": "18:00"
                            },
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": "Saturday",
                                "opens": "10:00",
                                "closes": "14:00"
                            }
                        ],
                        "areaServed": ["Tampa", "South Tampa", "St. Petersburg", "Clearwater", "Tampa Bay Area"],
                        "medicalSpecialty": ["Aesthetics", "Anti-Aging", "Aesthetic Dermatology", "Hormone Therapy", "Medical Weight Loss"]
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
                <ExitIntentModal />
            </body>
        </html>
    );
}
