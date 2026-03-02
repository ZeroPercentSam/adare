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
        publishDate: 'March 1, 2026',
        readTime: '8 min read',
        excerpt: 'An evidence-based look at how Nicotinamide Adenine Dinucleotide impacts cellular aging, mitochondrial function, and cognitive health.',
        content: `
            <p><strong>Nicotinamide adenine dinucleotide (NAD+)</strong> has become one of the most talked-about molecules in longevity medicine and biohacking. But separating the scientific reality from marketing hype is crucial for anyone considering this therapy.</p>
            
            <p>At ADARE, our approach is strictly evidence-based. Here is a comprehensive look at what NAD+ is, why it declines, and what the latest clinical research says about restoring it.</p>
            
            <h2>What is NAD+ and Why Does it Matter?</h2>
            <p>NAD+ is a vital coenzyme found in every living cell. It serves two primary, indispensable functions:</p>
            <ul>
                <li><strong>Cellular Energy Production (ATP):</strong> NAD+ is essential for mitochondria (the powerhouses of your cells) to convert nutrients into adenosine triphosphate (ATP), the primary energy currency of the body.</li>
                <li><strong>Cellular Repair and Defense:</strong> NAD+ is a required substrate for sirtuins (the "longevity genes" that regulate cellular health) and PARPs (enzymes that repair damaged DNA).</li>
            </ul>
            <p>Without NAD+, life ceases to exist. However, the problem isn't a lack of NAD+ in youth; it's the steep decline as we age.</p>
            
            <h2>The Age-Related NAD+ Decline</h2>
            <p>By middle age, your intracellular NAD+ levels drop significantly—often by 50% or more compared to your youth. This decline is accelerated by:</p>
            <ul>
                <li>Aging itself</li>
                <li>Metabolic stress (poor diet, alcohol consumption)</li>
                <li>Physical trauma and intense exercise</li>
                <li>Lack of sleep and circadian disruption</li>
                <li>Chronic inflammation</li>
            </ul>
            <p>As NAD+ levels fall, mitochondrial function becomes impaired, DNA repair slows down, and sirtuin activity decreases. This biochemical shift is considered a primary driver of the physical and cognitive signs of aging, including fatigue, metabolic sluggishness, and reduced resilience.</p>
            
            <h2>What the Science Says: Potential Benefits of NAD+ Restoration</h2>
            <p>Over the last decade, researchers at institutions like Harvard Medical School have demonstrated that restoring NAD+ levels in animal models can reverse certain aspects of biological aging. While human clinical trials are ongoing, the current data points to several key areas of benefit:</p>
            
            <h3>1. Enhanced Cognitive Function and Neuroprotection</h3>
            <p>The brain consumes about 20% of your body's energy, making it highly dependent on mitochondrial function and NAD+ levels. Research indicates that maintaining optimal NAD+ supports neuronal health, potentially improving focus, memory, and cognitive clarity. Some studies suggest it may also offer neuroprotective benefits, particularly in the context of neurodegenerative decline.</p>
            
            <h3>2. Improved Metabolic Health and Insulin Sensitivity</h3>
            <p>NAD+ plays a pivotal role in regulating metabolism. Clinical studies have shown that increasing NAD+ can enhance insulin sensitivity, support healthy weight management, and improve overall metabolic flexibility. By activating sirtuins, NAD+ helps the body manage energy more efficiently.</p>
            
            <h3>3. Cardiovascular Support</h3>
            <p>Age-related vascular aging is a major health concern. Studies suggest that restoring NAD+ can improve endothelial function (the lining of the blood vessels), reduce oxidative stress markers, and support overall cardiovascular health by promoting better blood flow and vascular elasticity.</p>
            
            <h3>4. Accelerated Muscle Recovery and Energy</h3>
            <p>Athletes and individuals recovering from intense physical exertion often utilize NAD+ therapy to speed up recovery. By boosting ATP production, NAD+ helps muscles repair faster and reduces the fatigue associated with intense training regimens.</p>
            
            <h2>Methods of Delivery: Precursors vs. IV Therapy</h2>
            <p>Not all NAD+ therapies are created equal. The molecule itself is large and notoriously difficult to absorb effectively through digestion. The two primary methods for increasing NAD+ are oral precursors and intravenous (IV) therapy.</p>
            
            <h3>Oral Precursors (NR and NMN)</h3>
            <p>Nicotinamide Riboside (NR) and Nicotinamide Mononucleotide (NMN) are the building blocks of NAD+. These oral supplements are widely studied and have been proven to safely raise blood NAD+ levels in human trials. They are an excellent foundation for daily maintenance and long-term cellular support.</p>
            
            <h3>NAD+ IV Therapy</h3>
            <p>Intravenous NAD+ therapy bypasses the digestive system entirely, delivering the coenzyme directly into the bloodstream. While large-scale clinical trials on IV NAD+ are still maturing compared to oral precursors, it is widely used in clinical settings for its rapid effects on energy, mental clarity, and post-viral recovery. Because IV delivery can cross the blood-brain barrier more effectively in some cases, it is frequently chosen by patients seeking acute cognitive or systemic boosts.</p>
            
            <h2>The ADARE Approach to NAD+ Optimization</h2>
            <p>At ADARE, we do not believe in a one-size-fits-all approach to longevity. Before recommending NAD+ therapy, we consider your baseline health, metabolic markers, and specific goals. A comprehensive strategy may include:</p>
            <ul>
                <li><strong>Lifestyle Interventions:</strong> Optimizing sleep, implementing strategic caloric restriction or intermittent fasting, and exercise—all of which naturally stimulate NAD+ production.</li>
                <li><strong>Targeted Supplementation:</strong> Utilizing high-quality, clinically validated oral precursors to maintain elevated baseline levels.</li>
                <li><strong>Clinical Therapeutics:</strong> Deploying NAD+ IV therapy or injections for rapid replenishment, recovery phases, or acute performance optimization.</li>
            </ul>
            
            <p>Science is clear that maintaining robust NAD+ levels is foundational to healthy aging. By combining advanced clinical therapies with foundational lifestyle habits, we can optimize mitochondrial health and push back against the standard timeline of cellular decline.</p>
        `,
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
