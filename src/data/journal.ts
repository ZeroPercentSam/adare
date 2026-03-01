export interface JournalArticle {
    slug: string;
    title: string;
    category: string;
    author: string;
    authorRole: string;
    authorImage: string;
    publishDate: string;
    readTime: string;
    excerpt: string;
    content: string; // HTML or markdown
    imageSrc: string;
}

export const journalArticles: JournalArticle[] = [
    {
        slug: 'nad-therapy-what-the-science-actually-says',
        title: 'NAD+ Therapy: What the Science Actually Says',
        category: 'Longevity & Science',
        author: 'Dr. Sarah Jenkins',
        authorRole: 'Medical Director',
        authorImage: '/images/placeholder-provider-1.jpg',
        publishDate: 'February 28, 2026',
        readTime: '6 min read',
        excerpt: 'An evidence-based look at how Nicotinamide Adenine Dinucleotide impacts cellular aging and mitochondrial function.',
        content: '<p>Placeholder content for the comprehensive clinical deep dive on NAD+ pathways...</p>',
        imageSrc: '/images/services/nad-therapy.jpg',
    },
    {
        slug: 'botox-vs-dysport-how-to-choose',
        title: 'Botox vs. Dysport: How to Choose the Right Neurotoxin',
        category: 'Aesthetics Education',
        author: 'Michael Chen, PA-C',
        authorRole: 'Lead Injector',
        authorImage: '/images/placeholder-provider-2.jpg',
        publishDate: 'February 24, 2026',
        readTime: '4 min read',
        excerpt: 'Understanding the nuanced differences between the industry\'s leading neurotoxins and which one fits your facial anatomy best.',
        content: '<p>Placeholder content explaining diffusion rates, onset timelines, and protein structures of various neurotoxins...</p>',
        imageSrc: '/images/services/neurotoxins.jpg',
    },
    {
        slug: 'is-hormone-therapy-safe-for-men-over-40',
        title: 'Is Hormone Therapy Safe? What Every Man Over 40 Should Know',
        category: 'Hormone Health',
        author: 'Dr. Sarah Jenkins',
        authorRole: 'Medical Director',
        authorImage: '/images/placeholder-provider-1.jpg',
        publishDate: 'February 18, 2026',
        readTime: '8 min read',
        excerpt: 'Dispelling the outdated myths surrounding Testosterone Replacement Therapy (TRT) and cardiovascular health.',
        content: '<p>Placeholder content regarding modern clinical literature on TRT, prostate health, and cardiovascular protection...</p>',
        imageSrc: '/images/services/hormone-optimization.jpg',
    },
    {
        slug: 'adare-approach-to-medical-weight-loss',
        title: 'The ADARE Approach to Medical Weight Loss (It\'s Not Just Semaglutide)',
        category: 'Longevity & Science',
        author: 'Dr. Sarah Jenkins',
        authorRole: 'Medical Director',
        authorImage: '/images/placeholder-provider-1.jpg',
        publishDate: 'February 10, 2026',
        readTime: '5 min read',
        excerpt: 'Why GLP-1 medications are only one piece of a comprehensive metabolic reset and body composition strategy.',
        content: '<p>Placeholder content on pairing GLP-1s with high-protein diets, strength training, and Emsculpt NEO...</p>',
        imageSrc: '/images/services/medical-weight-loss.jpg',
    },
    {
        slug: 'what-happens-during-your-first-visit',
        title: 'What Happens During Your First Visit to ADARE',
        category: 'ADARE Life',
        author: 'The ADARE Team',
        authorRole: 'Patient Concierge',
        authorImage: '/images/placeholder-provider-1.jpg',
        publishDate: 'February 5, 2026',
        readTime: '3 min read',
        excerpt: 'A step-by-step walkthrough of our comprehensive consultation and baseline diagnostics process.',
        content: '<p>Placeholder content walking through the clinic experience, the bloodwork process, and the personalized protocol design...</p>',
        imageSrc: '/images/aesthetics-hero-new.jpg',
    },
    {
        slug: 'peptide-therapy-explained-bpc157-cjc1295',
        title: 'Peptide Therapy Explained: BPC-157, CJC-1295, and Beyond',
        category: 'Recovery & Performance',
        author: 'Dr. Sarah Jenkins',
        authorRole: 'Medical Director',
        authorImage: '/images/placeholder-provider-1.jpg',
        publishDate: 'January 28, 2026',
        readTime: '7 min read',
        excerpt: 'Decoding the biohacking world\'s most powerful cellular signaling molecules.',
        content: '<p>Placeholder content explaining the exact mechanisms of BPC-157 for wound healing and CJC/Ipamorelin for growth hormone stimulation...</p>',
        imageSrc: '/images/services/peptide-therapy.jpg',
    },
    {
        slug: 'red-light-therapy-hype-or-science',
        title: 'Red Light Therapy: Hype or Science?',
        category: 'Recovery & Performance',
        author: 'Michael Chen, PA-C',
        authorRole: 'Lead Injector',
        authorImage: '/images/placeholder-provider-2.jpg',
        publishDate: 'January 20, 2026',
        readTime: '4 min read',
        excerpt: 'How photobiomodulation literally changes the way your mitochondria produce energy (ATP).',
        content: '<p>Placeholder content separating consumer-grade red light masks from clinical-grade full-body LED panels...</p>',
        imageSrc: '/images/services/red-light-therapy.jpg',
    },
    {
        slug: 'how-to-choose-a-medspa-in-tampa-bay',
        title: 'How to Choose a Medspa in Tampa Bay (Without Getting Burned)',
        category: 'Aesthetics Education',
        author: 'The ADARE Team',
        authorRole: 'Patient Education',
        authorImage: '/images/placeholder-provider-1.jpg',
        publishDate: 'January 12, 2026',
        readTime: '5 min read',
        excerpt: 'Red flags to look out for and questions you must ask before letting anyone inject your face.',
        content: '<p>Placeholder content on the importance of medical director oversight, avoiding groupons, and checking credentials...</p>',
        imageSrc: '/images/aesthetics-hero-new.jpg',
    },
    {
        slug: 'real-cost-of-longevity-medicine-2026',
        title: 'The Real Cost of Longevity Medicine in 2026',
        category: 'ADARE Life',
        author: 'Dr. Sarah Jenkins',
        authorRole: 'Medical Director',
        authorImage: '/images/placeholder-provider-1.jpg',
        publishDate: 'January 5, 2026',
        readTime: '6 min read',
        excerpt: 'A transparent breakdown of the financial investment required for true preventative healthcare.',
        content: '<p>Placeholder content discussing the ROI of preventative medicine versus reactive sick-care...</p>',
        imageSrc: '/images/longevity-hero-new.jpg',
    },
    {
        slug: 'hbot-for-recovery-what-athletes-need-to-know',
        title: 'Hyperbaric Oxygen Therapy for Recovery: What Athletes Need to Know',
        category: 'Recovery & Performance',
        author: 'Dr. Sarah Jenkins',
        authorRole: 'Medical Director',
        authorImage: '/images/placeholder-provider-1.jpg',
        publishDate: 'December 28, 2025',
        readTime: '5 min read',
        excerpt: 'Why elite performers are utilizing pressurized oxygen chambers to slash their recovery times.',
        content: '<p>Placeholder content on oxygen plasma saturation, lactic acid clearance, and stem cell mobilization...</p>',
        imageSrc: '/images/services/hyperbaric-man.jpg',
    }
];

export const getArticleBySlug = (slug: string) => {
    return journalArticles.find(article => article.slug === slug);
};
