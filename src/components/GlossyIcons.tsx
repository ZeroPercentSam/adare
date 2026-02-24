import React from 'react';

// Shared Glossy Gradient Definition
const GlossyDefs = () => (
    <defs>
        <linearGradient id="glossyGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E6CC" />
            <stop offset="25%" stopColor="#D4C4A3" />
            <stop offset="50%" stopColor="#C9B99A" />
            <stop offset="75%" stopColor="#A39373" />
            <stop offset="100%" stopColor="#8A7A5A" />
        </linearGradient>
        <filter id="glossyShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#C9B99A" floodOpacity="0.3" />
        </filter>
    </defs>
);

const svgProps = {
    viewBox: "0 0 24 24",
    fill: "url(#glossyGold)",
    filter: "url(#glossyShadow)",
    xmlns: "http://www.w3.org/2000/svg"
};

// --- FOR MEN ICONS ---

export const IconPerformance = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} className={className} {...svgProps}>
        <GlossyDefs />
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
    </svg>
);

export const IconCognition = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} className={className} {...svgProps}>
        <GlossyDefs />
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </svg>
);

export const IconPrecision = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} className={className} {...svgProps}>
        <GlossyDefs />
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
    </svg>
);

export const IconResilience = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} className={className} {...svgProps}>
        <GlossyDefs />
        <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9v-2h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z" />
    </svg>
);

export const IconExecutive = ({ size = 32, className = '' }) => (
    <svg width={size} height={size} className={className} {...svgProps}>
        <GlossyDefs />
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
    </svg>
);

export const IconAthlete = ({ size = 32, className = '' }) => (
    <svg width={size} height={size} className={className} {...svgProps}>
        <GlossyDefs />
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43 1.43-1.43-1.43-1.43 1.43-1.43z" />
    </svg>
);

export const IconLegacy = ({ size = 32, className = '' }) => (
    <svg width={size} height={size} className={className} {...svgProps}>
        <GlossyDefs />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
    </svg>
);

// --- FOR WOMEN ICONS ---

export const IconHarmony = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} className={className} {...svgProps}>
        <GlossyDefs />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
    </svg>
);

export const IconRadiance = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} className={className} {...svgProps}>
        <GlossyDefs />
        <path d="M12 15c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0-8c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm6-5h-2v2h2V2zm-4 0h-2v2h2V2zm8 4h-2v2h2V6zM4 6H2v2h2V6zm16 4h-2v2h2v-2zM4 10H2v2h2v-2zm16 4h-2v2h2v-2zM4 14H2v2h2v-2zm12 6h-2v2h2v-2zm-4 0h-2v2h2v-2z" />
    </svg>
);

export const IconVitality = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} className={className} {...svgProps}>
        <GlossyDefs />
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </svg>
);

export const IconEmotional = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} className={className} {...svgProps}>
        <GlossyDefs />
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

export const IconPowerhouse = ({ size = 32, className = '' }) => (
    <svg width={size} height={size} className={className} {...svgProps}>
        <GlossyDefs />
        <path d="M22 6h-6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h20c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-12-2h4v2h-4V4zM2 8h20v4H2V8zm0 11v-5h20v5H2z" />
    </svg>
);

export const IconMatriarch = ({ size = 32, className = '' }) => (
    <svg width={size} height={size} className={className} {...svgProps}>
        <GlossyDefs />
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
);

export const IconAgeless = ({ size = 32, className = '' }) => (
    <svg width={size} height={size} className={className} {...svgProps}>
        <GlossyDefs />
        <path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z" />
    </svg>
);
