'use client';

import { useState, useRef } from 'react';
import styles from './Accordion.module.css';

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className={styles.item}>
            <button
                className={styles.trigger}
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className={styles.question}>{question}</span>
                <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
                    ↓
                </span>
            </button>
            <div
                className={styles.contentWrapper}
                style={{ height: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
            >
                <div
                    className={styles.content}
                    ref={contentRef}
                    dangerouslySetInnerHTML={{ __html: answer }}
                />
            </div>
        </div>
    );
}

interface AccordionProps {
    items: Array<{ question: string; answer: string }>;
}

export default function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
    );
}
