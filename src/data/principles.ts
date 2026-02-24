export interface Principle {
    id: string;
    slug: string;
    title: string;
    shortTitle: string;
    heroImage: string;
    tagline: string;
    description: string;
    detailParagraphs: string[];
    faqs: { question: string; answer: string }[];
}

export const principles: Principle[] = [
    {
        id: "provider-led-care",
        slug: "provider-led-care",
        title: "Provider-Led Care",
        shortTitle: "Provider-Led Care",
        heroImage: "/images/longevity-hero.png",
        tagline: "Expertise at every step of your optimization journey.",
        description: "At ADARE, your care is always directed by experienced medical professionals. We do not delegate critical aesthetic or metabolic decisions. You have direct access to our top providers who understand the nuances of evidence-based longevity.",
        detailParagraphs: [
            "We believe that true optimization cannot be achieved through a one-size-fits-all approach or delegated to untrained staff. From your initial consultation to your ongoing protocol adjustments, an experienced provider is at the helm.",
            "This ensures that not only are your results exceptional, but your safety and long-term health are never compromised. Our providers utilize the latest clinical data to inform their practice, ensuring you receive care that is both innovative and rigorously vetted."
        ],
        faqs: [
            {
                question: "Will I see a doctor or nurse practitioner at every visit?",
                answer: "Yes, your core treatment plan and key interventions are always administered or directly overseen by our advanced medical providers."
            },
            {
                question: "How do your providers stay updated on longevity science?",
                answer: "Our team regularly attends leading longevity and aesthetic medical conferences, and we continuously integrate peer-reviewed research into our clinical protocols."
            }
        ]
    },
    {
        id: "lab-first-decision-making",
        slug: "lab-first-decision-making",
        title: "Lab-First Decision Making",
        shortTitle: "Lab-First Decisions",
        heroImage: "/images/about-hero.png",
        tagline: "We don't guess. We test.",
        description: "Your biology is unique. That’s why our longevity and optimization protocols begin with comprehensive advanced biomarker testing. By understanding your precise metabolic, hormonal, and cellular state, we craft interventions that actually work.",
        detailParagraphs: [
            "Standard blood panels often misstate the full picture of your health, focusing only on disease rather than optimization. We utilize extensive specialty panels that look at advanced lipid markers, deep hormone cascades, inflammatory cytokines, and metabolic function.",
            "This empirical approach removes the guesswork. When we prescribe a peptide, adjust a hormone, or recommend a supplement, it is explicitly targeted to address a deficiency or optimize a pathway identified in your lab results."
        ],
        faqs: [
            {
                question: "How often will I need to get bloodwork done?",
                answer: "Depending on your specific protocol, we typically run comprehensive panels every 3 to 6 months to track progress and adjust your plan."
            },
            {
                question: "Can I use external labs I've recently had done?",
                answer: "We review all past medical data, but frequently require our specific advanced panels to ensure we have the necessary depth of information."
            }
        ]
    },
    {
        id: "personalized-protocols",
        slug: "personalized-protocols",
        title: "Personalized Protocols",
        shortTitle: "Personalized Protocols",
        heroImage: "/images/for-women-hero.png",
        tagline: "Tailored interventions for your exact biology.",
        description: "There are no templates at ADARE. Every injectable, every hormone treatment, and every peptide protocol is specifically designed for your anatomy, your goals, and your unique cellular makeup.",
        detailParagraphs: [
            "Whether you are seeking subtle aesthetic refinement or massive shifts in your daily energy and recovery, your roadmap is uniquely yours. We combine the data from your lab results with a deep understanding of your lifestyle to build a comprehensive plan.",
            "Your protocol evolves with you. As your body changes and your markers improve, we continuously refine your treatments to match your new baseline."
        ],
        faqs: [
            {
                question: "How long does it take to develop my personalized protocol?",
                answer: "Once we receive your comprehensive lab results (usually 10-14 days), your provider will review them and present your personalized protocol at your next consultation."
            },
            {
                question: "Are aesthetics and internal wellness combined in my protocol?",
                answer: "Absolutely. We view aesthetics and internal health as inherently linked, and your protocol will address both sides to achieve optimal vitality and appearance."
            }
        ]
    },
    {
        id: "high-touch-experience",
        slug: "high-touch-experience",
        title: "High-Touch Experience",
        shortTitle: "High-Touch Experience",
        heroImage: "/images/membership-hero.png",
        tagline: "Luxury and clinical care, seamlessly integrated.",
        description: "From the moment you step into our facility, you will experience a level of service and aesthetic beauty rarely found in medicine. We believe that your environment profoundly impacts your healing and optimization.",
        detailParagraphs: [
            "Every detail of the ADARE experience has been meticulously designed. From our private treatment suites to our curated recovery spaces, we provide a sanctuary where clinical excellence meets luxury hospitality.",
            "Our concierge approach means you are never left navigating your health journey alone. We provide proactive follow-ups, seamless booking, and direct access to your care team."
        ],
        faqs: [
            {
                question: "What makes the ADARE facility different?",
                answer: "We have stripped away the sterile, anxious feeling of traditional clinics and replaced it with a sophisticated, calming environment designed for ultimate comfort."
            },
            {
                question: "How accessible is the team between appointments?",
                answer: "Members enjoy dedicated concierge communication channels, ensuring prompt answers to any protocol or scheduling questions."
            }
        ]
    },
    {
        id: "ongoing-optimization",
        slug: "ongoing-optimization",
        title: "Ongoing Optimization, Not One-Time Treatments",
        shortTitle: "Ongoing Optimization",
        heroImage: "/images/for-men-hero.png",
        tagline: "Health is a continuum. So is our care.",
        description: "We reject the transactional nature of modern aesthetics and medicine. True anti-aging and peak performance are never achieved in a single visit. They are the result of consistent, compounding interventions over time.",
        detailParagraphs: [
            "Our membership model is explicitly designed to foster this long-term relationship. By committing to the process, you allow our providers to precisely track your aging velocity and intervene proactively.",
            "Whether it's maintaining your aesthetic results with scheduled touch-ups or keeping your hormones perfectly balanced year-round, our focus is always on your trajectory over the next decade, not just the next month."
        ],
        faqs: [
            {
                question: "Why do you recommend memberships?",
                answer: "Memberships align our goals with yours: long-term, compounding results rather than episodic, reactive treatments. It allows us to plan your care proactively."
            },
            {
                question: "Do I have to be a member to be a patient?",
                answer: "While we highly encourage membership for the best outcomes and exclusive access, we do accommodate non-members for certain specific services."
            }
        ]
    }
];
