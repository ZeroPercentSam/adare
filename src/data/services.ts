export interface ServiceOption {
    name: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface PairWithService {
    name: string;
    slug: string;
    categorySlug: string;
}

export interface ServiceDetail {
    slug: string;
    name: string;
    tagline: string;
    overview: string;
    bestFor: string[];
    expectations: string[];
    options?: ServiceOption[];
    resultsAndTiming: string;
    pairWith: PairWithService[];
    faqs: FaqItem[];
    bookingUrl: string;
    metaTitle: string;
    metaDescription: string;
}

export interface ServiceCategory {
    slug: string;
    name: string;
    tagline: string;
    intro: string;
    services: ServiceDetail[];
    categoryBookingUrl: string;
    imageSrc: string;
    metaTitle: string;
    metaDescription: string;
}

// Full Centralized Data
export const servicesData: ServiceCategory[] = [
    {
        slug: 'advanced-aesthetics',
        name: 'Advanced Aesthetics',
        tagline: 'Refinement without overcorrection.',
        intro: 'Aesthetics at ADARE is designed for structure, balance, and skin health. Every plan is intentional.',
        categoryBookingUrl: '/book?type=aesthetics',
        imageSrc: '/images/aesthetics-hero.webp',
        metaTitle: 'Advanced Aesthetics · ADARE Tampa Bay',
        metaDescription: 'Precision injectables, microneedling, HydraFacial, biostimulators, and hair restoration. Natural refinement designed for you.',
        services: [
            {
                slug: 'neurotoxins',
                name: 'Neurotoxins',
                tagline: 'Softened lines. Preserved expression.',
                overview: 'Neurotoxins relax targeted muscles to soften expression lines while maintaining a natural look. Treatments are quick, controlled, and tailored to your anatomy.',
                bestFor: ['Forehead lines', 'Frown lines', "Crow's feet", 'Brow positioning', 'Preventative aging', 'Facial balancing'],
                expectations: [
                    'Consultation and facial mapping',
                    'Precise injection plan',
                    'Aftercare guidance'
                ],
                resultsAndTiming: 'Initial change in 3–5 days. Full result at 10–14 days. Maintenance typically every 3–4 months.',
                pairWith: [
                    { name: 'Dermal Fillers', slug: 'dermal-fillers', categorySlug: 'advanced-aesthetics' },
                    { name: 'Biostimulators', slug: 'biostimulators', categorySlug: 'advanced-aesthetics' },
                    { name: 'Facials', slug: 'facials', categorySlug: 'advanced-aesthetics' }
                ],
                faqs: [
                    { question: 'Will I look frozen?', answer: 'No. Our goal is to preserve natural movement while softening lines. We use precise dosing tailored to your anatomy.' },
                    { question: 'Is there downtime?', answer: 'Most clients return to normal activities immediately. We advise against strenuous exercise or lying down for a few hours post-treatment.' },
                    { question: 'When will I see results?', answer: 'You will typically start noticing softening in 3-5 days, with full results settling in at 10-14 days.' },
                    { question: 'How often do I need treatments?', answer: 'Maintenance is generally recommended every 3-4 months based on how your body metabolizes the neurotoxin.' }
                ],
                bookingUrl: '/book?type=aesthetics-neurotoxins',
                metaTitle: 'Neurotoxins · Botox Tampa Bay · ADARE',
                metaDescription: 'Expert neurotoxin treatments to soften expression lines while preserving natural movement. Book your consultation.'
            },
            {
                slug: 'dermal-fillers',
                name: 'Dermal Fillers',
                tagline: 'Structure, symmetry, definition.',
                overview: 'Dermal fillers restore volume and refine facial proportions using hyaluronic acid. The goal is balanced enhancement that still looks like you.',
                bestFor: ['Cheek support', 'Lip hydration and shape', 'Jawline definition', 'Chin balance', 'Under-eye support (depending on candidacy)'],
                expectations: [
                    'Facial assessment and planning',
                    'Treatment and shaping',
                    'Aftercare and follow-up plan'
                ],
                resultsAndTiming: 'Immediate improvement with refinement over 1–2 weeks.',
                pairWith: [
                    { name: 'Neurotoxins', slug: 'neurotoxins', categorySlug: 'advanced-aesthetics' },
                    { name: 'Biostimulators', slug: 'biostimulators', categorySlug: 'advanced-aesthetics' },
                    { name: 'Microneedling', slug: 'microneedling', categorySlug: 'advanced-aesthetics' }
                ],
                faqs: [
                    { question: 'How long do fillers last?', answer: 'Depending on the product used and the area treated, results can last anywhere from 6 to 18 months.' },
                    { question: 'Will it look obvious?', answer: 'Our philosophy is "refinement without overcorrection." Enhancements are designed to look naturally supportive to your structure.' },
                    { question: 'Is the procedure uncomfortable?', answer: 'We ensure maximum comfort through topical numbing and using fillers formulated with lidocaine.' }
                ],
                bookingUrl: '/book?type=aesthetics-fillers',
                metaTitle: 'Dermal Fillers · Tampa Bay · ADARE',
                metaDescription: 'Hyaluronic acid fillers for cheek support, lip hydration, jawline definition, and balanced facial enhancement.'
            },
            {
                slug: 'biostimulators',
                name: 'Biostimulators',
                tagline: 'Collagen built over time.',
                overview: 'Biostimulators support collagen production for structural improvement that evolves gradually. Ideal for clients who want long-term firmness and definition.',
                bestFor: ['Skin laxity', 'Loss of facial structure', 'Collagen support', 'Lower face and jawline support'],
                expectations: [
                    'Consultation and treatment plan',
                    'Injection session',
                    'Follow-up for staging if needed'
                ],
                resultsAndTiming: 'Results build over weeks to months. Best outcomes typically appear between 3–6 months.',
                pairWith: [
                    { name: 'Neurotoxins', slug: 'neurotoxins', categorySlug: 'advanced-aesthetics' },
                    { name: 'Microneedling', slug: 'microneedling', categorySlug: 'advanced-aesthetics' },
                    { name: 'Red Light Therapy', slug: 'red-light-therapy', categorySlug: 'recovery-performance' }
                ],
                faqs: [
                    { question: 'What is the difference between fillers and biostimulators?', answer: 'Fillers provide immediate volume using hyaluronic acid, while biostimulators trigger your body to produce its own collagen over several months.' },
                    { question: 'How many sessions will I need?', answer: 'Treatment plans are customized, but most clients require 2-3 sessions spaced over a few months to achieve foundational results.' },
                    { question: 'Can it be combined with other aesthetics?', answer: 'Yes, biostimulators pair exceptionally well with tox and skin therapies for a comprehensive approach to aging.' }
                ],
                bookingUrl: '/book?type=aesthetics-biostimulators',
                metaTitle: 'Biostimulators · Collagen Therapy · ADARE',
                metaDescription: 'Biostimulator treatments to support collagen production for long-term facial structure and skin firmness.'
            },
            {
                slug: 'microneedling',
                name: 'Microneedling',
                tagline: 'Texture refined. Tone rebuilt.',
                overview: 'Microneedling stimulates collagen and improves skin quality through controlled microchannels. Add exosomes when a regenerative approach is preferred.',
                options: [{ name: 'Microneedling' }, { name: 'Microneedling with Exosomes' }],
                bestFor: ['Acne scarring', 'Texture irregularities', 'Fine lines', 'Enlarged pores', 'Mild laxity', 'Uneven tone'],
                expectations: [
                    'Skin prep and numbing',
                    'Treatment session',
                    'Post-care regimen'
                ],
                resultsAndTiming: 'Glow within days. Collagen remodeling continues for weeks. A series is typically recommended.',
                pairWith: [
                    { name: 'Facials', slug: 'facials', categorySlug: 'advanced-aesthetics' },
                    { name: 'Biostimulators', slug: 'biostimulators', categorySlug: 'advanced-aesthetics' },
                    { name: 'Red Light Therapy', slug: 'red-light-therapy', categorySlug: 'recovery-performance' }
                ],
                faqs: [
                    { question: 'What are exosomes and why are they added?', answer: 'Exosomes are cellular signaling molecules that dramatically accelerate tissue repair, significantly reducing downtime and enhancing collagen production.' },
                    { question: 'How much downtime should I expect?', answer: 'Expect 24-48 hours of redness (similar to a mild sunburn). With exosomes, redness resolves much faster.' },
                    { question: 'Is numbering provided?', answer: 'Yes, we apply a medical-grade topical numbing cream before the procedure to ensure comfort.' }
                ],
                bookingUrl: '/book?type=aesthetics-microneedling',
                metaTitle: 'Microneedling · ADARE Tampa Bay',
                metaDescription: 'Microneedling with optional exosomes to refine texture, reduce scarring, and rebuild skin tone.'
            },
            {
                slug: 'facials',
                name: 'Facials (HydraFacial)',
                tagline: 'Clean, hydrated, clinically polished.',
                overview: 'HydraFacial combines exfoliation, extraction, and infusion for immediate glow and long-term skin maintenance.',
                options: [{ name: 'HydraFacial Classic' }, { name: 'HydraFacial Platinum' }],
                bestFor: ['Congestion', 'Dullness', 'Dehydration', 'Maintenance between treatments', 'Pre-event skin prep'],
                expectations: [
                    'Skin cleanse',
                    'Extraction & Infusion',
                    'Finishing serums'
                ],
                resultsAndTiming: 'Immediate radiance. Best as monthly maintenance.',
                pairWith: [
                    { name: 'Neurotoxins', slug: 'neurotoxins', categorySlug: 'advanced-aesthetics' },
                    { name: 'Microneedling', slug: 'microneedling', categorySlug: 'advanced-aesthetics' }
                ],
                faqs: [
                    { question: 'How often should I get a HydraFacial?', answer: 'We recommend monthly treatments for optimal skin health and continuous cellular turnover.' },
                    { question: 'Can I get this before an event?', answer: 'Absolutely. It provides an immediate, luminous glow with zero downtime, making it perfect for event prep.' }
                ],
                bookingUrl: '/book?type=aesthetics-hydrafacial',
                metaTitle: 'HydraFacial · Clinical Facials · ADARE',
                metaDescription: 'HydraFacial Classic and Platinum treatments for deep exfoliation, extraction, and hydration at ADARE Tampa Bay.'
            },
            {
                slug: 'hair-restoration',
                name: 'Hair Restoration',
                tagline: 'Support for density and scalp health.',
                overview: 'Hair restoration at ADARE is designed to support follicle function and scalp environment. Your plan is based on goals, history, and candidacy.',
                bestFor: ['Early thinning', 'Pattern shedding', 'Postpartum shedding', 'Scalp health support'],
                expectations: [
                    'Consultation and scalp review',
                    'Treatment session',
                    'Program guidance and follow-up timing'
                ],
                resultsAndTiming: 'Gradual change over 3–6 months. Best outcomes follow a structured series.',
                pairWith: [
                    { name: 'Hormone Optimization', slug: 'hormone-optimization', categorySlug: 'longevity-metabolic-wellness' },
                    { name: 'Peptide Therapy', slug: 'peptide-therapy', categorySlug: 'longevity-metabolic-wellness' },
                    { name: 'Red Light Therapy', slug: 'red-light-therapy', categorySlug: 'recovery-performance' }
                ],
                faqs: [
                    { question: 'What therapies are used?', answer: 'We utilize a combination of regenerative serums, exosomes, and microneedling protocols tailored to target follicle stimulation.' },
                    { question: 'Is it guaranteed to work?', answer: 'Results vary based on the underlying cause of thinning. We assess candidacy thoroughly to ensure realistic expectations.' }
                ],
                bookingUrl: '/book?type=aesthetics-hair',
                metaTitle: 'Hair Restoration · ADARE Tampa Bay',
                metaDescription: 'Hair restoration treatments for density support, scalp health, and follicle function at ADARE.'
            },
        ],
    },
    {
        slug: 'longevity-metabolic-wellness',
        name: 'Longevity & Metabolic Wellness',
        tagline: 'Inside-out optimization for energy, clarity, and longevity.',
        intro: 'Comprehensive lab-guided hormone therapy, weight loss, peptide, and NAD+ programs built for peak performance.',
        categoryBookingUrl: '/book?type=wellness',
        imageSrc: '/images/longevity-hero.webp',
        metaTitle: 'Longevity & Metabolic Wellness · ADARE',
        metaDescription: 'Lab-guided hormone optimization, medical weight loss, peptide therapy, and NAD+ programs built for peak performance.',
        services: [
            {
                slug: 'hormone-optimization',
                name: 'Hormone Optimization',
                tagline: 'Balance that changes everything.',
                overview: 'Hormones influence energy, sleep, mood, metabolism, and body composition. We begin with labs and build a personalized plan from your results.',
                bestFor: ['Fatigue', 'Brain fog', 'Sleep disruption', 'Low libido', 'Weight changes', 'Mood instability'],
                expectations: [
                    'Comprehensive intake',
                    'Lab review',
                    'Personalized protocol and monitoring'
                ],
                resultsAndTiming: 'Improvements often begin within weeks, full optimization follows a carefully monitored protocol over months.',
                pairWith: [
                    { name: 'Medical Weight Loss', slug: 'medical-weight-loss', categorySlug: 'longevity-metabolic-wellness' },
                    { name: 'Peptide Therapy', slug: 'peptide-therapy', categorySlug: 'longevity-metabolic-wellness' },
                    { name: 'IV Therapy', slug: 'iv-therapy', categorySlug: 'recovery-performance' }
                ],
                faqs: [
                    { question: 'Are bioidentical hormones used?', answer: 'Yes, we prioritize bioidentical hormones for safe and natural metabolic alignment across all protocols.' },
                    { question: 'Do I need to do bloodwork first?', answer: 'Extensive laboratory testing is required before initiating therapy to understand your complete metabolic panel.' },
                    { question: 'How frequent are follow-ups?', answer: 'Monitoring is highly structured. Labs are re-checked routinely to dial in your protocol.' }
                ],
                bookingUrl: '/book?type=wellness-hormones',
                metaTitle: 'Hormone Optimization · ADARE Tampa Bay',
                metaDescription: 'Comprehensive lab-guided hormone therapy for energy, sleep, mood, metabolism, and body composition.'
            },
            {
                slug: 'medical-weight-loss',
                name: 'Medical Weight Loss',
                tagline: 'A plan for sustainable change.',
                overview: 'Medical weight loss supports appetite regulation and metabolic health. Programs are structured, monitored, and paired with lifestyle support when appropriate.',
                options: [{ name: 'Semaglutide' }, { name: 'Tirzepatide' }, { name: 'Microdosing options' }],
                bestFor: ['Appetite regulation', 'Metabolic health', 'Sustainable fat loss', 'Insulin support'],
                expectations: [
                    'Clinical intake and labs',
                    'Protocol initiation and education',
                    'Continuous monitoring'
                ],
                resultsAndTiming: 'Appetite changes immediately, steady sustainable weight loss over months.',
                pairWith: [
                    { name: 'Emsculpt NEO', slug: 'emsculpt-neo', categorySlug: 'body-contouring' },
                    { name: 'Hormone Optimization', slug: 'hormone-optimization', categorySlug: 'longevity-metabolic-wellness' },
                    { name: 'Peptide Therapy', slug: 'peptide-therapy', categorySlug: 'longevity-metabolic-wellness' }
                ],
                faqs: [
                    { question: 'Are there side effects?', answer: 'Potential side effects such as nausea are minimized by our structured titration protocols and clinical oversight.' },
                    { question: 'Is this covered by insurance?', answer: 'We are a concierge medical practice and do not process insurance. We focus solely on optimized outcomes.' }
                ],
                bookingUrl: '/book?type=wellness-weightloss',
                metaTitle: 'Medical Weight Loss · Semaglutide · ADARE',
                metaDescription: 'Structured medical weight loss programs including semaglutide and tirzepatide with clinical monitoring.'
            },
            {
                slug: 'peptide-therapy',
                name: 'Peptide Therapy',
                tagline: 'Cellular signaling, clinically guided.',
                overview: 'Peptides are signaling molecules that support recovery, metabolism, and resilience. Programs are lab-guided and structured in cycles.',
                options: [{ name: 'Single peptide' }, { name: '2-peptide stack' }, { name: '3–4 peptide stack' }],
                bestFor: ['Recovery', 'Metabolic support', 'Sleep optimization', 'Cellular resilience', 'Immune support'],
                expectations: [
                    'Consultation on goals',
                    'Custom peptide protocol',
                    'Program cycling guidance'
                ],
                resultsAndTiming: 'Most peptide therapies run in 1-3 month cycles, with gradual systemic change.',
                pairWith: [
                    { name: 'NAD+ Therapy', slug: 'nad-therapy', categorySlug: 'longevity-metabolic-wellness' },
                    { name: 'Red Light Therapy', slug: 'red-light-therapy', categorySlug: 'recovery-performance' },
                    { name: 'Hormone Optimization', slug: 'hormone-optimization', categorySlug: 'longevity-metabolic-wellness' }
                ],
                faqs: [
                    { question: 'How are peptides administered?', answer: 'Most peptides are administered via a tiny subcutaneous injection, though some are available orally or topically.' },
                    { question: 'Is it safe?', answer: 'We use high-purity peptides synthesized by specialized compounding pharmacies, ensuring safety and efficacy.' }
                ],
                bookingUrl: '/book?type=wellness-peptides',
                metaTitle: 'Peptide Therapy · ADARE Tampa Bay',
                metaDescription: 'Clinically guided peptide protocols to support recovery, metabolism, and cellular resilience.'
            },
            {
                slug: 'nad-therapy',
                name: 'NAD+ Therapy',
                tagline: 'Mitochondrial support for energy and clarity.',
                overview: 'NAD+ supports cellular energy and repair pathways. Choose IV or IM based on goals, timing, and tolerance.',
                options: [{ name: 'NAD+ IV' }, { name: 'NAD+ IM' }],
                bestFor: ['Mitochondrial support', 'Energy deficits', 'Mental clarity', 'Cellular repair'],
                expectations: [
                    'Protocol discussion',
                    'IV or IM administration',
                    'Energy tracking'
                ],
                resultsAndTiming: 'Immediate clarity and sustained energy following a protocol series.',
                pairWith: [
                    { name: 'IV Therapy', slug: 'iv-therapy', categorySlug: 'recovery-performance' },
                    { name: 'Peptide Therapy', slug: 'peptide-therapy', categorySlug: 'longevity-metabolic-wellness' }
                ],
                faqs: [
                    { question: 'What does the IV feel like?', answer: 'A high-dose NAD+ IV can cause a flushing or chest-tightening sensation. We mitigate this by controlling the drip rate.' },
                    { question: 'How long does an IV take?', answer: 'An NAD+ IV takes between 2 to 4 hours depending on the dosage and your tolerance.' }
                ],
                bookingUrl: '/book?type=wellness-nad',
                metaTitle: 'NAD+ Therapy · IV and IM · ADARE',
                metaDescription: 'NAD+ IV and IM therapy for mitochondrial support, cellular energy, and mental clarity at ADARE.'
            },
        ]
    },
    {
        slug: 'recovery-performance',
        name: 'Recovery & Performance',
        tagline: 'Recover faster. Perform longer.',
        intro: 'Hyperbaric oxygen, red light, and IV therapy to accelerate recovery and resilience.',
        categoryBookingUrl: '/book?type=recovery',
        imageSrc: '/images/recovery-hero.webp',
        metaTitle: 'Recovery & Performance · ADARE Tampa Bay',
        metaDescription: 'IV therapy, red light therapy, and hyperbaric oxygen therapy for accelerated recovery and resilience.',
        services: [
            {
                slug: 'iv-therapy',
                name: 'IV Therapy',
                tagline: 'Targeted support, delivered efficiently.',
                overview: 'IV therapy delivers hydration and nutrients directly for faster replenishment. Options range from classic wellness blends to performance-focused support.',
                options: [{ name: 'Myers Cocktail' }, { name: 'Glutathione' }, { name: 'Custom IV Blends' }],
                bestFor: ['Dehydration', 'Immune support', 'Recovery', 'Nutrient replenishment'],
                expectations: [
                    'Consultation of needs',
                    'Comfortable IV infusion',
                    'Immediate rehydration'
                ],
                resultsAndTiming: 'Immediate restorative effects post-infusion.',
                pairWith: [
                    { name: 'NAD+ Therapy', slug: 'nad-therapy', categorySlug: 'longevity-metabolic-wellness' },
                    { name: 'Red Light Therapy', slug: 'red-light-therapy', categorySlug: 'recovery-performance' }
                ],
                faqs: [
                    { question: 'How long does it take?', answer: 'A standard IV drip takes about 45-60 minutes in our comfortable lounge.' },
                    { question: 'Can I customize my IV?', answer: 'Yes, our providers can formulate custom blends based on your specific recovery or immune goals.' }
                ],
                bookingUrl: '/book?type=recovery-iv',
                metaTitle: 'IV Therapy · ADARE Tampa Bay',
                metaDescription: 'Targeted IV therapy including Myers Cocktail, glutathione, and custom blends for hydration and recovery.'
            },
            {
                slug: 'red-light-therapy',
                name: 'Red Light Therapy',
                tagline: 'Recovery, inflammation support, skin vitality.',
                overview: 'Red light therapy supports cellular function through photobiomodulation. It is often used for recovery, skin support, and inflammation reduction.',
                bestFor: ['Muscle recovery', 'Joint inflammation', 'Skin vitality', 'Circadian rhythm support'],
                expectations: [
                    'Brief preparation',
                    'Relaxing light session',
                    'No downtime'
                ],
                resultsAndTiming: 'Cumulative benefits over regular weekly sessions.',
                pairWith: [
                    { name: 'Hyperbaric Oxygen Therapy', slug: 'hyperbaric-oxygen-therapy', categorySlug: 'recovery-performance' },
                    { name: 'IV Therapy', slug: 'iv-therapy', categorySlug: 'recovery-performance' },
                    { name: 'Peptide Therapy', slug: 'peptide-therapy', categorySlug: 'longevity-metabolic-wellness' }
                ],
                faqs: [
                    { question: 'How often should I use it?', answer: 'For optimal recovery and cellular benefits, 2-3 sessions per week are recommended.' },
                    { question: 'Does it get hot?', answer: 'The therapy uses medical-grade LEDs that generate minimal heat. The sensation is very comfortable and relaxing.' }
                ],
                bookingUrl: '/book?type=recovery-redlight',
                metaTitle: 'Red Light Therapy · ADARE Tampa Bay',
                metaDescription: 'Photobiomodulation therapy for recovery, skin vitality, and inflammation support at ADARE.'
            },
            {
                slug: 'hyperbaric-oxygen-therapy',
                name: 'Hyperbaric Oxygen Therapy',
                tagline: 'Oxygen at pressure for repair and recovery.',
                overview: 'Hyperbaric oxygen therapy supports recovery by increasing oxygen delivery under pressure. Often used for inflammation support, tissue repair, and performance recovery.',
                bestFor: ['Tissue repair', 'Inflammation reduction', 'Performance recovery', 'Post-procedure healing'],
                expectations: [
                    'Chamber orientation',
                    'Compression and relaxation',
                    'Decompression'
                ],
                resultsAndTiming: 'Progressive benefits. Typically recommended in a structured series.',
                pairWith: [
                    { name: 'Red Light Therapy', slug: 'red-light-therapy', categorySlug: 'recovery-performance' },
                    { name: 'IV Therapy', slug: 'iv-therapy', categorySlug: 'recovery-performance' }
                ],
                faqs: [
                    { question: 'Is it claustrophobic?', answer: 'Our chambers are spacious and modern, designed to ensure maximum comfort. You can relax, sleep, or listen to music.' },
                    { question: 'Will my ears pop?', answer: 'Yes, similar to ascending or descending in an airplane, you will need to clear your ears during pressurization.' }
                ],
                bookingUrl: '/book?type=recovery-hbot',
                metaTitle: 'Hyperbaric Oxygen Therapy · HBOT · ADARE',
                metaDescription: 'Hyperbaric oxygen therapy for tissue repair, inflammation reduction, and performance recovery.'
            },
        ]
    },
    {
        slug: 'body-contouring',
        name: 'Body Contouring',
        tagline: 'Sculpted outcomes, measurable change.',
        intro: 'Emsculpt NEO for simultaneous muscle building and fat reduction with no downtime.',
        categoryBookingUrl: '/book?type=body',
        imageSrc: '/images/body-hero.webp',
        metaTitle: 'Body Contouring · Emsculpt NEO · ADARE',
        metaDescription: 'Emsculpt NEO for muscle building and fat reduction with measurable, no-downtime results at ADARE Tampa Bay.',
        services: [
            {
                slug: 'emsculpt-neo',
                name: 'Emsculpt NEO',
                tagline: 'Muscle and fat outcomes without downtime.',
                overview: 'Emsculpt NEO combines electromagnetic stimulation and radiofrequency to build muscle and reduce fat. Treatment plans are structured for measurable progress.',
                options: [{ name: 'Single session' }, { name: '6 sessions' }, { name: '12 sessions' }],
                bestFor: ['Abdomen core definition', 'Glute lifting', 'Arm toning', 'Thigh sculpting', 'Postpartum recovery'],
                expectations: [
                    'Applicator placement',
                    '30-minute intense contraction cycle',
                    'Immediate return to daily activities'
                ],
                resultsAndTiming: 'Initial changes felt immediately. Visual changes peak around 12 weeks after the last session.',
                pairWith: [
                    { name: 'Medical Weight Loss', slug: 'medical-weight-loss', categorySlug: 'longevity-metabolic-wellness' },
                    { name: 'Peptide Therapy', slug: 'peptide-therapy', categorySlug: 'longevity-metabolic-wellness' },
                    { name: 'Red Light Therapy', slug: 'red-light-therapy', categorySlug: 'recovery-performance' }
                ],
                faqs: [
                    { question: 'Does it hurt?', answer: 'It feels like an intense workout with an initial warming sensation. It is highly tolerable and adjusted to your comfort level.' },
                    { question: 'How many sessions are required?', answer: 'A standard protocol involves 4-6 sessions, performed once a week.' },
                    { question: 'Is the fat reduction permanent?', answer: 'Yes, the fat cells that are destroyed are permanently removed by the body.' }
                ],
                bookingUrl: '/book?type=body-emsculpt',
                metaTitle: 'Emsculpt NEO · Body Contouring · ADARE',
                metaDescription: 'Emsculpt NEO treatments for simultaneous muscle building and fat reduction with measurable results.'
            },
        ]
    }
];

// Helper functions for easy access
export const getServiceCategory = (slug: string) => {
    return servicesData.find(cat => cat.slug === slug);
};

export const getServiceDetail = (categorySlug: string, serviceSlug: string) => {
    const category = getServiceCategory(categorySlug);
    return category?.services.find(srv => srv.slug === serviceSlug);
};
